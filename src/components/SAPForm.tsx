import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Save, 
  X, 
  Info, 
  AlertTriangle, 
  CheckCircle,
  Calendar,
  Mail,
  Phone,
  Building,
  User,
  Globe,
  Lock,
  Eye,
  EyeOff
} from "lucide-react";
import { cn } from "@/lib/utils";

interface SAPFormFieldProps {
  label: string;
  required?: boolean;
  error?: string;
  info?: string;
  children: React.ReactNode;
  className?: string;
}

const SAPFormField = ({ label, required, error, info, children, className }: SAPFormFieldProps) => (
  <div className={cn("space-y-2", className)}>
    <div className="flex items-center gap-2">
      <Label className="text-sm font-medium text-gray-700">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </Label>
      {info && (
        <div className="relative group">
          <Info className="w-4 h-4 text-gray-400 cursor-help" />
          <div className="absolute left-0 top-6 z-10 w-64 p-2 bg-gray-900 text-white text-xs rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
            {info}
          </div>
        </div>
      )}
    </div>
    {children}
    {error && (
      <div className="flex items-center gap-1 text-sm text-red-600">
        <AlertTriangle className="w-4 h-4" />
        {error}
      </div>
    )}
  </div>
);

interface PersonalInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  title: string;
}

interface CompanyInfo {
  companyName: string;
  industry: string;
  size: string;
  website: string;
}

interface Preferences {
  contactMethod: string;
  newsletter: boolean;
  notifications: boolean;
}

interface Additional {
  priority: string;
  source: string;
  notes: string;
}

interface FormData {
  personalInfo: PersonalInfo;
  companyInfo: CompanyInfo;
  preferences: Preferences;
  additional: Additional;
}

interface SAPFormProps {
  title: string;
  description?: string;
  onSubmit: (data: FormData) => void;
  onCancel?: () => void;
  isLoading?: boolean;
  initialData?: Partial<FormData>;
}

