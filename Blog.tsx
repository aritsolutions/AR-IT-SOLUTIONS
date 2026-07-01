@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&family=Inter:wght@300;400;500;600;700&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html {
    scroll-behavior: smooth;
  }

  body {
    @apply font-inter text-neutral-800 dark:text-neutral-100 dark:bg-neutral-900 antialiased;
    font-family: 'Inter', sans-serif;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Poppins', sans-serif;
    @apply font-semibold;
  }

  * {
    @apply box-border;
  }

  ::-webkit-scrollbar {
    width: 6px;
  }

  ::-webkit-scrollbar-track {
    @apply bg-neutral-100 dark:bg-neutral-800;
  }

  ::-webkit-scrollbar-thumb {
    @apply bg-primary-500 rounded-full;
  }

  ::selection {
    @apply bg-primary-200 text-primary-900;
  }
}

@layer components {
  .btn-primary {
    @apply inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-glow hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2;
  }

  .btn-secondary {
    @apply inline-flex items-center justify-center gap-2 px-6 py-3 bg-white hover:bg-neutral-50 text-primary-700 font-semibold rounded-xl transition-all duration-300 border-2 border-primary-200 hover:border-primary-400 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2;
  }

  .btn-outline {
    @apply inline-flex items-center justify-center gap-2 px-6 py-3 bg-transparent hover:bg-white/10 text-white font-semibold rounded-xl transition-all duration-300 border-2 border-white/60 hover:border-white hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent;
  }

  .btn-whatsapp {
    @apply inline-flex items-center justify-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5;
  }

  .card {
    @apply bg-white dark:bg-neutral-800 rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden;
  }

  .glass-card {
    @apply backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl;
  }

  .section-heading {
    @apply text-3xl md:text-4xl lg:text-5xl font-bold font-poppins;
  }

  .section-subheading {
    @apply text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto;
  }

  .badge {
    @apply inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-full;
  }

  .badge-primary {
    @apply badge bg-primary-100 text-primary-700 dark:bg-primary-900/50 dark:text-primary-300;
  }

  .input-field {
    @apply w-full px-4 py-3 rounded-xl border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-800 text-neutral-800 dark:text-neutral-100 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200;
  }
  
  .nav-link {
    @apply text-neutral-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors duration-200 relative;
  }
}

@layer utilities {
  .text-gradient {
    @apply bg-gradient-to-r from-primary-600 to-secondary-500 bg-clip-text text-transparent;
  }

  .bg-grid {
    background-image: radial-gradient(circle, rgba(59,130,246,0.08) 1px, transparent 1px);
    background-size: 30px 30px;
  }

  .animate-in {
    animation: slideUp 0.6s ease-out both;
  }

  .hero-gradient {
    background: linear-gradient(135deg, #1e3a8a 0%, #1d4ed8 40%, #0369a1 70%, #0ea5e9 100%);
  }

  .section-padding {
    @apply py-16 md:py-24;
  }

  .container-padding {
    @apply px-4 sm:px-6 lg:px-8;
  }
}

/* Progress Bar */
#scroll-progress {
  position: fixed;
  top: 0;
  left: 0;
  height: 3px;
  background: linear-gradient(90deg, #2563eb, #0ea5e9);
  z-index: 9999;
  transition: width 0.1s linear;
}

/* Loading Screen */
.loader-screen {
  position: fixed;
  inset: 0;
  background: linear-gradient(135deg, #1e3a8a, #1d4ed8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 99999;
  transition: opacity 0.5s ease, visibility 0.5s ease;
}

.loader-screen.hidden {
  opacity: 0;
  visibility: hidden;
}

/* Typing cursor */
.typing-cursor::after {
  content: '|';
  animation: blink 0.75s step-end infinite;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

/* Counter animation */
.counter-value {
  transition: all 0.1s ease;
}

/* Custom scrollbar for dark mode */
.dark ::-webkit-scrollbar-track {
  background: #1e293b;
}

/* Floating animation */
@keyframes floatAnimation {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
}

.float-animation {
  animation: floatAnimation 3s ease-in-out infinite;
}

/* Glowing border */
.glow-border {
  box-shadow: 0 0 0 1px rgba(59, 130, 246, 0.3), 0 0 20px rgba(59, 130, 246, 0.1);
}

/* Portfolio hover overlay */
.portfolio-overlay {
  @apply absolute inset-0 bg-gradient-to-t from-primary-900/90 via-primary-800/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300;
}

/* Service card icon */
.service-icon {
  @apply w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center text-white shadow-lg;
}

/* Gradient text animation */
@keyframes gradientShift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.animated-gradient-text {
  background: linear-gradient(90deg, #2563eb, #0ea5e9, #2563eb);
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: gradientShift 3s ease infinite;
}

/* FAQ accordion */
.faq-answer {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.4s ease, padding 0.3s ease;
}

.faq-answer.open {
  max-height: 500px;
}

/* Cookie consent */
#cookie-consent {
  transition: transform 0.4s ease;
}

#cookie-consent.hide {
  transform: translateY(100%);
}

/* WhatsApp pulse */
@keyframes waPulse {
  0% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.4); }
  70% { box-shadow: 0 0 0 15px rgba(37, 211, 102, 0); }
  100% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0); }
}

.whatsapp-pulse {
  animation: waPulse 2s infinite;
}
