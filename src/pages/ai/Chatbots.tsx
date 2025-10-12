import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { MessageSquare, ArrowRight, CheckCircle2, Bot, Users, Headphones } from "lucide-react";

const ChatbotsPage = () => {
  const solutions = [
    { icon: Headphones, title: "Customer Support Bots", description: "24/7 customer service automation with intelligent escalation", metrics: ["80% tickets automated", "24/7 availability", "Sub-2s response time", "Multilingual support"] },
    { icon: Users, title: "Sales Assistant Bots", description: "Lead qualification, product recommendations, and appointment scheduling", metrics: ["3x lead conversion", "Instant responses", "Qualification automation", "CRM integration"] },
    { icon: Bot, title: "Internal Knowledge Bots", description: "Employee self-service for HR, IT, and company knowledge", metrics: ["90% query resolution", "Reduce support tickets", "Instant policy answers", "Onboarding automation"] },
    { icon: MessageSquare, title: "Voice AI Assistants", description: "Voice-enabled assistants for phone support and IVR", metrics: ["Natural conversations", "Accent recognition", "Call routing", "Sentiment detection"] },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700 text-white py-20 md:py-32">
        <div className="absolute inset-0 bg-grid-white/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <MessageSquare className="w-4 h-4" />
              <span className="text-sm font-medium">AI Chatbot Development</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Build Intelligent Chatbots That <span className="bg-gradient-to-r from-cyan-300 to-pink-400 bg-clip-text text-transparent">Understand & Help</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              AI-powered chatbots that handle customer support, sales, and internal queries 24/7
            </p>
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50" asChild>
              <Link to="/consultation">Build Your Chatbot <ArrowRight className="ml-2 w-4 h-4" /></Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Chatbot Solutions</h2>
            <p className="text-xl text-gray-600">From customer support to sales automation</p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.1 }} viewport={{ once: true }}>
                <Card className="p-8 h-full hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                    <solution.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{solution.title}</h3>
                  <p className="text-gray-600 mb-6">{solution.description}</p>
                  <ul className="space-y-3">
                    {solution.metrics.map((metric, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{metric}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-700 text-white">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center max-w-3xl mx-auto">
            <Bot className="w-16 h-16 mx-auto mb-6 opacity-80" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Deploy Your Chatbot?</h2>
            <p className="text-xl text-blue-100 mb-8">Let's build an AI assistant that delights your customers and team</p>
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50" asChild>
              <Link to="/consultation">Get Chatbot Demo <ArrowRight className="ml-2 w-4 h-4" /></Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ChatbotsPage;
