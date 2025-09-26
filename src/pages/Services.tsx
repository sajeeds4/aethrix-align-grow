import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  Settings, 
  Globe, 
  Cloud, 
  Brain, 
  MessageSquare,
  ArrowRight,
  CheckCircle 
} from "lucide-react";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const Services = () => {
  const services = [
    {
      icon: Settings,
      title: "ERP Solutions",
      description: "Transform your business operations with our comprehensive ERP solutions.",
      href: "/erp",
      features: [
        "Custom Odoo ERP implementation and integration",
        "Industry-specific modules and workflows",
        "Real-time analytics and reporting dashboards",
        "Automated business processes",
        "Cloud-based ERP solutions",
        "24/7 technical support and maintenance"
      ],
      cta: "Get ERP Consultation"
    },
    {
      icon: Globe,
      title: "Web & App Development",
  description: "Design and ship fast, accessible web and mobile products.",
  href: "/development",
      features: [
        "Custom websites and enterprise portals",
        "E-commerce solutions with seamless checkout",
        "Mobile-first responsive apps",
        "API integrations and backend systems"
      ],
      cta: "Schedule a Demo"
    },
    {
      icon: Cloud,
      title: "Cloud & Infrastructure",
  description: "Migrate, secure, and operate on cloud with best practices built-in.",
  href: "/cloud",
      features: [
        "Cloud migration and deployment",
        "Hybrid and multi-cloud setups",
        "Infrastructure monitoring & management",
        "Security and compliance built-in"
      ],
      cta: "Talk to Cloud Experts"
    },
    {
      icon: Brain,
      title: "AI & Automation",
  description: "Deploy practical AI for chat, search, analytics, and workflows.",
  href: "/ai",
      features: [
        "Automated reporting & analytics",
        "Intelligent chatbots & customer service tools",
        "Predictive forecasting & demand planning",
        "Workflow automation across departments"
      ],
      cta: "Get AI Consultation"
    },
    {
      icon: MessageSquare,
      title: "Consulting & Advisory",
      description: "Strategic guidance to align technology with business goals.",
      href: "/consulting",
      features: [
        "Technology strategy development",
        "Digital transformation roadmaps",
        "Process optimization consulting",
        "Vendor selection and management"
      ],
      cta: "Start Consultation"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-24 bg-gradient-hero text-primary-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-display mb-6">
                Our Services: Technology that{" "}
                <span className="text-accent">Works for You</span>
              </h1>
              <p className="text-subheadline mb-8">
                From strategy to deployment, Aethrix Systems provides full-stack digital 
                services that empower businesses to operate smarter.
              </p>
              <Button size="lg" variant="hero" asChild>
                <Link to="/consultation" className="flex items-center gap-2">
                  Get Free Consultation
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Services Detail */}
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <Card 
                    key={service.title} 
                    className="group hover:shadow-large transition-smooth border-border hover:border-accent/50 bg-card"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardHeader className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-bounce">
                          <IconComponent className="w-6 h-6 text-primary-foreground" />
                        </div>
                        <Button size="sm" variant="outline" asChild>
                          <Link to="/consultation">Get Quote</Link>
                        </Button>
                      </div>
                      <div>
                        <CardTitle className="text-2xl group-hover:text-accent transition-smooth">
                          {service.title}
                        </CardTitle>
                        <CardDescription className="mt-2 text-base">
                          {service.description}
                        </CardDescription>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <ul className="space-y-3">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Button className="w-full" variant="cta" asChild>
                        <Link to="/consultation" className="flex items-center justify-center gap-2">
                          {service.cta}
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Services Comparison Table */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-6">Service Comparison & Deliverables</h2>

            {/* Service Pricing & ROI */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h3 className="text-2xl font-semibold mb-4">Service Pricing & ROI Analysis</h3>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Service Category</TableHead>
                      <TableHead>Starting Price</TableHead>
                      <TableHead>Average Project Size</TableHead>
                      <TableHead>Typical ROI Timeline</TableHead>
                      <TableHead>Expected ROI %</TableHead>
                      <TableHead>Key Value Drivers</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">ERP Solutions</TableCell>
                      <TableCell>$25,000</TableCell>
                      <TableCell>$50,000 - $200,000</TableCell>
                      <TableCell>12-18 months</TableCell>
                      <TableCell>200-400%</TableCell>
                      <TableCell>Process automation, data accuracy, compliance</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Web Development</TableCell>
                      <TableCell>$15,000</TableCell>
                      <TableCell>$30,000 - $150,000</TableCell>
                      <TableCell>6-12 months</TableCell>
                      <TableCell>150-300%</TableCell>
                      <TableCell>Customer acquisition, brand presence, sales automation</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Cloud Infrastructure</TableCell>
                      <TableCell>$10,000</TableCell>
                      <TableCell>$25,000 - $100,000</TableCell>
                      <TableCell>3-6 months</TableCell>
                      <TableCell>300-500%</TableCell>
                      <TableCell>Cost reduction, scalability, disaster recovery</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">AI & Automation</TableCell>
                      <TableCell>$20,000</TableCell>
                      <TableCell>$40,000 - $250,000</TableCell>
                      <TableCell>9-15 months</TableCell>
                      <TableCell>250-600%</TableCell>
                      <TableCell>Labor cost reduction, accuracy improvement, insights</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </div>

            {/* Implementation Roadmap */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h3 className="text-2xl font-semibold mb-4">Typical Implementation Roadmap</h3>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Phase</TableHead>
                      <TableHead>Duration</TableHead>
                      <TableHead>ERP Solutions</TableHead>
                      <TableHead>Web Development</TableHead>
                      <TableHead>Cloud Infrastructure</TableHead>
                      <TableHead>AI & Automation</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">Discovery & Planning</TableCell>
                      <TableCell>2-4 weeks</TableCell>
                      <TableCell>Business process mapping, requirements gathering</TableCell>
                      <TableCell>User research, wireframing, tech stack selection</TableCell>
                      <TableCell>Infrastructure audit, migration planning</TableCell>
                      <TableCell>Data analysis, model selection, feasibility study</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Design & Architecture</TableCell>
                      <TableCell>3-6 weeks</TableCell>
                      <TableCell>System design, module configuration</TableCell>
                      <TableCell>UI/UX design, API architecture</TableCell>
                      <TableCell>Network design, security architecture</TableCell>
                      <TableCell>Model architecture, data pipeline design</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Development & Implementation</TableCell>
                      <TableCell>8-16 weeks</TableCell>
                      <TableCell>Module deployment, customization</TableCell>
                      <TableCell>Frontend/backend development, testing</TableCell>
                      <TableCell>Infrastructure provisioning, migration</TableCell>
                      <TableCell>Model training, integration development</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Testing & Deployment</TableCell>
                      <TableCell>2-4 weeks</TableCell>
                      <TableCell>User acceptance testing, go-live</TableCell>
                      <TableCell>Performance testing, production deployment</TableCell>
                      <TableCell>Load testing, cutover execution</TableCell>
                      <TableCell>Model validation, production deployment</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Support & Optimization</TableCell>
                      <TableCell>Ongoing</TableCell>
                      <TableCell>User training, performance monitoring</TableCell>
                      <TableCell>Maintenance, feature enhancements</TableCell>
                      <TableCell>Monitoring, cost optimization</TableCell>
                      <TableCell>Model retraining, performance tuning</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </div>

            <h3 className="text-2xl font-semibold mb-4">Detailed Service Deliverables</h3>
            <Table>
              <TableCaption>At-a-glance comparison of scope, deliverables, and timeline by service.</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead>Service</TableHead>
                  <TableHead>Discovery</TableHead>
                  <TableHead>Design</TableHead>
                  <TableHead>Build</TableHead>
                  <TableHead>Test</TableHead>
                  <TableHead>Deploy</TableHead>
                  <TableHead>Handover</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>ERP Solutions</TableCell>
                  <TableCell>Process mapping, fit-gap, data audit</TableCell>
                  <TableCell>Odoo module design, workflow specs</TableCell>
                  <TableCell>Custom modules, integrations, migrations</TableCell>
                  <TableCell>UAT scripts, data validation</TableCell>
                  <TableCell>Cutover plan, staging to prod</TableCell>
                  <TableCell>Admin training, runbooks, support</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Web & App Development</TableCell>
                  <TableCell>Product discovery, backlog, architecture</TableCell>
                  <TableCell>UX/UI, component library, APIs</TableCell>
                  <TableCell>Frontend, backend, CI/CD</TableCell>
                  <TableCell>Unit/e2e, accessibility, perf</TableCell>
                  <TableCell>Blue/green deploy, monitoring</TableCell>
                  <TableCell>Docs, handoff, enablement</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Cloud & Infrastructure</TableCell>
                  <TableCell>Infra audit, cost analysis</TableCell>
                  <TableCell>Landing zone, network design</TableCell>
                  <TableCell>IaC modules, security baselines</TableCell>
                  <TableCell>DR drills, penetration tests</TableCell>
                  <TableCell>Cutover/migration</TableCell>
                  <TableCell>Runbooks, SRE onboarding</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>AI & Automation</TableCell>
                  <TableCell>Use-case selection, data readiness</TableCell>
                  <TableCell>Prompt/RAG design, eval plan</TableCell>
                  <TableCell>Pipelines, agents, integrations</TableCell>
                  <TableCell>Human-in-loop evals, guardrails</TableCell>
                  <TableCell>Shadow launch, grad rollout</TableCell>
                  <TableCell>Ops dashboards, retraining cadence</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </section>

        {/* Technology Stack Table */}
        <section className="pb-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-6">Technology Stack Overview</h2>
            <Table>
              <TableCaption>Typical tools and frameworks we use; adapted to your context.</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead>Layer</TableHead>
                  <TableHead>Primary</TableHead>
                  <TableHead>Alternatives</TableHead>
                  <TableHead>Notes</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Frontend</TableCell>
                  <TableCell>React, TypeScript, Vite, Tailwind, Radix/Shadcn</TableCell>
                  <TableCell>Next.js, Vue, SvelteKit</TableCell>
                  <TableCell>Accessible UI, fast dev/build</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Backend</TableCell>
                  <TableCell>Node.js (Express/Nest)</TableCell>
                  <TableCell>Django/FastAPI, Laravel</TableCell>
                  <TableCell>Choose per team skills and scale</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Data</TableCell>
                  <TableCell>PostgreSQL, Redis</TableCell>
                  <TableCell>MySQL, MongoDB</TableCell>
                  <TableCell>Migrations, backups, observability</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>ERP</TableCell>
                  <TableCell>Odoo CE/EE</TableCell>
                  <TableCell>ERPNext, SAP B1</TableCell>
                  <TableCell>Fit-gap and TCO driven</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Cloud</TableCell>
                  <TableCell>AWS, Docker, Kubernetes</TableCell>
                  <TableCell>GCP/Azure, Fly.io</TableCell>
                  <TableCell>IaC with Terraform/Pulumi</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>AI</TableCell>
                  <TableCell>OpenAI APIs, LangChain, Vectordb</TableCell>
                  <TableCell>Local LLMs, RAG frameworks</TableCell>
                  <TableCell>Guardrails, evals, privacy</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>CI/CD</TableCell>
                  <TableCell>GitHub Actions</TableCell>
                  <TableCell>GitLab CI, Jenkins</TableCell>
                  <TableCell>Preview envs, quality gates</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Security</TableCell>
                  <TableCell>OWASP ASVS, SAST/DAST</TableCell>
                  <TableCell>Dependabot, Trivy</TableCell>
                  <TableCell>Shift-left with policies</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-secondary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Not Sure Which Service is Right for You?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let our experts analyze your needs and recommend the best technology 
              solutions for your business goals.
            </p>
            <Button size="lg" variant="cta" asChild>
              <Link to="/consultation" className="flex items-center gap-2">
                Schedule Free Consultation
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

export default Services;