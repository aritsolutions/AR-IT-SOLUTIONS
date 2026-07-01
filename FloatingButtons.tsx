import { Link } from 'react-router-dom';
import { Shield, Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="pt-16 min-h-screen bg-neutral-50 dark:bg-neutral-900 flex items-center justify-center">
      <div className="max-w-lg mx-auto px-4 text-center">
        <div className="relative mb-8">
          <div className="text-9xl font-bold font-poppins text-neutral-200 dark:text-neutral-700 select-none">
            404
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary-600 to-secondary-500 flex items-center justify-center shadow-glow">
              <Shield className="w-10 h-10 text-white" />
            </div>
          </div>
        </div>
        <h1 className="text-2xl font-bold text-neutral-900 dark:text-white font-poppins mb-3">
          Page Not Found
        </h1>
        <p className="text-neutral-500 dark:text-neutral-400 mb-8 leading-relaxed">
          The page you're looking for doesn't exist or has been moved. Let us help you find what you need.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link to="/" className="btn-primary">
            <Home className="w-4 h-4" /> Go to Homepage
          </Link>
          <button
            onClick={() => window.history.back()}
            className="btn-secondary"
          >
            <ArrowLeft className="w-4 h-4" /> Go Back
          </button>
        </div>
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { label: 'Services', href: '/services' },
            { label: 'Portfolio', href: '/portfolio' },
            { label: 'Pricing', href: '/pricing' },
            { label: 'Contact', href: '/contact' },
          ].map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className="px-4 py-2 rounded-xl bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-sm text-neutral-600 dark:text-neutral-400 hover:text-primary-600 hover:border-primary-300 transition-all"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
