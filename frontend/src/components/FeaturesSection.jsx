import React from 'react';
import { MessageSquare, Database, Link2, BarChart2, Newspaper, MessageCircle, CheckSquare, Bookmark, Users2, User, Bell, LayoutDashboard } from 'lucide-react';

const coreFeatures = [
  {
    icon: MessageSquare,
    title: 'AI Chat untuk Masisir',
    desc: 'Bukan AI generik. Setiap jawaban dihasilkan dari konteks dan knowledge base Masisir — bukan dari generasi bebas yang rawan salah.',
    tag: 'Core',
    color: 'purple',
  },
  {
    icon: Database,
    title: 'Knowledge-Based Answering',
    desc: 'Jawaban terikat ke knowledge base yang dikurasi kontributor. Sistem tidak menebak — ia mencari, mencocokkan, lalu menjawab.',
    tag: 'Core',
    color: 'cyan',
  },
  {
    icon: Link2,
    title: 'Source Transparency',
    desc: 'Setiap jawaban AI disertai sumber dari mana informasi diambil. Pengguna bisa verifikasi sendiri tanpa harus percaya buta.',
    tag: 'Core',
    color: 'purple',
  },
  {
    icon: BarChart2,
    title: 'Confidence Level',
    desc: 'Indikator tingkat keyakinan sistem pada setiap jawaban. Kalau informasinya terbatas, AINA jujur — bukan pura-pura yakin.',
    tag: 'Core',
    color: 'cyan',
  },
];

const supportingFeatures = [
  { icon: Newspaper, title: 'Berita & Pengumuman', desc: 'Feed informasi kampus, organisasi, dan komunitas Masisir — real-time, terpusat, tidak tenggelam di grup WA.', color: 'purple' },
  { icon: MessageCircle, title: 'Threads Komunitas', desc: 'Ruang diskusi peer-to-peer termoderasi per topik. Upvote jawaban terbaik, jawaban berkualitas naik ke atas.', color: 'cyan' },
  { icon: CheckSquare, title: 'Ruang Produktif', desc: 'Tasks, catatan, dan tracking target belajar dalam satu dashboard. Dirancang untuk ritme hidup Masisir.', color: 'purple' },
  { icon: Bookmark, title: 'Saved Answers', desc: 'Simpan jawaban AI atau postingan komunitas yang penting dan akses kembali kapan saja tanpa harus cari ulang.', color: 'cyan' },
  { icon: Users2, title: 'Contributor System', desc: 'Masisir bisa berkontribusi memperkaya knowledge base. Kontribusi diverifikasi sebelum masuk ke sistem.', color: 'purple' },
  { icon: User, title: 'Personalization', desc: 'AINA menyesuaikan relevansi informasi berdasarkan profil dan kebutuhan pengguna — kampus, tahun, minat.', color: 'cyan' },
  { icon: Bell, title: 'Announcement System', desc: 'Notifikasi pengumuman penting dari kampus atau organisasi — tersampaikan tepat waktu, tidak terlewat.', color: 'purple' },
  { icon: LayoutDashboard, title: 'Dashboard Terpusat', desc: 'Semua fitur diakses dari satu dashboard. Tidak perlu lompat-lompat antar aplikasi untuk kebutuhan yang berbeda.', color: 'cyan' },
];

