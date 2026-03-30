import React from 'react';
import { Target, Brain, Link2, LayoutGrid, TrendingUp, CheckCircle2, X } from 'lucide-react';

const points = [
  { icon: Target, title: 'Dibuat khusus untuk Masisir', desc: 'Bahasa, konteks, dan fitur — semuanya dari realita kehidupan di Mesir.' },
  { icon: Brain, title: 'Bukan AI generik', desc: 'Jawaban dari knowledge base terstruktur, bukan generasi bebas yang rawan salah.' },
  { icon: Link2, title: 'Transparan', desc: 'Setiap jawaban dilengkapi sumber dan confidence level. Bisa diverifikasi.' },
  { icon: LayoutGrid, title: 'Satu ekosistem', desc: 'Akademik, birokrasi, komunitas, produktivitas — dalam satu sistem.' },
  { icon: TrendingUp, title: 'Dibangun untuk berkembang', desc: 'Roadmap jelas menuju pusat ekosistem digital Masisir.' },
];

const rows = [
  { aspect: 'Target pengguna', aina: 'Masisir (konteks Mesir)', generic: 'Semua orang' },
  { aspect: 'Basis jawaban', aina: 'Knowledge base terstruktur', generic: 'Generasi bebas (rawan salah)' },
  { aspect: 'Transparansi sumber', aina: 'Ada — sumber + confidence', generic: 'Tidak ada' },
  { aspect: 'Bahasa & konteks', aina: 'Masisir-aware', generic: 'General' },
  { aspect: 'Fitur tambahan', aina: 'Produktivitas, threads, berita', generic: 'Chat saja' },
];

const WhyAINASection = () => (
  <section className="bg-[#050509] py-14 md:py-20 px-4 md:px-6">
    <div className="max-w-5xl mx-auto">
      <div className="mb-10 md:mb-14">
        <span className="text-[10px] font-bold uppercase tracking-widest text-cyan-400">Keunggulan</span>
        <h2 className="mt-2 text-3xl md:text-4xl font-bold text-white leading-tight">
          Kenapa AINA, bukan{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">AI biasa?</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
        {/* Left: Key differentiators */}
        <div className="space-y-4">
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

        {/* Right: Comparison table */}
        <div className="bg-[#0c0c14] border border-white/6 rounded-2xl overflow-hidden">
          <div className="overflow-x-auto">
            <div className="min-w-[380px]">
              <div className="grid grid-cols-3 bg-[#111118] border-b border-white/5 px-4 py-3">
                <span className="text-[10px] text-slate-600 font-bold uppercase tracking-wider">Aspek</span>
                <span className="text-[10px] text-purple-300 font-bold uppercase tracking-wider text-center">AINA</span>
                <span className="text-[10px] text-slate-600 font-bold uppercase tracking-wider text-center">AI Umum</span>
              </div>
              {rows.map((row, i) => (
                <div key={i} className={`grid grid-cols-3 px-4 py-3 border-b border-white/4 last:border-0 ${i % 2 === 0 ? '' : 'bg-white/[0.01]'}`}>
                  <span className="text-xs text-slate-500 font-medium flex items-center pr-2">{row.aspect}</span>
                  <div className="flex items-center justify-center gap-1.5">
                    <CheckCircle2 size={11} className="text-emerald-400 flex-shrink-0" />
                    <span className="text-[11px] text-emerald-300 text-center">{row.aina}</span>
                  </div>
                  <div className="flex items-center justify-center gap-1.5">
                    <X size={11} className="text-slate-600 flex-shrink-0" />
                    <span className="text-[11px] text-slate-500 text-center">{row.generic}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default WhyAINASection;
