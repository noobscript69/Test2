
import React from 'react';

export const ContentSection: React.FC = () => {
  return (
    <section className="py-24 md:py-40 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        
        {/* Left Column: Subtle Intro */}
        <div className="lg:col-span-4 space-y-6">
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
            01 / Narrative
          </h2>
          <p className="serif text-3xl leading-snug">
            Architecture of the mind and the spaces we inhabit.
          </p>
        </div>

        {/* Right Column: Deep Text Content */}
        <div className="lg:col-span-8 space-y-12">
          <div className="space-y-8">
            <p className="text-xl md:text-2xl font-light leading-relaxed text-gray-700">
              In a world saturated with noise, there is profound beauty in the unsaid. 
              Our work seeks to capture the resonance of silence—the way light bends 
              through a window at dusk, or the texture of weathered stone.
            </p>
            <p className="text-gray-500 leading-relaxed max-w-2xl">
              We believe that true luxury lies in restraint. By stripping away the 
              unnecessary, we allow the core essence of a moment or a space to 
              speak for itself. It is an exercise in intentionality and focus, 
              where every shadow serves a purpose and every highlights tells a story.
            </p>
          </div>

          {/* Secondary Image Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-12">
            <div className="aspect-[4/5] overflow-hidden bg-gray-100 group">
              <img 
                src="https://picsum.photos/id/20/800/1000" 
                alt="Minimalist architectural detail" 
                className="w-full h-full object-cover grayscale transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <div className="aspect-[4/5] overflow-hidden bg-gray-100 mt-12 md:mt-24 group">
              <img 
                src="https://picsum.photos/id/26/800/1000" 
                alt="Nature texture" 
                className="w-full h-full object-cover grayscale transition-transform duration-700 group-hover:scale-110"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
