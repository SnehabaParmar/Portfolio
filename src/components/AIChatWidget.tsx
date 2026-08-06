import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, X, Send, Sparkles, User, Terminal, MessageSquare } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface Message {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  timestamp: string;
}

export const AIChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      sender: 'bot',
      text: `Hello! I am Snehaba's AI Assistant 🤖. How can I help you explore her Machine Learning projects, skills, education, or contact details?`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const suggestedPrompts = [
    "Tell me about Snehaba",
    "What projects has she built?",
    "What are her ML skills?",
    "How can I contact her?"
  ];

  const handleSend = (userText: string) => {
    if (!userText.trim()) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: userText,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    // Find AI Response from portfolioData chatbotQA
    setTimeout(() => {
      const lower = userText.toLowerCase();
      let matchedQA = PORTFOLIO_DATA.chatbotQA.find((item) =>
        item.keywords.some((kw) => lower.includes(kw))
      );

      let botResponse = matchedQA
        ? matchedQA.response
        : `Thank you for your question! Snehaba is an M.Sc. IT student specializing in Machine Learning, OpenCV, and Full-Stack Web Development. You can reach out directly via email at ${PORTFOLIO_DATA.personal.email} or explore her projects section!`;

      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'bot',
        text: botResponse,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 700);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Trigger Button */}
      {!isOpen && (
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          onClick={() => setIsOpen(true)}
          className="relative group p-4 rounded-full bg-gradient-to-tr from-cyber-cyan via-cyber-blue to-cyber-purple text-slate-950 font-bold shadow-2xl shadow-cyber-cyan/50 hover:scale-110 active:scale-95 transition-all"
        >
          <div className="absolute -inset-1 rounded-full bg-cyber-cyan blur-md opacity-60 group-hover:opacity-100 animate-pulse" />
          <Bot className="w-7 h-7 relative z-10 text-slate-950" />
          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-emerald-400 border-2 border-slate-900 rounded-full animate-ping" />
        </motion.button>
      )}

      {/* Floating Chat Box */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="glass-card w-80 sm:w-96 rounded-3xl border border-cyber-cyan/40 shadow-2xl overflow-hidden flex flex-col h-[520px] relative"
          >
            {/* Header */}
            <div className="p-4 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-cyber-cyan/20 border border-cyber-cyan/40 flex items-center justify-center text-cyber-cyan">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold font-orbitron text-white flex items-center gap-1.5">
                    <span>Jarvis AI Assistant</span>
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  </h3>
                  <p className="text-[10px] font-mono text-slate-400">Online • Powered by Portfolio KB</p>
                </div>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Messages Body */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3 font-sans text-xs">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex gap-2.5 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {msg.sender === 'bot' && (
                    <div className="w-6 h-6 rounded-lg bg-cyber-cyan/20 border border-cyber-cyan/40 flex items-center justify-center text-cyber-cyan flex-shrink-0 mt-0.5">
                      <Bot className="w-3.5 h-3.5" />
                    </div>
                  )}

                  <div
                    className={`max-w-[78%] p-3 rounded-2xl ${
                      msg.sender === 'user'
                        ? 'bg-cyber-cyan text-slate-950 font-medium rounded-tr-none'
                        : 'bg-slate-900/90 border border-slate-800 text-slate-200 rounded-tl-none leading-relaxed'
                    }`}
                  >
                    <p>{msg.text}</p>
                    <span
                      className={`block text-[9px] mt-1 font-mono ${
                        msg.sender === 'user' ? 'text-slate-800 text-right' : 'text-slate-500'
                      }`}
                    >
                      {msg.timestamp}
                    </span>
                  </div>

                  {msg.sender === 'user' && (
                    <div className="w-6 h-6 rounded-lg bg-cyber-purple/20 border border-cyber-purple/40 flex items-center justify-center text-cyber-purple flex-shrink-0 mt-0.5">
                      <User className="w-3.5 h-3.5" />
                    </div>
                  )}
                </div>
              ))}

              {isTyping && (
                <div className="flex gap-2 items-center text-slate-400 text-[11px] font-mono">
                  <Bot className="w-4 h-4 text-cyber-cyan animate-spin" />
                  <span>Processing neural response...</span>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Suggested Prompts */}
            <div className="p-2 border-t border-slate-800/80 bg-slate-950/60 overflow-x-auto flex gap-1.5 whitespace-nowrap">
              {suggestedPrompts.map((prompt) => (
                <button
                  key={prompt}
                  onClick={() => handleSend(prompt)}
                  className="px-2.5 py-1 rounded-full bg-slate-800/80 hover:bg-cyber-cyan/20 border border-slate-700 hover:border-cyber-cyan text-[10px] text-slate-300 hover:text-cyber-cyan transition-colors"
                >
                  {prompt}
                </button>
              ))}
            </div>

            {/* Input Form */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend(input);
              }}
              className="p-3 bg-slate-900 border-t border-slate-800 flex gap-2"
            >
              <input
                type="text"
                placeholder="Ask about Snehaba's work..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyber-cyan"
              />
              <button
                type="submit"
                className="p-2 rounded-xl bg-cyber-cyan text-slate-950 font-bold hover:bg-cyan-300 transition-colors"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>

          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
