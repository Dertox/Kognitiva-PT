import React from 'react';
import { Editable } from '../components/Editable';

export const Services: React.FC = () => {
  return (
    <div className="py-20 animate-fade-in bg-fall-cream">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <span className="text-fall-gold font-bold uppercase tracking-widest text-sm mb-2 block">Vad vi erbjuder</span>
          <Editable id="services-title" as="h1" className="text-5xl font-serif font-black text-brand-900 mb-8" />
          <Editable id="services-intro" multiline className="text-xl text-stone-600 leading-relaxed font-light" />
        </div>

        {/* Detailed Service List */}
        <div className="space-y-20">
          {/* ACT */}
          <div className="flex flex-col lg:flex-row gap-12 items-center">
             <div className="w-full lg:w-1/2 relative">
                 <div className="absolute -inset-4 bg-brand-100/50 rounded-full blur-2xl z-0"></div>
                 <img 
                    src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1000&auto=format&fit=crop" 
                    alt="Peaceful nature" 
                    className="relative z-10 rounded-[2rem] w-full h-80 object-cover shadow-2xl rotate-1 hover:rotate-0 transition-all duration-700" 
                 />
             </div>
             <div className="w-full lg:w-1/2">
                <div className="bg-white p-10 rounded-3xl shadow-sm border border-stone-100">
                    <Editable id="service-act-title" as="h2" className="text-3xl font-serif font-bold text-brand-900 mb-6" />
                    <Editable id="service-act-text" multiline className="text-stone-600 leading-relaxed text-lg font-light" />
                </div>
             </div>
          </div>

          {/* MI */}
          <div className="flex flex-col lg:flex-row-reverse gap-12 items-center">
             <div className="w-full lg:w-1/2 relative">
                 <div className="absolute -inset-4 bg-fall-moss/20 rounded-full blur-2xl z-0"></div>
                 <img 
                    src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1000&auto=format&fit=crop" 
                    alt="Conversation" 
                    className="relative z-10 rounded-[2rem] w-full h-80 object-cover shadow-2xl -rotate-1 hover:rotate-0 transition-all duration-700" 
                 />
             </div>
             <div className="w-full lg:w-1/2">
                <div className="bg-white p-10 rounded-3xl shadow-sm border border-stone-100">
                    <Editable id="service-mi-title" as="h2" className="text-3xl font-serif font-bold text-brand-900 mb-6" />
                    <Editable id="service-mi-text" multiline className="text-stone-600 leading-relaxed text-lg font-light" />
                </div>
             </div>
          </div>
        </div>
        
        {/* Pricing List */}
        <div className="mt-24 max-w-4xl mx-auto">
            <div className="bg-stone-800 text-stone-300 p-10 md:p-16 rounded-[2.5rem] text-center shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-brand-600 via-fall-gold to-fall-moss"></div>
                <h3 className="text-3xl font-serif font-bold mb-10 text-white">Investera i ditt välmående</h3>
                <div className="space-y-6 text-lg font-light">
                    <div className="flex justify-between items-center border-b border-stone-700 pb-4 max-w-lg mx-auto">
                        <span>30 minuter</span>
                        <span className="font-bold text-fall-gold text-xl">700 kr</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-stone-700 pb-4 max-w-lg mx-auto">
                        <span>50 minuter</span>
                        <span className="font-bold text-fall-gold text-xl">1200 kr</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-stone-700 pb-4 max-w-lg mx-auto">
                        <span>60 minuter</span>
                        <span className="font-bold text-fall-gold text-xl">1400 kr</span>
                    </div>
                </div>
                <p className="mt-10 text-sm opacity-60 italic">* Priser kan justeras. Kontakta oss för aktuell information.</p>
            </div>
        </div>
      </div>
    </div>
  );
};