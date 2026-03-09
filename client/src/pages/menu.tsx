import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

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

const menuData: MenuCategory[] = [
  {
    id: "sandwiches",
    label: "Sandwiches",
    items: [
      { name: "Pesto Chicken", desc: "Grilled chicken, fresh pesto, mozzarella, sun-dried tomatoes on sourdough", price: "79 kr", image: "/images/pesto-chicken.png", tags: [] },
      { name: "Egyptian Kebab", desc: "Spiced grilled meat, tahini, fresh vegetables, pickled onion on sourdough", price: "89 kr", image: "/images/egyptian-kebab.png", tags: [] },
      { name: "Falafel Sandwich", desc: "Crispy falafel, hummus, pickled vegetables, fresh greens on sourdough", price: "69 kr", image: "/images/falafel.png", tags: ["V", "VG"] },
      { name: "Avocado Sandwich", desc: "Ripe avocado, cherry tomatoes, arugula, lemon dressing on sourdough", price: "75 kr", image: "/images/avocado.png", tags: ["V", "VG"] },
      { name: "Chili Beef", desc: "Slow-cooked beef, caramelized onions, chili mayo, melted cheese on sourdough", price: "89 kr", image: "/images/chili-beef.png", tags: [] },
      { name: "Baba Chicken", desc: "Grilled chicken, baba ganoush, roasted peppers, fresh herbs on sourdough", price: "82 kr", image: "/images/baba-chicken.png", tags: [] },
      { name: "Classic Club", desc: "Turkey, bacon, lettuce, tomato, mayo on toasted sourdough triple-decker", price: "85 kr", tags: [] },
      { name: "Tuna Melt", desc: "Tuna salad, cheddar cheese, pickles, red onion, melted on sourdough", price: "72 kr", tags: [] },
      { name: "Halloumi Veggie", desc: "Grilled halloumi, roasted vegetables, pesto, mixed greens on sourdough", price: "75 kr", tags: ["V"] },
      { name: "Lamb Kofta", desc: "Spiced lamb kofta, tzatziki, fresh salad, pickled turnip on sourdough", price: "92 kr", tags: [] },
      { name: "Chicken Shawarma", desc: "Marinated chicken, garlic sauce, pickles, fresh tomatoes on sourdough", price: "85 kr", tags: [] },
      { name: "Mozzarella & Tomato", desc: "Fresh mozzarella, heirloom tomatoes, basil, balsamic glaze on sourdough", price: "69 kr", tags: ["V"] },
    ],
  },
  {
    id: "plates",
    label: "Plates",
    items: [
      { name: "Kebab Plate", desc: "Grilled kebab served with rice, salad, hummus, and warm bread", price: "109 kr", tags: [] },
      { name: "Falafel Plate", desc: "Crispy falafel with tabbouleh, hummus, baba ganoush, and warm bread", price: "99 kr", tags: ["V", "VG"] },
      { name: "Chicken Plate", desc: "Marinated grilled chicken with rice, salad, and garlic sauce", price: "105 kr", tags: [] },
      { name: "Mixed Grill", desc: "Selection of grilled meats with sides, salad, and sauces", price: "129 kr", tags: [] },
    ],
  },
  {
    id: "sides",
    label: "Sides & Dips",
    items: [
      { name: "Hummus", desc: "Classic chickpea hummus with olive oil and paprika", price: "25 kr", image: "/images/sides-dips.png", tags: ["V", "VG", "GF"] },
      { name: "Baba Ganoush", desc: "Smoky roasted eggplant dip with tahini and lemon", price: "25 kr", tags: ["V", "VG", "GF"] },
      { name: "Tzatziki", desc: "Creamy yogurt with cucumber, garlic, and fresh dill", price: "20 kr", tags: ["V", "GF"] },
      { name: "Tabbouleh", desc: "Fresh parsley salad with bulgur, tomato, and lemon dressing", price: "30 kr", tags: ["V", "VG"] },
      { name: "Mixed Olives", desc: "Marinated Mediterranean olives with herbs", price: "20 kr", tags: ["V", "VG", "GF"] },
      { name: "Fries", desc: "Crispy golden fries with sea salt", price: "30 kr", tags: ["V", "VG", "GF"] },
      { name: "Sweet Potato Fries", desc: "Crispy sweet potato fries with aioli", price: "35 kr", tags: ["V"] },
      { name: "Garlic Bread", desc: "Toasted sourdough with garlic butter and herbs", price: "25 kr", tags: ["V"] },
    ],
  },
  {
    id: "desserts",
    label: "Desserts",
    items: [
      { name: "Baklava", desc: "Traditional layered pastry with pistachios and honey syrup", price: "35 kr", tags: ["V"] },
      { name: "Kunafeh", desc: "Warm cheese pastry with orange blossom syrup", price: "40 kr", tags: ["V"] },
      { name: "Date Balls", desc: "Energy balls with dates, almonds, and coconut", price: "25 kr", tags: ["V", "VG", "GF"] },
      { name: "Chocolate Brownie", desc: "Rich, fudgy chocolate brownie", price: "30 kr", tags: ["V"] },
    ],
  },
  {
    id: "drinks",
    label: "Drinks",
    items: [
      { name: "Fresh Juice", desc: "Orange, apple, or carrot freshly squeezed", price: "35 kr", tags: ["V", "VG", "GF"] },
      { name: "Ayran", desc: "Traditional yogurt drink, salted and refreshing", price: "20 kr", tags: ["V", "GF"] },
      { name: "Mint Lemonade", desc: "Freshly squeezed lemon with fresh mint and ice", price: "30 kr", tags: ["V", "VG", "GF"] },
      { name: "Sodavand", desc: "Coca-Cola, Fanta, or Sprite", price: "18 kr", tags: ["V", "VG", "GF"] },
      { name: "Water", desc: "Still or sparkling", price: "15 kr", tags: ["V", "VG", "GF"] },
      { name: "Turkish Tea", desc: "Traditional brewed tea served in a glass", price: "15 kr", tags: ["V", "VG", "GF"] },
    ],
  },
];

