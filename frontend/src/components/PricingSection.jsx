import React, { useState } from 'react';
import { Check, Star, MessageSquare, Handshake, Building2, ArrowRight, Zap } from 'lucide-react';

const waBase = 'https://wa.me/6281311506025?text=';

const tiers = [
  {
    id: 'starter',
    tier: 'UMKM Starter',
    icon: Handshake,
    color: 'cyan',
    monthly: 350000,
    annual: 2980000,
    desc: 'Untuk UMKM yang ingin menjangkau komunitas Masisir secara ringan.',
    benefits: [
      'Banner di halaman dashboard AINA',
      'Exposure ke pengguna aktif',
      'Mention di announcement komunitas',
      'Laporan exposure dasar',
      'Durasi 30 hari aktif',
    ],
    waText: 'Halo, saya tertarik dengan Paket UMKM Starter untuk partnership dengan AINA.',
    highlight: false,
  },
  {
    id: 'standard',
    tier: 'UMKM Standard',
    icon: Handshake,
    color: 'purple',
    monthly: 800000,
    annual: 6800000,
    desc: 'Untuk UMKM yang ingin eksposur lebih kuat dan terukur di ekosistem Masisir.',
    benefits: [
      'Banner placement prioritas',
      'Exposure di beberapa halaman utama',
      'Mention announcement lebih kuat',
      'Analitik lengkap bulanan',
      'Opsi perpanjangan kumulatif',
    ],
    waText: 'Halo, saya tertarik dengan Paket UMKM Standard untuk partnership dengan AINA.',
    highlight: false,
  },
  {
    id: 'corporate',
    tier: 'Corporate',
    icon: Building2,
    color: 'purple',
    monthly: 3000000,
    annual: 25000000,
    desc: 'Untuk organisasi yang ingin hadir secara signifikan di ekosistem Masisir.',
    benefits: [
      'Banner prioritas di semua halaman kunci',
      'Targeted announcement ke segmen pengguna',
      'Branding sebagai Partner Resmi AINA',
      'Integrasi campaign ekosistem AINA',
      'Co-branded content & kolaborasi',
      'Laporan performa bulanan lengkap',
    ],
    waText: 'Halo, saya tertarik dengan Paket Corporate Strategic Partner untuk partnership dengan AINA.',
    highlight: true,
  },
];

const formatRupiah = (n) =>
  'Rp ' + n.toLocaleString('id-ID').replace(/,/g, '.');

