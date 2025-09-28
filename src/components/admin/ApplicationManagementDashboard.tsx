import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { 
  Users, 
  Eye, 
  MessageSquare, 
  Calendar, 
  Phone, 
  Mail,
  MapPin,
  Building2,
  Clock,
  Search,
  Filter,
  CheckCircle,
  XCircle,
  AlertCircle,
  User
} from 'lucide-react';

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
  github_url: string;
  current_position: string;
  current_company: string;
  years_of_experience: number;
  expected_salary: string;
  availability: string;
  willing_to_relocate: boolean;
  work_authorization: string;
  technical_skills: string[];
  soft_skills: string[];
  programming_languages: string[];
  frameworks_tools: string[];
  certifications: string[];
  languages_spoken: string[];
  work_experience: string;
  education_background: string;
  projects: string;
  achievements: string;
  cover_letter: string;
  why_interested: string;
  additional_info: string;
  status: string;
  application_date: string;
  last_updated: string;
  admin_notes: string;
  interview_scheduled: string;
  job_listings?: {
    title: string;
    department: string;
    location: string;
  };
}

export default function ApplicationManagementDashboard() {
  const [applications, setApplications] = useState<JobApplication[]>([]);
  const [filteredApplications, setFilteredApplications] = useState<JobApplication[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [selectedApplication, setSelectedApplication] = useState<JobApplication | null>(null);
  const [adminNotes, setAdminNotes] = useState('');
  const [newStatus, setNewStatus] = useState('');
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
        .from('job_applications')
        .select(`
          *,
          job_listings (
            title,
            department,
            location
          )
        `)
        .order('application_date', { ascending: false });

      if (error) throw error;
      setApplications(data || []);
    } catch (error) {
      console.error('Error fetching applications:', error);
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

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(app =>
        `${app.first_name} ${app.last_name}`.toLowerCase().includes(searchTerm.toLowerCase()) ||
        app.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        app.current_position.toLowerCase().includes(searchTerm.toLowerCase()) ||
        app.job_listings?.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Status filter
    if (statusFilter !== 'all') {
      filtered = filtered.filter(app => app.status === statusFilter);
    }

    setFilteredApplications(filtered);
  };

  const updateApplicationStatus = async (applicationId: string, status: string, notes?: string) => {
    try {
      const updateData: { status: string; admin_notes?: string } = { status };
      if (notes !== undefined) {
        updateData.admin_notes = notes;
      }

      const { error } = await supabase
        .from('job_applications')
        .update(updateData)
        .eq('id', applicationId);

      if (error) throw error;

      toast({
        title: "Status Updated",
        description: "Application status has been updated successfully",
      });

      fetchApplications();
      setSelectedApplication(null);
      setAdminNotes('');
      setNewStatus('');
    } catch (error) {
      console.error('Error updating application:', error);
      toast({
        title: "Error",
        description: "Failed to update application status",
        variant: "destructive",
      });
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'submitted': return 'bg-blue-100 text-blue-800';
      case 'reviewing': return 'bg-yellow-100 text-yellow-800';
      case 'interview': return 'bg-purple-100 text-purple-800';
      case 'hired': return 'bg-green-100 text-green-800';
      case 'rejected': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'submitted': return <AlertCircle className="w-4 h-4" />;
      case 'reviewing': return <Eye className="w-4 h-4" />;
      case 'interview': return <MessageSquare className="w-4 h-4" />;
      case 'hired': return <CheckCircle className="w-4 h-4" />;
      case 'rejected': return <XCircle className="w-4 h-4" />;
      default: return <User className="w-4 h-4" />;
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const openApplicationDetails = (application: JobApplication) => {
    setSelectedApplication(application);
    setAdminNotes(application.admin_notes || '');
    setNewStatus(application.status);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Application Management</h2>
          <p className="text-gray-600">Review and manage job applications</p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-blue-500" />
              <div>
                <p className="text-sm text-gray-600">Total Applications</p>
                <p className="text-2xl font-bold">{applications.length}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-yellow-500" />
              <div>
                <p className="text-sm text-gray-600">New</p>
                <p className="text-2xl font-bold">{applications.filter(a => a.status === 'submitted').length}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Eye className="w-4 h-4 text-blue-500" />
              <div>
                <p className="text-sm text-gray-600">Under Review</p>
                <p className="text-2xl font-bold">{applications.filter(a => a.status === 'reviewing').length}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-purple-500" />
              <div>
                <p className="text-sm text-gray-600">Interview</p>
                <p className="text-2xl font-bold">{applications.filter(a => a.status === 'interview').length}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <div>
                <p className="text-sm text-gray-600">Hired</p>
                <p className="text-2xl font-bold">{applications.filter(a => a.status === 'hired').length}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Search and Filters */}
      <Card>
        <CardContent className="p-4">
          <div className="flex gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input
                placeholder="Search applicants..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Applications</SelectItem>
                <SelectItem value="submitted">Submitted</SelectItem>
                <SelectItem value="reviewing">Under Review</SelectItem>
                <SelectItem value="interview">Interview</SelectItem>
                <SelectItem value="hired">Hired</SelectItem>
                <SelectItem value="rejected">Rejected</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Applications List */}
      <Card>
        <CardHeader>
          <CardTitle>Job Applications</CardTitle>
          <CardDescription>
            Manage all job applications ({filteredApplications.length} of {applications.length} applications shown)
          </CardDescription>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="text-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
              <p className="mt-2 text-gray-600">Loading applications...</p>
            </div>
          ) : filteredApplications.length === 0 ? (
            <div className="text-center py-8">
              <Users className="w-12 h-12 text-gray-400 mx-auto mb-2" />
              <p className="text-gray-600">No applications found</p>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredApplications.map((application) => (
                <Card key={application.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="font-semibold text-lg">
                            {application.first_name} {application.last_name}
                          </h3>
                          <Badge className={getStatusColor(application.status)}>
                            <span className="flex items-center gap-1">
                              {getStatusIcon(application.status)}
                              {application.status.charAt(0).toUpperCase() + application.status.slice(1)}
                            </span>
                          </Badge>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 mb-2">
                          <div className="flex items-center gap-1">
                            <Building2 className="w-4 h-4" />
                            Applied for: {application.job_listings?.title}
                          </div>
                          <div className="flex items-center gap-1">
                            <User className="w-4 h-4" />
                            {application.current_position} at {application.current_company}
                          </div>
                          <div className="flex items-center gap-1">
                            <Mail className="w-4 h-4" />
                            {application.email}
                          </div>
                          <div className="flex items-center gap-1">
                            <Phone className="w-4 h-4" />
                            {application.phone}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {application.location}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {application.years_of_experience} years experience
                          </div>
                        </div>
                        
                        <div className="flex flex-wrap gap-1 mb-2">
                          {application.technical_skills?.slice(0, 5).map((skill, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                          {application.technical_skills?.length > 5 && (
                            <Badge variant="outline" className="text-xs">
                              +{application.technical_skills.length - 5} more
                            </Badge>
                          )}
                        </div>
                        
                        <p className="text-xs text-gray-500">
                          Applied: {formatDate(application.application_date)}
                        </p>
                      </div>
                      
                      <div className="flex gap-2 ml-4">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => openApplicationDetails(application)}
                            >
                              <Eye className="w-4 h-4 mr-2" />
                              View Details
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                            <DialogHeader>
                              <DialogTitle>
                                Application Details - {selectedApplication?.first_name} {selectedApplication?.last_name}
                              </DialogTitle>
                              <DialogDescription>
                                Applied for: {selectedApplication?.job_listings?.title}
                              </DialogDescription>
                            </DialogHeader>
                            
                            {selectedApplication && (
                              <div className="space-y-6">
                                {/* Personal Information */}
                                <div>
                                  <h4 className="font-semibold mb-2">Personal Information</h4>
                                  <div className="grid grid-cols-2 gap-4 text-sm">
                                    <div><strong>Name:</strong> {selectedApplication.first_name} {selectedApplication.last_name}</div>
                                    <div><strong>Email:</strong> {selectedApplication.email}</div>
                                    <div><strong>Phone:</strong> {selectedApplication.phone}</div>
                                    <div><strong>Location:</strong> {selectedApplication.location}</div>
                                    {selectedApplication.linkedin_url && (
                                      <div><strong>LinkedIn:</strong> <a href={selectedApplication.linkedin_url} target="_blank" rel="noopener noreferrer" className="text-blue-600">View Profile</a></div>
                                    )}
                                    {selectedApplication.portfolio_url && (
                                      <div><strong>Portfolio:</strong> <a href={selectedApplication.portfolio_url} target="_blank" rel="noopener noreferrer" className="text-blue-600">View Portfolio</a></div>
                                    )}
                                  </div>
                                </div>

                                {/* Professional Information */}
                                <div>
                                  <h4 className="font-semibold mb-2">Professional Information</h4>
                                  <div className="grid grid-cols-2 gap-4 text-sm">
                                    <div><strong>Current Position:</strong> {selectedApplication.current_position}</div>
                                    <div><strong>Current Company:</strong> {selectedApplication.current_company}</div>
                                    <div><strong>Years of Experience:</strong> {selectedApplication.years_of_experience}</div>
                                    <div><strong>Expected Salary:</strong> {selectedApplication.expected_salary}</div>
                                    <div><strong>Availability:</strong> {selectedApplication.availability}</div>
                                    <div><strong>Work Authorization:</strong> {selectedApplication.work_authorization}</div>
                                  </div>
                                </div>

                                {/* Skills */}
                                <div>
                                  <h4 className="font-semibold mb-2">Skills</h4>
                                  <div className="space-y-2">
                                    <div>
                                      <strong>Technical Skills:</strong>
                                      <div className="flex flex-wrap gap-1 mt-1">
                                        {selectedApplication.technical_skills?.map((skill, index) => (
                                          <Badge key={index} variant="secondary" className="text-xs">{skill}</Badge>
                                        ))}
                                      </div>
                                    </div>
                                    <div>
                                      <strong>Programming Languages:</strong>
                                      <div className="flex flex-wrap gap-1 mt-1">
                                        {selectedApplication.programming_languages?.map((lang, index) => (
                                          <Badge key={index} variant="outline" className="text-xs">{lang}</Badge>
                                        ))}
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                {/* Experience & Education */}
                                <div>
                                  <h4 className="font-semibold mb-2">Work Experience</h4>
                                  <p className="text-sm whitespace-pre-line bg-gray-50 p-3 rounded">
                                    {selectedApplication.work_experience}
                                  </p>
                                </div>

                                <div>
                                  <h4 className="font-semibold mb-2">Projects</h4>
                                  <p className="text-sm whitespace-pre-line bg-gray-50 p-3 rounded">
                                    {selectedApplication.projects}
                                  </p>
                                </div>

                                <div>
                                  <h4 className="font-semibold mb-2">Cover Letter</h4>
                                  <p className="text-sm whitespace-pre-line bg-gray-50 p-3 rounded">
                                    {selectedApplication.cover_letter}
                                  </p>
                                </div>

                                <div>
                                  <h4 className="font-semibold mb-2">Why Interested</h4>
                                  <p className="text-sm whitespace-pre-line bg-gray-50 p-3 rounded">
                                    {selectedApplication.why_interested}
                                  </p>
                                </div>

                                {/* Status Management */}
                                <div className="border-t pt-4">
                                  <h4 className="font-semibold mb-2">Application Management</h4>
                                  <div className="space-y-4">
                                    <div>
                                      <Label htmlFor="status">Update Status</Label>
                                      <Select value={newStatus} onValueChange={setNewStatus}>
                                        <SelectTrigger>
                                          <SelectValue />
                                        </SelectTrigger>
                                        <SelectContent>
                                          <SelectItem value="submitted">Submitted</SelectItem>
                                          <SelectItem value="reviewing">Under Review</SelectItem>
                                          <SelectItem value="interview">Interview</SelectItem>
                                          <SelectItem value="hired">Hired</SelectItem>
                                          <SelectItem value="rejected">Rejected</SelectItem>
                                        </SelectContent>
                                      </Select>
                                    </div>
                                    
                                    <div>
                                      <Label htmlFor="admin_notes">Admin Notes</Label>
                                      <Textarea
                                        id="admin_notes"
                                        value={adminNotes}
                                        onChange={(e) => setAdminNotes(e.target.value)}
                                        placeholder="Add internal notes about this application..."
                                        rows={3}
                                      />
                                    </div>
                                    
                                    <Button 
                                      onClick={() => updateApplicationStatus(selectedApplication.id, newStatus, adminNotes)}
                                      className="w-full"
                                    >
                                      Update Application
                                    </Button>
                                  </div>
                                </div>
                              </div>
                            )}
                          </DialogContent>
                        </Dialog>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