const FeaturesSection = () => (
  <section id="fitur" className="relative bg-[#050509] py-8 md:py-20 px-4 md:px-6 overflow-hidden">
    <div className="pointer-events-none absolute inset-0 dot-grid opacity-40" />
    <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[160px]" style={{ background: 'hsl(270 60% 55% / 0.06)' }} />

    <div className="relative z-10 max-w-5xl mx-auto">

      {/* Header */}
      <div className="mb-6 md:mb-12 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-purple-400/30 bg-purple-500/5 px-3 py-1 mb-3 backdrop-blur-sm">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
          </span>
          <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-purple-300">12 Fitur — Semua Live</span>
        </div>
        <h2 className="text-2xl md:text-4xl font-bold text-white leading-tight font-display">
          Sudah berjalan.{' '}
          <span className="text-gradient-purple-cyan">Bukan yang masih direncanakan.</span>
        </h2>
        <p className="mt-2 text-xs md:text-sm text-muted-foreground max-w-xl mx-auto">Core AI engine di fondasi. Ekosistem fitur Masisir di atasnya.</p>
      </div>

      {/* Core Features */}
      <div className="mb-4">
        <div className="flex items-center gap-3 mb-3">
          <div className="h-px flex-1 bg-gradient-to-r from-purple-500/30 to-transparent" />
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-purple-400/60 px-2">Core — Mesin AI AINA</span>
          <div className="h-px flex-1 bg-gradient-to-l from-cyan-500/30 to-transparent" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {coreFeatures.map((f, i) => {
            const Icon = f.icon;
            const isPurple = f.color === 'purple';
            return (
              <div key={i} className={`relative group rounded-2xl p-3 md:p-4 border transition-all duration-300 hover:-translate-y-0.5 overflow-hidden ${isPurple ? 'bg-purple-500/5 border-purple-500/25 hover:border-purple-500/40 hover:bg-purple-500/8' : 'bg-cyan-500/5 border-cyan-500/20 hover:border-cyan-500/35 hover:bg-cyan-500/8'}`}>
                <div className="pointer-events-none absolute -right-3 -bottom-3 select-none font-display text-[4.5rem] font-black leading-none" style={{ color: isPurple ? 'hsl(270 60% 55% / 0.05)' : 'hsl(185 80% 55% / 0.05)' }}>
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div className="relative">
                  <div className="flex items-start justify-between mb-3">
                    <div className={`w-8 h-8 rounded-xl flex items-center justify-center border flex-shrink-0 ${isPurple ? 'bg-purple-500/15 border-purple-500/25 text-purple-400' : 'bg-cyan-500/15 border-cyan-500/25 text-cyan-400'}`}>
                      <Icon size={14} />
                    </div>
                    <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full border ${isPurple ? 'bg-purple-500/10 border-purple-500/25 text-purple-300' : 'bg-cyan-500/10 border-cyan-500/25 text-cyan-300'}`}>CORE</span>
                  </div>
                  <h3 className="text-xs font-bold text-white mb-1.5 font-display">{f.title}</h3>
                  <p className="text-[11px] text-muted-foreground leading-relaxed">{f.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Supporting Features */}
      <div>
        <div className="flex items-center gap-3 mb-3">
          <div className="h-px flex-1 bg-gradient-to-r from-purple-500/20 to-transparent" />
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground/40 px-2">Supporting — Ekosistem Masisir</span>
          <div className="h-px flex-1 bg-gradient-to-l from-cyan-500/20 to-transparent" />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {supportingFeatures.map((f, i) => {
            const Icon = f.icon;
            const isPurple = f.color === 'purple';
            return (
              <div key={i} className="group bg-[#0f0f18]/80 backdrop-blur-sm border border-purple-500/15 rounded-2xl p-3 hover:border-purple-500/30 hover:bg-[#0f0f18] transition-all duration-300">
                <div className="flex items-start justify-between mb-2">
                  <div className={`w-7 h-7 rounded-lg flex items-center justify-center border flex-shrink-0 ${isPurple ? 'bg-purple-500/10 border-purple-500/15 text-purple-400' : 'bg-cyan-500/10 border-cyan-500/15 text-cyan-400'}`}>
                    <Icon size={12} />
                  </div>
                  <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-md bg-emerald-500/8 border border-emerald-500/15 text-emerald-400/80">LIVE</span>
                </div>
                <h3 className="text-[11px] font-bold text-white mb-1 font-display">{f.title}</h3>
                <p className="text-[10px] text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  </section>
);

export default FeaturesSection;
