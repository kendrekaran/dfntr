import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ServingSeattle = () => {
  return (
    <section className="py-12 px-4 sm:px-6 md:py-16 lg:py-20 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-10 lg:gap-[37px]">
          {/* Logo Section - Left */}
          <div className="flex-shrink-0 w-full lg:w-auto flex justify-center lg:justify-start">
            <div className="relative w-full max-w-md lg:max-w-none">
              <Image
                src="/serving/serving.svg"
                alt="dfndr logo"
                width={593}
                height={661}
                className="w-full h-64 sm:h-80 md:h-96 lg:w-[593px] lg:h-[661px] object-cover rounded-2xl lg:rounded-[32px]"
              />
            </div>
          </div>

          {/* Content Section - Right */}
          <div className="flex-1 w-full lg:max-w-[610px]">
            {/* Header */}
            <div className="mb-6 md:mb-8 text-center lg:text-left">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-semibold text-gray-900 leading-tight mb-3 md:mb-4">
                Serving Seattle
                <br/>
                <span className="text-[#635BFF]">Businesses & Communities</span>
              </h2>
                
              <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-6 md:mb-8 max-w-2xl mx-auto lg:mx-0">
                From downtown Seattle offices to Capitol Hill residential buildings and
                industrial sites in SoDo, DFNDR is proud to protect businesses
                and communities across the city.
              </p>
            </div>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mb-6 md:mb-8">
              {/* Stat 1 */}
              <div className="bg-white p-3 sm:p-4 md:p-6 lg:px-8 lg:py-2 border-[#635BFF]/20 rounded-lg sm:rounded-none">
                <div className="flex items-center gap-2 mb-2">
                  <img src="/serving/ClockUser.svg" alt="icon" className='w-8 h-8 sm:w-10 sm:h-10 md:w-[42px] md:h-[42px]' />
                  <span className="text-2xl sm:text-3xl md:text-[40px] font-bold text-[#635BFF]">24/7</span>
                </div>
                <h4 className="font-bold text-gray-900 mb-1 text-sm sm:text-base">Protection</h4>
                <p className="text-sm sm:text-base md:text-[18px] text-gray-600">
                  Reliable guards and monitoring when it matters most.
                </p>
              </div>

              {/* Stat 2 */}
              <div className="bg-white p-3 sm:p-4 md:p-6 lg:px-8 lg:py-2 border-[#635BFF]/20 rounded-lg sm:rounded-none">
                <div className="flex items-center gap-2 mb-2">
                  <img src="/serving/ShieldPlus.svg" alt="icon" className='w-8 h-8 sm:w-10 sm:h-10 md:w-[42px] md:h-[42px]' />
                  <span className="text-2xl sm:text-3xl md:text-[40px] font-bold text-[#635BFF]">100+</span>
                </div>
                <h4 className="font-bold text-gray-900 mb-1 text-sm sm:text-base">Licensed Security</h4>
                <p className="text-sm sm:text-base md:text-[18px] text-gray-600">
                  Trained, certified, and ready to protect securities.
                </p>
              </div>

              {/* Stat 3 */}
              <div className="bg-white p-3 sm:p-4 md:p-6 lg:px-8 lg:py-2 border-[#635BFF]/20 rounded-lg sm:rounded-none">
                <div className="flex items-center gap-2 mb-2">
                  <img src="/serving/Star.svg" alt="icon" className='w-8 h-8 sm:w-10 sm:h-10 md:w-[42px] md:h-[42px]' />
                  <span className="text-2xl sm:text-3xl md:text-[40px] font-bold text-[#635BFF]">4.5+</span>
                </div>
                <h4 className="font-bold text-gray-900 mb-1 text-sm sm:text-base">Client Feedback</h4>
                <p className="text-sm sm:text-base md:text-[18px] text-gray-600">
                  Consistently praised for professionalism and security.
                </p>
              </div>

              {/* Stat 4 */}
              <div className="bg-white p-3 sm:p-4 md:p-6 lg:px-8 lg:py-2 border-[#635BFF]/20 rounded-lg sm:rounded-none">
                <div className="flex items-center gap-2 mb-2">
                  <img src="/serving/ScanSmiley.svg" alt="icon" className='w-8 h-8 sm:w-10 sm:h-10 md:w-[42px] md:h-[42px]' />
                  <span className="text-2xl sm:text-3xl md:text-[40px] font-bold text-[#635BFF]">50+</span>
                </div>
                <h4 className="font-bold text-gray-900 mb-1 text-sm sm:text-base">Businesses Secured</h4>
                <p className="text-sm sm:text-base md:text-[18px] text-gray-600">
                  Downtown offices to retail stores and complexes.
                </p>
              </div>
            </div>

            <div className="flex justify-center lg:justify-start">
              <Link
                href="#form"
                className="inline-flex items-center justify-center w-full sm:w-auto px-6 sm:px-8 py-3 bg-indigo-600 text-white font-semibold text-sm sm:text-base md:text-lg rounded-xl shadow-lg hover:bg-indigo-700 transition-all duration-300 transform hover:-translate-y-1"
                style={{ boxShadow: 'rgba(0, 0, 0, 0.25) 0px -3px 0px 0px inset' }}
              >
                Get Protected
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServingSeattle;
