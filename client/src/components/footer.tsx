import { Link } from "wouter";
import { Phone, MapPin, Clock, ExternalLink } from "lucide-react";
import { SiInstagram, SiFacebook } from "react-icons/si";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="bg-foreground text-background" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="mb-4">
              <span className="font-serif text-3xl font-bold">Foodie</span>
              <p className="text-sm opacity-60 mt-1">Copenhagen</p>
            </div>
            <p className="text-sm opacity-70 leading-relaxed">
              Fresh sourdough sandwiches with bold flavors. A local Amager favorite since day one.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 opacity-90">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              <Link href="/menu"><span className="text-sm opacity-70 cursor-pointer" data-testid="link-footer-menu">Menu</span></Link>
              <Link href="/about"><span className="text-sm opacity-70 cursor-pointer" data-testid="link-footer-about">About Foodie</span></Link>
              <Link href="/find-us"><span className="text-sm opacity-70 cursor-pointer" data-testid="link-footer-findus">Find Us</span></Link>
              <Link href="/catering"><span className="text-sm opacity-70 cursor-pointer" data-testid="link-footer-catering">Catering</span></Link>
              <Link href="/gallery"><span className="text-sm opacity-70 cursor-pointer" data-testid="link-footer-gallery">Gallery</span></Link>
            </nav>
          </div>

          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 opacity-90">Contact</h4>
            <div className="space-y-3 text-sm opacity-70">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                Amagerbrogade 13,<br />K&oslash;benhavn S, 2300 K&oslash;benhavn
              </p>
              <a href="tel:+4530205656" className="flex items-center gap-2" data-testid="link-footer-phone">
                <Phone className="w-4 h-4 shrink-0" />
                +45 3020 5656
              </a>
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 mt-0.5 shrink-0" />
                <div>
                  <p>Mon-Fri: 11:00 - 18:00</p>
                  <p>Sat: 11:30 - 15:00</p>
                  <p>Sun: Closed</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 opacity-90">Order Now</h4>
            <p className="text-sm opacity-70 mb-4">Pickup and delivery from Amagerbrogade.</p>
            <a href="https://foodie-cph.dk" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="border-background/30 text-background" data-testid="button-order-footer">
                Order Online
                <ExternalLink className="w-3.5 h-3.5 ml-1.5" />
              </Button>
            </a>
            <div className="flex items-center gap-3 mt-6">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" data-testid="link-facebook">
                <SiFacebook className="w-5 h-5 opacity-60" />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" data-testid="link-instagram">
                <SiInstagram className="w-5 h-5 opacity-60" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-background/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs opacity-50">
          <p>&copy; {new Date().getFullYear()} Foodie Copenhagen. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="https://www.findsmiley.dk" target="_blank" rel="noopener noreferrer" data-testid="link-smiley">Hygiene Report</a>
            <Link href="/jobs"><span className="cursor-pointer" data-testid="link-footer-jobs">Jobs</span></Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
