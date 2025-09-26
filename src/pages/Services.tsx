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
  ArrowRight,
  CheckCircle 
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Settings,
      title: "ERP Solutions",
      description: "Streamline workflows with Odoo ERP customization, integration, and support.",
      href: "/erp",
      features: [
        "Full Odoo ERP setup and integration",
        "Tailored modules for finance, sales, HR, inventory",
        "Customization for unique workflows",
        "Ongoing support and optimization"
      ],
      cta: "Get ERP Consultation"
    },
    {
      icon: Globe,
      title: "Web & App Development",
      description: "Modern, responsive platforms designed for scalability and user experience.",
      href: "/development",
      features: [
        "Custom websites and enterprise portals",
        "E-commerce solutions with seamless checkout",
        "Mobile-first responsive apps",
        "API integrations and backend systems"
      ],
      cta: "Schedule a Demo"
    },
    {
      icon: Cloud,
      title: "Cloud & Infrastructure",
      description: "Secure, reliable, and scalable deployments for businesses on the move.",
      href: "/cloud",
      features: [
        "Cloud migration and deployment",
        "Hybrid and multi-cloud setups",
        "Infrastructure monitoring & management",
        "Security and compliance built-in"
      ],
      cta: "Talk to Cloud Experts"
    },
    {
      icon: Brain,
      title: "AI & Automation",
      description: "Automate manual processes with intelligent, data-driven solutions.",
      href: "/ai",
      features: [
        "Automated reporting & analytics",
        "Intelligent chatbots & customer service tools",
        "Predictive forecasting & demand planning",
        "Workflow automation across departments"
      ],
      cta: "Get AI Consultation"
    },
    {
      icon: MessageSquare,
      title: "Consulting & Advisory",
      description: "Strategic guidance to align technology with business goals.",
      href: "/consulting",
      features: [
        "Technology strategy development",
        "Digital transformation roadmaps",
        "Process optimization consulting",
        "Vendor selection and management"
      ],
      cta: "Start Consultation"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-24 bg-gradient-hero text-primary-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-display mb-6">
                Our Services: Technology that{" "}
                <span className="text-accent">Works for You</span>
              </h1>
              <p className="text-subheadline mb-8">
                From strategy to deployment, Aethrix Systems provides full-stack digital 
                services that empower businesses to operate smarter.
              </p>
              <Button size="lg" variant="hero" asChild>
                <Link to="/consultation" className="flex items-center gap-2">
                  Get Free Consultation
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
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