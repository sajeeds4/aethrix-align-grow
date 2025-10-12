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
      description: "Transform your business operations with comprehensive ERP systems that integrate all aspects of your organization.",
      href: "/erp",
      features: [
        "Custom Odoo ERP implementation",
        "Industry-specific modules",
        "Real-time analytics dashboards",
        "Multi-company support"
      ],
      cta: "Explore ERP Solutions"
    },
    {
      icon: Globe,
      title: "Custom Development",
      description: "Build scalable, secure applications tailored to your unique business requirements and growth objectives.",
      href: "/development",
      features: [
        "Enterprise web applications",
        "Mobile-first applications",
        "E-commerce platforms",
        "API development"
      ],
      cta: "View Development Services"
    },
    {
      icon: Cloud,
      title: "Cloud & Infrastructure",
      description: "Accelerate your digital transformation with secure, scalable cloud solutions and modern infrastructure.",
      href: "/cloud",
      features: [
        "AWS, GCP, Azure migrations",
        "Hybrid cloud architecture",
        "DevOps and CI/CD pipelines",
        "Infrastructure as Code"
      ],
      cta: "Discover Cloud Solutions"
    },
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description: "Harness the power of artificial intelligence to automate processes, gain insights, and drive innovation.",
      href: "/ai",
      features: [
        "Custom AI model development",
        "Natural Language Processing",
        "Predictive analytics",
        "Intelligent automation"
      ],
      cta: "Explore AI Capabilities"
    },
    {
      icon: Shield,
      title: "Cybersecurity Services",
      description: "Protect your digital assets with comprehensive security solutions and expert guidance.",
      href: "/cybersecurity",
      features: [
        "Security assessments",
        "Zero-trust architecture",
        "Compliance frameworks",
        "Incident response"
      ],
      cta: "Get Security Assessment"
    },
    {
      icon: MessageSquare,
      title: "Strategic Consulting",
      description: "Align technology investments with business objectives through expert strategic guidance and planning.",
      href: "/consultation",
      features: [
        "Technology strategy",
        "Digital transformation",
        "Architecture review",
        "Change management"
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
                Comprehensive technology solutions designed to accelerate your business transformation
                and drive sustainable growth.
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
                  <h3 className="text-xl font-semibold mb-3">Proven Expertise</h3>
                  <p className="text-muted-foreground">
                    Over a decade of experience delivering complex technology solutions
                    across diverse industries and business sizes.
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-accent/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Security First</h3>
                  <p className="text-muted-foreground">
                    Every solution is built with security as a foundation,
                    ensuring your data and systems remain protected.
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-accent/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Settings className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">End-to-End Support</h3>
                  <p className="text-muted-foreground">
                    From initial consultation to ongoing maintenance,
                    we provide comprehensive support throughout your journey.
                  </p>
                </div>
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