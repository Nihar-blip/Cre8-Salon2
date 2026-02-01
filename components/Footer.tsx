
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-900 text-white py-20 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <a href="#" className="text-4xl font-display font-bold tracking-tighter mb-6 block">
              CRE8<span className="text-amber-500">.</span>
            </a>
            <p className="text-neutral-500 max-w-sm font-light leading-relaxed">
              We believe in the power of individual expression through masterful beauty artistry. Join us in redefining luxury.
            </p>
          </div>
          <div>
            <h4 className="text-amber-500 text-xs font-bold uppercase tracking-widest mb-6">Experience</h4>
            <ul className="space-y-4 text-neutral-400 font-light">
              <li><a href="#" className="hover:text-white transition-colors">Style Scout AI</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Membership</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Bridal Concierge</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privé Lounge</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-amber-500 text-xs font-bold uppercase tracking-widest mb-6">Social</h4>
            <ul className="space-y-4 text-neutral-400 font-light">
              <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pinterest</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Vimeo</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/5 text-neutral-600 text-sm font-light">
          <p>© 2024 Cre8 Studio. All rights reserved.</p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Artistry</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
