import React from 'react';
import { Code, Database, Zap, CheckCircle2 } from 'lucide-react';
import { Card, CardContent } from './ui/card';

// --- STYLE DEFINITIONS ---
const customStyles = `
  @keyframes soft-pulse {
    0%, 100% { opacity: 0.8; filter: brightness(1); }
    50% { opacity: 1; filter: brightness(1.2); }
  }
  .animate-soft-pulse { animation: soft-pulse 4s ease-in-out infinite; }
`;

const ProgressSection = () => {
  // Inject styles
  React.useEffect(() => {
    const styleSheet = document.createElement("style");
    styleSheet.innerText = customStyles;
    document.head.appendChild(styleSheet);
    return () => document.head.removeChild(styleSheet);
  }, []);

  const techStack = [
    {
      category: 'Frontend Core',
      icon: Code,
      items: [
        'React + Tailwind CSS',
        'Modul lengkap & terstruktur',
        'Desain UI modern',
        'Routing terorganisir',
        'API handler terpusat',
        'Semua halaman berjalan'
      ]
    },
    {
      category: 'Backend Engine',
      icon: Zap,
      items: [
        'FastAPI framework',
        'MongoDB integration',
        'JWT authentication',
        'AI Chat API',
        'PDF Processor',
        'Guide, Game, Notes API'
      ]
    },
    {
      category: 'Data Infrastructure',
      icon: Database,
      items: [
        'MongoDB Atlas',
        'Semua collection inti siap',
        'Schema teroptimasi',
        'Real-time sync',
        'Backup otomatis',
        'Scalable infrastructure'
      ]
    }
  ];

  const progressValue = 90;
  // Kalkulasi untuk SVG circle progress
  const radius = 100; 
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progressValue / 100) * circumference;

  return (
    <section className="relative overflow-hidden bg-black py-24 px-6 md:py-32">
      {/* Global background - Lebih gelap dan bersih */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#130f2b] via-[#050509] to-black" />
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMTIwLCAxMDAsIDI1NSwgMC4wNykiLz48L3N2Zz4=')] opacity-40" />

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-950/30 px-4 py-1.5 backdrop-blur-md">
            <CheckCircle2 className="h-4 w-4 text-cyan-400" />
            <span className="text-xs font-medium uppercase tracking-[0.16em] text-purple-100">
              Status Sistem: {progressValue}% Selesai
            </span>
          </div>

          <h2 className="mb-4 text-4xl font-bold tracking-tight text-white md:text-6xl">
            AINA Siap Mengudara.
          </h2>
        </div>

        {/* === FUTURISTIC PROGRESS "QUANTUM HALO" === */}
        <div className="relative mb-24 flex flex-col items-center justify-center">
          
          <div className="relative flex h-[300px] w-[300px] items-center justify-center md:h-[320px] md:w-[320px]">
            
            {/* Ambient Glow */}
            <div className="pointer-events-none absolute inset-0 rounded-full bg-purple-600/15 blur-[120px]" />
            <div className="pointer-events-none absolute inset-0 rounded-full bg-cyan-600/10 blur-[90px]" />

            {/* SVG Circular Progress */}
            <svg className="absolute h-full w-full -rotate-90 transform drop-shadow-[0_0_20px_rgba(139,92,246,0.5)] animate-soft-pulse" viewBox="0 0 250 250">
               <defs>
                <linearGradient id="halo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#22d3ee" />
                  <stop offset="50%" stopColor="#8b5cf6" />
                  <stop offset="100%" stopColor="#c084fc" />
                </linearGradient>
              </defs>

              <circle
                cx="125"
                cy="125"
                r={radius}
                stroke="#1e1b4b"
                strokeWidth="6"
                fill="transparent"
                className="opacity-50"
              />
              
              <circle
                cx="125"
                cy="125"
                r={radius}
                stroke="url(#halo-gradient)"
                strokeWidth="8"
                fill="transparent"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
                className="transition-all duration-1000 ease-out"
              />
            </svg>

            {/* Inner Content */}
            <div className="absolute flex flex-col items-center justify-center">
              <div className="absolute -z-10 h-32 w-32 rounded-full bg-purple-600/20 blur-[50px]" />
              
              <div className="flex items-end justify-center leading-none">
                <span className="text-7xl font-extrabold text-white tracking-tighter drop-shadow-[0_0_15px_rgba(255,255,255,0.5)] md:text-8xl">
                  {progressValue}
                </span>
                <span className="mb-2 text-3xl font-bold text-purple-300">%</span>
              </div>
              <span className="mt-3 text-[10px] uppercase tracking-[0.2em] text-cyan-200/70 md:text-xs font-medium">
                System Readiness
              </span>
            </div>
          </div>

           {/* Status pill */}
           <div className="absolute -bottom-6 inline-flex items-center gap-3 rounded-full border border-white/5 bg-white/5 px-5 py-2 text-xs text-slate-300 backdrop-blur-xl">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              Semua sistem inti beroperasi normal.
           </div>
        </div>
        {/* === END PROGRESS === */}

        {/* Tech stack cards */}
        <div className="relative mx-auto mb-16 grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
          {techStack.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <Card
                key={index}
                className="group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-[#0a0a12]/80 shadow-[0_0_20px_-10px_rgba(168,85,247,0.3)] backdrop-blur-md transition-all duration-300 hover:border-purple-500/30 hover:bg-[#0f0f1a]"
              >
                <CardContent className="relative flex h-full flex-col p-6 lg:p-8">
                  <div className="mb-6 flex items-center justify-between">
                    <div className="inline-flex items-center gap-2 rounded-lg bg-purple-900/20 px-3 py-2 border border-purple-500/10 transition-colors group-hover:border-purple-500/30">
                      <Icon className="h-5 w-5 text-purple-300" />
                      <span className="text-xs font-bold uppercase tracking-wider text-purple-200">
                        {tech.category}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-3 text-[13px] text-slate-400 md:text-[14px]">
                    {tech.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 group/item">
                        <span className="mt-[6px] inline-block h-1.5 w-1.5 rotate-45 bg-purple-600/80 transition-all group-hover/item:bg-cyan-400" />
                        <span className="leading-snug transition-colors group-hover/item:text-slate-200">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ProgressSection;