import { useState } from 'react';
import { MapPin } from 'lucide-react';
import { PORTFOLIO } from '../data';

const portfolioCategories = [
  { id: 'all', label: 'All Projects' },
  { id: 'cctv', label: 'CCTV & Surveillance' },
  { id: 'networking', label: 'Networking' },
  { id: 'access', label: 'Access Control' },
  { id: 'smart', label: 'Smart Solutions' },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filtered = activeCategory === 'all'
    ? PORTFOLIO
    : PORTFOLIO.filter((p) => p.category === activeCategory);

  return (
    <main className="pt-16">
      {/* Hero */}
      <section className="hero-gradient py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20" aria-hidden="true" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="badge bg-white/10 text-white border border-white/20 mb-4 inline-block">Our Portfolio</span>
          <h1 className="section-heading text-white mb-4">Our Work Speaks for Itself</h1>
          <p className="text-white/80 max-w-2xl mx-auto">
            Browse our portfolio of completed projects across Hyderabad — from residential homes to large enterprises.
          </p>
        </div>
      </section>

      <section className="section-padding bg-neutral-50 dark:bg-neutral-800/30">
        <div className="max-w-7xl mx-auto container-padding">
          {/* Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {portfolioCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat.id
                    ? 'bg-primary-600 text-white shadow-lg shadow-primary-600/30'
                    : 'bg-white dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 border border-neutral-200 dark:border-neutral-700 hover:border-primary-400'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((item) => (
              <article key={item.id} className="group relative rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 bg-white dark:bg-neutral-800">
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={item.image}
                    alt={`${item.title} - AR IT Solutions project in ${item.location}`}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 via-neutral-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-3 left-3 right-3 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="flex flex-wrap gap-1">
                      {item.tags.map((tag) => (
                        <span key={tag} className="text-xs bg-white/20 text-white px-2 py-0.5 rounded-full backdrop-blur-sm">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <h2 className="font-semibold text-neutral-900 dark:text-white mb-2 leading-snug">{item.title}</h2>
                  <p className="text-neutral-500 dark:text-neutral-400 text-sm mb-3 leading-relaxed">{item.description}</p>
                  <div className="flex items-center gap-1.5 text-xs text-neutral-400 dark:text-neutral-500">
                    <MapPin className="w-3.5 h-3.5 text-primary-500" />
                    {item.location}
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-neutral-500 dark:text-neutral-400">
              No projects in this category yet.
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white dark:bg-neutral-900">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-neutral-900 dark:text-white font-poppins mb-4">
            Want a Similar Project?
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 mb-8">
            Contact us to discuss your requirements and get a free site survey and custom proposal.
          </p>
          <a href="/contact" className="btn-primary">
            Start Your Project Today
          </a>
        </div>
      </section>
    </main>
  );
}
