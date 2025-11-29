import React from 'react';
import { Editable } from '../components/Editable';
import { Mail, Phone, MapPin } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <div className="py-20 bg-stone-100 animate-fade-in min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 shadow-2xl rounded-[2.5rem] overflow-hidden">
            
            {/* Info Section - Dark Warm Background */}
            <div className="p-12 md:p-16 bg-brand-900 text-stone-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                
                <div className="relative z-10">
                    <span className="text-fall-gold font-bold uppercase tracking-widest text-xs mb-4 block">Hör av dig</span>
                    <Editable id="contact-title" as="h1" className="text-4xl font-serif font-bold mb-6 text-white" />
                    <Editable id="contact-text" multiline className="text-brand-100 mb-12 text-lg font-light leading-relaxed" />

                    <div className="space-y-10">
                        <div className="flex items-start gap-6 group">
                            <div className="bg-white/10 p-4 rounded-2xl group-hover:bg-fall-gold transition-colors duration-300">
                                <Mail size={24} className="text-white" />
                            </div>
                            <div>
                                <h3 className="font-bold text-sm uppercase tracking-wider text-brand-200 mb-1">Email</h3>
                                <Editable id="contact-email" className="text-xl font-serif text-white" />
                            </div>
                        </div>
                        <div className="flex items-start gap-6 group">
                            <div className="bg-white/10 p-4 rounded-2xl group-hover:bg-fall-gold transition-colors duration-300">
                                <Phone size={24} className="text-white" />
                            </div>
                            <div>
                                <h3 className="font-bold text-sm uppercase tracking-wider text-brand-200 mb-1">Telefon</h3>
                                <Editable id="contact-phone" className="text-xl font-serif text-white" />
                            </div>
                        </div>
                        <div className="flex items-start gap-6 group">
                            <div className="bg-white/10 p-4 rounded-2xl group-hover:bg-fall-gold transition-colors duration-300">
                                <MapPin size={24} className="text-white" />
                            </div>
                            <div>
                                <h3 className="font-bold text-sm uppercase tracking-wider text-brand-200 mb-1">Adress</h3>
                                <Editable id="contact-address" multiline className="text-xl font-serif text-white" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Form Section - Light Background */}
            <div className="p-12 md:p-16 bg-white">
                <h2 className="text-3xl font-serif font-bold text-brand-900 mb-8">Skicka ett meddelande</h2>
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                    <div>
                        <label className="block text-sm font-bold text-stone-500 mb-2 uppercase tracking-wide">Namn</label>
                        <input type="text" className="w-full px-6 py-4 rounded-xl bg-stone-50 border border-stone-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all text-stone-700" placeholder="Ditt namn" />
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-stone-500 mb-2 uppercase tracking-wide">Email</label>
                        <input type="email" className="w-full px-6 py-4 rounded-xl bg-stone-50 border border-stone-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all text-stone-700" placeholder="din@email.se" />
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-stone-500 mb-2 uppercase tracking-wide">Meddelande</label>
                        <textarea rows={4} className="w-full px-6 py-4 rounded-xl bg-stone-50 border border-stone-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all resize-none text-stone-700" placeholder="Hur kan vi hjälpa dig?" />
                    </div>
                    <button className="w-full bg-fall-gold text-white font-bold py-5 rounded-xl hover:bg-fall-pumpkin transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-lg">
                        Skicka meddelande
                    </button>
                </form>
            </div>
        </div>
      </div>
    </div>
  );
};