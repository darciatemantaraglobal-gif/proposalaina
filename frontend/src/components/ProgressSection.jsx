import React from 'react';
import { CheckCircle2, RefreshCw, Layers, Database, Cpu, Users2 } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const milestones = [
  {
    icon: Database,
    phase: 'Fondasi Sistem',
    status: 'selesai',
    color: 'emerald',
    items: [
      'Backend API berjalan stabil',
      'Database & autentikasi siap',
      'Struktur frontend terorganisir',
    ],
  },
  {
    icon: Layers,
    phase: 'Fitur Inti',
    status: 'live',
    color: 'cyan',
    items: [
      'AI Chat, Knowledge Base, Source Transparency',
      'Berita, Threads, Ruang Produktif',
      'Saved Answers & Contributor System',
    ],
  },
  {
    icon: Cpu,
    phase: 'Penguatan & Penyempurnaan',
    status: 'aktif',
    color: 'purple',
    items: [
      'Personalisasi & response style',
      'Kualitas knowledge base ditingkatkan',
      'Pengalaman pengguna diperhalus',
    ],
  },
  {
    icon: Users2,
    phase: 'Ekosistem Komunitas',
    status: 'berkembang',
    color: 'purple',
    items: [
      'Contributor dashboard aktif',
      'Jaringan diskusi Masisir tumbuh',
      'Roadmap ke pusat ekosistem digital',
    ],
  },
];

const statusConfig = {
  selesai: { label: 'SELESAI', bg: 'bg-emerald-500/15 border-emerald-500/30 text-emerald-300', dot: 'bg-emerald-400' },
  live: { label: 'LIVE', bg: 'bg-cyan-500/15 border-cyan-500/30 text-cyan-300', dot: 'bg-cyan-400' },
  aktif: { label: 'AKTIF', bg: 'bg-purple-500/15 border-purple-500/30 text-purple-300', dot: 'bg-purple-400' },
  berkembang: { label: 'BERKEMBANG', bg: 'bg-violet-500/15 border-violet-500/30 text-violet-300', dot: 'bg-violet-400' },
};

const ProgressSection = () => {
  const readyCount = 8;

  return (
    <section className="relative overflow-hidden bg-black py-24 px-6 md:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#130f2b] via-[#050509] to-black" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMTIwLCAxMDAsIDI1NSwgMC4wNykiLz48L3N2Zz4=')] opacity-40" />

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-950/30 px-4 py-1.5 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500" />
            </span>
            <span className="text-xs font-medium uppercase tracking-[0.16em] text-purple-100">
              Sistem Aktif & Berkembang
            </span>
          </div>

          <h2 className="mb-4 text-4xl font-bold tracking-tight text-white md:text-5xl">
            AINA Bukan Konsep.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              Ini Produk yang Sedang Tumbuh.
            </span>
          </h2>

          <p className="mx-auto max-w-2xl text-sm md:text-base text-slate-400 mt-4 leading-relaxed">
            Fondasi sudah dibangun, fitur inti sudah berjalan, dan sistem terus disempurnakan setiap harinya bersama komunitas Masisir.
          </p>
        </div>

        {/* Stats row */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {[
            { value: readyCount, label: 'Fitur Core Live', color: 'text-emerald-400' },
            { value: '5', label: 'Layer Sistem', color: 'text-cyan-400' },
            { value: '4', label: 'Fase Pengembangan', color: 'text-purple-400' },
            { value: '∞', label: 'Ruang untuk Berkembang', color: 'text-violet-400' },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center bg-[#0a0a12] border border-white/8 rounded-2xl px-8 py-5 min-w-[140px]">
              <span className={`text-3xl font-bold ${stat.color}`}>{stat.value}</span>
              <span className="text-xs text-slate-500 mt-1 text-center">{stat.label}</span>
            </div>
          ))}
        </div>

        {/* Milestone cards */}
        <div className="relative">
          {/* connector line desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500/40 via-cyan-500/20 to-transparent -translate-x-1/2" />

          <div className="grid gap-5 md:grid-cols-2">
            {milestones.map((m, i) => {
              const Icon = m.icon;
              const cfg = statusConfig[m.status];
              const isPurple = m.color === 'purple';

              return (
                <Card
                  key={i}
                  className="group relative overflow-hidden rounded-2xl border border-white/8 bg-[#0a0a12]/80 backdrop-blur-md transition-all duration-300 hover:border-purple-500/25 hover:bg-[#0f0f1a]"
                >
                  <CardContent className="relative flex flex-col gap-4 p-6">
                    {/* Top row */}
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div className={`flex h-11 w-11 items-center justify-center rounded-xl border flex-shrink-0 ${
                          isPurple ? 'bg-purple-500/10 border-purple-500/20 text-purple-400' : 'bg-cyan-500/10 border-cyan-500/20 text-cyan-400'
                        }`}>
                          <Icon className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Fase {i + 1}</p>
                          <h4 className="text-base font-bold text-white leading-snug">{m.phase}</h4>
                        </div>
                      </div>
                      <span className={`text-[10px] font-bold px-2.5 py-1 rounded-md border whitespace-nowrap ${cfg.bg}`}>
                        <span className={`inline-block w-1.5 h-1.5 rounded-full ${cfg.dot} mr-1.5 align-middle`} />
                        {cfg.label}
                      </span>
                    </div>

                    {/* Items */}
                    <ul className="space-y-2">
                      {m.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-400 group-hover:text-slate-300 transition-colors">
                          <CheckCircle2 className={`h-4 w-4 flex-shrink-0 mt-0.5 ${isPurple ? 'text-purple-500' : 'text-cyan-500'}`} />
                          <span className="leading-snug">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Status bar */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
          <div className="inline-flex items-center gap-3 rounded-full border border-white/5 bg-white/5 px-5 py-2.5 text-xs text-slate-300 backdrop-blur-xl">
            <RefreshCw size={13} className="text-purple-400 animate-spin" style={{ animationDuration: '4s' }} />
            Sistem terus diperbarui secara aktif.
          </div>
          <div className="inline-flex items-center gap-3 rounded-full border border-white/5 bg-white/5 px-5 py-2.5 text-xs text-slate-300 backdrop-blur-xl">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            Semua fitur inti beroperasi normal.
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgressSection;
