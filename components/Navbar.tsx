import React, { useState, useEffect } from 'react';
import { Menu, X, PawPrint } from 'lucide-react';
import { Button } from './Button';
import { NavLink } from '../types';
import { Link, useLocation } from 'react-router-dom';

const navLinks: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'About Us', href: '/about' },
  { label: 'Happy Tails', href: '/gallery' },
  { label: 'Contact', href: '/contact' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || location.pathname !== '/' ? 'bg-white shadow-md py-2' : 'bg-white/95 backdrop-blur-sm py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="bg-orange p-2 rounded-full text-white transition-transform group-hover:scale-110">
              <PawPrint size={24} fill="currentColor" />
            </div>
            <span className="font-heading font-bold text-xl sm:text-2xl text-gray-800 tracking-tight">
              Plush Puppy <span className="text-orange">Dog Grooming</span>
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.label} 
                to={link.href}
                className={`text-gray-600 hover:text-orange font-medium transition-colors ${
                  location.pathname === link.href ? 'text-orange' : ''
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/booking">
              <Button variant="primary" size="sm">
                Book Appointment
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-600 hover:text-orange focus:outline-none"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-lg py-4 px-4 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <Link 
              key={link.label} 
              to={link.href}
              className={`text-gray-600 hover:text-orange font-medium text-lg ${
                location.pathname === link.href ? 'text-orange' : ''
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/booking" onClick={() => setIsMobileMenuOpen(false)}>
            <Button variant="primary" fullWidth>
              Book Appointment
            </Button>
          </Link>
        </div>
      )}
    </nav>
  );
};