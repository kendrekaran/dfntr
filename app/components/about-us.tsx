import React from 'react';

const AboutUsSection = () => {
  const stats = [
    {
      id: 1,
      number: "4.9",
      label: "Clients Rating",
      color: "text-indigo-600"
    },
    {
      id: 2,
      number: "10+",
      label: "Industries Served",
      color: "text-indigo-600"
    }
  ];

  return (
    <section id="about" className="py-16 px-[100px]">
      <div className="flex flex-row max-w-7xl gap-2 mx-auto">
        <div className="flex flex-col min-w-3xl gap-[32px]">
            {/* Header Section */}
            <div className="flex flex-col gap-[12px]">
            <div className="">
                <h2 className="text-[54px] ma font-semibold text-gray-900 leading-[100%] tracking-[1%]">
                Revolutionizing security <br />
                with <span className="text-indigo-600">technology & expertise.</span>
                </h2>
            </div>
            <div className="max-w-xl">
                <p className="text-[20px] text-black tracking-[1%]">
                dfndr is redefining modern security by combining advanced technology with expert service. Built by security professionals and tech innovators, our mission is to deliver smart, reliable, and transparent protection that lets businesses stay focused on what matters most. We serve a wide range of industries — construction to healthcare, hospitality, and residential communities — with tailored solutions built for real-world demands.
                </p>
            </div>
            </div>

            {/* CTA Button */}
            <div className="flex-shrink-0">
                <a
                href="#form"
                className="inline-flex items-center justify-center px-[36px] py-[16px] bg-indigo-600 text-white font-semibold text-lg rounded-[12px] shadow-lg hover:bg-indigo-700 transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden group"
                >
                <span className="relative z-10 text-[18px] font-semibold">Get Protected!</span>
                {/* Glow effects */}
                <div className="absolute inset-0 bg-white opacity-20 blur-lg transform rotate-[-28deg] group-hover:opacity-30 transition-opacity duration-300"></div>
                <div className="absolute inset-0 bg-white opacity-20 blur-lg transform rotate-[-28deg] translate-x-2 group-hover:opacity-30 transition-opacity duration-300"></div>
                </a>
            </div>

            {/* Stats and CTA Section */}
            <div className="flex flex-col lg:flex-row items-start justify-between gap-12">
            {/* Stats */}
            <div className="flex flex-col sm:flex-row gap-8">
                <div className="text-center">
                    <div className="text-[48px] font-bold text-indigo-600 mb-2">
                    4.9
                    </div>
                    <div className="text-[16px] font-medium text-gray-900">
                    Clients Rating
                    </div>
                </div>
                {/* Divider between stats */}
                <div className="hidden sm:block w-px h-20 bg-gray-300 mx-4"></div>
                <div className="text-center">
                    <div className="text-[48px] font-bold text-indigo-600 mb-2">
                    10+
                    </div>
                    <div className="text-[16px] font-medium text-gray-900">
                    Industries Served
                    </div>
                </div>
            </div>
            </div>
        </div>
        <div className="flex justify-start items-start max-w-[525px] max-h-[498px]">
            <img src="/about.svg" alt="about-us" className="w-full h-full object-cover rounded-[32px]" />
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
