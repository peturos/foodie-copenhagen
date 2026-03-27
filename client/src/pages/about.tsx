import { useEffect, useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink, Wheat, Heart, Leaf } from "lucide-react";
import { getAboutPage } from "@/lib/queries";
import { urlFor } from "@/lib/sanity";

type AboutPageData = {
  heroImage?: unknown;
  heroTitle?: string;
  heroSubtitle?: string;
  mainEyebrow?: string;
  mainHeading?: string;
  mainParagraphs?: string[];
  shopImage?: unknown;
  breadEyebrow?: string;
  breadHeading?: string;
  breadParagraphs?: string[];
  breadImage?: unknown;
};

export default function AboutPage() {
  const [aboutPage, setAboutPage] = useState<AboutPageData | null>(null);

  useEffect(() => {
    async function loadAboutPage() {
      try {
        const data = await getAboutPage();
        setAboutPage(data || null);
      } catch (error) {
        console.error("Failed to load about page from Sanity:", error);
        setAboutPage(null);
      }
    }

    loadAboutPage();
  }, []);

  const heroImage = aboutPage?.heroImage
    ? urlFor(aboutPage.heroImage).width(1800).height(800).url()
    : "/images/sourdough-bread.png";

  const shopImage = aboutPage?.shopImage
    ? urlFor(aboutPage.shopImage).width(1200).height(900).url()
    : "/images/foodie-interior.png";

  const breadImage = aboutPage?.breadImage
    ? urlFor(aboutPage.breadImage).width(1200).height(900).url()
    : "/images/sourdough-bread.png";

  const mainParagraphs = aboutPage?.mainParagraphs?.length
    ? aboutPage.mainParagraphs
    : [
        "At Foodie on Amagerbrogade, we bake our sourdough fresh and fill it with bold ingredients — from pesto chicken and Egyptian kebab to falafel, avocado, and baba ganoush.",
        "Foodie makes the best of what we have and does not interfere with it too much. We keep food as natural as possible, deliberately avoiding complicated methods.",
        "Take our feta, date fruit, roasted almonds and fresh basil sandwich — the king of the Egyptian summer sandwich. It cannot get any simpler. If you don't know it, you must try it. Each individual sandwich has a clear voice and plain characteristics that are lucid and powerful.",
      ];

  const breadParagraphs = aboutPage?.breadParagraphs?.length
    ? aboutPage.breadParagraphs
    : [
        "Our sourdough bread is the heart of everything we serve. Using a slow 48-hour rise process, we develop complex flavors that you simply can't rush.",
        "Every morning, our bakers arrive early to shape and bake fresh loaves. The result is a bread with a crispy, golden crust and a soft, airy interior that perfectly complements every filling.",
        "Our bread is naturally vegan, made with just flour, water, salt, and our carefully maintained sourdough starter. Simple ingredients, extraordinary taste.",
      ];

  return (
    <div>
      <section
        className="relative min-h-[280px] flex items-center"
        data-testid="about-hero-section"
      >
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt={aboutPage?.heroTitle || "About Foodie"}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 py-20 text-center">
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
            {aboutPage?.heroTitle || "About Foodie"}
          </h1>
          <p className="text-white/80 text-lg sm:text-xl max-w-2xl mx-auto">
            {aboutPage?.heroSubtitle ||
              "A local Amager favorite for premium sandwiches, fresh bread, and fast takeaway."}
          </p>
        </div>
      </section>

      <section className="py-20 px-4" data-testid="about-main-section">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-3">
              {aboutPage?.mainEyebrow || "Our Philosophy"}
            </p>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold leading-tight mb-8">
              {aboutPage?.mainHeading ||
                "Fresh sandwiches. Proper bread. Big flavor."}
            </h2>

            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              {mainParagraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="rounded-md overflow-hidden">
            <img
              src={shopImage}
              alt="Foodie interior"
              className="w-full h-[520px] object-cover"
            />
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-card" data-testid="about-bread-section">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="rounded-md overflow-hidden order-2 lg:order-1">
            <img
              src={breadImage}
              alt={aboutPage?.breadHeading || "Foodie sourdough"}
              className="w-full h-[420px] object-cover"
            />
          </div>

          <div className="order-1 lg:order-2">
            <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-3">
              {aboutPage?.breadEyebrow || "Our Signature"}
            </p>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold leading-tight mb-8">
              {aboutPage?.breadHeading || "The sourdough that defines us"}
            </h2>

            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              {breadParagraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4" data-testid="about-values-section">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-3">
            What We Stand For
          </p>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold mb-16">
            Our values
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
                <Wheat className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-semibold text-2xl mb-3">Fresh Every Day</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Nothing pre-made, nothing frozen. Our bread and ingredients are
                prepared fresh each morning without exception.
              </p>
            </div>

            <div>
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
                <Heart className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-semibold text-2xl mb-3">Made with Care</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Every sandwich is assembled with attention to detail. We balance
                flavors, textures, and portions to create something special.
              </p>
            </div>

            <div>
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
                <Leaf className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-semibold text-2xl mb-3">Food for All</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Vegetarian, vegan, and gluten-free choices are central to our
                menu — not afterthoughts. Everyone deserves great food.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4" data-testid="about-cta-section">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl sm:text-5xl font-bold mb-4">
            Come try Foodie
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
            We're on Amagerbrogade 13, just a short walk from the metro. Order
            online or visit us in person.
          </p>

          <div className="flex items-center justify-center gap-4 flex-wrap">
            <a
              href="https://foodie-cph.dk"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg">
                Order Online
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </a>

            <Link href="/find-us">
              <Button variant="outline" size="lg">
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
