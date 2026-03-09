import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Phone, ExternalLink, Users, Building, Calendar } from "lucide-react";

const cateringOptions = [
  {
    title: "Sandwich Platter",
    desc: "A selection of our bestselling sandwiches, beautifully presented and cut for sharing. Perfect for meetings and team lunches.",
    serves: "8-12 people",
    price: "From 599 kr",
  },
  {
    title: "Mezze Spread",
    desc: "A generous spread of hummus, baba ganoush, tabbouleh, falafel, warm bread, olives, and fresh vegetables.",
    serves: "6-10 people",
    price: "From 449 kr",
  },
  {
    title: "Mixed Lunch Box",
    desc: "Individual boxed lunches with a sandwich, side, drink, and dessert. Great for events and conferences.",
    serves: "Per person",
    price: "From 89 kr/person",
  },
  {
    title: "Custom Order",
    desc: "Need something specific? We'll work with you to create a custom menu for your event, party, or office lunch.",
    serves: "Any size",
    price: "Contact us",
  },
];

export default function CateringPage() {
  return (
    <div>
      <section className="relative py-20 px-4" data-testid="catering-hero">
        <div className="absolute inset-0">
          <img src="/images/catering-platter.png" alt="Catering platter" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-4" data-testid="text-catering-title">Catering & Office Lunch</h1>
          <p className="text-white/70 text-lg max-w-lg mx-auto">Feed your team, impress your guests. Premium sandwiches and mezze platters for any occasion.</p>
        </div>
      </section>

      <section className="py-16 px-4" data-testid="catering-why">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-2">Why Choose Foodie</p>
            <h2 className="font-serif text-3xl font-bold">Catering that stands out</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center px-4">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
                <Users className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Any Size</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">From small team lunches to large corporate events, we scale to your needs.</p>
            </div>
            <div className="text-center px-4">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
                <Building className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Office Delivery</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">We deliver directly to your office in the Amager area. Fresh and on time.</p>
            </div>
            <div className="text-center px-4">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
                <Calendar className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Easy Booking</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Call us or send a message. We'll handle the rest and make your event delicious.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {cateringOptions.map((opt) => (
              <Card key={opt.title} className="p-6" data-testid={`card-catering-${opt.title.toLowerCase().replace(/\s/g, "-")}`}>
                <h3 className="font-semibold text-lg mb-2">{opt.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{opt.desc}</p>
                <div className="flex items-center justify-between gap-4 pt-3 border-t">
                  <span className="text-xs text-muted-foreground">Serves {opt.serves}</span>
                  <span className="font-bold text-primary text-sm">{opt.price}</span>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center p-10 bg-card rounded-md">
            <h3 className="font-serif text-2xl font-bold mb-2">Ready to order catering?</h3>
            <p className="text-muted-foreground text-sm mb-6 max-w-md mx-auto">
              Give us a call or send a message to discuss your needs. We typically need 24 hours notice for catering orders.
            </p>
            <div className="flex items-center justify-center gap-3 flex-wrap">
              <a href="tel:+4530205656">
                <Button size="lg" data-testid="button-catering-call">
                  <Phone className="w-4 h-4 mr-2" />
                  Call +45 3020 5656
                </Button>
              </a>
              <a href="https://foodie-cph.dk" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="lg" data-testid="button-catering-order">
                  Order Online
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
