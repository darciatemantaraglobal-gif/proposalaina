import React from 'react';
import { Brain, Users2, Newspaper, LayoutDashboard, Globe2, Wrench, Clock, Rocket, CheckCircle2 } from 'lucide-react';

const phases = [
  {
    phase: 'Sedang Dikembangkan',
    icon: Wrench,
    phaseColor: 'text-cyan-400',
    phaseBg: 'bg-cyan-500/10 border-cyan-500/20',
    dot: 'bg-cyan-400',
    items: [
      {
        icon: Brain,
        title: 'Penguatan AI & Knowledge Base',
        desc: 'Knowledge base lebih dalam, jawaban AI makin akurat dan kontekstual.',
        tags: ['Knowledge Expansion', 'AI Quality', 'Accuracy'],
        color: 'purple',
      },
      {
        icon: Users2,
        title: 'Penguatan Ekosistem Komunitas',
        desc: 'Dashboard kontributor, verifikasi, dan threads komunitas dimatangkan penuh.',
        tags: ['Contributor System', 'Community Threads', 'Moderation'],
        color: 'cyan',
      },
    ],
  },
  {
    phase: 'Arah Dekat',
    icon: Clock,
    phaseColor: 'text-purple-400',
    phaseBg: 'bg-purple-500/10 border-purple-500/20',
    dot: 'bg-purple-400',
    items: [
      {
        icon: Newspaper,
        title: 'Penguatan Sistem Informasi Masisir',
        desc: 'Feed lebih terpusat, notifikasi personal, kontributor dari berbagai kampus.',
        tags: ['News Feed', 'Personalized Notif', 'Multi-campus'],
        color: 'purple',
      },
      {
        icon: LayoutDashboard,
        title: 'Penguatan Tools Kehidupan',
        desc: 'Task, notes, dan reminder lebih terintegrasi dalam satu ruang produktif.',
        tags: ['Productive Tools', 'Task Integration', 'Life System'],
        color: 'cyan',
      },
    ],
  },
  {
    phase: 'Visi Jangka Panjang',
    icon: Rocket,
    phaseColor: 'text-violet-400',
    phaseBg: 'bg-violet-500/10 border-violet-500/20',
    dot: 'bg-violet-400',
    items: [
      {
        icon: Globe2,
        title: 'AINA sebagai Pusat Ekosistem Digital Masisir',
        desc: 'Satu ekosistem untuk semua kebutuhan digital Masisir — informasi, AI, komunitas, dan layanan.',
        tags: ['Full Ecosystem', 'All-in-One Platform', 'Community Hub'],
        color: 'purple',
        isVision: true,
      },
    ],
  },
];

