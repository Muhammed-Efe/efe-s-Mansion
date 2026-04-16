import { useState, useEffect } from "react";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { Download } from "./components/Download";
import { Contact } from "./components/Contact";
import { JarvisBootScreen } from "./components/JarvisBootScreen";

export default function App() {
  const [showBoot, setShowBoot] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBoot(false);
    }, 3500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className="relative min-h-screen bg-[#0A0A0A] text-white overflow-x-hidden"
      style={{ fontFamily: "DM Sans, sans-serif" }}
    >
      {showBoot && <JarvisBootScreen />}

      <div
        className={`transition-opacity duration-1000 ${showBoot ? "opacity-0" : "opacity-100"}`}
      >
        <Hero />
        <Features />
        <Download />
        <Contact />
      </div>
    </div>
  );
}