const tagLabels: Record<string, string> = {
  V: "Vegetarian",
  VG: "Vegan",
  GF: "Gluten-Free",
};

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState("sandwiches");

  const currentCategory = menuData.find((c) => c.id === activeCategory) || menuData[0];

  return (
    <div>
      <section className="relative py-20 px-4" data-testid="menu-hero">
        <div className="absolute inset-0">
          <img src="/images/food-spread.png" alt="Food spread" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-4" data-testid="text-menu-title">Our Menu</h1>
          <p className="text-white/70 text-lg max-w-md mx-auto">Fresh ingredients, bold flavors, and something for everyone.</p>
        </div>
      </section>

      <section className="py-6 px-4 border-b sticky top-[57px] bg-background/95 backdrop-blur-md z-30" data-testid="menu-tabs">
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
            <h2 className="font-serif text-2xl sm:text-3xl font-bold" data-testid="text-category-name">{currentCategory.label}</h2>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Badge variant="secondary" className="no-default-active-elevate">V = Vegetarian</Badge>
              <Badge variant="secondary" className="no-default-active-elevate">VG = Vegan</Badge>
              <Badge variant="secondary" className="no-default-active-elevate hidden sm:inline-flex">GF = Gluten-Free</Badge>
            </div>
          </div>
          <p className="text-muted-foreground text-sm mb-8">All sandwiches served on our signature freshly baked sourdough bread.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {currentCategory.items.map((item) => (
              <Card key={item.name} className="group" data-testid={`card-menu-${item.name.toLowerCase().replace(/\s/g, "-")}`}>
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
                    <span className="font-bold text-primary whitespace-nowrap text-sm">{item.price}</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">{item.desc}</p>
                  {item.tags.length > 0 && (
                    <div className="flex items-center gap-1.5 flex-wrap">
                      {item.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tagLabels[tag] || tag}
                        </Badge>
                      ))}
                    </div>
                  )}
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12 p-8 bg-card rounded-md">
            <h3 className="font-serif text-2xl font-bold mb-2">Ready to order?</h3>
            <p className="text-muted-foreground text-sm mb-5">Order online for quick pickup or delivery to your door.</p>
            <a href="https://foodie-cph.dk" target="_blank" rel="noopener noreferrer">
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
