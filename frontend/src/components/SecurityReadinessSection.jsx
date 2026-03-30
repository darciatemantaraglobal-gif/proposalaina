import React from 'react';
import { KeyRound, Gauge, Server, ShieldCheck } from 'lucide-react';

const pillars = [
  {
    icon: KeyRound,
    title: 'Autentikasi Pengguna',
    desc: 'Setiap pengguna AINA memiliki akun yang dilindungi sistem autentikasi berbasis token. Akses ke fitur dan data dikontrol berdasarkan peran — pengguna biasa, kontributor, dan admin memiliki hak akses yang berbeda.',
    tag: 'Identity & Access',
    color: 'purple',
  },
  {
    icon: Gauge,
    title: 'Kontrol & Pembatasan Penggunaan',
    desc: 'Sistem AINA dilengkapi mekanisme pembatasan penggunaan untuk menjaga kualitas layanan dan mencegah penyalahgunaan. Ini memastikan semua pengguna mendapat pengalaman yang adil dan stabil.',
    tag: 'Usage Control',
    color: 'cyan',
  },
  {
    icon: Server,
    title: 'Fondasi Backend yang Matang',
    desc: 'Backend AINA dibangun dengan struktur yang bersih dan terencana — bukan tumpukan kode cepat. Arsitektur ini memudahkan penambahan fitur baru, pemeliharaan sistem, dan pertumbuhan kapasitas pengguna.',
    tag: 'System Foundation',
    color: 'purple',
  },
];

const SecurityReadinessSection = () => {
  return (
    <section className="relative bg-[#050509] py-14 md:py-20 px-4 md:px-6 overflow-hidden font-sans text-slate-300">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMTM5LCA5MiwgMjQ2LCAwLjA1KSIvPjwvc3ZnPg==')] opacity-40 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-purple-900/8 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-purple-900/20 border border-purple-500/20 backdrop-blur-sm">
            <ShieldCheck size={12} className="text-purple-400" />
            <span className="text-[10px] md:text-xs text-purple-200 font-bold uppercase tracking-widest">
              Keamanan & Kesiapan Produk
            </span>
          </div>
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-3 leading-tight">
            Dibangun dengan Standar yang{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              Bisa Dipercaya.
            </span>
          </h2>
          <p className="mx-auto max-w-xl text-sm text-slate-400 leading-relaxed">
            AINA bukan prototipe cepat yang asal jalan. Dari awal, sistem dibangun dengan fondasi yang aman, terkontrol, dan siap dikembangkan lebih jauh.
          </p>
        </div>

        {/* 3 pillars */}
        <div className="grid gap-4 md:grid-cols-3 mb-8 md:mb-10">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            const isPurple = pillar.color === 'purple';
            return (
              <div
                key={i}
                className="group relative bg-[#0e0e12] rounded-2xl p-4 md:p-6 border transition-all duration-300 hover:-translate-y-1 hover:bg-[#13131a]"
                style={{ borderColor: isPurple ? 'rgba(168,85,247,0.18)' : 'rgba(34,211,238,0.15)' }}
              >
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-[0.05] rounded-2xl transition-opacity bg-gradient-to-br ${isPurple ? 'from-purple-500' : 'from-cyan-500'} to-transparent`} />
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center border ${
                      isPurple ? 'bg-purple-500/10 border-purple-500/20 text-purple-400' : 'bg-cyan-500/10 border-cyan-500/20 text-cyan-400'
                    }`}>
                      <Icon size={20} />
                    </div>
                    <span className={`text-[9px] font-bold tracking-widest px-2 py-1 rounded-md border ${
                      isPurple ? 'bg-purple-500/8 border-purple-500/20 text-purple-400' : 'bg-cyan-500/8 border-cyan-500/20 text-cyan-400'
                    }`}>
                      {pillar.tag}
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-white mb-2 leading-snug">{pillar.title}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">{pillar.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom trust bar */}
        <div className="relative">
          <div className="absolute -inset-px bg-gradient-to-r from-purple-900/30 to-cyan-900/20 rounded-2xl blur opacity-50" />
          <div className="relative bg-[#0a0a12] border border-white/8 rounded-2xl px-6 py-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center flex-shrink-0">
              <ShieldCheck size={18} className="text-purple-400" />
            </div>
            <div className="flex-1">
              <h5 className="text-white font-bold text-sm mb-1">Siap untuk Digunakan, Siap untuk Berkembang</h5>
              <p className="text-xs text-slate-400 leading-relaxed">
                Sistem AINA sudah melewati tahap pengembangan awal dan aktif berjalan. Fondasi yang ada sekarang dirancang agar mudah diperluas — lebih banyak pengguna, lebih banyak fitur, lebih banyak konten — tanpa harus membangun ulang dari awal.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecurityReadinessSection;
