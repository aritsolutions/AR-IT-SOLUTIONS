import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQS } from '../data';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const groups = [
    { label: 'CCTV & Surveillance', faqs: FAQS.slice(0, 4) },
    { label: 'Installation & Service', faqs: FAQS.slice(4, 7) },
    { label: 'Networking & IT', faqs: FAQS.slice(7) },
  ];

  return (
    <main className="pt-16">
      <section className="hero-gradient py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20" aria-hidden="true" />
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <span className="badge bg-white/10 text-white border border-white/20 mb-4 inline-block">FAQ</span>
          <h1 className="section-heading text-white mb-4">Frequently Asked Questions</h1>
          <p className="text-white/80 max-w-2xl mx-auto">
            Find answers to common questions about our CCTV, networking, and IT services.
          </p>
        </div>
      </section>

      <section className="section-padding bg-neutral-50 dark:bg-neutral-800/30">
        <div className="max-w-3xl mx-auto container-padding">
          {groups.map((group, gi) => (
            <div key={group.label} className="mb-10">
              <h2 className="text-lg font-semibold text-neutral-900 dark:text-white font-poppins mb-4 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-primary-100 dark:bg-primary-900/50 text-primary-600 dark:text-primary-400 text-xs flex items-center justify-center font-bold">
                  {gi + 1}
                </span>
                {group.label}
              </h2>
              <div className="space-y-3">
                {group.faqs.map((faq, i) => {
                  const globalIndex = gi * 4 + i;
                  return (
                    <div
                      key={i}
                      className={`card border transition-all duration-200 ${openIndex === globalIndex ? 'border-primary-200 dark:border-primary-700' : 'border-neutral-100 dark:border-neutral-700'}`}
                    >
                      <button
                        className="w-full px-6 py-4 flex items-center justify-between text-left gap-4"
                        onClick={() => setOpenIndex(openIndex === globalIndex ? null : globalIndex)}
                        aria-expanded={openIndex === globalIndex}
                      >
                        <span className="font-medium text-neutral-900 dark:text-white text-sm">{faq.q}</span>
                        <ChevronDown className={`w-5 h-5 text-neutral-400 flex-shrink-0 transition-transform duration-200 ${openIndex === globalIndex ? 'rotate-180 text-primary-600' : ''}`} />
                      </button>
                      {openIndex === globalIndex && (
                        <div className="px-6 pb-4 text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}

          <div className="text-center p-8 card border border-primary-100 dark:border-primary-800 mt-8">
            <h3 className="font-bold text-neutral-900 dark:text-white mb-3">Still Have Questions?</h3>
            <p className="text-neutral-500 dark:text-neutral-400 text-sm mb-5">
              Our team is available Mon–Sat from 9 AM to 8 PM. Call or WhatsApp us anytime!
            </p>
            <a href="/contact" className="btn-primary text-sm">
              Contact Our Experts
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
