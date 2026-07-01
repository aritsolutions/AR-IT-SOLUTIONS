import { Link } from 'react-router-dom';
import { Shield, Award, Users, CheckCircle, ArrowRight, Target, Eye, Heart, Phone } from 'lucide-react';
import { BUSINESS, STATS } from '../data';
import { useCountUp, useIntersectionObserver } from '../hooks';

const team = [
  {
    name: 'Abdul Rauf',
    role: 'Founder & CEO',
    specialty: 'CCTV & Security Systems Expert',
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg',
    exp: '12+ Years',
  },
  {
    name: 'Rahul Sharma',
    role: 'Senior Network Engineer',
    specialty: 'Structured Cabling & WiFi Specialist',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
    exp: '8+ Years',
  },
  {
    name: 'Vijay Kumar',
    role: 'IT Systems Engineer',
    specialty: 'Server Infrastructure & IT Support',
    image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg',
    exp: '6+ Years',
  },
  {
    name: 'Srinivas Reddy',
    role: 'CCTV Installation Lead',
    specialty: 'IP Camera & Access Control',
    image: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg',
    exp: '7+ Years',
  },
];

const brands = [
  'Hikvision', 'Dahua', 'CP Plus', 'Axis', 'Cisco', 'D-Link', 'TP-Link', 'ZKTeco'
];

const milestones = [
  { year: '2016', event: 'Founded in Kukatpally, Hyderabad with a vision to deliver affordable security solutions.' },
  { year: '2018', event: 'Expanded into enterprise networking — structured cabling and server infrastructure.' },
  { year: '2020', event: 'Achieved 500+ project milestone with an all-star client satisfaction rating.' },
  { year: '2022', event: 'Launched Smart Home Automation and advanced IP surveillance services.' },
  { year: '2024', event: 'Surpassed 1,500 projects — serving homes, schools, hospitals, and enterprises across Hyderabad.' },
];

function StatsRow() {
  const { ref, isVisible } = useIntersectionObserver();
  return (
    <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {STATS.map((stat) => {
        const count = useCountUp(stat.value, 2000, isVisible);
        return (
          <div key={stat.label} className="text-center p-6 card">
            <div className="text-3xl font-bold font-poppins text-gradient mb-1">
              {count}{stat.suffix}
            </div>
            <div className="text-sm text-neutral-500 dark:text-neutral-400">{stat.label}</div>
          </div>
        );
      })}
    </div>
  );
}

