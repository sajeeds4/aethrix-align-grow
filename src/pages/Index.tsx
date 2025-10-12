import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import ServicesOverview from "@/components/sections/ServicesOverview";
import WhoWeHelp from "@/components/sections/WhoWeHelp";
import WhyAethrix from "@/components/sections/WhyAethrix";
import TrustedBy from "@/components/sections/TrustedBy";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import SEO from "@/components/SEO";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Professional ERP & Software Solutions | Aethrix Systems"
        description="Aethrix Systems provides expert ERP implementation, custom software development, cloud solutions, and AI/ML services. 15+ years experience in India & Asia. Free consultation available."
        keywords="ERP implementation, Odoo ERP, software development, cloud solutions, AI ML services, enterprise software, business automation, digital transformation"
        ogType="website"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Aethrix Systems",
          "description": "Professional ERP implementation and software development company",
          "url": "https://aethrixsystems.com",
          "logo": "https://aethrixsystems.com/logo.png",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+91-XXXXXXXXXX",
            "contactType": "Sales",
            "areaServed": ["IN", "ASIA"],
            "availableLanguage": ["English", "Hindi"]
          },
          "sameAs": [
            "https://linkedin.com/company/aethrixsystems",
            "https://twitter.com/aethrixsystems"
          ]
        }}
      />
      <Header />
      <main>
        <HeroSection />
        <TrustedBy />
        
        {/* Services Overview Section */}
        <section className="py-24 bg-gradient-to-br from-muted/30 via-background to-muted/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold mb-6">Comprehensive Technology Solutions</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                At Aethrix Systems, we understand that every business has unique technology challenges. Our comprehensive suite of services is designed to address the full spectrum of your digital infrastructure needs, from initial consultation and strategy development to implementation, maintenance, and ongoing optimization.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                Our team of certified professionals brings decades of combined experience in enterprise technology solutions. We work closely with your team to understand your business objectives, assess your current technology landscape, and develop customized solutions that drive measurable results.
              </p>
            </div>
            
            <div className="text-center mb-12">
              <h3 className="text-2xl font-semibold mb-4">Our Approach Goes Beyond Simple Technology Implementation</h3>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                We become your strategic technology partner, helping you navigate the complexities of digital transformation while ensuring your systems remain secure, efficient, and scalable as your business grows.
              </p>
            </div>
          </div>
        </section>
        
        <ServicesOverview />

        {/* Detailed Company Overview */}
        <section className="py-24 bg-gradient-to-br from-blue-50 via-white to-purple-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-6">Why Leading Organizations Choose Aethrix Systems</h2>
                <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
                  Founded on the principles of innovation, reliability, and client success, Aethrix Systems has emerged 
                  as a trusted technology partner for organizations ranging from startups to Fortune 500 enterprises. 
                  Our commitment to excellence and deep technical expertise sets us apart in the competitive landscape 
                  of technology consulting and implementation services.
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-12 mb-16">
                <div className="space-y-8">
                  <div className="bg-white p-8 rounded-xl shadow-lg">
                    <h3 className="text-2xl font-bold mb-4 text-blue-600">Our Foundation</h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Established with a vision to bridge the gap between cutting-edge technology and practical 
                      business solutions, Aethrix Systems was founded by a team of industry veterans who recognized 
                      the need for a more strategic, client-focused approach to technology consulting.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Our founders bring together over 50 years of combined experience from leading technology 
                      companies, having worked with organizations across every major industry vertical. This 
                      deep understanding of both technology and business operations forms the cornerstone of 
                      our consulting approach.
                    </p>
                  </div>

                  <div className="bg-white p-8 rounded-xl shadow-lg">
                    <h3 className="text-2xl font-bold mb-4 text-green-600">Our Philosophy</h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      We believe that technology should be an enabler, not a constraint. Our philosophy centers 
                      around understanding your business objectives first, then crafting technology solutions 
                      that directly support those goals. We don't believe in one-size-fits-all solutions.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Every engagement begins with a comprehensive discovery process where we immerse ourselves 
                      in your business context, understand your challenges, and identify opportunities for 
                      improvement that go beyond simple technology implementation.
                    </p>
                  </div>
                </div>

                <div className="space-y-8">
                  <div className="bg-white p-8 rounded-xl shadow-lg">
                    <h3 className="text-2xl font-bold mb-4 text-purple-600">Our Methodology</h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Our proven methodology combines industry best practices with innovative approaches 
                      tailored to each client's unique situation. We follow a structured process that 
                      ensures successful outcomes while maintaining flexibility to adapt to changing 
                      requirements.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center font-bold text-sm">1</div>
                        <span className="font-medium">Strategic Discovery & Analysis</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center font-bold text-sm">2</div>
                        <span className="font-medium">Solution Design & Architecture</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center font-bold text-sm">3</div>
                        <span className="font-medium">Iterative Implementation</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center font-bold text-sm">4</div>
                        <span className="font-medium">Testing & Quality Assurance</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center font-bold text-sm">5</div>
                        <span className="font-medium">Deployment & Change Management</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center font-bold text-sm">6</div>
                        <span className="font-medium">Ongoing Support & Optimization</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-8 rounded-xl shadow-lg">
                    <h3 className="text-2xl font-bold mb-4 text-orange-600">Our Commitment</h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      We stand behind our work with comprehensive warranties, ongoing support commitments, 
                      and transparent communication throughout every engagement. Your success is our success, 
                      and we're committed to building long-term partnerships rather than transactional relationships.
                    </p>
                    <div className="grid grid-cols-2 gap-4 mt-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-orange-600">99%</div>
                        <div className="text-sm text-gray-600">Client Retention Rate</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-orange-600">24/7</div>
                        <div className="text-sm text-gray-600">Support Availability</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Service Excellence */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-6">Service Excellence Across Every Engagement</h2>
                <p className="text-xl text-gray-700 max-w-4xl mx-auto">
                  Our comprehensive service portfolio is designed to address every aspect of your technology 
                  ecosystem, from strategic planning and system architecture to implementation, integration, 
                  and ongoing optimization. Each service area is backed by specialized expertise and proven methodologies.
                </p>
              </div>

              <div className="space-y-12">
                <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-8 rounded-xl">
                  <h3 className="text-2xl font-bold mb-6 text-blue-800">Enterprise Resource Planning (ERP) Excellence</h3>
                  <div className="grid lg:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold mb-4">Comprehensive ERP Services:</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Complete needs assessment and system selection consultation</li>
                        <li>• Custom Odoo ERP implementation with industry-specific modules</li>
                        <li>• Legacy system data migration and validation</li>
                        <li>• Third-party system integrations (CRM, e-commerce, accounting)</li>
                        <li>• Custom module development for unique business processes</li>
                        <li>• Comprehensive user training and change management</li>
                        <li>• Go-live support and post-implementation optimization</li>
                        <li>• Ongoing maintenance, updates, and enhancement services</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-4">Industry Specializations:</h4>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-white p-4 rounded-lg">
                          <h5 className="font-medium mb-2">Manufacturing</h5>
                          <ul className="text-sm text-gray-600 space-y-1">
                            <li>• MRP/MPS planning</li>
                            <li>• Quality management</li>
                            <li>• Supply chain optimization</li>
                            <li>• Shop floor integration</li>
                          </ul>
                        </div>
                        <div className="bg-white p-4 rounded-lg">
                          <h5 className="font-medium mb-2">Distribution</h5>
                          <ul className="text-sm text-gray-600 space-y-1">
                            <li>• Warehouse management</li>
                            <li>• Multi-location inventory</li>
                            <li>• Drop-shipping workflows</li>
                            <li>• Vendor managed inventory</li>
                          </ul>
                        </div>
                        <div className="bg-white p-4 rounded-lg">
                          <h5 className="font-medium mb-2">Professional Services</h5>
                          <ul className="text-sm text-gray-600 space-y-1">
                            <li>• Project management</li>
                            <li>• Time tracking</li>
                            <li>• Resource planning</li>
                            <li>• Client billing automation</li>
                          </ul>
                        </div>
                        <div className="bg-white p-4 rounded-lg">
                          <h5 className="font-medium mb-2">Retail</h5>
                          <ul className="text-sm text-gray-600 space-y-1">
                            <li>• POS integration</li>
                            <li>• Multi-channel inventory</li>
                            <li>• Customer loyalty programs</li>
                            <li>• Promotional management</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-green-100 p-8 rounded-xl">
                  <h3 className="text-2xl font-bold mb-6 text-green-800">Cloud Infrastructure & DevOps Mastery</h3>
                  <div className="grid lg:grid-cols-3 gap-8">
                    <div>
                      <h4 className="font-semibold mb-4">Cloud Migration Services:</h4>
                      <ul className="space-y-2 text-gray-700 text-sm">
                        <li>• Comprehensive cloud readiness assessment</li>
                        <li>• Multi-cloud strategy development</li>
                        <li>• Application modernization and refactoring</li>
                        <li>• Data migration with zero-downtime strategies</li>
                        <li>• Security and compliance framework implementation</li>
                        <li>• Performance optimization and monitoring setup</li>
                        <li>• Cost optimization and governance policies</li>
                        <li>• Disaster recovery and backup strategies</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-4">Infrastructure as Code:</h4>
                      <ul className="space-y-2 text-gray-700 text-sm">
                        <li>• Terraform and Pulumi expertise</li>
                        <li>• AWS CloudFormation templates</li>
                        <li>• Azure Resource Manager (ARM) templates</li>
                        <li>• Google Cloud Deployment Manager</li>
                        <li>• Kubernetes cluster provisioning</li>
                        <li>• Automated scaling policies</li>
                        <li>• Network architecture automation</li>
                        <li>• Security group and IAM automation</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-4">DevOps & CI/CD:</h4>
                      <ul className="space-y-2 text-gray-700 text-sm">
                        <li>• Jenkins, GitLab CI, GitHub Actions</li>
                        <li>• Containerization with Docker</li>
                        <li>• Kubernetes orchestration</li>
                        <li>• Automated testing pipelines</li>
                        <li>• Blue-green deployment strategies</li>
                        <li>• Monitoring and alerting setup</li>
                        <li>• Log aggregation and analysis</li>
                        <li>• Performance monitoring dashboards</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* At a Glance */}
        <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Aethrix Systems Performance Dashboard</h2>
              <p className="text-lg text-gray-700 text-center mb-12 max-w-3xl mx-auto">
                Our commitment to measurable results is reflected in our comprehensive performance metrics. 
                We track and report on every aspect of our service delivery to ensure continuous improvement 
                and client success.
              </p>
              <div className="overflow-x-auto">
                <Table>
                  <TableCaption>Comprehensive performance metrics and service excellence indicators across all practice areas.</TableCaption>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-1/5">Service Area</TableHead>
                      <TableHead className="w-2/5">Core Capabilities & Methodologies</TableHead>
                      <TableHead className="w-1/5">Success Metrics</TableHead>
                      <TableHead className="w-1/5">Client Satisfaction</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">ERP Solutions</TableCell>
                      <TableCell>
                        Comprehensive Odoo implementations with custom modules, seamless integrations, 
                        comprehensive UAT protocols, extensive user training programs, and dedicated ongoing support
                      </TableCell>
                      <TableCell>98% success rate, 6-12 week deployments, 40% efficiency gains</TableCell>
                      <TableCell>97% satisfaction rate</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Cloud & Infrastructure</TableCell>
                      <TableCell>
                        Multi-cloud migrations (AWS/GCP/Azure), Infrastructure as Code (Terraform), 
                        comprehensive monitoring solutions, advanced cost optimization, enterprise security implementation
                      </TableCell>
                      <TableCell>60% cost reduction, 99.98% uptime, 50% faster deployments</TableCell>
                      <TableCell>96% satisfaction rate</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Custom Development</TableCell>
                      <TableCell>
                        Modern React/TypeScript frontends, robust Node.js APIs, comprehensive CI/CD pipelines, 
                        extensive testing frameworks, advanced performance optimization techniques
                      </TableCell>
                      <TableCell>Sub-1.5s load times, 95%+ code coverage, 99.5% uptime</TableCell>
                      <TableCell>98% satisfaction rate</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">AI & Automation</TableCell>
                      <TableCell>
                        Advanced RAG systems, intelligent AI assistants, comprehensive process automation, 
                        rigorous model evaluation, continuous learning implementations
                      </TableCell>
                      <TableCell>70% efficiency gains, 6-month ROI, 85% automation success</TableCell>
                      <TableCell>94% satisfaction rate</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Cybersecurity</TableCell>
                      <TableCell>
                        Comprehensive security assessments, compliance framework development, 
                        24/7 incident response, advanced SIEM implementation, continuous monitoring
                      </TableCell>
                      <TableCell>100% compliance achievement, zero security breaches, 90% threat reduction</TableCell>
                      <TableCell>99% satisfaction rate</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Strategic Consulting</TableCell>
                      <TableCell>
                        Comprehensive technology strategy development, digital transformation roadmaps, 
                        vendor management optimization, technology due diligence, ROI analysis
                      </TableCell>
                      <TableCell>500+ projects completed, $25M+ cost savings generated, 300% avg ROI</TableCell>
                      <TableCell>95% satisfaction rate</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>

              {/* Performance Highlights */}
              <div className="grid lg:grid-cols-4 gap-6 mt-12">
                <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                  <div className="text-sm text-gray-600">Successful Project Deliveries</div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">$25M+</div>
                  <div className="text-sm text-gray-600">Client Cost Savings Generated</div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">99.8%</div>
                  <div className="text-sm text-gray-600">Average System Uptime</div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">97%</div>
                  <div className="text-sm text-gray-600">Overall Client Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <WhoWeHelp />
        <WhyAethrix />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
