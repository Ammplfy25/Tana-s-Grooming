import React from 'react';
import { Button } from '../components/Button';
import { Link } from 'react-router-dom';
import { Testimonials } from '../components/Testimonials';

const photos = [
  { url: 'https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?auto=format&fit=crop&w=800&q=80', label: 'Playful & Clean' },
  { url: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=800&q=80', label: 'Spa Day Bliss' },
  { url: 'https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?auto=format&fit=crop&w=800&q=80', label: 'Puppy First Groom' },
  { url: 'https://images.unsplash.com/photo-1596492784531-6e6eb5ea9205?auto=format&fit=crop&w=800&q=80', label: 'Fresh Style' },
  { url: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=800&q=80', label: 'Cozy & Dry' },
  { url: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=800&q=80', label: 'Happy Customer' },
];

export const Gallery: React.FC = () => {
  return (
    <div className="pt-32 pb-20 bg-white min-h-screen">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <span className="text-orange font-bold tracking-wider uppercase text-sm">Our Portfolio</span>
            <h1 className="font-heading font-bold text-4xl sm:text-5xl text-gray-900 mt-2">
              Happy Tails Gallery
            </h1>
            <p className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto">
              From scruffy to fluffy! Check out some of our favorite transformations and happy clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {photos.map((photo, i) => (
              <div key={i} className="group relative rounded-3xl overflow-hidden aspect-[4/5] shadow-lg animate-fade-in-up" style={{ animationDelay: `${i * 100}ms` }}>
                <img 
                  src={photo.url} 
                  alt={photo.label} 
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                  <p className="text-white font-bold text-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {photo.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
       </div>

       {/* Include Testimonials Section */}
       <Testimonials />

       <div className="mt-20 text-center max-w-7xl mx-auto px-4">
          <div className="bg-cream rounded-3xl p-12 border border-orange/10">
            <h2 className="font-heading font-bold text-3xl text-gray-900 mb-6">Ready for your own transformation?</h2>
            <Link to="/booking">
              <Button size="lg" className="shadow-xl shadow-orange/20">Book Your Spot</Button>
            </Link>
          </div>
       </div>
    </div>
  );
};