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
    { label: "Partner", href: "#partnership" },
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
          ? "py-2.5 bg-[#050509]/90 backdrop-blur-xl border-b border-purple-500/15"
          : "py-4 bg-transparent border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 flex items-center justify-between">
        <div className="flex items-center gap-2.5 relative z-50">
          <picture>
            <source srcSet="/logo.webp" type="image/webp" />
            <img
              src="/AIGHYPT MEYUALA.png"
              alt="AINA Logo"
              width="32"
              height="32"
              className="h-8 w-auto object-contain hover:scale-105 transition-transform duration-300"
            />
          </picture>
          <div className="flex flex-col">
            <span className="text-base font-bold tracking-wider text-white leading-none">
              AINA
            </span>
            <span className="text-[7px] text-purple-400 font-bold tracking-widest uppercase">
              Asisten Masisir
            </span>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-0.5 bg-white/5 border border-purple-500/25 rounded-full px-1.5 py-1 backdrop-blur-md">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => scrollTo(item.href)}
              className="px-3 py-1 rounded-full text-xs font-medium text-slate-400 hover:text-white hover:bg-white/5 transition-all"
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <button className="text-xs font-medium text-slate-300 hover:text-white transition-colors">
            Tentang
          </button>
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-1.5 bg-white text-black text-xs font-bold rounded-full hover:bg-slate-200 transition-colors shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)] flex items-center gap-1.5"
          >
            Kolaborasi <ArrowRight size={12} />
          </a>
        </div>

        <button
          className="md:hidden text-white relative z-50 p-1.5"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <div
        className={`absolute top-full left-0 right-0 bg-[#050509]/95 border-b border-purple-500/25 backdrop-blur-xl transition-all duration-300 md:hidden overflow-hidden origin-top ${
          isOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col px-5 py-3 gap-1.5">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => scrollTo(item.href)}
              className="text-xs font-medium text-slate-300 hover:text-white hover:bg-white/5 px-3 py-2.5 rounded-lg text-left transition-all border-b border-purple-500/15 last:border-0"
            >
              {item.label}
            </button>
          ))}
          <div className="pt-2 mt-1.5 border-t border-purple-500/15 flex flex-col gap-2.5">
            <a
              href="https://wa.me/6281311506025?text=Halo%2C%20saya%20ingin%20menghubungi%20AINA."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full block text-center py-2.5 bg-purple-600 hover:bg-purple-500 text-white text-sm font-bold rounded-xl shadow-lg shadow-purple-900/20 transition-colors"
            >
              Hubungi AINA
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
    <section className="relative min-h-screen bg-[#03020a] overflow-hidden pt-16 pb-20 md:pt-20 md:pb-28 px-6 md:px-8 flex flex-col items-center justify-center">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Deep space nebula — main glow */}
        <div className="absolute top-[-35%] left-1/2 -translate-x-1/2 w-[1100px] h-[750px] rounded-full blur-[170px]" style={{ background: 'hsl(258 65% 18% / 0.70)' }} />
        {/* Left nebula arm */}
        <div className="absolute top-[5%] left-[25%] w-[450px] h-[320px] rounded-full blur-[110px]" style={{ background: 'hsl(265 55% 22% / 0.40)' }} />
        {/* Right nebula arm — cool blue tint */}
        <div className="absolute top-[10%] right-[20%] w-[350px] h-[250px] rounded-full blur-[90px]" style={{ background: 'hsl(240 55% 18% / 0.30)' }} />
        {/* Deep core — small bright center */}
        <div className="absolute top-[8%] left-1/2 -translate-x-1/2 w-[280px] h-[220px] rounded-full blur-[60px]" style={{ background: 'hsl(268 60% 28% / 0.35)' }} />
        {/* Bottom space depth */}
        <div className="absolute bottom-[-15%] left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full blur-[160px]" style={{ background: 'hsl(255 60% 15% / 0.45)' }} />
        {/* Starfield dot grid */}
        <div className="absolute inset-0 dot-grid opacity-50" />
        {/* Faint vignette */}
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 80% 80% at 50% 50%, transparent 40%, #03020a 100%)' }} />
      </div>

      <Navbar />

      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center -mt-10 md:-mt-16">
        {/* Proposal Program badge */}
        <div className="relative inline-flex items-center gap-2 px-4 py-2 mb-8 overflow-hidden" style={{ borderRadius: '4px' }}>
          <span className="absolute inset-0 bg-[#0c0a1a] border border-purple-500/45" style={{ borderRadius: '4px' }} />
          <span className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-purple-400/60 to-transparent" />
          <span className="absolute top-[3px] left-[3px] w-2 h-2 border-t border-l border-purple-400/50" />
          <span className="absolute top-[3px] right-[3px] w-2 h-2 border-t border-r border-purple-400/50" />
          <span className="absolute bottom-[3px] left-[3px] w-2 h-2 border-b border-l border-purple-400/50" />
          <span className="absolute bottom-[3px] right-[3px] w-2 h-2 border-b border-r border-purple-400/50" />
          <span className="relative text-[10px] tracking-[0.2em] uppercase text-purple-300 font-bold">Proposal Program</span>
        </div>

        {/* Hero image */}
        <picture>
          <source srcSet="/aina-hero.webp" type="image/webp" />
          <img
            src="/aina-hero-opt.png"
            alt="AINA — Asisten Pintar Khusus Mahasiswa Indonesia di Mesir"
            width="900"
            height="568"
            className="w-full max-w-xs md:max-w-sm lg:max-w-md mx-auto mb-10 md:mb-12 select-none pointer-events-none"
            draggable={false}
            fetchPriority="high"
          />
        </picture>

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
