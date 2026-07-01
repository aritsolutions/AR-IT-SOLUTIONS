import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { BLOG_POSTS } from '../data';

export default function Blog() {
  return (
    <main className="pt-16">
      <section className="hero-gradient py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20" aria-hidden="true" />
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <span className="badge bg-white/10 text-white border border-white/20 mb-4 inline-block">Blog</span>
          <h1 className="section-heading text-white mb-4">Security Tips & Guides</h1>
          <p className="text-white/80 max-w-2xl mx-auto">
            Stay updated with the latest in CCTV, networking, access control, and smart home technology.
          </p>
        </div>
      </section>

      <section className="section-padding bg-neutral-50 dark:bg-neutral-800/30">
        <div className="max-w-7xl mx-auto container-padding">
          {/* Featured Post */}
          <article className="card mb-8 overflow-hidden group hover:-translate-y-1">
            <div className="grid md:grid-cols-2">
              <div className="relative h-64 md:h-auto overflow-hidden">
                <img
                  src={BLOG_POSTS[0].image}
                  alt={BLOG_POSTS[0].title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="badge bg-primary-600 text-white">{BLOG_POSTS[0].category}</span>
                </div>
              </div>
              <div className="p-8 flex flex-col justify-center">
                <span className="text-primary-600 dark:text-primary-400 text-xs font-semibold uppercase tracking-wider mb-2">Featured Article</span>
                <h2 className="text-2xl font-bold text-neutral-900 dark:text-white font-poppins mb-3 leading-snug">
                  {BLOG_POSTS[0].title}
                </h2>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed mb-4">{BLOG_POSTS[0].excerpt}</p>
                <div className="flex items-center gap-4 text-xs text-neutral-400 mb-6">
                  <span>{BLOG_POSTS[0].date}</span>
                  <span>·</span>
                  <span>{BLOG_POSTS[0].readTime}</span>
                  <span>·</span>
                  <span>{BLOG_POSTS[0].author}</span>
                </div>
                <Link to="/blog" className="btn-primary text-sm w-fit">
                  Read Article <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </article>

          {/* Other Posts */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                  <p className="text-neutral-500 dark:text-neutral-400 text-sm mb-4 line-clamp-3 leading-relaxed">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-neutral-400">{post.author}</span>
                    <Link to="/blog" className="text-primary-600 dark:text-primary-400 text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all">
                      Read More <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 text-center p-8 card border border-neutral-100 dark:border-neutral-700">
            <h3 className="font-bold text-neutral-900 dark:text-white text-xl mb-3">Have a Security Question?</h3>
            <p className="text-neutral-500 dark:text-neutral-400 text-sm mb-5">
              Can't find what you're looking for? Contact our security experts for personalized advice.
            </p>
            <Link to="/contact" className="btn-primary text-sm">
              Ask Our Experts
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
