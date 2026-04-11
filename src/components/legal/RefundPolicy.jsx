import React from "react";

const RefundPolicy = () => {
  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl text-base-content min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Cancellation & Refund Policy</h1>
      <p className="mb-6 text-sm text-gray-400">Effective Date: April 11, 2026</p>

      <div className="space-y-6">
        <section>
          <h2 className="text-xl font-semibold mb-2">1. Digital Services</h2>
          <p>DevMatch provides digital networking services and premium features for developers. Due to the immediate access to these digital services upon purchase, all sales are considered final.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">2. Refund Eligibility</h2>
          <p>We do not offer refunds or credits for partially used billing periods or accidental purchases once the premium features have been unlocked on your account.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">3. Cancellations</h2>
          <p>If you have subscribed to a recurring payment plan, you may cancel your subscription at any time through your account settings. Cancellation will prevent future billing, but no refunds will be issued for past charges.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">4. Payment Failures</h2>
          <p>If money is deducted from your bank account but the transaction fails to reflect on DevMatch, the amount will be automatically refunded by your bank or the payment gateway (Razorpay) within 5-7 business days.</p>
        </section>
      </div>
    </div>
  );
};

export default RefundPolicy;