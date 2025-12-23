import { Phone, MessageCircle, MapPin, Mail } from 'lucide-react';

const Contact = () => {
  const whatsappMessage = encodeURIComponent(
    "Hello, I want details for wedding decoration and event setup."
  );
  const phoneNumbers = ["6387080842", "6392730761", "7800088848"];
  const email = "ratantentrbl@gmail.com";

  return (
    <section id="contact" className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Header */}
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Contact Us
          </h2>
          <p className="text-cream/80 text-lg mb-10">
            Contact us for bookings, quotations and government events
          </p>

          {/* Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {/* Phone Numbers */}
            {phoneNumbers.map((phone, index) => (
              <div key={phone} className="flex items-center gap-3 justify-center md:justify-start">
                <div className="w-12 h-12 bg-cream/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone size={24} className="text-gold" />
                </div>
                <div className="text-left">
                  <p className="text-cream/70 text-sm">Phone {index + 1}</p>
                  <a 
                    href={`tel:${phone}`} 
                    className="text-lg font-semibold hover:text-gold transition-colors"
                  >
                    +91 {phone}
                  </a>
                </div>
              </div>
            ))}

            {/* Email */}
            <div className="flex items-center gap-3 justify-center md:justify-start">
              <div className="w-12 h-12 bg-cream/20 rounded-full flex items-center justify-center flex-shrink-0">
                <Mail size={24} className="text-gold" />
              </div>
              <div className="text-left">
                <p className="text-cream/70 text-sm">Email</p>
                <a 
                  href={`mailto:${email}`} 
                  className="text-lg font-semibold hover:text-gold transition-colors break-all"
                >
                  {email}
                </a>
              </div>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-center gap-3 justify-center mb-12">
            <div className="w-12 h-12 bg-cream/20 rounded-full flex items-center justify-center">
              <MapPin size={24} className="text-gold" />
            </div>
            <div className="text-left">
              <p className="text-cream/70 text-sm">Location</p>
              <p className="text-xl font-semibold">Raebareli, Uttar Pradesh</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`tel:${phoneNumbers[0]}`}
              className="flex items-center gap-3 bg-cream text-primary hover:bg-gold hover:text-cream px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg w-full sm:w-auto justify-center"
            >
              <Phone size={24} />
              <span>Call Now</span>
            </a>

            <a
              href={`https://wa.me/91${phoneNumbers[0]}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg w-full sm:w-auto justify-center"
            >
              <MessageCircle size={24} fill="white" />
              <span>WhatsApp Now</span>
            </a>

            <a
              href={`mailto:${email}`}
              className="flex items-center gap-3 bg-cream/20 hover:bg-cream/30 text-cream px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg w-full sm:w-auto justify-center border border-cream/30"
            >
              <Mail size={24} />
              <span>Email Us</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
