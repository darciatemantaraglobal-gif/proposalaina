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
  <section className="relative bg-[#050509] py-8 md:py-20 px-4 md:px-8 overflow-hidden" id="kolaborasi">
    <div className="pointer-events-none absolute inset-0 dot-grid opacity-40" />
    <div className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[600px] -translate-x-1/2 rounded-full blur-[140px]" style={{ background: 'hsl(270 60% 55% / 0.07)' }} />

    <div className="relative z-10 max-w-5xl mx-auto">
      <div className="mb-5 md:mb-14 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-purple-400/30 bg-purple-500/5 px-3 py-1 mb-3 backdrop-blur-sm">
          <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-purple-300">Kolaborasi</span>
        </div>
        <h2 className="text-2xl md:text-4xl font-bold text-white leading-tight font-display">
          AINA tumbuh{' '}
          <span className="text-gradient-purple-cyan">bersama komunitasnya.</span>
        </h2>
        <p className="mt-2 text-xs md:text-sm text-muted-foreground max-w-xl mx-auto">Pakai sehari-hari, isi knowledge base, atau kolaborasi lebih dalam — semua punya tempatnya.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-5">
        {ways.map((way, i) => {
          const Icon = way.icon;
          const isCyan = way.color === 'cyan';
          return (
            <div key={i} className={`relative flex flex-col rounded-2xl p-3 md:p-5 border transition-all duration-300 ${way.highlight ? 'bg-[#0f0f18]/80 border-cyan-500/30 backdrop-blur-sm glow-purple-sm' : 'bg-[#0f0f18]/80 border-purple-500/20 backdrop-blur-sm hover:border-purple-500/40'}`}>
              {way.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-purple text-white text-[9px] font-bold px-3 py-0.5 rounded-full whitespace-nowrap shadow-lg shadow-purple-500/30">
                    KONTRIBUSI LANGSUNG
                  </span>
                </div>
              )}

              <div className={`w-9 h-9 rounded-xl flex items-center justify-center border mb-3 ${isCyan ? 'bg-cyan-500/10 border-cyan-500/20 text-cyan-400' : 'bg-purple-500/10 border-purple-500/20 text-purple-400'}`}>
                <Icon size={16} />
              </div>

              <p className={`text-[10px] font-bold uppercase tracking-wider mb-1 ${isCyan ? 'text-cyan-500' : 'text-purple-500'}`}>{way.subtitle}</p>
              <h3 className="text-base font-bold text-white mb-1.5 font-display">{way.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed mb-3">{way.desc}</p>

              <ul className="space-y-1.5 flex-1 mb-4">
                {way.points.map((p, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <div className={`w-1 h-1 rounded-full mt-1.5 flex-shrink-0 ${isCyan ? 'bg-cyan-400' : 'bg-purple-400'}`} />
                    <span className="text-xs text-foreground/70 leading-snug">{p}</span>
                  </li>
                ))}
              </ul>

              <a
                href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(way.waText)}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-2.5 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all ${way.highlight ? 'bg-gradient-purple text-white hover:opacity-90 shadow-lg shadow-purple-500/25' : 'bg-purple-500/10 hover:bg-purple-500/15 text-purple-300 border border-purple-500/20'}`}
              >
                {way.cta}
                <ArrowRight size={13} />
              </a>
            </div>
          );
        })}
      </div>

      <div className="bg-[#0f0f18]/80 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-3 md:p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div>
          <div className="flex items-center gap-2 mb-0.5">
            <MessageSquare size={13} className="text-purple-400" />
            <p className="text-sm font-bold text-white font-display">Ada pertanyaan atau ide lain?</p>
          </div>
          <p className="text-xs text-muted-foreground">Tim AINA terbuka untuk semua bentuk percakapan.</p>
        </div>
        <a
          href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent('Halo, saya ingin berdiskusi tentang AINA.')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/25 rounded-full text-white font-semibold text-sm hover:bg-purple-500/15 hover:border-purple-500/40 transition-all"
        >
          Mulai Percakapan
          <ArrowRight size={13} className="text-purple-400" />
        </a>
      </div>
    </div>
  </section>
);

export default FundingSection;
