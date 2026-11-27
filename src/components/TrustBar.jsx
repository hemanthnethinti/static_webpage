import { Shield, Gem, RefreshCw, Truck } from 'lucide-react';
import { trustFeatures } from '../data/jewelryData.js';

const iconMap = {
  Shield,
  Gem,
  RefreshCw,
  Truck,
};

export default function TrustBar() {
  return (
    <section aria-label="Why choose Aurelia" className="py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-7 sm:mb-9">
          <h2 className="font-heading text-2xl sm:text-3xl text-charcoal font-bold mb-2">
            Why Choose Aurelia
          </h2>
          <p className="text-stone text-xs sm:text-sm mb-3">
            Clear purity standards, transparent product documentation, and dependable service.
          </p>
          <span className="section-accent-bar" />
        </div>

        {/* Clean Purpose/Assurance Feature Cards (PH7 PurposeCards Inspiration) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
          {trustFeatures.map((feature) => {
            const IconComponent = iconMap[feature.icon];
            return (
              <div
                key={feature.id}
                className="bg-gradient-to-br from-white via-white to-ivory border border-border rounded-2xl p-4 sm:p-6 shadow-[0_8px_22px_rgba(37,37,37,0.04)] hover:-translate-y-1 hover:shadow-[0_12px_26px_rgba(37,37,37,0.07)] transition-all duration-200 flex flex-col items-start"
              >
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-gold to-gold-hover text-white flex items-center justify-center mb-4 shadow-[0_6px_14px_rgba(197,160,89,0.28)]">
                  {IconComponent && <IconComponent className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={2} />}
                </div>
                <h3 className="text-sm sm:text-base font-bold text-charcoal mb-1.5 leading-snug">
                  {feature.title}
                </h3>
                <p className="text-[11px] sm:text-xs text-stone leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
