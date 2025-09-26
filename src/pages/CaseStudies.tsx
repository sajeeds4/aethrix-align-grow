import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { ArrowRight, CheckCircle, TrendingUp, Clock, DollarSign, Users } from 'lucide-react';

export default function CaseStudies() {
  const caseStudies = [
    {
      title: "Global Manufacturing ERP Transformation",
      company: "Leading Automotive Parts Manufacturer",
      industry: "Manufacturing",
      size: "500+ employees, $50M+ revenue",
      challenge: "Complex multi-location manufacturing operations were hampered by disconnected legacy systems, leading to production delays, inventory inaccuracies, and compliance reporting challenges across three facilities.",
      solution: "Comprehensive Odoo ERP implementation with custom manufacturing modules, real-time inventory tracking, quality management system, and integrated financial reporting across all locations.",
      technologies: ["Odoo ERP", "PostgreSQL", "Python", "IoT Integration", "Business Intelligence"],
      timeline: "12 months",
      results: [
        "45% reduction in production cycle time",
        "60% improvement in inventory accuracy",
        "30% decrease in operational costs",
        "99.9% system uptime achieved",
        "100% regulatory compliance maintained"
      ],
      metrics: {
        roi: "340%",
        payback: "14 months",
        efficiency: "45%",
        cost_savings: "$2.1M annually"
      },
      testimonial: "Aethrix Systems transformed our operations completely. The integrated ERP solution eliminated our data silos and provided real-time visibility across all our manufacturing processes."
    },
    {
      title: "Digital Banking Platform Modernization",
      company: "Regional Credit Union",
      industry: "Financial Services",
      size: "50+ employees, $200M+ assets",
      challenge: "Legacy core banking system was limiting growth potential with slow transaction processing, limited mobile capabilities, and compliance reporting inefficiencies, leading to customer attrition.",
      solution: "Modern cloud-native banking platform with mobile-first design, automated compliance reporting, real-time fraud detection, and seamless third-party integrations.",
      technologies: ["React", "Node.js", "AWS", "PostgreSQL", "AI/ML", "Blockchain"],
      timeline: "18 months",
      results: [
        "75% faster transaction processing",
        "90% increase in mobile banking adoption",
        "50% reduction in compliance reporting time",
        "Zero fraud incidents post-implementation",
        "35% growth in new customer acquisitions"
      ],
      metrics: {
        roi: "280%",
        payback: "18 months",
        efficiency: "60%",
        cost_savings: "$850K annually"
      },
      testimonial: "The new platform has revolutionized our member experience. We've seen unprecedented growth in digital adoption and member satisfaction scores have reached all-time highs."
    },
    {
      title: "Healthcare Network Integration",
      company: "Multi-Specialty Medical Group",
      industry: "Healthcare",
      size: "200+ providers, 15 locations",
      challenge: "Fragmented patient data across multiple EHR systems, inefficient appointment scheduling, and manual insurance verification were impacting patient care quality and operational efficiency.",
      solution: "Integrated healthcare management platform with unified patient records, intelligent scheduling system, automated insurance verification, and HIPAA-compliant patient portal.",
      technologies: ["HL7 FHIR", "Cloud Infrastructure", "AI Scheduling", "Secure APIs", "Mobile Apps"],
      timeline: "15 months",
      results: [
        "40% reduction in appointment scheduling time",
        "85% decrease in patient data errors",
        "60% improvement in provider productivity",
        "95% patient portal adoption rate",
        "25% increase in patient satisfaction scores"
      ],
      metrics: {
        roi: "310%",
        payback: "16 months",
        efficiency: "50%",
        cost_savings: "$1.2M annually"
      },
      testimonial: "Patient care has significantly improved since implementation. Our providers now have complete patient histories at their fingertips, and our scheduling efficiency has never been better."
    },
    {
      title: "E-Commerce Platform Optimization",
      company: "Multi-Brand Retail Corporation",
      industry: "Retail & E-Commerce",
      size: "1000+ employees, $100M+ revenue",
      challenge: "Inconsistent customer experience across multiple brands, fragmented inventory management, and poor mobile performance were limiting online growth and increasing operational costs.",
      solution: "Unified headless commerce platform with personalized customer experiences, real-time inventory synchronization, and advanced analytics for all brand portfolios.",
      technologies: ["Headless Commerce", "React", "Microservices", "AI Personalization", "CDN"],
      timeline: "10 months",
      results: [
        "55% increase in online conversion rates",
        "80% improvement in page load speeds",
        "40% reduction in inventory carrying costs",
        "300% increase in mobile sales",
        "25% growth in average order value"
      ],
      metrics: {
        roi: "420%",
        payback: "8 months",
        efficiency: "65%",
        cost_savings: "$3.5M annually"
      },
      testimonial: "The unified platform has transformed our digital presence. We're now able to provide consistent, personalized experiences across all our brands while significantly reducing operational complexity."
    }
  ];

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
              <BreadcrumbPage>Case Studies</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Hero Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Success Stories That Drive Results
            </h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Discover how leading organizations across industries have transformed their operations, 
              improved efficiency, and achieved measurable business outcomes through strategic 
              technology implementations with Aethrix Systems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/consultation" 
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Schedule Your Consultation
              </a>
              <a 
                href="/services" 
                className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors font-medium"
              >
                Explore Our Services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Success Metrics Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-semibold mb-6">Measurable Business Impact</h2>
            <p className="text-lg text-gray-700">
              Our case studies demonstrate consistent, quantifiable results across diverse industries and project types.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-green-600" />
              </div>
              <div className="text-3xl font-bold text-green-600 mb-2">340%</div>
              <div className="text-gray-600">Average ROI</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-blue-600 mb-2">13</div>
              <div className="text-gray-600">Months Avg Payback</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-8 h-8 text-purple-600" />
              </div>
              <div className="text-3xl font-bold text-purple-600 mb-2">$7.6M</div>
              <div className="text-gray-600">Total Savings Generated</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-orange-600" />
              </div>
              <div className="text-3xl font-bold text-orange-600 mb-2">100%</div>
              <div className="text-gray-600">Client Satisfaction Rate</div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <Table>
              <TableCaption>Summary of key performance indicators across our most impactful client engagements.</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-1/5">Project</TableHead>
                  <TableHead className="w-1/5">Industry</TableHead>
                  <TableHead className="w-1/5">Timeline</TableHead>
                  <TableHead className="w-1/5">ROI Achieved</TableHead>
                  <TableHead className="w-1/5">Annual Savings</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">ERP Transformation</TableCell>
                  <TableCell>Manufacturing</TableCell>
                  <TableCell>12 months</TableCell>
                  <TableCell className="text-green-600 font-semibold">340%</TableCell>
                  <TableCell className="font-semibold">$2.1M</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Banking Modernization</TableCell>
                  <TableCell>Financial Services</TableCell>
                  <TableCell>18 months</TableCell>
                  <TableCell className="text-green-600 font-semibold">280%</TableCell>
                  <TableCell className="font-semibold">$850K</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Healthcare Integration</TableCell>
                  <TableCell>Healthcare</TableCell>
                  <TableCell>15 months</TableCell>
                  <TableCell className="text-green-600 font-semibold">310%</TableCell>
                  <TableCell className="font-semibold">$1.2M</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">E-Commerce Optimization</TableCell>
                  <TableCell>Retail</TableCell>
                  <TableCell>10 months</TableCell>
                  <TableCell className="text-green-600 font-semibold">420%</TableCell>
                  <TableCell className="font-semibold">$3.5M</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </section>

      {/* Detailed Case Studies */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-semibold mb-12 text-center">Detailed Success Stories</h2>
            <div className="space-y-12">
              {caseStudies.map((study, index) => (
                <Card key={study.title} className="shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader className="bg-gradient-to-r from-blue-50 to-purple-50">
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-2xl mb-2">{study.title}</CardTitle>
                        <CardDescription className="text-lg">
                          {study.company} | {study.industry} | {study.size}
                        </CardDescription>
                      </div>
                      <Badge variant="outline" className="bg-white">
                        {study.timeline}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="p-8">
                    <div className="grid lg:grid-cols-2 gap-8">
                      <div className="space-y-6">
                        <div>
                          <h4 className="font-semibold mb-3 text-red-600 flex items-center gap-2">
                            🎯 Challenge
                          </h4>
                          <p className="text-gray-700 leading-relaxed">{study.challenge}</p>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold mb-3 text-blue-600 flex items-center gap-2">
                            ⚡ Solution
                          </h4>
                          <p className="text-gray-700 leading-relaxed">{study.solution}</p>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold mb-3">Technologies Used</h4>
                          <div className="flex flex-wrap gap-2">
                            {study.technologies.map((tech) => (
                              <Badge key={tech} variant="secondary" className="text-xs">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-6">
                        <div>
                          <h4 className="font-semibold mb-3 text-green-600 flex items-center gap-2">
                            🚀 Results Achieved
                          </h4>
                          <ul className="space-y-2">
                            {study.results.map((result, i) => (
                              <li key={i} className="flex items-start gap-2 text-gray-700">
                                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                <span className="text-sm">{result}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4">
                          <div className="bg-green-50 p-4 rounded-lg text-center">
                            <div className="text-2xl font-bold text-green-600">{study.metrics.roi}</div>
                            <div className="text-sm text-green-700">ROI Achieved</div>
                          </div>
                          <div className="bg-blue-50 p-4 rounded-lg text-center">
                            <div className="text-2xl font-bold text-blue-600">{study.metrics.payback}</div>
                            <div className="text-sm text-blue-700">Payback Period</div>
                          </div>
                          <div className="bg-purple-50 p-4 rounded-lg text-center">
                            <div className="text-2xl font-bold text-purple-600">{study.metrics.efficiency}</div>
                            <div className="text-sm text-purple-700">Efficiency Gain</div>
                          </div>
                          <div className="bg-orange-50 p-4 rounded-lg text-center">
                            <div className="text-2xl font-bold text-orange-600">{study.metrics.cost_savings}</div>
                            <div className="text-sm text-orange-700">Annual Savings</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-8 p-6 bg-gray-50 rounded-lg border-l-4 border-blue-500">
                      <h4 className="font-semibold mb-2 text-gray-800">Client Testimonial</h4>
                      <p className="text-gray-700 italic leading-relaxed">"{study.testimonial}"</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Methodology */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-semibold mb-8 text-center">Our Proven Implementation Methodology</h2>
            <div className="overflow-x-auto">
              <Table>
                <TableCaption>Structured approach ensuring consistent project success and measurable outcomes.</TableCaption>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-1/6">Phase</TableHead>
                    <TableHead className="w-1/6">Duration</TableHead>
                    <TableHead className="w-1/3">Key Activities</TableHead>
                    <TableHead className="w-1/3">Deliverables</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Discovery</TableCell>
                    <TableCell>2-4 weeks</TableCell>
                    <TableCell>Stakeholder interviews, process mapping, technical assessment, requirements gathering</TableCell>
                    <TableCell>Business requirements document, technical architecture, project roadmap</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Design</TableCell>
                    <TableCell>3-6 weeks</TableCell>
                    <TableCell>Solution architecture, UI/UX design, integration planning, security design</TableCell>
                    <TableCell>System architecture, design mockups, integration specifications, security framework</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Development</TableCell>
                    <TableCell>8-16 weeks</TableCell>
                    <TableCell>Agile development, continuous testing, stakeholder reviews, iterative refinement</TableCell>
                    <TableCell>Working system, test results, documentation, training materials</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Deployment</TableCell>
                    <TableCell>2-4 weeks</TableCell>
                    <TableCell>User acceptance testing, data migration, go-live preparation, rollout execution</TableCell>
                    <TableCell>Production system, migrated data, user training, go-live support</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Support</TableCell>
                    <TableCell>Ongoing</TableCell>
                    <TableCell>System monitoring, performance optimization, user support, continuous improvement</TableCell>
                    <TableCell>System maintenance, performance reports, enhancement recommendations</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-semibold mb-6">Ready to Write Your Success Story?</h2>
            <p className="text-xl text-gray-700 mb-8">
              Join the growing list of organizations that have transformed their operations and 
              achieved exceptional results through strategic technology partnerships with Aethrix Systems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/consultation" 
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium inline-flex items-center justify-center gap-2"
              >
                Start Your Transformation
                <ArrowRight className="w-5 h-5" />
              </a>
              <a 
                href="/services" 
                className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors font-medium"
              >
                Explore Our Services
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
