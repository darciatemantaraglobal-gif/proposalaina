import React, { useState, useEffect, useRef } from "react";
import {
  Play,
  Send,
  Bot,
  Sparkles,
  Menu,
  X,
  ArrowRight,
  LayoutDashboard,
  BookOpen,
  GraduationCap,
  Wallet,
  Plane,
  Bell,
  Settings,
  MoreHorizontal,
  User,
  CheckCircle,
  GitMerge,
} from "lucide-react";

const SidebarItem = ({ icon: Icon, active = false }) => (
  <div
    className={`p-3 rounded-xl transition-all cursor-pointer group ${
      active
        ? "bg-purple-600/20 text-purple-300"
        : "hover:bg-white/5 text-slate-400"
    }`}
  >
    <Icon
      size={20}
      className={active ? "text-purple-400" : "group-hover:text-white"}
    />
  </div>
);

const StatCard = ({ title, value, sub, color }) => (
  <div className="bg-[#13131a] border border-white/5 p-4 rounded-2xl flex flex-col gap-2 relative overflow-hidden group hover:border-white/10 transition-all w-full">
    <div
      className={`absolute top-0 right-0 p-20 ${color} opacity-[0.03] blur-xl rounded-full group-hover:opacity-[0.08] transition-opacity`}
    />
    <span className="text-slate-400 text-[10px] md:text-xs font-medium uppercase tracking-wider">
      {title}
    </span>
    <h3 className="text-xl md:text-2xl font-bold text-white">{value}</h3>
    <span className="text-[10px] md:text-xs text-slate-500">{sub}</span>
  </div>
);

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

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || isOpen
          ? "py-4 bg-[#050509]/90 backdrop-blur-xl border-b border-white/5"
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

        <div className="hidden md:flex items-center gap-1 bg-white/5 border border-white/10 rounded-full px-2 py-1.5 backdrop-blur-md">
          {["Masalah", "Solusi", "Fitur", "Roadmap", "Kolaborasi"].map(
            (item) => (
              <button
                key={item}
                className="px-4 py-1.5 rounded-full text-sm font-medium text-slate-400 hover:text-white hover:bg-white/5 transition-all"
              >
                {item}
              </button>
            )
          )}
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
            Dukung AINA <ArrowRight size={14} />
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
        className={`absolute top-full left-0 right-0 bg-[#050509]/95 border-b border-white/10 backdrop-blur-xl transition-all duration-300 md:hidden overflow-hidden origin-top ${
          isOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col px-6 py-4 gap-2">
          {["Masalah", "Solusi", "Fitur", "Roadmap", "Kolaborasi"].map(
            (item) => (
              <button
                key={item}
                className="text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 px-4 py-3 rounded-lg text-left transition-all border-b border-white/5 last:border-0"
              >
                {item}
              </button>
            )
          )}
          <div className="pt-2 mt-2 border-t border-white/5 flex flex-col gap-3">
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full block text-center py-3 bg-purple-600 text-white font-bold rounded-xl shadow-lg shadow-purple-900/20"
            >
              Dukung AINA
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

const HeroSection = () => {
  const apiKey = "AIzaSyADgeUhg6V6an4ueQ2E38spPoiv5y0vA-U";

  const [messages, setMessages] = useState([
    {
      role: "model",
      text: "Ahlan Masisir! 👋 Aku AINA. Ada yang bisa aku bantu soal kuliah, visa, atau rekomendasi tempat makan di Kairo hari ini?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [chatCount, setChatCount] = useState(0);
  const MAX_CHATS = 3;
  const messagesEndRef = useRef(null);
  const dashboardRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToDashboard = () => {
    dashboardRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  useEffect(() => {
    if (messages.length > 1) {
      scrollToBottom();
    }
  }, [messages]);

  const handleSendMessage = async () => {
    if (!input.trim() || chatCount >= MAX_CHATS || isLoading) return;

    const userMessage = input;
    setInput("");
    setMessages((prev) => [...prev, { role: "user", text: userMessage }]);
    setIsLoading(true);
    setChatCount((prev) => prev + 1);

    try {
      const systemInstruction =
        "Kamu adalah AINA, asisten AI cerdas khusus untuk mahasiswa Indonesia di Mesir (Masisir). Gaya bicaramu santai, ramah, menggunakan bahasa gaul Indonesia campur dikit istilah Arab yang umum di Mesir (seperti Ahlan, Syukran, Maafish musykilah). Kamu ahli dalam topik: Kuliah di Al-Azhar, Visa Mesir, Kuliner Kairo, dan tips hemat mahasiswa. Jawabanmu harus singkat, padat, dan membantu.";

      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [{ parts: [{ text: userMessage }] }],
            systemInstruction: { parts: [{ text: systemInstruction }] },
          }),
        }
      );

      const data = await response.json();
      const aiResponse =
        data.candidates?.[0]?.content?.parts?.[0]?.text ||
        "Maaf, koneksi ke server Kairo lagi gangguan nih. Coba lagi ya!";

      setMessages((prev) => [...prev, { role: "model", text: aiResponse }]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          role: "model",
          text: "Waduh, error sistem. Mungkin kuota internet habis? 😅",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleSendMessage();
  };

  const waLinkChat =
    "https://wa.me/6281311506025?text=Halo%20Daru,%20saya%20ingin%20bergabung%20komunitas%20AINA.";

  return (
    <section className="relative min-h-screen bg-[#050509] overflow-hidden pt-20 pb-14 md:pt-28 md:pb-20 px-4 md:px-6 flex flex-col items-center">
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&display=swap');
          .font-futuristic {
            font-family: 'Orbitron', sans-serif;
            letter-spacing: 0.05em;
          }
          .scrollbar-hide::-webkit-scrollbar { display: none; }
          .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
        `}
      </style>

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-purple-900/20 rounded-full blur-[120px] opacity-60" />
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-cyan-900/10 rounded-full blur-[100px] opacity-50" />
      </div>

      <Navbar />

      <div className="relative z-10 max-w-5xl mx-auto text-center mb-12 md:mb-24">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-purple-500/30 backdrop-blur-sm mb-6 md:mb-8 animate-fade-in-up shadow-[0_0_15px_-5px_rgba(168,85,247,0.5)]">
          <Sparkles size={12} className="text-cyan-400" />
          <span className="text-[10px] md:text-xs font-bold text-purple-200 tracking-wide">
            DIGITAL SYSTEM FOR MASISIR
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-6 leading-[1.1] font-futuristic uppercase">
          AINA{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-300 to-cyan-300">
            AI ASSISTANT
          </span>
          <br />
          <span className="text-lg md:text-3xl lg:text-4xl text-slate-300 font-normal normal-case" style={{ fontFamily: "sans-serif", letterSpacing: "0.01em" }}>
            Bukan AI biasa — sistem yang dirancang untuk Masisir.
          </span>
        </h1>

        {/* Subtext */}
        <p className="text-base md:text-xl text-slate-400 max-w-2xl mx-auto mb-8 md:mb-10 leading-relaxed px-4">
          AINA membantu mahasiswa Indonesia di Mesir mengurus birokrasi, akademik, dan kehidupan sehari-hari —{" "}
          <span className="text-slate-200 font-medium">
            dalam satu sistem yang memahami konteks Masisir secara mendalam.
          </span>
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full px-6 md:px-0">
          <button
            onClick={scrollToDashboard}
            className="w-full sm:w-auto px-8 py-4 bg-white text-[#050509] rounded-full font-bold shadow-[0_0_30px_-5px_rgba(255,255,255,0.3)] hover:shadow-[0_0_40px_-5px_rgba(168,85,247,0.4)] hover:scale-105 transition-all transform relative overflow-hidden group"
          >
            <span className="relative z-10">Lihat Fitur AINA</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-100 to-cyan-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>

          <button
            onClick={scrollToDashboard}
            className="w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/10 hover:bg-white/10 text-white rounded-full font-semibold flex items-center justify-center gap-3 transition-all group backdrop-blur-sm"
          >
            <div className="w-6 h-6 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-purple-500 group-hover:border-purple-500 transition-all">
              <Play size={10} fill="currentColor" className="ml-0.5" />
            </div>
            <span>Coba Demo AINA</span>
          </button>
        </div>

        {/* Tags */}
        <div className="mt-10 flex flex-wrap justify-center gap-2 md:gap-3 opacity-80 px-4">
          {[
            "Administrasi",
            "Akademik",
            "Kesehatan",
            "Lokasi & Navigasi",
            "Produktivitas",
          ].map((tag) => (
            <span
              key={tag}
              className="px-3 py-1.5 rounded-lg bg-[#1a1a24] border border-white/5 text-[10px] md:text-xs font-medium text-slate-400 uppercase tracking-wider"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Product Visual (Dashboard) */}
      <div
        ref={dashboardRef}
        className="relative w-full max-w-6xl mx-auto md:perspective-[2000px] group px-2 md:px-0"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-purple-500/10 to-transparent blur-3xl -z-10 translate-y-20 scale-90" />

        <div className="bg-[#0a0a0f] rounded-2xl md:rounded-3xl border border-white/10 shadow-2xl shadow-black/50 overflow-hidden transform md:rotate-x-12 transition-transform duration-700 ease-out md:hover:rotate-x-0 md:hover:translate-y-[-10px]">
          {/* Window Controls */}
          <div className="h-10 md:h-12 bg-[#13131a] border-b border-white/5 flex items-center justify-between px-4 md:px-6">
            <div className="flex gap-1.5 md:gap-2">
              <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
              <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
              <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
            </div>
            <div className="flex items-center gap-2 px-3 py-1 bg-black/40 rounded-lg border border-white/5 hidden sm:flex">
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
              <span className="text-[10px] text-slate-400 font-mono">
                aina.masisir.app
              </span>
            </div>
            <div className="flex gap-3 md:gap-4 text-slate-500">
              <Bell size={14} />
              <Settings size={14} />
            </div>
          </div>

          {/* App Content */}
          <div className="flex flex-col md:flex-row h-auto md:h-[600px]">
            {/* Sidebar */}
            <div className="hidden md:flex w-20 border-r border-white/5 bg-[#0e0e12] flex-col items-center py-6 gap-4">
              <SidebarItem icon={LayoutDashboard} active />
              <SidebarItem icon={BookOpen} />
              <SidebarItem icon={Wallet} />
              <SidebarItem icon={Plane} />
              <SidebarItem icon={GraduationCap} />
              <div className="mt-auto">
                <div className="w-8 h-8 rounded-full bg-slate-700"></div>
              </div>
            </div>

            {/* Main Area */}
            <div className="flex-1 bg-[#050509] p-4 md:p-8 flex flex-col md:flex-row gap-6 overflow-hidden">
              {/* Left: Stats */}
              <div className="flex-1 flex flex-col gap-4 md:gap-6">
                <div className="flex flex-row justify-between items-end gap-2">
                  <div>
                    <h2 className="text-xl md:text-2xl font-bold text-white">
                      Ahlan, Masisir! 👋
                    </h2>
                    <p className="text-slate-400 text-xs md:text-sm mt-1">
                      Status Visa:{" "}
                      <span className="text-emerald-400 font-medium">
                        Aman (20 Hari lagi)
                      </span>
                    </p>
                  </div>
                  <button className="bg-purple-600 text-white text-[10px] md:text-xs px-3 py-2 rounded-lg font-bold hover:bg-purple-500 transition-colors whitespace-nowrap">
                    + Target Baru
                  </button>
                </div>

                <div className="grid grid-cols-2 gap-3 md:gap-4">
                  <StatCard
                    title="Sisa Tabungan"
                    value="EGP 2,450"
                    sub="Cukup untuk 15 hari"
                    color="bg-emerald-500"
                  />
                  <StatCard
                    title="Target Hafalan"
                    value="3 Juz"
                    sub="75% bulan ini"
                    color="bg-purple-500"
                  />
                </div>

                <div className="bg-[#13131a] rounded-xl border border-white/5 p-4 md:p-5 flex-1">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-white font-semibold text-sm md:text-base">
                      To-do List
                    </h3>
                    <MoreHorizontal size={16} className="text-slate-500" />
                  </div>
                  <div className="space-y-2 md:space-y-3">
                    {[
                      { title: "Ijroat termin 2 Syariah", tag: "Academic", time: "Priority" },
                      { title: "Bimbel Ushul Fiqh di Sabi", tag: "Study", time: "5h ago" },
                      { title: "Rapat Organisasi", tag: "Meeting", time: "Tomorrow" },
                    ].map((task, i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between p-3 rounded-xl bg-white/5 cursor-pointer transition-colors group border border-transparent hover:border-white/5"
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-2 h-2 rounded-full ${
                              i === 0 ? "bg-purple-500 animate-pulse" : "bg-slate-600"
                            }`}
                          ></div>
                          <span className="text-xs md:text-sm text-slate-300 group-hover:text-white truncate max-w-[150px] md:max-w-none">
                            {task.title}
                          </span>
                        </div>
                        <span className="text-[10px] px-2 py-1 rounded bg-black/30 text-slate-500 border border-white/5">
                          {task.tag}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right: Live Chat */}
              <div className="w-full md:w-[350px] bg-[#0e0e12] rounded-xl md:rounded-2xl border border-white/5 flex flex-col shadow-xl min-h-[400px] md:min-h-0 relative">
                <div className="p-3 md:p-4 border-b border-white/5 flex items-center justify-between bg-[#13131a]/50">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center border border-white/10">
                      <Bot size={14} className="text-white" />
                    </div>
                    <div>
                      <span className="text-xs md:text-sm font-bold text-white block">
                        AINA AI
                      </span>
                      <span className="text-[10px] text-green-400 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>{" "}
                        Online • Demo Mode
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] text-slate-400 bg-white/5 px-2 py-1 rounded-full border border-white/5">
                      {MAX_CHATS - chatCount} chat left
                    </span>
                  </div>
                </div>

                <div
                  className="flex-1 p-3 md:p-4 space-y-4 overflow-y-auto scrollbar-hide relative bg-[#0e0e12]"
                  style={{ maxHeight: "400px" }}
                >
                  {messages.map((msg, index) => (
                    <div
                      key={index}
                      className={`flex gap-3 ${msg.role === "user" ? "flex-row-reverse" : ""}`}
                    >
                      {msg.role === "model" && (
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center border border-white/10 flex-shrink-0">
                          <Bot size={14} className="text-white" />
                        </div>
                      )}
                      {msg.role === "user" && (
                        <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center border border-white/10 flex-shrink-0">
                          <User size={14} className="text-white" />
                        </div>
                      )}
                      <div
                        className={`p-3 rounded-2xl text-xs md:text-sm shadow-sm max-w-[85%] border ${
                          msg.role === "user"
                            ? "bg-gradient-to-r from-purple-600 to-purple-500 rounded-tr-none text-white border-purple-400/20"
                            : "bg-[#1a1a24] rounded-tl-none text-slate-300 border-white/5"
                        }`}
                      >
                        <p className="leading-relaxed">{msg.text}</p>
                      </div>
                    </div>
                  ))}

                  {isLoading && (
                    <div className="flex gap-3">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center border border-white/10 flex-shrink-0">
                        <Bot size={14} className="text-white" />
                      </div>
                      <div className="p-3 rounded-2xl rounded-tl-none bg-[#1a1a24] border border-white/5 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 bg-slate-500 rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></span>
                        <span className="w-1.5 h-1.5 bg-slate-500 rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></span>
                        <span className="w-1.5 h-1.5 bg-slate-500 rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></span>
                      </div>
                    </div>
                  )}

                  {chatCount >= MAX_CHATS && (
                    <div className="p-4 rounded-2xl bg-purple-900/20 border border-purple-500/30 text-center">
                      <p className="text-xs text-purple-300 mb-2 font-medium">
                        Demo selesai! Tertarik bergabung komunitas AINA?
                      </p>
                      <a
                        href={waLinkChat}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block text-[10px] px-4 py-2 bg-purple-600 text-white rounded-full font-bold hover:bg-purple-500 transition-colors"
                      >
                        Gabung Komunitas →
                      </a>
                    </div>
                  )}

                  <div ref={messagesEndRef} />
                </div>

                <div className="p-3 md:p-4 border-t border-white/5 bg-[#13131a]/50">
                  {chatCount < MAX_CHATS ? (
                    <div className="flex items-center gap-2 bg-[#050509] border border-white/10 rounded-xl px-3 py-2 focus-within:border-purple-500/50 transition-colors">
                      <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder="Tanya AINA soal Visa, Azhar..."
                        className="bg-transparent text-xs md:text-sm text-white placeholder-slate-500 flex-1 outline-none"
                      />
                      <button
                        onClick={handleSendMessage}
                        disabled={!input.trim() || isLoading}
                        className="w-7 h-7 rounded-lg bg-purple-600 flex items-center justify-center hover:bg-purple-500 transition-colors disabled:opacity-40"
                      >
                        <Send size={12} className="text-white" />
                      </button>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center gap-2 text-slate-500 text-[10px]">
                      <CheckCircle size={12} className="text-emerald-500" />
                      Demo selesai
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
