
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-20 px-8 border-t border-gray-100 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
        <div className="space-y-2 text-center md:text-left">
          <p className="text-xs uppercase tracking-widest text-gray-400">Established 2024</p>
          <p className="serif text-xl">&copy; Studio Silent. All Rights Reserved.</p>
        </div>
        
        <div className="flex space-x-12 text-xs uppercase tracking-[0.2em] text-gray-500">
          <a href="#" className="hover:text-black transition-colors">Instagram</a>
          <a href="#" className="hover:text-black transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-black transition-colors">Journal</a>
        </div>

        <div className="md:text-right text-gray-400 text-xs">
          Built with precision <br /> for the discerning eye.
        </div>
      </div>
    </footer>
  );
};
