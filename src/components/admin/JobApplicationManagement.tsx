import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
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
  Briefcase, 
  Calendar, 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink,
  FileText,
  CheckCircle,
  XCircle,
  Clock,
  Download,
  Search,
  Filter,
  Eye,
  Trash2,
  MoreVertical
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
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  location: string;
  linkedin_url: string;
  portfolio_url: string;
  current_position: string;
  current_company: string;
  years_of_experience: number;
  expected_salary: string;
  availability: string;
  cover_letter: string;
  why_interested: string;
  status: string;
  application_date: string;
  admin_notes: string;
  job_listings?: {
    title: string;
  };
}

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

export function JobApplicationManagement() {
  const [applications, setApplications] = useState<JobApplication[]>([]);
  const [filteredApplications, setFilteredApplications] = useState<JobApplication[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedApplication, setSelectedApplication] = useState<JobApplication | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [adminNotes, setAdminNotes] = useState("");
  const { toast } = useToast();

  useEffect(() => {
    fetchApplications();
  }, []);

  useEffect(() => {
    filterApplications();
  }, [applications, searchTerm, statusFilter]);

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
        .order("application_date", { ascending: false });

      if (error) throw error;
      setApplications(data || []);
    } catch (error) {
      console.error("Error fetching applications:", error);
      toast({
        title: "Error",
        description: "Failed to fetch job applications",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const filterApplications = () => {
    let filtered = applications;

    if (searchTerm) {
      filtered = filtered.filter(
        (app) =>
          app.first_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          app.last_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          app.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
          app.job_listings?.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (statusFilter !== "all") {
      filtered = filtered.filter((app) => app.status === statusFilter);
    }

    setFilteredApplications(filtered);
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

  const exportToCSV = () => {
    const headers = [
      "Name",
      "Email",
      "Phone",
      "Position",
      "Experience",
      "Status",
      "Application Date",
    ];

    const rows = filteredApplications.map((app) => [
      `${app.first_name} ${app.last_name}`,
      app.email,
      app.phone,
      app.job_listings?.title || "N/A",
      `${app.years_of_experience} years`,
      statusLabels[app.status],
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
          <CardTitle>Job Applications</CardTitle>
          <CardDescription>Manage and track all job applications</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-4 mb-6">
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
              <SelectTrigger className="w-full md:w-[200px]">
                <Filter className="mr-2 h-4 w-4" />
                <SelectValue placeholder="Filter by status" />
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
            <Button onClick={exportToCSV} variant="outline">
              <Download className="mr-2 h-4 w-4" />
              Export CSV
            </Button>
          </div>

          {loading ? (
            <div className="text-center py-8">Loading applications...</div>
          ) : filteredApplications.length === 0 ? (
            <div className="text-center py-8 text-muted-foreground">
              No applications found
            </div>
          ) : (
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Applicant</TableHead>
                    <TableHead>Position</TableHead>
                    <TableHead>Experience</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Applied</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredApplications.map((application) => (
                    <TableRow key={application.id}>
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
                                    <div className="flex gap-2 pt-4 border-t">
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
          )}
        </CardContent>
      </Card>
    </div>
  );
}
