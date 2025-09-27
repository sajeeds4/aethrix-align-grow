import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Cloud as CloudIcon, Shield, Lock, Server, Gauge, ArrowRight, ChevronRight, Globe, Database } from "lucide-react";
import { useEffect } from "react";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const PageHead = () => {
  useEffect(() => {
    document.title = "Cloud & Infrastructure | Aethrix Systems";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Cloud migration, security, observability, and cost management on AWS/GCP with IaC and SRE best practices.");
  }, []);
  return null;
};

const Cloud = () => {
  const pillars = [
    { icon: CloudIcon, title: "Migration & Modernization", description: "Lift-and-shift and re-architecture paths with zero-downtime strategies." },
    { icon: Server, title: "Infrastructure as Code", description: "Repeatable, auditable environments using Terraform and GitOps." },
    { icon: Shield, title: "Security & Compliance", description: "Identity, encryption, network hardening, and policy as code." },
    { icon: Gauge, title: "Observability & Cost", description: "Monitoring, alerting, and cost controls to keep systems healthy and lean." },
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
            <li className="text-foreground">Cloud & Infrastructure</li>
          </ol>
        </nav>
        {/* Hero */}
        <section className="py-24 bg-gradient-hero text-primary-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-display mb-6">
                Cloud & Infrastructure that <span className="text-accent">Scales</span>
              </motion.h1>
              <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="text-subheadline mb-8">
                Migrate, secure, and operate on AWS/GCP with best practices baked in—from VPC design to production SRE.
              </motion.p>
              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}>
                <Button size="lg" variant="hero" asChild>
                  <Link to="/consultation" className="flex items-center gap-2">
                    Plan Your Migration
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Pillars */}
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
                  <CloudIcon className="w-4 h-4" />
                  Cloud Architecture
                </div>
                <h2 className="text-3xl font-bold mb-4">Enterprise Cloud Solutions</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Scalable, secure, and cost-effective cloud infrastructure that grows with your business.
                </p>
              </motion.div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {pillars.map((p, i) => {
                const Icon = p.icon
                return (
                  <motion.div 
                    key={p.title} 
                    initial={{ opacity: 0, y: 30 }} 
                    whileInView={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 0.6, delay: i * 0.1 }} 
                    viewport={{ once: true }}
                    className="group"
                  >
                    <Card className="h-full bg-gradient-to-br from-card via-card to-card/50 border-border/50 hover:border-accent/30 transition-all duration-300 hover:shadow-xl overflow-hidden relative">
                      {/* Background accent */}
                      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-accent/5 to-transparent rounded-bl-full"></div>
                      
                      <CardHeader className="relative z-10">
                        <motion.div 
                          className="w-14 h-14 bg-gradient-to-br from-accent to-accent/80 rounded-xl flex items-center justify-center shadow-lg mb-4"
                          whileHover={{ scale: 1.05 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <Icon className="w-7 h-7 text-white" />
                        </motion.div>
                        <CardTitle className="group-hover:text-accent transition-colors duration-300 mb-2">
                          {p.title}
                        </CardTitle>
                        <CardDescription className="text-base leading-relaxed">
                          {p.description}
                        </CardDescription>
                      </CardHeader>
                      
                      {/* Hover effect indicator */}
                      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-accent/20 via-accent to-accent/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                    </Card>
                  </motion.div>
                )
              })}
            </div>

            {/* Cloud Infrastructure Diagram */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-xl border border-border/20"
            >
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-4">Multi-Cloud Architecture</h3>
                <p className="text-muted-foreground">Resilient, scalable infrastructure design</p>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Frontend Layer */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 mb-4">
                    <Globe className="w-8 h-8 text-white mx-auto mb-2" />
                    <h4 className="text-white font-semibold">Frontend</h4>
                  </div>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div>CDN Distribution</div>
                    <div>Edge Computing</div>
                    <div>Static Site Hosting</div>
                  </div>
                </motion.div>

                {/* Application Layer */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-6 mb-4">
                    <Server className="w-8 h-8 text-white mx-auto mb-2" />
                    <h4 className="text-white font-semibold">Application</h4>
                  </div>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div>Kubernetes Clusters</div>
                    <div>Auto Scaling</div>
                    <div>Load Balancing</div>
                  </div>
                </motion.div>

                {/* Data Layer */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-6 mb-4">
                    <Database className="w-8 h-8 text-white mx-auto mb-2" />
                    <h4 className="text-white font-semibold">Data</h4>
                  </div>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div>Multi-Region DBs</div>
                    <div>Backup & Recovery</div>
                    <div>Data Analytics</div>
                  </div>
                </motion.div>
              </div>

              {/* Connection Lines */}
              <div className="flex justify-center items-center mt-8 space-x-8">
                <div className="hidden lg:block w-16 h-0.5 bg-gradient-to-r from-blue-400 to-green-400"></div>
                <div className="hidden lg:block w-16 h-0.5 bg-gradient-to-r from-green-400 to-purple-400"></div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Comprehensive Cloud Migration Strategies */}
        <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-8xl mx-auto">
              <h2 className="text-4xl font-bold mb-16 text-center bg-gradient-to-r from-slate-600 to-blue-600 bg-clip-text text-transparent">
                Enterprise Cloud Migration Strategies & Best Practices
              </h2>
              
              <div className="grid lg:grid-cols-2 gap-12 mb-16">
                <Card className="shadow-2xl border-0 overflow-hidden">
                  <div className="bg-gradient-to-r from-blue-600 to-cyan-700 p-8 text-white">
                    <h3 className="text-2xl font-bold mb-4">Lift-and-Shift Migration</h3>
                    <div className="grid grid-cols-2 gap-4 text-blue-100">
                      <div>Speed: Fast Implementation</div>
                      <div>Risk: Low Technical Risk</div>
                      <div>Effort: Minimal Code Changes</div>
                      <div>Benefits: Quick Time-to-Market</div>
                    </div>
                  </div>
                  <CardContent className="p-8">
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold mb-3 text-blue-700">Migration Approach</h4>
                        <div className="bg-blue-50 p-4 rounded-lg text-sm">
                          <p className="text-gray-700 mb-3">
                            <strong>Discovery & Assessment:</strong> Comprehensive inventory of existing infrastructure, 
                            dependencies mapping, performance baselines, and compatibility analysis for cloud readiness.
                          </p>
                          <p className="text-gray-700 mb-3">
                            <strong>Migration Planning:</strong> Wave-based migration strategy, dependency sequencing, 
                            rollback procedures, and detailed timeline with resource allocation and testing phases.
                          </p>
                          <p className="text-gray-700">
                            <strong>Execution & Validation:</strong> Automated migration tools, data synchronization, 
                            comprehensive testing, performance validation, and gradual traffic cutover strategies.
                          </p>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3 text-green-700">Technical Implementation</h4>
                        <div className="space-y-3">
                          <div className="bg-green-50 p-3 rounded-lg text-sm">
                            <div className="font-medium mb-1">VM Migration & Rightsizing</div>
                            <p className="text-gray-700">AWS Server Migration Service (SMS) and CloudEndure for automated VM replication 
                            with intelligent instance sizing recommendations based on actual usage patterns.</p>
                          </div>
                          <div className="bg-purple-50 p-3 rounded-lg text-sm">
                            <div className="font-medium mb-1">Database Migration</div>
                            <p className="text-gray-700">AWS Database Migration Service (DMS) with schema conversion tools, 
                            continuous data replication, and minimal downtime cutover procedures.</p>
                          </div>
                          <div className="bg-orange-50 p-3 rounded-lg text-sm">
                            <div className="font-medium mb-1">Network & Security</div>
                            <p className="text-gray-700">VPC setup with proper subnet architecture, security group configuration, 
                            VPN/Direct Connect for hybrid connectivity, and DNS migration strategies.</p>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3 text-purple-700">Success Metrics</h4>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="bg-purple-50 p-3 rounded text-center">
                            <div className="font-bold text-2xl text-purple-600 mb-1">30-90</div>
                            <div className="text-xs text-gray-700">Days Migration Time</div>
                          </div>
                          <div className="bg-green-50 p-3 rounded text-center">
                            <div className="font-bold text-2xl text-green-600 mb-1">15-25%</div>
                            <div className="text-xs text-gray-700">Immediate Cost Savings</div>
                          </div>
                          <div className="bg-blue-50 p-3 rounded text-center">
                            <div className="font-bold text-2xl text-blue-600 mb-1">99.9%</div>
                            <div className="text-xs text-gray-700">Application Compatibility</div>
                          </div>
                          <div className="bg-orange-50 p-3 rounded text-center">
                            <div className="font-bold text-2xl text-orange-600 mb-1">4-8h</div>
                            <div className="text-xs text-gray-700">Maximum Downtime</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-2xl border-0 overflow-hidden">
                  <div className="bg-gradient-to-r from-green-600 to-emerald-700 p-8 text-white">
                    <h3 className="text-2xl font-bold mb-4">Cloud-Native Modernization</h3>
                    <div className="grid grid-cols-2 gap-4 text-green-100">
                      <div>Speed: Phased Approach</div>
                      <div>Risk: Managed Transformation</div>
                      <div>Effort: Architecture Redesign</div>
                      <div>Benefits: Maximum Cloud ROI</div>
                    </div>
                  </div>
                  <CardContent className="p-8">
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold mb-3 text-green-700">Modernization Strategy</h4>
                        <div className="bg-green-50 p-4 rounded-lg text-sm">
                          <p className="text-gray-700 mb-3">
                            <strong>Application Portfolio Analysis:</strong> Business value assessment, technical debt analysis, 
                            modernization complexity scoring, and ROI prioritization matrix for strategic decision-making.
                          </p>
                          <p className="text-gray-700 mb-3">
                            <strong>Architecture Redesign:</strong> Microservices decomposition, API-first design, 
                            event-driven architecture, containerization strategy, and cloud-native service integration.
                          </p>
                          <p className="text-gray-700">
                            <strong>DevOps & Automation:</strong> CI/CD pipeline implementation, infrastructure as code, 
                            automated testing, deployment automation, and comprehensive monitoring solutions.
                          </p>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3 text-blue-700">Technology Stack Modernization</h4>
                        <div className="space-y-3">
                          <div className="bg-blue-50 p-3 rounded-lg text-sm">
                            <div className="font-medium mb-1">Containerization & Orchestration</div>
                            <p className="text-gray-700">Docker containerization with Kubernetes orchestration on Amazon EKS/GKE, 
                            including service mesh implementation with Istio for advanced traffic management.</p>
                          </div>
                          <div className="bg-purple-50 p-3 rounded-lg text-sm">
                            <div className="font-medium mb-1">Serverless Architecture</div>
                            <p className="text-gray-700">AWS Lambda/Cloud Functions for event-driven processing, API Gateway for serverless APIs, 
                            and managed services for databases, messaging, and analytics.</p>
                          </div>
                          <div className="bg-orange-50 p-3 rounded-lg text-sm">
                            <div className="font-medium mb-1">Data Modernization</div>
                            <p className="text-gray-700">Migration to cloud-native databases, data lake architecture with S3/BigQuery, 
                            real-time analytics with Kinesis/Dataflow, and ML/AI service integration.</p>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3 text-orange-700">Transformation Outcomes</h4>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="bg-orange-50 p-3 rounded text-center">
                            <div className="font-bold text-2xl text-orange-600 mb-1">6-18</div>
                            <div className="text-xs text-gray-700">Months Timeline</div>
                          </div>
                          <div className="bg-green-50 p-3 rounded text-center">
                            <div className="font-bold text-2xl text-green-600 mb-1">40-60%</div>
                            <div className="text-xs text-gray-700">Performance Improvement</div>
                          </div>
                          <div className="bg-blue-50 p-3 rounded text-center">
                            <div className="font-bold text-2xl text-blue-600 mb-1">70%</div>
                            <div className="text-xs text-gray-700">Faster Feature Delivery</div>
                          </div>
                          <div className="bg-purple-50 p-3 rounded text-center">
                            <div className="font-bold text-2xl text-purple-600 mb-1">99.99%</div>
                            <div className="text-xs text-gray-700">Target Availability</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="grid lg:grid-cols-2 gap-12">
                <Card className="shadow-2xl border-0 overflow-hidden">
                  <div className="bg-gradient-to-r from-purple-600 to-pink-700 p-8 text-white">
                    <h3 className="text-2xl font-bold mb-4">Hybrid Cloud Strategy</h3>
                    <div className="grid grid-cols-2 gap-4 text-purple-100">
                      <div>Speed: Flexible Timeline</div>
                      <div>Risk: Balanced Approach</div>
                      <div>Effort: Selective Migration</div>
                      <div>Benefits: Gradual Transformation</div>
                    </div>
                  </div>
                  <CardContent className="p-8">
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold mb-3 text-purple-700">Hybrid Architecture Design</h4>
                        <div className="bg-purple-50 p-4 rounded-lg text-sm">
                          <p className="text-gray-700 mb-3">
                            <strong>Workload Classification:</strong> Data sensitivity analysis, compliance requirements assessment, 
                            performance latency requirements, and integration dependencies for optimal placement decisions.
                          </p>
                          <p className="text-gray-700 mb-3">
                            <strong>Connectivity & Integration:</strong> AWS Direct Connect/Cloud Interconnect setup, 
                            VPN gateways, API integration patterns, and data synchronization strategies.
                          </p>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3 text-blue-700">Implementation Approach</h4>
                        <div className="space-y-3">
                          <div className="bg-blue-50 p-3 rounded-lg text-sm">
                            <div className="font-medium mb-1">Network Architecture</div>
                            <p className="text-gray-700">Site-to-site VPN, dedicated connections, hybrid DNS, 
                            and unified identity management across environments.</p>
                          </div>
                          <div className="bg-green-50 p-3 rounded-lg text-sm">
                            <div className="font-medium mb-1">Data Management</div>
                            <p className="text-gray-700">Cross-environment data replication, backup strategies, 
                            disaster recovery, and compliance data governance.</p>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3 text-green-700">Hybrid Benefits</h4>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="bg-green-50 p-3 rounded text-center">
                            <div className="font-bold text-2xl text-green-600 mb-1">100%</div>
                            <div className="text-xs text-gray-700">Compliance Maintained</div>
                          </div>
                          <div className="bg-blue-50 p-3 rounded text-center">
                            <div className="font-bold text-2xl text-blue-600 mb-1">50%</div>
                            <div className="text-xs text-gray-700">Risk Reduction</div>
                          </div>
                          <div className="bg-purple-50 p-3 rounded text-center">
                            <div className="font-bold text-2xl text-purple-600 mb-1">30%</div>
                            <div className="text-xs text-gray-700">Cost Optimization</div>
                          </div>
                          <div className="bg-orange-50 p-3 rounded text-center">
                            <div className="font-bold text-2xl text-orange-600 mb-1">2x</div>
                            <div className="text-xs text-gray-700">Scalability Factor</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-2xl border-0 overflow-hidden">
                  <div className="bg-gradient-to-r from-orange-600 to-red-700 p-8 text-white">
                    <h3 className="text-2xl font-bold mb-4">Multi-Cloud Deployment</h3>
                    <div className="grid grid-cols-2 gap-4 text-orange-100">
                      <div>Speed: Strategic Phases</div>
                      <div>Risk: Vendor Independence</div>
                      <div>Effort: Complex Integration</div>
                      <div>Benefits: Maximum Flexibility</div>
                    </div>
                  </div>
                  <CardContent className="p-8">
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold mb-3 text-orange-700">Multi-Cloud Strategy</h4>
                        <div className="bg-orange-50 p-4 rounded-lg text-sm">
                          <p className="text-gray-700 mb-3">
                            <strong>Provider Selection:</strong> Service capability comparison, pricing analysis, 
                            geographic presence evaluation, and compliance certification alignment for optimal provider mix.
                          </p>
                          <p className="text-gray-700 mb-3">
                            <strong>Workload Distribution:</strong> Best-fit service mapping, disaster recovery across clouds, 
                            data residency requirements, and performance optimization strategies.
                          </p>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3 text-blue-700">Integration & Management</h4>
                        <div className="space-y-3">
                          <div className="bg-blue-50 p-3 rounded-lg text-sm">
                            <div className="font-medium mb-1">Unified Management Platform</div>
                            <p className="text-gray-700">Cross-cloud monitoring, centralized logging, unified security policies, 
                            and consistent deployment patterns across providers.</p>
                          </div>
                          <div className="bg-green-50 p-3 rounded-lg text-sm">
                            <div className="font-medium mb-1">Cost Management</div>
                            <p className="text-gray-700">Multi-cloud cost optimization, reserved capacity planning, 
                            usage analytics, and automated resource scheduling.</p>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3 text-green-700">Strategic Advantages</h4>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="bg-green-50 p-3 rounded text-center">
                            <div className="font-bold text-2xl text-green-600 mb-1">Zero</div>
                            <div className="text-xs text-gray-700">Vendor Lock-in</div>
                          </div>
                          <div className="bg-blue-50 p-3 rounded text-center">
                            <div className="font-bold text-2xl text-blue-600 mb-1">99.99%</div>
                            <div className="text-xs text-gray-700">Global Availability</div>
                          </div>
                          <div className="bg-purple-50 p-3 rounded text-center">
                            <div className="font-bold text-2xl text-purple-600 mb-1">20-30%</div>
                            <div className="text-xs text-gray-700">Cost Optimization</div>
                          </div>
                          <div className="bg-orange-50 p-3 rounded text-center">
                            <div className="font-bold text-2xl text-orange-600 mb-1">Best-of-Breed</div>
                            <div className="text-xs text-gray-700">Service Selection</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Enterprise Security & Compliance Framework */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-8xl mx-auto">
              <h2 className="text-4xl font-bold mb-16 text-center bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
                Enterprise Security & Compliance Framework
              </h2>
              
              <div className="grid lg:grid-cols-3 gap-8 mb-16">
                <Card className="shadow-xl border-0">
                  <CardHeader className="bg-gradient-to-r from-red-600 to-pink-600 text-white">
                    <CardTitle className="text-xl">Identity & Access Management</CardTitle>
                    <CardDescription className="text-red-100">Zero-trust security model with comprehensive IAM controls</CardDescription>
                  </CardHeader>
                  <CardContent className="p-8">
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold mb-3 text-red-700">Identity Architecture</h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between items-center">
                            <span>Multi-Factor Authentication (MFA)</span>
                            <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">Mandatory</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span>Single Sign-On (SSO)</span>
                            <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">SAML/OIDC</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span>Privileged Access Management</span>
                            <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded">JIT Access</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span>Identity Federation</span>
                            <span className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded">Cross-Cloud</span>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3 text-blue-700">Access Controls</h4>
                        <div className="space-y-2 text-sm">
                          <div className="bg-blue-50 p-3 rounded-lg">
                            <div className="font-medium mb-1">Role-Based Access Control (RBAC)</div>
                            <p className="text-gray-700">Granular permissions with principle of least privilege, 
                            automated role provisioning, and regular access reviews.</p>
                          </div>
                          <div className="bg-green-50 p-3 rounded-lg">
                            <div className="font-medium mb-1">Attribute-Based Access Control (ABAC)</div>
                            <p className="text-gray-700">Dynamic access decisions based on user attributes, 
                            resource properties, and environmental context.</p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-red-50 p-4 rounded-lg">
                        <h5 className="font-medium mb-2">Security Metrics</h5>
                        <div className="grid grid-cols-2 gap-2 text-xs">
                          <div className="text-center bg-white p-2 rounded">
                            <div className="font-bold text-red-600">100%</div>
                            <div>MFA Coverage</div>
                          </div>
                          <div className="text-center bg-white p-2 rounded">
                            <div className="font-bold text-green-600">15 min</div>
                            <div>Access Revocation</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-xl border-0">
                  <CardHeader className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
                    <CardTitle className="text-xl">Data Protection & Encryption</CardTitle>
                    <CardDescription className="text-blue-100">End-to-end data security with advanced encryption</CardDescription>
                  </CardHeader>
                  <CardContent className="p-8">
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold mb-3 text-blue-700">Encryption Strategy</h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between items-center">
                            <span>Data at Rest</span>
                            <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">AES-256</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span>Data in Transit</span>
                            <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">TLS 1.3</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span>Data in Processing</span>
                            <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded">HSM/TEE</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span>Key Management</span>
                            <span className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded">HSM-backed</span>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3 text-green-700">Data Classification</h4>
                        <div className="space-y-2 text-sm">
                          <div className="bg-green-50 p-3 rounded-lg">
                            <div className="font-medium mb-1">Automated Discovery & Classification</div>
                            <p className="text-gray-700">ML-powered data discovery, sensitive data identification, 
                            and automated tagging based on content and context.</p>
                          </div>
                          <div className="bg-purple-50 p-3 rounded-lg">
                            <div className="font-medium mb-1">Data Loss Prevention (DLP)</div>
                            <p className="text-gray-700">Real-time monitoring, policy enforcement, 
                            and automated response to data exfiltration attempts.</p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h5 className="font-medium mb-2">Protection Levels</h5>
                        <div className="grid grid-cols-2 gap-2 text-xs">
                          <div className="text-center bg-white p-2 rounded">
                            <div className="font-bold text-blue-600">256-bit</div>
                            <div>Encryption Strength</div>
                          </div>
                          <div className="text-center bg-white p-2 rounded">
                            <div className="font-bold text-green-600">99.99%</div>
                            <div>Data Integrity</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-xl border-0">
                  <CardHeader className="bg-gradient-to-r from-green-600 to-emerald-600 text-white">
                    <CardTitle className="text-xl">Compliance & Governance</CardTitle>
                    <CardDescription className="text-green-100">Automated compliance monitoring and reporting</CardDescription>
                  </CardHeader>
                  <CardContent className="p-8">
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold mb-3 text-green-700">Regulatory Frameworks</h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between items-center">
                            <span>SOC 2 Type II</span>
                            <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">Certified</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span>ISO 27001/27002</span>
                            <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">Compliant</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span>GDPR/CCPA</span>
                            <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded">Privacy Ready</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span>HIPAA/PCI DSS</span>
                            <span className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded">Industry Specific</span>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3 text-blue-700">Governance Controls</h4>
                        <div className="space-y-2 text-sm">
                          <div className="bg-blue-50 p-3 rounded-lg">
                            <div className="font-medium mb-1">Policy as Code</div>
                            <p className="text-gray-700">Automated policy enforcement, compliance checking, 
                            and remediation workflows with audit trail.</p>
                          </div>
                          <div className="bg-purple-50 p-3 rounded-lg">
                            <div className="font-medium mb-1">Continuous Compliance</div>
                            <p className="text-gray-700">Real-time compliance monitoring, automated evidence collection, 
                            and exception reporting with risk assessment.</p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-green-50 p-4 rounded-lg">
                        <h5 className="font-medium mb-2">Compliance Metrics</h5>
                        <div className="grid grid-cols-2 gap-2 text-xs">
                          <div className="text-center bg-white p-2 rounded">
                            <div className="font-bold text-green-600">99.8%</div>
                            <div>Compliance Score</div>
                          </div>
                          <div className="text-center bg-white p-2 rounded">
                            <div className="font-bold text-blue-600">24/7</div>
                            <div>Monitoring</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-gradient-to-r from-gray-50 to-blue-50 p-12 rounded-2xl shadow-xl">
                <h3 className="text-3xl font-semibold mb-8 text-center">Security Implementation Roadmap</h3>
                <div className="grid lg:grid-cols-4 gap-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white text-2xl font-bold">1</span>
                    </div>
                    <h4 className="font-semibold mb-3">Foundation Security</h4>
                    <div className="text-sm text-gray-700 space-y-2">
                      <div>Identity management setup</div>
                      <div>Network security architecture</div>
                      <div>Basic encryption implementation</div>
                      <div>Security monitoring basics</div>
                    </div>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white text-2xl font-bold">2</span>
                    </div>
                    <h4 className="font-semibold mb-3">Advanced Protection</h4>
                    <div className="text-sm text-gray-700 space-y-2">
                      <div>Zero-trust architecture</div>
                      <div>Advanced threat detection</div>
                      <div>Data classification & DLP</div>
                      <div>Security automation</div>
                    </div>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white text-2xl font-bold">3</span>
                    </div>
                    <h4 className="font-semibold mb-3">Compliance Integration</h4>
                    <div className="text-sm text-gray-700 space-y-2">
                      <div>Regulatory framework alignment</div>
                      <div>Automated compliance monitoring</div>
                      <div>Audit trail & reporting</div>
                      <div>Risk assessment integration</div>
                    </div>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white text-2xl font-bold">4</span>
                    </div>
                    <h4 className="font-semibold mb-3">Continuous Improvement</h4>
                    <div className="text-sm text-gray-700 space-y-2">
                      <div>Threat intelligence integration</div>
                      <div>Security orchestration</div>
                      <div>Advanced analytics</div>
                      <div>Security culture development</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cost Optimization & FinOps */}
        <section className="py-24 bg-gradient-to-br from-green-50 to-emerald-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-8xl mx-auto">
              <h2 className="text-4xl font-bold mb-16 text-center bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Advanced Cloud Cost Optimization & FinOps
              </h2>
              
              <div className="grid lg:grid-cols-2 gap-12 mb-16">
                <Card className="shadow-2xl border-0 overflow-hidden">
                  <div className="bg-gradient-to-r from-green-600 to-emerald-700 p-8 text-white">
                    <h3 className="text-2xl font-bold mb-4">Intelligent Resource Optimization</h3>
                    <div className="grid grid-cols-2 gap-4 text-green-100">
                      <div>Automated Rightsizing</div>
                      <div>Reserved Instance Management</div>
                      <div>Spot Instance Utilization</div>
                      <div>Storage Lifecycle Optimization</div>
                    </div>
                  </div>
                  <CardContent className="p-8">
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold mb-3 text-green-700">Resource Rightsizing Strategy</h4>
                        <div className="bg-green-50 p-4 rounded-lg text-sm">
                          <p className="text-gray-700 mb-3">
                            <strong>Performance Analytics:</strong> Continuous monitoring of CPU, memory, network, and storage utilization 
                            patterns with ML-powered recommendations for optimal instance sizing and configuration.
                          </p>
                          <p className="text-gray-700 mb-3">
                            <strong>Automated Scaling:</strong> Dynamic auto-scaling policies with predictive scaling based on historical 
                            patterns, business calendars, and application-specific metrics for optimal cost-performance balance.
                          </p>
                          <p className="text-gray-700">
                            <strong>Instance Optimization:</strong> Intelligent instance type recommendations, spot instance integration, 
                            and reserved capacity planning with automated purchasing decisions based on usage patterns.
                          </p>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3 text-blue-700">Storage Optimization</h4>
                        <div className="space-y-3">
                          <div className="bg-blue-50 p-3 rounded-lg text-sm">
                            <div className="font-medium mb-1">Intelligent Tiering</div>
                            <p className="text-gray-700">Automated data lifecycle management with intelligent tiering between 
                            hot, warm, and cold storage based on access patterns and cost optimization algorithms.</p>
                          </div>
                          <div className="bg-purple-50 p-3 rounded-lg text-sm">
                            <div className="font-medium mb-1">Compression & Deduplication</div>
                            <p className="text-gray-700">Advanced compression algorithms, data deduplication, and archival strategies 
                            to minimize storage costs while maintaining data accessibility and compliance.</p>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3 text-purple-700">Cost Savings Metrics</h4>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="bg-purple-50 p-3 rounded text-center">
                            <div className="font-bold text-2xl text-purple-600 mb-1">35-50%</div>
                            <div className="text-xs text-gray-700">Infrastructure Savings</div>
                          </div>
                          <div className="bg-green-50 p-3 rounded text-center">
                            <div className="font-bold text-2xl text-green-600 mb-1">60-80%</div>
                            <div className="text-xs text-gray-700">Storage Cost Reduction</div>
                          </div>
                          <div className="bg-blue-50 p-3 rounded text-center">
                            <div className="font-bold text-2xl text-blue-600 mb-1">90%</div>
                            <div className="text-xs text-gray-700">Spot Instance Savings</div>
                          </div>
                          <div className="bg-orange-50 p-3 rounded text-center">
                            <div className="font-bold text-2xl text-orange-600 mb-1">24/7</div>
                            <div className="text-xs text-gray-700">Automated Optimization</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-2xl border-0 overflow-hidden">
                  <div className="bg-gradient-to-r from-blue-600 to-cyan-700 p-8 text-white">
                    <h3 className="text-2xl font-bold mb-4">FinOps Implementation Framework</h3>
                    <div className="grid grid-cols-2 gap-4 text-blue-100">
                      <div>Cost Visibility & Attribution</div>
                      <div>Budget Management & Alerts</div>
                      <div>Chargeback & Showback</div>
                      <div>Financial Governance</div>
                    </div>
                  </div>
                  <CardContent className="p-8">
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold mb-3 text-blue-700">Financial Operations Framework</h4>
                        <div className="bg-blue-50 p-4 rounded-lg text-sm">
                          <p className="text-gray-700 mb-3">
                            <strong>Cost Allocation & Tagging:</strong> Comprehensive resource tagging strategy with automated 
                            cost allocation across business units, projects, and applications for accurate financial reporting.
                          </p>
                          <p className="text-gray-700 mb-3">
                            <strong>Budget Planning & Forecasting:</strong> Machine learning-powered cost forecasting with scenario 
                            modeling, budget variance analysis, and predictive alerts for proactive cost management.
                          </p>
                          <p className="text-gray-700">
                            <strong>Financial Governance:</strong> Policy-driven spending controls, approval workflows for large 
                            expenditures, and automated cost optimization recommendations with ROI analysis.
                          </p>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3 text-green-700">Cost Analytics & Reporting</h4>
                        <div className="space-y-3">
                          <div className="bg-green-50 p-3 rounded-lg text-sm">
                            <div className="font-medium mb-1">Real-time Dashboards</div>
                            <p className="text-gray-700">Executive and operational dashboards with drill-down capabilities, 
                            cost trend analysis, and automated insights for data-driven decision making.</p>
                          </div>
                          <div className="bg-purple-50 p-3 rounded-lg text-sm">
                            <div className="font-medium mb-1">Anomaly Detection</div>
                            <p className="text-gray-700">ML-powered cost anomaly detection with automated alerting, 
                            root cause analysis, and suggested remediation actions.</p>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3 text-orange-700">FinOps Maturity Outcomes</h4>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="bg-orange-50 p-3 rounded text-center">
                            <div className="font-bold text-2xl text-orange-600 mb-1">100%</div>
                            <div className="text-xs text-gray-700">Cost Visibility</div>
                          </div>
                          <div className="bg-green-50 p-3 rounded text-center">
                            <div className="font-bold text-2xl text-green-600 mb-1">25-40%</div>
                            <div className="text-xs text-gray-700">Cost Reduction</div>
                          </div>
                          <div className="bg-blue-50 p-3 rounded text-center">
                            <div className="font-bold text-2xl text-blue-600 mb-1">95%</div>
                            <div className="text-xs text-gray-700">Budget Accuracy</div>
                          </div>
                          <div className="bg-purple-50 p-3 rounded text-center">
                            <div className="font-bold text-2xl text-purple-600 mb-1">Real-time</div>
                            <div className="text-xs text-gray-700">Cost Insights</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-gradient-to-r from-white to-green-50 p-12 rounded-2xl shadow-xl">
                <h3 className="text-3xl font-semibold mb-8 text-center">Cost Optimization Methodology</h3>
                <div className="grid lg:grid-cols-4 gap-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white text-2xl font-bold">1</span>
                    </div>
                    <h4 className="font-semibold mb-3">Discovery & Analysis</h4>
                    <div className="text-sm text-gray-700 space-y-2">
                      <div>Current spend analysis</div>
                      <div>Resource utilization audit</div>
                      <div>Tagging strategy implementation</div>
                      <div>Baseline cost metrics</div>
                    </div>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white text-2xl font-bold">2</span>
                    </div>
                    <h4 className="font-semibold mb-3">Optimization Implementation</h4>
                    <div className="text-sm text-gray-700 space-y-2">
                      <div>Rightsizing recommendations</div>
                      <div>Reserved instance planning</div>
                      <div>Storage lifecycle policies</div>
                      <div>Automated scaling setup</div>
                    </div>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white text-2xl font-bold">3</span>
                    </div>
                    <h4 className="font-semibold mb-3">Monitoring & Governance</h4>
                    <div className="text-sm text-gray-700 space-y-2">
                      <div>Real-time cost monitoring</div>
                      <div>Budget alerts & controls</div>
                      <div>Anomaly detection setup</div>
                      <div>Financial reporting automation</div>
                    </div>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white text-2xl font-bold">4</span>
                    </div>
                    <h4 className="font-semibold mb-3">Continuous Optimization</h4>
                    <div className="text-sm text-gray-700 space-y-2">
                      <div>Performance optimization cycles</div>
                      <div>Cost trend analysis</div>
                      <div>Predictive cost modeling</div>
                      <div>ROI measurement & reporting</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Comprehensive Monitoring & Observability */}
        <section className="py-24 bg-gradient-to-br from-indigo-50 to-purple-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-8xl mx-auto">
              <h2 className="text-4xl font-bold mb-16 text-center bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Enterprise Observability & Monitoring Solutions
              </h2>
              
              <div className="grid lg:grid-cols-3 gap-8 mb-16">
                <Card className="shadow-xl border-0">
                  <CardHeader className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
                    <CardTitle className="text-xl">Infrastructure Monitoring</CardTitle>
                    <CardDescription className="text-indigo-100">Comprehensive infrastructure health and performance monitoring</CardDescription>
                  </CardHeader>
                  <CardContent className="p-8">
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold mb-3 text-indigo-700">Core Metrics & KPIs</h4>
                        <div className="space-y-2 text-sm">
                          <div className="bg-indigo-50 p-3 rounded-lg">
                            <div className="font-medium mb-1">System Resources</div>
                            <p className="text-gray-700">CPU utilization, memory consumption, disk I/O, network throughput 
                            with historical trending and capacity planning insights.</p>
                          </div>
                          <div className="bg-blue-50 p-3 rounded-lg">
                            <div className="font-medium mb-1">Service Health</div>
                            <p className="text-gray-700">Application availability, response times, error rates, 
                            and SLA compliance monitoring with automated alerting.</p>
                          </div>
                          <div className="bg-purple-50 p-3 rounded-lg">
                            <div className="font-medium mb-1">Custom Metrics</div>
                            <p className="text-gray-700">Business-specific KPIs, application performance indicators, 
                            and custom dashboards tailored to organizational needs.</p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-indigo-50 p-4 rounded-lg">
                        <h5 className="font-medium mb-2">Monitoring Coverage</h5>
                        <div className="grid grid-cols-2 gap-2 text-xs">
                          <div className="text-center bg-white p-2 rounded">
                            <div className="font-bold text-indigo-600">99.9%</div>
                            <div>Uptime SLA</div>
                          </div>
                          <div className="text-center bg-white p-2 rounded">
                            <div className="font-bold text-purple-600">5-sec</div>
                            <div>Metric Resolution</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-xl border-0">
                  <CardHeader className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
                    <CardTitle className="text-xl">Application Performance Monitoring</CardTitle>
                    <CardDescription className="text-blue-100">End-to-end application performance and user experience monitoring</CardDescription>
                  </CardHeader>
                  <CardContent className="p-8">
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold mb-3 text-blue-700">APM Capabilities</h4>
                        <div className="space-y-2 text-sm">
                          <div className="bg-blue-50 p-3 rounded-lg">
                            <div className="font-medium mb-1">Distributed Tracing</div>
                            <p className="text-gray-700">End-to-end request tracking across microservices with 
                            performance bottleneck identification and optimization recommendations.</p>
                          </div>
                          <div className="bg-green-50 p-3 rounded-lg">
                            <div className="font-medium mb-1">Real User Monitoring (RUM)</div>
                            <p className="text-gray-700">Actual user experience measurement with page load times, 
                            user interactions, and performance impact analysis.</p>
                          </div>
                          <div className="bg-orange-50 p-3 rounded-lg">
                            <div className="font-medium mb-1">Synthetic Monitoring</div>
                            <p className="text-gray-700">Proactive testing with synthetic transactions, API monitoring, 
                            and uptime checks from global monitoring locations.</p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h5 className="font-medium mb-2">Performance Insights</h5>
                        <div className="grid grid-cols-2 gap-2 text-xs">
                          <div className="text-center bg-white p-2 rounded">
                            <div className="font-bold text-blue-600">{"< 2ms"}</div>
                            <div>Trace Latency</div>
                          </div>
                          <div className="text-center bg-white p-2 rounded">
                            <div className="font-bold text-green-600">100%</div>
                            <div>Request Coverage</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-xl border-0">
                  <CardHeader className="bg-gradient-to-r from-green-600 to-emerald-600 text-white">
                    <CardTitle className="text-xl">Log Management & Analytics</CardTitle>
                    <CardDescription className="text-green-100">Centralized logging with advanced analytics and security insights</CardDescription>
                  </CardHeader>
                  <CardContent className="p-8">
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold mb-3 text-green-700">Log Processing Pipeline</h4>
                        <div className="space-y-2 text-sm">
                          <div className="bg-green-50 p-3 rounded-lg">
                            <div className="font-medium mb-1">Centralized Collection</div>
                            <p className="text-gray-700">Multi-source log aggregation with structured logging, 
                            log shipping, and real-time processing capabilities.</p>
                          </div>
                          <div className="bg-purple-50 p-3 rounded-lg">
                            <div className="font-medium mb-1">Advanced Analytics</div>
                            <p className="text-gray-700">ML-powered log analysis, anomaly detection, 
                            pattern recognition, and automated insights generation.</p>
                          </div>
                          <div className="bg-orange-50 p-3 rounded-lg">
                            <div className="font-medium mb-1">Security Intelligence</div>
                            <p className="text-gray-700">SIEM integration, threat detection, audit trail analysis, 
                            and compliance reporting with automated response.</p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-green-50 p-4 rounded-lg">
                        <h5 className="font-medium mb-2">Processing Capacity</h5>
                        <div className="grid grid-cols-2 gap-2 text-xs">
                          <div className="text-center bg-white p-2 rounded">
                            <div className="font-bold text-green-600">TB/day</div>
                            <div>Log Volume</div>
                          </div>
                          <div className="text-center bg-white p-2 rounded">
                            <div className="font-bold text-blue-600">{"< 100ms"}</div>
                            <div>Search Latency</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-gradient-to-r from-gray-50 to-indigo-50 p-12 rounded-2xl shadow-xl">
                <h3 className="text-3xl font-semibold mb-8 text-center">Observability Stack Architecture</h3>
                <div className="grid lg:grid-cols-3 gap-8 mb-8">
                  <div className="text-center">
                    <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl p-6 mb-4">
                      <Gauge className="w-12 h-12 text-white mx-auto mb-2" />
                      <h4 className="text-white font-semibold text-lg">Metrics</h4>
                    </div>
                    <div className="space-y-2 text-sm text-gray-700">
                      <div>Prometheus/CloudWatch</div>
                      <div>Grafana Dashboards</div>
                      <div>Custom Metrics Collection</div>
                      <div>Alert Rule Engine</div>
                    </div>
                  </div>

                  <div className="text-center">
                    <div className="bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl p-6 mb-4">
                      <Database className="w-12 h-12 text-white mx-auto mb-2" />
                      <h4 className="text-white font-semibold text-lg">Traces</h4>
                    </div>
                    <div className="space-y-2 text-sm text-gray-700">
                      <div>OpenTelemetry Integration</div>
                      <div>Jaeger/X-Ray Tracing</div>
                      <div>Service Map Generation</div>
                      <div>Performance Profiling</div>
                    </div>
                  </div>

                  <div className="text-center">
                    <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl p-6 mb-4">
                      <Server className="w-12 h-12 text-white mx-auto mb-2" />
                      <h4 className="text-white font-semibold text-lg">Logs</h4>
                    </div>
                    <div className="space-y-2 text-sm text-gray-700">
                      <div>ELK/EFK Stack</div>
                      <div>Fluentd/FluentBit</div>
                      <div>Log Aggregation & Parsing</div>
                      <div>Security Analytics</div>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <h4 className="text-xl font-semibold mb-4">Unified Observability Benefits</h4>
                  <div className="grid lg:grid-cols-4 gap-6">
                    <div className="bg-white p-4 rounded-lg shadow">
                      <div className="font-bold text-2xl text-indigo-600 mb-1">MTTD</div>
                      <div className="text-sm text-gray-700">{"< 5 minutes"}</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow">
                      <div className="font-bold text-2xl text-blue-600 mb-1">MTTR</div>
                      <div className="text-sm text-gray-700">{"< 15 minutes"}</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow">
                      <div className="font-bold text-2xl text-green-600 mb-1">SLA</div>
                      <div className="text-sm text-gray-700">99.99% uptime</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow">
                      <div className="font-bold text-2xl text-purple-600 mb-1">Coverage</div>
                      <div className="text-sm text-gray-700">100% visibility</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Disaster Recovery & Business Continuity */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-8xl mx-auto">
              <h2 className="text-4xl font-bold mb-16 text-center bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
                Enterprise Disaster Recovery & Business Continuity
              </h2>
              
              <div className="grid lg:grid-cols-2 gap-12 mb-16">
                <Card className="shadow-2xl border-0 overflow-hidden">
                  <div className="bg-gradient-to-r from-red-600 to-pink-700 p-8 text-white">
                    <h3 className="text-2xl font-bold mb-4">Multi-Region Disaster Recovery</h3>
                    <div className="grid grid-cols-2 gap-4 text-red-100">
                      <div>RPO: {"< 15 minutes"}</div>
                      <div>RTO: {"< 1 hour"}</div>
                      <div>Availability: 99.99%</div>
                      <div>Coverage: Global</div>
                    </div>
                  </div>
                  <CardContent className="p-8">
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold mb-3 text-red-700">DR Strategy & Architecture</h4>
                        <div className="bg-red-50 p-4 rounded-lg text-sm">
                          <p className="text-gray-700 mb-3">
                            <strong>Multi-Region Deployment:</strong> Active-passive and active-active configurations across 
                            geographically distributed regions with automated failover and data synchronization.
                          </p>
                          <p className="text-gray-700 mb-3">
                            <strong>Infrastructure Replication:</strong> Complete infrastructure as code deployment with 
                            automated provisioning, configuration management, and environment consistency validation.
                          </p>
                          <p className="text-gray-700">
                            <strong>Data Protection:</strong> Continuous data replication, point-in-time recovery, 
                            and cross-region backup strategies with encryption and integrity verification.
                          </p>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3 text-blue-700">Failover Mechanisms</h4>
                        <div className="space-y-3">
                          <div className="bg-blue-50 p-3 rounded-lg text-sm">
                            <div className="font-medium mb-1">Automated Detection</div>
                            <p className="text-gray-700">Health checks, synthetic monitoring, and business logic validation 
                            with configurable thresholds and escalation procedures.</p>
                          </div>
                          <div className="bg-green-50 p-3 rounded-lg text-sm">
                            <div className="font-medium mb-1">Traffic Redirection</div>
                            <p className="text-gray-700">DNS failover, load balancer reconfiguration, and CDN switching 
                            with gradual traffic migration and rollback capabilities.</p>
                          </div>
                          <div className="bg-purple-50 p-3 rounded-lg text-sm">
                            <div className="font-medium mb-1">Data Consistency</div>
                            <p className="text-gray-700">Database failover coordination, transaction log replication, 
                            and data integrity verification with conflict resolution.</p>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3 text-green-700">Recovery Capabilities</h4>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="bg-green-50 p-3 rounded text-center">
                            <div className="font-bold text-2xl text-green-600 mb-1">5 min</div>
                            <div className="text-xs text-gray-700">Detection Time</div>
                          </div>
                          <div className="bg-blue-50 p-3 rounded text-center">
                            <div className="font-bold text-2xl text-blue-600 mb-1">30 min</div>
                            <div className="text-xs text-gray-700">Full Recovery</div>
                          </div>
                          <div className="bg-purple-50 p-3 rounded text-center">
                            <div className="font-bold text-2xl text-purple-600 mb-1">99.9%</div>
                            <div className="text-xs text-gray-700">Data Integrity</div>
                          </div>
                          <div className="bg-orange-50 p-3 rounded text-center">
                            <div className="font-bold text-2xl text-orange-600 mb-1">Auto</div>
                            <div className="text-xs text-gray-700">Failover Mode</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-2xl border-0 overflow-hidden">
                  <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-8 text-white">
                    <h3 className="text-2xl font-bold mb-4">Backup & Recovery Solutions</h3>
                    <div className="grid grid-cols-2 gap-4 text-blue-100">
                      <div>Frequency: Continuous</div>
                      <div>Retention: Configurable</div>
                      <div>Encryption: End-to-End</div>
                      <div>Testing: Automated</div>
                    </div>
                  </div>
                  <CardContent className="p-8">
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold mb-3 text-blue-700">Comprehensive Backup Strategy</h4>
                        <div className="bg-blue-50 p-4 rounded-lg text-sm">
                          <p className="text-gray-700 mb-3">
                            <strong>Multi-Tier Backup:</strong> Application-consistent snapshots, database transaction logs, 
                            file system backups, and configuration backups with automated scheduling and verification.
                          </p>
                          <p className="text-gray-700 mb-3">
                            <strong>Retention Management:</strong> Configurable retention policies with lifecycle management, 
                            legal hold capabilities, and automated archival to cost-effective storage tiers.
                          </p>
                          <p className="text-gray-700">
                            <strong>Cross-Region Replication:</strong> Automated backup replication across regions with 
                            bandwidth optimization, deduplication, and incremental backup strategies.
                          </p>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3 text-green-700">Recovery Options</h4>
                        <div className="space-y-3">
                          <div className="bg-green-50 p-3 rounded-lg text-sm">
                            <div className="font-medium mb-1">Point-in-Time Recovery</div>
                            <p className="text-gray-700">Granular recovery options with minute-level precision, 
                            selective data restoration, and minimal service impact.</p>
                          </div>
                          <div className="bg-purple-50 p-3 rounded-lg text-sm">
                            <div className="font-medium mb-1">Bare Metal Recovery</div>
                            <p className="text-gray-700">Complete system restoration including OS, applications, 
                            configurations, and data with automated recovery workflows.</p>
                          </div>
                          <div className="bg-orange-50 p-3 rounded-lg text-sm">
                            <div className="font-medium mb-1">Application-Level Recovery</div>
                            <p className="text-gray-700">Selective application restoration, database recovery, 
                            and file-level recovery with business continuity focus.</p>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3 text-purple-700">Backup Performance</h4>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="bg-purple-50 p-3 rounded text-center">
                            <div className="font-bold text-2xl text-purple-600 mb-1">15 min</div>
                            <div className="text-xs text-gray-700">Backup Interval</div>
                          </div>
                          <div className="bg-green-50 p-3 rounded text-center">
                            <div className="font-bold text-2xl text-green-600 mb-1">99.99%</div>
                            <div className="text-xs text-gray-700">Success Rate</div>
                          </div>
                          <div className="bg-blue-50 p-3 rounded text-center">
                            <div className="font-bold text-2xl text-blue-600 mb-1">256-bit</div>
                            <div className="text-xs text-gray-700">Encryption</div>
                          </div>
                          <div className="bg-orange-50 p-3 rounded text-center">
                            <div className="font-bold text-2xl text-orange-600 mb-1">7 years</div>
                            <div className="text-xs text-gray-700">Max Retention</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-gradient-to-r from-slate-50 to-red-50 p-12 rounded-2xl shadow-xl">
                <h3 className="text-3xl font-semibold mb-8 text-center">Business Continuity Framework</h3>
                <div className="grid lg:grid-cols-4 gap-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white text-2xl font-bold">1</span>
                    </div>
                    <h4 className="font-semibold mb-3">Risk Assessment</h4>
                    <div className="text-sm text-gray-700 space-y-2">
                      <div>Business impact analysis</div>
                      <div>Critical system identification</div>
                      <div>Dependency mapping</div>
                      <div>Recovery time objectives</div>
                    </div>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white text-2xl font-bold">2</span>
                    </div>
                    <h4 className="font-semibold mb-3">Strategy Development</h4>
                    <div className="text-sm text-gray-700 space-y-2">
                      <div>Recovery strategy design</div>
                      <div>Resource allocation planning</div>
                      <div>Communication protocols</div>
                      <div>Escalation procedures</div>
                    </div>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white text-2xl font-bold">3</span>
                    </div>
                    <h4 className="font-semibold mb-3">Implementation</h4>
                    <div className="text-sm text-gray-700 space-y-2">
                      <div>DR infrastructure setup</div>
                      <div>Automated failover systems</div>
                      <div>Monitoring & alerting</div>
                      <div>Documentation & training</div>
                    </div>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white text-2xl font-bold">4</span>
                    </div>
                    <h4 className="font-semibold mb-3">Testing & Maintenance</h4>
                    <div className="text-sm text-gray-700 space-y-2">
                      <div>Regular DR testing</div>
                      <div>Plan updates & improvements</div>
                      <div>Team training & drills</div>
                      <div>Performance optimization</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-gradient-secondary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready for reliable, secure scale?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">We’ll map out the fastest path with the right guardrails for your business.</p>
            <Button size="lg" variant="cta" asChild>
              <Link to="/consultation" className="flex items-center gap-2">
                Talk Cloud Strategy
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </section>

        {/* Provider Capabilities Matrix */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-2xl font-semibold mb-4">Cloud Provider Capabilities</h3>
            <Table>
              <TableCaption>High-level comparison; we tailor to your org needs and constraints.</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead>Capability</TableHead>
                  <TableHead>AWS</TableHead>
                  <TableHead>GCP</TableHead>
                  <TableHead>Notes</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Compute</TableCell>
                  <TableCell>EC2, ECS, EKS, Lambda</TableCell>
                  <TableCell>GCE, GKE, Cloud Run</TableCell>
                  <TableCell>Autoscale, spot/preemptible</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Storage</TableCell>
                  <TableCell>S3, EBS, EFS</TableCell>
                  <TableCell>GCS, Persistent Disk, Filestore</TableCell>
                  <TableCell>Lifecycle, tiering, encryption</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Data</TableCell>
                  <TableCell>RDS, Aurora, Redshift</TableCell>
                  <TableCell>Cloud SQL, BigQuery, Spanner</TableCell>
                  <TableCell>OLTP vs OLAP trade-offs</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Networking</TableCell>
                  <TableCell>VPC, TGW, ALB/NLB</TableCell>
                  <TableCell>VPC, Cloud Router, LB</TableCell>
                  <TableCell>Hybrid connectivity options</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Security</TableCell>
                  <TableCell>IAM, KMS, WAF, GuardDuty</TableCell>
                  <TableCell>IAM, KMS, SCC</TableCell>
                  <TableCell>Policy as code, org controls</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </section>

        {/* Environment Tiers */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-2xl font-semibold mb-4">Environment Tiers</h3>
            <Table>
              <TableCaption>Standardized environments for stability and speed.</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead>Env</TableHead>
                  <TableHead>Purpose</TableHead>
                  <TableHead>Controls</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Dev</TableCell>
                  <TableCell>Feature development</TableCell>
                  <TableCell>Open policies, cost caps</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Staging</TableCell>
                  <TableCell>Pre-production testing</TableCell>
                  <TableCell>Prod-like, limited access</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Prod</TableCell>
                  <TableCell>Customer traffic</TableCell>
                  <TableCell>SLA/SLOs, on-call, backups</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </section>

        {/* SLO/SLA */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-2xl font-semibold mb-4">SLOs & SLAs</h3>
            <Table>
              <TableCaption>Availability, reliability, and response targets.</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead>Metric</TableHead>
                  <TableHead>Target</TableHead>
                  <TableHead>Notes</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Availability</TableCell>
                  <TableCell>99.9% SLO</TableCell>
                  <TableCell>Multi-AZ, health checks</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>RPO</TableCell>
                  <TableCell>{"<= 15 minutes"}</TableCell>
                  <TableCell>Point-in-time backups</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>RTO</TableCell>
                  <TableCell>{"<= 1 hour"}</TableCell>
                  <TableCell>Automated failover</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Incident Response</TableCell>
                  <TableCell>15m ack / 1h workaround</TableCell>
                  <TableCell>On-call rotations, runbooks</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </section>

        {/* IaC Modules */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-2xl font-semibold mb-4">Infrastructure as Code Modules</h3>
            <Table>
              <TableCaption>Composable modules to bootstrap environments quickly.</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead>Module</TableHead>
                  <TableHead>Resources</TableHead>
                  <TableHead>Outputs</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Network</TableCell>
                  <TableCell>VPC, subnets, gateways</TableCell>
                  <TableCell>VpcId, SubnetIds</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Compute</TableCell>
                  <TableCell>EKS/ECS, ASGs</TableCell>
                  <TableCell>ClusterArn, ServiceUrls</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Data</TableCell>
                  <TableCell>RDS, Redis, S3</TableCell>
                  <TableCell>DbEndpoint, BucketNames</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Observability</TableCell>
                  <TableCell>CloudWatch/Stackdriver</TableCell>
                  <TableCell>Dashboards, Alarms</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </section>

        {/* Cloud Partnership & Support */}
        <section className="py-16 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">
                Enterprise Cloud Partnership & Support
              </h2>
              
              <div className="grid lg:grid-cols-3 gap-8 mb-12">
                <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                  <CardHeader>
                    <CardTitle className="text-xl flex items-center">
                      🏗️ Architecture Consulting
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-blue-100 mb-4">
                      Strategic cloud architecture design with well-architected framework 
                      principles and enterprise-grade security implementations.
                    </p>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center">
                        <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                        Cloud-native architecture design
                      </div>
                      <div className="flex items-center">
                        <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                        Security & compliance frameworks
                      </div>
                      <div className="flex items-center">
                        <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                        Cost optimization strategies
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                  <CardHeader>
                    <CardTitle className="text-xl flex items-center">
                      ⚡ Migration Services
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-blue-100 mb-4">
                      End-to-end migration services with minimal downtime, automated 
                      tools, and comprehensive validation processes.
                    </p>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center">
                        <span className="w-2 h-2 bg-orange-400 rounded-full mr-2"></span>
                        Assessment & migration planning
                      </div>
                      <div className="flex items-center">
                        <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></span>
                        Automated migration tools
                      </div>
                      <div className="flex items-center">
                        <span className="w-2 h-2 bg-pink-400 rounded-full mr-2"></span>
                        Post-migration optimization
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                  <CardHeader>
                    <CardTitle className="text-xl flex items-center">
                      🔧 Managed Services
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-blue-100 mb-4">
                      24/7 managed cloud operations with proactive monitoring, 
                      automated scaling, and expert technical support.
                    </p>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center">
                        <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></span>
                        24/7 monitoring & support
                      </div>
                      <div className="flex items-center">
                        <span className="w-2 h-2 bg-red-400 rounded-full mr-2"></span>
                        Automated scaling & optimization
                      </div>
                      <div className="flex items-center">
                        <span className="w-2 h-2 bg-indigo-400 rounded-full mr-2"></span>
                        Security & compliance management
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="text-center">
                <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-300">
                  Start Your Cloud Journey
                </Button>
                <p className="mt-4 text-blue-200">
                  Ready to transform your infrastructure? Let's discuss your cloud strategy.
                </p>
              </div>
            </div>
          </div>
        </section>

      </main>
      {/* FAQs */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-semibold">Frequently Asked Questions</h3>
          </div>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              { q: "Which clouds do you support?", a: "AWS and GCP primarily, with experience in hybrid and multi-cloud setups." },
              { q: "Can you migrate without downtime?", a: "We design migration plans to minimize or eliminate downtime using blue/green and canary strategies." },
              { q: "How do you manage costs?", a: "Budgets, alerts, rightsizing, storage lifecycle policies, and usage reporting." },
            ].map((f) => (
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
      <Footer />
    </div>
  );
};

export default Cloud;
