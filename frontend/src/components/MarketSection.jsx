import React from 'react';
import { Users, TrendingUp, GraduationCap, Smartphone, FileText, Target, BarChart3 } from 'lucide-react';

const MarketSection = () => {
  const marketData = [
    {
      icon: Users,
      title: 'Total Market',
      stat: '10K+',
      sub: 'Mahasiswa Aktif',
      desc: 'Pengguna inti saat ini.',
      color: 'purple'
    },
    {
      icon: TrendingUp,
      title: 'Growth/Year',
      stat: '1.5K+',
      sub: 'Mahasiswa Baru',
      desc: 'Arus pengguna baru stabil.',
      color: 'cyan'
    },
    {
      icon: GraduationCap,
      title: 'Expansion',
      stat: '15K+',
      sub: 'Alumni Indo',
      desc: 'Potensi jangka panjang.',
      color: 'purple'
    },
    {
      icon: Smartphone,
      title: 'Behavior',
      stat: '95%',
      sub: 'Mobile First',
      desc: 'Akses utama via HP.',
      color: 'cyan'
    },
    {
      icon: FileText,
      title: 'Pain Point',
      stat: '90%',
      sub: 'Butuh Admin',
      desc: 'Kesulitan birokrasi.',
      color: 'purple'
    },
    {
      icon: Target,
      title: 'Penetration',
      stat: '100%',
      sub: 'Relevansi',
      desc: 'Produk "Must-have".',
      color: 'cyan'
    }
  ];

  return (
    <section className="relative bg-[#050509] py-16 px-4 md:px-8 overflow-hidden font-sans">
      
      {/* Background Ambient Glows */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-purple-900/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan-900/10 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="relative z-10 max-w-6xl mx-auto">
        
        {/* Header - Compact */}
        <div className="text-center mb-10 md:mb-14">
          <div className="inline-flex items-center gap-2 mb-3 px-3 py-1 rounded-full bg-purple-900/20 border border-purple-500/20 backdrop-blur-md">
            <BarChart3 className="w-3.5 h-3.5 text-cyan-400" />
            <span className="text-[10px] md:text-xs font-bold text-purple-200 uppercase tracking-widest">Market Insight</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-3">
            Potensi Pasar <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">AINA</span>
          </h2>
          
          <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base">
            Pasar besar, bertumbuh, dan sangat membutuhkan solusi ini.
          </p>
        </div>

        {/* Compact Grid System */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5 mb-12">
          {marketData.map((item, index) => {
            const Icon = item.icon;
            const isPurple = item.color === 'purple';
            
            return (
              <div 
                key={index}
                className="group relative bg-[#0e0e12] border border-white/5 rounded-2xl p-4 md:p-6 transition-all duration-300 hover:border-opacity-50 hover:-translate-y-1 hover:shadow-lg"
                style={{ borderColor: isPurple ? 'rgba(168,85,247,0.2)' : 'rgba(34,211,238,0.2)' }}
              >
                {/* Hover Glow */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500 bg-gradient-to-br ${isPurple ? 'from-purple-500 to-transparent' : 'from-cyan-500 to-transparent'}`} />

                <div className="relative z-10 flex flex-col h-full justify-between">
                  {/* Top: Icon & Title */}
                  <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-3 mb-3 md:mb-4">
                    <div className={`w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-lg md:rounded-xl ${isPurple ? 'bg-purple-500/10 text-purple-400' : 'bg-cyan-500/10 text-cyan-400'}`}>
                      <Icon className="w-4 h-4 md:w-5 md:h-5" />
                    </div>
                    <span className="text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-wider">
                      {item.title}
                    </span>
                  </div>

                  {/* Middle: Stat */}
                  <div>
                    <h3 className={`text-2xl md:text-4xl font-bold mb-1 ${isPurple ? 'text-white' : 'text-white'}`}>
                      {item.stat}
                    </h3>
                    <p className={`text-xs md:text-sm font-semibold ${isPurple ? 'text-purple-300' : 'text-cyan-300'}`}>
                      {item.sub}
                    </p>
                  </div>

                  {/* Bottom: Desc */}
                  <div className="mt-3 pt-3 border-t border-white/5">
                    <p className="text-[10px] md:text-xs text-slate-400 leading-snug">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner - Compact (No Button) */}
        <div className="relative w-full rounded-2xl overflow-hidden bg-gradient-to-r from-[#150a26] to-[#0a1820] border border-white/10 p-6 md:p-8 flex items-center justify-center text-center shadow-xl">
          <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
          
          <div className="relative z-10">
            <h3 className="text-lg md:text-2xl font-bold text-white mb-1">
              Market Validation: <span className="text-cyan-400">Valid & Urgent.</span>
            </h3>
            <p className="text-slate-300 text-xs md:text-sm">
              Kebutuhan pasti + Pasar besar = <span className="text-white font-semibold">Product-Market Fit.</span>
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default MarketSection;