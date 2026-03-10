import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import { getMenuItems } from "@/lib/queries";
import { urlFor } from "@/lib/sanity";

type SanityMenuItem = {
  _id: string;
  title: string;
  category: string;
  price: number;
  shortDescription?: string;
  image?: unknown;
  tags?: string[];
};

type MenuItem = {
  name: string;
  desc: string;
  price: string;
  image?: string;
  tags: string[];
};

type MenuCategory = {
  id: string;
  label: string;
  items: MenuItem[];
};

const categoryOrder = [
  { id: "sandwiches", label: "Sandwiches" },
  { id: "plates", label: "Plates" },
  { id: "sides-dips", label: "Sides & Dips" },
  { id: "desserts", label: "Desserts" },
  { id: "drinks", label: "Drinks" },
];

const tagLabels: Record<string, string> = {
  V: "Vegetarian",
  VG: "Vegan",
  GF: "Gluten-Free",
};

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState("sandwiches");
  const [menuItems, setMenuItems] = useState<SanityMenuItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadMenu() {
      try {
        const items = await getMenuItems();
        setMenuItems(items || []);
      } catch (error) {
        console.error("Failed to load menu items from Sanity:", error);
        setMenuItems([]);
      } finally {
        setLoading(false);
      }
    }

    loadMenu();
  }, []);

  const menuData: MenuCategory[] = useMemo(() => {
    return categoryOrder.map((category) => {
      const items = menuItems
        .filter((item) => item.category === category.id)
        .map((item) => ({
          name: item.title,
          desc: item.shortDescription || "",
          price: `${item.price} kr`,
          image: item.image
            ? urlFor(item.image).width(800).height(600).url()
            : undefined,
          tags: item.tags || [],
        }));

      return {
        id: category.id,
        label: category.label,
        items,
      };
    });
  }, [menuItems]);

  const currentCategory =
    menuData.find((c) => c.id === activeCategory) || menuData[0];

  return (
    <div>
      <section className="relative py-20 px-4" data-testid="menu-hero">
        <div className="absolute inset-0">
          <img
            src="/images/food-spread.png"
            alt="Food spread"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <h1
            className="font-serif text-4xl sm:text-5xl font-bold text-white mb-4"
            data-testid="text-menu-title"
          >
            Our Menu
          </h1>
          <p className="text-white/70 text-lg max-w-md mx-auto">
            Fresh ingredients, bold flavors, and something for everyone.
          </p>
        </div>
      </section>

      <section
        className="py-6 px-4 border-b sticky top-[57px] bg-background/95 backdrop-blur-md z-30"
        data-testid="menu-tabs"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-hide">
            {menuData.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-md text-sm font-medium whitespace-nowrap transition-colors ${
                  activeCategory === cat.id
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground bg-accent"
                }`}
                data-testid={`tab-${cat.id}`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 px-4" data-testid="menu-items">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between gap-4 mb-2">
            <h2
              className="font-serif text-2xl sm:text-3xl font-bold"
              data-testid="text-category-name"
            >
              {currentCategory?.label}
            </h2>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Badge variant="secondary" className="no-default-active-elevate">
                V = Vegetarian
              </Badge>
              <Badge variant="secondary" className="no-default-active-elevate">
                VG = Vegan
              </Badge>
              <Badge
                variant="secondary"
                className="no-default-active-elevate hidden sm:inline-flex"
              >
                GF = Gluten-Free
              </Badge>
            </div>
          </div>

          <p className="text-muted-foreground text-sm mb-8">
            All sandwiches served on our signature freshly baked sourdough
            bread.
          </p>

          {loading ? (
            <div className="text-center py-16 text-muted-foreground">
              Loading menu...
            </div>
          ) : currentCategory?.items.length === 0 ? (
            <div className="text-center py-16 text-muted-foreground">
              No menu items found in this category yet.
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {currentCategory.items.map((item) => (
                <Card
                  key={item.name}
                  className="group"
                  data-testid={`card-menu-${item.name
                    .toLowerCase()
                    .replace(/\s/g, "-")}`}
                >
                  {item.image && (
                    <div className="aspect-[4/3] rounded-t-md overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  )}

                  <div className="p-5">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className="font-semibold text-base">{item.name}</h3>
                      <span className="font-bold text-primary whitespace-nowrap text-sm">
                        {item.price}
                      </span>
                    </div>

                    <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                      {item.desc}
                    </p>

                    {item.tags.length > 0 && (
                      <div className="flex items-center gap-1.5 flex-wrap">
                        {item.tags.map((tag) => (
                          <Badge
                            key={tag}
                            variant="secondary"
                            className="text-xs"
                          >
                            {tagLabels[tag] || tag}
                          </Badge>
                        ))}
                      </div>
                    )}
                  </div>
                </Card>
              ))}
            </div>
          )}

          <div className="text-center mt-12 p-8 bg-card rounded-md">
            <h3 className="font-serif text-2xl font-bold mb-2">
              Ready to order?
            </h3>
            <p className="text-muted-foreground text-sm mb-5">
              Order online for quick pickup or delivery to your door.
            </p>
            <a
              href="https://foodie-cph.dk"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" data-testid="button-menu-order">
                Order Online
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
