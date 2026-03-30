import React from 'react';
import { Brain, Users2, Newspaper, LayoutDashboard, Globe2 } from 'lucide-react';

const directions = [
  { icon: Brain, num: '01', title: 'Penguatan AI & Knowledge', desc: 'Knowledge base lebih kaya, jawaban lebih akurat, confidence level lebih terkalibrasi.', color: 'purple' },
  { icon: Users2, num: '02', title: 'Ekosistem Kontributor', desc: 'Dashboard kontributor matang, sistem reward, dan komunitas threads yang aktif.', color: 'cyan' },
  { icon: Newspaper, num: '03', title: 'Pusat Informasi Masisir', desc: 'Berita kampus, notifikasi topik personal, jaringan kontributor dari berbagai universitas.', color: 'purple' },
  { icon: LayoutDashboard, num: '04', title: 'Life Tools Lebih Lengkap', desc: 'Ruang produktif adaptif, integrasi task-notes-reminder, pendamping kehidupan kampus.', color: 'cyan' },
];

const RoadmapSection = () => (
  <section className="relative bg-[#050509] py-8 md:py-20 px-4 md:px-6 overflow-hidden">
    <div className="pointer-events-none absolute inset-0 dot-grid opacity-40" />
    <div className="pointer-events-none absolute right-0 top-0 h-[400px] w-[400px] rounded-full blur-[140px]" style={{ background: 'hsl(185 80% 55% / 0.05)' }} />
    <div className="pointer-events-none absolute left-0 bottom-0 h-[300px] w-[300px] rounded-full blur-[120px]" style={{ background: 'hsl(270 60% 55% / 0.07)' }} />

    <div className="relative z-10 max-w-5xl mx-auto">
      <div className="mb-5 md:mb-14">
        <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/5 px-3 py-1 mb-3 backdrop-blur-sm">
          <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-cyan-300">Roadmap</span>
        </div>
        <h2 className="text-2xl md:text-4xl font-bold text-white leading-tight font-display">
          Ke mana{' '}
          <span className="text-gradient-purple-cyan">AINA akan tumbuh.</span>
        </h2>
        <p className="mt-2 text-xs md:text-sm text-muted-foreground max-w-xl">Arah nyata yang digerakkan oleh kebutuhan komunitas — bukan roadmap di atas kertas.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
        {directions.map((d, i) => {
          const Icon = d.icon;
          const isPurple = d.color === 'purple';
          return (
            <div key={i} className="group bg-[#0f0f18]/80 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-3 md:p-5 hover:border-purple-500/40 hover:bg-[#0f0f18] transition-all duration-300 relative overflow-hidden">
              <span className="pointer-events-none absolute -right-3 -top-3 select-none font-display text-[5rem] font-black leading-none" style={{ color: 'hsl(270 60% 55% / 0.04)' }}>
                {d.num}
              </span>
              <div className="relative flex items-start gap-3 mb-2.5">
                <div className={`w-8 h-8 rounded-xl flex items-center justify-center border flex-shrink-0 ${isPurple ? 'bg-purple-500/10 border-purple-500/20 text-purple-400' : 'bg-cyan-500/10 border-cyan-500/20 text-cyan-400'}`}>
                  <Icon size={14} />
                </div>
                <div>
                  <span className={`text-[10px] font-bold tracking-widest ${isPurple ? 'text-purple-400' : 'text-cyan-400'}`}>{d.num}</span>
                  <h3 className="text-sm font-bold text-white font-display leading-snug">{d.title}</h3>
                </div>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">{d.desc}</p>
            </div>
          );
        })}
      </div>

      {/* Vision */}
      <div className="bg-gradient-to-br from-[#1a0e30]/80 to-[#0f0f18]/80 backdrop-blur-sm border border-purple-500/25 rounded-2xl p-3 md:p-5 flex items-start gap-3 glow-purple-sm">
        <div className="w-9 h-9 rounded-xl bg-gradient-purple flex items-center justify-center flex-shrink-0 shadow-lg shadow-purple-500/30">
          <Globe2 size={16} className="text-white" />
        </div>
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-purple-500/15 border border-purple-500/25 text-purple-300">VISI UTAMA</span>
          </div>
          <h3 className="text-sm font-bold text-white mb-1 font-display">AINA sebagai pusat ekosistem digital Masisir</h3>
          <p className="text-xs text-muted-foreground leading-relaxed">Satu platform yang menghubungkan semua kebutuhan digital Masisir — informasi, komunikasi, layanan, dan pengembangan diri.</p>
        </div>
      </div>
    </div>
  </section>
);

export default RoadmapSection;
