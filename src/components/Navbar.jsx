import { useState, useEffect, useCallback } from 'react';
import { Menu, X, Heart, Calendar } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Categories', href: '#collections' },
  { label: 'Trending', href: '#trending' },
  { label: 'Catalogue', href: '#signature' },
  { label: 'Craftsmanship', href: '#craftsmanship' },
  { label: 'Boutique', href: '#boutique' },
];

export default function Navbar({ wishlistCount = 0, onOpenSaved }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeNav, setActiveNav] = useState('#home');

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 36);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isMobileOpen) {
        setIsMobileOpen(false);
      }
    };
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMobileOpen]);

  const handleNavClick = useCallback((e, href) => {
    e.preventDefault();
    setActiveNav(href);
    setIsMobileOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const offset = 76;
      const y = target.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 left-0 right-0 z-40 transition-all duration-300 border-b border-border ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-[0_4px_16px_rgba(37,37,37,0.06)]'
            : 'bg-white shadow-[0_2px_10px_rgba(37,37,37,0.03)]'
        }`}
      >
        <nav
          aria-label="Primary navigation"
          className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8"
        >
          <div className="flex items-center justify-between h-15 sm:h-17 gap-4">
            {/* Brand Mark */}
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="flex items-center gap-2.5 shrink-0 group"
            >
              <span className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center bg-gold-soft border border-gold/50 rounded-xl font-heading text-base sm:text-lg font-bold text-charcoal group-hover:border-gold transition-colors">
                A
              </span>
              <div className="flex flex-col leading-none">
                <span className="font-heading text-base sm:text-lg font-bold text-charcoal tracking-wide">
                  AURELIA
                </span>
                <span className="text-[9px] font-bold tracking-[0.18em] uppercase text-stone mt-0.5">
                  Fine Jewels
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center lg:gap-5 xl:gap-7">
              {navLinks.map((link) => {
                const isActive = activeNav === link.href;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`relative py-1.5 text-[13.5px] font-semibold whitespace-nowrap transition-colors duration-200 ${
                      isActive ? 'text-charcoal' : 'text-stone hover:text-charcoal'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute left-0 right-0 bottom-0 h-[2.5px] rounded-full bg-gradient-to-r from-gold to-[#DEC38A]" />
                    )}
                  </a>
                );
              })}
            </div>

            {/* Right Pill CTA Cluster */}
            <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
              <button
                type="button"
                onClick={() => onOpenSaved && onOpenSaved()}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-border bg-ivory hover:border-gold text-charcoal text-xs font-semibold transition-colors"
                aria-label={`View wishlist (${wishlistCount} saved)`}
              >
                <Heart
                  className={`w-3.5 h-3.5 ${
                    wishlistCount > 0 ? 'fill-gold text-gold' : 'text-charcoal'
                  }`}
                />
                <span className="hidden sm:inline">Wishlist</span>
                <span className="text-[11px] text-stone">({wishlistCount})</span>
              </button>

              <a
                href="#boutique"
                onClick={(e) => handleNavClick(e, '#boutique')}
                className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-charcoal text-white text-xs font-semibold hover:bg-gold-hover transition-colors whitespace-nowrap shadow-xs"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Book Appointment</span>
              </a>

              <button
                type="button"
                onClick={() => setIsMobileOpen((prev) => !prev)}
                className="lg:hidden p-2 -mr-1 text-charcoal hover:text-gold-hover transition-colors"
                aria-label={isMobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
                aria-expanded={isMobileOpen}
              >
                {isMobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Navigation Drawer */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-opacity duration-300 ${
          isMobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden={!isMobileOpen}
      >
        <div
          className="absolute inset-0 bg-charcoal/50 backdrop-blur-xs"
          onClick={() => setIsMobileOpen(false)}
        />

        <aside
          aria-label="Mobile navigation"
          className={`absolute top-0 right-0 h-full w-72 max-w-[85vw] sm:w-80 bg-white shadow-xl transform transition-transform duration-300 ease-in-out flex flex-col ${
            isMobileOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between px-5 py-4 border-b border-border">
            <div className="flex items-center gap-2.5">
              <span className="w-8 h-8 flex items-center justify-center bg-gold-soft border border-gold/50 rounded-xl font-heading text-sm font-bold text-charcoal">
                A
              </span>
              <span className="font-heading text-lg font-bold text-charcoal">Aurelia</span>
            </div>
            <button
              type="button"
              onClick={() => setIsMobileOpen(false)}
              className="p-2 -mr-2 text-stone hover:text-charcoal transition-colors"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex flex-col py-3 overflow-y-auto flex-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-5 py-3 text-sm font-semibold text-charcoal hover:text-gold-hover hover:bg-ivory transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="px-5 pt-5 mt-2 border-t border-border">
              <a
                href="#boutique"
                onClick={(e) => handleNavClick(e, '#boutique')}
                className="block text-center px-5 py-3 text-xs font-semibold rounded-full bg-charcoal text-white hover:bg-gold-hover transition-colors"
              >
                Book Appointment
              </a>
            </div>
          </div>

          <div className="px-5 py-4 border-t border-border text-xs text-stone">
            Connaught Place, New Delhi
          </div>
        </aside>
      </div>
    </>
  );
}
