
export default function HomePage() {
  return (
    <div className="min-h-screen overflow-hidden px-4 md:px-8 lg:px-[100px] py-16 lg:py-[80px] bg-white">
      <div className="container max-w-7xl mx-auto px-4 py-8 md:py-16">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
          {/* Left Content */}
          <div className="space-y-6 md:space-y-8 w-full lg:max-w-[610px]">
            <div className="space-y-4 md:space-y-6">
              <div
                className="flex items-center max-w-full sm:max-w-[324px] gap-2 text-black px-3 md:px-4 py-2 text-sm md:text-[16px] font-medium rounded-full"
                style={{ backgroundColor: '#ADADAD33', width: 'fit-content' }}
              >
                <img src="/favicon.ico" alt="" className="w-4 h-4" />
                Seattle&apos;s #1 Modern Security Choice 
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-bold text-gray-900 leading-tight">
                Professional Security Solutions in Seattle, WA
              </h1>

              <p className="text-base md:text-lg lg:text-[20px] text-gray-700 leading-6 md:leading-7 lg:leading-[28px] max-w-2xl">
                DFNDR Security provides trusted guard services across Seattle protecting businesses, communities, and events. Our licensed, highly trained officers deliver reliable, modern security, whether you need armed/unarmed guards, mobile patrols, or concierge protection.
              </p>

              <button className="inline-flex items-center justify-center px-8 py-3 bg-[#635BFF] text-white font-semibold text-lg rounded-xl shadow-lg hover:bg-indigo-700 transition-all duration-300 transform hover:-translate-y-1">
                Book Security Now
              </button>
            </div>

            {/* Testimonials */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 pt-6 md:pt-8">
              <div className="space-y-2 p-4 md:p-[16px] bg-[#FAFAFA] rounded-[12px]">
                <p className="text-gray-700 text-lg md:text-xl lg:text-[20px] font-medium">
                  &quot;dfndr made our business feel safe again. Highly recommend.&quot;
                </p>
                <p className="text-sm md:text-[15px] text-black">• Company Name</p>
              </div>

              <div className="space-y-2 p-4 md:p-[16px] bg-[#FAFAFA] rounded-[12px]">
                <p className="text-gray-700 text-lg md:text-xl lg:text-[20px] font-medium">
                  &quot;Trusted them with our event security — flawless execution.&quot;
                </p>
                <p className="text-sm md:text-[15px] text-black">• Company Name</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative w-full lg:w-auto mt-8 lg:mt-0">
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src="/seattle-1.svg"
                alt="Seattle skyline with Space Needle at sunset"
                className="w-full h-64 sm:h-80 md:h-96 lg:w-[598px] lg:h-[648px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#635BFF]/20 to-blue-600/20"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
