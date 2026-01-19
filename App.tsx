
import React from 'react';
import { Hero } from './components/Hero';
import { ContentSection } from './components/ContentSection';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <nav className="fixed top-0 left-0 w-full z-50 px-8 py-6 flex justify-between items-center mix-blend-difference text-white">
        <span className="text-xl font-medium tracking-tighter uppercase">Studio.</span>
        <div className="hidden md:flex space-x-8 text-sm uppercase tracking-widest">
          <a href="#" className="hover:opacity-60 transition-opacity">Perspective</a>
          <a href="#" className="hover:opacity-60 transition-opacity">Details</a>
          <a href="#" className="hover:opacity-60 transition-opacity">Archive</a>
        </div>
      </nav>

      <main className="flex-grow">
        <Hero />
        <ContentSection />
      </main>

      <Footer />
    </div>
  );
};

export default App;
