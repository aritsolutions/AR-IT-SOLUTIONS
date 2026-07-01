import { Star } from 'lucide-react';
import { TESTIMONIALS } from '../data';

export default function Testimonials() {
  return (
    <main className="pt-16">
      <section className="hero-gradient py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20" aria-hidden="true" />
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <span className="badge bg-white/10 text-white border border-white/20 mb-4 inline-block">Testimonials</span>
          <h1 className="section-heading text-white mb-4">What Our Clients Say</h1>
          <p className="text-white/80 max-w-2xl mx-auto">
            Real feedback from real clients across Hyderabad who trust AR IT Solutions for their security and networking needs.
          </p>
        </div>
      </section>

      <section className="section-padding bg-neutral-50 dark:bg-neutral-800/30">
        <div className="max-w-7xl mx-auto container-padding">
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {[
              { label: 'Total Reviews', value: '200+' },
              { label: 'Average Rating', value: '4.9/5' },
              { label: 'Recommendations', value: '98%' },
              { label: 'Repeat Clients', value: '75%' },
            ].map((s) => (
              <div key={s.label} className="card p-5 text-center">
                <div className="text-3xl font-bold text-gradient font-poppins mb-1">{s.value}</div>
                <div className="text-sm text-neutral-500 dark:text-neutral-400">{s.label}</div>
              </div>
            ))}
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="card p-6 flex flex-col gap-4 hover:-translate-y-1">
                <div className="flex text-yellow-400 gap-0.5">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-neutral-600 dark:text-neutral-300 text-sm leading-relaxed italic flex-1">"{t.review}"</p>
                <div className="flex items-center gap-3 pt-3 border-t border-neutral-100 dark:border-neutral-700">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    loading="lazy"
                    className="w-11 h-11 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-sm text-neutral-900 dark:text-white">{t.name}</div>
                    <div className="text-xs text-neutral-500 dark:text-neutral-400">{t.role} · {t.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Google Review CTA */}
          <div className="mt-12 text-center p-8 rounded-2xl bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 shadow-card">
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-white font-poppins mb-3">
              Happy with Our Service?
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400 mb-6">
              Share your experience and help others find reliable security solutions in Hyderabad.
            </p>
            <a
              href="#"
              className="btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Star className="w-4 h-4" />
              Leave a Google Review
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
