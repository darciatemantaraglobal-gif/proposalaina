import React from 'react';
import { FileX, Globe, Clock, Users } from 'lucide-react';

const problems = [
  {
    icon: FileX,
    title: 'Birokrasi tanpa panduan',
    desc: 'Visa, iqamah, tasjil — prosedurnya berubah terus, informasinya tersebar, dan tidak ada satu tempat yang bisa diandalkan.',
    stat: '#1 keluhan',
  },
  {
    icon: Globe,
    title: 'Informasi tidak terpusat',
    desc: 'Berita kampus, pengumuman organisasi, info penting — semua masih tersebar di grup WA dan chat yang mudah tenggelam.',
    stat: 'Tiap hari',
  },
  {
    icon: Clock,
    title: 'Waktu habis untuk hal berulang',
    desc: 'Pertanyaan yang sama ditanyakan berulang kali setiap tahun ajaran baru. Tidak ada sistem yang menyimpan jawabannya.',
    stat: 'Ribuan jam',
  },
  {
    icon: Users,
    title: 'Produktivitas tanpa sistem',
    desc: 'Target hafalan, jadwal kampus, keuangan bulanan — dikelola manual, terpisah, dan sering terlupakan.',
    stat: 'Setiap masisir',
  },
];

const ProblemSection = () => (
  <section className="bg-[#050509] py-14 md:py-20 px-4 md:px-6">
    <div className="max-w-5xl mx-auto">
      <div className="mb-10 md:mb-14">
        <span className="text-[10px] font-bold uppercase tracking-widest text-purple-400">Masalah</span>
        <h2 className="mt-2 text-3xl md:text-4xl font-bold text-white leading-tight">
          Empat masalah nyata yang <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">dihadapi Masisir setiap hari.</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {problems.map((p, i) => {
          const Icon = p.icon;
          return (
            <div key={i} className="group bg-[#0c0c14] border border-purple-500/20 rounded-2xl p-5 hover:border-purple-500/25 transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 flex-shrink-0">
                  <Icon size={18} />
                </div>
                <span className="text-[10px] font-bold text-slate-600 uppercase tracking-wider">{p.stat}</span>
              </div>
              <h3 className="text-base font-bold text-white mb-2">{p.title}</h3>
              <p className="text-xs text-slate-400 leading-relaxed">{p.desc}</p>
            </div>
          );
        })}
      </div>

      <div className="mt-8 flex items-center gap-3 bg-[#0c0c14] border border-purple-500/20 rounded-2xl p-4">
        <div className="w-2 h-2 rounded-full bg-purple-400 animate-pulse flex-shrink-0" />
        <p className="text-xs text-slate-400">
          Masalah ini dialami <span className="text-white font-semibold">ribuan Masisir setiap tahun</span> — dan AINA dibangun untuk mengatasinya.
        </p>
      </div>
    </div>
  </section>
);

export default ProblemSection;
