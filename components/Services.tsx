
import React from 'react';
import { Service } from '../types';

const SERVICES: Service[] = [
  {
    id: '1',
    category: 'Hair',
    name: 'Artisan Haircuts',
    description: 'Precision cutting techniques tailored to your face shape and lifestyle.',
    price: 'From ₹3,500',
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '2',
    category: 'Hair',
    name: 'Vivid Coloring',
    description: 'High-fashion balayage, ombre, and multidimensional color artistry.',
    price: 'From ₹12,500',
    image: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '3',
    category: 'Skin',
    name: 'Luxe Skin Therapy',
    description: 'Advanced facials and rejuvenating treatments for a radiant glow.',
    price: 'From ₹8,000',
    image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc2069?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '4',
    category: 'Nails',
    name: 'Sculpted Nails',
    description: 'Bespoke nail art and long-lasting luxury manicures.',
    price: 'From ₹4,500',
    image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&q=80&w=800'
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-neutral-400 text-sm tracking-[0.4em] uppercase font-bold mb-4">Our Expertise</h2>
            <h3 className="text-4xl md:text-6xl font-display font-light">The Masterful Menu</h3>
          </div>
          <p className="text-neutral-500 max-w-sm">
            Each service at Cre8 is a collaborative process between artist and client, designed to celebrate your individuality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service) => (
            <div key={service.id} className="group cursor-pointer">
              <div className="relative aspect-[3/4] overflow-hidden mb-6 bg-neutral-100">
                <img 
                  src={service.image} 
                  alt={service.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <span className="text-amber-500 text-xs font-bold tracking-widest uppercase mb-2 block">{service.category}</span>
              <h4 className="text-2xl font-display mb-2">{service.name}</h4>
              <p className="text-neutral-500 text-sm mb-4 leading-relaxed">{service.description}</p>
              <span className="text-neutral-900 font-semibold border-b border-amber-500 pb-1">{service.price}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
