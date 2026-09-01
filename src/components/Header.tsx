import React from 'react';
import { Facebook, Dribbble, Instagram, X, Sun, Moon } from 'lucide-react';
import { ActivePanel, Lang } from '../types';

interface HeaderProps {
  activePanel: ActivePanel;
  setActivePanel: (panel: ActivePanel) => void;
  lang: Lang;
  setLang: (lang: Lang) => void;
  closeText: string;
  theme?: 'light' | 'dark';
  toggleTheme?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activePanel,
  setActivePanel,
  lang,
  setLang,
  closeText,
  theme = 'light',
  toggleTheme,
}) => {
  const isRtl = lang === 'fa';

  return (
    <header className="fixed top-0 left-0 w-full z-50 pointer-events-none p-8 md:p-12 flex items-center justify-between">
      <div
        className={`pointer-events-auto transition-all duration-500 hover:scale-105 ${
          activePanel !== 'home' ? 'opacity-0 -translate-y-4 pointer-events-none' : 'opacity-100 translate-y-0'
        } ${
          isRtl ? 'order-2' : 'order-1'
        }`}
      >
        <button
          onClick={() => setActivePanel('home')}
          className="text-3xl md:text-4xl font-extrabold tracking-tighter text-black dark:text-white cursor-pointer uppercase select-none focus:outline-none"
          aria-label="VIBIA Home"
        >
          VIBIA
        </button>
      </div>

      {activePanel !== 'home' && (
        <div
          className={`pointer-events-auto flex items-center animate-in fade-in duration-300 ${
            isRtl ? 'order-1' : 'order-2'
          }`}
        >
          <button
            onClick={() => setActivePanel('home')}
            className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-black text-white dark:bg-white dark:text-black text-xs font-bold tracking-wider hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors cursor-pointer"
          >
            <span>{isRtl ? 'بازگشت' : 'BACK'}</span>
          </button>
        </div>
      )}

      {activePanel === 'home' && (
        <div
          className={`pointer-events-auto flex items-center gap-4 md:gap-6 animate-in fade-in duration-300 ${
            isRtl ? 'order-1' : 'order-2'
          }`}
        >
          {toggleTheme && (
            <button
              onClick={toggleTheme}
              className="p-1 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors focus:outline-none"
              aria-label="Toggle dark mode"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          )}

          <button
            onClick={() => setLang(lang === 'en' ? 'fa' : 'en')}
            className="text-sm font-bold cursor-pointer hover:opacity-60 border-b-2 border-black dark:border-white pb-0.5 transition-opacity focus:outline-none"
            aria-label="Toggle language"
          >
            {lang === 'en' ? 'FA' : 'EN'}
          </button>

          <nav className="flex items-center gap-3 md:gap-4 text-black dark:text-white" aria-label="Social Links">
          <a
            href="https://dribbble.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-60 transition-opacity"
            aria-label="Dribbble"
          >
            <Dribbble size={20} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-60 transition-opacity"
            aria-label="Instagram"
          >
            <Instagram size={20} />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-60 transition-opacity"
            aria-label="Facebook"
          >
            <Facebook size={20} />
          </a>
        </nav>
      </div>
      )}
    </header>
  );
};
