import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Brain, ArrowRight, CheckCircle2, TrendingUp, Target, Zap } from "lucide-react";

const MLPage = () => {
  const solutions = [
    { icon: TrendingUp, title: "Predictive Analytics", description: "Forecast demand, churn, revenue with machine learning models", use: ["Sales forecasting", "Customer churn prediction", "Inventory optimization", "Price optimization"] },
    { icon: Target, title: "Recommendation Systems", description: "Personalized product, content, and service recommendations", use: ["E-commerce recommendations", "Content personalization", "Next-best-action suggestions", "Cross-sell/upsell"] },
    { icon: Zap, title: "Computer Vision", description: "Image recognition, object detection, and visual quality inspection", use: ["Quality control automation", "Facial recognition", "OCR and document processing", "Visual search"] },
    { icon: Brain, title: "Natural Language Processing", description: "Text classification, sentiment analysis, and entity extraction", use: ["Sentiment analysis", "Document classification", "Named entity recognition", "Text summarization"] },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-600 via-indigo-700 to-blue-800 text-white py-20 md:py-32">
        <div className="absolute inset-0 bg-grid-white/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Brain className="w-4 h-4" />
              <span className="text-sm font-medium">Machine Learning Services</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Build Intelligent Systems with <span className="bg-gradient-to-r from-cyan-300 to-purple-400 bg-clip-text text-transparent">Machine Learning</span>
            </h1>
            <p className="text-xl md:text-2xl text-purple-100 mb-8">
              Custom ML models that predict, classify, and optimize your business processes
            </p>
            <Button size="lg" className="bg-white text-purple-600 hover:bg-purple-50" asChild>
              <Link to="/consultation">Explore ML Solutions <ArrowRight className="ml-2 w-4 h-4" /></Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Machine Learning Solutions</h2>
            <p className="text-xl text-gray-600">From predictive analytics to computer vision</p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.1 }} viewport={{ once: true }}>
                <Card className="p-8 h-full hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                    <solution.icon className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{solution.title}</h3>
                  <p className="text-gray-600 mb-6">{solution.description}</p>
                  <ul className="space-y-3">
                    {solution.use.map((useCase, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{useCase}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-purple-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center max-w-3xl mx-auto">
            <Brain className="w-16 h-16 mx-auto mb-6 opacity-80" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Build ML Models?</h2>
            <p className="text-xl text-purple-100 mb-8">Let's discuss your data and business goals to create custom ML solutions</p>
            <Button size="lg" className="bg-white text-purple-600 hover:bg-purple-50" asChild>
              <Link to="/consultation">Start ML Project <ArrowRight className="ml-2 w-4 h-4" /></Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default MLPage;
