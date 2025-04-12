
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

// Sample categories data
const categories = [
  { id: 'electronics', name: 'Electronics', productCount: 24, image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80', description: 'Cutting-edge devices and tech accessories for modern living.' },
  { id: 'clothing', name: 'Clothing', productCount: 18, image: 'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80', description: 'Stylish apparel and fashion items for all seasons.' },
  { id: 'home-kitchen', name: 'Home & Kitchen', productCount: 15, image: 'https://images.unsplash.com/photo-1556911220-bda9f3c68e02?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80', description: 'Quality home furnishings and kitchen essentials.' },
  { id: 'sports', name: 'Sports', productCount: 12, image: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80', description: 'Athletic gear and equipment for every sport enthusiast.' },
  { id: 'beauty', name: 'Beauty', productCount: 9, image: 'https://images.unsplash.com/photo-1522338242992-e1a54906a8da?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80', description: 'Premium cosmetics and skincare for your daily routine.' },
  { id: 'books', name: 'Books', productCount: 14, image: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80', description: 'Bestsellers and literary treasures across all genres.' },
  { id: 'toys', name: 'Toys', productCount: 11, image: 'https://images.unsplash.com/photo-1558060370-d23c9c7e6fb4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80', description: 'Fun and educational toys for children of all ages.' },
  { id: 'food', name: 'Food', productCount: 8, image: 'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80', description: 'Gourmet and artisanal food products for every palate.' }
];

const Categories = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Header */}
        <div className="bg-gray-50 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-gray-900">Product Categories</h1>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl">
              Browse our products by category to find exactly what you're looking for.
            </p>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Link key={category.id} to={`/category/${category.id}`}>
                <div className="group bg-white shadow-md hover:shadow-lg transition-shadow overflow-hidden angular-card h-full flex flex-col">
                  <div className="relative h-48 overflow-hidden">
                    <div className="absolute inset-0 bg-teal-500 opacity-30 group-hover:opacity-0 transition-opacity duration-300"></div>
                    <img 
                      src={category.image} 
                      alt={category.name} 
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-0 right-0 bg-teal-500 text-white py-1 px-3 angular-border">
                      {category.productCount} Products
                    </div>
                  </div>
                  <div className="p-4 flex-grow">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-teal-500 transition-colors">
                      {category.name}
                    </h3>
                    <p className="mt-2 text-gray-600">{category.description}</p>
                  </div>
                  <div className="p-4 pt-0">
                    <div className="text-teal-500 font-medium flex items-center justify-end group-hover:underline">
                      Browse Category
                    </div>
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

export default Categories;
