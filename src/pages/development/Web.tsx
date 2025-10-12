import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ChevronRight, ArrowRight, Monitor, Smartphone, Code, Zap, Layers, Globe, Shield, TrendingUp, CheckCircle, Package } from "lucide-react";
import { useEffect } from "react";

const PageHead = () => {
  useEffect(() => {
    document.title = "Web Development Services | Aethrix Systems";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Professional web development services. React, Vue.js, Angular applications with modern design and performance optimization.");
  }, []);
  return null;
};

const WebDevelopment = () => {
  const technologies = [
    { name: "React", category: "Frontend", description: "Component-based UI library for dynamic web apps" },
    { name: "TypeScript", category: "Language", description: "Type-safe JavaScript for better code quality" },
    { name: "Node.js", category: "Backend", description: "JavaScript runtime for server-side applications" },
    { name: "Next.js", category: "Framework", description: "React framework for production-grade applications" },
    { name: "Tailwind CSS", category: "Styling", description: "Utility-first CSS framework for rapid UI development" },
    { name: "PostgreSQL", category: "Database", description: "Powerful open-source relational database" },
  ];

  const features = [
    { icon: Zap, title: "Blazing Fast Performance", description: "Optimized for speed with code splitting, lazy loading, and CDN delivery" },
    { icon: Smartphone, title: "Mobile-First Design", description: "Responsive layouts that work perfectly on all devices and screen sizes" },
    { icon: Shield, title: "Security by Design", description: "Built-in protection against XSS, CSRF, and other common vulnerabilities" },
    { icon: Globe, title: "SEO Optimized", description: "Search engine friendly with proper meta tags, sitemaps, and structured data" },
    { icon: Layers, title: "Scalable Architecture", description: "Modular code structure that grows with your business needs" },
    { icon: TrendingUp, title: "Performance Monitoring", description: "Real-time analytics and performance metrics built-in" },
  ];

  const process = [
    { step: "01", title: "Discovery & Planning", description: "Understanding your goals, target audience, and technical requirements" },
    { step: "02", title: "Design & Prototyping", description: "Creating wireframes, mockups, and interactive prototypes for your approval" },
    { step: "03", title: "Development", description: "Building your application with clean code and best practices" },
    { step: "04", title: "Testing & QA", description: "Comprehensive testing across browsers, devices, and user scenarios" },
    { step: "05", title: "Deployment", description: "Smooth launch with zero downtime and performance optimization" },
    { step: "06", title: "Support & Maintenance", description: "Ongoing updates, monitoring, and technical support" },
  ];

  const projects = [
    { title: "E-commerce Platform", tech: "React, Node.js, Stripe", results: "300% increase in conversion rate" },
    { title: "SaaS Dashboard", tech: "Next.js, TypeScript, PostgreSQL", results: "50,000+ active users" },
    { title: "Real Estate Portal", tech: "React, GraphQL, AWS", results: "2M monthly page views" },
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
            <li><Link to="/development" className="hover:text-foreground">Development</Link></li>
            <ChevronRight className="w-4 h-4" />
            <li className="text-foreground">Web Development</li>
          </ol>
        </nav>

        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-br from-emerald-500 via-blue-500 to-purple-600 text-white overflow-hidden relative">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-20 w-32 h-32 border border-white/20 rounded-lg rotate-12"></div>
            <div className="absolute top-40 right-32 w-24 h-24 border border-white/20 rounded-full"></div>
            <div className="absolute bottom-32 left-1/3 w-16 h-16 bg-white/10 rounded-lg rotate-45"></div>
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
                  <Monitor className="w-4 h-4" />
                  Web Development Services
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Modern Web Applications{" "}
                  <span className="text-yellow-300">Built for Success</span>
                </h1>
                <p className="text-xl md:text-2xl mb-8 leading-relaxed text-white/90">
                  Create stunning, responsive web applications with cutting-edge technologies.
                  From single-page applications to complex enterprise portals, we deliver
                  web solutions that engage users and drive business results.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" variant="secondary" asChild>
                    <Link to="/consultation" className="flex items-center gap-2">
                      Start Your Web Project
                      <ArrowRight className="h-5 w-5" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-emerald-600" asChild>
                    <Link to="/case-studies">View Web Projects</Link>
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
                  <Package className="w-4 h-4" />
                  What We Offer
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Why Choose Our Web Development Services
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  We build web applications that combine beautiful design with powerful functionality,
                  optimized for performance and user experience.
                </p>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="h-full hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                          <Icon className="w-6 h-6 text-accent" />
                        </div>
                        <CardTitle className="text-xl">{feature.title}</CardTitle>
                        <CardDescription>{feature.description}</CardDescription>
                      </CardHeader>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Technology Stack Section */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Modern Technology Stack
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  We use cutting-edge technologies to build fast, scalable, and maintainable web applications.
                </p>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="bg-card p-6 rounded-lg border border-border hover:border-accent/50 transition-colors"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-semibold">{tech.name}</h3>
                    <span className="text-xs px-2 py-1 bg-accent/10 text-accent rounded-full">{tech.category}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{tech.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Our Development Process
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  A proven workflow that delivers quality results on time and within budget.
                </p>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {process.map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="absolute -top-4 -left-4 text-6xl font-bold text-accent/10">{item.step}</div>
                  <div className="bg-card p-6 rounded-lg border border-border relative z-10">
                    <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies Preview */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Recent Projects
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  See how we've helped businesses achieve their goals with custom web applications.
                </p>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full">
                    <CardHeader>
                      <CardTitle className="text-lg">{project.title}</CardTitle>
                      <CardDescription>{project.tech}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-start gap-2 text-sm text-accent">
                        <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                        <span>{project.results}</span>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button variant="outline" size="lg" asChild>
                <Link to="/case-studies">View All Case Studies</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-accent text-accent-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Ready to Build Your Web Application?
                </h2>
                <p className="text-xl mb-8 opacity-90">
                  Let's discuss your web development needs and create a solution that drives results.
                  Get a free consultation and project estimate today.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" variant="secondary" asChild>
                    <Link to="/consultation" className="flex items-center gap-2">
                      Get Started Today
                      <ArrowRight className="h-5 w-5" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" className="border-current text-current hover:bg-white/10" asChild>
                    <Link to="/about">Learn About Our Team</Link>
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default WebDevelopment;