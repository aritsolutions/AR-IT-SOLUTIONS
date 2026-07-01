export default function Terms() {
  return (
    <main className="pt-16">
      <section className="hero-gradient py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20" aria-hidden="true" />
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h1 className="section-heading text-white mb-4">Terms & Conditions</h1>
          <p className="text-white/80">Last updated: January 2025</p>
        </div>
      </section>
      <section className="section-padding bg-white dark:bg-neutral-900">
        <div className="max-w-3xl mx-auto container-padding">
          <div className="card p-8 md:p-10 space-y-8">
            {[
              {
                title: '1. Acceptance of Terms',
                content: 'By engaging the services of AR IT Solutions, you agree to be bound by these terms and conditions. These terms constitute the entire agreement between you and AR IT Solutions regarding the provision of CCTV, networking, and IT services.',
              },
              {
                title: '2. Services',
                content: 'AR IT Solutions provides professional installation, configuration, and support services for CCTV systems, networking infrastructure, access control systems, and IT equipment. All services are provided as described in the individual service quotation agreed upon before work commences.',
              },
              {
                title: '3. Quotations and Payment',
                content: 'All quotations are valid for 30 days from the date of issue. A 50% advance payment is required before commencement of work for new projects. The remaining balance is due upon project completion. Payments are accepted via bank transfer, UPI, or cash. All prices are inclusive of GST unless otherwise stated.',
              },
              {
                title: '4. Warranty',
                content: 'AR IT Solutions provides a 1-year warranty on all installations covering manufacturing defects and installation-related issues. This warranty does not cover damage caused by misuse, power surges, natural disasters, or tampering. Warranty claims must be reported within the warranty period.',
              },
              {
                title: '5. Annual Maintenance Contracts (AMC)',
                content: 'AMC agreements are subject to separate terms outlined in the AMC agreement document. AMC coverage begins from the date of the first scheduled maintenance visit after payment.',
              },
              {
                title: '6. Client Responsibilities',
                content: 'The client is responsible for providing: safe and unobstructed access to installation areas; adequate power supply and earthing; necessary permissions from building management or landlord; and accurate information about the property and requirements.',
              },
              {
                title: '7. Limitation of Liability',
                content: 'AR IT Solutions\' liability for any claims arising from our services is limited to the value of the original invoice. We are not responsible for indirect, incidental, or consequential damages. Security systems are aids to security and do not guarantee the prevention of crime.',
              },
              {
                title: '8. Governing Law',
                content: 'These terms are governed by the laws of Telangana, India. Any disputes shall be subject to the exclusive jurisdiction of the courts of Hyderabad, Telangana.',
              },
              {
                title: '9. Contact',
                content: 'For any questions about these terms, contact us at info@aritsolutions.in or +91 9392815526.',
              },
            ].map((section) => (
              <div key={section.title}>
                <h2 className="text-lg font-semibold text-neutral-900 dark:text-white font-poppins mb-3">{section.title}</h2>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">{section.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
