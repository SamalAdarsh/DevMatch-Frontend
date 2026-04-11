import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl text-base-content min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Terms & Conditions</h1>
      <p className="mb-6 text-sm text-gray-400">Effective Date: April 11, 2026</p>

      <div className="space-y-6">
        <section>
          <h2 className="text-xl font-semibold mb-2">1. Acceptance of Terms</h2>
          <p>By accessing and using DevMatch (devmatchs.in), you accept and agree to be bound by the terms and provisions of this agreement.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">2. User Conduct</h2>
          <p>You agree to use DevMatch only for lawful purposes. You must not use the platform to harass, abuse, or spam other developers. We reserve the right to terminate accounts that violate these guidelines.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">3. Platform Liability</h2>
          <p>DevMatch acts solely as a platform to connect developers. We are not responsible for the outcome of any collaborations, projects, or communications that occur between users outside of our platform.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">4. Governing Law</h2>
          <p>These terms and conditions are governed by and construed in accordance with the laws of Maharashtra, India, and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.</p>
        </section>
      </div>
    </div>
  );
};

export default TermsAndConditions;