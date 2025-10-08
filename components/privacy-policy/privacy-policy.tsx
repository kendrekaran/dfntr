import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-indigo-50 to-purple-50 px-4 py-24 lg:py-32 lg:pt-40 md:px-8 lg:px-[100px]">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Privacy Policy
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-gray-600 mb-8">
            Last Modified: October 6th, 2025
          </p>
          <div className="w-32 h-1 bg-[#635BFF] mx-auto rounded-full"></div>
        </div>
      </div>

      {/* Content */}
      <div className="px-4 py-16 md:px-8 lg:px-[100px]">
        <div className="max-w-4xl mx-auto">
            {/* Introduction */}
            <section className="mb-12 lg:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 lg:mb-8">Introduction</h2>
              <p className="text-gray-700 leading-relaxed mb-4 text-base md:text-lg">
                DFNDR Security (&quot;DFNDR,&quot; &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) respects your privacy and is committed to
                protecting it through our compliance with this Privacy Policy.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-base md:text-lg">
                This policy explains how we collect, use, and safeguard your information when you visit
                www.dfndrsecurity.us (the &quot;Website&quot;) or interact with our services, mobile apps, or
                communications.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6 text-base md:text-lg">
                This policy applies to information collected through our Website and digital platforms. It does
                not apply to:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-3 text-base md:text-lg">
                <li>Information collected offline (such as at job sites or events), or</li>
                <li>Information collected by any third party, including affiliates or vendors linked to our Website.</li>
              </ul>
              <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                By using our Website, you agree to this Privacy Policy. If you do not agree, please discontinue
                use. We may update this policy periodically, and your continued use after changes are posted
                signifies acceptance.
              </p>
            </section>

            {/* Children Under 16 */}
            <section className="mb-12 lg:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 lg:mb-8">Children Under the Age of 16</h2>
              <p className="text-gray-700 leading-relaxed mb-4 text-base md:text-lg">
                Our Website and services are not intended for children under 16 years of age. We do not
                knowingly collect personal information from anyone under 16.
              </p>
              <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                If we discover that we have collected data from a child under 16 without verified parental
                consent, we will delete it immediately. If you believe this may have occurred, please contact us
                at <a href="mailto:support@dfndr.app" className="text-[#635BFF] hover:text-indigo-700 transition-colors duration-200">support@dfndr.app</a>.
              </p>
            </section>

            {/* Information We Collect */}
            <section className="mb-12 lg:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 lg:mb-8">Information We Collect and How We Collect It</h2>
              <p className="text-gray-700 leading-relaxed mb-4 text-base md:text-lg">
                DFNDR may collect several types of information from and about users, including:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-3 text-base md:text-lg">
                <li>Personal information such as your name, phone number, email address, and company name.</li>
                <li>Usage data such as pages visited, time spent on the site, and referral links.</li>
                <li>Technical data such as IP address, browser type, operating system, and device identifiers.</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4 text-base md:text-lg">
                We collect this information in the following ways:
              </p>
              <ol className="list-decimal pl-6 mb-6 text-gray-700 space-y-3 text-base md:text-lg">
                <li>Directly from you when you fill out a form, request services, or contact us.</li>
                <li>Automatically as you navigate the site, using cookies and analytics technologies.</li>
                <li>From third-party tools such as analytics providers that help us improve our platform.</li>
              </ol>
            </section>

            {/* Information You Provide */}
            <section className="mb-12 lg:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 lg:mb-8">Information You Provide to Us</h2>
              <p className="text-gray-700 leading-relaxed mb-4 text-base md:text-lg">
                You may provide information when you:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-3 text-base md:text-lg">
                <li>Request a quote or proposal.</li>
                <li>Sign up for updates, waitlists, or newsletters.</li>
                <li>Apply for employment or submit credentials.</li>
                <li>Communicate with our support or operations team.</li>
              </ul>
              <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                This information is used solely for the purpose you intended, such as fulfilling a service request
                or responding to your inquiry.
              </p>
            </section>

            {/* Automatic Data Collection */}
            <section className="mb-12 lg:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 lg:mb-8">Automatic Data Collection Technologies</h2>
              <p className="text-gray-700 leading-relaxed mb-4 text-base md:text-lg">
                We use cookies, web beacons, and analytics tools to automatically collect information about
                your device and browsing activity. This data helps us:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-3 text-base md:text-lg">
                <li>Understand how visitors use our Website.</li>
                <li>Improve functionality and performance.</li>
                <li>Personalize your experience.</li>
              </ul>
              <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                You can adjust your browser settings to refuse cookies, though doing so may limit some site
                functionality.
              </p>
            </section>

            {/* Opt-Out of Tracking */}
            <section className="mb-12 lg:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 lg:mb-8">Opt-Out of Tracking</h2>
              <p className="text-gray-700 leading-relaxed mb-4 text-base md:text-lg">
                You can opt out of analytics tracking and cookie-based data collection at any time by adjusting
                your browser settings or contacting <a href="mailto:support@dfndr.app" className="text-[#635BFF] hover:text-indigo-700 transition-colors duration-200">support@dfndr.app</a>.
              </p>
              <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                Some browsers may delete opt-out preferences periodically, so we recommend rechecking
                settings if you revisit our site after an extended time.
              </p>
            </section>

            {/* How We Use Your Information */}
            <section className="mb-12 lg:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 lg:mb-8">How We Use Your Information</h2>
              <p className="text-gray-700 leading-relaxed mb-4 text-base md:text-lg">
                DFNDR uses collected information to:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-3 text-base md:text-lg">
                <li>Operate and present our Website effectively.</li>
                <li>Respond to inquiries or service requests.</li>
                <li>Improve user experience and platform performance.</li>
                <li>Process job applications and manage employment inquiries.</li>
                <li>Communicate important updates and announcements.</li>
                <li>Detect and prevent fraudulent or unauthorized activity.</li>
                <li>Comply with applicable laws and legal obligations.</li>
              </ul>
              <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                We may also send updates about DFNDR services, but you can unsubscribe at any time.
              </p>
            </section>

            {/* Disclosure of Information */}
            <section className="mb-12 lg:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 lg:mb-8">Disclosure of Your Information</h2>
              <p className="text-gray-700 leading-relaxed mb-4 text-base md:text-lg">
                We do not sell or rent your personal information. We may disclose information:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-3 text-base md:text-lg">
                <li>To trusted vendors and service providers who support our operations (e.g., IT, analytics, hosting, or communications).</li>
                <li>To comply with legal requirements or court orders.</li>
                <li>In the event of a merger, acquisition, or sale of assets, where information may be transferred as part of that process.</li>
                <li>With your explicit consent.</li>
              </ul>
              <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                We may share aggregated, non-identifiable data for analytics, research, or reporting purposes.
              </p>
            </section>

            {/* Privacy Choices */}
            <section className="mb-12 lg:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 lg:mb-8">Your Privacy Choices</h2>
              <p className="text-gray-700 leading-relaxed mb-4 text-base md:text-lg">
                You have options to control how your information is used:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-3 text-base md:text-lg">
                <li><strong>Marketing Communications:</strong> You may unsubscribe from promotional emails by clicking &quot;unsubscribe&quot; or contacting us.</li>
                <li><strong>Cookies:</strong> Adjust your browser settings to manage or delete cookies.</li>
                <li><strong>Access or Deletion Requests:</strong> You may request access to, correction of, or deletion of your personal information by emailing <a href="mailto:support@dfndr.app" className="text-[#635BFF] hover:text-indigo-700 transition-colors duration-200">support@dfndr.app</a>.</li>
              </ul>
            </section>

            {/* Data Security */}
            <section className="mb-12 lg:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 lg:mb-8">Data Security</h2>
              <p className="text-gray-700 leading-relaxed mb-4 text-base md:text-lg">
                We use administrative, technical, and physical safeguards to help protect your information from
                loss, misuse, or unauthorized access.
              </p>
              <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                However, no data transmission over the internet is completely secure. By using our Website,
                you acknowledge that DFNDR cannot guarantee absolute security of transmitted information.
              </p>
            </section>

            {/* State Privacy Rights */}
            <section className="mb-12 lg:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 lg:mb-8">Your State Privacy Rights</h2>
              <p className="text-gray-700 leading-relaxed mb-4 text-base md:text-lg">
                Depending on your state of residence, you may have additional rights related to your personal
                information, such as:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-3 text-base md:text-lg">
                <li>The right to access, correct, or delete your personal data.</li>
                <li>The right to opt out of data sharing or targeted advertising.</li>
              </ul>
              <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                To exercise these rights, please contact <a href="mailto:support@dfndr.app" className="text-[#635BFF] hover:text-indigo-700 transition-colors duration-200">support@dfndr.app</a>.
              </p>
            </section>

            {/* Changes to Policy */}
            <section className="mb-12 lg:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 lg:mb-8">Changes to This Policy</h2>
              <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                We may update this Privacy Policy periodically to reflect operational or legal changes. Updates
                will appear on this page with a new &quot;Last Modified&quot; date.
              </p>
            </section>

            {/* Contact Us */}
            <section className="mb-12 lg:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 lg:mb-8">Contact Us</h2>
              <p className="text-gray-700 leading-relaxed mb-6 text-base md:text-lg">
                If you have questions, comments, or concerns about this Privacy Policy or DFNDR&apos;s privacy
                practices, please contact us:
              </p>
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-2xl border border-gray-200">
                <div className="text-gray-700 space-y-3 text-base md:text-lg">
                  <p><strong className="text-gray-900">DFNDR Security</strong></p>
                  <p><strong className="text-gray-900">Seattle, Washington</strong></p>
                  <p><a href="mailto:support@dfndr.app" className="text-[#635BFF] hover:text-indigo-700 transition-colors duration-200 font-medium">support@dfndr.app</a></p>
                  <p><a href="https://www.dfndrsecurity.us" className="text-[#635BFF] hover:text-indigo-700 transition-colors duration-200 font-medium">www.dfndrsecurity.us</a></p>
                  <p><a href="tel:253-523-3834" className="text-[#635BFF] hover:text-indigo-700 transition-colors duration-200 font-medium">(253) 523-3834</a></p>
                </div>
              </div>
            </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;