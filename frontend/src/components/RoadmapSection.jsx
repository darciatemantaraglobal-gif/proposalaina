import React from 'react';
import { Sparkles, ShieldCheck, TrendingUp, Feather, Network, Map } from 'lucide-react';

const RoadmapSection = () => {
  const milestones = [
    {
      year: 'Fase 1: Digital Survival',
      title: 'Solusi Masalah Mendesak',
      icon: ShieldCheck,
      description:
        'Menyelesaikan "pain point" utama Masisir: Administrasi (Visa/Tasjil), Adaptasi Bahasa, & Kebutuhan Harian. Pondasi user growth tercepat.',
      glow: 'shadow-purple-500/20',
      color: 'purple'
    },
    {
      year: 'Fase 2: Growth Engine',
      title: 'Akselerasi Ekonomi',
      icon: TrendingUp,
      description:
        'Integrasi fitur komersial: Temantiket (Travel) & Booking Ahli. Membentuk model bisnis stabil antara edukasi dan marketplace jasa.',
      glow: 'shadow-cyan-500/20',
      color: 'cyan'
    },
    {
      year: 'Fase 3: Intellectual Renaissance',
      title: 'High-Level Academics',
      icon: Feather,
      description:
        'AI Research Assistant untuk S1–S3. Mempercepat skripsi, riset, & bedah Turats. Pasar niche dengan value & retensi tinggi.',
      glow: 'shadow-purple-500/20',
      color: 'purple'
    },
    {
      year: 'Fase 4: Global Super-Connector',
      title: 'Ekosistem Alumni Global',
      icon: Network,
      description:
        'Jaringan digital alumni Azhar lintas negara. Trust network untuk peluang bisnis global & diplomasi dakwah dalam satu platform.',
      glow: 'shadow-cyan-500/20',
      color: 'cyan'
    },
  ];

  return (
    <section className="relative bg-[#050509] py-16 md:py-24 px-4 md:px-8 overflow-hidden font-sans text-slate-300">
      
      {/* Background Ambient Glows */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-purple-900/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan-900/10 rounded-full blur-[100px] pointer-events-none" />
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMTM5LCA5MiwgMjQ2LCAwLjA1KSIvPjwvc3ZnPg==')] opacity-40 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12 md:mb-20">
          <div className="inline-flex items-center gap-2 mb-3 px-3 py-1 rounded-full bg-purple-900/20 border border-purple-500/20 backdrop-blur-sm">
            <Map size={12} className="text-cyan-400" />
            <span className="text-[10px] md:text-xs text-purple-200 font-bold uppercase tracking-widest">
              Grand Masterplan
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight">
            Visi Masa Depan <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Masisir</span>
          </h2>

          <p className="max-w-2xl mx-auto text-sm md:text-base text-slate-400 leading-relaxed">
            Bukan sekadar aplikasi, tapi peta jalan menuju peradaban digital mahasiswa Indonesia di Mesir.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Line */}
          {/* Mobile: Left aligned (left-4), Desktop: Center aligned (left-1/2) */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-cyan-500 to-purple-800 opacity-20 md:transform md:-translate-x-1/2 rounded-full" />

          {/* Items Wrapper */}
          <div className="flex flex-col gap-8 md:gap-0">
            {milestones.map((item, index) => {
              const Icon = item.icon;
              const isPurple = item.color === 'purple';
              
              return (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row items-start md:items-center w-full md:mb-12 ${
                    index % 2 !== 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Dot Indicator */}
                  <div className={`absolute left-4 md:left-1/2 w-3 h-3 md:w-4 md:h-4 bg-[#050509] border-2 rounded-full z-10 transform -translate-x-1/2 mt-5 md:mt-0 shadow-[0_0_15px_rgba(168,85,247,0.8)] ${isPurple ? 'border-purple-400' : 'border-cyan-400'}`} />

                  {/* Desktop Spacer (Empty half) */}
                  <div className="hidden md:block w-1/2" />

                  {/* Content Card Container */}
                  <div
                    className={`w-full md:w-1/2 pl-10 md:pl-0 ${
                      index % 2 !== 0 ? 'md:pr-12' : 'md:pl-12'
                    }`}
                  >
                    <div
                      className={`group relative bg-[#0e0e12] border border-white/5 p-5 md:p-8 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:bg-[#13131a] hover:${item.glow} hover:shadow-xl`}
                      style={{ borderColor: isPurple ? 'rgba(168,85,247,0.1)' : 'rgba(34,211,238,0.1)' }}
                    >
                      {/* Hover Gradient Blob */}
                      <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500 bg-gradient-to-br ${isPurple ? 'from-purple-500 to-transparent' : 'from-cyan-500 to-transparent'}`} />

                      <div className="relative z-10">
                        {/* Year/Phase Badge */}
                        <div className="flex items-center gap-2 mb-2 md:mb-3">
                          <Icon size={16} className={isPurple ? 'text-purple-400' : 'text-cyan-400'} />
                          <span className={`text-[10px] md:text-xs font-bold uppercase tracking-wider ${isPurple ? 'text-purple-300' : 'text-cyan-300'}`}>
                            {item.year}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="text-lg md:text-2xl font-bold text-white mb-2 group-hover:text-white transition-colors">
                          {item.title}
                        </h3>

                        {/* Description */}
                        <p className="text-xs md:text-sm text-slate-400 leading-relaxed border-l-2 border-white/5 pl-3 md:pl-4 group-hover:border-opacity-50 transition-colors"
                           style={{ borderLeftColor: isPurple ? 'rgba(168,85,247,0.3)' : 'rgba(34,211,238,0.3)' }}>
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Bottom - Updated (No Button) */}
        <div className="mt-16 md:mt-24 text-center">
          <div className="relative overflow-hidden rounded-2xl border border-purple-500/20 bg-gradient-to-r from-[#150a26] to-[#0a1820] p-8 md:p-12 shadow-2xl flex flex-col items-center justify-center">
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
            
            <div className="relative z-10 flex flex-col items-center gap-3">
               {/* Decorative Sparkles */}
               <Sparkles className="w-8 h-8 text-cyan-300 animate-pulse mb-2" />
               
               <h3 className="text-xl md:text-3xl font-bold text-white">
                 Masa Depan Dimulai Hari Ini.
               </h3>
               <p className="text-slate-400 text-xs md:text-sm max-w-lg mx-auto">
                 Jangan hanya menonton perubahan. Jadilah bagian dari pendiri ekosistem digital terbesar di Masisir.
               </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default RoadmapSection;