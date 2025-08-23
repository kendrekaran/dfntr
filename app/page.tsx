
import dynamic from 'next/dynamic';
import Hero from './components/hero-section';
import Navbar from './components/navbar';

// Dynamic imports for below-the-fold components
const AboutUsSection = dynamic(() => import('./components/about-us'), {
  loading: () => <div className="h-96 bg-gray-100 animate-pulse rounded-lg" />,
  ssr: true
});

const LocationsSection = dynamic(() => import('./components/locations'), {
  loading: () => <div className="h-96 bg-gray-100 animate-pulse rounded-lg" />,
  ssr: true
});

const TestimonialsSection = dynamic(() => import('./components/testimonials'), {
  loading: () => <div className="h-96 bg-gray-100 animate-pulse rounded-lg" />,
  ssr: true
});

const CTASection = dynamic(() => import('./components/cta'), {
  loading: () => <div className="h-32 bg-gray-100 animate-pulse rounded-lg" />,
  ssr: true
});

const FormSection = dynamic(() => import('./components/form'), {
  loading: () => <div className="h-96 bg-gray-100 animate-pulse rounded-lg" />,
  ssr: true
});

const Footer = dynamic(() => import('./components/footer'), {
  loading: () => <div className="h-64 bg-gray-100 animate-pulse rounded-lg" />,
  ssr: true
});

const ServicesSection = dynamic(() => import('./components/security-service'), {
  loading: () => <div className="h-96 bg-gray-100 animate-pulse rounded-lg" />,
  ssr: true
});

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
