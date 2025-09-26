import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-tech.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-hero text-primary-foreground overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Modern technology and business integration"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-hero/80" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 mb-6">
            <span className="text-sm font-medium">🚀 Transforming Business Technology</span>
          </div>

          {/* Main Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-display lg:text-7xl mb-6"
          >
            Smarter Technology.{" "}
            <span className="bg-gradient-to-r from-accent to-primary-foreground bg-clip-text text-transparent">
              Stronger Business.
            </span>
          </motion.h1>

          {/* Sub-headline */}
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-subheadline lg:text-2xl mb-8 max-w-3xl mx-auto text-primary-foreground/90"
          >
            Aethrix Systems delivers ERP, AI, cloud, and enterprise IT solutions that help 
            businesses simplify operations, scale efficiently, and innovate with confidence.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <Button size="lg" variant="hero" asChild>
              <Link to="/consultation" className="flex items-center gap-2">
                Start Your Transformation
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20" asChild>
              <Link to="/services" className="flex items-center gap-2">
                <Play className="w-5 h-5" />
                Explore Services
              </Link>
            </Button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto text-center"
          >
            <div className="space-y-2">
              <div className="text-2xl font-bold text-accent">50+</div>
              <div className="text-sm text-primary-foreground/70">Projects Delivered</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-accent">99%</div>
              <div className="text-sm text-primary-foreground/70">Client Satisfaction</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-accent">24/7</div>
              <div className="text-sm text-primary-foreground/70">Support Available</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-accent">5+</div>
              <div className="text-sm text-primary-foreground/70">Years Experience</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;