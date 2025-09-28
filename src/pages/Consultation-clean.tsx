import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { CheckCircle, Calendar, Users, Target } from "lucide-react";
import SimpleContactForm from "@/components/SimpleContactForm";

const Consultation = () => {
  const benefits = [
    {
      icon: Target,
      title: "Tailored Strategy",
      description: "Custom technology roadmap aligned with your business goals"
    },
    {
      icon: Users,
      title: "Expert Guidance",
      description: "Access to our team of certified technology professionals"
    },
    {
      icon: Calendar,
      title: "Quick Turnaround",
      description: "Detailed proposal and timeline within 48 hours"
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
              <h1 className="text-display mb-6">
                Start Your Digital Transformation —{" "}
                <span className="text-accent">Free Consultation</span>
              </h1>
              <p className="text-subheadline mb-8">
                Not sure where to begin? Let our experts guide you. Book a free consultation 
                to explore how Aethrix can align technology with your goals.
              </p>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20">
                <span className="text-sm font-medium">🎯 100% Free • No Obligations • Expert Advice</span>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Form */}
              <div>
                <SimpleContactForm />
              </div>

              {/* Benefits */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold mb-4">What You'll Get</h2>
                  <p className="text-lg text-muted-foreground">
                    Our free consultation provides you with actionable insights and 
                    a clear roadmap for your digital transformation.
                  </p>
                </div>

                <div className="space-y-6">
                  {benefits.map((benefit, index) => {
                    const IconComponent = benefit.icon;
                    return (
                      <div key={index} className="flex gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                            <IconComponent className="w-6 h-6 text-primary" />
                          </div>
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                          <p className="text-muted-foreground">{benefit.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <Card className="border-accent/20 bg-accent/5">
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-4">Next Steps</h3>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-accent" />
                        <span className="text-sm">Schedule a 30-minute discovery call</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-accent" />
                        <span className="text-sm">Receive detailed proposal and timeline</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-accent" />
                        <span className="text-sm">No obligation to proceed</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Engagement Models */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-2xl font-semibold mb-4">Engagement Models</h3>
            <Table>
              <TableCaption>Our flexible engagement options to suit your needs.</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead>Model</TableHead>
                  <TableHead>Best For</TableHead>
                  <TableHead>Duration</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Project-Based</TableCell>
                  <TableCell>Well-defined projects with clear scope</TableCell>
                  <TableCell>3-12 months</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Dedicated Team</TableCell>
                  <TableCell>Long-term development and support</TableCell>
                  <TableCell>6+ months</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Staff Augmentation</TableCell>
                  <TableCell>Scaling existing teams with expertise</TableCell>
                  <TableCell>1+ months</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Consultation</TableCell>
                  <TableCell>Strategic guidance and planning</TableCell>
                  <TableCell>1-3 months</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </section>

        {/* SLA Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-2xl font-semibold mb-4">SLA Targets</h3>
            <Table>
              <TableCaption>Typical response and resolution objectives.</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead>Priority</TableHead>
                  <TableHead>Response</TableHead>
                  <TableHead>Resolution</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>P1 - Critical</TableCell>
                  <TableCell>15 minutes</TableCell>
                  <TableCell>4 hours</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>P2 - High</TableCell>
                  <TableCell>1 hour</TableCell>
                  <TableCell>1 business day</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>P3 - Normal</TableCell>
                  <TableCell>4 hours</TableCell>
                  <TableCell>3 business days</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>P4 - Low</TableCell>
                  <TableCell>1 business day</TableCell>
                  <TableCell>5 business days</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Consultation;
