import Navbar from "@/components/seattle/navbar";
import SeattleHero from "@/components/seattle/hero";
import ServicesSection from "@/components/seattle/services";
import TrustSection from "@/components/seattle/trust";
import SecurityServices from "@/components/seattle/security";
import ServingSeattle from "@/components/seattle/serving";
import FormSection from "../components/form";
import Footer from "../components/footer";

export default function Seattle() {
  return (
    <div>
     <Navbar />
     <SeattleHero />
     <ServicesSection />
     <TrustSection />
     <SecurityServices />
     <ServingSeattle />
     <FormSection />
     <Footer />
    </div>
  );
}


