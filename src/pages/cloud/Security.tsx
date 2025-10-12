import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Shield, ArrowRight, CheckCircle2, Lock, FileCheck, AlertTriangle } from "lucide-react";

const SecurityPage = () => {
  const services = [
    { icon: Lock, title: "Identity & Access Management", description: "SSO, MFA, role-based access control, and zero-trust architecture", features: ["Single sign-on (SSO)", "Multi-factor authentication", "Privileged access management", "Identity federation"] },
    { icon: Shield, title: "Network Security", description: "Firewalls, DDoS protection, VPNs, and network segmentation", features: ["Web application firewall", "DDoS protection", "Virtual private cloud (VPC)", "Network access control"] },
    { icon: FileCheck, title: "Compliance & Auditing", description: "GDPR, HIPAA, SOC 2, PCI-DSS compliance frameworks", features: ["Compliance automation", "Audit trail logging", "Security assessments", "Penetration testing"] },
    { icon: AlertTriangle, title: "Threat Detection", description: "Real-time threat monitoring, intrusion detection, and incident response", features: ["Security information and event management (SIEM)", "Automated threat response", "Vulnerability scanning", "24/7 security monitoring"] },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <section className="relative overflow-hidden bg-gradient-to-br from-red-700 via-red-800 to-gray-900 text-white py-20 md:py-32">
        <div className="absolute inset-0 bg-grid-white/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Shield className="w-4 h-4" />
              <span className="text-sm font-medium">Cloud Security Services</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Protect Your Cloud with <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">Enterprise Security</span>
            </h1>
            <p className="text-xl md:text-2xl text-red-100 mb-8">
              Comprehensive security architecture, compliance frameworks, and 24/7 threat monitoring
            </p>
            <Button size="lg" className="bg-white text-red-700 hover:bg-red-50" asChild>
              <Link to="/consultation">Get Security Audit <ArrowRight className="ml-2 w-4 h-4" /></Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Security Services</h2>
            <p className="text-xl text-gray-600">Multi-layered security for cloud infrastructure</p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.1 }} viewport={{ once: true }}>
                <Card className="p-8 h-full hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                    <service.icon className="w-6 h-6 text-red-700" />
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

      <section className="py-20 bg-gradient-to-br from-red-700 to-gray-900 text-white">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center max-w-3xl mx-auto">
            <Shield className="w-16 h-16 mx-auto mb-6 opacity-80" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Secure Your Cloud Today</h2>
            <p className="text-xl text-red-100 mb-8">Get a comprehensive security assessment and actionable recommendations</p>
            <Button size="lg" className="bg-white text-red-700 hover:bg-red-50" asChild>
              <Link to="/consultation">Schedule Security Review <ArrowRight className="ml-2 w-4 h-4" /></Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SecurityPage;
