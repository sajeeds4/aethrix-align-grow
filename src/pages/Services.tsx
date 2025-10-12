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

const Services = () => {
  const services = [
    {
      icon: Settings,
      title: "ERP Solutions",
      description: "Streamline your business operations with custom Odoo ERP implementations designed for growing companies.",
      href: "/erp",
      features: [
        "Odoo Community & Enterprise implementation",
        "Custom module development",
        "Data migration from spreadsheets & legacy systems",
        "Training and user support",
        "Integration with existing tools",
        "Ongoing maintenance and updates"
      ],
      cta: "Explore ERP Solutions"
    },
    {
      icon: Globe,
      title: "Custom Development",
      description: "Build modern web and mobile applications that grow with your business using the latest technologies.",
      href: "/development",
      features: [
        "React/Next.js web applications",
        "React Native mobile apps",
        "Progressive Web Apps (PWA)",
        "RESTful API development",
        "Database design and optimization",
        "Third-party integrations",
        "Performance optimization",
        "Responsive design for all devices"
      ],
      cta: "View Development Services"
    },
    {
      icon: Cloud,
      title: "Cloud & Infrastructure",
      description: "Modernize your infrastructure with cloud-native solutions that scale efficiently and reduce costs.",
      href: "/cloud",
      features: [
        "AWS, Google Cloud, Azure setup",
        "Docker containerization",
        "CI/CD pipeline implementation",
        "Database migration and hosting",
        "Monitoring and backup solutions",
        "Cost optimization strategies",
        "Security best practices",
        "24/7 system monitoring"
      ],
      cta: "Discover Cloud Solutions"
    },
    {
      icon: Brain,
      title: "AI & Automation",
      description: "Leverage AI and automation to improve efficiency and gain competitive insights for your business.",
      href: "/ai",
      features: [
        "Custom AI solutions using OpenAI/Claude",
        "Business process automation",
        "Data analysis and reporting",
        "Chatbot development",
        "Document processing automation",
        "Predictive analytics",
        "Natural language processing",
        "Machine learning model deployment"
      ],
      cta: "Explore AI Capabilities"
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Protect your business with essential security measures and compliance frameworks.",
      href: "/cybersecurity",
      features: [
        "Security audits and assessments",
        "GDPR compliance implementation",
        "Data backup and recovery",
        "User access management",
        "SSL certificates and encryption",
        "Vulnerability scanning",
        "Security training for teams",
        "Incident response planning"
      ],
      cta: "Get Security Assessment"
    },
    {
      icon: MessageSquare,
      title: "Technology Consulting",
      description: "Get expert guidance on technology decisions, architecture planning, and digital transformation.",
      href: "/consultation",
      features: [
        "Technology stack recommendations",
        "Digital transformation roadmaps",
        "Architecture design and review",
        "Vendor evaluation and selection",
        "Cost-benefit analysis",
        "Risk assessment and mitigation",
        "Team training and mentoring",
        "Ongoing technical advisory"
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
                Technology Solutions That{" "}
                <span className="text-yellow-300">Grow With Your Business</span>
              </h1>
              <p className="text-xl mb-8 leading-relaxed">
                From custom software development to ERP implementations and cloud solutions, 
                Aethrix Systems helps growing businesses leverage technology to streamline operations, 
                improve efficiency, and scale successfully.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" asChild>
                  <Link to="/consultation" className="flex items-center gap-2">
                    Get Free Consultation
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600" asChild>
                  <Link to="/case-studies">View Success Stories</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our Service Portfolio
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Practical technology solutions designed to help small and medium businesses
                streamline operations, reduce costs, and prepare for sustainable growth.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-l-4 border-l-accent">
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 bg-accent/10 rounded-lg">
                        <service.icon className="h-8 w-8 text-accent" />
                      </div>
                      <CardTitle className="text-xl group-hover:text-accent transition-smooth">
                        {service.title}
                      </CardTitle>
                    </div>
                    <CardDescription className="text-base leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Button 
                      className="w-full group-hover:bg-accent group-hover:text-accent-foreground transition-smooth" 
                      variant="outline" 
                      asChild
                    >
                      <Link to={service.href} className="flex items-center justify-center gap-2">
                        {service.cta}
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-24 bg-muted/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                Why Choose Aethrix Systems?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                <div className="text-center">
                  <div className="bg-accent/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Startup Agility</h3>
                  <p className="text-muted-foreground">
                    As a growing startup, we move fast and adapt quickly to your changing needs.
                    Direct communication with our technical team ensures rapid responses.
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-accent/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Modern Technologies</h3>
                  <p className="text-muted-foreground">
                    We use the latest, proven technologies and frameworks to build
                    future-ready solutions that scale with your business.
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-accent/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Settings className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Personalized Support</h3>
                  <p className="text-muted-foreground">
                    You're not just a client number. We build long-term partnerships
                    and provide dedicated support throughout your journey.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technology Stack Section */}
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Technologies We Work With
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We use proven, modern technologies to build reliable solutions that grow with your business.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4 text-accent">Frontend</h3>
                <div className="space-y-2">
                  <div className="bg-background border rounded-lg p-3 text-sm">React & Next.js</div>
                  <div className="bg-background border rounded-lg p-3 text-sm">TypeScript</div>
                  <div className="bg-background border rounded-lg p-3 text-sm">Tailwind CSS</div>
                  <div className="bg-background border rounded-lg p-3 text-sm">React Native</div>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 text-accent">Backend</h3>
                <div className="space-y-2">
                  <div className="bg-background border rounded-lg p-3 text-sm">Node.js</div>
                  <div className="bg-background border rounded-lg p-3 text-sm">Python</div>
                  <div className="bg-background border rounded-lg p-3 text-sm">PostgreSQL</div>
                  <div className="bg-background border rounded-lg p-3 text-sm">Supabase</div>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 text-accent">Cloud & DevOps</h3>
                <div className="space-y-2">
                  <div className="bg-background border rounded-lg p-3 text-sm">AWS</div>
                  <div className="bg-background border rounded-lg p-3 text-sm">Vercel</div>
                  <div className="bg-background border rounded-lg p-3 text-sm">Docker</div>
                  <div className="bg-background border rounded-lg p-3 text-sm">GitHub Actions</div>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 text-accent">ERP & Tools</h3>
                <div className="space-y-2">
                  <div className="bg-background border rounded-lg p-3 text-sm">Odoo ERP</div>
                  <div className="bg-background border rounded-lg p-3 text-sm">OpenAI API</div>
                  <div className="bg-background border rounded-lg p-3 text-sm">Stripe</div>
                  <div className="bg-background border rounded-lg p-3 text-sm">RESTful APIs</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-24 bg-muted/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                How We Work With You
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our streamlined process ensures clear communication and successful project delivery.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-accent/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-accent">1</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Discovery Call</h3>
                <p className="text-muted-foreground text-sm">
                  Free consultation to understand your needs, challenges, and goals.
                  We'll discuss timelines and provide initial recommendations.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-accent/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-accent">2</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Proposal & Planning</h3>
                <p className="text-muted-foreground text-sm">
                  Detailed proposal with scope, timeline, and pricing. We'll refine 
                  the plan together before starting development.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-accent/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-accent">3</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Development & Testing</h3>
                <p className="text-muted-foreground text-sm">
                  Regular check-ins and demos throughout development. You'll see 
                  progress and provide feedback at every milestone.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-accent/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-accent">4</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Launch & Support</h3>
                <p className="text-muted-foreground text-sm">
                  Smooth deployment with training and documentation. Ongoing 
                  support to ensure your solution continues to serve your needs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-accent text-accent-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Let's discuss how our comprehensive technology solutions can drive your success.
                Schedule a free consultation to explore the possibilities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" asChild>
                  <Link to="/consultation" className="flex items-center gap-2">
                    Schedule Free Consultation
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-accent-foreground text-accent-foreground hover:bg-accent-foreground hover:text-accent" asChild>
                  <Link to="/case-studies">View Our Work</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;