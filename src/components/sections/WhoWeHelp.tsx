import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Factory, 
  ShoppingCart, 
  Heart, 
  Truck,
  ArrowRight 
} from "lucide-react";

const WhoWeHelp = () => {
  const industries = [
    {
      icon: Factory,
      title: "Manufacturing",
      description: "ERP for production planning and supply chain optimization",
      benefits: ["Production scheduling", "Inventory management", "Quality control", "Supply chain visibility"]
    },
    {
      icon: ShoppingCart,
      title: "Retail & E-Commerce",
      description: "Unified platforms for inventory, sales, and customer engagement",
      benefits: ["Omnichannel sales", "Customer analytics", "Inventory sync", "Marketing automation"]
    },
    {
      icon: Heart,
      title: "Healthcare",
      description: "Secure systems for patient data and operational efficiency",
      benefits: ["Patient management", "Compliance tracking", "Workflow automation", "Data security"]
    },
    {
      icon: Truck,
      title: "Logistics",
      description: "Real-time tracking, routing, and delivery optimization",
      benefits: ["Route optimization", "Fleet management", "Real-time tracking", "Performance analytics"]
    }
  ];

  return (
    <section className="py-24 bg-gradient-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-headline mb-6">
            Solutions Built for{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Your Industry
            </span>
          </h2>
          <p className="text-subheadline">
            From manufacturers to retailers, healthcare providers to logistics firms, 
            we tailor solutions to your industry's unique challenges.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {industries.map((industry, index) => {
            const IconComponent = industry.icon;
            return (
              <Card 
                key={industry.title} 
                className="group hover:shadow-medium transition-smooth bg-card border-border hover:border-accent/50"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-bounce">
                      <IconComponent className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <CardTitle className="text-xl group-hover:text-accent transition-smooth">
                        {industry.title}
                      </CardTitle>
                      <CardDescription className="mt-1">
                        {industry.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    {industry.benefits.map((benefit) => (
                      <div key={benefit} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3 flex-shrink-0" />
                        {benefit}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="text-center">
            <div className="text-3xl font-bold text-accent mb-2">15+</div>
            <div className="text-sm text-muted-foreground">Industries Served</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent mb-2">200+</div>
            <div className="text-sm text-muted-foreground">Clients Worldwide</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent mb-2">85%</div>
            <div className="text-sm text-muted-foreground">Efficiency Improvement</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent mb-2">60%</div>
            <div className="text-sm text-muted-foreground">Cost Reduction</div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button size="lg" variant="cta" asChild>
            <Link to="/industries" className="flex items-center gap-2">
              Explore Industry Solutions
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WhoWeHelp;