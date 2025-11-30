import React from 'react';
import {
  MessageSquare,
  Map,
  Trophy,
  BookOpen,
  CheckSquare,
  Newspaper,
  Settings,
  ShieldCheck,
  Plus
} from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';

const FeaturesSection = () => {
  const features = [
    {
      icon: MessageSquare,
      title: 'Chat AI Masisir',
      status: 'LIVE',
      description: 'Chat cerdas dengan 3 persona khusus',
      details: [
        'Basic Mode: Tanya jawab umum',
        'Scholar Mode: Fikih, tafsir, bahasa Arab',
        'Market Mode: Info Mesir, harga, lokasi, rute'
      ]
    },
    {
      icon: Map,
      title: 'Guide Wizard',
      status: 'LIVE',
      highlight: 'MOST POWERFUL',
      description: 'Panduan Tasjil, Visa, Iqamah, Syahadah',
      details: [
        'Panduan langkah demi langkah',
        'Decision tree interaktif',
        'Dokumen yang diperlukan'
      ]
    },
    {
      icon: Trophy,
      title: 'LifeGame Santri',
      status: 'LIVE',
      description: 'Sistem gamifikasi motivasi belajar',
      details: [
        'XP & Streaks tracking',
        'Daily missions',
        'Roles & badges'
      ]
    },
    {
      icon: BookOpen,
      title: 'Academic Assistant',
      status: 'LIVE',
      description: 'AI untuk S1–S3 & kitab kuning',
      details: ['Analisis PDF', 'Ringkasan otomatis', 'Soal latihan']
    },
    {
      icon: CheckSquare,
      title: 'Productivity Hub',
      status: 'LIVE',
      description: 'Manajemen produktivitas lengkap',
      details: ['Notes & Tasks', 'Prioritas belajar', 'Integrasi backend']
    },
    {
      icon: Newspaper,
      title: 'News & Informasi',
      status: 'LIVE',
      description: 'Berita Masisir real-time',
      details: ['Admin post system', 'Informasi kampus', 'Pengumuman resmi']
    },
    {
      icon: Settings,
      title: 'Admin Panel (Full CRUD)',
      status: 'LIVE',
      description: 'Dashboard profesional',
      details: ['User management', 'News management', 'Prompts system']
    },
    {
      icon: ShieldCheck,
      title: 'Security & Privacy',
      status: 'LIVE',
      description: 'Keamanan & privasi tingkat enterprise',
      details: [
        'Token authentication',
        'Encrypted storage',
        'Multi-layer API validation'
      ]
    }
  ];

  const leftFeatures = features.slice(0, 4);
  const rightFeatures = features.slice(4);

  return (
    <section className="relative py-24 px-6 overflow-hidden bg-[#050712]">
      {/* background glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,#1c1235_0,#050712_55%)]" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,#7c3aed_0,#050712_70%)] opacity-60 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-10 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#3a2e5a] bg-[#151120] px-4 py-1 mb-4">
            <CheckSquare className="h-4 w-4 text-[#a78bfa]" />
            <span className="text-sm md:text-base font-semibold tracking-wide text-[#c4b5fd]">
              8 fitur utama sudah LIVE
            </span>
          </div>
          <h2 className="text-[34px] md:text-[44px] font-bold text-white leading-tight">
            8 Fitur AINA yang{' '}
            <span className="text-[#a78bfa]">siap dipakai Masisir.</span>
          </h2>
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
                    {/* connector */}
                    <div className="hidden lg:block absolute right-0 top-1/2 h-[1px] w-10 translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-transparent via-[#3f2a72] to-[#7c3aed]" />

                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#181323] border border-[#3a2e5a] text-[#a78bfa]">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="text-base md:text-lg font-semibold text-white leading-snug">
                            {feature.title}
                          </h3>
                          <p className="text-sm md:text-base text-[#c8c8e3] mt-1">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                      <Badge className="bg-green-600/20 text-green-400 border border-green-500/30 text-[11px] md:text-[12px] px-2 py-0.5">
                        {feature.status}
                      </Badge>
                    </div>

                    <ul className="mt-3 space-y-2">
                      {feature.details.slice(0, 3).map((d, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-[13px] md:text-[15px] text-[#bdbdde] leading-relaxed"
                        >
                          <span className="mt-[7px] h-2 w-2 rounded-full bg-[#9b5bfd]" />
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* CENTER NODE — logo AINA */}
          <div className="relative flex items-center justify-center">
            <img
              src="/AIGHYPT MEYUALA.png"
              alt="AINA Logo"
              className="w-40 h-auto object-contain drop-shadow-[0_0_40px_rgba(124,58,237,0.5)]"
            />
            {/* vertical faint connector */}
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
                    {/* connector */}
                    <div className="hidden lg:block absolute left-0 top-1/2 h-[1px] w-10 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-l from-transparent via-[#3f2a72] to-[#7c3aed]" />

                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#181323] border border-[#3a2e5a] text-[#a78bfa]">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="text-base md:text-lg font-semibold text-white leading-snug">
                            {feature.title}
                          </h3>
                          <p className="text-sm md:text-base text-[#c8c8e3] mt-1">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                      <Badge className="bg-green-600/20 text-green-400 border border-green-500/30 text-[11px] md:text-[12px] px-2 py-0.5">
                        {feature.status}
                      </Badge>
                    </div>

                    <ul className="mt-3 space-y-2">
                      {feature.details.slice(0, 3).map((d, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-[13px] md:text-[15px] text-[#bdbdde] leading-relaxed"
                        >
                          <span className="mt-[7px] h-2 w-2 rounded-full bg-[#9b5bfd]" />
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

        {/* banner */}
        <div className="mt-10 text-center text-xs md:text-sm text-[#8e8fb3] flex items-center justify-center gap-2">
          <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#161327] border border-[#3a2e5a]">
            <Plus size={14} className="text-[#c4b5fd]" />
          </span>
          <span>
            8 fitur utama AINA sudah LIVE dan siap masuk fase pengembangan
            berikutnya.
          </span>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
