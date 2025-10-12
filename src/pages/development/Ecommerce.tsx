import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import {
  ShoppingCart,
  CreditCard,
  Package,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  Smartphone,
  Search,
  Lock,
  Zap,
  Globe2,
  BarChart3,
} from "lucide-react";

const EcommercePage = () => {
  const features = [
    {
      icon: ShoppingCart,
      title: "Advanced Shopping Cart",
      description:
        "Smart cart with save-for-later, wishlist, and abandoned cart recovery with automated email campaigns.",
      capabilities: [
        "Multi-currency support",
        "Guest checkout option",
        "Cart sharing & gifting",
        "Smart product recommendations",
      ],
    },
    {
      icon: CreditCard,
      title: "Payment Gateway Integration",
      description:
        "Secure payment processing with Stripe, PayPal, Apple Pay, Google Pay, and cryptocurrency support.",
      capabilities: [
        "PCI-DSS compliance",
        "One-click checkout",
        "Subscription billing",
        "Split payments & COD",
      ],
    },
    {
      icon: Package,
      title: "Inventory & Fulfillment",
      description:
        "Real-time inventory tracking, automated reordering, multi-warehouse management, and shipping integration.",
      capabilities: [
        "Real-time stock updates",
        "Low stock alerts",
        "Dropshipping support",
        "Multi-warehouse routing",
      ],
    },
    {
      icon: Search,
      title: "AI-Powered Search",
      description:
        "Intelligent search with autocomplete, typo tolerance, filters, and visual search capabilities.",
      capabilities: [
        "Natural language search",
        "Visual similarity search",
        "Personalized results",
        "Advanced filtering",
      ],
    },
  ];

  const platforms = [
    {
      title: "Custom E-Commerce",
      description: "Fully custom platforms built from scratch",
      pros: ["Complete flexibility", "Unique features", "No platform fees"],
      tech: ["React", "Node.js", "PostgreSQL"],
    },
    {
      title: "Shopify Plus",
      description: "Enterprise Shopify with custom themes",
      pros: ["Quick launch", "Proven reliability", "App ecosystem"],
      tech: ["Liquid", "Shopify APIs", "React"],
    },
    {
      title: "WooCommerce",
      description: "WordPress-powered with custom plugins",
      pros: ["SEO-friendly", "Content integration", "Cost-effective"],
      tech: ["PHP", "WordPress", "MySQL"],
    },
    {
      title: "Headless Commerce",
      description: "API-first architecture with custom frontend",
      pros: ["Omnichannel ready", "Best performance", "Future-proof"],
      tech: ["Next.js", "GraphQL", "Contentful"],
    },
  ];

  const process = [
    {
      step: "01",
      title: "E-Commerce Strategy",
      description:
        "Define product catalog, pricing strategy, target audience, marketing channels, and competitive positioning.",
      duration: "1-2 weeks",
    },
    {
      step: "02",
      title: "UX & Design",
      description:
        "Create intuitive shopping experiences with wireframes, prototypes, and conversion-optimized designs.",
      duration: "2-3 weeks",
    },
    {
      step: "03",
      title: "Platform Development",
      description:
        "Build storefront, admin panel, payment processing, inventory management, and shipping integrations.",
      duration: "8-12 weeks",
    },
    {
      step: "04",
      title: "Product Setup & Migration",
      description:
        "Import products, categories, customer data, and order history from existing systems.",
      duration: "1-2 weeks",
    },
    {
      step: "05",
      title: "Testing & Launch",
      description:
        "Comprehensive testing of checkout flow, payments, shipping, and load testing for peak traffic.",
      duration: "2-3 weeks",
    },
    {
      step: "06",
      title: "Growth & Optimization",
      description:
        "A/B testing, conversion rate optimization, SEO, marketing automation, and analytics.",
      duration: "Ongoing",
    },
  ];

  const caseStudies = [
    {
      title: "Fashion Retailer - $10M Revenue",
      description:
        "Multi-brand fashion marketplace with AR try-on and personalized styling recommendations.",
      challenge:
        "Low conversion rate, high cart abandonment, and poor mobile experience.",
      solution:
        "Mobile-first redesign with AR fitting room, one-click checkout, and AI stylist.",
      results: [
        "300% increase in conversions",
        "2M+ annual transactions",
        "45% mobile conversion rate",
        "$10M first year revenue",
      ],
    },
    {
      title: "B2B Electronics - 5K Clients",
      description:
        "Wholesale electronics platform with bulk pricing, credit lines, and custom quotes.",
      challenge:
        "Complex pricing tiers, manual quote process, and no self-service for clients.",
      solution:
        "Custom B2B portal with dynamic pricing, automated quotes, and credit management.",
      results: [
        "80% reduction in quote time",
        "5,000+ active clients",
        "$50M annual GMV",
        "95% reorder rate",
      ],
    },
    {
      title: "Food Delivery - 50K Orders/Day",
      description:
        "Multi-restaurant food delivery platform with real-time tracking and contactless delivery.",
      challenge:
        "Peak hour performance issues, driver coordination, and payment processing delays.",
      solution:
        "Microservices architecture with real-time GPS tracking and instant settlements.",
      results: [
        "50K+ daily orders",
        "Sub-2s page load time",
        "99.9% uptime during peaks",
        "15-min avg delivery time",
      ],
    },
  ];

  const optimizations = [
    {
      icon: Zap,
      title: "Performance",
      metrics: ["Sub-1s page load", "Lazy image loading", "CDN delivery"],
    },
    {
      icon: Smartphone,
      title: "Mobile-First",
      metrics: ["60% mobile traffic", "App-like experience", "Touch-optimized"],
    },
    {
      icon: Lock,
      title: "Security",
      metrics: ["PCI-DSS certified", "SSL encryption", "Fraud detection"],
    },
    {
      icon: TrendingUp,
      title: "Conversion",
      metrics: ["3-5% conversion rate", "Lower cart abandonment", "Upsell/cross-sell"],
    },
    {
      icon: Globe2,
      title: "SEO",
      metrics: ["#1 Google rankings", "Rich snippets", "Fast indexing"],
    },
    {
      icon: BarChart3,
      title: "Analytics",
      metrics: ["Real-time insights", "Customer journey", "Revenue attribution"],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-700 text-white py-20 md:py-32">
        <div className="absolute inset-0 bg-grid-white/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <ShoppingCart className="w-4 h-4" />
              <span className="text-sm font-medium">E-Commerce Development</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Build Online Stores That
              <span className="bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">
                {" "}
                Convert & Scale
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-emerald-100 mb-8">
              From Shopify customizations to fully custom platforms, we create
              high-converting e-commerce experiences that drive revenue growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-emerald-600 hover:bg-emerald-50"
                asChild
              >
                <Link to="/consultation">
                  Start Your Store <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
                asChild
              >
                <Link to="/case-studies">View Success Stories</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
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
              Everything You Need to Sell Online
            </h2>
            <p className="text-xl text-gray-600">
              Feature-rich e-commerce solutions that delight customers and boost sales
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-8 h-full hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-6">
                    <feature.icon className="w-6 h-6 text-emerald-600" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-gray-600 mb-6">{feature.description}</p>
                  <ul className="space-y-3">
                    {feature.capabilities.map((capability, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{capability}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Options */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Choose Your E-Commerce Platform
            </h2>
            <p className="text-xl text-gray-600">
              We work with all major platforms and build custom solutions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {platforms.map((platform, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 h-full hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold mb-2">{platform.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{platform.description}</p>
                  <div className="mb-4">
                    <h4 className="font-semibold text-sm mb-2">Benefits</h4>
                    <ul className="space-y-1">
                      {platform.pros.map((pro, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3 h-3 text-green-600" />
                          <span className="text-sm text-gray-700">{pro}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {platform.tech.map((tech, idx) => (
                        <span
                          key={idx}
                          className="bg-emerald-100 text-emerald-700 px-2 py-1 rounded text-xs"
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
              From Concept to Launch
            </h2>
            <p className="text-xl text-gray-600">
              Launch your online store in 12-16 weeks with our proven process
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
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {step.step}
                  </div>
                </div>
                <div className="flex-grow">
                  <div className="flex items-center gap-4 mb-2">
                    <h3 className="text-2xl font-bold">{step.title}</h3>
                    <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-medium">
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
              E-Commerce Success Stories
            </h2>
            <p className="text-xl text-gray-600">
              Real stores, real revenue, real growth
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

      {/* Optimizations */}
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
              Optimized for Growth
            </h2>
            <p className="text-xl text-gray-600">
              Every store we build is optimized for conversions, performance, and SEO
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {optimizations.map((opt, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <opt.icon className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">{opt.title}</h3>
                <ul className="space-y-2">
                  {opt.metrics.map((metric, idx) => (
                    <li key={idx} className="text-gray-600">
                      {metric}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-600 to-teal-700 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <ShoppingCart className="w-16 h-16 mx-auto mb-6 opacity-80" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Launch Your Online Store?
            </h2>
            <p className="text-xl text-emerald-100 mb-8">
              Let's build an e-commerce platform that converts visitors into customers
              and drives sustainable revenue growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-emerald-600 hover:bg-emerald-50"
                asChild
              >
                <Link to="/consultation">
                  Get Started Now <ArrowRight className="ml-2 w-4 h-4" />
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
    </div>
  );
};

export default EcommercePage;
