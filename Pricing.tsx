import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Phone, MessageCircle, ArrowRight, ChevronDown, Star, Check,
  Shield, Clock, Users, Award, Zap,
  CheckCircle, Search, FileText, Wrench, MapPin
} from 'lucide-react';
import { BUSINESS, SERVICES, TESTIMONIALS, PORTFOLIO, STATS, FAQS, PROCESS_STEPS, BLOG_POSTS, CATEGORIES } from '../data';
import { useCountUp, useIntersectionObserver } from '../hooks';

function HeroSection() {
  const phrases = [
    'CCTV Installation',
    'IP Camera Systems',
    'Network Cabling',
    'WiFi Solutions',
    'Access Control',
    'Smart Security',
  ];
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const current = phrases[phraseIndex];
    const speed = isDeleting ? 60 : 120;
    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(current.slice(0, charIndex + 1));
        if (charIndex + 1 === current.length) {
          setTimeout(() => setIsDeleting(true), 1500);
        } else {
          setCharIndex(c => c + 1);
        }
      } else {
        setDisplayText(current.slice(0, charIndex - 1));
        if (charIndex === 0) {
          setIsDeleting(false);
          setPhraseIndex(p => (p + 1) % phrases.length);
        } else {
          setCharIndex(c => c - 1);
        }
      }
    }, speed);
    return () => clearTimeout(timer);
  });

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient"
      aria-label="Hero section"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid opacity-20" aria-hidden="true" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-secondary-500/20 rounded-full blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary-400/10 rounded-full blur-3xl" aria-hidden="true" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-500/5 rounded-full blur-3xl" aria-hidden="true" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm mb-8 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Serving Hyderabad since 2016 | Jagadgirigutta, Kukatpally
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white font-poppins leading-tight mb-4">
          Professional{' '}
          <span className="relative inline-block">
            <span className="text-secondary-300">CCTV</span>
            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-secondary-400/60 rounded-full" aria-hidden="true" />
          </span>
          {' '}&amp;
          <span className="block mt-1 md:mt-2">
            Security Solutions
          </span>
          <span className="block text-3xl sm:text-4xl md:text-5xl font-semibold text-white/90 mt-1 md:mt-2">
            in Hyderabad
          </span>
        </h1>

        {/* Typing sub-line */}
        <div className="mt-4 inline-flex items-center gap-2 text-lg md:text-xl text-white/70">
          <span>Expert</span>
          <span className="font-semibold text-secondary-300">
            {displayText}
          </span>
          <span className="typing-cursor text-secondary-300" aria-hidden="true" />
        </div>

        <p className="mt-5 text-base md:text-lg text-white/75 max-w-2xl mx-auto leading-relaxed">
          Trusted CCTV installation, networking, access control and IT support for homes, offices and commercial spaces.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href={`tel:${BUSINESS.phone}`} className="btn-primary text-base px-8 py-4 w-full sm:w-auto">
            <Phone className="w-5 h-5" />
            Call: {BUSINESS.phone}
          </a>
          <a
            href={`https://wa.me/${BUSINESS.whatsapp}?text=Hi!%20I'd%20like%20a%20free%20quote.`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp text-base px-8 py-4 w-full sm:w-auto"
          >
            <MessageCircle className="w-5 h-5" />
            WhatsApp Us
          </a>
          <Link to="/contact" className="btn-outline text-base px-8 py-4 w-full sm:w-auto">
            Get Free Quote <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        {/* Trust indicators */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-white/70 text-sm">
          {[
            { icon: Shield, text: '1-Year Warranty' },
            { icon: Clock, text: 'Same-Day Service' },
            { icon: Users, text: '1200+ Happy Clients' },
            { icon: Award, text: '8+ Years Experience' },
          ].map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-2">
              <Icon className="w-4 h-4 text-secondary-400" />
              {text}
            </div>
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 flex justify-center">
          <button
            onClick={() => document.getElementById('services-overview')?.scrollIntoView({ behavior: 'smooth' })}
            className="flex flex-col items-center gap-2 text-white/40 hover:text-white/80 transition-colors group"
            aria-label="Scroll to services"
          >
            <span className="text-xs uppercase tracking-widest">Explore</span>
            <ChevronDown className="w-5 h-5 animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
}

function StatsSection() {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <section className="py-16 bg-white dark:bg-neutral-900" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((stat) => {
            const count = useCountUp(stat.value, 2000, isVisible);
            return (
              <div key={stat.label} className="text-center">
                <div className="text-4xl md:text-5xl font-bold font-poppins text-gradient mb-2">
                  {count}{stat.suffix}
                </div>
                <div className="text-neutral-500 dark:text-neutral-400 text-sm">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ServicesOverview() {
  const [activeCategory, setActiveCategory] = useState('all');
  const featured = SERVICES.slice(0, 9);
  const filtered = activeCategory === 'all' ? featured : SERVICES.filter(s => s.category === activeCategory).slice(0, 9);

  return (
    <section id="services-overview" className="section-padding bg-neutral-50 dark:bg-neutral-800/30">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center mb-12">
          <span className="badge-primary mb-3 inline-block">Our Services</span>
          <h2 className="section-heading text-neutral-900 dark:text-white mb-4">
            Complete Security & IT Solutions
          </h2>
          <p className="section-subheading mx-auto">
            From CCTV installation to enterprise networking — we deliver end-to-end technology solutions for homes and businesses across Hyderabad.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeCategory === cat.id
                  ? 'bg-primary-600 text-white shadow-lg shadow-primary-600/30'
                  : 'bg-white dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 border border-neutral-200 dark:border-neutral-700 hover:border-primary-400 hover:text-primary-600'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((service) => (
            <div key={service.id} className="card group hover:-translate-y-1">
              <div className="relative h-44 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/70 to-transparent" />
                <div className="absolute bottom-3 left-3">
                  <span className="badge bg-primary-600/80 text-white text-xs backdrop-blur-sm">
                    {CATEGORIES.find(c => c.id === service.category)?.label}
                  </span>
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-start gap-3 mb-3">
                  <div className="service-icon flex-shrink-0 w-10 h-10">
                    <service.icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-semibold text-neutral-900 dark:text-white text-base leading-tight">{service.title}</h3>
                </div>
                <p className="text-neutral-500 dark:text-neutral-400 text-sm mb-4 leading-relaxed">{service.shortDesc}</p>
                <ul className="space-y-1 mb-4">
                  {service.features.slice(0, 3).map((f) => (
                    <li key={f} className="flex items-center gap-2 text-xs text-neutral-600 dark:text-neutral-400">
                      <CheckCircle className="w-3.5 h-3.5 text-primary-500 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="btn-primary text-sm py-2 w-full justify-center">
                  Get Free Quote
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/services" className="btn-secondary text-sm">
            View All 28 Services <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function WhyChooseUs() {
  const reasons = [
    { icon: Award, title: '8+ Years of Excellence', desc: 'Over 8 years serving Hyderabad with thousands of successful installations across residential and commercial projects.' },
    { icon: Users, title: 'Certified Technicians', desc: 'Our team of 15+ trained and certified engineers ensure every installation meets the highest quality standards.' },
    { icon: Shield, title: 'Quality Equipment', desc: 'We partner with leading global brands — Hikvision, Dahua, Axis, Cisco, and more — for reliable, long-lasting systems.' },
    { icon: Clock, title: 'Fast Turnaround', desc: 'We complete most residential installations within one day and provide same-day emergency support for critical issues.' },
    { icon: CheckCircle, title: '1-Year Warranty', desc: 'Every installation comes with a comprehensive 1-year warranty covering parts and labor — your investment is protected.' },
    { icon: Zap, title: 'AMC Plans Available', desc: 'Keep your systems running perfectly with our Annual Maintenance Contracts — scheduled checks and priority support.' },
  ];

  return (
    <section className="section-padding bg-white dark:bg-neutral-900">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="badge-primary mb-4 inline-block">Why Choose Us</span>
            <h2 className="section-heading text-neutral-900 dark:text-white mb-5">
              Hyderabad's Most Trusted<br />
              <span className="text-gradient">Security Partner</span>
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400 mb-8 leading-relaxed">
              With over 8 years of hands-on experience in Hyderabad, AR IT Solutions has become the go-to security and networking company for homes, businesses, and enterprises across Kukatpally, HITEC City, Miyapur, and beyond.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {reasons.map((r) => (
                <div key={r.title} className="flex items-start gap-3 p-4 rounded-xl bg-neutral-50 dark:bg-neutral-800 border border-neutral-100 dark:border-neutral-700 hover:border-primary-200 dark:hover:border-primary-700 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center flex-shrink-0">
                    <r.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 dark:text-white text-sm mb-1">{r.title}</h3>
                    <p className="text-neutral-500 dark:text-neutral-400 text-xs leading-relaxed">{r.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/about" className="btn-primary">
                Learn More About Us <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/contact" className="btn-secondary">
                Get Free Survey
              </Link>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/3205386/pexels-photo-3205386.jpeg"
              alt="AR IT Solutions professional CCTV installation team in Hyderabad"
              loading="lazy"
              className="w-full rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-white dark:bg-neutral-800 rounded-2xl shadow-xl p-5 border border-neutral-100 dark:border-neutral-700">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center">
                  <Star className="w-6 h-6 text-yellow-300 fill-yellow-300" />
                </div>
                <div>
                  <div className="font-bold text-xl text-neutral-900 dark:text-white">4.9/5</div>
                  <div className="text-neutral-500 text-xs">Based on 200+ reviews</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  const stepIcons: Record<string, React.ComponentType<{ className?: string }>> = {
    search: Search,
    'file-text': FileText,
    tool: Wrench,
    'check-circle': CheckCircle,
  };

  return (
    <section className="section-padding bg-neutral-50 dark:bg-neutral-800/30">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center mb-12">
          <span className="badge-primary mb-3 inline-block">How We Work</span>
          <h2 className="section-heading text-neutral-900 dark:text-white mb-4">
            Our Simple Installation Process
          </h2>
          <p className="section-subheading mx-auto">
            From initial survey to final handover, we make the installation process smooth and hassle-free.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROCESS_STEPS.map((step, i) => {
            const StepIcon = stepIcons[step.icon] || Check;
            return (
              <div key={step.step} className="relative group">
                {i < PROCESS_STEPS.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[calc(100%-8px)] w-[calc(100%-32px)] h-0.5 bg-gradient-to-r from-primary-200 to-primary-50 dark:from-primary-700 dark:to-primary-900 z-0" aria-hidden="true" />
                )}
                <div className="card p-6 text-center relative z-10 group-hover:-translate-y-1 h-full">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-600 to-secondary-500 flex items-center justify-center mx-auto mb-4 shadow-glow">
                    <StepIcon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-primary-100 dark:text-primary-900 font-poppins absolute top-4 right-5">
                    {step.step}
                  </div>
                  <h3 className="font-semibold text-neutral-900 dark:text-white mb-3">{step.title}</h3>
                  <p className="text-neutral-500 dark:text-neutral-400 text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function PortfolioPreview() {
  return (
    <section className="section-padding bg-white dark:bg-neutral-900">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center mb-12">
          <span className="badge-primary mb-3 inline-block">Portfolio</span>
          <h2 className="section-heading text-neutral-900 dark:text-white mb-4">Recent Projects</h2>
          <p className="section-subheading mx-auto">A glimpse of our work across Hyderabad — from homes to large enterprises.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PORTFOLIO.slice(0, 6).map((item) => (
            <div key={item.id} className="group relative rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1">
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="portfolio-overlay absolute inset-0" />
              <div className="absolute bottom-0 left-0 right-0 p-5 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <h3 className="font-semibold text-base mb-1">{item.title}</h3>
                <div className="flex items-center gap-1.5 text-white/80 text-xs mb-2">
                  <MapPin className="w-3 h-3" />
                  {item.location}
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <span key={tag} className="text-xs bg-white/20 px-2 py-0.5 rounded-full backdrop-blur-sm">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/portfolio" className="btn-primary">
            View Full Portfolio <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {


  return (
    <section className="section-padding bg-neutral-50 dark:bg-neutral-800/30">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center mb-12">
          <span className="badge-primary mb-3 inline-block">Testimonials</span>
          <h2 className="section-heading text-neutral-900 dark:text-white mb-4">
            What Our Clients Say
          </h2>
          <p className="section-subheading mx-auto">Real feedback from real customers across Hyderabad.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <div key={t.id} className={`card p-6 flex flex-col gap-4 hover:-translate-y-1 ${i === 0 ? 'lg:col-span-1' : ''}`}>
              <div className="flex text-yellow-400 gap-0.5">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-neutral-600 dark:text-neutral-300 text-sm leading-relaxed italic">"{t.review}"</p>
              <div className="flex items-center gap-3 mt-auto">
                <img
                  src={t.avatar}
                  alt={t.name}
                  loading="lazy"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-sm text-neutral-900 dark:text-white">{t.name}</div>
                  <div className="text-xs text-neutral-500 dark:text-neutral-400">{t.role} · {t.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/testimonials" className="btn-secondary">
            Read All Testimonials <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="section-padding bg-white dark:bg-neutral-900">
      <div className="max-w-4xl mx-auto container-padding">
        <div className="text-center mb-12">
          <span className="badge-primary mb-3 inline-block">FAQ</span>
          <h2 className="section-heading text-neutral-900 dark:text-white mb-4">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="space-y-3">
          {FAQS.slice(0, 6).map((faq, i) => (
            <div
              key={i}
              className={`card border transition-all duration-200 ${openIndex === i ? 'border-primary-200 dark:border-primary-700' : 'border-neutral-100 dark:border-neutral-700'}`}
            >
              <button
                className="w-full px-6 py-4 flex items-center justify-between text-left gap-4"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                aria-expanded={openIndex === i}
              >
                <span className="font-medium text-neutral-900 dark:text-white text-sm">{faq.q}</span>
                <ChevronDown className={`w-5 h-5 text-neutral-400 flex-shrink-0 transition-transform duration-200 ${openIndex === i ? 'rotate-180 text-primary-600' : ''}`} />
              </button>
              {openIndex === i && (
                <div className="px-6 pb-4 text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link to="/faq" className="btn-secondary text-sm">
            View All FAQs <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function BlogPreview() {
  return (
    <section className="section-padding bg-neutral-50 dark:bg-neutral-800/30">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center mb-12">
          <span className="badge-primary mb-3 inline-block">Blog</span>
          <h2 className="section-heading text-neutral-900 dark:text-white mb-4">
            Security Tips & Guides
          </h2>
          <p className="section-subheading mx-auto">Stay informed with our latest articles on CCTV, networking, and security.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {BLOG_POSTS.map((post) => (
            <article key={post.id} className="card group hover:-translate-y-1">
              <div className="relative h-44 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <span className="badge bg-primary-600/90 text-white text-xs backdrop-blur-sm">{post.category}</span>
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-3 text-xs text-neutral-400 mb-3">
                  <span>{post.date}</span>
                  <span>·</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="font-semibold text-neutral-900 dark:text-white mb-3 line-clamp-2 leading-snug group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  {post.title}
                </h3>
                <p className="text-neutral-500 dark:text-neutral-400 text-sm mb-4 line-clamp-2 leading-relaxed">{post.excerpt}</p>
                <Link to="/blog" className="text-primary-600 dark:text-primary-400 text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all">
                  Read More <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link to="/blog" className="btn-secondary text-sm">
            View All Articles <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function ContactCta() {
  return (
    <section className="section-padding bg-white dark:bg-neutral-900">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* CTA Card */}
          <div className="rounded-3xl overflow-hidden relative hero-gradient p-8 md:p-12">
            <div className="absolute inset-0 bg-grid opacity-20" aria-hidden="true" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white font-poppins mb-4">
                Get Your Free Security Consultation
              </h2>
              <p className="text-white/80 mb-8 leading-relaxed">
                Not sure what you need? Our expert will visit your site, assess your requirements, and provide a custom solution — absolutely free.
              </p>
              <ul className="space-y-3 mb-8">
                {['Free site survey', 'Custom solution design', 'Transparent pricing', 'No obligation quote'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-white/90 text-sm">
                    <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href={`tel:${BUSINESS.phone}`} className="btn-outline">
                  <Phone className="w-4 h-4" /> Call Now
                </a>
                <Link to="/contact" className="bg-white text-primary-700 hover:bg-neutral-50 font-semibold px-6 py-3 rounded-xl transition-all text-sm inline-flex items-center gap-2 justify-center">
                  Book Free Survey <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="rounded-3xl overflow-hidden shadow-card h-full min-h-[400px]">
            <iframe
              title="AR IT Solutions Location - Jagadgirigutta, Kukatpally, Hyderabad"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.291614!2d78.3961!3d17.4850!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93d91c7c7e93%3A0x1e7afbaa9f0a3e4d!2sKukatpally%2C+Hyderabad%2C+Telangana!5e0!3m2!1sen!2sin!4v1700000000000%3A0"
              width="100%"
              height="100%"
              style={{ minHeight: '400px', border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main>
      <HeroSection />
      <StatsSection />
      <ServicesOverview />
      <WhyChooseUs />
      <ProcessSection />
      <PortfolioPreview />
      <TestimonialsSection />
      <FaqSection />
      <BlogPreview />
      <ContactCta />
    </main>
  );
}
