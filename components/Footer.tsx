import React from 'react';
import { PawPrint, MapPin, Phone, Clock, Instagram, Facebook, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-orange-darker text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 mb-4">
              <PawPrint size={32} className="text-peach" />
              <span className="font-heading font-bold text-xl tracking-tight">
                Plush Puppy Dog Grooming
              </span>
            </div>
            <p className="text-white/80 text-sm leading-relaxed">
              Bellflower's premier pet grooming salon. We treat your pets like family with professional care and love.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-peach hover:text-orange-darker transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-peach hover:text-orange-darker transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-peach hover:text-orange-darker transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { label: 'Home', to: '/' },
                { label: 'Services', to: '/services' },
                { label: 'About Us', to: '/about' },
                { label: 'Happy Tails', to: '/gallery' },
                { label: 'Contact', to: '/contact' }
              ].map((item) => (
                <li key={item.label}>
                  <Link to={item.to} className="text-white/80 hover:text-peach transition-colors text-sm">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-white/80 text-sm">
                <MapPin size={18} className="mt-1 flex-shrink-0 text-peach" />
                <span>17405 Woodruff Ave,<br/>Bellflower, CA 90706</span>
              </li>
              <li className="flex items-center space-x-3 text-white/80 text-sm">
                <Phone size={18} className="flex-shrink-0 text-peach" />
                <span>(562) 925-2883</span>
              </li>
              <li className="flex items-center space-x-3 text-white/80 text-sm">
                <Mail size={18} className="flex-shrink-0 text-peach" />
                <span>hello@plushpuppygrooming.com</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-6">Opening Hours</h3>
            <ul className="space-y-3 text-sm text-white/80">
              <li className="flex justify-between border-b border-white/10 pb-2">
                <span>Tue - Fri</span>
                <span>8:00 AM - 3:00 PM</span>
              </li>
              <li className="flex justify-between border-b border-white/10 pb-2">
                <span>Saturday</span>
                <span>8:00 AM - 3:00 PM</span>
              </li>
              <li className="flex justify-between pb-2 text-peach font-medium">
                <span>Sun - Mon</span>
                <span>Closed</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-white/60">
          <p>&copy; 2024 Plush Puppy Dog Grooming. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};