export const SAPForm = ({ title, description, onSubmit, onCancel, isLoading, initialData }: SAPFormProps) => {
  const [formData, setFormData] = useState<FormData>({
    personalInfo: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      title: ''
    },
    companyInfo: {
      companyName: '',
      industry: '',
      size: '',
      website: ''
    },
    preferences: {
      contactMethod: 'email',
      newsletter: false,
      notifications: true
    },
    additional: {
      priority: 'medium',
      source: '',
      notes: ''
    },
    ...initialData
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [showPassword, setShowPassword] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    // Personal Info validation
    if (!formData.personalInfo.firstName) {
      newErrors['personalInfo.firstName'] = 'First name is required';
    }
    if (!formData.personalInfo.email) {
      newErrors['personalInfo.email'] = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.personalInfo.email)) {
      newErrors['personalInfo.email'] = 'Please enter a valid email address';
    }

    // Company Info validation
    if (!formData.companyInfo.companyName) {
      newErrors['companyInfo.companyName'] = 'Company name is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(formData);
    }
  };

  const updateFormData = (section: string, field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-4xl mx-auto space-y-6">
      {/* Form Header */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-xl font-semibold text-gray-900">{title}</CardTitle>
              {description && <CardDescription className="mt-1">{description}</CardDescription>}
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="text-xs">
                Draft
              </Badge>
              <Badge variant="secondary" className="text-xs">
                Auto-saved 2 min ago
              </Badge>
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* Personal Information Section */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <User className="w-5 h-5" />
            Personal Information
          </CardTitle>
          <CardDescription>
            Basic contact information and personal details
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <SAPFormField
              label="First Name"
              required
              error={errors['personalInfo.firstName']}
              info="Enter your legal first name as it appears on official documents"
            >
              <Input
                value={formData.personalInfo.firstName}
                onChange={(e) => updateFormData('personalInfo', 'firstName', e.target.value)}
                className={cn(
                  "h-10",
                  errors['personalInfo.firstName'] && "border-red-500 focus:border-red-500"
                )}
                placeholder="John"
              />
            </SAPFormField>

            <SAPFormField
              label="Last Name"
              required
              error={errors['personalInfo.lastName']}
            >
              <Input
                value={formData.personalInfo.lastName}
                onChange={(e) => updateFormData('personalInfo', 'lastName', e.target.value)}
                className="h-10"
                placeholder="Doe"
              />
            </SAPFormField>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <SAPFormField
              label="Email Address"
              required
              error={errors['personalInfo.email']}
              info="We'll use this email for all communications"
            >
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  type="email"
                  value={formData.personalInfo.email}
                  onChange={(e) => updateFormData('personalInfo', 'email', e.target.value)}
                  className={cn(
                    "pl-10 h-10",
                    errors['personalInfo.email'] && "border-red-500 focus:border-red-500"
                  )}
                  placeholder="john.doe@example.com"
                />
              </div>
            </SAPFormField>

            <SAPFormField
              label="Phone Number"
              info="Include country code for international numbers"
            >
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  type="tel"
                  value={formData.personalInfo.phone}
                  onChange={(e) => updateFormData('personalInfo', 'phone', e.target.value)}
                  className="pl-10 h-10"
                  placeholder="+1 (555) 123-4567"
                />
              </div>
            </SAPFormField>
          </div>

          <SAPFormField label="Job Title">
            <Input
              value={formData.personalInfo.title}
              onChange={(e) => updateFormData('personalInfo', 'title', e.target.value)}
              className="h-10"
              placeholder="Software Engineer"
            />
          </SAPFormField>
        </CardContent>
      </Card>

      {/* Company Information Section */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <Building className="w-5 h-5" />
            Company Information
          </CardTitle>
          <CardDescription>
            Details about your organization
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <SAPFormField
            label="Company Name"
            required
            error={errors['companyInfo.companyName']}
            info="Legal name of your organization"
          >
            <Input
              value={formData.companyInfo.companyName}
              onChange={(e) => updateFormData('companyInfo', 'companyName', e.target.value)}
              className={cn(
                "h-10",
                errors['companyInfo.companyName'] && "border-red-500 focus:border-red-500"
              )}
              placeholder="Acme Corporation"
            />
          </SAPFormField>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <SAPFormField label="Industry">
              <Select
                value={formData.companyInfo.industry}
                onValueChange={(value) => updateFormData('companyInfo', 'industry', value)}
              >
                <SelectTrigger className="h-10">
                  <SelectValue placeholder="Select industry" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="technology">Technology</SelectItem>
                  <SelectItem value="healthcare">Healthcare</SelectItem>
                  <SelectItem value="finance">Finance</SelectItem>
                  <SelectItem value="manufacturing">Manufacturing</SelectItem>
                  <SelectItem value="retail">Retail</SelectItem>
                  <SelectItem value="education">Education</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </SAPFormField>

            <SAPFormField label="Company Size">
              <Select
                value={formData.companyInfo.size}
                onValueChange={(value) => updateFormData('companyInfo', 'size', value)}
              >
                <SelectTrigger className="h-10">
                  <SelectValue placeholder="Select company size" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1-10">1-10 employees</SelectItem>
                  <SelectItem value="11-50">11-50 employees</SelectItem>
                  <SelectItem value="51-200">51-200 employees</SelectItem>
                  <SelectItem value="201-1000">201-1000 employees</SelectItem>
                  <SelectItem value="1000+">1000+ employees</SelectItem>
                </SelectContent>
              </Select>
            </SAPFormField>
          </div>

          <SAPFormField label="Website">
            <div className="relative">
              <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input
                type="url"
                value={formData.companyInfo.website}
                onChange={(e) => updateFormData('companyInfo', 'website', e.target.value)}
                className="pl-10 h-10"
                placeholder="https://www.example.com"
              />
            </div>
          </SAPFormField>
        </CardContent>
      </Card>

      {/* Preferences Section */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Communication Preferences</CardTitle>
          <CardDescription>
            How would you like us to communicate with you?
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <SAPFormField label="Preferred Contact Method">
            <RadioGroup
              value={formData.preferences.contactMethod}
              onValueChange={(value) => updateFormData('preferences', 'contactMethod', value)}
              className="flex gap-6"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="email" id="contact-email" />
                <Label htmlFor="contact-email">Email</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="phone" id="contact-phone" />
                <Label htmlFor="contact-phone">Phone</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="both" id="contact-both" />
                <Label htmlFor="contact-both">Both</Label>
              </div>
            </RadioGroup>
          </SAPFormField>

          <Separator />

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <Label className="text-sm font-medium">Newsletter Subscription</Label>
                <p className="text-sm text-gray-500">
                  Receive our monthly newsletter with updates and insights
                </p>
              </div>
              <Switch
                checked={formData.preferences.newsletter}
                onCheckedChange={(checked) => updateFormData('preferences', 'newsletter', checked)}
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <Label className="text-sm font-medium">System Notifications</Label>
                <p className="text-sm text-gray-500">
                  Get notified about important system updates
                </p>
              </div>
              <Switch
                checked={formData.preferences.notifications}
                onCheckedChange={(checked) => updateFormData('preferences', 'notifications', checked)}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Additional Information Section */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Additional Information</CardTitle>
          <CardDescription>
            Optional fields for better service customization
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <SAPFormField label="Priority Level">
              <Select
                value={formData.additional.priority}
                onValueChange={(value) => updateFormData('additional', 'priority', value)}
              >
                <SelectTrigger className="h-10">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="low">Low</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="high">High</SelectItem>
                  <SelectItem value="urgent">Urgent</SelectItem>
                </SelectContent>
              </Select>
            </SAPFormField>

            <SAPFormField label="How did you hear about us?">
              <Select
                value={formData.additional.source}
                onValueChange={(value) => updateFormData('additional', 'source', value)}
              >
                <SelectTrigger className="h-10">
                  <SelectValue placeholder="Select source" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="search">Search Engine</SelectItem>
                  <SelectItem value="social">Social Media</SelectItem>
                  <SelectItem value="referral">Referral</SelectItem>
                  <SelectItem value="advertisement">Advertisement</SelectItem>
                  <SelectItem value="event">Event/Conference</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </SAPFormField>
          </div>

          <SAPFormField
            label="Additional Notes"
            info="Any additional information or special requirements"
          >
            <Textarea
              value={formData.additional.notes}
              onChange={(e) => updateFormData('additional', 'notes', e.target.value)}
              className="min-h-[100px] resize-none"
              placeholder="Tell us more about your requirements..."
            />
          </SAPFormField>
        </CardContent>
      </Card>

      {/* Form Actions */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <CheckCircle className="w-4 h-4 text-green-500" />
              Form validation passed
            </div>
            
            <div className="flex gap-3">
              {onCancel && (
                <Button type="button" variant="outline" onClick={onCancel}>
                  <X className="w-4 h-4 mr-2" />
                  Cancel
                </Button>
              )}
              <Button type="button" variant="outline" disabled={isLoading}>
                Save as Draft
              </Button>
              <Button type="submit" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <div className="w-4 h-4 mr-2 animate-spin border-2 border-white border-t-transparent rounded-full" />
                    Processing...
                  </>
                ) : (
                  <>
                    <Save className="w-4 h-4 mr-2" />
                    Submit
                  </>
                )}
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </form>
  );
};
