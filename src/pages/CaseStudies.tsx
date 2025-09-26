import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const CaseStudies = () => {
  const caseStudies = [
    {
      title: "Odoo ERP for Dairy Operations",
      company: "Mid-size Dairy Producer (Anonymized)",
      industry: "Food & Beverage",
      challenge: "Disconnected procurement, production, and distribution data causing spoilage and stock-outs.",
      solution: "Implemented Odoo ERP with modules for inventory, production, quality, and logistics; added lot/expiry tracking and route optimization.",
      results: [
        "35% reduction in wastage via expiry/lot controls",
        "20% faster order fulfillment",
        "Improved production planning accuracy"
      ],
      image: "/placeholder.svg"
    },
    {
      title: "Local Business Web Apps (Admin & User Portals)",
      company: "Regional Service Business (Anonymized)",
      industry: "Services",
      challenge: "Manual bookings and paper-based approvals causing delays and errors.",
      solution: "Built responsive web apps with separate admin dashboard and customer portal, role-based access, and automated notifications.",
      results: [
        "60% reduction in admin overhead",
        "Online bookings increased within first month",
        "Real-time status tracking for customers"
      ],
      image: "/placeholder.svg"
    },
    {
      title: "Telecom Automation (Small Project)",
      company: "Independent Telecom Operator (Anonymized)",
      industry: "Telecommunications",
      challenge: "Repetitive provisioning and billing adjustments consuming support time.",
      solution: "Automated provisioning workflows and billing reconciliations with audit logs and alerts.",
      results: [
        "Tickets resolved 3x faster",
        "Reduction in billing disputes",
        "Better SLA adherence"
      ],
      image: "/placeholder.svg"
    },
    {
      title: "Money Exchange Web Application",
      company: "Local Exchange House (Anonymized)",
      industry: "Financial Services",
      challenge: "Manual rate updates and fragmented KYC/compliance checks.",
      solution: "Developed a secure web app with role-based access, live FX rates, KYC workflows, and receipt generation.",
      results: [
        "Operational errors reduced",
        "Faster counter service times",
        "Improved compliance readiness"
      ],
      image: "/placeholder.svg"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-4"
          >
            Success Stories
          </motion.h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover how we've helped businesses transform their operations and achieve remarkable results.
          </p>
        </div>

        {/* Summary Table */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">Project Summary</h2>
          <Table>
            <TableCaption>Snapshot of anonymized projects: scope, stack, and outcomes.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>Project</TableHead>
                <TableHead>Scope</TableHead>
                <TableHead>Tech Stack</TableHead>
                <TableHead>Outcomes</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Odoo ERP for Dairy</TableCell>
                <TableCell>Inventory, MRP, Logistics</TableCell>
                <TableCell>Odoo, Postgres, Python</TableCell>
                <TableCell>35% wastage reduction; faster fulfillment</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Admin & User Portals</TableCell>
                <TableCell>Bookings, approvals, notifications</TableCell>
                <TableCell>React, Node, Postgres</TableCell>
                <TableCell>60% admin time saved; online growth</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Telecom Automation</TableCell>
                <TableCell>Provisioning, billing reconciliation</TableCell>
                <TableCell>Python, Node, REST</TableCell>
                <TableCell>3x faster tickets; fewer disputes</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Money Exchange Webapp</TableCell>
                <TableCell>Rates, KYC, receipts</TableCell>
                <TableCell>React, Node, MongoDB</TableCell>
                <TableCell>Lower errors; faster service</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        {/* Case Studies Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="aspect-video rounded-lg overflow-hidden mb-4">
                    <img 
                      src={study.image} 
                      alt={study.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-xl">{study.title}</CardTitle>
                  <CardDescription>
                    {study.company} | {study.industry}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-2">Challenge</h4>
                      <p className="text-sm text-muted-foreground">{study.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Solution</h4>
                      <p className="text-sm text-muted-foreground">{study.solution}</p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Results</h4>
                      <ul className="space-y-2">
                        {study.results.map((result, index) => (
                          <li key={index} className="flex items-center text-sm text-muted-foreground">
                            <ArrowRight className="w-4 h-4 mr-2 text-primary" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Write Your Success Story?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help your business achieve similar results.
          </p>
          <Button size="lg" variant="default" asChild>
            <a href="/consultation">Schedule a Consultation</a>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CaseStudies;
