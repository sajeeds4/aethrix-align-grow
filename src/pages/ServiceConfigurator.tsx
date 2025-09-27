import { useState, useEffect } from 'react';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { CheckCircle, ArrowRight, ArrowLeft, Calculator, Users, Building, Zap } from 'lucide-react';

interface ServiceConfig {
  industry: string;
  companySize: string;
  services: string[];
  timeline: string;
  budget: string;
  integrations: string[];
}

interface SolutionEstimate {
  timeline: string;
  complexity: string;
  recommendedServices: string[];
  teamSize: string;
  deliverables: string[];
}

export default function ServiceConfigurator() {
  const [currentStep, setCurrentStep] = useState(1);
  const [config, setConfig] = useState<ServiceConfig>({
    industry: '',
    companySize: '',
    services: [],
    timeline: '',
    budget: '',
    integrations: []
  });
  const [estimate, setEstimate] = useState<SolutionEstimate | null>(null);

  const totalSteps = 6;
  const progress = (currentStep / totalSteps) * 100;

  const industries = [
    { id: 'manufacturing', name: 'Manufacturing', icon: '🏭', multiplier: 1.2 },
    { id: 'healthcare', name: 'Healthcare', icon: '🏥', multiplier: 1.4 },
    { id: 'financial', name: 'Financial Services', icon: '🏦', multiplier: 1.3 },
    { id: 'retail', name: 'Retail & E-Commerce', icon: '🛒', multiplier: 1.1 },
    { id: 'logistics', name: 'Logistics & Transportation', icon: '🚛', multiplier: 1.15 },
    { id: 'professional', name: 'Professional Services', icon: '👔', multiplier: 1.0 }
  ];

  const companySizes = [
    { id: 'startup', name: 'Startup (1-10 employees)', multiplier: 0.7 },
    { id: 'small', name: 'Small Business (11-50 employees)', multiplier: 0.8 },
    { id: 'medium', name: 'Medium Business (51-200 employees)', multiplier: 1.0 },
    { id: 'large', name: 'Large Enterprise (201-1000 employees)', multiplier: 1.3 },
    { id: 'enterprise', name: 'Enterprise (1000+ employees)', multiplier: 1.6 }
  ];

  const services = [
    { id: 'erp', name: 'ERP Implementation', complexity: 'High', icon: '⚙️' },
    { id: 'development', name: 'Custom Development', complexity: 'Medium', icon: '💻' },
    { id: 'cloud', name: 'Cloud Migration', complexity: 'Medium', icon: '☁️' },
    { id: 'ai', name: 'AI & Automation', complexity: 'High', icon: '🤖' },
    { id: 'security', name: 'Cybersecurity', complexity: 'Medium', icon: '🔒' },
    { id: 'consulting', name: 'Strategic Consulting', complexity: 'Low', icon: '💡' }
  ];

  const integrations = [
    { id: 'crm', name: 'CRM Systems (Salesforce, HubSpot)', complexity: 0.2 },
    { id: 'accounting', name: 'Accounting Software (QuickBooks, SAP)', complexity: 0.3 },
    { id: 'ecommerce', name: 'E-commerce Platforms (Shopify, Magento)', complexity: 0.25 },
    { id: 'hr', name: 'HR Systems (Workday, BambooHR)', complexity: 0.2 },
    { id: 'inventory', name: 'Inventory Management', complexity: 0.35 },
    { id: 'legacy', name: 'Legacy Systems Integration', complexity: 0.5 }
  ];

  const calculateEstimate = () => {
    if (!config.industry || !config.companySize || config.services.length === 0) return;

    const industry = industries.find(i => i.id === config.industry);
    const companySize = companySizes.find(c => c.id === config.companySize);
    const selectedServices = services.filter(s => config.services.includes(s.id));
    const selectedIntegrations = integrations.filter(i => config.integrations.includes(i.id));

    const integrationComplexity = selectedIntegrations.reduce((sum, integration) => sum + integration.complexity, 0);
    
    const timelineMap: { [key: string]: string } = {
      'urgent': '4-8 weeks',
      'normal': '8-16 weeks',
      'flexible': '16-24 weeks'
    };

    const complexity = selectedServices.length > 2 || integrationComplexity > 0.5 ? 'High' : 
                     selectedServices.length > 1 || integrationComplexity > 0.2 ? 'Medium' : 'Low';

    const teamSizeMap = {
      'startup': '2-3 specialists',
      'small': '3-4 specialists', 
      'medium': '4-6 specialists',
      'large': '6-8 specialists',
      'enterprise': '8-12 specialists'
    };

    const deliverables = [
      'Technical Requirements Document',
      'Solution Architecture Design',
      'Implementation Plan & Timeline',
      'Testing & Quality Assurance Reports',
      'User Training & Documentation',
      'Go-Live Support & Maintenance Plan'
    ];

    setEstimate({
      timeline: timelineMap[config.timeline] || '8-16 weeks',
      complexity,
      recommendedServices: selectedServices.map(s => s.name),
      teamSize: teamSizeMap[config.companySize as keyof typeof teamSizeMap] || '4-6 specialists',
      deliverables
    });
  };

  useEffect(() => {
    calculateEstimate();
  }, [config]);

  const nextStep = () => setCurrentStep(Math.min(currentStep + 1, totalSteps));
  const prevStep = () => setCurrentStep(Math.max(currentStep - 1, 1));

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building className="w-6 h-6 text-blue-600" />
                Select Your Industry
              </CardTitle>
              <CardDescription>
                Help us understand your specific industry requirements and compliance needs.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {industries.map((industry) => (
                  <div
                    key={industry.id}
                    className={`p-4 border rounded-lg cursor-pointer transition-all ${
                      config.industry === industry.id
                        ? 'border-blue-500 bg-blue-50 shadow-md'
                        : 'border-gray-200 hover:border-gray-300 hover:shadow-sm'
                    }`}
                    onClick={() => setConfig({ ...config, industry: industry.id })}
                  >
                    <div className="text-center">
                      <div className="text-3xl mb-2">{industry.icon}</div>
                      <div className="font-medium">{industry.name}</div>
                      <div className="text-sm text-gray-500 mt-1">
                        Complexity: {industry.multiplier > 1.2 ? 'High' : industry.multiplier > 1.1 ? 'Medium' : 'Standard'}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        );

      case 2:
        return (
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="w-6 h-6 text-green-600" />
                Company Size
              </CardTitle>
              <CardDescription>
                Your company size helps us recommend the right solution scale and complexity.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {companySizes.map((size) => (
                  <div
                    key={size.id}
                    className={`p-4 border rounded-lg cursor-pointer transition-all ${
                      config.companySize === size.id
                        ? 'border-green-500 bg-green-50 shadow-md'
                        : 'border-gray-200 hover:border-gray-300 hover:shadow-sm'
                    }`}
                    onClick={() => setConfig({ ...config, companySize: size.id })}
                  >
                    <div className="flex items-center justify-between">
                      <div className="font-medium">{size.name}</div>
                      <div className="text-sm text-gray-500">
                        Pricing Factor: {size.multiplier}x
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        );

      case 3:
        return (
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="w-6 h-6 text-purple-600" />
                Select Services
              </CardTitle>
              <CardDescription>
                Choose the services you need. You can select multiple services for a comprehensive solution.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {services.map((service) => (
                  <div
                    key={service.id}
                    className={`p-4 border rounded-lg cursor-pointer transition-all ${
                      config.services.includes(service.id)
                        ? 'border-purple-500 bg-purple-50 shadow-md'
                        : 'border-gray-200 hover:border-gray-300 hover:shadow-sm'
                    }`}
                    onClick={() => {
                      const updatedServices = config.services.includes(service.id)
                        ? config.services.filter(s => s !== service.id)
                        : [...config.services, service.id];
                      setConfig({ ...config, services: updatedServices });
                    }}
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-xl">{service.icon}</span>
                          <div className="font-medium">{service.name}</div>
                        </div>
                                                <div className="font-medium">{service.name}</div>
                        <Badge variant={service.complexity === 'High' ? 'destructive' : service.complexity === 'Medium' ? 'default' : 'secondary'}>
                          {service.complexity} Complexity
                        </Badge>
                      </div>
                      {config.services.includes(service.id) && (
                        <CheckCircle className="w-5 h-5 text-purple-600" />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        );

      case 4:
        return (
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle>Integration Requirements</CardTitle>
              <CardDescription>
                Select existing systems that need to be integrated with your new solution.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {integrations.map((integration) => (
                  <div
                    key={integration.id}
                    className={`p-4 border rounded-lg cursor-pointer transition-all ${
                      config.integrations.includes(integration.id)
                        ? 'border-orange-500 bg-orange-50 shadow-md'
                        : 'border-gray-200 hover:border-gray-300 hover:shadow-sm'
                    }`}
                    onClick={() => {
                      const updatedIntegrations = config.integrations.includes(integration.id)
                        ? config.integrations.filter(i => i !== integration.id)
                        : [...config.integrations, integration.id];
                      setConfig({ ...config, integrations: updatedIntegrations });
                    }}
                  >
                    <div className="flex items-center justify-between">
                      <div className="font-medium">{integration.name}</div>
                      <div className="text-sm text-gray-500">
                        +{Math.round(integration.complexity * 100)}% complexity
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        );

      case 5:
        return (
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle>Timeline & Project Preferences</CardTitle>
              <CardDescription>
                Help us understand your timeline requirements and project approach preferences.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-medium mb-3">Preferred Timeline</h4>
                <div className="space-y-3">
                  {[
                    { id: 'urgent', name: 'Urgent (4-8 weeks)', description: 'Need to launch quickly' },
                    { id: 'normal', name: 'Standard (8-16 weeks)', description: 'Balanced approach' },
                    { id: 'flexible', name: 'Flexible (16-24 weeks)', description: 'Quality over speed' }
                  ].map((timeline) => (
                    <div
                      key={timeline.id}
                      className={`p-3 border rounded-lg cursor-pointer transition-all ${
                        config.timeline === timeline.id
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      onClick={() => setConfig({ ...config, timeline: timeline.id })}
                    >
                      <div className="font-medium">{timeline.name}</div>
                      <div className="text-sm text-gray-600">{timeline.description}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-3">Project Scope Preference</h4>
                <div className="space-y-3">
                  {[
                    { id: 'comprehensive', name: 'Comprehensive Solution', description: 'Full-scale transformation with all features' },
                    { id: 'phased', name: 'Phased Implementation', description: 'Gradual rollout in manageable phases' },
                    { id: 'mvp', name: 'MVP Approach', description: 'Start with core features, expand iteratively' }
                  ].map((scope) => (
                    <div
                      key={scope.id}
                      className={`p-3 border rounded-lg cursor-pointer transition-all ${
                        config.budget === scope.id
                          ? 'border-green-500 bg-green-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      onClick={() => setConfig({ ...config, budget: scope.id })}
                    >
                      <div className="font-medium">{scope.name}</div>
                      <div className="text-sm text-gray-600">{scope.description}</div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        );

      case 6:
        return (
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calculator className="w-6 h-6 text-blue-600" />
                Your Custom Solution Estimate
              </CardTitle>
              <CardDescription>
                Based on your requirements, here's your personalized solution overview.
              </CardDescription>
            </CardHeader>
            <CardContent>
              {estimate && (
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-blue-50 p-6 rounded-lg">
                      <h4 className="font-semibold text-blue-800 mb-3">Estimated Timeline</h4>
                      <div className="text-3xl font-bold text-blue-600 mb-2">
                        {estimate.timeline}
                      </div>
                      <div className="text-sm text-blue-700">
                        Team Size: {estimate.teamSize}
                      </div>
                    </div>
                    
                    <div className="bg-green-50 p-6 rounded-lg">
                      <h4 className="font-semibold text-green-800 mb-3">Project Complexity</h4>
                      <div className="text-2xl font-bold text-green-600 mb-2">
                        {estimate.complexity}
                      </div>
                      <div className="text-sm text-green-700">
                        Based on selected services
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="font-semibold mb-3">Selected Services</h4>
                    <div className="flex flex-wrap gap-2">
                      {estimate.recommendedServices.map((service, index) => (
                        <Badge key={index} variant="outline">
                          {service}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="bg-purple-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-purple-800 mb-3">Key Deliverables</h4>
                    <ul className="space-y-2 text-purple-700">
                      {estimate.deliverables.map((deliverable, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                          {deliverable}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-yellow-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-yellow-800 mb-3">Next Steps</h4>
                    <ul className="space-y-2 text-yellow-700">
                      <li>• Schedule a free consultation to discuss your requirements</li>
                      <li>• Receive a detailed project proposal and timeline</li>
                      <li>• Meet your dedicated project team</li>
                      <li>• Begin with a comprehensive discovery phase</li>
                    </ul>
                  </div>

                  <div className="flex gap-4">
                    <Button size="lg" className="flex-1" asChild>
                      <a href="/consultation">Schedule Free Consultation</a>
                    </Button>
                    <Button variant="outline" size="lg" className="flex-1">
                      Download Project Proposal
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Service Configurator</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Hero Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Interactive Service Configurator
            </h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Get a personalized solution roadmap in just a few minutes. Our interactive configurator 
              helps you explore services, understand project scope, and plan your technology transformation journey.
            </p>
            
            <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-medium">Configuration Progress</span>
                <span className="text-sm text-gray-600">Step {currentStep} of {totalSteps}</span>
              </div>
              <Progress value={progress} className="w-full" />
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            {renderStep()}

            <div className="flex justify-between mt-8">
              <Button
                variant="outline"
                onClick={prevStep}
                disabled={currentStep === 1}
                className="flex items-center gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                Previous
              </Button>
              
              {currentStep < totalSteps ? (
                <Button
                  onClick={nextStep}
                  disabled={
                    (currentStep === 1 && !config.industry) ||
                    (currentStep === 2 && !config.companySize) ||
                    (currentStep === 3 && config.services.length === 0) ||
                    (currentStep === 5 && (!config.timeline || !config.budget))
                  }
                  className="flex items-center gap-2"
                >
                  Next
                  <ArrowRight className="w-4 h-4" />
                </Button>
              ) : (
                <Button
                  onClick={() => window.location.href = '/consultation'}
                  className="flex items-center gap-2"
                >
                  Schedule Consultation
                  <ArrowRight className="w-4 h-4" />
                </Button>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
