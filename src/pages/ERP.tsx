import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Settings, CheckCircle, ArrowRight, Users, BarChart3, Workflow } from "lucide-react";

const ERP = () => {
  const features = [
    {
      icon: Settings,
      title: "Full Odoo ERP Setup & Integration",
      description: "Complete implementation tailored to your business processes"
    },
    {
      icon: Users,
      title: "Tailored Modules",
      description: "Finance, sales, HR, inventory, and more - customized for your workflows"
    },
    {
      icon: Workflow,
      title: "Custom Workflow Design",
      description: "Unique processes built specifically for your business requirements"
    },
    {
      icon: BarChart3,
      title: "Ongoing Support & Optimization",
      description: "Continuous improvement and technical support for maximum ROI"
    }
  ];

  const benefits = [
    "Unified data across all departments",
    "Automated financial reporting",
    "Real-time inventory tracking",
    "Streamlined HR processes",
    "Enhanced customer relationship management",
    "Improved operational efficiency"
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
                ERP That{" "}
                <span className="text-accent">Fits Your Business</span>
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-subheadline mb-8"
              >
                Managing business operations shouldn't be complicated. At Aethrix Systems, 
                we specialize in Odoo ERP implementation and customization to connect your teams, 
                automate workflows, and deliver clarity across operations.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Button size="lg" variant="hero" asChild>
                  <Link to="/consultation" className="flex items-center gap-2">
                    Get ERP Consultation
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Comprehensive ERP Solutions</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                From implementation to ongoing optimization, we deliver ERP solutions that grow with your business.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="group hover:shadow-large transition-smooth border-border hover:border-accent/50 bg-card h-full">
                      <CardHeader className="space-y-4">
                        <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-bounce">
                          <IconComponent className="w-6 h-6 text-primary-foreground" />
                        </div>
                        <div>
                          <CardTitle className="text-xl group-hover:text-accent transition-smooth">
                            {feature.title}
                          </CardTitle>
                          <CardDescription className="mt-2">
                            {feature.description}
                          </CardDescription>
                        </div>
                      </CardHeader>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-24 bg-gradient-secondary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold mb-4">Why Choose Odoo ERP?</h2>
                <p className="text-lg text-muted-foreground">
                  Transform your business operations with integrated, intelligent workflows.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span>{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Simplify Your Operations?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how Odoo ERP can transform your business processes and drive growth.
            </p>
            <Button size="lg" variant="cta" asChild>
              <Link to="/consultation" className="flex items-center gap-2">
                Start Your ERP Journey
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

export default ERP;