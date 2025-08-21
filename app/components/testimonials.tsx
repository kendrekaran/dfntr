import React from 'react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      text: "DFNDR has completely transformed our security operations. Their proactive approach and advanced technology have given us peace of mind, allowing us to focus on our core business activities.",
      author: "Director of Facilities"
    },
    {
      id: 2,
      text: "DFNDR has completely transformed our security operations. Their proactive approach and advanced technology have given us peace of mind, allowing us to focus on our core business activities.",
      author: "Property Manager"
    },
    {
      id: 3,
      text: "DFNDR has completely transformed our security operations. Their proactive approach and advanced technology have given us peace of mind, allowing us to focus on our core business activities.",
      author: "Operations Manager"
    }
  ];

  return (
    <section id="testimonials" className="py-16 md:py-32 px-[100px]">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h2 className="text-[48px] font-semibold text-black leading-[100%] tracking-[1%] mb-4">
            What <span className="text-indigo-600">Our Clients</span> Say
          </h2>
          <p className="text-[20px] text-black tracking-[1%] max-w-2xl mx-auto">
            Hear from businesses that trust dfndr for their security needs.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-[#635BFF33] border-[3px] border-[#635BFF1A] rounded-[24px] p-[20px]"
            >
              {/* Quote Icon */}
              <div className="mb-4">
                <svg
                  viewBox="0 0 16 15"
                  className="w-[14px] h-[14px] text-indigo-600"
                  fill="currentColor"
                >
                  <path d="M 1 14 L 1 8.081 C 1 3.729 2.752 1.387 6.257 1.055 L 6.848 1 L 6.848 3.932 L 6.435 3.987 C 5.017 4.135 4.308 5.37 4.308 7.694 L 4.308 8.579 L 6.848 8.579 L 6.848 14 Z M 15 3.932 L 14.587 3.987 C 13.169 4.135 12.46 5.37 12.46 7.694 L 12.46 8.579 L 15 8.579 L 15 14 L 9.152 14 L 9.152 8.081 C 9.152 3.729 10.904 1.387 14.409 1.055 L 15 1 Z" />
                </svg>
              </div>

              {/* Testimonial Text */}
              <p className="text-[22px] text-black leading-[150%]">
                {testimonial.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
