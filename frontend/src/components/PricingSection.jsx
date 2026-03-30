import React, { useState } from 'react';
import { Check, Star, ArrowRight, Handshake, Building2, CalendarDays, MessageSquare, Zap } from 'lucide-react';

const waBase = 'https://wa.me/6281311506025?text=';

const packages = [
  {
    id: 'umkm-basic',
    category: 'UMKM',
    tier: 'Starter',
    price: 'Rp 300.000',
    priceUnit: '— Rp 500.000 / bulan',
    icon: Handshake,
    color: 'cyan',
    tagColor: 'bg-cyan-500/10 border-cyan-500/20 text-cyan-300',
    highlight: false,
    desc: 'Untuk UMKM atau bisnis skala kecil yang ingin menjangkau komunitas Masisir secara ringan.',
    benefits: [
      'Banner placement di halaman dashboard AINA',
      'Exposure ke pengguna aktif Masisir',
      'Mention singkat di announcement komunitas',
      'Durasi 30 hari aktif',
      'Laporan exposure dasar',
    ],
    waText: 'Halo, saya tertarik dengan Paket UMKM Starter untuk partnership dengan AINA.',
  },
  {
    id: 'umkm-standard',
    category: 'UMKM',
    tier: 'Standard',
    price: 'Rp 750.000',
    priceUnit: '— Rp 1.500.000 / bulan',
    icon: Handshake,
    color: 'purple',
    tagColor: 'bg-purple-500/10 border-purple-500/20 text-purple-300',
    highlight: false,
    desc: 'Untuk UMKM yang ingin eksposur lebih kuat dan terukur di ekosistem Masisir.',
    benefits: [
      'Banner placement prioritas (posisi lebih strategis)',
      'Exposure lebih tinggi di beberapa halaman',
      'Mention di announcement dengan konteks lebih kuat',
      'Durasi 30 hari + analitik lengkap',
      'Opsi perpanjangan dengan benefit kumulatif',
    ],
    waText: 'Halo, saya tertarik dengan Paket UMKM Standard untuk partnership dengan AINA.',
  },
  {
    id: 'corporate',
    category: 'Corporate',
    tier: 'Strategic Partner',
    price: 'Rp 2.000.000',
    priceUnit: '— Rp 5.000.000 / bulan',
    icon: Building2,
    color: 'purple',
    tagColor: 'bg-purple-500/10 border-purple-500/20 text-purple-300',
    highlight: true,
    desc: 'Untuk organisasi atau perusahaan yang ingin hadir secara signifikan di ekosistem digital Masisir.',
    benefits: [
      'Prioritas banner — posisi utama di semua halaman kunci',
      'Targeted popup announcement ke segmen pengguna',
      'Branding sebagai Partner Resmi AINA',
      'Exposure tinggi di dashboard, berita, dan komunitas',
      'Integrasi campaign dengan ekosistem AINA',
      'Co-branded content & kolaborasi konten',
      'Laporan performa bulanan terperinci',
    ],
    waText: 'Halo, saya tertarik dengan Paket Corporate Strategic Partner untuk partnership dengan AINA.',
  },
  {
    id: 'annual',
    category: 'Annual',
    tier: 'Annual Premium',
    price: 'Custom',
    priceUnit: '/ tahun — hemat s/d 25%',
    icon: CalendarDays,
    color: 'cyan',
    tagColor: 'bg-cyan-500/10 border-cyan-500/20 text-cyan-300',
    highlight: false,
    desc: 'Paket tahunan tersedia untuk semua tier — dengan diskon dan benefit tambahan eksklusif.',
    benefits: [
      'Semua benefit dari tier yang dipilih',
      'Diskon hingga 25% dibanding harga bulanan',
      'Priority onboarding & dedicated contact',
      'Slot partner resmi tahunan yang terbatas',
      'Visibility sepanjang tahun — tanpa jeda',
      'Review strategy session di awal periode',
    ],
    waText: 'Halo, saya ingin mendiskusikan Annual Partnership Package dengan AINA.',
  },
];

