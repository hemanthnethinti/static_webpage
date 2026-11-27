import { useState, useEffect } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, ShieldCheck, RefreshCw, Truck } from 'lucide-react';
import { heroImage, handleImageError } from '../data/jewelryData.js';

const heroSlides = [
  {
    badge: '18K & 22K Fine Jewellery',
    heading: 'Modern Indian Jewellery for Everyday Moments',
    description:
      'Discover lightweight 18K everyday essentials, certified solitaires, and heirloom 22K bridal sets crafted with transparent pricing.',
    primaryCta: { label: 'Shop Collections', href: '#signature' },
    secondaryCta: { label: 'Explore Trending', href: '#trending' },
    image: heroImage.src,
    alt: heroImage.alt,
    objectPosition: 'object-[center_22%]',
  },
  {
    badge: 'Jaipur Craftsmanship',
    heading: 'Timeless Kundan & Chandbali Designs',
    description:
      'Celebratory bridal drops and festive necklace sets handcrafted by master karigars using traditional goldwork.',
    primaryCta: { label: 'View Bridal & Heritage', href: '#collections' },
    secondaryCta: { label: 'Our Craftsmanship', href: '#craftsmanship' },
    image: '/images/category-earrings.jpg',
    alt: 'Handcrafted 22K gold chandbali earrings inlaid with polki diamonds, ruby drops, and pearl tassels',
    objectPosition: 'object-center',
  },
  {
    badge: 'Private Boutique',
    heading: 'Visit Our Flagship Connaught Place Salon',
    description:
      'Book an unhurried personal consultation with our jewellery advisors for bridal styling or bespoke sizing.',
    primaryCta: { label: 'Book Appointment', href: '#boutique' },
    secondaryCta: { label: 'View Catalogue', href: '#signature' },
    image: '/images/category-necklaces.jpg',
    alt: 'Layered 22K gold Kundan and emerald heirloom rani haar necklace draped over warm carved sandstone',
    objectPosition: 'object-[70%_center]',
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handleScroll = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const offset = 76;
      const y = target.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const slide = heroSlides[current];

  return (
    <section id="home" className="pt-5 pb-6 sm:pt-7 sm:pb-10">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        {/* Soft Rounded Showcase Card Inspired by Modern Clean Retail */}
        <div className="relative bg-white border border-border rounded-2xl overflow-hidden shadow-[0_12px_34px_rgba(37,37,37,0.08)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            {/* Image Showcase Column */}
            <div className="lg:col-span-6 lg:order-2 relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto lg:h-[460px] bg-cream overflow-hidden">
              <img
                src={slide.image}
                alt={slide.alt}
                onError={handleImageError}
                className={`w-full h-full object-cover ${slide.objectPosition} transition-all duration-500`}
                loading="eager"
              />
              <div className="hidden lg:block absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-white to-transparent pointer-events-none" />
            </div>

            {/* Readable Retail Content Column */}
            <div className="lg:col-span-6 lg:order-1 px-5 py-6 sm:px-10 sm:py-9 lg:pl-12 lg:pr-8">
              <span className="inline-block px-3 py-1 rounded-full bg-gold-soft border border-gold/35 text-charcoal text-[11px] font-semibold mb-4">
                {slide.badge}
              </span>

              <h1 className="font-heading text-2xl min-[375px]:text-3xl sm:text-4xl lg:text-[2.65rem] text-charcoal font-bold leading-[1.18] mb-3.5">
                {slide.heading}
              </h1>

              <p className="text-stone text-sm sm:text-base leading-relaxed max-w-lg mb-6">
                {slide.description}
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-6">
                <a
                  href={slide.primaryCta.href}
                  onClick={(e) => handleScroll(e, slide.primaryCta.href)}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-charcoal text-white text-xs sm:text-sm font-semibold rounded-full hover:bg-gold-hover transition-colors shadow-xs"
                >
                  <span>{slide.primaryCta.label}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href={slide.secondaryCta.href}
                  onClick={(e) => handleScroll(e, slide.secondaryCta.href)}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-ivory text-charcoal border border-border text-xs sm:text-sm font-semibold rounded-full hover:border-gold transition-colors"
                >
                  <span>{slide.secondaryCta.label}</span>
                </a>
              </div>

              {/* Clean Service Pillars */}
              <div className="flex flex-wrap sm:grid sm:grid-cols-3 gap-x-4 gap-y-2 pt-4 border-t border-border text-[11px] sm:text-xs text-stone font-medium">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-gold shrink-0" />
                  <span>BIS Hallmarked</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <RefreshCw className="w-4 h-4 text-gold shrink-0" />
                  <span>Lifetime Exchange</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Truck className="w-4 h-4 text-gold shrink-0" />
                  <span>Insured Delivery</span>
                </div>
              </div>
            </div>
          </div>

          {/* Slide Navigation Controls */}
          <button
            type="button"
            onClick={() =>
              setCurrent((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1))
            }
            aria-label="Previous hero slide"
            className="hidden sm:flex absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/90 border border-border text-charcoal items-center justify-center hover:bg-charcoal hover:text-white transition-colors shadow-xs"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={() =>
              setCurrent((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1))
            }
            aria-label="Next hero slide"
            className="hidden sm:flex absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/90 border border-border text-charcoal items-center justify-center hover:bg-charcoal hover:text-white transition-colors shadow-xs"
          >
            <ChevronRight className="w-4 h-4" />
          </button>

          {/* Bottom Dots */}
          <div className="flex items-center justify-center gap-1.5 pb-4 lg:pb-0 lg:absolute lg:bottom-4 lg:right-8">
            {heroSlides.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrent(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  current === idx
                    ? 'w-6 bg-gold'
                    : 'w-2 bg-charcoal/25 hover:bg-charcoal/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