const PricingSection = () => {
  const [billing, setBilling] = useState('monthly');
  const isAnnual = billing === 'annual';

  return (
    <section id="partnership" className="relative bg-[#050509] py-8 md:py-20 px-6 md:px-8 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 dot-grid opacity-40" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full blur-[150px]" style={{ background: 'hsl(270 60% 55% / 0.08)' }} />

      <div className="relative z-10 max-w-5xl mx-auto">

        {/* Header */}
        <div className="mb-8 md:mb-12 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-purple-400/30 bg-purple-500/5 px-3 py-1 mb-3 backdrop-blur-sm">
            <Zap size={11} className="text-purple-400" />
            <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-purple-300">Partnership Packages</span>
          </div>
          <h2 className="text-2xl md:text-4xl font-bold text-white leading-tight mb-4 font-display">
            Hadir di ekosistem Masisir{' '}
            <span className="text-gradient-purple-cyan">dengan paket yang tepat.</span>
          </h2>

          {/* Billing toggle */}
          <div className="inline-flex items-center bg-[#0f0f18]/80 border border-purple-500/20 rounded-full p-1 gap-1">
            <button
              onClick={() => setBilling('monthly')}
              className={`px-5 py-1.5 rounded-full text-xs font-bold transition-all ${!isAnnual ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/20' : 'text-muted-foreground hover:text-white'}`}
            >
              Bulanan
            </button>
            <button
              onClick={() => setBilling('annual')}
              className={`px-5 py-1.5 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 ${isAnnual ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/20' : 'text-muted-foreground hover:text-white'}`}
            >
              Tahunan
              <span className="bg-emerald-500/20 text-emerald-400 text-[9px] font-black px-1.5 py-0.5 rounded-full border border-emerald-500/25">Hemat ~29%</span>
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-5">
          {tiers.map((pkg) => {
            const Icon = pkg.icon;
            const isCyan = pkg.color === 'cyan';
            const price = isAnnual ? pkg.annual : pkg.monthly;
            const savedAmount = pkg.monthly * 12 - pkg.annual;

            return (
              <div
                key={pkg.id}
                className={`relative rounded-2xl p-5 flex flex-col transition-all duration-300 border ${
                  pkg.highlight
                    ? 'bg-gradient-to-br from-[#1a0e30]/90 to-[#0f0f18]/90 border-purple-500/40 glow-purple-sm'
                    : 'bg-[#0f0f18]/80 backdrop-blur-sm border-purple-500/20 hover:border-purple-500/35'
                }`}
              >
                {pkg.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-gradient-purple text-white text-[9px] font-bold px-3 py-0.5 rounded-full whitespace-nowrap shadow-lg shadow-purple-500/30 flex items-center gap-1">
                      <Star size={8} fill="white" />
                      PALING POPULER
                    </span>
                  </div>
                )}

                {/* Tier label */}
                <div className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full border text-[9px] font-bold uppercase tracking-wider mb-4 w-fit ${isCyan ? 'bg-cyan-500/10 border-cyan-500/20 text-cyan-300' : 'bg-purple-500/10 border-purple-500/20 text-purple-300'}`}>
                  <Icon size={9} />
                  {pkg.tier}
                </div>

                {/* Price */}
                <div className="mb-1">
                  <span className="text-2xl font-black text-white font-display">{formatRupiah(price)}</span>
                  <span className="text-xs text-muted-foreground ml-1">{isAnnual ? '/tahun' : '/bulan'}</span>
                </div>
                {isAnnual && (
                  <p className="text-[10px] text-emerald-400 font-semibold mb-1">Hemat {formatRupiah(savedAmount)} vs bulanan</p>
                )}
                {!isAnnual && (
                  <p className="text-[10px] text-muted-foreground/50 mb-1">atau {formatRupiah(pkg.annual)}/tahun</p>
                )}

                <p className="text-[11px] text-muted-foreground leading-relaxed mb-4 mt-1">{pkg.desc}</p>

                {/* Benefits */}
                <ul className="space-y-2 flex-1 mb-5">
                  {pkg.benefits.map((b, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check size={11} className={`flex-shrink-0 mt-0.5 ${pkg.highlight ? 'text-purple-400' : isCyan ? 'text-cyan-400' : 'text-purple-400'}`} />
                      <span className="text-[11px] text-foreground/70 leading-snug">{b}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={`${waBase}${encodeURIComponent(pkg.waText)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-2.5 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all ${
                    pkg.highlight
                      ? 'bg-gradient-purple text-white hover:opacity-90 shadow-lg shadow-purple-500/25'
                      : isCyan
                      ? 'bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 hover:bg-cyan-500/15'
                      : 'bg-purple-500/10 border border-purple-500/20 text-purple-300 hover:bg-purple-500/15'
                  }`}
                >
                  <MessageSquare size={13} />
                  Diskusikan Paket Ini
                </a>
              </div>
            );
          })}
        </div>

        {/* Custom note */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-[#0f0f18]/80 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-4">
          <div>
            <p className="text-sm font-bold text-white font-display">Butuh paket yang lebih fleksibel?</p>
            <p className="text-xs text-muted-foreground mt-0.5">Skala, durasi, dan format semua bisa dinegosiasikan.</p>
          </div>
          <a
            href={`${waBase}${encodeURIComponent('Halo, saya ingin mendiskusikan custom partnership package dengan AINA.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 px-4 py-2 bg-gradient-purple rounded-full text-white font-bold text-sm hover:opacity-90 transition-all shadow-lg shadow-purple-500/20 whitespace-nowrap"
          >
            Diskusi Custom
            <ArrowRight size={13} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
