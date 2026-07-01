import { Link } from 'react-router-dom';
import { Check, X, Phone, ArrowRight, Shield } from 'lucide-react';
import { PRICING_PLANS, BUSINESS } from '../data';

export default function Pricing() {
  return (
    <main className="pt-16">
      {/* Hero */}
      <section className="hero-gradient py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20" aria-hidden="true" />
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <span className="badge bg-white/10 text-white border border-white/20 mb-4 inline-block">Transparent Pricing</span>
          <h1 className="section-heading text-white mb-4">Simple, Honest Pricing</h1>
          <p className="text-white/80 max-w-2xl mx-auto">
            No hidden charges. No surprises. We provide detailed quotes after a free site survey for your exact requirements.
          </p>
        </div>
      </section>

      <section className="section-padding bg-neutral-50 dark:bg-neutral-800/30">
        <div className="max-w-5xl mx-auto container-padding">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PRICING_PLANS.map((plan) => (
              <div
                key={plan.id}
                className={`card p-6 flex flex-col relative ${
                  plan.highlight
                    ? 'ring-2 ring-primary-500 shadow-glow-lg'
                    : ''
                }`}
              >
                {plan.badge && (
                  <div className={`absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold ${
                    plan.highlight ? 'bg-primary-600 text-white' : 'bg-neutral-200 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300'
                  }`}>
                    {plan.badge}
                  </div>
                )}
                <div className="mb-6">
                  <h2 className="text-xl font-bold text-neutral-900 dark:text-white font-poppins mb-2">{plan.name}</h2>
                  <div className="flex items-baseline gap-1 mb-3">
                    <span className="text-sm text-neutral-500">₹</span>
                    <span className="text-4xl font-bold text-neutral-900 dark:text-white font-poppins">{plan.price}</span>
                    <span className="text-sm text-neutral-500 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-neutral-500 dark:text-neutral-400 text-sm leading-relaxed">{plan.description}</p>
                </div>

                <ul className="space-y-3 mb-6 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-neutral-700 dark:text-neutral-300">{f}</span>
                    </li>
                  ))}
                  {plan.notIncluded.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 opacity-50">
                      <X className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-neutral-500">{f}</span>
                    </li>
                  ))}
                </ul>

                {plan.price === 'Custom' ? (
                  <a href={`tel:${BUSINESS.phone}`} className={`w-full justify-center ${plan.highlight ? 'btn-primary' : 'btn-secondary'}`}>
                    <Phone className="w-4 h-4" /> Call for Quote
                  </a>
                ) : (
                  <Link to="/contact" className={`w-full justify-center ${plan.highlight ? 'btn-primary' : 'btn-secondary'}`}>
                    Get Started <ArrowRight className="w-4 h-4" />
                  </Link>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 md:p-8 card border border-primary-100 dark:border-primary-800">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center flex-shrink-0">
                <Shield className="w-7 h-7 text-white" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="font-bold text-neutral-900 dark:text-white text-lg font-poppins mb-2">All Plans Include</h3>
                <div className="flex flex-wrap gap-4 text-sm text-neutral-600 dark:text-neutral-400 justify-center md:justify-start">
                  {['Free site survey', 'Professional installation', 'System testing & demo', 'Mobile app setup', '1-year warranty', 'WhatsApp support'].map((item) => (
                    <span key={item} className="flex items-center gap-1.5">
                      <Check className="w-4 h-4 text-green-500" />
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              <Link to="/contact" className="btn-primary flex-shrink-0">
                Get Custom Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* AMC Section */}
      <section className="section-padding bg-white dark:bg-neutral-900">
        <div className="max-w-4xl mx-auto container-padding text-center">
          <span className="badge-primary mb-4 inline-block">Annual Maintenance Contracts</span>
          <h2 className="text-3xl font-bold text-neutral-900 dark:text-white font-poppins mb-4">
            Protect Your Investment with AMC
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 mb-8 max-w-2xl mx-auto">
            Our AMC plans provide scheduled maintenance, priority support, and peace of mind for your CCTV, networking, and IT systems.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left mb-8">
            {[
              { title: 'Basic AMC', price: '2,999/year', features: ['2 maintenance visits', 'Phone support', 'Basic troubleshooting'] },
              { title: 'Standard AMC', price: '5,999/year', features: ['4 maintenance visits', 'Priority phone & WhatsApp', 'Parts at cost price', '48-hr on-site response'] },
              { title: 'Premium AMC', price: '11,999/year', features: ['Monthly maintenance visits', '24-hr priority response', 'Parts included*', 'Health reports', 'Dedicated technician'] },
            ].map((amc) => (
              <div key={amc.title} className="card p-5 border border-neutral-100 dark:border-neutral-700">
                <h3 className="font-semibold text-neutral-900 dark:text-white mb-1">{amc.title}</h3>
                <div className="text-primary-600 dark:text-primary-400 font-bold text-lg mb-3">₹{amc.price}</div>
                <ul className="space-y-2">
                  {amc.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-xs text-neutral-600 dark:text-neutral-400">
                      <Check className="w-3.5 h-3.5 text-green-500 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="text-xs text-neutral-400 mb-6">* Parts coverage excludes deliberate damage. Pricing based on system size — contact for exact quote.</p>
          <Link to="/contact" className="btn-primary">
            Inquire About AMC Plans <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
