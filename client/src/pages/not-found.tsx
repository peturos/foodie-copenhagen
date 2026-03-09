import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4" data-testid="not-found-page">
      <div className="text-center">
        <h1 className="font-serif text-5xl sm:text-6xl font-bold mb-4" data-testid="text-404">404</h1>
        <p className="text-xl text-muted-foreground mb-2">Page not found</p>
        <p className="text-sm text-muted-foreground mb-8 max-w-sm mx-auto">
          The page you're looking for doesn't exist. Let's get you back to something delicious.
        </p>
        <Link href="/">
          <Button data-testid="button-back-home">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </Link>
      </div>
    </div>
  );
}
