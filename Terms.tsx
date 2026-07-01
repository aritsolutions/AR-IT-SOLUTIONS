export default function Privacy() {
  return (
    <main className="pt-16">
      <section className="hero-gradient py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20" aria-hidden="true" />
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h1 className="section-heading text-white mb-4">Privacy Policy</h1>
          <p className="text-white/80">Last updated: January 2025</p>
        </div>
      </section>
      <section className="section-padding bg-white dark:bg-neutral-900">
        <div className="max-w-3xl mx-auto container-padding prose prose-neutral dark:prose-invert prose-sm max-w-none">
          <div className="card p-8 md:p-10 space-y-8">
            {[
              {
                title: '1. Information We Collect',
                content: 'We collect information you provide directly, such as your name, email, phone number, and project details when you submit our contact form or newsletter subscription. We also collect usage data such as pages visited, browser type, and IP address through analytics tools to improve our services.',
              },
              {
                title: '2. How We Use Your Information',
                content: 'We use the information collected to: respond to your inquiries and provide quotes; schedule site surveys and installation appointments; send service updates and follow-ups; improve our website and services; and comply with legal obligations. We do not sell, rent, or share your personal information with third parties for marketing purposes.',
              },
              {
                title: '3. Data Storage and Security',
                content: 'Your data is stored securely on our servers with industry-standard encryption. We implement technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. Contact form submissions are stored in our secure database and only accessible to authorized AR IT Solutions staff.',
              },
              {
                title: '4. Cookies',
                content: 'We use essential cookies to ensure the website functions properly. Optional analytics cookies help us understand how visitors use our site. You can accept or decline non-essential cookies through the cookie consent banner when you first visit our website.',
              },
              {
                title: '5. Third-Party Links',
                content: 'Our website may contain links to third-party websites. We are not responsible for the privacy practices of these sites. We encourage you to read the privacy policies of any third-party sites you visit.',
              },
              {
                title: '6. Your Rights',
                content: 'You have the right to: access the personal data we hold about you; request correction of inaccurate data; request deletion of your data; opt out of marketing communications; and lodge a complaint with the relevant data protection authority.',
              },
              {
                title: '7. Contact',
                content: 'For any privacy-related queries, please contact us at info@aritsolutions.in or call +91 9392815526.',
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
