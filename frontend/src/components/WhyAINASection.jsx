import React from 'react';
import { Target, Brain, Link2, LayoutGrid, TrendingUp, CheckCircle2, X } from 'lucide-react';

const differentiators = [
  {
    icon: Target,
    title: 'Dibuat Khusus untuk Masisir',
    desc: 'Setiap aspek AINA — dari bahasa, konteks jawaban, hingga fitur yang dibangun — dirancang berdasarkan realita kehidupan mahasiswa Indonesia di Mesir. Bukan adaptasi dari produk lain.',
    color: 'purple',
  },
  {
    icon: Brain,
    title: 'Bukan AI Generatif Umum',
    desc: 'AINA tidak mengandalkan generasi teks bebas yang rawan halusinasi. Jawaban dibangun dari knowledge base yang dikurasi — lebih akurat, lebih terpercaya, dan lebih relevan untuk kebutuhan spesifik Masisir.',
    color: 'cyan',
  },
  {
    icon: Link2,
    title: 'Jawaban dengan Sumber Transparan',
    desc: 'Setiap respons AINA dilengkapi rujukan sumber dan indikator confidence. Pengguna tidak perlu asal percaya — mereka bisa melihat dasar informasi dan memverifikasi sendiri.',
    color: 'purple',
  },
  {
    icon: LayoutGrid,
    title: 'Satu Sistem untuk Semua Kebutuhan',
    desc: 'Akademik, administrasi (visa, iqamah, tasjil), informasi lokal, diskusi komunitas, produktivitas — semuanya ada dalam satu ekosistem. Tidak perlu pindah-pindah aplikasi atau sumber.',
    color: 'cyan',
  },
  {
    icon: TrendingUp,
    title: 'Dibangun untuk Jadi Pusat Ekosistem',
    desc: 'AINA bukan produk sekali pakai. Roadmap-nya mengarah pada ekosistem digital lengkap: contributor network, komunitas aktif, sistem informasi terpusat, dan integrasi layanan penting untuk Masisir.',
    color: 'purple',
  },
];

const comparisonRows = [
  { aspect: 'Target pengguna', aina: 'Masisir (konteks Mesir & Azhar)', generic: 'Semua orang' },
  { aspect: 'Basis jawaban', aina: 'Knowledge base terstruktur', generic: 'Generasi bebas (rawan salah)' },
  { aspect: 'Transparansi sumber', aina: 'Ada — sumber + confidence level', generic: 'Tidak ada' },
  { aspect: 'Fitur pendukung', aina: 'Berita, threads, produktivitas, saved', generic: 'Hanya chat' },
  { aspect: 'Konteks lokal', aina: 'Dipahami mendalam (birokrasi, budaya)', generic: 'Tidak relevan' },
];

const WhyAINASection = () => {
  return (
    <section className="relative bg-[#050509] py-16 md:py-24 px-4 md:px-6 overflow-hidden font-sans text-slate-300">
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-cyan-900/8 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-900/8 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMTM5LCA5MiwgMjQ2LCAwLjA1KSIvPjwvc3ZnPg==')] opacity-40 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 md:mb-16">
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-purple-900/20 border border-purple-500/20 backdrop-blur-sm">
            <Target size={12} className="text-purple-400" />
            <span className="text-[10px] md:text-xs text-purple-200 font-bold uppercase tracking-widest">
              Mengapa AINA Berbeda
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
            AINA Bukan{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              ChatGPT versi Masisir.
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-sm md:text-base text-slate-400 leading-relaxed">
            AINA dibangun dari konteks yang berbeda, dengan pendekatan yang berbeda, untuk kebutuhan yang sangat spesifik. Berikut yang membedakannya dari AI umum.
          </p>
        </div>

        {/* 5 Differentiators */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mb-8 md:mb-16">
          {differentiators.map((item, i) => {
            const Icon = item.icon;
            const isPurple = item.color === 'purple';
            const isLast = i === differentiators.length - 1;
            return (
              <div
                key={i}
                className={`group relative bg-[#0e0e12] border rounded-2xl p-4 md:p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:bg-[#13131a] ${
                  isLast ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
                style={{ borderColor: isPurple ? 'rgba(168,85,247,0.2)' : 'rgba(34,211,238,0.15)' }}
              >
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-[0.06] rounded-2xl transition-opacity duration-500 bg-gradient-to-br ${isPurple ? 'from-purple-500' : 'from-cyan-500'} to-transparent`} />
                <div className="relative z-10">
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 border ${
                    isPurple
                      ? 'bg-purple-500/10 border-purple-500/20 text-purple-400'
                      : 'bg-cyan-500/10 border-cyan-500/20 text-cyan-400'
                  }`}>
                    <Icon size={20} />
                  </div>
                  <h4 className="text-base font-bold text-white mb-2 leading-snug">{item.title}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Comparison Table */}
        <div className="relative group">
          <div className="absolute -inset-px bg-gradient-to-r from-purple-900/40 to-cyan-900/20 rounded-2xl blur opacity-60" />
          <div className="relative bg-[#0a0a12] border border-white/8 rounded-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <div className="min-w-[480px]">
                {/* Table Header */}
                <div className="grid grid-cols-3 bg-[#13131a] border-b border-white/5 px-5 py-4">
                  <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Aspek</div>
                  <div className="text-xs text-purple-300 font-bold uppercase tracking-wider text-center">AINA</div>
                  <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider text-center">AI Umum</div>
                </div>
                {/* Rows */}
                {comparisonRows.map((row, i) => (
                  <div
                    key={i}
                    className={`grid grid-cols-3 px-5 py-4 border-b border-white/5 last:border-0 hover:bg-white/[0.02] transition-colors ${i % 2 === 0 ? 'bg-transparent' : 'bg-white/[0.01]'}`}
                  >
                    <div className="text-xs text-slate-400 font-medium pr-4 flex items-center">{row.aspect}</div>
                    <div className="flex items-center justify-center gap-1.5">
                      <CheckCircle2 size={12} className="text-emerald-400 flex-shrink-0" />
                      <span className="text-xs text-emerald-300 font-medium text-center">{row.aina}</span>
                    </div>
                    <div className="flex items-center justify-center gap-1.5">
                      <X size={12} className="text-slate-600 flex-shrink-0" />
                      <span className="text-xs text-slate-500 text-center">{row.generic}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyAINASection;
