import { Phone, MessageCircle, Sparkles, Mail } from 'lucide-react';
import heroImage from '@/assets/gallery/entrance-2.jpg';

const Hero = () => {
  const whatsappMessage = encodeURIComponent(
    "Hello, I want details for wedding decoration and event setup."
  );
  const phoneNumbers = ["6387080842", "6392730761", "7800088848"];
  const email = "ratantentrbl@gmail.com";

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Ken Burns Effect */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105 animate-[pulse-soft_20s_ease-in-out_infinite]"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Elegant Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-burgundy-dark/90 via-burgundy-dark/70 to-burgundy-dark/95" />
      <div className="absolute inset-0 bg-gradient-to-r from-burgundy-dark/40 via-transparent to-burgundy-dark/40" />
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 border border-gold/20 rounded-full animate-float opacity-30" />
      <div className="absolute bottom-32 right-16 w-24 h-24 border border-gold/15 rounded-full animate-float opacity-20" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/3 right-20 w-2 h-2 bg-gold/40 rounded-full animate-pulse" />
      <div className="absolute bottom-1/3 left-24 w-1.5 h-1.5 bg-gold/30 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center pt-24 pb-16">
        <div className="max-w-5xl mx-auto">
          
          {/* Decorative Line Top */}
          <div className="flex items-center justify-center gap-4 mb-8 opacity-0 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold/60" />
            <Sparkles className="text-gold/70" size={16} />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold/60" />
          </div>

          {/* Elegant Trust Badge */}
          <div className="inline-flex items-center gap-3 glass-effect elegant-border rounded-full px-6 py-3 mb-10 opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <span className="text-cream/90 text-sm tracking-[0.2em] uppercase font-light">
              Trusted Since 1967
            </span>
            <span className="w-1 h-1 bg-gold rounded-full" />
            <span className="text-gold-light text-sm tracking-[0.15em] uppercase font-light">
              55+ Years of Excellence
            </span>
          </div>

          {/* Main Heading with Elegant Typography */}
          <div className="mb-6 opacity-0 animate-fade-in-slow" style={{ animationDelay: '0.3s' }}>
            <p className="text-gold/80 text-sm tracking-[0.4em] uppercase mb-4 font-light">
              Premium Event Services
            </p>
            <h1 className="font-heading text-5xl md:text-6xl lg:text-8xl font-bold text-cream mb-2 text-shadow-elegant leading-tight">
              Ratan Tent House
            </h1>
          </div>
          
          {/* Decorative Divider */}
          <div className="flex items-center justify-center gap-6 mb-8 opacity-0 animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <div className="h-px w-24 md:w-32 bg-gradient-to-r from-transparent via-gold/50 to-gold/80" />
            <div className="w-3 h-3 border border-gold/60 rotate-45" />
            <div className="h-px w-24 md:w-32 bg-gradient-to-l from-transparent via-gold/50 to-gold/80" />
          </div>

          {/* Subheading */}
          <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl text-gold-light mb-6 opacity-0 animate-fade-in-slow font-medium tracking-wide" style={{ animationDelay: '0.6s' }}>
            Wedding & Event Management
          </h2>

          {/* Tagline */}
          <p className="text-lg md:text-xl text-cream/80 mb-12 max-w-2xl mx-auto opacity-0 animate-fade-in font-light tracking-wide leading-relaxed" style={{ animationDelay: '0.7s' }}>
            Crafting unforgettable moments with exquisite tent setups, 
            <span className="text-gold-light"> elegant decorations</span>, and 
            <span className="text-gold-light"> world-class catering</span> in Raebareli
          </p>

          {/* Elegant CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 opacity-0 animate-scale-in" style={{ animationDelay: '0.9s' }}>
            <a
              href={`tel:${phoneNumbers[0]}`}
              className="group relative flex items-center gap-4 bg-gradient-to-r from-primary to-burgundy-light hover:from-burgundy-light hover:to-primary text-primary-foreground px-10 py-5 rounded-full text-lg font-medium transition-all duration-500 hover:scale-105 shadow-2xl hover:shadow-gold/20 w-full sm:w-auto justify-center overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-gold/0 via-gold/10 to-gold/0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
              <Phone size={22} className="relative z-10" />
              <span className="relative z-10 tracking-wide">Call Now</span>
            </a>

            <a
              href={`https://wa.me/91${phoneNumbers[0]}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center gap-4 bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-600 text-white px-10 py-5 rounded-full text-lg font-medium transition-all duration-500 hover:scale-105 shadow-2xl hover:shadow-emerald-500/20 w-full sm:w-auto justify-center overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
              <MessageCircle size={22} fill="white" className="relative z-10" />
              <span className="relative z-10 tracking-wide">WhatsApp</span>
            </a>
          </div>

          {/* Contact Info */}
          <div className="mt-10 opacity-0 animate-fade-in" style={{ animationDelay: '1s' }}>
            <div className="glass-effect elegant-border rounded-2xl px-8 py-6 inline-block">
              <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10">
                {/* Phone Numbers */}
                <div className="flex flex-wrap items-center justify-center gap-4">
                  {phoneNumbers.map((phone, index) => (
                    <a
                      key={phone}
                      href={`tel:${phone}`}
                      className="flex items-center gap-2 text-cream/90 hover:text-gold transition-colors duration-300"
                    >
                      <Phone size={16} className="text-gold/70" />
                      <span className="text-sm tracking-wide">+91 {phone}</span>
                      {index < phoneNumbers.length - 1 && (
                        <span className="hidden md:inline text-gold/30 ml-2">|</span>
                      )}
                    </a>
                  ))}
                </div>
                
                {/* Divider */}
                <div className="hidden md:block w-px h-6 bg-gold/30" />
                
                {/* Email */}
                <a
                  href={`mailto:${email}`}
                  className="flex items-center gap-2 text-cream/90 hover:text-gold transition-colors duration-300"
                >
                  <Mail size={16} className="text-gold/70" />
                  <span className="text-sm tracking-wide">{email}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Location Badge */}
          <div className="mt-16 opacity-0 animate-fade-in" style={{ animationDelay: '1.1s' }}>
            <p className="text-cream/50 text-sm tracking-[0.25em] uppercase font-light">
              Serving Raebareli & Surrounding Areas
            </p>
          </div>
        </div>
      </div>

      {/* Elegant Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in" style={{ animationDelay: '1.3s' }}>
        <div className="flex flex-col items-center gap-3">
          <span className="text-cream/40 text-xs tracking-[0.3em] uppercase">Scroll</span>
          <div className="w-6 h-10 border border-cream/30 rounded-full flex justify-center p-2">
            <div className="w-1 h-2 bg-gold/60 rounded-full animate-bounce" />
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
