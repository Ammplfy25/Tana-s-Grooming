import React from 'react';
import { Award, Heart, Leaf, Smile } from 'lucide-react';

const indicators = [
  { icon: Award, label: 'Certified Groomers', color: 'text-orange-500', bg: 'bg-orange-50' },
  { icon: Heart, label: 'Stress-Free Environment', color: 'text-red-500', bg: 'bg-red-50' },
  { icon: Leaf, label: 'Organic Products', color: 'text-green-500', bg: 'bg-green-50' },
  { icon: Smile, label: 'Satisfaction Guaranteed', color: 'text-amber-500', bg: 'bg-amber-50' },
];

export const TrustIndicators: React.FC = () => {
  return (
    <div className="bg-white py-12 border-y border-gray-100 relative overflow-hidden">
      {/* Decorative background strips */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#F97316_1px,transparent_1px)] [background-size:16px_16px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {indicators.map((item) => (
            <div key={item.label} className="flex flex-col items-center justify-center text-center space-y-3 group cursor-pointer">
              <div className={`p-5 rounded-2xl ${item.bg} ${item.color} transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:-translate-y-1`}>
                <item.icon size={32} strokeWidth={1.5} />
              </div>
              <span className="font-semibold text-gray-800 text-sm sm:text-base group-hover:text-orange-dark transition-colors">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};