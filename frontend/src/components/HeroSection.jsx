import React, { useState, useEffect } from "react";
import { Menu, X, ArrowRight, GitMerge } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const waLink =
    "https://wa.me/6281311506025?text=Halo%20Daru,%20saya%20ingin%20berkontribusi%20untuk%20AINA.";

  const navItems = [
    { label: "Masalah", href: "#masalah" },
    { label: "Solusi", href: "#solusi" },
    { label: "Fitur", href: "#fitur" },
    { label: "Roadmap", href: "#roadmap" },
    { label: "Kolaborasi", href: "#kolaborasi" },
  ];

  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || isOpen
          ? "py-4 bg-[#050509]/90 backdrop-blur-xl border-b border-purple-500/15"
          : "py-6 bg-transparent border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-3 relative z-50">
          <img
            src="/AIGHYPT MEYUALA.png"
            alt="AINA Logo"
            className="h-10 w-auto object-contain hover:scale-105 transition-transform duration-300"
          />
          <div className="flex flex-col">
            <span className="text-lg font-bold tracking-wider text-white leading-none">
              AINA
            </span>
            <span className="text-[8px] text-purple-400 font-bold tracking-widest uppercase">
              Asisten Masisir
            </span>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-1 bg-white/5 border border-purple-500/25 rounded-full px-2 py-1.5 backdrop-blur-md">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => scrollTo(item.href)}
              className="px-4 py-1.5 rounded-full text-sm font-medium text-slate-400 hover:text-white hover:bg-white/5 transition-all"
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <button className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
            Tentang
          </button>
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 bg-white text-black text-sm font-bold rounded-full hover:bg-slate-200 transition-colors shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)] flex items-center gap-2"
          >
            Kolaborasi <ArrowRight size={14} />
          </a>
        </div>

        <button
          className="md:hidden text-white relative z-50 p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div
        className={`absolute top-full left-0 right-0 bg-[#050509]/95 border-b border-purple-500/25 backdrop-blur-xl transition-all duration-300 md:hidden overflow-hidden origin-top ${
          isOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col px-6 py-4 gap-2">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => scrollTo(item.href)}
              className="text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 px-4 py-3 rounded-lg text-left transition-all border-b border-purple-500/15 last:border-0"
            >
              {item.label}
            </button>
          ))}
          <div className="pt-2 mt-2 border-t border-purple-500/15 flex flex-col gap-3">
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full block text-center py-3 bg-purple-600 text-white font-bold rounded-xl shadow-lg shadow-purple-900/20"
            >
              Kolaborasi
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

const HeroSection = () => {
  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="relative min-h-screen bg-[#050509] overflow-hidden pt-20 pb-14 md:pt-28 md:pb-20 px-6 md:px-8 flex flex-col items-center justify-center">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-purple-900/20 rounded-full blur-[120px] opacity-60" />
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-cyan-900/10 rounded-full blur-[100px] opacity-50" />
        <div className="absolute inset-0 dot-grid opacity-30" />
      </div>

      <Navbar />

      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* Hero PNG */}
        <img
          src="/aina-hero.png"
          alt="AINA — Asisten Pintar Khusus Mahasiswa Indonesia di Mesir"
          className="w-full max-w-xs md:max-w-sm lg:max-w-md mx-auto mb-10 md:mb-12 select-none pointer-events-none"
          draggable={false}
        />

        {/* CTA */}
        <a
          href="https://wa.me/6281311506025?text=Halo%2C%20saya%20ingin%20berkolaborasi%20dengan%20AINA."
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-flex items-center gap-2.5 px-5 py-2.5 font-bold text-white transition-all duration-300 overflow-hidden"
          style={{ borderRadius: '4px' }}
        >
          <span className="absolute inset-0 bg-[#0c0a1a] border border-purple-500/45 group-hover:border-purple-400/75 transition-all duration-300" style={{ borderRadius: '4px' }} />
          <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: 'linear-gradient(135deg, hsl(270 60% 55% / 0.18), transparent)', borderRadius: '4px' }} />
          <span className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-purple-400/70 to-transparent" />
          <span className="absolute top-[3px] left-[3px] w-2.5 h-2.5 border-t border-l border-purple-400/50" />
          <span className="absolute top-[3px] right-[3px] w-2.5 h-2.5 border-t border-r border-purple-400/50" />
          <span className="absolute bottom-[3px] left-[3px] w-2.5 h-2.5 border-b border-l border-purple-400/50" />
          <span className="absolute bottom-[3px] right-[3px] w-2.5 h-2.5 border-b border-r border-purple-400/50" />
          <span className="relative flex items-center gap-2.5">
            <GitMerge size={13} className="text-purple-300 group-hover:text-purple-200 transition-colors" />
            <span className="text-xs tracking-[0.15em] uppercase">Kolaborasi Bersama AINA</span>
          </span>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
