import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Settings, CheckCircle, ArrowRight, Users, BarChart3, Workflow, ChevronRight, Package, Database, Cog } from "lucide-react";
import { useEffect } from "react";

const PageHead = () => {
  useEffect(() => {
    document.title = "ERP Solutions Overview | Aethrix Systems";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Comprehensive ERP solutions to streamline your business operations. From Odoo implementation to custom development and data migration.");
  }, []);
  return null;
};

const ERPOverview = () => {
  const solutions = [
    {
      icon: Package,
      title: "Odoo Implementation",
      description: "Complete Odoo ERP setup and customization tailored to your business processes.",
      href: "/erp/odoo",
      features: [
        "Custom module configuration",
        "Workflow automation",
        "Real-time dashboards",
        "Multi-company support"
      ]
    },
    {
      icon: Database,
      title: "Data Migration",
      description: "Seamless migration from legacy systems to modern ERP platforms.",
      href: "/erp/migration",
      features: [
        "Legacy system assessment",
        "Data mapping and cleaning",
        "Phased migration approach",
        "Zero downtime transition"
      ]
    },
    {
      icon: Cog,
      title: "Custom ERP Development",
      description: "Bespoke ERP solutions built specifically for your unique business requirements.",
      href: "/erp/customization",
      features: [
        "Custom module development",
        "Third-party integrations",
        "Advanced reporting",
        "Scalable architecture"
      ]
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
            <li className="text-foreground">ERP Solutions</li>
          </ol>
        </nav>

        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
                  <Settings className="w-4 h-4" />
                  Enterprise Resource Planning
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  ERP Solutions That{" "}
                  <span className="text-yellow-300">Transform Your Business</span>
                </h1>
                <p className="text-xl mb-8 leading-relaxed">
                  Streamline operations, unify data, and accelerate growth with our comprehensive
                  ERP solutions. From Odoo implementation to custom development, we deliver
                  systems that fit your unique business needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" variant="secondary" asChild>
                    <Link to="/consultation" className="flex items-center gap-2">
                      Get ERP Assessment
                      <ArrowRight className="h-5 w-5" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600" asChild>
                    <Link to="/case-studies/erp">View ERP Case Studies</Link>
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ERP Solutions Grid */}
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our ERP Solutions
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Comprehensive ERP services designed to optimize your business processes
                and drive operational excellence.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {solutions.map((solution, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-l-4 border-l-accent h-full">
                    <CardHeader>
                      <div className="flex items-center gap-4 mb-4">
                        <div className="p-3 bg-accent/10 rounded-lg">
                          <solution.icon className="h-8 w-8 text-accent" />
                        </div>
                        <CardTitle className="text-xl group-hover:text-accent transition-smooth">
                          {solution.title}
                        </CardTitle>
                      </div>
                      <CardDescription className="text-base leading-relaxed">
                        {solution.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3 mb-6">
                        {solution.features.map((feature, featureIndex) => (
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
                        <Link to={solution.href} className="flex items-center justify-center gap-2">
                          Learn More
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-24 bg-muted/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Why Choose Our ERP Solutions?
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Our ERP implementations deliver measurable results that transform
                  how your business operates and grows.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">Ready to Transform Your Operations?</h3>
                <p className="text-muted-foreground mb-6">
                  Let's discuss how our ERP solutions can streamline your business processes
                  and drive sustainable growth.
                </p>
                <Button asChild className="w-full">
                  <Link to="/consultation" className="flex items-center justify-center gap-2">
                    Schedule ERP Consultation
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Process Overview */}
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our ERP Implementation Process
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                A proven methodology that ensures successful ERP deployments
                with minimal disruption to your business.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-accent/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-accent">1</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Discovery & Planning</h3>
                <p className="text-muted-foreground text-sm">
                  Analyze current processes and define requirements for your ERP solution.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-accent/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-accent">2</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Design & Configuration</h3>
                <p className="text-muted-foreground text-sm">
                  Configure and customize the ERP system to match your workflows.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-accent/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-accent">3</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Implementation & Testing</h3>
                <p className="text-muted-foreground text-sm">
                  Deploy the system with thorough testing and user training.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-accent/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-accent">4</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Support & Optimization</h3>
                <p className="text-muted-foreground text-sm">
                  Ongoing support and continuous improvement of your ERP system.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ERPOverview;