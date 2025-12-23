import { Phone, MessageCircle, Star } from 'lucide-react';
import heroImage from '@/assets/gallery/entrance-2.jpg';

const Hero = () => {
  const whatsappMessage = encodeURIComponent(
    "Hello, I want details for wedding decoration and event setup."
  );
  const phoneNumber = "6387080842";

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-burgundy-dark/80 via-burgundy-dark/60 to-burgundy-dark/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 bg-gold/20 backdrop-blur-sm border border-gold/40 rounded-full px-4 py-2 mb-6 animate-fade-in">
            <Star className="text-gold" size={18} fill="currentColor" />
            <span className="text-cream text-sm font-medium">
              Trusted for Weddings & Government Events in Raebareli
            </span>
            <Star className="text-gold" size={18} fill="currentColor" />
          </div>

          {/* Main Heading */}
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-cream mb-4 text-shadow-lg animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Ratan Tent House
          </h1>
          
          <h2 className="font-heading text-2xl md:text-3xl text-gold-light mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Wedding & Event Management in Raebareli
          </h2>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-cream/90 mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.3s' }}>
            Complete Tent, Catering, Wedding Decoration & Government Event Setup
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <a
              href={`tel:${phoneNumber}`}
              className="flex items-center gap-3 bg-primary hover:bg-burgundy-light text-primary-foreground px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg w-full sm:w-auto justify-center"
            >
              <Phone size={24} />
              <span>Call Now</span>
            </a>

            <a
              href={`https://wa.me/91${phoneNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg w-full sm:w-auto justify-center"
            >
              <MessageCircle size={24} fill="white" />
              <span>WhatsApp Now</span>
            </a>
          </div>

          {/* Experience Badge */}
          <div className="mt-12 animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <p className="text-cream/80 text-sm">
              Serving families since <span className="text-gold font-bold">1967</span> • 55+ Years of Excellence
            </p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-cream/50 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-cream/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
