import { Download as DownloadIcon, Github, Package } from 'lucide-react';
import { motion } from 'motion/react';

export function Download() {
  return (
    <section className="relative py-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Main Download Panel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative p-12 rounded-3xl bg-gradient-to-br from-[#1A1A2E] via-[#0A0A0A] to-[#1A1A2E] border border-[#00FF88]/30 overflow-hidden"
        >
          {/* Animated Border Glow */}
          <div className="absolute inset-0 rounded-3xl opacity-50">
            <div className="absolute inset-0 bg-gradient-to-r from-[#00FF88] via-[#00BFFF] to-[#00FF88] blur-xl animate-[spin_8s_linear_infinite]" style={{ transform: 'scale(1.1)' }}></div>
          </div>

          {/* Content */}
          <div className="relative z-10">
            {/* Header */}
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00FF88]/10 border border-[#00FF88]/30 mb-6">
                <Package className="w-4 h-4 text-[#00FF88]" />
                <span className="text-sm text-[#00FF88]" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  En Son Sürüm
                </span>
              </div>

              <h2 
                className="text-4xl md:text-5xl mb-4"
                style={{ 
                  fontFamily: 'Space Grotesk, sans-serif',
                  fontWeight: 700
                }}
              >
                Haritayı İndirin
              </h2>
              
              <p className="text-gray-400 text-lg mb-2">
                Java Edition 1.20.1 için optimize edilmiş
              </p>
              
              <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#00FF88] animate-pulse"></div>
                  <span>Redstone Otomasyon</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#00BFFF] animate-pulse"></div>
                  <span>Jarvis AI</span>
                </div>
              </div>
            </div>

            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a
                href="https://github.com/Muhammed-Efe/efe-s-Mansion/releases"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-10 py-5 bg-[#00FF88] text-[#0A0A0A] rounded-xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,255,136,0.6)] flex items-center justify-center gap-3"
                style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600 }}
              >
                <DownloadIcon className="w-6 h-6 group-hover:animate-bounce" />
                <span className="text-lg">Haritayı İndir (.zip)</span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </a>

              <a
                href="https://github.com/Muhammed-Efe/efe-s-Mansion"
                target="_blank"
                rel="noopener noreferrer"
                className="group px-10 py-5 bg-transparent border-2 border-[#00FF88]/40 text-[#00FF88] rounded-xl transition-all duration-300 hover:border-[#00FF88] hover:shadow-[0_0_30px_rgba(0,255,136,0.3)] hover:bg-[#00FF88]/10 flex items-center justify-center gap-3"
                style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600 }}
              >
                <Github className="w-6 h-6" />
                <span className="text-lg">GitHub'da Gör</span>
              </a>
            </div>

            {/* Installation Info */}
            <div className="mt-10 p-6 rounded-xl bg-[#0A0A0A]/60 border border-[#00FF88]/10">
              <h3 
                className="text-lg mb-3 text-[#00FF88]"
                style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600 }}
              >
                Kurulum Talimatları
              </h3>
              <ol className="space-y-2 text-gray-400 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-[#00FF88] mt-0.5">1.</span>
                  <span>İndirilen .zip dosyasını çıkartın</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00FF88] mt-0.5">2.</span>
                  <span>Harita klasörünü <code className="px-2 py-0.5 rounded bg-[#1A1A2E] text-[#00FF88]">.minecraft/saves/</code> dizinine taşıyın</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00FF88] mt-0.5">3.</span>
                  <span>Minecraft'ı başlatın ve dünyayı seçin</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00FF88] mt-0.5">4.</span>
                  <span>Jarvis sistemini aktif etmek için spawn noktasındaki kontrol paneline gidin</span>
                </li>
              </ol>
            </div>
          </div>

          {/* Corner Decorations */}
          <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-[#00FF88]/30 rounded-tl-3xl"></div>
          <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-[#00FF88]/30 rounded-br-3xl"></div>
        </motion.div>
      </div>
    </section>
  );
}
