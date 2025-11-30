import React from 'react';
import { Clock, CheckCircle2, ArrowRight, Zap, Layers, MessageCircle } from 'lucide-react';

const FutureFeaturesSection = () => {
  const futureFeatures = [
    {
      icon: Zap,
      title: 'Booking Ahli',
      status: 'NEXT PHASE',
      description: 'Satu pintu pemesanan untuk kebutuhan penting Masisir.',
      items: [
        'Booking dokter & konselor',
        'Konsultasi ustadz & mentor senior',
        'Tutor pribadi dengan slot terjadwal'
      ],
      color: 'purple'
    },
    {
      icon: Layers,
      title: 'AINA Community',
      status: 'IN DEVELOPMENT',
      description:
        'Ruang diskusi terorganisir untuk berbagi pengalaman dan solusi.',
      items: [
        'Thread administrasi & akademik',
        'Tips kehidupan sehari-hari',
        'Q&A komunitas dengan moderator'
      ],
      color: 'cyan'
    },
    {
      icon: MessageCircle,
      title: 'Direct Chat',
      status: 'PLANNED',
      description:
        'Komunikasi langsung antara sesama pengguna dalam ekosistem AINA.',
      items: [
        'Direct & group messaging',
        'Real-time chat dengan notifikasi',
        'Kontrol privasi tingkat lanjut'
      ],
      color: 'purple'
    }
  ];

  return (
    <section className="relative overflow-hidden bg-[#050509] py-24 px-6 font-sans text-slate-300">
      
      {/* Background Ambient Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none" />
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMTM5LCA5MiwgMjQ2LCAwLjA1KSIvPjwvc3ZnPg==')] opacity-40 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-6xl">
        
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-purple-900/20 border border-purple-500/20 backdrop-blur-sm">
            <Clock size={12} className="text-cyan-400" />
            <span className="text-[10px] md:text-xs text-purple-200 font-bold uppercase tracking-widest">
              Upcoming Features
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Fitur AINA <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Masa Depan</span>
          </h2>
          
          <p className="mx-auto max-w-2xl text-sm md:text-base text-slate-400 leading-relaxed">
             Fitur lanjutan yang disiapkan untuk menguatkan ekosistem AINA <span className="text-white font-medium">setelah peluncuran versi pertama.</span>
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 mb-16">
          {futureFeatures.map((feature, index) => {
             const Icon = feature.icon;
             const isPurple = feature.color === 'purple';
             
             return (
                <div 
                  key={index}
                  className="group relative bg-[#0e0e12] border border-white/5 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:bg-[#13131a]"
                  style={{ borderColor: isPurple ? 'rgba(168,85,247,0.2)' : 'rgba(34,211,238,0.2)' }}
                >
                   {/* Glow on Hover */}
                   <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500 bg-gradient-to-br ${isPurple ? 'from-purple-500 to-transparent' : 'from-cyan-500 to-transparent'}`} />
                   
                   <div className="relative z-10 flex flex-col h-full">
                      {/* Top: Icon & Status */}
                      <div className="flex justify-between items-start mb-6">
                         <div className={`p-3 rounded-xl ${isPurple ? 'bg-purple-500/10 text-purple-400' : 'bg-cyan-500/10 text-cyan-400'}`}>
                            <Icon size={24} />
                         </div>
                         <span className={`text-[10px] font-bold px-2 py-1 rounded-md border ${isPurple ? 'border-purple-500/30 text-purple-300 bg-purple-500/10' : 'border-cyan-500/30 text-cyan-300 bg-cyan-500/10'}`}>
                            {feature.status}
                         </span>
                      </div>
                      
                      {/* Number (Large Background) */}
                      <div className="absolute right-4 top-16 text-6xl font-bold opacity-5 pointer-events-none select-none text-white">
                         0{index + 1}
                      </div>

                      {/* Content */}
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-300 transition-all">
                         {feature.title}
                      </h3>
                      <p className="text-sm text-slate-400 leading-relaxed mb-6 border-b border-white/5 pb-4 min-h-[60px]">
                         {feature.description}
                      </p>

                      {/* List Items */}
                      <ul className="space-y-3 mt-auto">
                         {feature.items.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2.5">
                               <CheckCircle2 size={14} className={`mt-0.5 flex-shrink-0 ${isPurple ? 'text-purple-500' : 'text-cyan-400'}`} />
                               <span className="text-xs text-slate-300 group-hover:text-white transition-colors">
                                  {item}
                               </span>
                            </li>
                         ))}
                      </ul>
                   </div>
                </div>
             );
          })}
        </div>

        {/* Timeline Note / Footer */}
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-4 bg-[#0e0e12] border border-white/10 rounded-full px-6 py-3 md:px-8 md:py-4 shadow-xl">
             <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center border border-purple-500/20 shrink-0">
                <Clock size={18} className="text-purple-400" />
             </div>
             <div>
                <p className="text-xs md:text-sm text-slate-300">
                   <span className="text-white font-bold">Timeline:</span> Direncanakan rilis dalam <span className="text-cyan-400 font-bold">6–12 bulan</span> pasca-launching.
                </p>
             </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default FutureFeaturesSection;