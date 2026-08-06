import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, Eye, Camera, MessageSquare, Sparkles, Terminal, Cpu, Activity,
  FileCode, Code2, Code, Binary, Coffee, Hash, Atom, Zap, Server,
  Palette, Layout, Layers, Network, ShieldCheck, Database, Table, Monitor,
  BookOpen, GitBranch, BarChart3, Search, Wrench, Globe
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Icon mapping dictionary
  const skillIconsMap: Record<string, any> = {
    Brain: Brain,
    Eye: Eye,
    Camera: Camera,
    MessageSquare: MessageSquare,
    Sparkles: Sparkles,
    Terminal: Terminal,
    Cpu: Cpu,
    Activity: Activity,
    FileCode: FileCode,
    Code2: Code2,
    Code: Code,
    Binary: Binary,
    Coffee: Coffee,
    Hash: Hash,
    Atom: Atom,
    Zap: Zap,
    Server: Server,
    Palette: Palette,
    Layout: Layout,
    Layers: Layers,
    Network: Network,
    ShieldCheck: ShieldCheck,
    Database: Database,
    Table: Table,
    Monitor: Monitor,
    BookOpen: BookOpen,
    GitBranch: GitBranch,
    BarChart3: BarChart3
  };

  const categoryHeaderIcons: Record<string, any> = {
    'Machine Learning & AI': Brain,
    'Programming Languages': Code,
    'Web & Frameworks': Globe,
    'Databases & Tools': Wrench,
  };

  const filteredCategories = PORTFOLIO_DATA.skills.map((cat) => ({
    ...cat,
    skills: cat.skills.filter((s) =>
      s.name.toLowerCase().includes(searchQuery.toLowerCase())
    ),
  })).filter((cat) => {
    if (selectedCategory !== 'All' && cat.title !== selectedCategory) return false;
    return cat.skills.length > 0;
  });

  return (
    <section id="skills" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyber-cyan/10 border border-cyber-cyan/30 text-cyber-cyan text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Technical Ecosystem</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-orbitron text-white">
            Skills & <span className="text-cyber-cyan">Technology Stack</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyber-cyan to-cyber-purple mx-auto rounded-full" />
        </div>

        {/* Filter Controls & Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 w-full md:w-auto">
            <button
              onClick={() => setSelectedCategory('All')}
              className={`px-4 py-2 rounded-xl text-xs font-orbitron font-bold transition-all ${
                selectedCategory === 'All'
                  ? 'bg-cyber-cyan text-slate-950 shadow-lg shadow-cyber-cyan/25 scale-105'
                  : 'glass-panel text-slate-300 hover:text-white hover:border-cyber-cyan/50'
              }`}
            >
              All Skills
            </button>
            {PORTFOLIO_DATA.skills.map((cat) => (
              <button
                key={cat.title}
                onClick={() => setSelectedCategory(cat.title)}
                className={`px-4 py-2 rounded-xl text-xs font-orbitron font-bold transition-all ${
                  selectedCategory === cat.title
                    ? 'bg-cyber-cyan text-slate-950 shadow-lg shadow-cyber-cyan/25 scale-105'
                    : 'glass-panel text-slate-300 hover:text-white hover:border-cyber-cyan/50'
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search tech (e.g. FastAPI, OpenCV)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-900/80 border border-slate-700/80 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-cyber-cyan transition-all"
            />
          </div>
        </div>

        {/* Categories & Interactive Icon Skill Badges */}
        <div className="space-y-12">
          {filteredCategories.map((cat, catIdx) => {
            const HeaderIcon = categoryHeaderIcons[cat.title] || Code;
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: catIdx * 0.1 }}
                className="glass-card p-8 rounded-3xl border border-slate-800 space-y-6 hover:border-cyber-cyan/40 transition-all"
              >
                <div className="flex items-center gap-3 border-b border-slate-800/80 pb-4">
                  <div className="p-3 rounded-2xl bg-cyber-cyan/10 border border-cyber-cyan/30 text-cyber-cyan">
                    <HeaderIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-orbitron text-white">{cat.title}</h3>
                    <p className="text-xs text-slate-400 font-mono">{cat.skills.length} Interactive Icons</p>
                  </div>
                </div>

                {/* Grid of Interactive Skill Cards with Icons (No Percentage Bars) */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                  {cat.skills.map((skill, skillIdx) => {
                    const IconComp = skillIconsMap[skill.icon] || Code;
                    return (
                      <motion.div
                        key={skill.name}
                        whileHover={{ scale: 1.05, y: -4 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                        className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800/80 hover:border-cyber-cyan hover:bg-slate-800/90 transition-all group flex items-center gap-3 shadow-md hover:shadow-cyber-cyan/20 cursor-pointer"
                      >
                        <div className="p-2.5 rounded-xl bg-slate-800 group-hover:bg-cyber-cyan/20 text-cyber-cyan group-hover:text-cyan-300 transition-colors flex-shrink-0">
                          <IconComp className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                        </div>
                        <div className="min-w-0">
                          <p className="text-xs font-bold text-slate-200 group-hover:text-white truncate">
                            {skill.name}
                          </p>
                          <span className="text-[10px] font-mono text-cyber-purple group-hover:text-cyber-cyan transition-colors">
                            {skill.category}
                          </span>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
