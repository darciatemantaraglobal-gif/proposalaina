import React from 'react';
import { FileX, Globe, Clock, Users } from 'lucide-react';

const problems = [
  {
    icon: FileX,
    title: 'Birokrasi tanpa panduan',
    desc: 'Visa, iqamah, tasjil — prosedurnya berubah terus, informasinya tersebar, tidak ada satu tempat yang bisa diandalkan.',
    stat: '#1 keluhan',
  },
  {
    icon: Globe,
    title: 'Informasi tidak terpusat',
    desc: 'Berita kampus, pengumuman organisasi, info penting — masih tersebar di grup WA dan chat yang mudah tenggelam.',
    stat: 'Tiap hari',
  },
  {
    icon: Clock,
    title: 'Waktu habis untuk hal berulang',
    desc: 'Pertanyaan yang sama ditanyakan berulang kali setiap tahun ajaran baru. Tidak ada sistem yang menyimpannya.',
    stat: 'Ribuan jam',
  },
  {
    icon: Users,
    title: 'Produktivitas tanpa sistem',
    desc: 'Target hafalan, jadwal kampus, keuangan bulanan — dikelola manual, terpisah, dan sering terlupakan.',
    stat: 'Setiap masisir',
  },
];

const ProblemSection = () => (
  <section className="relative bg-[#050509] py-8 md:py-20 px-4 md:px-6 overflow-hidden">
    {/* Dot grid */}
    <div className="pointer-events-none absolute inset-0 dot-grid opacity-40" />
    {/* Orbs */}
    <div className="pointer-events-none absolute left-1/3 top-0 h-[400px] w-[400px] -translate-x-1/2 rounded-full blur-[140px]" style={{ background: 'hsl(270 60% 55% / 0.08)' }} />
    <div className="pointer-events-none absolute bottom-0 right-0 h-[300px] w-[300px] rounded-full blur-[120px]" style={{ background: 'hsl(270 60% 55% / 0.06)' }} />

    <div className="relative z-10 max-w-5xl mx-auto">
      <div className="mb-5 md:mb-14">
        <div className="inline-flex items-center gap-2 rounded-full border border-purple-400/30 bg-purple-500/5 px-3 py-1 mb-3 backdrop-blur-sm">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-purple-400 opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-purple-400" />
          </span>
          <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-purple-300">Masalah</span>
        </div>
        <h2 className="text-2xl md:text-4xl font-bold text-white leading-tight font-display">
          Empat masalah nyata yang{' '}
          <span className="text-gradient-purple-cyan">dihadapi Masisir setiap hari.</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
        {problems.map((p, i) => {
          const Icon = p.icon;
          return (
            <div key={i} className="group bg-[#0f0f18]/80 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-3 md:p-5 hover:border-purple-500/40 hover:bg-[#0f0f18] transition-all duration-300">
              <div className="flex items-start justify-between mb-3">
                <div className="w-9 h-9 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 flex-shrink-0">
                  <Icon size={16} />
                </div>
                <span className="text-[10px] font-bold text-purple-500/50 uppercase tracking-wider">{p.stat}</span>
              </div>
              <h3 className="text-sm font-bold text-white mb-1.5 font-display">{p.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{p.desc}</p>
            </div>
          );
        })}
      </div>

      <div className="mt-5 flex items-center gap-3 bg-[#0f0f18]/80 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-3 md:p-4">
        <div className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse flex-shrink-0" />
        <p className="text-xs text-muted-foreground">
          Masalah ini dialami <span className="text-white font-semibold">ribuan Masisir setiap tahun</span> — dan AINA dibangun untuk mengatasinya.
        </p>
      </div>
    </div>
  </section>
);

export default ProblemSection;
