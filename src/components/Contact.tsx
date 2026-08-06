import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageSquare, AlertCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setErrorMsg('');

    try {
      // Direct FormSubmit background API call to snp087210@gmail.com
      const response = await fetch(`https://formsubmit.co/ajax/${PORTFOLIO_DATA.personal.email}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          _subject: formData.subject || `New Portfolio Message from ${formData.name}`,
          message: formData.message,
          _captcha: "false",
          _template: "table"
        })
      });

      const data = await response.json();
      setIsSubmitting(false);

      if (response.ok || data.success === "true" || data.success === true) {
        setSubmitted(true);
        try {
          confetti({ particleCount: 80, spread: 70, origin: { y: 0.6 } });
        } catch (err) {}
      } else {
        setErrorMsg('Failed to deliver message. Please try again.');
      }
    } catch (error) {
      setIsSubmitting(false);
      setErrorMsg('Transmission error. Please check your internet connection.');
    }
  };

  return (
    <section id="contact" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyber-cyan/10 border border-cyber-cyan/30 text-cyber-cyan text-xs font-mono">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Direct Transmission</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-orbitron text-white">
            Get In <span className="text-cyber-cyan">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyber-cyan to-cyber-purple mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Contact Details Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-card p-8 rounded-3xl border border-slate-800 space-y-6">
              <h3 className="text-2xl font-bold font-orbitron text-white">Contact Information</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Whether you have an internship opportunity, project inquiry, or technical collaboration proposal, feel free to reach out directly!
              </p>

              <div className="space-y-4">
                <a
                  href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-cyber-cyan/50 hover:bg-slate-800/80 transition-all group"
                >
                  <div className="p-3 rounded-xl bg-cyber-cyan/10 border border-cyber-cyan/30 text-cyber-cyan group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[11px] font-mono text-slate-400">Email Address</p>
                    <p className="text-sm font-bold font-orbitron text-white group-hover:text-cyber-cyan transition-colors">
                      {PORTFOLIO_DATA.personal.email}
                    </p>
                  </div>
                </a>

                <a
                  href={`tel:${PORTFOLIO_DATA.personal.phone}`}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-cyber-cyan/50 hover:bg-slate-800/80 transition-all group"
                >
                  <div className="p-3 rounded-xl bg-cyber-purple/10 border border-cyber-purple/30 text-cyber-purple group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[11px] font-mono text-slate-400">Phone Number</p>
                    <p className="text-sm font-bold font-orbitron text-white group-hover:text-cyber-cyan transition-colors">
                      {PORTFOLIO_DATA.personal.phone}
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
                  <div className="p-3 rounded-xl bg-emerald-400/10 border border-emerald-400/30 text-emerald-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[11px] font-mono text-slate-400">Location</p>
                    <p className="text-sm font-bold font-orbitron text-white">
                      {PORTFOLIO_DATA.personal.location}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Cyberpunk Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-card p-8 rounded-3xl border border-slate-800 relative">
              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <CheckCircle2 className="w-16 h-16 text-cyber-cyan mx-auto animate-bounce" />
                  <h3 className="text-2xl font-bold font-orbitron text-white">Message Delivered Directly!</h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto">
                    Thank you, {formData.name}! Your message has been sent directly to <strong className="text-cyber-cyan">{PORTFOLIO_DATA.personal.email}</strong>. Snehaba will reply to your email shortly.
                  </p>
                  
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="px-6 py-2.5 rounded-xl bg-cyber-cyan text-slate-950 font-orbitron text-xs font-bold hover:bg-cyan-300 transition-colors mt-4"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold font-orbitron text-white">Send Direct Message</h3>
                    <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" /> Direct Background Delivery
                    </span>
                  </div>

                  {errorMsg && (
                    <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs font-mono flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 flex-shrink-0 text-rose-400" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-300">Your Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyber-cyan transition-all"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-300">Your Email Address *</label>
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyber-cyan transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300">Subject</label>
                    <input
                      type="text"
                      placeholder="Internship / Technical Collaboration Inquiry"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyber-cyan transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300">Message *</label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Hello Snehaba, I reviewed your Mood Room & Smart Support Ticket projects..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyber-cyan transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-cyber-cyan via-cyber-blue to-cyber-purple text-slate-950 font-orbitron font-extrabold text-xs tracking-wider shadow-lg shadow-cyber-cyan/30 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-3.5 h-3.5 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                        Transmitting to snp087210@gmail.com...
                      </span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
