import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Phone } from 'lucide-react';
import { SERVICES, CATEGORIES, BUSINESS } from '../data';

export default function Services() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [search, setSearch] = useState('');

  const filtered = SERVICES.filter((s) => {
    const matchCat = activeCategory === 'all' || s.category === activeCategory;
    const matchSearch = s.title.toLowerCase().includes(search.toLowerCase()) || s.shortDesc.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <main className="pt-16">
      {/* Hero */}
      <section className="hero-gradient py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20" aria-hidden="true" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="badge bg-white/10 text-white border border-white/20 mb-4 inline-block">All Services</span>
          <h1 className="section-heading text-white mb-4">
            Complete Security & IT Solutions
          </h1>
          <p className="text-white/80 max-w-2xl mx-auto">
            Professional CCTV installation, networking, access control, and IT support for homes and businesses across Hyderabad.
          </p>
        </div>
      </section>

      <section className="section-padding bg-neutral-50 dark:bg-neutral-800/30">
        <div className="max-w-7xl mx-auto container-padding">
          {/* Search + Filter */}
          <div className="flex flex-col md:flex-row gap-4 mb-10">
            <div className="relative flex-1">
              <input
                type="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search services..."
                aria-label="Search services"
                className="input-field pl-10"
              />
              <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeCategory === cat.id
                      ? 'bg-primary-600 text-white shadow-lg shadow-primary-600/30'
                      : 'bg-white dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 border border-neutral-200 dark:border-neutral-700 hover:border-primary-400 hover:text-primary-600'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Count */}
          <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-6">
            Showing {filtered.length} service{filtered.length !== 1 ? 's' : ''}
            {search && ` for "${search}"`}
          </p>

          {/* Grid */}
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((service) => (
                <article key={service.id} className="card group hover:-translate-y-1" id={service.id}>
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={`${service.title} - AR IT Solutions Hyderabad`}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 to-transparent" />
                    <div className="absolute bottom-3 left-3">
                      <span className="badge bg-primary-600/80 text-white text-xs backdrop-blur-sm">
                        {CATEGORIES.find(c => c.id === service.category)?.label}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="service-icon flex-shrink-0">
                        <service.icon className="w-6 h-6" />
                      </div>
                      <h2 className="font-semibold text-neutral-900 dark:text-white leading-snug">{service.title}</h2>
                    </div>
                    <p className="text-neutral-500 dark:text-neutral-400 text-sm mb-4 leading-relaxed">{service.description.slice(0, 140)}...</p>

                    <div className="mb-4">
                      <h3 className="text-xs font-semibold text-neutral-700 dark:text-neutral-300 uppercase tracking-wider mb-2">Key Features</h3>
                      <ul className="grid grid-cols-2 gap-1">
                        {service.features.slice(0, 4).map((f) => (
                          <li key={f} className="flex items-center gap-1.5 text-xs text-neutral-600 dark:text-neutral-400">
                            <CheckCircle className="w-3 h-3 text-primary-500 flex-shrink-0" />
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-5">
                      <h3 className="text-xs font-semibold text-neutral-700 dark:text-neutral-300 uppercase tracking-wider mb-2">Industries</h3>
                      <div className="flex flex-wrap gap-1">
                        {service.industries.slice(0, 3).map((ind) => (
                          <span key={ind} className="badge badge-primary text-xs">{ind}</span>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <a href={`tel:${BUSINESS.phone}`} className="btn-secondary text-xs py-2 flex-1 justify-center">
                        <Phone className="w-3 h-3" /> Call Now
                      </a>
                      <Link to="/contact" className="btn-primary text-xs py-2 flex-1 justify-center">
                        Get Quote <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-neutral-500 dark:text-neutral-400 text-lg">No services found. Try a different search.</p>
              <button onClick={() => { setSearch(''); setActiveCategory('all'); }} className="btn-primary mt-4 text-sm">
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 hero-gradient">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white font-poppins mb-4">Need a Custom Solution?</h2>
          <p className="text-white/80 mb-8">Can't find what you're looking for? We also build custom security and IT solutions tailored to your unique needs.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`tel:${BUSINESS.phone}`} className="btn-outline">
              <Phone className="w-4 h-4" /> Call: {BUSINESS.phone}
            </a>
            <Link to="/contact" className="bg-white text-primary-700 hover:bg-neutral-50 font-semibold px-6 py-3 rounded-xl text-sm inline-flex items-center gap-2 justify-center transition-all">
              Request Custom Quote <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
