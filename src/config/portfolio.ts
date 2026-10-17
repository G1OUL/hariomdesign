/**
 * PORTFOLIO CONFIGURATION
 * ------------------------------------------------------------------
 * This file centralizes all brand information, contact details, pricing,
 * services, and case studies.
 *
 * TO PERSONALIZE BEFORE LAUNCH:
 * 1. Replace '[YOUR NAME]' with your full name.
 * 2. Replace 'your.email@example.com' with your actual working email.
 * 3. Replace the WhatsApp number with your actual country code + phone number.
 * 4. Update the social links with your actual URLs (or leave blank to hide).
 * 5. Update your GitHub username in the GitHub Pages URL.
 * ------------------------------------------------------------------
 */

export interface ProjectCaseStudy {
  id: string;
  slug: string;
  title: string;
  propertyType: string;
  location: string;
  tagline: string;
  badge: string; // e.g., "Concept Project"
  heroImage: string;
  thumbnailImage: string;
  galleryImages: string[];
  overview: string;
  goals: string[];
  intendedAudience: string;
  designDirection: {
    palette: { name: string; hex: string }[];
    typography: string;
    artDirection: string;
  };
  keyFeatures: {
    title: string;
    description: string;
  }[];
  designDecisions: {
    challenge: string;
    decision: string;
    impact: string;
  }[];
  mockupPreview: {
    desktopViewHeadline: string;
    desktopViewSubheadline: string;
    keySections: string[];
    mobileHighlight: string;
  };
}

export interface ServicePackage {
  id: string;
  title: string;
  tagline: string;
  startingPrice: string;
  priceNote: string;
  description: string;
  isPopular?: boolean;
  deliverables: string[];
  bestFor: string;
  timeline: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
}

