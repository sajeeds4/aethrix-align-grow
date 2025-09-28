import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  ChevronDown, 
  ChevronRight, 
  Shield, 
  Globe, 
  Users, 
  FileText, 
  Cookie, 
  Database, 
  Lock, 
  AlertTriangle,
  CheckCircle,
  ExternalLink,
  Calendar,
  Mail,
  Phone
} from 'lucide-react';

export default function PrivacyPolicy() {
  const [openSections, setOpenSections] = useState<string[]>(['overview']);

  const toggleSection = (sectionId: string) => {
    setOpenSections(prev => 
      prev.includes(sectionId) 
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const lastUpdated = "December 15, 2024";
  const effectiveDate = "January 1, 2024";

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
          <div className="flex justify-center items-center gap-4 text-sm text-gray-600 mb-6">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              Last Updated: {lastUpdated}
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4" />
              Effective: {effectiveDate}
            </div>
          </div>
          <div className="flex justify-center gap-2 mb-6">
            <Badge variant="outline" className="text-xs">
              <Globe className="w-3 h-3 mr-1" />
              GDPR Compliant
            </Badge>
            <Badge variant="outline" className="text-xs">
              <Shield className="w-3 h-3 mr-1" />
              CCPA Compliant
            </Badge>
            <Badge variant="outline" className="text-xs">
              <Users className="w-3 h-3 mr-1" />
              COPPA Compliant
            </Badge>
          </div>
        </div>

        {/* Quick Navigation */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="w-5 h-5" />
              Quick Navigation
            </CardTitle>
            <CardDescription>
              Jump to specific sections of our privacy policy
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Link to="/privacy/data-protection" className="flex items-center gap-2 p-2 rounded hover:bg-gray-100 text-sm">
                <Database className="w-4 h-4 text-blue-600" />
                Data Protection
              </Link>
              <Link to="/privacy/cookies" className="flex items-center gap-2 p-2 rounded hover:bg-gray-100 text-sm">
                <Cookie className="w-4 h-4 text-orange-600" />
                Cookie Policy
              </Link>
              <Link to="/privacy/accessibility" className="flex items-center gap-2 p-2 rounded hover:bg-gray-100 text-sm">
                <Users className="w-4 h-4 text-green-600" />
                Accessibility
              </Link>
              <Link to="/terms" className="flex items-center gap-2 p-2 rounded hover:bg-gray-100 text-sm">
                <Shield className="w-4 h-4 text-purple-600" />
                Terms of Service
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Main Content */}
        <div className="space-y-6">
          
          {/* Overview Section */}
          <Card>
            <Collapsible 
              open={openSections.includes('overview')} 
              onOpenChange={() => toggleSection('overview')}
            >
              <CollapsibleTrigger asChild>
                <CardHeader className="cursor-pointer hover:bg-gray-50">
                  <CardTitle className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Shield className="w-5 h-5 text-blue-600" />
                      Privacy Overview
                    </div>
                    {openSections.includes('overview') ? 
                      <ChevronDown className="w-5 h-5" /> : 
                      <ChevronRight className="w-5 h-5" />
                    }
                  </CardTitle>
                  <CardDescription>
                    How Aethrix protects your personal information and privacy rights
                  </CardDescription>
                </CardHeader>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <CardContent>
                  <div className="prose max-w-none">
                    <p className="text-gray-700 leading-relaxed mb-4">
                      At Aethrix ("we," "our," or "us"), we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our services, or engage with us in any way.
                    </p>
                    
                    <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
                      <div className="flex items-start">
                        <AlertTriangle className="w-5 h-5 text-blue-400 mr-2 mt-0.5" />
                        <div>
                          <p className="text-blue-800 font-medium">Important Notice</p>
                          <p className="text-blue-700 text-sm mt-1">
                            This policy complies with applicable laws in the United States (including CCPA, COPPA) and European Union (GDPR). Specific rights may vary based on your jurisdiction.
                          </p>
                        </div>
                      </div>
                    </div>

                    <h4 className="font-semibold text-lg mb-3">Key Privacy Principles</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                        <div>
                          <h5 className="font-medium">Transparency</h5>
                          <p className="text-sm text-gray-600">Clear information about data collection and use</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                        <div>
                          <h5 className="font-medium">Data Minimization</h5>
                          <p className="text-sm text-gray-600">Collect only necessary information</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                        <div>
                          <h5 className="font-medium">Security</h5>
                          <p className="text-sm text-gray-600">Industry-standard protection measures</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                        <div>
                          <h5 className="font-medium">User Control</h5>
                          <p className="text-sm text-gray-600">Options to manage your data and privacy</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </CollapsibleContent>
            </Collapsible>
          </Card>

          {/* Information We Collect */}
          <Card>
            <Collapsible 
              open={openSections.includes('collection')} 
              onOpenChange={() => toggleSection('collection')}
            >
              <CollapsibleTrigger asChild>
                <CardHeader className="cursor-pointer hover:bg-gray-50">
                  <CardTitle className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Database className="w-5 h-5 text-green-600" />
                      Information We Collect
                    </div>
                    {openSections.includes('collection') ? 
                      <ChevronDown className="w-5 h-5" /> : 
                      <ChevronRight className="w-5 h-5" />
                    }
                  </CardTitle>
                  <CardDescription>
                    Types of personal and non-personal information we collect
                  </CardDescription>
                </CardHeader>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <CardContent>
                  <Tabs defaultValue="personal" className="w-full">
                    <TabsList className="grid w-full grid-cols-3">
                      <TabsTrigger value="personal">Personal Data</TabsTrigger>
                      <TabsTrigger value="technical">Technical Data</TabsTrigger>
                      <TabsTrigger value="usage">Usage Data</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="personal" className="mt-4">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Data Category</TableHead>
                            <TableHead>Examples</TableHead>
                            <TableHead>Collection Method</TableHead>
                            <TableHead>Purpose</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          <TableRow>
                            <TableCell className="font-medium">Contact Information</TableCell>
                            <TableCell>Name, email, phone number, address</TableCell>
                            <TableCell>Forms, account registration</TableCell>
                            <TableCell>Communication, service delivery</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">Professional Information</TableCell>
                            <TableCell>Job title, company, industry, experience</TableCell>
                            <TableCell>Career applications, consultations</TableCell>
                            <TableCell>Recruitment, service customization</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">Account Data</TableCell>
                            <TableCell>Username, password, preferences</TableCell>
                            <TableCell>Account creation, settings</TableCell>
                            <TableCell>Authentication, personalization</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">Financial Information</TableCell>
                            <TableCell>Billing address, payment method</TableCell>
                            <TableCell>Payment processing</TableCell>
                            <TableCell>Transaction processing, invoicing</TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </TabsContent>
                    
                    <TabsContent value="technical" className="mt-4">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Data Type</TableHead>
                            <TableHead>Description</TableHead>
                            <TableHead>Collection Method</TableHead>
                            <TableHead>Retention Period</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          <TableRow>
                            <TableCell className="font-medium">Device Information</TableCell>
                            <TableCell>IP address, browser type, operating system</TableCell>
                            <TableCell>Automatic collection</TableCell>
                            <TableCell>30 days</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">Cookies & Tracking</TableCell>
                            <TableCell>Session cookies, preference cookies</TableCell>
                            <TableCell>Browser storage</TableCell>
                            <TableCell>Session or 1 year</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">Log Data</TableCell>
                            <TableCell>Access logs, error logs, performance data</TableCell>
                            <TableCell>Server logs</TableCell>
                            <TableCell>90 days</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">Location Data</TableCell>
                            <TableCell>Approximate location based on IP</TableCell>
                            <TableCell>IP geolocation</TableCell>
                            <TableCell>30 days</TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </TabsContent>
                    
                    <TabsContent value="usage" className="mt-4">
                      <div className="space-y-4">
                        <div className="grid md:grid-cols-2 gap-4">
                          <Card>
                            <CardHeader className="pb-2">
                              <CardTitle className="text-sm">Website Analytics</CardTitle>
                            </CardHeader>
                            <CardContent className="text-sm">
                              <ul className="space-y-1 text-gray-600">
                                <li>• Page views and navigation patterns</li>
                                <li>• Time spent on pages</li>
                                <li>• Click-through rates</li>
                                <li>• Search queries within our site</li>
                                <li>• Referral sources</li>
                              </ul>
                            </CardContent>
                          </Card>
                          
                          <Card>
                            <CardHeader className="pb-2">
                              <CardTitle className="text-sm">Service Usage</CardTitle>
                            </CardHeader>
                            <CardContent className="text-sm">
                              <ul className="space-y-1 text-gray-600">
                                <li>• Feature usage and preferences</li>
                                <li>• Service requests and interactions</li>
                                <li>• Support ticket data</li>
                                <li>• Consultation session data</li>
                                <li>• Project collaboration data</li>
                              </ul>
                            </CardContent>
                          </Card>
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </CollapsibleContent>
            </Collapsible>
          </Card>

          {/* How We Use Information */}
          <Card>
            <Collapsible 
              open={openSections.includes('usage')} 
              onOpenChange={() => toggleSection('usage')}
            >
              <CollapsibleTrigger asChild>
                <CardHeader className="cursor-pointer hover:bg-gray-50">
                  <CardTitle className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Users className="w-5 h-5 text-purple-600" />
                      How We Use Your Information
                    </div>
                    {openSections.includes('usage') ? 
                      <ChevronDown className="w-5 h-5" /> : 
                      <ChevronRight className="w-5 h-5" />
                    }
                  </CardTitle>
                  <CardDescription>
                    Legal bases and purposes for processing your personal data
                  </CardDescription>
                </CardHeader>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <CardContent>
                  <div className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-3 flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          Primary Uses
                        </h4>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start gap-2">
                            <span className="w-2 h-2 bg-blue-600 rounded-full mt-2"></span>
                            Provide and maintain our services
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="w-2 h-2 bg-blue-600 rounded-full mt-2"></span>
                            Process transactions and payments
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="w-2 h-2 bg-blue-600 rounded-full mt-2"></span>
                            Communicate about services and updates
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="w-2 h-2 bg-blue-600 rounded-full mt-2"></span>
                            Provide customer support
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="w-2 h-2 bg-blue-600 rounded-full mt-2"></span>
                            Improve our website and services
                          </li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-3 flex items-center gap-2">
                          <Lock className="w-4 h-4 text-orange-600" />
                          Legal Bases (GDPR)
                        </h4>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start gap-2">
                            <span className="w-2 h-2 bg-orange-600 rounded-full mt-2"></span>
                            Consent (marketing communications)
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="w-2 h-2 bg-orange-600 rounded-full mt-2"></span>
                            Contract performance (service delivery)
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="w-2 h-2 bg-orange-600 rounded-full mt-2"></span>
                            Legitimate interests (business operations)
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="w-2 h-2 bg-orange-600 rounded-full mt-2"></span>
                            Legal obligations (compliance)
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="w-2 h-2 bg-orange-600 rounded-full mt-2"></span>
                            Vital interests (security purposes)
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h5 className="font-medium mb-2">Automated Decision Making</h5>
                      <p className="text-sm text-gray-700">
                        We may use automated systems to analyze data for fraud prevention, security monitoring, 
                        and service optimization. You have the right to request human review of automated decisions 
                        that significantly affect you.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </CollapsibleContent>
            </Collapsible>
          </Card>

          {/* Information Sharing */}
          <Card>
            <Collapsible 
              open={openSections.includes('sharing')} 
              onOpenChange={() => toggleSection('sharing')}
            >
              <CollapsibleTrigger asChild>
                <CardHeader className="cursor-pointer hover:bg-gray-50">
                  <CardTitle className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Globe className="w-5 h-5 text-red-600" />
                      Information Sharing & Disclosure
                    </div>
                    {openSections.includes('sharing') ? 
                      <ChevronDown className="w-5 h-5" /> : 
                      <ChevronRight className="w-5 h-5" />
                    }
                  </CardTitle>
                  <CardDescription>
                    When and how we share your information with third parties
                  </CardDescription>
                </CardHeader>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Third Party Category</TableHead>
                        <TableHead>Data Shared</TableHead>
                        <TableHead>Purpose</TableHead>
                        <TableHead>Safeguards</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">Service Providers</TableCell>
                        <TableCell>Contact info, usage data</TableCell>
                        <TableCell>Cloud hosting, analytics, payment processing</TableCell>
                        <TableCell>Data processing agreements, encryption</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Business Partners</TableCell>
                        <TableCell>Professional information</TableCell>
                        <TableCell>Joint services, referrals</TableCell>
                        <TableCell>Contractual obligations, limited access</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Legal Authorities</TableCell>
                        <TableCell>As legally required</TableCell>
                        <TableCell>Compliance with laws, court orders</TableCell>
                        <TableCell>Minimal disclosure, legal review</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Business Transfers</TableCell>
                        <TableCell>All collected data</TableCell>
                        <TableCell>Merger, acquisition, asset sale</TableCell>
                        <TableCell>Prior notice, continued protection</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                  
                  <div className="mt-6 bg-red-50 border-l-4 border-red-400 p-4">
                    <div className="flex items-start">
                      <AlertTriangle className="w-5 h-5 text-red-400 mr-2 mt-0.5" />
                      <div>
                        <p className="text-red-800 font-medium">We Never Sell Personal Data</p>
                        <p className="text-red-700 text-sm mt-1">
                          Aethrix does not sell, rent, or lease your personal information to third parties for marketing purposes. Any data sharing is limited to the purposes outlined above.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </CollapsibleContent>
            </Collapsible>
          </Card>

          {/* Your Privacy Rights */}
          <Card>
            <Collapsible 
              open={openSections.includes('rights')} 
              onOpenChange={() => toggleSection('rights')}
            >
              <CollapsibleTrigger asChild>
                <CardHeader className="cursor-pointer hover:bg-gray-50">
                  <CardTitle className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Shield className="w-5 h-5 text-indigo-600" />
                      Your Privacy Rights
                    </div>
                    {openSections.includes('rights') ? 
                      <ChevronDown className="w-5 h-5" /> : 
                      <ChevronRight className="w-5 h-5" />
                    }
                  </CardTitle>
                  <CardDescription>
                    Your rights under GDPR, CCPA, and other privacy laws
                  </CardDescription>
                </CardHeader>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <CardContent>
                  <Tabs defaultValue="gdpr" className="w-full">
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="gdpr">EU (GDPR) Rights</TabsTrigger>
                      <TabsTrigger value="ccpa">California (CCPA) Rights</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="gdpr" className="mt-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <Card>
                          <CardHeader className="pb-2">
                            <CardTitle className="text-sm flex items-center gap-2">
                              <Database className="w-4 h-4" />
                              Access & Portability
                            </CardTitle>
                          </CardHeader>
                          <CardContent className="text-sm">
                            <p className="text-gray-600 mb-2">Right to access your personal data and receive a copy in a structured format.</p>
                            <Button size="sm" variant="outline" className="w-full">Request Data Export</Button>
                          </CardContent>
                        </Card>
                        
                        <Card>
                          <CardHeader className="pb-2">
                            <CardTitle className="text-sm flex items-center gap-2">
                              <Users className="w-4 h-4" />
                              Rectification
                            </CardTitle>
                          </CardHeader>
                          <CardContent className="text-sm">
                            <p className="text-gray-600 mb-2">Right to correct inaccurate or incomplete personal data.</p>
                            <Button size="sm" variant="outline" className="w-full">Update Information</Button>
                          </CardContent>
                        </Card>
                        
                        <Card>
                          <CardHeader className="pb-2">
                            <CardTitle className="text-sm flex items-center gap-2">
                              <AlertTriangle className="w-4 h-4" />
                              Erasure ("Right to be Forgotten")
                            </CardTitle>
                          </CardHeader>
                          <CardContent className="text-sm">
                            <p className="text-gray-600 mb-2">Right to deletion of personal data under certain circumstances.</p>
                            <Button size="sm" variant="outline" className="w-full">Request Deletion</Button>
                          </CardContent>
                        </Card>
                        
                        <Card>
                          <CardHeader className="pb-2">
                            <CardTitle className="text-sm flex items-center gap-2">
                              <Lock className="w-4 h-4" />
                              Restrict Processing
                            </CardTitle>
                          </CardHeader>
                          <CardContent className="text-sm">
                            <p className="text-gray-600 mb-2">Right to limit how we process your personal data.</p>
                            <Button size="sm" variant="outline" className="w-full">Restrict Processing</Button>
                          </CardContent>
                        </Card>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="ccpa" className="mt-4">
                      <div className="space-y-4">
                        <div className="bg-blue-50 p-4 rounded-lg">
                          <h5 className="font-medium mb-2">CCPA Rights for California Residents</h5>
                          <p className="text-sm text-gray-700">
                            Under the California Consumer Privacy Act, California residents have specific rights regarding their personal information.
                          </p>
                        </div>
                        
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="space-y-3">
                            <div className="flex items-start gap-3">
                              <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                              <div>
                                <h6 className="font-medium">Know</h6>
                                <p className="text-sm text-gray-600">What personal information we collect and how it's used</p>
                              </div>
                            </div>
                            <div className="flex items-start gap-3">
                              <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                              <div>
                                <h6 className="font-medium">Delete</h6>
                                <p className="text-sm text-gray-600">Request deletion of personal information</p>
                              </div>
                            </div>
                          </div>
                          
                          <div className="space-y-3">
                            <div className="flex items-start gap-3">
                              <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                              <div>
                                <h6 className="font-medium">Opt-Out</h6>
                                <p className="text-sm text-gray-600">Opt-out of sale of personal information</p>
                              </div>
                            </div>
                            <div className="flex items-start gap-3">
                              <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                              <div>
                                <h6 className="font-medium">Non-Discrimination</h6>
                                <p className="text-sm text-gray-600">Not be discriminated against for exercising rights</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </CollapsibleContent>
            </Collapsible>
          </Card>

          {/* Data Security */}
          <Card>
            <Collapsible 
              open={openSections.includes('security')} 
              onOpenChange={() => toggleSection('security')}
            >
              <CollapsibleTrigger asChild>
                <CardHeader className="cursor-pointer hover:bg-gray-50">
                  <CardTitle className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Lock className="w-5 h-5 text-green-600" />
                      Data Security & Retention
                    </div>
                    {openSections.includes('security') ? 
                      <ChevronDown className="w-5 h-5" /> : 
                      <ChevronRight className="w-5 h-5" />
                    }
                  </CardTitle>
                  <CardDescription>
                    How we protect your data and retention policies
                  </CardDescription>
                </CardHeader>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3">Security Measures</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          SSL/TLS encryption for data transmission
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          AES-256 encryption for data at rest
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          Multi-factor authentication
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          Regular security audits and monitoring
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          Employee training and access controls
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          Incident response procedures
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-3">Data Retention Periods</h4>
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Data Type</TableHead>
                            <TableHead>Retention Period</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          <TableRow>
                            <TableCell>Contact Forms</TableCell>
                            <TableCell>2 years</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>Job Applications</TableCell>
                            <TableCell>1 year</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>Account Data</TableCell>
                            <TableCell>Until account deletion</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>Analytics Data</TableCell>
                            <TableCell>26 months</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>Security Logs</TableCell>
                            <TableCell>6 months</TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </div>
                  </div>
                </CardContent>
              </CollapsibleContent>
            </Collapsible>
          </Card>

          {/* International Transfers */}
          <Card>
            <Collapsible 
              open={openSections.includes('transfers')} 
              onOpenChange={() => toggleSection('transfers')}
            >
              <CollapsibleTrigger asChild>
                <CardHeader className="cursor-pointer hover:bg-gray-50">
                  <CardTitle className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Globe className="w-5 h-5 text-blue-600" />
                      International Data Transfers
                    </div>
                    {openSections.includes('transfers') ? 
                      <ChevronDown className="w-5 h-5" /> : 
                      <ChevronRight className="w-5 h-5" />
                    }
                  </CardTitle>
                  <CardDescription>
                    How we handle cross-border data transfers
                  </CardDescription>
                </CardHeader>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-gray-700">
                      Aethrix operates globally and may transfer your personal data to countries outside your region. 
                      We ensure appropriate safeguards are in place for all international transfers.
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-sm">EU-US Transfers</CardTitle>
                        </CardHeader>
                        <CardContent className="text-sm">
                          <ul className="space-y-1 text-gray-600">
                            <li>• Standard Contractual Clauses (SCCs)</li>
                            <li>• Adequacy decisions where available</li>
                            <li>• Additional technical safeguards</li>
                            <li>• Regular compliance assessments</li>
                          </ul>
                        </CardContent>
                      </Card>
                      
                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-sm">Other Jurisdictions</CardTitle>
                        </CardHeader>
                        <CardContent className="text-sm">
                          <ul className="space-y-1 text-gray-600">
                            <li>• Binding Corporate Rules</li>
                            <li>• Approved certification mechanisms</li>
                            <li>• Contractual protections</li>
                            <li>• Local data residency where required</li>
                          </ul>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </CardContent>
              </CollapsibleContent>
            </Collapsible>
          </Card>

          {/* Contact Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-blue-600" />
                Contact Us About Privacy
              </CardTitle>
              <CardDescription>
                Get in touch with our Data Protection Officer
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Privacy Officer</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-gray-500" />
                      <span>privacy@aethrix.com</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-gray-500" />
                      <span>+1 (555) 123-4567</span>
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <Button className="w-full" size="sm">
                      Submit Privacy Request
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3">EU Representative</h4>
                  <div className="text-sm text-gray-600">
                    <p>For EU residents, our appointed representative:</p>
                    <p className="mt-2">
                      Aethrix EU Privacy Services<br />
                      123 Privacy Street<br />
                      Dublin, Ireland D02 X285
                    </p>
                    <p className="mt-2">eu-privacy@aethrix.com</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <div className="text-center mt-12 text-sm text-gray-500">
          <p>This privacy policy is effective as of {effectiveDate} and was last updated on {lastUpdated}.</p>
          <p className="mt-2">
            For previous versions of this policy, please contact our Privacy Officer.
          </p>
        </div>
      </div>
    </div>
  );
}
