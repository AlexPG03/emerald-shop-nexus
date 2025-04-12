
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Filter } from 'lucide-react';

// Sample categories
const categories = [
  'All',
  'Electronics',
  'Clothing',
  'Home & Kitchen',
  'Sports',
  'Beauty',
  'Books',
  'Toys',
  'Food'
];

interface CategoryFilterProps {
  onSelectCategory: (category: string) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ onSelectCategory }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    onSelectCategory(category);
  };

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-medium text-gray-900">Categories</h3>
        <Button 
          variant="outline" 
          size="sm" 
          className="md:hidden"
          onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
        >
          <Filter className="h-4 w-4 mr-2" />
          Filter
        </Button>
      </div>

      {/* Desktop filter */}
      <div className="hidden md:flex overflow-x-auto pb-2">
        <div className="flex space-x-2">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              className={`whitespace-nowrap ${
                selectedCategory === category 
                  ? 'bg-teal-500 hover:bg-teal-600 text-white' 
                  : 'border-teal-100 text-gray-700 hover:border-teal-500'
              }`}
              onClick={() => handleCategorySelect(category)}
            >
              {category}
            </Button>
          ))}
        </div>
      </div>

      {/* Mobile filter dropdown */}
      {isMobileFilterOpen && (
        <div className="md:hidden bg-white border rounded-md p-2 mt-2">
          <div className="flex flex-col space-y-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                className={`justify-start ${
                  selectedCategory === category 
                    ? 'bg-teal-500 hover:bg-teal-600 text-white' 
                    : 'border-teal-100 text-gray-700 hover:border-teal-500'
                }`}
                onClick={() => {
                  handleCategorySelect(category);
                  setIsMobileFilterOpen(false);
                }}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoryFilter;
