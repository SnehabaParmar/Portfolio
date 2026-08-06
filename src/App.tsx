import React, { useState, useEffect } from 'react';
import { ParticleBackground } from './components/ParticleBackground';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Certificates } from './components/Certificates';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { AIChatWidget } from './components/AIChatWidget';

export const App: React.FC = () => {
  const [resumeOpen, setResumeOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <div className="relative min-h-screen selection:bg-cyber-cyan selection:text-black">
      {/* 3D Particle Constellation Background */}
      <ParticleBackground />

      {/* Navigation Header */}
      <Navbar onOpenResume={() => setResumeOpen(true)} />

      {/* Main Content Sections */}
      <main className="relative z-10 space-y-12">
        <Hero onOpenResume={() => setResumeOpen(true)} />
        <About />
        <Skills />
        <Projects />
        <Certificates />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Resume Modal */}
      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />

      {/* Floating Sci-Fi AI Assistant Widget */}
      <AIChatWidget />
    </div>
  );
};

export default App;
