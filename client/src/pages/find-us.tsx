import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Phone, Clock, Navigation, Train, ExternalLink } from "lucide-react";

export default function FindUsPage() {
  return (
    <div>
      <section className="relative py-20 px-4" data-testid="findus-hero">
        <div className="absolute inset-0">
          <img src="/images/restaurant-interior.png" alt="Foodie restaurant" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-4" data-testid="text-findus-title">Find Us</h1>
          <p className="text-white/70 text-lg max-w-md mx-auto">We're right on Amagerbrogade — easy to find, easy to love.</p>
        </div>
      </section>

      <section className="py-16 px-4" data-testid="findus-info">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="p-6" data-testid="card-findus-address">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Address</h3>
                  <p className="text-sm text-muted-foreground">
                    Amagerbrogade 13<br />
                    K&oslash;benhavn S, 2300<br />
                    K&oslash;benhavn, Denmark
                  </p>
                  <a
                    href="https://maps.google.com/?q=Amagerbrogade+13,+2300+København"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-primary mt-2"
                    data-testid="link-directions"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    Get Directions
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-6" data-testid="card-findus-hours">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Opening Hours</h3>
                  <div className="text-sm text-muted-foreground space-y-0.5">
                    <div className="flex justify-between gap-4">
                      <span>Monday - Friday</span>
                      <span className="font-medium text-foreground">11:00 - 18:00</span>
                    </div>
                    <div className="flex justify-between gap-4">
                      <span>Saturday</span>
                      <span className="font-medium text-foreground">11:30 - 15:00</span>
                    </div>
                    <div className="flex justify-between gap-4">
                      <span>Sunday</span>
                      <span className="font-medium text-foreground">Closed</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6" data-testid="card-findus-phone">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Phone</h3>
                  <a href="tel:+4530205656" className="text-sm text-muted-foreground block" data-testid="link-findus-phone">
                    +45 3020 5656
                  </a>
                  <p className="text-xs text-muted-foreground mt-2">Call for questions or special orders</p>
                </div>
              </div>
            </Card>
          </div>

          <div className="rounded-md overflow-hidden border" data-testid="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2250.3!2d12.5944!3d55.6606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4653ab1f1e12345%3A0x1234567890abcdef!2sAmagerbrogade%2013%2C%202300%20K%C3%B8benhavn!5e0!3m2!1sen!2sdk!4v1700000000000!5m2!1sen!2sdk"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Foodie Copenhagen location"
            />
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <Train className="w-5 h-5 text-primary" />
                Getting Here
              </h3>
              <div className="text-sm text-muted-foreground space-y-2 leading-relaxed">
                <p><strong>Metro:</strong> Take the M1 or M2 to Amagerbro station, then a short 5-minute walk south along Amagerbrogade.</p>
                <p><strong>Bus:</strong> Routes 5C and 350S stop nearby on Amagerbrogade.</p>
                <p><strong>Bike:</strong> Bike racks available right outside the restaurant.</p>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary" />
                Pickup & Delivery
              </h3>
              <div className="text-sm text-muted-foreground space-y-2 leading-relaxed">
                <p><strong>Pickup:</strong> Order online and grab your food at the counter. Usually ready in 15-20 minutes.</p>
                <p><strong>Delivery:</strong> We deliver within the Amager area. Order through our website for delivery options.</p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center p-8 bg-card rounded-md">
            <h3 className="font-serif text-2xl font-bold mb-2">Order for pickup or delivery</h3>
            <p className="text-muted-foreground text-sm mb-5">Skip the wait — order online and we'll have it ready for you.</p>
            <a href="https://foodie-cph.dk" target="_blank" rel="noopener noreferrer">
              <Button size="lg" data-testid="button-findus-order">
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
