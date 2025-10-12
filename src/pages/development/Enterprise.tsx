import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import {
  Building2,
  Globe2,
  Shield,
  Users,
  CheckCircle2,
  ArrowRight,
  Layers,
  Lock,
  Zap,
  Database,
  Cloud,
  BarChart3,
} from "lucide-react";

const EnterprisePage = () => {
  const solutions = [
    {
      icon: Database,
      title: "Enterprise Resource Planning (ERP)",
      description:
        "Integrated business management solutions that unify finance, HR, supply chain, and operations.",
      features: [
        "Real-time business intelligence",
        "Multi-company consolidation",
        "Advanced financial reporting",
        "Supply chain optimization",
      ],
    },
    {
      icon: Users,
      title: "Customer Relationship Management (CRM)",
      description:
        "360-degree customer view with sales automation, marketing, and service management capabilities.",
      features: [
        "Sales pipeline automation",
        "Marketing campaign management",
        "Customer service ticketing",
        "Analytics and forecasting",
      ],
    },
    {
      icon: BarChart3,
      title: "Business Intelligence & Analytics",
      description:
        "Data warehousing, ETL pipelines, and visualization dashboards for data-driven decision-making.",
      features: [
        "Real-time data processing",
        "Custom KPI dashboards",
        "Predictive analytics",
        "Automated reporting",
      ],
    },
    {
      icon: Globe2,
      title: "Enterprise Portals",
      description:
        "Unified digital workplaces connecting employees, partners, and customers with personalized experiences.",
      features: [
        "Single sign-on (SSO)",
        "Role-based access control",
        "Document management",
        "Collaboration tools",
      ],
    },
  ];

  const features = [
    {
      icon: Shield,
      title: "Enterprise-Grade Security",
      description:
        "SOC 2, ISO 27001 compliant architecture with encryption, audit trails, and DDoS protection.",
    },
    {
      icon: Layers,
      title: "Scalable Architecture",
      description:
        "Microservices, containerization, and cloud-native design that scales to millions of users.",
    },
    {
      icon: Zap,
      title: "High Performance",
      description:
        "Optimized databases, caching strategies, and CDN delivery for sub-second response times.",
    },
    {
      icon: Lock,
      title: "Compliance Ready",
      description:
        "Built-in compliance frameworks for GDPR, HIPAA, PCI-DSS, and industry-specific regulations.",
    },
    {
      icon: Cloud,
      title: "Cloud Agnostic",
      description:
        "Deploy on AWS, Azure, Google Cloud, or on-premise with flexible infrastructure options.",
    },
    {
      icon: Users,
      title: "Multi-Tenancy",
      description:
        "Efficient resource utilization with isolated data and customizable configurations per tenant.",
    },
  ];

  const process = [
    {
      step: "01",
      title: "Enterprise Assessment",
      description:
        "Comprehensive analysis of your business processes, technology landscape, and integration requirements.",
      duration: "2-4 weeks",
    },
    {
      step: "02",
      title: "Architecture Design",
      description:
        "Design scalable, secure, and maintainable architecture with detailed technical specifications.",
      duration: "3-5 weeks",
    },
    {
      step: "03",
      title: "Agile Development",
      description:
        "Iterative development with bi-weekly sprints, demos, and stakeholder feedback loops.",
      duration: "12-24 weeks",
    },
    {
      step: "04",
      title: "Testing & QA",
      description:
        "Rigorous testing including unit, integration, performance, security, and user acceptance testing.",
      duration: "4-6 weeks",
    },
    {
      step: "05",
      title: "Deployment & Training",
      description:
        "Phased rollout with comprehensive training, documentation, and change management support.",
      duration: "2-4 weeks",
    },
    {
      step: "06",
      title: "Support & Evolution",
      description:
        "24/7 monitoring, incident response, regular updates, and continuous improvement initiatives.",
      duration: "Ongoing",
    },
  ];

  const caseStudies = [
    {
      industry: "Financial Services",
      title: "Global Trading Platform",
      description:
        "Real-time trading platform processing 1M+ transactions daily with 99.99% uptime.",
      challenge:
        "Legacy monolithic system couldn't handle peak trading volumes and lacked real-time analytics.",
      solution:
        "Microservices architecture with event-driven processing and distributed caching.",
      results: [
        "10x performance improvement",
        "99.99% uptime achieved",
        "$5M annual cost savings",
        "Sub-50ms latency",
      ],
    },
    {
      industry: "Healthcare",
      title: "Hospital Management System",
      description:
        "HIPAA-compliant EHR system managing 2M+ patient records across 50 hospitals.",
      challenge:
        "Disparate systems, no data sharing, manual processes, and compliance concerns.",
      solution:
        "Unified cloud platform with HL7 FHIR integration and advanced security controls.",
      results: [
        "80% reduction in paperwork",
        "100% HIPAA compliance",
        "30% cost reduction",
        "95% user satisfaction",
      ],
    },
    {
      industry: "Manufacturing",
      title: "Supply Chain Optimization",
      description:
        "AI-powered supply chain platform optimizing $500M annual procurement.",
      challenge:
        "Poor visibility, manual forecasting, excess inventory, and supplier management issues.",
      solution:
        "ML-based demand forecasting with real-time supplier collaboration portal.",
      results: [
        "25% inventory reduction",
        "40% faster order fulfillment",
        "$20M savings annually",
        "98% forecast accuracy",
      ],
    },
  ];

  const technologies = [
    { name: "Java/Spring", category: "Backend" },
    { name: ".NET Core", category: "Backend" },
    { name: "Node.js", category: "Backend" },
    { name: "React/Angular", category: "Frontend" },
    { name: "PostgreSQL", category: "Database" },
    { name: "Redis", category: "Caching" },
    { name: "Kubernetes", category: "DevOps" },
    { name: "Kafka", category: "Messaging" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-800 via-slate-900 to-blue-900 text-white py-20 md:py-32">
        <div className="absolute inset-0 bg-grid-white/5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Building2 className="w-4 h-4" />
              <span className="text-sm font-medium">Enterprise Software Development</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Mission-Critical Software for
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                {" "}
                Global Enterprises
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8">
              Build scalable, secure, and compliant enterprise applications that power
              your business operations and drive digital transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-slate-900 hover:bg-slate-100"
                asChild
              >
                <Link to="/consultation">
                  Schedule Consultation <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
                asChild
              >
                <Link to="/case-studies">View Case Studies</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Enterprise Solutions We Build
            </h2>
            <p className="text-xl text-gray-600">
              From ERP to BI, we develop comprehensive software ecosystems
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-8 h-full hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                    <solution.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{solution.title}</h3>
                  <p className="text-gray-600 mb-6">{solution.description}</p>
                  <ul className="space-y-3">
                    {solution.features.map((feature, idx) => (
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

      {/* Features */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Enterprise-Grade Features
            </h2>
            <p className="text-xl text-gray-600">
              Built to meet the demanding requirements of large organizations
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 h-full hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Enterprise Development Process
            </h2>
            <p className="text-xl text-gray-600">
              A proven methodology for delivering complex enterprise systems
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex gap-6 mb-12 last:mb-0"
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {step.step}
                  </div>
                </div>
                <div className="flex-grow">
                  <div className="flex items-center gap-4 mb-2">
                    <h3 className="text-2xl font-bold">{step.title}</h3>
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                      {step.duration}
                    </span>
                  </div>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Enterprise Success Stories
            </h2>
            <p className="text-xl text-gray-600">
              Transforming businesses through innovative software solutions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 h-full">
                  <div className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
                    {study.industry}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{study.title}</h3>
                  <p className="text-gray-600 mb-4">{study.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-sm text-gray-500 mb-1">Challenge</h4>
                    <p className="text-sm text-gray-700">{study.challenge}</p>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-sm text-gray-500 mb-1">Solution</h4>
                    <p className="text-sm text-gray-700">{study.solution}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-sm text-gray-500 mb-2">Results</h4>
                    <ul className="space-y-2">
                      {study.results.map((result, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Enterprise Technology Stack
            </h2>
            <p className="text-xl text-gray-600">
              Battle-tested technologies trusted by Fortune 500 companies
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-blue-100 to-cyan-100 px-6 py-3 rounded-full"
              >
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-blue-900">{tech.name}</span>
                  <span className="text-xs text-blue-600 bg-white px-2 py-0.5 rounded-full">
                    {tech.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-800 to-blue-900 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <Building2 className="w-16 h-16 mx-auto mb-6 opacity-80" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Enterprise?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Let's discuss how we can build custom software solutions that drive
              your business forward and deliver measurable ROI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-slate-900 hover:bg-slate-100"
                asChild
              >
                <Link to="/consultation">
                  Get Started Today <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
                asChild
              >
                <Link to="/case-studies">Explore More Projects</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default EnterprisePage;
