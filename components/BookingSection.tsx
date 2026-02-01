
import React from 'react';

const BookingSection: React.FC = () => {
  return (
    <section id="booking" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="bg-neutral-900 rounded-[3rem] overflow-hidden flex flex-col md:flex-row shadow-2xl">
          <div className="md:w-1/2 p-12 lg:p-16 flex flex-col justify-center">
            <h2 className="text-amber-500 text-sm tracking-[0.4em] uppercase font-bold mb-6">Reservation</h2>
            <h3 className="text-4xl lg:text-5xl font-display text-white mb-6">Begin Your <br /><span className="italic">Journey.</span></h3>
            <p className="text-neutral-400 mb-8 font-light leading-relaxed">
              Secure your session with our master stylists. Whether it's a routine refresh or a complete reinvention, we are ready to create.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-white">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                </div>
                <span>(91)9372418454</span>
              </div>
              <div className="flex items-center gap-4 text-white">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <span>Sakinaka Powai Lake</span>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 bg-neutral-800 p-12 lg:p-16 flex flex-col justify-center">
             <form className="space-y-6">
               <div className="grid grid-cols-2 gap-4">
                 <div>
                   <label className="text-xs uppercase tracking-widest text-neutral-500 font-bold mb-2 block">Name</label>
                   <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:ring-1 focus:ring-amber-500" />
                 </div>
                 <div>
                   <label className="text-xs uppercase tracking-widest text-neutral-500 font-bold mb-2 block">Service</label>
                   <select className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:ring-1 focus:ring-amber-500 appearance-none">
                     <option>Haircut</option>
                     <option>Coloring</option>
                     <option>Facial</option>
                     <option>Nails</option>
                   </select>
                 </div>
               </div>
               <div>
                  <label className="text-xs uppercase tracking-widest text-neutral-500 font-bold mb-2 block">Email</label>
                  <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:ring-1 focus:ring-amber-500" />
               </div>
               <div>
                  <label className="text-xs uppercase tracking-widest text-neutral-500 font-bold mb-2 block">Date Preferred</label>
                  <input type="date" className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:ring-1 focus:ring-amber-500" />
               </div>
               <button type="submit" className="w-full bg-amber-500 text-white font-bold py-5 rounded-full hover:bg-amber-600 transition-all shadow-lg shadow-amber-500/20">
                 Request Appointment
               </button>
             </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
