import React from 'react';

const AboutUsSection = () => {
  return (
    <section id="about" className="py-16 px-4 sm:px-8 md:py-20 lg:px-16">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-8">
        {/* Left Column: Text Content */}
        <div className="flex flex-col gap-8 w-full lg:w-1/2 text-center lg:text-left">
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900 leading-tight">
              Revolutionizing security <br />
              with <span className="text-indigo-600">technology & expertise.</span>
            </h2>
            <p className="text-base md:text-lg text-gray-700 max-w-2xl mx-auto lg:mx-0">
              dfndr is redefining modern security by combining advanced technology with expert service. Built by security professionals and tech innovators, our mission is to deliver smart, reliable, and transparent protection that lets businesses stay focused on what matters most. We serve a wide range of industries — construction to healthcare, hospitality, and residential communities — with tailored solutions built for real-world demands.
            </p>
          </div>

          <div className="flex justify-center lg:justify-start">
            <a
              href="#form"
              className="inline-flex items-center justify-center px-8 py-3 bg-indigo-600 text-white font-semibold text-lg rounded-xl shadow-lg hover:bg-indigo-700 transition-all duration-300 transform hover:-translate-y-1"
            >
              Get Protected!
            </a>
          </div>

          <div className="flex justify-center lg:justify-start gap-8 pt-4">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-indigo-600">
                4.9
              </div>
              <div className="text-sm font-medium text-gray-800 mt-1">
                Clients Rating
              </div>
            </div>
            <div className="w-px bg-gray-300"></div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-indigo-600">
                10+
              </div>
              <div className="text-sm font-medium text-gray-800 mt-1">
                Industries Served
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Image */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <img 
            src="/about.svg" 
            alt="Security professionals using technology" 
            className="w-full max-w-md lg:max-w-full h-auto object-cover rounded-3xl" 
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;