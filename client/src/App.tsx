import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import StickyOrderButton from "@/components/sticky-order-button";
import Home from "@/pages/home";
import MenuPage from "@/pages/menu";
import AboutPage from "@/pages/about";
import FindUsPage from "@/pages/find-us";
import CateringPage from "@/pages/catering";
import GalleryPage from "@/pages/gallery";
import JobsPage from "@/pages/jobs";
import NotFound from "@/pages/not-found";
import { useEffect } from "react";
import { useLocation } from "wouter";

function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return null;
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/menu" component={MenuPage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/find-us" component={FindUsPage} />
      <Route path="/catering" component={CateringPage} />
      <Route path="/gallery" component={GalleryPage} />
      <Route path="/jobs" component={JobsPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1">
            <ScrollToTop />
            <Router />
          </main>
          <Footer />
          <StickyOrderButton />
        </div>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