export const PORTFOLIO_CONFIG = {
  brand: {
    name: "[YOUR NAME]",
    brandTitle: "[YOUR NAME] — Hospitality Web Designer",
    role: "Independent Web Designer",
    specialization: "Villas, Homestays & Boutique Stays",
    location: "India",
    tagline: "Digital homes for unforgettable stays.",
    subheadline:
      "I design thoughtful, modern websites for villas, homestays, and boutique hospitality brands.",
    positioning:
      "Thoughtful, premium, mobile-friendly websites that help independent stays take direct inquiries and showcase their unique character.",
    availability: "Accepting select client projects for 2025/2026",
    primaryCta: "Let's Discuss Your Website",
    secondaryCta: "Explore My Work",
  },

  contact: {
    // IMPORTANT: Replace with your actual email address before publishing
    email: "your.email@example.com",
    // IMPORTANT: Replace with your actual WhatsApp number with country code (e.g. 919876543210)
    // Set to empty string "" if you do not want WhatsApp displayed
    whatsappNumber: "+91-XXXXXXXXXX",
    whatsappCleanNumber: "91XXXXXXXXXX", // Digits only for wa.me link
    location: "Bengaluru & Pan-India (Remote)",
    socialLinks: {
      github: "https://github.com/YOUR-GITHUB-USERNAME",
      linkedin: "https://linkedin.com/in/YOUR-HANDLE",
      instagram: "https://instagram.com/YOUR-HANDLE",
      twitter: "https://x.com/YOUR-HANDLE",
    },
    inquiryNotice:
      "No automated bot replies. I review every hospitality inquiry personally within 24 hours.",
  },

  pricingDisclaimer: {
    note: "All listed rates are introductory starting estimates. Final project quotes reflect your exact property scale, custom asset requirements, and delivery timeline.",
    exclusions:
      "Standard pricing excludes third-party domain registration (~₹800–₹1,200/yr), paid hosting or premium booking engines, and paid stock licenses unless agreed upon in writing.",
  },

  projects: [
    {
      id: "serein-stays",
      slug: "serein-stays",
      title: "Serein Stays",
      propertyType: "Boutique Coffee Estate Retreat",
      location: "Coorg, Karnataka",
      tagline: "Slow-living heritage sanctuary amidst 40 acres of mist & spice groves",
      badge: "Concept Project",
      heroImage:
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1600&q=80",
      thumbnailImage:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1000&q=80",
      galleryImages: [
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80",
      ],
      overview:
        "A sophisticated digital identity and booking-friendly website concept for a colonial-era planter's bungalow transformed into an ultra-exclusive 4-room boutique getaway.",
      goals: [
        "Convey quiet luxury, misty mountain mornings, and estate-to-table dining.",
        "Solve common guest questions (road conditions, weather, estate walks) before booking.",
        "Provide an effortless direct WhatsApp and email inquiry channel to bypass high OTA commissions.",
      ],
      intendedAudience:
        "Couples, solo writers, and high-income city travelers seeking quietude, privacy, and farm-fresh slow living away from tourist crowds.",
      designDirection: {
        palette: [
          { name: "Coffee Pod Brown", hex: "#3A2B20" },
          { name: "Misty Evergreen", hex: "#22352A" },
          { name: "Warm Cream", hex: "#F7F3EC" },
          { name: "Raw Brass", hex: "#C59B63" },
        ],
        typography: "Playfair Display display serif with Plus Jakarta Sans body",
        artDirection:
          "Atmospheric, warm photography emphasizing dappled sunlight, heritage woodwork, hand-spun linen, and estate greenery.",
      },
      keyFeatures: [
        {
          title: "Curated Cottage & Suite Previews",
          description:
            "High-res visual cards with room dimensions, private verandah views, bath amenities, and seasonal rates.",
        },
        {
          title: "Estate Experiences Journal",
          description:
            "A visual narrative of birdwatching walks, spice plantation tours, and fireside dining.",
        },
        {
          title: "Guest Guidebook & Route Advisory",
          description:
            "Interactive collapsible sections answering terrain, pet policies, best travel months, and driver accommodation.",
        },
        {
          title: "Direct WhatsApp & Instant Inquiry Drawer",
          description:
            "One-tap date selection and pre-formatted inquiry text designed for high conversion on mobile screens.",
        },
      ],
      designDecisions: [
        {
          challenge:
            "High reliance on OTA platforms (Airbnb/Booking.com) leading to 15–20% lost margins.",
          decision:
            "Designed prominent direct inquiry buttons with a guaranteed 'Direct Booking Benefit' banner (complimentary estate breakfast & late checkout).",
          impact: "Encourages guests to book directly with property hosts.",
        },
        {
          challenge:
            "Potential guests frequently abandon inquiries due to unclear location accessibility.",
          decision:
            "Built a dedicated 'Getting to the Estate' route preview with altitude, recommended vehicle types, and downloadable pin.",
          impact: "Eliminated pre-trip anxiety and reduced repetitive phone inquiries.",
        },
      ],
      mockupPreview: {
        desktopViewHeadline: "Colonial Tranquility at 3,500 Feet",
        desktopViewSubheadline: "An intimate planter’s estate nestled deep within Coorg’s western hills",
        keySections: [
          "Hero: Atmospheric estate video/photo loop with instant inquiry bar",
          "Accommodations: 3 Heritage Bungalow Suites + 1 Private Cottage",
          "Amenities: Farm-to-table meals, plunge pool, library, estate walks",
          "Location: 4.5 hours from Bengaluru airport, route advisory included",
          "FAQ: Pets, food preferences, network connectivity & climate",
        ],
        mobileHighlight:
          "Sticky booking bar at bottom of mobile screen with direct WhatsApp chat and phone call buttons.",
      },
    },
    {
      id: "the-coast-house",
      slug: "the-coast-house",
      title: "The Coast House",
      propertyType: "Private Coastal Villa & Pool House",
      location: "Mandwa / Alibaug, Maharashtra",
      tagline: "Sun-drenched coastal sanctuary 20 minutes across the bay from Mumbai",
      badge: "Concept Project",
      heroImage:
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=80",
      thumbnailImage:
        "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1000&q=80",
      galleryImages: [
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80",
      ],
      overview:
        "An airy, minimalist website concept for a private 4-bedroom luxury coastal villa equipped with lap pool, tropical courtyard, and dedicated in-house chef.",
      goals: [
        "Capture the effortless seaside lifestyle for weekend family reunions and executive retreats.",
        "Demonstrate the seamless speedboat connection from Mumbai's Gateway of India to Mandwa Jetty.",
        "Provide a high-trust inquiry process for high-ticket whole-villa rentals.",
      ],
      intendedAudience:
        "Mumbai and Pune design-conscious families, executive circles, and groups seeking private villa takeovers.",
      designDirection: {
        palette: [
          { name: "Washed Sand", hex: "#EAE5DC" },
          { name: "Deep Cobalt Slate", hex: "#1D2833" },
          { name: "Warm Terracotta", hex: "#BE6949" },
          { name: "Sun Bleached White", hex: "#FAFAFA" },
        ],
        typography: "Cormorant Garamond editorial serif with clean grotesque sans",
        artDirection:
          "Bright, architectural, sunlit compositions highlighting open courtyards, pool reflections, breezy linen curtains, and alfresco dining.",
      },
      keyFeatures: [
        {
          title: "Whole-Villa Spatial Layout & Floorplan",
          description:
            "Interactive blueprint guide showing bedroom placements, pool deck, open-air pavilion, and private parking.",
        },
        {
          title: "Private Chef & Dining Menus",
          description:
            "A showcase of fresh coastal seafood menus, vegetarian thalis, and custom cocktail hour arrangements.",
        },
        {
          title: "Concierge & Speedboat Guide",
          description:
            "Clear timeline showing Ro-Pax and speedboat transit times, baggage assistance, and jetty pick-ups.",
        },
        {
          title: "Villa Rules & Event Inquiries",
          description:
            "Clear policies regarding music curfews, children safety around pool, pets, and private celebration guidelines.",
        },
      ],
      designDecisions: [
        {
          challenge:
            "Villa rental is high-value (₹40,000–₹85,000/night); guests need deep confidence before initiating payment.",
          decision:
            "Included high-resolution architectural photography, verified host identity, and transparent breakdown of what is included (cook, housekeeping, inverter backup).",
          impact: "Instills immediate credibility and eliminates guest hesitation.",
        },
        {
          challenge: "Mobile users on speedboats have variable connectivity.",
          decision:
            "Optimized image loading, lightweight CSS, and instant phone call / WhatsApp quick action.",
          impact: "Loads in under 1.2 seconds even on patchy coastal 4G networks.",
        },
      ],
      mockupPreview: {
        desktopViewHeadline: "Breathe the Arabian Sea",
        desktopViewSubheadline: "A private 4-bedroom modernist sanctuary with courtyard pool & private chef",
        keySections: [
          "Hero: Sun-washed pool deck with tranquil water motion",
          "Property Blueprint: Visual guide to all 4 en-suite bedrooms",
          "Dining Experience: In-villa Konkan seafood & customized menus",
          "Getting Here: Speedboat booking link & Mandwa jetty concierge",
          "Inquiry Form: Group size, check-in dates & event inquiries",
        ],
        mobileHighlight:
          "Fast-loading swipeable photo gallery with quick one-click WhatsApp concierge chat.",
      },
    },
    {
      id: "fern-and-folio",
      slug: "fern-and-folio",
      title: "Fern & Folio",
      propertyType: "Botanical Homestay & Reading Sanctuary",
      location: "Munnar, Kerala",
      tagline: "An intimate eco-homestay wrapped in tea gardens and rare books",
      badge: "Concept Project",
      heroImage:
        "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1600&q=80",
      thumbnailImage:
        "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1000&q=80",
      galleryImages: [
        "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1200&q=80",
      ],
      overview:
        "A peaceful botanical homestay website concept centered around a 2,000-book curated library, bio-diverse spice gardens, and artisanal single-origin teas.",
      goals: [
        "Position the homestay as an antidote to commercialized hotel chains.",
        "Emphasize the hosts' personal hospitality, local culinary lore, and biodiversity.",
        "Attract mindful travelers, book lovers, and researchers who appreciate quiet mornings.",
      ],
      intendedAudience:
        "Creative professionals, botanists, readers, and mindful slow-travelers looking for authentic local homestay charm.",
      designDirection: {
        palette: [
          { name: "Forest Moss", hex: "#2A3D2F" },
          { name: "Antique Parchment", hex: "#F3ECE1" },
          { name: "Muted Terracotta", hex: "#9E5536" },
          { name: "Fern Green", hex: "#4E6953" },
        ],
        typography: "Literary serif display paired with legible warm sans-serif",
        artDirection:
          "Rich, tactile photography celebrating hand-bound books, rain on tea leaves, clay teacups, and antique wooden reading desks.",
      },
      keyFeatures: [
        {
          title: "The Folio Library Catalog",
          description:
            "A preview of curated reading categories (South Asian natural history, poetry, regional fiction) available for guests.",
        },
        {
          title: "Host Story & Kitchen Notes",
          description:
            "Warm personal letter from the hosting family introducing grandmother's heirloom Malabar spice recipes.",
        },
        {
          title: "Botanical Garden Map",
          description:
            "Interactive botanical index introducing the native bird species, cardamom plants, and tea trails around the property.",
        },
        {
          title: "Conscious Stay Guidelines",
          description:
            "Gentle information on zero-waste composting, water conservation, and quiet hours.",
        },
      ],
      designDecisions: [
        {
          challenge:
            "Homestays are often mistaken for budget hostels or standardized guesthouses.",
          decision:
            "Infused rich editorial storytelling, warm host photography, and literary quotes to establish high perceived value.",
          impact:
            "Differentiates the property from cookie-cutter budget listings and justifies premium pricing.",
        },
        {
          challenge:
            "Many homestay owners struggle with guests who expect loud parties and television.",
          decision:
            "Placed an honest 'Who Fern & Folio is For' section clearly explaining the acoustic calm and digital detox atmosphere.",
          impact: "Pre-qualifies incoming inquiries and prevents mismatched guest expectations.",
        },
      ],
      mockupPreview: {
        desktopViewHeadline: "Where Words Meet Wild Ferns",
        desktopViewSubheadline: "An organic tea-sanctuary and 2,000-volume library for restful minds",
        keySections: [
          "Hero: View overlooking misty morning tea slopes",
          "The Library: Handpicked reading corners and writing desks",
          "Garden Rooms: 3 intimate rooms with rain-shower courtyards",
          "Host Table: Traditional banana-leaf and Malabar breakfasts",
          "Direct Booking Note: Direct inquiries support local staff and farm upkeep",
        ],
        mobileHighlight:
          "Comfortable long-form reading typography with high-contrast text and zero visual clutter.",
      },
    },
  ],

  services: [
    {
      id: "landing-page",
      title: "Property Landing Page",
      tagline: "A high-impact, single-page website for a specific villa, cottage, or homestay.",
      startingPrice: "₹3,000",
      priceNote: "Introductory starting rate",
      description:
        "Designed to convert social media followers, Airbnb inquiries, and word-of-mouth recommendations into direct, commission-free bookings.",
      isPopular: false,
      deliverables: [
        "Hero section with property character & instant booking CTA",
        "Property overview, highlights & visual photo gallery",
        "Room features, amenities & local experience guide",
        "Direct WhatsApp inquiry button + email inquiry trigger",
        "Location advisory, Google Maps link & key property FAQs",
        "100% mobile-responsive, ultra-fast loading layout",
        "Domain connection guidance & launch support",
      ],
      bestFor: "Single villas, individual homestays, or holiday apartments starting out.",
      timeline: "Delivered in 3–5 working days",
    },
    {
      id: "multi-section",
      title: "Multi-Section Hospitality Website",
      tagline: "A comprehensive digital home for boutique hotels, estates, and luxury stays.",
      startingPrice: "₹5,000",
      priceNote: "Introductory starting rate",
      description:
        "A full-scale hospitality experience with dedicated sections for different room types, estate experiences, dining menus, guest guidebooks, and direct inquiry channels.",
      isPopular: true,
      deliverables: [
        "Full homepage with curated hero, highlights & guest reviews",
        "Detailed Rooms & Suites presentation with amenities breakdown",
        "Estate Dining, chef story, or food guide section",
        "Local Experiences & Destination exploration guide",
        "Comprehensive Guest FAQ & Property Policies section",
        "Multi-channel inquiry builder (WhatsApp, email, phone)",
        "Fast image optimization with lazy loading & clean SEO meta tags",
        "14 days of post-launch adjustments and content tweaks",
      ],
      bestFor: "Multi-room boutique properties, heritage homestays, and estate villas.",
      timeline: "Delivered in 7–10 working days",
    },
    {
      id: "website-refresh",
      title: "Hospitality Website Refresh",
      tagline: "Modernize, speed up, and elevate your existing property website.",
      startingPrice: "Custom Quote",
      priceNote: "Based on existing site evaluation",
      description:
        "If you already have a website that feels outdated, slow, or looks broken on smartphones, I refine the typography, layout, imagery, and mobile booking experience.",
      isPopular: false,
      deliverables: [
        "Audit of current site pain points, mobile flaws & booking barriers",
        "Refreshed typography, warm editorial color scheme & cleaner layout",
        "Optimized image compression to improve slow loading times",
        "Revamped mobile navigation and frictionless inquiry buttons",
        "Clear call-to-actions to turn passive visitors into inquiries",
        "Code clean-up and improved cross-browser compatibility",
      ],
      bestFor: "Stays with existing websites that are losing bookings due to poor mobile design.",
      timeline: "Delivered in 4–7 working days",
    },
  ],

  process: [
    {
      step: "01",
      title: "Understand & Discover",
      subtitle: "Uncovering your stay's soul",
      description:
        "We discuss your property's story, target guest profile, key amenities, and current booking channels. You share your photos, room details, and house rules.",
      deliverables: ["Project brief", "Content checklist", "Design moodboard"],
    },
    {
      step: "02",
      title: "Structure & Visual Direction",
      subtitle: "Editorial layout & storytelling",
      description:
        "I curate your photos, organize your room details, and design a warm, elegant visual layout that highlights your stay's unique character on both mobile and desktop.",
      deliverables: ["Curated layout draft", "Color & typography scheme", "Content structure"],
    },
    {
      step: "03",
      title: "Build & Mobile Optimization",
      subtitle: "Clean code & fast performance",
      description:
        "I turn the design into a fast, mobile-friendly website with responsive photo galleries, clear FAQ accordions, and frictionless direct inquiry buttons.",
      deliverables: ["Interactive development preview", "Mobile touch testing", "Speed optimization"],
    },
    {
      step: "04",
      title: "Launch & Handover",
      subtitle: "Ready for guest bookings",
      description:
        "We connect your custom domain, test contact links (WhatsApp and email), and hand over the completed website with a simple guide on updating content.",
      deliverables: ["Live website deployment", "Domain configuration", "Handover guide"],
    },
  ],

  about: {
    headline: "Thoughtful digital spaces for memorable Indian stays.",
    paragraphs: [
      "I am an independent freelance web designer based in India, dedicated to helping villa owners, heritage homestays, and boutique hospitality properties showcase their hospitality online.",
      "Most independent properties rely heavily on OTA platforms, losing 15% to 20% on every reservation. Others have outdated websites that load slowly on mobile phones or look like generic corporate templates.",
      "My approach is different: I combine editorial typography, warm natural color palettes, and frictionless direct-booking channels (like instant WhatsApp inquiries) so your website reflects the genuine warmth of your property.",
      "Working with an independent designer means you get direct, personal collaboration without the overhead, jargon, or slow turnaround of traditional agencies.",
    ],
    principles: [
      {
        title: "Mobile-First for Real Guests",
        description:
          "Over 75% of travel bookings happen on smartphones. Every layout is tested to scroll smoothly and load instantly.",
      },
      {
        title: "Zero Jargon, Honest Advice",
        description:
          "Clear pricing, transparent deliverables, and non-technical guidance every step of the way.",
      },
      {
        title: "Direct Inquiries Over OTAs",
        description:
          "Prominent WhatsApp and direct email links empower you to keep more of your hard-earned revenue.",
      },
      {
        title: "Editorial Hospitality Aesthetic",
        description:
          "Warm ivory backgrounds, understated typography, and generous photography that evoke the peace of a holiday.",
      },
    ],
  },
};
