import React from 'react';
import Image from 'next/image';

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      title: "Unarmed Guards",
      description: "Highly trained unarmed officers available 24/7 for maintaining safety, order, and peace of mind for any property or facility.",
      icon: "/section/icon9.svg",
      priority: true
    },
    {
      id: 2,
      title: "Mobile Patrols",
      description: "Mobile scheduled patrols that deter crime, visible security presence, and respond quickly to incidents before they escalate.",
      icon: "/section/icon1.svg",
      priority: false
    },
    {
      id: 3,
      title: "Event Security",
      description: "Professional coverage for concerts, festivals, and private events with crowd control to VIP protections.",
      icon: "/section/icon2.svg",
      priority: false
    },
    {
      id: 4,
      title: "Fire Watch",
      description: "Certified fire watch officers who ensure code compliance, spotting hazards, and protecting your property when systems are offline.",
      icon: "/section/icon3.svg",
      priority: false
    },
    {
      id: 5,
      title: "Corporate & Office Security",
      description: "Workplace protection including access control, visitor management, and after-hours security for corporate environments.",
      icon: "/section/icon4.svg",
      priority: false
    },
    {
      id: 6,
      title: "Residential & HOA Security",
      description: "Tailored officers who safeguard communities, apartment complexes, and neighborhoods with personalized service.",
      icon: "/section/icon5.svg",
      priority: false
    },
    {
      id: 7,
      title: "Hotel & Hospitality Security",
      description: "Discreet, guest-focused officers trained in concierge services and security protocols to protect both property and guest experience.",
      icon: "/section/icon6.svg",
      priority: false
    },
    {
      id: 8,
      title: "Loss Prevention",
      description: "Retail-focused officers who prevent theft, reduce shrinkage, and provide a secure shopping experience for customers and staff.",
      icon: "/section/icon7.svg",
      priority: false
    },
    {
      id: 9,
      title: "Construction Security",
      description: "Site protection officers who prevent theft, reduce shrinkage, and provide a secure environment for construction projects and equipment.",
      icon: "/section/icon8.svg",
      priority: false
    }
  ];

  return (
    <section id="services" className="py-16 px-4 sm:px-8 md:py-24 lg:px-[100px]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-[48px] font-bold text-gray-900 mb-4 md:mb-6">
            Security Services That
            <br />
            We Offer In Seattle
          </h2>
          <div className="max-w-[554px] mx-auto">
            <p className="text-lg md:text-[20px] text-black">
              We deliver reliable, on-demand security solutions designed to keep Seattle businesses, events, and communities safe.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[16px]">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-[#FAFAFA] rounded-2xl overflow-hidden border-[2px] border-[#0000001A] hover:shadow-lg transition-shadow duration-300 p-[20px] flex flex-col items-start gap-[8px] justify-center"
            >
              <div className="w-[80px] h-[80px] rounded-lg flex items-center justify-center ">
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={80}
                  height={80}
                  className="text-indigo-600"
                  priority={service.priority}
                />
              </div>

              <h3 className="text-[24px] font-semibold text-gray-900 ">
                {service.title}
              </h3>
              <p className="text-[18px] text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
