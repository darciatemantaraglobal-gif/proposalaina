import React, { useState } from 'react';
import { Database, Cpu, ShieldCheck, LayoutGrid, TrendingUp, ChevronDown, ChevronUp, ArrowRight } from 'lucide-react';

const layers = [
  {
    num: '01',
    icon: Database,
    label: 'Knowledge Layer',
    title: 'Basis pengetahuan yang dikurasi',
    color: 'purple',
    summary: 'AINA tidak menjawab dari memori AI kosong. Di baliknya ada knowledge base terstruktur yang diisi, diverifikasi, dan diperbarui oleh kontributor yang memahami konteks Masisir secara langsung.',
    points: [
      'Konten dikurasi khusus — prosedur visa, regulasi Azhar, kehidupan di Kairo, dan lebih banyak lagi',
      'Diperbarui secara berkala seiring perubahan kondisi dan regulasi di lapangan',
      'Kontributor Masisir bisa menambahkan, mengoreksi, dan memperkaya data',
    ],
    accent: 'Fondasi utama yang membuat jawaban AINA lebih akurat dari AI umum.',
  },
  {
    num: '02',
    icon: Cpu,
    label: 'AI Response Layer',
    title: 'Pemrosesan & penyesuaian jawaban',
    color: 'cyan',
    summary: 'Pertanyaan user tidak langsung diteruskan ke AI begitu saja. AINA memproses konteks pertanyaan, menentukan jenis kebutuhan, lalu menyusun jawaban dalam format yang paling tepat.',
    points: [
      'Pertanyaan dikenali berdasarkan kategori: birokrasi, akademik, kehidupan, atau umum',
      'Format jawaban disesuaikan — langkah demi langkah, ringkasan, atau penjelasan singkat',
      'Gaya bahasa disesuaikan dengan cara Masisir berkomunikasi sehari-hari',
    ],
    accent: 'Ada proses cerdas di tengahnya — bukan sekadar tempel pertanyaan, terima jawaban.',
  },
  {
    num: '03',
    icon: ShieldCheck,
    label: 'Source & Confidence Layer',
    title: 'Transparansi yang membangun kepercayaan',
    color: 'purple',
    summary: 'Setiap jawaban AINA dilengkapi informasi sumber dan tingkat keyakinan sistem. Ini bukan fitur dekorasi — ini komitmen bahwa AINA tidak asal bicara.',
    points: [
      'Source attribution: pengguna tahu dari mana informasi itu berasal',
      'Confidence level: sistem jujur tentang seberapa yakin jawabannya',
      'Pengguna bisa memverifikasi — bukan harus percaya buta pada AI',
    ],
    accent: 'Transparansi ini yang membedakan AINA dari AI yang sering yakin padahal salah.',
  },
  {
    num: '04',
    icon: LayoutGrid,
    label: 'Product System Layer',
    title: 'Ekosistem fitur yang terintegrasi',
    color: 'cyan',
    summary: 'AINA bukan chatbot tunggal yang berdiri sendiri. Semua fitur — chat, berita, diskusi, produktivitas, saved answers, contributor flow — bekerja dalam satu sistem yang saling terhubung.',
    points: [
      'Dashboard terpadu: satu tempat untuk semua kebutuhan digital Masisir',
      'Fitur-fitur saling melengkapi — jawaban bisa disimpan, sumber bisa didiskusikan',
      'Admin & contributor memiliki akses terpisah untuk menjaga kualitas konten',
    ],
    accent: 'Setiap fitur bukan add-on terpisah — semuanya bagian dari pengalaman yang utuh.',
  },
  {
    num: '05',
    icon: TrendingUp,
    label: 'Growth System Layer',
    title: 'Dirancang untuk terus berkembang',
    color: 'purple',
    summary: 'Fondasi teknis AINA dirancang agar bisa diperluas tanpa harus dibangun ulang. Setiap fitur baru bisa ditambahkan di atas sistem yang sudah ada — dan setiap kontributor baru memperkuat keseluruhan sistem.',
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
      {!isLast && (
        <div className="absolute left-[19px] top-[52px] bottom-[-12px] w-px pointer-events-none" style={{ background: 'linear-gradient(to bottom, hsl(270 60% 55% / 0.2), transparent)' }} />
      )}

      <div
        className={`relative backdrop-blur-sm border rounded-2xl transition-all duration-300 cursor-pointer ${
          open
            ? isPurple
              ? 'bg-purple-500/6 border-purple-500/30'
              : 'bg-cyan-500/5 border-cyan-500/25'
            : 'bg-[#0f0f18]/80 border-purple-500/15 hover:border-purple-500/25 hover:bg-[#0f0f18]'
        }`}
        onClick={() => setOpen(!open)}
      >
        <div className="p-3 md:p-4 flex items-start gap-3">
          {/* Icon */}
          <div className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 border transition-all ${
            open
              ? isPurple ? 'bg-purple-500/15 border-purple-500/30 text-purple-400' : 'bg-cyan-500/15 border-cyan-500/30 text-cyan-400'
              : 'bg-[#13121f] border-purple-500/12 text-muted-foreground'
          }`}>
            <Icon size={15} />
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-2 flex-wrap">
                <span className={`text-[9px] font-black tracking-[0.2em] ${isPurple ? 'text-purple-500/70' : 'text-cyan-500/70'}`}>{layer.num}</span>
                <span className={`text-[10px] font-bold uppercase tracking-wider ${isPurple ? 'text-purple-400' : 'text-cyan-400'}`}>{layer.label}</span>
              </div>
              <div className={`flex-shrink-0 w-6 h-6 rounded-lg flex items-center justify-center transition-colors ${open ? 'bg-white/8' : 'bg-transparent'}`}>
                {open ? <ChevronUp size={12} className="text-slate-400" /> : <ChevronDown size={12} className="text-slate-600" />}
              </div>
            </div>
            <h4 className="text-sm font-bold text-white mt-0.5 font-display leading-snug">{layer.title}</h4>
            <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{layer.summary}</p>
          </div>
        </div>

        {/* Expanded */}
        <div className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-[300px]' : 'max-h-0'}`}>
          <div className="px-3 md:px-4 pb-4 pt-0 ml-12">
            <ul className="space-y-2 mb-3 border-l-2 border-purple-500/15 pl-3">
              {layer.points.map((point, i) => (
                <li key={i} className="flex items-start gap-2">
                  <div className={`mt-1.5 w-1 h-1 rounded-full flex-shrink-0 ${isPurple ? 'bg-purple-400' : 'bg-cyan-400'}`} />
                  <span className="text-xs text-foreground/70 leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
            <div className={`inline-flex items-center gap-1.5 text-[11px] font-medium px-3 py-1.5 rounded-xl border ${
              isPurple ? 'bg-purple-500/8 border-purple-500/20 text-purple-300' : 'bg-cyan-500/8 border-cyan-500/20 text-cyan-300'
            }`}>
              <ArrowRight size={10} />
              <span>{layer.accent}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SystemArchitectureSection = () => (
  <section className="relative bg-[#050509] py-8 md:py-20 px-4 md:px-6 overflow-hidden">
    <div className="pointer-events-none absolute inset-0 dot-grid opacity-40" />
    <div className="pointer-events-none absolute top-0 right-0 h-[400px] w-[400px] rounded-full blur-[140px]" style={{ background: 'hsl(270 60% 55% / 0.07)' }} />
    <div className="pointer-events-none absolute bottom-0 left-0 h-[300px] w-[300px] rounded-full blur-[120px]" style={{ background: 'hsl(185 80% 55% / 0.05)' }} />

    <div className="relative z-10 max-w-5xl mx-auto">

      {/* Header */}
      <div className="mb-6 md:mb-12">
        <div className="inline-flex items-center gap-2 rounded-full border border-purple-400/30 bg-purple-500/5 px-3 py-1 mb-3 backdrop-blur-sm">
          <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-purple-300">Arsitektur Sistem</span>
        </div>
        <h2 className="text-2xl md:text-4xl font-bold text-white leading-tight font-display">
          Sistem yang dibangun berlapis —{' '}
          <span className="text-gradient-purple-cyan">setiap layer punya peran spesifik.</span>
        </h2>
        <p className="mt-2 text-xs md:text-sm text-muted-foreground max-w-xl">Di balik antarmuka yang sederhana, ada arsitektur yang dirancang serius. Buka tiap layer untuk melihat lebih dalam.</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-5 md:gap-8 items-start">

        {/* Left: Accordion */}
        <div className="flex-1 space-y-3">
          {layers.map((layer, i) => (
            <LayerCard key={i} layer={layer} isLast={i === layers.length - 1} />
          ))}
        </div>

        {/* Right: Visual stack — sticky on desktop */}
        <div className="w-full lg:w-[220px] flex-shrink-0 lg:sticky lg:top-24">
          <div className="bg-[#0f0f18]/80 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-3 overflow-hidden">
            <p className="text-[9px] text-muted-foreground/40 uppercase tracking-[0.2em] font-bold mb-3">Struktur Sistem</p>
            <div className="space-y-0">
              {layers.map((layer, i) => {
                const Icon = layer.icon;
                const isPurple = layer.color === 'purple';
                const isLast = i === layers.length - 1;
                return (
                  <div key={i} className="relative">
                    {!isLast && (
                      <div className="absolute left-[17px] top-[34px] h-[10px] w-px bg-purple-500/15" />
                    )}
                    <div className={`flex items-center gap-2.5 p-2 rounded-xl border mb-1.5 last:mb-0 ${
                      isPurple ? 'bg-purple-500/5 border-purple-500/15' : 'bg-cyan-500/5 border-cyan-500/12'
                    }`}>
                      <div className={`w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0 ${
                        isPurple ? 'bg-purple-500/15 text-purple-400' : 'bg-cyan-500/15 text-cyan-400'
                      }`}>
                        <Icon size={11} />
                      </div>
                      <div>
                        <span className={`text-[8px] font-black tracking-wider block ${isPurple ? 'text-purple-500/60' : 'text-cyan-500/60'}`}>{layer.num}</span>
                        <p className="text-[10px] font-semibold text-white leading-none">{layer.label}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="mt-3 pt-3 border-t border-purple-500/10">
              <p className="text-[9px] text-muted-foreground/30 leading-relaxed text-center">Setiap layer menopang layer di atasnya</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default SystemArchitectureSection;
