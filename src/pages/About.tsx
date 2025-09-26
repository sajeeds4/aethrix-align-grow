import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
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
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-semibold mb-8 text-center">Our Mission & Vision</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-blue-200 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl text-blue-600">Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    To empower businesses with cutting-edge technology solutions that drive efficiency, 
                    innovation, and sustainable growth. We believe in creating partnerships that extend 
                    beyond project delivery, ensuring long-term success through continuous support and strategic guidance.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Innovation</Badge>
                    <Badge variant="outline">Partnership</Badge>
                    <Badge variant="outline">Excellence</Badge>
                    <Badge variant="outline">Growth</Badge>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-purple-200 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl text-purple-600">Our Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    To be the premier technology partner for mid-market and enterprise organizations, 
                    recognized for our ability to translate complex technical challenges into simple, 
                    scalable solutions that deliver measurable business value.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Leadership</Badge>
                    <Badge variant="outline">Scalability</Badge>
                    <Badge variant="outline">Value</Badge>
                    <Badge variant="outline">Trust</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-semibold mb-8 text-center">Our Story</h2>
            <div className="prose max-w-none text-gray-700">
              <p className="text-lg mb-6">
                Founded in 2018, Aethrix Systems emerged from a simple observation: businesses were struggling 
                to navigate the rapidly evolving technology landscape while maintaining focus on their core operations. 
                Our founders, seasoned technology professionals with decades of combined experience, saw an opportunity 
                to bridge this gap.
              </p>
              <p className="text-lg mb-6">
                What started as a small consulting practice has grown into a comprehensive technology solutions provider, 
                serving clients across healthcare, financial services, manufacturing, and retail sectors. Our growth 
                has been driven by a commitment to understanding each client's unique challenges and delivering solutions 
                that create lasting competitive advantages.
              </p>
              <p className="text-lg">
                Today, Aethrix Systems stands as a trusted partner to over 200 organizations, having successfully 
                delivered complex enterprise implementations, cloud transformations, and strategic technology initiatives 
                that have collectively generated over $50 million in operational savings and efficiency gains for our clients.
              </p>
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
