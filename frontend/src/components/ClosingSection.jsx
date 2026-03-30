import React from 'react';
import { GitMerge, Handshake, Heart, BookOpen, Bot, Send, User } from 'lucide-react';

const waBase = 'https://wa.me/6281311506025?text=';

const actions = [
  {
    icon: BookOpen,
    title: 'Pelajari AINA',
    desc: 'Lihat semua fitur, arsitektur sistem, dan cara AINA bekerja.',
    cta: 'Pelajari Sekarang',
    color: 'purple',
    href: 'https://ainalabs.pro',
    style: 'ghost',
  },
  {
    icon: GitMerge,
    title: 'Jadi Kontributor',
    desc: 'Isi knowledge base, moderasi diskusi, atau bantu memperkuat ekosistem AINA.',
    cta: 'Mulai Berkontribusi',
    color: 'purple',
    href: 'https://ainalabs.pro',
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

    <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-8">

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

      {/* CTA Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-12 md:mb-20">
        {actions.map((action, i) => {
          const Icon = action.icon;
          return (
            <a
              key={i}
              href={action.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group inline-flex items-center gap-2 px-5 py-2.5 rounded-full border text-sm font-semibold transition-all duration-200 ${
                action.featured
                  ? 'bg-purple-600/20 border-purple-500/45 text-white hover:bg-purple-600/30 hover:border-purple-400/60'
                  : action.color === 'cyan'
                    ? 'bg-transparent border-cyan-500/25 text-cyan-300/80 hover:border-cyan-400/40 hover:text-cyan-200 hover:bg-cyan-500/5'
                    : 'bg-transparent border-purple-500/20 text-purple-300/80 hover:border-purple-400/35 hover:text-purple-200 hover:bg-purple-500/5'
              }`}
            >
              <Icon size={13} className="flex-shrink-0" />
              {action.cta}
            </a>
          );
        })}
      </div>
    </div>
  </section>
);

export default ClosingSection;
