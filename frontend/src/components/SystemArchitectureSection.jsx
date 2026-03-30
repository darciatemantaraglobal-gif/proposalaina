import React, { useState } from 'react';
import { Database, Cpu, Link2, LayoutGrid, TrendingUp, ChevronDown, ChevronUp } from 'lucide-react';

const layers = [
  {
    number: '01',
    icon: Database,
    label: 'Knowledge Layer',
    title: 'Basis Pengetahuan yang Dikurasi',
    color: 'purple',
    summary: 'AINA tidak menjawab dari memori AI kosong. Di baliknya ada knowledge base terstruktur yang diisi, diverifikasi, dan diperbarui oleh kontributor yang memahami konteks Masisir.',
    points: [
      'Konten dikurasi khusus — prosedur visa, regulasi Azhar, kehidupan di Kairo',
      'Diperbarui secara berkala seiring perubahan kondisi dan regulasi',
      'Kontributor bisa menambahkan, mengoreksi, dan memperkaya data',
    ],
    accent: 'Fondasi utama yang membuat jawaban AINA lebih akurat dari AI umum.',
  },
  {
    number: '02',
    icon: Cpu,
    label: 'AI Response Layer',
    title: 'Pemrosesan & Penyesuaian Jawaban',
    color: 'cyan',
    summary: 'Pertanyaan user tidak langsung diteruskan ke AI begitu saja. AINA memproses konteks pertanyaan, menentukan jenis kebutuhan, lalu menyusun jawaban dalam format yang paling sesuai.',
    points: [
      'Pertanyaan dikenali berdasarkan kategori: birokrasi, akademik, kehidupan, atau umum',
      'Format jawaban disesuaikan — langkah demi langkah, ringkasan, atau penjelasan singkat',
      'Gaya bahasa disesuaikan dengan cara Masisir berkomunikasi sehari-hari',
    ],
    accent: 'Bukan sekadar "tempel pertanyaan, terima jawaban" — ada proses cerdas di tengahnya.',
  },
  {
    number: '03',
    icon: Link2,
    label: 'Source & Confidence Layer',
    title: 'Transparansi yang Membangun Kepercayaan',
    color: 'purple',
    summary: 'Setiap jawaban AINA bisa dilengkapi dengan informasi sumber dan tingkat keyakinan sistem. Ini bukan fitur dekorasi — ini komitmen bahwa AINA tidak asal bicara.',
    points: [
      'Indikator sumber: pengguna tahu darimana informasi itu berasal',
      'Confidence level: sistem jujur tentang seberapa yakin jawabannya',
      'Pengguna bisa memverifikasi dan mempertanyakan — bukan harus asal percaya',
    ],
    accent: 'Transparansi ini yang membedakan AINA dari AI yang sering terlihat yakin padahal salah.',
  },
  {
    number: '04',
    icon: LayoutGrid,
    label: 'Product System Layer',
    title: 'Ekosistem Fitur yang Terintegrasi',
    color: 'cyan',
    summary: 'AINA bukan chatbot tunggal yang berdiri sendiri. Semua fitur — chat, berita, diskusi, produktivitas, saved answers, contributor flow — bekerja dalam satu sistem yang saling terhubung.',
    points: [
      'Dashboard terpadu: satu tempat untuk semua kebutuhan Masisir',
      'Fitur-fitur saling melengkapi — jawaban bisa disimpan, sumber bisa didiskusikan',
      'Admin & contributor memiliki akses terpisah untuk menjaga kualitas konten',
    ],
    accent: 'Setiap fitur bukan add-on terpisah — semuanya bagian dari pengalaman yang utuh.',
  },
  {
    number: '05',
    icon: TrendingUp,
    label: 'Growth Layer',
    title: 'Dirancang untuk Terus Berkembang',
    color: 'purple',
    summary: 'Fondasi teknis AINA dirancang agar bisa diperluas tanpa harus dibangun ulang dari nol. Setiap fitur baru bisa ditambahkan di atas sistem yang sudah ada.',
    points: [
      'Arsitektur modular — fitur baru tidak mengganggu yang sudah berjalan',
      'Knowledge base bisa diperluas ke topik baru sesuai kebutuhan komunitas',
      'Skalabel untuk mendukung lebih banyak pengguna seiring pertumbuhan AINA',
    ],
    accent: 'AINA hari ini adalah pondasi — bukan produk akhir.',
  },
];

