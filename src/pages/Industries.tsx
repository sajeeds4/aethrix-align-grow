import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Factory, ShoppingCart, Heart, Building, Truck, Users, ArrowRight, CheckCircle } from 'lucide-react';

export default function Industries() {
  const industries = [
    {
      icon: Factory,
      title: "Manufacturing",
      description: "Optimize production, streamline supply chains, and ensure quality control with integrated manufacturing solutions.",
      challenges: [
        "Disconnected production and inventory systems",
        "Manual quality control processes",
        "Inefficient supply chain visibility",
        "Compliance and regulatory tracking"
      ],
      solutions: [
        "Integrated ERP with MRP and production planning",
        "Real-time quality management systems",
        "Supply chain optimization and visibility",
        "Automated compliance reporting and audit trails"
      ],
      technologies: ["Odoo Manufacturing", "IoT Sensors", "Predictive Analytics", "MES Integration"],
      results: "40% reduction in production delays, 30% improvement in inventory accuracy"
    },
    {
      icon: Heart,
      title: "Healthcare",
      description: "Secure, compliant healthcare technology solutions that improve patient care and operational efficiency.",
      challenges: [
        "Patient data privacy and HIPAA compliance",
        "Fragmented electronic health records",
        "Complex appointment scheduling",
        "Manual administrative processes"
      ],
      solutions: [
        "HIPAA-compliant patient management systems",
        "Integrated EHR with clinical workflows",
        "Intelligent appointment scheduling and resource optimization",
        "Automated billing and insurance processing"
      ],
      technologies: ["Secure Cloud Infrastructure", "HL7 FHIR", "Telehealth Integration", "AI Diagnostics"],
      results: "25% improvement in patient satisfaction, 50% reduction in administrative overhead"
    },
    {
      icon: Building,
      title: "Financial Services",
      description: "Robust, secure financial technology solutions that ensure compliance and enhance customer experience.",
      challenges: [
        "Complex regulatory compliance requirements",
        "Legacy system modernization",
        "Cybersecurity and fraud prevention",
        "Customer experience digitization"
      ],
      solutions: [
        "Automated compliance monitoring and reporting",
        "Modern core banking system implementations",
        "Advanced fraud detection and prevention systems",
        "Digital banking platforms and mobile apps"
      ],
      technologies: ["Blockchain", "AI/ML Fraud Detection", "Open Banking APIs", "RegTech Solutions"],
      results: "99.9% uptime, 60% faster loan processing, zero compliance violations"
    },
    {
      icon: ShoppingCart,
      title: "Retail & E-Commerce",
      description: "Unified retail solutions that connect online and offline channels for seamless customer experiences.",
      challenges: [
        "Omnichannel inventory management",
        "Customer data integration across touchpoints",
        "Dynamic pricing and promotion management",
        "Supply chain and logistics optimization"
      ],
      solutions: [
        "Real-time unified inventory across all channels",
        "360-degree customer view and personalization",
        "AI-powered pricing and promotion engines",
        "Integrated supply chain and fulfillment systems"
      ],
      technologies: ["Headless Commerce", "Customer CDP", "AI Recommendations", "Mobile Commerce"],
      results: "35% increase in conversion rates, 45% reduction in inventory carrying costs"
    },
    {
      icon: Truck,
      title: "Logistics & Transportation",
      description: "Smart logistics solutions that optimize routes, reduce costs, and improve delivery performance.",
      challenges: [
        "Inefficient route planning and optimization",
        "Poor shipment visibility and tracking",
        "High fuel and operational costs",
        "Manual dispatch and scheduling"
      ],
      solutions: [
        "AI-powered route optimization and planning",
        "Real-time shipment tracking and visibility",
        "Fuel optimization and cost reduction systems",
        "Automated dispatch and resource scheduling"
      ],
      technologies: ["GPS Tracking", "Route Optimization AI", "Fleet Management", "IoT Sensors"],
      results: "30% reduction in fuel costs, 25% improvement in on-time delivery"
    },
    {
      icon: Users,
      title: "Professional Services",
      description: "Streamline project management, resource allocation, and client relationships for service organizations.",
      challenges: [
        "Project profitability and resource management",
        "Time tracking and billing accuracy",
        "Client communication and collaboration",
        "Knowledge management and sharing"
      ],
      solutions: [
        "Integrated project management and resource planning",
        "Automated time tracking and billing systems",
        "Client portals and collaboration platforms",
        "Centralized knowledge bases and documentation"
      ],
      technologies: ["Project Management Systems", "CRM Integration", "Collaboration Tools", "Analytics"],
      results: "20% increase in project profitability, 40% improvement in client satisfaction"
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
              <BreadcrumbPage>Industry Solutions</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Hero Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Industry-Specific Technology Solutions
            </h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Every industry has unique challenges, regulations, and operational requirements. 
              Our deep sector expertise ensures technology solutions that address your specific 
              business needs while delivering measurable results and competitive advantages.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/consultation" 
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Explore Your Industry Solution
              </a>
              <a 
                href="/case-studies" 
                className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors font-medium"
              >
                View Industry Case Studies
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Solutions Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-semibold mb-6">Industries We Serve</h2>
            <p className="text-lg text-gray-700">
              Leveraging years of experience across diverse sectors to deliver solutions 
              that understand your industry's unique challenges and opportunities.
            </p>
          </div>
          
          <div className="overflow-x-auto mb-12">
            <Table>
              <TableCaption>Industry expertise and solution focus areas across our core verticals.</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-1/6">Industry</TableHead>
                  <TableHead className="w-1/3">Primary Challenge</TableHead>
                  <TableHead className="w-1/3">Our Solution Approach</TableHead>
                  <TableHead className="w-1/6">Typical Results</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Manufacturing</TableCell>
                  <TableCell>Production inefficiencies, inventory management, quality control</TableCell>
                  <TableCell>Integrated ERP with MRP, IoT monitoring, predictive maintenance</TableCell>
                  <TableCell>30-50% efficiency gains</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Healthcare</TableCell>
                  <TableCell>HIPAA compliance, patient data management, operational efficiency</TableCell>
                  <TableCell>Secure patient management systems, EHR integration, workflow automation</TableCell>
                  <TableCell>25-40% admin reduction</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Financial Services</TableCell>
                  <TableCell>Regulatory compliance, legacy modernization, cybersecurity</TableCell>
                  <TableCell>Automated compliance, secure cloud migration, fraud prevention AI</TableCell>
                  <TableCell>99.9% uptime, zero violations</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Retail & E-Commerce</TableCell>
                  <TableCell>Omnichannel management, inventory synchronization, customer experience</TableCell>
                  <TableCell>Unified commerce platform, real-time inventory, AI personalization</TableCell>
                  <TableCell>35-45% conversion increase</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Logistics</TableCell>
                  <TableCell>Route optimization, shipment visibility, operational costs</TableCell>
                  <TableCell>AI route planning, real-time tracking, fleet management systems</TableCell>
                  <TableCell>25-30% cost reduction</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Professional Services</TableCell>
                  <TableCell>Project profitability, resource utilization, client management</TableCell>
                  <TableCell>Integrated PSA systems, automated billing, client collaboration tools</TableCell>
                  <TableCell>20-25% margin improvement</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </section>

      {/* Detailed Industry Solutions */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-semibold mb-12 text-center">Comprehensive Industry Solutions</h2>
            <div className="grid lg:grid-cols-2 gap-8">
              {industries.map((industry, index) => {
                const IconComponent = industry.icon;
                return (
                  <Card key={industry.title} className="shadow-lg hover:shadow-xl transition-shadow">
                    <CardHeader>
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                          <IconComponent className="w-6 h-6 text-blue-600" />
                        </div>
                        <div>
                          <CardTitle className="text-xl">{industry.title}</CardTitle>
                          <CardDescription className="mt-1">{industry.description}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div>
                        <h4 className="font-semibold mb-3 text-red-600">Key Challenges</h4>
                        <ul className="space-y-2">
                          {industry.challenges.map((challenge, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                              <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0" />
                              {challenge}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-3 text-green-600">Our Solutions</h4>
                        <ul className="space-y-2">
                          {industry.solutions.map((solution, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                              <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                              {solution}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-3">Key Technologies</h4>
                        <div className="flex flex-wrap gap-2">
                          {industry.technologies.map((tech) => (
                            <Badge key={tech} variant="outline" className="text-xs">{tech}</Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2 text-blue-800">Typical Results</h4>
                        <p className="text-sm text-blue-700">{industry.results}</p>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Approach by Industry */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-semibold mb-8 text-center">Industry-Specific Implementation Approach</h2>
            <div className="overflow-x-auto">
              <Table>
                <TableCaption>Tailored implementation strategies that address unique industry requirements and constraints.</TableCaption>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-1/6">Industry</TableHead>
                    <TableHead className="w-1/6">Discovery Phase</TableHead>
                    <TableHead className="w-1/6">Compliance Focus</TableHead>
                    <TableHead className="w-1/6">Integration Strategy</TableHead>
                    <TableHead className="w-1/6">Testing Approach</TableHead>
                    <TableHead className="w-1/6">Training & Support</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Manufacturing</TableCell>
                    <TableCell>Production flow analysis, equipment audit</TableCell>
                    <TableCell>ISO 9001, FDA validation where required</TableCell>
                    <TableCell>ERP-MES integration, IoT connectivity</TableCell>
                    <TableCell>Production line testing, quality validation</TableCell>
                    <TableCell>Operator training, maintenance procedures</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Healthcare</TableCell>
                    <TableCell>Workflow mapping, HIPAA assessment</TableCell>
                    <TableCell>HIPAA, HITECH, state regulations</TableCell>
                    <TableCell>HL7 FHIR, EHR connectivity</TableCell>
                    <TableCell>Security testing, privacy validation</TableCell>
                    <TableCell>Clinical staff training, ongoing compliance</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Financial Services</TableCell>
                    <TableCell>Risk assessment, regulatory mapping</TableCell>
                    <TableCell>SOX, PCI DSS, regional banking laws</TableCell>
                    <TableCell>Core banking, payment gateway APIs</TableCell>
                    <TableCell>Penetration testing, disaster recovery</TableCell>
                    <TableCell>Compliance training, audit preparation</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Retail</TableCell>
                    <TableCell>Channel analysis, customer journey mapping</TableCell>
                    <TableCell>PCI compliance, data privacy laws</TableCell>
                    <TableCell>POS, inventory, CRM system integration</TableCell>
                    <TableCell>Load testing, omnichannel validation</TableCell>
                    <TableCell>Staff training, customer support setup</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Logistics</TableCell>
                    <TableCell>Route analysis, fleet assessment</TableCell>
                    <TableCell>DOT regulations, international shipping</TableCell>
                    <TableCell>GPS, fleet management, WMS integration</TableCell>
                    <TableCell>Real-time tracking validation</TableCell>
                    <TableCell>Driver training, dispatch procedures</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Professional Services</TableCell>
                    <TableCell>Project profitability analysis</TableCell>
                    <TableCell>Industry-specific requirements</TableCell>
                    <TableCell>CRM, accounting, collaboration tools</TableCell>
                    <TableCell>Workflow testing, billing validation</TableCell>
                    <TableCell>Project manager training, best practices</TableCell>
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
            <h2 className="text-3xl font-semibold mb-6">Ready to Transform Your Industry Operations?</h2>
            <p className="text-xl text-gray-700 mb-8">
              Don't see your industry listed? We've successfully delivered solutions across numerous sectors. 
              Let's discuss how our expertise can address your unique industry challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/consultation" 
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium inline-flex items-center justify-center gap-2"
              >
                Discuss Your Industry Needs
                <ArrowRight className="w-5 h-5" />
              </a>
              <a 
                href="/case-studies" 
                className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors font-medium"
              >
                View Success Stories
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}