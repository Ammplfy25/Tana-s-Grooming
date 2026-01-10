import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, PawPrint } from 'lucide-react';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Jenkins',
    role: 'Owner of Barnaby (Golden Doodle)',
    comment: "I've never seen Barnaby so excited to go to the groomer! They did an amazing job on his cut, and he smelled wonderful for weeks. The staff is incredibly kind.",
    rating: 5,
    avatarUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80'
  },
  {
    id: '2',
    name: 'Michael Chen',
    role: 'Owner of Mochi (Shiba Inu)',
    comment: "Mochi is usually very anxious with nail trims, but the team at Plush Puppy was so patient. They took their time and used treats to keep him calm. Highly recommend!",
    rating: 5,
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80'
  },
  {
    id: '3',
    name: 'Jessica Alverez',
    role: 'Owner of Luna (Pomeranian)',
    comment: "The 'Full Spa' package is worth every penny. Luna looks like a show dog every time she leaves. Best groomers in Bellflower!",
    rating: 5,
    avatarUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80'
  }
];

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="gallery" className="py-24 bg-cream relative overflow-hidden">
      {/* Background patterns - Paw Prints */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <PawPrint size={100} className="absolute top-20 left-10 text-orange rotate-12" />
          <PawPrint size={80} className="absolute bottom-40 right-20 text-orange -rotate-12" />
          <PawPrint size={60} className="absolute top-40 right-[20%] text-orange rotate-45" />
          <div className="absolute top-1/2 left-1/2 w-full h-full bg-gradient-to-r from-orange/5 to-transparent transform -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-gray-900">
            Happy Tales from Happy Tails
          </h2>
          <p className="text-gray-600 mt-4 text-lg">Don't just take our word for it.</p>
        </div>

        <div className="max-w-5xl mx-auto relative">
          
          {/* Card Container */}
          <div className="bg-white rounded-[3rem] shadow-2xl p-8 md:p-14 relative transform transition-all duration-500 hover:shadow-orange/10">
             
             {/* Large Quote Icon */}
             <div className="absolute top-8 right-10 text-orange/10">
               <Quote size={120} />
             </div>

             <div className="flex flex-col md:flex-row gap-8 items-center relative z-10">
                <div className="flex-shrink-0 relative">
                  <div className="absolute inset-0 bg-orange/20 rounded-full blur-md transform translate-y-2"></div>
                  <div className="w-28 h-28 md:w-40 md:h-40 rounded-full border-4 border-white shadow-xl overflow-hidden relative">
                    <img 
                      src={testimonials[currentIndex].avatarUrl} 
                      alt={testimonials[currentIndex].name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                <div className="flex-grow text-center md:text-left space-y-4">
                   <div className="flex justify-center md:justify-start space-x-1 text-yellow-400">
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <Star key={i} size={24} fill="currentColor" className="drop-shadow-sm" />
                      ))}
                   </div>
                   <p className="text-gray-700 text-xl md:text-2xl font-medium italic leading-relaxed font-heading">
                     "{testimonials[currentIndex].comment}"
                   </p>
                   <div className="pt-2">
                     <h4 className="font-bold text-gray-900 text-xl">{testimonials[currentIndex].name}</h4>
                     <p className="text-orange font-medium">{testimonials[currentIndex].role}</p>
                   </div>
                </div>
             </div>
          </div>

          {/* Navigation Controls - Floating outside */}
          <div className="flex justify-center mt-10 gap-6">
            <button 
              onClick={prev}
              className="p-4 rounded-full bg-white shadow-lg text-gray-600 hover:text-orange hover:bg-orange/5 hover:scale-110 transition-all focus:outline-none border border-gray-100"
            >
              <ChevronLeft size={28} />
            </button>
            
            {/* Dots */}
            <div className="flex items-center space-x-3">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`transition-all duration-300 rounded-full ${idx === currentIndex ? 'bg-orange w-8 h-3' : 'bg-gray-300 w-3 h-3 hover:bg-orange/50'}`}
                />
              ))}
            </div>

            <button 
              onClick={next}
              className="p-4 rounded-full bg-white shadow-lg text-gray-600 hover:text-orange hover:bg-orange/5 hover:scale-110 transition-all focus:outline-none border border-gray-100"
            >
              <ChevronRight size={28} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};