import React from 'react';
import { Clock, CheckCircle2, Zap, Layers, MessageCircle, SlidersHorizontal, Map, Star } from 'lucide-react';

const FutureFeaturesSection = () => {
  const tiers = [
    {
      label: 'Sedang Dikuatkan',
      labelColor: 'text-cyan-300',
      badgeColor: 'bg-cyan-500/10 border-cyan-500/30 text-cyan-300',
      dotColor: 'bg-cyan-400',
      glowColor: 'from-cyan-500',
      borderColor: 'rgba(34,211,238,0.2)',
      status: 'IN PROGRESS',
      statusColor: 'bg-cyan-600/20 text-cyan-400 border-cyan-500/30',
      features: [
        {
          icon: SlidersHorizontal,
          title: 'Personalisasi & Response Style',
          desc: 'Pengguna bisa mengatur gaya respons AINA singkat, detail, formal, atau santai sesuai preferensi belajar masing-masing.',
          items: ['Pilihan tone dan panjang jawaban', 'Preferensi topik yang diprioritaskan', 'Profil pengguna yang lebih kaya'],
        },
        {
          icon: Star,
          title: 'Contributor Dashboard',
          desc: 'Tampilan khusus bagi kontributor untuk mengelola, memantau, dan meningkatkan kualitas konten yang mereka tambahkan ke knowledge base AINA.',
          items: ['Statistik kontribusi per pengguna', 'Antrian review konten', 'Sistem reward kontributor aktif'],
        },
        {
          icon: Layers,
          title: 'Filter & Kategorisasi Berita',
          desc: 'Pengguna bisa memilih kategori berita yang ingin diikuti akademik, visa, kegiatan komunitas, atau topik tertentu.',
          items: ['Preferensi kategori berita', 'Notifikasi topik spesifik', 'Arsip berita yang bisa dicari'],
        },
      ],
    },
    {
      label: 'Fase Berikutnya',
      labelColor: 'text-purple-300',
      badgeColor: 'bg-purple-500/10 border-purple-500/30 text-purple-300',
      dotColor: 'bg-purple-400',
      glowColor: 'from-purple-500',
      borderColor: 'rgba(168,85,247,0.2)',
      status: 'NEXT PHASE',
      statusColor: 'bg-purple-600/20 text-purple-400 border-purple-500/30',
      features: [
        {
          icon: Map,
          title: 'Direktori Layanan Kairo',
          desc: 'Database lengkap lokasi strategis untuk Masisir rumah sakit, klinik, toko Indonesia, tempat makan halal, dan titik penting lainnya.',
          items: ['Peta interaktif lokasi penting', 'Ulasan dan tips dari komunitas', 'Update real-time dari kontributor'],
        },
        {
          icon: Zap,
          title: 'Booking Konsultasi',
          desc: 'Satu pintu untuk menjadwalkan konsultasi dengan mentor senior, ustadz, atau tenaga ahli yang berpengalaman di bidangnya.',
          items: ['Booking sesi konsultasi terjadwal', 'Daftar mentor terverifikasi', 'Riwayat konsultasi yang tersimpan'],
        },
      ],
    },
    {
      label: 'Masa Depan',
      labelColor: 'text-slate-400',
      badgeColor: 'bg-slate-500/10 border-slate-500/30 text-slate-400',
      dotColor: 'bg-slate-500',
      glowColor: 'from-slate-500',
      borderColor: 'rgba(148,163,184,0.15)',
      status: 'PLANNED',
      statusColor: 'bg-slate-700/40 text-slate-400 border-slate-500/20',
      features: [
        {
          icon: MessageCircle,
          title: 'Direct Messaging',
          desc: 'Komunikasi peer-to-peer antar sesama Masisir dalam ekosistem AINA untuk kolaborasi, mentoring, dan dukungan komunitas yang lebih erat.',
          items: ['Direct & group messaging', 'Notifikasi real-time', 'Kontrol privasi pengguna'],
        },
        {
          icon: Layers,
          title: 'Integrasi Sistem Eksternal',
          desc: 'Koneksi ke sistem resmi universitas dan lembaga terkait untuk memperbarui informasi secara otomatis dan lebih akurat.',
          items: ['Sinkronisasi info Azhar', 'Integrasi layanan imigrasi', 'API partner komunitas Masisir'],
        },
      ],
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#050509] py-16 md:py-24 px-4 md:px-6 font-sans text-slate-300">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMTM5LCA5MiwgMjQ2LCAwLjA1KSIvPjwvc3ZnPg==')] opacity-40 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-10 md:mb-16 text-center">
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-purple-900/20 border border-purple-500/20 backdrop-blur-sm">
            <Clock size={12} className="text-cyan-400" />
            <span className="text-[10px] md:text-xs text-purple-200 font-bold uppercase tracking-widest">
              Peta Pengembangan
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Apa yang Sedang{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              Dibangun Selanjutnya
            </span>
            ?
          </h2>
          <p className="mx-auto max-w-2xl text-sm md:text-base text-slate-400 leading-relaxed">
            AINA dibangun secara bertahap dan jujur. Berikut tiga lapisan pengembangan yang jelas dengan pembeda antara yang sudah ada, yang sedang dikuatkan, dan yang direncanakan.
          </p>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-8 md:mb-12">
          {[
            { dot: 'bg-cyan-400', label: 'Sedang Dikuatkan' },
            { dot: 'bg-purple-400', label: 'Fase Berikutnya' },
            { dot: 'bg-slate-500', label: 'Masa Depan' },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2 bg-[#0e0e12] border border-white/5 rounded-full px-4 py-2">
              <div className={`w-2 h-2 rounded-full ${item.dot}`} />
              <span className="text-xs text-slate-400">{item.label}</span>
            </div>
          ))}
        </div>

        {/* Tiers */}
        <div className="space-y-7 md:space-y-10">
          {tiers.map((tier, ti) => (
            <div key={ti}>
              {/* Tier label */}
              <div className="flex items-center gap-3 mb-5">
                <div className={`w-2 h-2 rounded-full ${tier.dotColor}`} />
                <span className={`text-xs font-bold uppercase tracking-widest ${tier.labelColor}`}>
                  {tier.label}
                </span>
                <div className="flex-1 h-px bg-white/5" />
              </div>

              {/* Feature cards */}
              <div className={`grid gap-4 ${tier.features.length === 2 ? 'md:grid-cols-2' : 'md:grid-cols-3'}`}>
                {tier.features.map((feature, fi) => {
                  const Icon = feature.icon;
                  return (
                    <div
                      key={fi}
                      className="group relative bg-[#0e0e12] border rounded-2xl p-4 md:p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-[#13131a]"
                      style={{ borderColor: tier.borderColor }}
                    >
                      <div className={`absolute inset-0 opacity-0 group-hover:opacity-[0.06] rounded-2xl transition-opacity duration-500 bg-gradient-to-br ${tier.glowColor} to-transparent`} />

                      <div className="relative z-10 flex flex-col h-full">
                        <div className="flex justify-between items-start mb-4">
                          <div className={`p-2.5 rounded-xl border ${tier.badgeColor}`}>
                            <Icon size={18} />
                          </div>
                          <span className={`text-[10px] font-bold px-2 py-1 rounded-md border ${tier.statusColor}`}>
                            {tier.status}
                          </span>
                        </div>

                        <h3 className="text-base font-bold text-white mb-2 leading-snug">
                          {feature.title}
                        </h3>
                        <p className="text-xs text-slate-400 leading-relaxed mb-5 border-b border-white/5 pb-4 flex-1">
                          {feature.desc}
                        </p>

                        <ul className="space-y-2 mt-auto">
                          {feature.items.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2.5">
                              <CheckCircle2 size={12} className={`mt-0.5 flex-shrink-0 ${ti === 0 ? 'text-cyan-500' : ti === 1 ? 'text-purple-500' : 'text-slate-600'}`} />
                              <span className="text-[11px] text-slate-300 group-hover:text-white transition-colors">
                                {item}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-8 md:mt-14 flex justify-center">
          <div className="inline-flex items-center gap-4 bg-[#0e0e12] border border-white/10 rounded-full px-6 py-3 md:px-8 md:py-4 shadow-xl">
            <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center border border-purple-500/20 shrink-0">
              <Clock size={18} className="text-purple-400" />
            </div>
            <p className="text-xs md:text-sm text-slate-300">
              Prioritas pengembangan ditentukan berdasarkan{' '}
              <span className="text-white font-bold">kebutuhan nyata komunitas Masisir</span>{' '}
              bukan sekadar roadmap di atas kertas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FutureFeaturesSection;
