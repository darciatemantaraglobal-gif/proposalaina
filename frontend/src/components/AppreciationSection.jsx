import React from 'react';
import { Heart, Star, Trophy, BookOpen, Users2, Pen, CheckCircle2 } from 'lucide-react';

const recognitions = [
  { icon: Trophy, title: 'Kontributor Awal', desc: 'Yang bergabung di fase awal punya tempat khusus dalam fondasi AINA.' },
  { icon: BookOpen, title: 'Knowledge Builder', desc: 'Setiap informasi yang ditambahkan membantu ribuan Masisir.' },
  { icon: Users2, title: 'Community Maker', desc: 'Moderator dan penjaga kualitas diskusi mendapat pengakuan penuh.' },
  { icon: Pen, title: 'Content Creator', desc: 'Penulis berita dan artikel AINA diakui sebagai kontributor resmi.' },
];

const AppreciationSection = () => (
  <section className="bg-[#050509] py-14 md:py-20 px-4 md:px-6">
    <div className="max-w-5xl mx-auto">
      <div className="mb-10 md:mb-14">
        <span className="text-[10px] font-bold uppercase tracking-widest text-pink-400">Apresiasi</span>
        <h2 className="mt-2 text-3xl md:text-4xl font-bold text-white leading-tight">
          Setiap kontribusi{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">punya makna.</span>
        </h2>
        <p className="mt-3 text-sm text-slate-400 max-w-xl">AINA tumbuh karena ada orang-orang yang mau meluangkan waktu dan ilmunya. Kontribusi mereka tidak kami anggap kecil.</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 items-stretch">
        {/* Left: Main message */}
        <div className="w-full lg:w-[40%] bg-gradient-to-b from-[#1a0e30] to-[#0c0c14] border border-purple-500/20 rounded-2xl p-5 flex flex-col">
          <div className="w-10 h-10 rounded-xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center mb-4">
            <Heart size={18} className="text-pink-400" />
          </div>
          <h3 className="text-base font-bold text-white mb-2">Membangun AINA adalah kontribusi untuk Masisir</h3>
          <p className="text-xs text-purple-200/60 leading-relaxed mb-5">Setiap informasi yang ditambahkan, setiap pertanyaan yang dijawab, setiap diskusi yang dimoderasi — semua itu nyata dampaknya.</p>

          <ul className="space-y-2.5 flex-1">
            {[
              'Namamu tercatat sebagai bagian dari fondasi AINA',
              'Kontribusi awal punya nilai khusus yang tidak hilang',
              'Ekosistem yang kamu bangun akan bertahan lama',
            ].map((v, i) => (
              <li key={i} className="flex items-start gap-2.5">
                <CheckCircle2 size={13} className="text-purple-400 mt-0.5 flex-shrink-0" />
                <span className="text-xs text-purple-100/70 leading-relaxed">{v}</span>
              </li>
            ))}
          </ul>

          <div className="mt-5 flex items-start gap-2.5 bg-pink-900/15 border border-pink-500/15 rounded-xl p-3">
            <Heart size={14} className="text-pink-400 flex-shrink-0 mt-0.5" />
            <p className="text-[11px] text-pink-200/60 leading-relaxed">Dan bagi yang percaya — setiap ilmu yang bermanfaat adalah amal yang terus mengalir, insyaAllah.</p>
          </div>
        </div>

        {/* Right: Recognition grid */}
        <div className="flex-1 grid grid-cols-2 gap-3">
          {recognitions.map((r, i) => {
            const Icon = r.icon;
            const isPurple = i % 2 === 0;
            return (
              <div key={i} className={`rounded-2xl p-4 border transition-all hover:-translate-y-0.5 ${isPurple ? 'bg-[#110e24] border-purple-500/15' : 'bg-[#081618] border-cyan-500/12'}`}>
                <div className={`w-9 h-9 rounded-xl flex items-center justify-center mb-3 border ${isPurple ? 'bg-purple-500/10 border-purple-500/20 text-purple-300' : 'bg-cyan-500/10 border-cyan-500/20 text-cyan-300'}`}>
                  <Icon size={16} />
                </div>
                <h4 className="text-xs font-bold text-white mb-1">{r.title}</h4>
                <p className={`text-[11px] leading-relaxed ${isPurple ? 'text-purple-200/50' : 'text-cyan-200/50'}`}>{r.desc}</p>
              </div>
            );
          })}

          {/* Wide card */}
          <div className="col-span-2 bg-[#0c0c14] border border-purple-500/20 rounded-2xl p-4 flex items-start gap-3">
            <div className="w-9 h-9 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center flex-shrink-0">
              <Star size={15} className="text-purple-400" />
            </div>
            <div>
              <h5 className="text-xs font-bold text-white mb-1">Kontribusi awal punya nilai khusus</h5>
              <p className="text-[11px] text-slate-400 leading-relaxed">Mereka yang bergabung di fase awal diakui secara khusus sebagai fondasi AINA. Semakin besar AINA, semakin banyak yang ingin terlibat — tapi yang pertama selalu diingat.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AppreciationSection;
