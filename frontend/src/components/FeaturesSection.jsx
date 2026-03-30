import React from 'react';
import { MessageSquare, Database, Link2, Newspaper, MessageCircle, CheckSquare, Bookmark, Users2 } from 'lucide-react';

const features = [
  { icon: MessageSquare, title: 'AI Chat untuk Masisir', desc: 'Bukan AI generik — jawaban berbasis knowledge kontekstual Masisir.' },
  { icon: Database, title: 'Knowledge Base Terstruktur', desc: 'Data dikurasi kontributor. Jawaban terikat sumber, bukan halusinasi.' },
  { icon: Link2, title: 'Source & Confidence', desc: 'Setiap jawaban punya indikator sumber dan tingkat keyakinan sistem.' },
  { icon: Newspaper, title: 'Berita & Pengumuman', desc: 'Feed informasi terkini — kampus, organisasi, dan komunitas Masisir.' },
  { icon: MessageCircle, title: 'Threads Komunitas', desc: 'Diskusi peer-to-peer termoderasi per topik. Upvote jawaban terbaik.' },
  { icon: CheckSquare, title: 'Ruang Produktif', desc: 'Tasks, catatan, dan tracking target belajar dalam satu dashboard.' },
  { icon: Bookmark, title: 'Saved Answers', desc: 'Simpan jawaban AI penting dan akses kembali kapan saja.' },
  { icon: Users2, title: 'Contributor System', desc: 'Masisir bisa berkontribusi memperkaya knowledge base AINA.' },
];

const FeaturesSection = () => (
  <section className="relative bg-[#050509] py-8 md:py-20 px-4 md:px-6 overflow-hidden">
    <div className="pointer-events-none absolute inset-0 dot-grid opacity-40" />
    <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[140px]" style={{ background: 'hsl(270 60% 55% / 0.07)' }} />

    <div className="relative z-10 max-w-5xl mx-auto">
      <div className="mb-5 md:mb-14">
        <div className="inline-flex items-center gap-2 rounded-full border border-purple-400/30 bg-purple-500/5 px-3 py-1 mb-3 backdrop-blur-sm">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
          </span>
          <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-purple-300">8 Fitur — Semua Live</span>
        </div>
        <h2 className="text-2xl md:text-4xl font-bold text-white leading-tight font-display">
          Fitur yang{' '}
          <span className="text-gradient-purple-cyan">sudah bisa digunakan sekarang.</span>
        </h2>
        <p className="mt-2 text-xs md:text-sm text-muted-foreground max-w-xl">Bukan konsep. Semua sudah dibangun, diuji, dan aktif berjalan.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {features.map((f, i) => {
          const Icon = f.icon;
          const isPurple = i % 2 === 0;
          return (
            <div key={i} className="group bg-[#0f0f18]/80 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-3 hover:border-purple-500/40 hover:bg-[#0f0f18] transition-all duration-300 hover:-translate-y-0.5">
              {/* Big number bg */}
              <span className="pointer-events-none absolute -right-2 -top-3 select-none font-display text-[4rem] font-black leading-none" style={{ color: 'hsl(270 60% 55% / 0.04)' }}>
                {String(i + 1).padStart(2, '0')}
              </span>
              <div className="relative">
                <div className="flex items-start justify-between mb-2.5">
                  <div className={`w-8 h-8 rounded-xl flex items-center justify-center border flex-shrink-0 ${isPurple ? 'bg-purple-500/10 border-purple-500/20 text-purple-400' : 'bg-cyan-500/10 border-cyan-500/20 text-cyan-400'}`}>
                    <Icon size={14} />
                  </div>
                  <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">LIVE</span>
                </div>
                <h3 className="text-xs font-bold text-white mb-1 font-display">{f.title}</h3>
                <p className="text-[11px] text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
