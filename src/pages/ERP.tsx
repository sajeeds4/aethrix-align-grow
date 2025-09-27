import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Settings, CheckCircle, ArrowRight, Users, BarChart3, Workflow, ChevronRight, Package, CreditCard, Truck } from "lucide-react";
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
        <section className="py-24 bg-gradient-hero text-primary-foreground overflow-hidden relative">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-20 w-32 h-32 border border-white/20 rounded-lg rotate-12"></div>
            <div className="absolute top-40 right-32 w-24 h-24 border border-white/20 rounded-full"></div>
            <div className="absolute bottom-32 left-1/3 w-16 h-16 bg-white/10 rounded-lg rotate-45"></div>
            <div className="absolute bottom-20 right-20 w-20 h-20 border border-white/20 rounded-lg -rotate-12"></div>
          </div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
                  <Settings className="w-4 h-4" />
                  Enterprise Resource Planning
                </div>
                <h1 className="text-display mb-6">
                  ERP That{" "}
                  <span className="text-accent">Fits Your Business</span>
                </h1>
                <p className="text-subheadline mb-8 text-primary-foreground/90">
                  Managing business operations shouldn't be complicated. At Aethrix Systems, 
                  we specialize in Odoo ERP implementation and customization to connect your teams, 
                  automate workflows, and deliver clarity across operations.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Button size="lg" variant="hero" asChild>
                    <Link to="/consultation" className="flex items-center gap-2">
                      Get ERP Consultation
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20">
                    View Demo
                  </Button>
                </div>
                
                {/* Key Metrics */}
                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/20">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-accent">95%</div>
                    <div className="text-sm text-primary-foreground/80">Success Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-accent">30+</div>
                    <div className="text-sm text-primary-foreground/80">Modules</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-accent">6-12</div>
                    <div className="text-sm text-primary-foreground/80">Weeks Deploy</div>
                  </div>
                </div>
              </motion.div>

              {/* Visual ERP Flow Diagram */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-semibold mb-2">ERP Integration Flow</h3>
                    <p className="text-sm text-primary-foreground/80">Complete business process integration</p>
                  </div>
                  
                  {/* Flow Diagram */}
                  <div className="space-y-4">
                    {[
                      { icon: Users, label: "CRM & Sales", color: "bg-blue-500" },
                      { icon: Package, label: "Inventory & MRP", color: "bg-green-500" },
                      { icon: CreditCard, label: "Accounting & Finance", color: "bg-yellow-500" },
                      { icon: Truck, label: "Purchase & Supply", color: "bg-purple-500" },
                      { icon: BarChart3, label: "Reporting & Analytics", color: "bg-red-500" }
                    ].map((item, index) => {
                      const IconComponent = item.icon;
                      return (
                        <motion.div
                          key={item.label}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                          className="flex items-center gap-4 p-3 bg-white/10 rounded-lg border border-white/20"
                        >
                          <div className={`w-10 h-10 ${item.color} rounded-lg flex items-center justify-center`}>
                            <IconComponent className="w-5 h-5 text-white" />
                          </div>
                          <div className="flex-1">
                            <div className="text-sm font-medium">{item.label}</div>
                            <div className="w-full bg-white/20 rounded-full h-1.5 mt-1">
                              <motion.div
                                className="bg-accent h-1.5 rounded-full"
                                initial={{ width: 0 }}
                                animate={{ width: `${85 + index * 3}%` }}
                                transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                              />
                            </div>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 bg-gradient-to-br from-muted/30 via-background to-muted/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
                  <Workflow className="w-4 h-4" />
                  Comprehensive Solutions
                </div>
                <h2 className="text-3xl font-bold mb-4">ERP Solutions That Scale</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  From implementation to ongoing optimization, we deliver ERP solutions that grow with your business.
                </p>
              </motion.div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <Card className="h-full bg-gradient-to-br from-card via-card to-card/50 border-border/50 hover:border-accent/30 transition-all duration-300 hover:shadow-xl overflow-hidden relative">
                      {/* Background accent */}
                      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-accent/5 to-transparent rounded-bl-full"></div>
                      
                      <CardHeader className="space-y-4 relative z-10">
                        <motion.div 
                          className="w-14 h-14 bg-gradient-to-br from-accent to-accent/80 rounded-xl flex items-center justify-center shadow-lg"
                          whileHover={{ scale: 1.05 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <IconComponent className="w-7 h-7 text-white" />
                        </motion.div>
                        <div>
                          <CardTitle className="text-xl group-hover:text-accent transition-colors duration-300 mb-2">
                            {feature.title}
                          </CardTitle>
                          <CardDescription className="text-base leading-relaxed">
                            {feature.description}
                          </CardDescription>
                        </div>
                      </CardHeader>
                      
                      {/* Hover effect indicator */}
                      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-accent/20 via-accent to-accent/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                    </Card>
                  </motion.div>
                );
              })}
            </div>

            {/* Comprehensive ERP Solutions Overview */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold mb-8 text-center">Complete ERP Transformation Services</h3>
              <div className="grid lg:grid-cols-3 gap-8">
                <Card className="shadow-xl hover:shadow-2xl transition-shadow border-l-4 border-l-blue-500">
                  <CardHeader>
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                      <Settings className="w-6 h-6 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl">Strategic Assessment & Planning</CardTitle>
                    <CardDescription>
                      Comprehensive business process analysis and ERP strategy development
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>Current state process mapping and gap analysis</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>Requirements gathering and stakeholder interviews</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>Technology architecture and integration planning</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>ROI analysis and business case development</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>Change management and training strategy</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-xl hover:shadow-2xl transition-shadow border-l-4 border-l-green-500">
                  <CardHeader>
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                      <Workflow className="w-6 h-6 text-green-600" />
                    </div>
                    <CardTitle className="text-xl">Implementation & Customization</CardTitle>
                    <CardDescription>
                      Full-scale ERP deployment with custom configurations and integrations
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>Module configuration and business process automation</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>Custom development and workflow design</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>Data migration and system integration</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>User interface customization and branding</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>Security configuration and compliance setup</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-xl hover:shadow-2xl transition-shadow border-l-4 border-l-purple-500">
                  <CardHeader>
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                      <BarChart3 className="w-6 h-6 text-purple-600" />
                    </div>
                    <CardTitle className="text-xl">Optimization & Support</CardTitle>
                    <CardDescription>
                      Ongoing performance monitoring, optimization, and strategic enhancement
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>Performance monitoring and system optimization</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>User training and adoption programs</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>Continuous improvement and feature enhancement</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>24/7 technical support and maintenance</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>Strategic consulting and roadmap planning</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* ERP Implementation Success Metrics */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-xl">
              <h3 className="text-2xl font-semibold mb-6 text-center">Implementation Success Metrics</h3>
              <div className="grid md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">250+</div>
                  <p className="text-sm font-medium">ERP Implementations</p>
                  <p className="text-xs text-gray-600">Across diverse industries</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-600 mb-2">97%</div>
                  <p className="text-sm font-medium">On-Time Delivery</p>
                  <p className="text-xs text-gray-600">Project completion rate</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-600 mb-2">45%</div>
                  <p className="text-sm font-medium">Average Efficiency Gain</p>
                  <p className="text-xs text-gray-600">Post-implementation improvement</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-orange-600 mb-2">18</div>
                  <p className="text-sm font-medium">Average ROI Months</p>
                  <p className="text-xs text-gray-600">Time to return on investment</p>
                </div>
              </div>
            </div>
            
            {/* Visual Process Flow */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-20"
            >
              <div className="text-center mb-12">
                <h3 className="text-2xl font-bold mb-4">Our Implementation Process</h3>
                <p className="text-muted-foreground">A proven methodology for successful ERP deployment</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {[
                  { step: "01", title: "Discovery", desc: "Business analysis & requirements", icon: "🔍" },
                  { step: "02", title: "Design", desc: "System architecture & workflows", icon: "🎨" },
                  { step: "03", title: "Deploy", desc: "Implementation & data migration", icon: "🚀" },
                  { step: "04", title: "Optimize", desc: "Training & ongoing support", icon: "⚡" }
                ].map((phase, index) => (
                  <motion.div
                    key={phase.step}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="relative"
                  >
                    <div className="bg-white rounded-xl p-6 shadow-md border border-border/50 hover:shadow-lg transition-shadow duration-300 text-center">
                      <div className="text-3xl mb-3">{phase.icon}</div>
                      <div className="text-xs font-semibold text-accent mb-2">{phase.step}</div>
                      <h4 className="font-bold mb-2">{phase.title}</h4>
                      <p className="text-sm text-muted-foreground">{phase.desc}</p>
                    </div>
                    
                    {/* Connection line */}
                    {index < 3 && (
                      <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-accent/60 to-accent/20"></div>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Industry-Specific ERP Solutions */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Industry-Specific ERP Solutions</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Tailored ERP implementations designed for the unique challenges and requirements of your industry
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Package className="w-5 h-5 text-blue-600" />
                      </div>
                      Manufacturing & Production
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p className="text-sm text-gray-700">
                        Comprehensive manufacturing ERP solutions covering production planning, inventory management, 
                        quality control, and supply chain optimization.
                      </p>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <span>Production planning and scheduling optimization</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <span>Material Requirements Planning (MRP)</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <span>Quality management and compliance tracking</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <span>Real-time shop floor monitoring</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <span>Lean manufacturing and waste reduction</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                        <Truck className="w-5 h-5 text-green-600" />
                      </div>
                      Distribution & Logistics
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p className="text-sm text-gray-700">
                        Advanced logistics and distribution ERP systems with warehouse management, 
                        transportation optimization, and supply chain visibility.
                      </p>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span>Warehouse management and automation</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span>Transportation management systems (TMS)</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span>Multi-location inventory optimization</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span>Order fulfillment and tracking</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span>Supplier relationship management</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                        <CreditCard className="w-5 h-5 text-purple-600" />
                      </div>
                      Financial Services
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p className="text-sm text-gray-700">
                        Specialized ERP solutions for financial institutions with regulatory compliance, 
                        risk management, and advanced reporting capabilities.
                      </p>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                          <span>Regulatory compliance and reporting</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                          <span>Risk management and monitoring</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                          <span>Client relationship management</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                          <span>Portfolio and investment tracking</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                          <span>Automated workflow processing</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                        <Users className="w-5 h-5 text-red-600" />
                      </div>
                      Healthcare & Life Sciences
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p className="text-sm text-gray-700">
                        Healthcare-focused ERP systems with patient management, regulatory compliance, 
                        and specialized workflows for medical organizations.
                      </p>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                          <span>Patient data management and privacy (HIPAA)</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                          <span>Medical inventory and equipment tracking</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                          <span>Clinical trial management</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                          <span>Pharmaceutical supply chain</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                          <span>Regulatory reporting and audit trails</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                        <Settings className="w-5 h-5 text-orange-600" />
                      </div>
                      Professional Services
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p className="text-sm text-gray-700">
                        Service-based ERP solutions with project management, resource allocation, 
                        and client billing optimization for consulting and professional services.
                      </p>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                          <span>Project and resource management</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                          <span>Time tracking and billing automation</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                          <span>Client relationship and contract management</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                          <span>Knowledge management systems</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                          <span>Performance analytics and reporting</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center">
                        <BarChart3 className="w-5 h-5 text-teal-600" />
                      </div>
                      Retail & E-commerce
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p className="text-sm text-gray-700">
                        Retail-focused ERP systems with omnichannel management, inventory optimization, 
                        and customer experience enhancement.
                      </p>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                          <span>Omnichannel inventory management</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                          <span>Point-of-sale (POS) integration</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                          <span>Customer loyalty and marketing automation</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                          <span>Supply chain and vendor management</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                          <span>Sales analytics and forecasting</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Advanced ERP Capabilities */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Advanced ERP Capabilities</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Comprehensive ERP features and modules to support every aspect of your business operations
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              <Card className="border-l-4 border-l-blue-500 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg text-blue-600">Financial Management</CardTitle>
                  <CardDescription>Complete financial control and reporting</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div>• Multi-currency accounting and consolidation</div>
                    <div>• Real-time financial reporting and analytics</div>
                    <div>• Budget planning and expense management</div>
                    <div>• Automated invoicing and payment processing</div>
                    <div>• Tax compliance and regulatory reporting</div>
                    <div>• Inter-company transactions and eliminations</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-green-500 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg text-green-600">Supply Chain Management</CardTitle>
                  <CardDescription>End-to-end supply chain optimization</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div>• Advanced demand forecasting and planning</div>
                    <div>• Supplier relationship and procurement management</div>
                    <div>• Inventory optimization and warehouse management</div>
                    <div>• Quality control and batch tracking</div>
                    <div>• Transportation and logistics management</div>
                    <div>• Vendor performance monitoring and analytics</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-purple-500 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg text-purple-600">Human Capital Management</CardTitle>
                  <CardDescription>Comprehensive workforce management</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div>• Employee lifecycle management</div>
                    <div>• Payroll processing and benefits administration</div>
                    <div>• Performance management and appraisals</div>
                    <div>• Learning and development tracking</div>
                    <div>• Time and attendance management</div>
                    <div>• Talent acquisition and onboarding</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-orange-500 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg text-orange-600">Customer Relationship Management</CardTitle>
                  <CardDescription>360-degree customer view and engagement</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div>• Lead generation and opportunity management</div>
                    <div>• Sales pipeline and forecasting</div>
                    <div>• Customer service and support ticketing</div>
                    <div>• Marketing automation and campaigns</div>
                    <div>• Customer analytics and segmentation</div>
                    <div>• Contract and subscription management</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-red-500 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg text-red-600">Manufacturing Operations</CardTitle>
                  <CardDescription>Complete manufacturing process control</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div>• Production planning and scheduling</div>
                    <div>• Shop floor control and monitoring</div>
                    <div>• Bill of materials (BOM) management</div>
                    <div>• Work order tracking and costing</div>
                    <div>• Equipment maintenance and reliability</div>
                    <div>• Quality assurance and control</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-teal-500 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg text-teal-600">Business Intelligence & Analytics</CardTitle>
                  <CardDescription>Data-driven insights and reporting</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div>• Real-time dashboards and KPI monitoring</div>
                    <div>• Advanced analytics and predictive modeling</div>
                    <div>• Custom report builder and data visualization</div>
                    <div>• Executive scorecards and performance metrics</div>
                    <div>• Data warehousing and ETL processes</div>
                    <div>• Mobile business intelligence applications</div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="bg-gradient-to-r from-gray-50 to-blue-50 p-8 rounded-xl">
              <h3 className="text-2xl font-semibold mb-6 text-center">ERP Integration Ecosystem</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold mb-4 text-blue-600">Technology Integrations</h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between items-center p-2 bg-white rounded">
                      <span>E-commerce Platforms</span>
                      <div className="flex gap-1">
                        <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs">Shopify</span>
                        <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs">WooCommerce</span>
                        <span className="px-2 py-1 bg-purple-100 text-purple-800 rounded text-xs">Magento</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-white rounded">
                      <span>Payment Gateways</span>
                      <div className="flex gap-1">
                        <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs">Stripe</span>
                        <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs">PayPal</span>
                        <span className="px-2 py-1 bg-orange-100 text-orange-800 rounded text-xs">Square</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-white rounded">
                      <span>Business Intelligence</span>
                      <div className="flex gap-1">
                        <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs">Power BI</span>
                        <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs">Tableau</span>
                        <span className="px-2 py-1 bg-purple-100 text-purple-800 rounded text-xs">Qlik</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-white rounded">
                      <span>Marketing Automation</span>
                      <div className="flex gap-1">
                        <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs">HubSpot</span>
                        <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs">Mailchimp</span>
                        <span className="px-2 py-1 bg-orange-100 text-orange-800 rounded text-xs">Marketo</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-4 text-green-600">System Integrations</h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between items-center p-2 bg-white rounded">
                      <span>Legacy Systems</span>
                      <div className="flex gap-1">
                        <span className="px-2 py-1 bg-gray-100 text-gray-800 rounded text-xs">AS/400</span>
                        <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs">SAP</span>
                        <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs">Oracle</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-white rounded">
                      <span>Cloud Storage</span>
                      <div className="flex gap-1">
                        <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs">AWS S3</span>
                        <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs">Google Drive</span>
                        <span className="px-2 py-1 bg-purple-100 text-purple-800 rounded text-xs">OneDrive</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-white rounded">
                      <span>Communication</span>
                      <div className="flex gap-1">
                        <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs">Slack</span>
                        <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs">Teams</span>
                        <span className="px-2 py-1 bg-orange-100 text-orange-800 rounded text-xs">Zoom</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-white rounded">
                      <span>Document Management</span>
                      <div className="flex gap-1">
                        <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs">SharePoint</span>
                        <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs">DocuSign</span>
                        <span className="px-2 py-1 bg-purple-100 text-purple-800 rounded text-xs">Box</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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

        {/* Comprehensive ERP Implementation Strategies */}
        <section className="py-24 bg-gradient-to-br from-blue-50 to-indigo-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-8xl mx-auto">
              <h2 className="text-4xl font-bold mb-16 text-center bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Enterprise ERP Implementation & Optimization Strategies
              </h2>
              
              <div className="grid lg:grid-cols-2 gap-12 mb-16">
                <Card className="shadow-2xl border-0 overflow-hidden">
                  <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-8 text-white">
                    <h3 className="text-2xl font-bold mb-4">Odoo ERP Complete Implementation</h3>
                    <div className="grid grid-cols-2 gap-4 text-blue-100">
                      <div>Timeline: 8-16 weeks</div>
                      <div>Modules: 15+ available</div>
                      <div>Customization: Full support</div>
                      <div>Training: Comprehensive</div>
                    </div>
                  </div>
                  <CardContent className="p-8">
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold mb-3 text-blue-700">Implementation Methodology</h4>
                        <div className="bg-blue-50 p-4 rounded-lg text-sm">
                          <p className="text-gray-700 mb-3">
                            <strong>Discovery & Analysis:</strong> Comprehensive business process mapping, current system assessment, 
                            stakeholder interviews, and requirement gathering with gap analysis for optimal ERP configuration.
                          </p>
                          <p className="text-gray-700 mb-3">
                            <strong>System Design & Configuration:</strong> Database architecture design, module configuration, 
                            workflow automation setup, user role definition, and integration planning with existing systems.
                          </p>
                          <p className="text-gray-700">
                            <strong>Deployment & Go-Live:</strong> Phased rollout strategy, data migration, user training, 
                            performance optimization, and post-implementation support with continuous improvement processes.
                          </p>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3 text-green-700">Core Module Implementation</h4>
                        <div className="space-y-3">
                          <div className="bg-green-50 p-3 rounded-lg text-sm">
                            <div className="font-medium mb-1">Financial Management</div>
                            <p className="text-gray-700">Complete accounting suite with multi-currency support, automated invoicing, 
                            expense management, financial reporting, and compliance tracking.</p>
                          </div>
                          <div className="bg-purple-50 p-3 rounded-lg text-sm">
                            <div className="font-medium mb-1">Sales & CRM</div>
                            <p className="text-gray-700">Lead management, opportunity tracking, quote generation, sales automation, 
                            customer relationship management, and sales analytics.</p>
                          </div>
                          <div className="bg-orange-50 p-3 rounded-lg text-sm">
                            <div className="font-medium mb-1">Inventory & Manufacturing</div>
                            <p className="text-gray-700">Real-time inventory tracking, warehouse management, manufacturing planning, 
                            quality control, and supply chain optimization.</p>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3 text-purple-700">Implementation Success Metrics</h4>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="bg-purple-50 p-3 rounded text-center">
                            <div className="font-bold text-2xl text-purple-600 mb-1">95%</div>
                            <div className="text-xs text-gray-700">User Adoption Rate</div>
                          </div>
                          <div className="bg-green-50 p-3 rounded text-center">
                            <div className="font-bold text-2xl text-green-600 mb-1">40%</div>
                            <div className="text-xs text-gray-700">Process Efficiency Gain</div>
                          </div>
                          <div className="bg-blue-50 p-3 rounded text-center">
                            <div className="font-bold text-2xl text-blue-600 mb-1">30%</div>
                            <div className="text-xs text-gray-700">Cost Reduction</div>
                          </div>
                          <div className="bg-orange-50 p-3 rounded text-center">
                            <div className="font-bold text-2xl text-orange-600 mb-1">99.9%</div>
                            <div className="text-xs text-gray-700">System Uptime</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-2xl border-0 overflow-hidden">
                  <div className="bg-gradient-to-r from-green-600 to-emerald-700 p-8 text-white">
                    <h3 className="text-2xl font-bold mb-4">Custom Business Process Automation</h3>
                    <div className="grid grid-cols-2 gap-4 text-green-100">
                      <div>Workflow Design: Custom</div>
                      <div>Automation: Advanced</div>
                      <div>Integration: Seamless</div>
                      <div>Scalability: Enterprise</div>
                    </div>
                  </div>
                  <CardContent className="p-8">
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold mb-3 text-green-700">Workflow Automation Framework</h4>
                        <div className="bg-green-50 p-4 rounded-lg text-sm">
                          <p className="text-gray-700 mb-3">
                            <strong>Process Mapping & Optimization:</strong> Current state analysis, future state design, 
                            bottleneck identification, and workflow optimization with automated decision points and approval routing.
                          </p>
                          <p className="text-gray-700 mb-3">
                            <strong>Business Rule Engine:</strong> Custom business logic implementation, automated calculations, 
                            validation rules, notification systems, and exception handling with escalation procedures.
                          </p>
                          <p className="text-gray-700">
                            <strong>Integration Automation:</strong> Third-party system integration, data synchronization, 
                            API development, real-time data exchange, and automated reporting across platforms.
                          </p>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3 text-blue-700">Advanced Automation Features</h4>
                        <div className="space-y-3">
                          <div className="bg-blue-50 p-3 rounded-lg text-sm">
                            <div className="font-medium mb-1">Intelligent Document Processing</div>
                            <p className="text-gray-700">Automated invoice processing, OCR document scanning, 
                            data extraction, validation, and automatic posting to appropriate accounts.</p>
                          </div>
                          <div className="bg-purple-50 p-3 rounded-lg text-sm">
                            <div className="font-medium mb-1">Predictive Analytics Integration</div>
                            <p className="text-gray-700">Demand forecasting, inventory optimization, sales predictions, 
                            and automated reorder point calculations based on historical data.</p>
                          </div>
                          <div className="bg-orange-50 p-3 rounded-lg text-sm">
                            <div className="font-medium mb-1">Multi-Channel Communication</div>
                            <p className="text-gray-700">Automated customer communications, email marketing integration, 
                            SMS notifications, and social media connectivity for comprehensive engagement.</p>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3 text-orange-700">Automation Impact</h4>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="bg-orange-50 p-3 rounded text-center">
                            <div className="font-bold text-2xl text-orange-600 mb-1">80%</div>
                            <div className="text-xs text-gray-700">Manual Task Reduction</div>
                          </div>
                          <div className="bg-green-50 p-3 rounded text-center">
                            <div className="font-bold text-2xl text-green-600 mb-1">60%</div>
                            <div className="text-xs text-gray-700">Processing Time Reduction</div>
                          </div>
                          <div className="bg-blue-50 p-3 rounded text-center">
                            <div className="font-bold text-2xl text-blue-600 mb-1">99%</div>
                            <div className="text-xs text-gray-700">Data Accuracy</div>
                          </div>
                          <div className="bg-purple-50 p-3 rounded text-center">
                            <div className="font-bold text-2xl text-purple-600 mb-1">24/7</div>
                            <div className="text-xs text-gray-700">Automated Operations</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-gradient-to-r from-gray-50 to-blue-50 p-12 rounded-2xl shadow-xl">
                <h3 className="text-3xl font-semibold mb-8 text-center">ERP Implementation Roadmap</h3>
                <div className="grid lg:grid-cols-4 gap-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white text-2xl font-bold">1</span>
                    </div>
                    <h4 className="font-semibold mb-3">Discovery & Planning</h4>
                    <div className="text-sm text-gray-700 space-y-2">
                      <div>Business process analysis</div>
                      <div>Requirements gathering</div>
                      <div>System architecture design</div>
                      <div>Implementation planning</div>
                    </div>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white text-2xl font-bold">2</span>
                    </div>
                    <h4 className="font-semibold mb-3">Configuration & Development</h4>
                    <div className="text-sm text-gray-700 space-y-2">
                      <div>Module configuration</div>
                      <div>Custom development</div>
                      <div>Integration setup</div>
                      <div>Testing & validation</div>
                    </div>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white text-2xl font-bold">3</span>
                    </div>
                    <h4 className="font-semibold mb-3">Deployment & Training</h4>
                    <div className="text-sm text-gray-700 space-y-2">
                      <div>Data migration</div>
                      <div>User training programs</div>
                      <div>Go-live support</div>
                      <div>Performance monitoring</div>
                    </div>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white text-2xl font-bold">4</span>
                    </div>
                    <h4 className="font-semibold mb-3">Optimization & Support</h4>
                    <div className="text-sm text-gray-700 space-y-2">
                      <div>Performance optimization</div>
                      <div>Continuous improvement</div>
                      <div>Ongoing support</div>
                      <div>Feature enhancements</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ERP Partnership & Support */}
        <section className="py-16 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">
                Enterprise ERP Partnership & Long-term Success
              </h2>
              
              <div className="grid lg:grid-cols-3 gap-8 mb-12">
                <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                  <CardHeader>
                    <CardTitle className="text-xl flex items-center">
                      🚀 Implementation Excellence
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-blue-100 mb-4">
                      Comprehensive Odoo ERP implementation with industry best practices, 
                      custom workflows, and seamless integration capabilities.
                    </p>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center">
                        <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                        Complete business process mapping
                      </div>
                      <div className="flex items-center">
                        <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                        Custom module development
                      </div>
                      <div className="flex items-center">
                        <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                        Data migration & validation
                      </div>
                      <div className="flex items-center">
                        <span className="w-2 h-2 bg-orange-400 rounded-full mr-2"></span>
                        User training & adoption
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                  <CardHeader>
                    <CardTitle className="text-xl flex items-center">
                      ⚙️ Optimization & Support
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-blue-100 mb-4">
                      Ongoing ERP optimization with performance monitoring, 
                      feature enhancements, and proactive technical support.
                    </p>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center">
                        <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></span>
                        24/7 system monitoring
                      </div>
                      <div className="flex items-center">
                        <span className="w-2 h-2 bg-pink-400 rounded-full mr-2"></span>
                        Performance optimization
                      </div>
                      <div className="flex items-center">
                        <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></span>
                        Regular system updates
                      </div>
                      <div className="flex items-center">
                        <span className="w-2 h-2 bg-red-400 rounded-full mr-2"></span>
                        Proactive issue resolution
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                  <CardHeader>
                    <CardTitle className="text-xl flex items-center">
                      📈 Growth & Scalability
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-blue-100 mb-4">
                      Scalable ERP solutions designed to grow with your business, 
                      supporting expansion and evolving requirements.
                    </p>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center">
                        <span className="w-2 h-2 bg-indigo-400 rounded-full mr-2"></span>
                        Multi-company support
                      </div>
                      <div className="flex items-center">
                        <span className="w-2 h-2 bg-emerald-400 rounded-full mr-2"></span>
                        International capabilities
                      </div>
                      <div className="flex items-center">
                        <span className="w-2 h-2 bg-amber-400 rounded-full mr-2"></span>
                        Advanced analytics & BI
                      </div>
                      <div className="flex items-center">
                        <span className="w-2 h-2 bg-rose-400 rounded-full mr-2"></span>
                        Cloud & on-premise options
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="text-center">
                <Button size="lg" className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-300">
                  Transform Your Business Operations
                </Button>
                <p className="mt-4 text-purple-200">
                  Ready to streamline your operations? Let's discuss your ERP transformation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Advanced ERP Features & Capabilities */}
        <section className="py-16 bg-gradient-to-br from-slate-50 to-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-slate-600 to-gray-700 bg-clip-text text-transparent">
                Advanced ERP Features & Enterprise Capabilities
              </h2>
              
              <div className="grid lg:grid-cols-2 gap-8 mb-12">
                <Card className="shadow-xl border-0">
                  <CardHeader className="bg-gradient-to-r from-slate-600 to-gray-700 text-white">
                    <CardTitle className="text-xl">Multi-Company & Multi-Currency</CardTitle>
                    <CardDescription className="text-slate-100">Global business operations support</CardDescription>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="bg-slate-50 p-4 rounded-lg text-sm">
                        <h4 className="font-medium mb-2">International Operations</h4>
                        <p className="text-gray-700">Support for multiple companies, currencies, languages, and tax systems 
                        with consolidated reporting and inter-company transactions.</p>
                      </div>
                      <div className="bg-blue-50 p-4 rounded-lg text-sm">
                        <h4 className="font-medium mb-2">Compliance & Localization</h4>
                        <p className="text-gray-700">Country-specific tax calculations, regulatory compliance, 
                        local reporting requirements, and automated compliance monitoring.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-xl border-0">
                  <CardHeader className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
                    <CardTitle className="text-xl">Advanced Integration Capabilities</CardTitle>
                    <CardDescription className="text-blue-100">Seamless third-party connectivity</CardDescription>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="bg-blue-50 p-4 rounded-lg text-sm">
                        <h4 className="font-medium mb-2">API & Webhook Integration</h4>
                        <p className="text-gray-700">RESTful APIs, webhook automation, real-time data synchronization, 
                        and custom connector development for legacy systems.</p>
                      </div>
                      <div className="bg-green-50 p-4 rounded-lg text-sm">
                        <h4 className="font-medium mb-2">Business Intelligence</h4>
                        <p className="text-gray-700">Advanced analytics, custom dashboards, predictive reporting, 
                        and integration with BI tools like Tableau and Power BI.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-xl">
                <h3 className="text-2xl font-semibold mb-6 text-center">ERP Module Ecosystem</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Package className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="font-semibold mb-2">Core Operations</h4>
                    <div className="text-sm text-gray-600 space-y-1">
                      <div>Sales & CRM</div>
                      <div>Purchase Management</div>
                      <div>Inventory Control</div>
                      <div>Manufacturing</div>
                    </div>
                  </div>

                  <div className="text-center">
                    <div className="bg-gradient-to-br from-green-500 to-green-600 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <CreditCard className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="font-semibold mb-2">Financial Management</h4>
                    <div className="text-sm text-gray-600 space-y-1">
                      <div>Accounting & Invoicing</div>
                      <div>Expense Management</div>
                      <div>Asset Management</div>
                      <div>Financial Reporting</div>
                    </div>
                  </div>

                  <div className="text-center">
                    <div className="bg-gradient-to-br from-purple-500 to-purple-600 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="font-semibold mb-2">Human Resources</h4>
                    <div className="text-sm text-gray-600 space-y-1">
                      <div>Employee Management</div>
                      <div>Payroll Processing</div>
                      <div>Time & Attendance</div>
                      <div>Performance Management</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ERP Success Stories */}
        <section className="py-12 bg-gradient-to-r from-emerald-50 to-teal-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-2xl font-bold mb-8 text-emerald-700">ERP Transformation Success Stories</h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="text-3xl font-bold text-emerald-600 mb-2">85%</div>
                  <div className="text-sm font-medium text-gray-700 mb-1">Process Automation</div>
                  <div className="text-xs text-gray-600">Manufacturing Company</div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="text-3xl font-bold text-blue-600 mb-2">60%</div>
                  <div className="text-sm font-medium text-gray-700 mb-1">Cost Reduction</div>
                  <div className="text-xs text-gray-600">Retail Chain</div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="text-3xl font-bold text-purple-600 mb-2">200%</div>
                  <div className="text-sm font-medium text-gray-700 mb-1">ROI Achievement</div>
                  <div className="text-xs text-gray-600">Services Company</div>
                </div>
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

        {/* Odoo Modules Matrix */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Advanced Module Coverage */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h3 className="text-2xl font-semibold mb-4">Advanced Module Coverage & Customization</h3>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Module Category</TableHead>
                      <TableHead>Core Modules</TableHead>
                      <TableHead>Advanced Features</TableHead>
                      <TableHead>Custom Workflows</TableHead>
                      <TableHead>Integration Points</TableHead>
                      <TableHead>Industry Variants</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">Sales & CRM</TableCell>
                      <TableCell>CRM, Sales, Website CRM</TableCell>
                      <TableCell>Lead scoring, automated follow-ups, quotation builder</TableCell>
                      <TableCell>Multi-stage approval, territory management</TableCell>
                      <TableCell>Mailchimp, HubSpot, Salesforce sync</TableCell>
                      <TableCell>B2B portal, subscription billing</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Inventory & Manufacturing</TableCell>
                      <TableCell>Inventory, MRP, Quality</TableCell>
                      <TableCell>Barcode scanning, lot tracking, quality control</TableCell>
                      <TableCell>Just-in-time, make-to-order, dropshipping</TableCell>
                      <TableCell>WMS systems, IoT sensors, PLCs</TableCell>
                      <TableCell>Food traceability, pharma serialization</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Accounting & Finance</TableCell>
                      <TableCell>Accounting, Invoicing, Expenses</TableCell>
                      <TableCell>Multi-currency, inter-company, budget control</TableCell>
                      <TableCell>Automated reconciliation, payment terms</TableCell>
                      <TableCell>Banks APIs, payment gateways, tax systems</TableCell>
                      <TableCell>IFRS reporting, regulatory compliance</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">HR & Project</TableCell>
                      <TableCell>HR, Payroll, Project, Timesheet</TableCell>
                      <TableCell>Performance reviews, recruitment, training</TableCell>
                      <TableCell>Approval chains, automated calculations</TableCell>
                      <TableCell>HRIS systems, time tracking tools</TableCell>
                      <TableCell>Multi-country payroll, union rules</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </div>

            {/* Migration Strategies */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h3 className="text-2xl font-semibold mb-4">Data Migration Strategies & Approaches</h3>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Legacy System</TableHead>
                      <TableHead>Migration Method</TableHead>
                      <TableHead>Data Volume Capacity</TableHead>
                      <TableHead>Downtime Required</TableHead>
                      <TableHead>Risk Level</TableHead>
                      <TableHead>Rollback Strategy</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">QuickBooks/Sage</TableCell>
                      <TableCell>Direct export/import with validation</TableCell>
                      <TableCell>Up to 100k records</TableCell>
                      <TableCell>4-8 hours</TableCell>
                      <TableCell>Low</TableCell>
                      <TableCell>Database restore from backup</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">SAP Business One</TableCell>
                      <TableCell>ETL pipeline with staged migration</TableCell>
                      <TableCell>Up to 1M records</TableCell>
                      <TableCell>12-24 hours</TableCell>
                      <TableCell>Medium</TableCell>
                      <TableCell>Parallel run for 2 weeks</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Legacy ERP</TableCell>
                      <TableCell>Custom connectors with data mapping</TableCell>
                      <TableCell>Up to 10M records</TableCell>
                      <TableCell>24-48 hours</TableCell>
                      <TableCell>High</TableCell>
                      <TableCell>Phased rollout with gradual cutover</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Excel/Access</TableCell>
                      <TableCell>Template-based import with cleanup</TableCell>
                      <TableCell>Up to 50k records</TableCell>
                      <TableCell>2-4 hours</TableCell>
                      <TableCell>Low</TableCell>
                      <TableCell>Keep old system as reference</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </div>

            {/* Performance Optimization */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h3 className="text-2xl font-semibold mb-4">Performance Optimization & Scaling</h3>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>User Scale</TableHead>
                      <TableHead>Server Specs</TableHead>
                      <TableHead>Database Config</TableHead>
                      <TableHead>Caching Strategy</TableHead>
                      <TableHead>Response Time SLA</TableHead>
                      <TableHead>Monitoring Tools</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">1-10 users</TableCell>
                      <TableCell>2 vCPU, 4GB RAM, SSD</TableCell>
                      <TableCell>PostgreSQL 13+, basic tuning</TableCell>
                      <TableCell>Browser cache, static assets CDN</TableCell>
                      <TableCell>Sub 2s page loads</TableCell>
                      <TableCell>Basic logging, uptime monitoring</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">10-50 users</TableCell>
                      <TableCell>4 vCPU, 8GB RAM, SSD RAID</TableCell>
                      <TableCell>Optimized queries, connection pooling</TableCell>
                      <TableCell>Redis session store, query cache</TableCell>
                      <TableCell>Sub 1.5s page loads</TableCell>
                      <TableCell>APM, database monitoring</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">50-200 users</TableCell>
                      <TableCell>8 vCPU, 16GB RAM, NVMe</TableCell>
                      <TableCell>Read replicas, query optimization</TableCell>
                      <TableCell>Multi-layer cache, CDN assets</TableCell>
                      <TableCell>Sub 1s page loads</TableCell>
                      <TableCell>Full observability stack</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">200+ users</TableCell>
                      <TableCell>Load balanced cluster</TableCell>
                      <TableCell>Sharded database, archived data</TableCell>
                      <TableCell>Distributed cache, edge computing</TableCell>
                      <TableCell>Sub 800ms page loads</TableCell>
                      <TableCell>AI-powered incident response</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </div>

            <h3 className="text-2xl font-semibold mb-4">Standard Odoo Modules Coverage</h3>
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