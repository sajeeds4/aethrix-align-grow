import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import {
  Smartphone,
  Apple,
  Play,
  Code2,
  CheckCircle2,
  ArrowRight,
  Zap,
  Users,
  Shield,
  TrendingUp,
  Layout,
  Wifi,
} from "lucide-react";

const MobilePage = () => {
  const platforms = [
    {
      icon: Apple,
      title: "iOS Development",
      description:
        "Native iOS apps built with Swift and SwiftUI for iPhone, iPad, and Apple Watch.",
      features: [
        "Swift & SwiftUI expertise",
        "Apple Design Guidelines",
        "App Store optimization",
        "TestFlight beta testing",
      ],
    },
    {
      icon: Play,
      title: "Android Development",
      description:
        "High-performance Android apps using Kotlin and Jetpack Compose for all Android devices.",
      features: [
        "Kotlin & Jetpack Compose",
        "Material Design 3",
        "Google Play Console",
        "Multi-device support",
      ],
    },
    {
      icon: Code2,
      title: "Cross-Platform",
      description:
        "Build once, deploy everywhere with React Native and Flutter for iOS and Android.",
      features: [
        "React Native & Flutter",
        "Shared codebase (90%+)",
        "Native performance",
        "Faster time-to-market",
      ],
    },
    {
      icon: Layout,
      title: "Progressive Web Apps",
      description:
        "Web apps that feel native with offline support, push notifications, and app-like experiences.",
      features: [
        "Offline functionality",
        "Push notifications",
        "Add to home screen",
        "Cross-platform compatibility",
      ],
    },
  ];

  const features = [
    {
      icon: Zap,
      title: "Blazing Performance",
      description:
        "Optimized code and efficient architecture ensure smooth, responsive experiences even on older devices.",
    },
    {
      icon: Shield,
      title: "Bank-Grade Security",
      description:
        "End-to-end encryption, secure authentication, and compliance with GDPR, HIPAA, and PCI-DSS standards.",
    },
    {
      icon: Wifi,
      title: "Offline-First",
      description:
        "Apps work seamlessly without internet, syncing data automatically when connection is restored.",
    },
    {
      icon: Users,
      title: "User-Centric Design",
      description:
        "Intuitive interfaces designed through user research, prototyping, and extensive usability testing.",
    },
    {
      icon: TrendingUp,
      title: "Analytics Integration",
      description:
        "Built-in analytics track user behavior, crashes, and performance to drive data-informed improvements.",
    },
    {
      icon: Layout,
      title: "Responsive Layouts",
      description:
        "Adaptive designs that look perfect on phones, tablets, and foldable devices with any screen size.",
    },
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Planning",
      description:
        "Define app goals, target audience, feature set, and technical requirements through stakeholder workshops.",
      deliverables: [
        "Product requirements document",
        "User personas and journeys",
        "Technical architecture plan",
      ],
    },
    {
      step: "02",
      title: "UX/UI Design",
      description:
        "Create wireframes, interactive prototypes, and high-fidelity designs following platform guidelines.",
      deliverables: [
        "Wireframes and user flows",
        "Interactive Figma prototypes",
        "Design system and style guide",
      ],
    },
    {
      step: "03",
      title: "Development",
      description:
        "Build the app using agile sprints with weekly demos and continuous integration/deployment pipelines.",
      deliverables: [
        "Weekly sprint builds",
        "Backend APIs and databases",
        "Automated testing suite",
      ],
    },
    {
      step: "04",
      title: "Testing & QA",
      description:
        "Comprehensive testing across devices, OS versions, and network conditions to ensure quality.",
      deliverables: [
        "Test cases and results",
        "Bug tracking and resolution",
        "Performance optimization",
      ],
    },
    {
      step: "05",
      title: "Launch & Support",
      description:
        "App store submission, launch marketing support, and ongoing maintenance with feature updates.",
      deliverables: [
        "App store listings",
        "Launch marketing assets",
        "24/7 monitoring and support",
      ],
    },
  ];

  const caseStudies = [
    {
      title: "HealthTech Telemedicine App",
      description:
        "HIPAA-compliant telehealth app connecting 10,000+ patients with healthcare providers.",
      platform: "iOS, Android, Web",
      results: [
        "250K+ video consultations",
        "4.8★ average rating",
        "99.9% uptime",
      ],
      tech: ["React Native", "Node.js", "WebRTC", "PostgreSQL"],
    },
    {
      title: "FinTech Mobile Banking",
      description:
        "Secure mobile banking app with biometric authentication and real-time transaction notifications.",
      platform: "iOS, Android",
      results: [
        "500K+ active users",
        "Zero security breaches",
        "$50M transactions/month",
      ],
      tech: ["Flutter", "Firebase", "AWS", "Stripe"],
    },
    {
      title: "E-Commerce Shopping App",
      description:
        "Personalized shopping experience with AR try-on, one-click checkout, and loyalty rewards.",
      platform: "iOS, Android",
      results: [
        "300% increase in conversions",
        "2M+ downloads",
        "40% repeat purchase rate",
      ],
      tech: ["Swift", "Kotlin", "ARKit", "Shopify API"],
    },
  ];

  const technologies = [
    { name: "React Native", category: "Cross-Platform" },
    { name: "Flutter", category: "Cross-Platform" },
    { name: "Swift/SwiftUI", category: "iOS" },
    { name: "Kotlin/Compose", category: "Android" },
    { name: "Firebase", category: "Backend" },
    { name: "GraphQL", category: "API" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-600 via-pink-600 to-red-600 text-white py-20 md:py-32">
        <div className="absolute inset-0 bg-grid-white/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Smartphone className="w-4 h-4" />
              <span className="text-sm font-medium">Mobile App Development</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Build Apps That Users
              <span className="bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">
                {" "}
                Love to Use
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-purple-100 mb-8">
              From concept to App Store, we create mobile experiences that engage users
              and drive business growth across iOS, Android, and web platforms.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-purple-600 hover:bg-purple-50"
                asChild
              >
                <Link to="/consultation">
                  Start Your App Project <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
                asChild
              >
                <Link to="/case-studies">View Portfolio</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Platform Expertise */}
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
              Multi-Platform Expertise
            </h2>
            <p className="text-xl text-gray-600">
              We build native, cross-platform, and progressive web apps tailored to your needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {platforms.map((platform, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-8 h-full hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                    <platform.icon className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{platform.title}</h3>
                  <p className="text-gray-600 mb-6">{platform.description}</p>
                  <ul className="space-y-3">
                    {platform.features.map((feature, idx) => (
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

      {/* Features Grid */}
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
              What Makes Our Apps Stand Out
            </h2>
            <p className="text-xl text-gray-600">
              We don't just code apps—we craft experiences that users love
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
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
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
              Our Development Process
            </h2>
            <p className="text-xl text-gray-600">
              From idea to App Store in 12-16 weeks with our proven methodology
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
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {step.step}
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-600 mb-4">{step.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {step.deliverables.map((deliverable, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1 bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm"
                      >
                        <CheckCircle2 className="w-3 h-3" />
                        {deliverable}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Apps We've Built
            </h2>
            <p className="text-xl text-gray-600">
              Real apps, real results, real impact
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
                  <h3 className="text-xl font-bold mb-2">{study.title}</h3>
                  <p className="text-gray-600 mb-4">{study.description}</p>
                  <div className="inline-block bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
                    {study.platform}
                  </div>
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Results</h4>
                    <ul className="space-y-2">
                      {study.results.map((result, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-green-600" />
                          <span className="text-sm text-gray-700">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {study.tech.map((tech, idx) => (
                        <span
                          key={idx}
                          className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
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
              Our Technology Stack
            </h2>
            <p className="text-xl text-gray-600">
              We use cutting-edge frameworks and tools for modern mobile development
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
                className="bg-gradient-to-br from-purple-100 to-pink-100 px-6 py-3 rounded-full"
              >
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-purple-900">{tech.name}</span>
                  <span className="text-xs text-purple-600 bg-white px-2 py-0.5 rounded-full">
                    {tech.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-600 to-pink-600 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <Smartphone className="w-16 h-16 mx-auto mb-6 opacity-80" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Build Your Mobile App?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Let's turn your app idea into reality. Schedule a free consultation to
              discuss your project and get a detailed proposal.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-purple-600 hover:bg-purple-50"
                asChild
              >
                <Link to="/consultation">
                  Get Free Consultation <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
                asChild
              >
                <Link to="/case-studies">See More Projects</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default MobilePage;
