import React from 'react';
import { FileWarning, BookX, MapPin, ZapOff, Info, ArrowRight } from 'lucide-react';

const ProblemSection = () => {
  const problems = [
    {
      icon: FileWarning,
      title: 'Birokrasi & Administrasi',
      highlight: 'Kritis',
      desc: 'Informasi soal Visa, Iqamah, dan Tasjil tersebar di mana-mana, tidak terpusat, dan sering berubah tanpa pemberitahuan resmi.',
      items: [
        'Proses berulang karena informasi tidak akurat',
        'Risiko denda dan masalah dokumen',
        'Tidak ada panduan terpadu step-by-step'
      ],
      color: 'purple'
    },
    {
      icon: BookX,
      title: 'Hambatan Akademik',
      highlight: 'Tinggi',
      desc: 'Kesenjangan metode belajar dan minimnya referensi membuat mahasiswa kesulitan mengikuti sistem perkuliahan Al-Azhar.',
      items: [
        'Sulit memahami kitab kuning (Turats)',
        'Minim referensi dan terjemahan valid',
        'Persiapan ujian (Imtihan) kurang terstruktur'
      ],
      color: 'cyan'
    },
    {
      icon: MapPin,
      title: 'Adaptasi Kehidupan',
      highlight: 'Perlu Perhatian',
      desc: 'Tinggal di negara baru tanpa jaringan yang kuat membuat mahasiswa rentan — mulai dari navigasi hingga akses layanan dasar.',
      items: [
        'Tidak tahu lokasi strategis dan penting',
        'Sulit mengakses layanan kesehatan',
        'Rawan tertipu karena kurang informasi lokal'
      ],
      color: 'purple'
    },
    {
      icon: ZapOff,
      title: 'Produktivitas & Arah',
      highlight: 'Perlu Perhatian',
      desc: 'Tanpa sistem penunjang yang jelas, mahasiswa mudah kehilangan fokus di tengah tekanan akademik dan kehidupan di luar negeri.',
      items: [
        'Manajemen waktu tidak terstruktur',
        'Tidak ada sistem tracking progres belajar',
        'Mudah burnout tanpa dukungan yang tepat'
      ],
      color: 'cyan'
    }
  ];

  return (
    <section className="relative bg-[#050509] py-20 px-6 font-sans text-slate-300 overflow-hidden">
      
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-900/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMTM5LCA5MiwgMjQ2LCAwLjA1KSIvPjwvc3ZnPg==')] opacity-40 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        
        <div className="mb-16 md:mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-purple-900/20 border border-purple-500/20 backdrop-blur-sm">
              <Info size={12} className="text-purple-400" />
              <span className="text-[10px] md:text-xs text-purple-200 font-bold uppercase tracking-widest">
                Kenali Masalahnya
              </span>
            </div>

            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
              Empat Tantangan Nyata <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">yang Dihadapi Masisir</span>
              <span className="text-white"> Setiap Hari.</span>
            </h2>
          </div>

          <div className="text-slate-400 text-sm md:text-right max-w-xs leading-relaxed border-l-2 md:border-l-0 md:border-r-2 border-purple-500/30 pl-4 md:pl-0 md:pr-4">
            <p>
              Masalah ini nyata, berulang setiap tahun, dan berdampak langsung pada kualitas belajar dan kehidupan Masisir.
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {problems.map((item, index) => {
            const Icon = item.icon;
            const isPurple = item.color === 'purple';

            return (
              <div 
                key={index}
                className="group relative bg-[#0e0e12] border border-white/5 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:bg-[#13131a]"
                style={{ borderColor: isPurple ? 'rgba(168,85,247,0.2)' : 'rgba(34,211,238,0.2)' }}
              >
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500 bg-gradient-to-br ${isPurple ? 'from-purple-500 to-transparent' : 'from-cyan-500 to-transparent'}`} />

                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex justify-between items-start mb-6">
                    <div className={`p-3 rounded-xl ${isPurple ? 'bg-purple-500/10 text-purple-400' : 'bg-cyan-500/10 text-cyan-400'}`}>
                      <Icon size={24} />
                    </div>
                    <span className={`text-[10px] font-bold px-2 py-1 rounded-md border ${isPurple ? 'border-purple-500/30 text-purple-300 bg-purple-500/10' : 'border-cyan-500/30 text-cyan-300 bg-cyan-500/10'}`}>
                      {item.highlight}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-300 transition-all">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 text-xs leading-relaxed mb-6 border-b border-white/5 pb-4">
                    {item.desc}
                  </p>

                  <ul className="space-y-3 mt-auto">
                    {item.items.map((subItem, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <div className={`mt-1.5 w-1 h-1 rounded-full flex-shrink-0 ${isPurple ? 'bg-purple-500' : 'bg-cyan-400'}`} />
                        <span className="text-xs text-slate-300 group-hover:text-white transition-colors">
                          {subItem}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full blur opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
            <div className="relative bg-[#0e0e12] border border-white/10 rounded-full px-8 py-4 flex items-center gap-3">
              <span className="text-sm text-slate-300">
                Masalah ini bukan satu-dua orang — ini dialami{" "}
                <span className="text-white font-semibold">ribuan Masisir setiap tahun.</span>{" "}
                AINA dibangun untuk mengatasinya secara sistematis.
              </span>
              <ArrowRight size={16} className="text-cyan-400 animate-pulse flex-shrink-0" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProblemSection;
