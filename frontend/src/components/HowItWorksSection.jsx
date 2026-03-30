import React from 'react';
import { MessageSquare, BookOpen, Cpu, AlignLeft, ShieldCheck, ChevronRight } from 'lucide-react';

const steps = [
  {
    icon: MessageSquare,
    num: '01',
    title: 'User bertanya',
    short: 'Input pertanyaan',
    desc: 'Pengguna mengetik pertanyaan dalam bahasa natural — birokrasi, akademik, kehidupan di Mesir, atau hal lain seputar Masisir.',
    detail: 'Tidak perlu format khusus. Cukup tulis seperti bertanya ke teman yang tahu segalanya.',
    color: 'purple',
  },
  {
    icon: BookOpen,
    num: '02',
    title: 'Sistem membaca konteks',
    short: 'Analisis konteks',
    desc: 'AINA membaca konteks pertanyaan: topik, intent, dan kategori masalah. Bukan sekadar mencari kata kunci.',
    detail: 'Langkah ini memastikan sistem mengerti apa yang sebenarnya ditanyakan, bukan hanya kata-katanya.',
    color: 'cyan',
  },
  {
    icon: Cpu,
    num: '03',
    title: 'Sumber terbaik dipilih',
    short: 'Pemilihan sumber',
    desc: 'Dari knowledge base Masisir, sistem mencocokkan dan memilih entri paling relevan berdasarkan konteks yang sudah dipahami.',
    detail: 'Knowledge base dikurasi kontributor — informasi valid, bukan scraping sembarangan.',
    color: 'purple',
  },
  {
    icon: AlignLeft,
    num: '04',
    title: 'Jawaban disusun',
    short: 'Generasi jawaban',
    desc: 'AI menyusun jawaban yang ringkas, terstruktur, dan sesuai gaya komunikasi Masisir — berdasarkan sumber yang sudah dipilih.',
    detail: 'Tidak mengarang. Jawaban dirakit dari informasi yang sudah terverifikasi di knowledge base.',
    color: 'cyan',
  },
  {
    icon: ShieldCheck,
    num: '05',
    title: 'Sumber & confidence ditampilkan',
    short: 'Transparansi',
    desc: 'Pengguna melihat dari mana informasi berasal dan seberapa yakin sistem dengan jawabannya. Bisa diverifikasi langsung.',
    detail: 'Jika confidence rendah, AINA akan menyebutkannya — bukan pura-pura yakin.',
    color: 'purple',
  },
];

