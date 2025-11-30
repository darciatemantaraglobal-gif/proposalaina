import React from 'react';
import { Heart, Mail, MapPin, Phone } from 'lucide-react';

const AinaHeroSection = () => {
  return (
    <section className="relative bg-[#0a0a0f] overflow-hidden py-20 px-6 md:py-28">
      {/* Background Glow Elements */}
      <div className="absolute top-20 left-0 w-72 h-72 bg-purple-900/30 rounded-full filter blur-3xl opacity-70 pointer-events-none"></div>
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-pink-900/20 rounded-full filter blur-3xl opacity-70 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          
          {/* LEFT COLUMN: Main Typography */}
          <div className="flex-1 text-left max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
              Hubungi Kami <br />
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Segera!
              </span>
            </h1>
            
            <h2 className="text-2xl font-bold text-white mb-4">
              AINA: Asisten Cerdas Masisir
            </h2>
            
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Dibangun oleh Masisir, untuk Masisir, dengan teknologi tingkat dunia. 
              Rasakan masa depan pengelolaan informasi dan komunitas Anda hari ini.
            </p>

            {/* Tombol dihapus sesuai permintaan */}
          </div>


          {/* RIGHT COLUMN: The "Card" Graphic */}
          <div className="flex-1 w-full max-w-lg relative z-10">
            {/* Glassmorphism Card Container */}
            <div className="bg-gray-900/80 backdrop-blur-md border border-gray-700/50 rounded-3xl p-8 shadow-2xl transform md:rotate-3 transition-transform hover:rotate-0">
              
              <div className="mb-8">
                 <h3 className="text-lg font-semibold text-white mb-1 flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-green-400"></div>
                  AINA System Status: Active
                 </h3>
                 <p className="text-sm text-gray-400">Memudahkan Masisir di kehidupannya</p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                {/* Quick Links Section */}
                <div className="bg-gray-800/50 rounded-xl p-5 border border-gray-700">
                  <h4 className="text-purple-300 font-semibold mb-4 text-sm uppercase tracking-wider">Quick Navigation</h4>
                  <ul className="space-y-3">
                    <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm block py-1">Tentang AINA</a></li>
                    <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm block py-1">Fitur Utama</a></li>
                    <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm block py-1">Roadmap Development</a></li>
                  </ul>
                </div>

                {/* Contact Section */}
                <div className="bg-gray-800/50 rounded-xl p-5 border border-gray-700">
                  <h4 className="text-pink-300 font-semibold mb-4 text-sm uppercase tracking-wider">Connect Info</h4>
                  <ul className="space-y-4">
                    {/* Email Updated */}
                    <li className="flex items-start gap-3 text-gray-300 text-sm">
                      <Mail className="w-5 h-5 flex-shrink-0 text-purple-400" />
                      <span className="break-all">darcia@aigypt.id</span>
                    </li>
                    {/* WhatsApp Added */}
                    <li className="flex items-start gap-3 text-gray-300 text-sm">
                      <Phone className="w-5 h-5 flex-shrink-0 text-green-400" />
                      <span>+62 813-1150-6025</span>
                    </li>
                    {/* Location Kept */}
                    <li className="flex items-start gap-3 text-gray-300 text-sm">
                      <MapPin className="w-5 h-5 flex-shrink-0 text-pink-400" />
                      <span>Mesir & Indonesia</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* Footer Bottom Text */}
              <div className="mt-8 pt-6 border-t border-gray-700 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500 gap-3">
                <p>© 2025 AINA Project.</p>
                <p className="flex items-center gap-1">
                  Dibuat dengan kepedulian untuk Masisir
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AinaHeroSection;