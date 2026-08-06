import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Sparkles, X, Check, Activity, Code2, Layers } from 'lucide-react';
import { PORTFOLIO_DATA, Project } from '../data/portfolioData';

export const Projects: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  // Lock body scroll when modal is active
  useEffect(() => {
    if (activeProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [activeProject]);

  const categories = ['All', 'GenAI & LLM', 'Machine Learning', 'NLP / AI', 'Web Development'];

  const filteredProjects = PORTFOLIO_DATA.projects.filter((p) => {
    if (selectedFilter === 'All') return true;
    return p.category === selectedFilter;
  });

  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyber-purple/10 border border-cyber-purple/30 text-cyber-purple text-xs font-mono">
            <Code2 className="w-3.5 h-3.5" />
            <span>Interactive Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-orbitron text-white">
            Featured <span className="text-cyber-cyan">Projects & AI Apps</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyber-cyan to-cyber-purple mx-auto rounded-full" />
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedFilter(cat)}
              className={`px-5 py-2.5 rounded-xl text-xs font-orbitron font-bold transition-all ${
                selectedFilter === cat
                  ? 'bg-cyber-cyan text-slate-950 shadow-lg shadow-cyber-cyan/30 scale-105'
                  : 'glass-panel text-slate-300 hover:border-cyber-cyan/50 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="glass-card rounded-3xl border border-slate-800 overflow-hidden hover:border-cyber-cyan/50 transition-all group flex flex-col justify-between shadow-xl"
            >
              {/* Image Preview Banner */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                
                {/* Category Badge */}
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-cyber-bg/90 border border-cyber-cyan/40 text-cyber-cyan text-[11px] font-mono font-bold backdrop-blur-md">
                  {project.category}
                </span>

                {/* Metrics Pill */}
                {project.metrics && project.metrics.length > 0 && (
                  <span className="absolute bottom-4 right-4 px-3 py-1 rounded-full bg-cyber-purple/90 text-white text-[11px] font-orbitron font-bold flex items-center gap-1.5 shadow-lg">
                    <Activity className="w-3.5 h-3.5 text-cyber-cyan" />
                    {project.metrics[0].label}: {project.metrics[0].value}
                  </span>
                )}
              </div>

              {/* Card Content */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold font-orbitron text-white group-hover:text-cyber-cyan transition-colors mb-2">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-300 line-clamp-3 leading-relaxed mb-4">
                    {project.description}
                  </p>
                  
                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span key={tech} className="px-2.5 py-0.5 rounded-md bg-slate-900/90 text-[10px] font-mono text-slate-300 border border-slate-700/60">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-0.5 rounded-md bg-cyber-cyan/10 text-[10px] font-mono text-cyber-cyan">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Actions */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-800/80">
                  <button
                    onClick={() => setActiveProject(project)}
                    className="text-xs font-orbitron font-bold text-cyber-cyan hover:underline flex items-center gap-1"
                  >
                    <span>View System Details</span>
                    <Sparkles className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-cyber-cyan hover:bg-slate-700 transition-colors"
                    title="Source Code"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal Deep-Dive */}
        <AnimatePresence>
          {activeProject && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-xl overflow-y-auto">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="glass-card max-w-3xl w-full rounded-3xl border border-cyber-cyan/40 p-6 md:p-8 space-y-6 max-h-[90vh] overflow-y-auto relative shadow-2xl z-[101]"
              >
                {/* Close Button */}
                <button
                  onClick={() => setActiveProject(null)}
                  className="absolute top-6 right-6 p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Modal Header */}
                <div className="space-y-2 pr-8">
                  <span className="px-3 py-1 rounded-full bg-cyber-cyan/10 text-cyber-cyan text-xs font-mono font-bold">
                    {activeProject.category}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold font-orbitron text-white">
                    {activeProject.title}
                  </h3>
                  <p className="text-sm text-cyber-purple font-mono font-semibold">{activeProject.subtitle}</p>
                </div>

                {/* Metrics Banner */}
                {activeProject.metrics && (
                  <div className="grid grid-cols-2 gap-4 p-4 rounded-2xl bg-slate-900/90 border border-slate-800">
                    {activeProject.metrics.map((m, i) => (
                      <div key={i} className="text-center">
                        <p className="text-xs text-slate-400 font-mono">{m.label}</p>
                        <p className="text-lg font-bold font-orbitron text-cyber-cyan">{m.value}</p>
                      </div>
                    ))}
                  </div>
                )}

                {/* Detailed Description */}
                <div className="space-y-2">
                  <h4 className="text-sm font-bold font-orbitron text-white flex items-center gap-2">
                    <Layers className="w-4 h-4 text-cyber-cyan" />
                    System Overview & Technical Description
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {activeProject.longDescription}
                  </p>
                </div>

                {/* Key Features List */}
                <div className="space-y-3">
                  <h4 className="text-sm font-bold font-orbitron text-white">Key Innovation Features</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {activeProject.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                        <Check className="w-4 h-4 text-cyber-cyan flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies Stack */}
                <div className="space-y-2">
                  <h4 className="text-sm font-bold font-orbitron text-white">Technologies & Tools</h4>
                  <div className="flex flex-wrap gap-2">
                    {activeProject.technologies.map((tech) => (
                      <span key={tech} className="px-3 py-1 rounded-xl bg-cyber-cyan/10 border border-cyber-cyan/30 text-xs font-mono text-cyber-cyan font-bold">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Buttons */}
                <div className="flex items-center justify-end gap-4 pt-4 border-t border-slate-800">
                  <a
                    href={activeProject.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-800 text-slate-200 font-orbitron text-xs font-bold hover:bg-slate-700 hover:text-white transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>View GitHub Repository</span>
                  </a>
                </div>

              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};
