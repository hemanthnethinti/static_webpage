export const FALLBACK_JEWELRY_IMAGE =
  "data:image/svg+xml;charset=UTF-8," +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800">
      <rect width="800" height="800" fill="#FAF8F5"/>
      <rect x="36" y="36" width="728" height="728" fill="none" stroke="#EAE6E0" stroke-width="2"/>
      <path d="M330 310H470L510 365L400 495L290 365L330 310Z" fill="none" stroke="#C5A059" stroke-width="3" stroke-linejoin="round"/>
      <path d="M290 365H510M330 310L362 365L400 495L438 365L470 310" fill="none" stroke="#C5A059" stroke-opacity="0.7" stroke-width="2" stroke-linejoin="round"/>
      <text x="400" y="555" text-anchor="middle" fill="#252525" font-family="Inter, sans-serif" font-size="22" font-weight="600" letter-spacing="5">AURELIA</text>
      <text x="400" y="582" text-anchor="middle" fill="#777777" font-family="Inter, sans-serif" font-size="11" letter-spacing="3">FINE JEWELS</text>
    </svg>`
  );

export const handleImageError = (event) => {
  const img = event.currentTarget;
  img.onerror = null;
  img.src = FALLBACK_JEWELRY_IMAGE;
};

export const heroImage = {
  src: 'https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?w=1400&q=85',
  alt: 'Modern 18K gold rings, chain bracelet, and hoop earrings styled naturally in sunlit warm tones',
};

export const craftsmanshipImages = {
  bench: {
    src: '/images/craft-goldsmith.jpg',
    alt: 'Master Indian goldsmith hand-engraving a solid 22K gold band at the traditional workbench',
  },
  kundan: {
    src: '/images/craft-kundan.jpg',
    alt: 'Handcrafted 22K gold Kundan peacock filigree motif with uncut polki stones, rubies, and emerald centerpiece',
  },
};

export const categories = [
  {
    id: 'necklaces',
    name: 'Necklaces',
    count: '3 Designs',
    description: 'Layered chains, pendants & heritage haars',
    image: '/images/category-necklaces.jpg',
  },
  {
    id: 'rings',
    name: 'Rings',
    count: '3 Designs',
    description: 'Solitaire halos & gemstone cocktail rings',
    image: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=900&q=85',
  },
  {
    id: 'earrings',
    name: 'Earrings',
    count: '3 Designs',
    description: 'Everyday sculpted hoops, drops & jhumkas',
    image: '/images/category-earrings.jpg',
  },
  {
    id: 'bridal',
    name: 'Bridal',
    count: '3 Designs',
    description: 'Ceremonial 22K sets & diamond bridal kadas',
    image: 'https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=900&q=85',
  },
];

export const signatureProducts = [
  {
    id: 1,
    name: 'Lumière Pavé Heart Pendant',
    price: 142000,
    purity: '18K White Gold',
    category: 'necklaces',
    collectionTag: 'New Arrivals',
    isTrending: true,
    isNew: true,
    description:
      'An understated expression of devotion featuring full-cut diamonds micro-pavé set along a delicate open heart silhouette on an 18K white gold bead chain.',
    features: [
      '0.65ct Total Diamond Weight',
      'VVS2 Clarity, E-F Color Grade',
      '18K Rhodium-Finished White Gold',
      '18-inch Diamond-Cut Bead Chain',
      'Independent Grading Dossier',
    ],
    image: 'https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?w=800&q=80',
  },
  {
    id: 2,
    name: 'Morganite Emerald-Cut Ring',
    price: 165000,
    purity: '18K Rose Gold',
    category: 'rings',
    collectionTag: 'Trending Now',
    isTrending: true,
    isNew: false,
    description:
      'A glowing emerald-cut blush morganite held in four slim claws and encircled by a luminous diamond halo in warm 18K rose gold with a slender pavé band.',
    features: [
      '2.4ct Emerald-Cut Morganite',
      '0.75ct Brilliant Diamond Halo',
      '18K Solid Rose Gold Band',
      'Micro-Pavé Gallery & Shank',
      'Gemological Dossier Included',
    ],
    image: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=800&q=80',
  },
  {
    id: 3,
    name: 'Aurelia Sculpted Rope Hoops',
    price: 118000,
    purity: '22K Gold',
    category: 'earrings',
    collectionTag: 'Everyday Edit',
    isTrending: true,
    isNew: true,
    description:
      'Fluid, hand-twisted 22K gold rope hoops designed with feather-light hollow construction for comfortable daily wear from workdays to evenings out.',
    features: [
      'Hand-Twisted 22K Yellow Gold',
      'Feather-Light Hollow Form',
      'High-Mirror Hand Polish',
      'Precision Hinged Latch',
      'BIS Hallmarked Standard',
    ],
    image: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&q=80',
  },
  {
    id: 4,
    name: 'Noor Paisley Diamond Bridal Kada',
    price: 375000,
    purity: '18K Rose Gold',
    category: 'bridal',
    collectionTag: 'Bridal Edit',
    isTrending: true,
    isNew: false,
    description:
      'A flexible paisley bridal bangle bracelet encrusted with round brilliant-cut diamonds in warm 18K rose gold, fitted with a concealed double-safety clasp.',
    features: [
      '3.8ct Round Brilliant Diamonds',
      'VVS Clarity, F-G Color Grade',
      '18K Rose Gold Paisley Links',
      'Concealed Double-Safety Clasp',
      'Independent Grading Dossier',
    ],
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80',
  },
  {
    id: 5,
    name: 'Navratna Floral Cluster Ring',
    price: 154000,
    purity: '18K White Gold',
    category: 'rings',
    collectionTag: 'New Arrivals',
    isTrending: false,
    isNew: true,
    description:
      'Six pear-shaped amethyst and golden citrine petals edged with diamond pavé halos around a central diamond cluster in 18K white gold.',
    features: [
      'Amethyst & Citrine Marquise Drops',
      'Diamond-Encrusted Petal Bezels',
      '18K Solid White Gold Mount',
      'Comfort-Fit Inner Shank',
      'Gemological Dossier Included',
    ],
    image: 'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=800&q=80',
  },
  {
    id: 6,
    name: 'Azure Sapphire Heart Drop Earrings',
    price: 136000,
    purity: '18K Yellow Gold',
    category: 'earrings',
    collectionTag: 'Everyday Edit',
    isTrending: false,
    isNew: true,
    description:
      'Faceted deep-blue crystal sapphire drops suspended from graceful 18K yellow gold wire hooks, effortless to style with silk kurtas or evening tailoring.',
    features: [
      'Faceted Cushion-Heart Cut Drops',
      '18K Solid Yellow Gold Shepherd Hooks',
      'Lightweight Balanced Hang',
      'Includes Silicone Safety Backs',
      'BIS Hallmarked Standard',
    ],
    image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=800&q=80',
  },
  {
    id: 7,
    name: 'Jaipur Crescent Ruby Garland Necklace',
    price: 345000,
    purity: '22K Gold',
    category: 'necklaces',
    collectionTag: 'Heritage Edit',
    isTrending: false,
    isNew: false,
    description:
      'Fine ribbon-mesh 22K gold link strands crowned with ruby-set floral rosettes and a carved crescent gold centerpiece tipped with delicate ghungroo beads.',
    features: [
      'Natural Cabochon Ruby Accents',
      '22K Hand-Soldered Mesh Strands',
      'Crescent Motif With Gold Drops',
      'Adjustable Ceremonial Clasp',
      'BIS Hallmarked Standard',
    ],
    image: '/images/product-heritage-haar.jpg',
  },
  {
    id: 8,
    name: 'Eternal Halo Solitaire Ring',
    price: 245000,
    purity: '18K Rose & White Gold',
    category: 'rings',
    collectionTag: 'Bridal Edit',
    isTrending: false,
    isNew: false,
    description:
      'A round brilliant solitaire anchored in a subtle 18K rose gold milgrain halo over a split-shank white gold band set with micro-pavé diamonds.',
    features: [
      '1.05ct Brilliant Solitaire Center',
      'VVS1 Clarity, D Color Specification',
      '18K Rose Gold Halo Setting',
      'Split-Shank Pavé White Gold Band',
      'Independent Grading Dossier',
    ],
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80',
  },
  {
    id: 9,
    name: 'Celestial Layered Gem Necklace',
    price: 185000,
    purity: '18K Yellow Gold',
    category: 'necklaces',
    collectionTag: 'Trending Now',
    isTrending: false,
    isNew: true,
    description:
      'A layered double-strand 18K yellow gold necklace pairing an octagonal blue topaz pendant with an inset diamond crescent motif.',
    features: [
      'Faceted Blue Topaz Centerpiece',
      'Diamond-Accented Crescent Charm',
      '18K Solid Yellow Gold Chains',
      'Dual Clasp Adjustable Lengths',
      'BIS Hallmarked Standard',
    ],
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80',
  },
  {
    id: 10,
    name: 'Dakhini Granulated Temple Jhumkas',
    price: 124000,
    purity: '22K Gold',
    category: 'earrings',
    collectionTag: 'Heritage Edit',
    isTrending: false,
    isNew: false,
    description:
      'Sculpted dome jhumkas enriched with fine repoussé floral work and clusters of hand-strung hollow 22K gold droplets for soft acoustic shimmer.',
    features: [
      '22K Hand-Chased Dome Bell',
      'Clustered Hollow Gold Ghungroos',
      'Traditional Stem & Screw Post',
      'Warm Satin-Antique Finish',
      'BIS Hallmarked Standard',
    ],
    image: '/images/product-gold-jhumkas.jpg',
  },
  {
    id: 11,
    name: 'Polki Chandbali Bridal Drops',
    price: 215000,
    purity: '22K Gold',
    category: 'bridal',
    collectionTag: 'Bridal Edit',
    isTrending: false,
    isNew: true,
    description:
      'Architectural chandbali jhumka earrings inlaid with flat uncut polki stones, Burmese ruby drops, and luminous freshwater seed pearl tassels.',
    features: [
      'Uncut Polki Diamond Crescent',
      'Natural Ruby & Seed Pearl Fringes',
      'Filigree-Cut 22K Jhumka Drop',
      'Supportive Back Ear Post',
      'BIS Hallmarked Standard',
    ],
    image: '/images/category-earrings.jpg',
  },
  {
    id: 12,
    name: 'Maharani Ruby Heritage Bridal Set',
    price: 520000,
    purity: '22K Gold',
    category: 'bridal',
    collectionTag: 'Bridal Edit',
    isTrending: false,
    isNew: false,
    description:
      'A coordinated bridal collar necklace and floral stud pair crafted in 22K gold with sculpted floral medallions and pear-cut ruby cabochons.',
    features: [
      'Natural Ruby Teardrop Cabochons',
      '22K Hand-Carved Temple Gold',
      'Matching Floral Stud Earrings',
      'Adjustable Hand-Woven Silk Dori',
      'BIS Hallmarked Standard',
    ],
    image: 'https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=800&q=80',
  },
];

export const featuredCurations = [
  {
    id: 'everyday',
    tag: 'Everyday Edit',
    title: 'Everyday Fine Gold',
    subtitle: 'Lightweight 18K & 22K pieces crafted for daily effortless wear.',
    filterCategory: 'Rings',
    image: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&q=80',
  },
  {
    id: 'bridal',
    tag: 'Bridal Edit',
    title: 'The Bridal Trousseau',
    subtitle: 'Hand-crafted Polki, ruby collars, and solitaire settings for wedding celebrations.',
    filterCategory: 'Bridal',
    image: '/images/category-necklaces.jpg',
  },
  {
    id: 'gifting',
    tag: 'Heritage Edit',
    title: 'Signature Gifting',
    subtitle: 'Thoughtful diamond pendants and gold drops wrapped in keepsake boxes.',
    filterCategory: 'Necklaces',
    image: 'https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?w=800&q=80',
  },
];

export const heritageMilestones = [
  {
    year: '1947',
    title: 'Founding in Jaipur',
    detail: 'Master goldsmith Raghavendra Rao established our first atelier creating Polki and Kundan heirlooms.',
  },
  {
    year: '1984',
    title: 'Diamond & High Jewelry Atelier',
    detail: 'Expanded into contemporary solitaire diamond settings alongside traditional Jadau craft.',
  },
  {
    year: 'Today',
    title: 'Connaught Place Flagship',
    detail: 'Our New Delhi boutique bridges traditional Jaipur karigari with transparent modern retail.',
  },
];

export const trustFeatures = [
  {
    id: 'hallmark',
    title: 'BIS Hallmarked Gold',
    description: 'Guaranteed 18K & 22K purity standards stamped on every ornament.',
    icon: 'Shield',
  },
  {
    id: 'diamonds',
    title: 'Certified Diamonds',
    description: 'Clear carat, color, and clarity documentation in every product dossier.',
    icon: 'Gem',
  },
  {
    id: 'exchange',
    title: 'Lifetime Exchange',
    description: 'Flexible lifetime upgrade and exchange policy across signature collections.',
    icon: 'RefreshCw',
  },
  {
    id: 'delivery',
    title: 'Insured Delivery',
    description: 'Tamper-evident insured doorstep delivery and in-boutique pickup.',
    icon: 'Truck',
  },
];

export const boutiqueInfo = {
  name: 'Aurelia Fine Jewels — New Delhi Boutique',
  address: '42 Regal Avenue, Connaught Place, New Delhi 110001',
  phone: '+91 11 4200 8800',
  phoneHref: 'tel:+911142008800',
  email: 'concierge@aureliajewels.in',
  hours: [
    { days: 'Monday – Saturday', time: '11:00 AM – 8:00 PM' },
    { days: 'Sunday', time: '12:00 PM – 6:00 PM' },
    { days: 'Private Viewings', time: 'By Appointment' },
  ],
};

export const formatPrice = (price) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(price);
};
