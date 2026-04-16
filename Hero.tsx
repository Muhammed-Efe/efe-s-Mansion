import { useState, useEffect, useRef } from 'react';
import { Download, Github } from 'lucide-react';
import { ParticleBackground } from './ParticleBackground';

export function Hero() {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = "Efe's Mansion";
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 150);

    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);

    return () => {
      clearInterval(typingInterval);
      clearInterval(cursorInterval);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticleBackground />
      
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Version Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1A1A2E]/80 border border-[#00FF88]/30 mb-8 backdrop-blur-sm">
          <div className="w-2 h-2 rounded-full bg-[#00FF88] animate-pulse shadow-[0_0_10px_#00FF88]"></div>
          <span className="text-sm text-[#00FF88]" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            Java Edition 1.20.1
          </span>
        </div>

        {/* Main Title with Typewriter Effect */}
        <h1 
          className="mb-6 text-6xl md:text-8xl tracking-tight"
          style={{ 
            fontFamily: 'Space Grotesk, sans-serif',
            fontWeight: 700,
            textShadow: '0 0 30px rgba(0, 255, 136, 0.3)'
          }}
        >
          <span className="text-white">{displayedText}</span>
          {showCursor && (
            <span className="inline-block w-1 h-16 md:h-24 ml-2 bg-[#00FF88] animate-pulse"></span>
          )}
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto">
          Java 1.20.1 için akıllı Minecraft haritası
          <br />
          <span className="text-[#00FF88]">Redstone teknolojisiyle desteklenen modern yaşam alanı</span>
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="https://github.com/Muhammed-Efe/efe-s-Mansion/releases"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-8 py-4 bg-[#00FF88] text-[#0A0A0A] rounded-lg overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,136,0.5)] font-semibold flex items-center gap-3 w-full sm:w-auto justify-center"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            <Download className="w-5 h-5" />
            <span>Hemen İndir</span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          </a>

          <a
            href="https://github.com/Muhammed-Efe/efe-s-Mansion"
            target="_blank"
            rel="noopener noreferrer"
            className="group px-8 py-4 bg-transparent border-2 border-[#00FF88]/30 text-[#00FF88] rounded-lg transition-all duration-300 hover:border-[#00FF88] hover:shadow-[0_0_20px_rgba(0,255,136,0.3)] font-semibold flex items-center gap-3 w-full sm:w-auto justify-center hover:bg-[#00FF88]/10"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            <Github className="w-5 h-5" />
            <span>GitHub'da Gör</span>
          </a>
        </div>

        {/* Download Counter */}
        <div className="mt-12 text-gray-500">
          <DownloadCounter />
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0A0A0A] to-transparent pointer-events-none"></div>
    </section>
  );
}

function DownloadCounter() {
  const [count, setCount] = useState(0);
  const targetCount = 1247;

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = targetCount / steps;
    let current = 0;

    const interval = setInterval(() => {
      current += increment;
      if (current >= targetCount) {
        setCount(targetCount);
        clearInterval(interval);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-sm" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
      <span className="text-[#00FF88]">{count.toLocaleString()}</span> indirme
    </div>
  );
}
