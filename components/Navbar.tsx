import React from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-xl font-bold text-gray-800">CoWork</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#spaces" className="text-gray-600 hover:text-gray-900">Spaces</a>
            <a href="#amenities" className="text-gray-600 hover:text-gray-900">Amenities</a>
            <a href="#pricing" className="text-gray-600 hover:text-gray-900">Pricing</a>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
              Book Now
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#spaces" className="block px-3 py-2 text-gray-600 hover:text-gray-900">Spaces</a>
            <a href="#amenities" className="block px-3 py-2 text-gray-600 hover:text-gray-900">Amenities</a>
            <a href="#pricing" className="block px-3 py-2 text-gray-600 hover:text-gray-900">Pricing</a>
            <button className="w-full text-center bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
              Book Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}