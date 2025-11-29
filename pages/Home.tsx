import React from 'react';
import { Editable } from '../components/Editable';
import { ArrowRight, Leaf, HeartHandshake, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Home: React.FC = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative bg-stone-900 text-white min-h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
             {/* Forest path image for calm/warm vibe */}
             <img src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop" alt="Forest Path" className="w-full h-full object-cover opacity-60" />
             <div className="absolute inset-0 bg-gradient-to-r from-brand-950/80 to-brand-900/40 mix-blend-multiply"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center md:text-left">
          <div className="max-w-3xl">
            <div className="inline-block px-4 py-1.5 bg-fall-gold/20 backdrop-blur-sm border border-fall-gold/30 rounded-full text-fall-gold font-bold text-sm uppercase tracking-widest mb-6">
                Legitimerad Psykoterapeut
            </div>
            <Editable id="home-hero-title" as="h1" className="text-5xl md:text-7xl font-serif font-bold mb-8 leading-tight drop-shadow-lg text-fall-cream" />
            <div className="max-w-xl">
                <Editable id="home-hero-subtitle" as="p" className="text-xl md:text-2xl text-stone-200 mb-10 font-light leading-relaxed" />
            </div>
            <Link
                to="/contact"
                className="inline-flex items-center gap-3 bg-fall-gold hover:bg-fall-pumpkin text-white px-8 py-4 rounded-full font-bold transition-all transform hover:scale-105 hover:shadow-xl shadow-lg group"
            >
                <Editable id="home-hero-cta" as="span" />
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Intro Section - "Om Mig" */}
      <section className="py-24 bg-fall-cream relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-fall-gold/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
          <div className="relative group">
            <div className="absolute inset-0 bg-brand-200 rounded-3xl rotate-6 transform transition-transform group-hover:rotate-3 opacity-50"></div>
            <img 
                src="https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1000&auto=format&fit=crop" 
                alt="Therapy session setup" 
                className="relative rounded-3xl shadow-2xl w-full h-[500px] object-cover grayscale-[20%] sepia-[10%] group-hover:grayscale-0 transition-all duration-700" 
            />
          </div>
          <div>
            <h3 className="font-serif text-brand-700 italic text-2xl mb-2">Välkommen</h3>
            <Editable id="home-intro-heading" as="h2" className="text-4xl md:text-5xl font-serif font-black text-brand-900 mb-8 leading-tight" />
            <div className="prose prose-lg prose-stone">
                <Editable id="home-intro-text" multiline className="text-lg text-fall-brown/80 font-light leading-relaxed mb-8" />
            </div>
            
            <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="bg-white p-4 rounded-xl shadow-sm border border-stone-100 flex items-center gap-3">
                    <div className="bg-fall-moss/10 p-2 rounded-full text-fall-moss">
                        <Leaf size={24} />
                    </div>
                    <span className="font-medium text-fall-brown">Trygg Miljö</span>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm border border-stone-100 flex items-center gap-3">
                    <div className="bg-brand-100 p-2 rounded-full text-brand-700">
                        <HeartHandshake size={24} />
                    </div>
                    <span className="font-medium text-fall-brown">HBTQ-kompetent</span>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid - Warm Cards */}
      <section className="py-24 bg-stone-100 relative">
        <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-16">
                <h2 className="text-3xl font-serif font-bold text-brand-900 mb-4">Så här arbetar vi</h2>
                <div className="h-1 w-20 bg-fall-gold mx-auto rounded-full"></div>
            </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { id: '1', icon: <Users size={32} />, color: 'bg-brand-100 text-brand-800' },
              { id: '2', icon: <Leaf size={32} />, color: 'bg-fall-moss/20 text-fall-forest' },
              { id: '3', icon: <HeartHandshake size={32} />, color: 'bg-fall-gold/20 text-fall-gold' },
            ].map((feat) => (
              <div key={feat.id} className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 group border border-stone-100/50 hover:border-brand-200">
                <div className={`mb-6 w-16 h-16 rounded-2xl flex items-center justify-center ${feat.color} transition-transform group-hover:scale-110 duration-500`}>
                    {feat.icon}
                </div>
                <Editable id={`home-feat-${feat.id}-title`} as="h3" className="text-2xl font-serif font-bold text-brand-900 mb-4" />
                <Editable id={`home-feat-${feat.id}-text`} multiline className="text-stone-600 leading-relaxed font-light" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};