const RoadmapSection = () => (
  <section id="roadmap" className="relative bg-[#050509] py-8 md:py-20 px-6 md:px-8 overflow-hidden">
    <div className="pointer-events-none absolute inset-0 dot-grid opacity-40" />
    <div className="pointer-events-none absolute right-0 top-0 h-[400px] w-[400px] rounded-full blur-[140px]" style={{ background: 'hsl(185 80% 55% / 0.05)' }} />
    <div className="pointer-events-none absolute left-0 bottom-0 h-[300px] w-[300px] rounded-full blur-[120px]" style={{ background: 'hsl(270 60% 55% / 0.07)' }} />

    <div className="relative z-10 max-w-5xl mx-auto">

      {/* Header */}
      <div className="mb-6 md:mb-12 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/5 px-3 py-1 mb-3 backdrop-blur-sm">
          <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-cyan-300">Roadmap</span>
        </div>
        <h2 className="text-2xl md:text-4xl font-bold text-white leading-tight font-display">
          Sekarang, selanjutnya,{' '}
          <span className="text-gradient-purple-cyan">dan ke mana AINA menuju.</span>
        </h2>
        <p className="mt-2 text-xs md:text-sm text-muted-foreground max-w-xl mx-auto">Tiga fase yang jelas — bukan roadmap dekoratif.</p>
      </div>

      {/* Phase blocks */}
      <div className="space-y-5">
        {phases.map((phase, pi) => {
          const PhaseIcon = phase.icon;
          return (
            <div key={pi}>
              {/* Phase header */}
              <div className="flex items-center gap-3 mb-3">
                <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-[10px] font-bold ${phase.phaseBg}`}>
                  <span className={`w-1 h-1 rounded-full ${phase.dot} animate-pulse`} />
                  <span className={phase.phaseColor}>{phase.phase}</span>
                </div>
                <div className="h-px flex-1 bg-gradient-to-r from-purple-500/15 to-transparent" />
              </div>

              {/* Items */}
              <div className={`grid grid-cols-1 ${phase.items.length === 1 ? '' : 'sm:grid-cols-2'} gap-3`}>
                {phase.items.map((item, ii) => {
                  const Icon = item.icon;
                  const isPurple = item.color === 'purple';
                  return (
                    <div
                      key={ii}
                      className={`relative group rounded-2xl p-3 md:p-5 border backdrop-blur-sm overflow-hidden transition-all duration-300 hover:-translate-y-0.5 ${
                        item.isVision
                          ? 'bg-gradient-to-br from-[#1a0e30]/80 to-[#0f0f18]/80 border-purple-500/30 glow-purple-sm'
                          : 'bg-[#0f0f18]/80 border-purple-500/20 hover:border-purple-500/35 hover:bg-[#0f0f18]'
                      }`}
                    >
                      {/* Big ghost number */}
                      <span className="pointer-events-none absolute -right-3 -bottom-3 select-none font-display text-[5rem] font-black leading-none" style={{ color: 'hsl(270 60% 55% / 0.04)' }}>
                        {String(ii + 1 + pi * 2).padStart(2, '0')}
                      </span>
                      <div className="relative">
                        <div className="flex items-start gap-3 mb-2.5">
                          <div className={`w-8 h-8 rounded-xl flex items-center justify-center border flex-shrink-0 ${
                            item.isVision
                              ? 'bg-gradient-purple text-white border-purple-500/30 shadow-lg shadow-purple-500/20'
                              : isPurple
                                ? 'bg-purple-500/10 border-purple-500/20 text-purple-400'
                                : 'bg-cyan-500/10 border-cyan-500/20 text-cyan-400'
                          }`}>
                            <Icon size={14} />
                          </div>
                          <div>
                            <h3 className="text-sm font-bold text-white font-display leading-snug">{item.title}</h3>
                          </div>
                        </div>
                        <p className="text-xs text-muted-foreground leading-relaxed mb-3">{item.desc}</p>
                        <div className="flex flex-wrap gap-1.5">
                          {item.tags.map((tag, ti) => (
                            <span key={ti} className={`text-[9px] font-medium px-2 py-0.5 rounded-full border ${
                              item.isVision
                                ? 'bg-purple-500/10 border-purple-500/20 text-purple-300'
                                : isPurple
                                  ? 'bg-purple-500/8 border-purple-500/15 text-purple-400/80'
                                  : 'bg-cyan-500/8 border-cyan-500/15 text-cyan-400/80'
                            }`}>{tag}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom note */}
      <div className="mt-5 flex items-start gap-3 bg-[#0f0f18]/80 backdrop-blur-sm border border-purple-500/15 rounded-2xl p-3 md:p-4">
        <CheckCircle2 size={14} className="text-purple-400/60 flex-shrink-0 mt-0.5" />
        <p className="text-xs text-muted-foreground leading-relaxed">
          Roadmap ini bukan janji publik — ini arah internal yang terus disesuaikan dengan kebutuhan komunitas Masisir. Yang sudah disebutkan di bagian atas adalah yang <span className="text-white font-medium">sudah live dan bisa dicoba sekarang</span>.
        </p>
      </div>
    </div>
  </section>
);

export default RoadmapSection;
