import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import {
  Settings,
  Code2,
  Workflow,
  Boxes,
  CheckCircle2,
  ArrowRight,
  Wrench,
  Layout,
  Database,
  Zap,
  Shield,
  TrendingUp,
} from "lucide-react";

const CustomizationPage = () => {
  const customizationTypes = [
    {
      icon: Layout,
      title: "UI/UX Customization",
      description:
        "Tailor the interface to match your brand identity and improve user adoption with intuitive, branded experiences.",
      features: [
        "Custom dashboards and reports",
        "Branded themes and layouts",
        "Role-based interface views",
        "Mobile-responsive designs",
      ],
    },
    {
      icon: Workflow,
      title: "Workflow Automation",
      description:
        "Streamline business processes with custom workflows that eliminate manual tasks and reduce errors.",
      features: [
        "Automated approval processes",
        "Custom notification triggers",
        "Integration with third-party tools",
        "Business rule automation",
      ],
    },
    {
      icon: Database,
      title: "Data Model Extension",
      description:
        "Extend your ERP data model with custom fields, tables, and relationships to capture industry-specific information.",
      features: [
        "Custom fields and modules",
        "Industry-specific data structures",
        "Advanced data validation",
        "Cross-module data linking",
      ],
    },
    {
      icon: Code2,
      title: "API & Integration",
      description:
        "Connect your ERP with existing systems through custom APIs and integrations for seamless data flow.",
      features: [
        "RESTful API development",
        "Third-party system integration",
        "Real-time data synchronization",
        "Legacy system connectivity",
      ],
    },
  ];

  const process = [
    {
      step: "01",
      title: "Requirements Analysis",
      description:
        "Deep dive into your business processes, pain points, and customization needs through workshops and interviews.",
    },
    {
      step: "02",
      title: "Solution Design",
      description:
        "Design custom modules, workflows, and integrations aligned with your business goals and technical architecture.",
    },
    {
      step: "03",
      title: "Development & Testing",
      description:
        "Build and rigorously test customizations in a sandbox environment before production deployment.",
    },
    {
      step: "04",
      title: "Deployment & Training",
      description:
        "Roll out customizations with minimal disruption and train your team on new features and workflows.",
    },
    {
      step: "05",
      title: "Support & Evolution",
      description:
        "Provide ongoing maintenance, updates, and iterative improvements as your business grows and changes.",
    },
  ];

  const useCases = [
    {
      industry: "Manufacturing",
      challenge: "Complex production scheduling with multiple shift patterns",
      solution:
        "Custom production planning module with real-time capacity planning and shift-aware scheduling",
      results: ["40% reduction in downtime", "30% increase in throughput"],
    },
    {
      industry: "Healthcare",
      challenge: "HIPAA compliance requirements not met by standard ERP",
      solution:
        "Custom security module with audit trails, encryption, and role-based access controls",
      results: ["100% HIPAA compliance", "Zero security incidents"],
    },
    {
      industry: "Retail",
      challenge: "Multi-channel inventory management across 50+ locations",
      solution:
        "Custom inventory module with real-time stock visibility and automated replenishment",
      results: ["50% reduction in stockouts", "$2M cost savings annually"],
    },
  ];

  const benefits = [
    {
      icon: Zap,
      title: "Faster Processes",
      description: "Automate repetitive tasks and streamline workflows for 3-5x faster operations",
    },
    {
      icon: TrendingUp,
      title: "Better Insights",
      description: "Custom reports and dashboards provide actionable intelligence for decision-making",
    },
    {
      icon: Shield,
      title: "Enhanced Security",
      description: "Industry-specific compliance and security controls built into your ERP system",
    },
    {
      icon: Boxes,
      title: "Scalable Solutions",
      description: "Customizations grow with your business, adapting to changing needs over time",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white py-20 md:py-32">
        <div className="absolute inset-0 bg-grid-white/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Settings className="w-4 h-4" />
              <span className="text-sm font-medium">ERP Customization Services</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Tailor Your ERP to
              <span className="bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">
                {" "}
                Fit Your Business
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              Transform standard ERP systems into powerful, industry-specific solutions
              that match your unique processes and workflows.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-blue-50"
                asChild
              >
                <Link to="/consultation">
                  Start Customization Project <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
                asChild
              >
                <Link to="/case-studies">View Use Cases</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Customization Types */}
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
              Customization Capabilities
            </h2>
            <p className="text-xl text-gray-600">
              From UI tweaks to complex integrations, we customize every aspect of your ERP
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {customizationTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-8 h-full hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                    <type.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{type.title}</h3>
                  <p className="text-gray-600 mb-6">{type.description}</p>
                  <ul className="space-y-3">
                    {type.features.map((feature, idx) => (
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

      {/* Process Section */}
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
              Our Customization Process
            </h2>
            <p className="text-xl text-gray-600">
              A proven methodology that delivers customizations on time and within budget
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex gap-6 mb-8 last:mb-0"
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {step.step}
                  </div>
                </div>
                <div className="flex-grow pb-8 border-l-2 border-gray-200 last:border-0 pl-6 -ml-px">
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
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
              Real-World Success Stories
            </h2>
            <p className="text-xl text-gray-600">
              See how our customizations solved complex business challenges
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 h-full">
                  <div className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
                    {useCase.industry}
                  </div>
                  <h3 className="font-bold text-lg mb-2">Challenge</h3>
                  <p className="text-gray-600 mb-4">{useCase.challenge}</p>
                  <h3 className="font-bold text-lg mb-2">Solution</h3>
                  <p className="text-gray-600 mb-4">{useCase.solution}</p>
                  <h3 className="font-bold text-lg mb-2">Results</h3>
                  <ul className="space-y-2">
                    {useCase.results.map((result, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-600" />
                        <span className="text-gray-700">{result}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Customize Your ERP?
            </h2>
            <p className="text-xl text-gray-600">
              Unlock the full potential of your ERP investment
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                  <benefit.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <Wrench className="w-16 h-16 mx-auto mb-6 opacity-80" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Customize Your ERP?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Let's discuss how we can tailor your ERP system to perfectly match your
              business processes and drive greater efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-blue-50"
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
                <Link to="/careers">View Open Positions</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CustomizationPage;
