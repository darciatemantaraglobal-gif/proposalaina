import React, { useState, useEffect } from "react";
import { Play, Sparkles, Menu, X, ArrowRight, GitMerge } from "lucide-react";

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
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&display=swap');
          .font-futuristic {
            font-family: 'Orbitron', sans-serif;
            letter-spacing: 0.05em;
          }
        `}
      </style>

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-purple-900/20 rounded-full blur-[120px] opacity-60" />
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-cyan-900/10 rounded-full blur-[100px] opacity-50" />
        <div className="absolute inset-0 dot-grid opacity-30" />
      </div>

      <Navbar />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-purple-500/30 backdrop-blur-sm mb-6 md:mb-8 shadow-[0_0_15px_-5px_rgba(168,85,247,0.5)]">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
          </span>
          <span className="text-[10px] md:text-xs font-bold text-purple-200 tracking-wide">
            AI ASSISTANT & DIGITAL SYSTEM FOR MASISIR
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-6 leading-[1.1] font-futuristic uppercase">
          AINA{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-300 to-cyan-300">
            AI ASSISTANT
          </span>
          <br />
          <span
            className="text-lg md:text-3xl lg:text-4xl text-slate-300 font-normal normal-case"
            style={{ fontFamily: "sans-serif", letterSpacing: "0.01em" }}
          >
            Sistem digital yang paham konteks Masisir — bukan AI generik.
          </span>
        </h1>

        {/* Subtext */}
        <p className="text-base md:text-xl text-slate-400 max-w-2xl mx-auto mb-8 md:mb-10 leading-relaxed px-2">
          AINA menggabungkan AI Assistant, Knowledge Base Masisir, informasi komunitas, dan tools produktivitas —{" "}
          <span className="text-slate-200 font-medium">
            dalam satu ekosistem yang sudah berjalan dan terus berkembang.
          </span>
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 w-full px-2 md:px-0 mb-10">
          <button
            onClick={() => scrollTo("#fitur")}
            className="w-full sm:w-auto px-6 py-3 md:px-8 md:py-4 bg-white text-[#050509] rounded-full font-bold text-sm md:text-base shadow-[0_0_30px_-5px_rgba(255,255,255,0.3)] hover:shadow-[0_0_40px_-5px_rgba(168,85,247,0.4)] hover:scale-105 transition-all transform relative overflow-hidden group"
          >
            <span className="relative z-10">Pelajari AINA</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-100 to-cyan-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>

          <button
            onClick={() => scrollTo("#fitur")}
            className="w-full sm:w-auto px-6 py-3 md:px-8 md:py-4 bg-white/5 border border-purple-500/25 hover:bg-white/10 text-white rounded-full font-semibold text-sm md:text-base flex items-center justify-center gap-2.5 transition-all group backdrop-blur-sm"
          >
            <div className="w-5 h-5 md:w-6 md:h-6 rounded-full border border-purple-500/30 flex items-center justify-center group-hover:bg-purple-500 group-hover:border-purple-500 transition-all">
              <Play size={9} fill="currentColor" className="ml-0.5" />
            </div>
            <span>Lihat Fitur</span>
          </button>

          <a
            href="https://wa.me/6281311506025?text=Halo%2C%20saya%20ingin%20berkolaborasi%20dengan%20AINA."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-3 md:px-8 md:py-4 bg-purple-500/10 border border-purple-500/30 hover:bg-purple-500/20 text-white rounded-full font-semibold text-sm md:text-base flex items-center justify-center gap-2 transition-all backdrop-blur-sm"
          >
            <GitMerge size={13} className="text-purple-400" />
            <span>Kolaborasi Bersama AINA</span>
          </a>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 opacity-80 px-2">
          {["Administrasi", "Akademik", "Kesehatan", "Lokasi & Navigasi", "Produktivitas"].map((tag) => (
            <span
              key={tag}
              className="px-3 py-1.5 rounded-lg bg-[#1a1a24] border border-purple-500/15 text-[10px] md:text-xs font-medium text-slate-400 uppercase tracking-wider"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
