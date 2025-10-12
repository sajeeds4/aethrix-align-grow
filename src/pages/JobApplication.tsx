import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { 
  ArrowLeft, 
  Building2, 
  MapPin, 
  Clock, 
  DollarSign, 
  Users, 
  CheckCircle,
  AlertCircle,
  Loader2
} from 'lucide-react';

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
}

interface JobApplication {
  job_listing_id: string;
  full_name: string;
  email: string;
  phone: string;
  current_position: string;
  years_of_experience: number | null;
  cover_letter: string;
}

const emptyApplication: JobApplication = {
  job_listing_id: '',
  full_name: '',
  email: '',
  phone: '',
  current_position: '',
  years_of_experience: null,
  cover_letter: ''
};

export default function JobApplication() {
  const { jobId } = useParams<{ jobId: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [job, setJob] = useState<JobListing | null>(null);
  const [application, setApplication] = useState<JobApplication>(emptyApplication);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [skillsInput, setSkillsInput] = useState({
    technical: '',
    soft: '',
    programming: '',
    frameworks: '',
    certifications: '',
    languages: ''
  });

  const totalSteps = 5;

  useEffect(() => {
    if (jobId) {
      fetchJob();
      setApplication(prev => ({ ...prev, job_listing_id: jobId }));
    }
  }, [jobId]);

  const fetchJob = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('job_listings')
        .select('*')
        .eq('id', jobId)
        .eq('is_active', true)
        .single();

      if (error) throw error;
      setJob(data);
    } catch (error) {
      console.error('Error fetching job:', error);
      toast({
        title: "Error",
        description: "Could not load job details",
        variant: "destructive",
      });
      navigate('/careers');
    } finally {
      setLoading(false);
    }
  };

  const updateApplication = (field: keyof JobApplication, value: string | string[] | number | boolean | null) => {
    setApplication(prev => ({ ...prev, [field]: value }));
  };

  const updateSkillsInput = (field: keyof typeof skillsInput, value: string) => {
    setSkillsInput(prev => ({ ...prev, [field]: value }));
    
    // Convert comma-separated strings to arrays
    const skillsArray = value.split(',').map(skill => skill.trim()).filter(Boolean);
    const fieldMap = {
      technical: 'technical_skills',
      soft: 'soft_skills',
      programming: 'programming_languages',
      frameworks: 'frameworks_tools',
      certifications: 'certifications',
      languages: 'languages_spoken'
    };
    
    updateApplication(fieldMap[field] as keyof JobApplication, skillsArray);
  };

  const validateStep = (step: number): boolean => {
    switch (step) {
      case 1:
        return !!(application.first_name && application.last_name && application.email && application.phone);
      case 2:
        return !!(application.current_position && application.years_of_experience !== null && application.work_experience);
      case 3:
        return !!(application.technical_skills.length > 0 && application.programming_languages.length > 0);
      case 4:
        return !!(application.projects && application.why_interested);
      case 5:
        return !!(application.cover_letter && application.availability);
      default:
        return false;
    }
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, totalSteps));
    } else {
      toast({
        title: "Incomplete Information",
        description: "Please fill in all required fields before proceeding",
        variant: "destructive",
      });
    }
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const handleResumeUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Validate file type
    const validTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    if (!validTypes.includes(file.type)) {
      toast({
        title: "Invalid File Type",
        description: "Please upload a PDF or Word document",
        variant: "destructive",
      });
      return;
    }

    // Validate file size (5MB max)
    if (file.size > 5 * 1024 * 1024) {
      toast({
        title: "File Too Large",
        description: "Resume must be less than 5MB",
        variant: "destructive",
      });
      return;
    }

    try {
      setUploading(true);

      // Create unique filename
      const fileExt = file.name.split('.').pop();
      const fileName = `${jobId}_${Date.now()}.${fileExt}`;
      const filePath = `resumes/${fileName}`;

      // Upload to Supabase Storage
      const { error: uploadError } = await supabase.storage
        .from('job-applications')
        .upload(filePath, file);

      if (uploadError) throw uploadError;

      // Get public URL
      const { data: { publicUrl } } = supabase.storage
        .from('job-applications')
        .getPublicUrl(filePath);

      // Update application state
      setApplication(prev => ({ ...prev, resume_url: publicUrl }));

      toast({
        title: "Resume Uploaded",
        description: "Your resume has been uploaded successfully",
      });
    } catch (error) {
      console.error('Error uploading resume:', error);
      toast({
        title: "Upload Failed",
        description: "Failed to upload resume. Please try again.",
        variant: "destructive",
      });
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async () => {
    if (!validateStep(5)) {
      toast({
        title: "Incomplete Application",
        description: "Please complete all required fields",
        variant: "destructive",
      });
      return;
    }

    try {
      setSubmitting(true);
      const { error } = await supabase
        .from('job_applications')
        .insert([application]);

      if (error) {
        if (error.code === '23505') { // Unique constraint violation
          toast({
            title: "Application Already Exists",
            description: "You have already applied for this position",
            variant: "destructive",
          });
        } else {
          throw error;
        }
        return;
      }

      toast({
        title: "Application Submitted!",
        description: "Thank you for your application. We'll be in touch soon.",
      });

      navigate('/careers');
    } catch (error) {
      console.error('Error submitting application:', error);
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your application. Please try again.",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-8 h-8 animate-spin mx-auto mb-4" />
          <p>Loading job details...</p>
        </div>
      </div>
    );
  }

  if (!job) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <AlertCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h2 className="text-xl font-semibold mb-2">Job Not Found</h2>
          <p className="text-gray-600 mb-4">The job position you're looking for is no longer available.</p>
          <Button onClick={() => navigate('/careers')}>
            View All Jobs
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center gap-4">
            <Button variant="ghost" onClick={() => navigate('/careers')}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Jobs
            </Button>
            <Separator orientation="vertical" className="h-6" />
            <div>
              <h1 className="text-2xl font-bold">{job.title}</h1>
              <div className="flex items-center gap-4 text-sm text-gray-600 mt-1">
                <div className="flex items-center gap-1">
                  <Building2 className="w-4 h-4" />
                  {job.department}
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  {job.location}
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {job.employment_type}
                </div>
                <div className="flex items-center gap-1">
                  <Users className="w-4 h-4" />
                  {job.experience_level}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Progress Indicator */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              {Array.from({ length: totalSteps }, (_, i) => (
                <div key={i + 1} className="flex-1">
                  <div className="flex items-center">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                      i + 1 <= currentStep 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-gray-200 text-gray-600'
                    }`}>
                      {i + 1 < currentStep ? <CheckCircle className="w-4 h-4" /> : i + 1}
                    </div>
                    {i < totalSteps - 1 && (
                      <div className={`flex-1 h-1 mx-2 ${
                        i + 1 < currentStep ? 'bg-blue-600' : 'bg-gray-200'
                      }`} />
                    )}
                  </div>
                  <div className="text-xs text-gray-600 mt-1">
                    {['Personal', 'Experience', 'Skills', 'Projects', 'Final'][i]}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>
                Step {currentStep} of {totalSteps}: {
                  ['Personal Information', 'Professional Experience', 'Skills & Technologies', 'Projects & Motivation', 'Cover Letter & Availability'][currentStep - 1]
                }
              </CardTitle>
              <CardDescription>
                {['Tell us about yourself', 'Your professional background', 'Technical expertise', 'Show us your work', 'Final details'][currentStep - 1]}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Step 1: Personal Information */}
              {currentStep === 1 && (
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="first_name">First Name *</Label>
                      <Input
                        id="first_name"
                        value={application.first_name}
                        onChange={(e) => updateApplication('first_name', e.target.value)}
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <Label htmlFor="last_name">Last Name *</Label>
                      <Input
                        id="last_name"
                        value={application.last_name}
                        onChange={(e) => updateApplication('last_name', e.target.value)}
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={application.email}
                        onChange={(e) => updateApplication('email', e.target.value)}
                        placeholder="john.doe@example.com"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        value={application.phone}
                        onChange={(e) => updateApplication('phone', e.target.value)}
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="location">Current Location</Label>
                    <Input
                      id="location"
                      value={application.location}
                      onChange={(e) => updateApplication('location', e.target.value)}
                      placeholder="City, State/Country"
                    />
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="linkedin_url">LinkedIn Profile</Label>
                      <Input
                        id="linkedin_url"
                        value={application.linkedin_url}
                        onChange={(e) => updateApplication('linkedin_url', e.target.value)}
                        placeholder="https://linkedin.com/in/johndoe"
                      />
                    </div>
                    <div>
                      <Label htmlFor="portfolio_url">Portfolio Website</Label>
                      <Input
                        id="portfolio_url"
                        value={application.portfolio_url}
                        onChange={(e) => updateApplication('portfolio_url', e.target.value)}
                        placeholder="https://johndoe.dev"
                      />
                    </div>
                    <div>
                      <Label htmlFor="github_url">GitHub Profile</Label>
                      <Input
                        id="github_url"
                        value={application.github_url}
                        onChange={(e) => updateApplication('github_url', e.target.value)}
                        placeholder="https://github.com/johndoe"
                      />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="resume">Upload Resume *</Label>
                      <Input
                        id="resume"
                        type="file"
                        accept=".pdf,.doc,.docx"
                        onChange={handleResumeUpload}
                        disabled={uploading}
                        className="cursor-pointer"
                      />
                      {uploading && (
                        <p className="text-sm text-blue-600 mt-2 flex items-center gap-2">
                          <Loader2 className="h-4 w-4 animate-spin" />
                          Uploading resume...
                        </p>
                      )}
                      {application.resume_url && (
                        <p className="text-sm text-green-600 mt-2 flex items-center gap-2">
                          <CheckCircle className="h-4 w-4" />
                          Resume uploaded successfully
                        </p>
                      )}
                      <p className="text-sm text-gray-500 mt-1">
                        PDF or Word document, max 5MB
                      </p>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="willing_to_relocate"
                        checked={application.willing_to_relocate}
                        onCheckedChange={(checked) => updateApplication('willing_to_relocate', !!checked)}
                      />
                      <Label htmlFor="willing_to_relocate">Willing to relocate</Label>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Professional Experience */}
              {currentStep === 2 && (
                <div className="space-y-4">
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="current_position">Current Position *</Label>
                      <Input
                        id="current_position"
                        value={application.current_position}
                        onChange={(e) => updateApplication('current_position', e.target.value)}
                        placeholder="Senior Software Engineer"
                      />
                    </div>
                    <div>
                      <Label htmlFor="current_company">Current Company</Label>
                      <Input
                        id="current_company"
                        value={application.current_company}
                        onChange={(e) => updateApplication('current_company', e.target.value)}
                        placeholder="Tech Corp Inc."
                      />
                    </div>
                    <div>
                      <Label htmlFor="years_of_experience">Years of Experience *</Label>
                      <Input
                        id="years_of_experience"
                        type="number"
                        min="0"
                        max="50"
                        value={application.years_of_experience || ''}
                        onChange={(e) => updateApplication('years_of_experience', parseInt(e.target.value) || null)}
                        placeholder="5"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="expected_salary">Expected Salary Range</Label>
                    <Input
                      id="expected_salary"
                      value={application.expected_salary}
                      onChange={(e) => updateApplication('expected_salary', e.target.value)}
                      placeholder="$80,000 - $120,000"
                    />
                  </div>

                  <div>
                    <Label htmlFor="work_experience">Work Experience *</Label>
                    <Textarea
                      id="work_experience"
                      value={application.work_experience}
                      onChange={(e) => updateApplication('work_experience', e.target.value)}
                      placeholder="Describe your professional experience, key responsibilities, and achievements..."
                      rows={6}
                    />
                  </div>

                  <div>
                    <Label htmlFor="education_background">Education Background</Label>
                    <Textarea
                      id="education_background"
                      value={application.education_background}
                      onChange={(e) => updateApplication('education_background', e.target.value)}
                      placeholder="Degrees, certifications, relevant coursework..."
                      rows={4}
                    />
                  </div>
                </div>
              )}

              {/* Step 3: Skills & Technologies */}
              {currentStep === 3 && (
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="technical_skills">Technical Skills *</Label>
                    <Input
                      id="technical_skills"
                      value={skillsInput.technical}
                      onChange={(e) => updateSkillsInput('technical', e.target.value)}
                      placeholder="React, Node.js, AWS, Docker, MongoDB"
                    />
                    <p className="text-sm text-gray-500 mt-1">Separate skills with commas</p>
                  </div>

                  <div>
                    <Label htmlFor="programming_languages">Programming Languages *</Label>
                    <Input
                      id="programming_languages"
                      value={skillsInput.programming}
                      onChange={(e) => updateSkillsInput('programming', e.target.value)}
                      placeholder="JavaScript, Python, Java, TypeScript, Go"
                    />
                  </div>

                  <div>
                    <Label htmlFor="frameworks_tools">Frameworks & Tools</Label>
                    <Input
                      id="frameworks_tools"
                      value={skillsInput.frameworks}
                      onChange={(e) => updateSkillsInput('frameworks', e.target.value)}
                      placeholder="Express, Django, Spring Boot, Kubernetes, Jenkins"
                    />
                  </div>

                  <div>
                    <Label htmlFor="soft_skills">Soft Skills</Label>
                    <Input
                      id="soft_skills"
                      value={skillsInput.soft}
                      onChange={(e) => updateSkillsInput('soft', e.target.value)}
                      placeholder="Leadership, Communication, Problem Solving, Team Collaboration"
                    />
                  </div>

                  <div>
                    <Label htmlFor="certifications">Certifications</Label>
                    <Input
                      id="certifications"
                      value={skillsInput.certifications}
                      onChange={(e) => updateSkillsInput('certifications', e.target.value)}
                      placeholder="AWS Certified, PMP, Scrum Master, Google Cloud Professional"
                    />
                  </div>

                  <div>
                    <Label htmlFor="languages_spoken">Languages Spoken</Label>
                    <Input
                      id="languages_spoken"
                      value={skillsInput.languages}
                      onChange={(e) => updateSkillsInput('languages', e.target.value)}
                      placeholder="English (Native), Spanish (Fluent), Mandarin (Conversational)"
                    />
                  </div>

                  {/* Display selected skills */}
                  <div className="space-y-2">
                    {application.technical_skills.length > 0 && (
                      <div>
                        <p className="text-sm font-medium mb-1">Technical Skills:</p>
                        <div className="flex flex-wrap gap-1">
                          {application.technical_skills.map((skill, index) => (
                            <Badge key={index} variant="secondary">{skill}</Badge>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Step 4: Projects & Motivation */}
              {currentStep === 4 && (
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="projects">Projects & Portfolio *</Label>
                    <Textarea
                      id="projects"
                      value={application.projects}
                      onChange={(e) => updateApplication('projects', e.target.value)}
                      placeholder="Describe your key projects with links, technologies used, your role, and impact..."
                      rows={6}
                    />
                    <p className="text-sm text-gray-500 mt-1">Include project links, GitHub repos, live demos</p>
                  </div>

                  <div>
                    <Label htmlFor="achievements">Notable Achievements</Label>
                    <Textarea
                      id="achievements"
                      value={application.achievements}
                      onChange={(e) => updateApplication('achievements', e.target.value)}
                      placeholder="Awards, recognitions, performance metrics, successful project outcomes..."
                      rows={4}
                    />
                  </div>

                  <div>
                    <Label htmlFor="why_interested">Why are you interested in this position? *</Label>
                    <Textarea
                      id="why_interested"
                      value={application.why_interested}
                      onChange={(e) => updateApplication('why_interested', e.target.value)}
                      placeholder="What excites you about this role and our company? How does it align with your career goals?"
                      rows={5}
                    />
                  </div>
                </div>
              )}

              {/* Step 5: Cover Letter & Availability */}
              {currentStep === 5 && (
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="cover_letter">Cover Letter *</Label>
                    <Textarea
                      id="cover_letter"
                      value={application.cover_letter}
                      onChange={(e) => updateApplication('cover_letter', e.target.value)}
                      placeholder="Write a compelling cover letter explaining why you're the perfect fit for this role..."
                      rows={8}
                    />
                  </div>

                  <div>
                    <Label htmlFor="availability">Availability *</Label>
                    <Select
                      value={application.availability}
                      onValueChange={(value) => updateApplication('availability', value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="When can you start?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="immediately">Immediately</SelectItem>
                        <SelectItem value="1_week">1 Week</SelectItem>
                        <SelectItem value="2_weeks">2 Weeks</SelectItem>
                        <SelectItem value="1_month">1 Month</SelectItem>
                        <SelectItem value="2_months">2 Months</SelectItem>
                        <SelectItem value="3_months">3+ Months</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="additional_info">Additional Information</Label>
                    <Textarea
                      id="additional_info"
                      value={application.additional_info}
                      onChange={(e) => updateApplication('additional_info', e.target.value)}
                      placeholder="Anything else you'd like us to know?"
                      rows={4}
                    />
                  </div>

                  {/* Application Summary */}
                  <Card className="bg-blue-50">
                    <CardContent className="pt-6">
                      <h4 className="font-medium mb-4">Application Summary</h4>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <strong>Name:</strong> {application.first_name} {application.last_name}
                        </div>
                        <div>
                          <strong>Position:</strong> {job.title}
                        </div>
                        <div>
                          <strong>Experience:</strong> {application.years_of_experience} years
                        </div>
                        <div>
                          <strong>Location:</strong> {application.location}
                        </div>
                        <div className="col-span-2">
                          <strong>Key Skills:</strong> {application.technical_skills.slice(0, 5).join(', ')}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between pt-6">
                <Button
                  variant="outline"
                  onClick={prevStep}
                  disabled={currentStep === 1}
                >
                  Previous
                </Button>
                
                {currentStep < totalSteps ? (
                  <Button onClick={nextStep}>
                    Next Step
                  </Button>
                ) : (
                  <Button 
                    onClick={handleSubmit} 
                    disabled={submitting}
                    className="bg-blue-600 hover:bg-blue-700"
                  >
                    {submitting ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      'Submit Application'
                    )}
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
