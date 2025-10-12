import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Database, CheckCircle, ArrowRight, ChevronRight, RefreshCw, Shield, Clock, TrendingUp, AlertTriangle, Users } from "lucide-react";
import { useEffect } from "react";

const PageHead = () => {
  useEffect(() => {
    document.title = "ERP Data Migration Services | Aethrix Systems";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Seamless ERP data migration from legacy systems to modern platforms. Zero downtime, data integrity guaranteed.");
  }, []);
  return null;
};

const ERPMigration = () => {
  const challenges = [
    { icon: AlertTriangle, title: "Data Loss Risk", solution: "Multi-layered backup and validation" },
    { icon: Clock, title: "System Downtime", solution: "Phased migration with minimal disruption" },
    { icon: Shield, title: "Data Integrity", solution: "Automated validation and testing" },
    { icon: Users, title: "User Training", solution: "Comprehensive training and support" },
  ];

  const process = [
    {
      step: "01",
      title: "Assessment & Planning",
      description: "Analyze your current systems, data structure, and business requirements",
      activities: ["System audit", "Data mapping", "Risk assessment", "Migration strategy"]
    },
    {
      step: "02",
      title: "Data Preparation",
      description: "Clean, transform, and validate data for migration",
      activities: ["Data cleansing", "Format conversion", "Validation rules", "Test datasets"]
    },
    {
      step: "03",
      title: "Migration Execution",
      description: "Phased transfer with continuous monitoring and validation",
      activities: ["Incremental migration", "Real-time monitoring", "Data verification", "Rollback procedures"]
    },
    {
      step: "04",
      title: "Testing & Validation",
      description: "Comprehensive testing to ensure data accuracy and system integrity",
      activities: ["Functional testing", "Performance testing", "User acceptance", "Data reconciliation"]
    },
    {
      step: "05",
      title: "Go-Live & Support",
      description: "Final cutover with post-migration support and monitoring",
      activities: ["Production deployment", "User training", "24/7 support", "Performance tuning"]
    },
  ];

  const benefits = [
    "Zero data loss with multi-layer validation",
    "Minimal system downtime (typically <4 hours)",
    "Automated data transformation and mapping",
    "Complete audit trail and documentation",
    "Post-migration support and optimization",
    "Business continuity throughout migration"
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
            <li><Link to="/erp" className="hover:text-foreground">ERP</Link></li>
            <ChevronRight className="w-4 h-4" />
            <li className="text-foreground">Data Migration</li>
          </ol>
        </nav>

        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 text-white overflow-hidden relative">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-20 w-32 h-32 border border-white/30 rounded-lg rotate-12"></div>
            <div className="absolute bottom-32 right-32 w-24 h-24 border border-white/30 rounded-full"></div>
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
                  <RefreshCw className="w-4 h-4" />
                  ERP Migration Services
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Seamless ERP{" "}
                  <span className="text-yellow-300">Data Migration</span>
                </h1>
                <p className="text-xl md:text-2xl mb-8 leading-relaxed text-white/90">
                  Move from legacy systems to modern ERP platforms with zero data loss and minimal downtime.
                  Our proven migration process ensures your business continuity throughout the transition.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" variant="secondary" asChild>
                    <Link to="/consultation" className="flex items-center gap-2">
                      Plan Your Migration
                      <ArrowRight className="h-5 w-5" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-indigo-600">
                    Download Migration Guide
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Common Challenges Section */}
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
                  Migration Challenges We Solve
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Common obstacles in ERP migration and our proven solutions to overcome them.
                </p>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {challenges.map((challenge, index) => {
                const Icon = challenge.icon;
                return (
                  <motion.div
                    key={challenge.title}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="h-full">
                      <CardHeader>
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-destructive/10 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Icon className="w-6 h-6 text-destructive" />
                          </div>
                          <div>
                            <CardTitle className="text-xl mb-2">{challenge.title}</CardTitle>
                            <div className="flex items-start gap-2 text-sm text-accent">
                              <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                              <span className="font-medium">{challenge.solution}</span>
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Migration Process Section */}
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
                  Our 5-Step Migration Process
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  A proven methodology that ensures safe, efficient, and successful ERP migration.
                </p>
              </motion.div>
            </div>

            <div className="space-y-8 max-w-5xl mx-auto">
              {process.map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="overflow-hidden">
                    <CardHeader className="bg-accent/5">
                      <div className="flex items-start gap-6">
                        <div className="text-5xl font-bold text-accent/20">{item.step}</div>
                        <div className="flex-1">
                          <CardTitle className="text-2xl mb-2">{item.title}</CardTitle>
                          <CardDescription className="text-base">{item.description}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {item.activities.map((activity) => (
                          <div key={activity} className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                            <span className="text-sm">{activity}</span>
                          </div>
                        ))}
                      </div>
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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Why Choose Our Migration Services
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  We've successfully migrated hundreds of ERP systems with a 100% success rate.
                  Our expertise ensures your data is safe, secure, and accurately transferred.
                </p>
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <motion.li
                      key={benefit}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-lg">{benefit}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gradient-to-br from-accent/5 via-card to-accent/5 border-accent/20">
                  <CardHeader>
                    <CardTitle className="text-2xl">Migration Success Metrics</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <div className="flex justify-between items-baseline mb-2">
                        <span className="text-sm text-muted-foreground">Data Accuracy</span>
                        <span className="text-2xl font-bold text-accent">99.99%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-accent" style={{ width: "99.99%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between items-baseline mb-2">
                        <span className="text-sm text-muted-foreground">On-Time Delivery</span>
                        <span className="text-2xl font-bold text-accent">100%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-accent" style={{ width: "100%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between items-baseline mb-2">
                        <span className="text-sm text-muted-foreground">Zero Data Loss</span>
                        <span className="text-2xl font-bold text-accent">100%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-accent" style={{ width: "100%" }}></div>
                      </div>
                    </div>
                    <div className="pt-4 border-t">
                      <div className="text-center">
                        <div className="text-4xl font-bold text-accent mb-2">500+</div>
                        <div className="text-sm text-muted-foreground">Successful Migrations Completed</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
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
                  Ready to Migrate Your ERP System?
                </h2>
                <p className="text-xl mb-8 opacity-90">
                  Get a free migration assessment and detailed project plan tailored to your needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" variant="secondary" asChild>
                    <Link to="/consultation" className="flex items-center gap-2">
                      Schedule Assessment
                      <ArrowRight className="h-5 w-5" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" className="border-current text-current hover:bg-white/10">
                    Contact Migration Team
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

export default ERPMigration;
