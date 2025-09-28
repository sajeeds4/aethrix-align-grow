import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';
import { supabase } from '@/integrations/supabase/client';
import { 
  Plus, 
  Edit, 
  Trash2, 
  Star,
  MapPin,
  Building2,
  Users,
  DollarSign,
  Calendar,
  Search,
  Filter,
  Eye,
  EyeOff
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface JobListing {
  id: string;
  title: string;
  department: string;
  location: string;
  employment_type: string;
  description: string;
  requirements: string;
  responsibilities: string;
  skills: string[];
  salary_range: string;
  experience_level: string;
  is_active: boolean;
  featured: boolean;
  application_deadline: string | null;
  created_at: string;
  updated_at: string;
}

const emptyJob: Omit<JobListing, 'id' | 'created_at' | 'updated_at'> = {
  title: '',
  department: '',
  location: '',
  employment_type: 'Full-time',
  description: '',
  requirements: '',
  responsibilities: '',
  skills: [],
  salary_range: '',
  experience_level: 'Mid-level',
  is_active: true,
  featured: false,
  application_deadline: null,
};

export default function JobManagementDashboard() {
  const [jobs, setJobs] = useState<JobListing[]>([]);
  const [filteredJobs, setFilteredJobs] = useState<JobListing[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [currentJob, setCurrentJob] = useState<Partial<JobListing>>(emptyJob);
  const [skillsInput, setSkillsInput] = useState('');
  const { toast } = useToast();

  useEffect(() => {
    fetchJobs();
  }, []);

  useEffect(() => {
    filterJobs();
  }, [jobs, searchTerm, statusFilter]);

  useEffect(() => {
    if (currentJob.skills) {
      setSkillsInput(currentJob.skills.join(', '));
    }
  }, [currentJob.skills]);

  const fetchJobs = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('job_listings')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setJobs(data || []);
    } catch (error) {
      console.error('Error fetching jobs:', error);
      toast({
        title: "Error",
        description: "Failed to fetch job listings",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const filterJobs = () => {
    let filtered = jobs;

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(job =>
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.location.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Status filter
    if (statusFilter === 'active') {
      filtered = filtered.filter(job => job.is_active);
    } else if (statusFilter === 'inactive') {
      filtered = filtered.filter(job => !job.is_active);
    } else if (statusFilter === 'featured') {
      filtered = filtered.filter(job => job.featured);
    }

    setFilteredJobs(filtered);
  };

  const handleCreateJob = async () => {
    try {
      const jobData = {
        ...currentJob,
        skills: skillsInput.split(',').map(skill => skill.trim()).filter(Boolean),
        application_deadline: currentJob.application_deadline || null,
      };

      const { error } = await supabase
        .from('job_listings')
        .insert([jobData]);

      if (error) throw error;

      toast({
        title: "Success",
        description: "Job listing created successfully",
      });

      setIsCreateModalOpen(false);
      setCurrentJob(emptyJob);
      setSkillsInput('');
      fetchJobs();
    } catch (error) {
      console.error('Error creating job:', error);
      toast({
        title: "Error",
        description: "Failed to create job listing",
        variant: "destructive",
      });
    }
  };

  const handleUpdateJob = async () => {
    try {
      if (!currentJob.id) return;

      const jobData = {
        ...currentJob,
        skills: skillsInput.split(',').map(skill => skill.trim()).filter(Boolean),
        application_deadline: currentJob.application_deadline || null,
      };

      const { error } = await supabase
        .from('job_listings')
        .update(jobData)
        .eq('id', currentJob.id);

      if (error) throw error;

      toast({
        title: "Success",
        description: "Job listing updated successfully",
      });

      setIsEditModalOpen(false);
      setCurrentJob(emptyJob);
      setSkillsInput('');
      fetchJobs();
    } catch (error) {
      console.error('Error updating job:', error);
      toast({
        title: "Error",
        description: "Failed to update job listing",
        variant: "destructive",
      });
    }
  };

  const handleDeleteJob = async (jobId: string) => {
    try {
      const { error } = await supabase
        .from('job_listings')
        .delete()
        .eq('id', jobId);

      if (error) throw error;

      toast({
        title: "Success",
        description: "Job listing deleted successfully",
      });

      fetchJobs();
    } catch (error) {
      console.error('Error deleting job:', error);
      toast({
        title: "Error",
        description: "Failed to delete job listing",
        variant: "destructive",
      });
    }
  };

  const toggleJobStatus = async (job: JobListing) => {
    try {
      const { error } = await supabase
        .from('job_listings')
        .update({ is_active: !job.is_active })
        .eq('id', job.id);

      if (error) throw error;

      toast({
        title: "Success",
        description: `Job listing ${!job.is_active ? 'activated' : 'deactivated'}`,
      });

      fetchJobs();
    } catch (error) {
      console.error('Error toggling job status:', error);
      toast({
        title: "Error",
        description: "Failed to update job status",
        variant: "destructive",
      });
    }
  };

  const toggleFeaturedStatus = async (job: JobListing) => {
    try {
      const { error } = await supabase
        .from('job_listings')
        .update({ featured: !job.featured })
        .eq('id', job.id);

      if (error) throw error;

      toast({
        title: "Success",
        description: `Job listing ${!job.featured ? 'featured' : 'unfeatured'}`,
      });

      fetchJobs();
    } catch (error) {
      console.error('Error toggling featured status:', error);
      toast({
        title: "Error",
        description: "Failed to update featured status",
        variant: "destructive",
      });
    }
  };

  const openEditModal = (job: JobListing) => {
    setCurrentJob(job);
    setSkillsInput(job.skills.join(', '));
    setIsEditModalOpen(true);
  };

  const openCreateModal = () => {
    setCurrentJob(emptyJob);
    setSkillsInput('');
    setIsCreateModalOpen(true);
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

  const JobFormFields = () => (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="title">Job Title *</Label>
          <Input
            id="title"
            value={currentJob.title}
            onChange={(e) => setCurrentJob({...currentJob, title: e.target.value})}
            placeholder="e.g., Senior Cloud Architect"
          />
        </div>
        <div>
          <Label htmlFor="department">Department *</Label>
          <Input
            id="department"
            value={currentJob.department}
            onChange={(e) => setCurrentJob({...currentJob, department: e.target.value})}
            placeholder="e.g., Engineering"
          />
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div>
          <Label htmlFor="location">Location *</Label>
          <Input
            id="location"
            value={currentJob.location}
            onChange={(e) => setCurrentJob({...currentJob, location: e.target.value})}
            placeholder="e.g., Remote, New York, NY"
          />
        </div>
        <div>
          <Label htmlFor="employment_type">Employment Type</Label>
          <Select 
            value={currentJob.employment_type} 
            onValueChange={(value) => setCurrentJob({...currentJob, employment_type: value})}
          >
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Full-time">Full-time</SelectItem>
              <SelectItem value="Part-time">Part-time</SelectItem>
              <SelectItem value="Contract">Contract</SelectItem>
              <SelectItem value="Remote">Remote</SelectItem>
              <SelectItem value="Hybrid">Hybrid</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="experience_level">Experience Level</Label>
          <Select 
            value={currentJob.experience_level} 
            onValueChange={(value) => setCurrentJob({...currentJob, experience_level: value})}
          >
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Entry">Entry</SelectItem>
              <SelectItem value="Mid-level">Mid-level</SelectItem>
              <SelectItem value="Senior">Senior</SelectItem>
              <SelectItem value="Executive">Executive</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div>
        <Label htmlFor="salary_range">Salary Range</Label>
        <Input
          id="salary_range"
          value={currentJob.salary_range}
          onChange={(e) => setCurrentJob({...currentJob, salary_range: e.target.value})}
          placeholder="e.g., $80,000 - $120,000"
        />
      </div>

      <div>
        <Label htmlFor="description">Job Description *</Label>
        <Textarea
          id="description"
          value={currentJob.description}
          onChange={(e) => setCurrentJob({...currentJob, description: e.target.value})}
          placeholder="Brief overview of the position..."
          rows={3}
        />
      </div>

      <div>
        <Label htmlFor="responsibilities">Key Responsibilities</Label>
        <Textarea
          id="responsibilities"
          value={currentJob.responsibilities}
          onChange={(e) => setCurrentJob({...currentJob, responsibilities: e.target.value})}
          placeholder="List the main responsibilities..."
          rows={4}
        />
      </div>

      <div>
        <Label htmlFor="requirements">Requirements</Label>
        <Textarea
          id="requirements"
          value={currentJob.requirements}
          onChange={(e) => setCurrentJob({...currentJob, requirements: e.target.value})}
          placeholder="List the required qualifications..."
          rows={4}
        />
      </div>

      <div>
        <Label htmlFor="skills">Required Skills (comma-separated)</Label>
        <Input
          id="skills"
          value={skillsInput}
          onChange={(e) => setSkillsInput(e.target.value)}
          placeholder="e.g., React, TypeScript, Node.js, AWS"
        />
      </div>

      <div>
        <Label htmlFor="application_deadline">Application Deadline (optional)</Label>
        <Input
          id="application_deadline"
          type="date"
          value={currentJob.application_deadline ? currentJob.application_deadline.split('T')[0] : ''}
          onChange={(e) => setCurrentJob({...currentJob, application_deadline: e.target.value})}
        />
      </div>

      <div className="flex gap-4">
        <div className="flex items-center space-x-2">
          <Switch
            id="is_active"
            checked={currentJob.is_active}
            onCheckedChange={(checked) => setCurrentJob({...currentJob, is_active: checked})}
          />
          <Label htmlFor="is_active">Active</Label>
        </div>
        <div className="flex items-center space-x-2">
          <Switch
            id="featured"
            checked={currentJob.featured}
            onCheckedChange={(checked) => setCurrentJob({...currentJob, featured: checked})}
          />
          <Label htmlFor="featured">Featured</Label>
        </div>
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Job Management</h2>
          <p className="text-gray-600">Manage career opportunities on your website</p>
        </div>
        <Dialog open={isCreateModalOpen} onOpenChange={setIsCreateModalOpen}>
          <DialogTrigger asChild>
            <Button onClick={openCreateModal}>
              <Plus className="w-4 h-4 mr-2" />
              Add Job
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Create New Job Listing</DialogTitle>
              <DialogDescription>
                Add a new job opportunity to your careers page
              </DialogDescription>
            </DialogHeader>
            <JobFormFields />
            <div className="flex justify-end gap-2 pt-4">
              <Button variant="outline" onClick={() => setIsCreateModalOpen(false)}>
                Cancel
              </Button>
              <Button onClick={handleCreateJob}>
                Create Job
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Building2 className="w-4 h-4 text-blue-500" />
              <div>
                <p className="text-sm text-gray-600">Total Jobs</p>
                <p className="text-2xl font-bold">{jobs.length}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Eye className="w-4 h-4 text-green-500" />
              <div>
                <p className="text-sm text-gray-600">Active</p>
                <p className="text-2xl font-bold">{jobs.filter(j => j.is_active).length}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-yellow-500" />
              <div>
                <p className="text-sm text-gray-600">Featured</p>
                <p className="text-2xl font-bold">{jobs.filter(j => j.featured).length}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <EyeOff className="w-4 h-4 text-gray-500" />
              <div>
                <p className="text-sm text-gray-600">Inactive</p>
                <p className="text-2xl font-bold">{jobs.filter(j => !j.is_active).length}</p>
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
                placeholder="Search jobs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-[150px]">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Jobs</SelectItem>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="inactive">Inactive</SelectItem>
                <SelectItem value="featured">Featured</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Job Listings Table */}
      <Card>
        <CardHeader>
          <CardTitle>Job Listings</CardTitle>
          <CardDescription>
            Manage all job postings ({filteredJobs.length} of {jobs.length} jobs shown)
          </CardDescription>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="text-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
              <p className="mt-2 text-gray-600">Loading jobs...</p>
            </div>
          ) : filteredJobs.length === 0 ? (
            <div className="text-center py-8">
              <Building2 className="w-12 h-12 text-gray-400 mx-auto mb-2" />
              <p className="text-gray-600">No job listings found</p>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredJobs.map((job) => (
                <Card key={job.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="font-semibold text-lg">{job.title}</h3>
                          <div className="flex gap-1">
                            {job.featured && (
                              <Badge className="bg-yellow-100 text-yellow-800">
                                <Star className="w-3 h-3 mr-1" />
                                Featured
                              </Badge>
                            )}
                            <Badge variant={job.is_active ? "default" : "secondary"}>
                              {job.is_active ? "Active" : "Inactive"}
                            </Badge>
                          </div>
                        </div>
                        
                        <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-2">
                          <div className="flex items-center gap-1">
                            <Building2 className="w-4 h-4" />
                            {job.department}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {job.location}
                          </div>
                          <div className="flex items-center gap-1">
                            <Users className="w-4 h-4" />
                            {job.experience_level}
                          </div>
                          {job.salary_range && (
                            <div className="flex items-center gap-1">
                              <DollarSign className="w-4 h-4" />
                              {job.salary_range}
                            </div>
                          )}
                          {job.application_deadline && (
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              Deadline: {formatDate(job.application_deadline)}
                            </div>
                          )}
                        </div>
                        
                        <p className="text-sm text-gray-700 mb-2">{job.description}</p>
                        
                        <div className="flex flex-wrap gap-1">
                          {job.skills.slice(0, 5).map((skill, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                          {job.skills.length > 5 && (
                            <Badge variant="outline" className="text-xs">
                              +{job.skills.length - 5} more
                            </Badge>
                          )}
                        </div>
                        
                        <p className="text-xs text-gray-500 mt-2">
                          Created: {formatDate(job.created_at)} | 
                          Updated: {formatDate(job.updated_at)}
                        </p>
                      </div>
                      
                      <div className="flex gap-2 ml-4">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => toggleJobStatus(job)}
                        >
                          {job.is_active ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </Button>
                        
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => toggleFeaturedStatus(job)}
                          className={job.featured ? "bg-yellow-50" : ""}
                        >
                          <Star className="w-4 h-4" />
                        </Button>
                        
                        <Dialog open={isEditModalOpen && currentJob.id === job.id} onOpenChange={setIsEditModalOpen}>
                          <DialogTrigger asChild>
                            <Button variant="outline" size="sm" onClick={() => openEditModal(job)}>
                              <Edit className="w-4 h-4" />
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                            <DialogHeader>
                              <DialogTitle>Edit Job Listing</DialogTitle>
                              <DialogDescription>
                                Update the job posting details
                              </DialogDescription>
                            </DialogHeader>
                            <JobFormFields />
                            <div className="flex justify-end gap-2 pt-4">
                              <Button variant="outline" onClick={() => setIsEditModalOpen(false)}>
                                Cancel
                              </Button>
                              <Button onClick={handleUpdateJob}>
                                Update Job
                              </Button>
                            </div>
                          </DialogContent>
                        </Dialog>
                        
                        <AlertDialog>
                          <AlertDialogTrigger asChild>
                            <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700">
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </AlertDialogTrigger>
                          <AlertDialogContent>
                            <AlertDialogHeader>
                              <AlertDialogTitle>Delete Job Listing</AlertDialogTitle>
                              <AlertDialogDescription>
                                Are you sure you want to delete "{job.title}"? This action cannot be undone.
                              </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                              <AlertDialogCancel>Cancel</AlertDialogCancel>
                              <AlertDialogAction 
                                onClick={() => handleDeleteJob(job.id)}
                                className="bg-red-600 hover:bg-red-700"
                              >
                                Delete
                              </AlertDialogAction>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </AlertDialog>
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
