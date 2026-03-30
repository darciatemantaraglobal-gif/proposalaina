import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const AinaHeroSection = () => (
  <footer className="relative bg-[#050509] border-t border-purple-500/15 py-8 px-4 md:px-6 overflow-hidden">
    <div className="pointer-events-none absolute inset-0 dot-grid opacity-20" />

    <div className="relative z-10 max-w-5xl mx-auto">
      <div className="flex flex-col md:flex-row items-start justify-between gap-6">
        {/* Brand */}
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2.5">
            <img src="/AIGHYPT MEYUALA.png" alt="AINA Logo" className="h-7 w-auto object-contain" />
            <div>
              <p className="text-white font-bold text-sm tracking-wide font-display">AINA</p>
              <p className="text-muted-foreground text-[10px] uppercase tracking-widest">Asisten Masisir</p>
            </div>
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed max-w-xs">
            AI assistant dan sistem digital untuk mahasiswa Indonesia di Mesir. Dibangun oleh Masisir, untuk Masisir.
          </p>
        </div>

        {/* Links */}
        <div>
          <p className="text-[10px] font-bold text-muted-foreground/40 uppercase tracking-widest mb-3">Navigasi</p>
          <ul className="space-y-1.5">
            {['Masalah', 'Solusi', 'Fitur', 'Roadmap', 'Kolaborasi'].map((item) => (
              <li key={item}>
                <a href={`#${item.toLowerCase()}`} className="text-xs text-muted-foreground hover:text-white transition-colors">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <p className="text-[10px] font-bold text-muted-foreground/40 uppercase tracking-widest mb-3">Kontak</p>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <Mail size={11} className="text-purple-400 flex-shrink-0" />
              <span className="text-xs text-muted-foreground">darcia@aigypt.id</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={11} className="text-emerald-400 flex-shrink-0" />
              <span className="text-xs text-muted-foreground">+62 813-1150-6025</span>
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={11} className="text-pink-400 flex-shrink-0" />
              <span className="text-xs text-muted-foreground">Mesir & Indonesia</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-6 pt-5 border-t border-purple-500/10 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-3 py-1.5 backdrop-blur-sm">
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
          </span>
          <span className="text-[10px] text-emerald-400/80">Sistem aktif & berjalan normal</span>
        </div>
        <p className="text-[10px] text-muted-foreground/40">© 2025 AINA Project · Dibuat dengan kepedulian untuk Masisir</p>
      </div>
    </div>
  </footer>
);

export default AinaHeroSection;
