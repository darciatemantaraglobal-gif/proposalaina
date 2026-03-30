import React from 'react';
import { ArrowRight, Sparkles, Mail, GitMerge, Rocket, Users, Layers, Bot, User, Send, CheckCircle2, Code2 } from 'lucide-react';

const ChatDemo = () => {
  return (
    <div className="relative w-[300px] sm:w-[350px] mx-auto bg-[#0e0e12] border border-white/10 rounded-[40px] overflow-hidden shadow-2xl shadow-purple-900/50">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-xl z-20"></div>
      
      <div className="px-5 pt-10 pb-4 bg-[#13131a] border-b border-white/5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center text-white shadow-lg">
            <Bot size={16} />
          </div>
          <div>
            <h4 className="text-white font-bold text-xs">AINA AI</h4>
            <p className="text-cyan-400 text-[9px] font-semibold tracking-wide">Online</p>
          </div>
        </div>
      </div>

      <div className="flex-1 bg-[#050509] p-4 flex flex-col gap-4 h-[400px] overflow-hidden relative">
        <div className="flex items-start gap-2">
          <div className="bg-[#1a1a24] p-3 rounded-2xl rounded-tl-none border border-white/5 text-slate-300 text-[11px] leading-relaxed max-w-[90%]">
            <p>AINA sedang aktif dikembangkan dan sudah bisa digunakan. Mari bangun ekosistem digital Masisir bersama! 🚀</p>
          </div>
        </div>

        <div className="flex items-start gap-2 justify-end">
          <div className="bg-gradient-to-r from-purple-600 to-purple-500 p-3 rounded-2xl rounded-tr-none text-white text-[11px] leading-relaxed max-w-[90%] shadow-lg">
            <p>Bagaimana cara saya bisa berkontribusi?</p>
          </div>
        </div>

        <div className="flex items-start gap-2">
          <div className="bg-[#1a1a24] p-3 rounded-2xl rounded-tl-none border border-white/5 text-slate-300 text-[11px] leading-relaxed max-w-[90%] space-y-2">
            <p>Ada banyak cara — jadi kontributor konten, dev, atau cukup sebarkan AINA ke sesama Masisir.</p>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-[9px] px-2 py-1 bg-cyan-500/10 text-cyan-400 rounded border border-cyan-500/20">Open for Collaboration ✅</span>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-[#050509] to-transparent pointer-events-none"></div>
      </div>

      <div className="p-3 bg-[#13131a] border-t border-white/5">
        <div className="flex items-center gap-2 bg-[#0a0a0f] border border-white/10 rounded-full px-3 py-2">
          <input disabled type="text" placeholder="Tulis pesan..." className="bg-transparent text-[10px] w-full outline-none text-slate-500" />
          <div className="w-6 h-6 rounded-full bg-purple-600 flex items-center justify-center">
            <Send size={10} className="text-white" />
          </div>
        </div>
        <div className="mx-auto mt-3 w-1/3 h-1 bg-slate-700 rounded-full"></div>
      </div>
    </div>
  );
};

