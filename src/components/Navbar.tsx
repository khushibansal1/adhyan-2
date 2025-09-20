import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import logoImage from 'figma:asset/a7654523732dc57ff3f77a42df3acc9762dbe7cc.png';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-slate-900/95 backdrop-blur-md shadow-lg border-b border-yellow-500/20 fixed w-full top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src={logoImage} 
              alt="Adhyan Guidance Logo" 
              className="h-12 w-12 object-contain"
            />
            <div className="flex flex-col">
              <span className="text-xl font-semibold text-white tracking-tight">
                ADHYAN
              </span>
              <span className="text-xs text-yellow-400 font-medium tracking-wide">
                FUELING CURIOUS MINDS
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-300 hover:text-yellow-400 font-medium transition-colors duration-200 relative group">
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
            
            <a href="#testimonials" className="text-gray-300 hover:text-yellow-400 font-medium transition-colors duration-200 relative group">
              Testimonials
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
            
            <a href="#pricing" className="text-gray-300 hover:text-yellow-400 font-medium transition-colors duration-200 relative group">
              Pricing
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
            
            <a href="#faqs" className="text-gray-300 hover:text-yellow-400 font-medium transition-colors duration-200 relative group">
              FAQs
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
            
            <a href="#contact" className="text-gray-300 hover:text-yellow-400 font-medium transition-colors duration-200 relative group">
              Contact Us
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-slate-900 px-6 py-2.5 rounded-lg font-medium hover:from-yellow-400 hover:to-yellow-500 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl">
              Book Free Session
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-yellow-400 focus:outline-none transition-colors duration-200"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="py-4 pb-6 space-y-3 border-t border-yellow-500/20">
            <a href="#home" className="block text-gray-300 hover:text-yellow-400 font-medium py-2 transition-colors duration-200">
              Home
            </a>
            
            <a href="#testimonials" className="block text-gray-300 hover:text-yellow-400 font-medium py-2 transition-colors duration-200">
              Testimonials
            </a>
            
            <a href="#pricing" className="block text-gray-300 hover:text-yellow-400 font-medium py-2 transition-colors duration-200">
              Pricing
            </a>
            
            <a href="#faqs" className="block text-gray-300 hover:text-yellow-400 font-medium py-2 transition-colors duration-200">
              FAQs
            </a>
            
            <a href="#contact" className="block text-gray-300 hover:text-yellow-400 font-medium py-2 transition-colors duration-200">
              Contact Us
            </a>
            
            <button className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-slate-900 px-6 py-3 rounded-lg font-medium hover:from-yellow-400 hover:to-yellow-500 transition-all duration-200 mt-4">
              Book Free Session
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}