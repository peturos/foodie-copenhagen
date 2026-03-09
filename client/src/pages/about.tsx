import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, Wheat, Heart, Leaf } from "lucide-react";

export default function AboutPage() {
  return (
    <div>
      <section className="relative py-20 px-4" data-testid="about-hero">
        <div className="absolute inset-0">
          <img src="/images/sourdough-bread.png" alt="Sourdough bread" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-4" data-testid="text-about-title">About Foodie</h1>
          <p className="text-white/70 text-lg max-w-md mx-auto">A local Amager favorite for premium sandwiches, fresh bread, and fast takeaway.</p>
        </div>
      </section>

      <section className="py-20 px-4" data-testid="about-story">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-2">Our Philosophy</p>
              <h2 className="font-serif text-3xl font-bold mb-6">Fresh sandwiches. Proper bread. Big flavor.</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  At Foodie on Amagerbrogade, we bake our sourdough fresh and fill it with bold ingredients — from pesto chicken and Egyptian kebab to falafel, avocado, and baba ganoush.
                </p>
                <p>
                  Foodie makes the best of what we have and does not interfere with it too much. We keep food as natural as possible, deliberately avoiding complicated methods.
                </p>
                <p>
                  Take our feta, date fruit, roasted almonds and fresh basil sandwich — the king of the Egyptian summer sandwich. It cannot get any simpler. If you don't know it, you must try it. Each individual sandwich has a clear voice and plain characteristics that are lucid and powerful.
                </p>
              </div>
            </div>
            <div className="rounded-md overflow-hidden">
              <img
                src="/images/restaurant-interior.png"
                alt="Foodie restaurant interior"
                className="w-full h-[350px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-card" data-testid="about-bread">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 rounded-md overflow-hidden">
              <img
                src="/images/sourdough-bread.png"
                alt="Artisan sourdough bread"
                className="w-full h-[350px] object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-2">Our Signature</p>
              <h2 className="font-serif text-3xl font-bold mb-6">The sourdough that defines us</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Our sourdough bread is the heart of everything we serve. Using a slow 48-hour rise process, we develop complex flavors that you simply can't rush.
                </p>
                <p>
                  Every morning, our bakers arrive early to shape and bake fresh loaves. The result is a bread with a crispy, golden crust and a soft, airy interior that perfectly complements every filling.
                </p>
                <p>
                  Our bread is naturally vegan, made with just flour, water, salt, and our carefully maintained sourdough starter. Simple ingredients, extraordinary taste.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4" data-testid="about-values">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-2">What We Stand For</p>
            <h2 className="font-serif text-3xl font-bold">Our values</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center px-4">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
                <Wheat className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Fresh Every Day</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Nothing pre-made, nothing frozen. Our bread and ingredients are prepared fresh each morning without exception.
              </p>
            </div>
            <div className="text-center px-4">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
                <Heart className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Made with Care</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Every sandwich is assembled with attention to detail. We balance flavors, textures, and portions to create something special.
              </p>
            </div>
            <div className="text-center px-4">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
                <Leaf className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Food for All</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Vegetarian, vegan, and gluten-free choices are central to our menu — not afterthoughts. Everyone deserves great food.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-card text-center" data-testid="about-cta">
        <div className="max-w-md mx-auto">
          <h3 className="font-serif text-2xl font-bold mb-3">Come try Foodie</h3>
          <p className="text-muted-foreground text-sm mb-6">We're on Amagerbrogade 13, just a short walk from the metro. Order online or visit us in person.</p>
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <a href="https://foodie-cph.dk" target="_blank" rel="noopener noreferrer">
              <Button data-testid="button-about-order">Order Online</Button>
            </a>
            <Link href="/find-us">
              <Button variant="outline" data-testid="button-about-findus">
                Find Us
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
