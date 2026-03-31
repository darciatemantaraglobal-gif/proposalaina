import React from 'react';
import { MessageSquare, BookOpen, Newspaper, LayoutDashboard, Users2, Bookmark } from 'lucide-react';

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
      <div className="flex flex-col gap-8">

        {/* Heading + pillars grid */}
        <div className="w-full">
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
