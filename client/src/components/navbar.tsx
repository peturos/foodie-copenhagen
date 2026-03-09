import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X, Phone, MapPin, ExternalLink } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/about", label: "About" },
  { href: "/find-us", label: "Find Us" },
  { href: "/catering", label: "Catering" },
  { href: "/gallery", label: "Gallery" },
];

export default function Navbar() {
  const [location] = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="bg-foreground/95 text-background text-xs py-2 px-4 hidden md:block" data-testid="topbar">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
          <div className="flex items-center gap-4 flex-wrap">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3 h-3" />
              Amagerbrogade 13, K&oslash;benhavn S, 2300
            </span>
            <a href="tel:+4530205656" className="flex items-center gap-1.5 opacity-80 transition-opacity" data-testid="link-phone-topbar">
              <Phone className="w-3 h-3" />
              +45 3020 5656
            </a>
          </div>
          <span className="opacity-70">Mon-Fri 11:00-18:00 &middot; Sat 11:30-15:00</span>
        </div>
      </div>

      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b" data-testid="navbar">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 px-4 py-3">
          <Link href="/" data-testid="link-logo">
            <div className="flex flex-col">
              <span className="font-serif text-2xl font-bold tracking-tight leading-none">Foodie</span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground leading-tight">Copenhagen</span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1" data-testid="nav-desktop">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <span
                  className={`px-3 py-2 text-sm font-medium rounded-md transition-colors cursor-pointer ${
                    location === link.href
                      ? "text-foreground bg-accent"
                      : "text-muted-foreground"
                  }`}
                  data-testid={`link-nav-${link.label.toLowerCase().replace(/\s/g, "-")}`}
                >
                  {link.label}
                </span>
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="https://foodie-cph.dk"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:block"
            >
              <Button size="default" data-testid="button-order-nav">
                Order Online
                <ExternalLink className="w-3.5 h-3.5 ml-1.5" />
              </Button>
            </a>

            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon" data-testid="button-mobile-menu">
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-72 p-0">
                <div className="flex flex-col h-full">
                  <div className="p-6 border-b">
                    <div className="flex flex-col">
                      <span className="font-serif text-2xl font-bold tracking-tight">Foodie</span>
                      <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Copenhagen</span>
                    </div>
                  </div>
                  <nav className="flex flex-col p-4 gap-1">
                    {navLinks.map((link) => (
                      <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>
                        <span
                          className={`block px-4 py-3 rounded-md text-sm font-medium transition-colors cursor-pointer ${
                            location === link.href
                              ? "bg-accent text-foreground"
                              : "text-muted-foreground"
                          }`}
                          data-testid={`link-mobile-${link.label.toLowerCase().replace(/\s/g, "-")}`}
                        >
                          {link.label}
                        </span>
                      </Link>
                    ))}
                  </nav>
                  <div className="mt-auto p-4 border-t">
                    <a href="https://foodie-cph.dk" target="_blank" rel="noopener noreferrer" className="block">
                      <Button className="w-full" data-testid="button-order-mobile">
                        Order Online
                        <ExternalLink className="w-3.5 h-3.5 ml-1.5" />
                      </Button>
                    </a>
                    <div className="mt-4 text-xs text-muted-foreground space-y-1">
                      <p className="flex items-center gap-1.5"><MapPin className="w-3 h-3" /> Amagerbrogade 13</p>
                      <p className="flex items-center gap-1.5"><Phone className="w-3 h-3" /> +45 3020 5656</p>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </>
  );
}
