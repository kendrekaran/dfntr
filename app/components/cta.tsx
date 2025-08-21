import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const CTASection = () => {
  return (
    <section id="values" className="py-16 px-[100px]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          {/* Logo Section - Left */}
          <div className="flex-shrink-0 lg:w-1/2 flex justify-center lg:justify-start">
            <div className="relative max-w-[593px] max-h-[481px]">
              <Image
                src="/cta-logo.svg"
                alt="dfndr logo"
                width={593}
                height={481}
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Content Section - Right */}
          <div className="flex-1 lg:w-1/2 text-center lg:text-left">
            {/* Header Section */}
            <div className="mb-8">
              <h2 className="text-[40px] md:text-[48px] lg:text-[54px] font-semibold text-black leading-[100%] tracking-[-0.01em] mb-6">
                Our Commitment to <span className="text-indigo-600">Excellence</span>
              </h2>
              <p className="text-[18px] md:text-[20px] text-black leading-[150%]">
              At DFNDR, we are committed to delivering the highest standards of security through continuous innovation and unwavering dedication. Our team of experts works tirelessly to stay ahead of emerging threats, ensuring that our clients receive the most advanced and reliable security solutions available. We believe in building long-term partnerships based on trust, transparency, and exceptional service, allowing businesses to thrive in a secure environment.
              </p>
            </div>

            {/* CTA Button */}
            <div className="flex justify-center lg:justify-start">
              <Link
                href="#form"
                className="inline-flex items-center justify-center px-[48px] py-[14px] bg-indigo-600 text-white font-semibold text-[18px] rounded-[12px] shadow-lg hover:bg-indigo-700 transition-all duration-300 transform hover:translate-y-1 relative overflow-hidden group"
                style={{ boxShadow: 'rgba(0, 0, 0, 0.25) 0px -3px 0px 0px inset' }}
              >
                <span className="relative z-10 font-semibold">Get Protected!</span>
                {/* Glow effects */}
                <div className="absolute inset-0 bg-white opacity-20 blur-lg transform rotate-[-28deg] group-hover:opacity-30 transition-opacity duration-300"></div>
                <div className="absolute inset-0 bg-white opacity-20 blur-lg transform rotate-[-28deg] translate-x-2 group-hover:opacity-30 transition-opacity duration-300"></div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
