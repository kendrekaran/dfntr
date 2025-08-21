import React from 'react';

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      title: "Mobile Patrol",
      description: "Proactive, mobile security patrols monitoring your premises and deterring criminal activity 24/7.",
      image: "https://framerusercontent.com/images/CQPn0TRenkpyT1Wk1msAV74LU.png"
    },
    {
      id: 2,
      title: "Access Control",
      description: "Professional front desk security officers controlling building access and maintaining a safe environment.",
      image: "https://framerusercontent.com/images/Q9o8nbBVdGWUcLy1ppeU46rpk.png"
    },
    {
      id: 3,
      title: "Corporate Security",
      description: "Highly trained, certified, and uniformed officers providing visible deterrence and ensuring a safer environment.",
      image: "https://framerusercontent.com/images/znWyPVNYZqBZeDAB16sJghCU.png"
    },
    {
      id: 4,
      title: "Firewatch",
      description: "Our professionals conduct continuous patrols, identify fire hazards, etc. Ensure code compliance and 24/7 monitoring.",
      image: "https://framerusercontent.com/images/wj36yTYvmcu6aS7lqKPJ5CVsVI.png"
    },
    {
      id: 5,
      title: "Concierge Services",
      description: "Blending hospitality and security, our officers manage visitor access, monitor systems to ensure a secure experience.",
      image: "https://framerusercontent.com/images/z9gVOZdh14sulFyp6niGu5BwDY.png"
    },
    {
      id: 6,
      title: "Unarmed Guards",
      description: "Our officers detect crime and ensure safety without weapons. Trained in conflict & emergency response.",
      image: "https://framerusercontent.com/images/DVaPahBNU10sY8zClhwWAZILw.png"
    }
  ];

  return (
    <section id="services" className="py-16 md:py-32 px-[100px] ">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-[48px] font-bold text-gray-900 mb-6">
            We Don&apos;t Just Detect, <span className="text-indigo-600">We Defend</span>
          </h2>
          <div className="max-w-[637px] mx-auto">
            <p className="text-[20px] text-gray-700 mb-4">
              At dfndr, we put care, professionalism, and reliability at the center of every security solution.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="bg-[#F6F6F6] rounded-2xl pt-[10px] px-[12px] pb-[32px] gap-[8px] overflow-hidden border-[#0000001A] border-[1px] transition-all duration-300 transform hover:-translate-y-2 group"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover rounded-[12px] transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="flex flex-col gap-[8px] px-[16px]">
                <h3 className="text-[24px] font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-[20px] tracking-[1%] leading-[26px]">
                  {service.description}
                </p>
              </div>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-indigo-200 rounded-2xl transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;