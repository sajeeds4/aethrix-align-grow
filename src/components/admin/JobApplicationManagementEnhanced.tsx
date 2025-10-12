import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { supabase } from "@/integrations/supabase/client";
import { 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink,
  CheckCircle,
  XCircle,
  Clock,
  Download,
  Search,
  Filter,
  Eye,
  Trash2,
  MoreVertical,
  Star,
  Send,
  ChevronUp,
  ChevronDown,
  ChevronsUpDown,
  Calendar,
  Tag,
  Users
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface JobApplication {
  id: string;
  job_listing_id: string;
  full_name: string;
  email: string;
  phone: string;
  current_position: string;
  years_of_experience: number;
  cover_letter: string;
  resume_filename?: string;
  resume_data?: string;
  status: string;
  created_at: string;
  updated_at: string;
  admin_notes: string | null;
  rating?: number;
  job_listings?: {
    title: string;
  };
}

type SortField = 'name' | 'experience' | 'date' | 'status' | 'rating';
type SortDirection = 'asc' | 'desc';

const statusColors: Record<string, string> = {
  submitted: "bg-blue-500",
  reviewing: "bg-yellow-500",
  interview: "bg-purple-500",
  rejected: "bg-red-500",
  hired: "bg-green-500",
};

const statusLabels: Record<string, string> = {
  submitted: "Submitted",
  reviewing: "Under Review",
  interview: "Interview Stage",
  rejected: "Rejected",
  hired: "Hired",
};

const emailTemplates = {
  rejection: {
    subject: "Application Update - {position}",
    body: `Dear {name},

Thank you for your interest in the {position} position at Aethrix. After careful consideration, we have decided to move forward with other candidates whose qualifications more closely match our current needs.

We appreciate the time you invested in the application process and wish you the best in your job search.

Best regards,
Aethrix Hiring Team`
  },
  interview: {
    subject: "Interview Invitation - {position}",
    body: `Dear {name},

Thank you for applying for the {position} position at Aethrix. We were impressed with your application and would like to invite you for an interview.

Please let us know your availability for the coming week, and we'll schedule a time that works for both of us.

Looking forward to speaking with you!

Best regards,
Aethrix Hiring Team`
  },
  offer: {
    subject: "Job Offer - {position}",
    body: `Dear {name},

Congratulations! We are pleased to offer you the position of {position} at Aethrix.

Please find attached the formal offer letter with details about compensation, benefits, and start date. We're excited to have you join our team!

Please respond within 5 business days to accept this offer.

Best regards,
Aethrix Hiring Team`
  }
};

export function JobApplicationManagementEnhanced() {
  const [applications, setApplications] = useState<JobApplication[]>([]);
  const [filteredApplications, setFilteredApplications] = useState<JobApplication[]>([]);
  const [displayedApplications, setDisplayedApplications] = useState<JobApplication[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedApplication, setSelectedApplication] = useState<JobApplication | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [experienceFilter, setExperienceFilter] = useState("all");
  const [ratingFilter, setRatingFilter] = useState("all");
  const [adminNotes, setAdminNotes] = useState("");
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());
  const [sortField, setSortField] = useState<SortField>('date');
  const [sortDirection, setSortDirection] = useState<SortDirection>('desc');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(25);
  const [emailDialogOpen, setEmailDialogOpen] = useState(false);
  const [emailTemplate, setEmailTemplate] = useState<'rejection' | 'interview' | 'offer'>('interview');
  const [emailSubject, setEmailSubject] = useState("");
  const [emailBody, setEmailBody] = useState("");
  const { toast } = useToast();

  useEffect(() => {
    fetchApplications();
  }, []);

  useEffect(() => {
    filterAndSortApplications();
  }, [applications, searchTerm, statusFilter, experienceFilter, ratingFilter, sortField, sortDirection]);

  useEffect(() => {
    paginateApplications();
  }, [filteredApplications, currentPage, itemsPerPage]);

  const fetchApplications = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from("job_applications")
        .select(`
          *,
          job_listings (
            title
          )
        `)
        .order("created_at", { ascending: false });

      if (error) throw error;
      setApplications(data || []);
    } catch (error) {
      console.error("Error fetching applications:", error);
      toast({
        title: "Error",
        description: "Failed to fetch job applications. Please check your database connection.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const filterAndSortApplications = () => {
    let filtered = [...applications];

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(
        (app) =>
          app.full_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          app.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
          app.job_listings?.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Status filter
    if (statusFilter !== "all") {
      filtered = filtered.filter((app) => app.status === statusFilter);
    }

    // Experience filter
    if (experienceFilter !== "all") {
      filtered = filtered.filter((app) => {
        const exp = app.years_of_experience;
        switch (experienceFilter) {
          case "0-2": return exp <= 2;
          case "3-5": return exp >= 3 && exp <= 5;
          case "5+": return exp > 5;
          default: return true;
        }
      });
    }

    // Rating filter
    if (ratingFilter !== "all") {
      const minRating = parseInt(ratingFilter);
      filtered = filtered.filter((app) => (app.rating || 0) >= minRating);
    }

    // Sorting
    filtered.sort((a, b) => {
      let comparison = 0;
      
      switch (sortField) {
        case 'name':
          comparison = `${a.first_name} ${a.last_name}`.localeCompare(`${b.first_name} ${b.last_name}`);
          break;
        case 'experience':
          comparison = a.years_of_experience - b.years_of_experience;
          break;
        case 'date':
          comparison = new Date(a.application_date).getTime() - new Date(b.application_date).getTime();
          break;
        case 'status':
          comparison = a.status.localeCompare(b.status);
          break;
        case 'rating':
          comparison = (a.rating || 0) - (b.rating || 0);
          break;
      }

      return sortDirection === 'asc' ? comparison : -comparison;
    });

    setFilteredApplications(filtered);
    setCurrentPage(1); // Reset to first page when filters change
  };

  const paginateApplications = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setDisplayedApplications(filteredApplications.slice(startIndex, endIndex));
  };

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const SortIcon = ({ field }: { field: SortField }) => {
    if (sortField !== field) return <ChevronsUpDown className="h-4 w-4 ml-1 inline" />;
    return sortDirection === 'asc' 
      ? <ChevronUp className="h-4 w-4 ml-1 inline" />
      : <ChevronDown className="h-4 w-4 ml-1 inline" />;
  };

  const updateApplicationStatus = async (id: string, newStatus: string) => {
    try {
      const { error } = await supabase
        .from("job_applications")
        .update({ status: newStatus })
        .eq("id", id);

      if (error) throw error;

      toast({
        title: "Status Updated",
        description: `Application status changed to ${statusLabels[newStatus]}`,
      });

      fetchApplications();
    } catch (error) {
      console.error("Error updating status:", error);
      toast({
        title: "Error",
        description: "Failed to update application status",
        variant: "destructive",
      });
    }
  };

  const updateRating = async (id: string, rating: number) => {
    try {
      const { error } = await supabase
        .from("job_applications")
        .update({ rating })
        .eq("id", id);

      if (error) throw error;

      toast({
        title: "Rating Updated",
        description: `Candidate rated ${rating} stars`,
      });

      fetchApplications();
    } catch (error) {
      console.error("Error updating rating:", error);
      toast({
        title: "Error",
        description: "Failed to update rating",
        variant: "destructive",
      });
    }
  };

  const saveAdminNotes = async (id: string) => {
    try {
      const { error } = await supabase
        .from("job_applications")
        .update({ admin_notes: adminNotes })
        .eq("id", id);

      if (error) throw error;

      toast({
        title: "Notes Saved",
        description: "Admin notes have been updated",
      });

      fetchApplications();
    } catch (error) {
      console.error("Error saving notes:", error);
      toast({
        title: "Error",
        description: "Failed to save notes",
        variant: "destructive",
      });
    }
  };

  const deleteApplication = async (id: string) => {
    if (!confirm("Are you sure you want to delete this application?")) return;

    try {
      const { error } = await supabase
        .from("job_applications")
        .delete()
        .eq("id", id);

      if (error) throw error;

      toast({
        title: "Application Deleted",
        description: "The application has been removed",
      });

      fetchApplications();
      setSelectedApplication(null);
    } catch (error) {
      console.error("Error deleting application:", error);
      toast({
        title: "Error",
        description: "Failed to delete application",
        variant: "destructive",
      });
    }
  };

  const handleBulkAction = async (action: 'delete' | string) => {
    if (selectedIds.size === 0) {
      toast({
        title: "No Selection",
        description: "Please select at least one application",
        variant: "destructive",
      });
      return;
    }

    if (action === 'delete') {
      if (!confirm(`Are you sure you want to delete ${selectedIds.size} application(s)?`)) return;

      try {
        const { error } = await supabase
          .from("job_applications")
          .delete()
          .in("id", Array.from(selectedIds));

        if (error) throw error;

        toast({
          title: "Bulk Delete Complete",
          description: `${selectedIds.size} application(s) deleted`,
        });

        setSelectedIds(new Set());
        fetchApplications();
      } catch (error) {
        console.error("Error bulk deleting:", error);
        toast({
          title: "Error",
          description: "Failed to delete applications",
          variant: "destructive",
        });
      }
    } else {
      // Bulk status update
      try {
        const { error } = await supabase
          .from("job_applications")
          .update({ status: action })
          .in("id", Array.from(selectedIds));

        if (error) throw error;

        toast({
          title: "Bulk Update Complete",
          description: `${selectedIds.size} application(s) updated to ${statusLabels[action]}`,
        });

        setSelectedIds(new Set());
        fetchApplications();
      } catch (error) {
        console.error("Error bulk updating:", error);
        toast({
          title: "Error",
          description: "Failed to update applications",
          variant: "destructive",
        });
      }
    }
  };

  const toggleSelectAll = () => {
    if (selectedIds.size === displayedApplications.length) {
      setSelectedIds(new Set());
    } else {
      setSelectedIds(new Set(displayedApplications.map(app => app.id)));
    }
  };

  const toggleSelect = (id: string) => {
    const newSelected = new Set(selectedIds);
    if (newSelected.has(id)) {
      newSelected.delete(id);
    } else {
      newSelected.add(id);
    }
    setSelectedIds(newSelected);
  };

  const openEmailDialog = (app: JobApplication, template: 'rejection' | 'interview' | 'offer') => {
    setSelectedApplication(app);
    setEmailTemplate(template);
    
    const templateData = emailTemplates[template];
    const name = `${app.first_name} ${app.last_name}`;
    const position = app.job_listings?.title || "the position";
    
    setEmailSubject(templateData.subject.replace('{position}', position));
    setEmailBody(templateData.body.replace('{name}', name).replace(/{position}/g, position));
    setEmailDialogOpen(true);
  };

  const sendEmail = async () => {
    if (!selectedApplication) return;

    toast({
      title: "Email Sent",
      description: `Email sent to ${selectedApplication.email}`,
    });

    // In production, integrate with email service
    console.log("Sending email:", {
      to: selectedApplication.email,
      subject: emailSubject,
      body: emailBody
    });

    setEmailDialogOpen(false);
  };

  const exportToCSV = () => {
    const headers = [
      "Name",
      "Email",
      "Phone",
      "Position",
      "Experience",
      "Status",
      "Rating",
      "Application Date",
    ];

    const rows = filteredApplications.map((app) => [
      `${app.first_name} ${app.last_name}`,
      app.email,
      app.phone,
      app.job_listings?.title || "N/A",
      `${app.years_of_experience} years`,
      statusLabels[app.status],
      app.rating || 0,
      new Date(app.application_date).toLocaleDateString(),
    ]);

    const csvContent =
      "data:text/csv;charset=utf-8," +
      [headers, ...rows].map((row) => row.join(",")).join("\n");

    const link = document.createElement("a");
    link.setAttribute("href", encodeURI(csvContent));
    link.setAttribute("download", `job_applications_${new Date().toISOString().split("T")[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    toast({
      title: "Export Complete",
      description: "Applications exported to CSV successfully",
    });
  };

  const stats = {
    total: applications.length,
    submitted: applications.filter((a) => a.status === "submitted").length,
    reviewing: applications.filter((a) => a.status === "reviewing").length,
    interview: applications.filter((a) => a.status === "interview").length,
    hired: applications.filter((a) => a.status === "hired").length,
  };

  const totalPages = Math.ceil(filteredApplications.length / itemsPerPage);

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium">Total Applications</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.total}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium">New Submissions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">{stats.submitted}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium">Under Review</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-600">{stats.reviewing}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium">In Interview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-purple-600">{stats.interview}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium">Hired</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">{stats.hired}</div>
          </CardContent>
        </Card>
      </div>

      {/* Filters and Actions */}
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <div>
              <CardTitle>Job Applications</CardTitle>
              <CardDescription>Manage and track all job applications</CardDescription>
            </div>
            {selectedIds.size > 0 && (
              <Badge variant="secondary" className="text-sm">
                {selectedIds.size} selected
              </Badge>
            )}
          </div>
        </CardHeader>
        <CardContent>
          {/* Search and Filters */}
          <div className="flex flex-col gap-4 mb-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search by name, email, or position..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-9"
                  />
                </div>
              </div>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-full md:w-[180px]">
                  <Filter className="mr-2 h-4 w-4" />
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="submitted">Submitted</SelectItem>
                  <SelectItem value="reviewing">Under Review</SelectItem>
                  <SelectItem value="interview">Interview</SelectItem>
                  <SelectItem value="rejected">Rejected</SelectItem>
                  <SelectItem value="hired">Hired</SelectItem>
                </SelectContent>
              </Select>
              <Select value={experienceFilter} onValueChange={setExperienceFilter}>
                <SelectTrigger className="w-full md:w-[180px]">
                  <SelectValue placeholder="Experience" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Experience</SelectItem>
                  <SelectItem value="0-2">0-2 years</SelectItem>
                  <SelectItem value="3-5">3-5 years</SelectItem>
                  <SelectItem value="5+">5+ years</SelectItem>
                </SelectContent>
              </Select>
              <Select value={ratingFilter} onValueChange={setRatingFilter}>
                <SelectTrigger className="w-full md:w-[180px]">
                  <Star className="mr-2 h-4 w-4" />
                  <SelectValue placeholder="Rating" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Ratings</SelectItem>
                  <SelectItem value="4">4+ Stars</SelectItem>
                  <SelectItem value="3">3+ Stars</SelectItem>
                  <SelectItem value="2">2+ Stars</SelectItem>
                  <SelectItem value="1">1+ Stars</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Bulk Actions */}
            <div className="flex flex-wrap gap-2">
              {selectedIds.size > 0 && (
                <>
                  <Button size="sm" variant="outline" onClick={() => handleBulkAction('reviewing')}>
                    <Clock className="mr-2 h-4 w-4" />
                    Mark as Reviewing
                  </Button>
                  <Button size="sm" variant="outline" onClick={() => handleBulkAction('interview')}>
                    <Users className="mr-2 h-4 w-4" />
                    Move to Interview
                  </Button>
                  <Button size="sm" variant="outline" onClick={() => handleBulkAction('rejected')}>
                    <XCircle className="mr-2 h-4 w-4" />
                    Reject
                  </Button>
                  <Button size="sm" variant="destructive" onClick={() => handleBulkAction('delete')}>
                    <Trash2 className="mr-2 h-4 w-4" />
                    Delete Selected
                  </Button>
                  <div className="flex-1" />
                </>
              )}
              <Button onClick={exportToCSV} variant="outline" size="sm">
                <Download className="mr-2 h-4 w-4" />
                Export CSV
              </Button>
            </div>
          </div>

          {loading ? (
            <div className="text-center py-8">Loading applications...</div>
          ) : filteredApplications.length === 0 ? (
            <div className="text-center py-8 text-muted-foreground">
              No applications found
            </div>
          ) : (
            <>
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[50px]">
                        <Checkbox
                          checked={selectedIds.size === displayedApplications.length && displayedApplications.length > 0}
                          onCheckedChange={toggleSelectAll}
                        />
                      </TableHead>
                      <TableHead className="cursor-pointer" onClick={() => handleSort('name')}>
                        Applicant <SortIcon field="name" />
                      </TableHead>
                      <TableHead>Position</TableHead>
                      <TableHead className="cursor-pointer" onClick={() => handleSort('experience')}>
                        Experience <SortIcon field="experience" />
                      </TableHead>
                      <TableHead className="cursor-pointer" onClick={() => handleSort('rating')}>
                        Rating <SortIcon field="rating" />
                      </TableHead>
                      <TableHead className="cursor-pointer" onClick={() => handleSort('status')}>
                        Status <SortIcon field="status" />
                      </TableHead>
                      <TableHead className="cursor-pointer" onClick={() => handleSort('date')}>
                        Applied <SortIcon field="date" />
                      </TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {displayedApplications.map((application) => (
                      <TableRow key={application.id}>
                        <TableCell>
                          <Checkbox
                            checked={selectedIds.has(application.id)}
                            onCheckedChange={() => toggleSelect(application.id)}
                          />
                        </TableCell>
                        <TableCell>
                          <div className="font-medium">
                            {application.first_name} {application.last_name}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {application.email}
                          </div>
                        </TableCell>
                        <TableCell>
                          {application.job_listings?.title || "N/A"}
                        </TableCell>
                        <TableCell>
                          {application.years_of_experience} years
                        </TableCell>
                        <TableCell>
                          <div className="flex gap-0.5">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star
                                key={star}
                                className={`h-4 w-4 cursor-pointer ${
                                  star <= (application.rating || 0)
                                    ? 'fill-yellow-400 text-yellow-400'
                                    : 'text-gray-300'
                                }`}
                                onClick={() => updateRating(application.id, star)}
                              />
                            ))}
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge className={statusColors[application.status]}>
                            {statusLabels[application.status]}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          {new Date(application.application_date).toLocaleDateString()}
                        </TableCell>
                        <TableCell className="text-right">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="sm">
                                <MoreVertical className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuLabel>Actions</DropdownMenuLabel>
                              <Dialog>
                                <DialogTrigger asChild>
                                  <DropdownMenuItem
                                    onSelect={(e) => {
                                      e.preventDefault();
                                      setSelectedApplication(application);
                                      setAdminNotes(application.admin_notes || "");
                                    }}
                                  >
                                    <Eye className="mr-2 h-4 w-4" />
                                    View Details
                                  </DropdownMenuItem>
                                </DialogTrigger>
                                {selectedApplication?.id === application.id && (
                                  <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
                                    <DialogHeader>
                                      <DialogTitle>
                                        Application Details
                                      </DialogTitle>
                                      <DialogDescription>
                                        {selectedApplication.first_name}{" "}
                                        {selectedApplication.last_name} -{" "}
                                        {selectedApplication.job_listings?.title}
                                      </DialogDescription>
                                    </DialogHeader>
                                    <div className="space-y-6">
                                      {/* Personal Info */}
                                      <div>
                                        <h4 className="font-semibold mb-3">Personal Information</h4>
                                        <div className="grid grid-cols-2 gap-4 text-sm">
                                          <div className="flex items-center gap-2">
                                            <Mail className="h-4 w-4 text-muted-foreground" />
                                            <a href={`mailto:${selectedApplication.email}`} className="text-blue-600 hover:underline">
                                              {selectedApplication.email}
                                            </a>
                                          </div>
                                          <div className="flex items-center gap-2">
                                            <Phone className="h-4 w-4 text-muted-foreground" />
                                            <span>{selectedApplication.phone}</span>
                                          </div>
                                          <div className="flex items-center gap-2">
                                            <MapPin className="h-4 w-4 text-muted-foreground" />
                                            <span>{selectedApplication.location}</span>
                                          </div>
                                          {selectedApplication.linkedin_url && (
                                            <div className="flex items-center gap-2">
                                              <ExternalLink className="h-4 w-4 text-muted-foreground" />
                                              <a
                                                href={selectedApplication.linkedin_url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-blue-600 hover:underline"
                                              >
                                                LinkedIn Profile
                                              </a>
                                            </div>
                                          )}
                                        </div>
                                      </div>

                                      {/* Professional Info */}
                                      <div>
                                        <h4 className="font-semibold mb-3">Professional Background</h4>
                                        <div className="grid grid-cols-2 gap-4 text-sm">
                                          <div>
                                            <Label className="text-muted-foreground">Current Position</Label>
                                            <p>{selectedApplication.current_position || "N/A"}</p>
                                          </div>
                                          <div>
                                            <Label className="text-muted-foreground">Current Company</Label>
                                            <p>{selectedApplication.current_company || "N/A"}</p>
                                          </div>
                                          <div>
                                            <Label className="text-muted-foreground">Experience</Label>
                                            <p>{selectedApplication.years_of_experience} years</p>
                                          </div>
                                          <div>
                                            <Label className="text-muted-foreground">Expected Salary</Label>
                                            <p>{selectedApplication.expected_salary || "N/A"}</p>
                                          </div>
                                          <div>
                                            <Label className="text-muted-foreground">Availability</Label>
                                            <p>{selectedApplication.availability || "N/A"}</p>
                                          </div>
                                        </div>
                                      </div>

                                      {/* Cover Letter */}
                                      {selectedApplication.cover_letter && (
                                        <div>
                                          <h4 className="font-semibold mb-3">Cover Letter</h4>
                                          <p className="text-sm whitespace-pre-wrap bg-muted p-4 rounded-lg">
                                            {selectedApplication.cover_letter}
                                          </p>
                                        </div>
                                      )}

                                      {/* Why Interested */}
                                      {selectedApplication.why_interested && (
                                        <div>
                                          <h4 className="font-semibold mb-3">Why Interested in This Role</h4>
                                          <p className="text-sm whitespace-pre-wrap bg-muted p-4 rounded-lg">
                                            {selectedApplication.why_interested}
                                          </p>
                                        </div>
                                      )}

                                      {/* Rating */}
                                      <div>
                                        <Label>Candidate Rating</Label>
                                        <div className="flex gap-1 mt-2">
                                          {[1, 2, 3, 4, 5].map((star) => (
                                            <Star
                                              key={star}
                                              className={`h-6 w-6 cursor-pointer ${
                                                star <= (selectedApplication.rating || 0)
                                                  ? 'fill-yellow-400 text-yellow-400'
                                                  : 'text-gray-300'
                                              }`}
                                              onClick={() => updateRating(selectedApplication.id, star)}
                                            />
                                          ))}
                                        </div>
                                      </div>

                                      {/* Status Update */}
                                      <div>
                                        <Label>Update Status</Label>
                                        <Select
                                          value={selectedApplication.status}
                                          onValueChange={(value) =>
                                            updateApplicationStatus(selectedApplication.id, value)
                                          }
                                        >
                                          <SelectTrigger>
                                            <SelectValue />
                                          </SelectTrigger>
                                          <SelectContent>
                                            <SelectItem value="submitted">Submitted</SelectItem>
                                            <SelectItem value="reviewing">Under Review</SelectItem>
                                            <SelectItem value="interview">Interview Stage</SelectItem>
                                            <SelectItem value="rejected">Rejected</SelectItem>
                                            <SelectItem value="hired">Hired</SelectItem>
                                          </SelectContent>
                                        </Select>
                                      </div>

                                      {/* Admin Notes */}
                                      <div>
                                        <Label>Admin Notes</Label>
                                        <Textarea
                                          value={adminNotes}
                                          onChange={(e) => setAdminNotes(e.target.value)}
                                          placeholder="Add notes about this candidate..."
                                          rows={4}
                                        />
                                        <Button
                                          onClick={() => saveAdminNotes(selectedApplication.id)}
                                          className="mt-2"
                                          size="sm"
                                        >
                                          Save Notes
                                        </Button>
                                      </div>

                                      {/* Actions */}
                                      <div className="flex gap-2 pt-4 border-t flex-wrap">
                                        <Button
                                          onClick={() => openEmailDialog(selectedApplication, 'interview')}
                                          variant="outline"
                                        >
                                          <Send className="mr-2 h-4 w-4" />
                                          Send Interview Invite
                                        </Button>
                                        <Button
                                          onClick={() => openEmailDialog(selectedApplication, 'offer')}
                                          variant="outline"
                                        >
                                          <Send className="mr-2 h-4 w-4" />
                                          Send Offer
                                        </Button>
                                        <Button
                                          onClick={() => openEmailDialog(selectedApplication, 'rejection')}
                                          variant="outline"
                                        >
                                          <Send className="mr-2 h-4 w-4" />
                                          Send Rejection
                                        </Button>
                                        <Button
                                          variant="destructive"
                                          onClick={() => deleteApplication(selectedApplication.id)}
                                        >
                                          <Trash2 className="mr-2 h-4 w-4" />
                                          Delete Application
                                        </Button>
                                      </div>
                                    </div>
                                  </DialogContent>
                                )}
                              </Dialog>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem
                                onClick={() =>
                                  updateApplicationStatus(application.id, "reviewing")
                                }
                              >
                                <Clock className="mr-2 h-4 w-4" />
                                Mark as Reviewing
                              </DropdownMenuItem>
                              <DropdownMenuItem
                                onClick={() =>
                                  updateApplicationStatus(application.id, "interview")
                                }
                              >
                                <CheckCircle className="mr-2 h-4 w-4" />
                                Move to Interview
                              </DropdownMenuItem>
                              <DropdownMenuItem
                                onClick={() =>
                                  updateApplicationStatus(application.id, "hired")
                                }
                              >
                                <CheckCircle className="mr-2 h-4 w-4 text-green-600" />
                                Mark as Hired
                              </DropdownMenuItem>
                              <DropdownMenuItem
                                onClick={() =>
                                  updateApplicationStatus(application.id, "rejected")
                                }
                              >
                                <XCircle className="mr-2 h-4 w-4 text-red-600" />
                                Reject
                              </DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem
                                onClick={() => openEmailDialog(application, 'interview')}
                              >
                                <Send className="mr-2 h-4 w-4" />
                                Send Email
                              </DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem
                                onClick={() => deleteApplication(application.id)}
                                className="text-red-600"
                              >
                                <Trash2 className="mr-2 h-4 w-4" />
                                Delete
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>

              {/* Pagination */}
              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">Rows per page:</span>
                  <Select
                    value={itemsPerPage.toString()}
                    onValueChange={(value) => {
                      setItemsPerPage(parseInt(value));
                      setCurrentPage(1);
                    }}
                  >
                    <SelectTrigger className="w-[70px]">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="10">10</SelectItem>
                      <SelectItem value="25">25</SelectItem>
                      <SelectItem value="50">50</SelectItem>
                      <SelectItem value="100">100</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">
                    Page {currentPage} of {totalPages} ({filteredApplications.length} total)
                  </span>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                    disabled={currentPage === 1}
                  >
                    Previous
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                    disabled={currentPage === totalPages}
                  >
                    Next
                  </Button>
                </div>
              </div>
            </>
          )}
        </CardContent>
      </Card>

      {/* Email Dialog */}
      <Dialog open={emailDialogOpen} onOpenChange={setEmailDialogOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Send Email to {selectedApplication?.first_name} {selectedApplication?.last_name}</DialogTitle>
            <DialogDescription>
              Compose and send an email to the candidate
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <Label>Template</Label>
              <Select value={emailTemplate} onValueChange={(value: 'rejection' | 'interview' | 'offer') => {
                setEmailTemplate(value);
                const templateData = emailTemplates[value];
                const name = `${selectedApplication?.first_name} ${selectedApplication?.last_name}`;
                const position = selectedApplication?.job_listings?.title || "the position";
                setEmailSubject(templateData.subject.replace('{position}', position));
                setEmailBody(templateData.body.replace('{name}', name).replace(/{position}/g, position));
              }}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="interview">Interview Invitation</SelectItem>
                  <SelectItem value="offer">Job Offer</SelectItem>
                  <SelectItem value="rejection">Rejection</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label>Subject</Label>
              <Input
                value={emailSubject}
                onChange={(e) => setEmailSubject(e.target.value)}
              />
            </div>
            <div>
              <Label>Message</Label>
              <Textarea
                value={emailBody}
                onChange={(e) => setEmailBody(e.target.value)}
                rows={10}
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setEmailDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={sendEmail}>
              <Send className="mr-2 h-4 w-4" />
              Send Email
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
