import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const CTASection = () => {
  return (
    <section id="values" className="py-16 px-4 sm:px-8 md:py-20 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Logo Section - Left */}
          <div className="flex-shrink-0 lg:w-1/2 flex justify-center lg:justify-start">
            <div className="relative w-full max-w-lg">
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
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 leading-tight mb-6">
                Our Commitment to <span className="text-indigo-600">Excellence</span>
              </h2>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                At DFNDR, we are committed to delivering the highest standards of security through continuous innovation and unwavering dedication. Our team of experts works tirelessly to stay ahead of emerging threats, ensuring that our clients receive the most advanced and reliable security solutions available. We believe in building long-term partnerships based on trust, transparency, and exceptional service, allowing businesses to thrive in a secure environment.
              </p>
            </div>

            <div className="flex justify-center lg:justify-start">
              <Link
                href="#form"
                className="inline-flex items-center justify-center px-8 py-3 bg-indigo-600 text-white font-semibold text-base md:text-lg rounded-xl shadow-lg hover:bg-indigo-700 transition-all duration-300 transform hover:-translate-y-1"
                style={{ boxShadow: 'rgba(0, 0, 0, 0.25) 0px -3px 0px 0px inset' }}
              >
                Get Protected!
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;