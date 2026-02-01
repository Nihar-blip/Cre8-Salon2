
import React from 'react';

const Gallery: React.FC = () => {
  const images = [
    {
      src: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&q=80&w=1200',
      title: 'The Platinum Suite',
      category: 'Interior'
    },
    {
      src: 'https://images.unsplash.com/photo-1560869713-7d0a29430863?auto=format&fit=crop&q=80&w=1200',
      title: 'Precision Balayage',
      category: 'Color'
    },
    {
      src: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=1200',
      title: 'Sculpted Waves',
      category: 'Styling'
    },
    {
      src: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=1200',
      title: 'Editorial Cut',
      category: 'Design'
    },
    {
      src: 'https://images.unsplash.com/photo-1634449571010-02389ed0f9b0?auto=format&fit=crop&q=80&w=1200',
      title: 'Modern Minimalism',
      category: 'Interior'
    },
    {
      src: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&q=80&w=1200',
      title: 'Luxe Vibrance',
      category: 'Color'
    }
  ];

  return (
    <section id="gallery" className="py-24 bg-neutral-950 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-8 text-center md:text-left">
          <div>
            <h2 className="text-amber-500 text-sm tracking-[0.4em] uppercase font-bold mb-4">The Portfolio</h2>
            <h3 className="text-4xl md:text-6xl font-display font-light">Visual Masterpieces</h3>
          </div>
          <p className="text-neutral-400 max-w-sm font-light">
            A curated collection of our finest transformations and the spaces where they come to life.
          </p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {images.map((item, i) => (
            <div key={i} className="relative overflow-hidden group rounded-2xl break-inside-avoid">
              <img 
                src={item.src} 
                alt={item.title}
                className="w-full h-auto object-cover transition-all duration-1000 group-hover:scale-105 group-hover:rotate-1"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
                <span className="text-amber-500 text-xs font-bold uppercase tracking-widest mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {item.category}
                </span>
                <h4 className="text-2xl font-display transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                  {item.title}
                </h4>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-20 text-center">
          <button className="px-12 py-4 border border-white/20 rounded-full hover:bg-white/10 hover:border-white transition-all text-sm uppercase tracking-widest font-medium">
            Follow our Instagram @Cre8Studio
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
