import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Package, CheckCircle, ArrowRight, ChevronRight, Users, BarChart3, Workflow, Settings, CreditCard, Truck, Calendar, MessageSquare } from "lucide-react";
import { useEffect } from "react";

const PageHead = () => {
  useEffect(() => {
    document.title = "Odoo ERP Implementation | Aethrix Systems";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Professional Odoo ERP implementation and customization. Complete setup, module configuration, and ongoing support for your business.");
  }, []);
  return null;
};

const OdooImplementation = () => {
  const modules = [
    {
      icon: CreditCard,
      title: "Accounting & Finance",
      description: "Complete financial management with automated reporting and multi-currency support."
    },
    {
      icon: Users,
      title: "Sales & CRM",
      description: "Manage leads, opportunities, and customer relationships with integrated sales processes."
    },
    {
      icon: Package,
      title: "Inventory Management",
      description: "Real-time inventory tracking, automated reordering, and warehouse management."
    },
    {
      icon: Truck,
      title: "Purchase Management",
      description: "Streamline procurement processes with vendor management and purchase automation."
    },
    {
      icon: Settings,
      title: "Manufacturing",
      description: "Production planning, work orders, and quality control for manufacturing operations."
    },
    {
      icon: Calendar,
      title: "Project Management",
      description: "Track projects, tasks, and time with integrated project management tools."
    },
    {
      icon: MessageSquare,
      title: "Human Resources",
      description: "Employee management, payroll, attendance, and performance tracking."
    },
    {
      icon: BarChart3,
      title: "Reporting & Analytics",
      description: "Comprehensive dashboards and reports for data-driven decision making."
    }
  ];

  const benefits = [
    "Seamless integration between all business processes",
    "Real-time visibility into operations and performance",
    "Automated workflows that reduce manual tasks",
    "Scalable solution that grows with your business",
    "Cost-effective alternative to enterprise ERP systems",
    "Cloud-based deployment with 99.9% uptime SLA"
  ];

  const implementationSteps = [
    {
      step: "1",
      title: "Business Analysis",
      description: "Comprehensive review of your current processes and requirements"
    },
    {
      step: "2", 
      title: "System Configuration",
      description: "Setup and configuration of Odoo modules to match your workflows"
    },
    {
      step: "3",
      title: "Data Migration",
      description: "Secure migration of existing data from legacy systems"
    },
    {
      step: "4",
      title: "Testing & Training",
      description: "Thorough testing and comprehensive user training programs"
    },
    {
      step: "5",
      title: "Go-Live Support",
      description: "Dedicated support during the transition to ensure smooth operations"
    },
    {
      step: "6",
      title: "Ongoing Optimization",
      description: "Continuous improvement and optimization of your Odoo system"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <PageHead />
      <Header />
      <main>
        {/* Breadcrumbs */}
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8 pt-6 text-sm text-muted-foreground" aria-label="Breadcrumb">
          <ol className="flex items-center gap-2">
            <li><Link to="/" className="hover:text-foreground">Home</Link></li>
            <ChevronRight className="w-4 h-4" />
            <li><Link to="/services" className="hover:text-foreground">Services</Link></li>
            <ChevronRight className="w-4 h-4" />
            <li><Link to="/erp" className="hover:text-foreground">ERP Solutions</Link></li>
            <ChevronRight className="w-4 h-4" />
            <li className="text-foreground">Odoo Implementation</li>
          </ol>
        </nav>

        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-br from-orange-500 via-red-500 to-pink-600 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
                  <Package className="w-4 h-4" />
                  Odoo ERP Implementation
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Complete Odoo ERP{" "}
                  <span className="text-yellow-300">Implementation & Customization</span>
                </h1>
                <p className="text-xl mb-8 leading-relaxed">
                  Transform your business operations with a fully customized Odoo ERP system.
                  From initial setup to ongoing optimization, we deliver a solution that fits
                  your unique business processes.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" variant="secondary" asChild>
                    <Link to="/consultation" className="flex items-center gap-2">
                      Get Odoo Assessment
                      <ArrowRight className="h-5 w-5" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-orange-600" asChild>
                    <Link to="/case-studies/erp">View Odoo Success Stories</Link>
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Odoo Modules Grid */}
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Odoo Modules We Implement
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Comprehensive modules that integrate seamlessly to provide a complete
                business management solution.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {modules.map((module, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full">
                    <CardHeader className="text-center">
                      <div className="p-3 bg-accent/10 rounded-lg w-fit mx-auto mb-4">
                        <module.icon className="h-8 w-8 text-accent" />
                      </div>
                      <CardTitle className="text-lg group-hover:text-accent transition-smooth">
                        {module.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-center text-sm leading-relaxed">
                        {module.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Implementation Process */}
        <section className="py-24 bg-muted/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our Odoo Implementation Process
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                A proven methodology that ensures successful Odoo deployments
                with minimal disruption to your business operations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {implementationSteps.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative"
                >
                  <Card className="h-full">
                    <CardHeader>
                      <div className="flex items-center gap-4 mb-2">
                        <div className="bg-accent text-accent-foreground rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg">
                          {item.step}
                        </div>
                        <CardTitle className="text-xl">{item.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base leading-relaxed">
                        {item.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Why Choose Odoo ERP?
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Odoo provides a comprehensive, cost-effective ERP solution that scales
                  with your business and adapts to your unique processes.
                </p>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-base">{benefit}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
              <div className="bg-gradient-to-br from-accent/10 to-accent/5 p-8 rounded-lg">
                <h3 className="text-2xl font-semibold mb-4">Ready to Get Started?</h3>
                <p className="text-muted-foreground mb-6">
                  Let's discuss how Odoo ERP can transform your business operations
                  and drive sustainable growth for your organization.
                </p>
                <div className="space-y-4">
                  <Button asChild className="w-full">
                    <Link to="/consultation" className="flex items-center justify-center gap-2">
                      Schedule Free Consultation
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" asChild className="w-full">
                    <Link to="/case-studies/erp" className="flex items-center justify-center gap-2">
                      View Case Studies
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 bg-muted/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Frequently Asked Questions
                </h2>
                <p className="text-xl text-muted-foreground">
                  Common questions about Odoo ERP implementation
                </p>
              </div>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">How long does an Odoo implementation take?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Most mid-market implementations take 8-16 weeks depending on scope, complexity,
                      data migration requirements, and the number of modules being implemented.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Can Odoo integrate with our existing systems?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Yes, Odoo offers extensive integration capabilities through APIs and connectors.
                      We can integrate with CRM systems, e-commerce platforms, payment gateways,
                      and other business applications.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Do you provide training and support?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Absolutely. We provide comprehensive user training, documentation, and ongoing
                      technical support with SLA-backed service levels to ensure your success.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Is Odoo suitable for our industry?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Odoo is highly flexible and can be customized for virtually any industry.
                      We have experience implementing Odoo across manufacturing, retail, services,
                      healthcare, and many other sectors.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default OdooImplementation;