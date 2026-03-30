import React from 'react';
import { Brain, Users2, Newspaper, LayoutDashboard, Globe2 } from 'lucide-react';

const directions = [
  {
    icon: Brain,
    num: '01',
    title: 'Penguatan AI & Knowledge',
    desc: 'Knowledge base lebih kaya, jawaban lebih akurat, confidence level lebih terkalibrasi.',
    color: 'purple',
  },
  {
    icon: Users2,
    num: '02',
    title: 'Ekosistem Kontributor',
    desc: 'Dashboard kontributor matang, sistem reward, dan komunitas threads yang aktif.',
    color: 'cyan',
  },
  {
    icon: Newspaper,
    num: '03',
    title: 'Pusat Informasi Masisir',
    desc: 'Berita kampus, notifikasi topik personal, jaringan kontributor dari berbagai universitas.',
    color: 'purple',
  },
  {
    icon: LayoutDashboard,
    num: '04',
    title: 'Life Tools Lebih Lengkap',
    desc: 'Ruang produktif yang adaptif, integrasi task-notes-reminder, pendamping kehidupan kampus.',
    color: 'cyan',
  },
];

const RoadmapSection = () => (
  <section className="bg-[#050509] py-8 md:py-20 px-4 md:px-6">
    <div className="max-w-5xl mx-auto">
      <div className="mb-5 md:mb-14">
        <span className="text-[10px] font-bold uppercase tracking-widest text-cyan-400">Roadmap</span>
        <h2 className="mt-2 text-2xl md:text-4xl font-bold text-white leading-tight">
          Ke mana{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">AINA akan tumbuh.</span>
        </h2>
        <p className="mt-2 text-xs md:text-sm text-slate-400 max-w-xl">Arah nyata yang digerakkan oleh kebutuhan komunitas — bukan roadmap di atas kertas.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
        {directions.map((d, i) => {
          const Icon = d.icon;
          const isPurple = d.color === 'purple';
          return (
            <div key={i} className="group bg-[#0c0c14] border border-purple-500/20 rounded-2xl p-3 md:p-5 hover:border-purple-500/20 transition-all duration-300">
              <div className="flex items-start gap-3 mb-3">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center border flex-shrink-0 ${isPurple ? 'bg-purple-500/10 border-purple-500/20 text-purple-400' : 'bg-cyan-500/10 border-cyan-500/20 text-cyan-400'}`}>
                  <Icon size={18} />
                </div>
                <div>
                  <span className={`text-[10px] font-bold tracking-widest ${isPurple ? 'text-purple-400' : 'text-cyan-400'}`}>{d.num}</span>
                  <h3 className="text-sm font-bold text-white leading-snug">{d.title}</h3>
                </div>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">{d.desc}</p>
            </div>
          );
        })}
      </div>

      {/* Vision */}
      <div className="bg-gradient-to-br from-[#140a28] to-[#0c0c14] border border-purple-500/20 rounded-2xl p-3 md:p-5 flex items-start gap-4">
        <div className="w-10 h-10 rounded-xl bg-purple-500/15 border border-purple-500/25 flex items-center justify-center flex-shrink-0">
          <Globe2 size={18} className="text-purple-400" />
        </div>
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-300">VISI UTAMA</span>
          </div>
          <h3 className="text-sm font-bold text-white mb-1.5">AINA sebagai pusat ekosistem digital Masisir</h3>
          <p className="text-xs text-slate-400 leading-relaxed">Satu platform yang menghubungkan semua kebutuhan digital Masisir — informasi, komunikasi, layanan, dan pengembangan diri. Dibangun bersama komunitas.</p>
        </div>
      </div>
    </div>
  </section>
);

export default RoadmapSection;
