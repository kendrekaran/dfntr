import React from 'react';
import Image from 'next/image';

const TrustSection = () => {
  const trustFeatures = [
    {
      id: 1,
      title: "Local Expertise",
      description: "We know Seattle and its neighborhoods, businesses, and community needs.",
      icon: "/trust/icon1.svg"
    },
    {
      id: 2,
      title: "Licensed & Fully Insured",
      description: "With $2M liability coverage, you can rest assured you're protected on all fronts.",
      icon: "/trust/icon2.svg"
    },
    {
      id: 3,
      title: "Modern Platform",
      description: "From guard tracking to reports, our platform gives you real-time visibility.",
      icon: "/trust/icon3.svg"
    }
  ];

  return (
    <section id="trust" className="py-16 px-4 sm:px-8 md:py-24 lg:px-[100px]">
      <div className=" mx-auto">
        <div className="text-center mb-8 space-y-[6px]">
          <h2 className="text-3xl sm:text-4xl md:text-[48px] font-bold text-gray-900 mb-4 md:mb-6">
            Why Seattle Trusts Dfndr?
          </h2>
          <div className=" mx-auto">
            <p className="text-lg md:text-[20px] text-black">
              Trusted, transparent, and always ready Seattle&apos;s security partner you can count on.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[20px]  mx-auto">
          {trustFeatures.map((feature) => (
            <div
              key={feature.id}
              className="bg-[#FAFAFA] p-[32px] rounded-2xl border-[2px] border-[#0000001A] hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center gap-[8px]"
            >
              <div className="w-[80px] h-[80px] rounded-full flex items-center justify-center mb-6">
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={80}
                  height={80}
                  className="w-full h-full"
                />
              </div>

              <h3 className="text-[24px] font-semibold text-gray-900">
                {feature.title}
              </h3>
              <p className="text-[18px] text-black font-medium   leading-[24px]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
