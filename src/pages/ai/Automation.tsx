import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Workflow, ArrowRight, CheckCircle2, Zap, FileText, Mail } from "lucide-react";

const AutomationPage = () => {
  const services = [
    { icon: FileText, title: "Document Processing", description: "Automate invoice processing, contract analysis, and data extraction", benefits: ["95% faster processing", "99% accuracy", "Cost savings", "No manual data entry"] },
    { icon: Mail, title: "Email Automation", description: "Intelligent email routing, response generation, and follow-up automation", benefits: ["24/7 response time", "Smart categorization", "Auto-prioritization", "Custom workflows"] },
    { icon: Workflow, title: "Workflow Automation", description: "Streamline approvals, notifications, and multi-step business processes", benefits: ["Reduce approval time by 80%", "Eliminate bottlenecks", "Audit trail", "Error reduction"] },
    { icon: Zap, title: "RPA Integration", description: "Robotic process automation for repetitive tasks and system integration", benefits: ["Legacy system integration", "No code changes", "Quick deployment", "ROI in 3-6 months"] },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <section className="relative overflow-hidden bg-gradient-to-br from-green-600 via-teal-600 to-cyan-700 text-white py-20 md:py-32">
        <div className="absolute inset-0 bg-grid-white/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Workflow className="w-4 h-4" />
              <span className="text-sm font-medium">AI Automation Services</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Automate Everything with <span className="bg-gradient-to-r from-yellow-300 to-green-400 bg-clip-text text-transparent">AI-Powered Workflows</span>
            </h1>
            <p className="text-xl md:text-2xl text-green-100 mb-8">
              Eliminate manual tasks, reduce errors, and accelerate business processes with intelligent automation
            </p>
            <Button size="lg" className="bg-white text-green-600 hover:bg-green-50" asChild>
              <Link to="/consultation">Discover Automation Opportunities <ArrowRight className="ml-2 w-4 h-4" /></Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Automation Services</h2>
            <p className="text-xl text-gray-600">From document processing to workflow automation</p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.1 }} viewport={{ once: true }}>
                <Card className="p-8 h-full hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                    <service.icon className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-3">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-green-600 to-teal-700 text-white">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center max-w-3xl mx-auto">
            <Zap className="w-16 h-16 mx-auto mb-6 opacity-80" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Automate Your Workflows?</h2>
            <p className="text-xl text-green-100 mb-8">Get a free automation assessment and ROI projection</p>
            <Button size="lg" className="bg-white text-green-600 hover:bg-green-50" asChild>
              <Link to="/consultation">Start Automation Project <ArrowRight className="ml-2 w-4 h-4" /></Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AutomationPage;
