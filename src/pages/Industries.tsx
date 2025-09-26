import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Factory, ShoppingCart, Heart, Truck, ArrowRight } from "lucide-react";

const Industries = () => {
  const industries = [
    {
      icon: Factory,
      title: "Manufacturing",
      description: "ERP for production planning and supply chain optimization",
      challenge: "Disconnected systems causing production delays and inventory issues",
      solution: "Integrated ERP connecting production, inventory, and quality control",
      href: "/consultation"
    },
    {
      icon: ShoppingCart,
      title: "Retail & E-Commerce",
      description: "Unified platforms for inventory, sales, and customer engagement",
      challenge: "Managing multiple sales channels with inconsistent inventory data",
      solution: "Omnichannel platform with real-time inventory and customer insights",
      href: "/consultation"
    },
    {
      icon: Heart,
      title: "Healthcare",
      description: "Secure systems for patient data and operational efficiency",
      challenge: "Complex compliance requirements and fragmented patient data",
      solution: "HIPAA-compliant systems with integrated patient management",
      href: "/consultation"
    },
    {
      icon: Truck,
      title: "Logistics",
      description: "Real-time tracking, routing, and delivery optimization",
      challenge: "Poor visibility into shipments and inefficient route planning",
      solution: "AI-powered logistics platform with real-time tracking and optimization",
      href: "/consultation"
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
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-display mb-6"
              >
                Solutions Built for{" "}
                <span className="text-accent">Your Industry</span>
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-subheadline mb-8"
              >
                Every industry faces unique challenges. We tailor technology solutions 
                that match your sector's specific needs and regulatory requirements.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Button size="lg" variant="hero" asChild>
                  <Link to="/consultation" className="flex items-center gap-2">
                    Explore Industry Solutions
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {industries.map((industry, index) => {
                const IconComponent = industry.icon;
                return (
                  <motion.div
                    key={industry.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="group hover:shadow-large transition-smooth border-border hover:border-accent/50 bg-card h-full">
                      <CardHeader className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-bounce">
                            <IconComponent className="w-6 h-6 text-primary-foreground" />
                          </div>
                        </div>
                        <div>
                          <CardTitle className="text-2xl group-hover:text-accent transition-smooth">
                            {industry.title}
                          </CardTitle>
                          <CardDescription className="mt-2 text-base">
                            {industry.description}
                          </CardDescription>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-semibold text-sm text-muted-foreground mb-2">CHALLENGE</h4>
                            <p className="text-sm">{industry.challenge}</p>
                          </div>
                          <div>
                            <h4 className="font-semibold text-sm text-muted-foreground mb-2">OUR SOLUTION</h4>
                            <p className="text-sm">{industry.solution}</p>
                          </div>
                        </div>
                        <Button className="w-full" variant="cta" asChild>
                          <Link to={industry.href} className="flex items-center justify-center gap-2">
                            See How We Help
                            <ArrowRight className="w-4 h-4" />
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-secondary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Don't See Your Industry?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              We work with businesses across all sectors. Let's discuss how our 
              technology solutions can address your unique industry challenges.
            </p>
            <Button size="lg" variant="cta" asChild>
              <Link to="/consultation" className="flex items-center gap-2">
                Discuss Your Industry Needs
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

export default Industries;