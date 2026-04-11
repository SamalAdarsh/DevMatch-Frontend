import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl text-base-content min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <p className="mb-6 text-sm text-gray-400">Effective Date: April 11, 2026</p>

      <div className="space-y-6">
        <section>
          <h2 className="text-xl font-semibold mb-2">1. Information We Collect</h2>
          <p>When you register for DevMatch, we collect information such as your name, email address, profile photo, and developer credentials (like GitHub URLs and tech stack). We also collect authentication data to keep your account secure.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">2. How We Use Your Information</h2>
          <p>Your information is used strictly to provide the DevMatch service. This includes creating your profile, facilitating connection requests between developers, and sending you account notifications via email. We do not sell your personal data to third parties.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">3. Data Security</h2>
          <p>We implement standard security measures to protect your personal information. However, no method of transmission over the internet or electronic storage is 100% secure. You use the service at your own risk.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">4. Contact Us</h2>
          <p>If you have questions regarding this Privacy Policy, please contact us at support@devmatchs.in.</p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;