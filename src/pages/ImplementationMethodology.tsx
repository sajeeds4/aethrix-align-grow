import { useState } from 'react';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { 
  CheckCircle, 
  Clock, 
  Users, 
  Target, 
  Shield, 
  TrendingUp, 
  AlertTriangle,
  BarChart3,
  Settings,
  Lightbulb,
  FileText,
  Zap
} from 'lucide-react';

export default function ImplementationMethodology() {
  const [selectedPhase, setSelectedPhase] = useState('discovery');

  const phases = [
    {
      id: 'discovery',
      name: 'Discovery & Planning',
      duration: '2-4 weeks',
      icon: <Lightbulb className="w-6 h-6" />,
      color: 'blue',
      description: 'Comprehensive analysis of current state and requirements definition',
      activities: [
        'Business Process Analysis',
        'Technical Architecture Review',
        'Stakeholder Interviews',
        'Requirements Gathering',
        'Risk Assessment',
        'Project Charter Creation'
      ],
      deliverables: [
        'Current State Assessment Report',
        'Technical Requirements Document',
        'Project Implementation Plan',
        'Risk Mitigation Strategy',
        'Resource Allocation Plan'
      ],
      kpis: [
        'Requirements Coverage: 100%',
        'Stakeholder Alignment: 95%+',
        'Risk Identification: Complete',
        'Timeline Accuracy: ±5%'
      ]
    },
    {
      id: 'design',
      name: 'Solution Design',
      duration: '3-6 weeks',
      icon: <Settings className="w-6 h-6" />,
      color: 'purple',
      description: 'Detailed solution architecture and implementation blueprint',
      activities: [
        'Solution Architecture Design',
        'Data Migration Planning',
        'Integration Mapping',
        'Security Framework Design',
        'User Experience Design',
        'Testing Strategy Development'
      ],
      deliverables: [
        'Solution Architecture Document',
        'Technical Specifications',
        'Data Migration Plan',
        'Integration Blueprints',
        'Security Implementation Plan'
      ],
      kpis: [
        'Architecture Approval: 100%',
        'Design Review Score: 90%+',
        'Security Compliance: 100%',
        'Performance Benchmarks: Met'
      ]
    },
    {
      id: 'development',
      name: 'Development & Build',
      duration: '6-16 weeks',
      icon: <Zap className="w-6 h-6" />,
      color: 'orange',
      description: 'Solution development, configuration, and testing',
      activities: [
        'Core System Configuration',
        'Custom Development',
        'Data Migration Execution',
        'Integration Development',
        'Quality Assurance Testing',
        'Performance Optimization'
      ],
      deliverables: [
        'Configured Solution Environment',
        'Custom Components & Integrations',
        'Migrated Data Sets',
        'Test Reports & Documentation',
        'Performance Optimization Report'
      ],
      kpis: [
        'Code Quality Score: 95%+',
        'Test Coverage: 90%+',
        'Performance Targets: Met',
        'Defect Density: &lt;1 per KLOC'
      ]
    },
    {
      id: 'deployment',
      name: 'Deployment & Go-Live',
      duration: '2-4 weeks',
      icon: <Target className="w-6 h-6" />,
      color: 'green',
      description: 'Production deployment, user training, and go-live support',
      activities: [
        'Production Environment Setup',
        'Final Data Migration',
        'User Training Programs',
        'Go-Live Execution',
        'Hypercare Support',
        'Issue Resolution'
      ],
      deliverables: [
        'Production System',
        'Trained User Community',
        'Go-Live Report',
        'Support Documentation',
        'Performance Metrics'
      ],
      kpis: [
        'System Uptime: 99.9%+',
        'User Adoption: 90%+',
        'Critical Issues: 0',
        'Training Completion: 95%+'
      ]
    },
    {
      id: 'optimization',
      name: 'Optimization & Support',
      duration: 'Ongoing',
      icon: <TrendingUp className="w-6 h-6" />,
      color: 'emerald',
      description: 'Continuous improvement and long-term support',
      activities: [
        'Performance Monitoring',
        'User Feedback Analysis',
        'Process Optimization',
        'Feature Enhancements',
        'Preventive Maintenance',
        'Strategic Planning'
      ],
      deliverables: [
        'Performance Reports',
        'Optimization Recommendations',
        'Enhanced Features',
        'Maintenance Schedule',
        'Future Roadmap'
      ],
      kpis: [
        'Performance Improvement: 25%+',
        'User Satisfaction: 95%+',
        'System Availability: 99.9%+',
        'ROI Achievement: Target Met'
      ]
    }
  ];

  const riskMitigation = [
    {
      category: 'Technical Risks',
      icon: <Settings className="w-5 h-5" />,
      risks: [
        {
          risk: 'System Integration Failures',
          probability: 'Medium',
          impact: 'High',
          mitigation: 'Comprehensive integration testing, API validation, fallback procedures'
        },
        {
          risk: 'Data Migration Issues',
          probability: 'Medium',
          impact: 'High',
          mitigation: 'Data validation scripts, incremental migration, rollback procedures'
        },
        {
          risk: 'Performance Bottlenecks',
          probability: 'Low',
          impact: 'Medium',
          mitigation: 'Load testing, performance monitoring, optimization strategies'
        }
      ]
    },
    {
      category: 'Business Risks',
      icon: <Users className="w-5 h-5" />,
      risks: [
        {
          risk: 'User Resistance to Change',
          probability: 'High',
          impact: 'Medium',
          mitigation: 'Change management program, extensive training, phased rollout'
        },
        {
          risk: 'Budget Overruns',
          probability: 'Medium',
          impact: 'High',
          mitigation: 'Fixed-price contracts, regular budget reviews, scope management'
        },
        {
          risk: 'Timeline Delays',
          probability: 'Medium',
          impact: 'Medium',
          mitigation: 'Agile methodology, regular checkpoints, resource flexibility'
        }
      ]
    },
    {
      category: 'Security Risks',
      icon: <Shield className="w-5 h-5" />,
      risks: [
        {
          risk: 'Data Security Breaches',
          probability: 'Low',
          impact: 'High',
          mitigation: 'Security audits, encryption, access controls, compliance monitoring'
        },
        {
          risk: 'Compliance Violations',
          probability: 'Low',
          impact: 'High',
          mitigation: 'Regulatory review, compliance testing, audit trails'
        }
      ]
    }
  ];

  const changeManagement = {
    framework: 'ADKAR Model',
    phases: [
      {
        stage: 'Awareness',
        description: 'Creating awareness of the need for change',
        activities: [
          'Executive communication campaigns',
          'Town hall meetings',
          'Change impact assessments',
          'Stakeholder mapping'
        ]
      },
      {
        stage: 'Desire',
        description: 'Building desire to participate and support change',
        activities: [
          'Benefits communication',
          'Success story sharing',
          'Resistance management',
          'Leadership engagement'
        ]
      },
      {
        stage: 'Knowledge',
        description: 'Providing knowledge on how to change',
        activities: [
          'Skills assessment',
          'Training program development',
          'Job aids and resources',
          'Competency mapping'
        ]
      },
      {
        stage: 'Ability',
        description: 'Developing ability to implement change',
        activities: [
          'Hands-on training',
          'Coaching and mentoring',
          'Performance support',
          'Process optimization'
        ]
      },
      {
        stage: 'Reinforcement',
        description: 'Reinforcing change to sustain results',
        activities: [
          'Performance measurement',
          'Recognition programs',
          'Continuous improvement',
          'Culture transformation'
        ]
      }
    ]
  };

  const successMetrics = [
    {
      category: 'Technical KPIs',
      metrics: [
        { name: 'System Uptime', target: '99.9%', description: 'System availability and reliability' },
        { name: 'Response Time', target: '&lt;2 seconds', description: 'Application performance' },
        { name: 'Data Accuracy', target: '99.95%', description: 'Data quality and integrity' },
        { name: 'Integration Success', target: '100%', description: 'Successful system integrations' }
      ]
    },
    {
      category: 'Business KPIs',
      metrics: [
        { name: 'User Adoption', target: '95%+', description: 'Active system usage' },
        { name: 'Process Efficiency', target: '30% improvement', description: 'Workflow optimization' },
        { name: 'Cost Reduction', target: '25%', description: 'Operational cost savings' },
        { name: 'ROI Achievement', target: '150%', description: 'Return on investment' }
      ]
    },
    {
      category: 'User KPIs',
      metrics: [
        { name: 'User Satisfaction', target: '90%+', description: 'User experience rating' },
        { name: 'Training Completion', target: '98%', description: 'Training program success' },
        { name: 'Support Tickets', target: '50% reduction', description: 'Support efficiency' },
        { name: 'Feature Utilization', target: '80%+', description: 'Feature adoption rate' }
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap: { [key: string]: string } = {
      blue: 'border-blue-500 bg-blue-50 text-blue-700',
      purple: 'border-purple-500 bg-purple-50 text-purple-700',
      orange: 'border-orange-500 bg-orange-50 text-orange-700',
      green: 'border-green-500 bg-green-50 text-green-700',
      emerald: 'border-emerald-500 bg-emerald-50 text-emerald-700'
    };
    return colorMap[color] || 'border-gray-500 bg-gray-50 text-gray-700';
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
              <BreadcrumbPage>Implementation Methodology</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Hero Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Implementation Methodology
            </h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Our proven 5-phase implementation methodology ensures successful project delivery 
              with minimal risk and maximum ROI. Built on industry best practices and refined 
              through 500+ successful implementations.
            </p>
          </div>

          {/* Phase Overview */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Implementation Phases</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Our structured approach breaks complex implementations into manageable phases, 
                each with clear objectives, deliverables, and success criteria.
              </p>
            </div>

            <div className="grid lg:grid-cols-5 gap-6 mb-8">
              {phases.map((phase, index) => (
                <div
                  key={phase.id}
                  className={`p-6 rounded-lg border-2 cursor-pointer transition-all ${
                    selectedPhase === phase.id
                      ? getColorClasses(phase.color)
                      : 'border-gray-200 bg-white hover:border-gray-300'
                  }`}
                  onClick={() => setSelectedPhase(phase.id)}
                >
                  <div className="text-center">
                    <div className="mb-4 flex justify-center">{phase.icon}</div>
                    <h3 className="font-bold mb-2">{phase.name}</h3>
                    <div className="text-sm opacity-75">{phase.duration}</div>
                  </div>
                  {index < phases.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                      <div className="w-6 h-0.5 bg-gray-300"></div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Phase Details */}
            <Card className="shadow-lg">
              <CardHeader>
                <div className="flex items-center gap-4">
                  {phases.find(p => p.id === selectedPhase)?.icon}
                  <div>
                    <CardTitle>{phases.find(p => p.id === selectedPhase)?.name}</CardTitle>
                    <CardDescription>
                      {phases.find(p => p.id === selectedPhase)?.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                {phases
                  .filter(p => p.id === selectedPhase)
                  .map(phase => (
                    <div key={phase.id} className="grid md:grid-cols-3 gap-6">
                      <div>
                        <h4 className="font-semibold mb-3 flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          Key Activities
                        </h4>
                        <ul className="space-y-2">
                          {phase.activities.map((activity, index) => (
                            <li key={index} className="flex items-start gap-2 text-sm">
                              <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                              {activity}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3 flex items-center gap-2">
                          <FileText className="w-4 h-4" />
                          Deliverables
                        </h4>
                        <ul className="space-y-2">
                          {phase.deliverables.map((deliverable, index) => (
                            <li key={index} className="flex items-start gap-2 text-sm">
                              <Badge variant="outline" className="text-xs">
                                DOC
                              </Badge>
                              {deliverable}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3 flex items-center gap-2">
                          <BarChart3 className="w-4 h-4" />
                          Success KPIs
                        </h4>
                        <ul className="space-y-2">
                          {phase.kpis.map((kpi, index) => (
                            <li key={index} className="flex items-start gap-2 text-sm">
                              <Target className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                              <span dangerouslySetInnerHTML={{ __html: kpi }} />
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
              </CardContent>
            </Card>
          </section>

          {/* Detailed Sections */}
          <Tabs defaultValue="risks" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="risks">Risk Mitigation</TabsTrigger>
              <TabsTrigger value="change">Change Management</TabsTrigger>
              <TabsTrigger value="metrics">Success Metrics</TabsTrigger>
            </TabsList>

            <TabsContent value="risks" className="mt-8">
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-4">Risk Mitigation Strategies</h3>
                  <p className="text-gray-600 max-w-3xl mx-auto">
                    Proactive risk identification and mitigation ensures project success. 
                    Our comprehensive risk management approach addresses technical, business, and security risks.
                  </p>
                </div>

                {riskMitigation.map((category, categoryIndex) => (
                  <Card key={categoryIndex} className="shadow-lg">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        {category.icon}
                        {category.category}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {category.risks.map((riskItem, riskIndex) => (
                          <div key={riskIndex} className="border rounded-lg p-4">
                            <div className="flex items-start justify-between mb-3">
                              <h4 className="font-medium">{riskItem.risk}</h4>
                              <div className="flex gap-2">
                                <Badge variant={riskItem.probability === 'High' ? 'destructive' : riskItem.probability === 'Medium' ? 'default' : 'secondary'}>
                                  {riskItem.probability} Probability
                                </Badge>
                                <Badge variant={riskItem.impact === 'High' ? 'destructive' : 'default'}>
                                  {riskItem.impact} Impact
                                </Badge>
                              </div>
                            </div>
                            <p className="text-sm text-gray-600">{riskItem.mitigation}</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="change" className="mt-8">
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-4">Change Management Approach</h3>
                  <p className="text-gray-600 max-w-3xl mx-auto">
                    Using the proven ADKAR methodology to ensure successful user adoption 
                    and organizational change. Our structured approach addresses both technical 
                    and human aspects of transformation.
                  </p>
                </div>

                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle>ADKAR Change Management Framework</CardTitle>
                    <CardDescription>
                      A goal-oriented change management model that guides individual and organizational change
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {changeManagement.phases.map((phase, index) => (
                        <div key={index} className="border rounded-lg p-6">
                          <div className="flex items-center gap-4 mb-4">
                            <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold text-sm">
                              {index + 1}
                            </div>
                            <div>
                              <h4 className="font-bold text-lg">{phase.stage}</h4>
                              <p className="text-gray-600">{phase.description}</p>
                            </div>
                          </div>
                          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                            {phase.activities.map((activity, activityIndex) => (
                              <div key={activityIndex} className="flex items-start gap-2">
                                <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                <span className="text-sm">{activity}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="metrics" className="mt-8">
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-4">Success Metrics & KPI Tracking</h3>
                  <p className="text-gray-600 max-w-3xl mx-auto">
                    Comprehensive measurement framework to track project success across 
                    technical, business, and user dimensions. Real-time dashboards provide 
                    visibility into all key performance indicators.
                  </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-6">
                  {successMetrics.map((category, categoryIndex) => (
                    <Card key={categoryIndex} className="shadow-lg">
                      <CardHeader>
                        <CardTitle>{category.category}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          {category.metrics.map((metric, metricIndex) => (
                            <div key={metricIndex} className="border rounded-lg p-4">
                              <div className="flex items-center justify-between mb-2">
                                <h4 className="font-medium">{metric.name}</h4>
                                <Badge variant="outline" dangerouslySetInnerHTML={{ __html: metric.target }} />
                              </div>
                              <p className="text-sm text-gray-600">{metric.description}</p>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <Alert>
                  <BarChart3 className="h-4 w-4" />
                  <AlertDescription>
                    All KPIs are tracked in real-time through our project dashboard, with automated 
                    alerts for any metrics that fall below target thresholds. Monthly reports 
                    provide detailed analysis and recommendations for continuous improvement.
                  </AlertDescription>
                </Alert>
              </div>
            </TabsContent>
          </Tabs>

          {/* CTA Section */}
          <section className="mt-16 text-center">
            <Card className="shadow-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white">
              <CardContent className="py-12">
                <h2 className="text-3xl font-bold mb-4">
                  Ready to Start Your Implementation?
                </h2>
                <p className="text-xl mb-8 opacity-90">
                  Schedule a free consultation to discuss how our proven methodology 
                  can ensure the success of your technology transformation.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" variant="secondary" asChild>
                    <a href="/consultation">Schedule Free Consultation</a>
                  </Button>
                  <Button size="lg" variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                    Download Methodology Guide
                  </Button>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </section>
    </div>
  );
}
