import { Heart, Eye } from 'lucide-react';
import { formatPrice, handleImageError } from '../data/jewelryData.js';

export default function ProductCard({
  product,
  isWishlisted,
  onToggleWishlist,
  onQuickView,
  badgeText,
}) {
  const label = badgeText || (product.isNew ? 'New' : product.category);

  return (
    <article className="group flex flex-col bg-white border border-border rounded-2xl overflow-hidden shadow-[0_8px_20px_rgba(37,37,37,0.04)] hover:-translate-y-1 hover:shadow-[0_14px_28px_rgba(37,37,37,0.08)] hover:border-gold/70 transition-all duration-200">
      {/* Neutral Studio Image Frame */}
      <div className="relative aspect-square bg-ivory border-b border-border overflow-hidden">
        <button
          type="button"
          onClick={() => onQuickView(product)}
          className="w-full h-full block text-left"
          aria-label={`Inspect ${product.name}`}
        >
          <img
            src={product.image}
            alt={`${product.name} — ${product.purity}`}
            loading="lazy"
            onError={handleImageError}
            className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
          />
        </button>

        {/* Pill Badge */}
        <span className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 px-2.5 py-0.5 bg-white/95 text-charcoal text-[9px] sm:text-[10px] font-semibold capitalize tracking-wide border border-border rounded-full shadow-2xs">
          {label}
        </span>

        {/* Wishlist Toggle */}
        <button
          type="button"
          onClick={() => onToggleWishlist(product.id)}
          className={`absolute top-2.5 right-2.5 sm:top-3 sm:right-3 w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center border transition-all duration-200 shadow-2xs ${
            isWishlisted
              ? 'bg-charcoal border-charcoal text-white'
              : 'bg-white/95 border-border text-charcoal hover:border-gold hover:text-gold'
          }`}
          aria-label={
            isWishlisted
              ? `Remove ${product.name} from wishlist`
              : `Add ${product.name} to wishlist`
          }
          aria-pressed={isWishlisted}
        >
          <Heart
            className={`w-3.5 h-3.5 sm:w-4 sm:h-4 transition-colors ${
              isWishlisted ? 'fill-gold text-gold' : ''
            }`}
          />
        </button>
      </div>

      {/* Product Info */}
      <div className="p-2.5 sm:p-4 flex flex-col flex-1">
        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-0.5 mb-1">
          <p className="text-charcoal font-bold text-sm sm:text-base tabular-nums">
            {formatPrice(product.price)}
          </p>
          <p className="text-stone text-[10px] sm:text-xs font-medium truncate">
            {product.purity}
          </p>
        </div>

        <h3 className="text-xs sm:text-sm font-semibold text-charcoal leading-snug mb-3 line-clamp-2 min-h-[2.1rem] sm:min-h-[2.5rem]">
          {product.name}
        </h3>

        <button
          type="button"
          onClick={() => onQuickView(product)}
          className="mt-auto w-full inline-flex items-center justify-center gap-1.5 px-2.5 sm:px-3 py-2 bg-ivory hover:bg-charcoal text-charcoal hover:text-white border border-border hover:border-charcoal rounded-full text-[11px] sm:text-xs font-semibold transition-colors duration-200"
        >
          <Eye className="w-3.5 h-3.5 shrink-0" />
          <span>View Details</span>
        </button>
      </div>
    </article>
  );
}
