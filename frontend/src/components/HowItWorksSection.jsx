import React from 'react';
import { MessageSquare, Search, FileSearch, Bot, ShieldCheck } from 'lucide-react';

const steps = [
  { icon: MessageSquare, title: 'User bertanya', desc: 'Ketik pertanyaan — birokrasi, akademik, atau kehidupan sehari-hari di Mesir.', color: 'purple' },
  { icon: Search, title: 'Cek knowledge base', desc: 'AINA menelusuri knowledge base yang dikurasi kontributor, bukan memori AI umum.', color: 'cyan' },
  { icon: FileSearch, title: 'Sumber relevan dipilih', desc: 'Sistem mencocokkan pertanyaan dengan entri paling relevan berdasarkan konteks.', color: 'purple' },
  { icon: Bot, title: 'Jawaban disusun', desc: 'Jawaban ringkas dan terstruktur — sesuai gaya komunikasi Masisir.', color: 'cyan' },
  { icon: ShieldCheck, title: 'Transparansi sumber', desc: 'Setiap jawaban dilengkapi sumber dan confidence level. Pengguna bisa verifikasi.', color: 'purple' },
];

const HowItWorksSection = () => (
  <section className="relative bg-[#050509] py-8 md:py-20 px-4 md:px-6 overflow-hidden">
    <div className="pointer-events-none absolute inset-0 dot-grid opacity-40" />
    <div className="pointer-events-none absolute right-1/4 top-0 h-[350px] w-[350px] rounded-full blur-[130px]" style={{ background: 'hsl(270 60% 55% / 0.07)' }} />

    <div className="relative z-10 max-w-5xl mx-auto">
      <div className="mb-5 md:mb-14">
        <div className="inline-flex items-center gap-2 rounded-full border border-purple-400/30 bg-purple-500/5 px-3 py-1 mb-3 backdrop-blur-sm">
          <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-purple-300">Cara Kerja</span>
        </div>
        <h2 className="text-2xl md:text-4xl font-bold text-white leading-tight font-display">
          Bagaimana AINA{' '}
          <span className="text-gradient-purple-cyan">menjawab pertanyaanmu.</span>
        </h2>
      </div>

      {/* Desktop: horizontal steps */}
      <div className="hidden md:flex items-start gap-2 mb-8">
        {steps.map((step, i) => {
          const Icon = step.icon;
          const isPurple = step.color === 'purple';
          return (
            <React.Fragment key={i}>
              <div className="flex flex-col items-center text-center flex-1">
                <div className={`w-10 h-10 rounded-2xl flex items-center justify-center mb-2.5 border ${isPurple ? 'bg-purple-500/10 border-purple-500/25 text-purple-400' : 'bg-cyan-500/10 border-cyan-500/25 text-cyan-400'}`}>
                  <Icon size={18} />
                </div>
                <span className={`text-[10px] font-bold tracking-widest mb-1 ${isPurple ? 'text-purple-400' : 'text-cyan-400'}`}>0{i + 1}</span>
                <h4 className="text-xs font-bold text-white mb-1 font-display">{step.title}</h4>
                <p className="text-[11px] text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
              {i < steps.length - 1 && (
                <div className="flex-shrink-0 pt-5 text-purple-500/30 text-lg">→</div>
              )}
            </React.Fragment>
          );
        })}
      </div>

      {/* Mobile: vertical steps */}
      <div className="md:hidden space-y-0 mb-5">
        {steps.map((step, i) => {
          const Icon = step.icon;
          const isPurple = step.color === 'purple';
          return (
            <div key={i} className="flex gap-3 relative">
              {i < steps.length - 1 && (
                <div className="absolute left-4 top-10 bottom-0 w-px bg-gradient-to-b from-purple-500/20 to-transparent" />
              )}
              <div className={`w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 border mt-1 ${isPurple ? 'bg-purple-500/10 border-purple-500/25 text-purple-400' : 'bg-cyan-500/10 border-cyan-500/25 text-cyan-400'}`}>
                <Icon size={14} />
              </div>
              <div className="pb-4">
                <span className={`text-[10px] font-bold tracking-widest ${isPurple ? 'text-purple-400' : 'text-cyan-400'}`}>0{i + 1}</span>
                <h4 className="text-sm font-bold text-white mt-0.5 mb-1 font-display">{step.title}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="bg-[#0f0f18]/80 backdrop-blur-sm border border-purple-500/25 rounded-2xl p-3 md:p-4 flex items-start gap-3">
        <ShieldCheck size={16} className="text-purple-400 flex-shrink-0 mt-0.5" />
        <div>
          <p className="text-xs font-semibold text-white mb-1 font-display">Kenapa transparansi sumber penting?</p>
          <p className="text-xs text-muted-foreground leading-relaxed">AI umum sering terdengar yakin padahal salah. AINA mencegah ini dengan mengikat jawaban ke sumber terverifikasi dan menampilkan tingkat keyakinan sistem.</p>
        </div>
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
