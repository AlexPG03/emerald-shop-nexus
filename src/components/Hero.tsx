
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative bg-gray-50 overflow-hidden">
      {/* Angular background element */}
      <div className="absolute inset-y-0 right-0 w-1/2 bg-teal-500 angular-border" style={{ right: '-5%' }}></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="z-10">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 leading-tight">
              Discover Products from <span className="text-teal-500">Premium Brands</span>
            </h1>
            <p className="mt-4 text-xl text-gray-600 max-w-lg">
              Shop by company or category and find exactly what you need with our angular approach to e-commerce.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 angular-button">
                Shop Now <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="border-teal-500 text-teal-500 hover:bg-teal-50 px-6 py-3">
                Explore Brands
              </Button>
            </div>
          </div>
          <div className="relative z-10 md:pl-10">
            <div className="aspect-w-5 aspect-h-4">
              <div className="bg-white p-3 shadow-xl -rotate-3 angular-card">
                <img 
                  src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Featured products" 
                  className="object-cover w-full h-full angular-card"
                />
              </div>
              <div className="absolute top-1/2 right-0 transform translate-x-1/4 -translate-y-1/4 rotate-6">
                <div className="bg-white p-2 shadow-xl angular-card">
                  <img 
                    src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" 
                    alt="Featured product" 
                    className="w-32 h-32 object-cover angular-card"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
