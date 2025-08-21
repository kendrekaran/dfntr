
import Image from 'next/image';

export default function Hero() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b pt-48 from-[#635BFF] to-[#635BFF]/0 flex items-center justify-center overflow-hidden">
      {/* Clouds Background */}
      <div className="absolute inset-0 w-full h-full pt-48 z-0">
        <Image
          src="/cloud.svg"
          alt="Cloud decoration"
          width={1436}
          height={957}
          className="w-full h-full object-cover opacity-60"
          style={{ mixBlendMode: 'soft-light' }}
        />
      </div>
      
      {/* Main Content Container */}
      <div className="relative z-10 flex flex-col items-center gap- max-w-4xl pt mx-auto px-6 text-center">
        {/* Monitoring Badge */}
        <div className="monitoring-badge border-[#635BFF]" data-border="true">
          <div className="flex items-center justify-center gap-1">
            <div className="badge-accent"></div>
            <div className="badge-text px-2">
              <p className="text-white text-center text-sm font-medium">24/7 Monitoring & Response</p>
            </div>
          </div>
        </div>
        
        {/* Hero Title */}
        <div className="hero-title-container">
          <h1 className="hero-title text-5xl md:text-6xl lg:text-[64px] mb-2">A Better Security</h1>
          <h1 className="hero-title text-5xl md:text-6xl lg:text-[64px]">Experience Starts Here</h1>
        </div>
        
        {/* Hero Subtitle */}
        <div className="hero-subtitle-container max-w-3xl">
          <p className="hero-subtitle">
            Protecting what matters with cutting-edge technology and expert care.
          </p>
        </div>
        
        {/* CTA Button */}
        <div className="cta-container px-8">
          <a className="hero-cta-button" href="./#form">
            <div className="cta-text-container">
              <p className="cta-text">Get Protected!</p>
            </div>
            <div className="cta-bg-blur-1"></div>
            <div className="cta-bg-blur-2"></div>
          </a>
        </div>
        
        {/* Shield Image with Floating Cards */}
        <div className="relative mt-16">
          <Image
            src="/shield.svg"
            alt="Security Shield"
            width={450}
            height={450}
            className="shield-image"
          />
          
        </div>
      </div>
    </div>
  );
}
