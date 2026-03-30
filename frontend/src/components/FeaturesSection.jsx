import React from 'react';
import { MessageSquare, Database, Link2, Newspaper, MessageCircle, CheckSquare, Bookmark, Users2 } from 'lucide-react';

const features = [
  {
    icon: MessageSquare,
    title: 'AI Chat untuk Masisir',
    desc: 'Bukan AI generik — jawaban berbasis knowledge kontekstual Masisir.',
    tag: 'LIVE',
  },
  {
    icon: Database,
    title: 'Knowledge Base Terstruktur',
    desc: 'Data dikurasi kontributor. Jawaban terikat sumber, bukan halusinasi.',
    tag: 'LIVE',
  },
  {
    icon: Link2,
    title: 'Source & Confidence',
    desc: 'Setiap jawaban punya indikator sumber dan tingkat keyakinan sistem.',
    tag: 'LIVE',
  },
  {
    icon: Newspaper,
    title: 'Berita & Pengumuman',
    desc: 'Feed informasi terkini — kampus, organisasi, dan komunitas Masisir.',
    tag: 'LIVE',
  },
  {
    icon: MessageCircle,
    title: 'Threads Komunitas',
    desc: 'Diskusi peer-to-peer termoderasi per topik. Upvote jawaban terbaik.',
    tag: 'LIVE',
  },
  {
    icon: CheckSquare,
    title: 'Ruang Produktif',
    desc: 'Tasks, catatan, dan tracking target belajar dalam satu dashboard.',
    tag: 'LIVE',
  },
  {
    icon: Bookmark,
    title: 'Saved Answers',
    desc: 'Simpan jawaban AI penting dan akses kembali kapan saja.',
    tag: 'LIVE',
  },
  {
    icon: Users2,
    title: 'Contributor System',
    desc: 'Masisir bisa berkontribusi memperkaya knowledge base AINA.',
    tag: 'LIVE',
  },
];

const FeaturesSection = () => (
  <section className="bg-[#050509] py-14 md:py-20 px-4 md:px-6">
    <div className="max-w-5xl mx-auto">
      <div className="mb-10 md:mb-14">
        <span className="text-[10px] font-bold uppercase tracking-widest text-purple-400">Fitur</span>
        <h2 className="mt-2 text-3xl md:text-4xl font-bold text-white leading-tight">
          8 fitur inti —{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">semuanya sudah live.</span>
        </h2>
        <p className="mt-3 text-sm text-slate-400 max-w-xl">Bukan konsep. Semua sudah dibangun, diuji, dan aktif berjalan.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
        {features.map((f, i) => {
          const Icon = f.icon;
          const isPurple = i % 2 === 0;
          return (
            <div key={i} className="group bg-[#0c0c14] border border-white/6 rounded-2xl p-4 hover:border-purple-500/25 transition-all duration-300 hover:-translate-y-0.5">
              <div className="flex items-start justify-between mb-3">
                <div className={`w-9 h-9 rounded-xl flex items-center justify-center border flex-shrink-0 ${isPurple ? 'bg-purple-500/10 border-purple-500/20 text-purple-400' : 'bg-cyan-500/10 border-cyan-500/20 text-cyan-400'}`}>
                  <Icon size={16} />
                </div>
                <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400">{f.tag}</span>
              </div>
              <h3 className="text-sm font-bold text-white mb-1.5">{f.title}</h3>
              <p className="text-[11px] text-slate-500 leading-relaxed">{f.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
