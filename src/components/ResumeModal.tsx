import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { X, Download, FileText, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  // Lock body scroll when modal is active
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-xl overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        className="glass-card max-w-4xl w-full rounded-3xl border border-cyber-cyan/40 p-6 md:p-8 space-y-6 relative my-auto z-[101] shadow-2xl"
      >
        {/* Modal Controls Header */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-cyber-cyan/10 border border-cyber-cyan/30 text-cyber-cyan">
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-bold font-orbitron text-white flex items-center gap-2">
                <span>Official Curriculum Vitae</span>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-400/10 text-emerald-400 text-xs font-mono font-bold">
                  Original Document
                </span>
              </h2>
              <p className="text-xs text-slate-400 font-mono">Snehaba Parmar • M.Sc. IT Student</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={PORTFOLIO_DATA.personal.resumePdf}
              download="Snehaba_Parmar_Resume.pdf"
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-cyber-cyan to-cyber-purple text-slate-950 font-orbitron text-xs font-extrabold shadow-lg hover:scale-105 transition-all"
            >
              <Download className="w-4 h-4" />
              <span>Download PDF File</span>
            </a>

            <button
              onClick={onClose}
              className="p-2.5 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* High-Resolution Rendered Original Resume Document Image */}
        <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-950 p-2 shadow-2xl max-h-[75vh] overflow-y-auto">
          <img
            src="/resume_original.png"
            alt="Snehaba Parmar Original Resume"
            className="w-full object-contain rounded-xl mx-auto shadow-2xl"
          />
        </div>

        {/* Modal Action Footer */}
        <div className="flex items-center justify-between border-t border-slate-800 pt-4 text-xs">
          <span className="text-slate-400 font-mono flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Authentic Resume File (Snehaba Parmar)
          </span>

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl bg-slate-800 text-slate-300 font-orbitron text-xs font-bold hover:bg-slate-700 hover:text-white transition-colors"
            >
              Close Resume
            </button>
            <a
              href={PORTFOLIO_DATA.personal.resumePdf}
              download="Snehaba_Parmar_Resume.pdf"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyber-cyan text-slate-950 font-orbitron text-xs font-bold hover:bg-cyan-300 transition-all"
            >
              <Download className="w-4 h-4" />
              <span>Download PDF</span>
            </a>
          </div>
        </div>

      </motion.div>
    </div>
  );
};
