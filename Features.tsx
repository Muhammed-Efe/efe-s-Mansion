import { Lightbulb, Bot } from 'lucide-react';
import { motion } from 'motion/react';

const features = [
  {
    icon: Lightbulb,
    title: 'Işık Otomasyonu',
    description: 'Otomatik aydınlatma sistemi — gece/gündüz döngüsüne göre tüm mansion ışıkları akıllıca yönetilir. Redstone devrelerle tasarlanmış gelişmiş otomasyon.',
    gradient: 'from-[#00FF88]/20 to-[#00FF88]/5'
  },
  {
    icon: Bot,
    title: 'Jarvis v1.0',
    description: 'Komut tabanlı asistan sistemi — haritanın içinde sesli komutlarla kontrol. Yapay zeka destekli Minecraft deneyimi için gelişmiş otomasyon sistemi.',
    gradient: 'from-[#00BFFF]/20 to-[#00BFFF]/5'
  }
];

export function Features() {
  return (
    <section className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl mb-4"
            style={{ 
              fontFamily: 'Space Grotesk, sans-serif',
              fontWeight: 700
            }}
          >
            Akıllı Özellikler
          </h2>
          <p className="text-gray-400 text-lg">
            Redstone teknolojisiyle desteklenen modern sistemler
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="group relative p-8 rounded-2xl bg-gradient-to-br from-[#1A1A2E]/80 to-[#0A0A0A]/80 border border-[#00FF88]/10 backdrop-blur-sm transition-all duration-300 hover:border-[#00FF88]/50 hover:shadow-[0_0_40px_rgba(0,255,136,0.15)]"
            >
              {/* Gradient Overlay */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}></div>

              {/* Glow Effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#00FF88] to-[#00BFFF] rounded-2xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-500 -z-10"></div>

              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-xl bg-[#00FF88]/10 group-hover:bg-[#00FF88]/20 transition-colors duration-300">
                  <feature.icon className="w-8 h-8 text-[#00FF88] group-hover:scale-110 transition-transform duration-300" />
                </div>

                {/* Title */}
                <h3 
                  className="text-2xl mb-4 text-white group-hover:text-[#00FF88] transition-colors duration-300"
                  style={{ 
                    fontFamily: 'Space Grotesk, sans-serif',
                    fontWeight: 600
                  }}
                >
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>

                {/* Corner Accent */}
                <div className="absolute top-4 right-4 w-8 h-8">
                  <div className="absolute top-0 right-0 w-full h-0.5 bg-gradient-to-l from-[#00FF88]/50 to-transparent"></div>
                  <div className="absolute top-0 right-0 w-0.5 h-full bg-gradient-to-b from-[#00FF88]/50 to-transparent"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack Indicator */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[#1A1A2E]/50 border border-[#00FF88]/20">
            <div className="flex gap-1">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="w-2 h-2 rounded-full bg-[#00FF88]"
                  style={{ 
                    animation: `pulse 1.5s ease-in-out ${i * 0.3}s infinite`
                  }}
                ></div>
              ))}
            </div>
            <span className="text-sm text-gray-400" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Powered by Redstone Technology
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
