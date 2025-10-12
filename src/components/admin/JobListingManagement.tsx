import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
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
import { Briefcase, Plus, Edit, Trash2, Eye, Calendar, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

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
  application_deadline: string;
  created_at: string;
}

// Define a type for inserting new job listings (without auto-generated fields)
type JobListingInsert = Omit<JobListing, 'id' | 'created_at'>;

export function JobListingManagement() {
  const [jobs, setJobs] = useState<JobListing[]>([]);
  const [loading, setLoading] = useState(true);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingJob, setEditingJob] = useState<JobListing | null>(null);
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    title: "",
    department: "",
    location: "",
    employment_type: "Full-time",
    description: "",
    requirements: "",
    responsibilities: "",
    skills: "",
    salary_range: "",
    experience_level: "Entry Level",
    is_active: true,
    featured: false,
    application_deadline: "",
  });

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from("job_listings")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      setJobs(data || []);
    } catch (error) {
      console.error("Error fetching jobs:", error);
      toast({
        title: "Error",
        description: "Failed to fetch job listings",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const jobData = {
      ...formData,
      skills: formData.skills.split(",").map((s) => s.trim()).filter(Boolean),
      application_deadline: formData.application_deadline || null,
    };

    try {
      if (editingJob) {
        const { error } = await supabase
          .from("job_listings")
          .update(jobData)
          .eq("id", editingJob.id);

        if (error) throw error;

        toast({
          title: "Job Updated",
          description: "Job listing has been updated successfully",
        });
      } else {
        const { error } = await supabase
          .from("job_listings")
          .insert([jobData]);

        if (error) throw error;

        toast({
          title: "Job Created",
          description: "New job listing has been created successfully",
        });
      }

      setIsDialogOpen(false);
      resetForm();
      fetchJobs();
    } catch (error) {
      console.error("Error saving job:", error);
      toast({
        title: "Error",
        description: "Failed to save job listing",
        variant: "destructive",
      });
    }
  };

  const deleteJob = async (id: string) => {
    if (!confirm("Are you sure you want to delete this job listing?")) return;

    try {
      const { error } = await supabase.from("job_listings").delete().eq("id", id);

      if (error) throw error;

      toast({
        title: "Job Deleted",
        description: "Job listing has been deleted successfully",
      });

      fetchJobs();
    } catch (error) {
      console.error("Error deleting job:", error);
      toast({
        title: "Error",
        description: "Failed to delete job listing",
        variant: "destructive",
      });
    }
  };

  const toggleJobStatus = async (id: string, currentStatus: boolean) => {
    try {
      const { error } = await supabase
        .from("job_listings")
        .update({ is_active: !currentStatus })
        .eq("id", id);

      if (error) throw error;

      toast({
        title: "Status Updated",
        description: `Job listing ${!currentStatus ? "activated" : "deactivated"}`,
      });

      fetchJobs();
    } catch (error) {
      console.error("Error toggling status:", error);
      toast({
        title: "Error",
        description: "Failed to update job status",
        variant: "destructive",
      });
    }
  };

  const editJob = (job: JobListing) => {
    setEditingJob(job);
    setFormData({
      title: job.title,
      department: job.department,
      location: job.location,
      employment_type: job.employment_type,
      description: job.description,
      requirements: job.requirements,
      responsibilities: job.responsibilities,
      skills: job.skills.join(", "),
      salary_range: job.salary_range,
      experience_level: job.experience_level,
      is_active: job.is_active,
      featured: job.featured,
      application_deadline: job.application_deadline
        ? new Date(job.application_deadline).toISOString().split("T")[0]
        : "",
    });
    setIsDialogOpen(true);
  };

  const resetForm = () => {
    setEditingJob(null);
    setFormData({
      title: "",
      department: "",
      location: "",
      employment_type: "Full-time",
      description: "",
      requirements: "",
      responsibilities: "",
      skills: "",
      salary_range: "",
      experience_level: "Entry Level",
      is_active: true,
      featured: false,
      application_deadline: "",
    });
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Job Listings</CardTitle>
              <CardDescription>Manage job postings on your careers page</CardDescription>
            </div>
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button onClick={resetForm}>
                  <Plus className="mr-2 h-4 w-4" />
                  Add New Job
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle>
                    {editingJob ? "Edit Job Listing" : "Create New Job Listing"}
                  </DialogTitle>
                  <DialogDescription>
                    Fill in the details for the job position
                  </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label>Job Title *</Label>
                      <Input
                        value={formData.title}
                        onChange={(e) =>
                          setFormData({ ...formData, title: e.target.value })
                        }
                        required
                      />
                    </div>
                    <div>
                      <Label>Department</Label>
                      <Input
                        value={formData.department}
                        onChange={(e) =>
                          setFormData({ ...formData, department: e.target.value })
                        }
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label>Location</Label>
                      <Input
                        value={formData.location}
                        onChange={(e) =>
                          setFormData({ ...formData, location: e.target.value })
                        }
                      />
                    </div>
                    <div>
                      <Label>Employment Type</Label>
                      <Select
                        value={formData.employment_type}
                        onValueChange={(value) =>
                          setFormData({ ...formData, employment_type: value })
                        }
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
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label>Experience Level</Label>
                      <Select
                        value={formData.experience_level}
                        onValueChange={(value) =>
                          setFormData({ ...formData, experience_level: value })
                        }
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Entry Level">Entry Level</SelectItem>
                          <SelectItem value="Mid-level">Mid-level</SelectItem>
                          <SelectItem value="Senior">Senior</SelectItem>
                          <SelectItem value="Executive">Executive</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label>Salary Range</Label>
                      <Input
                        value={formData.salary_range}
                        onChange={(e) =>
                          setFormData({ ...formData, salary_range: e.target.value })
                        }
                        placeholder="e.g., $50,000 - $70,000"
                      />
                    </div>
                  </div>

                  <div>
                    <Label>Description</Label>
                    <Textarea
                      value={formData.description}
                      onChange={(e) =>
                        setFormData({ ...formData, description: e.target.value })
                      }
                      rows={4}
                    />
                  </div>

                  <div>
                    <Label>Requirements</Label>
                    <Textarea
                      value={formData.requirements}
                      onChange={(e) =>
                        setFormData({ ...formData, requirements: e.target.value })
                      }
                      rows={4}
                    />
                  </div>

                  <div>
                    <Label>Responsibilities</Label>
                    <Textarea
                      value={formData.responsibilities}
                      onChange={(e) =>
                        setFormData({ ...formData, responsibilities: e.target.value })
                      }
                      rows={4}
                    />
                  </div>

                  <div>
                    <Label>Skills (comma-separated)</Label>
                    <Input
                      value={formData.skills}
                      onChange={(e) =>
                        setFormData({ ...formData, skills: e.target.value })
                      }
                      placeholder="React, TypeScript, Node.js"
                    />
                  </div>

                  <div>
                    <Label>Application Deadline</Label>
                    <Input
                      type="date"
                      value={formData.application_deadline}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          application_deadline: e.target.value,
                        })
                      }
                    />
                  </div>

                  <div className="flex items-center gap-6">
                    <div className="flex items-center space-x-2">
                      <Switch
                        id="is_active"
                        checked={formData.is_active}
                        onCheckedChange={(checked) =>
                          setFormData({ ...formData, is_active: checked })
                        }
                      />
                      <Label htmlFor="is_active">Active</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch
                        id="featured"
                        checked={formData.featured}
                        onCheckedChange={(checked) =>
                          setFormData({ ...formData, featured: checked })
                        }
                      />
                      <Label htmlFor="featured">Featured</Label>
                    </div>
                  </div>

                  <div className="flex gap-2 pt-4">
                    <Button type="submit">
                      {editingJob ? "Update Job" : "Create Job"}
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => {
                        setIsDialogOpen(false);
                        resetForm();
                      }}
                    >
                      Cancel
                    </Button>
                  </div>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="text-center py-8">Loading job listings...</div>
          ) : jobs.length === 0 ? (
            <div className="text-center py-8 text-muted-foreground">
              No job listings yet. Click "Add New Job" to create one.
            </div>
          ) : (
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Job Title</TableHead>
                    <TableHead>Department</TableHead>
                    <TableHead>Location</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {jobs.map((job) => (
                    <TableRow key={job.id}>
                      <TableCell>
                        <div className="font-medium">{job.title}</div>
                        <div className="text-sm text-muted-foreground">
                          {job.experience_level}
                        </div>
                      </TableCell>
                      <TableCell>{job.department}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {job.location}
                        </div>
                      </TableCell>
                      <TableCell>{job.employment_type}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Badge variant={job.is_active ? "default" : "secondary"}>
                            {job.is_active ? "Active" : "Inactive"}
                          </Badge>
                          {job.featured && (
                            <Badge variant="outline">Featured</Badge>
                          )}
                        </div>
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex items-center justify-end gap-2">
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => editJob(job)}
                          >
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => toggleJobStatus(job.id, job.is_active)}
                          >
                            {job.is_active ? "Deactivate" : "Activate"}
                          </Button>
                          <Button
                            size="sm"
                            variant="destructive"
                            onClick={() => deleteJob(job.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
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
