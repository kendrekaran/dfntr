
import Image from 'next/image';

export default function Hero() {
  return (
    <div className="relative min-h-screen  bg-gradient-to-b from-[#635BFF] to-[#635BFF]/0 flex items-center justify-center overflow-hidden">
      {/* Clouds Background */}
      <div className="absolute inset-0 w-full h-full z-0">
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
        <a
              href="#form"
              className="inline-flex items-center justify-center px-8 py-3 bg-indigo-600 text-white font-semibold text-lg rounded-xl shadow-lg hover:bg-indigo-700 transition-all duration-300 transform hover:-translate-y-1"
            >
              Get Protected!
            </a>
        </div>

        {/* Shield Image with Floating Cards */}
        <div className="relative mt-8 sm:mt-12 lg:mt-16">
          <Image
            src="/shield.svg"
            alt="Security Shield"
            width={450}
            height={450}
            priority={true}
            className="shield-image w-[450px] h-auto"
          />

        </div>
      </div>
    </div>
  );
}
