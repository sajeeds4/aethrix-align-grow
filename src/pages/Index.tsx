import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import ServicesOverview from "@/components/sections/ServicesOverview";
import WhoWeHelp from "@/components/sections/WhoWeHelp";
import WhyAethrix from "@/components/sections/WhyAethrix";
import TrustedBy from "@/components/sections/TrustedBy";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <TrustedBy />
        
        {/* Services Overview Section */}
        <section className="py-24 bg-gradient-to-br from-muted/30 via-background to-muted/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold mb-6">Comprehensive Technology Solutions</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                At Aethrix Systems, we understand that every business has unique technology challenges. Our comprehensive suite of services is designed to address the full spectrum of your digital infrastructure needs, from initial consultation and strategy development to implementation, maintenance, and ongoing optimization.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                Our team of certified professionals brings decades of combined experience in enterprise technology solutions. We work closely with your team to understand your business objectives, assess your current technology landscape, and develop customized solutions that drive measurable results.
              </p>
            </div>
            
            <div className="text-center mb-12">
              <h3 className="text-2xl font-semibold mb-4">Our Approach Goes Beyond Simple Technology Implementation</h3>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                We become your strategic technology partner, helping you navigate the complexities of digital transformation while ensuring your systems remain secure, efficient, and scalable as your business grows.
              </p>
            </div>
          </div>
        </section>
        
        <ServicesOverview />
        {/* At a Glance */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-semibold mb-6 text-center">Aethrix Systems at a Glance</h2>
              <div className="overflow-x-auto">
                <Table>
                  <TableCaption>Comprehensive overview of our core competencies and service excellence.</TableCaption>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-1/4">Service Area</TableHead>
                      <TableHead className="w-1/2">Core Capabilities</TableHead>
                      <TableHead className="w-1/4">Success Metrics</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">ERP Solutions</TableCell>
                      <TableCell>Odoo implementations, custom modules, integrations, UAT, training, ongoing support</TableCell>
                      <TableCell>95% success rate, 6-12 week deployments</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Cloud & Infrastructure</TableCell>
                      <TableCell>AWS/GCP migrations, Terraform IaC, monitoring, cost optimization, security</TableCell>
                      <TableCell>50% cost reduction, 99.95% uptime</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Custom Development</TableCell>
                      <TableCell>React/TypeScript, Node.js APIs, CI/CD, testing, performance optimization</TableCell>
                      <TableCell>Sub-2s load times, 90%+ code coverage</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">AI & Automation</TableCell>
                      <TableCell>RAG systems, AI assistants, process automation, model evaluation</TableCell>
                      <TableCell>60% efficiency gains, ROI in 6 months</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Cybersecurity</TableCell>
                      <TableCell>Security assessments, compliance, incident response, SIEM implementation</TableCell>
                      <TableCell>100% compliance, zero breaches</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Strategic Consulting</TableCell>
                      <TableCell>Technology strategy, digital transformation, vendor management</TableCell>
                      <TableCell>200+ projects, $10M+ cost savings</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </div>
          </div>
        </section>
        <WhoWeHelp />
        <WhyAethrix />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
