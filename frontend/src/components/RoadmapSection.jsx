import React from 'react';
import { Brain, Users2, Newspaper, LayoutDashboard, Globe2, Map } from 'lucide-react';

const milestones = [
  {
    phase: 'Arah 1',
    icon: Brain,
    title: 'Penguatan AI & Kualitas Knowledge',
    color: 'purple',
    desc: 'Memastikan setiap jawaban AINA benar-benar akurat, relevan, dan terpercaya. Fokus pada peningkatan knowledge base, kedalaman source transparency, dan kalibrasi confidence level per jawaban.',
    points: [
      'Enrichment knowledge base bersama kontributor',
      'Peningkatan relevansi dan akurasi jawaban AI',
      'Penyempurnaan indikator sumber & confidence',
    ],
  },
  {
    phase: 'Arah 2',
    icon: Users2,
    title: 'Penguatan Komunitas & Kontributor',
    color: 'cyan',
    desc: 'Membangun ekosistem kontributor yang aktif dan sehat — Masisir yang ikut memperkaya knowledge, moderasi diskusi, dan membantu sesama melalui threads dan Q&A.',
    points: [
      'Contributor dashboard yang matang',
      'Sistem reward dan pengakuan kontributor aktif',
      'Komunitas threads yang termoderasi dengan baik',
    ],
  },
  {
    phase: 'Arah 3',
    icon: Newspaper,
    title: 'Penguatan Berita & Informasi Masisir',
    color: 'purple',
    desc: 'Menjadikan AINA sebagai sumber informasi terpercaya dan terkini untuk Masisir — kampus, birokrasi, komunitas, dan kehidupan sehari-hari di Mesir.',
    points: [
      'Kategorisasi berita yang lebih lengkap',
      'Sistem notifikasi topik yang bisa dipersonalisasi',
      'Jaringan kontributor berita dari berbagai universitas',
    ],
  },
  {
    phase: 'Arah 4',
    icon: LayoutDashboard,
    title: 'Penguatan Produktivitas & Life Tools',
    color: 'cyan',
    desc: 'Menyempurnakan fitur-fitur yang membantu Masisir mengelola kehidupan sehari-hari — dari tracking target belajar hingga pengingat hal-hal penting di Mesir.',
    points: [
      'Ruang Produktif yang lebih personal dan adaptif',
      'Integrasi antara saved answers, tasks, dan pengingat',
      'Tools pendamping kehidupan kampus & administratif',
    ],
  },
  {
    phase: 'Visi Jangka Panjang',
    icon: Globe2,
    title: 'AINA sebagai Pusat Ekosistem Digital Masisir',
    color: 'purple',
    desc: 'Cita-cita jangka panjang AINA adalah menjadi satu platform yang menghubungkan semua kebutuhan digital Masisir — dari informasi, komunikasi, layanan, hingga pengembangan diri.',
    points: [
      'Direktori layanan dan koneksi komunitas Kairo',
      'Platform kolaborasi akademik dan sosial Masisir',
      'Ekosistem terbuka yang bisa dikembangkan bersama',
    ],
  },
];

