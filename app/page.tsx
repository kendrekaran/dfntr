
import Hero from './components/hero-section';
import Navbar from './components/navbar';

import AboutUsSection from './components/about-us';
import LocationsSection from './components/locations';
import TestimonialsSection from './components/testimonials';
import CTASection from './components/cta';
import FormSection from './components/form';
import Footer from './components/footer';
import ServicesSection from './components/security-service';


export default function Home() {
  return (
    <>
      <div className="relative overflow-x-hidden">
        <Navbar />
        <Hero />
        <ServicesSection />
        <AboutUsSection />
        <LocationsSection />
        <TestimonialsSection />
        <CTASection />
        <FormSection />
        <Footer />
      </div>
    </>
  );
}
