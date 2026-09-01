import React from 'react';
import { motion } from 'motion/react';
import { ActivePanel, ContentDictionary, Lang } from '../types';
import { Sparkles, Layers, Award, Code, ExternalLink } from 'lucide-react';

interface AboutPanelProps {
  activePanel: ActivePanel;
  setActivePanel: (panel: ActivePanel) => void;
  lang: Lang;
  dict: ContentDictionary;
}

export const AboutPanel: React.FC<AboutPanelProps> = ({
  activePanel,
  setActivePanel,
  lang,
  dict,
}) => {
  const isRtl = lang === 'fa';

  const variants = {
    hidden: { x: isRtl ? '-100%' : '100%' },
    visible: { x: '0%' }
  };

  return (
    <motion.section
      initial="hidden"
      animate={activePanel === 'about' ? 'visible' : 'hidden'}
      variants={variants}
      transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
      className={`absolute inset-0 w-full h-full flex flex-col lg:flex-row z-30 bg-[#f4f4f4] dark:bg-zinc-950 overflow-y-auto lg:overflow-hidden`}
    >
      <div className={`w-full lg:w-1/2 min-h-[50vh] lg:min-h-full flex items-center justify-center p-8 pt-12 lg:p-16 ${isRtl ? 'lg:pr-24' : 'lg:pl-24'} bg-gray-200/50 dark:bg-zinc-900/50 relative overflow-hidden`}>
        <div className="relative w-full max-w-md h-full max-h-[85%] rounded-2xl overflow-hidden shadow-2xl group">
          <img
            src="https://6a8af91b97833836f656e772.imgix.net/sandbox/Gemini_Generated_Image_zdh7jmzdh7jmzdh7.jpg"
            alt="VIBIA logo"
            loading="lazy"
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/20 dark:bg-black/40 group-hover:bg-transparent transition-colors duration-500" />
        </div>
      </div>

      <div className={`w-full lg:w-1/2 h-auto lg:h-full bg-[#f4f4f4] dark:bg-zinc-950 flex flex-col px-8 sm:px-16 lg:px-24 py-12 lg:py-16 lg:overflow-y-auto ${isRtl ? 'lg:pl-24' : 'lg:pr-24'}`}>
        <div className="max-w-lg w-full my-auto mx-auto lg:mx-0 space-y-6 lg:space-y-8">

          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-500 block mb-2">
              {dict.aboutTitle}
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-black dark:text-white leading-tight">
              {dict.aboutBigTitle}
            </h2>
          </div>

          <div className="space-y-4 text-base lg:text-lg text-gray-700 dark:text-gray-300 leading-relaxed font-medium">
            <p>{dict.aboutBioPara1}</p>
            <p>{dict.aboutBioPara2}</p>
          </div>

          <div className="pt-6 border-t border-gray-200 dark:border-zinc-800">
            <h3 className="text-xs font-bold uppercase tracking-widest text-black dark:text-white mb-4">
              {dict.projectsHeader}
            </h3>
            <div className="grid grid-cols-2 gap-3 text-xs font-bold text-gray-800 dark:text-gray-200">
              <a
                href="https://armin-amanii.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-2.5 rounded-lg bg-gray-100 dark:bg-zinc-800 hover:bg-gray-200 dark:hover:bg-zinc-700 hover:text-blue-600 dark:hover:text-blue-400 transition-all cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <Sparkles size={14} className="text-blue-600 dark:text-blue-500 group-hover:scale-110 transition-transform" />
                  <p>{dict.prj1}</p>
                </div>
                <ExternalLink size={14} className="text-gray-400 dark:text-gray-500 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
              </a>
              <a
                href="https://gamelandar.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-2.5 rounded-lg bg-gray-100 dark:bg-zinc-800 hover:bg-gray-200 dark:hover:bg-zinc-700 hover:text-blue-600 dark:hover:text-blue-400 transition-all cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <Layers size={14} className="text-blue-600 dark:text-blue-500 group-hover:scale-110 transition-transform" />
                  <span>{dict.prj2}</span>
                </div>
                <ExternalLink size={14} className="text-gray-400 dark:text-gray-500 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
              </a>
              <a
                href="https://nexus-crypto-mp.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-2.5 rounded-lg bg-gray-100 dark:bg-zinc-800 hover:bg-gray-200 dark:hover:bg-zinc-700 hover:text-blue-600 dark:hover:text-blue-400 transition-all cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <Award size={14} className="text-blue-600 dark:text-blue-500 group-hover:scale-110 transition-transform" />
                  <span>{dict.prj3}</span>
                </div>
                <ExternalLink size={14} className="text-gray-400 dark:text-gray-500 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
              </a>
              <a
                href="https://xora-main.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-2.5 rounded-lg bg-gray-100 dark:bg-zinc-800 hover:bg-gray-200 dark:hover:bg-zinc-700 hover:text-blue-600 dark:hover:text-blue-400 transition-all cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <Code size={14} className="text-blue-600 dark:text-blue-500 group-hover:scale-110 transition-transform" />
                  <span>{dict.prj4}</span>
                </div>
                <ExternalLink size={14} className="text-gray-400 dark:text-gray-500 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
              </a>

            </div>
          </div>

        </div>
      </div>
    </motion.section>
  );
};
