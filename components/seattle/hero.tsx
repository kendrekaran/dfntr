import { Button } from "@/components/ui/button"

export default function HomePage() {
  return (
    <div className="min-h-screen overflow-hidden px-[100px] py-[80px] bg-white">
      <div className="container mx-auto px-4 py-16">
        <div className="flex  gap-12 items-start">
          {/* Left Content */}
          <div className="space-y-8 max-w-[610px]">
            <div className="space-y-6 ">
              <div
                className="flex items-center max-w-[324px] gap-2 text-black px-4 py-2 text-[16px] font-medium rounded-full"
                style={{ backgroundColor: '#ADADAD33', width: 'fit-content' }}
              >
                <img src="/favicon.ico" alt="" className="w-4 h-4" />
               Seattle&apos;s #1 Modern Security Choice 
              </div>
              <h1 className="text-[54px] font-bold text-gray-900 leading-tight">
                Professional Security Solutions in Seattle, WA
              </h1>

              <p className="text-base md:text-[20px] text-gray-700 leading-[28px] max-w-2xl">
              DFNDR Security provides trusted guard services across Seattle protecting businesses, communities, and events. Our licensed, highly trained officers deliver reliable, modern security, whether you need armed/unarmed guards, mobile patrols, or concierge protection.
              </p>

              <Button className="text-[18px] py-[20px] px-[48px] ">
                Book Security Now
              </Button>
            </div>

            {/* Testimonials */}
            <div className="grid md:grid-cols-2 gap-6 pt-8">
              <div className="space-y-2 p-[16px] bg-[#FAFAFA] rounded-[12px] ">
                <p className="text-gray-700 text-[20px] font-medium">
                &quot;dfndr made our business feel safe again. Highly recommend.&quot;
                </p>
                <p className="text-[15px] text-black">• Company Name</p>
              </div>

              <div className="space-y-2 p-[16px] bg-[#FAFAFA] rounded-[12px] ">
                <p className="text-gray-700 text-[20px] font-medium">
                  &quot;Trusted them with our event security — flawless execution.&quot;
                </p>
                <p className="text-[15px] text-black">• Company Name</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src="/seattle-1.svg"
                alt="Seattle skyline with Space Needle at sunset"
                className="w-[598px] h-[648px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 to-blue-600/20"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