const HowItWorksSection = () => (
  <section className="relative bg-[#050509] py-8 md:py-20 px-4 md:px-6 overflow-hidden">
    <div className="pointer-events-none absolute inset-0 dot-grid opacity-40" />
    <div className="pointer-events-none absolute right-0 top-0 h-[400px] w-[400px] rounded-full blur-[140px]" style={{ background: 'hsl(185 80% 55% / 0.05)' }} />
    <div className="pointer-events-none absolute left-0 bottom-0 h-[300px] w-[300px] rounded-full blur-[120px]" style={{ background: 'hsl(270 60% 55% / 0.07)' }} />

    <div className="relative z-10 max-w-5xl mx-auto">
      <div className="mb-6 md:mb-12 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-purple-400/30 bg-purple-500/5 px-3 py-1 mb-3 backdrop-blur-sm">
          <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-purple-300">Cara Kerja</span>
        </div>
        <h2 className="text-2xl md:text-4xl font-bold text-white leading-tight font-display">
          Dari pertanyaan ke jawaban —{' '}
          <span className="text-gradient-purple-cyan">dalam 5 langkah.</span>
        </h2>
        <p className="mt-2 text-xs md:text-sm text-muted-foreground max-w-xl mx-auto">Bukan asal generate. Ada pemahaman konteks, seleksi sumber, dan konfirmasi di setiap jawaban.</p>
      </div>

      {/* Main flow — desktop horizontal timeline */}
      <div className="hidden md:block mb-6">
        <div className="flex items-stretch gap-0">
          {steps.map((step, i) => {
            const Icon = step.icon;
            const isPurple = step.color === 'purple';
            const isLast = i === steps.length - 1;
            return (
              <div key={i} className="flex-1 flex flex-col relative">
                {/* Connector line */}
                {!isLast && (
                  <div className="absolute top-[22px] left-1/2 right-0 h-px" style={{ background: 'linear-gradient(to right, hsl(270 60% 55% / 0.3), hsl(270 60% 55% / 0.1))' }} />
                )}
                <div className="flex flex-col items-center text-center px-2">
                  {/* Step icon */}
                  <div className={`relative z-10 w-11 h-11 rounded-2xl flex items-center justify-center mb-2 border ${isPurple ? 'bg-purple-500/10 border-purple-500/25 text-purple-400' : 'bg-cyan-500/10 border-cyan-500/25 text-cyan-400'}`}>
                    <Icon size={16} />
                    <div className={`absolute -top-2 -right-2 w-4 h-4 rounded-full flex items-center justify-center text-[8px] font-black ${isPurple ? 'bg-purple-600 text-white' : 'bg-cyan-600 text-white'}`}>
                      {i + 1}
                    </div>
                  </div>
                  <h4 className="text-[11px] font-bold text-white mb-1 font-display leading-tight">{step.title}</h4>
                  <p className="text-[10px] text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Mobile: expanded vertical cards */}
      <div className="md:hidden space-y-0 mb-5">
        {steps.map((step, i) => {
          const Icon = step.icon;
          const isPurple = step.color === 'purple';
          const isLast = i === steps.length - 1;
          return (
            <div key={i} className="flex gap-3 relative">
              {!isLast && (
                <div className="absolute left-[15px] top-12 bottom-0 w-px" style={{ background: 'linear-gradient(to bottom, hsl(270 60% 55% / 0.25), transparent)' }} />
              )}
              <div className={`w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 border mt-1 ${isPurple ? 'bg-purple-500/10 border-purple-500/25 text-purple-400' : 'bg-cyan-500/10 border-cyan-500/25 text-cyan-400'}`}>
                <Icon size={13} />
              </div>
              <div className="pb-5">
                <span className={`text-[9px] font-black tracking-[0.2em] ${isPurple ? 'text-purple-500' : 'text-cyan-500'}`}>{step.num}</span>
                <h4 className="text-sm font-bold text-white mt-0.5 mb-1 font-display">{step.title}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed mb-1.5">{step.desc}</p>
                <p className="text-[11px] text-foreground/30 leading-relaxed italic">{step.detail}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Detail cards — desktop */}
      <div className="hidden md:grid grid-cols-5 gap-2 mb-5">
        {steps.map((step, i) => {
          const isPurple = step.color === 'purple';
          return (
            <div key={i} className={`rounded-xl p-2.5 border ${isPurple ? 'bg-purple-500/5 border-purple-500/15' : 'bg-cyan-500/5 border-cyan-500/12'}`}>
              <p className="text-[10px] text-foreground/40 leading-relaxed italic">{step.detail}</p>
            </div>
          );
        })}
      </div>

      {/* Bottom note */}
      <div className="bg-[#0f0f18]/80 backdrop-blur-sm border border-purple-500/25 rounded-2xl p-3 md:p-4 flex items-start gap-3">
        <ShieldCheck size={15} className="text-purple-400 flex-shrink-0 mt-0.5" />
        <div>
          <p className="text-xs font-semibold text-white mb-1 font-display">Kenapa source & confidence level penting?</p>
          <p className="text-xs text-muted-foreground leading-relaxed">AI umum sering tampak yakin padahal informasinya salah — ini disebut hallucination. AINA mencegah ini dengan mengikat setiap jawaban ke sumber terverifikasi, dan jujur menampilkan tingkat keyakinan sistem. Kalau informasinya tidak cukup kuat, AINA akan bilang — bukan mengarang jawaban.</p>
        </div>
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
