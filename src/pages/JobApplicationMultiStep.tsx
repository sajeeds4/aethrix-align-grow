import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { 
  ArrowLeft, 
  ArrowRight,
  Building2, 
  MapPin, 
  Clock, 
  DollarSign, 
  Loader2, 
  CheckCircle,
  Save,
  User,
  Briefcase,
  Heart,
  FileText,
  Upload,
  X
} from 'lucide-react';

interface JobListing {
  id: string;
  title: string;
  department: string;
  location: string;
  employment_type: string;
  description: string;
  salary_range: string;
}

interface JobApplication {
  job_listing_id: string;
  full_name: string;
  email: string;
  phone: string;
  whatsapp_number?: string;
  current_address: string;
  city: string;
  state: string;
  country: string;
  postal_code?: string;
  current_position: string;
  current_company?: string;
  years_of_experience: number | null;
  highest_education: string;
  notice_period: string;
  expected_salary: string;
  current_salary?: string;
  willing_to_relocate: boolean;
  english_proficiency: string;
  hindi_proficiency?: string;
  other_languages?: string;
  linkedin_url?: string;
  why_interested: string;
  career_goals: string;
  strengths: string;
  cover_letter: string;
  resume_filename?: string;
  resume_data?: string;
  [key: string]: any;
}

const STEPS = [
  { id: 1, title: 'Personal Info', icon: User, fields: ['full_name', 'email', 'phone', 'whatsapp_number'] },
  { id: 2, title: 'Location & Background', icon: MapPin, fields: ['current_address', 'city', 'state', 'country', 'postal_code', 'current_position', 'current_company', 'years_of_experience', 'highest_education'] },
  { id: 3, title: 'Compensation', icon: DollarSign, fields: ['notice_period', 'expected_salary', 'current_salary', 'willing_to_relocate'] },
  { id: 4, title: 'Skills & Languages', icon: Briefcase, fields: ['english_proficiency', 'hindi_proficiency', 'other_languages', 'linkedin_url'] },
  { id: 5, title: 'Motivation', icon: Heart, fields: ['why_interested', 'career_goals', 'strengths', 'cover_letter'] },
];

