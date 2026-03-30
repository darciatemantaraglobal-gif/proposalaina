import React from 'react';
import { CheckCircle2, RefreshCw, Database, Layers, Cpu, Users2, Clock, Wrench } from 'lucide-react';

const milestones = [
  {
    icon: Database,
    phase: 'Fondasi Sistem',
    status: 'done',
    badge: 'bg-emerald-500/10 border-emerald-500/20 text-emerald-300',
    dot: 'bg-emerald-400',
    label: 'SELESAI',
    items: [
      'Backend API dibangun dan stabil',
      'Database, autentikasi, dan infrastruktur siap',
      'Frontend terstruktur dan berjalan',
    ],
  },
  {
    icon: Layers,
    phase: 'Fitur Inti — Semua Live',
    status: 'live',
    badge: 'bg-cyan-500/10 border-cyan-500/20 text-cyan-300',
    dot: 'bg-cyan-400',
    label: 'LIVE',
    items: [
      'AI Chat dengan knowledge-based answering',
      'Source transparency & confidence level',
      'Berita, Threads, Ruang Produktif, Saved Answers',
      'Contributor System & Dashboard terpusat',
    ],
  },
  {
    icon: Wrench,
    phase: 'Penguatan Aktif',
    status: 'active',
    badge: 'bg-purple-500/10 border-purple-500/20 text-purple-300',
    dot: 'bg-purple-400',
    label: 'SEDANG BERJALAN',
    items: [
      'Kualitas knowledge base terus diperkaya',
      'Personalisasi & response style diperhalus',
      'UX dan performa sistem dioptimalkan',
    ],
  },
  {
    icon: Clock,
    phase: 'Pengembangan Selanjutnya',
    status: 'next',
    badge: 'bg-violet-500/10 border-violet-500/20 text-violet-300',
    dot: 'bg-violet-400',
    label: 'DALAM PIPELINE',
    items: [
      'Ekosistem kontributor lebih matang',
      'Sistem informasi Masisir lebih terpusat',
      'Integrasi tools kehidupan lebih dalam',
    ],
  },
];

const stats = [
  {
    value: '12',
    label: 'Fitur Live',
    sub: 'Semua aktif & berjalan',
    style: { background: 'linear-gradient(135deg, hsl(270 60% 55%), hsl(185 80% 55%))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' },
  },
  {
    value: '5',
    label: 'Layer Sistem',
    sub: 'Knowledge → Growth',
    style: { color: 'hsl(185 80% 65%)' },
  },
  {
    value: '4',
    label: 'Fase Dev',
    sub: 'Tiga sudah dilewati',
    style: { color: 'hsl(270 60% 65%)' },
  },
  {
    value: '100%',
    label: 'Core Selesai',
    sub: 'Dibangun, diuji, live',
    style: { color: 'hsl(145 60% 55%)' },
  },
];

const ProgressSection = () => (
  <section className="relative bg-[#050509] py-8 md:py-20 px-6 md:px-8 overflow-hidden">
    <div className="pointer-events-none absolute inset-0 dot-grid opacity-40" />
    <div className="pointer-events-none absolute left-0 top-1/2 h-[450px] w-[450px] -translate-y-1/2 rounded-full blur-[140px]" style={{ background: 'hsl(270 60% 55% / 0.07)' }} />

    <div className="relative z-10 max-w-5xl mx-auto">

      {/* Header */}
      <div className="mb-6 md:mb-12 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/5 px-3 py-1 mb-3 backdrop-blur-sm">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
          </span>
          <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-emerald-300">Status Sistem — Live</span>
        </div>
        <h2 className="text-2xl md:text-4xl font-bold text-white leading-tight font-display">
          Dibangun. Diuji.{' '}
          <span className="text-gradient-purple-cyan">Berjalan sekarang.</span>
        </h2>
        <p className="mt-2 text-xs md:text-sm text-muted-foreground max-w-xl mx-auto">Bukan mockup atau prototipe. Sistem aktif beroperasi dan terus disempurnakan.</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-5">
        {stats.map((s, i) => (
          <div key={i} className="bg-[#0f0f18]/80 backdrop-blur-sm border border-purple-500/20 rounded-2xl px-3 py-3.5 text-center">
            <p className="text-2xl font-black font-display" style={s.style}>{s.value}</p>
            <p className="text-xs font-semibold text-white mt-1">{s.label}</p>
            <p className="text-[10px] text-muted-foreground/50 mt-0.5">{s.sub}</p>
          </div>
        ))}
      </div>

      {/* Timeline milestones */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
        {milestones.map((m, i) => {
          const Icon = m.icon;
          const isDone = m.status === 'done';
          const isLive = m.status === 'live';
          return (
            <div key={i} className={`bg-[#0f0f18]/80 backdrop-blur-sm border rounded-2xl p-3 md:p-4 transition-colors ${
              isLive ? 'border-cyan-500/25 hover:border-cyan-500/35' : 'border-purple-500/20 hover:border-purple-500/30'
            }`}>
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2.5">
                  <div className={`w-8 h-8 rounded-xl flex items-center justify-center border flex-shrink-0 ${
                    isDone ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400'
                    : isLive ? 'bg-cyan-500/10 border-cyan-500/20 text-cyan-400'
                    : 'bg-purple-500/10 border-purple-500/20 text-purple-400'
                  }`}>
                    <Icon size={14} />
                  </div>
                  <p className="text-sm font-bold text-white font-display leading-tight">{m.phase}</p>
                </div>
                <span className={`text-[9px] font-bold px-2 py-0.5 rounded-md border whitespace-nowrap flex items-center gap-1 flex-shrink-0 ${m.badge}`}>
                  <span className={`inline-block w-1 h-1 rounded-full ${m.dot} ${isLive ? 'animate-pulse' : ''}`} />
                  {m.label}
                </span>
              </div>
              <ul className="space-y-1.5">
                {m.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 size={11} className={`flex-shrink-0 mt-0.5 ${isDone || isLive ? 'text-emerald-500/60' : 'text-purple-500/40'}`} />
                    <span className="text-xs text-muted-foreground leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      {/* Status bar */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
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
        <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 px-4 py-2 text-xs text-muted-foreground backdrop-blur-sm">
          <Cpu size={11} className="text-cyan-400" />
          AI engine aktif & responsif
        </div>
      </div>
    </div>
  </section>
);

export default ProgressSection;
