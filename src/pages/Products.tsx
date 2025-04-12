
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CategoryFilter from '@/components/CategoryFilter';
import { Heart, ShoppingCart, Filter, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

// Sample product data (expanded from ProductGrid)
const allProducts = [
  { id: 1, name: 'Wireless Headphones', price: 99.99, category: 'Electronics', company: 'TechVision', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80' },
  { id: 2, name: 'Organic Cotton T-shirt', price: 29.99, category: 'Clothing', company: 'EcoStyle', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80' },
  { id: 3, name: 'Smart Home Hub', price: 129.99, category: 'Electronics', company: 'ModernHome', image: 'https://images.unsplash.com/photo-1558089687-f282ffcbc0d4?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80' },
  { id: 4, name: 'Running Shoes', price: 79.99, category: 'Sports', company: 'SportElite', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80' },
  { id: 5, name: 'Artisan Coffee Blend', price: 19.99, category: 'Food', company: 'FoodCraft', image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80' },
  { id: 6, name: 'Smartphone Stand', price: 24.99, category: 'Electronics', company: 'GadgetPro', image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80' },
  { id: 7, name: 'Ceramic Planter', price: 34.99, category: 'Home & Kitchen', company: 'ModernHome', image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80' },
  { id: 8, name: 'Fitness Tracker', price: 59.99, category: 'Electronics', company: 'SportElite', image: 'https://images.unsplash.com/photo-1557935728-e6d1eaabe9ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80' },
  { id: 9, name: 'Designer Watch', price: 199.99, category: 'Clothing', company: 'LuxuryDesign', image: 'https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80' },
  { id: 10, name: 'Organic Face Cream', price: 24.99, category: 'Beauty', company: 'NatureEssence', image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80' },
  { id: 11, name: 'Wooden Building Blocks', price: 39.99, category: 'Toys', company: 'KidZone', image: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80' },
  { id: 12, name: 'Bluetooth Speaker', price: 49.99, category: 'Electronics', company: 'TechVision', image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80' },
];

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  
  const filteredProducts = selectedCategory === 'All' 
    ? allProducts 
    : allProducts.filter(product => product.category === selectedCategory);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Header */}
        <div className="bg-gray-50 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-gray-900">All Products</h1>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl">
              Browse our complete collection of products from premium brands across all categories.
            </p>
          </div>
        </div>

        {/* Products Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex justify-between items-center mb-6">
            <div>
              <p className="text-gray-500">Showing {filteredProducts.length} products</p>
            </div>
            <Button 
              variant="outline" 
              className="flex items-center lg:hidden"
              onClick={() => setIsFilterOpen(!isFilterOpen)}
            >
              <Filter className="h-4 w-4 mr-2" />
              Filters
            </Button>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar filters - desktop */}
            <div className="hidden lg:block w-64 flex-shrink-0">
              <div className="sticky top-20">
                <CategoryFilter onSelectCategory={setSelectedCategory} />
                
                {/* Price Range Filter */}
                <div className="mt-8">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Price Range</h3>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input type="checkbox" className="rounded border-gray-300 text-teal-500 focus:ring-teal-500" />
                      <span className="ml-2 text-gray-700">Under $25</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="rounded border-gray-300 text-teal-500 focus:ring-teal-500" />
                      <span className="ml-2 text-gray-700">$25 to $50</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="rounded border-gray-300 text-teal-500 focus:ring-teal-500" />
                      <span className="ml-2 text-gray-700">$50 to $100</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="rounded border-gray-300 text-teal-500 focus:ring-teal-500" />
                      <span className="ml-2 text-gray-700">$100 to $200</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="rounded border-gray-300 text-teal-500 focus:ring-teal-500" />
                      <span className="ml-2 text-gray-700">$200 & Above</span>
                    </label>
                  </div>
                </div>
                
                {/* Company Filter */}
                <div className="mt-8">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Company</h3>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input type="checkbox" className="rounded border-gray-300 text-teal-500 focus:ring-teal-500" />
                      <span className="ml-2 text-gray-700">TechVision</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="rounded border-gray-300 text-teal-500 focus:ring-teal-500" />
                      <span className="ml-2 text-gray-700">EcoStyle</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="rounded border-gray-300 text-teal-500 focus:ring-teal-500" />
                      <span className="ml-2 text-gray-700">ModernHome</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="rounded border-gray-300 text-teal-500 focus:ring-teal-500" />
                      <span className="ml-2 text-gray-700">SportElite</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="rounded border-gray-300 text-teal-500 focus:ring-teal-500" />
                      <span className="ml-2 text-gray-700">FoodCraft</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile filter sidebar */}
            {isFilterOpen && (
              <div className="fixed inset-0 z-40 flex lg:hidden">
                <div className="fixed inset-0 bg-black bg-opacity-25" onClick={() => setIsFilterOpen(false)}></div>
                <div className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                  <div className="flex items-center justify-between px-4">
                    <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                    <Button variant="ghost" size="sm" onClick={() => setIsFilterOpen(false)}>
                      <X className="h-5 w-5" />
                    </Button>
                  </div>

                  <div className="px-4 mt-4">
                    <CategoryFilter onSelectCategory={setSelectedCategory} />
                    
                    {/* Price Range Filter */}
                    <div className="mt-8">
                      <h3 className="text-lg font-medium text-gray-900 mb-4">Price Range</h3>
                      <div className="space-y-2">
                        <label className="flex items-center">
                          <input type="checkbox" className="rounded border-gray-300 text-teal-500 focus:ring-teal-500" />
                          <span className="ml-2 text-gray-700">Under $25</span>
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" className="rounded border-gray-300 text-teal-500 focus:ring-teal-500" />
                          <span className="ml-2 text-gray-700">$25 to $50</span>
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" className="rounded border-gray-300 text-teal-500 focus:ring-teal-500" />
                          <span className="ml-2 text-gray-700">$50 to $100</span>
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" className="rounded border-gray-300 text-teal-500 focus:ring-teal-500" />
                          <span className="ml-2 text-gray-700">$100 to $200</span>
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" className="rounded border-gray-300 text-teal-500 focus:ring-teal-500" />
                          <span className="ml-2 text-gray-700">$200 & Above</span>
                        </label>
                      </div>
                    </div>
                    
                    {/* Company Filter */}
                    <div className="mt-8">
                      <h3 className="text-lg font-medium text-gray-900 mb-4">Company</h3>
                      <div className="space-y-2">
                        <label className="flex items-center">
                          <input type="checkbox" className="rounded border-gray-300 text-teal-500 focus:ring-teal-500" />
                          <span className="ml-2 text-gray-700">TechVision</span>
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" className="rounded border-gray-300 text-teal-500 focus:ring-teal-500" />
                          <span className="ml-2 text-gray-700">EcoStyle</span>
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" className="rounded border-gray-300 text-teal-500 focus:ring-teal-500" />
                          <span className="ml-2 text-gray-700">ModernHome</span>
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" className="rounded border-gray-300 text-teal-500 focus:ring-teal-500" />
                          <span className="ml-2 text-gray-700">SportElite</span>
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" className="rounded border-gray-300 text-teal-500 focus:ring-teal-500" />
                          <span className="ml-2 text-gray-700">FoodCraft</span>
                        </label>
                      </div>
                    </div>
                    
                    <div className="mt-8">
                      <Button className="w-full bg-teal-500 hover:bg-teal-600 text-white" onClick={() => setIsFilterOpen(false)}>
                        Apply Filters
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Product Grid */}
            <div className="flex-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <div key={product.id} className="group">
                    <div className="relative overflow-hidden bg-white shadow-md angular-card h-full flex flex-col">
                      <div className="relative aspect-w-1 aspect-h-1 bg-gray-200">
                        <img 
                          src={product.image} 
                          alt={product.name} 
                          className="w-full h-48 object-cover"
                        />
                        <div className="absolute top-2 right-2">
                          <Button variant="ghost" size="icon" className="text-gray-500 hover:text-red-500 bg-white rounded-full">
                            <Heart className="h-5 w-5" />
                          </Button>
                        </div>
                      </div>
                      
                      <div className="p-4 flex-grow">
                        <p className="text-sm text-teal-500 font-medium">{product.company}</p>
                        <Link to={`/products/${product.id}`}>
                          <h3 className="text-lg font-medium text-gray-900 mt-1 group-hover:text-teal-500">
                            {product.name}
                          </h3>
                        </Link>
                        <p className="text-gray-500 text-sm mt-1">{product.category}</p>
                        <p className="text-lg font-bold text-gray-900 mt-2">${product.price.toFixed(2)}</p>
                      </div>
                      
                      <div className="p-4 pt-0">
                        <Button className="w-full bg-teal-500 hover:bg-teal-600 text-white angular-button">
                          <ShoppingCart className="h-4 w-4 mr-2" />
                          Add to Cart
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Products;
