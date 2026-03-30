import React from 'react';
import { Heart, Star, Users2, CheckCircle2, BookOpen, Handshake } from 'lucide-react';

const recognitions = [
  {
    icon: Star,
    title: 'Founding Contributor',
    color: 'purple',
    desc: 'Nama Anda tercatat sebagai bagian dari orang-orang pertama yang memperkuat fondasi pengetahuan AINA.',
  },
  {
    icon: BookOpen,
    title: 'Knowledge Builder',
    color: 'cyan',
    desc: 'Kontributor yang aktif memperkaya knowledge base mendapat pengakuan khusus dalam sistem dan profil AINA.',
  },
  {
    icon: Users2,
    title: 'Komunitas Inti',
    color: 'purple',
    desc: 'Akses lebih awal ke fitur-fitur baru dan ruang diskusi dengan tim pengembang AINA.',
  },
  {
    icon: Handshake,
    title: 'Partner Terpercaya',
    color: 'cyan',
    desc: 'Lembaga dan organisasi yang berkolaborasi tercantum dalam halaman mitra resmi AINA.',
  },
];

const values = [
  'Setiap pertanyaan yang dijawab dengan benar membantu Masisir membuat keputusan yang lebih baik.',
  'Setiap informasi yang dibagikan meringankan perjalanan Masisir baru yang datang ke Mesir.',
  'Setiap kontribusi memperkuat ekosistem pengetahuan yang bisa digunakan generasi Masisir berikutnya.',
];

const AppreciationSection = () => {
  return (
    <section className="relative bg-[#050509] py-14 md:py-20 px-4 md:px-6 font-sans text-slate-300 overflow-hidden">
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-8 md:mb-14">
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-purple-900/20 border border-purple-500/20 backdrop-blur-sm">
            <Heart size={12} className="text-pink-400" />
            <span className="text-[10px] md:text-xs text-purple-200 font-bold uppercase tracking-widest">
              Apresiasi & Pengakuan
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Setiap Kontribusi{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
              Punya Makna.
            </span>
          </h2>
          <p className="max-w-2xl mx-auto text-sm md:text-base text-slate-400 leading-relaxed">
            AINA tumbuh karena ada orang-orang yang mau meluangkan waktu dan ilmunya untuk sesama Masisir. Kontribusi mereka tidak kami anggap kecil.
          </p>
        </div>

        {/* Content Layout */}
        <div className="flex flex-col lg:flex-row gap-6 items-stretch">

          {/* LEFT: Main value card */}
          <div className="w-full lg:w-[42%]">
            <div className="relative h-full bg-gradient-to-b from-[#1e1040] to-[#0f0716] border border-purple-500/25 rounded-[2rem] p-5 md:p-8 flex flex-col overflow-hidden group hover:border-purple-500/40 transition-all duration-500 shadow-[0_0_40px_-15px_rgba(168,85,247,0.25)]">
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:24px_24px] opacity-30" />

              <div className="relative z-10">
                <div className="w-11 h-11 md:w-14 md:h-14 rounded-2xl bg-purple-500/15 border border-purple-500/25 flex items-center justify-center mb-4 md:mb-6">
                  <Heart size={26} className="text-pink-300" />
                </div>

                <h3 className="text-xl font-bold text-white mb-3 leading-snug">
                  Membangun AINA adalah Kontribusi untuk Masisir
                </h3>

                <p className="text-sm text-purple-200/60 mb-5 md:mb-8 leading-relaxed">
                  Setiap informasi yang ditambahkan, setiap pertanyaan yang dijawab, setiap diskusi yang dimoderasi — semua itu adalah kontribusi nyata untuk komunitas Masisir yang lebih baik.
                </p>

                {/* Value points */}
                <ul className="space-y-4 mt-auto">
                  {values.map((v, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 size={15} className="text-purple-400 mt-0.5 flex-shrink-0" />
                      <span className="text-xs text-purple-100/70 leading-relaxed">{v}</span>
                    </li>
                  ))}
                </ul>

                {/* Amal jariyah note */}
                <div className="mt-5 md:mt-8 flex items-center gap-3 bg-pink-900/20 border border-pink-500/20 rounded-2xl p-3 md:p-4">
                  <Heart size={18} className="text-pink-400 flex-shrink-0" />
                  <p className="text-xs text-pink-200/70 leading-relaxed">
                    Dan bagi yang percaya — setiap ilmu yang bermanfaat adalah amal yang terus mengalir, insyaAllah.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Recognition grid */}
          <div className="w-full lg:w-[58%] grid grid-cols-2 gap-4">
            {recognitions.map((r, i) => {
              const Icon = r.icon;
              const isPurple = r.color === 'purple';
              return (
                <div
                  key={i}
                  className={`group relative rounded-2xl p-4 flex flex-col gap-2 border transition-all duration-300 hover:-translate-y-1 ${
                    isPurple
                      ? 'bg-[#150e2e] border-purple-500/15 hover:border-purple-500/35'
                      : 'bg-[#081820] border-cyan-500/12 hover:border-cyan-500/30'
                  }`}
                >
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-[0.05] rounded-2xl transition-opacity bg-gradient-to-br ${isPurple ? 'from-purple-500' : 'from-cyan-400'} to-transparent`} />
                  <div className="relative z-10">
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-3 border ${
                      isPurple ? 'bg-purple-500/12 border-purple-500/20 text-purple-300' : 'bg-cyan-500/12 border-cyan-500/20 text-cyan-300'
                    }`}>
                      <Icon size={20} />
                    </div>
                    <h4 className="text-sm font-bold text-white mb-1.5">{r.title}</h4>
                    <p className={`text-[11px] leading-relaxed ${isPurple ? 'text-purple-200/55' : 'text-cyan-200/55'}`}>{r.desc}</p>
                  </div>
                </div>
              );
            })}

            {/* Wide bottom card */}
            <div className="col-span-2 bg-[#0e0e12] border border-white/8 rounded-2xl p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="w-11 h-11 rounded-xl bg-purple-500/12 border border-purple-500/20 flex items-center justify-center flex-shrink-0">
                <Star size={18} className="text-purple-400" />
              </div>
              <div>
                <h5 className="text-sm font-bold text-white mb-1">Kontribusi Awal Punya Nilai Khusus</h5>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Mereka yang bergabung dan berkontribusi di fase awal AINA diakui secara khusus sebagai bagian dari fondasi yang membangun ekosistem ini. Kesempatan ini tidak selalu ada — semakin besar AINA, semakin banyak yang ingin terlibat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppreciationSection;
