import React from 'react';
import { Target, Brain, Link2, LayoutGrid, TrendingUp, CheckCircle2, X } from 'lucide-react';

const points = [
  { icon: Target, title: 'Dibuat khusus untuk Masisir', desc: 'Bahasa, konteks, dan fitur — semuanya dari realita kehidupan di Mesir.' },
  { icon: Brain, title: 'Bukan AI generik', desc: 'Jawaban dari knowledge base terstruktur, bukan generasi bebas yang rawan salah.' },
  { icon: Link2, title: 'Transparan', desc: 'Setiap jawaban dilengkapi sumber dan confidence level. Bisa diverifikasi.' },
  { icon: LayoutGrid, title: 'Satu ekosistem', desc: 'Akademik, birokrasi, komunitas, produktivitas — dalam satu sistem.' },
  { icon: TrendingUp, title: 'Dibangun untuk berkembang', desc: 'Roadmap jelas menuju pusat ekosistem digital Masisir.' },
];

const comparisons = [
  { aspect: 'Target pengguna', aina: 'Masisir (konteks Mesir)', generic: 'Semua orang' },
  { aspect: 'Basis jawaban', aina: 'Knowledge base terstruktur', generic: 'Generasi bebas AI' },
  { aspect: 'Sumber & confidence', aina: 'Ada & transparan', generic: 'Tidak ada' },
  { aspect: 'Fitur tambahan', aina: 'Produktivitas, threads, berita', generic: 'Chat saja' },
  { aspect: 'Bahasa & konteks', aina: 'Masisir-aware', generic: 'General' },
];

const WhyAINASection = () => (
  <section className="bg-[#050509] py-8 md:py-20 px-4 md:px-6">
    <div className="max-w-5xl mx-auto">
      <div className="mb-5 md:mb-14">
        <span className="text-[10px] font-bold uppercase tracking-widest text-cyan-400">Keunggulan</span>
        <h2 className="mt-2 text-2xl md:text-4xl font-bold text-white leading-tight">
          Kenapa AINA, bukan{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">AI biasa?</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-12 items-start">
        {/* Left: Key differentiators */}
        <div className="space-y-3 md:space-y-4">
          {points.map((p, i) => {
            const Icon = p.icon;
            return (
              <div key={i} className="flex items-start gap-3 group">
                <div className={`mt-0.5 w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 border transition-colors ${i % 2 === 0 ? 'bg-purple-500/8 border-purple-500/20 text-purple-400 group-hover:bg-purple-500/15' : 'bg-cyan-500/8 border-cyan-500/20 text-cyan-400 group-hover:bg-cyan-500/15'}`}>
                  <Icon size={16} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{p.title}</p>
                  <p className="text-xs text-slate-500 leading-relaxed mt-0.5">{p.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right: Comparison cards (bukan tabel) */}
        <div className="space-y-2">
          {/* Header labels */}
          <div className="flex items-center gap-2 px-1 mb-3">
            <div className="flex-1" />
            <span className="text-[10px] font-bold text-purple-300 uppercase tracking-wider w-24 text-center">AINA</span>
            <span className="text-[10px] font-bold text-slate-600 uppercase tracking-wider w-24 text-center">AI Umum</span>
          </div>

          {comparisons.map((row, i) => (
            <div key={i} className="flex items-center gap-2 bg-[#0c0c14] border border-purple-500/20 rounded-xl px-3 py-2.5">
              {/* Aspect label */}
              <span className="text-[11px] text-slate-500 font-medium flex-1 min-w-0">{row.aspect}</span>

              {/* AINA pill */}
              <div className="flex items-center gap-1 w-24 justify-center bg-emerald-500/8 border border-emerald-500/20 rounded-lg px-2 py-1 flex-shrink-0">
                <CheckCircle2 size={10} className="text-emerald-400 flex-shrink-0" />
                <span className="text-[10px] text-emerald-300 font-medium leading-tight text-center">{row.aina}</span>
              </div>

              {/* Generic pill */}
              <div className="flex items-center gap-1 w-24 justify-center bg-slate-800/50 border border-purple-500/12 rounded-lg px-2 py-1 flex-shrink-0">
                <X size={10} className="text-slate-600 flex-shrink-0" />
                <span className="text-[10px] text-slate-500 font-medium leading-tight text-center">{row.generic}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default WhyAINASection;
