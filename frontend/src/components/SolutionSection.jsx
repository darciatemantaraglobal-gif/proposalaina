import React from 'react';
import { Lightbulb, Brain, Globe, BookOpen, Heart, Zap, Sparkles, Bot, CheckCircle2 } from 'lucide-react';

const SolutionSection = () => {
  const capabilities = [
    { 
      icon: Globe, 
      text: 'Konteks Lokal Mesir', 
      desc: 'Paham ritme birokrasi, musim, & aturan lokal.',
      color: 'purple'
    },
    { 
      icon: Heart, 
      text: 'Kultur Masisir', 
      desc: 'Relate dengan gaya hidup & bahasa anak Azhar.',
      color: 'cyan'
    },
    { 
      icon: BookOpen, 
      text: 'Pakar Administrasi', 
      desc: 'Panduan step-by-step Visa, Tasjil & Iqamah.',
      color: 'purple'
    },
    { 
      icon: Brain, 
      text: 'Asisten Akademik', 
      desc: 'Bantu bedah kitab, rangkuman & persiapan ujian.',
      color: 'cyan'
    },
    { 
      icon: Zap, 
      text: 'Bahasa & Fikih', 
      desc: 'Diskusi mendalam materi Turats & Bahasa Arab.',
      color: 'purple'
    },
    { 
      icon: Lightbulb, 
      text: 'Survival Guide', 
      desc: 'Navigasi hidup, belanja, hingga info kesehatan.',
      color: 'cyan'
    }
  ];

  return (
    <section className="relative bg-[#050509] py-24 px-6 font-sans text-slate-300 overflow-hidden">
      
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 -left-40 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 -right-40 w-[600px] h-[600px] bg-cyan-900/10 rounded-full blur-[120px] pointer-events-none" />
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMTM5LCA5MiwgMjQ2LCAwLjA1KSIvPjwvc3ZnPg==')] opacity-40 pointer-events-none" />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-16 lg:flex-row lg:items-center">
        
        {/* LEFT: AINA Holographic Dashboard */}
        <div className="w-full max-w-md mx-auto lg:mx-0 relative group">
           {/* Glow Effect belakang kartu */}
           <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-[35px] blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
           
           <div className="relative bg-[#0e0e12] border border-white/10 rounded-[32px] overflow-hidden shadow-2xl">
              {/* Header Bar */}
              <div className="bg-[#13131a]/80 backdrop-blur-md px-6 py-4 border-b border-white/5 flex items-center justify-between">
                 <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center text-white border border-white/10">
                       <Bot size={16} />
                    </div>
                    <div>
                       <h4 className="text-white font-bold text-xs md:text-sm">AINA System</h4>
                       <p className="text-[10px] text-emerald-400 font-medium tracking-wide flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                          System Active
                       </p>
                    </div>
                 </div>
                 <Sparkles size={16} className="text-purple-400 opacity-50" />
              </div>

              {/* Dashboard Content */}
              <div className="p-6 md:p-8 space-y-6">
                 <div>
                    <p className="text-xs text-slate-500 uppercase tracking-widest mb-2 font-semibold">Active Modules</p>
                    <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                       Mengelola <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">6 Aspek Vital</span> Kehidupan Masisir.
                    </h3>
                 </div>

                 {/* Simulated Progress Bars / Status */}
                 <div className="space-y-3">
                    {['Administrasi', 'Akademik', 'Keuangan'].map((item, i) => (
                       <div key={i} className="bg-[#1a1a24] rounded-xl p-3 flex items-center justify-between border border-white/5">
                          <div className="flex items-center gap-3">
                             <div className={`w-2 h-2 rounded-full ${i===0 ? 'bg-purple-500' : i===1 ? 'bg-cyan-400' : 'bg-indigo-500'}`}></div>
                             <span className="text-xs font-medium text-slate-300">{item}</span>
                          </div>
                          <span className="text-[10px] text-slate-500 font-mono">OPTIMAL</span>
                       </div>
                    ))}
                 </div>

                 {/* Action Button */}
                 <div className="pt-2">
                    <button className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-600/20 to-cyan-600/20 border border-purple-500/30 text-white font-semibold text-xs md:text-sm hover:bg-white/5 transition-all flex items-center justify-center gap-2 group/btn">
                       <Sparkles size={14} className="text-purple-400" />
                       <span>Jalankan Analisa Harian</span>
                    </button>
                 </div>
              </div>
           </div>
        </div>

        {/* RIGHT: 6 Pillars Grid */}
        <div className="flex-1">
          
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-900/20 px-3 py-1 backdrop-blur-md">
             <Lightbulb size={12} className="text-cyan-400" />
             <span className="text-[10px] md:text-xs font-bold text-purple-200 uppercase tracking-widest">
               Solusi Inovatif
             </span>
          </div>

          <h2 className="mb-4 text-3xl md:text-5xl font-bold text-white leading-tight">
             Satu Asisten, <br className="hidden md:block"/>
             <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">6 Kekuatan Utama.</span>
          </h2>

          <p className="mb-10 text-sm md:text-base text-slate-400 max-w-xl leading-relaxed">
             AINA bukan AI biasa. Ia dilatih spesifik untuk memahami konteks, bahasa, dan tantangan unik mahasiswa Indonesia di Mesir.
          </p>

          {/* Grid Layout for Capabilities */}
          <div className="grid gap-4 sm:grid-cols-2">
             {capabilities.map((cap, index) => {
                const Icon = cap.icon;
                const isPurple = cap.color === 'purple';
                return (
                   <div 
                     key={index} 
                     className="group flex items-start gap-4 p-4 rounded-2xl border border-transparent hover:bg-[#0e0e12] hover:border-white/5 transition-all duration-300"
                   >
                      <div className={`mt-1 flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-colors duration-300 ${
                         isPurple 
                           ? 'bg-purple-500/10 text-purple-400 group-hover:bg-purple-500/20' 
                           : 'bg-cyan-500/10 text-cyan-400 group-hover:bg-cyan-500/20'
                      }`}>
                         <Icon size={18} />
                      </div>
                      <div>
                         <h4 className={`text-sm md:text-base font-bold text-white mb-1 group-hover:${isPurple ? 'text-purple-300' : 'text-cyan-300'} transition-colors`}>
                            {cap.text}
                         </h4>
                         <p className="text-xs text-slate-500 leading-relaxed group-hover:text-slate-400 transition-colors">
                            {cap.desc}
                         </p>
                      </div>
                   </div>
                );
             })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default SolutionSection;