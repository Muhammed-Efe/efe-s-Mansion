import { Mail, Phone, Check } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  return (
    <footer className="relative py-16 px-6 border-t border-[#00FF88]/10">
      <div className="max-w-6xl mx-auto">
        {/* Main Content */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
          {/* Branding */}
          <div>
            <h3 
              className="text-3xl mb-2"
              style={{ 
                fontFamily: 'Space Grotesk, sans-serif',
                fontWeight: 700
              }}
            >
              Efe's Mansion
            </h3>
            <p className="text-gray-500 text-sm">
              Java 1.20.1 • Redstone Otomasyon • Jarvis AI
            </p>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Email */}
            <button
              onClick={() => copyToClipboard('muhammedefefalcon@gmail.com', 'email')}
              className="group flex items-center gap-3 px-6 py-3 rounded-xl bg-[#1A1A2E]/80 border border-[#00FF88]/20 hover:border-[#00FF88]/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,136,0.2)]"
            >
              <div className="w-10 h-10 rounded-lg bg-[#00FF88]/10 flex items-center justify-center group-hover:bg-[#00FF88]/20 transition-colors duration-300">
                {copiedEmail ? (
                  <Check className="w-5 h-5 text-[#00FF88]" />
                ) : (
                  <Mail className="w-5 h-5 text-[#00FF88]" />
                )}
              </div>
              <div className="text-left">
                <div className="text-xs text-gray-500 mb-0.5">E-posta</div>
                <div className="text-sm text-white" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  {copiedEmail ? 'Kopyalandı!' : 'muhammedefefalcon@gmail.com'}
                </div>
              </div>
            </button>

            {/* Phone */}
            <button
              onClick={() => copyToClipboard('05330326112', 'phone')}
              className="group flex items-center gap-3 px-6 py-3 rounded-xl bg-[#1A1A2E]/80 border border-[#00FF88]/20 hover:border-[#00FF88]/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,136,0.2)]"
            >
              <div className="w-10 h-10 rounded-lg bg-[#00FF88]/10 flex items-center justify-center group-hover:bg-[#00FF88]/20 transition-colors duration-300">
                {copiedPhone ? (
                  <Check className="w-5 h-5 text-[#00FF88]" />
                ) : (
                  <Phone className="w-5 h-5 text-[#00FF88]" />
                )}
              </div>
              <div className="text-left">
                <div className="text-xs text-gray-500 mb-0.5">Telefon</div>
                <div className="text-sm text-white" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  {copiedPhone ? 'Kopyalandı!' : '+90 533 032 6112'}
                </div>
              </div>
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-[#00FF88]/30 to-transparent mb-8"></div>

        {/* Bottom Info */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-600">
          <div>
            © 2026 Efe's Mansion. Tüm hakları saklıdır.
          </div>
          
          <div className="flex items-center gap-4">
            <span className="text-gray-500">Made with</span>
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
              <span className="text-gray-500">& Redstone</span>
            </div>
          </div>
        </div>

        {/* Jarvis Status Indicator */}
        <div className="mt-8 flex justify-center">
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-[#0A0A0A]/80 border border-[#00FF88]/20">
            <div className="relative">
              <div className="w-3 h-3 rounded-full bg-[#00FF88] animate-pulse"></div>
              <div className="absolute inset-0 rounded-full bg-[#00FF88] animate-ping"></div>
            </div>
            <span className="text-xs text-[#00FF88]" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              JARVIS v1.0 — Sistem Çevrimiçi
            </span>
          </div>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#00FF88]/50 to-transparent"></div>
    </footer>
  );
}
