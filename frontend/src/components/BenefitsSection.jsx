import React from 'react';
import { Card, CardContent } from './ui/card';
import { Sparkles, Check, MapPin, FileText } from 'lucide-react';

const BenefitsSection = () => {
  const benefits = [
    {
      id: 'admin',
      category: 'Administrasi',
      // Mengubah judul dan deskripsi fokus ke "Anti Bingung"
      title: 'Kemudahan Informasi',
      description: 'Tak perlu tanya sana-sini. Guide Wizard menuntunmu step-by-step urus berkas tanpa bingung.',
      visual: (
        <div className="relative flex flex-col gap-3 w-full max-w-[240px] mx-auto pt-2">
          {/* Card 1: Syarat */}
          <div className="flex items-center gap-3 p-3 rounded-xl bg-[#1a1a2e] border border-white/5 shadow-lg transform translate-y-0 scale-100 z-10">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center">
              <FileText className="w-4 h-4 text-purple-400" />
            </div>
            <div className="flex-grow">
              <div className="h-1.5 w-16 bg-white/20 rounded-full mb-1.5"></div>
              <div className="text-[10px] text-slate-400">Berkas Lengkap</div>
            </div>
            <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center">
              <Check className="w-3 h-3 text-emerald-400" />
            </div>
          </div>

          {/* Card 2: Lokasi */}
          <div className="flex items-center gap-3 p-3 rounded-xl bg-[#1a1a2e] border border-white/5 shadow-lg transform translate-x-4 z-20">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
              <MapPin className="w-4 h-4 text-blue-400" />
            </div>
            <div className="flex-grow">
              <div className="h-1.5 w-12 bg-white/20 rounded-full mb-1.5"></div>
              <div className="text-[10px] text-slate-400">Lokasi Valid</div>
            </div>
             <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center">
              <Check className="w-3 h-3 text-emerald-400" />
            </div>
          </div>

          {/* Floating Badge "Clear Path" */}
          <div className="absolute -top-2 -right-2 bg-emerald-500 text-white text-[10px] font-bold px-2 py-1 rounded-md shadow-[0_0_10px_rgba(16,185,129,0.5)] animate-pulse">
            Jalur Jelas ✨
          </div>
        </div>
      ),
    },
    {
      id: 'academic',
      category: 'Akademik',
      title: 'Paham Lebih Cepat',
      description: 'Scholar Mode mengubah kitab bahasa arab sulit jadi penjelasan mudah.',
      visual: (
        <div className="flex flex-col items-center justify-center h-full mb-6">
          <h3 className="text-center font-bold leading-tight">
            <span className="text-2xl text-slate-500 block mb-1">Muqorror?</span>
            <span className="text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-purple-200 via-white to-purple-200 drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]">
              Gampang!
            </span>
            <span className="text-sm text-slate-400 font-normal mt-3 block px-4">
              "Jauh lebih mudah daripada<br/>buka kamus manual."
            </span>
          </h3>
        </div>
      ),
    },
    {
      id: 'productivity',
      category: 'Produktivitas',
      title: 'Hidup Level Up',
      description: 'Ubah rutinitas membosankan jadi LifeGame yang seru.',
      visual: (
        <div className="mb-6 w-full max-w-[280px] mx-auto">
          <div className="bg-[#1a1a24] p-4 rounded-2xl border border-white/5 relative overflow-hidden shadow-2xl">
            {/* Mock Gamification UI */}
            <div className="mb-3 relative">
                <div className="bg-[#232333] p-3 rounded-2xl text-xs text-slate-300 border border-white/5">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                    <span className="font-semibold text-white">Daily Quest Completed!</span>
                  </div>
                  <p>Selamat! Kamu konsisten belajar 7 hari berturut-turut.</p>
                </div>
                <div className="absolute -right-1 -bottom-2 bg-purple-600 text-white text-[10px] px-2 py-0.5 rounded-full border border-purple-400">
                  +50 XP
                </div>
            </div>

            {/* Reactions */}
            <div className="flex gap-1.5 justify-center bg-[#232333] p-1.5 rounded-full w-max mx-auto border border-white/5">
              <span className="p-1.5 bg-white/5 rounded-full hover:bg-white/10 transition cursor-pointer">🔥</span>
              <span className="p-1.5 bg-white/5 rounded-full hover:bg-white/10 transition cursor-pointer">🚀</span>
              <span className="p-1.5 bg-white/5 rounded-full hover:bg-white/10 transition cursor-pointer">⚡</span>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section className="relative py-24 px-6 overflow-hidden bg-[#050509]">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f0a1e] to-black"></div>
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full max-w-3xl h-[500px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-5 px-3 py-1 rounded-full bg-purple-900/20 border border-purple-500/20 backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span className="text-xs text-purple-300 font-medium uppercase tracking-widest">
              Impact & Benefit
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            Solusi Nyata, <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-emerald-400">Bukan Teori.</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            AINA menjadikan tantangan terbesar Masisir menjadi kemudahan dalam satu genggaman.
          </p>
        </div>

        {/* Benefits Grid (3 Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {benefits.map((benefit) => (
            <Card
              key={benefit.id}
              className="group bg-[#0e0e14] border-white/5 hover:border-purple-500/30 hover:bg-[#12121a] transition-all duration-500 rounded-3xl overflow-hidden relative flex flex-col"
            >
              <CardContent className="p-0 flex flex-col h-full">
                
                {/* Visual Content Area - Expands to fill top space */}
                <div className="relative flex-grow min-h-[220px] flex items-center justify-center bg-gradient-to-b from-white/[0.02] to-transparent p-6 group-hover:from-purple-500/[0.05] transition-colors duration-500">
                    {benefit.visual}
                </div>

                {/* Text Content - Anchored at bottom */}
                <div className="relative z-10 p-8 pt-2 text-center bg-[#0e0e14] group-hover:bg-[#12121a] transition-colors">
                  <div className="mb-2">
                    <span className="inline-block text-xs font-bold text-purple-500 uppercase tracking-wider mb-2">
                      {benefit.category}
                    </span>
                    <h3 className="text-2xl font-bold text-white mb-3 leading-snug">
                      {benefit.title}
                    </h3>
                  </div>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;