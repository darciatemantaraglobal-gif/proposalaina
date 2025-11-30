import React from 'react';
import { CheckCircle2, Zap, ArrowRight, Heart, Crown, TrendingUp, Sparkles, FileText } from 'lucide-react';

const FundingSection = () => {
  // Data Paket Investasi dari file .txt
  const packages = [
    {
      title: 'AINA Spark',
      subtitle: 'Crowdfunding Mahasiswa',
      price: '250rb - 1 Juta',
      icon: Heart,
      color: 'purple',
      description: 'Kontribusi sosial untuk membantu AINA berdiri. Cocok untuk mahasiswa/alumni muda.',
      benefits: [
        'Nama di Founding Supporters Wall',
        'Early Access sebelum launching',
        'Supporter Badge di profil',
        'Gratis premium (6 bln)',
        'Akses event "Behind AINA"'
      ],
      // Pesan WA Spesifik Paket 1
      waText: 'Halo Daru, saya ingin support AINA lewat paket Mini Supporter.',
      highlight: false
    },
    {
      title: 'AINA Momentum',
      subtitle: 'Investor Pemula/Revenue Share',
      price: '2 Juta - 5 Juta',
      icon: TrendingUp,
      color: 'cyan',
      description: 'Model Revenue Share. Aman untuk investor pemula tanpa resiko saham rumit.',
      benefits: [
        'Revenue Share 5% (sampai balik modal)',
        'Keuntungan Margin +20% di akhir',
        'Akses Grup Private Investor',
        'Nama di Angel Circle (Silver)',
        'Gratis Premium (1 tahun)'
      ],
      // Pesan WA Spesifik Paket 2
      waText: 'Halo, saya berminat ambil slot Angel Kecil (Investor Pemula) di AINA.',
      highlight: true // Highlighted Card
    },
    {
      title: 'AINA Legacy',
      subtitle: 'Investor Utama',
      price: '10 Juta - 50 Juta',
      icon: Crown,
      color: 'purple',
      description: 'Hybrid Model: Saham Permanen + Revenue Share. Untuk partner jangka panjang.',
      benefits: [
        'Equity/Saham Permanen (1.5% - 10%)',
        'Revenue Share 10-12%',
        'Undangan Monthly Founder Meeting',
        'Akses Dashboard Performa',
        'Logo di halaman Sponsor Utama'
      ],
      // Pesan WA Spesifik Paket 3
      waText: 'Halo, saya tertarik diskusi serius untuk paket Angel Serius (Equity Partner) AINA.',
      highlight: false
    }
  ];

  // Nomor WA Target
  const phoneNumber = "6281311506025";

  return (
    <section className="relative min-h-screen bg-[#050509] py-20 px-4 md:px-8 overflow-hidden font-sans">
      
      {/* Background Ambient Glows */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-purple-900/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-cyan-900/10 rounded-full blur-[120px] pointer-events-none" />
      
      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-purple-900/30 border border-purple-500/30 backdrop-blur-md">
            <Zap className="w-4 h-4 text-cyan-400 fill-cyan-400" />
            <span className="text-xs font-bold text-purple-200 uppercase tracking-widest">Investment Opportunity</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Pilih Paket <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Investasi</span>
          </h2>
          
          <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-lg">
            Mulai dari dukungan sukarela hingga kepemilikan saham. Transparan, aman, dan menguntungkan.
          </p>
        </div>

        {/* Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-20 items-start">
          
          {packages.map((pkg, index) => {
            const Icon = pkg.icon;
            const isCyan = pkg.color === 'cyan';
            
            return (
              <div 
                key={index}
                className={`relative flex flex-col h-full bg-[#0e0e12] border rounded-[32px] p-6 lg:p-8 transition-all duration-300 group
                  ${pkg.highlight 
                    ? 'border-cyan-500/50 shadow-[0_0_40px_-10px_rgba(34,211,238,0.15)] md:-translate-y-6 z-10' 
                    : 'border-white/5 hover:border-purple-500/30 hover:-translate-y-2'
                  }
                `}
              >
                {/* Badge for Highlighted Card */}
                {pkg.highlight && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <span className="bg-cyan-500 text-black text-[10px] md:text-xs font-bold px-4 py-1.5 rounded-full shadow-lg shadow-cyan-500/20 tracking-wider">
                      MOST POPULAR
                    </span>
                  </div>
                )}

                {/* Card Header */}
                <div className="mb-6 border-b border-white/5 pb-6">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 ${isCyan ? 'bg-cyan-500/10 text-cyan-400' : 'bg-purple-500/10 text-purple-400'}`}>
                    <Icon size={24} />
                  </div>
                  <h3 className={`font-bold text-xl mb-1 ${isCyan ? 'text-white' : 'text-white'}`}>{pkg.title}</h3>
                  <p className="text-slate-500 text-xs uppercase tracking-wider font-semibold mb-4">{pkg.subtitle}</p>
                  
                  <div className="flex items-baseline gap-1">
                    <span className="text-xs text-slate-400 mr-1">Rp</span>
                    <span className={`text-2xl lg:text-3xl font-bold ${isCyan ? 'text-cyan-300' : 'text-white'}`}>
                      {pkg.price}
                    </span>
                  </div>
                </div>

                {/* Benefits List */}
                <div className="space-y-4 mb-8 flex-1">
                  <p className="text-xs text-slate-400 leading-relaxed min-h-[40px]">
                    {pkg.description}
                  </p>
                  <div className="space-y-3">
                    {pkg.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${isCyan ? 'text-cyan-400' : 'text-purple-500'}`} />
                        <span className="text-slate-300 text-xs md:text-sm leading-snug">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button Link to WA */}
                <a 
                  href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(pkg.waText)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3.5 rounded-xl font-bold text-sm transition-all duration-300 flex items-center justify-center gap-2
                    ${isCyan 
                      ? 'bg-cyan-400 hover:bg-cyan-300 text-black shadow-[0_0_20px_rgba(34,211,238,0.3)]' 
                      : 'bg-white/5 hover:bg-white/10 text-white border border-white/10'
                    }
                  `}
                >
                  {pkg.highlight ? 'Ambil Slot' : 'Pilih Paket'}
                  <ArrowRight size={16} />
                </a>
              </div>
            );
          })}
        </div>

        {/* Bottom Info Banner */}
        <div className="relative w-full rounded-[30px] overflow-hidden bg-gradient-to-r from-[#150a26] to-[#0a1820] border border-white/10 p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl text-center md:text-left">
          {/* Abstract Pattern */}
          <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
          
          <div className="relative z-10">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-2 flex items-center justify-center md:justify-start gap-2">
              <FileText className="text-purple-400 w-5 h-5" />
              Transparansi Dana?
            </h3>
            <p className="text-slate-300 text-sm max-w-xl">
              Kami transparan soal alokasi dana (Server, OpenAI Credit, Marketing). Hubungi kami untuk melihat dokumen rincian lengkap.
            </p>
          </div>

          <div className="relative z-10 shrink-0">
             <a 
               href={`https://wa.me/${phoneNumber}?text=Halo%20Daru,%20boleh%20lihat%20rincian%20alokasi%20dana%20operasional%20AINA?`}
               target="_blank"
               rel="noopener noreferrer"
               className="group relative inline-flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-full text-white font-semibold text-sm transition-all hover:bg-white/10 backdrop-blur-sm"
             >
               <span>Lihat Rincian</span>
               <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
             </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FundingSection;