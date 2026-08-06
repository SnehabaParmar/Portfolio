import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone, ArrowRight, Sparkles, Brain, GraduationCap, Download } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Typing animation effect
  useEffect(() => {
    const fullText = PORTFOLIO_DATA.personal.titles[currentTitleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(fullText.substring(0, displayText.length + 1));
        if (displayText === fullText) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setDisplayText(fullText.substring(0, displayText.length - 1));
        if (displayText === '') {
          setIsDeleting(false);
          setCurrentTitleIndex((prev) => (prev + 1) % PORTFOLIO_DATA.personal.titles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentTitleIndex]);

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden">
      {/* Ambient glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyber-cyan/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyber-purple/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Cyber Blob Frame with Snehaba's Original Real Photo (Clean - No Hover Swap text) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex justify-center order-1 lg:order-1"
          >
            <div className="relative group">
              {/* Outer Cyan Glow Ring */}
              <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-cyber-cyan via-cyber-blue to-cyber-purple opacity-70 blur-xl group-hover:opacity-100 transition duration-1000 animate-glow-pulse" />
              
              {/* Cyber Morphing Blob Container */}
              <div className="relative w-72 h-72 sm:w-88 sm:h-88 lg:w-96 lg:h-96 p-2 bg-gradient-to-tr from-cyber-cyan to-cyber-purple cyber-blob shadow-2xl overflow-hidden flex items-center justify-center">
                <img
                  src={PORTFOLIO_DATA.personal.realPhoto}
                  alt={PORTFOLIO_DATA.personal.name}
                  className="w-full h-full object-cover rounded-[inherit] transition-transform duration-700 group-hover:scale-105"
                />

                {/* HUD Overlay Lines & Status Tag */}
                <div className="absolute inset-0 bg-gradient-to-t from-cyber-bg/90 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-center">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyber-bg/90 border border-cyber-cyan/40 text-cyber-cyan text-xs font-orbitron backdrop-blur-md">
                    <span className="w-2 h-2 rounded-full bg-cyber-cyan animate-ping" />
                    Snehaba Parmar
                  </span>
                </div>
              </div>

              {/* Floating Badge 1: CGPA */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-2 -left-6 glass-panel px-4 py-2.5 rounded-2xl border border-cyber-cyan/30 flex items-center gap-3 shadow-lg"
              >
                <div className="p-2 rounded-xl bg-cyber-cyan/20 text-cyber-cyan">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 font-mono">B.Sc. IT Grade</p>
                  <p className="text-sm font-bold font-orbitron text-white">4.0 / 5.0 CGPA</p>
                </div>
              </motion.div>

              {/* Floating Badge 2: AI & ML */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -bottom-4 -right-6 glass-panel px-4 py-2.5 rounded-2xl border border-cyber-purple/40 flex items-center gap-3 shadow-lg"
              >
                <div className="p-2 rounded-xl bg-cyber-purple/20 text-cyber-purple">
                  <Brain className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 font-mono">Specialization</p>
                  <p className="text-sm font-bold font-orbitron text-white">OpenCV & GenAI</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column: Text & CTAs */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7 space-y-5 order-2 lg:order-2 text-center lg:text-left"
          >
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyber-cyan/10 border border-cyber-cyan/30 text-cyber-cyan text-xs font-mono tracking-wide">
              <Sparkles className="w-3.5 h-3.5 animate-pulse" />
              <span>Available for Internship & Technical Roles</span>
            </div>

            {/* Greeting */}
            <h2 className="text-xl sm:text-2xl font-medium text-slate-300">
              Hello, I'm
            </h2>

            {/* Main Name & Subtitle */}
            <div>
              <h1 className="text-4xl sm:text-6xl font-extrabold font-orbitron tracking-tight text-white mb-1">
                <span className="bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent">
                  {PORTFOLIO_DATA.personal.name}
                </span>
              </h1>
              <p className="text-xl sm:text-2xl font-orbitron font-bold text-cyber-cyan tracking-wider">
                M.Sc. IT Student
              </p>
            </div>

            {/* Typing Animated Role */}
            <div className="h-10 text-lg sm:text-xl font-orbitron font-semibold text-slate-200 flex items-center justify-center lg:justify-start gap-1">
              <span>And I'm a </span>
              <span className="text-cyber-cyan text-glow-cyan underline decoration-cyber-cyan/40">
                {displayText}
              </span>
              <span className="animate-pulse text-cyber-cyan">|</span>
            </div>

            {/* Bio Summary */}
            <p className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed">
              {PORTFOLIO_DATA.personal.bio}
            </p>

            {/* Social Icons */}
            <div className="flex items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href={PORTFOLIO_DATA.personal.github}
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/80 text-slate-300 hover:text-cyber-cyan hover:border-cyber-cyan hover:shadow-lg hover:shadow-cyber-cyan/20 transition-all hover:-translate-y-1"
                title="GitHub Profile"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={PORTFOLIO_DATA.personal.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/80 text-slate-300 hover:text-cyber-cyan hover:border-cyber-cyan hover:shadow-lg hover:shadow-cyber-cyan/20 transition-all hover:-translate-y-1"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/80 text-slate-300 hover:text-cyber-cyan hover:border-cyber-cyan hover:shadow-lg hover:shadow-cyber-cyan/20 transition-all hover:-translate-y-1"
                title="Send Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href={`tel:${PORTFOLIO_DATA.personal.phone}`}
                className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/80 text-slate-300 hover:text-cyber-cyan hover:border-cyber-cyan hover:shadow-lg hover:shadow-cyber-cyan/20 transition-all hover:-translate-y-1"
                title="Call Phone"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
              <a
                href="#contact"
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-cyber-cyan text-slate-950 font-orbitron font-bold text-sm tracking-wider shadow-lg shadow-cyber-cyan/30 hover:bg-cyan-300 hover:shadow-cyber-cyan/60 hover:scale-105 transition-all"
              >
                <span>Hire Me / Contact</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl glass-panel text-white font-orbitron font-bold text-sm tracking-wider border border-slate-700 hover:border-cyber-cyan hover:text-cyber-cyan hover:scale-105 transition-all"
              >
                <Download className="w-4 h-4 text-cyber-cyan" />
                <span>View Original Resume</span>
              </button>
            </div>

            {/* HUD Metrics Stats Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-800/80">
              {PORTFOLIO_DATA.personal.stats.map((stat, idx) => (
                <div key={idx} className="glass-card p-3 rounded-xl border border-slate-800/60 text-center">
                  <p className="text-xl font-extrabold font-orbitron text-cyber-cyan">{stat.value}</p>
                  <p className="text-xs text-slate-400 font-mono mt-0.5">{stat.label}</p>
                </div>
              ))}
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};
