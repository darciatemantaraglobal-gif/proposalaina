import React from 'react';
import { MessageSquare, Search, FileSearch, Bot, ShieldCheck } from 'lucide-react';

const steps = [
  { icon: MessageSquare, title: 'User bertanya', desc: 'Ketik pertanyaan — birokrasi, akademik, atau kehidupan sehari-hari di Mesir.', color: 'purple' },
  { icon: Search, title: 'Sistem cek knowledge base', desc: 'AINA menelusuri knowledge base yang dikurasi kontributor, bukan memori AI umum.', color: 'cyan' },
  { icon: FileSearch, title: 'Sumber relevan dipilih', desc: 'Sistem mencocokkan pertanyaan dengan entri paling relevan berdasarkan konteks.', color: 'purple' },
  { icon: Bot, title: 'Jawaban disusun', desc: 'Jawaban ringkas dan terstruktur — sesuai gaya komunikasi Masisir.', color: 'cyan' },
  { icon: ShieldCheck, title: 'Transparansi sumber', desc: 'Setiap jawaban dilengkapi sumber dan confidence level. Pengguna bisa verifikasi.', color: 'purple' },
];

const HowItWorksSection = () => (
  <section className="bg-[#050509] py-8 md:py-20 px-4 md:px-6">
    <div className="max-w-5xl mx-auto">
      <div className="mb-5 md:mb-14">
        <span className="text-[10px] font-bold uppercase tracking-widest text-purple-400">Cara Kerja</span>
        <h2 className="mt-2 text-2xl md:text-4xl font-bold text-white leading-tight">
          Bagaimana AINA{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">menjawab pertanyaanmu.</span>
        </h2>
      </div>

      {/* Desktop: horizontal steps */}
      <div className="hidden md:flex items-start gap-3 mb-10">
        {steps.map((step, i) => {
          const Icon = step.icon;
          const isPurple = step.color === 'purple';
          return (
            <React.Fragment key={i}>
              <div className="flex flex-col items-center text-center flex-1">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-3 border ${isPurple ? 'bg-purple-500/10 border-purple-500/25 text-purple-400' : 'bg-cyan-500/10 border-cyan-500/25 text-cyan-400'}`}>
                  <Icon size={20} />
                </div>
                <span className={`text-[10px] font-bold tracking-widest mb-1.5 ${isPurple ? 'text-purple-400' : 'text-cyan-400'}`}>0{i + 1}</span>
                <h4 className="text-xs font-bold text-white mb-1">{step.title}</h4>
                <p className="text-[11px] text-slate-500 leading-relaxed">{step.desc}</p>
              </div>
              {i < steps.length - 1 && (
                <div className="flex-shrink-0 pt-6 text-slate-800 text-xl">→</div>
              )}
            </React.Fragment>
          );
        })}
      </div>

      {/* Mobile: vertical steps */}
      <div className="md:hidden space-y-0 mb-8">
        {steps.map((step, i) => {
          const Icon = step.icon;
          const isPurple = step.color === 'purple';
          return (
            <div key={i} className="flex gap-4 relative">
              {i < steps.length - 1 && (
                <div className="absolute left-5 top-12 bottom-0 w-px bg-gradient-to-b from-white/10 to-transparent" />
              )}
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 border mt-1 ${isPurple ? 'bg-purple-500/10 border-purple-500/25 text-purple-400' : 'bg-cyan-500/10 border-cyan-500/25 text-cyan-400'}`}>
                <Icon size={16} />
              </div>
              <div className="pb-5">
                <span className={`text-[10px] font-bold tracking-widest ${isPurple ? 'text-purple-400' : 'text-cyan-400'}`}>0{i + 1}</span>
                <h4 className="text-sm font-bold text-white mt-0.5 mb-1">{step.title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{step.desc}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="bg-[#0c0c14] border border-purple-500/15 rounded-2xl p-3 md:p-4 flex items-start gap-3">
        <ShieldCheck size={18} className="text-purple-400 flex-shrink-0 mt-0.5" />
        <div>
          <p className="text-sm font-semibold text-white mb-1">Kenapa transparansi sumber penting?</p>
          <p className="text-xs text-slate-400 leading-relaxed">AI umum sering terdengar yakin padahal salah — "halusinasi AI". AINA mencegah ini dengan mengikat jawaban ke sumber terverifikasi dan menampilkan tingkat keyakinan sistem.</p>
        </div>
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
