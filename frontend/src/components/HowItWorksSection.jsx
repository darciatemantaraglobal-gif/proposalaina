import React from 'react';
import { MessageSquare, Search, FileSearch, Bot, ShieldCheck, ArrowDown, ArrowRight } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'User Bertanya',
    desc: 'Masisir mengetikkan pertanyaan — bisa soal prosedur Visa, materi Azhar, rekomendasi tempat, atau hal lain seputar kehidupan di Mesir.',
    color: 'purple',
  },
  {
    number: '02',
    icon: Search,
    title: 'Sistem Cek Knowledge Base',
    desc: 'AINA menelusuri knowledge base terstruktur yang dikurasi oleh kontributor — bukan menjawab dari memori AI umum yang tidak terverifikasi.',
    color: 'cyan',
  },
  {
    number: '03',
    icon: FileSearch,
    title: 'Sumber Relevan Dipilih',
    desc: 'Sistem mencocokkan pertanyaan dengan entri yang paling relevan, mempertimbangkan konteks lokal, kategori topik, dan kualitas sumber.',
    color: 'purple',
  },
  {
    number: '04',
    icon: Bot,
    title: 'AINA Menyusun Jawaban',
    desc: 'Jawaban disusun secara terstruktur dan ringkas — disesuaikan dengan gaya komunikasi Masisir, bukan output AI panjang yang sulit dicerna.',
    color: 'cyan',
  },
  {
    number: '05',
    icon: ShieldCheck,
    title: 'Transparansi Sumber & Confidence',
    desc: 'Setiap jawaban dilengkapi indikator sumber (dari mana info berasal) dan confidence level (seberapa yakin sistem), sehingga pengguna bisa memverifikasi sendiri.',
    color: 'purple',
  },
];

const HowItWorksSection = () => {
  return (
    <section className="relative bg-[#050509] py-24 px-6 overflow-hidden font-sans text-slate-300">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMTM5LCA5MiwgMjQ2LCAwLjA1KSIvPjwvc3ZnPg==')] opacity-40 pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-purple-900/20 border border-purple-500/20 backdrop-blur-sm">
            <Search size={12} className="text-cyan-400" />
            <span className="text-[10px] md:text-xs text-purple-200 font-bold uppercase tracking-widest">
              Cara Kerja AINA
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Bagaimana AINA{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              Menjawab Pertanyaanmu
            </span>
            ?
          </h2>
          <p className="mx-auto max-w-2xl text-sm md:text-base text-slate-400 leading-relaxed">
            AINA tidak menjawab secara asal — ada proses terstruktur di balik setiap respons yang menjamin relevansi dan transparansi jawaban.
          </p>
        </div>

        {/* Steps — Desktop: horizontal, Mobile: vertical */}
        <div className="hidden md:flex items-start justify-between gap-2 mb-16">
          {steps.map((step, i) => {
            const Icon = step.icon;
            const isPurple = step.color === 'purple';
            return (
              <React.Fragment key={i}>
                <div className="flex flex-col items-center text-center flex-1 max-w-[180px] mx-auto">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 border ${
                    isPurple
                      ? 'bg-purple-500/10 border-purple-500/30 text-purple-400'
                      : 'bg-cyan-500/10 border-cyan-500/30 text-cyan-400'
                  }`}>
                    <Icon size={22} />
                  </div>
                  <span className={`text-[10px] font-bold tracking-widest mb-2 ${isPurple ? 'text-purple-400' : 'text-cyan-400'}`}>
                    {step.number}
                  </span>
                  <h4 className="text-sm font-bold text-white mb-2 leading-snug">{step.title}</h4>
                  <p className="text-[11px] text-slate-500 leading-relaxed">{step.desc}</p>
                </div>
                {i < steps.length - 1 && (
                  <div className="flex items-center justify-center pt-7 flex-shrink-0">
                    <ArrowRight size={16} className="text-slate-700" />
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>

        {/* Steps — Mobile: vertical */}
        <div className="md:hidden space-y-0 mb-16">
          {steps.map((step, i) => {
            const Icon = step.icon;
            const isPurple = step.color === 'purple';
            return (
              <div key={i} className="flex gap-5 relative">
                {/* Line connector */}
                {i < steps.length - 1 && (
                  <div className="absolute left-6 top-14 bottom-0 w-px bg-gradient-to-b from-white/10 to-transparent" />
                )}
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 border mt-1 ${
                  isPurple
                    ? 'bg-purple-500/10 border-purple-500/30 text-purple-400'
                    : 'bg-cyan-500/10 border-cyan-500/30 text-cyan-400'
                }`}>
                  <Icon size={18} />
                </div>
                <div className="pb-8">
                  <span className={`text-[10px] font-bold tracking-widest ${isPurple ? 'text-purple-400' : 'text-cyan-400'}`}>
                    {step.number}
                  </span>
                  <h4 className="text-base font-bold text-white mt-0.5 mb-1">{step.title}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom highlight card */}
        <div className="relative group">
          <div className="absolute -inset-px bg-gradient-to-r from-purple-600/30 to-cyan-600/30 rounded-2xl blur opacity-50 group-hover:opacity-80 transition duration-500" />
          <div className="relative bg-[#0e0e12] border border-white/10 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center gap-5">
            <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center flex-shrink-0">
              <ShieldCheck size={22} className="text-purple-400" />
            </div>
            <div>
              <h4 className="text-white font-bold text-base mb-1">
                Kenapa Transparansi Sumber itu Penting?
              </h4>
              <p className="text-sm text-slate-400 leading-relaxed">
                AI umum sering memberikan jawaban yang terdengar meyakinkan tapi salah — ini disebut "halusinasi AI". AINA mencegah ini dengan mengikat jawaban ke sumber terverifikasi dan menampilkan tingkat keyakinan sistem, sehingga pengguna selalu tahu seberapa kuat dasar setiap informasi yang diterimanya.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