export default function About() {
  return (
    <main className="pt-16">
      {/* Hero */}
      <section className="hero-gradient py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20" aria-hidden="true" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="badge bg-white/10 text-white border border-white/20 mb-4 inline-block">About AR IT Solutions</span>
          <h1 className="section-heading text-white mb-5">
            Hyderabad's Trusted Security & <span className="text-secondary-300">Networking Experts</span>
          </h1>
          <p className="text-white/80 max-w-2xl mx-auto text-lg">
            Since 2016, we've been delivering professional CCTV, networking, and IT solutions to homes and businesses across Hyderabad with a commitment to quality, transparency, and client satisfaction.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-white dark:bg-neutral-900">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="badge-primary mb-4 inline-block">Our Story</span>
              <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-5 font-poppins">
                Built on Trust, Driven by Technology
              </h2>
              <div className="space-y-4 text-neutral-600 dark:text-neutral-400 leading-relaxed">
                <p>
                  AR IT Solutions was founded in 2016 in Jagadgirigutta, Kukatpally, Hyderabad, with a simple yet powerful mission: to make professional security and networking solutions accessible to every home and business.
                </p>
                <p>
                  Starting with residential CCTV installations, we quickly grew to serve commercial establishments, schools, hospitals, apartment complexes, and large enterprises. Our reputation for quality workmanship and honest pricing spread through word-of-mouth across Hyderabad.
                </p>
                <p>
                  Today, with 15+ certified technicians and 1,500+ successful projects, we remain committed to delivering cutting-edge technology with the personal touch and reliability that our clients have come to expect.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 mt-8">
                <div className="flex items-center gap-3 p-4 rounded-xl bg-primary-50 dark:bg-primary-900/20 border border-primary-100 dark:border-primary-800">
                  <Target className="w-5 h-5 text-primary-600" />
                  <div>
                    <div className="font-semibold text-sm text-neutral-900 dark:text-white">Our Mission</div>
                    <div className="text-xs text-neutral-500 dark:text-neutral-400">Deliver professional security solutions</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-xl bg-secondary-50 dark:bg-secondary-900/20 border border-secondary-100 dark:border-secondary-800">
                  <Eye className="w-5 h-5 text-secondary-600" />
                  <div>
                    <div className="font-semibold text-sm text-neutral-900 dark:text-white">Our Vision</div>
                    <div className="text-xs text-neutral-500 dark:text-neutral-400">Safest, most connected city</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-xl bg-accent-50 dark:bg-accent-900/20 border border-accent-100 dark:border-accent-800">
                  <Heart className="w-5 h-5 text-accent-600" />
                  <div>
                    <div className="font-semibold text-sm text-neutral-900 dark:text-white">Our Values</div>
                    <div className="text-xs text-neutral-500 dark:text-neutral-400">Integrity, Quality, Service</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg"
                alt="AR IT Solutions team working on network installation"
                loading="lazy"
                className="w-full rounded-2xl shadow-2xl"
              />
              <div className="absolute -top-4 -right-4 bg-white dark:bg-neutral-800 rounded-2xl shadow-xl p-4 border border-neutral-100 dark:border-neutral-700">
                <div className="flex items-center gap-2">
                  <Award className="w-6 h-6 text-primary-600" />
                  <div>
                    <div className="font-bold text-sm text-neutral-900 dark:text-white">8+ Years</div>
                    <div className="text-xs text-neutral-500">of Excellence</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-neutral-50 dark:bg-neutral-800/30">
        <div className="max-w-7xl mx-auto container-padding">
          <StatsRow />
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-white dark:bg-neutral-900">
        <div className="max-w-4xl mx-auto container-padding">
          <div className="text-center mb-12">
            <span className="badge-primary mb-3 inline-block">Our Journey</span>
            <h2 className="text-3xl font-bold text-neutral-900 dark:text-white font-poppins">Growth Milestones</h2>
          </div>
          <div className="space-y-6 relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-600 to-secondary-500" aria-hidden="true" />
            {milestones.map((m, i) => (
              <div key={i} className="flex gap-6 relative">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-600 to-secondary-500 flex items-center justify-center flex-shrink-0 z-10 shadow-glow text-white font-bold text-xs">
                  {m.year.slice(2)}
                </div>
                <div className="card p-5 flex-1 hover:-translate-y-0.5">
                  <div className="font-bold text-primary-600 dark:text-primary-400 text-sm mb-1">{m.year}</div>
                  <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">{m.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-neutral-50 dark:bg-neutral-800/30">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-12">
            <span className="badge-primary mb-3 inline-block">Our Team</span>
            <h2 className="text-3xl font-bold text-neutral-900 dark:text-white font-poppins mb-4">Meet the Experts</h2>
            <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
              Our certified technicians bring years of hands-on experience to every project.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <div key={member.name} className="card p-6 text-center group hover:-translate-y-1">
                <div className="relative w-20 h-20 mx-auto mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    loading="lazy"
                    className="w-full h-full rounded-full object-cover shadow-lg"
                  />
                  <div className="absolute inset-0 rounded-full ring-2 ring-primary-500/30 group-hover:ring-primary-500 transition-all" />
                </div>
                <h3 className="font-semibold text-neutral-900 dark:text-white mb-1">{member.name}</h3>
                <p className="text-primary-600 dark:text-primary-400 text-sm font-medium mb-2">{member.role}</p>
                <p className="text-neutral-500 dark:text-neutral-400 text-xs mb-3">{member.specialty}</p>
                <span className="badge-primary text-xs">{member.exp}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands */}
      <section className="py-14 bg-white dark:bg-neutral-900">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-8">
            <h2 className="text-lg font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider text-sm">
              Trusted Brand Partners
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {brands.map((brand) => (
              <div key={brand} className="px-6 py-3 bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-xl text-neutral-600 dark:text-neutral-300 font-semibold text-sm hover:border-primary-400 hover:text-primary-600 dark:hover:text-primary-400 transition-all">
                {brand}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 hero-gradient">
        <div className="max-w-3xl mx-auto container-padding text-center">
          <h2 className="text-3xl font-bold text-white font-poppins mb-4">
            Ready to Work With Us?
          </h2>
          <p className="text-white/80 mb-8">
            Get in touch for a free consultation and let us design the perfect security solution for your property.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`tel:${BUSINESS.phone}`} className="btn-outline">
              <Phone className="w-4 h-4" /> Call: {BUSINESS.phone}
            </a>
            <Link to="/contact" className="bg-white text-primary-700 hover:bg-neutral-50 font-semibold px-6 py-3 rounded-xl text-sm inline-flex items-center gap-2 justify-center transition-all">
              Get Free Quote <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
