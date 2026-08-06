import React, { useState, useEffect } from 'react';
import { Download, Terminal } from 'lucide-react';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-panel py-3 shadow-lg shadow-cyber-cyan/5' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#home"
          className="flex items-center gap-2 group cursor-pointer"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyber-cyan to-cyber-purple p-[2px] transition-transform group-hover:scale-105">
            <div className="w-full h-full bg-cyber-bg rounded-[10px] flex items-center justify-center">
              <Terminal className="w-5 h-5 text-cyber-cyan group-hover:rotate-12 transition-transform" />
            </div>
          </div>
          <span className="font-orbitron font-bold text-xl tracking-wider text-white">
            Port<span className="text-cyber-cyan">folio</span>
          </span>
        </a>

        {/* Desktop Nav Items */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-300 hover:text-cyber-cyan transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-cyber-cyan hover:after:w-full after:transition-all"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Controls */}
        <div className="hidden lg:flex items-center gap-4">
          {/* Download CV button */}
          <button
            onClick={onOpenResume}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-cyber-cyan via-cyber-blue to-cyber-purple text-slate-950 font-bold font-orbitron text-xs tracking-wide shadow-lg shadow-cyber-cyan/25 hover:shadow-cyber-cyan/50 hover:scale-105 active:scale-95 transition-all"
          >
            <Download className="w-4 h-4" />
            <span>Download CV</span>
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex lg:hidden items-center gap-3">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-slate-800/60 text-slate-300 hover:text-cyber-cyan"
          >
            <span className="font-orbitron text-xs font-bold">MENU</span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden glass-panel border-t border-slate-800 px-6 py-6 mt-3 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-medium text-slate-200 hover:text-cyber-cyan transition-colors"
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenResume();
            }}
            className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-cyber-cyan to-cyber-purple text-slate-950 font-orbitron text-sm font-bold shadow-lg"
          >
            <Download className="w-4 h-4" />
            <span>Download CV</span>
          </button>
        </div>
      )}
    </header>
  );
};
