import { useState, useEffect } from "react";
import teamBg from "@/assets/team-bg.jpeg";

const SplashScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFadeOut(true), 2500);
    const completeTimer = setTimeout(() => onComplete(), 3200);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center transition-opacity duration-700 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* Team photo background */}
      <img src={teamBg} alt="Team White Devils" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-6 animate-fade-in">
        {/* Team photo card */}
        <div className="w-72 h-48 md:w-96 md:h-64 rounded-2xl overflow-hidden border-2 border-white/20 shadow-2xl">
          <img src={teamBg} alt="Team White Devils" className="w-full h-full object-cover object-top" />
        </div>

        {/* Team name */}
        <div className="flex flex-col items-center gap-3">
          <h1 className="text-5xl md:text-7xl font-bold font-display text-white tracking-[0.2em] drop-shadow-lg">
            WHITE DEVILS
          </h1>
          <div className="h-0.5 w-40 bg-gradient-to-r from-transparent via-trust-gold to-transparent" />
          <p className="text-white/60 text-sm tracking-widest uppercase mt-1">Team presents</p>
        </div>

        {/* Loading dots */}
        <div className="flex gap-2 mt-4">
          {[0, 1, 2].map(i => (
            <div
              key={i}
              className="w-2.5 h-2.5 rounded-full bg-trust-gold animate-bounce"
              style={{ animationDelay: `${i * 0.15}s` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
