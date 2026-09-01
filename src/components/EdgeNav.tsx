import React from 'react';
import { ActivePanel, ContentDictionary, Lang } from '../types';

interface EdgeNavProps {
  activePanel: ActivePanel;
  setActivePanel: (panel: ActivePanel) => void;
  lang: Lang;
  dict: ContentDictionary;
}

export const EdgeNav: React.FC<EdgeNavProps> = ({
  activePanel,
  setActivePanel,
  lang,
  dict,
}) => {
  const isRtl = lang === 'fa';

  // Toggle panel helper
  const handlePanelClick = (panel: ActivePanel) => {
    if (activePanel === panel) {
      setActivePanel('home');
    } else {
      setActivePanel(panel);
    }
  };

  return (
    <nav aria-label="Edge Navigation">
      <div
        className={`hidden md:flex fixed top-1/2 -translate-y-1/2 z-50 transition-all duration-300 ${
          activePanel !== 'home' ? 'opacity-0 pointer-events-none' : 'opacity-100 pointer-events-auto'
        } ${
          isRtl ? 'right-4 md:right-8' : 'left-4 md:left-8'
        }`}
      >
        <button
          onClick={() => handlePanelClick('works')}
          className={`group flex items-center gap-2 cursor-pointer transition-all duration-300 focus:outline-none ${
            activePanel === 'works' ? 'scale-110 opacity-100 font-black' : 'opacity-80 hover:opacity-100'
          }`}
          aria-label={dict.navWorks}
        >
          <span className="vertical-text-start text-xs md:text-sm uppercase tracking-widest font-bold text-black py-2">
            {activePanel === 'works' ? (isRtl ? 'خانه' : 'HOME') : dict.navWorks}
          </span>
          <span
            className={`w-1.5 h-1.5 rounded-full bg-black transition-transform duration-300 ${
              activePanel === 'works' ? 'scale-150 bg-blue-600' : 'scale-0 group-hover:scale-100'
            }`}
          />
        </button>
      </div>

      <div
        className={`hidden md:flex fixed top-1/2 -translate-y-1/2 z-50 transition-all duration-300 ${
          activePanel !== 'home' ? 'opacity-0 pointer-events-none' : 'opacity-100 pointer-events-auto'
        } ${
          isRtl ? 'left-4 md:left-8' : 'right-4 md:right-8'
        }`}
      >
        <button
          onClick={() => handlePanelClick('about')}
          className={`group flex items-center gap-2 cursor-pointer transition-all duration-300 focus:outline-none ${
            activePanel === 'about' ? 'scale-110 opacity-100 font-black' : 'opacity-80 hover:opacity-100'
          }`}
          aria-label={dict.navAbout}
        >
          <span
            className={`w-1.5 h-1.5 rounded-full bg-black transition-transform duration-300 ${
              activePanel === 'about' ? 'scale-150 bg-blue-600' : 'scale-0 group-hover:scale-100'
            }`}
          />
          <span className="vertical-text-end text-xs md:text-sm uppercase tracking-widest font-bold text-black py-2">
            {activePanel === 'about' ? (isRtl ? 'خانه' : 'HOME') : dict.navAbout}
          </span>
        </button>
      </div>

      <div className={`fixed bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${
        activePanel !== 'home' ? 'opacity-0 pointer-events-none' : 'opacity-100 pointer-events-auto'
      }`}>
        <button
          onClick={() => handlePanelClick('contact')}
          className={`group flex flex-col items-center gap-1 cursor-pointer transition-all duration-300 focus:outline-none ${
            activePanel === 'contact' ? 'scale-110 opacity-100 font-black' : 'opacity-80 hover:opacity-100'
          }`}
          aria-label={dict.navContact}
        >
          <span className="text-xs md:text-sm uppercase tracking-widest font-bold text-black bg-[#f4f4f4]/80 px-2 py-1 rounded backdrop-blur-sm">
            {activePanel === 'contact' ? (isRtl ? 'بازگشت' : 'BACK') : dict.navContact}
          </span>
          <span
            className={`w-8 h-0.5 bg-black transition-all duration-300 ${
              activePanel === 'contact' ? 'w-12 bg-blue-600' : 'w-4 group-hover:w-8'
            }`}
          />
        </button>
      </div>
    </nav>
  );
};
