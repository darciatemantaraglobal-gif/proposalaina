import React from 'react';
import {
  MessageSquare,
  Database,
  Link2,
  ShieldCheck,
  Newspaper,
  MessageCircle,
  CheckSquare,
  Bookmark,
  Users2,
  LayoutDashboard,
  Plus,
} from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';

const FeaturesSection = () => {
  const features = [
    {
      icon: MessageSquare,
      title: 'AI Chat untuk Masisir',
      status: 'LIVE',
      description: 'Bukan chatbot umum — jawaban berbasis knowledge kontekstual',
      details: [
        'Dijawab dari knowledge base terstruktur, bukan generasi bebas',
        'Mendukung pertanyaan birokrasi, akademik, dan kehidupan sehari-hari',
        'Respons singkat, padat, dan relevan untuk Masisir',
      ]
    },
    {
      icon: Database,
      title: 'Knowledge-Based Answering',
      status: 'LIVE',
      description: 'Jawaban dari sumber terstruktur, bukan halusinasi AI',
      details: [
        'Basis data pengetahuan Masisir yang dikurasi kontributor',
        'Jawaban dikaitkan langsung ke sumber yang relevan',
        'Update berkala seiring perubahan regulasi dan kondisi lapangan',
      ]
    },
    {
      icon: Link2,
      title: 'Source Transparency & Confidence',
      status: 'LIVE',
      description: 'Setiap jawaban dilengkapi sumber dan tingkat keyakinan',
      details: [
        'Indikator sumber: dari mana jawaban berasal',
        'Confidence level: seberapa yakin sistem terhadap jawabannya',
        'Pengguna bisa cek dan validasi sendiri informasinya',
      ]
    },
    {
      icon: Newspaper,
      title: 'Berita & Pengumuman Masisir',
      status: 'LIVE',
      description: 'Informasi terkini kampus, organisasi, dan kehidupan Masisir',
      details: [
        'Admin post system untuk info resmi dan pengumuman kampus',
        'Kategori berita: akademik, visa, kegiatan, dan umum',
        'Notifikasi pengumuman penting langsung ke pengguna',
      ]
    },
    {
      icon: MessageCircle,
      title: 'Threads / Diskusi Komunitas',
      status: 'LIVE',
      description: 'Ruang tanya-jawab dan berbagi pengalaman antar Masisir',
      details: [
        'Thread per topik: administrasi, akademik, kehidupan',
        'Sistem upvote untuk jawaban terbaik dari komunitas',
        'Moderasi untuk memastikan kualitas diskusi tetap tinggi',
      ]
    },
    {
      icon: CheckSquare,
      title: 'Ruang Produktif',
      status: 'LIVE',
      description: 'Dashboard pengelola progres harian Masisir',
      details: [
        'Tasks & notes terintegrasi dalam satu tampilan',
        'Tracking target hafalan, belajar, dan keuangan bulanan',
        'Reminder dan prioritas untuk kegiatan penting',
      ]
    },
    {
      icon: Bookmark,
      title: 'Saved Answers',
      status: 'LIVE',
      description: 'Simpan jawaban penting untuk diakses kapan saja',
      details: [
        'Bookmark jawaban AI yang relevan dan berguna',
        'Kategorisasi simpanan berdasarkan topik',
        'Akses cepat tanpa perlu bertanya ulang',
      ]
    },
    {
      icon: Users2,
      title: 'Contributor System',
      status: 'LIVE',
      description: 'Sistem kontribusi untuk memperkaya knowledge base AINA',
      details: [
        'Masisir bisa berkontribusi menambah dan mengoreksi konten',
        'Proses review untuk memastikan kualitas informasi',
        'Kontributor aktif mendapat pengakuan dalam sistem',
      ]
    },
  ];

  const leftFeatures = features.slice(0, 4);
  const rightFeatures = features.slice(4);

  return (
    <section className="relative py-16 md:py-24 px-4 md:px-6 overflow-hidden bg-[#050712]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,#1c1235_0,#050712_55%)]" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,#7c3aed_0,#050712_70%)] opacity-60 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-10 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#3a2e5a] bg-[#151120] px-4 py-1 mb-4">
            <CheckSquare className="h-4 w-4 text-[#a78bfa]" />
            <span className="text-sm md:text-base font-semibold tracking-wide text-[#c4b5fd]">
              8 fitur inti AINA — semua sudah live
            </span>
          </div>
          <h2 className="text-[34px] md:text-[44px] font-bold text-white leading-tight">
            Fitur yang{' '}
            <span className="text-[#a78bfa]">sudah ada dan bisa digunakan</span>
            {' '}sekarang.
          </h2>
          <p className="mt-4 mx-auto max-w-2xl text-sm md:text-base text-slate-400 leading-relaxed">
            Ini bukan konsep. Semua fitur di bawah sudah dibangun, diuji, dan aktif berjalan dalam sistem AINA.
          </p>
        </div>

        {/* Main layout */}
        <div className="grid items-center gap-10 lg:grid-cols-[1.4fr_auto_1.4fr]">
          {/* LEFT COLUMN */}
          <div className="space-y-4">
            {leftFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card
                  key={index}
                  className="relative overflow-hidden rounded-2xl border border-[#26233b] bg-[#0b0913]/85 backdrop-blur-sm shadow-[0_0_40px_-20px_rgba(124,58,237,0.7)]"
                >
                  <CardContent className="p-4">
                    <div className="hidden lg:block absolute right-0 top-1/2 h-[1px] w-10 translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-transparent via-[#3f2a72] to-[#7c3aed]" />
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#181323] border border-[#3a2e5a] text-[#a78bfa] flex-shrink-0">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="text-base md:text-lg font-semibold text-white leading-snug">
                            {feature.title}
                          </h3>
                          <p className="text-sm text-[#c8c8e3] mt-1">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                      <Badge className="bg-green-600/20 text-green-400 border border-green-500/30 text-[11px] px-2 py-0.5 whitespace-nowrap">
                        {feature.status}
                      </Badge>
                    </div>
                    <ul className="mt-3 space-y-2">
                      {feature.details.map((d, i) => (
                        <li key={i} className="flex items-start gap-2 text-[13px] text-[#bdbdde] leading-relaxed">
                          <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-[#9b5bfd] flex-shrink-0" />
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* CENTER NODE */}
          <div className="relative flex items-center justify-center">
            <img
              src="/AIGHYPT MEYUALA.png"
              alt="AINA Logo"
              className="w-40 h-auto object-contain drop-shadow-[0_0_40px_rgba(124,58,237,0.5)]"
            />
            <div className="pointer-events-none absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-[#3f2a72] to-transparent opacity-60" />
          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-4">
            {rightFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card
                  key={index}
                  className="relative overflow-hidden rounded-2xl border border-[#26233b] bg-[#0b0913]/85 backdrop-blur-sm shadow-[0_0_40px_-20px_rgba(124,58,237,0.7)]"
                >
                  <CardContent className="p-4">
                    <div className="hidden lg:block absolute left-0 top-1/2 h-[1px] w-10 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-l from-transparent via-[#3f2a72] to-[#7c3aed]" />
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#181323] border border-[#3a2e5a] text-[#a78bfa] flex-shrink-0">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="text-base md:text-lg font-semibold text-white leading-snug">
                            {feature.title}
                          </h3>
                          <p className="text-sm text-[#c8c8e3] mt-1">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                      <Badge className="bg-green-600/20 text-green-400 border border-green-500/30 text-[11px] px-2 py-0.5 whitespace-nowrap">
                        {feature.status}
                      </Badge>
                    </div>
                    <ul className="mt-3 space-y-2">
                      {feature.details.map((d, i) => (
                        <li key={i} className="flex items-start gap-2 text-[13px] text-[#bdbdde] leading-relaxed">
                          <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-[#9b5bfd] flex-shrink-0" />
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Banner */}
        <div className="mt-10 text-center text-xs md:text-sm text-[#8e8fb3] flex items-center justify-center gap-2">
          <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#161327] border border-[#3a2e5a]">
            <Plus size={14} className="text-[#c4b5fd]" />
          </span>
          <span>
            Semua fitur di atas sudah live dan aktif digunakan. Bukan mockup, bukan demo kosong.
          </span>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
