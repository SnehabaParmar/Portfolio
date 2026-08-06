import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, CheckCircle2, ExternalLink, ShieldCheck, X, Eye } from 'lucide-react';
import { PORTFOLIO_DATA, Certificate } from '../data/portfolioData';

export const Certificates: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  // Lock body scroll when modal is active
  useEffect(() => {
    if (selectedCert) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedCert]);

  return (
    <section id="certificates" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyber-cyan/10 border border-cyber-cyan/30 text-cyber-cyan text-xs font-mono">
            <Award className="w-3.5 h-3.5" />
            <span>Verified Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-orbitron text-white">
            Certifications & <span className="text-cyber-cyan">Achievements</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyber-cyan to-cyber-purple mx-auto rounded-full" />
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {PORTFOLIO_DATA.certificates.map((cert, idx) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              whileHover={{ y: -6, scale: 1.02 }}
              onClick={() => setSelectedCert(cert)}
              className="glass-card rounded-3xl border border-slate-800 hover:border-cyber-cyan/50 transition-all cursor-pointer group flex flex-col justify-between overflow-hidden shadow-xl"
            >
              {/* Certificate Image Thumbnail */}
              <div className="relative h-48 overflow-hidden bg-slate-950 flex items-center justify-center p-2">
                <img
                  src={cert.imageUrl}
                  alt={cert.title}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 rounded-xl"
                />
                <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                  <span className="px-4 py-2 rounded-xl bg-cyber-cyan text-slate-950 font-orbitron font-bold text-xs flex items-center gap-2 shadow-lg">
                    <Eye className="w-4 h-4" /> View Authentic Document
                  </span>
                </div>
                
                {/* Date Badge */}
                <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-cyber-bg/90 border border-cyber-cyan/40 text-cyber-cyan text-[10px] font-mono font-bold backdrop-blur-md">
                  {cert.date}
                </span>
              </div>

              {/* Certificate Details */}
              <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold font-orbitron text-white group-hover:text-cyber-cyan transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-xs text-cyber-purple font-mono font-semibold mt-1">
                    Issuer: {cert.issuer}
                  </p>
                  {cert.certNo && (
                    <p className="text-[10px] text-slate-400 font-mono mt-0.5">
                      No: {cert.certNo}
                    </p>
                  )}
                </div>

                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs">
                  <span className="flex items-center gap-1.5 text-emerald-400 font-mono font-semibold">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    Verified Official
                  </span>
                  <span className="text-cyber-cyan font-orbitron font-bold group-hover:underline flex items-center gap-1">
                    Preview Certificate →
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Fullscreen Certificate Image Modal with Lock Scroll & Top Z-Index */}
        <AnimatePresence>
          {selectedCert && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-xl overflow-y-auto">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="glass-card max-w-4xl w-full rounded-3xl border border-cyber-cyan/40 p-6 md:p-8 space-y-6 relative shadow-2xl my-auto z-[101]"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedCert(null)}
                  className="absolute top-4 right-4 z-10 p-2.5 rounded-xl bg-slate-800/80 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Modal Header */}
                <div className="space-y-1 pr-12">
                  <span className="px-3 py-1 rounded-full bg-emerald-400/10 text-emerald-400 text-xs font-mono font-bold inline-flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4" /> Official Authentic Certificate
                  </span>
                  <h3 className="text-2xl font-bold font-orbitron text-white">{selectedCert.title}</h3>
                  <p className="text-xs text-cyber-purple font-mono font-semibold">
                    Issued by {selectedCert.issuer} ({selectedCert.date}) {selectedCert.certNo ? `• Ref: ${selectedCert.certNo}` : ''}
                  </p>
                </div>

                {/* Rendered Authentic Certificate Document Image */}
                <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-950 p-2 shadow-inner">
                  <img
                    src={selectedCert.imageUrl}
                    alt={selectedCert.title}
                    className="w-full max-h-[65vh] object-contain rounded-xl mx-auto shadow-2xl"
                  />
                </div>

                {/* Modal Footer Controls */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-800">
                  {selectedCert.verifyUrl ? (
                    <a
                      href={selectedCert.verifyUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 text-cyber-cyan font-orbitron text-xs font-bold hover:bg-slate-700 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Verify Certificate Link</span>
                    </a>
                  ) : (
                    <span className="text-xs text-slate-400 font-mono">Issued to Snehaba Parmar</span>
                  )}

                  <button
                    onClick={() => setSelectedCert(null)}
                    className="px-6 py-2.5 rounded-xl bg-cyber-cyan text-slate-950 font-orbitron text-xs font-bold hover:bg-cyan-300 transition-colors"
                  >
                    Close Preview
                  </button>
                </div>

              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};
