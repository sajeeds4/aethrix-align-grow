import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import ServicesOverview from "@/components/sections/ServicesOverview";
import WhoWeHelp from "@/components/sections/WhoWeHelp";
import WhyAethrix from "@/components/sections/WhyAethrix";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ServicesOverview />
        <WhoWeHelp />
        <WhyAethrix />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
