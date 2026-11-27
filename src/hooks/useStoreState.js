import { useState, useCallback } from 'react';

export function useStoreState() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [wishlist, setWishlist] = useState(() => new Set());
  const [showWishlistOnly, setShowWishlistOnly] = useState(false);
  const [modalProduct, setModalProduct] = useState(null);
  const [enquiredProduct, setEnquiredProduct] = useState(null);

  const scrollToSection = useCallback((selector) => {
    const target = document.querySelector(selector);
    if (target) {
      const offset = 76;
      const y = target.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }, []);

  const handleSelectCategory = useCallback(
    (categoryName) => {
      setShowWishlistOnly(false);
      setSelectedCategory(categoryName);
      scrollToSection('#signature');
    },
    [scrollToSection]
  );

  const toggleWishlist = useCallback((id) => {
    setWishlist((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }, []);

  const handleOpenSaved = useCallback(() => {
    setSelectedCategory('All');
    setShowWishlistOnly(true);
    scrollToSection('#signature');
  }, [scrollToSection]);

  const handleEnquireProduct = useCallback(
    (product) => {
      setModalProduct(null);
      setEnquiredProduct({
        name: product.name,
        category: product.category,
        timestamp: Date.now(),
      });
      scrollToSection('#boutique');
    },
    [scrollToSection]
  );

  return {
    selectedCategory,
    setSelectedCategory,
    wishlist,
    toggleWishlist,
    showWishlistOnly,
    setShowWishlistOnly,
    modalProduct,
    setModalProduct,
    enquiredProduct,
    clearEnquiry: () => setEnquiredProduct(null),
    scrollToSection,
    handleSelectCategory,
    handleOpenSaved,
    handleEnquireProduct,
  };
}