const PricingSection = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <section id="partnership" className="relative bg-[#050509] py-8 md:py-20 px-6 md:px-8 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 dot-grid opacity-40" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full blur-[150px]" style={{ background: 'hsl(270 60% 55% / 0.08)' }} />

      <div className="relative z-10 max-w-5xl mx-auto">

        {/* Header */}
        <div className="mb-6 md:mb-12 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-purple-400/30 bg-purple-500/5 px-3 py-1 mb-3 backdrop-blur-sm">
            <Zap size={11} className="text-purple-400" />
            <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-purple-300">Partnership Packages</span>
          </div>
          <h2 className="text-2xl md:text-4xl font-bold text-white leading-tight font-display">
            Hadir di ekosistem Masisir —{' '}
            <span className="text-gradient-purple-cyan">dengan paket yang tepat.</span>
          </h2>
          <p className="mt-2 text-xs md:text-sm text-muted-foreground max-w-xl mx-auto">
            Dari UMKM hingga korporat. Semua bisa disesuaikan.
          </p>
        </div>

        {/* Category label: UMKM */}
        <div className="flex items-center gap-3 mb-3">
          <div className="h-px flex-1 bg-gradient-to-r from-cyan-500/25 to-transparent" />
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-400/60 px-2">Paket UMKM</span>
          <div className="h-px flex-1 bg-gradient-to-l from-purple-500/20 to-transparent" />
        </div>

        {/* UMKM Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
          {packages.filter(p => p.category === 'UMKM').map((pkg) => {
            const Icon = pkg.icon;
            const isCyan = pkg.color === 'cyan';
            return (
              <div
                key={pkg.id}
                onMouseEnter={() => setHovered(pkg.id)}
                onMouseLeave={() => setHovered(null)}
                className={`group relative bg-[#0f0f18]/80 backdrop-blur-sm border rounded-2xl p-4 md:p-5 flex flex-col transition-all duration-300 ${
                  hovered === pkg.id
                    ? isCyan ? 'border-cyan-500/35 bg-[#0f0f18]' : 'border-purple-500/35 bg-[#0f0f18]'
                    : 'border-purple-500/20 hover:border-purple-500/30'
                }`}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <div className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full border text-[9px] font-bold uppercase tracking-wider mb-2 ${pkg.tagColor}`}>
                      <Icon size={9} />
                      {pkg.tier}
                    </div>
                    <div className="flex items-baseline gap-1">
                      <span className="text-xl font-black text-white font-display">{pkg.price}</span>
                    </div>
                    <span className="text-[11px] text-muted-foreground">{pkg.priceUnit}</span>
                  </div>
                </div>

                <p className="text-xs text-muted-foreground leading-relaxed mb-4">{pkg.desc}</p>

                <ul className="space-y-2 flex-1 mb-4">
                  {pkg.benefits.map((b, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check size={11} className={`flex-shrink-0 mt-0.5 ${isCyan ? 'text-cyan-400' : 'text-purple-400'}`} />
                      <span className="text-xs text-foreground/70 leading-snug">{b}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={`${waBase}${encodeURIComponent(pkg.waText)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-2.5 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all ${
                    isCyan
                      ? 'bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 hover:bg-cyan-500/15 hover:border-cyan-500/35'
                      : 'bg-purple-500/10 border border-purple-500/20 text-purple-300 hover:bg-purple-500/15 hover:border-purple-500/35'
                  }`}
                >
                  <MessageSquare size={13} />
                  Diskusikan Paket Ini
                </a>
              </div>
            );
          })}
        </div>

        {/* Category label: Corporate */}
        <div className="flex items-center gap-3 mb-3">
          <div className="h-px flex-1 bg-gradient-to-r from-purple-500/30 to-transparent" />
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-purple-400/60 px-2">Paket Corporate & Strategic Partner</span>
          <div className="h-px flex-1 bg-gradient-to-l from-purple-500/30 to-transparent" />
        </div>

        {/* Corporate + Annual */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
          {packages.filter(p => p.category === 'Corporate' || p.category === 'Annual').map((pkg) => {
            const Icon = pkg.icon;
            const isCyan = pkg.color === 'cyan';
            const isHighlight = pkg.highlight;
            return (
              <div
                key={pkg.id}
                onMouseEnter={() => setHovered(pkg.id)}
                onMouseLeave={() => setHovered(null)}
                className={`group relative backdrop-blur-sm border rounded-2xl p-4 md:p-5 flex flex-col transition-all duration-300 ${
                  isHighlight
                    ? 'bg-gradient-to-br from-[#1a0e30]/90 to-[#0f0f18]/90 border-purple-500/35 glow-purple-sm'
                    : 'bg-[#0f0f18]/80 border-cyan-500/20 hover:border-cyan-500/30'
                } ${hovered === pkg.id && !isHighlight ? 'bg-[#0f0f18]' : ''}`}
              >
                {isHighlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-gradient-purple text-white text-[9px] font-bold px-3 py-0.5 rounded-full whitespace-nowrap shadow-lg shadow-purple-500/30 flex items-center gap-1">
                      <Star size={8} fill="white" />
                      PALING POPULER
                    </span>
                  </div>
                )}

                {/* Header */}
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <div className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full border text-[9px] font-bold uppercase tracking-wider mb-2 ${pkg.tagColor}`}>
                      <Icon size={9} />
                      {pkg.tier}
                    </div>
                    <div className="flex items-baseline gap-1">
                      <span className="text-xl font-black text-white font-display">{pkg.price}</span>
                    </div>
                    <span className="text-[11px] text-muted-foreground">{pkg.priceUnit}</span>
                  </div>
                </div>

                <p className="text-xs text-muted-foreground leading-relaxed mb-4">{pkg.desc}</p>

                <ul className="space-y-2 flex-1 mb-4">
                  {pkg.benefits.map((b, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check size={11} className={`flex-shrink-0 mt-0.5 ${isHighlight ? 'text-purple-400' : isCyan ? 'text-cyan-400' : 'text-purple-400'}`} />
                      <span className="text-xs text-foreground/70 leading-snug">{b}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={`${waBase}${encodeURIComponent(pkg.waText)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-2.5 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all ${
                    isHighlight
                      ? 'bg-gradient-purple text-white hover:opacity-90 shadow-lg shadow-purple-500/25'
                      : 'bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 hover:bg-cyan-500/15 hover:border-cyan-500/35'
                  }`}
                >
                  <MessageSquare size={13} />
                  {isHighlight ? 'Mulai Diskusi Partnership' : 'Diskusikan Annual Package'}
                </a>
              </div>
            );
          })}
        </div>

        {/* Custom note */}
        <div className="bg-[#0f0f18]/80 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-3 md:p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center flex-shrink-0">
              <Star size={13} className="text-purple-400" />
            </div>
            <div>
              <p className="text-sm font-bold text-white font-display">Semua paket bisa disesuaikan</p>
              <p className="text-xs text-muted-foreground leading-relaxed mt-0.5">
                Skala exposure, durasi, format banner, dan integrasi campaign bisa dinegosiasikan sesuai kebutuhan bisnis kamu. Tim AINA siap mendiskusikan paket yang paling sesuai.
              </p>
            </div>
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
