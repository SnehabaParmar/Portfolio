import React from 'react';
import { motion } from 'framer-motion';
import { Github, Code, Flame, Star, GitBranch, Terminal, Award } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const GithubStats: React.FC = () => {
  const username = PORTFOLIO_DATA.personal.githubUsername;

  return (
    <section id="github" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyber-cyan/10 border border-cyber-cyan/30 text-cyber-cyan text-xs font-mono">
            <Github className="w-3.5 h-3.5" />
            <span>Open Source & Coding Activity</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-orbitron text-white">
            GitHub Stats & <span className="text-cyber-cyan">Developer Profiles</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyber-cyan to-cyber-purple mx-auto rounded-full" />
        </div>

        {/* Top Developer Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          {/* Card 1: GitHub Repos & Stars */}
          <div className="glass-card p-6 rounded-3xl border border-slate-800 space-y-4 hover:border-cyber-cyan/40 transition-all">
            <div className="flex items-center justify-between">
              <div className="p-3 rounded-2xl bg-cyber-cyan/10 border border-cyber-cyan/30 text-cyber-cyan">
                <Github className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono text-emerald-400 font-bold flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" /> Active Contributor
              </span>
            </div>
            <div>
              <p className="text-2xl font-extrabold font-orbitron text-white">@{username}</p>
              <p className="text-xs text-slate-400 font-mono">Official GitHub Account</p>
            </div>
            <a
              href={PORTFOLIO_DATA.personal.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-xs font-orbitron font-bold text-cyber-cyan hover:underline"
            >
              <span>Explore GitHub Repository →</span>
            </a>
          </div>

          {/* Card 2: Top Languages Breakdown */}
          <div className="glass-card p-6 rounded-3xl border border-slate-800 space-y-3 hover:border-cyber-cyan/40 transition-all">
            <div className="flex items-center gap-2">
              <Code className="w-5 h-5 text-cyber-purple" />
              <h3 className="text-sm font-bold font-orbitron text-white">Primary Language Stack</h3>
            </div>
            <div className="space-y-2">
              <div>
                <div className="flex justify-between text-xs font-mono text-slate-300">
                  <span>Python (ML & OpenCV)</span>
                  <span>45%</span>
                </div>
                <div className="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden mt-1">
                  <div className="h-full bg-cyber-cyan w-[45%]" />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs font-mono text-slate-300">
                  <span>JavaScript & Node.js</span>
                  <span>30%</span>
                </div>
                <div className="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden mt-1">
                  <div className="h-full bg-cyber-purple w-[30%]" />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs font-mono text-slate-300">
                  <span>C++ & C#</span>
                  <span>25%</span>
                </div>
                <div className="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden mt-1">
                  <div className="h-full bg-amber-400 w-[25%]" />
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: Competitive & AI Badges */}
          <div className="glass-card p-6 rounded-3xl border border-slate-800 space-y-4 hover:border-cyber-cyan/40 transition-all">
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-amber-400" />
              <h3 className="text-sm font-bold font-orbitron text-white">Coding Platforms</h3>
            </div>
            <div className="space-y-3 text-xs">
              <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between">
                <span className="font-semibold text-slate-200">Kaggle ML Competitions</span>
                <span className="font-mono text-cyber-cyan font-bold">Active Participant</span>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between">
                <span className="font-semibold text-slate-200">LeetCode Data Structures</span>
                <span className="font-mono text-cyber-purple font-bold">Problem Solver</span>
              </div>
            </div>
          </div>

        </div>

        {/* Live GitHub Stats Cards Visualizer */}
        <div className="glass-card p-6 rounded-3xl border border-slate-800 text-center space-y-6">
          <h3 className="text-xl font-bold font-orbitron text-white">Live GitHub Activity Cards</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center justify-center">
            <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 overflow-hidden">
              <img
                src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=cyberpunk&hide_border=true&bg_color=080b14&title_color=00f0ff&icon_color=7000ff&text_color=cbd5e1`}
                alt="GitHub Stats"
                className="w-full max-w-md mx-auto rounded-xl"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
            </div>

            <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 overflow-hidden">
              <img
                src={`https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=cyberpunk&hide_border=true&background=080b14&ring=00f0ff&fire=7000ff&currStreakLabel=00f0ff`}
                alt="GitHub Streak Stats"
                className="w-full max-w-md mx-auto rounded-xl"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
