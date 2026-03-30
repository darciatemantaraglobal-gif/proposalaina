import React from 'react';
import { Heart, CheckCircle2, Bot, User, Shield, Star, BookOpen, Users2, Zap } from 'lucide-react';

const examples = [
  {
    q: 'Cara perpanjang iqamah di Cairo?',
    a: 'Datang ke Mogamma El-Tahrir lantai 1, minimal H-30 sebelum expired. Bawa paspor asli + fotokopi, foto 4x6, dan surat keterangan studi dari universitas.',
    tag: 'KB Birokrasi Masisir',
    conf: 'Tinggi',
    confColor: 'emerald',
  },
  {
    q: 'Jadwal daftar ulang Al-Azhar semester genap?',
    a: 'Pendaftaran ulang dibuka Februari–Maret via portal tawjeeh.azhar.edu.eg. Pantau pengumuman resmi masing-masing kulliyah.',
    tag: 'KB Akademik Azhar',
    conf: 'Sedang',
    confColor: 'yellow',
  },
  {
    q: 'Nomor darurat KBRI Cairo?',
    a: 'KBRI Cairo: +20 2 3760 5015. Hotline WNI 24 jam: +20 100 069 8033. Layanan konsuler Senin–Jumat pukul 08.00–16.00.',
    tag: 'KB Konsuler KBRI',
    conf: 'Tinggi',
    confColor: 'emerald',
  },
];

const roles = [
  {
    icon: BookOpen,
    title: 'Knowledge Builder',
    desc: 'Menambahkan info birokrasi, akademik, dan kehidupan Masisir ke sistem AINA.',
    color: 'purple',
  },
  {
    icon: Shield,
    title: 'Fact Checker',
    desc: 'Memvalidasi dan memperbarui informasi agar selalu akurat dan bisa dipercaya.',
    color: 'cyan',
  },
  {
    icon: Zap,
    title: 'Early Adopter',
    desc: 'Pengguna awal yang aktif memberi feedback untuk perbaikan AINA ke depan.',
    color: 'purple',
  },
  {
    icon: Users2,
    title: 'Community Moderator',
    desc: 'Membantu menjaga kualitas diskusi dan konten di ekosistem Masisir.',
    color: 'cyan',
  },
];

const confColors = {
  emerald: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  yellow: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20',
};

const AppreciationSection = () => (
  <section className="relative bg-[#050509] py-8 md:py-20 px-6 md:px-8 overflow-hidden">
    <div className="pointer-events-none absolute inset-0 dot-grid opacity-40" />
    <div className="pointer-events-none absolute right-1/4 top-1/2 h-[400px] w-[500px] -translate-y-1/2 rounded-full blur-[140px]" style={{ background: 'hsl(270 60% 45% / 0.07)' }} />

    <div className="relative z-10 max-w-6xl mx-auto">
      <div className="mb-5 md:mb-12 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-pink-400/30 bg-pink-500/5 px-3 py-1 mb-3 backdrop-blur-sm">
          <Heart size={10} className="text-pink-400" />
          <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-pink-300">Apresiasi</span>
        </div>
        <h2 className="text-2xl md:text-4xl font-bold text-white leading-tight font-display">
          Kontribusi kalian{' '}
          <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(135deg, hsl(330 70% 65%), hsl(270 60% 65%))' }}>
            membuat ini bisa terjadi.
          </span>
        </h2>
        <p className="mt-2 text-xs md:text-sm text-muted-foreground max-w-xl mx-auto">
          Setiap informasi yang ditambahkan membantu AINA menjawab pertanyaan nyata seperti ini.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-4 items-stretch">

        {/* Left — Q&A examples */}
        <div className="w-full lg:w-[55%] flex flex-col gap-3">
          <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-purple-400 mb-1">Contoh jawaban AINA</p>
          {examples.map((ex, i) => (
            <div key={i} className="bg-[#0f0f18]/80 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-3 md:p-4 flex flex-col gap-2.5">
              {/* User question */}
              <div className="flex items-start gap-2 justify-end">
                <div className="bg-[#1a1228] border border-purple-500/20 rounded-xl rounded-tr-none px-3 py-2 max-w-[85%]">
                  <p className="text-[11px] text-white/80 leading-relaxed">{ex.q}</p>
                </div>
                <div className="w-5 h-5 rounded-full bg-[#1a1a28] border border-purple-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <User size={9} className="text-muted-foreground" />
                </div>
              </div>

              {/* AINA answer */}
              <div className="flex items-start gap-2">
                <div className="w-5 h-5 rounded-full bg-gradient-purple flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Bot size={9} className="text-white" />
                </div>
                <div className="bg-[#0a0a15] border border-purple-500/10 rounded-xl rounded-tl-none px-3 py-2 max-w-[88%]">
                  <p className="text-[11px] text-foreground/75 leading-relaxed mb-2">{ex.a}</p>
                  <div className="flex gap-1.5 flex-wrap">
                    <span className="text-[9px] px-1.5 py-0.5 bg-purple-500/10 text-purple-400 rounded border border-purple-500/20">
                      {ex.tag}
                    </span>
                    <span className={`text-[9px] px-1.5 py-0.5 rounded border ${confColors[ex.confColor]}`}>
                      Confidence: {ex.conf}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right — Recognition roles */}
        <div className="flex-1 flex flex-col gap-3">
          <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-purple-400 mb-1">Peran kontributor</p>
          <div className="grid grid-cols-2 gap-3 flex-1">
            {roles.map((role, i) => {
              const Icon = role.icon;
              const isCyan = role.color === 'cyan';
              return (
                <div key={i} className={`rounded-2xl p-3 border backdrop-blur-sm flex flex-col ${isCyan ? 'bg-[#0f0f18]/80 border-cyan-500/15' : 'bg-[#0f0f18]/80 border-purple-500/20'}`}>
                  <div className={`w-8 h-8 rounded-xl flex items-center justify-center mb-2.5 border ${isCyan ? 'bg-cyan-500/10 border-cyan-500/20 text-cyan-300' : 'bg-purple-500/10 border-purple-500/20 text-purple-300'}`}>
                    <Icon size={14} />
                  </div>
                  <h4 className="text-xs font-bold text-white mb-1 font-display leading-tight">{role.title}</h4>
                  <p className={`text-[10px] leading-relaxed ${isCyan ? 'text-cyan-200/45' : 'text-purple-200/45'}`}>{role.desc}</p>
                </div>
              );
            })}
          </div>

          {/* Bottom appreciation note */}
          <div className="bg-[#0f0f18]/80 border border-pink-500/15 rounded-2xl p-3 flex items-start gap-2.5">
            <div className="w-7 h-7 rounded-xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center flex-shrink-0">
              <Heart size={12} className="text-pink-400" />
            </div>
            <div>
              <p className="text-xs font-semibold text-white mb-0.5 font-display">Kontribusi awal punya nilai khusus</p>
              <p className="text-[10px] text-pink-200/40 leading-relaxed">Mereka yang bergabung di fase awal selalu diingat. Dan bagi yang percaya, setiap ilmu yang bermanfaat adalah amal yang terus mengalir, insyaAllah.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
);

export default AppreciationSection;
