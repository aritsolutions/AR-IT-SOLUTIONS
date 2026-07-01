import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle, CheckCircle, AlertCircle, Send } from 'lucide-react';
import { BUSINESS, SERVICES } from '../data';
import { supabase } from '../lib/supabase';

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

const initialForm: FormData = { name: '', email: '', phone: '', service: '', message: '' };

export default function Contact() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setStatus('loading');
    const { error } = await supabase.from('contact_submissions').insert({
      name: form.name,
      email: form.email,
      phone: form.phone || null,
      service: form.service || null,
      message: form.message,
    });
    if (error) {
      setStatus('error');
      setErrorMsg('Failed to send. Please call us directly at ' + BUSINESS.phone);
    } else {
      setStatus('success');
      setForm(initialForm);
    }
  };

  return (
    <main className="pt-16">
      {/* Hero */}
      <section className="hero-gradient py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20" aria-hidden="true" />
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <span className="badge bg-white/10 text-white border border-white/20 mb-4 inline-block">Contact Us</span>
          <h1 className="section-heading text-white mb-4">Get in Touch Today</h1>
          <p className="text-white/80 max-w-2xl mx-auto">
            Ready to secure your property? Contact us for a free site survey and custom quote. Mon–Sat, 9 AM–8 PM.
          </p>
        </div>
      </section>

      <section className="section-padding bg-neutral-50 dark:bg-neutral-800/30">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              {/* Contact Cards */}
              {[
                {
                  icon: Phone,
                  title: 'Call / WhatsApp',
                  lines: [BUSINESS.phone],
                  action: { label: 'Call Now', href: `tel:${BUSINESS.phone}` },
                  color: 'primary',
                },
                {
                  icon: MessageCircle,
                  title: 'WhatsApp',
                  lines: [BUSINESS.phone, 'Chat for instant response'],
                  action: { label: 'Open WhatsApp', href: `https://wa.me/${BUSINESS.whatsapp}` },
                  color: 'green',
                },
                {
                  icon: Mail,
                  title: 'Email',
                  lines: [BUSINESS.email],
                  action: { label: 'Send Email', href: `mailto:${BUSINESS.email}` },
                  color: 'secondary',
                },
              ].map(({ icon: Icon, title, lines, action, color }) => (
                <div key={title} className="card p-5 flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                    color === 'green' ? 'bg-green-100 dark:bg-green-900/30' : 'bg-primary-100 dark:bg-primary-900/30'
                  }`}>
                    <Icon className={`w-5 h-5 ${
                      color === 'green' ? 'text-green-600 dark:text-green-400' : 'text-primary-600 dark:text-primary-400'
                    }`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-neutral-900 dark:text-white text-sm mb-1">{title}</h3>
                    {lines.map((line, i) => (
                      <p key={i} className="text-neutral-500 dark:text-neutral-400 text-sm">{line}</p>
                    ))}
                    <a
                      href={action.href}
                      target={action.href.startsWith('http') ? '_blank' : undefined}
                      rel={action.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-primary-600 dark:text-primary-400 text-xs font-medium hover:underline mt-1 inline-block"
                    >
                      {action.label} →
                    </a>
                  </div>
                </div>
              ))}

              <div className="card p-5 flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent-100 dark:bg-accent-900/30 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-accent-600 dark:text-accent-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900 dark:text-white text-sm mb-1">Location</h3>
                  <p className="text-neutral-500 dark:text-neutral-400 text-sm">{BUSINESS.address}</p>
                </div>
              </div>

              <div className="card p-5 flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-secondary-100 dark:bg-secondary-900/30 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-secondary-600 dark:text-secondary-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900 dark:text-white text-sm mb-1">Working Hours</h3>
                  <p className="text-neutral-500 dark:text-neutral-400 text-sm">{BUSINESS.hours}</p>
                  <div className="flex items-center gap-1.5 mt-1.5">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-xs text-green-600 dark:text-green-400">Available Now</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="card p-6 md:p-8">
                <h2 className="text-2xl font-bold text-neutral-900 dark:text-white font-poppins mb-2">
                  Request a Free Quote
                </h2>
                <p className="text-neutral-500 dark:text-neutral-400 text-sm mb-6">
                  Fill in the form and we'll get back to you within a few hours. Or call us directly for immediate assistance.
                </p>

                {status === 'success' ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
                    </div>
                    <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-2">Message Sent!</h3>
                    <p className="text-neutral-500 dark:text-neutral-400 mb-6">
                      Thank you for contacting us. We'll get back to you within a few hours. For urgent queries, call us directly.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                      <a href={`tel:${BUSINESS.phone}`} className="btn-primary text-sm">
                        <Phone className="w-4 h-4" /> Call Now
                      </a>
                      <button onClick={() => setStatus('idle')} className="btn-secondary text-sm">
                        Send Another Message
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate aria-label="Contact form">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1.5">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          placeholder="Your full name"
                          required
                          className="input-field"
                          autoComplete="name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1.5">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          placeholder="your@email.com"
                          required
                          className="input-field"
                          autoComplete="email"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1.5">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="+91 9XXXXXXXXX"
                          className="input-field"
                          autoComplete="tel"
                        />
                      </div>
                      <div>
                        <label htmlFor="service" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1.5">
                          Service Required
                        </label>
                        <select
                          id="service"
                          name="service"
                          value={form.service}
                          onChange={handleChange}
                          className="input-field"
                        >
                          <option value="">Select a service</option>
                          {SERVICES.map((s) => (
                            <option key={s.id} value={s.title}>{s.title}</option>
                          ))}
                          <option value="Other">Other / Multiple Services</option>
                        </select>
                      </div>
                    </div>
                    <div className="mb-5">
                      <label htmlFor="message" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1.5">
                        Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        rows={5}
                        required
                        placeholder="Describe your requirements — property type, number of cameras needed, area size, etc."
                        className="input-field resize-none"
                      />
                    </div>

                    {status === 'error' && (
                      <div className="flex items-center gap-2 p-3 rounded-xl bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-400 text-sm mb-4">
                        <AlertCircle className="w-4 h-4 flex-shrink-0" />
                        {errorMsg}
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="btn-primary w-full justify-center text-base py-3.5 disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {status === 'loading' ? (
                        <>
                          <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Send Message & Get Free Quote
                        </>
                      )}
                    </button>
                    <p className="text-xs text-neutral-400 mt-3 text-center">
                      By submitting, you agree to our <a href="/privacy" className="text-primary-600 hover:underline">Privacy Policy</a>. We'll respond within 2–4 hours during business hours.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="mt-10 rounded-2xl overflow-hidden shadow-card h-72">
            <iframe
              title="AR IT Solutions Office Location - Jagadgirigutta, Kukatpally, Hyderabad"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.291614!2d78.3961!3d17.4850!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93d91c7c7e93%3A0x1e7afbaa9f0a3e4d!2sKukatpally%2C+Hyderabad%2C+Telangana!5e0!3m2!1sen!2sin!4v1700000000000%3A0"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
