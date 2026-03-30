import React from 'react';
import { ArrowRight, Users2, BookOpen, Handshake, Heart, MessageSquare } from 'lucide-react';

const phoneNumber = "6281311506025";

const ways = [
  {
    icon: Users2,
    title: 'Pengguna Aktif',
    subtitle: 'Untuk Masisir',
    color: 'purple',
    desc: 'Cara paling langsung mendukung AINA adalah dengan menggunakannya, memberikan masukan, dan mengajak sesama Masisir untuk bergabung.',
    points: [
      'Gunakan AINA untuk kebutuhan sehari-hari',
      'Berikan feedback untuk terus menyempurnakan sistem',
      'Sebarkan ke sesama Masisir yang membutuhkan',
    ],
    cta: 'Mulai Gunakan AINA',
    waText: 'Halo, saya ingin mencoba menggunakan AINA sebagai pengguna aktif.',
    highlight: false,
  },
  {
    icon: BookOpen,
    title: 'Kontributor Konten',
    subtitle: 'Untuk yang Ingin Terlibat Lebih Dalam',
    color: 'cyan',
    desc: 'Bantu perkaya knowledge base AINA — informasi yang kamu miliki tentang Mesir bisa menjadi jawaban bagi ratusan Masisir lain.',
    points: [
      'Tambahkan informasi yang kamu kuasai ke knowledge base',
      'Verifikasi dan perbarui konten yang sudah ada',
      'Moderasi diskusi komunitas di threads AINA',
    ],
    cta: 'Jadi Kontributor',
    waText: 'Halo, saya tertarik menjadi kontributor konten untuk AINA.',
    highlight: true,
  },
  {
    icon: Handshake,
    title: 'Partner & Institusi',
    subtitle: 'Untuk Lembaga & Organisasi',
    color: 'purple',
    desc: 'Bagi organisasi, lembaga, atau komunitas yang ingin berkolaborasi secara lebih formal untuk memperluas dampak AINA bagi Masisir.',
    points: [
      'Kolaborasi pengembangan konten dan informasi resmi',
      'Integrasi layanan atau informasi lembaga ke AINA',
      'Kemitraan untuk distribusi dan adopsi lebih luas',
    ],
    cta: 'Diskusi Kolaborasi',
    waText: 'Halo, saya ingin mendiskusikan kemungkinan kolaborasi / kemitraan dengan AINA.',
    highlight: false,
  },
];

const FundingSection = () => {
  return (
    <section className="relative min-h-[auto] bg-[#050509] py-14 md:py-20 px-4 md:px-8 overflow-hidden font-sans">
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-purple-900/12 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-cyan-900/8 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 md:mb-14">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-purple-900/20 border border-purple-500/20 backdrop-blur-md">
            <Handshake className="w-4 h-4 text-purple-400" />
            <span className="text-xs font-bold text-purple-200 uppercase tracking-widest">Cara Terlibat dengan AINA</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-white mb-5">
            AINA Tumbuh{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              Bersama Komunitasnya.
            </span>
          </h2>

          <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Ada banyak cara untuk menjadi bagian dari perjalanan AINA — mulai dari menggunakannya sehari-hari hingga berkolaborasi secara lebih dalam.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8 mb-8 md:mb-14 items-start">
          {ways.map((way, i) => {
            const Icon = way.icon;
            const isCyan = way.color === 'cyan';

            return (
              <div
                key={i}
                className={`relative flex flex-col h-full rounded-[28px] p-5 md:p-6 lg:p-7 transition-all duration-300 group ${
                  way.highlight
                    ? 'bg-[#0e0e12] border border-cyan-500/40 shadow-[0_0_50px_-15px_rgba(34,211,238,0.2)] md:-translate-y-5 z-10'
                    : 'bg-[#0e0e12] border border-white/6 hover:border-purple-500/25 hover:-translate-y-2'
                }`}
              >
                {way.highlight && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <span className="bg-gradient-to-r from-cyan-400 to-purple-400 text-black text-[10px] font-bold px-4 py-1.5 rounded-full shadow-lg tracking-wider whitespace-nowrap">
                      KONTRIBUSI LANGSUNG
                    </span>
                  </div>
                )}

                <div className={`absolute inset-0 opacity-0 group-hover:opacity-[0.04] rounded-[28px] transition-opacity bg-gradient-to-br ${isCyan ? 'from-cyan-500' : 'from-purple-500'} to-transparent`} />

                <div className="relative z-10 flex flex-col h-full">
                  {/* Header */}
                  <div className="mb-4 pb-4 border-b border-white/5">
                    <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl flex items-center justify-center mb-3 border ${
                      isCyan ? 'bg-cyan-500/10 border-cyan-500/20 text-cyan-400' : 'bg-purple-500/10 border-purple-500/20 text-purple-400'
                    }`}>
                      <Icon size={22} />
                    </div>
                    <p className={`text-[10px] font-bold uppercase tracking-wider mb-1 ${isCyan ? 'text-cyan-500' : 'text-purple-500'}`}>
                      {way.subtitle}
                    </p>
                    <h3 className="text-xl font-bold text-white">{way.title}</h3>
                  </div>

                  {/* Desc & points */}
                  <p className="text-xs text-slate-400 leading-relaxed mb-4">{way.desc}</p>
                  <ul className="space-y-3 flex-1 mb-6">
                    {way.points.map((p, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <div className={`w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 ${isCyan ? 'bg-cyan-400' : 'bg-purple-500'}`} />
                        <span className="text-xs text-slate-300 leading-snug">{p}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <a
                    href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(way.waText)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-3.5 rounded-xl font-bold text-sm transition-all duration-300 flex items-center justify-center gap-2 ${
                      way.highlight
                        ? 'bg-gradient-to-r from-cyan-400 to-purple-400 text-black hover:from-cyan-300 hover:to-purple-300'
                        : 'bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-purple-500/30'
                    }`}
                  >
                    {way.cta}
                    <ArrowRight size={15} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom contact bar */}
        <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-[#150a26] to-[#0a1820] border border-white/8 p-7 md:p-9 flex flex-col md:flex-row items-center justify-between gap-5">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <MessageSquare size={16} className="text-purple-400" />
              <h4 className="text-base font-bold text-white">Ada pertanyaan atau ide kolaborasi lain?</h4>
            </div>
            <p className="text-slate-400 text-sm max-w-xl leading-relaxed">
              Tim AINA terbuka untuk semua bentuk percakapan — dari diskusi ide hingga penjajakan kerja sama yang lebih serius.
            </p>
          </div>
          <a
            href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent('Halo, saya ingin berdiskusi tentang AINA.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group shrink-0 inline-flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-full text-white font-semibold text-sm transition-all hover:bg-white/10 hover:border-purple-500/40 backdrop-blur-sm"
          >
            <span>Mulai Percakapan</span>
            <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default FundingSection;
