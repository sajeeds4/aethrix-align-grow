import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  Settings, 
  Globe, 
  Cloud, 
  Brain, 
  MessageSquare,
  ArrowRight 
} from "lucide-react";

const ServicesOverview = () => {
  const services = [
    {
      icon: Settings,
      title: "ERP Solutions",
      description: "Streamline workflows with Odoo ERP customization, integration, and support.",
      href: "/erp",
      features: ["Full Odoo ERP setup", "Custom modules", "Integration support"]
    },
    {
      icon: Globe,
      title: "Web & App Development",
      description: "Modern, responsive platforms designed for scalability and user experience.",
      href: "/development",
      features: ["Custom websites", "Mobile apps", "E-commerce solutions"]
    },
    {
      icon: Cloud,
      title: "Cloud & Infrastructure",
      description: "Secure, reliable, and scalable deployments for businesses on the move.",
      href: "/cloud",
      features: ["Cloud migration", "Infrastructure monitoring", "Security built-in"]
    },
    {
      icon: Brain,
      title: "AI & Automation",
      description: "Automate manual processes with intelligent, data-driven solutions.",
      href: "/ai",
      features: ["Automated reporting", "Intelligent chatbots", "Workflow automation"]
    },
    {
      icon: MessageSquare,
      title: "Consulting & Advisory",
      description: "Strategic guidance to align technology with business goals.",
      href: "/consulting",
      features: ["Technology strategy", "Digital transformation", "Process optimization"]
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-headline mb-6">
            Our Services: Technology that{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Works for You
            </span>
          </h2>
          <p className="text-subheadline">
            From strategy to deployment, Aethrix Systems provides full-stack digital 
            services that empower businesses to operate smarter.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={service.title} 
                className="group hover:shadow-medium transition-smooth border-border hover:border-accent/50 bg-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="space-y-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-bounce">
                    <IconComponent className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <CardTitle className="text-xl group-hover:text-accent transition-smooth">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="mt-2">
                      {service.description}
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button variant="ghost" className="w-full group/btn" asChild>
                    <Link to={service.href} className="flex items-center justify-center gap-2">
                      Learn More
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-smooth" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Button size="lg" variant="cta" asChild>
            <Link to="/services" className="flex items-center gap-2">
              View All Services
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;