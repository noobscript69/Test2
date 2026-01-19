
import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/id/42/1920/1080" 
          alt="Atmospheric landscape" 
          className="w-full h-full object-cover grayscale brightness-75 scale-105"
        />
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Hero Text */}
      <div className="relative z-10 text-center px-4 max-w-4xl">
        <h1 className="serif text-6xl md:text-9xl text-white mb-6 leading-tight font-light tracking-tight">
          Silent <span className="italic font-normal">Grace</span>
        </h1>
        <p className="text-white/80 text-lg md:text-xl font-light tracking-wide max-w-xl mx-auto uppercase">
          Exploring the intersections of light, shadow, and the stillness in between.
        </p>
      </div>

      {/* Bottom Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 text-xs uppercase tracking-[0.3em] flex flex-col items-center">
        <span className="mb-2">Scroll</span>
        <div className="w-[1px] h-12 bg-white/20 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-white animate-scroll-line"></div>
        </div>
      </div>

      <style>{`
        @keyframes scroll-line {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
        .animate-scroll-line {
          animation: scroll-line 2s cubic-bezier(0.65, 0, 0.35, 1) infinite;
        }
      `}</style>
    </section>
  );
};
