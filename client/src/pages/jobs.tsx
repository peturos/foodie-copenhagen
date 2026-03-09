import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Phone, Mail } from "lucide-react";

export default function JobsPage() {
  return (
    <div>
      <section className="relative py-20 px-4" data-testid="jobs-hero">
        <div className="absolute inset-0">
          <img src="/images/restaurant-interior.png" alt="Foodie restaurant" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-4" data-testid="text-jobs-title">Work at Foodie</h1>
          <p className="text-white/70 text-lg max-w-md mx-auto">Join our team and help us serve the best sandwiches in Amager.</p>
        </div>
      </section>

      <section className="py-16 px-4" data-testid="jobs-content">
        <div className="max-w-3xl mx-auto">
          <Card className="p-8" data-testid="card-jobs-info">
            <h2 className="font-serif text-2xl font-bold mb-4">Join the Foodie team</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                We're always looking for friendly, hardworking people to join our kitchen and front-of-house team. If you love food, enjoy working in a fast-paced environment, and want to be part of a neighborhood favorite, we'd love to hear from you.
              </p>
              <p>
                No specific experience required — we'll teach you everything you need to know. What matters most is a positive attitude and willingness to learn.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t">
              <h3 className="font-semibold mb-3">How to apply</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Drop by the restaurant with your CV, or reach out to us directly:
              </p>
              <div className="flex flex-col sm:flex-row items-start gap-3">
                <a href="tel:+4530205656">
                  <Button variant="outline" data-testid="button-jobs-call">
                    <Phone className="w-4 h-4 mr-2" />
                    +45 3020 5656
                  </Button>
                </a>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
