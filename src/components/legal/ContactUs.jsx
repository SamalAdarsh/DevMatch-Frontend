import React from "react";

const ContactUs = () => {
  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl text-base-content min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      <p className="mb-4">Last updated: April 2026</p>
      
      <div className="bg-base-200 p-6 rounded-lg shadow-md">
        <p className="mb-4">
          We would love to hear from you! If you have any questions, concerns, or need support with your DevMatch account, please reach out to us using the details below.
        </p>

        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-2">Email Support</h2>
          <p className="mb-4">
            <a href="mailto:support@devmatchs.in" className="text-primary hover:underline">
              codewithadarsh007@gmail.com
            </a>
            <br />
            <span className="text-sm text-gray-400">We aim to respond to all inquiries within 24-48 hours.</span>
          </p>

          <h2 className="text-xl font-semibold mb-2">Registered Address</h2>
          <p className="text-gray-300">
            DevMatch<br />
            At Near Mahatab Road, Kansbahal<br />
           Block: Rajgangpur, Dist: Sundargarh<br />
            Odisha,India - 770034
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;