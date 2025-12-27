import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Gallery from '@/components/Gallery';
import Clients from '@/components/Clients';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import FloatingCTAs from '@/components/FloatingCTAs';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <Gallery />
        <Clients />
        <Contact />
      </main>
      <Footer />
      <FloatingCTAs />
    </div>
  );
};

export default Index;
