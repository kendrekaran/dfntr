
import Hero from './components/hero-section';
import Navbar from './components/navbar';
import ServicesSection from './components/security-service';
import AboutUsSection from './components/about-us';
import LocationsSection from './components/locations';
import TestimonialsSection from './components/testimonials';
import CTASection from './components/cta';
import FormSection from './components/form';
import Footer from './components/footer';

export default function Home() {
  return (
    <>
      <div className="relative">
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
