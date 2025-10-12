import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import {
  Cloud,
  Server,
  Database,
  Shield,
  CheckCircle2,
  ArrowRight,
  Zap,
  Globe2,
  Lock,
  TrendingUp,
  Gauge,
  HardDrive,
} from "lucide-react";

const InfrastructurePage = () => {
  const services = [
    {
      icon: Server,
      title: "Compute & Containers",
      description: "Scalable VM instances, Kubernetes clusters, and serverless functions",
      features: ["Auto-scaling", "Load balancing", "Container orchestration", "Serverless functions"],
    },
    {
      icon: Database,
      title: "Database Services",
      description: "Managed SQL, NoSQL, data warehouses, and caching solutions",
      features: ["Automated backups", "Read replicas", "Point-in-time recovery", "Multi-region replication"],
    },
    {
      icon: HardDrive,
      title: "Storage Solutions",
      description: "Object storage, block storage, file systems, and archival storage",
      features: ["99.999999999% durability", "Lifecycle policies", "Versioning", "CDN integration"],
    },
    {
      icon: Globe2,
      title: "Networking & CDN",
      description: "VPC, load balancers, DNS, VPN, and global content delivery",
      features: ["Private networks", "DDoS protection", "Edge locations", "Traffic management"],
    },
  ];

  const features = [
    {
      icon: Zap,
      title: "High Performance",
      description: "SSD storage, premium networking, and optimized compute instances for maximum performance",
    },
    {
      icon: Shield,
      title: "Built-In Security",
      description: "Encryption at rest and in transit, IAM policies, firewalls, and compliance certifications",
    },
    {
      icon: TrendingUp,
      title: "Auto-Scaling",
      description: "Automatically scale resources based on demand to maintain performance and optimize costs",
    },
    {
      icon: Gauge,
      title: "99.99% Uptime SLA",
      description: "High availability architecture with multi-AZ deployment and automatic failover",
    },
    {
      icon: Lock,
      title: "Disaster Recovery",
      description: "Automated backups, geo-redundancy, and disaster recovery planning for business continuity",
    },
    {
      icon: Globe2,
      title: "Global Reach",
      description: "Deploy across 25+ regions and 80+ availability zones for low-latency global access",
    },
  ];

  const caseStudies = [
    {
      title: "SaaS Platform - 10M Users",
      challenge: "On-premise infrastructure couldn't scale during peak usage",
      solution: "Migrated to Kubernetes with auto-scaling and multi-region deployment",
      results: ["99.99% uptime", "50% cost reduction", "10M+ users supported", "Sub-100ms latency"],
    },
    {
      title: "E-Commerce - Black Friday",
      challenge: "Website crashed during Black Friday sales with 100K concurrent users",
      solution: "Implemented auto-scaling infrastructure with CDN and caching",
      results: ["500K concurrent users", "Zero downtime", "$10M sales/hour", "3x faster load times"],
    },
    {
      title: "Media Streaming - 1PB Data",
      challenge: "Video streaming platform needed cost-effective storage for 1PB content",
      solution: "Object storage with lifecycle policies and CDN for global delivery",
      results: ["90% storage cost savings", "50+ countries served", "4K streaming", "Instant playback"],
    },
  ];

  const providers = [
    { name: "AWS", services: "EC2, S3, RDS, Lambda" },
    { name: "Microsoft Azure", services: "VMs, Blob, SQL, Functions" },
    { name: "Google Cloud", services: "Compute, Storage, CloudSQL, Cloud Run" },
    { name: "DigitalOcean", services: "Droplets, Spaces, Databases" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 text-white py-20 md:py-32">
        <div className="absolute inset-0 bg-grid-white/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Cloud className="w-4 h-4" />
              <span className="text-sm font-medium">Cloud Infrastructure Services</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Build on Rock-Solid
              <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
                {" "}Cloud Infrastructure
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              Scalable, secure, and high-performance cloud infrastructure that grows with your business
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50" asChild>
                <Link to="/consultation">
                  Get Infrastructure Audit <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
                <Link to="/case-studies">View Success Stories</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Infrastructure Services</h2>
            <p className="text-xl text-gray-600">Complete cloud infrastructure stack for modern applications</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-8 h-full hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                    <service.icon className="w-6 h-6 text-blue-600" />
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Our Cloud Infrastructure</h2>
            <p className="text-xl text-gray-600">Enterprise-grade infrastructure with built-in best practices</p>
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
                <Card className="p-6 h-full">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-lg flex items-center justify-center mb-4">
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

      {/* Case Studies */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Infrastructure Success Stories</h2>
            <p className="text-xl text-gray-600">Real infrastructure transformations</p>
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
                  <h3 className="text-xl font-bold mb-2">{study.title}</h3>
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

      {/* Cloud Providers */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Multi-Cloud Expertise</h2>
            <p className="text-xl text-gray-600">We work with all major cloud providers</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {providers.map((provider, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold mb-2">{provider.name}</h3>
                  <p className="text-sm text-gray-600">{provider.services}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <Cloud className="w-16 h-16 mx-auto mb-6 opacity-80" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Build Better Infrastructure?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Let's design and deploy cloud infrastructure that scales with your ambitions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50" asChild>
                <Link to="/consultation">
                  Get Free Consultation <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
                <Link to="/case-studies">View More Projects</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default InfrastructurePage;
