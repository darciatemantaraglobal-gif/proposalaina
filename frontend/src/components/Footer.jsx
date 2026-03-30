import React from 'react';
import { Mail, Phone, MapPin, Bot } from 'lucide-react';

const AinaHeroSection = () => (
  <footer className="bg-[#0a0a0f] border-t border-white/5 py-10 px-4 md:px-6">
    <div className="max-w-5xl mx-auto">
      <div className="flex flex-col md:flex-row items-start justify-between gap-8">
        {/* Brand */}
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-3">
            <img src="/AIGHYPT MEYUALA.png" alt="AINA Logo" className="h-8 w-auto object-contain" />
            <div>
              <p className="text-white font-bold text-sm tracking-wide">AINA</p>
              <p className="text-slate-500 text-[10px] uppercase tracking-widest">Asisten Masisir</p>
            </div>
          </div>
          <p className="text-xs text-slate-500 leading-relaxed max-w-xs">
            AI assistant dan sistem digital untuk mahasiswa Indonesia di Mesir. Dibangun oleh Masisir, untuk Masisir.
          </p>
        </div>

        {/* Links */}
        <div>
          <p className="text-[10px] font-bold text-slate-600 uppercase tracking-widest mb-3">Navigasi</p>
          <ul className="space-y-2">
            {['Masalah', 'Solusi', 'Fitur', 'Roadmap', 'Kolaborasi'].map((item) => (
              <li key={item}>
                <a href={`#${item.toLowerCase()}`} className="text-xs text-slate-500 hover:text-white transition-colors">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <p className="text-[10px] font-bold text-slate-600 uppercase tracking-widest mb-3">Kontak</p>
          <ul className="space-y-2.5">
            <li className="flex items-center gap-2">
              <Mail size={12} className="text-purple-400 flex-shrink-0" />
              <span className="text-xs text-slate-400">darcia@aigypt.id</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={12} className="text-emerald-400 flex-shrink-0" />
              <span className="text-xs text-slate-400">+62 813-1150-6025</span>
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={12} className="text-pink-400 flex-shrink-0" />
              <span className="text-xs text-slate-400">Mesir & Indonesia</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="text-[10px] text-slate-600">Sistem aktif & berjalan normal</span>
        </div>
        <p className="text-[10px] text-slate-600">© 2025 AINA Project · Dibuat dengan kepedulian untuk Masisir</p>
      </div>
    </div>
  </footer>
);

export default AinaHeroSection;
