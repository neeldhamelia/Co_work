import React from 'react';
import { amenities } from '../data';
import * as LucideIcons from 'lucide-react';

export default function Amenities() {
  return (
    <section id="amenities" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            World-Class Amenities
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Everything you need for a productive workday
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {amenities.map((amenity) => {
            const Icon = (LucideIcons as any)[amenity.icon.charAt(0).toUpperCase() + amenity.icon.slice(1)];
            return (
              <div
                key={amenity.id}
                className="flex items-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300"
              >
                <div className="flex-shrink-0">
                  <Icon className="h-6 w-6 text-blue-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">{amenity.name}</h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}