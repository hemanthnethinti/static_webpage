import { useState, useMemo } from 'react';
import { signatureProducts } from '../data/jewelryData.js';
import ProductCard from './ProductCard.jsx';

export default function TrendingSection({
  wishlist,
  onToggleWishlist,
  onQuickView,
}) {
  const [activeTab, setActiveTab] = useState('trending');

  const displayItems = useMemo(() => {
    if (activeTab === 'new') {
      return signatureProducts.filter((p) => p.isNew).slice(0, 4);
    }
    return signatureProducts.filter((p) => p.isTrending).slice(0, 4);
  }, [activeTab]);

  return (
    <section id="trending" className="py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        {/* Clean Centered Section Header + Pill Tabs */}
        <div className="flex flex-col items-center text-center mb-7 sm:mb-9">
          <h2 className="font-heading text-2xl sm:text-3xl text-charcoal font-bold mb-2">
            {activeTab === 'trending' ? 'Trending Now' : 'New Arrivals'}
          </h2>
          <p className="text-stone text-xs sm:text-sm max-w-md mb-4">
            Customer-favourite 18K &amp; 22K designs curated for everyday poise and festive occasions.
          </p>
          <span className="section-accent-bar mb-5" />

          <div
            role="tablist"
            aria-label="Filter seasonal jewellery"
            className="inline-flex bg-white border border-border rounded-full p-1 shadow-2xs"
          >
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'trending'}
              onClick={() => setActiveTab('trending')}
              className={`px-4 sm:px-5 py-1.5 text-xs font-semibold rounded-full transition-colors ${
                activeTab === 'trending'
                  ? 'bg-charcoal text-white shadow-2xs'
                  : 'text-stone hover:text-charcoal'
              }`}
            >
              Trending Now
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'new'}
              onClick={() => setActiveTab('new')}
              className={`px-4 sm:px-5 py-1.5 text-xs font-semibold rounded-full transition-colors ${
                activeTab === 'new'
                  ? 'bg-charcoal text-white shadow-2xs'
                  : 'text-stone hover:text-charcoal'
              }`}
            >
              New Arrivals
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
          {displayItems.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              isWishlisted={wishlist.has(product.id)}
              onToggleWishlist={onToggleWishlist}
              onQuickView={onQuickView}
              badgeText={activeTab === 'trending' ? 'Trending' : 'New Arrival'}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
