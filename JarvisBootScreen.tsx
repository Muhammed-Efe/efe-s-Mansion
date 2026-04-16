import { useState, useEffect } from 'react';

const bootMessages = [
  'JARVIS v1.0 — Sistem Başlatılıyor...',
  'Redstone Ağı Kontrol Ediliyor...',
  'Işık Otomasyon Modülleri Yükleniyor...',
  'Minecraft World API Bağlantısı Kuruldu',
  'Efe\'s Mansion Haritası Hazır'
];

export function JarvisBootScreen() {
  const [messages, setMessages] = useState<string[]>([]);

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < bootMessages.length) {
        setMessages(prev => [...prev, bootMessages[currentIndex]]);
        currentIndex++;
      }
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-50 bg-[#0A0A0A] flex items-center justify-center">
      <div className="w-full max-w-2xl px-8">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className="mb-3 font-mono text-[#00FF88] opacity-0 animate-[fadeIn_0.3s_ease-in_forwards]"
            style={{ 
              animationDelay: `${idx * 0.1}s`,
              fontFamily: 'Space Grotesk, monospace'
            }}
          >
            <span className="text-[#00FF88]/50">{'>'}</span> {msg}
            {idx === messages.length - 1 && (
              <span className="inline-block w-2 h-5 ml-1 bg-[#00FF88] animate-pulse"></span>
            )}
          </div>
        ))}
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateX(-10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
}
