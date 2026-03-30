import React from 'react';
import { Heart, Star, Trophy, BookOpen, Users2, Pen, CheckCircle2 } from 'lucide-react';

const recognitions = [
  { icon: Trophy, title: 'Kontributor Awal', desc: 'Yang bergabung di fase awal punya tempat khusus dalam fondasi AINA.' },
  { icon: BookOpen, title: 'Knowledge Builder', desc: 'Setiap informasi yang ditambahkan membantu ribuan Masisir.' },
  { icon: Users2, title: 'Community Maker', desc: 'Moderator dan penjaga kualitas diskusi mendapat pengakuan penuh.' },
  { icon: Pen, title: 'Content Creator', desc: 'Penulis berita dan artikel AINA diakui sebagai kontributor resmi.' },
];

const AppreciationSection = () => (
  <section className="relative bg-[#050509] py-8 md:py-20 px-4 md:px-6 overflow-hidden">
    <div className="pointer-events-none absolute inset-0 dot-grid opacity-40" />
    <div className="pointer-events-none absolute right-1/4 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full blur-[140px]" style={{ background: 'hsl(330 60% 55% / 0.06)' }} />

    <div className="relative z-10 max-w-5xl mx-auto">
      <div className="mb-5 md:mb-14 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-pink-400/30 bg-pink-500/5 px-3 py-1 mb-3 backdrop-blur-sm">
          <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-pink-300">Apresiasi</span>
        </div>
        <h2 className="text-2xl md:text-4xl font-bold text-white leading-tight font-display">
          Setiap kontribusi{' '}
          <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(135deg, hsl(330 70% 65%), hsl(270 60% 65%))' }}>
            punya makna.
          </span>
        </h2>
        <p className="mt-2 text-xs md:text-sm text-muted-foreground max-w-xl mx-auto">Tumbuh karena ada yang mau meluangkan waktu dan ilmunya.</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-3 items-stretch">
        {/* Left: Main message */}
        <div className="w-full lg:w-[38%] bg-[#0f0f18]/80 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-3 md:p-5 flex flex-col">
          <div className="w-9 h-9 rounded-xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center mb-3">
            <Heart size={16} className="text-pink-400" />
          </div>
          <h3 className="text-sm font-bold text-white mb-1.5 font-display">Membangun AINA adalah kontribusi untuk Masisir</h3>
          <p className="text-xs text-muted-foreground leading-relaxed mb-4">Setiap informasi yang ditambahkan, setiap pertanyaan yang dijawab, setiap diskusi yang dimoderasi — semua itu nyata dampaknya.</p>

          <ul className="space-y-2 flex-1">
            {['Namamu tercatat sebagai bagian dari fondasi AINA', 'Kontribusi awal punya nilai khusus yang tidak hilang', 'Ekosistem yang kamu bangun akan bertahan lama'].map((v, i) => (
              <li key={i} className="flex items-start gap-2">
                <CheckCircle2 size={12} className="text-purple-400 mt-0.5 flex-shrink-0" />
                <span className="text-xs text-foreground/70 leading-relaxed">{v}</span>
              </li>
            ))}
          </ul>

          <div className="mt-4 flex items-start gap-2 bg-pink-900/10 border border-pink-500/15 rounded-xl p-3">
            <Heart size={12} className="text-pink-400 flex-shrink-0 mt-0.5" />
            <p className="text-[11px] text-pink-200/50 leading-relaxed">Dan bagi yang percaya — setiap ilmu yang bermanfaat adalah amal yang terus mengalir, insyaAllah.</p>
          </div>
        </div>

        {/* Right: Recognition grid */}
        <div className="flex-1 grid grid-cols-2 gap-3">
          {recognitions.map((r, i) => {
            const Icon = r.icon;
            const isPurple = i % 2 === 0;
            return (
              <div key={i} className={`rounded-2xl p-3 border hover:-translate-y-0.5 transition-all backdrop-blur-sm ${isPurple ? 'bg-[#0f0f18]/80 border-purple-500/20' : 'bg-[#0f0f18]/80 border-cyan-500/15'}`}>
                <div className={`w-8 h-8 rounded-xl flex items-center justify-center mb-2.5 border ${isPurple ? 'bg-purple-500/10 border-purple-500/20 text-purple-300' : 'bg-cyan-500/10 border-cyan-500/20 text-cyan-300'}`}>
                  <Icon size={14} />
                </div>
                <h4 className="text-xs font-bold text-white mb-1 font-display">{r.title}</h4>
                <p className={`text-[11px] leading-relaxed ${isPurple ? 'text-purple-200/40' : 'text-cyan-200/40'}`}>{r.desc}</p>
              </div>
            );
          })}

          {/* Wide card */}
          <div className="col-span-2 bg-[#0f0f18]/80 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-3 flex items-start gap-3">
            <div className="w-8 h-8 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center flex-shrink-0">
              <Star size={13} className="text-purple-400" />
            </div>
            <div>
              <h5 className="text-xs font-bold text-white mb-1 font-display">Kontribusi awal punya nilai khusus</h5>
              <p className="text-[11px] text-muted-foreground leading-relaxed">Mereka yang bergabung di fase awal diakui secara khusus. Semakin besar AINA, semakin banyak yang ingin terlibat — tapi yang pertama selalu diingat.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AppreciationSection;
