import { useState, useMemo, useCallback } from 'react';
import { Heart, ArrowRight } from 'lucide-react';
import {
  signatureProducts,
  featuredCurations,
  handleImageError,
} from '../data/jewelryData.js';
import ProductCard from './ProductCard.jsx';

const filterTabs = ['All', 'Necklaces', 'Rings', 'Earrings', 'Bridal'];

export default function SignatureCollection({
  activeFilter,
  onFilterChange,
  wishlist,
  onToggleWishlist,
  showWishlistOnly,
  onToggleWishlistOnly,
  onQuickView,
}) {
  const [sortBy, setSortBy] = useState('featured');

  const handleTabSelect = useCallback(
    (tab) => {
      onToggleWishlistOnly(false);
      onFilterChange(tab);
    },
    [onFilterChange, onToggleWishlistOnly]
  );

  const filteredProducts = useMemo(() => {
    let items = [...signatureProducts];
    if (activeFilter !== 'All') {
      items = items.filter((p) => p.category === activeFilter.toLowerCase());
    }
    if (showWishlistOnly) {
      items = items.filter((p) => wishlist.has(p.id));
    }
    if (sortBy === 'price-asc') {
      items.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
      items.sort((a, b) => b.price - a.price);
    }
    return items;
  }, [activeFilter, showWishlistOnly, wishlist, sortBy]);

  return (
    <section id="signature" className="py-10 sm:py-14">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        {/* Centered Header */}
        <div className="text-center max-w-2xl mx-auto mb-7 sm:mb-9">
          <h2 className="font-heading text-2xl sm:text-3xl text-charcoal font-bold mb-2">
            Featured Collections
          </h2>
          <p className="text-stone text-xs sm:text-sm mb-3">
            Browse all {filteredProducts.length}{' '}
            {filteredProducts.length === 1 ? 'design' : 'designs'} with clear gold purity details and INR pricing.
          </p>
          <span className="section-accent-bar" />
        </div>

        {/* 3 Clean Curated Edit Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-5 mb-8">
          {featuredCurations.map((curation) => (
            <button
              key={curation.id}
              type="button"
              onClick={() => handleTabSelect(curation.filterCategory)}
              className="group text-left bg-white border border-border rounded-2xl overflow-hidden flex items-center gap-3.5 p-3.5 shadow-[0_6px_18px_rgba(37,37,37,0.04)] hover:-translate-y-0.5 hover:shadow-[0_12px_24px_rgba(37,37,37,0.07)] hover:border-gold/70 transition-all duration-200"
            >
              <div className="w-20 h-20 sm:w-22 sm:h-22 shrink-0 bg-ivory border border-border rounded-xl overflow-hidden">
                <img
                  src={curation.image}
                  alt={curation.title}
                  loading="lazy"
                  onError={handleImageError}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="min-w-0 flex-1">
                <span className="inline-block px-2 py-0.5 rounded-full bg-gold-soft text-charcoal text-[10px] font-semibold mb-1">
                  {curation.tag}
                </span>
                <h3 className="text-sm sm:text-base font-bold text-charcoal truncate">
                  {curation.title}
                </h3>
                <p className="text-[11px] sm:text-xs text-stone line-clamp-2 mt-0.5 mb-1.5">
                  {curation.subtitle}
                </p>
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-charcoal group-hover:text-gold-hover">
                  View {curation.filterCategory}
                  <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </button>
          ))}
        </div>

        {/* Filter Chips & Sort Controls */}
        <div className="bg-white border border-border rounded-2xl p-3 sm:p-4 mb-6 shadow-[0_4px_14px_rgba(37,37,37,0.03)] flex flex-col md:flex-row md:items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
            {filterTabs.map((tab) => {
              const isSelected = !showWishlistOnly && activeFilter === tab;
              return (
                <button
                  key={tab}
                  type="button"
                  onClick={() => handleTabSelect(tab)}
                  aria-pressed={isSelected}
                  className={`px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold transition-colors ${
                    isSelected
                      ? 'bg-charcoal text-white shadow-2xs'
                      : 'bg-ivory text-charcoal border border-border hover:border-gold'
                  }`}
                >
                  {tab}
                </button>
              );
            })}

            {wishlist.size > 0 && (
              <button
                type="button"
                onClick={() => onToggleWishlistOnly((prev) => !prev)}
                aria-pressed={showWishlistOnly}
                className={`inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold border transition-colors ${
                  showWishlistOnly
                    ? 'bg-gold border-gold text-white'
                    : 'bg-gold-soft border-gold/50 text-charcoal hover:border-gold'
                }`}
              >
                <Heart
                  className={`w-3.5 h-3.5 ${
                    showWishlistOnly ? 'fill-white' : 'fill-gold text-gold'
                  }`}
                />
                Saved ({wishlist.size})
              </button>
            )}
          </div>

          <div className="flex items-center gap-2 self-start md:self-auto">
            <label htmlFor="catalog-sort" className="text-xs font-medium text-stone shrink-0">
              Sort by:
            </label>
            <select
              id="catalog-sort"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-3.5 py-1.5 bg-ivory border border-border rounded-full text-xs sm:text-sm font-medium text-charcoal focus:outline-none focus:border-gold"
            >
              <option value="featured">Featured</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-12 border border-border rounded-2xl bg-white px-6 shadow-xs">
            <p className="font-heading text-xl text-charcoal font-bold mb-2">
              No pieces match this selection
            </p>
            <p className="text-sm text-stone mb-5">
              Reset your filter or browse the complete catalogue to view all designs.
            </p>
            <button
              type="button"
              onClick={() => handleTabSelect('All')}
              className="px-6 py-2.5 bg-charcoal text-white text-xs font-semibold rounded-full hover:bg-gold-hover transition-colors"
            >
              Show All Designs
            </button>
          </div>
        ) : (
          /* Responsive Product Grid:
             - Mobile (320-767px): 2 columns
             - Tablet (768-1279px): 3 columns
             - Desktop (1280px+): 4 columns */
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-5 lg:gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                isWishlisted={wishlist.has(product.id)}
                onToggleWishlist={onToggleWishlist}
                onQuickView={onQuickView}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
