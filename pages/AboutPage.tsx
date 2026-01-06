import React from 'react';
import { About } from '../components/About';
import { TrustIndicators } from '../components/TrustIndicators';

export const AboutPage: React.FC = () => {
  return (
    <div className="pt-20">
      <About />
      <TrustIndicators />
      
      {/* Team Section Placeholder */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
           <h2 className="font-heading font-bold text-3xl mb-12">Meet Our Groomers</h2>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-white p-6 rounded-3xl shadow-lg hover:-translate-y-2 transition-transform duration-300">
                   <div className="w-32 h-32 mx-auto bg-gray-200 rounded-full mb-4 overflow-hidden">
                     <img src={`https://i.pravatar.cc/300?img=${20 + i}`} alt="Team member" className="w-full h-full object-cover" />
                   </div>
                   <h3 className="font-bold text-xl">Expert Groomer {i}</h3>
                   <p className="text-orange text-sm font-medium mb-3">Senior Stylist</p>
                   <p className="text-gray-600 text-sm">Specializes in poodle cuts and nervous pups. 5+ years of experience.</p>
                </div>
              ))}
           </div>
        </div>
      </section>
    </div>
  );
};