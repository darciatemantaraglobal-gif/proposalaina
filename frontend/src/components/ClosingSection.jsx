import React from 'react';
import { GitMerge, Handshake, Heart, BookOpen, Bot, Send, User, ArrowRight } from 'lucide-react';

const waBase = 'https://wa.me/6281311506025?text=';

const actions = [
  {
    icon: BookOpen,
    title: 'Pelajari AINA',
    desc: 'Lihat semua fitur, arsitektur sistem, dan cara AINA bekerja.',
    cta: 'Pelajari Sekarang',
    color: 'purple',
    href: `${waBase}${encodeURIComponent('Halo, saya ingin mengetahui lebih dalam tentang AINA.')}`,
    style: 'ghost',
  },
  {
    icon: GitMerge,
    title: 'Jadi Kontributor',
    desc: 'Isi knowledge base, moderasi diskusi, atau bantu memperkuat ekosistem AINA.',
    cta: 'Mulai Berkontribusi',
    color: 'purple',
    href: `${waBase}${encodeURIComponent('Halo, saya ingin menjadi kontributor AINA.')}`,
    style: 'gradient',
    featured: true,
  },
  {
    icon: Handshake,
    title: 'Kolaborasi',
    desc: 'Untuk organisasi, lembaga, atau individu yang ingin bermitra lebih dalam.',
    cta: 'Diskusikan Kolaborasi',
    color: 'cyan',
    href: `${waBase}${encodeURIComponent('Halo, saya ingin mendiskusikan kolaborasi dengan AINA.')}`,
    style: 'ghost',
  },
  {
    icon: Heart,
    title: 'Dukung AINA',
    desc: 'Bantu AINA tumbuh dengan menggunakannya, menyebarkannya, atau berkontribusi.',
    cta: 'Dukung AINA',
    color: 'purple',
    href: `${waBase}${encodeURIComponent('Halo, saya ingin tahu cara mendukung pertumbuhan AINA.')}`,
    style: 'ghost',
  },
];

const ChatDemo = () => (
  <div className="w-full max-w-[260px] mx-auto bg-[#0f0f18]/90 backdrop-blur-xl border border-purple-500/25 rounded-[24px] overflow-hidden shadow-2xl shadow-purple-900/30">
    <div className="px-4 pt-5 pb-3 bg-[#13121f]/80 border-b border-purple-500/15 flex items-center gap-2.5">
      <div className="w-6 h-6 rounded-full bg-gradient-purple flex items-center justify-center shadow-md shadow-purple-500/30">
        <Bot size={11} className="text-white" />
      </div>
      <div>
        <p className="text-white font-bold text-[11px] font-display">AINA AI</p>
        <p className="text-emerald-400 text-[9px] font-medium">● Online</p>
      </div>
    </div>

    <div className="p-3 space-y-2.5 bg-[#050509] min-h-[180px]">
      <div className="flex gap-2 items-start">
        <div className="w-5 h-5 rounded-full bg-gradient-purple flex items-center justify-center flex-shrink-0 mt-0.5">
          <Bot size={9} className="text-white" />
        </div>
        <div className="bg-[#0f0f18] border border-purple-500/15 p-2 rounded-xl rounded-tl-none max-w-[85%]">
          <p className="text-[10px] text-foreground/80 leading-relaxed">Ahlan! AINA siap membantu seputar kehidupan Masisir di Mesir.</p>
        </div>
      </div>

      <div className="flex gap-2 items-start justify-end">
        <div className="bg-gradient-purple p-2 rounded-xl rounded-tr-none max-w-[85%]">
          <p className="text-[10px] text-white leading-relaxed">Bagaimana cara perpanjang iqamah?</p>
        </div>
        <div className="w-5 h-5 rounded-full bg-[#1a1a28] border border-purple-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
          <User size={9} className="text-muted-foreground" />
        </div>
      </div>

      <div className="flex gap-2 items-start">
        <div className="w-5 h-5 rounded-full bg-gradient-purple flex items-center justify-center flex-shrink-0 mt-0.5">
          <Bot size={9} className="text-white" />
        </div>
        <div className="bg-[#0f0f18] border border-purple-500/15 p-2 rounded-xl rounded-tl-none max-w-[85%]">
          <p className="text-[10px] text-foreground/80 leading-relaxed mb-1.5">Perpanjang iqamah bisa dilakukan di Mogamma El-Tahrir, minimal H-30 sebelum expired. Dokumen: passport, foto, & bukti studi.</p>
          <div className="flex gap-1 flex-wrap">
            <span className="text-[9px] px-1.5 py-0.5 bg-purple-500/10 text-purple-400 rounded border border-purple-500/20">Sumber: KB Masisir</span>
            <span className="text-[9px] px-1.5 py-0.5 bg-emerald-500/10 text-emerald-400 rounded border border-emerald-500/20">Confidence: Tinggi</span>
          </div>
        </div>
      </div>
    </div>

    <div className="p-2.5 bg-[#0f0f18] border-t border-purple-500/15">
      <div className="flex items-center gap-2 bg-[#050509] border border-purple-500/20 rounded-full px-3 py-1.5">
        <span className="text-[10px] text-muted-foreground/40 flex-1">Tanya AINA...</span>
        <div className="w-5 h-5 rounded-full bg-gradient-purple flex items-center justify-center">
          <Send size={8} className="text-white" />
        </div>
      </div>
    </div>
  </div>
);

