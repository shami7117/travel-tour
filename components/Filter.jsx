"use client"
import { useState } from 'react';

const PriceFilter = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="relative inline-block text-left">
      <button onClick={toggleDropdown} className="px-4 py-2 text-gray-600 hover:text-gray-800">
        Filter by Price
      </button>
      {isDropdownOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-2">
            <label className="px-4">
              <input type="checkbox" className="mr-2" /> $0 - $25
            </label>
            <label className="px-4">
              <input type="checkbox" className="mr-2" /> $25 - $50
            </label>
            <label className="px-4">
              <input type="checkbox" className="mr-2" /> $50 - $100
            </label>
            
          </div>
        </div>
      )}
    </div>
  );
};

export default PriceFilter;
