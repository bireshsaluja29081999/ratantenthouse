import { useState } from 'react';

// Import all gallery images
import tentSetup1 from '@/assets/gallery/tent-setup-1.jpg';
import haldiMehendi1 from '@/assets/gallery/haldi-mehendi-1.jpg';
import haldiMehendi2 from '@/assets/gallery/haldi-mehendi-2.jpg';
import seating1 from '@/assets/gallery/seating-1.jpg';
import tentColorful1 from '@/assets/gallery/tent-colorful-1.jpg';
import lighting1 from '@/assets/gallery/lighting-1.jpg';
import mandap1 from '@/assets/gallery/mandap-1.jpg';
import tentColorful2 from '@/assets/gallery/tent-colorful-2.jpg';
import tentColorful3 from '@/assets/gallery/tent-colorful-3.jpg';
import seating2 from '@/assets/gallery/seating-2.jpg';
import venue1 from '@/assets/gallery/venue-1.jpg';
import entrance1 from '@/assets/gallery/entrance-1.jpg';
import venue2 from '@/assets/gallery/venue-2.jpg';
import ganesh1 from '@/assets/gallery/ganesh-1.jpg';
import catering1 from '@/assets/gallery/catering-1.jpg';
import catering2 from '@/assets/gallery/catering-2.jpg';
import stage1 from '@/assets/gallery/stage-1.jpg';
import entrance2 from '@/assets/gallery/entrance-2.jpg';

type Category = 'all' | 'wedding' | 'tent' | 'catering' | 'lighting' | 'haldi';

const galleryItems = [
  { src: entrance2, category: 'wedding', alt: 'Grand Wedding Entrance' },
  { src: mandap1, category: 'wedding', alt: 'Beautiful Mandap Setup' },
  { src: lighting1, category: 'lighting', alt: 'Elegant Night Lighting' },
  { src: tentSetup1, category: 'tent', alt: 'Premium Tent Setup' },
  { src: haldiMehendi1, category: 'haldi', alt: 'Haldi Ceremony Decoration' },
  { src: catering1, category: 'catering', alt: 'Catering Setup' },
  { src: venue1, category: 'wedding', alt: 'Venue Overview' },
  { src: tentColorful1, category: 'tent', alt: 'Colorful Tent Design' },
  { src: stage1, category: 'wedding', alt: 'Stage Decoration' },
  { src: seating1, category: 'tent', alt: 'Seating Arrangement' },
  { src: entrance1, category: 'wedding', alt: 'Entrance Decoration' },
  { src: catering2, category: 'catering', alt: 'Catering & Buffet' },
  { src: tentColorful2, category: 'tent', alt: 'Night Tent Setup' },
  { src: ganesh1, category: 'wedding', alt: 'Ganesh Decoration' },
  { src: venue2, category: 'wedding', alt: 'Venue Night View' },
  { src: seating2, category: 'tent', alt: 'Elegant Seating' },
  { src: tentColorful3, category: 'tent', alt: 'Rainbow Tent Design' },
  { src: haldiMehendi2, category: 'haldi', alt: 'Mehendi Signage' },
];

const categories: { value: Category; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'wedding', label: 'Wedding Stage' },
  { value: 'tent', label: 'Tent Setup' },
  { value: 'catering', label: 'Catering' },
  { value: 'lighting', label: 'Lighting' },
  { value: 'haldi', label: 'Haldi & Mehendi' },
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('all');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredItems = activeCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
            Our Work
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Browse through our recent event setups and decorations
          </p>
          <div className="w-24 h-1 bg-gold mx-auto mt-6" />
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              className={`px-5 py-2 rounded-full font-medium transition-all duration-300 ${
                activeCategory === cat.value
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-secondary text-secondary-foreground hover:bg-primary/10'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredItems.map((item, index) => (
            <div
              key={index}
              className="relative aspect-[4/3] overflow-hidden rounded-xl cursor-pointer group"
              onClick={() => setSelectedImage(item.src)}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-burgundy-dark/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <p className="absolute bottom-4 left-4 right-4 text-cream font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-shadow">
                {item.alt}
              </p>
            </div>
          ))}
        </div>

        {/* Attribution */}
        <p className="text-center text-muted-foreground mt-10 text-sm">
          All setups executed by <span className="font-semibold text-primary">Ratan Tent House (RTH)</span>
        </p>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-white text-4xl hover:text-gold transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            ×
          </button>
          <img
            src={selectedImage}
            alt="Gallery preview"
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
          />
        </div>
      )}
    </section>
  );
};

export default Gallery;
