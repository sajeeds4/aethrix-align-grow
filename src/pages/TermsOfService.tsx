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
  Scale, 
  Shield, 
  FileText, 
  AlertTriangle,
  CheckCircle,
  ExternalLink,
  Calendar,
  Mail,
  Phone,
  Globe,
  Gavel,
  Users,
  CreditCard,
  Copyright,
  Ban,
  HelpCircle
} from 'lucide-react';

export default function TermsOfService() {
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
          <div className="flex justify-center items-center gap-4 text-sm text-gray-600 mb-6">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              Last Updated: {lastUpdated}
            </div>
            <div className="flex items-center gap-2">
              <Scale className="w-4 h-4" />
              Effective: {effectiveDate}
            </div>
          </div>
          <div className="flex justify-center gap-2 mb-6">
            <Badge variant="outline" className="text-xs">
              <Globe className="w-3 h-3 mr-1" />
              US & EU Jurisdiction
            </Badge>
            <Badge variant="outline" className="text-xs">
              <Scale className="w-3 h-3 mr-1" />
              Legally Binding
            </Badge>
            <Badge variant="outline" className="text-xs">
              <Shield className="w-3 h-3 mr-1" />
              Enterprise Grade
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
              Jump to specific sections of our terms of service
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <a href="#services" className="flex items-center gap-2 p-2 rounded hover:bg-gray-100 text-sm">
                <Users className="w-4 h-4 text-blue-600" />
                Service Usage
              </a>
              <a href="#payments" className="flex items-center gap-2 p-2 rounded hover:bg-gray-100 text-sm">
                <CreditCard className="w-4 h-4 text-green-600" />
                Payment Terms
              </a>
              <a href="#intellectual" className="flex items-center gap-2 p-2 rounded hover:bg-gray-100 text-sm">
                <Copyright className="w-4 h-4 text-purple-600" />
                Intellectual Property
              </a>
              <a href="#liability" className="flex items-center gap-2 p-2 rounded hover:bg-gray-100 text-sm">
                <Scale className="w-4 h-4 text-red-600" />
                Liability & Disputes
              </a>
            </div>
          </CardContent>
        </Card>

        {/* Main Content */}
        <div className="space-y-6">
          
          {/* Agreement Overview */}
          <Card>
            <Collapsible 
              open={openSections.includes('overview')} 
              onOpenChange={() => toggleSection('overview')}
            >
              <CollapsibleTrigger asChild>
                <CardHeader className="cursor-pointer hover:bg-gray-50">
                  <CardTitle className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Scale className="w-5 h-5 text-blue-600" />
                      Agreement Overview
                    </div>
                    {openSections.includes('overview') ? 
                      <ChevronDown className="w-5 h-5" /> : 
                      <ChevronRight className="w-5 h-5" />
                    }
                  </CardTitle>
                  <CardDescription>
                    Legal framework governing your use of Aethrix services
                  </CardDescription>
                </CardHeader>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <CardContent>
                  <div className="space-y-6">
                    <div className="prose max-w-none">
                      <p className="text-gray-700 leading-relaxed">
                        These Terms of Service ("Terms") constitute a legally binding agreement between you ("User," "Client," or "you") and Aethrix LLC ("Aethrix," "we," "us," or "our"), governing your access to and use of our website, services, and related platforms.
                      </p>
                      
                      <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
                        <div className="flex items-start">
                          <AlertTriangle className="w-5 h-5 text-blue-400 mr-2 mt-0.5" />
                          <div>
                            <p className="text-blue-800 font-medium">Important Legal Notice</p>
                            <p className="text-blue-700 text-sm mt-1">
                              By accessing or using our services, you agree to be bound by these Terms. If you do not agree to all terms and conditions, you may not access or use our services.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-3">Scope of Agreement</h4>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-600 mt-1" />
                            <span>All Aethrix services and platforms</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-600 mt-1" />
                            <span>Website content and functionality</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-600 mt-1" />
                            <span>Client portal and admin interfaces</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-600 mt-1" />
                            <span>Third-party integrations and APIs</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-600 mt-1" />
                            <span>Support and consultation services</span>
                          </li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-3">User Categories</h4>
                        <div className="space-y-3">
                          <div className="p-3 bg-gray-50 rounded-lg">
                            <h5 className="font-medium text-sm">Individual Users</h5>
                            <p className="text-xs text-gray-600">Personal use of website and information services</p>
                          </div>
                          <div className="p-3 bg-gray-50 rounded-lg">
                            <h5 className="font-medium text-sm">Business Clients</h5>
                            <p className="text-xs text-gray-600">Organizations engaging our professional services</p>
                          </div>
                          <div className="p-3 bg-gray-50 rounded-lg">
                            <h5 className="font-medium text-sm">Job Applicants</h5>
                            <p className="text-xs text-gray-600">Individuals applying for positions at Aethrix</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </CollapsibleContent>
            </Collapsible>
          </Card>

          {/* Service Usage Terms */}
          <Card id="services">
            <Collapsible 
              open={openSections.includes('services')} 
              onOpenChange={() => toggleSection('services')}
            >
              <CollapsibleTrigger asChild>
                <CardHeader className="cursor-pointer hover:bg-gray-50">
                  <CardTitle className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Users className="w-5 h-5 text-green-600" />
                      Service Usage Terms
                    </div>
                    {openSections.includes('services') ? 
                      <ChevronDown className="w-5 h-5" /> : 
                      <ChevronRight className="w-5 h-5" />
                    }
                  </CardTitle>
                  <CardDescription>
                    Rules and guidelines for using Aethrix services
                  </CardDescription>
                </CardHeader>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <CardContent>
                  <Tabs defaultValue="acceptable" className="w-full">
                    <TabsList className="grid w-full grid-cols-3">
                      <TabsTrigger value="acceptable">Acceptable Use</TabsTrigger>
                      <TabsTrigger value="prohibited">Prohibited Activities</TabsTrigger>
                      <TabsTrigger value="access">Access Rights</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="acceptable" className="mt-4">
                      <div className="space-y-4">
                        <h4 className="font-semibold">Acceptable Use Policy</h4>
                        <div className="grid md:grid-cols-2 gap-4">
                          <Card>
                            <CardHeader className="pb-2">
                              <CardTitle className="text-sm flex items-center gap-2">
                                <CheckCircle className="w-4 h-4 text-green-600" />
                                Permitted Activities
                              </CardTitle>
                            </CardHeader>
                            <CardContent className="text-sm">
                              <ul className="space-y-1 text-gray-600">
                                <li>• Access and use services for business purposes</li>
                                <li>• Create accounts with accurate information</li>
                                <li>• Submit legitimate service requests</li>
                                <li>• Participate in recruitment processes</li>
                                <li>• Use provided tools and resources appropriately</li>
                                <li>• Report security vulnerabilities responsibly</li>
                              </ul>
                            </CardContent>
                          </Card>
                          
                          <Card>
                            <CardHeader className="pb-2">
                              <CardTitle className="text-sm flex items-center gap-2">
                                <Shield className="w-4 h-4 text-blue-600" />
                                User Responsibilities
                              </CardTitle>
                            </CardHeader>
                            <CardContent className="text-sm">
                              <ul className="space-y-1 text-gray-600">
                                <li>• Maintain confidentiality of account credentials</li>
                                <li>• Provide accurate and up-to-date information</li>
                                <li>• Comply with applicable laws and regulations</li>
                                <li>• Respect intellectual property rights</li>
                                <li>• Use services in accordance with documentation</li>
                                <li>• Notify us of unauthorized access</li>
                              </ul>
                            </CardContent>
                          </Card>
                        </div>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="prohibited" className="mt-4">
                      <div className="space-y-4">
                        <h4 className="font-semibold flex items-center gap-2">
                          <Ban className="w-5 h-5 text-red-600" />
                          Prohibited Activities
                        </h4>
                        
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead>Category</TableHead>
                              <TableHead>Prohibited Actions</TableHead>
                              <TableHead>Consequences</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            <TableRow>
                              <TableCell className="font-medium">Security Violations</TableCell>
                              <TableCell>Hacking, unauthorized access, malware distribution</TableCell>
                              <TableCell>Immediate termination, legal action</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="font-medium">Abuse & Harassment</TableCell>
                              <TableCell>Threatening behavior, harassment, discrimination</TableCell>
                              <TableCell>Account suspension, service ban</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="font-medium">Intellectual Property</TableCell>
                              <TableCell>Copyright infringement, trademark violation</TableCell>
                              <TableCell>Content removal, account termination</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="font-medium">Fraudulent Activity</TableCell>
                              <TableCell>False information, payment fraud, impersonation</TableCell>
                              <TableCell>Legal action, service ban</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="font-medium">System Abuse</TableCell>
                              <TableCell>Resource abuse, spam, automated attacks</TableCell>
                              <TableCell>Rate limiting, account restriction</TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="access" className="mt-4">
                      <div className="space-y-4">
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <h5 className="font-medium mb-2">Service Availability</h5>
                            <p className="text-sm text-gray-600 mb-3">
                              We strive to maintain high availability but cannot guarantee uninterrupted access to our services.
                            </p>
                            <ul className="text-sm space-y-1">
                              <li>• Target uptime: 99.9% (excluding maintenance)</li>
                              <li>• Scheduled maintenance windows</li>
                              <li>• Emergency maintenance as needed</li>
                              <li>• Service level agreements for enterprise clients</li>
                            </ul>
                          </div>
                          
                          <div>
                            <h5 className="font-medium mb-2">Access Restrictions</h5>
                            <p className="text-sm text-gray-600 mb-3">
                              We reserve the right to restrict or terminate access under certain circumstances.
                            </p>
                            <ul className="text-sm space-y-1">
                              <li>• Violation of terms of service</li>
                              <li>• Suspected fraudulent activity</li>
                              <li>• Technical or security concerns</li>
                              <li>• Legal or regulatory requirements</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </CollapsibleContent>
            </Collapsible>
          </Card>

          {/* Payment Terms */}
          <Card id="payments">
            <Collapsible 
              open={openSections.includes('payments')} 
              onOpenChange={() => toggleSection('payments')}
            >
              <CollapsibleTrigger asChild>
                <CardHeader className="cursor-pointer hover:bg-gray-50">
                  <CardTitle className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <CreditCard className="w-5 h-5 text-purple-600" />
                      Payment Terms & Billing
                    </div>
                    {openSections.includes('payments') ? 
                      <ChevronDown className="w-5 h-5" /> : 
                      <ChevronRight className="w-5 h-5" />
                    }
                  </CardTitle>
                  <CardDescription>
                    Payment policies, billing cycles, and refund terms
                  </CardDescription>
                </CardHeader>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <CardContent>
                  <div className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-3">Payment Methods</h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-600" />
                            <span>Credit/Debit Cards (Visa, MasterCard, Amex)</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-600" />
                            <span>ACH/Bank Transfers (US clients)</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-600" />
                            <span>SEPA Transfers (EU clients)</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-600" />
                            <span>Wire Transfers (international)</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-600" />
                            <span>Digital wallets (PayPal, Stripe)</span>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-3">Billing Cycles</h4>
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead>Service Type</TableHead>
                              <TableHead>Billing Frequency</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            <TableRow>
                              <TableCell>Consulting Services</TableCell>
                              <TableCell>Monthly/Project-based</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell>Development Projects</TableCell>
                              <TableCell>Milestone-based</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell>Maintenance & Support</TableCell>
                              <TableCell>Monthly/Quarterly</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell>SaaS Products</TableCell>
                              <TableCell>Monthly/Annual</TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                      </div>
                    </div>

                    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                      <div className="flex items-start">
                        <AlertTriangle className="w-5 h-5 text-yellow-400 mr-2 mt-0.5" />
                        <div>
                          <p className="text-yellow-800 font-medium">Payment Terms</p>
                          <ul className="text-yellow-700 text-sm mt-1 space-y-1">
                            <li>• Payments are due within 30 days of invoice date</li>
                            <li>• Late payments may incur interest charges (1.5% per month)</li>
                            <li>• Services may be suspended for overdue accounts (>60 days)</li>
                            <li>• All prices exclude applicable taxes unless stated otherwise</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3">Refund Policy</h4>
                      <div className="space-y-3">
                        <div className="p-3 border rounded-lg">
                          <h5 className="font-medium text-sm mb-1">Consulting Services</h5>
                          <p className="text-xs text-gray-600">
                            Refunds available for unused hours within 30 days of payment. 
                            Work completed is non-refundable.
                          </p>
                        </div>
                        <div className="p-3 border rounded-lg">
                          <h5 className="font-medium text-sm mb-1">Development Projects</h5>
                          <p className="text-xs text-gray-600">
                            Refunds based on project milestones. Completed milestones are non-refundable.
                          </p>
                        </div>
                        <div className="p-3 border rounded-lg">
                          <h5 className="font-medium text-sm mb-1">Subscription Services</h5>
                          <p className="text-xs text-gray-600">
                            Pro-rated refunds available upon cancellation. No refunds for partial months.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </CollapsibleContent>
            </Collapsible>
          </Card>

          {/* Intellectual Property */}
          <Card id="intellectual">
            <Collapsible 
              open={openSections.includes('intellectual')} 
              onOpenChange={() => toggleSection('intellectual')}
            >
              <CollapsibleTrigger asChild>
                <CardHeader className="cursor-pointer hover:bg-gray-50">
                  <CardTitle className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Copyright className="w-5 h-5 text-indigo-600" />
                      Intellectual Property Rights
                    </div>
                    {openSections.includes('intellectual') ? 
                      <ChevronDown className="w-5 h-5" /> : 
                      <ChevronRight className="w-5 h-5" />
                    }
                  </CardTitle>
                  <CardDescription>
                    Ownership, licensing, and usage rights for content and software
                  </CardDescription>
                </CardHeader>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <CardContent>
                  <div className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-3">Aethrix Intellectual Property</h4>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start gap-2">
                            <Copyright className="w-4 h-4 text-blue-600 mt-1" />
                            <div>
                              <span className="font-medium">Website & Content</span>
                              <p className="text-xs text-gray-600">All website content, design, and functionality</p>
                            </div>
                          </li>
                          <li className="flex items-start gap-2">
                            <Copyright className="w-4 h-4 text-blue-600 mt-1" />
                            <div>
                              <span className="font-medium">Software & Code</span>
                              <p className="text-xs text-gray-600">Proprietary software, algorithms, and source code</p>
                            </div>
                          </li>
                          <li className="flex items-start gap-2">
                            <Copyright className="w-4 h-4 text-blue-600 mt-1" />
                            <div>
                              <span className="font-medium">Trademarks</span>
                              <p className="text-xs text-gray-600">Company name, logos, and service marks</p>
                            </div>
                          </li>
                          <li className="flex items-start gap-2">
                            <Copyright className="w-4 h-4 text-blue-600 mt-1" />
                            <div>
                              <span className="font-medium">Trade Secrets</span>
                              <p className="text-xs text-gray-600">Confidential business processes and methods</p>
                            </div>
                          </li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-3">Client Rights & Licenses</h4>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-600 mt-1" />
                            <div>
                              <span className="font-medium">Service Usage</span>
                              <p className="text-xs text-gray-600">Right to use services per agreement terms</p>
                            </div>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-600 mt-1" />
                            <div>
                              <span className="font-medium">Custom Development</span>
                              <p className="text-xs text-gray-600">Ownership of custom code per contract</p>
                            </div>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-600 mt-1" />
                            <div>
                              <span className="font-medium">Data Ownership</span>
                              <p className="text-xs text-gray-600">Client retains ownership of their data</p>
                            </div>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-600 mt-1" />
                            <div>
                              <span className="font-medium">License Terms</span>
                              <p className="text-xs text-gray-600">Non-exclusive, non-transferable usage rights</p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-red-50 border-l-4 border-red-400 p-4">
                      <div className="flex items-start">
                        <Ban className="w-5 h-5 text-red-400 mr-2 mt-0.5" />
                        <div>
                          <p className="text-red-800 font-medium">Restrictions & Prohibitions</p>
                          <ul className="text-red-700 text-sm mt-1 space-y-1">
                            <li>• No reverse engineering, decompiling, or disassembling</li>
                            <li>• No redistribution or resale without explicit permission</li>
                            <li>• No removal or modification of copyright notices</li>
                            <li>• No creation of derivative works without authorization</li>
                            <li>• No use of trademarks without written consent</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3">DMCA Compliance</h4>
                      <p className="text-sm text-gray-600 mb-3">
                        We respect intellectual property rights and comply with the Digital Millennium Copyright Act (DMCA).
                      </p>
                      <div className="flex items-center gap-4">
                        <Button size="sm" variant="outline">
                          File DMCA Notice
                          <ExternalLink className="w-4 h-4 ml-2" />
                        </Button>
                        <div className="text-sm text-gray-600">
                          DMCA Agent: legal@aethrix.com
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </CollapsibleContent>
            </Collapsible>
          </Card>

          {/* Liability & Disputes */}
          <Card id="liability">
            <Collapsible 
              open={openSections.includes('liability')} 
              onOpenChange={() => toggleSection('liability')}
            >
              <CollapsibleTrigger asChild>
                <CardHeader className="cursor-pointer hover:bg-gray-50">
                  <CardTitle className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Gavel className="w-5 h-5 text-red-600" />
                      Liability & Dispute Resolution
                    </div>
                    {openSections.includes('liability') ? 
                      <ChevronDown className="w-5 h-5" /> : 
                      <ChevronRight className="w-5 h-5" />
                    }
                  </CardTitle>
                  <CardDescription>
                    Limitation of liability and dispute resolution procedures
                  </CardDescription>
                </CardHeader>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <CardContent>
                  <Tabs defaultValue="liability" className="w-full">
                    <TabsList className="grid w-full grid-cols-3">
                      <TabsTrigger value="liability">Liability Limits</TabsTrigger>
                      <TabsTrigger value="warranties">Warranties</TabsTrigger>
                      <TabsTrigger value="disputes">Dispute Resolution</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="liability" className="mt-4">
                      <div className="space-y-4">
                        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                          <div className="flex items-start">
                            <AlertTriangle className="w-5 h-5 text-yellow-400 mr-2 mt-0.5" />
                            <div>
                              <p className="text-yellow-800 font-medium">Limitation of Liability</p>
                              <p className="text-yellow-700 text-sm mt-1">
                                Aethrix's total liability for any claims arising out of or relating to these terms or our services 
                                shall not exceed the amount paid by you to Aethrix in the twelve (12) months preceding the claim.
                              </p>
                            </div>
                          </div>
                        </div>

                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead>Damage Type</TableHead>
                              <TableHead>Liability Coverage</TableHead>
                              <TableHead>Maximum Amount</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            <TableRow>
                              <TableCell className="font-medium">Direct Damages</TableCell>
                              <TableCell>Limited coverage</TableCell>
                              <TableCell>Fees paid in last 12 months</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="font-medium">Indirect/Consequential</TableCell>
                              <TableCell>Not covered</TableCell>
                              <TableCell>$0</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="font-medium">Lost Profits</TableCell>
                              <TableCell>Not covered</TableCell>
                              <TableCell>$0</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="font-medium">Data Loss</TableCell>
                              <TableCell>Limited to restoration costs</TableCell>
                              <TableCell>$10,000 maximum</TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="warranties" className="mt-4">
                      <div className="space-y-4">
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <h5 className="font-medium mb-2 text-green-700">Service Warranties</h5>
                            <ul className="space-y-1 text-sm">
                              <li>• Services performed with professional care and skill</li>
                              <li>• Compliance with industry standards</li>
                              <li>• Staff qualifications and expertise</li>
                              <li>• Reasonable efforts to meet deadlines</li>
                              <li>• Security and confidentiality measures</li>
                            </ul>
                          </div>
                          
                          <div>
                            <h5 className="font-medium mb-2 text-red-700">Disclaimer of Warranties</h5>
                            <ul className="space-y-1 text-sm">
                              <li>• No guarantee of specific results</li>
                              <li>• No warranty of uninterrupted service</li>
                              <li>• No warranty of error-free operation</li>
                              <li>• No warranty of compatibility</li>
                              <li>• Services provided "as is" basis</li>
                            </ul>
                          </div>
                        </div>

                        <div className="bg-gray-50 p-4 rounded-lg text-sm">
                          <p className="font-medium mb-2">Important Notice for EU Consumers</p>
                          <p className="text-gray-600">
                            Nothing in these terms affects your statutory rights as a consumer under EU consumer protection laws. 
                            These warranty disclaimers apply only to the extent permitted by applicable law.
                          </p>
                        </div>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="disputes" className="mt-4">
                      <div className="space-y-4">
                        <h5 className="font-medium">Dispute Resolution Process</h5>
                        
                        <div className="grid md:grid-cols-3 gap-4">
                          <Card>
                            <CardHeader className="pb-2">
                              <CardTitle className="text-sm">1. Direct Negotiation</CardTitle>
                            </CardHeader>
                            <CardContent className="text-sm">
                              <p className="text-gray-600">
                                Initial attempt to resolve disputes through direct communication between parties.
                              </p>
                              <p className="text-xs text-gray-500 mt-2">Timeline: 30 days</p>
                            </CardContent>
                          </Card>
                          
                          <Card>
                            <CardHeader className="pb-2">
                              <CardTitle className="text-sm">2. Mediation</CardTitle>
                            </CardHeader>
                            <CardContent className="text-sm">
                              <p className="text-gray-600">
                                Structured mediation with qualified neutral third party mediator.
                              </p>
                              <p className="text-xs text-gray-500 mt-2">Timeline: 60 days</p>
                            </CardContent>
                          </Card>
                          
                          <Card>
                            <CardHeader className="pb-2">
                              <CardTitle className="text-sm">3. Arbitration/Courts</CardTitle>
                            </CardHeader>
                            <CardContent className="text-sm">
                              <p className="text-gray-600">
                                Binding arbitration or court proceedings based on jurisdiction and claim value.
                              </p>
                              <p className="text-xs text-gray-500 mt-2">Timeline: Varies</p>
                            </CardContent>
                          </Card>
                        </div>

                        <div>
                          <h5 className="font-medium mb-2">Governing Law & Jurisdiction</h5>
                          <Table>
                            <TableHeader>
                              <TableRow>
                                <TableHead>Client Location</TableHead>
                                <TableHead>Governing Law</TableHead>
                                <TableHead>Jurisdiction</TableHead>
                              </TableRow>
                            </TableHeader>
                            <TableBody>
                              <TableRow>
                                <TableCell>United States</TableCell>
                                <TableCell>Delaware State Law</TableCell>
                                <TableCell>Delaware Courts or Arbitration</TableCell>
                              </TableRow>
                              <TableRow>
                                <TableCell>European Union</TableCell>
                                <TableCell>Laws of Client's Country</TableCell>
                                <TableCell>Client's Local Courts</TableCell>
                              </TableRow>
                              <TableRow>
                                <TableCell>Other Countries</TableCell>
                                <TableCell>Delaware State Law</TableCell>
                                <TableCell>International Arbitration</TableCell>
                              </TableRow>
                            </TableBody>
                          </Table>
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </CollapsibleContent>
            </Collapsible>
          </Card>

          {/* Termination */}
          <Card>
            <Collapsible 
              open={openSections.includes('termination')} 
              onOpenChange={() => toggleSection('termination')}
            >
              <CollapsibleTrigger asChild>
                <CardHeader className="cursor-pointer hover:bg-gray-50">
                  <CardTitle className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5 text-orange-600" />
                      Termination & Survival
                    </div>
                    {openSections.includes('termination') ? 
                      <ChevronDown className="w-5 h-5" /> : 
                      <ChevronRight className="w-5 h-5" />
                    }
                  </CardTitle>
                  <CardDescription>
                    Terms for ending the agreement and surviving obligations
                  </CardDescription>
                </CardHeader>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <CardContent>
                  <div className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-3">Termination by User</h4>
                        <ul className="space-y-2 text-sm">
                          <li>• Cancel services with 30-day written notice</li>
                          <li>• Complete payment for services rendered</li>
                          <li>• Return or destroy confidential information</li>
                          <li>• Cease use of proprietary materials</li>
                          <li>• Data export assistance available</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-3">Termination by Aethrix</h4>
                        <ul className="space-y-2 text-sm">
                          <li>• Immediately for material breach</li>
                          <li>• 30-day notice for convenience</li>
                          <li>• Refund unused prepaid amounts</li>
                          <li>• Provide data export period</li>
                          <li>• Maintain confidentiality obligations</li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h5 className="font-medium mb-2">Provisions That Survive Termination</h5>
                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <ul className="space-y-1">
                          <li>• Payment obligations</li>
                          <li>• Confidentiality requirements</li>
                          <li>• Intellectual property rights</li>
                          <li>• Liability limitations</li>
                        </ul>
                        <ul className="space-y-1">
                          <li>• Indemnification obligations</li>
                          <li>• Dispute resolution procedures</li>
                          <li>• Data protection requirements</li>
                          <li>• Governing law provisions</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </CollapsibleContent>
            </Collapsible>
          </Card>

          {/* Contact & Support */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-blue-600" />
                Legal Contact & Support
              </CardTitle>
              <CardDescription>
                Get in touch regarding terms of service questions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Legal Department</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-gray-500" />
                      <span>legal@aethrix.com</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-gray-500" />
                      <span>+1 (555) 123-4567 ext. 701</span>
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <Button className="w-full" size="sm">
                      Contact Legal Team
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3">Mailing Address</h4>
                  <div className="text-sm text-gray-600">
                    <p>Aethrix LLC</p>
                    <p>Legal Department</p>
                    <p>123 Business Avenue, Suite 456</p>
                    <p>Dover, DE 19901</p>
                    <p>United States</p>
                  </div>
                  
                  <div className="mt-4 text-xs text-gray-500">
                    <p>For EU legal matters, contact our EU representative at eu-legal@aethrix.com</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <div className="text-center mt-12 text-sm text-gray-500">
          <p>These terms of service are effective as of {effectiveDate} and were last updated on {lastUpdated}.</p>
          <p className="mt-2">
            For previous versions of these terms, please contact our Legal Department.
          </p>
        </div>
      </div>
    </div>
  );
}
