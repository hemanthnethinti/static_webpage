import { ArrowRight } from 'lucide-react';
import { categories, handleImageError } from '../data/jewelryData.js';

export default function CategoryGrid({ onSelectCategory }) {
  const handleCategoryClick = (e, categoryName) => {
    e.preventDefault();
    if (onSelectCategory) {
      onSelectCategory(categoryName);
      return;
    }
    const target = document.querySelector('#signature');
    if (target) {
      const offset = 76;
      const y = target.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section id="collections" className="py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        {/* Clean Centered Section Header with Gold Accent Pill */}
        <div className="text-center max-w-2xl mx-auto mb-7 sm:mb-10">
          <h2 className="font-heading text-2xl sm:text-3xl text-charcoal font-bold mb-2">
            Shop by Category
          </h2>
          <p className="text-stone text-xs sm:text-sm mb-3">
            Explore fine gold, solitaire rings, and celebratory bridal designs crafted for lasting comfort.
          </p>
          <span className="section-accent-bar" />
        </div>

        {/* Attractive Rounded Category Cards */}
        <div id="categories" className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
          {categories.map((category) => (
            <a
              key={category.id}
              href="#signature"
              onClick={(e) => handleCategoryClick(e, category.name)}
              className="group bg-white border border-border rounded-2xl overflow-hidden flex flex-col shadow-[0_8px_22px_rgba(37,37,37,0.04)] hover:-translate-y-1 hover:shadow-[0_14px_28px_rgba(37,37,37,0.08)] hover:border-gold/70 transition-all duration-200"
            >
              <div className="aspect-[4/3] w-full overflow-hidden bg-cream">
                <img
                  src={category.image}
                  alt={`${category.name} fine jewellery collection`}
                  loading="lazy"
                  onError={handleImageError}
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-3.5 sm:p-5 flex flex-col flex-1 bg-gradient-to-b from-white to-ivory/60">
                <div className="flex items-baseline justify-between gap-2 mb-1">
                  <h3 className="text-sm sm:text-base font-bold text-charcoal group-hover:text-gold-hover transition-colors">
                    {category.name}
                  </h3>
                  <span className="text-[10px] sm:text-xs text-stone font-medium shrink-0">
                    {category.count}
                  </span>
                </div>
                <p className="text-[11px] sm:text-xs text-stone line-clamp-2 mb-3">
                  {category.description}
                </p>
                <span className="mt-auto inline-flex items-center gap-1 text-[11px] sm:text-xs font-semibold text-charcoal group-hover:text-gold-hover">
                  <span>Explore</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
