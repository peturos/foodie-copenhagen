import { useEffect, useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ExternalLink,
  MapPin,
  Clock,
  Wheat,
  Leaf,
  ChefHat,
  ArrowRight,
  Star,
} from "lucide-react";
import { getHomepage } from "@/lib/queries";
import { urlFor } from "@/lib/sanity";

type HomePageData = {
  siteTitle?: string;
  hero?: {
    ratingText?: string;
    headline?: string;
    subheadline?: string;
    backgroundImage?: unknown;
    primaryButtonText?: string;
    primaryButtonUrl?: string;
    secondaryButtonText?: string;
    secondaryButtonSectionId?: string;
    addressLine?: string;
    hoursLine?: string;
    serviceTags?: string[];
  };
  bestsellers?: {
    eyebrow?: string;
    heading?: string;
    subheading?: string;
    featuredItems?: Array<{
      _id: string;
      title: string;
      price: number;
      shortDescription?: string;
      image?: unknown;
      tags?: string[];
    }>;
    ctaText?: string;
  };
  whyFoodie?: {
    eyebrow?: string;
    heading?: string;
    features?: Array<{
      iconKey?: string;
      title?: string;
      body?: string;
    }>;
  };
  signatureSection?: {
    eyebrow?: string;
    heading?: string;
    image?: unknown;
    paragraphs?: string[];
    buttonText?: string;
  };
  menuOverview?: {
    eyebrow?: string;
    heading?: string;
    subheading?: string;
    categories?: Array<{
      title?: string;
      itemCountText?: string;
    }>;
    ctaText?: string;
  };
  visitUs?: {
    eyebrow?: string;
    heading?: string;
    cards?: Array<{
      iconKey?: string;
      title?: string;
      lines?: string[];
    }>;
  };
  ctaBanner?: {
    headline?: string;
    subheadline?: string;
    backgroundImage?: unknown;
    buttonText?: string;
    buttonUrl?: string;
  };
};

const fallbackBestsellers = [
  {
    _id: "1",
    title: "Pesto Chicken",
    shortDescription:
      "Grilled chicken, fresh pesto, mozzarella, sun-dried tomatoes on sourdough",
    price: 79,
    image: "/images/pesto-chicken.png",
    tags: [],
  },
  {
    _id: "2",
    title: "Egyptian Kebab",
    shortDescription:
      "Spiced grilled meat, tahini, fresh vegetables, pickled onion on sourdough",
    price: 89,
    image: "/images/egyptian-kebab.png",
    tags: [],
  },
  {
    _id: "3",
    title: "Falafel Sandwich",
    shortDescription:
      "Crispy falafel, hummus, pickled vegetables, fresh greens on sourdough",
    price: 69,
    image: "/images/falafel.png",
    tags: ["V", "VG"],
  },
];

const fallbackMenuCategories = [
  { title: "Sandwiches", itemCountText: "20+ items" },
  { title: "Plates", itemCountText: "8+ items" },
  { title: "Sides & Dips", itemCountText: "10+ items" },
  { title: "Desserts", itemCountText: "5+ items" },
  { title: "Drinks", itemCountText: "12+ items" },
];

const tagLabels: Record<string, string> = {
  V: "Vegetarian",
  VG: "Vegan",
  GF: "Gluten-Free",
};

function getFeatureIcon(iconKey?: string) {
  switch (iconKey) {
    case "wheat":
      return <Wheat className="w-7 h-7 text-primary" />;
    case "chef":
      return <ChefHat className="w-7 h-7 text-primary" />;
    case "leaf":
      return <Leaf className="w-7 h-7 text-primary" />;
    default:
      return <ChefHat className="w-7 h-7 text-primary" />;
  }
}

function getVisitIcon(iconKey?: string) {
  switch (iconKey) {
    case "location":
      return <MapPin className="w-8 h-8 text-primary mx-auto mb-3" />;
    case "clock":
      return <Clock className="w-8 h-8 text-primary mx-auto mb-3" />;
    case "phone":
      return (
        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
          <span className="text-primary font-bold text-lg">+</span>
        </div>
      );
    default:
      return <MapPin className="w-8 h-8 text-primary mx-auto mb-3" />;
  }
}

