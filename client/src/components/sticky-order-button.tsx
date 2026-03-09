import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

export default function StickyOrderButton() {
  return (
    <div className="fixed bottom-4 right-4 z-40 sm:hidden" data-testid="sticky-order">
      <a href="https://foodie-cph.dk" target="_blank" rel="noopener noreferrer">
        <Button size="lg" className="shadow-lg rounded-full px-6" data-testid="button-order-sticky">
          Order Now
          <ExternalLink className="w-4 h-4 ml-1.5" />
        </Button>
      </a>
    </div>
  );
}
