import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Spaces from './components/Spaces';
import Amenities from './components/Amenities';
import Pricing from './components/Pricing';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-16">
        <Hero />
        <Spaces />
        <Amenities />
        <Pricing />
      </div>
    </div>
  );
}

export default App;