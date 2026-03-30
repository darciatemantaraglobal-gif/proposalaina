import React from 'react';
import { CheckCircle2, RefreshCw, Database, Layers, Cpu, Users2 } from 'lucide-react';

const milestones = [
  { icon: Database, phase: 'Fondasi Sistem', dot: 'bg-emerald-400', badge: 'bg-emerald-500/10 border-emerald-500/20 text-emerald-300', label: 'SELESAI', items: ['Backend API stabil', 'Database & autentikasi siap', 'Frontend terstruktur'] },
  { icon: Layers, phase: 'Fitur Inti', dot: 'bg-cyan-400', badge: 'bg-cyan-500/10 border-cyan-500/20 text-cyan-300', label: 'LIVE', items: ['AI Chat, Knowledge Base, Source Transparency', 'Berita, Threads, Ruang Produktif', 'Saved Answers & Contributor System'] },
  { icon: Cpu, phase: 'Penguatan', dot: 'bg-purple-400', badge: 'bg-purple-500/10 border-purple-500/20 text-purple-300', label: 'AKTIF', items: ['Personalisasi & response style', 'Kualitas knowledge base ditingkatkan', 'UX diperhalus'] },
  { icon: Users2, phase: 'Ekosistem Komunitas', dot: 'bg-violet-400', badge: 'bg-violet-500/10 border-violet-500/20 text-violet-300', label: 'BERKEMBANG', items: ['Contributor dashboard aktif', 'Jaringan diskusi Masisir tumbuh', 'Menuju pusat ekosistem digital'] },
];

const stats = [
  { value: '8', label: 'Fitur Live', color: 'text-gradient-purple' },
  { value: '5', label: 'Layer Sistem', color: 'text-cyan-400' },
  { value: '4', label: 'Fase Dev', color: 'text-purple-400' },
  { value: '∞', label: 'Ruang Tumbuh', color: 'text-violet-400' },
];

const ProgressSection = () => (
  <section className="relative bg-[#050509] py-8 md:py-20 px-4 md:px-6 overflow-hidden">
    <div className="pointer-events-none absolute inset-0 dot-grid opacity-40" />
    <div className="pointer-events-none absolute left-0 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full blur-[140px]" style={{ background: 'hsl(270 60% 55% / 0.07)' }} />

    <div className="relative z-10 max-w-5xl mx-auto">
      <div className="mb-5 md:mb-14">
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/5 px-3 py-1 mb-3 backdrop-blur-sm">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
          </span>
          <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-emerald-300">Progress</span>
        </div>
        <h2 className="text-2xl md:text-4xl font-bold text-white leading-tight font-display">
          AINA bukan konsep.{' '}
          <span className="text-gradient-purple-cyan">Ini produk yang sedang tumbuh.</span>
        </h2>
        <p className="mt-2 text-xs md:text-sm text-muted-foreground max-w-xl">Fondasi sudah dibangun, fitur inti sudah live, dan sistem terus disempurnakan.</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-5">
        {stats.map((s, i) => (
          <div key={i} className="bg-[#0f0f18]/80 backdrop-blur-sm border border-purple-500/20 rounded-2xl px-3 py-3 text-center">
            <p className={`text-2xl font-bold font-display ${s.color === 'text-gradient-purple' ? '' : s.color}`}
               style={s.color === 'text-gradient-purple' ? { background: 'linear-gradient(135deg, hsl(270 60% 55%), hsl(270 80% 65%))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' } : {}}>
              {s.value}
            </p>
            <p className="text-[11px] text-muted-foreground mt-1">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Milestones */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {milestones.map((m, i) => {
          const Icon = m.icon;
          return (
            <div key={i} className="bg-[#0f0f18]/80 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-3 hover:border-purple-500/35 transition-colors">
              <div className="flex items-start justify-between mb-2.5">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 flex-shrink-0">
                    <Icon size={14} />
                  </div>
                  <p className="text-sm font-bold text-white font-display">{m.phase}</p>
                </div>
                <span className={`text-[9px] font-bold px-2 py-0.5 rounded-md border whitespace-nowrap ${m.badge}`}>
                  <span className={`inline-block w-1 h-1 rounded-full ${m.dot} mr-1 align-middle`} />
                  {m.label}
                </span>
              </div>
              <ul className="space-y-1.5">
                {m.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 size={11} className="text-purple-500/40 flex-shrink-0 mt-0.5" />
                    <span className="text-xs text-muted-foreground leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      <div className="mt-5 flex flex-col sm:flex-row items-center justify-center gap-3">
        <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/5 px-4 py-2 text-xs text-muted-foreground backdrop-blur-sm">
          <RefreshCw size={11} className="text-purple-400 animate-spin" style={{ animationDuration: '4s' }} />
          Sistem diperbarui secara aktif
        </div>
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-4 py-2 text-xs text-muted-foreground backdrop-blur-sm">
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
          </span>
          Semua fitur inti beroperasi normal
        </div>
      </div>
    </div>
  </section>
);

export default ProgressSection;
