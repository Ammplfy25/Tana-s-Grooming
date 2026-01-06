import React from 'react';
import { Scissors, Droplets, Sparkles, ArrowRight, Star } from 'lucide-react';
import { Service } from '../types';
import { Link } from 'react-router-dom';

const services: Service[] = [
  {
    id: 'full-spa',
    title: 'The Full Spa',
    description: 'Our signature package. Includes bath, blow-dry, full haircut & styling, nail trim, ear cleaning, and anal gland expression.',
    priceRange: '$75 - $150+',
    icon: 'scissors'
  },
  {
    id: 'bath-brush',
    title: 'Bath & Brush',
    description: 'Perfect for maintenance. Deep cleansing bath, fluff dry, thorough brush-out (de-shedding), nail trim, and ear cleaning.',
    priceRange: '$45 - $90+',
    icon: 'droplets'
  },
  {
    id: 'alacarte',
    title: 'A La Carte',
    description: 'Walk-in services for quick touch-ups. Nail trims, teeth brushing, ear cleaning, paw balm, or sanitary trims.',
    priceRange: '$15 - $30',
    icon: 'sparkles'
  }
];

const IconMap = {
  scissors: Scissors,
  droplets: Droplets,
  sparkles: Sparkles
};

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-gradient-to-b from-orange/5 to-cream relative">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-peach/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-orange font-bold tracking-wider uppercase text-sm">Services Menu</span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-gray-900 mb-4 mt-2">
            Pampering Packages
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose the perfect spa day for your furry friend. All prices vary based on breed, size, and coat condition.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, idx) => {
            const Icon = IconMap[service.icon];
            const isPopular = idx === 0;
            return (
              <div 
                key={service.id} 
                className={`group relative bg-white rounded-3xl p-8 transition-all duration-300 flex flex-col h-full border border-gray-100
                  ${isPopular ? 'shadow-xl scale-105 border-orange/20 z-10' : 'shadow-lg hover:shadow-2xl hover:-translate-y-2'}
                `}
              >
                {isPopular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-orange text-white px-4 py-1 rounded-full text-sm font-bold shadow-md flex items-center gap-1">
                    <Star size={12} fill="currentColor" /> Most Popular
                  </div>
                )}

                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6
                  ${isPopular ? 'bg-orange text-white shadow-lg shadow-orange/30' : 'bg-orange/10 text-orange group-hover:bg-orange group-hover:text-white'}
                `}>
                  <Icon size={32} />
                </div>

                <h3 className="font-heading font-bold text-2xl text-gray-900 mb-3 group-hover:text-orange transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 flex-grow leading-relaxed">
                  {service.description}
                </p>

                <div className="pt-6 border-t border-gray-50 mt-auto">
                  <p className="text-orange-dark font-bold text-xl mb-4">{service.priceRange}</p>
                  <Link to="/booking" className="block w-full">
                    <button className="flex items-center text-gray-900 font-semibold hover:text-orange transition-colors group/btn w-full justify-between">
                      Book Now
                      <span className="bg-gray-100 p-2 rounded-full group-hover/btn:bg-orange group-hover/btn:text-white transition-colors">
                        <ArrowRight size={18} className="transform group-hover/btn:translate-x-1 transition-transform" />
                      </span>
                    </button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};