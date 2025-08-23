
import Image from 'next/image';

export default function Hero() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#635BFF] to-[#635BFF]/0 flex items-center justify-center overflow-hidden">
      {/* Clouds Background - Lazy load since it's decorative */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src="/cloud.svg"
          alt="Cloud decoration"
          width={800}
          height={600}
          className="w-full h-full object-cover opacity-60"
          style={{ mixBlendMode: 'soft-light' }}
          loading="lazy"
          priority={false}
          sizes="100vw"
        />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 flex flex-col items-center gap-4 max-w-4xl mx-auto px-4 sm:px-6 text-center pt-32 lg:pt-48">
        {/* Monitoring Badge */}
        <div className="monitoring-badge border-[#635BFF]" data-border="true">
          <div className="flex items-center justify-center gap-1">
            <div className="badge-accent"></div>
            <div className="badge-text px-2">
              <p className="text-white text-center text-xs sm:text-sm font-medium">24/7 Monitoring & Response</p>
            </div>
          </div>
        </div>

        {/* Hero Title */}
        <div className="hero-title-container">
          <h1 className="hero-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[64px] mb-1 sm:mb-2">A Better Security</h1>
          <h1 className="hero-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[64px]">Experience Starts Here</h1>
        </div>

        {/* Hero Subtitle */}
        <div className="hero-subtitle-container max-w-3xl px-4">
          <p className="hero-subtitle text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
            Protecting what matters with cutting-edge technology and expert care.
          </p>
        </div>

        {/* CTA Button */}
        <div className="cta-container px-4 sm:px-8">
          <a className="hero-cta-button" href="./#form">
            <div className="cta-text-container">
              <p className="cta-text text-sm sm:text-base md:text-lg">Get Protected!</p>
            </div>
            <div className="cta-bg-blur-1"></div>
            <div className="cta-bg-blur-2"></div>
          </a>
        </div>

        {/* Shield Image with Floating Cards - Priority load since it's above the fold */}
        <div className="relative mt-8 sm:mt-12 lg:mt-16">
          <Image
            src="/shield.svg"
            alt="Security Shield"
            width={300}
            height={300}
            className="shield-image w-[300px] h-auto sm:w-[350px] md:w-[400px] lg:w-[450px]"
            priority={true}
            sizes="(max-width: 640px) 300px, (max-width: 768px) 350px, (max-width: 1024px) 400px, 450px"
          />
        </div>
      </div>
    </div>
  );
}
