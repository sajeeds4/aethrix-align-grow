import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { FileText, Video, Calendar, Download, ArrowRight, Clock } from "lucide-react";

const Resources = () => {
  const blogPosts = [
    {
      title: "5 Signs Your Business Needs ERP Implementation",
      excerpt: "Discover the key indicators that show your business is ready for an ERP system upgrade.",
      readTime: "5 min read",
      category: "ERP",
      href: "#"
    },
    {
      title: "Cloud Migration Best Practices for Enterprises",
      excerpt: "A comprehensive guide to planning and executing a successful cloud migration strategy.",
      readTime: "8 min read",
      category: "Cloud",
      href: "#"
    },
    {
      title: "AI Automation: Beyond the Hype",
      excerpt: "Real-world applications of AI automation that drive measurable business results.",
      readTime: "6 min read",
      category: "AI",
      href: "#"
    }
  ];

  const whitepapers = [
    {
      title: "The Complete Guide to ERP Selection",
      description: "A 25-page comprehensive guide covering everything from requirements gathering to vendor selection.",
      category: "ERP Strategy",
      href: "#"
    },
    {
      title: "Digital Transformation Roadmap Template",
      description: "Step-by-step framework for planning and implementing digital transformation initiatives.",
      category: "Strategy",
      href: "#"
    },
    {
      title: "ROI Calculator for Business Automation",
      description: "Calculate the potential return on investment for automation projects in your organization.",
      category: "Automation",
      href: "#"
    }
  ];

  const webinars = [
    {
      title: "ERP Implementation Success Stories",
      description: "Learn from real case studies of successful ERP implementations across different industries.",
      date: "Dec 15, 2024",
      time: "2:00 PM EST",
      status: "upcoming"
    },
    {
      title: "AI in Business: Practical Applications",
      description: "Explore practical AI use cases that are driving business value today.",
      date: "Nov 28, 2024",
      time: "1:00 PM EST",
      status: "past"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-24 bg-gradient-hero text-primary-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-display mb-6"
              >
                Insights &{" "}
                <span className="text-accent">Resources</span>
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-subheadline mb-8"
              >
                Stay ahead with the latest in ERP, cloud, AI, and IT best practices. 
                Access expert insights, guides, and tools to drive your digital transformation.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-4">Latest Articles</h2>
              <p className="text-lg text-muted-foreground">
                Expert insights and practical advice for your technology journey.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <motion.div
                  key={post.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="group hover:shadow-large transition-smooth border-border hover:border-accent/50 bg-card h-full">
                    <CardHeader className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-medium text-accent bg-accent/10 px-2 py-1 rounded">
                          {post.category}
                        </span>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Clock className="w-3 h-3" />
                          {post.readTime}
                        </div>
                      </div>
                      <div>
                        <CardTitle className="text-xl group-hover:text-accent transition-smooth line-clamp-2">
                          {post.title}
                        </CardTitle>
                        <CardDescription className="mt-2 line-clamp-3">
                          {post.excerpt}
                        </CardDescription>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <Button variant="ghost" className="w-full justify-start p-0" asChild>
                        <Link to={post.href} className="flex items-center gap-2">
                          Read More
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Whitepapers Section */}
        <section className="py-24 bg-gradient-secondary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-16 text-center">
              <h2 className="text-3xl font-bold mb-4">Whitepapers & Guides</h2>
              <p className="text-lg text-muted-foreground">
                In-depth resources to guide your technology decisions.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {whitepapers.map((paper, index) => (
                <motion.div
                  key={paper.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="group hover:shadow-large transition-smooth border-border hover:border-accent/50 bg-card h-full">
                    <CardHeader className="space-y-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-bounce">
                        <FileText className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div>
                        <span className="text-xs font-medium text-accent bg-accent/10 px-2 py-1 rounded">
                          {paper.category}
                        </span>
                        <CardTitle className="text-xl group-hover:text-accent transition-smooth mt-2">
                          {paper.title}
                        </CardTitle>
                        <CardDescription className="mt-2">
                          {paper.description}
                        </CardDescription>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <Button className="w-full" variant="cta" asChild>
                        <Link to={paper.href} className="flex items-center justify-center gap-2">
                          <Download className="w-4 h-4" />
                          Download Free
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Webinars Section */}
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-16 text-center">
              <h2 className="text-3xl font-bold mb-4">Webinars & Events</h2>
              <p className="text-lg text-muted-foreground">
                Join our experts for live discussions and deep-dive sessions.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {webinars.map((webinar, index) => (
                <motion.div
                  key={webinar.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="group hover:shadow-large transition-smooth border-border hover:border-accent/50 bg-card h-full">
                    <CardHeader className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-bounce">
                          <Video className="w-6 h-6 text-primary-foreground" />
                        </div>
                        <span className={`text-xs font-medium px-2 py-1 rounded ${
                          webinar.status === 'upcoming' 
                            ? 'text-green-600 bg-green-100' 
                            : 'text-gray-600 bg-gray-100'
                        }`}>
                          {webinar.status === 'upcoming' ? 'Upcoming' : 'Available'}
                        </span>
                      </div>
                      <div>
                        <CardTitle className="text-xl group-hover:text-accent transition-smooth">
                          {webinar.title}
                        </CardTitle>
                        <CardDescription className="mt-2">
                          {webinar.description}
                        </CardDescription>
                        <div className="flex items-center gap-4 mt-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {webinar.date}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {webinar.time}
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <Button className="w-full" variant="cta" asChild>
                        <Link to="/consultation" className="flex items-center justify-center gap-2">
                          {webinar.status === 'upcoming' ? 'Register Now' : 'Watch Recording'}
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-secondary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Get personalized insights and recommendations for your specific business needs.
            </p>
            <Button size="lg" variant="cta" asChild>
              <Link to="/consultation" className="flex items-center gap-2">
                Schedule Expert Consultation
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Resources;