import React from 'react';
import { Sparkles, GitMerge, Mail, Bot, Send, User, ArrowRight } from 'lucide-react';

const waLink = "https://wa.me/6281311506025?text=Halo%20Daru,%20saya%20ingin%20berkontribusi%20untuk%20AINA.";

const ChatDemo = () => (
  <div className="w-full max-w-[300px] mx-auto bg-[#0c0c14] border border-purple-500/20 rounded-[32px] overflow-hidden shadow-2xl shadow-purple-900/30">
    <div className="px-4 pt-8 pb-3 bg-[#111118] border-b border-purple-500/15 flex items-center gap-3">
      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center">
        <Bot size={15} className="text-white" />
      </div>
      <div>
        <p className="text-white font-bold text-xs">AINA AI</p>
        <p className="text-emerald-400 text-[9px] font-medium">● Online</p>
      </div>
    </div>

    <div className="p-4 space-y-3 bg-[#050509] min-h-[220px]">
      <div className="flex gap-2 items-start">
        <div className="w-6 h-6 rounded-full bg-purple-600/30 flex items-center justify-center flex-shrink-0">
          <Bot size={11} className="text-purple-400" />
        </div>
        <div className="bg-[#141420] border border-purple-500/15 p-2.5 rounded-xl rounded-tl-none max-w-[85%]">
          <p className="text-[11px] text-slate-300 leading-relaxed">AINA sudah aktif! Ada yang bisa saya bantu seputar kehidupan Masisir? 🚀</p>
        </div>
      </div>

      <div className="flex gap-2 items-start justify-end">
        <div className="bg-gradient-to-r from-purple-600 to-purple-500 p-2.5 rounded-xl rounded-tr-none max-w-[85%]">
          <p className="text-[11px] text-white leading-relaxed">Bagaimana cara saya berkontribusi?</p>
        </div>
        <div className="w-6 h-6 rounded-full bg-slate-700 flex items-center justify-center flex-shrink-0">
          <User size={11} className="text-slate-400" />
        </div>
      </div>

      <div className="flex gap-2 items-start">
        <div className="w-6 h-6 rounded-full bg-purple-600/30 flex items-center justify-center flex-shrink-0">
          <Bot size={11} className="text-purple-400" />
        </div>
        <div className="bg-[#141420] border border-purple-500/15 p-2.5 rounded-xl rounded-tl-none max-w-[85%]">
          <p className="text-[11px] text-slate-300 leading-relaxed mb-1.5">Banyak cara — isi knowledge base, moderasi diskusi, atau cukup pakai AINA sehari-hari!</p>
          <span className="text-[9px] px-2 py-0.5 bg-cyan-500/10 text-cyan-400 rounded border border-cyan-500/20">Open Collaboration ✅</span>
        </div>
      </div>
    </div>

    <div className="p-3 bg-[#111118] border-t border-purple-500/15">
      <div className="flex items-center gap-2 bg-[#0a0a0f] border border-purple-500/20 rounded-full px-3 py-2">
        <span className="text-[10px] text-slate-600 flex-1">Tulis pesan...</span>
        <div className="w-5 h-5 rounded-full bg-purple-600 flex items-center justify-center">
          <Send size={9} className="text-white" />
        </div>
      </div>
    </div>
  </div>
);

const ClosingSection = () => (
  <section className="bg-[#050509] pt-14 md:pt-20 pb-0 overflow-hidden">
    <div className="max-w-5xl mx-auto px-4 md:px-6">
      <div className="flex flex-col lg:flex-row gap-10 md:gap-14 items-center mb-16 md:mb-20">
        {/* Text */}
        <div className="flex-1 text-center lg:text-left">
          <span className="text-[10px] font-bold uppercase tracking-widest text-purple-400">Bergabung</span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
            AINA dibangun serius —{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-white to-cyan-400">
              dan butuh kamu di dalamnya.
            </span>
          </h2>
          <p className="text-sm text-slate-400 leading-relaxed mb-8 max-w-md mx-auto lg:mx-0">
            Ini sistem yang sudah berjalan dan terus berkembang. Kami membuka ruang kolaborasi untuk siapa pun yang ingin ikut membangun ekosistem digital Masisir.
          </p>

          <div className="flex flex-col sm:flex-row items-center lg:items-start gap-3">
            <a href={waLink} target="_blank" rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white text-[#050509] rounded-full font-bold text-sm hover:bg-purple-50 transition-all shadow-[0_0_20px_rgba(255,255,255,0.15)]">
              <GitMerge size={15} />
              Jadi Kontributor
            </a>
            <a href={waLink} target="_blank" rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-purple-500/25 bg-white/5 text-white font-semibold text-sm hover:bg-white/8 hover:border-purple-500/40 transition-all">
              <Mail size={15} />
              Hubungi Tim AINA
            </a>
          </div>
        </div>

        {/* Chat demo visual */}
        <div className="w-full lg:w-auto lg:flex-shrink-0 relative">
          <div className="absolute -inset-8 bg-purple-600/10 rounded-full blur-[60px] pointer-events-none" />
          <div className="relative">
            <ChatDemo />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ClosingSection;
