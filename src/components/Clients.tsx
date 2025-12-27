import halLogo from '@/assets/clients/hal-logo.png';
import nsgiLogo from '@/assets/clients/nsgi-logo.jpg';
import sjsLogo from '@/assets/clients/sjs-logo.jpg';
import rgiptLogo from '@/assets/clients/rgipt-logo.png';

const clients = [
  {
    name: 'Hindustan Aeronautics Limited',
    logo: halLogo,
    type: 'Government',
  },
  {
    name: 'Rajiv Gandhi Institute of Petroleum Technology',
    logo: rgiptLogo,
    type: 'Government',
  },
  {
    name: 'New Standard Group of Institutes',
    logo: nsgiLogo,
    type: 'Private',
  },
  {
    name: 'S.J.S. Public School',
    logo: sjsLogo,
    type: 'Private',
  },
];

const Clients = () => {
  return (
    <section id="clients" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
            Our Esteemed Clients
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Trusted by Government, Private & Semi-Private Institutions
          </p>
        </div>

        {/* Client Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center max-w-5xl mx-auto">
          {clients.map((client) => (
            <div
              key={client.name}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 w-full flex flex-col items-center justify-center min-h-[140px]"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="max-h-20 md:max-h-24 w-auto object-contain"
              />
              <span className="mt-3 text-xs text-muted-foreground font-medium uppercase tracking-wide">
                {client.type}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
