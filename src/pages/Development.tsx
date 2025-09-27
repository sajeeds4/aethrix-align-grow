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

        {/* Comprehensive Development Services */}
        <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-8xl mx-auto">
              <h2 className="text-4xl font-bold mb-16 text-center bg-gradient-to-r from-slate-600 to-blue-600 bg-clip-text text-transparent">
                Enterprise-Grade Development Services & Solutions
              </h2>
              
              <div className="grid lg:grid-cols-2 gap-12 mb-16">
                <Card className="shadow-2xl border-0 overflow-hidden">
                  <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-8 text-white">
                    <h3 className="text-2xl font-bold mb-4">Full-Stack Web Development</h3>
                    <div className="grid grid-cols-2 gap-4 text-blue-100">
                      <div>Frontend: Modern Frameworks</div>
                      <div>Backend: Scalable Architecture</div>
                      <div>Database: High Performance</div>
                      <div>Deployment: CI/CD Automation</div>
                    </div>
                  </div>
                  <CardContent className="p-8">
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold mb-3 text-blue-700">Modern Frontend Development</h4>
                        <div className="bg-blue-50 p-4 rounded-lg text-sm">
                          <p className="text-gray-700 mb-3">
                            <strong>React & Next.js Expertise:</strong> Component-driven architecture with server-side rendering, 
                            static site generation, progressive web apps, and advanced state management using Redux Toolkit and Zustand.
                          </p>
                          <p className="text-gray-700 mb-3">
                            <strong>TypeScript & Modern Tooling:</strong> Type-safe development with comprehensive toolchain including 
                            Vite, ESLint, Prettier, Storybook for component documentation, and automated testing with Jest and Playwright.
                          </p>
                          <p className="text-gray-700">
                            <strong>Performance Optimization:</strong> Code splitting, lazy loading, image optimization, bundle analysis, 
                            Core Web Vitals optimization, and advanced caching strategies for optimal user experience.
                          </p>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3 text-green-700">Backend Architecture</h4>
                        <div className="space-y-3">
                          <div className="bg-green-50 p-3 rounded-lg text-sm">
                            <div className="font-medium mb-1">Node.js & Express.js</div>
                            <p className="text-gray-700">High-performance REST and GraphQL APIs with authentication, authorization, 
                            rate limiting, validation, and comprehensive error handling.</p>
                          </div>
                          <div className="bg-purple-50 p-3 rounded-lg text-sm">
                            <div className="font-medium mb-1">Database Design & Optimization</div>
                            <p className="text-gray-700">PostgreSQL, MongoDB, Redis implementation with query optimization, 
                            indexing strategies, connection pooling, and database migration management.</p>
                          </div>
                          <div className="bg-orange-50 p-3 rounded-lg text-sm">
                            <div className="font-medium mb-1">Microservices Architecture</div>
                            <p className="text-gray-700">Service decomposition, inter-service communication, event-driven architecture, 
                            API gateways, and distributed system patterns for scalability.</p>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3 text-purple-700">Development Metrics</h4>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="bg-purple-50 p-3 rounded text-center">
                            <div className="font-bold text-2xl text-purple-600 mb-1">98%</div>
                            <div className="text-xs text-gray-700">Code Coverage</div>
                          </div>
                          <div className="bg-green-50 p-3 rounded text-center">
                            <div className="font-bold text-2xl text-green-600 mb-1">{"<100ms"}</div>
                            <div className="text-xs text-gray-700">API Response Time</div>
                          </div>
                          <div className="bg-blue-50 p-3 rounded text-center">
                            <div className="font-bold text-2xl text-blue-600 mb-1">99.9%</div>
                            <div className="text-xs text-gray-700">Uptime SLA</div>
                          </div>
                          <div className="bg-orange-50 p-3 rounded text-center">
                            <div className="font-bold text-2xl text-orange-600 mb-1">A+</div>
                            <div className="text-xs text-gray-700">Security Grade</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-2xl border-0 overflow-hidden">
                  <div className="bg-gradient-to-r from-green-600 to-emerald-700 p-8 text-white">
                    <h3 className="text-2xl font-bold mb-4">Mobile App Development</h3>
                    <div className="grid grid-cols-2 gap-4 text-green-100">
                      <div>iOS: Swift & SwiftUI</div>
                      <div>Android: Kotlin & Compose</div>
                      <div>Cross-Platform: React Native</div>
                      <div>Backend: Firebase & Custom APIs</div>
                    </div>
                  </div>
                  <CardContent className="p-8">
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold mb-3 text-green-700">Native Mobile Development</h4>
                        <div className="bg-green-50 p-4 rounded-lg text-sm">
                          <p className="text-gray-700 mb-3">
                            <strong>iOS Development:</strong> Native Swift applications with SwiftUI, UIKit, Core Data, 
                            CloudKit integration, push notifications, In-App purchases, and App Store optimization strategies.
                          </p>
                          <p className="text-gray-700 mb-3">
                            <strong>Android Development:</strong> Kotlin-first development with Jetpack Compose, Room database, 
                            WorkManager, Firebase integration, Google Play billing, and Material Design 3 implementation.
                          </p>
                          <p className="text-gray-700">
                            <strong>Performance Optimization:</strong> Memory management, battery optimization, offline-first architecture, 
                            image caching, network optimization, and comprehensive app performance monitoring.
                          </p>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3 text-blue-700">Cross-Platform Solutions</h4>
                        <div className="space-y-3">
                          <div className="bg-blue-50 p-3 rounded-lg text-sm">
                            <div className="font-medium mb-1">React Native Development</div>
                            <p className="text-gray-700">Shared codebase for iOS and Android with native module integration, 
                            platform-specific optimizations, and over-the-air updates using CodePush.</p>
                          </div>
                          <div className="bg-purple-50 p-3 rounded-lg text-sm">
                            <div className="font-medium mb-1">Flutter Development</div>
                            <p className="text-gray-700">Cross-platform development with Dart, custom widgets, state management, 
                            native platform integration, and high-performance animations.</p>
                          </div>
                          <div className="bg-orange-50 p-3 rounded-lg text-sm">
                            <div className="font-medium mb-1">Progressive Web Apps (PWA)</div>
                            <p className="text-gray-700">Web applications with native app capabilities including offline functionality, 
                            push notifications, home screen installation, and app-like user experience.</p>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3 text-orange-700">Mobile App Success Metrics</h4>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="bg-orange-50 p-3 rounded text-center">
                            <div className="font-bold text-2xl text-orange-600 mb-1">4.8+</div>
                            <div className="text-xs text-gray-700">App Store Rating</div>
                          </div>
                          <div className="bg-green-50 p-3 rounded text-center">
                            <div className="font-bold text-2xl text-green-600 mb-1">{"<2s"}</div>
                            <div className="text-xs text-gray-700">Launch Time</div>
                          </div>
                          <div className="bg-blue-50 p-3 rounded text-center">
                            <div className="font-bold text-2xl text-blue-600 mb-1">95%</div>
                            <div className="text-xs text-gray-700">Crash-Free Sessions</div>
                          </div>
                          <div className="bg-purple-50 p-3 rounded text-center">
                            <div className="font-bold text-2xl text-purple-600 mb-1">85%</div>
                            <div className="text-xs text-gray-700">User Retention (30d)</div>
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
                    <h3 className="text-2xl font-bold mb-4">DevOps & Infrastructure</h3>
                    <div className="grid grid-cols-2 gap-4 text-purple-100">
                      <div>CI/CD: Automated Pipelines</div>
                      <div>Containers: Docker & K8s</div>
                      <div>Monitoring: Full Observability</div>
                      <div>Security: DevSecOps</div>
                    </div>
                  </div>
                  <CardContent className="p-8">
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold mb-3 text-purple-700">CI/CD & Automation</h4>
                        <div className="bg-purple-50 p-4 rounded-lg text-sm">
                          <p className="text-gray-700 mb-3">
                            <strong>Continuous Integration:</strong> GitHub Actions, GitLab CI, automated testing, code quality checks, 
                            security scanning, dependency updates, and comprehensive build automation with artifact management.
                          </p>
                          <p className="text-gray-700">
                            <strong>Continuous Deployment:</strong> Blue-green deployments, canary releases, rollback strategies, 
                            environment promotion pipelines, and infrastructure as code with Terraform and CloudFormation.
                          </p>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3 text-blue-700">Container Orchestration</h4>
                        <div className="space-y-2 text-sm">
                          <div className="bg-blue-50 p-3 rounded-lg">
                            <div className="font-medium mb-1">Docker & Kubernetes</div>
                            <p className="text-gray-700">Containerization best practices, multi-stage builds, Kubernetes deployments, 
                            service meshes, auto-scaling, and cluster management.</p>
                          </div>
                          <div className="bg-green-50 p-3 rounded-lg">
                            <div className="font-medium mb-1">Cloud-Native Deployment</div>
                            <p className="text-gray-700">AWS EKS, Google GKE, Azure AKS deployment with Helm charts, 
                            ingress controllers, and cloud-native monitoring solutions.</p>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3 text-green-700">DevOps Efficiency</h4>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="bg-green-50 p-3 rounded text-center">
                            <div className="font-bold text-2xl text-green-600 mb-1">10x</div>
                            <div className="text-xs text-gray-700">Deployment Frequency</div>
                          </div>
                          <div className="bg-blue-50 p-3 rounded text-center">
                            <div className="font-bold text-2xl text-blue-600 mb-1">{"<5min"}</div>
                            <div className="text-xs text-gray-700">Build Time</div>
                          </div>
                          <div className="bg-purple-50 p-3 rounded text-center">
                            <div className="font-bold text-2xl text-purple-600 mb-1">99.5%</div>
                            <div className="text-xs text-gray-700">Deployment Success</div>
                          </div>
                          <div className="bg-orange-50 p-3 rounded text-center">
                            <div className="font-bold text-2xl text-orange-600 mb-1">{"<1min"}</div>
                            <div className="text-xs text-gray-700">Rollback Time</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-2xl border-0 overflow-hidden">
                  <div className="bg-gradient-to-r from-orange-600 to-red-700 p-8 text-white">
                    <h3 className="text-2xl font-bold mb-4">Security & Quality Assurance</h3>
                    <div className="grid grid-cols-2 gap-4 text-orange-100">
                      <div>Security: OWASP Standards</div>
                      <div>Testing: Comprehensive Coverage</div>
                      <div>Performance: Load & Stress</div>
                      <div>Code Quality: Best Practices</div>
                    </div>
                  </div>
                  <CardContent className="p-8">
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold mb-3 text-orange-700">Security-First Development</h4>
                        <div className="bg-orange-50 p-4 rounded-lg text-sm">
                          <p className="text-gray-700 mb-3">
                            <strong>Application Security:</strong> OWASP Top 10 compliance, input validation, output encoding, 
                            SQL injection prevention, XSS protection, CSRF tokens, and comprehensive security headers implementation.
                          </p>
                          <p className="text-gray-700">
                            <strong>Authentication & Authorization:</strong> OAuth 2.0, JWT tokens, multi-factor authentication, 
                            role-based access control, session management, and secure password policies with encryption at rest and in transit.
                          </p>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3 text-blue-700">Comprehensive Testing Strategy</h4>
                        <div className="space-y-2 text-sm">
                          <div className="bg-blue-50 p-3 rounded-lg">
                            <div className="font-medium mb-1">Automated Testing Suite</div>
                            <p className="text-gray-700">Unit tests with Jest, integration tests with Supertest, 
                            end-to-end testing with Playwright, and visual regression testing.</p>
                          </div>
                          <div className="bg-green-50 p-3 rounded-lg">
                            <div className="font-medium mb-1">Performance Testing</div>
                            <p className="text-gray-700">Load testing with Artillery, stress testing, memory leak detection, 
                            and comprehensive performance profiling and optimization.</p>
                          </div>
                          <div className="bg-purple-50 p-3 rounded-lg">
                            <div className="font-medium mb-1">Quality Assurance</div>
                            <p className="text-gray-700">Code reviews, static analysis with SonarQube, accessibility testing, 
                            browser compatibility testing, and comprehensive bug tracking.</p>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3 text-green-700">Quality Metrics</h4>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="bg-green-50 p-3 rounded text-center">
                            <div className="font-bold text-2xl text-green-600 mb-1">99%</div>
                            <div className="text-xs text-gray-700">Security Score</div>
                          </div>
                          <div className="bg-blue-50 p-3 rounded text-center">
                            <div className="font-bold text-2xl text-blue-600 mb-1">95%</div>
                            <div className="text-xs text-gray-700">Test Coverage</div>
                          </div>
                          <div className="bg-purple-50 p-3 rounded text-center">
                            <div className="font-bold text-2xl text-purple-600 mb-1">A</div>
                            <div className="text-xs text-gray-700">Code Quality Grade</div>
                          </div>
                          <div className="bg-orange-50 p-3 rounded text-center">
                            <div className="font-bold text-2xl text-orange-600 mb-1">{"<0.1%"}</div>
                            <div className="text-xs text-gray-700">Bug Rate</div>
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

        {/* Technology Stack & Architecture */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-8xl mx-auto">
              <h2 className="text-4xl font-bold mb-16 text-center bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Modern Technology Stack & Architecture Patterns
              </h2>
              
              <div className="grid lg:grid-cols-3 gap-8 mb-16">
                <Card className="shadow-xl border-0">
                  <CardHeader className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
                    <CardTitle className="text-xl">Frontend Technologies</CardTitle>
                    <CardDescription className="text-indigo-100">Modern client-side development stack</CardDescription>
                  </CardHeader>
                  <CardContent className="p-8">
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold mb-3 text-indigo-700">JavaScript Frameworks</h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between items-center">
                            <span>React 18 + TypeScript</span>
                            <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">Primary</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span>Next.js 14 + App Router</span>
                            <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">SSR/SSG</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span>Vue.js 3 + Composition API</span>
                            <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded">Alternative</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span>Angular 17 + Standalone</span>
                            <span className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded">Enterprise</span>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3 text-blue-700">Build Tools & Bundlers</h4>
                        <div className="space-y-2 text-sm">
                          <div className="bg-blue-50 p-3 rounded-lg">
                            <div className="font-medium mb-1">Vite + SWC</div>
                            <p className="text-gray-700">Lightning-fast development server, optimized production builds, 
                            and advanced code splitting strategies.</p>
                          </div>
                          <div className="bg-green-50 p-3 rounded-lg">
                            <div className="font-medium mb-1">Webpack + Babel</div>
                            <p className="text-gray-700">Advanced configuration for complex projects, custom loaders, 
                            and enterprise-grade optimization.</p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-indigo-50 p-4 rounded-lg">
                        <h5 className="font-medium mb-2">Performance Targets</h5>
                        <div className="grid grid-cols-2 gap-2 text-xs">
                          <div className="text-center bg-white p-2 rounded">
                            <div className="font-bold text-indigo-600">{"<100ms"}</div>
                            <div>First Paint</div>
                          </div>
                          <div className="text-center bg-white p-2 rounded">
                            <div className="font-bold text-green-600">90+</div>
                            <div>Lighthouse Score</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-xl border-0">
                  <CardHeader className="bg-gradient-to-r from-green-600 to-emerald-600 text-white">
                    <CardTitle className="text-xl">Backend & Database</CardTitle>
                    <CardDescription className="text-green-100">Server-side development and data management</CardDescription>
                  </CardHeader>
                  <CardContent className="p-8">
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold mb-3 text-green-700">Server Technologies</h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between items-center">
                            <span>Node.js + Express</span>
                            <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">REST APIs</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span>GraphQL + Apollo</span>
                            <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">Flexible Queries</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span>Python + FastAPI</span>
                            <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded">High Performance</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span>Go + Gin/Fiber</span>
                            <span className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded">Microservices</span>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3 text-blue-700">Database Solutions</h4>
                        <div className="space-y-2 text-sm">
                          <div className="bg-blue-50 p-3 rounded-lg">
                            <div className="font-medium mb-1">PostgreSQL + Prisma ORM</div>
                            <p className="text-gray-700">ACID compliance, advanced indexing, full-text search, 
                            and type-safe database access with automated migrations.</p>
                          </div>
                          <div className="bg-purple-50 p-3 rounded-lg">
                            <div className="font-medium mb-1">MongoDB + Mongoose</div>
                            <p className="text-gray-700">Document-based storage, flexible schema, aggregation pipelines, 
                            and horizontal scaling capabilities.</p>
                          </div>
                          <div className="bg-orange-50 p-3 rounded-lg">
                            <div className="font-medium mb-1">Redis + Bull Queue</div>
                            <p className="text-gray-700">Caching layer, session storage, pub/sub messaging, 
                            and background job processing with retry logic.</p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-green-50 p-4 rounded-lg">
                        <h5 className="font-medium mb-2">Scalability Targets</h5>
                        <div className="grid grid-cols-2 gap-2 text-xs">
                          <div className="text-center bg-white p-2 rounded">
                            <div className="font-bold text-green-600">10K+</div>
                            <div>Concurrent Users</div>
                          </div>
                          <div className="text-center bg-white p-2 rounded">
                            <div className="font-bold text-blue-600">{"<50ms"}</div>
                            <div>Query Response</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-xl border-0">
                  <CardHeader className="bg-gradient-to-r from-orange-600 to-red-600 text-white">
                    <CardTitle className="text-xl">Cloud & Infrastructure</CardTitle>
                    <CardDescription className="text-orange-100">Deployment and scaling infrastructure</CardDescription>
                  </CardHeader>
                  <CardContent className="p-8">
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold mb-3 text-orange-700">Cloud Platforms</h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between items-center">
                            <span>AWS (ECS, Lambda, RDS)</span>
                            <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">Primary</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span>Google Cloud Platform</span>
                            <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">ML/AI</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span>Vercel + Netlify</span>
                            <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded">Frontend</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span>Docker + Kubernetes</span>
                            <span className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded">Containers</span>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3 text-blue-700">DevOps Tools</h4>
                        <div className="space-y-2 text-sm">
                          <div className="bg-blue-50 p-3 rounded-lg">
                            <div className="font-medium mb-1">GitHub Actions + GitLab CI</div>
                            <p className="text-gray-700">Automated testing, building, deployment pipelines 
                            with security scanning and dependency management.</p>
                          </div>
                          <div className="bg-green-50 p-3 rounded-lg">
                            <div className="font-medium mb-1">Terraform + Ansible</div>
                            <p className="text-gray-700">Infrastructure as code, configuration management, 
                            and automated provisioning with version control.</p>
                          </div>
                          <div className="bg-purple-50 p-3 rounded-lg">
                            <div className="font-medium mb-1">Monitoring & Logging</div>
                            <p className="text-gray-700">Prometheus, Grafana, ELK stack, Sentry for error tracking, 
                            and comprehensive application performance monitoring.</p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-orange-50 p-4 rounded-lg">
                        <h5 className="font-medium mb-2">Infrastructure SLA</h5>
                        <div className="grid grid-cols-2 gap-2 text-xs">
                          <div className="text-center bg-white p-2 rounded">
                            <div className="font-bold text-orange-600">99.9%</div>
                            <div>Uptime Guarantee</div>
                          </div>
                          <div className="text-center bg-white p-2 rounded">
                            <div className="font-bold text-green-600">{"<30s"}</div>
                            <div>Auto-Recovery</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-gradient-to-r from-slate-50 to-indigo-50 p-12 rounded-2xl shadow-xl">
                <h3 className="text-3xl font-semibold mb-8 text-center">Development Methodology & Best Practices</h3>
                <div className="grid lg:grid-cols-4 gap-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white text-2xl font-bold">1</span>
                    </div>
                    <h4 className="font-semibold mb-3">Agile Development</h4>
                    <div className="text-sm text-gray-700 space-y-2">
                      <div>Sprint planning & retrospectives</div>
                      <div>Continuous integration & delivery</div>
                      <div>Test-driven development (TDD)</div>
                      <div>Code reviews & pair programming</div>
                    </div>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white text-2xl font-bold">2</span>
                    </div>
                    <h4 className="font-semibold mb-3">Quality Assurance</h4>
                    <div className="text-sm text-gray-700 space-y-2">
                      <div>Comprehensive testing strategy</div>
                      <div>Performance optimization</div>
                      <div>Security vulnerability assessment</div>
                      <div>Accessibility compliance (WCAG)</div>
                    </div>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white text-2xl font-bold">3</span>
                    </div>
                    <h4 className="font-semibold mb-3">Scalability Design</h4>
                    <div className="text-sm text-gray-700 space-y-2">
                      <div>Microservices architecture</div>
                      <div>Database optimization & caching</div>
                      <div>Load balancing & auto-scaling</div>
                      <div>CDN & edge computing</div>
                    </div>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white text-2xl font-bold">4</span>
                    </div>
                    <h4 className="font-semibold mb-3">Maintenance & Support</h4>
                    <div className="text-sm text-gray-700 space-y-2">
                      <div>24/7 monitoring & alerting</div>
                      <div>Regular security updates</div>
                      <div>Performance optimization</div>
                      <div>Feature enhancement & evolution</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Development Case Studies & Success Stories */}
        <section className="py-24 bg-gradient-to-br from-gray-50 to-slate-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-8xl mx-auto">
              <h2 className="text-4xl font-bold mb-16 text-center bg-gradient-to-r from-gray-600 to-slate-700 bg-clip-text text-transparent">
                Development Success Stories & Case Studies
              </h2>
              
              <div className="grid lg:grid-cols-2 gap-12 mb-16">
                <Card className="shadow-2xl border-0 overflow-hidden">
                  <div className="bg-gradient-to-r from-blue-600 to-cyan-700 p-8 text-white">
                    <h3 className="text-2xl font-bold mb-4">E-commerce Platform: React + Node.js</h3>
                    <div className="grid grid-cols-2 gap-4 text-blue-100">
                      <div>Industry: Retail E-commerce</div>
                      <div>Timeline: 6 months</div>
                      <div>Users: 100K+ monthly</div>
                      <div>Performance: 98% uptime</div>
                    </div>
                  </div>
                  <CardContent className="p-8">
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold mb-3 text-blue-700">Project Challenge & Solution</h4>
                        <div className="bg-blue-50 p-4 rounded-lg text-sm">
                          <p className="text-gray-700 mb-3">
                            <strong>Challenge:</strong> Mid-size retailer needed to modernize their legacy e-commerce platform 
                            to handle growing traffic, improve conversion rates, and provide better mobile experience.
                          </p>
                          <p className="text-gray-700 mb-3">
                            <strong>Solution:</strong> Built a high-performance React SPA with Next.js for SSR, Node.js backend 
                            with GraphQL, PostgreSQL database, and comprehensive microservices architecture.
                          </p>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3 text-green-700">Technical Implementation</h4>
                        <div className="space-y-3">
                          <div className="bg-green-50 p-3 rounded-lg text-sm">
                            <div className="font-medium mb-1">Frontend Architecture</div>
                            <p className="text-gray-700">React 18 with TypeScript, Next.js App Router, Tailwind CSS, 
                            Framer Motion animations, and optimized image loading with 90+ Lighthouse scores.</p>
                          </div>
                          <div className="bg-purple-50 p-3 rounded-lg text-sm">
                            <div className="font-medium mb-1">Backend Services</div>
                            <p className="text-gray-700">Node.js microservices with GraphQL Federation, Redis caching, 
                            Stripe payment integration, and real-time inventory management.</p>
                          </div>
                          <div className="bg-orange-50 p-3 rounded-lg text-sm">
                            <div className="font-medium mb-1">DevOps & Deployment</div>
                            <p className="text-gray-700">Docker containers on AWS ECS, CI/CD with GitHub Actions, 
                            CloudFront CDN, and comprehensive monitoring with Datadog.</p>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3 text-orange-700">Business Impact</h4>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="bg-orange-50 p-3 rounded text-center">
                            <div className="font-bold text-2xl text-orange-600 mb-1">45%</div>
                            <div className="text-xs text-gray-700">Conversion Rate Increase</div>
                          </div>
                          <div className="bg-green-50 p-3 rounded text-center">
                            <div className="font-bold text-2xl text-green-600 mb-1">65%</div>
                            <div className="text-xs text-gray-700">Page Speed Improvement</div>
                          </div>
                          <div className="bg-blue-50 p-3 rounded text-center">
                            <div className="font-bold text-2xl text-blue-600 mb-1">300%</div>
                            <div className="text-xs text-gray-700">Mobile Traffic Growth</div>
                          </div>
                          <div className="bg-purple-50 p-3 rounded text-center">
                            <div className="font-bold text-2xl text-purple-600 mb-1">99.8%</div>
                            <div className="text-xs text-gray-700">Uptime Achievement</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-2xl border-0 overflow-hidden">
                  <div className="bg-gradient-to-r from-green-600 to-emerald-700 p-8 text-white">
                    <h3 className="text-2xl font-bold mb-4">FinTech Mobile App: React Native + Python</h3>
                    <div className="grid grid-cols-2 gap-4 text-green-100">
                      <div>Industry: Financial Services</div>
                      <div>Timeline: 8 months</div>
                      <div>Downloads: 500K+</div>
                      <div>Rating: 4.8/5.0</div>
                    </div>
                  </div>
                  <CardContent className="p-8">
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold mb-3 text-green-700">Project Scope & Requirements</h4>
                        <div className="bg-green-50 p-4 rounded-lg text-sm">
                          <p className="text-gray-700 mb-3">
                            <strong>Challenge:</strong> Startup needed to build a secure, scalable mobile banking application 
                            with real-time transactions, biometric authentication, and compliance with financial regulations.
                          </p>
                          <p className="text-gray-700 mb-3">
                            <strong>Solution:</strong> Developed cross-platform React Native app with Python FastAPI backend, 
                            PostgreSQL database, Redis caching, and comprehensive security implementation.
                          </p>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3 text-blue-700">Security & Compliance</h4>
                        <div className="space-y-3">
                          <div className="bg-blue-50 p-3 rounded-lg text-sm">
                            <div className="font-medium mb-1">Authentication & Authorization</div>
                            <p className="text-gray-700">Multi-factor authentication, biometric login, OAuth 2.0, 
                            JWT tokens with rotation, and role-based access control.</p>
                          </div>
                          <div className="bg-purple-50 p-3 rounded-lg text-sm">
                            <div className="font-medium mb-1">Data Protection</div>
                            <p className="text-gray-700">End-to-end encryption, AES-256 data encryption, 
                            secure key management, and PCI DSS compliance implementation.</p>
                          </div>
                          <div className="bg-orange-50 p-3 rounded-lg text-sm">
                            <div className="font-medium mb-1">Regulatory Compliance</div>
                            <p className="text-gray-700">KYC/AML integration, fraud detection, audit trails, 
                            and comprehensive regulatory reporting capabilities.</p>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3 text-purple-700">Performance Metrics</h4>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="bg-purple-50 p-3 rounded text-center">
                            <div className="font-bold text-2xl text-purple-600 mb-1">{"<2s"}</div>
                            <div className="text-xs text-gray-700">Transaction Processing</div>
                          </div>
                          <div className="bg-green-50 p-3 rounded text-center">
                            <div className="font-bold text-2xl text-green-600 mb-1">99.99%</div>
                            <div className="text-xs text-gray-700">Security Score</div>
                          </div>
                          <div className="bg-blue-50 p-3 rounded text-center">
                            <div className="font-bold text-2xl text-blue-600 mb-1">95%</div>
                            <div className="text-xs text-gray-700">User Retention (30d)</div>
                          </div>
                          <div className="bg-orange-50 p-3 rounded text-center">
                            <div className="font-bold text-2xl text-orange-600 mb-1">{"<1s"}</div>
                            <div className="text-xs text-gray-700">App Launch Time</div>
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
                    <h3 className="text-2xl font-bold mb-4">Healthcare Platform: Vue.js + Go</h3>
                    <div className="grid grid-cols-2 gap-4 text-purple-100">
                      <div>Industry: Healthcare Technology</div>
                      <div>Timeline: 10 months</div>
                      <div>Patients: 50K+ registered</div>
                      <div>Compliance: HIPAA Certified</div>
                    </div>
                  </div>
                  <CardContent className="p-8">
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold mb-3 text-purple-700">Healthcare Solution Architecture</h4>
                        <div className="bg-purple-50 p-4 rounded-lg text-sm">
                          <p className="text-gray-700 mb-3">
                            <strong>Challenge:</strong> Healthcare provider needed HIPAA-compliant patient management system 
                            with telemedicine capabilities, appointment scheduling, and integrated billing.
                          </p>
                          <p className="text-gray-700 mb-3">
                            <strong>Solution:</strong> Built Vue.js 3 frontend with Go backend, PostgreSQL with encryption, 
                            WebRTC for video calls, and comprehensive audit logging system.
                          </p>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3 text-blue-700">HIPAA Compliance Features</h4>
                        <div className="space-y-2 text-sm">
                          <div className="bg-blue-50 p-3 rounded-lg">
                            <div className="font-medium mb-1">Data Security & Privacy</div>
                            <p className="text-gray-700">End-to-end encryption, access controls, audit trails, 
                            data anonymization, and secure communication channels.</p>
                          </div>
                          <div className="bg-green-50 p-3 rounded-lg">
                            <div className="font-medium mb-1">Telemedicine Integration</div>
                            <p className="text-gray-700">WebRTC video consultations, screen sharing, document sharing, 
                            appointment scheduling, and prescription management.</p>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3 text-green-700">Clinical Outcomes</h4>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="bg-green-50 p-3 rounded text-center">
                            <div className="font-bold text-2xl text-green-600 mb-1">60%</div>
                            <div className="text-xs text-gray-700">Admin Time Reduction</div>
                          </div>
                          <div className="bg-blue-50 p-3 rounded text-center">
                            <div className="font-bold text-2xl text-blue-600 mb-1">85%</div>
                            <div className="text-xs text-gray-700">Patient Satisfaction</div>
                          </div>
                          <div className="bg-purple-50 p-3 rounded text-center">
                            <div className="font-bold text-2xl text-purple-600 mb-1">40%</div>
                            <div className="text-xs text-gray-700">No-Show Reduction</div>
                          </div>
                          <div className="bg-orange-50 p-3 rounded text-center">
                            <div className="font-bold text-2xl text-orange-600 mb-1">100%</div>
                            <div className="text-xs text-gray-700">HIPAA Compliance</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-2xl border-0 overflow-hidden">
                  <div className="bg-gradient-to-r from-orange-600 to-red-700 p-8 text-white">
                    <h3 className="text-2xl font-bold mb-4">Enterprise SaaS: Angular + .NET Core</h3>
                    <div className="grid grid-cols-2 gap-4 text-orange-100">
                      <div>Industry: Enterprise Software</div>
                      <div>Timeline: 12 months</div>
                      <div>Companies: 1K+ clients</div>
                      <div>Scale: Multi-tenant</div>
                    </div>
                  </div>
                  <CardContent className="p-8">
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold mb-3 text-orange-700">Enterprise Architecture</h4>
                        <div className="bg-orange-50 p-4 rounded-lg text-sm">
                          <p className="text-gray-700 mb-3">
                            <strong>Challenge:</strong> Software company needed to modernize legacy desktop application 
                            into cloud-native SaaS platform with multi-tenancy, advanced analytics, and enterprise security.
                          </p>
                          <p className="text-gray-700 mb-3">
                            <strong>Solution:</strong> Developed Angular 17 frontend with .NET Core microservices, 
                            SQL Server with multi-tenant architecture, Azure cloud deployment, and comprehensive DevOps pipeline.
                          </p>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3 text-blue-700">Multi-Tenant Architecture</h4>
                        <div className="space-y-2 text-sm">
                          <div className="bg-blue-50 p-3 rounded-lg">
                            <div className="font-medium mb-1">Tenant Isolation & Security</div>
                            <p className="text-gray-700">Row-level security, tenant-specific databases, isolated processing, 
                            and comprehensive data segregation with audit trails.</p>
                          </div>
                          <div className="bg-green-50 p-3 rounded-lg">
                            <div className="font-medium mb-1">Scalability & Performance</div>
                            <p className="text-gray-700">Auto-scaling infrastructure, load balancing, caching strategies, 
                            and performance monitoring with SLA guarantees.</p>
                          </div>
                          <div className="bg-purple-50 p-3 rounded-lg">
                            <div className="font-medium mb-1">Enterprise Integration</div>
                            <p className="text-gray-700">SSO integration, API management, webhook notifications, 
                            and comprehensive third-party system connectivity.</p>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3 text-green-700">Business Growth Impact</h4>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="bg-green-50 p-3 rounded text-center">
                            <div className="font-bold text-2xl text-green-600 mb-1">400%</div>
                            <div className="text-xs text-gray-700">Customer Growth</div>
                          </div>
                          <div className="bg-blue-50 p-3 rounded text-center">
                            <div className="font-bold text-2xl text-blue-600 mb-1">75%</div>
                            <div className="text-xs text-gray-700">Development Speed</div>
                          </div>
                          <div className="bg-purple-50 p-3 rounded text-center">
                            <div className="font-bold text-2xl text-purple-600 mb-1">50%</div>
                            <div className="text-xs text-gray-700">Infrastructure Cost Reduction</div>
                          </div>
                          <div className="bg-orange-50 p-3 rounded text-center">
                            <div className="font-bold text-2xl text-orange-600 mb-1">99.95%</div>
                            <div className="text-xs text-gray-700">Service Availability</div>
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

        {/* Development Partnership & Support */}
        <section className="py-16 bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">
                Development Partnership & Long-term Success
              </h2>
              
              <div className="grid lg:grid-cols-3 gap-8 mb-12">
                <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                  <CardHeader>
                    <CardTitle className="text-xl flex items-center">
                      🚀 Full-Stack Development
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-blue-100 mb-4">
                      End-to-end development services from concept to deployment 
                      with modern frameworks and best practices.
                    </p>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center">
                        <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                        Modern frontend frameworks
                      </div>
                      <div className="flex items-center">
                        <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                        Scalable backend architecture
                      </div>
                      <div className="flex items-center">
                        <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                        Database design & optimization
                      </div>
                      <div className="flex items-center">
                        <span className="w-2 h-2 bg-orange-400 rounded-full mr-2"></span>
                        DevOps & cloud deployment
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                  <CardHeader>
                    <CardTitle className="text-xl flex items-center">
                      📱 Mobile App Development
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-blue-100 mb-4">
                      Native and cross-platform mobile applications with 
                      exceptional user experience and performance.
                    </p>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center">
                        <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></span>
                        iOS & Android native development
                      </div>
                      <div className="flex items-center">
                        <span className="w-2 h-2 bg-pink-400 rounded-full mr-2"></span>
                        React Native & Flutter
                      </div>
                      <div className="flex items-center">
                        <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></span>
                        Progressive Web Apps (PWA)
                      </div>
                      <div className="flex items-center">
                        <span className="w-2 h-2 bg-red-400 rounded-full mr-2"></span>
                        App Store optimization
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                  <CardHeader>
                    <CardTitle className="text-xl flex items-center">
                      🔧 Maintenance & Support
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-blue-100 mb-4">
                      Ongoing maintenance, monitoring, and support services 
                      to ensure optimal performance and security.
                    </p>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center">
                        <span className="w-2 h-2 bg-indigo-400 rounded-full mr-2"></span>
                        24/7 monitoring & alerting
                      </div>
                      <div className="flex items-center">
                        <span className="w-2 h-2 bg-emerald-400 rounded-full mr-2"></span>
                        Performance optimization
                      </div>
                      <div className="flex items-center">
                        <span className="w-2 h-2 bg-amber-400 rounded-full mr-2"></span>
                        Security updates & patches
                      </div>
                      <div className="flex items-center">
                        <span className="w-2 h-2 bg-rose-400 rounded-full mr-2"></span>
                        Feature enhancements
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="text-center">
                <Button size="lg" className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-300">
                  Start Your Development Project
                </Button>
                <p className="mt-4 text-purple-200">
                  Ready to build something amazing? Let's discuss your development needs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Advanced Development Capabilities */}
        <section className="py-12 bg-gradient-to-r from-slate-50 to-blue-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h3 className="text-3xl font-bold mb-12 text-center text-slate-700">
                Advanced Development Capabilities & Expertise
              </h3>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                <Card className="shadow-lg border-0 bg-white">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-lg flex items-center text-blue-700">
                      <Code2 className="w-5 h-5 mr-2" />
                      API Development
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="space-y-3 text-sm text-gray-700">
                      <div>• RESTful API design & implementation</div>
                      <div>• GraphQL schema design & optimization</div>
                      <div>• WebSocket real-time communication</div>
                      <div>• API documentation & testing</div>
                      <div>• Rate limiting & security</div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-lg border-0 bg-white">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-lg flex items-center text-green-700">
                      <Server className="w-5 h-5 mr-2" />
                      Microservices
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="space-y-3 text-sm text-gray-700">
                      <div>• Service decomposition strategies</div>
                      <div>• Inter-service communication</div>
                      <div>• Event-driven architecture</div>
                      <div>• Service mesh implementation</div>
                      <div>• Distributed system patterns</div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-lg border-0 bg-white">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-lg flex items-center text-purple-700">
                      <Shield className="w-5 h-5 mr-2" />
                      Security & Compliance
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="space-y-3 text-sm text-gray-700">
                      <div>• OAuth 2.0 & JWT implementation</div>
                      <div>• OWASP security guidelines</div>
                      <div>• Data encryption & protection</div>
                      <div>• Vulnerability assessments</div>
                      <div>• Compliance frameworks (HIPAA, PCI)</div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-lg border-0 bg-white">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-lg flex items-center text-orange-700">
                      <Workflow className="w-5 h-5 mr-2" />
                      Testing & QA
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="space-y-3 text-sm text-gray-700">
                      <div>• Unit & integration testing</div>
                      <div>• End-to-end automated testing</div>
                      <div>• Performance & load testing</div>
                      <div>• Security penetration testing</div>
                      <div>• Continuous testing in CI/CD</div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-lg border-0 bg-white">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-lg flex items-center text-indigo-700">
                      <Globe className="w-5 h-5 mr-2" />
                      Performance Optimization
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="space-y-3 text-sm text-gray-700">
                      <div>• Core Web Vitals optimization</div>
                      <div>• Database query optimization</div>
                      <div>• Caching strategies & CDN</div>
                      <div>• Bundle size optimization</div>
                      <div>• Memory & CPU profiling</div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-lg border-0 bg-white">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-lg flex items-center text-red-700">
                      <Rocket className="w-5 h-5 mr-2" />
                      Scalability & Reliability
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="space-y-3 text-sm text-gray-700">
                      <div>• Horizontal & vertical scaling</div>
                      <div>• Load balancing strategies</div>
                      <div>• Fault tolerance & resilience</div>
                      <div>• Circuit breaker patterns</div>
                      <div>• Disaster recovery planning</div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-xl">
                <h4 className="text-2xl font-bold mb-6 text-center text-slate-700">
                  Development Success Metrics & KPIs
                </h4>
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="bg-gradient-to-r from-blue-500 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-white font-bold text-xl">98%</span>
                    </div>
                    <div className="font-semibold text-gray-800 mb-1">Code Coverage</div>
                    <div className="text-sm text-gray-600">Comprehensive testing</div>
                  </div>

                  <div className="text-center">
                    <div className="bg-gradient-to-r from-green-500 to-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-white font-bold text-xl">95+</span>
                    </div>
                    <div className="font-semibold text-gray-800 mb-1">Lighthouse Score</div>
                    <div className="text-sm text-gray-600">Performance optimization</div>
                  </div>

                  <div className="text-center">
                    <div className="bg-gradient-to-r from-purple-500 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-white font-bold text-xl">99.9%</span>
                    </div>
                    <div className="font-semibold text-gray-800 mb-1">Uptime SLA</div>
                    <div className="text-sm text-gray-600">Reliability guarantee</div>
                  </div>

                  <div className="text-center">
                    <div className="bg-gradient-to-r from-orange-500 to-orange-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-white font-bold text-xl">A+</span>
                    </div>
                    <div className="font-semibold text-gray-800 mb-1">Security Grade</div>
                    <div className="text-sm text-gray-600">OWASP compliance</div>
                  </div>
                </div>
              </div>
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