const ClosingSection = () => {
  const waLink =
    "https://wa.me/6281311506025?text=Halo%20Daru,%20saya%20ingin%20berkontribusi%20untuk%20AINA.";

  return (
    <section className="relative bg-[#050509] pt-16 md:pt-24 pb-0 overflow-hidden font-sans text-slate-300">
      
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(88,28,135,0.15),transparent_70%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay"></div>

      <div className="max-w-7xl mx-auto relative z-10 px-4 md:px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16 relative z-20">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-purple-900/20 border border-purple-500/30 backdrop-blur-md shadow-[0_0_20px_-5px_rgba(168,85,247,0.5)]">
            <Sparkles size={14} className="text-cyan-400 animate-pulse" />
            <span className="text-xs font-bold text-purple-200 uppercase tracking-widest">
              Bergabung & Berkontribusi
            </span>
          </div>

          <h2 className="text-3xl md:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight tracking-tight">
            AINA Dibangun Serius —{" "}
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-white to-cyan-400">
              dan Butuh Kamu di Dalamnya.
            </span>
          </h2>

          <p className="text-slate-400 text-base md:text-lg mb-10 leading-relaxed">
            AINA bukan proyek masa depan — ini sistem yang{" "}
            <span className="text-white font-semibold">sudah berjalan dan terus berkembang</span>.
            Kami membuka ruang kolaborasi untuk siapa pun yang ingin ikut membangun ekosistem digital Masisir.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-2 px-8 py-4 bg-white text-[#050509] rounded-full font-bold text-sm shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:shadow-[0_0_40px_rgba(168,85,247,0.4)] hover:scale-105 transition-all duration-300"
            >
              <GitMerge className="w-4 h-4" />
              <span>Jadi Kontributor</span>
            </a>
            
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/10 bg-white/5 text-white font-semibold text-sm backdrop-blur-sm hover:bg-white/10 hover:border-purple-500/50 transition-all"
            >
              <Mail className="w-4 h-4" />
              <span>Hubungi Tim AINA</span>
            </a>
          </div>
        </div>

        {/* Visual Area */}
        <div className="relative mt-20 min-h-[500px] flex justify-center">
          
          <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-gradient-to-b from-purple-600/20 to-cyan-600/10 rounded-full blur-[80px]" />

          <div className="relative z-20 transform hover:scale-[1.02] transition-transform duration-500">
            <ChatDemo />
          </div>

          {/* Widget: Status Pengembangan */}
          <div className="absolute top-20 left-0 md:left-20 lg:left-40 z-30 animate-bounce duration-[4000ms]">
            <div className="bg-[#13131a]/80 backdrop-blur-xl border border-white/10 p-4 pr-8 rounded-2xl shadow-xl flex items-center gap-4 hover:border-purple-500/40 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center text-purple-400">
                <Rocket size={20} />
              </div>
              <div>
                <p className="text-white font-bold text-lg">Aktif</p>
                <p className="text-slate-400 text-xs">Dalam Pengembangan</p>
              </div>
            </div>
          </div>

          {/* Widget: Pengguna Target */}
          <div className="absolute top-10 right-0 md:right-20 lg:right-40 z-10 animate-bounce duration-[5000ms] delay-700">
            <div className="bg-[#13131a]/80 backdrop-blur-xl border border-white/10 p-4 rounded-2xl shadow-xl flex items-center gap-3 hover:border-cyan-500/40 transition-colors">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-slate-700 border-2 border-[#13131a]"></div>
                <div className="w-8 h-8 rounded-full bg-slate-600 border-2 border-[#13131a]"></div>
                <div className="w-8 h-8 rounded-full bg-cyan-600 border-2 border-[#13131a] flex items-center justify-center text-[8px] text-white font-bold">+</div>
              </div>
              <div>
                <p className="text-white font-bold text-sm">Komunitas Masisir</p>
                <p className="text-cyan-400 text-[10px]">Terbuka untuk semua</p>
              </div>
            </div>
          </div>

          {/* Widget: Fitur Live */}
          <div className="absolute bottom-40 right-4 md:right-10 lg:right-32 z-30 animate-bounce duration-[6000ms] delay-300">
            <div className="bg-[#13131a]/80 backdrop-blur-xl border border-white/10 p-4 rounded-2xl shadow-xl hover:border-emerald-500/40 transition-colors">
              <div className="flex items-center gap-2 mb-2">
                <Layers size={14} className="text-emerald-400" />
                <span className="text-slate-300 text-xs font-medium">Fitur Tersedia</span>
              </div>
              <div className="flex gap-1 h-8 items-end">
                <div className="w-2 h-4 bg-slate-700 rounded-sm"></div>
                <div className="w-2 h-6 bg-slate-600 rounded-sm"></div>
                <div className="w-2 h-8 bg-emerald-500 rounded-sm shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
                <span className="ml-2 text-xl font-bold text-white">6 <span className="text-xs font-normal text-slate-500">Pilar</span></span>
              </div>
            </div>
          </div>

          {/* Badge Open Source */}
          <div className="absolute bottom-20 left-4 md:left-10 lg:left-32 z-10 transform rotate-[-6deg]">
            <div className="px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full text-white text-xs font-bold shadow-lg flex items-center gap-2">
              <Code2 size={12} />
              <span>Open Collaboration</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ClosingSection;
