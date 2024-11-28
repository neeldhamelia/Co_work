import React from 'react';
import { Check } from 'lucide-react';
import { pricingPlans } from '../data';

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Choose the plan that works best for you
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {pricingPlans.map((plan) => (
            <div
              key={plan.id}
              className={`bg-white rounded-lg shadow-lg overflow-hidden ${
                plan.popular ? 'ring-2 ring-blue-600' : ''
              }`}
            >
              <div className="p-8">
                {plan.popular && (
                  <span className="inline-block px-3 py-1 text-sm font-semibold text-blue-600 bg-blue-100 rounded-full">
                    Most Popular
                  </span>
                )}
                <h3 className="mt-4 text-2xl font-semibold text-gray-900">{plan.name}</h3>
                <p className="mt-4">
                  <span className="text-4xl font-extrabold text-gray-900">${plan.price}</span>
                  <span className="text-base font-medium text-gray-500">/{plan.duration}</span>
                </p>
                <ul className="mt-6 space-y-4">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-6 w-6 text-green-500 flex-shrink-0" />
                      <span className="ml-3 text-base text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`mt-8 w-full py-3 px-4 rounded-md font-medium text-white ${
                    plan.popular
                      ? 'bg-blue-600 hover:bg-blue-700'
                      : 'bg-gray-800 hover:bg-gray-900'
                  } transition-colors duration-300`}
                >
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}