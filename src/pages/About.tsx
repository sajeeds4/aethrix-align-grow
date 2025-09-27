import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

export default function About() {
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
              <BreadcrumbPage>About Us</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Hero Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              About Aethrix Systems
            </h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              We are technology innovators dedicated to transforming businesses through strategic digital solutions. 
              With deep expertise across cloud platforms, enterprise systems, and emerging technologies, we partner 
              with organizations to achieve sustainable growth and operational excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Our Mission */}
            {/* Company Culture & Values */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-semibold mb-12 text-center">Culture & Core Values</h2>
            
            <div className="grid lg:grid-cols-2 gap-12 mb-12">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Our Culture</h3>
                <p className="text-gray-700 mb-6">
                  At Aethrix Systems, we've cultivated a culture that balances innovation with reliability, 
                  technical excellence with business pragmatism, and individual growth with collective success. 
                  Our team environment encourages continuous learning, creative problem-solving, and collaborative 
                  approach to client challenges.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold">Continuous Learning</h4>
                      <p className="text-sm text-gray-600">We invest in our team's growth through training, certifications, and conference attendance</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold">Innovation Focus</h4>
                      <p className="text-sm text-gray-600">20% of our time is dedicated to exploring emerging technologies and improving our methodologies</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold">Work-Life Integration</h4>
                      <p className="text-sm text-gray-600">Flexible work arrangements and mental health support ensure sustainable high performance</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-6">Core Values</h3>
                <div className="grid gap-6">
                  <Card>
                    <CardContent className="p-6">
                      <h4 className="font-bold text-lg mb-2 text-blue-600">Excellence</h4>
                      <p className="text-sm text-gray-700">
                        We pursue excellence in everything we do, from technical implementation to client communication. 
                        Our commitment to quality has earned us a 98% client satisfaction rate and industry recognition.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h4 className="font-bold text-lg mb-2 text-green-600">Integrity</h4>
                      <p className="text-sm text-gray-700">
                        Transparency, honesty, and ethical business practices guide all our relationships. 
                        We provide realistic timelines, honest assessments, and maintain confidentiality at all times.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h4 className="font-bold text-lg mb-2 text-purple-600">Partnership</h4>
                      <p className="text-sm text-gray-700">
                        We view ourselves as true partners in our clients' success, not just vendors. 
                        This partnership mindset drives us to understand deeply and deliver lasting value.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold mb-6 text-center">Recognition & Achievements</h3>
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">98%</div>
                  <p className="font-medium">Client Satisfaction</p>
                  <p className="text-sm text-gray-600">Consistent high ratings across all projects</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-600 mb-2">24</div>
                  <p className="font-medium">Industry Certifications</p>
                  <p className="text-sm text-gray-600">Team-wide expertise recognition</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-600 mb-2">15+</div>
                  <p className="font-medium">Industry Awards</p>
                  <p className="text-sm text-gray-600">Excellence in technology solutions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise & Capabilities */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-semibold mb-12 text-center">Technical Expertise & Capabilities</h2>
            
            <div className="mb-12">
              <h3 className="text-2xl font-semibold mb-8 text-center">Technology Specializations</h3>
              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold mb-4 text-lg text-blue-600">Enterprise Systems</h4>
                  <div className="space-y-3">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h5 className="font-semibold mb-2">ERP Solutions</h5>
                      <p className="text-sm text-gray-700 mb-2">SAP, Oracle, Microsoft Dynamics, NetSuite implementations and optimizations</p>
                      <div className="flex flex-wrap gap-1">
                        <Badge variant="outline" className="text-xs">SAP S/4HANA</Badge>
                        <Badge variant="outline" className="text-xs">Oracle Cloud</Badge>
                        <Badge variant="outline" className="text-xs">Dynamics 365</Badge>
                        <Badge variant="outline" className="text-xs">NetSuite</Badge>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h5 className="font-semibold mb-2">CRM & Sales Automation</h5>
                      <p className="text-sm text-gray-700 mb-2">Customer relationship management and sales process optimization</p>
                      <div className="flex flex-wrap gap-1">
                        <Badge variant="outline" className="text-xs">Salesforce</Badge>
                        <Badge variant="outline" className="text-xs">HubSpot</Badge>
                        <Badge variant="outline" className="text-xs">Microsoft CRM</Badge>
                        <Badge variant="outline" className="text-xs">Custom Solutions</Badge>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-bold mb-4 text-lg text-green-600">Cloud & Infrastructure</h4>
                  <div className="space-y-3">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h5 className="font-semibold mb-2">Multi-Cloud Expertise</h5>
                      <p className="text-sm text-gray-700 mb-2">AWS, Azure, GCP migration and optimization strategies</p>
                      <div className="flex flex-wrap gap-1">
                        <Badge variant="outline" className="text-xs">AWS</Badge>
                        <Badge variant="outline" className="text-xs">Microsoft Azure</Badge>
                        <Badge variant="outline" className="text-xs">Google Cloud</Badge>
                        <Badge variant="outline" className="text-xs">Hybrid Solutions</Badge>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h5 className="font-semibold mb-2">DevOps & Automation</h5>
                      <p className="text-sm text-gray-700 mb-2">CI/CD pipelines, infrastructure as code, and deployment automation</p>
                      <div className="flex flex-wrap gap-1">
                        <Badge variant="outline" className="text-xs">Docker</Badge>
                        <Badge variant="outline" className="text-xs">Kubernetes</Badge>
                        <Badge variant="outline" className="text-xs">Terraform</Badge>
                        <Badge variant="outline" className="text-xs">Jenkins</Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-semibold mb-8 text-center">Advanced Capabilities</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="shadow-lg">
                  <CardContent className="p-6">
                    <h4 className="font-bold text-lg mb-3 text-purple-600">AI & Machine Learning</h4>
                    <p className="text-sm text-gray-700 mb-4">
                      Predictive analytics, natural language processing, computer vision, and intelligent automation solutions
                    </p>
                    <div className="space-y-2 text-xs">
                      <div>• TensorFlow & PyTorch implementations</div>
                      <div>• Azure ML & AWS SageMaker</div>
                      <div>• Computer vision & NLP solutions</div>
                      <div>• Predictive maintenance systems</div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-lg">
                  <CardContent className="p-6">
                    <h4 className="font-bold text-lg mb-3 text-orange-600">Data Analytics & BI</h4>
                    <p className="text-sm text-gray-700 mb-4">
                      Data warehousing, real-time analytics, business intelligence, and data visualization solutions
                    </p>
                    <div className="space-y-2 text-xs">
                      <div>• Power BI & Tableau expertise</div>
                      <div>• Data warehouse architecture</div>
                      <div>• Real-time streaming analytics</div>
                      <div>• Self-service BI platforms</div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-lg">
                  <CardContent className="p-6">
                    <h4 className="font-bold text-lg mb-3 text-red-600">Security & Compliance</h4>
                    <p className="text-sm text-gray-700 mb-4">
                      Cybersecurity frameworks, compliance management, identity & access management, and risk assessment
                    </p>
                    <div className="space-y-2 text-xs">
                      <div>• ISO 27001 & NIST frameworks</div>
                      <div>• GDPR & HIPAA compliance</div>
                      <div>• Identity & access management</div>
                      <div>• Security assessment & monitoring</div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-green-50 p-8 rounded-xl">
              <h3 className="text-2xl font-semibold mb-6 text-center">Proprietary Methodologies</h3>
              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold mb-3">ALIGN Framework</h4>
                  <p className="text-sm text-gray-700 mb-3">
                    Our proprietary implementation methodology that ensures technology solutions align perfectly 
                    with business objectives while minimizing risk and maximizing ROI.
                  </p>
                  <div className="space-y-1 text-xs">
                    <div>• <strong>A</strong>ssess current state and requirements</div>
                    <div>• <strong>L</strong>everage best practices and proven patterns</div>
                    <div>• <strong>I</strong>mplement with agile, iterative approach</div>
                    <div>• <strong>G</strong>overn with continuous monitoring</div>
                    <div>• <strong>N</strong>urture ongoing optimization and growth</div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">GROW Optimization</h4>
                  <p className="text-sm text-gray-700 mb-3">
                    Our systematic approach to continuous improvement that helps organizations scale their 
                    technology investments and adapt to changing business needs.
                  </p>
                  <div className="space-y-1 text-xs">
                    <div>• <strong>G</strong>enerate insights through data analysis</div>
                    <div>• <strong>R</strong>ecommend optimization opportunities</div>
                    <div>• <strong>O</strong>ptimize processes and systems</div>
                    <div>• <strong>W</strong>atch and measure improvement outcomes</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-semibold mb-8 text-center">Our Story & Evolution</h2>
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="prose max-w-none text-gray-700">
                  <h3 className="text-2xl font-semibold mb-4 text-blue-600">The Beginning (2018-2019)</h3>
                  <p className="text-lg mb-4">
                    Founded in 2018, Aethrix Systems emerged from a simple observation: businesses were struggling 
                    to navigate the rapidly evolving technology landscape while maintaining focus on their core operations. 
                    Our founders, seasoned technology professionals with decades of combined experience at companies like 
                    IBM, Microsoft, and Oracle, saw an opportunity to bridge this gap.
                  </p>
                  <p className="mb-4">
                    Starting with a focus on ERP implementations and cloud migrations, we quickly distinguished ourselves 
                    through our commitment to understanding business context before proposing technical solutions. Our first 
                    major success was helping a mid-size manufacturing company reduce operational costs by 40% through a 
                    comprehensive ERP transformation.
                  </p>

                  <h3 className="text-2xl font-semibold mb-4 text-green-600 mt-8">Growth & Expansion (2020-2022)</h3>
                  <p className="mb-4">
                    As word spread about our results-driven approach, we expanded our team and service offerings. 
                    The pandemic accelerated digital transformation needs, and we responded by developing specialized 
                    capabilities in remote work technologies, cloud-first architectures, and digital business process automation.
                  </p>
                  <p className="mb-4">
                    During this period, we established partnerships with major cloud providers and technology vendors, 
                    earning certifications and preferred partner status that enhanced our ability to deliver enterprise-grade solutions. 
                    Our client base grew to over 150 organizations across diverse industries.
                  </p>
                </div>
              </div>

              <div className="space-y-8">
                <div className="prose max-w-none text-gray-700">
                  <h3 className="text-2xl font-semibold mb-4 text-purple-600">Innovation & Leadership (2023-Present)</h3>
                  <p className="mb-4">
                    Today, Aethrix Systems stands as a recognized leader in enterprise technology solutions. We've 
                    successfully delivered over 500 projects, generating more than $75 million in operational savings 
                    and efficiency gains for our clients. Our expertise now spans artificial intelligence, machine learning, 
                    advanced automation, and strategic technology consulting.
                  </p>
                  <p className="mb-4">
                    Our innovation lab continues to explore emerging technologies, ensuring our clients stay ahead of 
                    industry trends. We've developed proprietary frameworks and methodologies that accelerate implementation 
                    timelines while reducing risk and ensuring successful outcomes.
                  </p>

                  <h3 className="text-2xl font-semibold mb-4 text-orange-600 mt-8">Looking Forward</h3>
                  <p className="mb-4">
                    As we look to the future, we remain committed to our founding principles while continuously evolving 
                    our capabilities. Our roadmap includes expanded AI/ML services, sustainability-focused solutions, 
                    and deeper industry specializations. We're not just keeping pace with technology evolution—we're 
                    helping to define it.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl">
                  <h4 className="font-semibold mb-4">Key Milestones</h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-sm"><strong>2018:</strong> Company founded, first ERP implementation</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm"><strong>2020:</strong> Cloud practice established, 50+ clients</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span className="text-sm"><strong>2022:</strong> AI/ML capabilities launched, 200+ clients</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      <span className="text-sm"><strong>2024:</strong> Innovation lab established, 500+ projects delivered</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-semibold mb-12 text-center">Leadership Team</h2>
            <p className="text-lg text-gray-700 text-center mb-12 max-w-3xl mx-auto">
              Our leadership team brings together decades of experience from leading technology companies, 
              combining deep technical expertise with strategic business acumen to guide our clients through 
              complex digital transformations.
            </p>
            
            <div className="grid lg:grid-cols-3 gap-8 mb-12">
              <Card className="shadow-xl hover:shadow-2xl transition-shadow">
                <CardContent className="p-8 text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-3xl text-white font-bold">JD</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">John Davidson</h3>
                  <p className="text-blue-600 font-medium mb-4">Chief Executive Officer</p>
                  <p className="text-gray-600 text-sm mb-4">
                    Former VP of Technology at Fortune 500 company with 20+ years leading digital transformations. 
                    Specializes in enterprise architecture and strategic technology planning.
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    <Badge variant="outline">Strategy</Badge>
                    <Badge variant="outline">Leadership</Badge>
                    <Badge variant="outline">Enterprise Architecture</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-xl hover:shadow-2xl transition-shadow">
                <CardContent className="p-8 text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-3xl text-white font-bold">SP</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Sarah Peterson</h3>
                  <p className="text-green-600 font-medium mb-4">Chief Technology Officer</p>
                  <p className="text-gray-600 text-sm mb-4">
                    Former Principal Engineer at Microsoft with expertise in cloud platforms, AI/ML, and scalable 
                    system architectures. Leads our technical innovation initiatives.
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    <Badge variant="outline">Cloud Architecture</Badge>
                    <Badge variant="outline">AI/ML</Badge>
                    <Badge variant="outline">Innovation</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-xl hover:shadow-2xl transition-shadow">
                <CardContent className="p-8 text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-3xl text-white font-bold">MR</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Michael Rodriguez</h3>
                  <p className="text-purple-600 font-medium mb-4">VP of Client Success</p>
                  <p className="text-gray-600 text-sm mb-4">
                    Former Director of Consulting at Deloitte with 15+ years in client relationship management 
                    and project delivery. Ensures exceptional client outcomes and satisfaction.
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    <Badge variant="outline">Client Relations</Badge>
                    <Badge variant="outline">Project Management</Badge>
                    <Badge variant="outline">Quality Assurance</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="bg-gradient-to-r from-gray-50 to-blue-50 p-8 rounded-xl">
              <h3 className="text-2xl font-semibold mb-6 text-center">Advisory Board</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold mb-2">Industry Expertise</h4>
                  <p className="text-gray-700 text-sm mb-4">
                    Our advisory board includes former executives from leading technology companies and industry veterans 
                    who provide strategic guidance and ensure we stay at the forefront of technological innovation.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div>• Former CTO of major ERP vendor (15+ years)</div>
                    <div>• Ex-AWS Principal Solutions Architect (12+ years)</div>
                    <div>• Former Healthcare IT Director (20+ years)</div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Strategic Guidance</h4>
                  <p className="text-gray-700 text-sm mb-4">
                    Our advisors help shape our strategic direction, ensure our solutions meet evolving market needs, 
                    and provide insights into emerging technology trends and industry best practices.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div>• Technology trend analysis and forecasting</div>
                    <div>• Market opportunity identification</div>
                    <div>• Strategic partnership development</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-semibold mb-12 text-center">Our Approach</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <CardTitle>Strategic Alignment</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Every technology initiative begins with understanding your business objectives. 
                    We ensure our solutions directly support your strategic goals and deliver measurable ROI.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="text-center shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <CardTitle>Agile Delivery</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Our proven methodologies emphasize rapid prototyping, iterative development, 
                    and continuous feedback to ensure solutions meet evolving business needs.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="text-center shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🤝</span>
                  </div>
                  <CardTitle>Partnership Focus</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    We view every engagement as a long-term partnership. Our success is measured 
                    by your success, and we're committed to your growth beyond project completion.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-semibold mb-8 text-center">Core Values</h2>
            <div className="overflow-x-auto">
              <Table>
                <TableCaption>The principles that guide every aspect of our work and client relationships.</TableCaption>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-1/4">Value</TableHead>
                    <TableHead className="w-3/4">How We Live It</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Excellence</TableCell>
                    <TableCell>
                      We maintain the highest standards in every deliverable, from initial strategy through final implementation. 
                      Our quality assurance processes ensure robust, scalable solutions that exceed expectations.
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Transparency</TableCell>
                    <TableCell>
                      Clear communication, honest assessments, and regular progress updates build trust. 
                      We provide detailed documentation and knowledge transfer to ensure client independence.
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Innovation</TableCell>
                    <TableCell>
                      We stay at the forefront of technology trends, continuously evaluating emerging tools and methodologies 
                      to provide clients with competitive advantages through strategic technology adoption.
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Integrity</TableCell>
                    <TableCell>
                      Ethical business practices, data security, and client confidentiality are non-negotiable. 
                      We act as trusted advisors, always prioritizing client interests above short-term gains.
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Collaboration</TableCell>
                    <TableCell>
                      Success requires teamwork between our experts and your internal teams. 
                      We facilitate knowledge sharing and provide training to ensure sustainable solutions.
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Aethrix */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-semibold mb-12 text-center">Why Choose Aethrix Systems</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg">Proven Track Record</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-gray-600 space-y-2">
                    <li>• 200+ successful projects delivered</li>
                    <li>• 95% client satisfaction rate</li>
                    <li>• $50M+ in client cost savings</li>
                    <li>• 6+ years of continuous growth</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg">Deep Expertise</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Certified cloud architects</li>
                    <li>• Enterprise security specialists</li>
                    <li>• AI/ML implementation experts</li>
                    <li>• Industry-specific knowledge</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg">Comprehensive Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-gray-600 space-y-2">
                    <li>• 24/7 technical support</li>
                    <li>• Ongoing maintenance & updates</li>
                    <li>• Strategic technology planning</li>
                    <li>• Training & knowledge transfer</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-semibold mb-8 text-center">Our Technology Stack</h2>
            <div className="overflow-x-auto">
              <Table>
                <TableCaption>We select proven technologies that deliver reliable, scalable outcomes.</TableCaption>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-1/4">Category</TableHead>
                    <TableHead className="w-1/2">Primary Tools & Platforms</TableHead>
                    <TableHead className="w-1/4">Alternatives</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Frontend</TableCell>
                    <TableCell>React, TypeScript, Tailwind CSS, Radix UI/Shadcn</TableCell>
                    <TableCell>Next.js, Vue.js, Angular</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Backend</TableCell>
                    <TableCell>Node.js (Express/NestJS), Python (FastAPI/Django)</TableCell>
                    <TableCell>Java Spring, .NET Core</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Databases</TableCell>
                    <TableCell>PostgreSQL, MongoDB, Redis, Elasticsearch</TableCell>
                    <TableCell>MySQL, DynamoDB</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Cloud Platforms</TableCell>
                    <TableCell>AWS, Google Cloud Platform (GCP)</TableCell>
                    <TableCell>Microsoft Azure</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">DevOps & Infrastructure</TableCell>
                    <TableCell>Docker, Kubernetes, Terraform, Jenkins, GitHub Actions</TableCell>
                    <TableCell>Pulumi, Helm, GitLab CI</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">AI/ML & Analytics</TableCell>
                    <TableCell>OpenAI APIs, LangChain, TensorFlow, Jupyter</TableCell>
                    <TableCell>Local LLMs, PyTorch</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">ERP & Business</TableCell>
                    <TableCell>Odoo, Salesforce, Microsoft Dynamics</TableCell>
                    <TableCell>SAP, NetSuite</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </section>

      {/* Global Presence & Partnerships */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-semibold mb-12 text-center">Global Presence & Strategic Partnerships</h2>
            
            <div className="grid lg:grid-cols-2 gap-12 mb-12">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Geographic Reach</h3>
                <p className="text-gray-700 mb-6">
                  While headquartered in North America, Aethrix Systems serves clients globally through our 
                  distributed team model and strategic partnerships. Our approach combines local market knowledge 
                  with global best practices to deliver exceptional results worldwide.
                </p>
                
                <div className="space-y-4">
                  <Card>
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-blue-600 mb-2">North America</h4>
                      <p className="text-sm text-gray-700">Primary market with 300+ active clients across US and Canada</p>
                      <div className="mt-2 text-xs text-gray-600">
                        Key cities: New York, Toronto, San Francisco, Chicago, Dallas
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-green-600 mb-2">Europe</h4>
                      <p className="text-sm text-gray-700">Growing presence with 50+ clients, GDPR compliance expertise</p>
                      <div className="mt-2 text-xs text-gray-600">
                        Key markets: UK, Germany, Netherlands, Nordics
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-purple-600 mb-2">Asia-Pacific</h4>
                      <p className="text-sm text-gray-700">Strategic partnerships enabling 24/7 support coverage</p>
                      <div className="mt-2 text-xs text-gray-600">
                        Partner network: Australia, Singapore, India, Japan
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-6">Technology Partnerships</h3>
                <p className="text-gray-700 mb-6">
                  Our strategic partnerships with leading technology vendors ensure we deliver cutting-edge solutions 
                  with the highest levels of expertise and support. These partnerships provide our clients with 
                  preferred pricing, early access to new features, and direct support channels.
                </p>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-blue-600">Premier Partnerships</h4>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-white p-3 rounded-lg border text-center">
                        <div className="font-medium text-sm">Microsoft</div>
                        <div className="text-xs text-gray-600">Gold Partner</div>
                      </div>
                      <div className="bg-white p-3 rounded-lg border text-center">
                        <div className="font-medium text-sm">AWS</div>
                        <div className="text-xs text-gray-600">Advanced Partner</div>
                      </div>
                      <div className="bg-white p-3 rounded-lg border text-center">
                        <div className="font-medium text-sm">Salesforce</div>
                        <div className="text-xs text-gray-600">Platinum Partner</div>
                      </div>
                      <div className="bg-white p-3 rounded-lg border text-center">
                        <div className="font-medium text-sm">SAP</div>
                        <div className="text-xs text-gray-600">Silver Partner</div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 text-green-600">Specialized Alliances</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between items-center">
                        <span>Oracle Cloud Infrastructure</span>
                        <Badge variant="outline">Certified</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Google Cloud Platform</span>
                        <Badge variant="outline">Partner</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Tableau Software</span>
                        <Badge variant="outline">Certified</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Snowflake</span>
                        <Badge variant="outline">Premier</Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold mb-6 text-center">Partnership Benefits</h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <h4 className="font-semibold mb-2">Preferred Pricing</h4>
                  <p className="text-sm text-gray-600">
                    Access to volume discounts and special pricing tiers passed directly to our clients
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🚀</span>
                  </div>
                  <h4 className="font-semibold mb-2">Early Access</h4>
                  <p className="text-sm text-gray-600">
                    Beta access to new features and technologies before general availability
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🔧</span>
                  </div>
                  <h4 className="font-semibold mb-2">Direct Support</h4>
                  <p className="text-sm text-gray-600">
                    Direct escalation channels and dedicated support for complex implementations
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Innovation & Research */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-semibold mb-12 text-center">Innovation Lab & Research</h2>
            
            <div className="mb-12">
              <div className="text-center mb-8">
                <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                  Our dedicated Innovation Lab explores emerging technologies and develops next-generation 
                  solutions that keep our clients ahead of industry trends. We invest 15% of our revenue 
                  in research and development, ensuring continuous innovation.
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-semibold mb-6">Current Research Areas</h3>
                  <div className="space-y-4">
                    <Card className="border-l-4 border-l-blue-500">
                      <CardContent className="p-6">
                        <h4 className="font-semibold mb-2">Quantum Computing Applications</h4>
                        <p className="text-sm text-gray-700 mb-3">
                          Exploring quantum algorithms for optimization problems in supply chain and logistics
                        </p>
                        <Badge variant="outline" className="mr-2">IBM Qiskit</Badge>
                        <Badge variant="outline">Google Cirq</Badge>
                      </CardContent>
                    </Card>

                    <Card className="border-l-4 border-l-green-500">
                      <CardContent className="p-6">
                        <h4 className="font-semibold mb-2">Edge AI & IoT Integration</h4>
                        <p className="text-sm text-gray-700 mb-3">
                          Developing intelligent edge computing solutions for real-time decision making
                        </p>
                        <Badge variant="outline" className="mr-2">NVIDIA Jetson</Badge>
                        <Badge variant="outline">Intel OpenVINO</Badge>
                      </CardContent>
                    </Card>

                    <Card className="border-l-4 border-l-purple-500">
                      <CardContent className="p-6">
                        <h4 className="font-semibold mb-2">Blockchain & DLT</h4>
                        <p className="text-sm text-gray-700 mb-3">
                          Supply chain transparency and secure multi-party computation protocols
                        </p>
                        <Badge variant="outline" className="mr-2">Hyperledger</Badge>
                        <Badge variant="outline">Ethereum</Badge>
                      </CardContent>
                    </Card>

                    <Card className="border-l-4 border-l-orange-500">
                      <CardContent className="p-6">
                        <h4 className="font-semibold mb-2">Autonomous Systems</h4>
                        <p className="text-sm text-gray-700 mb-3">
                          Self-healing infrastructure and autonomous database management systems
                        </p>
                        <Badge variant="outline" className="mr-2">Kubernetes</Badge>
                        <Badge variant="outline">Oracle Autonomous</Badge>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-6">Innovation Outcomes</h3>
                  <div className="space-y-6">
                    <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-xl">
                      <h4 className="font-bold mb-3">Patents & Intellectual Property</h4>
                      <div className="grid grid-cols-2 gap-4 text-center">
                        <div>
                          <div className="text-2xl font-bold text-blue-600">8</div>
                          <div className="text-sm">Patents Filed</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-blue-600">3</div>
                          <div className="text-sm">Patents Granted</div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-xl">
                      <h4 className="font-bold mb-3">Open Source Contributions</h4>
                      <div className="space-y-2 text-sm">
                        <div>• TensorFlow optimization libraries</div>
                        <div>• Kubernetes operators for enterprise systems</div>
                        <div>• React components for data visualization</div>
                        <div>• Python frameworks for ML workflows</div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-6 rounded-xl">
                      <h4 className="font-bold mb-3">Research Publications</h4>
                      <div className="space-y-2 text-sm">
                        <div>• "AI-Driven Enterprise Architecture" - IEEE</div>
                        <div>• "Quantum Algorithms for Logistics" - ACM</div>
                        <div>• "Edge Computing Patterns" - Springer</div>
                        <div>• "Autonomous Database Management" - VLDB</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-gray-50 to-blue-50 p-8 rounded-xl">
              <h3 className="text-2xl font-semibold mb-6 text-center">Future Technology Roadmap</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <Card>
                  <CardContent className="p-6">
                    <h4 className="font-bold mb-3 text-blue-600">2024-2025</h4>
                    <div className="space-y-2 text-sm">
                      <div>• Advanced AI/ML Platform Launch</div>
                      <div>• Quantum Computing Pilot Programs</div>
                      <div>• Edge AI Solutions Portfolio</div>
                      <div>• Sustainability Analytics Suite</div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h4 className="font-bold mb-3 text-green-600">2025-2026</h4>
                    <div className="space-y-2 text-sm">
                      <div>• Autonomous Enterprise Systems</div>
                      <div>• Digital Twin Platforms</div>
                      <div>• Advanced Blockchain Applications</div>
                      <div>• Neuromorphic Computing Research</div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h4 className="font-bold mb-3 text-purple-600">2026+</h4>
                    <div className="space-y-2 text-sm">
                      <div>• Quantum-Classical Hybrid Systems</div>
                      <div>• Brain-Computer Interface Applications</div>
                      <div>• Sustainable Computing Solutions</div>
                      <div>• Space-Based Computing Infrastructure</div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-semibold mb-12 text-center">Join Our Team</h2>
            
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Career Opportunities</h3>
                <p className="text-gray-700 mb-6">
                  We're always looking for talented individuals who share our passion for technology excellence 
                  and client success. Join our team of innovators and help shape the future of enterprise technology.
                </p>

                <div className="space-y-4 mb-8">
                  <Card>
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold">Senior Cloud Architect</h4>
                        <Badge variant="outline">Remote</Badge>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">Lead cloud transformation initiatives for Fortune 500 clients</p>
                      <div className="flex flex-wrap gap-1">
                        <Badge variant="outline" className="text-xs">AWS</Badge>
                        <Badge variant="outline" className="text-xs">Azure</Badge>
                        <Badge variant="outline" className="text-xs">Kubernetes</Badge>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold">AI/ML Solutions Engineer</h4>
                        <Badge variant="outline">Hybrid</Badge>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">Develop and deploy AI solutions across various industries</p>
                      <div className="flex flex-wrap gap-1">
                        <Badge variant="outline" className="text-xs">Python</Badge>
                        <Badge variant="outline" className="text-xs">TensorFlow</Badge>
                        <Badge variant="outline" className="text-xs">PyTorch</Badge>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold">Enterprise Solutions Consultant</h4>
                        <Badge variant="outline">Travel Required</Badge>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">Drive digital transformation strategies for key accounts</p>
                      <div className="flex flex-wrap gap-1">
                        <Badge variant="outline" className="text-xs">SAP</Badge>
                        <Badge variant="outline" className="text-xs">Salesforce</Badge>
                        <Badge variant="outline" className="text-xs">Strategy</Badge>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Button className="w-full" size="lg">
                  View All Openings
                </Button>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-6">Why Choose Aethrix</h3>
                
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <h4 className="font-bold mb-3 text-blue-600">Professional Growth</h4>
                    <p className="text-sm text-gray-700 mb-3">
                      Continuous learning opportunities, conference attendance, and certification support
                    </p>
                    <div className="grid grid-cols-2 gap-4 text-center text-xs">
                      <div>
                        <div className="font-bold text-lg text-blue-600">$5,000</div>
                        <div>Annual Learning Budget</div>
                      </div>
                      <div>
                        <div className="font-bold text-lg text-blue-600">100%</div>
                        <div>Certification Coverage</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <h4 className="font-bold mb-3 text-green-600">Work-Life Balance</h4>
                    <div className="space-y-2 text-sm text-gray-700">
                      <div>• Flexible working arrangements</div>
                      <div>• Unlimited PTO policy</div>
                      <div>• Mental health support</div>
                      <div>• Wellness programs</div>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <h4 className="font-bold mb-3 text-purple-600">Compensation & Benefits</h4>
                    <div className="space-y-2 text-sm text-gray-700">
                      <div>• Competitive salary + equity</div>
                      <div>• Comprehensive health coverage</div>
                      <div>• Retirement planning (401k + match)</div>
                      <div>• Performance bonuses</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-semibold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-700 mb-8">
              Let's discuss how Aethrix Systems can help you achieve your technology goals and drive sustainable growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/consultation" 
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Schedule a Consultation
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
