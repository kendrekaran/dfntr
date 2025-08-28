import Navbar from "@/components/seattle/navbar";
import TacomaHero from "@/components/tacoma/hero";
import ServicesSection from "@/components/seattle/services";
import TrustSection from "@/components/seattle/trust";
import SecurityServices from "@/components/seattle/security";
import ServingSeattle from "@/components/seattle/serving";
import FormSection from "../components/form";
import Footer from "../components/footer";

export default function Tacoma() {
  return (
    <div>
     <Navbar />
     <TacomaHero />
     <ServicesSection />
     <TrustSection />
     <SecurityServices />
     <ServingSeattle />
     <FormSection />
     <Footer />
    </div>
  );
}


