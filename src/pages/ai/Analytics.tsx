import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { BarChart3, ArrowRight, CheckCircle2, TrendingUp, PieChart, LineChart } from "lucide-react";

const AnalyticsPage = () => {
  const solutions = [
    { icon: TrendingUp, title: "Predictive Analytics", description: "Forecast sales, demand, and business trends with ML models", use: ["Sales forecasting", "Demand planning", "Revenue prediction", "Market trend analysis"] },
    { icon: PieChart, title: "Customer Analytics", description: "Understand customer behavior, segmentation, and lifetime value", use: ["Churn prediction", "Customer segmentation", "LTV calculation", "Behavior analysis"] },
    { icon: LineChart, title: "Operational Analytics", description: "Optimize operations with real-time dashboards and KPI tracking", use: ["Real-time dashboards", "KPI monitoring", "Process optimization", "Resource planning"] },
    { icon: BarChart3, title: "Financial Analytics", description: "Financial forecasting, budget variance, and profitability analysis", use: ["Budget forecasting", "P&L analysis", "Cash flow prediction", "Cost optimization"] },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-purple-700 to-pink-700 text-white py-20 md:py-32">
        <div className="absolute inset-0 bg-grid-white/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <BarChart3 className="w-4 h-4" />
              <span className="text-sm font-medium">AI-Powered Analytics</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Turn Data Into <span className="bg-gradient-to-r from-yellow-300 to-pink-400 bg-clip-text text-transparent">Actionable Insights</span>
            </h1>
            <p className="text-xl md:text-2xl text-indigo-100 mb-8">
              Advanced analytics and ML-powered insights that drive data-informed decision-making
            </p>
            <Button size="lg" className="bg-white text-indigo-600 hover:bg-indigo-50" asChild>
              <Link to="/consultation">Explore Analytics Solutions <ArrowRight className="ml-2 w-4 h-4" /></Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Analytics Solutions</h2>
            <p className="text-xl text-gray-600">From predictive models to real-time dashboards</p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.1 }} viewport={{ once: true }}>
                <Card className="p-8 h-full hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                    <solution.icon className="w-6 h-6 text-indigo-600" />
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

      <section className="py-20 bg-gradient-to-br from-indigo-600 to-purple-700 text-white">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center max-w-3xl mx-auto">
            <BarChart3 className="w-16 h-16 mx-auto mb-6 opacity-80" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready for Smarter Analytics?</h2>
            <p className="text-xl text-indigo-100 mb-8">Let's build analytics dashboards that drive better business decisions</p>
            <Button size="lg" className="bg-white text-indigo-600 hover:bg-indigo-50" asChild>
              <Link to="/consultation">Start Analytics Project <ArrowRight className="ml-2 w-4 h-4" /></Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AnalyticsPage;