export default function Home() {
  const [homepage, setHomepage] = useState<HomePageData | null>(null);

  useEffect(() => {
    async function loadHomepage() {
      try {
        const data = await getHomepage();
        setHomepage(data || null);
      } catch (error) {
        console.error("Failed to load homepage from Sanity:", error);
        setHomepage(null);
      }
    }

    loadHomepage();
  }, []);

  const heroImage =
    homepage?.hero?.backgroundImage
      ? urlFor(homepage.hero.backgroundImage).width(1800).height(1200).url()
      : "/images/hero-sandwich.png";

  const signatureImage =
    homepage?.signatureSection?.image
      ? urlFor(homepage.signatureSection.image).width(1200).height(900).url()
      : "/images/sourdough-bread.png";

  const ctaBannerImage =
    homepage?.ctaBanner?.backgroundImage
      ? urlFor(homepage.ctaBanner.backgroundImage).width(1800).height(1000).url()
      : "/images/food-spread.png";

  const bestsellers =
    homepage?.bestsellers?.featuredItems?.length
      ? homepage.bestsellers.featuredItems
      : fallbackBestsellers;

  const menuCategories =
    homepage?.menuOverview?.categories?.length
      ? homepage.menuOverview.categories
      : fallbackMenuCategories;

  const whyFoodieFeatures =
    homepage?.whyFoodie?.features?.length
      ? homepage.whyFoodie.features
      : [
          {
            iconKey: "wheat",
            title: "Fresh Sourdough Daily",
            body: "Our bread is baked fresh every morning using a 48-hour slow-rise process. Crispy crust, soft inside, distinctly Foodie.",
          },
          {
            iconKey: "chef",
            title: "Bold Combinations",
            body: "From Egyptian kebab to pesto chicken, every sandwich is a carefully crafted flavor experience you won't find anywhere else.",
          },
          {
            iconKey: "leaf",
            title: "Options for Everyone",
            body: "Vegetarian, vegan, and gluten-free options available. We believe great food should be accessible to all.",
          },
        ];

  const visitCards =
    homepage?.visitUs?.cards?.length
      ? homepage.visitUs.cards
      : [
          {
            iconKey: "location",
            title: "Location",
            lines: ["Amagerbrogade 13", "København S, 2300 København"],
          },
          {
            iconKey: "clock",
            title: "Opening Hours",
            lines: ["Mon-Fri: 11:00 - 18:00", "Sat: 11:30 - 15:00", "Sun: Closed"],
          },
          {
            iconKey: "phone",
            title: "Call Us",
            lines: ["+45 3020 5656"],
          },
        ];

  return (
    <div>
      <section className="relative min-h-[85vh] flex items-center" data-testid="hero-section">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt={homepage?.hero?.headline || "Fresh sourdough sandwich"}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/30" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 w-full">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-6">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-white/70 text-sm">
                {homepage?.hero?.ratingText || "Loved in Amager"}
              </span>
            </div>

            <h1
              className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6"
              data-testid="text-hero-title"
            >
              {homepage?.hero?.headline || "Fresh sourdough sandwiches in Amager"}
            </h1>

            <p
              className="text-lg sm:text-xl text-white/80 mb-8 leading-relaxed max-w-lg"
              data-testid="text-hero-subtitle"
            >
              {homepage?.hero?.subheadline ||
                "Premium takeaway with bold flavors, vegan options, and fast online ordering."}
            </p>

            <div className="flex flex-wrap items-center gap-3 mb-10">
              <a
                href={homepage?.hero?.primaryButtonUrl || "https://foodie-cph.dk"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="text-base px-8" data-testid="button-hero-order">
                  {homepage?.hero?.primaryButtonText || "Order Now"}
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </a>

              <Link href="/menu">
                <Button
                  variant="outline"
                  size="lg"
                  className="text-base px-8 border-white/30 text-white backdrop-blur-sm"
                  data-testid="button-hero-menu"
                >
                  {homepage?.hero?.secondaryButtonText || "See Menu"}
                </Button>
              </Link>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-sm text-white/60">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4" />
                {homepage?.hero?.addressLine || "Amagerbrogade 13"}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                {homepage?.hero?.hoursLine || "Open today until 18:00"}
              </span>
              {(homepage?.hero?.serviceTags?.length
                ? homepage.hero.serviceTags
                : ["Pickup", "Delivery"]
              ).map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2 py-0.5 rounded bg-white/10 backdrop-blur"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4" data-testid="bestsellers-section">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-2">
              {homepage?.bestsellers?.eyebrow || "Most Popular"}
            </p>
            <h2
              className="font-serif text-3xl sm:text-4xl font-bold"
              data-testid="text-bestsellers-title"
            >
              {homepage?.bestsellers?.heading || "Our Bestsellers"}
            </h2>
            <p className="text-muted-foreground mt-3 max-w-md mx-auto">
              {homepage?.bestsellers?.subheading ||
                "The sandwiches everyone keeps coming back for. Made fresh daily on our signature sourdough."}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {bestsellers.map((item) => {
              const itemImage =
                typeof item.image === "string"
                  ? item.image
                  : item.image
                    ? urlFor(item.image).width(800).height(600).url()
                    : undefined;

              return (
                <Link key={item._id || item.title} href="/menu">
                  <Card
                    className="group cursor-pointer"
                    data-testid={`card-bestseller-${(item.title || "")
                      .toLowerCase()
                      .replace(/\s/g, "-")}`}
                  >
                    {itemImage && (
                      <div className="aspect-[4/3] rounded-t-md overflow-hidden">
                        <img
                          src={itemImage}
                          alt={item.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                    )}
                    <div className="p-5">
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <h3
                          className="font-semibold text-lg"
                          data-testid={`text-item-name-${(item.title || "")
                            .toLowerCase()
                            .replace(/\s/g, "-")}`}
                        >
                          {item.title}
                        </h3>
                        <span
                          className="font-bold text-primary whitespace-nowrap"
                          data-testid={`text-item-price-${(item.title || "")
                            .toLowerCase()
                            .replace(/\s/g, "-")}`}
                        >
                          {item.price} kr
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                        {item.shortDescription || ""}
                      </p>
                      {(item.tags || []).length > 0 && (
                        <div className="flex items-center gap-1.5">
                          {(item.tags || []).map((tag) => (
                            <Badge key={tag} variant="secondary" className="text-xs">
                              {tagLabels[tag] || tag}
                            </Badge>
                          ))}
                        </div>
                      )}
                    </div>
                  </Card>
                </Link>
              );
            })}
          </div>

          <div className="text-center mt-10">
            <Link href="/menu">
              <Button variant="outline" size="lg" data-testid="button-view-full-menu">
                {homepage?.bestsellers?.ctaText || "View Full Menu"}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-card" data-testid="why-foodie-section">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-2">
              {homepage?.whyFoodie?.eyebrow || "Why Foodie"}
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold">
              {homepage?.whyFoodie?.heading || "What makes us different"}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyFoodieFeatures.map((feature, index) => (
              <div key={index} className="text-center px-4">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
                  {getFeatureIcon(feature.iconKey)}
                </div>
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4" data-testid="bread-story-section">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-md overflow-hidden">
              <img
                src={signatureImage}
                alt={homepage?.signatureSection?.heading || "Freshly baked sourdough bread"}
                className="w-full h-[400px] object-cover"
              />
            </div>
            <div>
              <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-2">
                {homepage?.signatureSection?.eyebrow || "Our Signature"}
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-6">
                {homepage?.signatureSection?.heading || "The bread that started it all"}
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                {(homepage?.signatureSection?.paragraphs?.length
                  ? homepage.signatureSection.paragraphs
                  : [
                      "At Foodie, the bread is not just a carrier. It is the foundation. Our sourdough undergoes a 48-hour slow rise, developing complex flavors and that distinctive crispy crust that our regulars can't stop talking about.",
                      "Baked fresh every single morning, our bread is vegan-friendly and made with simple, natural ingredients. No shortcuts, no compromises. Each loaf has a clear voice and plain characteristics that are lucid and powerful.",
                      "We keep food as natural as possible, deliberately avoiding complicated methods. The result? Sandwiches with substance and a taste you'll remember.",
                    ]
                ).map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
              <Link href="/about">
                <Button variant="outline" className="mt-6" data-testid="button-read-our-story">
                  {homepage?.signatureSection?.buttonText || "Read Our Story"}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-card" data-testid="menu-preview-section">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-2">
              {homepage?.menuOverview?.eyebrow || "Explore"}
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold">
              {homepage?.menuOverview?.heading || "Our Menu"}
            </h2>
            <p className="text-muted-foreground mt-3 max-w-md mx-auto">
              {homepage?.menuOverview?.subheading ||
                "From signature sandwiches to fresh sides, find something you'll love."}
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {menuCategories.map((cat, index) => (
              <Link key={`${cat.title}-${index}`} href="/menu">
                <Card
                  className="p-6 text-center cursor-pointer hover-elevate active-elevate-2 transition-all"
                  data-testid={`card-category-${(cat.title || "")
                    .toLowerCase()
                    .replace(/\s/g, "-")}`}
                >
                  <h3 className="font-semibold mb-1">{cat.title}</h3>
                  <p className="text-sm text-muted-foreground">{cat.itemCountText}</p>
                </Card>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/menu">
              <Button size="lg" data-testid="button-explore-menu">
                {homepage?.menuOverview?.ctaText || "Explore Full Menu"}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-4" data-testid="local-trust-section">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-2">
              {homepage?.visitUs?.eyebrow || "Visit Us"}
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold">
              {homepage?.visitUs?.heading || "Find Foodie"}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {visitCards.map((card, index) => (
              <Card
                key={index}
                className="p-6 text-center"
                data-testid={`card-visit-${index}`}
              >
                {getVisitIcon(card.iconKey)}
                <h3 className="font-semibold mb-2">{card.title}</h3>
                <div className="text-sm text-muted-foreground">
                  {(card.lines || []).map((line, lineIndex) => (
                    <p key={lineIndex}>{line}</p>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 px-4" data-testid="final-cta-section">
        <div className="absolute inset-0">
          <img
            src={ctaBannerImage}
            alt={homepage?.ctaBanner?.headline || "Food spread"}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <h2
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4"
            data-testid="text-cta-title"
          >
            {homepage?.ctaBanner?.headline || "Hungry? Order Foodie now."}
          </h2>
          <p className="text-white/70 text-lg mb-8">
            {homepage?.ctaBanner?.subheadline || "Pickup and delivery from Amagerbrogade."}
          </p>
          <a
            href={homepage?.ctaBanner?.buttonUrl || "https://foodie-cph.dk"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="lg" className="text-base px-10" data-testid="button-cta-order">
              {homepage?.ctaBanner?.buttonText || "Order Online"}
              <ExternalLink className="w-4 h-4 ml-2" />
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
}