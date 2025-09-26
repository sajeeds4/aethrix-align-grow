import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useState } from "react";
import { ArrowRight, CheckCircle, Calendar, Users, Target } from "lucide-react";

const Consultation = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    industry: "",
    service: "",
    budget: "",
    timeline: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

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
                <Card className="shadow-medium">
                  <CardHeader>
                    <CardTitle className="text-2xl">Get Your Free Consultation</CardTitle>
                    <CardDescription>
                      Fill out the form below and we'll get back to you within 24 hours with 
                      a detailed analysis and recommendations.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name *</Label>
                          <Input
                            id="name"
                            value={formData.name}
                            onChange={(e) => handleInputChange("name", e.target.value)}
                            placeholder="John Doe"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address *</Label>
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => handleInputChange("email", e.target.value)}
                            placeholder="john@company.com"
                            required
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="company">Company Name *</Label>
                          <Input
                            id="company"
                            value={formData.company}
                            onChange={(e) => handleInputChange("company", e.target.value)}
                            placeholder="Your Company"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input
                            id="phone"
                            value={formData.phone}
                            onChange={(e) => handleInputChange("phone", e.target.value)}
                            placeholder="+1 (555) 123-4567"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="industry">Industry</Label>
                          <Select onValueChange={(value) => handleInputChange("industry", value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select your industry" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="manufacturing">Manufacturing</SelectItem>
                              <SelectItem value="retail">Retail & E-Commerce</SelectItem>
                              <SelectItem value="healthcare">Healthcare</SelectItem>
                              <SelectItem value="logistics">Logistics</SelectItem>
                              <SelectItem value="finance">Finance</SelectItem>
                              <SelectItem value="education">Education</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="service">Service Interest</Label>
                          <Select onValueChange={(value) => handleInputChange("service", value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select service" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="erp">ERP Solutions</SelectItem>
                              <SelectItem value="development">Web & App Development</SelectItem>
                              <SelectItem value="cloud">Cloud & Infrastructure</SelectItem>
                              <SelectItem value="ai">AI & Automation</SelectItem>
                              <SelectItem value="consulting">Consulting & Advisory</SelectItem>
                              <SelectItem value="multiple">Multiple Services</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="budget">Budget Range</Label>
                          <Select onValueChange={(value) => handleInputChange("budget", value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select budget range" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="under-10k">Under $10,000</SelectItem>
                              <SelectItem value="10k-25k">$10,000 - $25,000</SelectItem>
                              <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
                              <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                              <SelectItem value="over-100k">Over $100,000</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="timeline">Project Timeline</Label>
                          <Select onValueChange={(value) => handleInputChange("timeline", value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select timeline" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="asap">ASAP</SelectItem>
                              <SelectItem value="1-3-months">1-3 months</SelectItem>
                              <SelectItem value="3-6-months">3-6 months</SelectItem>
                              <SelectItem value="6-12-months">6-12 months</SelectItem>
                              <SelectItem value="planning">Just planning</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Project Details</Label>
                        <Textarea
                          id="message"
                          value={formData.message}
                          onChange={(e) => handleInputChange("message", e.target.value)}
                          placeholder="Tell us about your project, challenges, and goals..."
                          rows={4}
                        />
                      </div>

                      <Button type="submit" size="lg" variant="cta" className="w-full">
                        <span className="flex items-center gap-2">
                          Schedule Free Consultation
                          <ArrowRight className="w-5 h-5" />
                        </span>
                      </Button>
                    </form>
                  </CardContent>
                </Card>
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
                      <div key={benefit.title} className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                          <IconComponent className="w-6 h-6 text-primary-foreground" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                          <p className="text-muted-foreground">{benefit.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <Card className="bg-gradient-secondary border-accent/20">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4">What Happens Next?</h3>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-accent" />
                        <span className="text-sm">We review your requirements within 24 hours</span>
                      </div>
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
              <TableCaption>Choose a model aligned to your goals and constraints.</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead>Model</TableHead>
                  <TableHead>Use When</TableHead>
                  <TableHead>Pros</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Fixed Scope</TableCell>
                  <TableCell>Clear requirements and deadlines</TableCell>
                  <TableCell>Predictable cost and timeline</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Time & Materials</TableCell>
                  <TableCell>Evolving scope or discovery</TableCell>
                  <TableCell>Flexibility and transparency</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Retainer</TableCell>
                  <TableCell>Ongoing improvements and support</TableCell>
                  <TableCell>Guaranteed capacity</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </section>

        {/* SLA Targets */}
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