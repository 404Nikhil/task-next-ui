// components/Sidebar.tsx
import { useState } from 'react';
import { HomeIcon, UserIcon, CogIcon } from '@heroicons/react/24/outline';

const sidebarOptions = [
  { name: 'Dashboard', icon: HomeIcon },
  { name: 'Profile', icon: UserIcon },
  { name: 'Settings', icon: CogIcon },
];

export default function Sidebar({ onOptionClick }) {
  const [activeOption, setActiveOption] = useState('Dashboard');

  const handleOptionClick = (optionName: string) => {
    setActiveOption(optionName);
    onOptionClick(optionName);
  };

  return (
    <div className="h-screen w-64 bg-gray-800 text-white">
      <div className="p-4">
        <h2 className="text-2xl font-semibold">Writix AI</h2>
      </div>
      <nav className="mt-8">
        {sidebarOptions.map((option) => (
          
            key={option.name}
            href="#"
            className={`flex items-center px-4 py-2 text-sm ${
              activeOption === option.name ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700'
            }`}
            onClick={() => handleOptionClick(option.name)}
          >
            <option.icon className="mr-3 h-6 w-6" />
            {option.name}
          </a>
        ))}
      </nav>
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <div className="bg-gray-700 rounded-full h-2">
          <div className="bg-blue-500 rounded-full h-2 w-1/2"></div>
        </div>
        <p className="text-sm text-gray-400 mt-2">50% Complete</p>
      </div>
    </div>
  );
}