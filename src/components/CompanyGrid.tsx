
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// Sample company data
const companies = [
  { id: 1, name: 'TechVision', logo: 'https://images.unsplash.com/photo-1560393464-5c69a73c5770?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80', productCount: 42 },
  { id: 2, name: 'EcoStyle', logo: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80', productCount: 28 },
  { id: 3, name: 'ModernHome', logo: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80', productCount: 35 },
  { id: 4, name: 'SportElite', logo: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80', productCount: 19 },
  { id: 5, name: 'FoodCraft', logo: 'https://images.unsplash.com/photo-1541661538396-53ba2d051eed?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80', productCount: 24 },
  { id: 6, name: 'GadgetPro', logo: 'https://images.unsplash.com/photo-1535378917042-10a22c95931a?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80', productCount: 31 },
];

const CompanyGrid = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Shop by Company</h2>
          <Link to="/companies" className="text-teal-500 hover:text-teal-600 flex items-center">
            View all companies <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {companies.map((company) => (
            <Link key={company.id} to={`/companies/${company.id}`}>
              <div className="bg-white shadow-md hover:shadow-lg transition-shadow angular-card p-6 h-full flex flex-col">
                <div className="flex items-center">
                  <div className="w-16 h-16 bg-gray-100 rounded-sm overflow-hidden flex-shrink-0">
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
                <div className="mt-4 flex items-center text-teal-500 text-sm font-medium">
                  Browse products <ArrowRight className="ml-1 h-4 w-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyGrid;
