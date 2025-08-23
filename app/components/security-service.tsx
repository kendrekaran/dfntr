import React from 'react';
import Image from 'next/image';

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      title: "Mobile Patrol",
      description: "Proactive, mobile security patrols monitoring your premises and deterring criminal activity 24/7.",
      image: "/mobile.svg",
      priority: true // First service gets priority loading
    },
    {
      id: 2,
      title: "Access Control",
      description: "Professional front desk security officers controlling building access and maintaining a safe environment.",
      image: "/access.svg",
      priority: false
    },
    {
      id: 3,
      title: "Corporate Security",
      description: "Highly trained, certified, and uniformed officers providing visible deterrence and ensuring a safer environment.",
      image: "/corporate.svg",
      priority: false
    },
    {
      id: 4,
      title: "Firewatch",
      description: "Our professionals conduct continuous patrols, identify fire hazards, etc. Ensure code compliance and 24/7 monitoring.",
      image: "/firewatch.svg",
      priority: false
    },
    {
      id: 5,
      title: "Concierge Services",
      description: "Blending hospitality and security, our officers manage visitor access, monitor systems to ensure a secure experience.",
      image: "/con.svg",
      priority: false
    },
    {
      id: 6,
      title: "Unarmed Guards",
      description: "Our officers detect crime and ensure safety without weapons. Trained in conflict & emergency response.",
      image: "/unarmed.svg",
      priority: false
    }
  ];

  return (
    <section id="services" className="py-16 px-4 sm:px-8 md:py-24 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-[48px] font-bold text-gray-900 mb-4 md:mb-6">
            We Don&apos;t Just Detect, <span className="text-indigo-600">We Defend</span>
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg md:text-xl text-gray-700">
              At dfndr, we put care, professionalism, and reliability at the center of every security solution.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-gray-100 rounded-2xl overflow-hidden border border-transparent hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative h-60 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-all duration-300 hover:scale-105 animate-fade-in"
                  priority={service.priority}
                  loading={service.priority ? "eager" : "lazy"}
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                  quality={85}
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;