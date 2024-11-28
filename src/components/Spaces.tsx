import React from 'react';
import { Users, DollarSign } from 'lucide-react';
import { spaces } from '../data';

export default function Spaces() {
  return (
    <section id="spaces" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Available Spaces
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Find the perfect space for your work style
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {spaces.map((space) => (
            <div
              key={space.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={space.image}
                alt={space.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">{space.name}</h3>
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center text-gray-600">
                    <Users size={20} className="mr-2" />
                    <span>Up to {space.capacity} people</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <DollarSign size={20} className="mr-1" />
                    <span>{space.price}/day</span>
                  </div>
                </div>
                <button className="mt-6 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-300">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}