import { useState } from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { boutiqueInfo } from '../data/jewelryData.js';

function InstagramIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function FacebookIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function TwitterIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}

function YoutubeIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <path d="m10 15 5-3-5-3v6z" />
    </svg>
  );
}

const shopLinks = [
  { label: 'Necklaces', category: 'Necklaces' },
  { label: 'Rings', category: 'Rings' },
  { label: 'Earrings', category: 'Earrings' },
  { label: 'Bridal Suites', category: 'Bridal' },
];

const quickLinks = [
  { label: 'Trending Now', href: '#trending' },
  { label: 'Featured Collections', href: '#signature' },
  { label: 'Jaipur Craftsmanship', href: '#craftsmanship' },
  { label: 'Book Appointment', href: '#boutique' },
];

const socialChannels = [
  { Icon: InstagramIcon, label: 'Instagram', handle: '@aureliafinejewels' },
  { Icon: FacebookIcon, label: 'Facebook', handle: 'Aurelia Fine Jewels' },
  { Icon: TwitterIcon, label: 'Twitter', handle: '@aureliajewels' },
  { Icon: YoutubeIcon, label: 'YouTube', handle: 'Aurelia Atelier' },
];

export default function Footer({ onSelectCategory }) {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [socialNote, setSocialNote] = useState('');

  const handleScroll = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const offset = 76;
      const y = target.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const handleCategoryClick = (e, category) => {
    e.preventDefault();
    if (onSelectCategory) {
      onSelectCategory(category);
    }
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email.trim()) {
      setEmailError('Email address is required');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError('Please enter a valid email address');
      return;
    }
    setEmailError('');
    setSubscribed(true);
  };

  const handleSocialClick = (channel) => {
    setSocialNote(`${channel.label}: ${channel.handle} (showcase demo)`);
  };

  return (
    <footer id="contact" className="bg-charcoal text-ivory border-t border-border">
      {/* Newsletter Strip */}
      <div className="border-b border-white/12">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-10 sm:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-6">
              <h3 className="font-heading text-xl sm:text-2xl text-white font-bold mb-1.5">
                Stay Informed on New Launches
              </h3>
              <p className="text-ivory/85 text-xs sm:text-sm max-w-md">
                Receive previews of seasonal collections, bridal styling guides, and salon
                event invitations.
              </p>
            </div>

            <div className="lg:col-span-6 lg:max-w-md lg:ml-auto w-full">
              {subscribed ? (
                <div className="bg-white/10 border border-gold/40 rounded-xl p-4 space-y-1.5">
                  <div className="flex items-center gap-2 text-gold text-sm font-semibold">
                    <CheckCircle className="w-4 h-4 shrink-0" />
                    <span>Thank you for subscribing!</span>
                  </div>
                  <p className="text-ivory/85 text-xs">
                    Demo subscription confirmed for {email}.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setEmail('');
                      setSubscribed(false);
                    }}
                    className="text-xs text-white underline hover:text-gold transition-colors"
                  >
                    Subscribe another email
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="space-y-1.5" noValidate>
                  <label htmlFor="newsletter-email" className="sr-only">
                    Email address for newsletter
                  </label>
                  <div className="flex gap-2">
                    <input
                      id="newsletter-email"
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (emailError) setEmailError('');
                      }}
                      placeholder="Enter your email address"
                      className="flex-1 min-w-0 px-4 py-2.5 bg-white text-charcoal text-sm placeholder-stone focus:outline-none rounded-full"
                    />
                    <button
                      type="submit"
                      className="px-5 py-2.5 bg-gold text-white font-semibold text-xs sm:text-sm hover:bg-gold-hover transition-colors rounded-full shrink-0 inline-flex items-center gap-1.5"
                      aria-label="Subscribe to newsletter"
                    >
                      <span className="hidden sm:inline">Subscribe</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                  {emailError && <p className="text-red-300 text-xs">{emailError}</p>}
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Directory Links */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-10 sm:py-12">
        <div className="grid grid-cols-2 lg:grid-cols-12 gap-8">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-4">
            <div className="flex items-center gap-2.5 mb-3.5">
              <span className="w-9 h-9 flex items-center justify-center bg-white/10 border border-gold/60 rounded-xl font-heading text-base font-bold text-gold">
                A
              </span>
              <div>
                <p className="font-heading text-lg text-white font-bold leading-none">
                  Aurelia Fine Jewels
                </p>
                <p className="text-[10px] tracking-[0.2em] uppercase text-ivory/75 mt-1">
                  Jaipur · New Delhi
                </p>
              </div>
            </div>
            <p className="text-ivory/80 text-xs sm:text-sm leading-relaxed mb-5 max-w-xs">
              Modern Indian heirloom and everyday fine jewellery in 18K and 22K gold — crafted
              for clarity, comfort, and lasting value.
            </p>
            <div className="flex flex-wrap gap-2">
              {socialChannels.map((channel) => {
                const { Icon, label } = channel;
                return (
                  <button
                    key={label}
                    type="button"
                    onClick={() => handleSocialClick(channel)}
                    className="w-9 h-9 flex items-center justify-center rounded-full border border-white/25 text-ivory/85 hover:border-gold hover:text-gold transition-colors"
                    aria-label={label}
                  >
                    <Icon className="w-4 h-4" />
                  </button>
                );
              })}
            </div>
            {socialNote && <p className="text-gold text-xs mt-2.5">{socialNote}</p>}
          </div>

          {/* Categories */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gold mb-3.5">
              Shop By Category
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {shopLinks.map((item) => (
                <li key={item.category}>
                  <a
                    href="#signature"
                    onClick={(e) => handleCategoryClick(e, item.category)}
                    className="text-ivory/85 hover:text-gold transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Explore */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gold mb-3.5">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleScroll(e, link.href)}
                    className="text-ivory/85 hover:text-gold transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Boutique Contact */}
          <div className="col-span-2 sm:col-span-1 lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gold mb-3.5">
              Boutique &amp; Concierge
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-ivory/85">
              <li>
                <a href={boutiqueInfo.phoneHref} className="hover:text-gold transition-colors">
                  {boutiqueInfo.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${boutiqueInfo.email}`}
                  className="hover:text-gold transition-colors break-all"
                >
                  {boutiqueInfo.email}
                </a>
              </li>
              <li className="text-ivory/75 leading-relaxed">
                42 Regal Avenue, Connaught Place, New Delhi 110001
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/12">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-4 flex flex-col md:flex-row items-center justify-between gap-2 text-center md:text-left">
          <p className="text-ivory/75 text-xs">
            &copy; {new Date().getFullYear()} Aurelia Fine Jewels. All rights reserved.
          </p>
          <p className="text-ivory/65 text-xs">
            Frontend showcase demo · Kundan photo by Mukeshsoni80 (CC BY-SA 4.0)
          </p>
        </div>
      </div>
    </footer>
  );
}
