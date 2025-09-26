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
        <ServicesOverview />
        {/* At a Glance */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-semibold mb-4">Aethrix at a Glance</h2>
            <Table>
              <TableCaption>Quick snapshot of our focus areas and delivery strengths.</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead>Area</TableHead>
                  <TableHead>Highlights</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>ERP</TableCell>
                  <TableCell>Odoo implementations, modules, integrations, UAT</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Development</TableCell>
                  <TableCell>React/TS, Node APIs, CI/CD, testing</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Cloud</TableCell>
                  <TableCell>AWS/GCP, Terraform, SRE, observability</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>AI</TableCell>
                  <TableCell>RAG, assistants, automation, evaluations</TableCell>
                </TableRow>
              </TableBody>
            </Table>
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
