import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Cloud, ArrowRight, CheckCircle2, RefreshCw, Database, Server, Shield, Zap } from "lucide-react";

const MigrationPage = () => {
  const phases = [
    { step: "01", title: "Assessment & Planning", description: "Inventory applications, dependencies, and define migration strategy", duration: "2-4 weeks" },
    { step: "02", title: "Architecture Design", description: "Design target cloud architecture with security and compliance", duration: "2-3 weeks" },
    { step: "03", title: "Pilot Migration", description: "Migrate non-critical workload to validate approach", duration: "2-4 weeks" },
    { step: "04", title: "Bulk Migration", description: "Migrate remaining workloads with automated tools", duration: "4-12 weeks" },
    { step: "05", title: "Optimization", description: "Rightsizing, cost optimization, and performance tuning", duration: "Ongoing" },
  ];

  const strategies = [
    { icon: Server, title: "Rehost (Lift & Shift)", description: "Move applications as-is to cloud with minimal changes", use: "Legacy apps, quick migrations" },
    { icon: RefreshCw, title: "Replatform", description: "Minor cloud optimizations without changing core architecture", use: "Modernize while minimizing risk" },
    { icon: Database, title: "Refactor", description: "Rebuild applications as cloud-native microservices", use: "Maximum scalability and agility" },
    { icon: Shield, title: "Hybrid Cloud", description: "Keep sensitive data on-premise, move compute to cloud", use: "Compliance requirements" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <section className="relative overflow-hidden bg-gradient-to-br from-cyan-600 via-blue-700 to-indigo-800 text-white py-20 md:py-32">
        <div className="absolute inset-0 bg-grid-white/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Cloud className="w-4 h-4" />
              <span className="text-sm font-medium">Cloud Migration Services</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Migrate to Cloud with <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">Zero Downtime</span>
            </h1>
            <p className="text-xl md:text-2xl text-cyan-100 mb-8">
              Seamless cloud migration with automated tools, comprehensive testing, and minimal business disruption
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-cyan-600 hover:bg-cyan-50" asChild>
                <Link to="/consultation">Get Migration Assessment <ArrowRight className="ml-2 w-4 h-4" /></Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Migration Strategies</h2>
            <p className="text-xl text-gray-600">Choose the right approach for your business needs</p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8">
            {strategies.map((strategy, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.1 }} viewport={{ once: true }}>
                <Card className="p-8 h-full hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-6">
                    <strategy.icon className="w-6 h-6 text-cyan-600" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{strategy.title}</h3>
                  <p className="text-gray-600 mb-4">{strategy.description}</p>
                  <div className="inline-block bg-cyan-100 text-cyan-700 px-3 py-1 rounded-full text-sm">
                    {strategy.use}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Migration Process</h2>
            <p className="text-xl text-gray-600">Proven methodology for successful cloud migrations</p>
          </motion.div>
          <div className="max-w-5xl mx-auto">
            {phases.map((phase, index) => (
              <motion.div key={index} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: index * 0.1 }} viewport={{ once: true }} className="flex gap-6 mb-12 last:mb-0">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {phase.step}
                  </div>
                </div>
                <div className="flex-grow">
                  <div className="flex items-center gap-4 mb-2">
                    <h3 className="text-2xl font-bold">{phase.title}</h3>
                    <span className="bg-cyan-100 text-cyan-700 px-3 py-1 rounded-full text-sm font-medium">{phase.duration}</span>
                  </div>
                  <p className="text-gray-600">{phase.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-cyan-600 to-blue-700 text-white">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center max-w-3xl mx-auto">
            <RefreshCw className="w-16 h-16 mx-auto mb-6 opacity-80" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Migrate to Cloud?</h2>
            <p className="text-xl text-cyan-100 mb-8">Get a free migration assessment and detailed roadmap for your cloud journey</p>
            <Button size="lg" className="bg-white text-cyan-600 hover:bg-cyan-50" asChild>
              <Link to="/consultation">Start Migration Planning <ArrowRight className="ml-2 w-4 h-4" /></Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default MigrationPage;
