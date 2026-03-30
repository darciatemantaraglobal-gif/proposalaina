import React from 'react';
import { FileX, Globe, BookOpen, MapPin, Clock } from 'lucide-react';

const problems = [
  {
    icon: FileX,
    title: 'Birokrasi membingungkan',
    desc: 'Prosedur berubah terus, aturan tidak jelas, tanpa panduan terpercaya.',
    stat: 'Keluhan #1',
  },
  {
    icon: Globe,
    title: 'Informasi tersebar',
    desc: 'Info penting tenggelam di grup WA. Tidak tersaring, tidak bisa dicari ulang.',
    stat: 'Tiap hari',
  },
  {
    icon: BookOpen,
    title: 'Akademik tanpa pendampingan',
    desc: 'Sistem kuliah Mesir beda jauh. Tidak ada yang paham konteks Masisir.',
    stat: 'Tiap mahasiswa baru',
  },
  {
    icon: MapPin,
    title: 'Adaptasi tanpa panduan',
    desc: 'Kos, transportasi, kuliner halal — semua dicari sendiri dari nol.',
    stat: 'Tahun pertama',
  },
  {
    icon: Clock,
    title: 'Tidak ada sistem terpusat',
    desc: 'Pertanyaan sama berulang tiap tahun. Pengetahuan komunitas tidak tersimpan.',
    stat: 'Ribuan jam terbuang',
  },
];

const ProblemSection = () => (
  <section id="masalah" className="relative bg-[#050509] py-8 md:py-20 px-6 md:px-8 overflow-hidden">
    <div className="pointer-events-none absolute inset-0 dot-grid opacity-40" />
    <div className="pointer-events-none absolute left-1/3 top-0 h-[400px] w-[400px] -translate-x-1/2 rounded-full blur-[140px]" style={{ background: 'hsl(270 60% 55% / 0.08)' }} />

    <div className="relative z-10 max-w-5xl mx-auto">
      <div className="mb-8 md:mb-12 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-red-400/25 bg-red-500/5 px-3 py-1 mb-3 backdrop-blur-sm">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-red-400" />
          </span>
          <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-red-300">Masalah Nyata</span>
        </div>
        <h2 className="text-2xl md:text-4xl font-bold text-white leading-tight font-display">
          5 masalah nyata.{' '}
          <span className="text-gradient-purple-cyan">Setiap hari. Tanpa solusi terpusat.</span>
        </h2>
        <p className="mt-2 text-xs md:text-sm text-muted-foreground max-w-lg mx-auto">Bukan asumsi. Ini yang dihadapi ribuan Masisir setiap tahun.</p>
      </div>

      <div className="grid grid-cols-2 gap-3 md:gap-4">
        {problems.map((p, i) => {
          const Icon = p.icon;
          const isLast = i === 4;
          return (
            <div
              key={i}
              className={`group bg-[#0f0f18]/80 backdrop-blur-sm border border-red-500/15 rounded-2xl p-3 md:p-5 hover:border-red-500/30 hover:bg-[#0f0f18] transition-all duration-300 ${isLast ? 'col-span-2 sm:col-span-1' : ''}`}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="w-8 h-8 rounded-xl bg-red-500/8 border border-red-500/15 flex items-center justify-center text-red-400/80 flex-shrink-0">
                  <Icon size={14} />
                </div>
                <span className="text-[9px] font-bold text-red-500/40 uppercase tracking-wider text-right leading-tight">{p.stat}</span>
              </div>
              <h3 className="text-xs md:text-sm font-bold text-white mb-1.5 font-display">{p.title}</h3>
              <p className="text-[11px] md:text-xs text-muted-foreground leading-relaxed">{p.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default ProblemSection;
