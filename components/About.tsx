import React from 'react';
import { Heart, CheckCircle2 } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Text Side */}
          <div className="lg:w-1/2 space-y-8 order-2 lg:order-1">
            <div>
              <div className="inline-flex items-center space-x-2 bg-peach/20 text-orange-dark px-4 py-1 rounded-full text-sm font-semibold mb-4">
                <Heart size={14} fill="currentColor" />
                <span>Our Philosophy</span>
              </div>
              <h2 className="font-heading font-bold text-4xl sm:text-5xl text-gray-900 leading-tight">
                A Gentle, Patience-First Approach.
              </h2>
            </div>

            <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
              <p>
                We believe that a grooming session should be more than just a haircut—it should be a <span className="text-orange font-semibold">bonding experience</span>. 
              </p>
              <p>
                We never rush. Our "patience-first" policy means we take breaks when your pet needs them, use quiet dryers for sensitive ears, and always offer plenty of cuddles and treats.
              </p>
            </div>

            <ul className="space-y-3">
              {[
                "Certified Master Groomers",
                "Cage-free waiting area options",
                "Special care for nervous & senior pets",
                "Organic & hypoallergenic shampoos"
              ].map((item, i) => (
                <li key={i} className="flex items-center space-x-3 text-gray-700 font-medium">
                  <CheckCircle2 size={20} className="text-green-500 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            
            <div className="grid grid-cols-2 gap-6 pt-6 border-t border-gray-100">
              <div className="bg-cream p-4 rounded-2xl border border-orange/10 text-center">
                <h4 className="font-bold text-orange text-3xl">10+</h4>
                <p className="text-gray-600 font-medium text-sm">Years Experience</p>
              </div>
              <div className="bg-cream p-4 rounded-2xl border border-orange/10 text-center">
                <h4 className="font-bold text-orange text-3xl">5k+</h4>
                <p className="text-gray-600 font-medium text-sm">Happy Tails</p>
              </div>
            </div>
          </div>

          {/* Image Side - Collage */}
          <div className="lg:w-1/2 order-1 lg:order-2 relative">
            <div className="relative w-full max-w-lg mx-auto">
              
              {/* Background Shape */}
              <div className="absolute top-10 right-10 w-full h-full bg-peach/30 rounded-[3rem] transform rotate-6 -z-10"></div>
              
              {/* Main Image */}
              <img 
                src="https://images.unsplash.com/photo-1599443015574-be5fe8a05783?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Groomer gently drying a dog" 
                className="relative rounded-[2rem] shadow-2xl w-full aspect-[4/5] object-cover border-4 border-white"
              />

              {/* Overlapping Secondary Image */}
              <div className="absolute -bottom-10 -left-10 w-48 h-48 md:w-64 md:h-64 hidden sm:block">
                 <img 
                   src="https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                   alt="Cute pug in a towel" 
                   className="w-full h-full rounded-[1.5rem] object-cover border-8 border-white shadow-xl transform hover:scale-105 transition-transform duration-300"
                 />
                 {/* Decorative element */}
                 <div className="absolute -top-4 -right-4 bg-orange text-white p-3 rounded-full shadow-lg animate-bounce">
                    <Heart size={24} fill="currentColor" />
                 </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};