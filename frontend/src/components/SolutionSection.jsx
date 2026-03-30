import React from 'react';
import { Bot, Sparkles, CheckCircle2, MessageSquare, BookOpen, Newspaper, LayoutDashboard, Users2, Bookmark, ShieldCheck } from 'lucide-react';

const pillars = [
  { icon: MessageSquare, title: 'AI Assistant', desc: 'Jawaban berbasis knowledge Masisir, bukan AI generik.', color: 'purple' },
  { icon: BookOpen, title: 'Knowledge Base', desc: 'Dikurasi kontributor: prosedur, kampus, dan kehidupan.', color: 'cyan' },
  { icon: Newspaper, title: 'Sistem Informasi', desc: 'Feed pengumuman dan berita komunitas terpusat.', color: 'purple' },
  { icon: Users2, title: 'Komunitas', desc: 'Threads diskusi per topik, upvote jawaban terbaik.', color: 'cyan' },
  { icon: LayoutDashboard, title: 'Ruang Produktif', desc: 'Tasks, catatan, dan target belajar dalam satu ruang.', color: 'purple' },
  { icon: Bookmark, title: 'Saved Answers', desc: 'Simpan jawaban penting, akses kapan saja.', color: 'cyan' },
];

const SolutionSection = () => (
  <section id="solusi" className="relative bg-[#050509] py-8 md:py-20 px-6 md:px-8 overflow-hidden">
    <div className="pointer-events-none absolute inset-0 dot-grid opacity-40" />
    <div className="pointer-events-none absolute right-0 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full blur-[140px]" style={{ background: 'hsl(270 60% 55% / 0.07)' }} />

    <div className="relative z-10 max-w-6xl mx-auto">
      <div className="flex flex-col lg:flex-row gap-8 md:gap-14 items-start">

        {/* LEFT: System status card */}
        <div className="w-full lg:w-[280px] flex-shrink-0">
          <div className="bg-[#0f0f18]/80 backdrop-blur-xl border border-purple-500/25 rounded-2xl overflow-hidden glow-purple-sm">
            <div className="px-4 py-3 border-b border-purple-500/15 flex items-center justify-between bg-[#13121f]/60">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-gradient-purple flex items-center justify-center shadow-lg shadow-purple-500/30">
                  <Bot size={14} className="text-white" />
                </div>
                <div>
                  <p className="text-white font-bold text-xs font-display">AINA System</p>
                  <p className="text-emerald-400 text-[10px] flex items-center gap-1 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse inline-block" />
                    Aktif & Berjalan
                  </p>
                </div>
              </div>
              <Sparkles size={13} className="text-purple-400 opacity-60" />
            </div>

            <div className="p-3 space-y-2">
              {pillars.map((p, i) => {
                const Icon = p.icon;
                return (
                  <div key={i} className="flex items-center justify-between bg-[#13121f]/80 rounded-xl px-3 py-2 border border-purple-500/12 hover:border-purple-500/25 transition-colors">
                    <div className="flex items-center gap-2.5">
                      <Icon size={12} className={i % 2 === 0 ? 'text-purple-400' : 'text-cyan-400'} />
                      <span className="text-xs text-foreground/80 font-medium">{p.title}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <CheckCircle2 size={10} className="text-emerald-400" />
                      <span className="text-[9px] text-emerald-400 font-bold">LIVE</span>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="px-4 py-3 border-t border-purple-500/15 bg-[#13121f]/40">
              <div className="flex items-start gap-2">
                <ShieldCheck size={12} className="text-purple-400 flex-shrink-0 mt-0.5" />
                <p className="text-[10px] text-muted-foreground leading-snug">Setiap jawaban disertai sumber dan confidence level.</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT: Heading + pillars grid */}
        <div className="flex-1">
          <div className="inline-flex items-center gap-2 rounded-full border border-purple-400/30 bg-purple-500/5 px-3 py-1 mb-3 backdrop-blur-sm">
            <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-purple-300">Solusi</span>
          </div>
          <h2 className="text-2xl md:text-4xl font-bold text-white leading-tight mb-2 font-display">
            Bukan chatbot biasa.{' '}
            <span className="text-gradient-purple-cyan">Ekosistem digital Masisir.</span>
          </h2>
          <p className="text-xs md:text-sm text-muted-foreground leading-relaxed mb-5">
            AI Assistant, Knowledge Base, Informasi, Komunitas, dan Tools Produktivitas — dibangun satu ekosistem khusus Masisir.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
            {pillars.map((p, i) => {
              const Icon = p.icon;
              const isPurple = p.color === 'purple';
              return (
                <div key={i} className={`flex items-start gap-2.5 md:gap-3 p-3 md:p-4 rounded-xl md:rounded-2xl border ${isPurple ? 'bg-purple-500/4 border-purple-500/12' : 'bg-cyan-500/4 border-cyan-500/10'}`}>
                  <div className={`mt-0.5 w-7 h-7 md:w-9 md:h-9 rounded-lg md:rounded-xl flex items-center justify-center flex-shrink-0 ${isPurple ? 'bg-purple-500/12 text-purple-400' : 'bg-cyan-500/12 text-cyan-400'}`}>
                    <Icon size={13} className="md:hidden" />
                    <Icon size={16} className="hidden md:block" />
                  </div>
                  <div>
                    <p className="text-xs md:text-sm font-semibold text-white font-display">{p.title}</p>
                    <p className="text-[11px] md:text-xs text-muted-foreground leading-relaxed mt-0.5">{p.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default SolutionSection;
