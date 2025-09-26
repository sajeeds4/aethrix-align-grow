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
