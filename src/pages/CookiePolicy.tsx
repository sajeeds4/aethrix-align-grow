import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  ChevronDown, 
  ChevronRight, 
  Cookie, 
  Shield, 
  Settings, 
  AlertTriangle,
  CheckCircle,
  ExternalLink,
  Calendar,
  Clock,
  Database,
  Globe,
  Eye,
  Target,
  BarChart3,
  Smartphone
} from 'lucide-react';

interface CookieSettings {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
  personalization: boolean;
}

export default function CookiePolicy() {
  const [openSections, setOpenSections] = useState<string[]>(['overview']);
  const [cookieSettings, setCookieSettings] = useState<CookieSettings>({
    essential: true,
    analytics: false,
    marketing: false,
    personalization: false
  });

  const toggleSection = (sectionId: string) => {
    setOpenSections(prev => 
      prev.includes(sectionId) 
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const handleCookieSettingChange = (category: keyof CookieSettings, enabled: boolean) => {
    if (category === 'essential') return; // Essential cookies can't be disabled
    setCookieSettings(prev => ({
      ...prev,
      [category]: enabled
    }));
  };

  const saveSettings = () => {
    // Save cookie preferences to localStorage
    localStorage.setItem('cookiePreferences', JSON.stringify(cookieSettings));
    // In a real application, you would also trigger consent management platform
    console.log('Cookie preferences saved:', cookieSettings);
  };

  const lastUpdated = "December 15, 2024";

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Cookie Policy</h1>
          <div className="flex justify-center items-center gap-4 text-sm text-gray-600 mb-6">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              Last Updated: {lastUpdated}
            </div>
            <div className="flex items-center gap-2">
              <Cookie className="w-4 h-4" />
              GDPR Compliant
            </div>
          </div>
        </div>

        {/* Cookie Consent Banner Simulator */}
        <Card className="mb-8 bg-blue-50 border-blue-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Settings className="w-5 h-5 text-blue-600" />
              Cookie Preferences Center
            </CardTitle>
            <CardDescription>
              Manage your cookie preferences and understand how we use cookies
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid md:grid-cols-4 gap-4">
                <div className="flex items-center justify-between p-3 bg-white rounded-lg border">
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-green-600" />
                    <div>
                      <p className="font-medium text-sm">Essential</p>
                      <p className="text-xs text-gray-600">Always active</p>
                    </div>
                  </div>
                  <Switch checked={true} disabled />
                </div>
                
                <div className="flex items-center justify-between p-3 bg-white rounded-lg border">
                  <div className="flex items-center gap-2">
                    <BarChart3 className="w-4 h-4 text-blue-600" />
                    <div>
                      <p className="font-medium text-sm">Analytics</p>
                      <p className="text-xs text-gray-600">Performance data</p>
                    </div>
                  </div>
                  <Switch 
                    checked={cookieSettings.analytics} 
                    onCheckedChange={(checked) => handleCookieSettingChange('analytics', checked)}
                  />
                </div>
                
                <div className="flex items-center justify-between p-3 bg-white rounded-lg border">
                  <div className="flex items-center gap-2">
                    <Target className="w-4 h-4 text-purple-600" />
                    <div>
                      <p className="font-medium text-sm">Marketing</p>
                      <p className="text-xs text-gray-600">Advertising</p>
                    </div>
                  </div>
                  <Switch 
                    checked={cookieSettings.marketing} 
                    onCheckedChange={(checked) => handleCookieSettingChange('marketing', checked)}
                  />
                </div>
                
                <div className="flex items-center justify-between p-3 bg-white rounded-lg border">
                  <div className="flex items-center gap-2">
                    <Eye className="w-4 h-4 text-orange-600" />
                    <div>
                      <p className="font-medium text-sm">Personalization</p>
                      <p className="text-xs text-gray-600">Customization</p>
                    </div>
                  </div>
                  <Switch 
                    checked={cookieSettings.personalization} 
                    onCheckedChange={(checked) => handleCookieSettingChange('personalization', checked)}
                  />
                </div>
              </div>
              
              <div className="flex gap-2">
                <Button onClick={saveSettings} className="flex-1">
                  Accept Selected Cookies
                </Button>
                <Button variant="outline" onClick={() => setCookieSettings({
                  essential: true,
                  analytics: false,
                  marketing: false,
                  personalization: false
                })}>
                  Reject All
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Main Content */}
        <div className="space-y-6">
          
          {/* Cookie Overview */}
          <Card>
            <Collapsible 
              open={openSections.includes('overview')} 
              onOpenChange={() => toggleSection('overview')}
            >
              <CollapsibleTrigger asChild>
                <CardHeader className="cursor-pointer hover:bg-gray-50">
                  <CardTitle className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Cookie className="w-5 h-5 text-blue-600" />
                      What Are Cookies?
                    </div>
                    {openSections.includes('overview') ? 
                      <ChevronDown className="w-5 h-5" /> : 
                      <ChevronRight className="w-5 h-5" />
                    }
                  </CardTitle>
                  <CardDescription>
                    Understanding cookies and similar tracking technologies
                  </CardDescription>
                </CardHeader>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <CardContent>
                  <div className="space-y-6">
                    <div className="prose max-w-none">
                      <p className="text-gray-700 leading-relaxed">
                        Cookies are small text files that are stored on your device when you visit our website. 
                        They help us provide you with a better browsing experience by remembering your preferences, 
                        analyzing how you use our site, and enabling certain functionality.
                      </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-3">Types of Cookies</h4>
                        <div className="space-y-3">
                          <div className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                            <div>
                              <h5 className="font-medium">Session Cookies</h5>
                              <p className="text-sm text-gray-600">Temporary cookies deleted when you close your browser</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                            <div>
                              <h5 className="font-medium">Persistent Cookies</h5>
                              <p className="text-sm text-gray-600">Remain on your device until they expire or are deleted</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                            <div>
                              <h5 className="font-medium">First-Party Cookies</h5>
                              <p className="text-sm text-gray-600">Set by our website directly</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                            <div>
                              <h5 className="font-medium">Third-Party Cookies</h5>
                              <p className="text-sm text-gray-600">Set by external services we use</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-3">Similar Technologies</h4>
                        <div className="space-y-3">
                          <div className="p-3 bg-gray-50 rounded-lg">
                            <h5 className="font-medium text-sm">Web Beacons</h5>
                            <p className="text-xs text-gray-600">Tiny images that help track user behavior</p>
                          </div>
                          <div className="p-3 bg-gray-50 rounded-lg">
                            <h5 className="font-medium text-sm">Local Storage</h5>
                            <p className="text-xs text-gray-600">Browser storage for larger amounts of data</p>
                          </div>
                          <div className="p-3 bg-gray-50 rounded-lg">
                            <h5 className="font-medium text-sm">Pixels & Scripts</h5>
                            <p className="text-xs text-gray-600">Code that collects usage information</p>
                          </div>
                          <div className="p-3 bg-gray-50 rounded-lg">
                            <h5 className="font-medium text-sm">Device Fingerprinting</h5>
                            <p className="text-xs text-gray-600">Identifying devices based on characteristics</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </CollapsibleContent>
            </Collapsible>
          </Card>

          {/* Cookie Categories */}
          <Card>
            <Collapsible 
              open={openSections.includes('categories')} 
              onOpenChange={() => toggleSection('categories')}
            >
              <CollapsibleTrigger asChild>
                <CardHeader className="cursor-pointer hover:bg-gray-50">
                  <CardTitle className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Database className="w-5 h-5 text-green-600" />
                      Cookie Categories
                    </div>
                    {openSections.includes('categories') ? 
                      <ChevronDown className="w-5 h-5" /> : 
                      <ChevronRight className="w-5 h-5" />
                    }
                  </CardTitle>
                  <CardDescription>
                    Detailed breakdown of cookies by purpose and functionality
                  </CardDescription>
                </CardHeader>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <CardContent>
                  <Tabs defaultValue="essential" className="w-full">
                    <TabsList className="grid w-full grid-cols-4">
                      <TabsTrigger value="essential">Essential</TabsTrigger>
                      <TabsTrigger value="analytics">Analytics</TabsTrigger>
                      <TabsTrigger value="marketing">Marketing</TabsTrigger>
                      <TabsTrigger value="personalization">Personalization</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="essential" className="mt-4">
                      <div className="space-y-4">
                        <div className="bg-green-50 border-l-4 border-green-400 p-4">
                          <div className="flex items-start">
                            <Shield className="w-5 h-5 text-green-400 mr-2 mt-0.5" />
                            <div>
                              <p className="text-green-800 font-medium">Essential Cookies - Always Active</p>
                              <p className="text-green-700 text-sm mt-1">
                                These cookies are necessary for the website to function properly and cannot be disabled.
                              </p>
                            </div>
                          </div>
                        </div>

                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead>Cookie Name</TableHead>
                              <TableHead>Purpose</TableHead>
                              <TableHead>Duration</TableHead>
                              <TableHead>Domain</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            <TableRow>
                              <TableCell className="font-mono text-sm">session_id</TableCell>
                              <TableCell>User session management</TableCell>
                              <TableCell>Session</TableCell>
                              <TableCell>aethrix.com</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="font-mono text-sm">csrf_token</TableCell>
                              <TableCell>Security protection</TableCell>
                              <TableCell>Session</TableCell>
                              <TableCell>aethrix.com</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="font-mono text-sm">cookie_consent</TableCell>
                              <TableCell>Remember cookie preferences</TableCell>
                              <TableCell>1 year</TableCell>
                              <TableCell>aethrix.com</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="font-mono text-sm">auth_token</TableCell>
                              <TableCell>User authentication</TableCell>
                              <TableCell>7 days</TableCell>
                              <TableCell>aethrix.com</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="font-mono text-sm">load_balancer</TableCell>
                              <TableCell>Server routing</TableCell>
                              <TableCell>Session</TableCell>
                              <TableCell>aethrix.com</TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="analytics" className="mt-4">
                      <div className="space-y-4">
                        <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                          <div className="flex items-start">
                            <BarChart3 className="w-5 h-5 text-blue-400 mr-2 mt-0.5" />
                            <div>
                              <p className="text-blue-800 font-medium">Analytics Cookies</p>
                              <p className="text-blue-700 text-sm mt-1">
                                Help us understand how visitors interact with our website by collecting anonymous information.
                              </p>
                            </div>
                          </div>
                        </div>

                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead>Cookie Name</TableHead>
                              <TableHead>Provider</TableHead>
                              <TableHead>Purpose</TableHead>
                              <TableHead>Duration</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            <TableRow>
                              <TableCell className="font-mono text-sm">_ga</TableCell>
                              <TableCell>Google Analytics</TableCell>
                              <TableCell>Distinguish users</TableCell>
                              <TableCell>2 years</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="font-mono text-sm">_ga_[ID]</TableCell>
                              <TableCell>Google Analytics</TableCell>
                              <TableCell>Session state</TableCell>
                              <TableCell>2 years</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="font-mono text-sm">_gid</TableCell>
                              <TableCell>Google Analytics</TableCell>
                              <TableCell>Distinguish users</TableCell>
                              <TableCell>24 hours</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="font-mono text-sm">hotjar_session</TableCell>
                              <TableCell>Hotjar</TableCell>
                              <TableCell>User behavior analysis</TableCell>
                              <TableCell>30 minutes</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="font-mono text-sm">mixpanel_events</TableCell>
                              <TableCell>Mixpanel</TableCell>
                              <TableCell>Event tracking</TableCell>
                              <TableCell>1 year</TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>

                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <h5 className="font-medium mb-2">Data Collected</h5>
                            <ul className="text-sm space-y-1 text-gray-600">
                              <li>• Page views and session duration</li>
                              <li>• Device and browser information</li>
                              <li>• Geographic location (city level)</li>
                              <li>• Referral sources</li>
                              <li>• Click paths and user journeys</li>
                            </ul>
                          </div>
                          
                          <div>
                            <h5 className="font-medium mb-2">How We Use It</h5>
                            <ul className="text-sm space-y-1 text-gray-600">
                              <li>• Improve website performance</li>
                              <li>• Understand user preferences</li>
                              <li>• Optimize content and layout</li>
                              <li>• Identify technical issues</li>
                              <li>• Generate usage reports</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="marketing" className="mt-4">
                      <div className="space-y-4">
                        <div className="bg-purple-50 border-l-4 border-purple-400 p-4">
                          <div className="flex items-start">
                            <Target className="w-5 h-5 text-purple-400 mr-2 mt-0.5" />
                            <div>
                              <p className="text-purple-800 font-medium">Marketing Cookies</p>
                              <p className="text-purple-700 text-sm mt-1">
                                Used to deliver relevant advertisements and measure advertising effectiveness.
                              </p>
                            </div>
                          </div>
                        </div>

                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead>Cookie Name</TableHead>
                              <TableHead>Provider</TableHead>
                              <TableHead>Purpose</TableHead>
                              <TableHead>Duration</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            <TableRow>
                              <TableCell className="font-mono text-sm">_fbp</TableCell>
                              <TableCell>Facebook</TableCell>
                              <TableCell>Track conversions and retargeting</TableCell>
                              <TableCell>3 months</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="font-mono text-sm">_gcl_au</TableCell>
                              <TableCell>Google Ads</TableCell>
                              <TableCell>Conversion tracking</TableCell>
                              <TableCell>3 months</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="font-mono text-sm">linkedin_ads</TableCell>
                              <TableCell>LinkedIn</TableCell>
                              <TableCell>B2B advertising and insights</TableCell>
                              <TableCell>2 years</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="font-mono text-sm">twitter_ads</TableCell>
                              <TableCell>Twitter</TableCell>
                              <TableCell>Social media advertising</TableCell>
                              <TableCell>2 years</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="font-mono text-sm">retargeting_pixel</TableCell>
                              <TableCell>Various</TableCell>
                              <TableCell>Show relevant ads on other sites</TableCell>
                              <TableCell>90 days</TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>

                        <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                          <h5 className="font-medium mb-2 flex items-center gap-2">
                            <AlertTriangle className="w-4 h-4 text-yellow-600" />
                            Marketing Cookie Notice
                          </h5>
                          <p className="text-sm text-yellow-800">
                            Marketing cookies may track you across websites and build a profile of your interests. 
                            You can opt out at any time through our cookie settings or directly with advertising platforms.
                          </p>
                          <div className="mt-3 space-x-2">
                            <Button size="sm" variant="outline" className="text-xs">
                              Opt Out of Google Ads
                              <ExternalLink className="w-3 h-3 ml-1" />
                            </Button>
                            <Button size="sm" variant="outline" className="text-xs">
                              Facebook Ad Preferences
                              <ExternalLink className="w-3 h-3 ml-1" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="personalization" className="mt-4">
                      <div className="space-y-4">
                        <div className="bg-orange-50 border-l-4 border-orange-400 p-4">
                          <div className="flex items-start">
                            <Eye className="w-5 h-5 text-orange-400 mr-2 mt-0.5" />
                            <div>
                              <p className="text-orange-800 font-medium">Personalization Cookies</p>
                              <p className="text-orange-700 text-sm mt-1">
                                Remember your preferences and settings to provide a customized experience.
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                          <Card>
                            <CardHeader className="pb-2">
                              <CardTitle className="text-sm">Preference Settings</CardTitle>
                            </CardHeader>
                            <CardContent className="text-sm">
                              <ul className="space-y-1 text-gray-600">
                                <li>• Language and region preferences</li>
                                <li>• Theme and display settings</li>
                                <li>• Timezone and date format</li>
                                <li>• Accessibility options</li>
                                <li>• Layout customizations</li>
                              </ul>
                            </CardContent>
                          </Card>
                          
                          <Card>
                            <CardHeader className="pb-2">
                              <CardTitle className="text-sm">User Experience</CardTitle>
                            </CardHeader>
                            <CardContent className="text-sm">
                              <ul className="space-y-1 text-gray-600">
                                <li>• Recently viewed content</li>
                                <li>• Saved searches and filters</li>
                                <li>• Form auto-completion</li>
                                <li>• Recommended content</li>
                                <li>• Dashboard configurations</li>
                              </ul>
                            </CardContent>
                          </Card>
                        </div>

                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead>Cookie Name</TableHead>
                              <TableHead>Purpose</TableHead>
                              <TableHead>Duration</TableHead>
                              <TableHead>User Control</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            <TableRow>
                              <TableCell className="font-mono text-sm">user_preferences</TableCell>
                              <TableCell>Store display and language settings</TableCell>
                              <TableCell>1 year</TableCell>
                              <TableCell>Settings page</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="font-mono text-sm">recent_searches</TableCell>
                              <TableCell>Remember recent search queries</TableCell>
                              <TableCell>30 days</TableCell>
                              <TableCell>Clear search history</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="font-mono text-sm">dashboard_layout</TableCell>
                              <TableCell>Save customized dashboard</TableCell>
                              <TableCell>6 months</TableCell>
                              <TableCell>Reset to default</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="font-mono text-sm">notification_prefs</TableCell>
                              <TableCell>Notification preferences</TableCell>
                              <TableCell>1 year</TableCell>
                              <TableCell>Notification settings</TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </CollapsibleContent>
            </Collapsible>
          </Card>

          {/* Third-Party Services */}
          <Card>
            <Collapsible 
              open={openSections.includes('third-party')} 
              onOpenChange={() => toggleSection('third-party')}
            >
              <CollapsibleTrigger asChild>
                <CardHeader className="cursor-pointer hover:bg-gray-50">
                  <CardTitle className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Globe className="w-5 h-5 text-purple-600" />
                      Third-Party Services
                    </div>
                    {openSections.includes('third-party') ? 
                      <ChevronDown className="w-5 h-5" /> : 
                      <ChevronRight className="w-5 h-5" />
                    }
                  </CardTitle>
                  <CardDescription>
                    External services that may set cookies on our website
                  </CardDescription>
                </CardHeader>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <CardContent>
                  <div className="space-y-6">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Service</TableHead>
                          <TableHead>Category</TableHead>
                          <TableHead>Purpose</TableHead>
                          <TableHead>Privacy Policy</TableHead>
                          <TableHead>Opt-Out</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell className="font-medium">Google Analytics</TableCell>
                          <TableCell>
                            <Badge variant="outline" className="text-xs">Analytics</Badge>
                          </TableCell>
                          <TableCell>Website usage statistics</TableCell>
                          <TableCell>
                            <Button size="sm" variant="ghost" className="h-6 text-xs p-1">
                              View Policy <ExternalLink className="w-3 h-3 ml-1" />
                            </Button>
                          </TableCell>
                          <TableCell>
                            <Button size="sm" variant="ghost" className="h-6 text-xs p-1">
                              Opt Out <ExternalLink className="w-3 h-3 ml-1" />
                            </Button>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Google Ads</TableCell>
                          <TableCell>
                            <Badge variant="outline" className="text-xs">Marketing</Badge>
                          </TableCell>
                          <TableCell>Conversion tracking and retargeting</TableCell>
                          <TableCell>
                            <Button size="sm" variant="ghost" className="h-6 text-xs p-1">
                              View Policy <ExternalLink className="w-3 h-3 ml-1" />
                            </Button>
                          </TableCell>
                          <TableCell>
                            <Button size="sm" variant="ghost" className="h-6 text-xs p-1">
                              Ad Settings <ExternalLink className="w-3 h-3 ml-1" />
                            </Button>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Facebook Pixel</TableCell>
                          <TableCell>
                            <Badge variant="outline" className="text-xs">Marketing</Badge>
                          </TableCell>
                          <TableCell>Social media advertising</TableCell>
                          <TableCell>
                            <Button size="sm" variant="ghost" className="h-6 text-xs p-1">
                              View Policy <ExternalLink className="w-3 h-3 ml-1" />
                            </Button>
                          </TableCell>
                          <TableCell>
                            <Button size="sm" variant="ghost" className="h-6 text-xs p-1">
                              Ad Preferences <ExternalLink className="w-3 h-3 ml-1" />
                            </Button>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">LinkedIn Ads</TableCell>
                          <TableCell>
                            <Badge variant="outline" className="text-xs">Marketing</Badge>
                          </TableCell>
                          <TableCell>B2B targeting and insights</TableCell>
                          <TableCell>
                            <Button size="sm" variant="ghost" className="h-6 text-xs p-1">
                              View Policy <ExternalLink className="w-3 h-3 ml-1" />
                            </Button>
                          </TableCell>
                          <TableCell>
                            <Button size="sm" variant="ghost" className="h-6 text-xs p-1">
                              Privacy Settings <ExternalLink className="w-3 h-3 ml-1" />
                            </Button>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Hotjar</TableCell>
                          <TableCell>
                            <Badge variant="outline" className="text-xs">Analytics</Badge>
                          </TableCell>
                          <TableCell>User behavior and heatmaps</TableCell>
                          <TableCell>
                            <Button size="sm" variant="ghost" className="h-6 text-xs p-1">
                              View Policy <ExternalLink className="w-3 h-3 ml-1" />
                            </Button>
                          </TableCell>
                          <TableCell>
                            <Button size="sm" variant="ghost" className="h-6 text-xs p-1">
                              Opt Out <ExternalLink className="w-3 h-3 ml-1" />
                            </Button>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Stripe</TableCell>
                          <TableCell>
                            <Badge variant="outline" className="text-xs">Essential</Badge>
                          </TableCell>
                          <TableCell>Payment processing</TableCell>
                          <TableCell>
                            <Button size="sm" variant="ghost" className="h-6 text-xs p-1">
                              View Policy <ExternalLink className="w-3 h-3 ml-1" />
                            </Button>
                          </TableCell>
                          <TableCell>
                            <span className="text-xs text-gray-500">Required for payment</span>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Supabase</TableCell>
                          <TableCell>
                            <Badge variant="outline" className="text-xs">Essential</Badge>
                          </TableCell>
                          <TableCell>Database and authentication</TableCell>
                          <TableCell>
                            <Button size="sm" variant="ghost" className="h-6 text-xs p-1">
                              View Policy <ExternalLink className="w-3 h-3 ml-1" />
                            </Button>
                          </TableCell>
                          <TableCell>
                            <span className="text-xs text-gray-500">Required for service</span>
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>

                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h5 className="font-medium mb-2">Industry Opt-Out Tools</h5>
                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <h6 className="font-medium">US-Based Services</h6>
                          <ul className="space-y-1 mt-2">
                            <li>• <a href="#" className="text-blue-600 hover:underline">Network Advertising Initiative (NAI)</a></li>
                            <li>• <a href="#" className="text-blue-600 hover:underline">Digital Advertising Alliance (DAA)</a></li>
                            <li>• <a href="#" className="text-blue-600 hover:underline">Google Ad Settings</a></li>
                          </ul>
                        </div>
                        
                        <div>
                          <h6 className="font-medium">EU-Based Services</h6>
                          <ul className="space-y-1 mt-2">
                            <li>• <a href="#" className="text-blue-600 hover:underline">European Interactive Digital Advertising Alliance</a></li>
                            <li>• <a href="#" className="text-blue-600 hover:underline">Your Online Choices</a></li>
                            <li>• <a href="#" className="text-blue-600 hover:underline">Google Ad Settings (EU)</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </CollapsibleContent>
            </Collapsible>
          </Card>

          {/* Mobile and Apps */}
          <Card>
            <Collapsible 
              open={openSections.includes('mobile')} 
              onOpenChange={() => toggleSection('mobile')}
            >
              <CollapsibleTrigger asChild>
                <CardHeader className="cursor-pointer hover:bg-gray-50">
                  <CardTitle className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Smartphone className="w-5 h-5 text-green-600" />
                      Mobile & App Tracking
                    </div>
                    {openSections.includes('mobile') ? 
                      <ChevronDown className="w-5 h-5" /> : 
                      <ChevronRight className="w-5 h-5" />
                    }
                  </CardTitle>
                  <CardDescription>
                    Tracking technologies in mobile browsers and applications
                  </CardDescription>
                </CardHeader>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <CardContent>
                  <div className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-3">Mobile Browser Cookies</h4>
                        <p className="text-sm text-gray-600 mb-3">
                          Mobile browsers handle cookies similarly to desktop browsers, but with some differences in storage and behavior.
                        </p>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-600 mt-1" />
                            <span>Same cookie policies apply as desktop</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-600 mt-1" />
                            <span>May have different storage limitations</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-600 mt-1" />
                            <span>Browser settings control cookie behavior</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-600 mt-1" />
                            <span>Private/incognito mode affects cookies</span>
                          </li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-3">Mobile App Identifiers</h4>
                        <p className="text-sm text-gray-600 mb-3">
                          If we develop mobile applications, they may use device identifiers and analytics SDKs.
                        </p>
                        <div className="space-y-3">
                          <div className="p-3 bg-gray-50 rounded-lg">
                            <h5 className="font-medium text-sm">iOS Identifiers</h5>
                            <p className="text-xs text-gray-600">IDFA (Identifier for Advertisers) - user controllable</p>
                          </div>
                          <div className="p-3 bg-gray-50 rounded-lg">
                            <h5 className="font-medium text-sm">Android Identifiers</h5>
                            <p className="text-xs text-gray-600">GAID (Google Advertising ID) - user controllable</p>
                          </div>
                          <div className="p-3 bg-gray-50 rounded-lg">
                            <h5 className="font-medium text-sm">Analytics SDKs</h5>
                            <p className="text-xs text-gray-600">Firebase, Mixpanel, or similar for app analytics</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                      <h5 className="font-medium mb-2">Mobile Privacy Controls</h5>
                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <h6 className="font-medium">iOS Settings</h6>
                          <p className="text-gray-600 text-xs mt-1">Settings → Privacy & Security → Tracking → Allow Apps to Request to Track</p>
                        </div>
                        
                        <div>
                          <h6 className="font-medium">Android Settings</h6>
                          <p className="text-gray-600 text-xs mt-1">Settings → Privacy → Ads → Opt out of Ads Personalization</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </CollapsibleContent>
            </Collapsible>
          </Card>

          {/* Your Choices */}
          <Card>
            <Collapsible 
              open={openSections.includes('choices')} 
              onOpenChange={() => toggleSection('choices')}
            >
              <CollapsibleTrigger asChild>
                <CardHeader className="cursor-pointer hover:bg-gray-50">
                  <CardTitle className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Settings className="w-5 h-5 text-indigo-600" />
                      Your Choices & Control
                    </div>
                    {openSections.includes('choices') ? 
                      <ChevronDown className="w-5 h-5" /> : 
                      <ChevronRight className="w-5 h-5" />
                    }
                  </CardTitle>
                  <CardDescription>
                    How to manage and control cookies and tracking
                  </CardDescription>
                </CardHeader>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <CardContent>
                  <div className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-3">Browser Controls</h4>
                        <div className="space-y-3">
                          <div className="p-3 border rounded-lg">
                            <h5 className="font-medium text-sm mb-1">Chrome</h5>
                            <p className="text-xs text-gray-600">Settings → Privacy and Security → Cookies and other site data</p>
                          </div>
                          <div className="p-3 border rounded-lg">
                            <h5 className="font-medium text-sm mb-1">Firefox</h5>
                            <p className="text-xs text-gray-600">Settings → Privacy & Security → Cookies and Site Data</p>
                          </div>
                          <div className="p-3 border rounded-lg">
                            <h5 className="font-medium text-sm mb-1">Safari</h5>
                            <p className="text-xs text-gray-600">Preferences → Privacy → Manage Website Data</p>
                          </div>
                          <div className="p-3 border rounded-lg">
                            <h5 className="font-medium text-sm mb-1">Edge</h5>
                            <p className="text-xs text-gray-600">Settings → Site Permissions → Cookies and stored data</p>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-3">Cookie Management Options</h4>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-600 mt-1" />
                            <span>Block all cookies (may break functionality)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-600 mt-1" />
                            <span>Block third-party cookies only</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-600 mt-1" />
                            <span>Delete cookies when browser closes</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-600 mt-1" />
                            <span>Manage cookies site by site</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-600 mt-1" />
                            <span>Use private/incognito browsing</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-red-50 border-l-4 border-red-400 p-4">
                      <div className="flex items-start">
                        <AlertTriangle className="w-5 h-5 text-red-400 mr-2 mt-0.5" />
                        <div>
                          <p className="text-red-800 font-medium">Impact of Blocking Cookies</p>
                          <p className="text-red-700 text-sm mt-1">
                            Blocking essential cookies may prevent our website from functioning properly. You may experience 
                            issues with login, forms, preferences, and personalized content.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3">Do Not Track (DNT)</h4>
                      <p className="text-sm text-gray-600 mb-3">
                        Some browsers offer a "Do Not Track" setting. Currently, there is no universal standard for DNT, 
                        but we respect user privacy preferences where technically feasible.
                      </p>
                      
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h5 className="font-medium mb-2">Global Privacy Control (GPC)</h5>
                        <p className="text-sm text-blue-800">
                          We recognize the Global Privacy Control signal as a valid request to opt out of the sale 
                          of personal information and targeted advertising, where legally required.
                        </p>
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
                <Settings className="w-5 h-5 text-blue-600" />
                Cookie Policy Contact
              </CardTitle>
              <CardDescription>
                Questions about cookies and tracking technologies
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Privacy Team</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <Cookie className="w-4 h-4 text-gray-500" />
                      <span>cookies@aethrix.com</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-gray-500" />
                      <span>Response within 48 hours</span>
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <Button className="w-full" size="sm">
                      Update Cookie Preferences
                      <Settings className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3">Additional Resources</h4>
                  <div className="space-y-2 text-sm">
                    <a href="/privacy" className="flex items-center gap-2 text-blue-600 hover:underline">
                      <ExternalLink className="w-4 h-4" />
                      Privacy Policy
                    </a>
                    <a href="/privacy/data-protection" className="flex items-center gap-2 text-blue-600 hover:underline">
                      <ExternalLink className="w-4 h-4" />
                      Data Protection Rights
                    </a>
                    <a href="/terms" className="flex items-center gap-2 text-blue-600 hover:underline">
                      <ExternalLink className="w-4 h-4" />
                      Terms of Service
                    </a>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <div className="text-center mt-12 text-sm text-gray-500">
          <p>This cookie policy was last updated on {lastUpdated}.</p>
          <p className="mt-2">
            We may update this policy periodically to reflect changes in our practices or applicable laws.
          </p>
        </div>
      </div>
    </div>
  );
}
