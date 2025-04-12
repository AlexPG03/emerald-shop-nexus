
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CategoryFilter from './CategoryFilter';

// Sample product data
const allProducts = [
  { id: 1, name: 'Wireless Headphones', price: 99.99, category: 'Electronics', company: 'TechVision', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80' },
  { id: 2, name: 'Organic Cotton T-shirt', price: 29.99, category: 'Clothing', company: 'EcoStyle', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80' },
  { id: 3, name: 'Smart Home Hub', price: 129.99, category: 'Electronics', company: 'ModernHome', image: 'https://images.unsplash.com/photo-1558089687-f282ffcbc0d4?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80' },
  { id: 4, name: 'Running Shoes', price: 79.99, category: 'Sports', company: 'SportElite', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80' },
  { id: 5, name: 'Artisan Coffee Blend', price: 19.99, category: 'Food', company: 'FoodCraft', image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80' },
  { id: 6, name: 'Smartphone Stand', price: 24.99, category: 'Electronics', company: 'GadgetPro', image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80' },
  { id: 7, name: 'Ceramic Planter', price: 34.99, category: 'Home & Kitchen', company: 'ModernHome', image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80' },
  { id: 8, name: 'Fitness Tracker', price: 59.99, category: 'Electronics', company: 'SportElite', image: 'https://images.unsplash.com/photo-1557935728-e6d1eaabe9ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80' },
];

const ProductGrid = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const filteredProducts = selectedCategory === 'All' 
    ? allProducts 
    : allProducts.filter(product => product.category === selectedCategory);

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Products</h2>
        
        <CategoryFilter onSelectCategory={setSelectedCategory} />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
    </section>
  );
};

export default ProductGrid;