const ClosingSection = () => (
  <section className="relative bg-[#050509] pt-8 md:pt-20 pb-0 overflow-hidden">
    <div className="pointer-events-none absolute inset-0 dot-grid opacity-40" />
    <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[150px]" style={{ background: 'hsl(270 60% 55% / 0.09)' }} />

    <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-8">

      {/* Top: headline + chat demo */}
      <div className="flex flex-col lg:flex-row gap-8 md:gap-12 items-center mb-8 md:mb-14">
        <div className="flex-1 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 rounded-full border border-purple-400/30 bg-purple-500/5 px-3 py-1 mb-3 backdrop-blur-sm">
            <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-purple-300">Ambil Langkah Selanjutnya</span>
          </div>
          <h2 className="text-2xl md:text-4xl font-bold text-white leading-tight mb-3 font-display text-center lg:text-left">
            AINA sudah berjalan.{' '}
            <span className="text-gradient-purple-cyan">Giliran kamu ikut di dalamnya.</span>
          </h2>
          <p className="text-xs md:text-sm text-muted-foreground leading-relaxed max-w-md mx-auto lg:mx-0 text-center lg:text-left">
            Pakai, kontribusi, atau kolaborasi semua punya tempatnya di AINA.
          </p>
        </div>

        <div className="w-full lg:w-auto lg:flex-shrink-0 relative">
          <div className="absolute -inset-8 rounded-full blur-[50px]" style={{ background: 'hsl(270 60% 55% / 0.12)' }} />
          <div className="relative">
            <ChatDemo />
            {/* Source + confidence callout */}
            <div className="absolute -right-2 md:-right-10 top-1/2 -translate-y-1/2 hidden md:block">
              <div className="bg-[#0f0f18]/90 backdrop-blur-sm border border-purple-500/20 rounded-xl p-2 w-32">
                <p className="text-[8px] text-muted-foreground/60 uppercase tracking-wider mb-1">Setiap jawaban</p>
                <p className="text-[10px] text-purple-300 font-semibold">✓ Ada sumbernya</p>
                <p className="text-[10px] text-emerald-300 font-semibold">✓ Ada confidence-nya</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-12 md:mb-20">
        {actions.map((action, i) => {
          const Icon = action.icon;
          const isPurple = action.color === 'purple';
          return (
            <a
              key={i}
              href={action.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex flex-col rounded-2xl p-4 border transition-all duration-300 hover:-translate-y-0.5 ${
                action.featured
                  ? 'bg-gradient-to-br from-[#1a0e30]/90 to-[#0f0f18]/90 border-purple-500/35 glow-purple-sm'
                  : isPurple
                    ? 'bg-[#0f0f18]/80 border-purple-500/20 hover:border-purple-500/35 backdrop-blur-sm'
                    : 'bg-[#0f0f18]/80 border-cyan-500/15 hover:border-cyan-500/25 backdrop-blur-sm'
              }`}
            >
              <div className={`w-8 h-8 rounded-xl flex items-center justify-center mb-3 border flex-shrink-0 ${
                action.featured
                  ? 'bg-gradient-purple text-white border-purple-500/30 shadow-lg shadow-purple-500/25'
                  : isPurple
                    ? 'bg-purple-500/10 border-purple-500/20 text-purple-400'
                    : 'bg-cyan-500/10 border-cyan-500/20 text-cyan-400'
              }`}>
                <Icon size={14} />
              </div>
              <h3 className="text-sm font-bold text-white mb-1 font-display">{action.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed flex-1 mb-3">{action.desc}</p>
              <div className={`flex items-center gap-1.5 text-xs font-semibold ${
                action.featured ? 'text-purple-300' : isPurple ? 'text-purple-400/70' : 'text-cyan-400/70'
              }`}>
                {action.cta}
                <ArrowRight size={11} className="group-hover:translate-x-0.5 transition-transform" />
              </div>
            </a>
          );
        })}
      </div>
    </div>
  </section>
);

export default ClosingSection;
