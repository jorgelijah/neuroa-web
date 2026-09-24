import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import MetodoSection from "@/components/MetodoSection";
import ServiciosSection from "@/components/ServiciosSection";
import SobreMiSection from "@/components/SobreMiSection";
import ScreeningSection from "@/components/ScreeningSection";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";
import WhatsAppFab from "@/components/WhatsAppFab";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <StatsSection />
        <MetodoSection />
        <ServiciosSection />
        <SobreMiSection />
        <ScreeningSection />
        <FaqSection />
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
};

export default Index;
