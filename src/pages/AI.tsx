import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Bot, BarChart3, Workflow, Sparkles, ArrowRight, ChevronRight } from "lucide-react";
import { useEffect } from "react";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const PageHead = () => {
  useEffect(() => {
    document.title = "AI & Automation | Aethrix Systems";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Practical AI: chatbots, RAG search, analytics/forecasting, and workflow automation to reduce costs and improve speed.");
  }, []);
  return null;
};

const AI = () => {
  const solutions = [
    { icon: Bot, title: "Chatbots & Assistants", description: "Guided experiences for support and sales, integrated with your data." },
    { icon: Workflow, title: "Process Automation", description: "Automate repetitive tasks and approvals with AI-driven workflows." },
    { icon: BarChart3, title: "Analytics & Forecasting", description: "Predict demand, churn, and performance with ML models." },
    { icon: Sparkles, title: "Content & Search", description: "RAG-powered content creation and enterprise search." },
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
            <li className="text-foreground">AI & Automation</li>
          </ol>
        </nav>
        {/* Hero */}
        <section className="py-24 bg-gradient-hero text-primary-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-display mb-6">
                AI & Automation that <span className="text-accent">Delivers</span>
              </motion.h1>
              <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="text-subheadline mb-8">
                Practical AI solutions that reduce cost, improve speed, and elevate customer experiences.
              </motion.p>
              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}>
                <Button size="lg" variant="hero" asChild>
                  <Link to="/consultation" className="flex items-center gap-2">
                    Explore AI Use Cases
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Solutions */}
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {solutions.map((s, i) => {
                const Icon = s.icon
                return (
                  <motion.div key={s.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: i * 0.1 }} viewport={{ once: true }}>
                    <Card className="h-full bg-card border-border">
                      <CardHeader>
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <CardTitle>{s.title}</CardTitle>
                        <CardDescription>{s.description}</CardDescription>
                      </CardHeader>
                    </Card>
                  </motion.div>
                )
              })}
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
              {[
                { q: "How do you identify AI opportunities?", a: "We run a short discovery to map high-ROI use cases aligned to your KPIs." },
                { q: "What about data privacy?", a: "We design solutions that respect privacy, with data controls and auditability." },
                { q: "How fast can we see value?", a: "Pilot sprints typically deliver measurable outcomes in 2–4 weeks." },
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

        {/* CTA */}
        <section className="py-24 bg-gradient-secondary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to automate real work?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">We’ll prioritize high-ROI AI projects and ship value fast.</p>
            <Button size="lg" variant="cta" asChild>
              <Link to="/consultation" className="flex items-center gap-2">
                Plan an AI Sprint
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </section>

        {/* Use-cases vs Model Types */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-2xl font-semibold mb-4">Use-cases and Model Types</h3>
            <Table>
              <TableCaption>Picking the right approach per problem and constraints.</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead>Use-case</TableHead>
                  <TableHead>Model Type</TableHead>
                  <TableHead>Data Needed</TableHead>
                  <TableHead>Notes</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Chat & Q/A</TableCell>
                  <TableCell>LLM + RAG</TableCell>
                  <TableCell>Docs, KBs, embeddings</TableCell>
                  <TableCell>Guardrails, citations</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Forecasting</TableCell>
                  <TableCell>Classical ML/Time-series</TableCell>
                  <TableCell>Historical metrics</TableCell>
                  <TableCell>Feature engineering</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Classification</TableCell>
                  <TableCell>Fine-tuned classifier</TableCell>
                  <TableCell>Labeled dataset</TableCell>
                  <TableCell>Quality labeling</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </section>

        {/* RAG Pipeline */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-2xl font-semibold mb-4">RAG Pipeline Stages</h3>
            <Table>
              <TableCaption>From ingestion to evaluation.</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead>Stage</TableHead>
                  <TableHead>Purpose</TableHead>
                  <TableHead>Tools</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Ingest</TableCell>
                  <TableCell>Pull and normalize content</TableCell>
                  <TableCell>Loaders, chunking, metadata</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Index</TableCell>
                  <TableCell>Embed and store</TableCell>
                  <TableCell>Vector DB (e.g., pgvector)</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Retrieve</TableCell>
                  <TableCell>Find relevant chunks</TableCell>
                  <TableCell>Hybrid search, filters</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Generate</TableCell>
                  <TableCell>Answer with context</TableCell>
                  <TableCell>LLM, prompt templates</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Evaluate</TableCell>
                  <TableCell>Measure and improve</TableCell>
                  <TableCell>Human evals, metrics</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </section>

        {/* Evaluation Metrics */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-2xl font-semibold mb-4">Evaluation Metrics</h3>
            <Table>
              <TableCaption>Tracking quality and safety of AI systems.</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead>Metric</TableHead>
                  <TableHead>Target</TableHead>
                  <TableHead>Notes</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Answer Relevance</TableCell>
                  <TableCell>{">= 0.8"}</TableCell>
                  <TableCell>Human-rated scale</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Groundedness</TableCell>
                  <TableCell>Source citations</TableCell>
                  <TableCell>Evidence linked</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Toxicity</TableCell>
                  <TableCell>0 incidents</TableCell>
                  <TableCell>Filters and policies</TableCell>
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

export default AI;
