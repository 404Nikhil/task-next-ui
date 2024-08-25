// components/Dashboard.tsx
import { useState } from 'react';
import SearchBar from './SearchBar';
import CategoriesDropdown from './CategoriesDropdown';
import FeatureCard from './FeatureCard';
import { LightBulbIcon, CurrencyDollarIcon, UserGroupIcon, ChartBarIcon, ClockIcon, CogIcon } from '@heroicons/react/24/outline';

const featureCards = [
  { title: 'Total Ideas', description: '120', icon: LightBulbIcon },
  { title: 'Revenue', description: '$15,000', icon: CurrencyDollarIcon },
  { title: 'Active Users', description: '1,200', icon: UserGroupIcon },
  { title: 'Engagement Rate', description: '68%', icon: ChartBarIcon },
  { title: 'Average Session', description: '24 minutes', icon: ClockIcon },
  { title: 'System Health', description: '98% Uptime', icon: CogIcon },
];

export default function Dashboard() {
  const [searchResults, setSearchResults] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleSearch = (term: string) => {
    // Simulate search functionality
    console.log(`Searching for: ${term}`);
    setSearchResults(`Results for "${term}"`);
  };

  const handleCategoryChange = (category) => {
    console.log(`Selected category: ${category.name}`);
    setSelectedCategory(category.name);
  };

  return (
    <div className="p-6">
      <div className="mb-6 flex justify-between items-center">
        <SearchBar onSearch={handleSearch} />
        <CategoriesDropdown onCategoryChange={handleCategoryChange} />
      </div>
      {searchResults && <p className="mb-4 text-gray-600">{searchResults}</p>}
      {selectedCategory && <p className="mb-4 text-gray-600">Showing results for: {selectedCategory}</p>}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {featureCards.map((card, index) => (
          <FeatureCard key={index} {...card} />
        ))}
      </div>
    </div>
  );
}