const LayerCard = ({ layer, isLast }) => {
  const [open, setOpen] = useState(false);
  const Icon = layer.icon;
  const isPurple = layer.color === 'purple';

  return (
    <div className="relative">
      {/* Vertical connector line */}
      {!isLast && (
        <div className="absolute left-[27px] top-[56px] bottom-0 w-px bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />
      )}

      <div
        className={`relative bg-[#0e0e12] border rounded-2xl transition-all duration-300 hover:bg-[#13131a] cursor-pointer ${open ? 'shadow-xl' : ''}`}
        style={{ borderColor: open ? (isPurple ? 'rgba(168,85,247,0.4)' : 'rgba(34,211,238,0.4)') : 'rgba(255,255,255,0.06)' }}
        onClick={() => setOpen(!open)}
      >
        <div className="p-5 flex items-start gap-4">
          {/* Icon node */}
          <div className={`w-14 h-14 rounded-xl flex flex-col items-center justify-center flex-shrink-0 border transition-colors ${
            open
              ? isPurple ? 'bg-purple-500/20 border-purple-500/40 text-purple-300' : 'bg-cyan-500/20 border-cyan-500/40 text-cyan-300'
              : 'bg-white/3 border-white/8 text-slate-500'
          }`}>
            <Icon size={20} />
            <span className={`text-[9px] font-bold mt-1 ${open ? (isPurple ? 'text-purple-400' : 'text-cyan-400') : 'text-slate-600'}`}>
              {layer.number}
            </span>
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-3">
              <div>
                <span className={`text-[10px] font-bold tracking-widest uppercase ${isPurple ? 'text-purple-500' : 'text-cyan-500'}`}>
                  {layer.label}
                </span>
                <h4 className="text-base font-bold text-white mt-0.5 leading-snug">
                  {layer.title}
                </h4>
              </div>
              <div className={`flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center border transition-colors ${
                open ? 'bg-white/8 border-white/15' : 'bg-transparent border-white/5'
              }`}>
                {open
                  ? <ChevronUp size={14} className="text-slate-400" />
                  : <ChevronDown size={14} className="text-slate-600" />
                }
              </div>
            </div>
            <p className="text-sm text-slate-400 mt-2 leading-relaxed">{layer.summary}</p>
          </div>
        </div>

        {/* Expanded content */}
        <div className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-[300px]' : 'max-h-0'}`}>
          <div className="px-5 pb-5 pt-1 ml-[72px]">
            <ul className="space-y-2.5 mb-4">
              {layer.points.map((point, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <div className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${isPurple ? 'bg-purple-500' : 'bg-cyan-400'}`} />
                  <span className="text-xs text-slate-300 leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
            <div className={`inline-flex items-center gap-2 text-[11px] font-medium px-3 py-2 rounded-lg border ${
              isPurple ? 'bg-purple-500/8 border-purple-500/20 text-purple-300' : 'bg-cyan-500/8 border-cyan-500/20 text-cyan-300'
            }`}>
              <span className="opacity-70">→</span>
              <span>{layer.accent}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SystemArchitectureSection = () => {
  return (
    <section className="relative bg-[#050509] py-16 md:py-24 px-4 md:px-6 overflow-hidden font-sans text-slate-300">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-900/8 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-900/6 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMTM5LCA5MiwgMjQ2LCAwLjA1KSIvPjwvc3ZnPg==')] opacity-40 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-10 md:mb-16 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <div>
            <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-purple-900/20 border border-purple-500/20 backdrop-blur-sm">
              <Cpu size={12} className="text-purple-400" />
              <span className="text-[10px] md:text-xs text-purple-200 font-bold uppercase tracking-widest">
                Mesin di Balik AINA
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
              Sistem yang Dibangun{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                dengan Serius.
              </span>
            </h2>
          </div>
          <p className="text-sm md:text-base text-slate-400 max-w-sm leading-relaxed lg:text-right border-l-2 lg:border-l-0 lg:border-r-2 border-purple-500/30 pl-4 lg:pl-0 lg:pr-4">
            AINA dibangun berlapis — setiap lapisan punya peran spesifik yang saling menguatkan. Klik setiap layer untuk melihat lebih dalam.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 items-start">
          {/* Left: Layer accordion */}
          <div className="flex-1 space-y-3">
            {layers.map((layer, i) => (
              <LayerCard key={i} layer={layer} isLast={i === layers.length - 1} />
            ))}
          </div>

          {/* Right: Visual stack diagram */}
          <div className="w-full lg:w-[280px] flex-shrink-0 sticky top-24">
            <div className="bg-[#0a0a12] border border-white/8 rounded-2xl p-5 overflow-hidden">
              <p className="text-[10px] text-slate-500 uppercase tracking-widest font-semibold mb-4">Struktur Sistem</p>
              <div className="space-y-2">
                {layers.map((layer, i) => {
                  const Icon = layer.icon;
                  const isPurple = layer.color === 'purple';
                  return (
                    <div
                      key={i}
                      className={`flex items-center gap-3 p-3 rounded-xl border transition-all ${
                        isPurple
                          ? 'bg-purple-500/5 border-purple-500/15'
                          : 'bg-cyan-500/5 border-cyan-500/15'
                      }`}
                    >
                      <div className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 ${
                        isPurple ? 'bg-purple-500/15 text-purple-400' : 'bg-cyan-500/15 text-cyan-400'
                      }`}>
                        <Icon size={13} />
                      </div>
                      <div>
                        <span className={`text-[9px] font-bold tracking-wider ${isPurple ? 'text-purple-500' : 'text-cyan-500'}`}>
                          {layer.number}
                        </span>
                        <p className="text-xs font-semibold text-white leading-tight">{layer.label}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="mt-4 pt-4 border-t border-white/5">
                <p className="text-[10px] text-slate-600 leading-relaxed text-center">
                  Setiap lapisan saling menopang lapisan di atasnya.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SystemArchitectureSection;
