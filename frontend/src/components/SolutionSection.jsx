import React from 'react';
import { Bot, Sparkles, CheckCircle2, MessageSquare, BookOpen, Newspaper, LayoutDashboard, Users2, Bookmark } from 'lucide-react';

const pillars = [
  { icon: MessageSquare, title: 'AI Chat Kontekstual', desc: 'Jawaban berbasis knowledge base Masisir, bukan AI generik.' },
  { icon: BookOpen, title: 'Knowledge Base Terstruktur', desc: 'Data dikurasi kontributor — prosedur, info kampus, kehidupan.' },
  { icon: Newspaper, title: 'Info & Berita Masisir', desc: 'Pengumuman kampus, organisasi, dan komunitas dalam satu feed.' },
  { icon: LayoutDashboard, title: 'Ruang Produktif', desc: 'Tasks, catatan, dan tracking target belajar terintegrasi.' },
  { icon: Users2, title: 'Komunitas Threads', desc: 'Diskusi peer-to-peer yang termoderasi per topik.' },
  { icon: Bookmark, title: 'Saved Answers', desc: 'Simpan jawaban penting untuk diakses kapan saja.' },
];

const SolutionSection = () => (
  <section className="bg-[#050509] py-8 md:py-20 px-4 md:px-6">
    <div className="max-w-5xl mx-auto">
      <div className="flex flex-col lg:flex-row gap-5 md:gap-14 items-start">

        {/* LEFT: System status card */}
        <div className="w-full lg:w-[360px] flex-shrink-0">
          <div className="bg-[#0c0c14] border border-purple-500/20 rounded-2xl overflow-hidden">
            <div className="px-5 py-4 border-b border-purple-500/15 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center">
                  <Bot size={15} className="text-white" />
                </div>
                <div>
                  <p className="text-white font-bold text-sm">AINA System</p>
                  <p className="text-emerald-400 text-[10px] flex items-center gap-1 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse inline-block" />
                    Aktif & Berjalan
                  </p>
                </div>
              </div>
              <Sparkles size={14} className="text-purple-400 opacity-60" />
            </div>

            <div className="p-5 space-y-3">
              {pillars.map((p, i) => {
                const Icon = p.icon;
                return (
                  <div key={i} className="flex items-center justify-between bg-[#141420] rounded-xl px-3 py-2.5 border border-purple-500/12">
                    <div className="flex items-center gap-2.5">
                      <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${i % 2 === 0 ? 'bg-purple-400' : 'bg-cyan-400'}`} />
                      <span className="text-xs text-slate-300 font-medium">{p.title}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <CheckCircle2 size={11} className="text-emerald-400" />
                      <span className="text-[10px] text-emerald-400 font-mono font-bold">READY</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* RIGHT: Text */}
        <div className="flex-1">
          <span className="text-[10px] font-bold uppercase tracking-widest text-purple-400">Solusi</span>
          <h2 className="mt-2 text-2xl md:text-4xl font-bold text-white leading-tight mb-4">
            AINA bukan sekadar chatbot.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              Ini ekosistem digital Masisir.
            </span>
          </h2>
          <p className="text-sm text-slate-400 leading-relaxed mb-8">
            Satu sistem yang menggabungkan AI assistant, knowledge base, informasi komunitas, dan tools produktivitas — semuanya dirancang dari nol untuk konteks Masisir di Mesir.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pillars.map((p, i) => {
              const Icon = p.icon;
              return (
                <div key={i} className="flex items-start gap-3">
                  <div className={`mt-0.5 w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${i % 2 === 0 ? 'bg-purple-500/10 text-purple-400' : 'bg-cyan-500/10 text-cyan-400'}`}>
                    <Icon size={15} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">{p.title}</p>
                    <p className="text-xs text-slate-500 leading-relaxed mt-0.5">{p.desc}</p>
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
