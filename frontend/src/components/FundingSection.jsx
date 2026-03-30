import React from 'react';
import { Users2, Code2, Handshake, ArrowRight, MessageSquare } from 'lucide-react';

const phoneNumber = '6281311506025';

const ways = [
  {
    icon: Users2,
    title: 'Pakai AINA',
    subtitle: 'Kontribusi Paling Mudah',
    desc: 'Gunakan AINA setiap hari, berikan feedback, dan ajak sesama Masisir. Setiap user baru membuat ekosistem ini semakin berguna.',
    points: ['Gunakan fitur dan share pengalaman', 'Ajak teman Masisir bergabung', 'Berikan feedback langsung'],
    color: 'purple',
    waText: 'Halo, saya ingin mulai menggunakan AINA!',
    cta: 'Mulai Pakai AINA',
  },
  {
    icon: Code2,
    title: 'Berkontribusi Konten',
    subtitle: 'Kontributor Knowledge',
    desc: 'Tambahkan informasi yang kamu tahu ke knowledge base AINA — birokrasi, akademik, atau kehidupan di Mesir.',
    points: ['Isi knowledge base dengan info valid', 'Koreksi informasi yang sudah ada', 'Dapat pengakuan sebagai kontributor aktif'],
    color: 'cyan',
    highlight: true,
    waText: 'Halo, saya ingin menjadi kontributor knowledge base AINA.',
    cta: 'Jadi Kontributor',
  },
  {
    icon: Handshake,
    title: 'Kolaborasi',
    subtitle: 'Partner & Sponsor',
    desc: 'Organisasi, lembaga, atau individu yang ingin berkolaborasi lebih dalam untuk mengembangkan AINA bersama.',
    points: ['Kolaborasi organisasi Masisir', 'Dukungan pengembangan sistem', 'Partnership konten dan layanan'],
    color: 'purple',
    waText: 'Halo, saya ingin mendiskusikan kolaborasi dengan AINA.',
    cta: 'Diskusi Kolaborasi',
  },
];

const FundingSection = () => (
  <section className="bg-[#050509] py-14 md:py-20 px-4 md:px-8" id="kolaborasi">
    <div className="max-w-5xl mx-auto">
      <div className="mb-10 md:mb-14">
        <span className="text-[10px] font-bold uppercase tracking-widest text-purple-400">Kolaborasi</span>
        <h2 className="mt-2 text-3xl md:text-4xl font-bold text-white leading-tight">
          AINA tumbuh{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">bersama komunitasnya.</span>
        </h2>
        <p className="mt-3 text-sm text-slate-400 max-w-xl">Ada banyak cara untuk jadi bagian dari AINA — dari menggunakannya sehari-hari hingga kolaborasi lebih dalam.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {ways.map((way, i) => {
          const Icon = way.icon;
          const isCyan = way.color === 'cyan';
          return (
            <div key={i} className={`relative flex flex-col rounded-2xl p-5 border transition-all duration-300 ${way.highlight ? 'bg-[#0c0c14] border-cyan-500/30 shadow-[0_0_30px_-10px_rgba(34,211,238,0.2)]' : 'bg-[#0c0c14] border-white/6 hover:border-purple-500/20'}`}>
              {way.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-400 text-black text-[10px] font-bold px-3 py-1 rounded-full whitespace-nowrap">
                    KONTRIBUSI LANGSUNG
                  </span>
                </div>
              )}

              <div className={`w-10 h-10 rounded-xl flex items-center justify-center border mb-4 ${isCyan ? 'bg-cyan-500/10 border-cyan-500/20 text-cyan-400' : 'bg-purple-500/10 border-purple-500/20 text-purple-400'}`}>
                <Icon size={18} />
              </div>

              <p className={`text-[10px] font-bold uppercase tracking-wider mb-1 ${isCyan ? 'text-cyan-500' : 'text-purple-500'}`}>{way.subtitle}</p>
              <h3 className="text-base font-bold text-white mb-2">{way.title}</h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">{way.desc}</p>

              <ul className="space-y-2 flex-1 mb-5">
                {way.points.map((p, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <div className={`w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 ${isCyan ? 'bg-cyan-400' : 'bg-purple-400'}`} />
                    <span className="text-xs text-slate-300 leading-snug">{p}</span>
                  </li>
                ))}
              </ul>

              <a
                href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(way.waText)}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all ${way.highlight ? 'bg-gradient-to-r from-cyan-400 to-purple-400 text-black hover:from-cyan-300 hover:to-purple-300' : 'bg-white/5 hover:bg-white/8 text-white border border-white/10'}`}
              >
                {way.cta}
                <ArrowRight size={14} />
              </a>
            </div>
          );
        })}
      </div>

      <div className="bg-[#0c0c14] border border-white/6 rounded-2xl p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <MessageSquare size={14} className="text-purple-400" />
            <p className="text-sm font-bold text-white">Ada pertanyaan atau ide lain?</p>
          </div>
          <p className="text-xs text-slate-400">Tim AINA terbuka untuk semua bentuk percakapan.</p>
        </div>
        <a
          href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent('Halo, saya ingin berdiskusi tentang AINA.')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 bg-white/5 border border-white/10 rounded-full text-white font-semibold text-sm hover:bg-white/10 hover:border-purple-500/30 transition-all"
        >
          Mulai Percakapan
          <ArrowRight size={14} className="text-slate-400" />
        </a>
      </div>
    </div>
  </section>
);

export default FundingSection;
