import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Globe, CheckCircle, ArrowRight, ChevronRight, Monitor, Smartphone, Building, ShoppingCart } from "lucide-react";
import { useEffect } from "react";

const PageHead = () => {
  useEffect(() => {
    document.title = "Custom Development Services | Aethrix Systems";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Custom web and mobile development services. Enterprise applications, e-commerce platforms, and scalable solutions for modern businesses.");
  }, []);
  return null;
};

const DevelopmentOverview = () => {
  const services = [
    {
      icon: Monitor,
      title: "Web Development",
      description: "Modern, responsive web applications built with cutting-edge technologies.",
      href: "/development/web",
      features: [
        "React, Vue.js, Angular applications",
        "Progressive Web Apps (PWA)",
        "Responsive design & optimization",
        "API development & integration"
      ]
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications for iOS and Android.",
      href: "/development/mobile",
      features: [
        "React Native & Flutter apps",
        "Native iOS & Android development",
        "Cross-platform solutions",
        "App store deployment"
      ]
    },
    {
      icon: Building,
      title: "Enterprise Applications",
      description: "Scalable enterprise solutions designed for complex business processes.",
      href: "/development/enterprise",
      features: [
        "Custom business applications",
        "Legacy system modernization",
        "Microservices architecture",
        "Enterprise integrations"
      ]
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Solutions",
      description: "Complete e-commerce platforms with advanced features and integrations.",
      href: "/development/ecommerce",
      features: [
        "Custom e-commerce platforms",
        "Shopify & WooCommerce",
        "Payment gateway integration",
        "Inventory management"
      ]
    }
  ];

  const technologies = [
    "React", "Node.js", "Python", "TypeScript", "Vue.js", "Angular",
    "React Native", "Flutter", "iOS", "Android", "PostgreSQL", "MongoDB",
    "AWS", "Docker", "Kubernetes", "GraphQL", "REST APIs", "Microservices"
  ];

  const benefits = [
    "Scalable architecture that grows with your business",
    "Security-first development approach",
    "Modern, responsive user interfaces",
    "Cloud-native deployment and optimization",
    "Comprehensive testing and quality assurance",
    "Ongoing maintenance and support"
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
            <li className="text-foreground">Development Services</li>
          </ol>
        </nav>

        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-br from-green-500 via-blue-500 to-purple-600 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
                  <Globe className="w-4 h-4" />
                  Custom Development Services
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Build Applications That{" "}
                  <span className="text-yellow-300">Drive Your Business Forward</span>
                </h1>
                <p className="text-xl mb-8 leading-relaxed">
                  From web applications to mobile apps and enterprise solutions,
                  we create custom software that perfectly fits your business needs
                  and scales with your growth.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" variant="secondary" asChild>
                    <Link to="/consultation" className="flex items-center gap-2">
                      Discuss Your Project
                      <ArrowRight className="h-5 w-5" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-green-600" asChild>
                    <Link to="/case-studies/development">View Our Work</Link>
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Development Services Grid */}
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our Development Services
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Comprehensive development solutions across web, mobile, and enterprise platforms
                using modern technologies and best practices.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
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

        {/* Technologies Section */}
        <section className="py-24 bg-muted/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Technologies We Use
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We leverage the latest technologies and frameworks to build
                robust, scalable, and maintainable applications.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              {technologies.map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="bg-white px-4 py-2 rounded-full shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
                >
                  <span className="text-sm font-medium text-gray-700">{tech}</span>
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
                  Why Choose Our Development Services?
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  We combine technical expertise with business understanding to deliver
                  solutions that not only work well but drive real business value.
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
                <h3 className="text-2xl font-semibold mb-4">Ready to Start Your Project?</h3>
                <p className="text-muted-foreground mb-6">
                  Let's discuss your development needs and how we can help bring
                  your vision to life with custom software solutions.
                </p>
                <div className="space-y-4">
                  <Button asChild className="w-full">
                    <Link to="/consultation" className="flex items-center justify-center gap-2">
                      Start Your Project
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" asChild className="w-full">
                    <Link to="/case-studies/development" className="flex items-center justify-center gap-2">
                      View Case Studies
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
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
                Our Development Process
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                A proven methodology that ensures successful project delivery
                from concept to deployment and beyond.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-accent/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-accent">1</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Discovery & Planning</h3>
                <p className="text-muted-foreground text-sm">
                  Understand requirements, define scope, and create detailed project roadmap.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-accent/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-accent">2</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Design & Prototyping</h3>
                <p className="text-muted-foreground text-sm">
                  Create wireframes, UI/UX designs, and interactive prototypes.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-accent/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-accent">3</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Development & Testing</h3>
                <p className="text-muted-foreground text-sm">
                  Agile development with continuous testing and quality assurance.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-accent/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-accent">4</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Deployment & Support</h3>
                <p className="text-muted-foreground text-sm">
                  Secure deployment with ongoing maintenance and optimization.
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

export default DevelopmentOverview;