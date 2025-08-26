import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Clock, Star, Building, CheckCircle } from 'lucide-react';

const ServingSeattle = () => {
  return (
    <section className="py-16 px-4 sm:px-8 md:py-20 lg:px-16 ">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-[37px]">
          {/* Logo Section - Left */}
          <div className="flex-shrink-0  flex justify-center lg:justify-start">
            <div className="relative w-full  ">
              <Image
                src="/serving/serving.svg"
                alt="dfndr logo"
                width={593}
                height={661}
                className="w-full h-[661px] object-cover rounded-[32px]"
              />
            </div>
          </div>

          {/* Content Section - Right */}
          <div className="flex-1 max-w-[610px]">
            {/* Header */}
            <div className="mb-8">
              <h2 className="lg:text-[48px] font-semibold text-gray-900 leading-tight mb-4">
                Serving Seattle
                <br/>
                <span className="text-[#635BFF]">Businesses & Communities</span>
              </h2>
                
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-8">
                From downtown Seattle offices to Capitol Hill residential buildings and
                industrial sites in SoDo, DFNDR is proud to protect businesses
                and communities across the city.
              </p>
            </div>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">

              {/* Stat 1 */}
              <div className="bg-white  p-2 px-8 border-[#635BFF]/20">
                <div className="flex items-center gap-2 mb-2">
                  <img src="/serving/ClockUser.svg" alt="icon" className='w-[42px] h-[42px]' />
                  <span className="text-[40px] font-bold text-[#635BFF]">24/7</span>
                </div>
                <h4 className="font-bold text-gray-900 mb-1">Protection</h4>
                <p className="text-[18px] text-gray-600">
                  Reliable guards and monitoring when it matters most.
                </p>
              </div>

              {/* Stat 2 */}
              <div className="bg-white  p-2 px-8 border-[#635BFF]/20">
                <div className="flex items-center gap-2 mb-2">
                  <img src="/serving/ShieldPlus.svg" alt="icon" className='w-[42px] h-[42px]' />
                  <span className="text-[40px] font-bold text-[#635BFF]">100+</span>
                </div>
                <h4 className="font-bold text-gray-900 mb-1">Licensed Security</h4>
                <p className="text-[18px] text-gray-600">
                  Trained, certified, and ready to protect securities.
                </p>
              </div>

              {/* Stat 3 */}
              <div className="bg-white  p-2 px-8 border-[#635BFF]/20">
                <div className="flex items-center gap-2 mb-2">
                  <img src="/serving/Star.svg" alt="icon" className='w-[42px] h-[42px]' />
                  <span className="text-[40px] font-bold text-[#635BFF]">4.5+</span>
                </div>
                <h4 className="font-bold text-gray-900 mb-1">Client Feedback</h4>
                <p className="text-[18px] text-gray-600">
                  Consistently praised for professionalism and security.
                </p>
              </div>

              {/* Stat 4 */}
              <div className="bg-white  p-2 px-8 border-[#635BFF]/20">
                <div className="flex items-center gap-2 mb-2">
                  <img src="/serving/ScanSmiley.svg" alt="icon" className='w-[42px] h-[42px]' />
                  <span className="text-[40px] font-bold text-[#635BFF]">50+</span>
                </div>
                <h4 className="font-bold text-gray-900 mb-1">Businesses Secured</h4>
                <p className="text-[18px] text-gray-600">
                  Downtown offices to retail stores and complexes.
                </p>
              </div>
            </div>

            <div className="flex justify-center lg:justify-start">
              <Link
                href="#form"
                className="inline-flex items-center justify-center px-8 py-3 bg-indigo-600 text-white font-semibold text-base md:text-lg rounded-xl shadow-lg hover:bg-indigo-700 transition-all duration-300 transform hover:-translate-y-1"
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
