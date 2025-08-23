import React from 'react';
import Image from 'next/image';

const LocationsSection = () => {
  const locations = [
    {
      id: 1,
      name: "Seattle",
      image: "/seattle.svg",
      alt: "Seattle location",
      priority: true // First image gets priority loading
    },
    {
      id: 2,
      name: "Tacoma",
      image: "/tacoma.svg",
      alt: "Tacoma location",
      priority: false
    },
    {
      id: 3,
      name: "Bellevue",
      image: "/bell.svg",
      alt: "Bellevue location",
      priority: false
    }
  ];

  return (
    <section id="location" className="py-16 px-4 sm:px-8 md:py-20 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900 mb-3">
            Our <span className="text-indigo-600">Service</span> Locations
          </h2>
          <p className="text-lg md:text-xl text-gray-700">
            Discover where dfndr is making a difference.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {locations.map((location) => (
            <div key={location.id} className="group cursor-pointer">
              <div className="relative rounded-2xl overflow-hidden">
                <div className="aspect-[4/3]">
                  <Image
                    src={location.image}
                    alt={location.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                    className="object-cover transition-all duration-300 group-hover:scale-105 animate-fade-in"
                    priority={location.priority}
                    loading={location.priority ? "eager" : "lazy"}
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                    quality={85}
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300"></div>
                </div>
              </div>
              <div className="text-center mt-4">
                <p className="text-xl md:text-2xl font-medium text-gray-800">
                  {location.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocationsSection;