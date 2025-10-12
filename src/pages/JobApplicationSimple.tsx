import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { ArrowLeft, Building2, MapPin, Clock, DollarSign, Loader2, CheckCircle } from 'lucide-react';

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
  // Basic Information
  full_name: string;
  email: string;
  phone: string;
  whatsapp_number?: string;
  date_of_birth?: string;
  gender?: string;
  
  // Location Details
  current_address: string;
  city: string;
  state: string;
  country: string;
  postal_code?: string;
  willing_to_relocate: boolean;
  preferred_work_location?: string;
  
  // Professional Information
  current_position: string;
  current_company?: string;
  current_company_industry?: string;
  years_of_experience: number | null;
  months_of_experience?: number;
  highest_education: string;
  university_name?: string;
  graduation_year?: number;
  major_field?: string;
  
  // Sales-Specific Experience
  sales_experience_years?: number;
  previous_sales_roles?: string;
  sales_tools_used?: string[];
  crm_experience?: string;
  monthly_sales_achieved?: string;
  key_achievements?: string;
  
  // Skills & Certifications
  technical_skills?: string[];
  soft_skills?: string[];
  certifications?: string[];
  sales_certifications?: string;
  
  // Availability & Compensation
  notice_period: string;
  earliest_join_date?: string;
  current_salary?: string;
  expected_salary: string;
  salary_negotiable?: boolean;
  
  // Language Skills
  english_proficiency: string;
  hindi_proficiency?: string;
  other_languages?: string;
  comfortable_with_cold_calling?: boolean;
  
  // Work Preferences
  preferred_shift?: string;
  work_from_home_preference?: string;
  comfortable_with_targets?: boolean;
  travel_willingness?: string;
  
  // Social & Professional Links
  linkedin_url?: string;
  portfolio_url?: string;
  github_url?: string;
  other_profile_url?: string;
  
  // References
  reference_name?: string;
  reference_company?: string;
  reference_phone?: string;
  reference_email?: string;
  
  // Motivation & Fit
  why_interested: string;
  why_sales?: string;
  career_goals: string;
  strengths: string;
  weaknesses?: string;
  cover_letter: string;
  additional_info?: string;
  
  // Resume
  resume_filename?: string;
  resume_data?: string;
  
  // Consent & Legal
  data_consent?: boolean;
  background_check_consent?: boolean;
}

