import { Phone, MessageCircle } from 'lucide-react';

const FloatingCTAs = () => {
  const whatsappMessage = encodeURIComponent(
    "Hello, I want details for wedding decoration and event setup."
  );
  const phoneNumber = "6387080842";

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/91${phoneNumber}?text=${whatsappMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg transition-all duration-300 hover:scale-110 animate-pulse-soft"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={28} fill="white" />
      </a>

      {/* Call Button */}
      <a
        href={`tel:${phoneNumber}`}
        className="flex items-center justify-center w-14 h-14 bg-primary hover:bg-burgundy-dark text-primary-foreground rounded-full shadow-lg transition-all duration-300 hover:scale-110"
        aria-label="Call Now"
      >
        <Phone size={26} />
      </a>
    </div>
  );
};

export default FloatingCTAs;
