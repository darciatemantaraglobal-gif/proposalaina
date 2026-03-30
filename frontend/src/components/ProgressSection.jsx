import React from 'react';
import { CheckCircle2, RefreshCw, Database, Layers, Cpu, Users2 } from 'lucide-react';

const milestones = [
  {
    icon: Database,
    phase: 'Fondasi Sistem',
    status: 'selesai',
    dot: 'bg-emerald-400',
    badge: 'bg-emerald-500/15 border-emerald-500/30 text-emerald-300',
    label: 'SELESAI',
    items: ['Backend API stabil', 'Database & autentikasi siap', 'Frontend terstruktur'],
  },
  {
    icon: Layers,
    phase: 'Fitur Inti',
    status: 'live',
    dot: 'bg-cyan-400',
    badge: 'bg-cyan-500/15 border-cyan-500/30 text-cyan-300',
    label: 'LIVE',
    items: ['AI Chat, Knowledge Base, Source Transparency', 'Berita, Threads, Ruang Produktif', 'Saved Answers & Contributor System'],
  },
  {
    icon: Cpu,
    phase: 'Penguatan',
    status: 'aktif',
    dot: 'bg-purple-400',
    badge: 'bg-purple-500/15 border-purple-500/30 text-purple-300',
    label: 'AKTIF',
    items: ['Personalisasi & response style', 'Kualitas knowledge base ditingkatkan', 'UX diperhalus'],
  },
  {
    icon: Users2,
    phase: 'Ekosistem Komunitas',
    status: 'berkembang',
    dot: 'bg-violet-400',
    badge: 'bg-violet-500/15 border-violet-500/30 text-violet-300',
    label: 'BERKEMBANG',
    items: ['Contributor dashboard aktif', 'Jaringan diskusi Masisir tumbuh', 'Menuju pusat ekosistem digital'],
  },
];

const stats = [
  { value: '8', label: 'Fitur Live', color: 'text-emerald-400' },
  { value: '5', label: 'Layer Sistem', color: 'text-cyan-400' },
  { value: '4', label: 'Fase Dev', color: 'text-purple-400' },
  { value: '∞', label: 'Ruang Tumbuh', color: 'text-violet-400' },
];

const ProgressSection = () => (
  <section className="bg-[#050509] py-14 md:py-20 px-4 md:px-6">
    <div className="max-w-5xl mx-auto">
      <div className="mb-10 md:mb-14">
        <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400">Progress</span>
        <h2 className="mt-2 text-3xl md:text-4xl font-bold text-white leading-tight">
          AINA bukan konsep.{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Ini produk yang sedang tumbuh.</span>
        </h2>
        <p className="mt-3 text-sm text-slate-400 max-w-xl">Fondasi sudah dibangun, fitur inti sudah live, dan sistem terus disempurnakan setiap harinya.</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
        {stats.map((s, i) => (
          <div key={i} className="bg-[#0c0c14] border border-white/6 rounded-2xl px-4 py-4 text-center">
            <p className={`text-2xl font-bold ${s.color}`}>{s.value}</p>
            <p className="text-xs text-slate-500 mt-1">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Milestones */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {milestones.map((m, i) => {
          const Icon = m.icon;
          return (
            <div key={i} className="bg-[#0c0c14] border border-white/6 rounded-2xl p-4">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-white/4 border border-white/8 flex items-center justify-center text-slate-400 flex-shrink-0">
                    <Icon size={16} />
                  </div>
                  <p className="text-sm font-bold text-white">{m.phase}</p>
                </div>
                <span className={`text-[9px] font-bold px-2 py-0.5 rounded-md border whitespace-nowrap ${m.badge}`}>
                  <span className={`inline-block w-1.5 h-1.5 rounded-full ${m.dot} mr-1 align-middle`} />
                  {m.label}
                </span>
              </div>
              <ul className="space-y-1.5">
                {m.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 size={12} className="text-slate-600 flex-shrink-0 mt-0.5" />
                    <span className="text-xs text-slate-400 leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/5 bg-white/4 px-4 py-2 text-xs text-slate-400">
          <RefreshCw size={12} className="text-purple-400 animate-spin" style={{ animationDuration: '4s' }} />
          Sistem diperbarui secara aktif
        </div>
        <div className="inline-flex items-center gap-2 rounded-full border border-white/5 bg-white/4 px-4 py-2 text-xs text-slate-400">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          Semua fitur inti beroperasi normal
        </div>
      </div>
    </div>
  </section>
);

export default ProgressSection;
