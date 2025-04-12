
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

// Sample company data (expanded from CompanyGrid)
const companies = [
  { id: 1, name: 'TechVision', logo: 'https://images.unsplash.com/photo-1560393464-5c69a73c5770?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80', productCount: 42, description: 'Leading provider of cutting-edge electronic devices and accessories.' },
  { id: 2, name: 'EcoStyle', logo: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80', productCount: 28, description: 'Sustainable clothing and accessories made from eco-friendly materials.' },
  { id: 3, name: 'ModernHome', logo: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80', productCount: 35, description: 'Contemporary home decor and furniture for modern living spaces.' },
  { id: 4, name: 'SportElite', logo: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80', productCount: 19, description: 'High-performance athletic gear and fitness equipment.' },
  { id: 5, name: 'FoodCraft', logo: 'https://images.unsplash.com/photo-1541661538396-53ba2d051eed?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80', productCount: 24, description: 'Artisanal food products and gourmet ingredients.' },
  { id: 6, name: 'GadgetPro', logo: 'https://images.unsplash.com/photo-1535378917042-10a22c95931a?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80', productCount: 31, description: 'Innovative gadgets and tech accessories for everyday life.' },
  { id: 7, name: 'LuxuryDesign', logo: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80', productCount: 18, description: 'Premium luxury items and designer goods for the discerning customer.' },
  { id: 8, name: 'NatureEssence', logo: 'https://images.unsplash.com/photo-1562619425-c307066a5b18?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80', productCount: 22, description: 'Natural beauty and wellness products made from plant-based ingredients.' },
  { id: 9, name: 'KidZone', logo: 'https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80', productCount: 27, description: 'Educational toys and fun products for children of all ages.' },
];

const Companies = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Header */}
        <div className="bg-gray-50 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-gray-900">Our Partner Companies</h1>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl">
              Discover products from these premium brands, each offering unique items across various categories.
            </p>
          </div>
        </div>

        {/* Companies Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {companies.map((company) => (
              <Link key={company.id} to={`/companies/${company.id}`}>
                <div className="bg-white shadow-md hover:shadow-lg transition-shadow angular-card p-6 h-full flex flex-col">
                  <div className="flex items-center">
                    <div className="w-20 h-20 bg-gray-100 rounded-sm overflow-hidden flex-shrink-0">
                      <img 
                        src={company.logo} 
                        alt={`${company.name} logo`} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-semibold text-gray-900">{company.name}</h3>
                      <p className="text-sm text-gray-500">{company.productCount} products</p>
                    </div>
                  </div>
                  <p className="mt-4 text-gray-600">{company.description}</p>
                  <div className="mt-4 flex items-center text-teal-500 text-sm font-medium mt-auto">
                    View company profile <ArrowRight className="ml-1 h-4 w-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Companies;
