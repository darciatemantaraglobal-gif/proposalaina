import React from 'react';
import { FileX, Globe, Clock, BookOpen, MapPin } from 'lucide-react';

const problems = [
  {
    icon: FileX,
    title: 'Birokrasi yang membingungkan',
    desc: 'Prosedur berubah terus, aturan tidak jelas, dan tidak ada panduan terpercaya.',
    stat: 'Keluhan #1',
  },
  {
    icon: Globe,
    title: 'Informasi tersebar, tidak terpusat',
    desc: 'Info penting tenggelam di grup WA tidak tersaring, tidak bisa dicari ulang.',
    stat: 'Tiap hari',
  },
  {
    icon: BookOpen,
    title: 'Kesulitan akademik tanpa pendampingan',
    desc: 'Sistem akademik Mesir beda jauh dari Indonesia. Tidak ada yang memahami konteksnya.',
    stat: 'Tiap mahasiswa baru',
  },
  {
    icon: MapPin,
    title: 'Adaptasi hidup di negeri orang',
    desc: 'Semua dicari sendiri tanpa panduan yang paham kondisi di lapangan.',
    stat: 'Terutama tahun pertama',
  },
  {
    icon: Clock,
    title: 'Tidak ada sistem terpusat untuk Masisir',
    desc: 'Pertanyaan sama berulang tiap tahun pengetahuan komunitas hilang begitu saja.',
    stat: 'Ribuan jam terbuang',
  },
];

const ProblemSection = () => (
  <section id="masalah" className="relative bg-[#050509] py-8 md:py-20 px-6 md:px-8 overflow-hidden">
    <div className="pointer-events-none absolute inset-0 dot-grid opacity-40" />
    <div className="pointer-events-none absolute left-1/3 top-0 h-[400px] w-[400px] -translate-x-1/2 rounded-full blur-[140px]" style={{ background: 'hsl(270 60% 55% / 0.08)' }} />
    <div className="pointer-events-none absolute bottom-0 right-0 h-[300px] w-[300px] rounded-full blur-[120px]" style={{ background: 'hsl(270 60% 55% / 0.06)' }} />

    <div className="relative z-10 max-w-5xl mx-auto">
      <div className="mb-5 md:mb-14 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-red-400/25 bg-red-500/5 px-3 py-1 mb-3 backdrop-blur-sm">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-red-400" />
          </span>
          <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-red-300">Masalah Nyata</span>
        </div>
        <h2 className="text-2xl md:text-4xl font-bold text-white leading-tight font-display">
          Lima masalah nyata.{' '}
          <span className="text-gradient-purple-cyan">Setiap hari. Tanpa solusi terpusat.</span>
        </h2>
        <p className="mt-2 text-xs md:text-sm text-muted-foreground max-w-xl mx-auto">Bukan asumsi. Ini yang dihadapi ribuan Masisir setiap tahun.</p>
      </div>

      {/* 2-col grid for first 4, last one full-width */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mb-3">
        {problems.slice(0, 4).map((p, i) => {
          const Icon = p.icon;
          return (
            <div key={i} className="group bg-[#0f0f18]/80 backdrop-blur-sm border border-red-500/15 rounded-2xl p-3 md:p-5 hover:border-red-500/30 hover:bg-[#0f0f18] transition-all duration-300">
              <div className="flex items-start justify-between mb-3">
                <div className="w-9 h-9 rounded-xl bg-red-500/8 border border-red-500/15 flex items-center justify-center text-red-400/80 flex-shrink-0">
                  <Icon size={16} />
                </div>
                <span className="text-[10px] font-bold text-red-500/40 uppercase tracking-wider text-right max-w-[100px] leading-tight">{p.stat}</span>
              </div>
              <h3 className="text-sm font-bold text-white mb-1.5 font-display">{p.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{p.desc}</p>
            </div>
          );
        })}
      </div>

      {/* Last problem wide */}
      <div className="bg-[#0f0f18]/80 backdrop-blur-sm border border-red-500/15 rounded-2xl p-3 md:p-5 hover:border-red-500/30 hover:bg-[#0f0f18] transition-all duration-300 mb-4 group">
        {(() => {
          const p = problems[4];
          const Icon = p.icon;
          return (
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5">
              <div className="flex items-center gap-3 flex-shrink-0">
                <div className="w-9 h-9 rounded-xl bg-red-500/8 border border-red-500/15 flex items-center justify-center text-red-400/80">
                  <Icon size={16} />
                </div>
                <span className="text-[10px] font-bold text-red-500/40 uppercase tracking-wider sm:hidden">{p.stat}</span>
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="text-sm font-bold text-white font-display">{p.title}</h3>
                  <span className="text-[10px] font-bold text-red-500/40 uppercase tracking-wider hidden sm:block">{p.stat}</span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            </div>
          );
        })()}
      </div>

      <div className="flex items-center gap-3 bg-[#0f0f18]/80 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-3 md:p-4">
        <div className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse flex-shrink-0" />
        <p className="text-xs text-muted-foreground">
          Masalah ini dialami <span className="text-white font-semibold">ribuan Masisir setiap tahun</span> dan AINA dibangun khusus untuk mengatasinya, bukan sebagai solusi generik.
        </p>
      </div>
    </div>
  </section>
);

export default ProblemSection;
