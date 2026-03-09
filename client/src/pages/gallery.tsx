import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const galleryImages = [
  { src: "/images/pesto-chicken.png", alt: "Pesto Chicken Sandwich" },
  { src: "/images/egyptian-kebab.png", alt: "Egyptian Kebab Sandwich" },
  { src: "/images/falafel.png", alt: "Falafel Sandwich" },
  { src: "/images/avocado.png", alt: "Avocado Sandwich" },
  { src: "/images/chili-beef.png", alt: "Chili Beef Sandwich" },
  { src: "/images/baba-chicken.png", alt: "Baba Chicken Sandwich" },
  { src: "/images/hero-sandwich.png", alt: "Premium Sourdough Sandwich" },
  { src: "/images/sourdough-bread.png", alt: "Fresh Sourdough Bread" },
  { src: "/images/food-spread.png", alt: "Mediterranean Food Spread" },
  { src: "/images/sides-dips.png", alt: "Sides and Dips" },
  { src: "/images/catering-platter.png", alt: "Catering Platter" },
  { src: "/images/restaurant-interior.png", alt: "Foodie Restaurant Interior" },
];

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);

  return (
    <div>
      <section className="relative py-20 px-4" data-testid="gallery-hero">
        <div className="absolute inset-0">
          <img src="/images/food-spread.png" alt="Food spread" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-4" data-testid="text-gallery-title">Gallery</h1>
          <p className="text-white/70 text-lg max-w-md mx-auto">A taste of what's waiting for you at Foodie.</p>
        </div>
      </section>

      <section className="py-16 px-4" data-testid="gallery-grid">
        <div className="max-w-7xl mx-auto">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {galleryImages.map((img, idx) => (
              <div
                key={idx}
                className="break-inside-avoid cursor-pointer rounded-md overflow-hidden group"
                onClick={() => setSelectedImage(img)}
                data-testid={`gallery-image-${idx}`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-2 bg-black border-none">
          {selectedImage && (
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-full h-auto rounded"
              data-testid="gallery-lightbox-image"
            />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
