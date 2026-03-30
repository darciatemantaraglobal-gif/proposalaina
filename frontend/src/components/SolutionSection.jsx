import React from 'react';
import { MessageSquare, Database, Info, Users, Heart, LayoutGrid, Sparkles, Bot, CheckCircle2 } from 'lucide-react';

const SolutionSection = () => {
  const pillars = [
    { 
      icon: MessageSquare, 
      text: 'AI Assistant', 
      desc: 'Jawab pertanyaan Masisir secara kontekstual — dari birokrasi, akademik, hingga kehidupan sehari-hari di Mesir.',
      color: 'purple'
    },
    { 
      icon: Database, 
      text: 'Knowledge Base', 
      desc: 'Basis pengetahuan terstruktur tentang prosedur Visa, Tasjil, Iqamah, dan regulasi Al-Azhar yang selalu diperbarui.',
      color: 'cyan'
    },
    { 
      icon: Info, 
      text: 'Sistem Informasi', 
      desc: 'Informasi terpadu soal lokasi, layanan kesehatan, transportasi, dan kebutuhan hidup di Kairo.',
      color: 'purple'
    },
    { 
      icon: Users, 
      text: 'Komunitas', 
      desc: 'Ruang berbagi pengalaman antar Masisir — dari tips survival hingga rekomendasi peer-to-peer yang terverifikasi.',
      color: 'cyan'
    },
    { 
      icon: Heart, 
      text: 'Pendampingan Adaptasi', 
      desc: 'Panduan living guide untuk mahasiswa baru — navigasi kota, budaya lokal, dan tips aman hidup di Mesir.',
      color: 'purple'
    },
    { 
      icon: LayoutGrid, 
      text: 'Dashboard Produktivitas', 
      desc: 'Tracking progres belajar, target hafalan, keuangan bulanan, dan to-do list dalam satu tampilan.',
      color: 'cyan'
    }
  ];

  const modules = ['AI Assistant', 'Knowledge Base', 'Info Lokasi'];

  return (
    <section className="relative bg-[#050509] py-24 px-6 font-sans text-slate-300 overflow-hidden">
      
      <div className="absolute top-1/4 -left-40 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 -right-40 w-[600px] h-[600px] bg-cyan-900/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMTM5LCA5MiwgMjQ2LCAwLjA1KSIvPjwvc3ZnPg==')] opacity-40 pointer-events-none" />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-16 lg:flex-row lg:items-center">
        
        {/* LEFT: System Card */}
        <div className="w-full max-w-md mx-auto lg:mx-0 relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-[35px] blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
          
          <div className="relative bg-[#0e0e12] border border-white/10 rounded-[32px] overflow-hidden shadow-2xl">
            <div className="bg-[#13131a]/80 backdrop-blur-md px-6 py-4 border-b border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center text-white border border-white/10">
                  <Bot size={16} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-xs md:text-sm">AINA System</h4>
                  <p className="text-[10px] text-emerald-400 font-medium tracking-wide flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    Aktif & Berjalan
                  </p>
                </div>
              </div>
              <Sparkles size={16} className="text-purple-400 opacity-50" />
            </div>

            <div className="p-6 md:p-8 space-y-6">
              <div>
                <p className="text-xs text-slate-500 uppercase tracking-widest mb-2 font-semibold">Modul Aktif</p>
                <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                  Satu Sistem,{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                    Enam Pilar
                  </span>{" "}
                  Penunjang Masisir.
                </h3>
              </div>

              <div className="space-y-3">
                {modules.map((item, i) => (
                  <div key={i} className="bg-[#1a1a24] rounded-xl p-3 flex items-center justify-between border border-white/5">
                    <div className="flex items-center gap-3">
                      <div className={`w-2 h-2 rounded-full ${i===0 ? 'bg-purple-500' : i===1 ? 'bg-cyan-400' : 'bg-indigo-500'}`}></div>
                      <span className="text-xs font-medium text-slate-300">{item}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 size={12} className="text-emerald-400" />
                      <span className="text-[10px] text-emerald-400 font-mono font-semibold">READY</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <div className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-600/20 to-cyan-600/20 border border-purple-500/30 text-white text-xs md:text-sm flex items-center justify-center gap-2">
                  <Sparkles size={14} className="text-purple-400" />
                  <span className="text-slate-300">Dibangun khusus untuk konteks Masisir</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT: 6 Pillars */}
        <div className="flex-1">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-900/20 px-3 py-1 backdrop-blur-md">
            <Sparkles size={12} className="text-cyan-400" />
            <span className="text-[10px] md:text-xs font-bold text-purple-200 uppercase tracking-widest">
              Solusi AINA
            </span>
          </div>

          <h2 className="mb-4 text-3xl md:text-5xl font-bold text-white leading-tight">
            AINA Bukan Sekadar Chatbot.{" "}
            <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              Ini Ekosistem Digital Masisir.
            </span>
          </h2>

          <p className="mb-10 text-sm md:text-base text-slate-400 max-w-xl leading-relaxed">
            AINA menggabungkan AI assistant, knowledge base terstruktur, sistem informasi lokal, komunitas, dan tools produktivitas — dirancang dari nol untuk memahami realita mahasiswa Indonesia di Mesir.
          </p>

          <div className="grid gap-4 sm:grid-cols-2">
            {pillars.map((cap, index) => {
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
                    <h4 className="text-sm md:text-base font-bold text-white mb-1 transition-colors">
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
