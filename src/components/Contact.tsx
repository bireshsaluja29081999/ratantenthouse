import { Phone, MessageCircle, MapPin } from 'lucide-react';

const Contact = () => {
  const whatsappMessage = encodeURIComponent(
    "Hello, I want details for wedding decoration and event setup."
  );
  const phoneNumber = "6387080842";

  return (
    <section id="contact" className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          {/* Section Header */}
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Contact Us
          </h2>
          <p className="text-cream/80 text-lg mb-10">
            Contact us for bookings, quotations and government events
          </p>

          {/* Contact Info */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-cream/20 rounded-full flex items-center justify-center">
                <Phone size={24} className="text-gold" />
              </div>
              <div className="text-left">
                <p className="text-cream/70 text-sm">Call Us</p>
                <a 
                  href={`tel:${phoneNumber}`} 
                  className="text-xl font-semibold hover:text-gold transition-colors"
                >
                  +91 {phoneNumber}
                </a>
              </div>
            </div>

            <div className="hidden md:block w-px h-12 bg-cream/30" />

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-cream/20 rounded-full flex items-center justify-center">
                <MapPin size={24} className="text-gold" />
              </div>
              <div className="text-left">
                <p className="text-cream/70 text-sm">Location</p>
                <p className="text-xl font-semibold">Raebareli, Uttar Pradesh</p>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`tel:${phoneNumber}`}
              className="flex items-center gap-3 bg-cream text-primary hover:bg-gold hover:text-cream px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg w-full sm:w-auto justify-center"
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
        </div>
      </div>
    </section>
  );
};

export default Contact;
