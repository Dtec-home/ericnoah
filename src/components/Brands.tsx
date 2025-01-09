import React from 'react';
import { brands } from '@/data/content';
import { Building2 } from 'lucide-react';

const Brands: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50" id="brands">
      <div className="max-w-6xl mx-auto px-4">
      <Building2 className="w-8 h-8 text-blue-600" />

        <h2 className="text-3xl font-bold mb-8">Brands I&apos;ve Worked With</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {brands.map((brand, index) => (
            <div key={index} className="p-4 text-center bg-white rounded-lg shadow-sm">
              <p className="font-semibold">{brand.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;