export default function JobApplication() {
  const { jobId } = useParams<{ jobId: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [job, setJob] = useState<JobListing | null>(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [application, setApplication] = useState<JobApplication>({
    job_listing_id: jobId || '',
    // Basic Information
    full_name: '',
    email: '',
    phone: '',
    whatsapp_number: '',
    date_of_birth: '',
    gender: '',
    
    // Location Details
    current_address: '',
    city: '',
    state: '',
    country: 'India',
    postal_code: '',
    willing_to_relocate: false,
    preferred_work_location: '',
    
    // Professional Information
    current_position: '',
    current_company: '',
    current_company_industry: '',
    years_of_experience: null,
    months_of_experience: 0,
    highest_education: '',
    university_name: '',
    graduation_year: undefined,
    major_field: '',
    
    // Sales-Specific Experience
    sales_experience_years: 0,
    previous_sales_roles: '',
    sales_tools_used: [],
    crm_experience: '',
    monthly_sales_achieved: '',
    key_achievements: '',
    
    // Skills & Certifications
    technical_skills: [],
    soft_skills: [],
    certifications: [],
    sales_certifications: '',
    
    // Availability & Compensation
    notice_period: '',
    earliest_join_date: '',
    current_salary: '',
    expected_salary: '',
    salary_negotiable: true,
    
    // Language Skills
    english_proficiency: '',
    hindi_proficiency: '',
    other_languages: '',
    comfortable_with_cold_calling: false,
    
    // Work Preferences
    preferred_shift: '',
    work_from_home_preference: '',
    comfortable_with_targets: false,
    travel_willingness: '',
    
    // Social & Professional Links
    linkedin_url: '',
    portfolio_url: '',
    github_url: '',
    other_profile_url: '',
    
    // References
    reference_name: '',
    reference_company: '',
    reference_phone: '',
    reference_email: '',
    
    // Motivation & Fit
    why_interested: '',
    why_sales: '',
    career_goals: '',
    strengths: '',
    weaknesses: '',
    cover_letter: '',
    additional_info: '',
    
    // Resume
    resume_filename: '',
    resume_data: '',
    
    // Consent & Legal
    data_consent: false,
    background_check_consent: false
  });

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

    // Validate file type
    const validTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    if (!validTypes.includes(file.type)) {
      toast({
        title: "Invalid File Type",
        description: "Please upload a PDF or Word document (.pdf, .doc, .docx)",
        variant: "destructive",
      });
      return;
    }

    // Validate file size (2MB max to avoid database issues)
    if (file.size > 2 * 1024 * 1024) {
      toast({
        title: "File Too Large",
        description: "Resume must be less than 2MB",
        variant: "destructive",
      });
      return;
    }

    try {
      // Convert file to base64
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
          description: `${file.name} has been attached to your application`,
        });
      };
      reader.onerror = () => {
        toast({
          title: "Upload Failed",
          description: "Failed to read file. Please try again.",
          variant: "destructive",
        });
      };
      reader.readAsDataURL(file);
    } catch (error) {
      console.error('Error reading file:', error);
      toast({
        title: "Upload Failed",
        description: "Failed to upload resume. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate
    if (!application.full_name || !application.email || !application.phone || 
        !application.current_position || application.years_of_experience === null || 
        !application.cover_letter) {
      toast({
        title: "Incomplete Form",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    try {
      setSubmitting(true);
      
      // Clean up data: convert empty strings to null for optional fields
      const cleanedApplication = {
        ...application,
        // Convert empty date strings to null
        date_of_birth: application.date_of_birth || null,
        earliest_join_date: application.earliest_join_date || null,
        graduation_year: application.graduation_year || null,
        // Convert empty strings to null for optional text fields
        whatsapp_number: application.whatsapp_number || null,
        gender: application.gender || null,
        postal_code: application.postal_code || null,
        preferred_work_location: application.preferred_work_location || null,
        current_company: application.current_company || null,
        current_company_industry: application.current_company_industry || null,
        university_name: application.university_name || null,
        major_field: application.major_field || null,
        sales_experience_years: application.sales_experience_years || null,
        previous_sales_roles: application.previous_sales_roles || null,
        crm_experience: application.crm_experience || null,
        monthly_sales_achieved: application.monthly_sales_achieved || null,
        key_achievements: application.key_achievements || null,
        sales_certifications: application.sales_certifications || null,
        current_salary: application.current_salary || null,
        hindi_proficiency: application.hindi_proficiency || null,
        other_languages: application.other_languages || null,
        preferred_shift: application.preferred_shift || null,
        work_from_home_preference: application.work_from_home_preference || null,
        travel_willingness: application.travel_willingness || null,
        linkedin_url: application.linkedin_url || null,
        portfolio_url: application.portfolio_url || null,
        github_url: application.github_url || null,
        other_profile_url: application.other_profile_url || null,
        reference_name: application.reference_name || null,
        reference_company: application.reference_company || null,
        reference_phone: application.reference_phone || null,
        reference_email: application.reference_email || null,
        why_sales: application.why_sales || null,
        weaknesses: application.weaknesses || null,
        additional_info: application.additional_info || null,
        resume_filename: application.resume_filename || null,
        resume_data: application.resume_data || null,
      };
      
      // @ts-ignore - Supabase types need to be regenerated after schema change
      const { error } = await (supabase as any)
        .from('job_applications')
        .insert([cleanedApplication]);

      if (error) throw error;

      toast({
        title: "Application Submitted!",
        description: "Thank you for your application. We'll be in touch soon.",
      });

      navigate('/careers');
    } catch (error: any) {
      console.error('Error submitting application:', error);
      toast({
        title: "Submission Failed",
        description: error.message || "There was an error submitting your application. Please try again.",
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

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
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
                  <Building2 className="h-4 w-4 mr-1" />
                  {job.department}
                </div>
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
            <div className="prose max-w-none">
              <p className="text-gray-700 whitespace-pre-line">{job.description}</p>
            </div>
          </CardContent>
        </Card>

        {/* Application Form */}
        <Card>
          <CardHeader>
            <CardTitle>Apply for this Position</CardTitle>
            <CardDescription>Complete application for India/Asia region positions</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Personal Information Section */}
              <div className="border-b pb-4">
                <h3 className="text-lg font-semibold mb-4">Personal Information</h3>
                
                <div className="space-y-4">
                  {/* Full Name */}
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

                  {/* Email & Phone */}
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

                  {/* WhatsApp Number */}
                  <div>
                    <Label htmlFor="whatsapp_number">WhatsApp Number (Optional)</Label>
                    <Input
                      id="whatsapp_number"
                      type="tel"
                      value={application.whatsapp_number}
                      onChange={(e) => setApplication({ ...application, whatsapp_number: e.target.value })}
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>
              </div>

              {/* Location Details Section */}
              <div className="border-b pb-4">
                <h3 className="text-lg font-semibold mb-4">Location Details</h3>
                
                <div className="space-y-4">
                  {/* Current Address */}
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

                  {/* City & State */}
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

                  {/* Country & Postal Code */}
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
                      <Label htmlFor="postal_code">Postal/ZIP Code (Optional)</Label>
                      <Input
                        id="postal_code"
                        value={application.postal_code}
                        onChange={(e) => setApplication({ ...application, postal_code: e.target.value })}
                        placeholder="400001"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Professional Information Section */}
              <div className="border-b pb-4">
                <h3 className="text-lg font-semibold mb-4">Professional Information</h3>
                
                <div className="space-y-4">
                  {/* Current Position & Company */}
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
                      <Label htmlFor="current_company">Current Company (Optional)</Label>
                      <Input
                        id="current_company"
                        value={application.current_company}
                        onChange={(e) => setApplication({ ...application, current_company: e.target.value })}
                        placeholder="Company name"
                      />
                    </div>
                  </div>

                  {/* Experience & Education */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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

              {/* Compensation & Availability Section */}
              <div className="border-b pb-4">
                <h3 className="text-lg font-semibold mb-4">Compensation & Availability</h3>
                
                <div className="space-y-4">
                  {/* Notice Period & Expected Salary */}
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

                  {/* Current Salary */}
                  <div>
                    <Label htmlFor="current_salary">Current Salary (Annual, Optional)</Label>
                    <Input
                      id="current_salary"
                      value={application.current_salary}
                      onChange={(e) => setApplication({ ...application, current_salary: e.target.value })}
                      placeholder="₹3 LPA"
                    />
                  </div>

                  {/* Willing to Relocate */}
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="willing_to_relocate"
                      checked={application.willing_to_relocate}
                      onChange={(e) => setApplication({ ...application, willing_to_relocate: e.target.checked })}
                      className="h-4 w-4 rounded border-gray-300"
                    />
                    <Label htmlFor="willing_to_relocate" className="font-normal cursor-pointer">
                      I am willing to relocate if required
                    </Label>
                  </div>
                </div>
              </div>

              {/* Language Skills Section */}
              <div className="border-b pb-4">
                <h3 className="text-lg font-semibold mb-4">Language Skills</h3>
                
                <div className="space-y-4">
                  {/* English Proficiency & Other Languages */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="english_proficiency">English Proficiency *</Label>
                      <Input
                        id="english_proficiency"
                        value={application.english_proficiency}
                        onChange={(e) => setApplication({ ...application, english_proficiency: e.target.value })}
                        placeholder="Basic, Intermediate, Fluent, Native"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="other_languages">Other Languages (Optional)</Label>
                      <Input
                        id="other_languages"
                        value={application.other_languages}
                        onChange={(e) => setApplication({ ...application, other_languages: e.target.value })}
                        placeholder="Hindi, Tamil, etc."
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Details Section */}
              <div className="border-b pb-4">
                <h3 className="text-lg font-semibold mb-4">Additional Details</h3>
                
                <div className="space-y-4">
                  {/* LinkedIn URL */}
                  <div>
                    <Label htmlFor="linkedin_url">LinkedIn Profile (Optional)</Label>
                    <Input
                      id="linkedin_url"
                      type="url"
                      value={application.linkedin_url}
                      onChange={(e) => setApplication({ ...application, linkedin_url: e.target.value })}
                      placeholder="https://linkedin.com/in/yourprofile"
                    />
                  </div>

                  {/* Why Interested */}
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

                  {/* Career Goals */}
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

                  {/* Strengths */}
                  <div>
                    <Label htmlFor="strengths">Your Key Strengths *</Label>
                    <Textarea
                      id="strengths"
                      value={application.strengths}
                      onChange={(e) => setApplication({ ...application, strengths: e.target.value })}
                      placeholder="List your top 3-5 strengths that make you a great candidate for this role..."
                      rows={3}
                      required
                    />
                  </div>

                  {/* Cover Letter */}
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

                  {/* Resume Upload */}
                  <div>
                    <Label htmlFor="resume">Upload Resume (Optional but Recommended)</Label>
                    <Input
                      id="resume"
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileUpload}
                      className="cursor-pointer"
                    />
                    {application.resume_filename && (
                      <p className="text-sm text-green-600 mt-2 flex items-center gap-2">
                        <CheckCircle className="h-4 w-4" />
                        Attached: {application.resume_filename}
                      </p>
                    )}
                    <p className="text-sm text-gray-500 mt-1">
                      PDF or Word document, max 2MB
                    </p>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex justify-end gap-4 pt-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => navigate('/careers')}
                  disabled={submitting}
                >
                  Cancel
                </Button>
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
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
