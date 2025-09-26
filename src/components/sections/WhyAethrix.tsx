import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Zap, 
  Award, 
  TrendingUp, 
  Shield,
  Users,
  Clock,
  ArrowRight 
} from "lucide-react";

const WhyAethrix = () => {
  const advantages = [
    {
      icon: Zap,
      title: "Agile & Fast",
      description: "Rapid deployment with iterative development approach",
      stats: "3x faster delivery"
    },
    {
      icon: Award,
      title: "Proven Results",
      description: "Successful track record across multiple industries",
      stats: "99% success rate"
    },
    {
      icon: TrendingUp,
      title: "Built for Growth",
      description: "Scalable solutions that grow with your business",
      stats: "500% scalability"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level security with compliance built-in",
      stats: "SOC 2 certified"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Certified professionals with deep technical expertise",
      stats: "50+ certifications"
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock monitoring and support services",
      stats: "< 1hr response time"
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-headline mb-6">
            Why Choose{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Aethrix Systems?
            </span>
          </h2>
          <p className="text-subheadline">
            We combine technical excellence with business insight to deliver solutions 
            that drive real results for your organization.
          </p>
        </div>

        {/* Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {advantages.map((advantage, index) => {
            const IconComponent = advantage.icon;
            return (
              <Card 
                key={advantage.title} 
                className="group hover:shadow-medium transition-smooth border-border hover:border-accent/50 bg-card text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="space-y-4">
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-bounce">
                    <IconComponent className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <div>
                    <CardTitle className="text-xl group-hover:text-accent transition-smooth">
                      {advantage.title}
                    </CardTitle>
                    <div className="text-2xl font-bold text-accent mt-2">
                      {advantage.stats}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    {advantage.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Value Proposition */}
        <div className="bg-gradient-secondary rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join hundreds of successful companies that have streamlined their operations, 
            reduced costs, and accelerated growth with our technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="cta" asChild>
              <Link to="/consultation" className="flex items-center gap-2">
                Get Free Consultation
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/case-studies">View Success Stories</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyAethrix;