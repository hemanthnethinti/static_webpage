import { useStoreState } from './hooks/useStoreState.js';
import Navbar from './components/Navbar.jsx';
import AnnouncementBar from './components/AnnouncementBar.jsx';
import Hero from './components/Hero.jsx';
import CategoryGrid from './components/CategoryGrid.jsx';
import TrendingSection from './components/TrendingSection.jsx';
import SignatureCollection from './components/SignatureCollection.jsx';
import CraftsmanshipSection from './components/CraftsmanshipSection.jsx';
import TrustBar from './components/TrustBar.jsx';
import BoutiqueSection from './components/BoutiqueSection.jsx';
import Footer from './components/Footer.jsx';
import ProductModal from './components/ProductModal.jsx';

export default function App() {
  const {
    selectedCategory,
    setSelectedCategory,
    wishlist,
    toggleWishlist,
    showWishlistOnly,
    setShowWishlistOnly,
    modalProduct,
    setModalProduct,
    enquiredProduct,
    clearEnquiry,
    scrollToSection,
    handleSelectCategory,
    handleOpenSaved,
    handleEnquireProduct,
  } = useStoreState();

  return (
    <div className="min-h-screen text-charcoal overflow-x-hidden flex flex-col">
      <AnnouncementBar
        onSelectCategory={handleSelectCategory}
        onNavigate={scrollToSection}
      />

      <Navbar
        wishlistCount={wishlist.size}
        onOpenSaved={handleOpenSaved}
      />

      <main className="flex-1">
        <Hero />
        <CategoryGrid onSelectCategory={handleSelectCategory} />
        <TrendingSection
          wishlist={wishlist}
          onToggleWishlist={toggleWishlist}
          onQuickView={setModalProduct}
        />
        <SignatureCollection
          activeFilter={selectedCategory}
          onFilterChange={setSelectedCategory}
          wishlist={wishlist}
          onToggleWishlist={toggleWishlist}
          showWishlistOnly={showWishlistOnly}
          onToggleWishlistOnly={setShowWishlistOnly}
          onQuickView={setModalProduct}
        />
        <CraftsmanshipSection />
        <TrustBar />
        <BoutiqueSection
          enquiredProduct={enquiredProduct}
          onClearEnquiry={clearEnquiry}
        />
      </main>

      <Footer onSelectCategory={handleSelectCategory} />

      {modalProduct && (
        <ProductModal
          product={modalProduct}
          isWishlisted={wishlist.has(modalProduct.id)}
          onToggleWishlist={toggleWishlist}
          onEnquire={handleEnquireProduct}
          onClose={() => setModalProduct(null)}
        />
      )}
    </div>
  );
}
