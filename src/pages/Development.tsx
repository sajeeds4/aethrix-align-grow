import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Code2, Smartphone, Globe, Server, Rocket, Shield, Workflow, ArrowRight, ChevronRight } from "lucide-react";
import { useEffect } from "react";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const PageHead = () => {
  useEffect(() => {
    document.title = "Web & App Development | Aethrix Systems";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Full-stack development: web platforms, mobile apps, APIs, and security with modern CI/CD and testing.");
  }, []);
  return null;
};

const Development = () => {
  const features = [
    { icon: Globe, title: "Web Platforms", description: "High-performance websites, portals, and dashboards built for scale." },
    { icon: Smartphone, title: "Mobile Apps", description: "iOS/Android apps with modern UX and offline-first patterns." },
    { icon: Server, title: "APIs & Backends", description: "Robust APIs, microservices, and integrations with your systems." },
    { icon: Shield, title: "Security by Design", description: "AuthN/Z, OWASP best practices, and privacy-first architecture." },
  ];

  const process = [
    { step: "01", title: "Discovery", text: "Understand goals, users, constraints, and success metrics." },
    { step: "02", title: "Design", text: "Wireframes, UX flows, and component-driven UI design." },
    { step: "03", title: "Build", text: "Agile delivery with CI/CD, code reviews, and testing." },
    { step: "04", title: "Launch & Grow", text: "Observability, performance tuning, and iterative enhancements." },
  ];

  const stack = ["React", "TypeScript", "Vite", "Node", "Express", "Postgres", "MongoDB", "Docker", "Kubernetes", "AWS", "GCP"];

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
            <li className="text-foreground">Web & App Development</li>
          </ol>
        </nav>
        {/* Hero */}
        <section className="py-24 bg-gradient-hero text-primary-foreground overflow-hidden relative">
          {/* Code-like background pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-20 left-10 font-mono text-xs text-white/30">
              {"<div className='container'>"}
            </div>
            <div className="absolute top-32 right-20 font-mono text-xs text-white/30">
              {"function buildApp() {"}
            </div>
            <div className="absolute bottom-40 left-1/4 font-mono text-xs text-white/30">
              {"const [state, setState] = useState()"}
            </div>
            <div className="absolute bottom-20 right-32 font-mono text-xs text-white/30">
              {"export default Component"}
            </div>
          </div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
                  <Code2 className="w-4 h-4" />
                  Full-Stack Development
                </div>
                <h1 className="text-display mb-6">
                  Web & App Development that <span className="text-accent">Ships</span>
                </h1>
                <p className="text-subheadline mb-8 text-primary-foreground/90">
                  We build fast, accessible, and secure products—from idea to production—with a focus on measurable business outcomes.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Button size="lg" variant="hero" asChild>
                    <Link to="/consultation" className="flex items-center gap-2">
                      Start Your Project
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20">
                    View Portfolio
                  </Button>
                </div>
                
                {/* Tech Stack Preview */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/20">
                  {["React", "TypeScript", "Node.js", "Docker", "AWS"].map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-white/10 rounded-full text-xs font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Interactive Code Preview */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="bg-slate-900/90 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-2xl">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                    <div className="text-sm text-white/60 ml-2">modern-app.tsx</div>
                  </div>
                  
                  <div className="font-mono text-sm space-y-2">
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                      className="text-blue-300"
                    >
                      {"import { useState, useEffect } from 'react'"}
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.7 }}
                      className="text-purple-300"
                    >
                      {"import { motion } from 'framer-motion'"}
                    </motion.div>
                    <div className="h-2"></div>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.9 }}
                      className="text-yellow-300"
                    >
                      {"export default function App() {"}
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 1.1 }}
                      className="text-green-300 ml-4"
                    >
                      {"return ("}
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 1.3 }}
                      className="text-pink-300 ml-8"
                    >
                      {"<motion.div animate={{ scale: 1 }}>"}
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 1.5 }}
                      className="text-cyan-300 ml-12"
                    >
                      {"<h1>Beautiful & Fast</h1>"}
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 1.7 }}
                      className="text-pink-300 ml-8"
                    >
                      {"</motion.div>"}
                    </motion.div>
                    <div className="text-green-300 ml-4">{"  )"}</div>
                    <div className="text-yellow-300">{"}"}</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Full-Stack Capabilities</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">From frontend polish to backend power—delivered with maintainable, well-tested code.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((f, i) => {
                const Icon = f.icon
                return (
                  <motion.div key={f.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: i * 0.1 }} viewport={{ once: true }}>
                    <Card className="h-full bg-card border-border">
                      <CardHeader>
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <CardTitle>{f.title}</CardTitle>
                        <CardDescription>{f.description}</CardDescription>
                      </CardHeader>
                    </Card>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

  {/* Process */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-6">
              {process.map((p, i) => (
                <Card key={p.title} className="bg-background border-border">
                  <CardHeader>
                    <div className="text-accent font-semibold mb-2">{p.step}</div>
                    <CardTitle className="mb-2">{p.title}</CardTitle>
                    <CardDescription>{p.text}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Architecture */}
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h3 className="text-2xl font-semibold">Reference Architecture</h3>
              <p className="text-muted-foreground">Typical multi-tier app with web, API, authentication, and data layers.</p>
            </div>
            <div className="rounded-lg border border-border bg-card p-4">
              <img src="/architecture/dev-architecture.svg" alt="Development Architecture" className="w-full h-auto" />
            </div>
          </div>
        </section>

        {/* Implementation Plan */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { step: "Week 1", title: "Discovery", text: "Requirements, success metrics, risks, and initial backlog." },
                { step: "Weeks 2-3", title: "Design", text: "UX flows, wireframes, component library, API contracts." },
                { step: "Weeks 3-6", title: "Build", text: "Sprints with demos, tests, CI/CD, and observability." },
                { step: "Week 7+", title: "Launch & Iterate", text: "Stabilization, analytics review, and roadmap planning." },
              ].map((p) => (
                <Card key={p.step} className="bg-background border-border">
                  <CardHeader>
                    <div className="text-accent font-semibold mb-2">{p.step}</div>
                    <CardTitle className="mb-2">{p.title}</CardTitle>
                    <CardDescription>{p.text}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-2xl font-semibold mb-6 flex items-center justify-center gap-2">
              <Code2 className="w-5 h-5 text-accent" /> Our Preferred Stack
            </h3>
            <div className="flex flex-wrap items-center justify-center gap-3 text-sm text-muted-foreground">
              {stack.map((s) => (
                <span key={s} className="px-3 py-1 rounded-full border border-border bg-card">{s}</span>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Selection Matrix */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-2xl font-semibold mb-4">Technology Selection Matrix</h3>
            <Table>
              <TableCaption>Representative choices; we pick the best fit per project constraints.</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead>Concern</TableHead>
                  <TableHead>Preferred</TableHead>
                  <TableHead>Alternatives</TableHead>
                  <TableHead>Decision Drivers</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>SPA Framework</TableCell>
                  <TableCell>React + Vite</TableCell>
                  <TableCell>Next.js, Vue</TableCell>
                  <TableCell>DX, ecosystem, performance</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>State/Data</TableCell>
                  <TableCell>TanStack Query</TableCell>
                  <TableCell>Redux Toolkit, SWR</TableCell>
                  <TableCell>Cache control, mutations, SSR</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Styling/UI</TableCell>
                  <TableCell>Tailwind + Radix/Shadcn</TableCell>
                  <TableCell>Chakra, MUI</TableCell>
                  <TableCell>Accessibility, velocity</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Backend</TableCell>
                  <TableCell>Node (Express/Nest)</TableCell>
                  <TableCell>FastAPI, Django</TableCell>
                  <TableCell>Team skill, hosting, latency</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Database</TableCell>
                  <TableCell>PostgreSQL</TableCell>
                  <TableCell>MySQL, MongoDB</TableCell>
                  <TableCell>Transactions, analytics</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Infra</TableCell>
                  <TableCell>AWS + Terraform</TableCell>
                  <TableCell>GCP/Azure, Pulumi</TableCell>
                  <TableCell>Scale, cost, SRE maturity</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </section>

        {/* Testing Coverage Matrix */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Enhanced Architecture & DevOps */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-8">Architecture & DevOps Excellence</h2>
              
              {/* System Architecture Patterns */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h3 className="text-2xl font-semibold mb-4">System Architecture Patterns & Scalability</h3>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Architecture Pattern</TableHead>
                        <TableHead>Use Cases</TableHead>
                        <TableHead>Technology Stack</TableHead>
                        <TableHead>Scalability Limit</TableHead>
                        <TableHead>Complexity Level</TableHead>
                        <TableHead>Typical Cost Range</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">Monolithic MVC</TableCell>
                        <TableCell>Simple CRUD, MVP, prototypes</TableCell>
                        <TableCell>Next.js, Django, Rails</TableCell>
                        <TableCell>10k concurrent users</TableCell>
                        <TableCell>Low</TableCell>
                        <TableCell>$15k - $50k</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Microservices</TableCell>
                        <TableCell>Enterprise, high-traffic, team scaling</TableCell>
                        <TableCell>Node.js, Go, Docker, K8s</TableCell>
                        <TableCell>1M+ concurrent users</TableCell>
                        <TableCell>High</TableCell>
                        <TableCell>$80k - $300k</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Serverless</TableCell>
                        <TableCell>Event-driven, variable load, cost-sensitive</TableCell>
                        <TableCell>AWS Lambda, Vercel, Netlify</TableCell>
                        <TableCell>Auto-scaling</TableCell>
                        <TableCell>Medium</TableCell>
                        <TableCell>$25k - $100k</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">JAMstack</TableCell>
                        <TableCell>Content sites, e-commerce, marketing</TableCell>
                        <TableCell>React, Gatsby, Headless CMS</TableCell>
                        <TableCell>CDN-limited</TableCell>
                        <TableCell>Low-Medium</TableCell>
                        <TableCell>$20k - $75k</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </div>

              {/* DevOps Pipeline Maturity */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h3 className="text-2xl font-semibold mb-4">DevOps Pipeline Maturity Levels</h3>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Maturity Level</TableHead>
                        <TableHead>CI/CD Pipeline</TableHead>
                        <TableHead>Testing Strategy</TableHead>
                        <TableHead>Deployment Method</TableHead>
                        <TableHead>Monitoring & Observability</TableHead>
                        <TableHead>Recovery Time</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">Basic</TableCell>
                        <TableCell>Manual builds, basic automation</TableCell>
                        <TableCell>Unit tests, manual QA</TableCell>
                        <TableCell>FTP, manual deployment</TableCell>
                        <TableCell>Basic uptime monitoring</TableCell>
                        <TableCell>4-8 hours</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Intermediate</TableCell>
                        <TableCell>GitHub Actions, automated builds</TableCell>
                        <TableCell>Unit + integration tests, code coverage</TableCell>
                        <TableCell>Blue-green deployment</TableCell>
                        <TableCell>APM, logging, basic alerts</TableCell>
                        <TableCell>1-2 hours</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Advanced</TableCell>
                        <TableCell>Multi-stage pipelines, security scans</TableCell>
                        <TableCell>E2E tests, performance tests</TableCell>
                        <TableCell>Canary releases, feature flags</TableCell>
                        <TableCell>Full observability, SLIs/SLOs</TableCell>
                        <TableCell>15-30 minutes</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Elite</TableCell>
                        <TableCell>GitOps, policy-as-code</TableCell>
                        <TableCell>Chaos engineering, property-based</TableCell>
                        <TableCell>Progressive delivery, auto-rollback</TableCell>
                        <TableCell>AI-driven incident response</TableCell>
                        <TableCell>"Sub 5 minutes"</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </div>

              {/* Security Implementation Framework */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-2xl font-semibold mb-4">Security Implementation Framework</h3>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Security Layer</TableHead>
                        <TableHead>Implementation</TableHead>
                        <TableHead>Tools & Technologies</TableHead>
                        <TableHead>Compliance Standards</TableHead>
                        <TableHead>Risk Level Coverage</TableHead>
                        <TableHead>Maintenance Effort</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">Network Security</TableCell>
                        <TableCell>WAF, DDoS protection, TLS 1.3</TableCell>
                        <TableCell>Cloudflare, AWS Shield, Let's Encrypt</TableCell>
                        <TableCell>PCI DSS, NIST</TableCell>
                        <TableCell>High - Network attacks</TableCell>
                        <TableCell>Low - Automated</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Application Security</TableCell>
                        <TableCell>SAST, DAST, dependency scanning</TableCell>
                        <TableCell>SonarQube, OWASP ZAP, Snyk</TableCell>
                        <TableCell>OWASP ASVS, ISO 27001</TableCell>
                        <TableCell>Critical - Code vulnerabilities</TableCell>
                        <TableCell>Medium - Regular scans</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Data Security</TableCell>
                        <TableCell>Encryption at rest/transit, key management</TableCell>
                        <TableCell>AWS KMS, Vault, database encryption</TableCell>
                        <TableCell>GDPR, HIPAA, SOX</TableCell>
                        <TableCell>Critical - Data breaches</TableCell>
                        <TableCell>High - Key rotation</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Access Control</TableCell>
                        <TableCell>RBAC, MFA, zero-trust architecture</TableCell>
                        <TableCell>Auth0, Okta, OAuth 2.0/OIDC</TableCell>
                        <TableCell>NIST AAF, ISO 27001</TableCell>
                        <TableCell>High - Unauthorized access</TableCell>
                        <TableCell>Medium - User management</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-semibold mb-4">Testing Coverage</h3>
            <Table>
              <TableCaption>Minimal test plan to ensure quality and maintainability.</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead>Layer</TableHead>
                  <TableHead>Goal</TableHead>
                  <TableHead>Tools</TableHead>
                  <TableHead>Target</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Unit</TableCell>
                  <TableCell>Logic correctness</TableCell>
                  <TableCell>Vitest/Jest</TableCell>
                  <TableCell>{">= 70% critical paths"}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Integration</TableCell>
                  <TableCell>API and DB interactions</TableCell>
                  <TableCell>Supertest, Prisma/Testcontainers</TableCell>
                  <TableCell>Key endpoints</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>E2E</TableCell>
                  <TableCell>User flows</TableCell>
                  <TableCell>Playwright/Cypress</TableCell>
                  <TableCell>Happy paths + auth</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Performance</TableCell>
                  <TableCell>Speed budgets</TableCell>
                  <TableCell>Lighthouse, k6</TableCell>
                  <TableCell>{"LCP < 2.5s; p95 API < 300ms"}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Security</TableCell>
                  <TableCell>OWASP risks</TableCell>
                  <TableCell>Zap, SAST/DAST</TableCell>
                  <TableCell>No Critical/High vulns</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </section>

        {/* Performance Budgets */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-2xl font-semibold mb-4">Performance Budgets</h3>
            <Table>
              <TableCaption>Initial budgets to keep apps fast and responsive.</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead>Metric</TableHead>
                  <TableHead>Target</TableHead>
                  <TableHead>Notes</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>LCP</TableCell>
                  <TableCell>{"< 2.5s"}</TableCell>
                  <TableCell>{"On median 4G, TTI < 5s"}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>CLS</TableCell>
                  <TableCell>{"< 0.1"}</TableCell>
                  <TableCell>Stable layout, reserve space</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>JS Bundle</TableCell>
                  <TableCell>{"< 200KB gz"}</TableCell>
                  <TableCell>Code-split, lazy load</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>API p95 latency</TableCell>
                  <TableCell>{"< 300ms"}</TableCell>
                  <TableCell>Autoscale, caching</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h3 className="text-2xl font-semibold">Frequently Asked Questions</h3>
            </div>
            <div className="max-w-3xl mx-auto space-y-6">
              {[
                { q: "Do you support both web and mobile?", a: "Yes—responsive web apps and native/hybrid mobile with shared design systems." },
                { q: "What about maintenance?", a: "We offer support, monitoring, and iterative feature development post-launch." },
                { q: "How do you ensure quality?", a: "Code reviews, automated testing, CI/CD pipelines, and observability." },
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

        {/* Related Services */}
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-2xl font-semibold mb-6">Related Services</h3>
            <div className="flex flex-wrap items-center justify-center gap-3 text-sm">
              <Link to="/cloud" className="px-3 py-1 rounded-full border border-border hover:bg-accent hover:text-accent-foreground transition-colors">Cloud & Infrastructure</Link>
              <Link to="/ai" className="px-3 py-1 rounded-full border border-border hover:bg-accent hover:text-accent-foreground transition-colors">AI & Automation</Link>
              <Link to="/erp" className="px-3 py-1 rounded-full border border-border hover:bg-accent hover:text-accent-foreground transition-colors">ERP Solutions</Link>
              <Link to="/case-studies" className="px-3 py-1 rounded-full border border-border hover:bg-accent hover:text-accent-foreground transition-colors">Case Studies</Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-gradient-secondary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Have a roadmap? Or just an idea?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">Let’s design, build, and launch a product your users will love.</p>
            <Button size="lg" variant="cta" asChild>
              <Link to="/consultation" className="flex items-center gap-2">
                Talk to Engineering
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

export default Development;
