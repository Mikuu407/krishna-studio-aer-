
import React from 'react';
import type { Package } from '../types';

const packagesData: Package[] = [
  {
    name: 'The Elopement',
    price: '₹75,000',
    description: 'For intimate ceremonies and adventurous couples.',
    features: ['4 hours of coverage', '1 Photographer', 'Online gallery', '150 edited photos'],
  },
  {
    name: 'The Classic',
    price: '₹1,50,000',
    description: 'Our most popular package for a full day of memories.',
    features: ['8 hours of coverage', '2 Photographers', 'Engagement session', 'Online gallery + USB', '350 edited photos'],
    popular: true,
  },
  {
    name: 'The Fairytale',
    price: '₹2,50,000',
    description: 'The ultimate experience for your special day.',
    features: ['12 hours of coverage', '2 Photographers + Assistant', 'Engagement session', 'Heirloom album', 'Full online gallery + USB', '600+ edited photos'],
  },
];

const PackageCard: React.FC<{ pkg: Package }> = ({ pkg }) => (
  <div className={`border rounded-lg p-8 flex flex-col transition duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2 ${pkg.popular ? 'bg-gray-800 text-white border-gray-800' : 'bg-white border-gray-200'}`}>
    {pkg.popular && (
      <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-rose-300 text-gray-800 text-xs font-bold px-3 py-1 rounded-full uppercase">Popular</span>
    )}
    <h3 className={`text-2xl font-bold mb-2 ${pkg.popular ? 'text-white' : 'text-gray-800'}`}>{pkg.name}</h3>
    <p className={`text-4xl font-extrabold mb-4 ${pkg.popular ? 'text-white' : 'text-gray-900'}`}>{pkg.price}</p>
    <p className={`mb-6 flex-grow ${pkg.popular ? 'text-gray-300' : 'text-gray-600'}`}>{pkg.description}</p>
    <ul className="space-y-3 mb-8">
      {pkg.features.map((feature, index) => (
        <li key={index} className="flex items-center">
          <i className={`fas fa-check-circle mr-3 ${pkg.popular ? 'text-rose-300' : 'text-gray-800'}`}></i>
          {feature}
        </li>
      ))}
    </ul>
    <button className={`mt-auto w-full py-3 font-semibold rounded-lg transition duration-300 ${pkg.popular ? 'bg-white text-gray-800 hover:bg-gray-200' : 'bg-gray-800 text-white hover:bg-gray-700'}`}>
      Choose Plan
    </button>
  </div>
);

const Packages: React.FC = () => {
  return (
    <section id="packages" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h3 className="text-sm uppercase tracking-widest text-gray-500 mb-2">Investment</h3>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800" style={{fontFamily: "'Playfair Display', serif"}}>Our Photography Packages</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packagesData.map(pkg => (
            <div key={pkg.name} className="relative">
                <PackageCard pkg={pkg} />
            </div>
          ))}
        </div>
         <p className="text-center mt-12 text-gray-600">
            Custom packages are available. <a href="#contact" className="font-semibold text-gray-800 underline hover:no-underline">Contact us</a> for a personalized quote.
          </p>
      </div>
    </section>
  );
};

export default Packages;