import { 
  Tent, 
  Sparkles, 
  Lightbulb, 
  Armchair, 
  UtensilsCrossed, 
  Flower2, 
  Volume2, 
  Building2 
} from 'lucide-react';

const services = [
  {
    icon: Sparkles,
    title: "Wedding Decoration & Mandap Setup",
    description: "Exquisite mandap designs with flowers, drapes, and lighting for your special day."
  },
  {
    icon: Lightbulb,
    title: "Stage Decoration & Lighting",
    description: "Professional stage setups with elegant lighting and décor for ceremonies."
  },
  {
    icon: Tent,
    title: "Tent House & Shamiyana Services",
    description: "Premium tents, pandals, and shamiyana installations for all event sizes."
  },
  {
    icon: Armchair,
    title: "Chairs, Tables & Event Furniture",
    description: "Quality seating arrangements with sofas, chairs, and designer furniture."
  },
  {
    icon: UtensilsCrossed,
    title: "Outdoor Catering Services",
    description: "Delicious multi-cuisine catering with professional service staff."
  },
  {
    icon: Flower2,
    title: "Haldi & Mehendi Decoration",
    description: "Vibrant and colorful setups for pre-wedding ceremonies and functions."
  },
  {
    icon: Volume2,
    title: "Sound System & Power Backup",
    description: "High-quality sound systems, DJ setup, and reliable power generators."
  },
  {
    icon: Building2,
    title: "Government & Corporate Event Setup",
    description: "Professional event management for official functions and corporate gatherings."
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
            Our Services
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Complete event solutions for weddings, ceremonies, and official functions
          </p>
          <div className="w-24 h-1 bg-gold mx-auto mt-6" />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="bg-card p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-border group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                <service.icon size={28} className="text-primary group-hover:text-primary-foreground" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-card-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
