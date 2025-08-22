"use client"
import React, { useState, useRef, useEffect } from 'react';
import confetti from 'canvas-confetti';

const FormSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    company: '',
    location: ''
  });

  const [submissionState, setSubmissionState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const buttonRef = useRef<HTMLButtonElement>(null);

  const resetForm = () => {
    setSubmissionState('idle');
    setErrorMessage('');
  };

  const triggerConfetti = () => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      confetti({
        particleCount: 50,
        spread: 70,
        origin: {
          x: centerX / window.innerWidth,
          y: centerY / window.innerHeight
        },
        colors: ['#FFD700', '#FF69B4', '#00CED1', '#FF6347', '#32CD32', '#9370DB', '#FF4500', '#1E90FF'],
        gravity: 0.8,
        drift: 0.1,
        ticks: 200,
      });

      // Stop confetti after 3 seconds
      setTimeout(() => {
        confetti.reset();
      }, 3000);
    }
  };

  useEffect(() => {
    if (submissionState === 'success') {
      triggerConfetti();
    }
  }, [submissionState]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name.toLowerCase()]: value
    }));

    // Reset error state when user starts typing
    if (submissionState === 'error') {
      resetForm();
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmissionState('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        console.error('API error:', result.error);
        setSubmissionState('error');
        setErrorMessage(result.error || 'There was an error sending your message. Please try again.');
      } else {
        console.log('Email sent successfully:', result);
        setSubmissionState('success');

        // Reset form data
        setFormData({
          name: '',
          phone: '',
          email: '',
          company: '',
          location: ''
        });

        // Reset to idle after 3 seconds to allow user to see success state
        setTimeout(() => {
          setSubmissionState('idle');
        }, 3000);
      }
    } catch (err) {
      console.error('Error sending email:', err);
      setSubmissionState('error');
      setErrorMessage('There was an error sending your message. Please try again.');
    }
  };

  return (
    <section id="form" className="py-16 md:py-32 px-[100px] max-w-7xl mx-auto bg-white relative overflow-hidden">
      {/* Background Logo */}
      <div className="absolute bottom-0 right-0 z-0 ">
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
              ref={buttonRef}
              type={submissionState === 'error' ? 'button' : 'submit'}
              onClick={submissionState === 'error' ? resetForm : undefined}
              disabled={submissionState === 'loading'}
              className={`
                inline-flex items-center justify-center w-full px-[48px] py-[14px] font-semibold text-[18px] rounded-[12px] shadow-lg transition-all duration-300 transform relative overflow-hidden group
                ${submissionState === 'loading' ? 'bg-indigo-500 cursor-not-allowed' :
                  submissionState === 'success' ? 'bg-indigo-600' :
                  submissionState === 'error' ? 'bg-red-600 hover:bg-red-700' :
                  'bg-indigo-600 hover:bg-indigo-700 hover:translate-y-1'}
              `}
              style={{ boxShadow: 'rgba(0, 0, 0, 0.25) 0px -3px 0px 0px inset' }}
            >
              {/* Loading State */}
              {submissionState === 'loading' && (
                <>
                  <div className="relative z-10 flex items-center gap-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Sending...</span>
                  </div>
                </>
              )}

              {/* Success State */}
              {submissionState === 'success' && (
                <>
                  <span className="relative z-10 font-semibold">Send Message</span>
                  {/* Glow effects for success */}
                  <div className="absolute inset-0 bg-white opacity-30 blur-lg transform rotate-[-28deg] animate-pulse"></div>
                  <div className="absolute inset-0 bg-white opacity-30 blur-lg transform rotate-[-28deg] translate-x-2 animate-pulse"></div>
                </>
              )}

              {/* Error State */}
              {submissionState === 'error' && (
                <>
                  <div className="relative z-10 flex items-center gap-2">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                    <span>Try Again</span>
                  </div>
                </>
              )}

              {/* Idle State */}
              {submissionState === 'idle' && (
                <>
                  <span className="relative z-10 font-semibold">Send Message</span>
                  {/* Glow effects */}
                  <div className="absolute inset-0 bg-white opacity-20 blur-lg transform rotate-[-28deg] group-hover:opacity-30 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 bg-white opacity-20 blur-lg transform rotate-[-28deg] translate-x-2 group-hover:opacity-30 transition-opacity duration-300"></div>
                </>
              )}
            </button>

            {/* Error Message */}
            {submissionState === 'error' && (
              <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-700 text-sm text-center">{errorMessage}</p>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default FormSection;
