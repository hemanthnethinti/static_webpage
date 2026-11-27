import { useState } from 'react';
import { ArrowRight, ChevronUp } from 'lucide-react';
import { craftsmanshipImages, heritageMilestones, handleImageError } from '../data/jewelryData.js';

const craftPillars = [
  {
    name: 'Kundan',
    summary: '24K pure gold foil hand-burnished around uncut polki diamonds without synthetic adhesives.',
  },
  {
    name: 'Meenakari',
    summary: 'Kiln-fired mineral enameling in crimson, peacock green, and cobalt across reverse latticework.',
  },
  {
    name: 'Jadau',
    summary: 'Three-part artisanal process pairing sketch artists, goldsmith engravers, and gem setters.',
  },
];

export default function CraftsmanshipSection() {
  const [storyExpanded, setStoryExpanded] = useState(false);

  const handleScrollToBoutique = (e) => {
    e.preventDefault();
    const target = document.querySelector('#boutique');
    if (target) {
      const offset = 76;
      const y = target.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section id="craftsmanship" className="py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        {/* Clean Floating Two-Column Feature Card (PH7 WaterFeatureSection Inspiration) */}
        <div className="bg-gradient-to-b from-white to-ivory/90 border border-border rounded-2xl p-5 sm:p-8 lg:p-10 shadow-[0_12px_32px_rgba(37,37,37,0.05)]">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h2 className="font-heading text-2xl sm:text-3xl text-charcoal font-bold mb-2">
              Handcrafted in Jaipur Across Three Generations
            </h2>
            <p className="text-stone text-xs sm:text-sm mb-3">
              Traditional Indian karigari brought cleanly into contemporary everyday &amp; bridal jewellery.
            </p>
            <span className="section-accent-bar" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 lg:gap-10 items-center">
            {/* Left Storytelling & Craft Cards */}
            <div className="lg:col-span-6 space-y-5">
              <p className="text-stone text-sm sm:text-[15px] leading-relaxed">
                Every creation starts with a hand-drawn design in our Jaipur atelier. Our artisans unite wearable proportions with classic Kundan, Meenakari, and Jadau techniques—combining responsible sourcing with careful hand-finishing.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {craftPillars.map((pillar) => (
                  <div
                    key={pillar.name}
                    className="bg-white border border-border rounded-xl p-3.5 shadow-2xs"
                  >
                    <h3 className="text-sm font-bold text-charcoal mb-1">
                      {pillar.name}
                    </h3>
                    <p className="text-xs text-stone leading-relaxed">
                      {pillar.summary}
                    </p>
                  </div>
                ))}
              </div>

              {storyExpanded && (
                <div className="bg-white border border-border rounded-xl p-4 sm:p-5 space-y-3">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-charcoal">
                    The Aurelia Chronicle
                  </h3>
                  <div className="space-y-3">
                    {heritageMilestones.map((milestone) => (
                      <div key={milestone.year} className="border-l-2 border-gold pl-3.5">
                        <p className="text-xs font-bold text-charcoal">
                          {milestone.year} — {milestone.title}
                        </p>
                        <p className="text-xs text-stone mt-0.5 leading-relaxed">
                          {milestone.detail}
                        </p>
                      </div>
                    ))}
                  </div>
                  <div className="pt-1">
                    <a
                      href="#boutique"
                      onClick={handleScrollToBoutique}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-charcoal hover:text-gold-hover underline underline-offset-2"
                    >
                      Visit Our Flagship Boutique
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              )}

              <div>
                <button
                  type="button"
                  onClick={() => setStoryExpanded((prev) => !prev)}
                  aria-expanded={storyExpanded}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gold-soft border border-gold/40 text-charcoal text-xs sm:text-sm font-semibold hover:bg-charcoal hover:text-white hover:border-charcoal transition-colors"
                >
                  <span>
                    {storyExpanded ? 'Hide Heritage Timeline' : 'Discover Our Story'}
                  </span>
                  {storyExpanded ? (
                    <ChevronUp className="w-4 h-4" />
                  ) : (
                    <ArrowRight className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Right Framed Karigari Imagery */}
            <div className="lg:col-span-6 grid grid-cols-12 gap-3 sm:gap-4 items-center">
              <figure className="col-span-7 bg-white p-2.5 border border-border rounded-2xl shadow-[0_6px_18px_rgba(37,37,37,0.04)]">
                <div className="aspect-[4/4] sm:aspect-[4/5] rounded-xl overflow-hidden bg-cream">
                  <img
                    src={craftsmanshipImages.bench.src}
                    alt={craftsmanshipImages.bench.alt}
                    loading="lazy"
                    onError={handleImageError}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <figcaption className="pt-2 px-1 text-[11px] text-stone font-semibold">
                  Bench Engraving · 22K Gold
                </figcaption>
              </figure>

              <figure className="col-span-5 bg-white p-2.5 border border-border rounded-2xl shadow-[0_6px_18px_rgba(37,37,37,0.04)]">
                <div className="aspect-[3/4] rounded-xl overflow-hidden bg-cream">
                  <img
                    src={craftsmanshipImages.kundan.src}
                    alt={craftsmanshipImages.kundan.alt}
                    loading="lazy"
                    onError={handleImageError}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <figcaption className="pt-2 px-1 text-[11px] text-stone font-semibold">
                  Kundan Jadai Setting
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
