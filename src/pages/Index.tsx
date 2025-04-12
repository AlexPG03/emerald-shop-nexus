
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import CompanyGrid from '@/components/CompanyGrid';
import ProductGrid from '@/components/ProductGrid';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <CompanyGrid />
        <ProductGrid />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
