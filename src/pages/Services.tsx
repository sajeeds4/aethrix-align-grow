import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  Settings, 
  Globe, 
  Cloud, 
  Brain, 
  MessageSquare,
  Shield,
  ArrowRight,
  CheckCircle 
} from "lucide-react";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const Services = () => {
  const services = [
    {
      icon: Settings,
      title: "ERP Solutions",
      description: "Transform your business operations with comprehensive ERP systems that integrate all aspects of your organization.",
      href: "/erp",
      features: [
        "Custom Odoo ERP implementation and configuration",
        "Industry-specific modules and workflow automation",
        "Real-time analytics and executive dashboards",
        "Multi-company and multi-currency support",
        "Cloud-based deployment with 99.9% uptime SLA",
        "Comprehensive training and 24/7 technical support",
        "Data migration from legacy systems",
        "Third-party system integrations (CRM, eCommerce, etc.)"
      ],
      cta: "Get ERP Assessment"
    },
    {
      icon: Globe,
      title: "Custom Development",
      description: "Build scalable, secure applications tailored to your unique business requirements and growth objectives.",
      href: "/development",
      features: [
        "Enterprise web applications and portals",
        "Mobile-first responsive applications",
        "E-commerce platforms with advanced features",
        "API development and third-party integrations",
        "Database design and optimization",
        "Progressive Web Apps (PWA) development",
        "Legacy system modernization",
        "Performance optimization and scalability planning"
      ],
      cta: "Discuss Your Project"
    },
    {
      icon: Cloud,
      title: "Cloud & Infrastructure",
      description: "Accelerate your digital transformation with secure, scalable cloud solutions and modern infrastructure.",
      href: "/cloud",
      features: [
        "AWS, GCP, and Azure cloud migrations",
        "Hybrid and multi-cloud architecture design",
        "Infrastructure as Code (Terraform, Pulumi)",
        "Containerization with Docker and Kubernetes",
        "DevOps and CI/CD pipeline implementation",
        "Cloud cost optimization and governance",
        "Disaster recovery and business continuity",
        "24/7 monitoring and incident response"
      ],
      cta: "Start Cloud Journey"
    },
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description: "Harness the power of artificial intelligence to automate processes, gain insights, and drive innovation.",
      href: "/ai",
      features: [
        "Custom AI model development and training",
        "Natural Language Processing (NLP) solutions",
        "Computer vision and image recognition",
        "Predictive analytics and forecasting",
        "Intelligent automation and workflow optimization",
        "RAG (Retrieval-Augmented Generation) systems",
        "AI-powered chatbots and virtual assistants",
        "Machine learning model deployment and monitoring"
      ],
      cta: "Explore AI Solutions"
    },
    {
      icon: Shield,
      title: "Cybersecurity Services",
      description: "Protect your digital assets with comprehensive security solutions and expert guidance.",
      href: "/cybersecurity",
      features: [
        "Security assessments and vulnerability testing",
        "Zero-trust security architecture implementation",
        "Compliance framework development (SOC 2, GDPR, HIPAA)",
        "Security incident response and forensics",
        "Employee security training and awareness programs",
        "Network security and firewall management",
        "Identity and access management (IAM) solutions",
        "Continuous security monitoring and threat detection"
      ],
      cta: "Get Security Assessment"
    },
    {
      icon: MessageSquare,
      title: "Strategic Consulting",
      description: "Align technology investments with business objectives through expert strategic guidance and planning.",
      href: "/consultation",
      features: [
        "Technology strategy and roadmap development",
        "Digital transformation planning and execution",
        "IT governance and policy development",
        "Vendor evaluation and selection",
        "Architecture review and optimization",
        "Project management and delivery oversight",
        "Change management and training programs",
        "Ongoing technology advisory services"
      ],
      cta: "Schedule Consultation"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Comprehensive Technology Solutions{" "}
                <span className="text-yellow-300">for Modern Business</span>
              </h1>
              <p className="text-xl mb-8 leading-relaxed">
                From enterprise system implementations to cutting-edge AI solutions, 
                Aethrix Systems delivers the full spectrum of technology services 
                that drive growth, efficiency, and competitive advantage.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" asChild>
                  <Link to="/consultation" className="flex items-center gap-2">
                    Get Free Consultation
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600" asChild>
                  <Link to="/case-studies">View Success Stories</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-semibold mb-6">Our Core Service Offerings</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                As your strategic technology partner, we provide comprehensive services that address 
                every aspect of your digital transformation journey. Our proven methodologies and 
                deep industry expertise ensure successful outcomes across all engagement types.
              </p>
            </div>
            
            <div className="overflow-x-auto mb-12">
              <Table>
                <TableCaption>Strategic overview of our service portfolio and business impact focus areas.</TableCaption>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-1/5">Service Area</TableHead>
                    <TableHead className="w-2/5">Strategic Focus</TableHead>
                    <TableHead className="w-1/5">Typical Engagement</TableHead>
                    <TableHead className="w-1/5">Business Impact</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Enterprise Resource Planning</TableCell>
                    <TableCell>
                      Streamline business processes, improve data accuracy, ensure regulatory compliance, 
                      and create integrated workflows across all departments
                    </TableCell>
                    <TableCell>6-18 months</TableCell>
                    <TableCell>30-50% efficiency gains</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Cloud Solutions & Infrastructure</TableCell>
                    <TableCell>
                      Modernize IT infrastructure, reduce operational costs, improve scalability, 
                      and ensure high availability with enterprise-grade security
                    </TableCell>
                    <TableCell>3-12 months</TableCell>
                    <TableCell>40-60% cost reduction</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Custom Development</TableCell>
                    <TableCell>
                      Build tailored applications that address unique business requirements, 
                      integrate with existing systems, and provide competitive differentiation
                    </TableCell>
                    <TableCell>4-16 months</TableCell>
                    <TableCell>25-40% productivity gains</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">AI & Automation</TableCell>
                    <TableCell>
                      Leverage artificial intelligence and machine learning to automate complex processes, 
                      gain predictive insights, and enhance decision-making capabilities
                    </TableCell>
                    <TableCell>6-24 months</TableCell>
                    <TableCell>50-70% process automation</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Cybersecurity</TableCell>
                    <TableCell>
                      Protect digital assets, ensure compliance, implement zero-trust architecture, 
                      and provide continuous monitoring and threat response
                    </TableCell>
                    <TableCell>2-8 months</TableCell>
                    <TableCell>90%+ risk reduction</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Strategic Technology Consulting</TableCell>
                    <TableCell>
                      Develop technology roadmaps, optimize IT investments, guide digital transformation 
                      initiatives, and provide ongoing strategic technology leadership
                    </TableCell>
                    <TableCell>Ongoing</TableCell>
                    <TableCell>20-30% ROI improvement</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>
        </section>

        {/* Service Methodology */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-semibold mb-8 text-center">Our Proven Service Methodology</h2>
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <Card className="text-center shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-3xl">🔍</span>
                    </div>
                    <CardTitle>Discovery & Assessment</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      Comprehensive analysis of your current technology landscape, business processes, and strategic objectives.
                    </p>
                    <ul className="text-sm text-gray-600 space-y-2 text-left">
                      <li>• Technical architecture review</li>
                      <li>• Process mapping and gap analysis</li>
                      <li>• Stakeholder interviews</li>
                      <li>• Requirements documentation</li>
                      <li>• Risk and compliance assessment</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="text-center shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-3xl">🎯</span>
                    </div>
                    <CardTitle>Strategic Design</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      Create detailed solution architecture and implementation roadmap aligned with your business goals.
                    </p>
                    <ul className="text-sm text-gray-600 space-y-2 text-left">
                      <li>• Solution architecture design</li>
                      <li>• Technology stack selection</li>
                      <li>• Implementation roadmap</li>
                      <li>• Resource planning</li>
                      <li>• Success metrics definition</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="text-center shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-3xl">🚀</span>
                    </div>
                    <CardTitle>Agile Delivery</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      Iterative implementation with continuous feedback loops and regular milestone reviews.
                    </p>
                    <ul className="text-sm text-gray-600 space-y-2 text-left">
                      <li>• Sprint-based development</li>
                      <li>• Regular stakeholder reviews</li>
                      <li>• Continuous integration/deployment</li>
                      <li>• Quality assurance testing</li>
                      <li>• User acceptance validation</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
              
              <div className="bg-blue-50 p-8 rounded-lg">
                <h3 className="text-2xl font-semibold mb-6 text-center">Why Our Methodology Works</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold mb-3 text-blue-800">Risk Mitigation</h4>
                    <ul className="text-gray-700 space-y-2">
                      <li>• Phased approach reduces implementation risk</li>
                      <li>• Continuous testing and validation</li>
                      <li>• Early identification of potential issues</li>
                      <li>• Comprehensive change management</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-blue-800">Value Realization</h4>
                    <ul className="text-gray-700 space-y-2">
                      <li>• Early wins and quick value delivery</li>
                      <li>• ROI tracking throughout project</li>
                      <li>• Performance metrics and KPIs</li>
                      <li>• Continuous optimization opportunities</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Packages */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-semibold mb-12 text-center">Service Packages & Engagement Models</h2>
              
              <div className="overflow-x-auto mb-12">
                <Table>
                  <TableCaption>Flexible engagement models tailored to your business needs and budget requirements.</TableCaption>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-1/6">Package Type</TableHead>
                      <TableHead className="w-1/4">What's Included</TableHead>
                      <TableHead className="w-1/6">Duration</TableHead>
                      <TableHead className="w-1/6">Investment Range</TableHead>
                      <TableHead className="w-1/4">Best For</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">Discovery Sprint</TableCell>
                      <TableCell>Requirements analysis, technical assessment, solution design, roadmap development</TableCell>
                      <TableCell>2-4 weeks</TableCell>
                      <TableCell>$5K - $15K</TableCell>
                      <TableCell>New projects with unclear scope or complex requirements</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Implementation Project</TableCell>
                      <TableCell>Full solution delivery, testing, deployment, training, documentation</TableCell>
                      <TableCell>3-18 months</TableCell>
                      <TableCell>$25K - $500K</TableCell>
                      <TableCell>Well-defined projects with clear deliverables and timeline</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Managed Services</TableCell>
                      <TableCell>Ongoing support, maintenance, monitoring, updates, optimization</TableCell>
                      <TableCell>Ongoing</TableCell>
                      <TableCell>$2K - $25K/month</TableCell>
                      <TableCell>Post-implementation support and continuous improvement</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Strategic Retainer</TableCell>
                      <TableCell>Technology advisory, architecture review, strategic planning, vendor management</TableCell>
                      <TableCell>6-12 months</TableCell>
                      <TableCell>$5K - $50K/month</TableCell>
                      <TableCell>Organizations needing ongoing strategic technology leadership</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Staff Augmentation</TableCell>
                      <TableCell>Dedicated resources, specific skillsets, project leadership, knowledge transfer</TableCell>
                      <TableCell>3-24 months</TableCell>
                      <TableCell>$8K - $20K/month per resource</TableCell>
                      <TableCell>Teams needing specialized skills or additional capacity</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="border-blue-200 bg-blue-50">
                  <CardHeader>
                    <CardTitle className="text-blue-800">Startup Package</CardTitle>
                    <CardDescription>Perfect for growing businesses</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-blue-600 mb-4">Starting at $25K</div>
                    <ul className="text-sm space-y-2">
                      <li>✓ MVP development</li>
                      <li>✓ Cloud infrastructure setup</li>
                      <li>✓ Basic security implementation</li>
                      <li>✓ 3 months support</li>
                      <li>✓ Documentation & training</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="border-purple-200 bg-purple-50">
                  <CardHeader>
                    <CardTitle className="text-purple-800">Enterprise Package</CardTitle>
                    <CardDescription>Comprehensive solutions</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-purple-600 mb-4">Starting at $100K</div>
                    <ul className="text-sm space-y-2">
                      <li>✓ Full-scale implementation</li>
                      <li>✓ Integration with existing systems</li>
                      <li>✓ Advanced security & compliance</li>
                      <li>✓ 12 months support</li>
                      <li>✓ Dedicated project manager</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="border-green-200 bg-green-50">
                  <CardHeader>
                    <CardTitle className="text-green-800">Digital Transformation</CardTitle>
                    <CardDescription>Complete modernization</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-green-600 mb-4">Starting at $250K</div>
                    <ul className="text-sm space-y-2">
                      <li>✓ Legacy system modernization</li>
                      <li>✓ Multi-phase implementation</li>
                      <li>✓ Change management program</li>
                      <li>✓ Ongoing strategic advisory</li>
                      <li>✓ Performance optimization</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Services Detail */}
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <Card 
                    key={service.title} 
                    className="group hover:shadow-large transition-smooth border-border hover:border-accent/50 bg-card"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardHeader className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-bounce">
                          <IconComponent className="w-6 h-6 text-primary-foreground" />
                        </div>
                        <Button size="sm" variant="outline" asChild>
                          <Link to="/consultation">Get Quote</Link>
                        </Button>
                      </div>
                      <div>
                        <CardTitle className="text-2xl group-hover:text-accent transition-smooth">
                          {service.title}
                        </CardTitle>
                        <CardDescription className="mt-2 text-base">
                          {service.description}
                        </CardDescription>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <ul className="space-y-3">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Button className="w-full" variant="cta" asChild>
                        <Link to="/consultation" className="flex items-center justify-center gap-2">
                          {service.cta}
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Services Comparison Table */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-6">Service Comparison & Deliverables</h2>

            {/* Service Pricing & ROI */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h3 className="text-2xl font-semibold mb-4">Service Pricing & ROI Analysis</h3>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Service Category</TableHead>
                      <TableHead>Starting Price</TableHead>
                      <TableHead>Average Project Size</TableHead>
                      <TableHead>Typical ROI Timeline</TableHead>
                      <TableHead>Expected ROI %</TableHead>
                      <TableHead>Key Value Drivers</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">ERP Solutions</TableCell>
                      <TableCell>$25,000</TableCell>
                      <TableCell>$50,000 - $200,000</TableCell>
                      <TableCell>12-18 months</TableCell>
                      <TableCell>200-400%</TableCell>
                      <TableCell>Process automation, data accuracy, compliance</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Web Development</TableCell>
                      <TableCell>$15,000</TableCell>
                      <TableCell>$30,000 - $150,000</TableCell>
                      <TableCell>6-12 months</TableCell>
                      <TableCell>150-300%</TableCell>
                      <TableCell>Customer acquisition, brand presence, sales automation</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Cloud Infrastructure</TableCell>
                      <TableCell>$10,000</TableCell>
                      <TableCell>$25,000 - $100,000</TableCell>
                      <TableCell>3-6 months</TableCell>
                      <TableCell>300-500%</TableCell>
                      <TableCell>Cost reduction, scalability, disaster recovery</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">AI & Automation</TableCell>
                      <TableCell>$20,000</TableCell>
                      <TableCell>$40,000 - $250,000</TableCell>
                      <TableCell>9-15 months</TableCell>
                      <TableCell>250-600%</TableCell>
                      <TableCell>Labor cost reduction, accuracy improvement, insights</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Cybersecurity</TableCell>
                      <TableCell>$15,000</TableCell>
                      <TableCell>$30,000 - $120,000</TableCell>
                      <TableCell>3-9 months</TableCell>
                      <TableCell>300-500%</TableCell>
                      <TableCell>Risk mitigation, compliance, incident prevention</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Strategic Consulting</TableCell>
                      <TableCell>$5,000</TableCell>
                      <TableCell>$15,000 - $75,000</TableCell>
                      <TableCell>6-12 months</TableCell>
                      <TableCell>200-400%</TableCell>
                      <TableCell>Strategic alignment, technology optimization</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </div>

            {/* Implementation Roadmap */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h3 className="text-2xl font-semibold mb-4">Typical Implementation Roadmap</h3>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Phase</TableHead>
                      <TableHead>Duration</TableHead>
                      <TableHead>ERP Solutions</TableHead>
                      <TableHead>Custom Development</TableHead>
                      <TableHead>Cloud Infrastructure</TableHead>
                      <TableHead>AI & Automation</TableHead>
                      <TableHead>Cybersecurity</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">Discovery & Planning</TableCell>
                      <TableCell>2-4 weeks</TableCell>
                      <TableCell>Business process mapping, requirements gathering</TableCell>
                      <TableCell>User research, wireframing, tech stack selection</TableCell>
                      <TableCell>Infrastructure audit, migration planning</TableCell>
                      <TableCell>Data analysis, model selection, feasibility study</TableCell>
                      <TableCell>Security assessment, compliance gap analysis</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Design & Architecture</TableCell>
                      <TableCell>3-6 weeks</TableCell>
                      <TableCell>System design, module configuration</TableCell>
                      <TableCell>UI/UX design, API architecture</TableCell>
                      <TableCell>Network design, security architecture</TableCell>
                      <TableCell>Model architecture, data pipeline design</TableCell>
                      <TableCell>Security framework design, policy development</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Development & Implementation</TableCell>
                      <TableCell>8-16 weeks</TableCell>
                      <TableCell>Module deployment, customization</TableCell>
                      <TableCell>Frontend/backend development, testing</TableCell>
                      <TableCell>Infrastructure provisioning, migration</TableCell>
                      <TableCell>Model training, integration development</TableCell>
                      <TableCell>Security controls implementation, tooling setup</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Testing & Deployment</TableCell>
                      <TableCell>2-4 weeks</TableCell>
                      <TableCell>User acceptance testing, go-live</TableCell>
                      <TableCell>Performance testing, production deployment</TableCell>
                      <TableCell>Load testing, cutover execution</TableCell>
                      <TableCell>Model validation, production deployment</TableCell>
                      <TableCell>Penetration testing, security validation</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Support & Optimization</TableCell>
                      <TableCell>Ongoing</TableCell>
                      <TableCell>User training, performance monitoring</TableCell>
                      <TableCell>Maintenance, feature enhancements</TableCell>
                      <TableCell>Monitoring, cost optimization</TableCell>
                      <TableCell>Model retraining, performance tuning</TableCell>
                      <TableCell>Continuous monitoring, incident response</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </div>

            <h3 className="text-2xl font-semibold mb-4">Detailed Service Deliverables</h3>
            <Table>
              <TableCaption>At-a-glance comparison of scope, deliverables, and timeline by service.</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead>Service</TableHead>
                  <TableHead>Discovery</TableHead>
                  <TableHead>Design</TableHead>
                  <TableHead>Build</TableHead>
                  <TableHead>Test</TableHead>
                  <TableHead>Deploy</TableHead>
                  <TableHead>Handover</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>ERP Solutions</TableCell>
                  <TableCell>Process mapping, fit-gap, data audit</TableCell>
                  <TableCell>Odoo module design, workflow specs</TableCell>
                  <TableCell>Custom modules, integrations, migrations</TableCell>
                  <TableCell>UAT scripts, data validation</TableCell>
                  <TableCell>Cutover plan, staging to prod</TableCell>
                  <TableCell>Admin training, runbooks, support</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Custom Development</TableCell>
                  <TableCell>Product discovery, backlog, architecture</TableCell>
                  <TableCell>UX/UI, component library, APIs</TableCell>
                  <TableCell>Frontend, backend, CI/CD</TableCell>
                  <TableCell>Unit/e2e, accessibility, perf</TableCell>
                  <TableCell>Blue/green deploy, monitoring</TableCell>
                  <TableCell>Docs, handoff, enablement</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Cloud & Infrastructure</TableCell>
                  <TableCell>Infra audit, cost analysis</TableCell>
                  <TableCell>Landing zone, network design</TableCell>
                  <TableCell>IaC modules, security baselines</TableCell>
                  <TableCell>DR drills, penetration tests</TableCell>
                  <TableCell>Cutover/migration</TableCell>
                  <TableCell>Runbooks, SRE onboarding</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>AI & Automation</TableCell>
                  <TableCell>Use-case selection, data readiness</TableCell>
                  <TableCell>Prompt/RAG design, eval plan</TableCell>
                  <TableCell>Pipelines, agents, integrations</TableCell>
                  <TableCell>Human-in-loop evals, guardrails</TableCell>
                  <TableCell>Shadow launch, grad rollout</TableCell>
                  <TableCell>Ops dashboards, retraining cadence</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Cybersecurity</TableCell>
                  <TableCell>Risk assessment, compliance audit</TableCell>
                  <TableCell>Security architecture, policy framework</TableCell>
                  <TableCell>Controls implementation, tooling</TableCell>
                  <TableCell>Penetration testing, vulnerability scans</TableCell>
                  <TableCell>Security monitoring deployment</TableCell>
                  <TableCell>Incident response playbooks, training</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </section>

        {/* Service Quality & Standards */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-semibold mb-12 text-center">Service Quality & Standards</h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                <Card className="text-center shadow-lg">
                  <CardHeader>
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-3xl">🏆</span>
                    </div>
                    <CardTitle>Quality Assurance</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm text-gray-600 space-y-2 text-left">
                      <li>• ISO 27001 compliant processes</li>
                      <li>• Automated testing frameworks</li>
                      <li>• Code review standards</li>
                      <li>• Performance benchmarking</li>
                      <li>• Security vulnerability scanning</li>
                      <li>• Accessibility compliance (WCAG 2.1)</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="text-center shadow-lg">
                  <CardHeader>
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-3xl">📊</span>
                    </div>
                    <CardTitle>Performance Metrics</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm text-gray-600 space-y-2 text-left">
                      <li>• 99.9% uptime guarantee</li>
                      <li>• Sub-2 second load times</li>
                      <li>• 95%+ client satisfaction rate</li>
                      <li>• 24/7 monitoring and alerts</li>
                      <li>• Response time SLAs</li>
                      <li>• Continuous performance optimization</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="text-center shadow-lg">
                  <CardHeader>
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-3xl">🔒</span>
                    </div>
                    <CardTitle>Security Standards</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm text-gray-600 space-y-2 text-left">
                      <li>• SOC 2 Type II compliance</li>
                      <li>• End-to-end encryption</li>
                      <li>• Regular security audits</li>
                      <li>• Data privacy protection</li>
                      <li>• Incident response procedures</li>
                      <li>• Backup and disaster recovery</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
              
              <div className="overflow-x-auto">
                <Table>
                  <TableCaption>Our comprehensive quality standards and compliance certifications across all services.</TableCaption>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-1/5">Quality Area</TableHead>
                      <TableHead className="w-1/5">Standards Applied</TableHead>
                      <TableHead className="w-1/5">Measurement Criteria</TableHead>
                      <TableHead className="w-1/5">Compliance Level</TableHead>
                      <TableHead className="w-1/5">Continuous Improvement</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">Code Quality</TableCell>
                      <TableCell>Clean Code, SOLID principles, automated testing</TableCell>
                      <TableCell>90%+ code coverage, zero critical bugs</TableCell>
                      <TableCell>Enterprise-grade standards</TableCell>
                      <TableCell>Weekly code reviews, refactoring sprints</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Security</TableCell>
                      <TableCell>OWASP Top 10, SOC 2, GDPR</TableCell>
                      <TableCell>Zero security vulnerabilities, encryption at rest/transit</TableCell>
                      <TableCell>Full compliance certification</TableCell>
                      <TableCell>Monthly security assessments, threat modeling</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Performance</TableCell>
                      <TableCell>Web Vitals, performance budgets</TableCell>
                      <TableCell>Load time &lt; 2s, 99.9% uptime</TableCell>
                      <TableCell>Best-in-class performance</TableCell>
                      <TableCell>Continuous monitoring, optimization cycles</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Accessibility</TableCell>
                      <TableCell>WCAG 2.1 AA compliance</TableCell>
                      <TableCell>100% accessibility compliance</TableCell>
                      <TableCell>ADA compliant interfaces</TableCell>
                      <TableCell>Regular accessibility audits, user testing</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Documentation</TableCell>
                      <TableCell>Technical writing standards, API docs</TableCell>
                      <TableCell>Complete documentation coverage</TableCell>
                      <TableCell>Enterprise documentation standards</TableCell>
                      <TableCell>Living documentation, regular updates</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </div>
          </div>
        </section>

        {/* Client Success Framework */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-semibold mb-12 text-center">Client Success Framework</h2>
              
              <div className="grid md:grid-cols-2 gap-12 mb-12">
                <div>
                  <h3 className="text-2xl font-semibold mb-6">Success Metrics & KPIs</h3>
                  <div className="space-y-6">
                    <div className="bg-blue-50 p-6 rounded-lg">
                      <h4 className="font-semibold text-blue-800 mb-3">Project Success Metrics</h4>
                      <ul className="text-blue-700 space-y-2">
                        <li>• On-time delivery: 95%+</li>
                        <li>• Budget adherence: ±5%</li>
                        <li>• Quality gates passed: 100%</li>
                        <li>• Client satisfaction: 4.8/5.0</li>
                        <li>• Post-launch issues: &lt;1%</li>
                      </ul>
                    </div>
                    
                    <div className="bg-green-50 p-6 rounded-lg">
                      <h4 className="font-semibold text-green-800 mb-3">Business Impact Metrics</h4>
                      <ul className="text-green-700 space-y-2">
                        <li>• ROI achievement: 250%+ average</li>
                        <li>• Efficiency gains: 30-50%</li>
                        <li>• Cost reduction: 20-40%</li>
                        <li>• User adoption: 90%+</li>
                        <li>• Process automation: 60%+</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-2xl font-semibold mb-6">Support & Maintenance</h3>
                  <div className="space-y-6">
                    <div className="bg-purple-50 p-6 rounded-lg">
                      <h4 className="font-semibold text-purple-800 mb-3">Support Tiers</h4>
                      <ul className="text-purple-700 space-y-2">
                        <li>• <strong>Basic:</strong> Business hours, email support</li>
                        <li>• <strong>Standard:</strong> Extended hours, phone + email</li>
                        <li>• <strong>Premium:</strong> 24/7 support, dedicated account manager</li>
                        <li>• <strong>Enterprise:</strong> SLA guarantees, on-site support</li>
                      </ul>
                    </div>
                    
                    <div className="bg-orange-50 p-6 rounded-lg">
                      <h4 className="font-semibold text-orange-800 mb-3">Response Time SLAs</h4>
                      <ul className="text-orange-700 space-y-2">
                        <li>• Critical issues: 1 hour</li>
                        <li>• High priority: 4 hours</li>
                        <li>• Medium priority: 24 hours</li>
                        <li>• Low priority: 72 hours</li>
                        <li>• Feature requests: Next sprint</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-2xl font-semibold mb-6 text-center">Long-term Partnership Value</h3>
                <div className="grid md:grid-cols-4 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-blue-600 mb-2">200+</div>
                    <p className="text-gray-600">Successful Projects</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-green-600 mb-2">95%</div>
                    <p className="text-gray-600">Client Retention Rate</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-purple-600 mb-2">$50M+</div>
                    <p className="text-gray-600">Client Cost Savings</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-orange-600 mb-2">6+</div>
                    <p className="text-gray-600">Years Average Partnership</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Level Agreements */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-semibold mb-12 text-center">Service Level Agreements (SLAs)</h2>
              
              <div className="overflow-x-auto mb-12">
                <Table>
                  <TableCaption>Comprehensive SLA commitments across all service areas with penalty clauses for non-compliance.</TableCaption>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-1/6">Service Area</TableHead>
                      <TableHead className="w-1/6">Availability</TableHead>
                      <TableHead className="w-1/6">Response Time</TableHead>
                      <TableHead className="w-1/6">Resolution Time</TableHead>
                      <TableHead className="w-1/6">Performance Standards</TableHead>
                      <TableHead className="w-1/6">Penalties</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">Application Hosting</TableCell>
                      <TableCell>99.95% uptime</TableCell>
                      <TableCell>&lt; 1 hour</TableCell>
                      <TableCell>&lt; 4 hours</TableCell>
                      <TableCell>Load time &lt; 2s, 24/7 monitoring</TableCell>
                      <TableCell>1% monthly credit per 0.1% below SLA</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Technical Support</TableCell>
                      <TableCell>24/7/365</TableCell>
                      <TableCell>&lt; 30 minutes</TableCell>
                      <TableCell>&lt; 2 hours (P1), &lt; 24 hours (P2)</TableCell>
                      <TableCell>Certified engineers, escalation procedures</TableCell>
                      <TableCell>10% monthly credit for missed SLA</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Security Monitoring</TableCell>
                      <TableCell>100% coverage</TableCell>
                      <TableCell>Real-time alerts</TableCell>
                      <TableCell>&lt; 15 minutes (critical incidents)</TableCell>
                      <TableCell>SIEM, threat intelligence, automated response</TableCell>
                      <TableCell>Security incident = 50% monthly credit</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Backup & Recovery</TableCell>
                      <TableCell>99.99% data integrity</TableCell>
                      <TableCell>Immediate notification</TableCell>
                      <TableCell>&lt; 4 hours full recovery</TableCell>
                      <TableCell>Daily backups, tested recovery procedures</TableCell>
                      <TableCell>Data loss = full month credit</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Development Services</TableCell>
                      <TableCell>Project milestone adherence</TableCell>
                      <TableCell>&lt; 24 hours communication</TableCell>
                      <TableCell>Per sprint delivery commitments</TableCell>
                      <TableCell>Agile methodology, code quality gates</TableCell>
                      <TableCell>Milestone delays = timeline extension</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-xl">SLA Monitoring & Reporting</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Real-time dashboards with performance metrics</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Monthly SLA performance reports</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Automated alerting and escalation procedures</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Quarterly SLA review and optimization sessions</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Transparent penalty application and credits</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-xl">Continuous Improvement</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Regular performance analysis and optimization</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Proactive capacity planning and scaling</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Investment in latest technologies and tools</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Staff training and certification programs</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Client feedback integration and action plans</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Industry Certifications & Partnerships */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-semibold mb-12 text-center">Industry Certifications & Strategic Partnerships</h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                <Card className="text-center shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">🏅</span>
                    </div>
                    <CardTitle className="text-lg">Cloud Certifications</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• AWS Solutions Architect</li>
                      <li>• Google Cloud Professional</li>
                      <li>• Azure DevOps Engineer</li>
                      <li>• Kubernetes Administrator</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="text-center shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">🛡️</span>
                    </div>
                    <CardTitle className="text-lg">Security Certifications</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• CISSP Certified</li>
                      <li>• CEH (Ethical Hacker)</li>
                      <li>• GSEC Security Essentials</li>
                      <li>• ISO 27001 Lead Auditor</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="text-center shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">⚙️</span>
                    </div>
                    <CardTitle className="text-lg">ERP Certifications</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Odoo Certified Partner</li>
                      <li>• Salesforce Certified</li>
                      <li>• Microsoft Dynamics</li>
                      <li>• SAP Business One</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="text-center shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">🤖</span>
                    </div>
                    <CardTitle className="text-lg">AI/ML Certifications</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• TensorFlow Developer</li>
                      <li>• Azure AI Engineer</li>
                      <li>• AWS ML Specialty</li>
                      <li>• Google ML Engineer</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
              
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-lg mb-12">
                <h3 className="text-2xl font-semibold mb-6 text-center">Strategic Technology Partnerships</h3>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <h4 className="font-semibold mb-3 text-blue-800">Cloud Providers</h4>
                    <ul className="text-gray-700 space-y-2">
                      <li>• AWS Advanced Consulting Partner</li>
                      <li>• Google Cloud Premier Partner</li>
                      <li>• Microsoft Gold Partner</li>
                      <li>• DigitalOcean Technology Partner</li>
                    </ul>
                  </div>
                  <div className="text-center">
                    <h4 className="font-semibold mb-3 text-purple-800">Technology Vendors</h4>
                    <ul className="text-gray-700 space-y-2">
                      <li>• Odoo Gold Partner</li>
                      <li>• MongoDB Partner</li>
                      <li>• Redis Labs Partner</li>
                      <li>• Elasticsearch Partner</li>
                    </ul>
                  </div>
                  <div className="text-center">
                    <h4 className="font-semibold mb-3 text-green-800">Security Vendors</h4>
                    <ul className="text-gray-700 space-y-2">
                      <li>• CrowdStrike Technology Partner</li>
                      <li>• Okta Technology Partner</li>
                      <li>• HashiCorp Partner</li>
                      <li>• Auth0 Technology Partner</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="overflow-x-auto">
                <Table>
                  <TableCaption>Our comprehensive certification portfolio ensures expert-level service delivery across all technology domains.</TableCaption>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-1/5">Certification Category</TableHead>
                      <TableHead className="w-1/5">Current Certifications</TableHead>
                      <TableHead className="w-1/5">Team Coverage</TableHead>
                      <TableHead className="w-1/5">Renewal/Upgrade Schedule</TableHead>
                      <TableHead className="w-1/5">Business Value</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">Cloud Architecture</TableCell>
                      <TableCell>12 active certifications across AWS, GCP, Azure</TableCell>
                      <TableCell>80% of senior engineers</TableCell>
                      <TableCell>Quarterly updates, annual renewals</TableCell>
                      <TableCell>Advanced cloud solution design, cost optimization expertise</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Cybersecurity</TableCell>
                      <TableCell>8 security certifications, SOC 2 compliance</TableCell>
                      <TableCell>100% of security team</TableCell>
                      <TableCell>Bi-annual updates, continuous education</TableCell>
                      <TableCell>Enterprise-grade security, compliance assurance</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">ERP Systems</TableCell>
                      <TableCell>Odoo Gold Partner, multiple ERP certifications</TableCell>
                      <TableCell>90% of ERP consultants</TableCell>
                      <TableCell>Annual partner requirements, ongoing training</TableCell>
                      <TableCell>Deep ERP expertise, implementation best practices</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">AI/Machine Learning</TableCell>
                      <TableCell>6 ML certifications, AI specializations</TableCell>
                      <TableCell>70% of AI team members</TableCell>
                      <TableCell>Semi-annual updates, research participation</TableCell>
                      <TableCell>Cutting-edge AI solutions, model optimization</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Project Management</TableCell>
                      <TableCell>PMP, Scrum Master, SAFe certifications</TableCell>
                      <TableCell>100% of project managers</TableCell>
                      <TableCell>Annual renewals, methodology updates</TableCell>
                      <TableCell>Structured delivery, risk management, stakeholder satisfaction</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </div>
          </div>
        </section>

        {/* Technology Stack Table */}
        <section className="pb-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-6">Technology Stack Overview</h2>
            <Table>
              <TableCaption>Typical tools and frameworks we use; adapted to your context.</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead>Layer</TableHead>
                  <TableHead>Primary</TableHead>
                  <TableHead>Alternatives</TableHead>
                  <TableHead>Notes</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Frontend</TableCell>
                  <TableCell>React, TypeScript, Vite, Tailwind, Radix/Shadcn</TableCell>
                  <TableCell>Next.js, Vue, SvelteKit</TableCell>
                  <TableCell>Accessible UI, fast dev/build</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Backend</TableCell>
                  <TableCell>Node.js (Express/Nest)</TableCell>
                  <TableCell>Django/FastAPI, Laravel</TableCell>
                  <TableCell>Choose per team skills and scale</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Data</TableCell>
                  <TableCell>PostgreSQL, Redis</TableCell>
                  <TableCell>MySQL, MongoDB</TableCell>
                  <TableCell>Migrations, backups, observability</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>ERP</TableCell>
                  <TableCell>Odoo CE/EE</TableCell>
                  <TableCell>ERPNext, SAP B1</TableCell>
                  <TableCell>Fit-gap and TCO driven</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Cloud</TableCell>
                  <TableCell>AWS, Docker, Kubernetes</TableCell>
                  <TableCell>GCP/Azure, Fly.io</TableCell>
                  <TableCell>IaC with Terraform/Pulumi</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>AI</TableCell>
                  <TableCell>OpenAI APIs, LangChain, Vectordb</TableCell>
                  <TableCell>Local LLMs, RAG frameworks</TableCell>
                  <TableCell>Guardrails, evals, privacy</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>CI/CD</TableCell>
                  <TableCell>GitHub Actions</TableCell>
                  <TableCell>GitLab CI, Jenkins</TableCell>
                  <TableCell>Preview envs, quality gates</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Security</TableCell>
                  <TableCell>OWASP ASVS, SAST/DAST</TableCell>
                  <TableCell>Dependabot, Trivy</TableCell>
                  <TableCell>Shift-left with policies</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-secondary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Not Sure Which Service is Right for You?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let our experts analyze your needs and recommend the best technology 
              solutions for your business goals.
            </p>
            <Button size="lg" variant="cta" asChild>
              <Link to="/consultation" className="flex items-center gap-2">
                Schedule Free Consultation
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;