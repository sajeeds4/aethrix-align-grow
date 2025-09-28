import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { 
  ChevronDown, 
  ChevronRight, 
  Accessibility, 
  Eye, 
  Ear, 
  Hand, 
  Brain, 
  AlertTriangle,
  CheckCircle,
  ExternalLink,
  Calendar,
  Mail,
  Phone,
  Monitor,
  Smartphone,
  Volume2,
  MousePointer,
  Keyboard,
  Settings,
  HelpCircle,
  Star
} from 'lucide-react';

export default function AccessibilityStatement() {
  const [openSections, setOpenSections] = useState<string[]>(['overview']);
  const [feedbackData, setFeedbackData] = useState({
    name: '',
    email: '',
    assistiveTech: '',
    issue: '',
    suggestions: ''
  });

  const toggleSection = (sectionId: string) => {
    setOpenSections(prev => 
      prev.includes(sectionId) 
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const handleInputChange = (field: string, value: string) => {
    setFeedbackData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const submitFeedback = () => {
    console.log('Accessibility feedback submitted:', feedbackData);
    // In a real application, this would submit to your API
  };

  const lastUpdated = "December 15, 2024";

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Accessibility Statement</h1>
          <div className="flex justify-center items-center gap-4 text-sm text-gray-600 mb-6">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              Last Updated: {lastUpdated}
            </div>
            <div className="flex items-center gap-2">
              <Accessibility className="w-4 h-4" />
              WCAG 2.1 AA Compliant
            </div>
          </div>
          <div className="flex justify-center gap-2 mb-6">
            <Badge variant="outline" className="text-xs">
              <Eye className="w-3 h-3 mr-1" />
              WCAG 2.1 AA
            </Badge>
            <Badge variant="outline" className="text-xs">
              <Hand className="w-3 h-3 mr-1" />
              Section 508
            </Badge>
            <Badge variant="outline" className="text-xs">
              <Brain className="w-3 h-3 mr-1" />
              ADA Compliant
            </Badge>
          </div>
        </div>

        {/* Accessibility Feedback Form */}
        <Card className="mb-8 bg-blue-50 border-blue-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-blue-600" />
              Accessibility Feedback
            </CardTitle>
            <CardDescription>
              Report accessibility issues or suggest improvements
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    value={feedbackData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    value={feedbackData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div>
                <Label htmlFor="assistiveTech">Assistive Technology Used (Optional)</Label>
                <Input
                  id="assistiveTech"
                  value={feedbackData.assistiveTech}
                  onChange={(e) => handleInputChange('assistiveTech', e.target.value)}
                  placeholder="e.g., JAWS, NVDA, VoiceOver, Dragon, etc."
                />
              </div>
              
              <div>
                <Label htmlFor="issue">Accessibility Issue or Feedback</Label>
                <Textarea
                  id="issue"
                  value={feedbackData.issue}
                  onChange={(e) => handleInputChange('issue', e.target.value)}
                  placeholder="Please describe any accessibility barriers you encountered..."
                  rows={3}
                />
              </div>
              
              <div>
                <Label htmlFor="suggestions">Suggestions for Improvement (Optional)</Label>
                <Textarea
                  id="suggestions"
                  value={feedbackData.suggestions}
                  onChange={(e) => handleInputChange('suggestions', e.target.value)}
                  placeholder="How can we improve accessibility for you?"
                  rows={2}
                />
              </div>
              
              <Button onClick={submitFeedback} className="w-full">
                Submit Accessibility Feedback
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Main Content */}
        <div className="space-y-6">
          
          {/* Commitment Overview */}
          <Card>
            <Collapsible 
              open={openSections.includes('overview')} 
              onOpenChange={() => toggleSection('overview')}
            >
              <CollapsibleTrigger asChild>
                <CardHeader className="cursor-pointer hover:bg-gray-50">
                  <CardTitle className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Accessibility className="w-5 h-5 text-blue-600" />
                      Our Accessibility Commitment
                    </div>
                    {openSections.includes('overview') ? 
                      <ChevronDown className="w-5 h-5" /> : 
                      <ChevronRight className="w-5 h-5" />
                    }
                  </CardTitle>
                  <CardDescription>
                    Aethrix's commitment to digital accessibility and inclusion
                  </CardDescription>
                </CardHeader>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <CardContent>
                  <div className="space-y-6">
                    <div className="prose max-w-none">
                      <p className="text-gray-700 leading-relaxed">
                        Aethrix is committed to ensuring digital accessibility for people with disabilities. 
                        We are continually improving the user experience for everyone and applying the relevant 
                        accessibility standards to ensure we provide equal access to information and functionality for all users.
                      </p>
                      
                      <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
                        <div className="flex items-start">
                          <Star className="w-5 h-5 text-blue-400 mr-2 mt-0.5" />
                          <div>
                            <p className="text-blue-800 font-medium">Accessibility Mission</p>
                            <p className="text-blue-700 text-sm mt-1">
                              We believe that everyone, regardless of ability, should have access to digital information 
                              and services. Accessibility is not just compliance—it's about creating inclusive experiences.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-3">Accessibility Principles</h4>
                        <div className="space-y-3">
                          <div className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                            <div>
                              <h5 className="font-medium">Perceivable</h5>
                              <p className="text-sm text-gray-600">Information must be presentable in ways users can perceive</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                            <div>
                              <h5 className="font-medium">Operable</h5>
                              <p className="text-sm text-gray-600">Interface components must be operable by all users</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                            <div>
                              <h5 className="font-medium">Understandable</h5>
                              <p className="text-sm text-gray-600">Information and UI operation must be understandable</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                            <div>
                              <h5 className="font-medium">Robust</h5>
                              <p className="text-sm text-gray-600">Content must work with assistive technologies</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-3">Standards We Follow</h4>
                        <div className="space-y-3">
                          <div className="p-3 bg-gray-50 rounded-lg">
                            <h5 className="font-medium text-sm">WCAG 2.1 Level AA</h5>
                            <p className="text-xs text-gray-600">Web Content Accessibility Guidelines</p>
                          </div>
                          <div className="p-3 bg-gray-50 rounded-lg">
                            <h5 className="font-medium text-sm">Section 508</h5>
                            <p className="text-xs text-gray-600">US Federal accessibility requirements</p>
                          </div>
                          <div className="p-3 bg-gray-50 rounded-lg">
                            <h5 className="font-medium text-sm">ADA Title III</h5>
                            <p className="text-xs text-gray-600">Americans with Disabilities Act</p>
                          </div>
                          <div className="p-3 bg-gray-50 rounded-lg">
                            <h5 className="font-medium text-sm">EN 301 549</h5>
                            <p className="text-xs text-gray-600">European accessibility standard</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </CollapsibleContent>
            </Collapsible>
          </Card>

          {/* Accessibility Features */}
          <Card>
            <Collapsible 
              open={openSections.includes('features')} 
              onOpenChange={() => toggleSection('features')}
            >
              <CollapsibleTrigger asChild>
                <CardHeader className="cursor-pointer hover:bg-gray-50">
                  <CardTitle className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Settings className="w-5 h-5 text-green-600" />
                      Accessibility Features
                    </div>
                    {openSections.includes('features') ? 
                      <ChevronDown className="w-5 h-5" /> : 
                      <ChevronRight className="w-5 h-5" />
                    }
                  </CardTitle>
                  <CardDescription>
                    Built-in accessibility features and accommodations
                  </CardDescription>
                </CardHeader>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <CardContent>
                  <div className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-3 flex items-center gap-2">
                          <Eye className="w-5 h-5 text-blue-600" />
                          Visual Accessibility
                        </h4>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-600 mt-1" />
                            <span>High contrast color schemes</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-600 mt-1" />
                            <span>Scalable text up to 200% without scrolling</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-600 mt-1" />
                            <span>Alternative text for all images</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-600 mt-1" />
                            <span>Color is not the sole means of conveying information</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-600 mt-1" />
                            <span>Focus indicators for all interactive elements</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-600 mt-1" />
                            <span>Consistent navigation and layout</span>
                          </li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-3 flex items-center gap-2">
                          <Keyboard className="w-5 h-5 text-purple-600" />
                          Keyboard Accessibility
                        </h4>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-600 mt-1" />
                            <span>All functionality available via keyboard</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-600 mt-1" />
                            <span>Logical tab order throughout the site</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-600 mt-1" />
                            <span>Skip links to main content</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-600 mt-1" />
                            <span>No keyboard traps</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-600 mt-1" />
                            <span>Accessible dropdown menus</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-600 mt-1" />
                            <span>Keyboard shortcuts documented</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-3 flex items-center gap-2">
                          <Volume2 className="w-5 h-5 text-orange-600" />
                          Screen Reader Support
                        </h4>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-600 mt-1" />
                            <span>Semantic HTML structure</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-600 mt-1" />
                            <span>ARIA labels and roles</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-600 mt-1" />
                            <span>Descriptive headings and page titles</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-600 mt-1" />
                            <span>Form labels and error messages</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-600 mt-1" />
                            <span>Live region announcements</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-600 mt-1" />
                            <span>Table headers and captions</span>
                          </li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-3 flex items-center gap-2">
                          <Brain className="w-5 h-5 text-red-600" />
                          Cognitive Accessibility
                        </h4>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-600 mt-1" />
                            <span>Clear and simple language</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-600 mt-1" />
                            <span>Consistent navigation patterns</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-600 mt-1" />
                            <span>Error prevention and recovery</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-600 mt-1" />
                            <span>Sufficient time limits or extensions</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-600 mt-1" />
                            <span>Help and documentation available</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-600 mt-1" />
                            <span>Minimal distractions and animations</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </CollapsibleContent>
            </Collapsible>
          </Card>

          {/* Testing & Compliance */}
          <Card>
            <Collapsible 
              open={openSections.includes('testing')} 
              onOpenChange={() => toggleSection('testing')}
            >
              <CollapsibleTrigger asChild>
                <CardHeader className="cursor-pointer hover:bg-gray-50">
                  <CardTitle className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Monitor className="w-5 h-5 text-purple-600" />
                      Testing & Compliance
                    </div>
                    {openSections.includes('testing') ? 
                      <ChevronDown className="w-5 h-5" /> : 
                      <ChevronRight className="w-5 h-5" />
                    }
                  </CardTitle>
                  <CardDescription>
                    How we test for accessibility and maintain compliance
                  </CardDescription>
                </CardHeader>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <CardContent>
                  <div className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-3">Testing Methods</h4>
                        <div className="space-y-3">
                          <div className="p-3 border rounded-lg">
                            <h5 className="font-medium text-sm mb-1">Automated Testing</h5>
                            <p className="text-xs text-gray-600">WAVE, axe-core, Lighthouse accessibility audits</p>
                          </div>
                          <div className="p-3 border rounded-lg">
                            <h5 className="font-medium text-sm mb-1">Manual Testing</h5>
                            <p className="text-xs text-gray-600">Keyboard navigation, screen reader testing</p>
                          </div>
                          <div className="p-3 border rounded-lg">
                            <h5 className="font-medium text-sm mb-1">User Testing</h5>
                            <p className="text-xs text-gray-600">Testing with people who have disabilities</p>
                          </div>
                          <div className="p-3 border rounded-lg">
                            <h5 className="font-medium text-sm mb-1">Expert Review</h5>
                            <p className="text-xs text-gray-600">Professional accessibility consultants</p>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-3">Assistive Technologies Tested</h4>
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead>Technology</TableHead>
                              <TableHead>Platform</TableHead>
                              <TableHead>Status</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            <TableRow>
                              <TableCell>JAWS</TableCell>
                              <TableCell>Windows</TableCell>
                              <TableCell><Badge variant="outline" className="text-xs">Tested</Badge></TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell>NVDA</TableCell>
                              <TableCell>Windows</TableCell>
                              <TableCell><Badge variant="outline" className="text-xs">Tested</Badge></TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell>VoiceOver</TableCell>
                              <TableCell>macOS/iOS</TableCell>
                              <TableCell><Badge variant="outline" className="text-xs">Tested</Badge></TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell>Dragon</TableCell>
                              <TableCell>Windows/Mac</TableCell>
                              <TableCell><Badge variant="outline" className="text-xs">Testing</Badge></TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell>TalkBack</TableCell>
                              <TableCell>Android</TableCell>
                              <TableCell><Badge variant="outline" className="text-xs">Planned</Badge></TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                      </div>
                    </div>

                    <div className="bg-green-50 border-l-4 border-green-400 p-4">
                      <h5 className="font-medium mb-2 flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        Current Compliance Status
                      </h5>
                      <div className="grid md:grid-cols-3 gap-4 text-sm">
                        <div>
                          <p className="font-medium">WCAG 2.1 AA</p>
                          <p className="text-xs text-green-700">95% Compliant</p>
                        </div>
                        <div>
                          <p className="font-medium">Section 508</p>
                          <p className="text-xs text-green-700">Substantially Compliant</p>
                        </div>
                        <div>
                          <p className="font-medium">ADA Title III</p>
                          <p className="text-xs text-green-700">Working toward full compliance</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3">Third-Party Accessibility Tools</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h5 className="font-medium mb-2">Browser Extensions</h5>
                          <ul className="text-sm space-y-1">
                            <li>• WAVE Web Accessibility Evaluation Tool</li>
                            <li>• axe DevTools</li>
                            <li>• Lighthouse accessibility audit</li>
                            <li>• Color Contrast Analyzer</li>
                          </ul>
                        </div>
                        
                        <div>
                          <h5 className="font-medium mb-2">Professional Services</h5>
                          <ul className="text-sm space-y-1">
                            <li>• Annual accessibility audit</li>
                            <li>• User testing with disability community</li>
                            <li>• Accessibility training for developers</li>
                            <li>• Compliance monitoring</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </CollapsibleContent>
            </Collapsible>
          </Card>

          {/* Known Issues & Limitations */}
          <Card>
            <Collapsible 
              open={openSections.includes('limitations')} 
              onOpenChange={() => toggleSection('limitations')}
            >
              <CollapsibleTrigger asChild>
                <CardHeader className="cursor-pointer hover:bg-gray-50">
                  <CardTitle className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5 text-orange-600" />
                      Known Issues & Limitations
                    </div>
                    {openSections.includes('limitations') ? 
                      <ChevronDown className="w-5 h-5" /> : 
                      <ChevronRight className="w-5 h-5" />
                    }
                  </CardTitle>
                  <CardDescription>
                    Current accessibility issues and our plans to address them
                  </CardDescription>
                </CardHeader>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <CardContent>
                  <div className="space-y-6">
                    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                      <h5 className="font-medium mb-2 flex items-center gap-2">
                        <AlertTriangle className="w-4 h-4 text-yellow-600" />
                        Transparency Commitment
                      </h5>
                      <p className="text-sm text-yellow-800">
                        We believe in transparency about our accessibility status. Below are known issues 
                        we're working to resolve and areas where we may not fully meet standards.
                      </p>
                    </div>

                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Issue</TableHead>
                          <TableHead>Impact</TableHead>
                          <TableHead>Workaround</TableHead>
                          <TableHead>Timeline</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell>
                            <div>
                              <p className="font-medium text-sm">Interactive charts screen reader support</p>
                              <p className="text-xs text-gray-600">Complex data visualizations may not be fully accessible</p>
                            </div>
                          </TableCell>
                          <TableCell>
                            <Badge variant="destructive" className="text-xs">High</Badge>
                          </TableCell>
                          <TableCell className="text-sm">
                            Data tables provided as alternative
                          </TableCell>
                          <TableCell className="text-sm">
                            Q1 2025
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>
                            <div>
                              <p className="font-medium text-sm">PDF document accessibility</p>
                              <p className="text-xs text-gray-600">Some legacy PDF files may not be fully accessible</p>
                            </div>
                          </TableCell>
                          <TableCell>
                            <Badge variant="outline" className="text-xs">Medium</Badge>
                          </TableCell>
                          <TableCell className="text-sm">
                            Contact us for alternative formats
                          </TableCell>
                          <TableCell className="text-sm">
                            Ongoing
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>
                            <div>
                              <p className="font-medium text-sm">Third-party video player controls</p>
                              <p className="text-xs text-gray-600">Embedded videos may have limited keyboard access</p>
                            </div>
                          </TableCell>
                          <TableCell>
                            <Badge variant="outline" className="text-xs">Low</Badge>
                          </TableCell>
                          <TableCell className="text-sm">
                            Alternative video links provided
                          </TableCell>
                          <TableCell className="text-sm">
                            Q2 2025
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>
                            <div>
                              <p className="font-medium text-sm">Mobile app accessibility</p>
                              <p className="text-xs text-gray-600">Mobile app features may have accessibility gaps</p>
                            </div>
                          </TableCell>
                          <TableCell>
                            <Badge variant="outline" className="text-xs">Medium</Badge>
                          </TableCell>
                          <TableCell className="text-sm">
                            Full website functionality available
                          </TableCell>
                          <TableCell className="text-sm">
                            Q3 2025
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>

                    <div>
                      <h4 className="font-semibold mb-3">Improvement Roadmap</h4>
                      <div className="space-y-3">
                        <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-sm font-medium">Q1</div>
                          <div>
                            <p className="font-medium text-sm">Enhanced Screen Reader Support</p>
                            <p className="text-xs text-gray-600">Improve ARIA implementation for complex components</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-sm font-medium">Q2</div>
                          <div>
                            <p className="font-medium text-sm">Voice Control Optimization</p>
                            <p className="text-xs text-gray-600">Better support for Dragon and other voice control software</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-sm font-medium">Q3</div>
                          <div>
                            <p className="font-medium text-sm">Mobile Accessibility</p>
                            <p className="text-xs text-gray-600">Comprehensive mobile accessibility improvements</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-sm font-medium">Q4</div>
                          <div>
                            <p className="font-medium text-sm">WCAG 2.2 AAA Features</p>
                            <p className="text-xs text-gray-600">Implementing select AAA level criteria</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </CollapsibleContent>
            </Collapsible>
          </Card>

          {/* Alternative Formats & Support */}
          <Card>
            <Collapsible 
              open={openSections.includes('support')} 
              onOpenChange={() => toggleSection('support')}
            >
              <CollapsibleTrigger asChild>
                <CardHeader className="cursor-pointer hover:bg-gray-50">
                  <CardTitle className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <HelpCircle className="w-5 h-5 text-green-600" />
                      Alternative Formats & Support
                    </div>
                    {openSections.includes('support') ? 
                      <ChevronDown className="w-5 h-5" /> : 
                      <ChevronRight className="w-5 h-5" />
                    }
                  </CardTitle>
                  <CardDescription>
                    Additional accessibility support and alternative content formats
                  </CardDescription>
                </CardHeader>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <CardContent>
                  <div className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-3">Available Alternative Formats</h4>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 p-2 bg-gray-50 rounded">
                            <CheckCircle className="w-4 h-4 text-green-600" />
                            <span className="text-sm">Large print versions</span>
                          </div>
                          <div className="flex items-center gap-2 p-2 bg-gray-50 rounded">
                            <CheckCircle className="w-4 h-4 text-green-600" />
                            <span className="text-sm">Plain text documents</span>
                          </div>
                          <div className="flex items-center gap-2 p-2 bg-gray-50 rounded">
                            <CheckCircle className="w-4 h-4 text-green-600" />
                            <span className="text-sm">Audio recordings</span>
                          </div>
                          <div className="flex items-center gap-2 p-2 bg-gray-50 rounded">
                            <CheckCircle className="w-4 h-4 text-green-600" />
                            <span className="text-sm">Braille (upon request)</span>
                          </div>
                          <div className="flex items-center gap-2 p-2 bg-gray-50 rounded">
                            <CheckCircle className="w-4 h-4 text-green-600" />
                            <span className="text-sm">Accessible PDF versions</span>
                          </div>
                          <div className="flex items-center gap-2 p-2 bg-gray-50 rounded">
                            <CheckCircle className="w-4 h-4 text-green-600" />
                            <span className="text-sm">Simplified language versions</span>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-3">Accessibility Support Services</h4>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start gap-2">
                            <Phone className="w-4 h-4 text-blue-600 mt-1" />
                            <div>
                              <span className="font-medium">Phone Support</span>
                              <p className="text-xs text-gray-600">Accessible customer service line</p>
                            </div>
                          </li>
                          <li className="flex items-start gap-2">
                            <Mail className="w-4 h-4 text-blue-600 mt-1" />
                            <div>
                              <span className="font-medium">Email Support</span>
                              <p className="text-xs text-gray-600">Dedicated accessibility support email</p>
                            </div>
                          </li>
                          <li className="flex items-start gap-2">
                            <Smartphone className="w-4 h-4 text-blue-600 mt-1" />
                            <div>
                              <span className="font-medium">Live Chat</span>
                              <p className="text-xs text-gray-600">Real-time accessibility assistance</p>
                            </div>
                          </li>
                          <li className="flex items-start gap-2">
                            <Volume2 className="w-4 h-4 text-blue-600 mt-1" />
                            <div>
                              <span className="font-medium">Screen Sharing</span>
                              <p className="text-xs text-gray-600">Remote assistance for complex tasks</p>
                            </div>
                          </li>
                        </ul>

                        <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                          <h5 className="font-medium text-sm mb-1">Response Times</h5>
                          <ul className="text-xs text-blue-800 space-y-1">
                            <li>• Email: Within 24 hours</li>
                            <li>• Phone: Immediate during business hours</li>
                            <li>• Alternative formats: Within 5 business days</li>
                            <li>• Complex requests: Within 10 business days</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3">Requesting Accommodations</h4>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="text-sm text-gray-700 mb-3">
                          If you need content in an alternative format or require additional accessibility accommodations, 
                          please contact us. We will work with you to provide the most appropriate solution.
                        </p>
                        
                        <div className="flex flex-wrap gap-2">
                          <Button size="sm">
                            Request Alternative Format
                            <ExternalLink className="w-4 h-4 ml-2" />
                          </Button>
                          <Button size="sm" variant="outline">
                            Schedule Accessibility Consultation
                            <Phone className="w-4 h-4 ml-2" />
                          </Button>
                        </div>
                      </div>
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
                Accessibility Contact Information
              </CardTitle>
              <CardDescription>
                Get in touch with our accessibility team
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Accessibility Coordinator</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-gray-500" />
                      <span>accessibility@aethrix.com</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-gray-500" />
                      <span>+1 (555) 123-4567 ext. 703</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Accessibility className="w-4 h-4 text-gray-500" />
                      <span>TTY: +1 (555) 123-4568</span>
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <Button className="w-full" size="sm">
                      Contact Accessibility Team
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3">Business Hours & Response</h4>
                  <div className="text-sm text-gray-600 space-y-2">
                    <p><span className="font-medium">Phone Support:</span> Mon-Fri 8AM-8PM EST</p>
                    <p><span className="font-medium">Email Response:</span> Within 24 hours</p>
                    <p><span className="font-medium">Emergency Issues:</span> Within 4 hours</p>
                  </div>
                  
                  <div className="mt-4">
                    <h5 className="font-medium mb-2">Mailing Address</h5>
                    <div className="text-sm text-gray-600">
                      <p>Aethrix LLC</p>
                      <p>Accessibility Department</p>
                      <p>123 Business Avenue, Suite 456</p>
                      <p>Dover, DE 19901</p>
                      <p>United States</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <div className="text-center mt-12 text-sm text-gray-500">
          <p>This accessibility statement was last reviewed on {lastUpdated}.</p>
          <p className="mt-2">
            We are committed to continuously improving accessibility and welcome your feedback.
          </p>
        </div>
      </div>
    </div>
  );
}
