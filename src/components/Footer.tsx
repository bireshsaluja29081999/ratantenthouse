import { Phone, Mail, MapPin } from 'lucide-react';
import logo from '@/assets/logo.jpg';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const phoneNumbers = ["6387080842", "6392730761", "7800088848"];
  const email = "ratantentrbl@gmail.com";

  return (
    <footer className="bg-burgundy-dark text-cream py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Logo & Info */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="flex items-center gap-4">
              <img 
                src={logo} 
                alt="Ratan Tent House" 
                className="h-16 w-auto rounded-full border-2 border-gold"
              />
              <div>
                <h3 className="font-heading text-2xl font-bold">Ratan Tent House</h3>
                <p className="text-cream/70 text-sm">Since 1967 • 55+ Years of Excellence</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-cream/70 text-sm mt-2">
              <MapPin size={16} className="text-gold" />
              <span>Raebareli, Uttar Pradesh</span>
            </div>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-left">
            <h4 className="font-heading text-lg font-semibold text-gold mb-4">Contact Us</h4>
            <div className="space-y-3">
              {phoneNumbers.map((phone) => (
                <a 
                  key={phone}
                  href={`tel:${phone}`} 
                  className="flex items-center gap-2 text-cream/80 hover:text-gold transition-colors justify-center md:justify-start"
                >
                  <Phone size={14} />
                  <span>+91 {phone}</span>
                </a>
              ))}
              <a 
                href={`mailto:${email}`} 
                className="flex items-center gap-2 text-cream/80 hover:text-gold transition-colors justify-center md:justify-start"
              >
                <Mail size={14} />
                <span>{email}</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h4 className="font-heading text-lg font-semibold text-gold mb-4">Quick Links</h4>
            <nav className="flex flex-col gap-3">
              <a href="#home" className="text-cream/80 hover:text-gold transition-colors">Home</a>
              <a href="#services" className="text-cream/80 hover:text-gold transition-colors">Services</a>
              <a href="#gallery" className="text-cream/80 hover:text-gold transition-colors">Gallery</a>
              <a href="#contact" className="text-cream/80 hover:text-gold transition-colors">Contact</a>
            </nav>
          </div>
        </div>

        <div className="border-t border-cream/20 mt-10 pt-6 text-center">
          <p className="text-cream/60 text-sm">
            © {currentYear} Ratan Tent House. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
