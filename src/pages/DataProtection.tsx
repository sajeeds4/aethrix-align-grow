import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { 
  ChevronDown, 
  ChevronRight, 
  Shield, 
  Database, 
  Users, 
  FileText, 
  AlertTriangle,
  CheckCircle,
  ExternalLink,
  Calendar,
  Mail,
  Phone,
  Download,
  Upload,
  Lock,
  Eye,
  Trash2,
  Edit,
  UserX,
  Globe,
  Clock,
  Settings
} from 'lucide-react';

export default function DataProtection() {
  const [openSections, setOpenSections] = useState<string[]>(['overview']);
  const [requestType, setRequestType] = useState<string>('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    requestDetails: '',
    verification: ''
  });

  const toggleSection = (sectionId: string) => {
    setOpenSections(prev => 
      prev.includes(sectionId) 
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const submitDataRequest = () => {
    console.log('Data request submitted:', { requestType, ...formData });
    // In a real application, this would submit to your API
  };

  const lastUpdated = "December 15, 2024";

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Data Protection Rights</h1>
          <div className="flex justify-center items-center gap-4 text-sm text-gray-600 mb-6">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              Last Updated: {lastUpdated}
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4" />
              GDPR Article 12-22
            </div>
          </div>
          <div className="flex justify-center gap-2 mb-6">
            <Badge variant="outline" className="text-xs">
              <Globe className="w-3 h-3 mr-1" />
              EU Data Subject Rights
            </Badge>
            <Badge variant="outline" className="text-xs">
              <Users className="w-3 h-3 mr-1" />
              CCPA Consumer Rights
            </Badge>
            <Badge variant="outline" className="text-xs">
              <Shield className="w-3 h-3 mr-1" />
              Universal Privacy Rights
            </Badge>
          </div>
        </div>

        {/* Data Request Portal */}
        <Card className="mb-8 bg-blue-50 border-blue-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="w-5 h-5 text-blue-600" />
              Data Subject Request Portal
            </CardTitle>
            <CardDescription>
              Submit a request to exercise your data protection rights
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid md:grid-cols-3 gap-4">
                <div 
                  className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                    requestType === 'access' ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-gray-300'
                  }`}
                  onClick={() => setRequestType('access')}
                >
                  <div className="text-center">
                    <Download className="w-8 h-8 mx-auto mb-2 text-blue-600" />
                    <h3 className="font-medium">Data Access</h3>
                    <p className="text-xs text-gray-600 mt-1">Download your personal data</p>
                  </div>
                </div>
                
                <div 
                  className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                    requestType === 'rectification' ? 'border-green-500 bg-green-50' : 'border-gray-200 hover:border-gray-300'
                  }`}
                  onClick={() => setRequestType('rectification')}
                >
                  <div className="text-center">
                    <Edit className="w-8 h-8 mx-auto mb-2 text-green-600" />
                    <h3 className="font-medium">Data Correction</h3>
                    <p className="text-xs text-gray-600 mt-1">Update incorrect information</p>
                  </div>
                </div>
                
                <div 
                  className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                    requestType === 'erasure' ? 'border-red-500 bg-red-50' : 'border-gray-200 hover:border-gray-300'
                  }`}
                  onClick={() => setRequestType('erasure')}
                >
                  <div className="text-center">
                    <Trash2 className="w-8 h-8 mx-auto mb-2 text-red-600" />
                    <h3 className="font-medium">Data Deletion</h3>
                    <p className="text-xs text-gray-600 mt-1">Request data removal</p>
                  </div>
                </div>
              </div>
              
              {requestType && (
                <div className="space-y-4 pt-4 border-t">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="requestDetails">Request Details</Label>
                    <Textarea
                      id="requestDetails"
                      value={formData.requestDetails}
                      onChange={(e) => handleInputChange('requestDetails', e.target.value)}
                      placeholder="Please provide specific details about your request..."
                      rows={3}
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="verification">Identity Verification</Label>
                    <Input
                      id="verification"
                      value={formData.verification}
                      onChange={(e) => handleInputChange('verification', e.target.value)}
                      placeholder="Last 4 digits of phone number or account ID"
                    />
                  </div>
                  
                  <Button onClick={submitDataRequest} className="w-full">
                    Submit Data Request
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Main Content */}
        <div className="space-y-6">
          
          {/* GDPR Rights Overview */}
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
                      Your Data Protection Rights
                    </div>
                    {openSections.includes('overview') ? 
                      <ChevronDown className="w-5 h-5" /> : 
                      <ChevronRight className="w-5 h-5" />
                    }
                  </CardTitle>
                  <CardDescription>
                    Overview of your rights under GDPR and other privacy laws
                  </CardDescription>
                </CardHeader>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <CardContent>
                  <div className="space-y-6">
                    <div className="prose max-w-none">
                      <p className="text-gray-700 leading-relaxed">
                        As a data subject, you have several fundamental rights regarding your personal data. 
                        These rights are designed to give you control over how your information is collected, 
                        processed, and used by organizations like Aethrix.
                      </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-3 text-blue-700">Primary Rights (GDPR)</h4>
                        <div className="space-y-3">
                          <div className="flex items-start gap-3">
                            <Eye className="w-5 h-5 text-blue-600 mt-1" />
                            <div>
                              <h5 className="font-medium">Right to be Informed</h5>
                              <p className="text-sm text-gray-600">Clear information about data processing</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <Download className="w-5 h-5 text-blue-600 mt-1" />
                            <div>
                              <h5 className="font-medium">Right of Access</h5>
                              <p className="text-sm text-gray-600">Obtain copies of your personal data</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <Edit className="w-5 h-5 text-blue-600 mt-1" />
                            <div>
                              <h5 className="font-medium">Right to Rectification</h5>
                              <p className="text-sm text-gray-600">Correct inaccurate information</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <Trash2 className="w-5 h-5 text-blue-600 mt-1" />
                            <div>
                              <h5 className="font-medium">Right to Erasure</h5>
                              <p className="text-sm text-gray-600">"Right to be forgotten"</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-3 text-green-700">Additional Rights</h4>
                        <div className="space-y-3">
                          <div className="flex items-start gap-3">
                            <Lock className="w-5 h-5 text-green-600 mt-1" />
                            <div>
                              <h5 className="font-medium">Right to Restrict Processing</h5>
                              <p className="text-sm text-gray-600">Limit how data is processed</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <Upload className="w-5 h-5 text-green-600 mt-1" />
                            <div>
                              <h5 className="font-medium">Right to Data Portability</h5>
                              <p className="text-sm text-gray-600">Transfer data between services</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <UserX className="w-5 h-5 text-green-600 mt-1" />
                            <div>
                              <h5 className="font-medium">Right to Object</h5>
                              <p className="text-sm text-gray-600">Object to certain processing</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <Settings className="w-5 h-5 text-green-600 mt-1" />
                            <div>
                              <h5 className="font-medium">Rights Related to Automated Processing</h5>
                              <p className="text-sm text-gray-600">Control over automated decisions</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                      <div className="flex items-start">
                        <AlertTriangle className="w-5 h-5 text-blue-400 mr-2 mt-0.5" />
                        <div>
                          <p className="text-blue-800 font-medium">Important Notice</p>
                          <p className="text-blue-700 text-sm mt-1">
                            These rights are subject to certain conditions and limitations. We will assess each request 
                            individually and may require verification of your identity before processing.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </CollapsibleContent>
            </Collapsible>
          </Card>

          {/* Detailed Rights Explanation */}
          <Card>
            <Collapsible 
              open={openSections.includes('detailed')} 
              onOpenChange={() => toggleSection('detailed')}
            >
              <CollapsibleTrigger asChild>
                <CardHeader className="cursor-pointer hover:bg-gray-50">
                  <CardTitle className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <FileText className="w-5 h-5 text-green-600" />
                      Detailed Rights Explanation
                    </div>
                    {openSections.includes('detailed') ? 
                      <ChevronDown className="w-5 h-5" /> : 
                      <ChevronRight className="w-5 h-5" />
                    }
                  </CardTitle>
                  <CardDescription>
                    Comprehensive explanation of each data protection right
                  </CardDescription>
                </CardHeader>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <CardContent>
                  <Tabs defaultValue="access" className="w-full">
                    <TabsList className="grid w-full grid-cols-4">
                      <TabsTrigger value="access">Right of Access</TabsTrigger>
                      <TabsTrigger value="rectification">Rectification</TabsTrigger>
                      <TabsTrigger value="erasure">Erasure</TabsTrigger>
                      <TabsTrigger value="portability">Portability</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="access" className="mt-4">
                      <div className="space-y-4">
                        <div className="bg-blue-50 p-4 rounded-lg">
                          <h4 className="font-semibold mb-2 flex items-center gap-2">
                            <Download className="w-5 h-5 text-blue-600" />
                            Right of Access (Article 15 GDPR)
                          </h4>
                          <p className="text-sm text-blue-800">
                            You have the right to obtain confirmation as to whether personal data concerning you is being processed, 
                            and access to the personal data and related information.
                          </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <h5 className="font-medium mb-2">What You Can Request</h5>
                            <ul className="space-y-1 text-sm text-gray-600">
                              <li>• Copy of your personal data</li>
                              <li>• Purposes of processing</li>
                              <li>• Categories of data processed</li>
                              <li>• Recipients or categories of recipients</li>
                              <li>• Retention period information</li>
                              <li>• Source of the data (if not collected from you)</li>
                              <li>• Information about automated decision-making</li>
                            </ul>
                          </div>
                          
                          <div>
                            <h5 className="font-medium mb-2">Processing Timeline</h5>
                            <Table>
                              <TableHeader>
                                <TableRow>
                                  <TableHead>Step</TableHead>
                                  <TableHead>Timeline</TableHead>
                                </TableRow>
                              </TableHeader>
                              <TableBody>
                                <TableRow>
                                  <TableCell>Request Receipt</TableCell>
                                  <TableCell>Immediate</TableCell>
                                </TableRow>
                                <TableRow>
                                  <TableCell>Identity Verification</TableCell>
                                  <TableCell>1-3 days</TableCell>
                                </TableRow>
                                <TableRow>
                                  <TableCell>Data Compilation</TableCell>
                                  <TableCell>5-20 days</TableCell>
                                </TableRow>
                                <TableRow>
                                  <TableCell>Response Delivery</TableCell>
                                  <TableCell>Within 30 days</TableCell>
                                </TableRow>
                              </TableBody>
                            </Table>
                          </div>
                        </div>

                        <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                          <h5 className="font-medium mb-2">Limitations & Exceptions</h5>
                          <ul className="text-sm text-yellow-800 space-y-1">
                            <li>• Information that would adversely affect the rights of others</li>
                            <li>• Trade secrets or intellectual property</li>
                            <li>• Information subject to legal privilege</li>
                            <li>• Data that would compromise security measures</li>
                            <li>• Manifestly unfounded or excessive requests</li>
                          </ul>
                        </div>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="rectification" className="mt-4">
                      <div className="space-y-4">
                        <div className="bg-green-50 p-4 rounded-lg">
                          <h4 className="font-semibold mb-2 flex items-center gap-2">
                            <Edit className="w-5 h-5 text-green-600" />
                            Right to Rectification (Article 16 GDPR)
                          </h4>
                          <p className="text-sm text-green-800">
                            You have the right to have inaccurate personal data corrected and incomplete personal data completed.
                          </p>
                        </div>

                        <div className="space-y-4">
                          <div>
                            <h5 className="font-medium mb-2">Types of Corrections</h5>
                            <div className="grid md:grid-cols-2 gap-4">
                              <Card>
                                <CardHeader className="pb-2">
                                  <CardTitle className="text-sm">Factual Corrections</CardTitle>
                                </CardHeader>
                                <CardContent className="text-sm">
                                  <ul className="space-y-1 text-gray-600">
                                    <li>• Name spelling corrections</li>
                                    <li>• Address updates</li>
                                    <li>• Phone number changes</li>
                                    <li>• Job title updates</li>
                                    <li>• Educational background</li>
                                  </ul>
                                </CardContent>
                              </Card>
                              
                              <Card>
                                <CardHeader className="pb-2">
                                  <CardTitle className="text-sm">Data Completion</CardTitle>
                                </CardHeader>
                                <CardContent className="text-sm">
                                  <ul className="space-y-1 text-gray-600">
                                    <li>• Adding missing information</li>
                                    <li>• Completing partial records</li>
                                    <li>• Updating preferences</li>
                                    <li>• Adding context to existing data</li>
                                    <li>• Supplementary statements</li>
                                  </ul>
                                </CardContent>
                              </Card>
                            </div>
                          </div>

                          <div>
                            <h5 className="font-medium mb-2">Rectification Process</h5>
                            <div className="space-y-3">
                              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-sm font-medium">1</div>
                                <div>
                                  <p className="font-medium text-sm">Submit Request</p>
                                  <p className="text-xs text-gray-600">Specify what information needs correction</p>
                                </div>
                              </div>
                              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-sm font-medium">2</div>
                                <div>
                                  <p className="font-medium text-sm">Verification</p>
                                  <p className="text-xs text-gray-600">We may request supporting documentation</p>
                                </div>
                              </div>
                              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-sm font-medium">3</div>
                                <div>
                                  <p className="font-medium text-sm">Implementation</p>
                                  <p className="text-xs text-gray-600">Corrections made within 30 days</p>
                                </div>
                              </div>
                              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-sm font-medium">4</div>
                                <div>
                                  <p className="font-medium text-sm">Notification</p>
                                  <p className="text-xs text-gray-600">Third parties notified if applicable</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="erasure" className="mt-4">
                      <div className="space-y-4">
                        <div className="bg-red-50 p-4 rounded-lg">
                          <h4 className="font-semibold mb-2 flex items-center gap-2">
                            <Trash2 className="w-5 h-5 text-red-600" />
                            Right to Erasure - "Right to be Forgotten" (Article 17 GDPR)
                          </h4>
                          <p className="text-sm text-red-800">
                            You have the right to have personal data erased without undue delay under certain circumstances.
                          </p>
                        </div>

                        <div>
                          <h5 className="font-medium mb-3">Grounds for Erasure</h5>
                          <Table>
                            <TableHeader>
                              <TableRow>
                                <TableHead>Legal Ground</TableHead>
                                <TableHead>Description</TableHead>
                                <TableHead>Example</TableHead>
                              </TableRow>
                            </TableHeader>
                            <TableBody>
                              <TableRow>
                                <TableCell className="font-medium">No longer necessary</TableCell>
                                <TableCell>Data no longer needed for original purpose</TableCell>
                                <TableCell>Marketing data after opt-out</TableCell>
                              </TableRow>
                              <TableRow>
                                <TableCell className="font-medium">Consent withdrawn</TableCell>
                                <TableCell>You withdraw consent and no other legal basis exists</TableCell>
                                <TableCell>Newsletter subscription cancellation</TableCell>
                              </TableRow>
                              <TableRow>
                                <TableCell className="font-medium">Unlawful processing</TableCell>
                                <TableCell>Data was processed without legal basis</TableCell>
                                <TableCell>Data collected without consent</TableCell>
                              </TableRow>
                              <TableRow>
                                <TableCell className="font-medium">Legal compliance</TableCell>
                                <TableCell>Erasure required by law</TableCell>
                                <TableCell>Court order or regulatory requirement</TableCell>
                              </TableRow>
                              <TableRow>
                                <TableCell className="font-medium">Child's data</TableCell>
                                <TableCell>Data collected from child without proper consent</TableCell>
                                <TableCell>Minor's social media data</TableCell>
                              </TableRow>
                            </TableBody>
                          </Table>
                        </div>

                        <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                          <h5 className="font-medium mb-2 flex items-center gap-2">
                            <AlertTriangle className="w-4 h-4 text-yellow-600" />
                            Exceptions to Right of Erasure
                          </h5>
                          <ul className="text-sm text-yellow-800 space-y-1">
                            <li>• Freedom of expression and information</li>
                            <li>• Legal obligations or public task</li>
                            <li>• Public health interests</li>
                            <li>• Archiving, research, or statistics</li>
                            <li>• Legal claims establishment, exercise, or defense</li>
                          </ul>
                        </div>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="portability" className="mt-4">
                      <div className="space-y-4">
                        <div className="bg-purple-50 p-4 rounded-lg">
                          <h4 className="font-semibold mb-2 flex items-center gap-2">
                            <Upload className="w-5 h-5 text-purple-600" />
                            Right to Data Portability (Article 20 GDPR)
                          </h4>
                          <p className="text-sm text-purple-800">
                            You have the right to receive your personal data in a structured, commonly used, 
                            machine-readable format and transmit it to another controller.
                          </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <h5 className="font-medium mb-2">Portable Data Types</h5>
                            <ul className="space-y-1 text-sm text-gray-600">
                              <li>• Profile information</li>
                              <li>• Account settings and preferences</li>
                              <li>• User-generated content</li>
                              <li>• Transaction history</li>
                              <li>• Communication logs</li>
                              <li>• Usage statistics</li>
                              <li>• Custom configurations</li>
                            </ul>
                          </div>
                          
                          <div>
                            <h5 className="font-medium mb-2">Available Formats</h5>
                            <div className="space-y-2">
                              <div className="p-2 bg-gray-50 rounded text-sm">
                                <span className="font-medium">JSON:</span> Structured data format
                              </div>
                              <div className="p-2 bg-gray-50 rounded text-sm">
                                <span className="font-medium">CSV:</span> Spreadsheet compatible
                              </div>
                              <div className="p-2 bg-gray-50 rounded text-sm">
                                <span className="font-medium">XML:</span> Markup format
                              </div>
                              <div className="p-2 bg-gray-50 rounded text-sm">
                                <span className="font-medium">ZIP:</span> Compressed archive with files
                              </div>
                            </div>
                          </div>
                        </div>

                        <div>
                          <h5 className="font-medium mb-2">Conditions for Portability</h5>
                          <div className="space-y-2">
                            <div className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                              <span className="text-sm">Processing is based on consent or contract</span>
                            </div>
                            <div className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                              <span className="text-sm">Processing is carried out by automated means</span>
                            </div>
                            <div className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                              <span className="text-sm">Data was provided by the data subject</span>
                            </div>
                            <div className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                              <span className="text-sm">Does not adversely affect others' rights</span>
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

          {/* Data Processing Lawful Bases */}
          <Card>
            <Collapsible 
              open={openSections.includes('lawful-bases')} 
              onOpenChange={() => toggleSection('lawful-bases')}
            >
              <CollapsibleTrigger asChild>
                <CardHeader className="cursor-pointer hover:bg-gray-50">
                  <CardTitle className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Database className="w-5 h-5 text-purple-600" />
                      Lawful Bases for Processing
                    </div>
                    {openSections.includes('lawful-bases') ? 
                      <ChevronDown className="w-5 h-5" /> : 
                      <ChevronRight className="w-5 h-5" />
                    }
                  </CardTitle>
                  <CardDescription>
                    Legal justifications for processing personal data under GDPR
                  </CardDescription>
                </CardHeader>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <CardContent>
                  <div className="space-y-6">
                    <p className="text-gray-700">
                      Under GDPR Article 6, we must have a lawful basis to process your personal data. 
                      Here are the legal bases we rely on for different types of processing:
                    </p>

                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Lawful Basis</TableHead>
                          <TableHead>When We Use It</TableHead>
                          <TableHead>Your Rights</TableHead>
                          <TableHead>Example</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell className="font-medium">
                            <Badge variant="outline" className="text-xs">Consent</Badge>
                            <br />
                            <span className="text-xs text-gray-600">Article 6(1)(a)</span>
                          </TableCell>
                          <TableCell>Marketing communications, cookies, newsletter</TableCell>
                          <TableCell>Right to withdraw consent at any time</TableCell>
                          <TableCell>Email marketing campaigns</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">
                            <Badge variant="outline" className="text-xs">Contract</Badge>
                            <br />
                            <span className="text-xs text-gray-600">Article 6(1)(b)</span>
                          </TableCell>
                          <TableCell>Service delivery, account management, billing</TableCell>
                          <TableCell>Limited rights during active contract</TableCell>
                          <TableCell>Processing payment information</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">
                            <Badge variant="outline" className="text-xs">Legal Obligation</Badge>
                            <br />
                            <span className="text-xs text-gray-600">Article 6(1)(c)</span>
                          </TableCell>
                          <TableCell>Tax records, legal compliance, reporting</TableCell>
                          <TableCell>Cannot object to required processing</TableCell>
                          <TableCell>Keeping financial records</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">
                            <Badge variant="outline" className="text-xs">Vital Interests</Badge>
                            <br />
                            <span className="text-xs text-gray-600">Article 6(1)(d)</span>
                          </TableCell>
                          <TableCell>Emergency situations, safety threats</TableCell>
                          <TableCell>Limited to life-threatening situations</TableCell>
                          <TableCell>Emergency contact information</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">
                            <Badge variant="outline" className="text-xs">Public Task</Badge>
                            <br />
                            <span className="text-xs text-gray-600">Article 6(1)(e)</span>
                          </TableCell>
                          <TableCell>Rarely used in commercial context</TableCell>
                          <TableCell>Right to object in some cases</TableCell>
                          <TableCell>Government contracts</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">
                            <Badge variant="outline" className="text-xs">Legitimate Interests</Badge>
                            <br />
                            <span className="text-xs text-gray-600">Article 6(1)(f)</span>
                          </TableCell>
                          <TableCell>Analytics, security, business operations</TableCell>
                          <TableCell>Right to object at any time</TableCell>
                          <TableCell>Website analytics</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>

                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h5 className="font-medium mb-2">Legitimate Interest Assessment (LIA)</h5>
                      <p className="text-sm text-blue-800 mb-2">
                        When we rely on legitimate interests, we conduct a balancing test to ensure our interests 
                        don't override your fundamental rights and freedoms.
                      </p>
                      <div className="grid md:grid-cols-3 gap-4 text-sm">
                        <div>
                          <h6 className="font-medium">Purpose Test</h6>
                          <p className="text-xs text-blue-700">Is the interest legitimate?</p>
                        </div>
                        <div>
                          <h6 className="font-medium">Necessity Test</h6>
                          <p className="text-xs text-blue-700">Is processing necessary?</p>
                        </div>
                        <div>
                          <h6 className="font-medium">Balancing Test</h6>
                          <p className="text-xs text-blue-700">Do benefits outweigh risks?</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </CollapsibleContent>
            </Collapsible>
          </Card>

          {/* Response Times & Procedures */}
          <Card>
            <Collapsible 
              open={openSections.includes('procedures')} 
              onOpenChange={() => toggleSection('procedures')}
            >
              <CollapsibleTrigger asChild>
                <CardHeader className="cursor-pointer hover:bg-gray-50">
                  <CardTitle className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Clock className="w-5 h-5 text-orange-600" />
                      Response Times & Procedures
                    </div>
                    {openSections.includes('procedures') ? 
                      <ChevronDown className="w-5 h-5" /> : 
                      <ChevronRight className="w-5 h-5" />
                    }
                  </CardTitle>
                  <CardDescription>
                    How we handle data subject requests and response timelines
                  </CardDescription>
                </CardHeader>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <CardContent>
                  <div className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-3">Standard Response Times</h4>
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead>Request Type</TableHead>
                              <TableHead>Response Time</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            <TableRow>
                              <TableCell>Data Access</TableCell>
                              <TableCell>30 days</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell>Data Rectification</TableCell>
                              <TableCell>30 days</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell>Data Erasure</TableCell>
                              <TableCell>30 days</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell>Data Portability</TableCell>
                              <TableCell>30 days</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell>Object to Processing</TableCell>
                              <TableCell>30 days</TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                        
                        <div className="mt-3 text-xs text-gray-600">
                          * Complex requests may require up to 90 days with notification
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-3">Request Processing Steps</h4>
                        <div className="space-y-3">
                          <div className="flex items-start gap-3">
                            <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-xs font-medium">1</div>
                            <div>
                              <p className="font-medium text-sm">Request Receipt</p>
                              <p className="text-xs text-gray-600">Acknowledge within 72 hours</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-xs font-medium">2</div>
                            <div>
                              <p className="font-medium text-sm">Identity Verification</p>
                              <p className="text-xs text-gray-600">Verify requestor identity</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-xs font-medium">3</div>
                            <div>
                              <p className="font-medium text-sm">Legal Assessment</p>
                              <p className="text-xs text-gray-600">Review legal basis and exceptions</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-xs font-medium">4</div>
                            <div>
                              <p className="font-medium text-sm">Data Processing</p>
                              <p className="text-xs text-gray-600">Execute request or provide explanation</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-xs font-medium">5</div>
                            <div>
                              <p className="font-medium text-sm">Response Delivery</p>
                              <p className="text-xs text-gray-600">Secure delivery of results</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-green-50 border-l-4 border-green-400 p-4">
                      <h5 className="font-medium mb-2 flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        No-Fee Policy
                      </h5>
                      <p className="text-sm text-green-800">
                        We do not charge fees for most data subject requests. Fees may only be charged for 
                        manifestly unfounded or excessive requests, particularly if they are repetitive.
                      </p>
                    </div>

                    <div className="bg-red-50 border-l-4 border-red-400 p-4">
                      <h5 className="font-medium mb-2 flex items-center gap-2">
                        <AlertTriangle className="w-4 h-4 text-red-600" />
                        When We May Refuse Requests
                      </h5>
                      <ul className="text-sm text-red-800 space-y-1">
                        <li>• Manifestly unfounded or excessive requests</li>
                        <li>• Request would adversely affect others' rights</li>
                        <li>• Legal or regulatory obligations prevent compliance</li>
                        <li>• Unable to verify identity after reasonable attempts</li>
                        <li>• Request conflicts with freedom of expression</li>
                      </ul>
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
                Data Protection Contact
              </CardTitle>
              <CardDescription>
                Contact our Data Protection Officer for rights-related queries
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Data Protection Officer (DPO)</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-gray-500" />
                      <span>dpo@aethrix.com</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-gray-500" />
                      <span>+1 (555) 123-4567 ext. 702</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-gray-500" />
                      <span>Mon-Fri 9AM-5PM EST</span>
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <Button className="w-full" size="sm">
                      Contact DPO
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3">Supervisory Authority</h4>
                  <div className="text-sm text-gray-600">
                    <p className="mb-2">If you're unsatisfied with our response, you can lodge a complaint with:</p>
                    
                    <div className="space-y-3">
                      <div className="p-3 bg-gray-50 rounded-lg">
                        <h6 className="font-medium">EU Residents</h6>
                        <p className="text-xs">Your local Data Protection Authority</p>
                        <a href="#" className="text-xs text-blue-600 hover:underline">Find your DPA</a>
                      </div>
                      
                      <div className="p-3 bg-gray-50 rounded-lg">
                        <h6 className="font-medium">US Residents</h6>
                        <p className="text-xs">State Attorney General's Office</p>
                        <a href="#" className="text-xs text-blue-600 hover:underline">Consumer protection agencies</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <div className="text-center mt-12 text-sm text-gray-500">
          <p>This data protection information was last updated on {lastUpdated}.</p>
          <p className="mt-2">
            Your rights may vary based on your location and applicable laws.
          </p>
        </div>
      </div>
    </div>
  );
}
