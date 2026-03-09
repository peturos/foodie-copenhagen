import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, MapPin, Clock, Wheat, Leaf, ChefHat, ArrowRight, Star } from "lucide-react";

const bestsellers = [
  { name: "Pesto Chicken", desc: "Grilled chicken, fresh pesto, mozzarella, sun-dried tomatoes on sourdough", price: "79 kr", image: "/images/pesto-chicken.png", tags: [] },
  { name: "Egyptian Kebab", desc: "Spiced grilled meat, tahini, fresh vegetables, pickled onion on sourdough", price: "89 kr", image: "/images/egyptian-kebab.png", tags: [] },
  { name: "Falafel Sandwich", desc: "Crispy falafel, hummus, pickled vegetables, fresh greens on sourdough", price: "69 kr", image: "/images/falafel.png", tags: ["V", "VG"] },
  { name: "Avocado Sandwich", desc: "Ripe avocado, cherry tomatoes, arugula, lemon dressing on sourdough", price: "75 kr", image: "/images/avocado.png", tags: ["V", "VG"] },
  { name: "Chili Beef", desc: "Slow-cooked beef, caramelized onions, chili mayo, melted cheese on sourdough", price: "89 kr", image: "/images/chili-beef.png", tags: [] },
  { name: "Baba Chicken", desc: "Grilled chicken, baba ganoush, roasted peppers, fresh herbs on sourdough", price: "82 kr", image: "/images/baba-chicken.png", tags: [] },
];

const menuCategories = [
  { name: "Sandwiches", count: "20+", icon: "sandwich" },
  { name: "Plates", count: "8+", icon: "plate" },
  { name: "Sides & Dips", count: "10+", icon: "sides" },
  { name: "Desserts", count: "5+", icon: "dessert" },
  { name: "Drinks", count: "12+", icon: "drinks" },
];