const RoadmapSection = () => {
  return (
    <section className="relative bg-[#050509] py-16 md:py-24 px-4 md:px-8 overflow-hidden font-sans text-slate-300">
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-purple-900/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan-900/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMTM5LCA5MiwgMjQ2LCAwLjA1KSIvPjwvc3ZnPg==')] opacity-40 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-20">
          <div className="inline-flex items-center gap-2 mb-3 px-3 py-1 rounded-full bg-purple-900/20 border border-purple-500/20 backdrop-blur-sm">
            <Map size={12} className="text-cyan-400" />
            <span className="text-[10px] md:text-xs text-purple-200 font-bold uppercase tracking-widest">
              Arah Pengembangan
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Ke Mana{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              AINA Akan Tumbuh
            </span>
            ?
          </h2>

          <p className="max-w-2xl mx-auto text-sm md:text-base text-slate-400 leading-relaxed">
            Roadmap AINA bukan daftar fitur keren di atas kertas — ini arah nyata yang digerakkan oleh kebutuhan komunitas Masisir.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-cyan-500 to-purple-800 opacity-20 md:-translate-x-1/2 rounded-full" />

          <div className="flex flex-col gap-8 md:gap-0">
            {milestones.map((item, index) => {
              const Icon = item.icon;
              const isPurple = item.color === 'purple';
              const isLast = index === milestones.length - 1;

              return (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row items-start md:items-center w-full md:mb-12 ${
                    index % 2 !== 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Dot */}
                  <div className={`absolute left-4 md:left-1/2 w-3 h-3 md:w-4 md:h-4 bg-[#050509] border-2 rounded-full z-10 -translate-x-1/2 mt-5 md:mt-0 ${
                    isLast
                      ? 'shadow-[0_0_20px_rgba(168,85,247,1)] border-purple-300'
                      : isPurple
                        ? 'shadow-[0_0_12px_rgba(168,85,247,0.6)] border-purple-400'
                        : 'shadow-[0_0_12px_rgba(34,211,238,0.6)] border-cyan-400'
                  }`} />

                  {/* Desktop spacer */}
                  <div className="hidden md:block w-1/2" />

                  {/* Card */}
                  <div className={`w-full md:w-1/2 pl-10 md:pl-0 ${index % 2 !== 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                    <div
                      className={`group relative p-5 md:p-7 rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:bg-[#13131a] ${
                        isLast ? 'bg-gradient-to-br from-[#1a0e30] to-[#0e0e12]' : 'bg-[#0e0e12]'
                      }`}
                      style={{ borderColor: isLast ? 'rgba(168,85,247,0.3)' : isPurple ? 'rgba(168,85,247,0.1)' : 'rgba(34,211,238,0.1)' }}
                    >
                      <div className={`absolute inset-0 opacity-0 group-hover:opacity-[0.07] rounded-2xl transition-opacity duration-500 bg-gradient-to-br ${isPurple ? 'from-purple-500' : 'from-cyan-500'} to-transparent`} />

                      <div className="relative z-10">
                        <div className="flex items-center gap-2 mb-2">
                          <Icon size={15} className={isPurple ? 'text-purple-400' : 'text-cyan-400'} />
                          <span className={`text-[10px] font-bold uppercase tracking-wider ${isPurple ? 'text-purple-300' : 'text-cyan-300'}`}>
                            {item.phase}
                          </span>
                          {isLast && (
                            <span className="ml-1 text-[9px] font-bold px-2 py-0.5 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-300">
                              VISI UTAMA
                            </span>
                          )}
                        </div>

                        <h3 className="text-lg md:text-xl font-bold text-white mb-2">{item.title}</h3>

                        <p className="text-xs md:text-sm text-slate-400 leading-relaxed mb-4 border-l-2 pl-3"
                           style={{ borderLeftColor: isPurple ? 'rgba(168,85,247,0.3)' : 'rgba(34,211,238,0.3)' }}>
                          {item.desc}
                        </p>

                        <ul className="space-y-1.5">
                          {item.points.map((point, pi) => (
                            <li key={pi} className="flex items-start gap-2 text-xs text-slate-500 group-hover:text-slate-400 transition-colors">
                              <span className={`mt-1.5 h-1.5 w-1.5 rounded-full flex-shrink-0 ${isPurple ? 'bg-purple-500' : 'bg-cyan-400'}`} />
                              {point}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Closing note */}
        <div className="mt-16 text-center">
          <div className="relative inline-block">
            <div className="absolute -inset-px bg-gradient-to-r from-purple-900/40 to-cyan-900/20 rounded-2xl blur opacity-50" />
            <div className="relative bg-[#0e0e12] border border-white/8 rounded-2xl px-8 py-6 max-w-2xl">
              <Globe2 size={24} className="text-purple-400 mx-auto mb-3" />
              <p className="text-sm text-slate-300 leading-relaxed">
                Arah pengembangan ini ditentukan bukan oleh agenda bisnis semata, tapi oleh{' '}
                <span className="text-white font-semibold">apa yang benar-benar dibutuhkan komunitas Masisir</span>.
                Semakin banyak yang terlibat, semakin baik AINA bisa berkembang.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;
