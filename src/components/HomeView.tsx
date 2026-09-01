import React from 'react';
import { motion } from 'motion/react';
import { GeometricShape } from './GeometricShape';
import { ActivePanel, ContentDictionary } from '../types';

interface HomeViewProps {
  dict: ContentDictionary;
  activePanel: ActivePanel;
  setActivePanel: (panel: ActivePanel) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ dict, activePanel, setActivePanel }) => {
  const variants = {
    active: { opacity: 1, scale: 1, filter: 'blur(0px)' },
    inactive: { opacity: 0.2, scale: 0.95, filter: 'blur(4px)' }
  };

  return (
    <motion.section
      initial="active"
      animate={activePanel === 'home' ? 'active' : 'inactive'}
      variants={variants}
      transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
      className="relative w-full h-screen flex items-center justify-center px-6 md:px-16 bg-[#f4f4f4] overflow-hidden z-10"
    >
      <GeometricShape />

      <div className={`relative z-10 max-w-4xl mx-auto text-center pointer-events-auto pb-24 md:pb-0 pt-12 md:pt-0 ${activePanel !== 'home' ? 'pointer-events-none' : ''}`}>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-black select-none">
          {dict.homeTitle}
        </h1>

        <p className="mt-6 text-sm sm:text-base md:text-lg text-gray-600 font-medium max-w-xl mx-auto">
          {dict.homeSubtitle}
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={() => setActivePanel('works')}
            className="px-6 py-3 rounded-full bg-black text-white text-xs md:text-sm font-bold uppercase tracking-widest hover:bg-blue-600 transition-colors duration-300 shadow-md cursor-pointer"
          >
            {dict.navWorks}
          </button>
          <button
            onClick={() => setActivePanel('about')}
            className="px-6 py-3 rounded-full border border-black text-black text-xs md:text-sm font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-colors duration-300 cursor-pointer"
          >
            {dict.navAbout}
          </button>
        </div>
      </div>
    </motion.section>
  );
};
