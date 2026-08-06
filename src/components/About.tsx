import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Cpu, Languages } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyber-purple/10 border border-cyber-purple/30 text-cyber-purple text-xs font-mono">
            <Cpu className="w-3.5 h-3.5" />
            <span>AI & Developer Profile</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-orbitron text-white">
            About <span className="text-cyber-cyan">Me & Education</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyber-cyan to-cyber-purple mx-auto rounded-full" />
        </div>

        {/* Top Grid: Bio Summary & Languages */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          <div className="lg:col-span-8 glass-card p-8 rounded-3xl border border-slate-800 space-y-4">
            <h3 className="text-2xl font-bold font-orbitron text-white flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-cyber-cyan animate-pulse" />
              Professional Background
            </h3>
            <p className="text-slate-300 leading-relaxed text-base">
              I am an Information Technology graduate currently pursuing my <strong className="text-cyber-cyan">Master of Science in Information Technology (M.Sc. IT)</strong> at K.S. School of Business Management.
              My expertise spans <strong className="text-cyber-cyan">Machine Learning, Google Gemini LLM API Prompt Engineering, Computer Vision (OpenCV)</strong>, and <strong className="text-cyber-cyan">Full-Stack Development (FastAPI, React, Node.js)</strong>.
            </p>
            <p className="text-slate-300 leading-relaxed text-base">
              Through flagship projects such as an LLM Smart Ticket Management system, the <strong className="text-white">AssetFlow Enterprise Platform (Odoo Hackathon 2026)</strong>, an emotion-aware ML application (<strong className="text-white">Mood Room</strong>), an OpenCV vehicle detection traffic optimization system, and <strong className="text-white">CustomArtistry</strong>, I bring robust software engineering and analytical problem solving to every team.
            </p>
          </div>

          <div className="lg:col-span-4 glass-card p-8 rounded-3xl border border-slate-800 space-y-4 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold font-orbitron text-white flex items-center gap-2 mb-4">
                <Languages className="w-5 h-5 text-cyber-cyan" />
                Languages Spoken
              </h3>
              <div className="space-y-3">
                {PORTFOLIO_DATA.languagesSpoken.map((lang) => (
                  <div key={lang} className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-cyber-cyan" />
                    <span className="text-sm font-semibold text-slate-200">{lang}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Education Timeline Cards */}
        <h3 className="text-2xl font-bold font-orbitron text-white mb-8 flex items-center gap-3">
          <GraduationCap className="w-6 h-6 text-cyber-cyan" />
          Academic Qualification Timeline
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PORTFOLIO_DATA.education.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="glass-card p-6 rounded-3xl border border-slate-800 hover:border-cyber-cyan/50 transition-all group flex flex-col justify-between shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full bg-cyber-cyan/10 text-cyber-cyan text-xs font-mono font-bold">
                    {edu.duration}
                  </span>
                  {edu.grade && (
                    <span className="px-2.5 py-0.5 rounded-md bg-amber-400/10 text-amber-400 text-xs font-orbitron font-semibold">
                      {edu.grade}
                    </span>
                  )}
                </div>
                <h4 className="text-lg font-bold text-white group-hover:text-cyber-cyan transition-colors mb-1">
                  {edu.degree}
                </h4>
                <p className="text-xs text-cyber-purple font-semibold mb-3">{edu.institution}</p>
                <p className="text-xs text-slate-400 leading-relaxed">{edu.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
