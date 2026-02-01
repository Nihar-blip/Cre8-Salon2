
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-300 px-6 md:px-12 py-4 ${
          isScrolled || isMenuOpen ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a href="#" onClick={closeMenu} className={`text-3xl font-display font-bold tracking-tighter transition-colors ${isScrolled || isMenuOpen ? 'text-black' : 'text-white'}`}>
            CRE8<span className="text-amber-500">.</span>
          </a>
          
          {/* Desktop Menu */}
          <div className={`hidden md:flex items-center space-x-8 text-sm font-medium uppercase tracking-widest ${isScrolled ? 'text-neutral-700' : 'text-white/80'}`}>
            <a href="#services" className="hover:text-amber-500 transition-colors">Services</a>
            <a href="#scout" className="hover:text-amber-500 transition-colors">Style Scout</a>
            <a href="#gallery" className="hover:text-amber-500 transition-colors">Gallery</a>
            <a href="#booking" className="bg-amber-500 text-white px-6 py-2 rounded-full hover:bg-amber-600 transition-all transform hover:scale-105 active:scale-95">
              Book Now
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={toggleMenu}
            className={`md:hidden z-[70] p-2 transition-colors ${isScrolled || isMenuOpen ? 'text-black' : 'text-amber-500'}`}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-[55] bg-white transition-all duration-500 transform ${
          isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
        } flex flex-col items-center justify-center space-y-8 px-6 text-center`}
      >
        <div className="flex flex-col space-y-6 text-2xl font-display uppercase tracking-[0.2em]">
          <a href="#services" onClick={closeMenu} className="text-neutral-900 hover:text-amber-500 transition-colors">Services</a>
          <a href="#scout" onClick={closeMenu} className="text-neutral-900 hover:text-amber-500 transition-colors">Style Scout</a>
          <a href="#gallery" onClick={closeMenu} className="text-neutral-900 hover:text-amber-500 transition-colors">Gallery</a>
        </div>
        <div className="w-full max-w-xs pt-8 border-t border-neutral-100">
          <a 
            href="#booking" 
            onClick={closeMenu}
            className="block w-full bg-amber-500 text-white py-4 rounded-full font-bold text-lg hover:bg-amber-600 transition-all shadow-lg shadow-amber-500/20"
          >
            Book Appointment
          </a>
        </div>
        <div className="flex space-x-6 pt-8 text-neutral-400">
          <a href="#" className="hover:text-amber-500 transition-colors">Instagram</a>
          <a href="#" className="hover:text-amber-500 transition-colors">Facebook</a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
