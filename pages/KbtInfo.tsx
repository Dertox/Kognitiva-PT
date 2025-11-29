import React from 'react';
import { Editable } from '../components/Editable';

export const KbtInfo: React.FC = () => {
  return (
    <div className="py-20 animate-fade-in bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <article>
            <div className="mb-14 text-center">
                <span className="text-brand-600 font-bold uppercase tracking-widest text-xs mb-4 block">Kunskapsbank</span>
                <Editable id="kbt-title" as="h1" className="text-4xl md:text-5xl font-serif font-black text-brand-900 mb-6 leading-tight" />
                <div className="h-1 w-24 bg-fall-gold mx-auto rounded-full mb-8"></div>
                <Editable id="kbt-intro" multiline className="text-xl text-stone-600 italic font-serif" />
            </div>

            <div className="my-12 relative">
                 <div className="absolute inset-0 bg-brand-900/10 rounded-2xl transform translate-x-3 translate-y-3"></div>
                 <img src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=1000&auto=format&fit=crop" alt="Library books" className="w-full h-80 object-cover rounded-2xl shadow-lg relative z-10" />
            </div>

            <div className="prose prose-stone prose-lg mx-auto">
                <div className="bg-fall-cream p-8 rounded-2xl border-l-4 border-brand-500 mb-8">
                    <Editable id="kbt-revolution-title" as="h2" className="text-2xl font-serif font-bold text-brand-900 mb-4 mt-0" />
                    <Editable id="kbt-revolution-text" multiline className="text-stone-700 leading-relaxed font-light" />
                </div>
                
                <h3 className="text-2xl font-serif font-bold text-brand-900 mt-12 mb-4">Tredje vågens beteendeterapi</h3>
                <p className="text-stone-600 font-light leading-relaxed mb-4">
                    På 2000-talet har den så kallade tredje vågens beteendeterapi vuxit fram, med terapiformer som 
                    acceptance and commitment therapy (ACT) och dialektisk beteendeterapi (DBT).
                </p>
                <p className="text-stone-600 font-light leading-relaxed">
                    Denna innebär delvis en återgång till den förkognitivistiska beteendeterapin, på så vis att man inte längre försöker att direkt förändra kognitioner. Istället försöker man där att förändra förhållandet till sitt tänkande.
                </p>
            </div>
        </article>
      </div>
    </div>
  );
};