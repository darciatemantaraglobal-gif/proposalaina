import React from 'react';
import { Target, Brain, BookOpen, LifeBuoy, Globe2, CheckCircle2, X } from 'lucide-react';

const differentiators = [
  {
    icon: Target,
    title: 'Dibuat khusus untuk Masisir',
    desc: 'Setiap fitur dan respons dirancang dari realita Masisir — bukan produk umum yang dipaksakan.',
    color: 'purple',
  },
  {
    icon: Brain,
    title: 'Bukan AI generik',
    desc: 'Bukan dari AI general — dari knowledge base lokal yang dikurasi Masisir.',
    color: 'cyan',
  },
  {
    icon: BookOpen,
    title: 'Berbasis knowledge lokal',
    desc: 'Diisi dan diverifikasi oleh Masisir yang punya pengalaman langsung.',
    color: 'purple',
  },
  {
    icon: LifeBuoy,
    title: 'Mencakup seluruh kebutuhan Masisir',
    desc: 'Birokrasi, akademik, kehidupan, produktivitas — satu sistem, bukan satu aspek.',
    color: 'cyan',
  },
  {
    icon: Globe2,
    title: 'Menuju pusat ekosistem digital Masisir',
    desc: 'Sistem yang tumbuh bersama komunitasnya — bukan aplikasi statis.',
    color: 'purple',
  },
];

const comparisons = [
  { aspect: 'Target pengguna', aina: 'Khusus Masisir di Mesir', generic: 'Semua orang' },
  { aspect: 'Basis jawaban', aina: 'Knowledge base lokal terverifikasi', generic: 'Generasi bebas AI' },
  { aspect: 'Source transparency', aina: 'Ada — setiap jawaban', generic: 'Tidak ada' },
  { aspect: 'Confidence level', aina: 'Ditampilkan eksplisit', generic: 'Tidak ada' },
  { aspect: 'Konteks budaya & bahasa', aina: 'Masisir-aware', generic: 'Generic / global' },
  { aspect: 'Ekosistem fitur', aina: 'Produktivitas, threads, berita, dashboard', generic: 'Chat saja' },
];

const WhyAINASection = () => (
  <section className="relative bg-[#050509] py-8 md:py-20 px-6 md:px-8 overflow-hidden">
    <div className="pointer-events-none absolute inset-0 dot-grid opacity-40" />
    <div className="pointer-events-none absolute left-0 bottom-0 h-[400px] w-[400px] rounded-full blur-[130px]" style={{ background: 'hsl(185 80% 55% / 0.05)' }} />
    <div className="pointer-events-none absolute right-0 top-0 h-[300px] w-[300px] rounded-full blur-[120px]" style={{ background: 'hsl(270 60% 55% / 0.07)' }} />

    <div className="relative z-10 max-w-5xl mx-auto">
      <div className="mb-6 md:mb-12 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/5 px-3 py-1 mb-3 backdrop-blur-sm">
          <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-cyan-300">Mengapa AINA Berbeda</span>
        </div>
        <h2 className="text-2xl md:text-4xl font-bold text-white leading-tight font-display">
          Bukan soal canggih.{' '}
          <span className="text-gradient-purple-cyan">Tapi siapa yang paling paham Masisir.</span>
        </h2>
        <p className="mt-2 text-xs md:text-sm text-muted-foreground max-w-xl mx-auto">AI umum bisa banyak hal. AINA dibangun khusus untuk satu konteks — dan itu bedanya.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-5 md:gap-8 items-start">

        {/* Left: 5 differentiators */}
        <div className="space-y-3">
          {differentiators.map((d, i) => {
            const Icon = d.icon;
            const isPurple = d.color === 'purple';
            return (
              <div key={i} className={`group flex items-start gap-3 p-3 rounded-2xl border transition-all duration-300 ${isPurple ? 'bg-purple-500/4 border-purple-500/15 hover:border-purple-500/30 hover:bg-purple-500/8' : 'bg-cyan-500/4 border-cyan-500/12 hover:border-cyan-500/25 hover:bg-cyan-500/7'}`}>
                <div className={`mt-0.5 w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 border ${isPurple ? 'bg-purple-500/10 border-purple-500/20 text-purple-400 group-hover:bg-purple-500/15' : 'bg-cyan-500/10 border-cyan-500/20 text-cyan-400 group-hover:bg-cyan-500/15'} transition-colors`}>
                  <Icon size={15} />
                </div>
                <div>
                  <p className="text-sm font-bold text-white font-display mb-0.5">{d.title}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{d.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right: Comparison table */}
        <div className="w-full">
          <div className="bg-[#0f0f18]/80 backdrop-blur-sm border border-purple-500/20 rounded-2xl overflow-hidden">
            {/* Header */}
            <div className="flex items-center gap-0 px-3 py-2.5 bg-[#13121f]/60 border-b border-purple-500/15">
              <span className="flex-1 text-[10px] text-muted-foreground/50 font-medium">Aspek</span>
              <span className="w-28 text-center text-[10px] font-bold text-purple-300 uppercase tracking-wider">AINA</span>
              <span className="w-24 text-center text-[10px] font-bold text-muted-foreground/30 uppercase tracking-wider">AI Umum</span>
            </div>
            {/* Rows */}
            {comparisons.map((row, i) => (
              <div key={i} className={`flex items-center gap-0 px-3 py-2.5 border-b border-purple-500/8 last:border-0 ${i % 2 === 0 ? '' : 'bg-white/[0.01]'}`}>
                <span className="flex-1 text-[11px] text-muted-foreground font-medium leading-tight pr-2">{row.aspect}</span>
                <div className="w-28 flex justify-center">
                  <div className="flex items-center gap-1 bg-emerald-500/8 border border-emerald-500/15 rounded-lg px-2 py-1">
                    <CheckCircle2 size={9} className="text-emerald-400 flex-shrink-0" />
                    <span className="text-[9px] text-emerald-300 font-medium leading-tight">{row.aina}</span>
                  </div>
                </div>
                <div className="w-24 flex justify-center">
                  <div className="flex items-center gap-1 bg-[#0f0f18] border border-purple-500/10 rounded-lg px-2 py-1">
                    <X size={9} className="text-muted-foreground/30 flex-shrink-0" />
                    <span className="text-[9px] text-muted-foreground/40 font-medium leading-tight">{row.generic}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-2 text-[10px] text-muted-foreground/30 text-center">Perbandingan dengan AI chat umum populer</p>
        </div>

      </div>
    </div>
  </section>
);

export default WhyAINASection;
