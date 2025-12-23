import logo from '@/assets/logo.jpg';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-burgundy-dark text-cream py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Info */}
          <div className="flex items-center gap-4">
            <img 
              src={logo} 
              alt="Ratan Tent House" 
              className="h-14 w-auto rounded-full border-2 border-gold"
            />
            <div>
              <h3 className="font-heading text-xl font-bold">Ratan Tent House</h3>
              <p className="text-cream/70 text-sm">Since 1967 • Raebareli, UP</p>
            </div>
          </div>

          {/* Quick Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            <a href="#home" className="text-cream/80 hover:text-gold transition-colors">Home</a>
            <a href="#services" className="text-cream/80 hover:text-gold transition-colors">Services</a>
            <a href="#gallery" className="text-cream/80 hover:text-gold transition-colors">Gallery</a>
            <a href="#contact" className="text-cream/80 hover:text-gold transition-colors">Contact</a>
          </nav>
        </div>

        <div className="border-t border-cream/20 mt-8 pt-6 text-center">
          <p className="text-cream/60 text-sm">
            © {currentYear} Ratan Tent House. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
