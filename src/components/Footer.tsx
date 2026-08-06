import React from 'react';
import { Terminal, ArrowUp, Github, Linkedin, Mail, Heart } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 border-t border-slate-800 bg-slate-950/80 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyber-cyan to-cyber-purple p-[2px]">
              <div className="w-full h-full bg-cyber-bg rounded-[10px] flex items-center justify-center">
                <Terminal className="w-4 h-4 text-cyber-cyan" />
              </div>
            </div>
            <div>
              <span className="font-orbitron font-bold text-lg text-white">
                Snehaba<span className="text-cyber-cyan">Parmar</span>
              </span>
              <p className="text-[10px] font-mono text-slate-400">AI/ML & Web Developer Portfolio</p>
            </div>
          </div>

          {/* System Operational Status Indicator */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>System Status: All Systems Operational 🟢</span>
          </div>

          {/* Scroll to Top */}
          <button
            onClick={scrollToTop}
            className="p-3 rounded-xl bg-slate-800 border border-slate-700 text-slate-300 hover:text-cyber-cyan hover:border-cyber-cyan transition-all group"
            title="Back to top"
          >
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-slate-900 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Snehaba Parmar. Built with React, Tailwind & Framer Motion.</p>
          <div className="flex items-center gap-4">
            <a href={PORTFOLIO_DATA.personal.github} target="_blank" rel="noreferrer" className="hover:text-cyber-cyan">GitHub</a>
            <a href={PORTFOLIO_DATA.personal.linkedin} target="_blank" rel="noreferrer" className="hover:text-cyber-cyan">LinkedIn</a>
            <a href={`mailto:${PORTFOLIO_DATA.personal.email}`} className="hover:text-cyber-cyan">Email</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
