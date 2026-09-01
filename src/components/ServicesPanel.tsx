import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ActivePanel, ContentDictionary, Lang, Service } from '../types';
import { ExternalLink, X, ArrowRight, ArrowLeft } from 'lucide-react';

interface WorksPanelProps {
  activePanel: ActivePanel;
  setActivePanel: (panel: ActivePanel) => void;
  lang: Lang;
  dict: ContentDictionary;
  services: Service[];
}

export const WorksPanel: React.FC<WorksPanelProps> = ({
  activePanel,
  setActivePanel,
  lang,
  dict,
  services,
}) => {
  const isRtl = lang === 'fa';
  const [hoveredProject, setHoveredProject] = useState<Service>(services[0]);
  const [selectedProject, setSelectedProject] = useState<Service | null>(null);

  const variants = {
    hidden: { x: isRtl ? '100%' : '-100%' },
    visible: { x: '0%' }
  };

  return (
    <motion.section
      initial="hidden"
      animate={activePanel === 'works' ? 'visible' : 'hidden'}
      variants={variants}
      transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
      className={`absolute inset-0 w-full h-full flex flex-col md:flex-row z-30 bg-[#f4f4f4] dark:bg-zinc-950 ${selectedProject ? 'overflow-hidden' : 'overflow-y-auto md:overflow-hidden'
        }`}
    >
      <div
        className={`w-full md:w-1/2 min-h-[50vh] md:min-h-full flex items-center justify-center relative overflow-hidden transition-colors duration-500 px-8 pb-8 pt-12 md:p-16 ${isRtl ? 'md:pr-24' : 'md:pl-24'}`}
        style={{ backgroundColor: hoveredProject.bgHex }}
      >
        <div className="relative w-full h-full max-w-lg max-h-[80%] rounded-xl overflow-hidden shadow-2xl group border border-white/10">
          <img
            src={hoveredProject.image}
            alt={hoveredProject.title[lang]}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />

          <div className="absolute bottom-6 left-6 right-6 text-white">
            <h3 className="text-xl md:text-2xl font-extrabold tracking-tight">
              {hoveredProject.title[lang]}
            </h3>
          </div>
        </div>

        <div
          className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full blur-3xl opacity-30 pointer-events-none"
          style={{ backgroundColor: hoveredProject.accentColor }}
        />
      </div>

      <div
        className={`w-full md:w-1/2 h-auto md:h-full bg-[#f4f4f4] dark:bg-zinc-950 flex flex-col px-8 sm:px-12 md:px-20 py-16 md:py-12 ${selectedProject ? 'overflow-hidden' : 'overflow-y-auto'
          } ${isRtl ? 'md:pl-24' : 'md:pr-24'}`}
      >
        <div className="max-w-md w-full my-auto mx-auto md:mx-0">
          <div className="flex items-center gap-3 mb-8">
            <span className="w-6 h-0.5 bg-black dark:bg-white" />
            <h2 className="text-xs uppercase tracking-widest font-bold text-gray-500 dark:text-gray-400">
              {dict.selectedProjects}
            </h2>
          </div>

          <div className="space-y-6 md:space-y-8">
            {services.map((service, idx) => {
              const isHovered = hoveredProject.id === service.id;
              return (
                <div
                  key={service.id}
                  onMouseEnter={() => setHoveredProject(service)}
                  onClick={() => setSelectedProject(service)}
                  className="group cursor-pointer border-b border-gray-200 dark:border-zinc-800 pb-4 transition-all duration-300"
                >
                  <div className="flex items-center justify-between">
                    <h3
                      className={`text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-extrabold tracking-tight transition-all duration-300 ${isHovered
                        ? 'text-black dark:text-white translate-x-2'
                        : 'text-gray-400 dark:text-zinc-600 hover:text-black dark:hover:text-white'
                        }`}
                    >
                      {service.title[lang]}
                    </h3>

                    <span
                      className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border transition-all duration-300 flex items-center gap-1 ${isHovered
                        ? 'bg-black text-white dark:bg-white dark:text-black border-black dark:border-white opacity-100'
                        : 'opacity-0 group-hover:opacity-100 border-gray-300 dark:border-zinc-700 text-black dark:text-white'
                        }`}
                    >
                      {dict.viewProject}
                      {isRtl ? <ArrowLeft size={12} /> : <ArrowRight size={12} />}
                    </span>
                  </div>

                  <p className="text-xs text-gray-500 dark:text-gray-400 font-medium mt-1">
                    0{idx + 1} / {service.category[lang]}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* MODAL */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-md flex items-center justify-center p-4 md:p-8">
          <div className="bg-white dark:bg-zinc-900 text-black dark:text-white w-full max-w-3xl rounded-2xl overflow-hidden shadow-2xl relative max-h-[90vh] flex flex-col animate-in fade-in zoom-in duration-300">
            <div className="p-6 border-b border-gray-100 dark:border-zinc-800 flex items-center justify-between bg-gray-50 dark:bg-zinc-900/50">
              <div>
                <span className="text-xs font-bold text-gray-400 dark:text-zinc-500 uppercase tracking-widest block">
                  {selectedProject.category[lang]}
                </span>
                <h3 className="text-2xl font-black">{selectedProject.title[lang]}</h3>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-zinc-800 transition-colors cursor-pointer"
                aria-label={dict.close}
              >
                <X size={20} />
              </button>
            </div>

            <div className="p-6 md:p-8 overflow-y-auto space-y-6">
              {/* Updated Image Container */}
              <div className="flex justify-center w-full">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title[lang]}
                  className="max-h-[60vh] max-w-full object-contain rounded-xl"
                  loading="lazy"
                />
              </div>

              <div>
                <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 leading-relaxed font-medium">
                  {selectedProject.description[lang]}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                {selectedProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full bg-gray-100 dark:bg-zinc-800 text-gray-800 dark:text-gray-200 text-xs font-semibold"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-4 border-t border-gray-100 dark:border-zinc-800 bg-gray-50 dark:bg-zinc-900/50 flex justify-end">
              <button
                onClick={() => setSelectedProject(null)}
                className="px-6 py-2.5 rounded-full bg-black text-white dark:bg-white dark:text-black text-xs font-bold uppercase tracking-widest hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors cursor-pointer"
              >
                {dict.close}
              </button>
            </div>
          </div>
        </div>
      )}
    </motion.section>
  );
};