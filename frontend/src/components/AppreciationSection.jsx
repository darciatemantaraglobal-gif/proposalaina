import React from 'react';
import { Heart, Award, Users, Zap, Star, Gift, Clock } from 'lucide-react';

const AppreciationSection = () => {
  const perks = [
    {
      icon: Zap,
      title: 'Account Premium',
      status: 'COMING SOON',
      desc: 'Akses ke fitur berbayar AINA saat rilis nanti.',
      color: 'cyan'
    },
    {
      icon: Star,
      title: 'Hall of Fame',
      status: 'COMING SOON',
      desc: 'Nama Anda abadi di halaman "Credits" aplikasi & website.',
      color: 'purple'
    },
    {
      icon: Users,
      title: 'Investor Circle',
      status: 'INVITE ONLY',
      desc: 'Grup WhatsApp khusus ring 1 untuk update perkembangan project.',
      color: 'cyan'
    },
    {
      icon: Gift,
      title: 'Beta Access',
      status: 'PRIORITY',
      desc: 'Jadilah orang pertama yang mencoba AINA sebelum publik.',
      color: 'purple'
    }
  ];

  return (
    <section className="relative bg-[#050509] py-20 px-6 font-sans text-slate-300 overflow-hidden">
      
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-900/20 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-pink-950/50 border border-pink-500/30 backdrop-blur-sm">
            <Heart size={12} className="text-pink-400" />
            <span className="text-[10px] md:text-xs text-pink-200 font-bold uppercase tracking-widest">
              Supporter Rewards
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Apresiasi <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">Pendukung Awal</span>
          </h2>
          <p className="max-w-2xl mx-auto text-sm md:text-base text-slate-400">
            Support AINA sekarang, dan nikmati previlege ini saat aplikasi resmi rilis!
          </p>
        </div>

        {/* Content Layout */}
        <div className="flex flex-col lg:flex-row gap-6 items-stretch justify-center">
          
          {/* LEFT: MAIN HERO CARD (Purple/Pink Theme) */}
          <div className="w-full lg:w-[40%]">
            <div className="relative h-full bg-gradient-to-b from-[#2e1065] to-[#0f0716] border border-purple-500/30 rounded-[2rem] p-8 flex flex-col items-center text-center shadow-[0_0_40px_-10px_rgba(168,85,247,0.3)] overflow-hidden group hover:border-purple-500/50 transition-all duration-500">
              
              {/* Inner Shine Effect */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 group-hover:opacity-30 transition-opacity"></div>

              <div className="relative z-10 mb-8 mt-4">
                <div className="w-36 h-36 mx-auto bg-gradient-to-br from-[#4c1d95] to-[#1e1b4b] rounded-[2.5rem] border-2 border-white/10 flex items-center justify-center shadow-2xl transform transition-transform group-hover:scale-105 group-hover:rotate-3">
                   <Award size={72} className="text-purple-200 drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]" />
                </div>
                {/* Floating Label */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-pink-500 to-purple-600 text-white text-[10px] font-bold px-4 py-1.5 rounded-full shadow-lg border border-white/20 whitespace-nowrap">
                  LIMITED SLOT
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white mb-2">Founding Supporter</h3>
              <p className="text-sm text-purple-200/70 mb-8 max-w-xs">
                Status kehormatan bagi Anda yang berani berinvestasi pada visi, sebelum melihat bukti.
              </p>

              {/* Progress Bar with Context */}
              <div className="w-full mt-auto bg-black/40 rounded-2xl p-5 border border-white/5 backdrop-blur-sm">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-bold text-purple-100">Funding Progress</span>
                  <span className="text-xs text-purple-300 font-mono">Loading...</span>
                </div>
                <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-pink-500 to-purple-500 w-[15%] relative rounded-full">
                    <div className="absolute inset-0 bg-white/30 animate-[shimmer_2s_infinite]"></div>
                  </div>
                </div>
                <p className="text-[10px] text-purple-200/50 mt-3 text-left leading-snug">
                  Dana digunakan 100% untuk pengembangan sistem & server AINA.
                </p>
              </div>

            </div>
          </div>

          {/* RIGHT: PERKS GRID */}
          <div className="w-full lg:w-[60%] grid grid-cols-2 gap-4">
            
            {perks.map((perk, index) => {
              const Icon = perk.icon;
              const isPurple = perk.color === 'purple';

              return (
                <div 
                  key={index}
                  className={`relative group rounded-[1.5rem] p-6 flex flex-col items-center justify-center text-center transition-all duration-300 hover:-translate-y-1 shadow-lg border border-white/5
                    ${isPurple 
                      ? 'bg-gradient-to-br from-[#2e1065]/60 to-[#0e0e12] hover:border-purple-500/40 hover:from-[#3b0764]/80' 
                      : 'bg-gradient-to-br from-[#083344]/60 to-[#0e0e12] hover:border-cyan-500/40 hover:from-[#164e63]/80'}
                  `}
                >
                  {/* Status Badge */}
                  <div className={`absolute top-4 right-4 px-2 py-0.5 rounded text-[8px] font-bold uppercase tracking-wider border backdrop-blur-md
                    ${isPurple 
                      ? 'bg-purple-900/40 text-purple-200 border-purple-500/30' 
                      : 'bg-cyan-900/40 text-cyan-200 border-cyan-500/30'}
                  `}>
                    <Clock size={8} className="inline mr-1 opacity-70" />
                    {perk.status}
                  </div>

                  {/* Icon Container */}
                  <div className={`w-14 h-14 mb-4 rounded-2xl flex items-center justify-center transition-all duration-300 border border-white/10
                    ${isPurple
                        ? 'bg-purple-500/20 text-purple-200 shadow-[0_0_20px_-5px_rgba(168,85,247,0.4)]'
                        : 'bg-cyan-500/20 text-cyan-200 shadow-[0_0_20px_-5px_rgba(34,211,238,0.4)]'}
                  `}>
                    <Icon size={24} />
                  </div>

                  <h4 className="text-sm md:text-base font-bold text-white mb-1.5">
                    {perk.title}
                  </h4>
                  <p className={`text-[10px] md:text-xs leading-tight ${isPurple ? 'text-purple-200/60' : 'text-cyan-200/60'}`}>
                    {perk.desc}
                  </p>
                </div>
              );
            })}

            {/* Bottom Wide Card (Amal Jariyah) - Pink Theme */}
            <div className="col-span-2 bg-gradient-to-r from-[#500724] to-[#1a0510] border border-pink-500/30 rounded-[1.5rem] p-6 flex items-center gap-5 relative overflow-hidden group hover:border-pink-400/50 transition-all hover:shadow-[0_0_30px_-10px_rgba(236,72,153,0.3)]">
               
               <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
               
               <div className="relative z-10 w-12 h-12 rounded-full bg-pink-500/20 flex items-center justify-center shrink-0 border border-pink-400/30 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(236,72,153,0.4)]">
                  <Heart size={20} className="text-pink-300 fill-pink-500/50 animate-pulse" />
               </div>
               
               <div className="relative z-10">
                  <h4 className="text-sm md:text-base font-bold text-white mb-1">Nilai Terpenting = Amal Jariyah</h4>
                  <p className="text-xs text-pink-200/70 max-w-lg">
                    Setiap baris kode yang membantu mahasiswa belajar agama, insyaAllah menjadi aliran pahala abadi bagi Anda.
                  </p>
               </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default AppreciationSection;