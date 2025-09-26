import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Settings, CheckCircle, ArrowRight, Users, BarChart3, Workflow, ChevronRight } from "lucide-react";
import { useEffect } from "react";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const PageHead = () => {
  useEffect(() => {
    document.title = "ERP Solutions | Aethrix Systems";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Odoo ERP implementation and customization to connect teams, automate workflows, and improve visibility across operations.");
  }, []);
  return null;
};

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

  const faqs = [
    { q: "Which Odoo modules do you implement?", a: "Inventory, Manufacturing, Sales, Purchase, Accounting, HR, and more. We tailor modules to your processes." },
    { q: "How long does an ERP project take?", a: "Most mid-market implementations take 8–16 weeks depending on scope, data migration, and integrations." },
    { q: "Do you provide support after go-live?", a: "Yes—SLA-backed support, training, enhancements, and performance tuning." },
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
            <li className="text-foreground">ERP Solutions</li>
          </ol>
        </nav>
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

        {/* FAQs */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h3 className="text-2xl font-semibold">Frequently Asked Questions</h3>
            </div>
            <div className="max-w-3xl mx-auto space-y-6">
              {faqs.map((f) => (
                <Card key={f.q} className="bg-background border-border">
                  <CardHeader>
                    <CardTitle className="text-base">{f.q}</CardTitle>
                    <CardDescription>{f.a}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
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

        {/* Odoo Modules Matrix */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-2xl font-semibold mb-4">Odoo Modules Coverage</h3>
            <Table>
              <TableCaption>Typical module coverage; final scope agreed during discovery.</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead>Domain</TableHead>
                  <TableHead>Core Modules</TableHead>
                  <TableHead>Add-ons</TableHead>
                  <TableHead>Notes</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Operations</TableCell>
                  <TableCell>Inventory, MRP, Purchase</TableCell>
                  <TableCell>Quality, Maintenance</TableCell>
                  <TableCell>Barcode, routing, BoM variants</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Sales & CRM</TableCell>
                  <TableCell>CRM, Sales, Invoicing</TableCell>
                  <TableCell>Subscriptions, POS</TableCell>
                  <TableCell>Lead-to-cash pipeline</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Finance</TableCell>
                  <TableCell>Accounting</TableCell>
                  <TableCell>Assets, Consolidation</TableCell>
                  <TableCell>Localization, tax, reconciliation</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>HR</TableCell>
                  <TableCell>Employees, Payroll</TableCell>
                  <TableCell>Leaves, Attendance</TableCell>
                  <TableCell>Policies and approvals</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Web</TableCell>
                  <TableCell>Website, eCommerce</TableCell>
                  <TableCell>Blog, Marketing</TableCell>
                  <TableCell>Headless compatible</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </section>

        {/* Implementation Phases */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-2xl font-semibold mb-4">Implementation Timeline</h3>
            <Table>
              <TableCaption>Example for a mid-market rollout. Actual duration varies.</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead>Phase</TableHead>
                  <TableHead>Weeks</TableHead>
                  <TableHead>Outcomes</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Discovery & Fit-Gap</TableCell>
                  <TableCell>2</TableCell>
                  <TableCell>Process maps, scope, risks, plan</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Design & Prototyping</TableCell>
                  <TableCell>2</TableCell>
                  <TableCell>Configured modules, workflow specs</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Build & Integrations</TableCell>
                  <TableCell>4-6</TableCell>
                  <TableCell>Customizations, API connectors, data model</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Testing & Training</TableCell>
                  <TableCell>2-3</TableCell>
                  <TableCell>UAT, data validation, user training</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Cutover & Go-live</TableCell>
                  <TableCell>1</TableCell>
                  <TableCell>Migration, hypercare, runbooks</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </section>

        {/* RACI Matrix */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-2xl font-semibold mb-4">RACI Matrix</h3>
            <Table>
              <TableCaption>Roles: C=Client, A=Aethrix. R=Responsible, A=Accountable, C=Consulted, I=Informed.</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead>Activity</TableHead>
                  <TableHead>Client</TableHead>
                  <TableHead>Aethrix</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Process Workshops</TableCell>
                  <TableCell>R</TableCell>
                  <TableCell>A/C</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Configuration & Customization</TableCell>
                  <TableCell>C/I</TableCell>
                  <TableCell>R/A</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Data Migration</TableCell>
                  <TableCell>R/A</TableCell>
                  <TableCell>C</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>UAT</TableCell>
                  <TableCell>R</TableCell>
                  <TableCell>A/C</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Go-live & Support</TableCell>
                  <TableCell>C/I</TableCell>
                  <TableCell>R/A</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </section>

        {/* Integrations */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-2xl font-semibold mb-4">Integration Endpoints</h3>
            <Table>
              <TableCaption>Common integrations for ERP ecosystems.</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead>System</TableHead>
                  <TableHead>Direction</TableHead>
                  <TableHead>Method</TableHead>
                  <TableHead>Notes</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Payment Gateway</TableCell>
                  <TableCell>Odoo → Gateway</TableCell>
                  <TableCell>REST/Webhooks</TableCell>
                  <TableCell>Invoices, reconciliation</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Shop/E-Commerce</TableCell>
                  <TableCell>Bi-directional</TableCell>
                  <TableCell>API/Connector</TableCell>
                  <TableCell>Products, stock, orders</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>BI/Analytics</TableCell>
                  <TableCell>Odoo → DWH</TableCell>
                  <TableCell>ETL/ELT</TableCell>
                  <TableCell>Snapshots, models, dashboards</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </section>

        {/* Risk Register */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-2xl font-semibold mb-4">Risk Register</h3>
            <Table>
              <TableCaption>Tracked throughout delivery with mitigations.</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead>Risk</TableHead>
                  <TableHead>Impact</TableHead>
                  <TableHead>Likelihood</TableHead>
                  <TableHead>Mitigation</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Data quality issues</TableCell>
                  <TableCell>High</TableCell>
                  <TableCell>Medium</TableCell>
                  <TableCell>Profiling, cleansing, UAT sign-offs</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>User adoption</TableCell>
                  <TableCell>Medium</TableCell>
                  <TableCell>Medium</TableCell>
                  <TableCell>Training, champions, phased rollout</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Integration instability</TableCell>
                  <TableCell>High</TableCell>
                  <TableCell>Low</TableCell>
                  <TableCell>Retries, circuit breakers, monitoring</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ERP;