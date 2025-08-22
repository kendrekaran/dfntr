"use client"
import React, { useState } from 'react';

const FormSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    company: '',
    location: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name.toLowerCase()]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to your backend
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      phone: '',
      email: '',
      company: '',
      location: ''
    });
  };

  return (
    <section id="form" className="py-16 md:py-32 px-[100px] bg-white relative overflow-hidden">
      {/* Background Logo */}
      <div className="absolute bottom-0 z-0 ">
        <img
          src="/back-logo.svg"
          alt="Background Logo"
          className="w-[1240px] h-[383px]"
        />
      </div>
      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Header Section */}
        <div className="mb-12">
          <h2 className="text-[54px] font-semibold text-gray-900 leading-[100%] tracking-[1%] mb-4">
            Get in Touch <br />
            with <span className="text-indigo-600">DFNDR </span>Today!
          </h2>
          <p className="text-[21px] text-black tracking-[1%] max-w-2xl mx-auto">
            Fill out the form below, and our team will reach out to you shortly
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-[32px] max-w-[525px] shadow-xl p-[32px] border-[#0000001A] border-[1px] mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-[14px] font-semibold text-gray-900 mb-2 tracking-[0.04em] text-left">
                NAME
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your Name"
                required
                className="w-full p-[16px] bg-[#C5C5C51A]  border-[#0000001A] border-[1px] placeholder:text-[#00000099] placeholder:text-[20px] placeholder:font-medium  rounded-lg focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all duration-300"
              />
            </div>

            <div>
              <label className="block text-[14px] font-semibold text-gray-900 mb-2 tracking-[0.04em] text-left">
                PHONE
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Phone Number"
                required
                className="w-full p-[16px] bg-[#C5C5C51A]  border-[#0000001A] border-[1px] placeholder:text-[#00000099] placeholder:text-[20px] placeholder:font-medium rounded-lg focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all duration-300"
              />
            </div>

            <div>
              <label className="block text-[14px] font-semibold text-gray-900 mb-2 tracking-[0.04em] text-left">
                EMAIL
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="someone@example.com"
                required
                className="w-full p-[16px] bg-[#C5C5C51A]  border-[#0000001A] border-[1px] placeholder:text-[#00000099] placeholder:text-[20px] placeholder:font-medium rounded-lg focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all duration-300"
              />
            </div>

            <div>
              <label className="block text-[14px] font-semibold text-gray-900 mb-2 tracking-[0.04em] text-left">
                COMPANY
              </label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                placeholder="Company Name"
                required
                className="w-full p-[16px] bg-[#C5C5C51A]  border-[#0000001A] border-[1px] placeholder:text-[#00000099] placeholder:text-[20px] placeholder:font-medium rounded-lg focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all duration-300"
              />
            </div>

            <div>
              <label className="block text-[14px] font-semibold text-gray-900 mb-2 tracking-[0.04em] text-left">
                LOCATION
              </label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                placeholder="Location"
                required
                className="w-full p-[16px] bg-[#C5C5C51A]  border-[#0000001A] border-[1px] placeholder:text-[#00000099] placeholder:text-[20px] placeholder:font-medium rounded-lg focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all duration-300"
              />
            </div>

            <button
              type="submit"
              className="inline-flex items-center justify-center w-full px-[48px] py-[14px] bg-indigo-600 text-white font-semibold text-[18px] rounded-[12px] shadow-lg hover:bg-indigo-700 transition-all duration-300 transform hover:translate-y-1 relative overflow-hidden group"
              style={{ boxShadow: 'rgba(0, 0, 0, 0.25) 0px -3px 0px 0px inset' }}
            >
              <span className="relative z-10 font-semibold">Send Message</span>
              {/* Glow effects */}
              <div className="absolute inset-0 bg-white opacity-20 blur-lg transform rotate-[-28deg] group-hover:opacity-30 transition-opacity duration-300"></div>
              <div className="absolute inset-0 bg-white opacity-20 blur-lg transform rotate-[-28deg] translate-x-2 group-hover:opacity-30 transition-opacity duration-300"></div>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default FormSection;
