
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-neutral-900">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=1920" 
          alt="Salon Background" 
          className="w-full h-full object-cover opacity-40 scale-105 transition-transform duration-[10s] hover:scale-100"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-neutral-900"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <span className="text-amber-500 uppercase tracking-[0.3em] font-medium mb-4 block animate-fade-in-up">
          Crafting Identity Since 2012
        </span>
        <h1 className="text-5xl md:text-8xl font-display font-light text-white leading-tight mb-8">
          Where Art Meets <br />
          <span className="italic">Excellence.</span>
        </h1>
        <p className="text-neutral-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed">
          Experience precision styling and avant-garde beauty treatments in an atmosphere designed to inspire. Your transformation begins at Cre8.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="#booking" 
            className="w-full sm:w-auto px-10 py-4 bg-amber-500 text-white font-medium rounded-full hover:bg-amber-600 transition-all transform hover:-translate-y-1 shadow-xl shadow-amber-500/20"
          >
            Schedule Consultation
          </a>
          <a 
            href="#services" 
            className="w-full sm:w-auto px-10 py-4 border border-white/20 text-white font-medium rounded-full hover:bg-white/10 backdrop-blur-sm transition-all"
          >
            Explore Services
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-amber-500 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
