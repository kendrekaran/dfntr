import React from 'react';

const LocationsSection = () => {
  const locations = [
    {
      id: 1,
      name: "Seattle",
      image: "https://framerusercontent.com/images/Qh8EJ1bhoTVUD1oP5sHJVWoxx8.png",
      alt: "Seattle location"
    },
    {
      id: 2,
      name: "Tacoma",
      image: "https://framerusercontent.com/images/Fnf38DuEY2KrpT54YwiQDrR5g.png",
      alt: "Tacoma location"
    },
    {
      id: 3,
      name: "Bellevue",
      image: "https://framerusercontent.com/images/NLW7iXJ45HlZ5YvFlJ3iYsJh12E.png",
      alt: "Bellevue location"
    }
  ];

  return (
    <section id="location" className="py-16 px-[100px]">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h2 className="text-[48px] font-semibold text-gray-900 leading-[100%] tracking-[1%] mb-4">
            Our <span className="text-indigo-600">Service </span>Locations
          </h2>
          <p className="text-[20px] text-black">Discover where dfndr is making a difference.</p>
        </div>

        {/* Locations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {locations.map((location) => (
            <div key={location.id} className="flex flex-col">
              <div className="relative rounded-2xl overflow-hidden border-[4px] border-[#FFFFFF80] hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-[4/3] relative">
                  <img
                    src={location.image}
                    alt={location.alt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="text-center mt-4">
                <p className="text-[24px]  text-black">
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