export default function JobApplicationMultiStep() {
  const { jobId } = useParams<{ jobId: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [job, setJob] = useState<JobListing | null>(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [lastSaved, setLastSaved] = useState<Date | null>(null);
  
  const [application, setApplication] = useState<JobApplication>({
    job_listing_id: jobId || '',
    full_name: '',
    email: '',
    phone: '',
    whatsapp_number: '',
    current_address: '',
    city: '',
    state: '',
    country: 'India',
    postal_code: '',
    current_position: '',
    current_company: '',
    years_of_experience: null,
    highest_education: '',
    notice_period: '',
    expected_salary: '',
    current_salary: '',
    willing_to_relocate: false,
    english_proficiency: '',
    hindi_proficiency: '',
    other_languages: '',
    linkedin_url: '',
    why_interested: '',
    career_goals: '',
    strengths: '',
    cover_letter: '',
    resume_filename: '',
    resume_data: ''
  });

  // Auto-save to localStorage
  useEffect(() => {
    const savedData = localStorage.getItem(`job_application_${jobId}`);
    if (savedData) {
      try {
        const parsed = JSON.parse(savedData);
        setApplication(prev => ({ ...prev, ...parsed.data }));
        setCurrentStep(parsed.step || 1);
        setLastSaved(new Date(parsed.timestamp));
        toast({
          title: "Draft Restored",
          description: "Your previous application draft has been restored.",
        });
      } catch (error) {
        console.error('Error restoring draft:', error);
      }
    }
  }, [jobId]);

  // Save draft on changes
  useEffect(() => {
    const timer = setTimeout(() => {
      if (application.full_name || application.email) {
        localStorage.setItem(`job_application_${jobId}`, JSON.stringify({
          data: application,
          step: currentStep,
          timestamp: new Date().toISOString()
        }));
        setLastSaved(new Date());
      }
    }, 2000); // Save 2 seconds after last change

    return () => clearTimeout(timer);
  }, [application, currentStep, jobId]);

  useEffect(() => {
    if (jobId) {
      fetchJob();
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

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const validTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    if (!validTypes.includes(file.type)) {
      toast({
        title: "Invalid File Type",
        description: "Please upload a PDF or Word document",
        variant: "destructive",
      });
      return;
    }

    if (file.size > 2 * 1024 * 1024) {
      toast({
        title: "File Too Large",
        description: "Resume must be less than 2MB",
        variant: "destructive",
      });
      return;
    }

    try {
      const reader = new FileReader();
      reader.onload = () => {
        const base64 = reader.result as string;
        setApplication(prev => ({
          ...prev,
          resume_filename: file.name,
          resume_data: base64
        }));
        toast({
          title: "Resume Uploaded",
          description: `${file.name} has been attached`,
        });
      };
      reader.readAsDataURL(file);
    } catch (error) {
      console.error('Error reading file:', error);
      toast({
        title: "Upload Failed",
        description: "Failed to upload resume",
        variant: "destructive",
      });
    }
  };

  const validateStep = (step: number): boolean => {
    const stepFields = STEPS[step - 1].fields;
    const requiredFields = ['full_name', 'email', 'phone', 'current_address', 'city', 'state', 'country', 
                           'current_position', 'years_of_experience', 'highest_education', 'notice_period', 
                           'expected_salary', 'english_proficiency', 'why_interested', 'career_goals', 
                           'strengths', 'cover_letter'];
    
    const missingFields = stepFields.filter(field => 
      requiredFields.includes(field) && !application[field]
    );

    if (missingFields.length > 0) {
      toast({
        title: "Required Fields Missing",
        description: `Please fill in all required fields before continuing.`,
        variant: "destructive",
      });
      return false;
    }

    return true;
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, STEPS.length));
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateStep(currentStep)) return;

    try {
      setSubmitting(true);
      
      const cleanedApplication = {
        ...application,
        date_of_birth: application.date_of_birth || null,
        whatsapp_number: application.whatsapp_number || null,
        postal_code: application.postal_code || null,
        current_company: application.current_company || null,
        current_salary: application.current_salary || null,
        hindi_proficiency: application.hindi_proficiency || null,
        other_languages: application.other_languages || null,
        linkedin_url: application.linkedin_url || null,
        resume_filename: application.resume_filename || null,
        resume_data: application.resume_data || null,
      };
      
      // @ts-ignore - Supabase types need to be regenerated
      const { error } = await (supabase as any)
        .from('job_applications')
        .insert([cleanedApplication]);

      if (error) throw error;

      // Clear draft from localStorage
      localStorage.removeItem(`job_application_${jobId}`);

      toast({
        title: "Application Submitted!",
        description: "Thank you for your application. We'll be in touch soon.",
      });

      navigate('/careers');
    } catch (error: any) {
      console.error('Error submitting application:', error);
      toast({
        title: "Submission Failed",
        description: error.message || "There was an error submitting your application.",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
      </div>
    );
  }

  if (!job) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Job Not Found</h2>
          <Button onClick={() => navigate('/careers')}>Back to Careers</Button>
        </div>
      </div>
    );
  }

  const progress = (currentStep / STEPS.length) * 100;
  const StepIcon = STEPS[currentStep - 1].icon;

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <Button
          variant="ghost"
          onClick={() => navigate('/careers')}
          className="mb-6"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Careers
        </Button>

        {/* Job Details Card */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-3xl">{job.title}</CardTitle>
            <CardDescription>
              <div className="flex flex-wrap gap-4 mt-2">
                <div className="flex items-center text-gray-600">
                  <MapPin className="h-4 w-4 mr-1" />
                  {job.location}
                </div>
                <div className="flex items-center text-gray-600">
                  <Clock className="h-4 w-4 mr-1" />
                  {job.employment_type}
                </div>
                {job.salary_range && (
                  <div className="flex items-center text-gray-600">
                    <DollarSign className="h-4 w-4 mr-1" />
                    {job.salary_range}
                  </div>
                )}
              </div>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 whitespace-pre-line">{job.description}</p>
          </CardContent>
        </Card>

        {/* Application Form Card */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <StepIcon className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <CardTitle>Apply for this Position</CardTitle>
                  <CardDescription>
                    Step {currentStep} of {STEPS.length}: {STEPS[currentStep - 1].title}
                  </CardDescription>
                </div>
              </div>
              {lastSaved && (
                <div className="text-sm text-gray-500 flex items-center gap-2">
                  <Save className="w-4 h-4" />
                  Draft saved {Math.floor((new Date().getTime() - lastSaved.getTime()) / 1000)}s ago
                </div>
              )}
            </div>

            {/* Progress Bar */}
            <div className="space-y-2">
              <Progress value={progress} className="h-2" />
              <div className="flex justify-between text-xs text-gray-500">
                {STEPS.map(step => (
                  <div
                    key={step.id}
                    className={`flex-1 text-center ${
                      step.id === currentStep ? 'text-blue-600 font-semibold' : 
                      step.id < currentStep ? 'text-green-600' : ''
                    }`}
                  >
                    {step.id < currentStep ? '✓ ' : ''}{step.title}
                  </div>
                ))}
              </div>
            </div>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit}>
              {/* Step 1: Personal Info */}
              {currentStep === 1 && (
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="full_name">Full Name *</Label>
                    <Input
                      id="full_name"
                      value={application.full_name}
                      onChange={(e) => setApplication({ ...application, full_name: e.target.value })}
                      placeholder="Enter your full name"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={application.email}
                        onChange={(e) => setApplication({ ...application, email: e.target.value })}
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={application.phone}
                        onChange={(e) => setApplication({ ...application, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="whatsapp_number">WhatsApp Number (Optional)</Label>
                    <Input
                      id="whatsapp_number"
                      type="tel"
                      value={application.whatsapp_number}
                      onChange={(e) => setApplication({ ...application, whatsapp_number: e.target.value })}
                      placeholder="+91 98765 43210"
                    />
                    <p className="text-sm text-gray-500 mt-1">For quick communication</p>
                  </div>
                </div>
              )}

              {/* Step 2: Location & Background */}
              {currentStep === 2 && (
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="current_address">Current Address *</Label>
                    <Input
                      id="current_address"
                      value={application.current_address}
                      onChange={(e) => setApplication({ ...application, current_address: e.target.value })}
                      placeholder="Street address, apartment/unit number"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="city">City *</Label>
                      <Input
                        id="city"
                        value={application.city}
                        onChange={(e) => setApplication({ ...application, city: e.target.value })}
                        placeholder="Mumbai, Delhi, Bangalore, etc."
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="state">State/Province *</Label>
                      <Input
                        id="state"
                        value={application.state}
                        onChange={(e) => setApplication({ ...application, state: e.target.value })}
                        placeholder="Maharashtra, Karnataka, etc."
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="country">Country *</Label>
                      <Input
                        id="country"
                        value={application.country}
                        onChange={(e) => setApplication({ ...application, country: e.target.value })}
                        placeholder="India"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="postal_code">Postal/ZIP Code</Label>
                      <Input
                        id="postal_code"
                        value={application.postal_code}
                        onChange={(e) => setApplication({ ...application, postal_code: e.target.value })}
                        placeholder="400001"
                      />
                    </div>
                  </div>

                  <div className="border-t pt-4 mt-6">
                    <h3 className="text-lg font-semibold mb-4">Professional Background</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="current_position">Current Position *</Label>
                        <Input
                          id="current_position"
                          value={application.current_position}
                          onChange={(e) => setApplication({ ...application, current_position: e.target.value })}
                          placeholder="Sales Executive, BDR, etc."
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="current_company">Current Company</Label>
                        <Input
                          id="current_company"
                          value={application.current_company}
                          onChange={(e) => setApplication({ ...application, current_company: e.target.value })}
                          placeholder="Company name"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                      <div>
                        <Label htmlFor="years_of_experience">Years of Experience *</Label>
                        <Input
                          id="years_of_experience"
                          type="number"
                          min="0"
                          max="50"
                          value={application.years_of_experience ?? ''}
                          onChange={(e) => setApplication({ ...application, years_of_experience: parseInt(e.target.value) || 0 })}
                          placeholder="2"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="highest_education">Highest Education *</Label>
                        <Input
                          id="highest_education"
                          value={application.highest_education}
                          onChange={(e) => setApplication({ ...application, highest_education: e.target.value })}
                          placeholder="Bachelor's, Master's, etc."
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Compensation */}
              {currentStep === 3 && (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="notice_period">Notice Period *</Label>
                      <Input
                        id="notice_period"
                        value={application.notice_period}
                        onChange={(e) => setApplication({ ...application, notice_period: e.target.value })}
                        placeholder="Immediate, 15 days, 1 month, etc."
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="expected_salary">Expected Salary (Annual) *</Label>
                      <Input
                        id="expected_salary"
                        value={application.expected_salary}
                        onChange={(e) => setApplication({ ...application, expected_salary: e.target.value })}
                        placeholder="₹4-5 LPA or USD 40-55K"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="current_salary">Current Salary (Annual)</Label>
                    <Input
                      id="current_salary"
                      value={application.current_salary}
                      onChange={(e) => setApplication({ ...application, current_salary: e.target.value })}
                      placeholder="₹3 LPA (optional)"
                    />
                  </div>

                  <div className="flex items-center space-x-2 pt-4">
                    <input
                      type="checkbox"
                      id="willing_to_relocate"
                      checked={application.willing_to_relocate}
                      onChange={(e) => setApplication({ ...application, willing_to_relocate: e.target.checked })}
                      className="rounded border-gray-300"
                    />
                    <Label htmlFor="willing_to_relocate" className="cursor-pointer">
                      I am willing to relocate for this position
                    </Label>
                  </div>
                </div>
              )}

              {/* Step 4: Skills & Languages */}
              {currentStep === 4 && (
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="english_proficiency">English Proficiency *</Label>
                    <select
                      id="english_proficiency"
                      value={application.english_proficiency}
                      onChange={(e) => setApplication({ ...application, english_proficiency: e.target.value })}
                      className="w-full rounded-md border border-gray-300 p-2"
                      required
                    >
                      <option value="">Select proficiency level</option>
                      <option value="Basic">Basic</option>
                      <option value="Intermediate">Intermediate</option>
                      <option value="Fluent">Fluent</option>
                      <option value="Native">Native</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="hindi_proficiency">Hindi Proficiency</Label>
                      <select
                        id="hindi_proficiency"
                        value={application.hindi_proficiency}
                        onChange={(e) => setApplication({ ...application, hindi_proficiency: e.target.value })}
                        className="w-full rounded-md border border-gray-300 p-2"
                      >
                        <option value="">Select proficiency level</option>
                        <option value="Basic">Basic</option>
                        <option value="Intermediate">Intermediate</option>
                        <option value="Fluent">Fluent</option>
                        <option value="Native">Native</option>
                      </select>
                    </div>
                    <div>
                      <Label htmlFor="other_languages">Other Languages</Label>
                      <Input
                        id="other_languages"
                        value={application.other_languages}
                        onChange={(e) => setApplication({ ...application, other_languages: e.target.value })}
                        placeholder="Tamil, Telugu, etc."
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="linkedin_url">LinkedIn Profile URL</Label>
                    <Input
                      id="linkedin_url"
                      type="url"
                      value={application.linkedin_url}
                      onChange={(e) => setApplication({ ...application, linkedin_url: e.target.value })}
                      placeholder="https://linkedin.com/in/yourprofile"
                    />
                  </div>

                  <div className="border-t pt-4 mt-6">
                    <Label htmlFor="resume">Upload Resume (Recommended)</Label>
                    <div className="mt-2">
                      <input
                        id="resume"
                        type="file"
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileUpload}
                        className="hidden"
                      />
                      <Button
                        type="button"
                        variant={application.resume_filename ? "outline" : "default"}
                        className="w-full"
                        onClick={() => document.getElementById('resume')?.click()}
                      >
                        <Upload className="h-4 w-4 mr-2" />
                        {application.resume_filename ? 'Change Resume' : 'Choose File'}
                      </Button>
                      {application.resume_filename && (
                        <div className="flex items-center justify-between bg-green-50 border border-green-200 rounded-md p-3 mt-2">
                          <p className="text-sm text-green-700 flex items-center gap-2">
                            <CheckCircle className="h-4 w-4" />
                            <span className="font-medium">{application.resume_filename}</span>
                          </p>
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            onClick={() => setApplication(prev => ({
                              ...prev,
                              resume_filename: '',
                              resume_data: ''
                            }))}
                            className="text-red-600 hover:text-red-700 hover:bg-red-50"
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                      )}
                      <p className="text-sm text-gray-500 mt-2">
                        PDF or Word document, max 2MB
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 5: Motivation */}
              {currentStep === 5 && (
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="why_interested">Why are you interested in this position? *</Label>
                    <Textarea
                      id="why_interested"
                      value={application.why_interested}
                      onChange={(e) => setApplication({ ...application, why_interested: e.target.value })}
                      placeholder="Share what excites you about this opportunity..."
                      rows={4}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="career_goals">Career Goals *</Label>
                    <Textarea
                      id="career_goals"
                      value={application.career_goals}
                      onChange={(e) => setApplication({ ...application, career_goals: e.target.value })}
                      placeholder="Describe your short-term and long-term career aspirations..."
                      rows={4}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="strengths">Your Key Strengths *</Label>
                    <Textarea
                      id="strengths"
                      value={application.strengths}
                      onChange={(e) => setApplication({ ...application, strengths: e.target.value })}
                      placeholder="List your top 3-5 strengths that make you a great candidate..."
                      rows={3}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="cover_letter">Cover Letter *</Label>
                    <Textarea
                      id="cover_letter"
                      value={application.cover_letter}
                      onChange={(e) => setApplication({ ...application, cover_letter: e.target.value })}
                      placeholder="Tell us about your relevant experience, skills, and why you'd be a great fit..."
                      rows={6}
                      required
                    />
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between items-center pt-6 mt-6 border-t">
                {currentStep > 1 ? (
                  <Button
                    type="button"
                    variant="outline"
                    onClick={prevStep}
                    disabled={submitting}
                  >
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Previous
                  </Button>
                ) : (
                  <Button
                    type="button"
                    variant="ghost"
                    onClick={() => navigate('/careers')}
                    disabled={submitting}
                  >
                    Cancel
                  </Button>
                )}

                {currentStep < STEPS.length ? (
                  <Button
                    type="button"
                    onClick={nextStep}
                    disabled={submitting}
                  >
                    Next Step
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                ) : (
                  <Button type="submit" disabled={submitting}>
                    {submitting ? (
                      <>
                        <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        <CheckCircle className="h-4 w-4 mr-2" />
                        Submit Application
                      </>
                    )}
                  </Button>
                )}
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
