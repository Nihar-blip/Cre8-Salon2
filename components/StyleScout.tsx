
import React, { useState } from 'react';
import { getStyleRecommendation } from '../services/gemini';
import { StyleRecommendation } from '../types';

const StyleScout: React.FC = () => {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [recommendation, setRecommendation] = useState<StyleRecommendation | null>(null);

  const handleAsk = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    
    setLoading(true);
    const result = await getStyleRecommendation(query);
    setRecommendation(result);
    setLoading(false);
  };

  return (
    <section id="scout" className="py-24 bg-neutral-900 text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-amber-500/5 blur-[120px] rounded-full translate-x-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-amber-500 text-sm tracking-[0.4em] uppercase font-bold mb-4">Innovation</h2>
          <h3 className="text-4xl md:text-6xl font-display font-light mb-8">Meet Your <br /><span className="italic">Style Scout</span></h3>
          <p className="text-neutral-400 text-lg mb-10 font-light leading-relaxed">
            Unsure of your next look? Describe your vibe, your features, or the occasion, and our AI-powered scout will draft a personalized Cre8 style prescription for you.
          </p>
          
          <form onSubmit={handleAsk} className="space-y-4">
            <div className="relative">
              <textarea 
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Ex: I'm attending a summer gala and want something bold but elegant for my shoulder-length hair..."
                className="w-full bg-white/5 border border-white/10 rounded-2xl p-6 text-white focus:outline-none focus:ring-2 focus:ring-amber-500 h-32 resize-none transition-all"
              />
            </div>
            <button 
              disabled={loading}
              className="w-full bg-white text-black py-4 rounded-full font-bold hover:bg-amber-500 hover:text-white transition-all disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <div className="w-5 h-5 border-2 border-neutral-900 border-t-transparent rounded-full animate-spin"></div>
                  Scouting Styles...
                </>
              ) : 'Generate Recommendation'}
            </button>
          </form>
        </div>

        <div className="relative">
          {recommendation ? (
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-[2rem] animate-fade-in">
              <div className="mb-6">
                <span className="text-amber-500 text-xs font-bold uppercase tracking-widest block mb-2">Your Prescription</span>
                <h4 className="text-3xl font-display">{recommendation.title}</h4>
              </div>
              <p className="text-neutral-300 mb-8 leading-relaxed font-light italic">
                "{recommendation.description}"
              </p>
              <div className="space-y-4">
                <h5 className="font-bold text-sm uppercase tracking-widest text-white/50">Master Tips:</h5>
                <ul className="space-y-3">
                  {recommendation.tips.map((tip, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-amber-500 font-bold mt-1">0{idx + 1}.</span>
                      <span className="text-neutral-300 text-sm leading-relaxed">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <button 
                onClick={() => document.getElementById('booking')?.scrollIntoView()}
                className="mt-10 text-amber-500 font-bold border-b border-amber-500 pb-1 hover:text-amber-400 transition-colors"
              >
                Book This Look Now →
              </button>
            </div>
          ) : (
            <div className="aspect-square bg-white/5 rounded-full flex items-center justify-center border border-white/5 relative group overflow-hidden">
               <div className="text-center p-12 relative z-10">
                 <div className="w-16 h-16 bg-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                   <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
                 </div>
                 <p className="text-neutral-500 font-light">Enter your vision to reveal your personalized style profile</p>
               </div>
               <div className="absolute inset-0 opacity-20 pointer-events-none">
                  <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-500/20 via-transparent to-transparent animate-pulse"></div>
               </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default StyleScout;
