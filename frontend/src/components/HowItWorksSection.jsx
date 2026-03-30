import React from 'react';
import { MessageSquare, BookOpen, Cpu, AlignLeft, ShieldCheck } from 'lucide-react';

const steps = [
  {
    icon: MessageSquare,
    num: '01',
    title: 'User bertanya',
    desc: 'Tulis pertanyaan dalam bahasa natural — topik apa pun seputar Masisir.',
    color: 'purple',
  },
  {
    icon: BookOpen,
    num: '02',
    title: 'Konteks dibaca',
    desc: 'AINA memahami topik, intent, dan kategori. Bukan sekadar keyword match.',
    color: 'cyan',
  },
  {
    icon: Cpu,
    num: '03',
    title: 'Sumber dipilih',
    desc: 'Sistem memilih entri paling relevan dari knowledge base Masisir.',
    color: 'purple',
  },
  {
    icon: AlignLeft,
    num: '04',
    title: 'Jawaban disusun',
    desc: 'Jawaban dirakit ringkas dari sumber yang sudah terverifikasi.',
    color: 'cyan',
  },
  {
    icon: ShieldCheck,
    num: '05',
    title: 'Sumber ditampilkan',
    desc: 'Sumber dan confidence level muncul di setiap jawaban. Bisa diverifikasi.',
    color: 'purple',
  },
];

const HowItWorksSection = () => (
  <section className="relative bg-[#050509] py-8 md:py-20 px-6 md:px-8 overflow-hidden">
    <div className="pointer-events-none absolute inset-0 dot-grid opacity-40" />
    <div className="pointer-events-none absolute right-0 top-0 h-[400px] w-[400px] rounded-full blur-[140px]" style={{ background: 'hsl(185 80% 55% / 0.05)' }} />
    <div className="pointer-events-none absolute left-0 bottom-0 h-[300px] w-[300px] rounded-full blur-[120px]" style={{ background: 'hsl(270 60% 55% / 0.07)' }} />

    <div className="relative z-10 max-w-4xl mx-auto">
      <div className="mb-8 md:mb-12 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-purple-400/30 bg-purple-500/5 px-3 py-1 mb-3 backdrop-blur-sm">
          <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-purple-300">Cara Kerja</span>
        </div>
        <h2 className="text-2xl md:text-4xl font-bold text-white leading-tight font-display">
          Dari pertanyaan ke jawaban,{' '}
          <span className="text-gradient-purple-cyan">dalam 5 langkah.</span>
        </h2>
        <p className="mt-2 text-xs md:text-sm text-muted-foreground max-w-lg mx-auto">Ada pemahaman konteks, seleksi sumber, dan verifikasi di setiap jawaban.</p>
      </div>

      {/* Desktop: horizontal flow */}
      <div className="hidden md:flex items-start gap-0 mb-3">
        {steps.map((step, i) => {
          const Icon = step.icon;
          const isPurple = step.color === 'purple';
          const isLast = i === steps.length - 1;
          return (
            <div key={i} className="flex-1 flex flex-col items-center text-center relative px-2">
              {!isLast && (
                <div className="absolute top-[22px] left-1/2 right-0 h-px" style={{ background: 'linear-gradient(to right, hsl(270 60% 55% / 0.3), hsl(270 60% 55% / 0.05))' }} />
              )}
              <div className={`relative z-10 w-11 h-11 rounded-2xl flex items-center justify-center mb-3 border ${isPurple ? 'bg-purple-500/10 border-purple-500/25 text-purple-400' : 'bg-cyan-500/10 border-cyan-500/25 text-cyan-400'}`}>
                <Icon size={16} />
                <div className={`absolute -top-2 -right-2 w-4 h-4 rounded-full flex items-center justify-center text-[8px] font-black ${isPurple ? 'bg-purple-600' : 'bg-cyan-600'} text-white`}>
                  {i + 1}
                </div>
              </div>
              <h4 className="text-[11px] font-bold text-white mb-1 font-display leading-tight">{step.title}</h4>
              <p className="text-[10px] text-muted-foreground leading-relaxed">{step.desc}</p>
            </div>
          );
        })}
      </div>

      {/* Mobile: vertical list */}
      <div className="md:hidden space-y-0 mb-5">
        {steps.map((step, i) => {
          const Icon = step.icon;
          const isPurple = step.color === 'purple';
          const isLast = i === steps.length - 1;
          return (
            <div key={i} className="flex gap-3 relative">
              {!isLast && (
                <div className="absolute left-[15px] top-10 bottom-0 w-px" style={{ background: 'linear-gradient(to bottom, hsl(270 60% 55% / 0.2), transparent)' }} />
              )}
              <div className={`w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 border mt-1 relative z-10 ${isPurple ? 'bg-purple-500/10 border-purple-500/25 text-purple-400' : 'bg-cyan-500/10 border-cyan-500/25 text-cyan-400'}`}>
                <Icon size={13} />
              </div>
              <div className="pb-5">
                <span className={`text-[9px] font-black tracking-[0.2em] ${isPurple ? 'text-purple-500' : 'text-cyan-500'}`}>{step.num}</span>
                <h4 className="text-sm font-bold text-white mt-0.5 mb-1 font-display">{step.title}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom note */}
      <div className="flex items-center gap-3 bg-[#0f0f18]/80 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-3 md:p-4 mt-4">
        <ShieldCheck size={15} className="text-purple-400 flex-shrink-0" />
        <p className="text-xs text-muted-foreground leading-relaxed">
          AI umum sering tampak yakin padahal salah. AINA mengikat setiap jawaban ke sumber terverifikasi dan jujur menampilkan confidence level — kalau tidak cukup kuat, AINA bilang, bukan mengarang.
        </p>
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
