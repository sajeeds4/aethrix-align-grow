import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const About = () => {
  const values = [
    { title: "Innovation", desc: "Solve real problems with practical, modern technology." },
    { title: "Security", desc: "Protect data and systems by design—no trade-offs." },
    { title: "Agility", desc: "Ship iteratively with feedback loops and measurable outcomes." },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="py-24 bg-gradient-hero text-primary-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-display mb-6">
              About Aethrix Systems
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="text-subheadline">
              We help businesses align technology to strategy—then grow through thoughtful delivery.
            </motion.p>
          </div>
        </section>

        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-6">
              {values.map((v) => (
                <Card key={v.title} className="bg-card border-border">
                  <CardHeader>
                    <CardTitle>{v.title}</CardTitle>
                    <CardDescription>{v.desc}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Let’s Build What’s Next</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">Talk to us about ERP, development, cloud, or AI initiatives.</p>
            <Button size="lg" variant="cta" asChild>
              <Link to="/consultation">Get in Touch</Link>
            </Button>
          </div>
        </section>

        {/* Tech Stack Table */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-2xl font-semibold mb-4">Our Technology Stack</h3>
            <Table>
              <TableCaption>We pick pragmatic tools that deliver reliable outcomes.</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead>Category</TableHead>
                  <TableHead>Primary Tools</TableHead>
                  <TableHead>Alternatives</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Frontend</TableCell>
                  <TableCell>React, TypeScript, Tailwind, Radix/Shadcn</TableCell>
                  <TableCell>Next.js, Vue</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Backend</TableCell>
                  <TableCell>Node (Express/Nest)</TableCell>
                  <TableCell>FastAPI, Django</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Databases</TableCell>
                  <TableCell>PostgreSQL, Redis</TableCell>
                  <TableCell>MySQL, MongoDB</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Cloud</TableCell>
                  <TableCell>AWS, GCP</TableCell>
                  <TableCell>Azure</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>DevOps</TableCell>
                  <TableCell>Docker, Kubernetes, Terraform</TableCell>
                  <TableCell>Pulumi, Helm</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>AI/ML</TableCell>
                  <TableCell>OpenAI APIs, LangChain</TableCell>
                  <TableCell>Local LLMs, RAG frameworks</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </section>

        {/* Delivery Model Table */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-2xl font-semibold mb-4">Delivery Model</h3>
            <Table>
              <TableCaption>How we engage and deliver value predictably.</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead>Engagement</TableHead>
                  <TableHead>When to Use</TableHead>
                  <TableHead>Billing</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Discovery Sprint</TableCell>
                  <TableCell>Ambiguous scope or new initiatives</TableCell>
                  <TableCell>Fixed fee</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Project Delivery</TableCell>
                  <TableCell>Clear scope and timeline</TableCell>
                  <TableCell>Milestone-based</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Retainer</TableCell>
                  <TableCell>Ongoing support and enhancements</TableCell>
                  <TableCell>Monthly</TableCell>
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

export default About;
