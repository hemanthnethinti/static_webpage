import { useEffect, useRef } from 'react';
import { X, Heart, Shield, Gem, Package } from 'lucide-react';
import { formatPrice, handleImageError } from '../data/jewelryData.js';

export default function ProductModal({
  product,
  isWishlisted,
  onToggleWishlist,
  onEnquire,
  onClose,
}) {
  const overlayRef = useRef(null);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  const handleOverlayClick = (e) => {
    if (e.target === overlayRef.current) onClose();
  };

  if (!product) return null;

  return (
    <div
      ref={overlayRef}
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="product-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-charcoal/60 backdrop-blur-xs"
    >
      <div className="relative bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto overflow-x-hidden border border-border rounded-2xl shadow-2xl">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 p-2 bg-white/95 hover:bg-ivory border border-border rounded-full transition-colors"
          aria-label="Close product details"
        >
          <X className="w-4 h-4 sm:w-5 sm:h-5 text-charcoal" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12">
          <div className="relative aspect-square md:col-span-5 md:aspect-auto md:min-h-full bg-ivory border-b md:border-b-0 md:border-r border-border overflow-hidden">
            <img
              src={product.image}
              alt={`${product.name} — ${product.purity}`}
              onError={handleImageError}
              className="w-full h-full object-cover object-center"
            />
          </div>

          <div className="p-5 sm:p-7 md:col-span-7 flex flex-col min-w-0">
            <div className="flex items-center gap-2 mb-1.5 pr-8">
              <span className="px-2.5 py-0.5 rounded-full bg-gold-soft text-charcoal text-[11px] font-semibold uppercase tracking-wide">
                {product.category}
              </span>
              <span className="text-[11px] text-stone font-medium">{product.purity}</span>
            </div>

            <h3
              id="product-modal-title"
              className="text-xl sm:text-2xl font-bold text-charcoal mb-2 pr-8 leading-snug"
            >
              {product.name}
            </h3>

            <p className="text-2xl font-bold text-charcoal mb-4 tabular-nums">
              {formatPrice(product.price)}
              <span className="block text-[11px] font-normal text-stone mt-0.5">
                Showcase pricing in INR (inclusive of crafting notes)
              </span>
            </p>

            <p className="text-stone text-sm leading-relaxed mb-5">
              {product.description}
            </p>

            {product.features && (
              <div className="mb-5 bg-ivory border border-border rounded-xl p-3.5 sm:p-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-charcoal mb-2.5">
                  Product Highlights
                </h4>
                <ul className="space-y-1.5">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs sm:text-sm text-charcoal">
                      <Gem className="w-3.5 h-3.5 text-gold shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="flex flex-wrap items-center gap-4 mb-5 pt-3 border-t border-border text-xs text-stone">
              <div className="flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5 text-gold shrink-0" />
                <span>BIS Hallmarked Standard</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Package className="w-3.5 h-3.5 text-gold shrink-0" />
                <span>Insured Transit</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-2.5 mt-auto">
              <button
                type="button"
                onClick={() => onToggleWishlist(product.id)}
                aria-pressed={isWishlisted}
                className={`flex items-center justify-center gap-2 px-5 py-2.5 rounded-full border text-xs sm:text-sm font-semibold transition-colors shrink-0 ${
                  isWishlisted
                    ? 'border-gold bg-gold-soft text-charcoal'
                    : 'border-border text-charcoal hover:border-charcoal'
                }`}
              >
                <Heart
                  className={`w-4 h-4 ${isWishlisted ? 'fill-gold text-gold' : ''}`}
                />
                <span>{isWishlisted ? 'Wishlisted' : 'Wishlist'}</span>
              </button>

              <button
                type="button"
                onClick={() => onEnquire && onEnquire(product)}
                className="flex-1 min-w-0 py-2.5 px-5 bg-charcoal text-white rounded-full text-xs sm:text-sm font-semibold text-center hover:bg-gold-hover transition-colors"
              >
                Book Private Viewing
              </button>
            </div>

            <p className="text-[11px] text-stone mt-3 text-center">
              Frontend showcase demo — no real purchase or reservation is processed.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
