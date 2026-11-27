import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const announcements = [
  {
    text: 'Complimentary Insured Delivery Across India · 18K & 22K Hallmarked',
    cta: 'Shop Collection',
    target: '#signature',
  },
  {
    text: 'New Bridal Edit: Handcrafted 22K Kundan & Polki Jewellery',
    cta: 'Explore Bridal',
    category: 'Bridal',
  },
  {
    text: 'Book a Personal Viewing at Our Connaught Place Flagship Salon',
    cta: 'Book Visit',
    target: '#boutique',
  },
];

export default function AnnouncementBar({ onSelectCategory, onNavigate }) {
  const [visible, setVisible] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  if (!visible) return null;

  const current = announcements[activeIndex];

  const handleAction = (e) => {
    e.preventDefault();
    if (current.category && onSelectCategory) {
      onSelectCategory(current.category);
    } else if (current.target && onNavigate) {
      onNavigate(current.target);
    }
  };

  return (
    <div
      role="region"
      aria-label="Store announcements"
      className="bg-gradient-to-r from-[#252525] via-[#302B24] to-[#252525] text-white text-[11px] sm:text-[13px]"
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-9 flex items-center justify-between gap-2">
        <button
          type="button"
          onClick={() =>
            setActiveIndex((prev) => (prev - 1 + announcements.length) % announcements.length)
          }
          className="hidden sm:inline-flex p-1 text-white/65 hover:text-gold transition-colors"
          aria-label="Previous announcement"
        >
          <ChevronLeft className="w-3.5 h-3.5" />
        </button>

        <div className="flex-1 min-w-0 flex items-center justify-center gap-2 text-center truncate">
          <span className="truncate font-medium text-white/95">{current.text}</span>
          <a
            href={current.target || '#signature'}
            onClick={handleAction}
            className="shrink-0 font-semibold text-gold hover:text-white underline underline-offset-2 transition-colors"
          >
            {current.cta}
          </a>
        </div>

        <div className="flex items-center gap-1 shrink-0">
          <button
            type="button"
            onClick={() => setActiveIndex((prev) => (prev + 1) % announcements.length)}
            className="hidden sm:inline-flex p-1 text-white/65 hover:text-gold transition-colors"
            aria-label="Next announcement"
          >
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
          <button
            type="button"
            onClick={() => setVisible(false)}
            className="p-1 text-white/65 hover:text-white transition-colors"
            aria-label="Dismiss announcement"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
