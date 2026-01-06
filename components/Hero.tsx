import React from 'react';
import { Button } from './Button';
import { Heart, Sparkles, Scissors } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-28 pb-16 lg:pt-40 lg:pb-32 overflow-hidden bg-cream">
      
      {/* Dynamic Background Elements - Animated Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-orange/20 rounded-full blur-[100px] animate-blob mix-blend-multiply opacity-70" />
        <div className="absolute top-0 left-[-10%] w-[35rem] h-[35rem] bg-peach/30 rounded-full blur-[100px] animate-blob animation-delay-2000 mix-blend-multiply opacity-70" />
        <div className="absolute bottom-[-20%] left-[20%] w-[40rem] h-[40rem] bg-sky/20 rounded-full blur-[100px] animate-blob animation-delay-4000 mix-blend-multiply opacity-70" />
      </div>

      {/* Decorative floating icons */}
      <div className="absolute top-32 left-10 text-orange/20 animate-float animation-delay-2000 hidden lg:block">
        <Scissors size={48} />
      </div>
      <div className="absolute bottom-20 right-10 text-peach-dark/20 animate-float hidden lg:block">
        <Heart size={48} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-8 relative animate-fade-in-up">
            {/* Professional badge */}
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-orange/20 rounded-full px-4 py-1.5 shadow-sm hover:scale-105 transition-transform cursor-default">
              <Sparkles size={16} className="text-orange" />
              <span className="text-sm font-bold text-gray-600 tracking-wide uppercase">Bellflower's Favorite Groomer</span>
            </div>

            <h1 className="font-heading font-bold text-5xl sm:text-6xl lg:text-7xl text-gray-900 leading-[1.1]">
              Expert Care. <br />
              <span className="relative inline-block text-orange">
                Exceptional
                {/* Clean Underline */}
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-peach" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
                </svg>
              </span> 
              <span className="block mt-2">Style.</span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-lg mx-auto lg:mx-0 leading-relaxed font-medium">
              Welcome to Tana's Grooming. We combine professional styling with a calm, gentle environment to make your pet look and feel their best.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
              <Link to="/booking">
                <Button variant="primary" size="lg" className="shadow-lg shadow-orange/20 hover:scale-105 active:scale-95 transition-transform duration-200">
                  Book a Spa Day
                </Button>
              </Link>
              <Link to="/gallery">
                <Button variant="secondary" size="lg" className="hover:scale-105 active:scale-95 transition-transform duration-200 bg-white border border-peach text-orange-dark hover:bg-peach/10">
                  See Transformations
                </Button>
              </Link>
            </div>
          </div>

          {/* Clean, Dynamic Image Composition with Float Animation */}
          <div className="relative pt-8 lg:pt-0 animate-float">
            {/* Adjusted aspect ratio to 4/3 to better fit a group of dogs */}
            <div className="relative w-full aspect-[4/3] max-w-lg mx-auto group">
               {/* Soft shadow backing - rotates on hover */}
               <div className="absolute inset-4 bg-orange/20 rounded-[2.5rem] transform rotate-3 blur-sm transition-transform duration-500 group-hover:rotate-6"></div>
               
               {/* Main Image Container with padding for 'frame' effect */}
               <div className="absolute inset-0 bg-white rounded-[2.5rem] shadow-2xl transform transition-transform duration-500 group-hover:-translate-y-2 p-4">
                  <div className="relative w-full h-full rounded-[1.5rem] overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1615266895738-11f1371cd7e5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                      alt="Group of three happy dogs (French Bulldog, Golden Retriever, and Poodle mix) sitting together" 
                      className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Subtle overlay gradient at bottom */}
                    <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
                  </div>
               </div>

               {/* Floating Badge */}
               <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3 animate-bounce hidden sm:flex">
                  <div className="bg-green-100 p-2 rounded-full">
                    <Heart size={24} className="text-green-600" fill="currentColor" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-semibold uppercase">Client Happiness</p>
                    <p className="text-lg font-bold text-gray-900">100% Guaranteed</p>
                  </div>
               </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};