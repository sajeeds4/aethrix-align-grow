import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { GitBranch, ArrowRight, CheckCircle2, Rocket, RefreshCw, Shield } from "lucide-react";

const DevOpsPage = () => {
  const services = [
    { icon: GitBranch, title: "CI/CD Pipelines", description: "Automated build, test, and deployment pipelines with GitHub Actions, Jenkins, GitLab CI", features: ["Automated testing", "Blue-green deployments", "Rollback capabilities", "Multi-environment support"] },
    { icon: Rocket, title: "Container Orchestration", description: "Kubernetes cluster management, Helm charts, and service mesh implementation", features: ["Auto-scaling", "Load balancing", "Health checks", "Rolling updates"] },
    { icon: RefreshCw, title: "Infrastructure as Code", description: "Terraform, Pulumi, and CloudFormation for repeatable infrastructure", features: ["Version control", "Automated provisioning", "Drift detection", "Multi-cloud support"] },
    { icon: Shield, title: "Monitoring & Observability", description: "Prometheus, Grafana, ELK stack, and Datadog for full-stack visibility", features: ["Real-time monitoring", "Custom dashboards", "Alerting rules", "Log aggregation"] },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <section className="relative overflow-hidden bg-gradient-to-br from-orange-600 via-red-600 to-pink-700 text-white py-20 md:py-32">
        <div className="absolute inset-0 bg-grid-white/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <GitBranch className="w-4 h-4" />
              <span className="text-sm font-medium">DevOps & CI/CD Services</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Ship Faster with <span className="bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">Modern DevOps</span>
            </h1>
            <p className="text-xl md:text-2xl text-orange-100 mb-8">
              Automate deployments, improve reliability, and accelerate your software delivery pipeline
            </p>
            <Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50" asChild>
              <Link to="/consultation">Get DevOps Assessment <ArrowRight className="ml-2 w-4 h-4" /></Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">DevOps Services</h2>
            <p className="text-xl text-gray-600">End-to-end DevOps implementation and automation</p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.1 }} viewport={{ once: true }}>
                <Card className="p-8 h-full hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                    <service.icon className="w-6 h-6 text-orange-600" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-orange-600 to-red-700 text-white">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center max-w-3xl mx-auto">
            <Rocket className="w-16 h-16 mx-auto mb-6 opacity-80" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Accelerate Deployments?</h2>
            <p className="text-xl text-orange-100 mb-8">Let's build a DevOps culture that ships features faster and more reliably</p>
            <Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50" asChild>
              <Link to="/consultation">Start DevOps Transformation <ArrowRight className="ml-2 w-4 h-4" /></Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default DevOpsPage;
