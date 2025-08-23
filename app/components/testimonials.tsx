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
    <section id="testimonials" className="py-16 px-4 sm:px-8 md:py-24 lg:px-16 ">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900 mb-4">
            What <span className="text-indigo-600">Our Clients</span> Say
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
            Hear from businesses that trust dfndr for their security needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-indigo-100/50 border border-indigo-200/50 rounded-2xl p-6 flex flex-col"
            >
              <div className="mb-4">
                <svg
                  viewBox="0 0 16 15"
                  className="w-5 h-5 text-indigo-500"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M 1 14 L 1 8.081 C 1 3.729 2.752 1.387 6.257 1.055 L 6.848 1 L 6.848 3.932 L 6.435 3.987 C 5.017 4.135 4.308 5.37 4.308 7.694 L 4.308 8.579 L 6.848 8.579 L 6.848 14 Z M 15 3.932 L 14.587 3.987 C 13.169 4.135 12.46 5.37 12.46 7.694 L 12.46 8.579 L 15 8.579 L 15 14 L 9.152 14 L 9.152 8.081 C 9.152 3.729 10.904 1.387 14.409 1.055 L 15 1 Z" />
                </svg>
              </div>

              <blockquote className="flex-grow">
                <p className="text-base md:text-lg text-gray-800 leading-relaxed">
                  {testimonial.text}
                </p>
              </blockquote>
              
              <footer className="mt-6">
                <p className="font-semibold text-gray-900 text-sm">{testimonial.author}</p>
              </footer>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;