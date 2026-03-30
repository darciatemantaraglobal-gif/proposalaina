import React from 'react';
import { GitMerge, Mail, Bot, Send, User } from 'lucide-react';

const waLink = "https://wa.me/6281311506025?text=Halo%20Daru,%20saya%20ingin%20berkontribusi%20untuk%20AINA.";

const ChatDemo = () => (
  <div className="w-full max-w-[280px] mx-auto bg-[#0f0f18]/90 backdrop-blur-xl border border-purple-500/25 rounded-[28px] overflow-hidden shadow-2xl shadow-purple-900/30">
    <div className="px-4 pt-6 pb-3 bg-[#13121f]/80 border-b border-purple-500/15 flex items-center gap-3">
      <div className="w-7 h-7 rounded-full bg-gradient-purple flex items-center justify-center shadow-md shadow-purple-500/30">
        <Bot size={13} className="text-white" />
      </div>
      <div>
        <p className="text-white font-bold text-xs font-display">AINA AI</p>
        <p className="text-emerald-400 text-[9px] font-medium">● Online</p>
      </div>
    </div>

    <div className="p-3 space-y-3 bg-[#050509] min-h-[200px]">
      <div className="flex gap-2 items-start">
        <div className="w-5 h-5 rounded-full bg-gradient-purple flex items-center justify-center flex-shrink-0 shadow-sm shadow-purple-500/30">
          <Bot size={10} className="text-white" />
        </div>
        <div className="bg-[#0f0f18] border border-purple-500/15 p-2 rounded-xl rounded-tl-none max-w-[85%]">
          <p className="text-[10px] text-foreground/80 leading-relaxed">AINA sudah aktif! Ada yang bisa saya bantu seputar kehidupan Masisir? 🚀</p>
        </div>
      </div>

      <div className="flex gap-2 items-start justify-end">
        <div className="bg-gradient-purple p-2 rounded-xl rounded-tr-none max-w-[85%] shadow-sm shadow-purple-500/20">
          <p className="text-[10px] text-white leading-relaxed">Bagaimana cara saya berkontribusi?</p>
        </div>
        <div className="w-5 h-5 rounded-full bg-[#1a1a28] border border-purple-500/20 flex items-center justify-center flex-shrink-0">
          <User size={10} className="text-muted-foreground" />
        </div>
      </div>

      <div className="flex gap-2 items-start">
        <div className="w-5 h-5 rounded-full bg-gradient-purple flex items-center justify-center flex-shrink-0 shadow-sm shadow-purple-500/30">
          <Bot size={10} className="text-white" />
        </div>
        <div className="bg-[#0f0f18] border border-purple-500/15 p-2 rounded-xl rounded-tl-none max-w-[85%]">
          <p className="text-[10px] text-foreground/80 leading-relaxed mb-1.5">Isi knowledge base, moderasi diskusi, atau cukup pakai AINA sehari-hari!</p>
          <span className="text-[9px] px-1.5 py-0.5 bg-cyan-500/10 text-cyan-400 rounded border border-cyan-500/20">Open Collaboration ✅</span>
        </div>
      </div>
    </div>

    <div className="p-2.5 bg-[#0f0f18] border-t border-purple-500/15">
      <div className="flex items-center gap-2 bg-[#050509] border border-purple-500/20 rounded-full px-3 py-1.5">
        <span className="text-[10px] text-muted-foreground/40 flex-1">Tulis pesan...</span>
        <div className="w-5 h-5 rounded-full bg-gradient-purple flex items-center justify-center shadow-sm">
          <Send size={8} className="text-white" />
        </div>
      </div>
    </div>
  </div>
);

const ClosingSection = () => (
  <section className="relative bg-[#050509] pt-8 md:pt-20 pb-0 overflow-hidden">
    <div className="pointer-events-none absolute inset-0 dot-grid opacity-40" />
    <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[140px]" style={{ background: 'hsl(270 60% 55% / 0.1)' }} />

    <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-6">
      <div className="flex flex-col lg:flex-row gap-8 md:gap-14 items-center mb-12 md:mb-20">
        {/* Text */}
        <div className="flex-1 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 rounded-full border border-purple-400/30 bg-purple-500/5 px-3 py-1 mb-3 backdrop-blur-sm">
            <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-purple-300">Bergabung</span>
          </div>
          <h2 className="text-2xl md:text-4xl font-bold text-white leading-tight mb-3 font-display">
            AINA dibangun serius —{' '}
            <span className="text-gradient-purple-cyan">dan butuh kamu di dalamnya.</span>
          </h2>
          <p className="text-xs md:text-sm text-muted-foreground leading-relaxed mb-6 max-w-md mx-auto lg:mx-0">
            Ini sistem yang sudah berjalan dan terus berkembang. Kami membuka ruang kolaborasi untuk siapa pun yang ingin ikut membangun ekosistem digital Masisir.
          </p>

          <div className="flex flex-col sm:flex-row items-center lg:items-start gap-3">
            <a href={waLink} target="_blank" rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-purple text-white rounded-full font-bold text-sm hover:opacity-90 transition-all glow-purple shadow-lg shadow-purple-500/25">
              <GitMerge size={14} />
              Jadi Kontributor
            </a>
            <a href={waLink} target="_blank" rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-purple-500/25 bg-purple-500/5 text-white font-semibold text-sm hover:bg-purple-500/10 hover:border-purple-500/40 transition-all backdrop-blur-sm">
              <Mail size={14} />
              Hubungi Tim AINA
            </a>
          </div>
        </div>

        {/* Chat demo */}
        <div className="w-full lg:w-auto lg:flex-shrink-0 relative">
          <div className="absolute -inset-10 rounded-full blur-[60px]" style={{ background: 'hsl(270 60% 55% / 0.12)' }} />
          <div className="relative">
            <ChatDemo />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ClosingSection;
