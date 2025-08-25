import Navbar from "@/components/seattle/navbar";
import SeattleHero from "@/components/seattle/hero";
import ServicesSection from "@/components/seattle/services";
import TrustSection from "@/components/seattle/trust";

export default function Seattle() {
  return (
    <div>
     <Navbar />
     <SeattleHero />
     <ServicesSection />
     <TrustSection />
    </div>
  );
}