export default function Home() {
  return (
    <div>
      <section className="relative min-h-[85vh] flex items-center" data-testid="hero-section">
        <div className="absolute inset-0">
          <img
            src="/images/hero-sandwich.png"
            alt="Fresh sourdough sandwich"
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
              <span className="text-white/70 text-sm">Loved in Amager</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6" data-testid="text-hero-title">
              Fresh sourdough sandwiches in Amager
            </h1>
            <p className="text-lg sm:text-xl text-white/80 mb-8 leading-relaxed max-w-lg" data-testid="text-hero-subtitle">
              Premium takeaway with bold flavors, vegan options, and fast online ordering.
            </p>

            <div className="flex flex-wrap items-center gap-3 mb-10">
              <a href="https://foodie-cph.dk" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="text-base px-8" data-testid="button-hero-order">
                  Order Now
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </a>
              <Link href="/menu">
                <Button variant="outline" size="lg" className="text-base px-8 border-white/30 text-white backdrop-blur-sm" data-testid="button-hero-menu">
                  See Menu
                </Button>
              </Link>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-sm text-white/60">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4" />
                Amagerbrogade 13
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                Open today until 18:00
              </span>
              <span className="text-xs px-2 py-0.5 rounded bg-white/10 backdrop-blur">Pickup &middot; Delivery</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4" data-testid="bestsellers-section">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-2">Most Popular</p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold" data-testid="text-bestsellers-title">Our Bestsellers</h2>
            <p className="text-muted-foreground mt-3 max-w-md mx-auto">The sandwiches everyone keeps coming back for. Made fresh daily on our signature sourdough.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {bestsellers.map((item) => (
              <Card key={item.name} className="group cursor-pointer" data-testid={`card-bestseller-${item.name.toLowerCase().replace(/\s/g, "-")}`}>
                <div className="aspect-[4/3] rounded-t-md overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="font-semibold text-lg" data-testid={`text-item-name-${item.name.toLowerCase().replace(/\s/g, "-")}`}>{item.name}</h3>
                    <span className="font-bold text-primary whitespace-nowrap" data-testid={`text-item-price-${item.name.toLowerCase().replace(/\s/g, "-")}`}>{item.price}</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">{item.desc}</p>
                  {item.tags.length > 0 && (
                    <div className="flex items-center gap-1.5">
                      {item.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag === "V" ? "Vegetarian" : tag === "VG" ? "Vegan" : tag}
                        </Badge>
                      ))}
                    </div>
                  )}
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/menu">
              <Button variant="outline" size="lg" data-testid="button-view-full-menu">
                View Full Menu
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-card" data-testid="why-foodie-section">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-2">Why Foodie</p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold">What makes us different</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center px-4">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
                <Wheat className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Fresh Sourdough Daily</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Our bread is baked fresh every morning using a 48-hour slow-rise process. Crispy crust, soft inside, distinctly Foodie.</p>
            </div>
            <div className="text-center px-4">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
                <ChefHat className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Bold Combinations</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">From Egyptian kebab to pesto chicken, every sandwich is a carefully crafted flavor experience you won't find anywhere else.</p>
            </div>
            <div className="text-center px-4">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
                <Leaf className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Options for Everyone</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Vegetarian, vegan, and gluten-free options available. We believe great food should be accessible to all.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4" data-testid="bread-story-section">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-md overflow-hidden">
              <img
                src="/images/sourdough-bread.png"
                alt="Freshly baked sourdough bread"
                className="w-full h-[400px] object-cover"
              />
            </div>
            <div>
              <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-2">Our Signature</p>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-6">The bread that started it all</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  At Foodie, the bread is not just a carrier. It is the foundation. Our sourdough undergoes a 48-hour slow rise, developing complex flavors and that distinctive crispy crust that our regulars can't stop talking about.
                </p>
                <p>
                  Baked fresh every single morning, our bread is vegan-friendly and made with simple, natural ingredients. No shortcuts, no compromises. Each loaf has a clear voice and plain characteristics that are lucid and powerful.
                </p>
                <p>
                  We keep food as natural as possible, deliberately avoiding complicated methods. The result? Sandwiches with substance and a taste you'll remember.
                </p>
              </div>
              <Link href="/about">
                <Button variant="outline" className="mt-6" data-testid="button-read-our-story">
                  Read Our Story
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
            <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-2">Explore</p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold">Our Menu</h2>
            <p className="text-muted-foreground mt-3 max-w-md mx-auto">From signature sandwiches to fresh sides, find something you'll love.</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {menuCategories.map((cat) => (
              <Link key={cat.name} href="/menu">
                <Card className="p-6 text-center cursor-pointer hover-elevate active-elevate-2 transition-all" data-testid={`card-category-${cat.name.toLowerCase().replace(/\s/g, "-")}`}>
                  <h3 className="font-semibold mb-1">{cat.name}</h3>
                  <p className="text-sm text-muted-foreground">{cat.count} items</p>
                </Card>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/menu">
              <Button size="lg" data-testid="button-explore-menu">
                Explore Full Menu
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-4" data-testid="local-trust-section">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-2">Visit Us</p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold">Find Foodie</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6 text-center" data-testid="card-location">
              <MapPin className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Location</h3>
              <p className="text-sm text-muted-foreground">Amagerbrogade 13<br />K&oslash;benhavn S, 2300 K&oslash;benhavn</p>
            </Card>
            <Card className="p-6 text-center" data-testid="card-hours">
              <Clock className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Opening Hours</h3>
              <div className="text-sm text-muted-foreground">
                <p>Mon-Fri: 11:00 - 18:00</p>
                <p>Sat: 11:30 - 15:00</p>
                <p>Sun: Closed</p>
              </div>
            </Card>
            <Card className="p-6 text-center" data-testid="card-contact">
              <a href="tel:+4530205656" className="block">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <span className="text-primary font-bold text-lg">+</span>
                </div>
                <h3 className="font-semibold mb-2">Call Us</h3>
                <p className="text-sm text-muted-foreground" data-testid="text-phone">+45 3020 5656</p>
              </a>
            </Card>
          </div>
        </div>
      </section>

      <section className="relative py-24 px-4" data-testid="final-cta-section">
        <div className="absolute inset-0">
          <img
            src="/images/food-spread.png"
            alt="Food spread"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4" data-testid="text-cta-title">
            Hungry? Order Foodie now.
          </h2>
          <p className="text-white/70 text-lg mb-8">Pickup and delivery from Amagerbrogade.</p>
          <a href="https://foodie-cph.dk" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="text-base px-10" data-testid="button-cta-order">
              Order Online
              <ExternalLink className="w-4 h-4 ml-2" />
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
}
