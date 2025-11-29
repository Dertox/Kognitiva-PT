import React, { useState } from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { Menu, X, User, Settings, LogOut, Edit3 } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { useContent } from '../contexts/ContentContext';
import { Editable } from './Editable';

export const Layout: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isAuthenticated, logout } = useAuth();
  const { isEditing, toggleEditing, resetToDefaults } = useContent();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const navItems = [
    { path: '/', label: 'Välkommen' },
    { path: '/kbt', label: 'Vad är KBT' },
    { path: '/services', label: 'Tjänster' },
    { path: '/contact', label: 'Kontakt' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-fall-cream text-fall-brown font-light">
      {/* Admin Toolbar */}
      {isAuthenticated && (
        <div className="bg-fall-brown text-fall-cream p-2 sticky top-0 z-50 flex justify-between items-center px-4 shadow-md border-b border-fall-gold/20">
          <div className="flex items-center space-x-4">
            <span className="font-bold text-sm text-fall-gold uppercase tracking-wider flex items-center gap-2">
              <Settings size={16} /> Admin Mode
            </span>
            <button
              onClick={toggleEditing}
              className={`flex items-center gap-2 px-3 py-1 rounded-full text-sm transition-colors shadow-sm ${
                isEditing ? 'bg-fall-moss text-white' : 'bg-fall-stone text-fall-brown hover:bg-white'
              }`}
            >
              <Edit3 size={14} />
              {isEditing ? 'Redigering PÅ' : 'Aktivera Redigering'}
            </button>
            <button
                onClick={resetToDefaults}
                className="text-xs text-fall-rust hover:text-red-400 underline"
            >
                Återställ innehåll
            </button>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 text-xs bg-black/20 hover:bg-black/40 px-3 py-1 rounded border border-white/10"
          >
            <LogOut size={14} /> Logga ut
          </button>
        </div>
      )}

      {/* Main Header */}
      <header className="bg-fall-cream/95 backdrop-blur-sm border-b border-stone-200 sticky top-0 z-40 transition-all duration-300">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            {/* CSS Recreation of Kognitiva Logo */}
            <div className="flex-shrink-0">
               <div className="bg-brand-900 w-14 h-14 rounded-xl border-2 border-white shadow-md flex items-center justify-center relative overflow-hidden group hover:scale-105 transition-transform duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
                  <div className="font-serif font-black text-white text-3xl tracking-tighter relative z-10 flex items-baseline">
                    K
                    <span className="text-[10px] font-sans font-bold uppercase -ml-1 mb-3">PT</span>
                  </div>
               </div>
            </div>
            
            <div className="flex flex-col">
              <Editable id="site-title" as="h1" className="text-2xl md:text-3xl font-serif font-black text-brand-900 leading-none tracking-tight" />
              <Editable id="site-subtitle" as="p" className="text-xs md:text-sm text-fall-rust font-medium uppercase tracking-widest mt-1" />
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `text-base font-serif italic transition-all duration-300 border-b-2 pb-1 ${
                    isActive 
                    ? 'text-brand-900 border-fall-gold font-semibold' 
                    : 'text-stone-600 border-transparent hover:text-brand-800 hover:border-brand-200'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
             {!isAuthenticated && (
                <NavLink to="/login" className="text-stone-400 hover:text-fall-gold transition-colors p-2 rounded-full hover:bg-stone-100">
                    <User size={18} />
                </NavLink>
             )}
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-brand-900" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Nav Dropdown */}
        {isMenuOpen && (
          <nav className="md:hidden bg-white border-t border-stone-100 shadow-xl absolute w-full left-0 z-50 animate-fade-in-down">
            <ul className="flex flex-col p-4 space-y-2">
              {navItems.map((item) => (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={({ isActive }) =>
                      `block py-3 px-6 rounded-lg font-serif ${
                        isActive ? 'bg-brand-50 text-brand-900 font-bold' : 'text-stone-600 hover:bg-stone-50'
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
               {!isAuthenticated && (
                <li className="border-t border-stone-100 mt-2 pt-2">
                    <NavLink to="/login" onClick={() => setIsMenuOpen(false)} className="block py-3 px-6 text-stone-400 text-sm">
                        Logga in (Admin)
                    </NavLink>
                </li>
               )}
            </ul>
          </nav>
        )}
      </header>

      {/* Main Content Area */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-brand-950 text-stone-300 py-16 border-t-8 border-fall-gold">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-brand-800 w-10 h-10 rounded-lg flex items-center justify-center border border-brand-700">
                     <span className="font-serif font-black text-white text-xl">K</span>
                </div>
                <span className="font-serif font-bold text-xl text-white tracking-wide">Kognitiva PT</span>
              </div>
              <Editable id="footer-text" multiline className="text-stone-400 leading-relaxed font-light" />
            </div>
            <div>
              <h4 className="text-fall-gold font-serif font-bold mb-6 text-lg">Behandlingsområden</h4>
              <ul className="space-y-3 text-sm font-light tracking-wide">
                <li><NavLink to="/services" className="hover:text-white hover:translate-x-1 transition-all inline-block">Stress & Utmattning</NavLink></li>
                <li><NavLink to="/services" className="hover:text-white hover:translate-x-1 transition-all inline-block">Depression & Nedstämdhet</NavLink></li>
                <li><NavLink to="/services" className="hover:text-white hover:translate-x-1 transition-all inline-block">Fobier & Ångest</NavLink></li>
                <li><NavLink to="/services" className="hover:text-white hover:translate-x-1 transition-all inline-block">Relationsproblem</NavLink></li>
              </ul>
            </div>
            <div>
              <h4 className="text-fall-gold font-serif font-bold mb-6 text-lg">Hitta hit</h4>
              <address className="not-italic text-stone-400 space-y-2 mb-6 font-light">
                <p>Sigtunagatan 17</p>
                <p>113 22 Stockholm</p>
                <p className="mt-4 text-white">0768-500732</p>
              </address>
              <NavLink to="/login" className="text-xs text-stone-600 hover:text-stone-400 transition-colors">
                {isAuthenticated ? 'Gå till adminpanelen' : 'Admin Login'}
              </NavLink>
            </div>
          </div>
          <div className="border-t border-brand-900 pt-8 text-center text-xs text-stone-600 font-medium">
            <p>&copy; {new Date().getFullYear()} Kognitiva PT. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};