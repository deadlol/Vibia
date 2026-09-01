import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ActivePanel, ContentDictionary, Lang } from '../types';
import { Copy, Check, Phone, Mail, ArrowUpRight } from 'lucide-react';

interface ContactPanelProps {
  activePanel: ActivePanel;
  setActivePanel: (panel: ActivePanel) => void;
  lang: Lang;
  dict: ContentDictionary;
}

export const ContactPanel: React.FC<ContactPanelProps> = ({
  activePanel,
  setActivePanel,
  lang,
  dict,
}) => {
  const [copiedItem, setCopiedItem] = useState<string | null>(null);

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(label);
    setTimeout(() => {
      setCopiedItem(null);
    }, 2000);
  };

  const variants = {
    hidden: { y: '100%' },
    visible: { y: '0%' }
  };

  return (
    <motion.section
      id="contact"
      initial="hidden"
      animate={activePanel === 'contact' ? 'visible' : 'hidden'}
      variants={variants}
      transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
      className={`fixed bottom-0 left-0 w-full min-h-[13rem] md:min-h-[14rem] bg-white border-t border-gray-200 z-40 flex items-center px-6 md:px-16 overflow-hidden shadow-2xl`}
    >
      <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-gray-100/80 -z-0 select-none whitespace-nowrap pointer-events-none tracking-tighter">
        {dict.getInTouch}
      </div>
      <div className="relative z-10 w-full max-w-6xl mx-auto py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-center">
          <div className="group space-y-2">
            <div className="flex items-center gap-2 text-xs font-extrabold tracking-widest text-gray-400 uppercase">
              <Phone size={14} className="text-black" />
              <span>{dict.phoneLabel}</span>
            </div>
            <button
              onClick={() => handleCopy(dict.phoneValue, 'phone')}
              className="flex items-center gap-2 text-base md:text-lg font-bold text-black hover:text-blue-600 transition-colors cursor-pointer group-hover:translate-x-1 duration-200"
              title="Click to copy phone number"
            >
              <span>{dict.phoneValue}</span>
              {copiedItem === 'phone' ? (
                <span className="flex items-center gap-1 text-xs text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded">
                  <Check size={12} /> {dict.copied}
                </span>
              ) : (
                <Copy size={14} className="text-gray-400 group-hover:text-blue-600" />
              )}
            </button>
          </div>

          <div className="group space-y-2">
            <div className="flex items-center gap-2 text-xs font-extrabold tracking-widest text-gray-400 uppercase">
              <Mail size={14} className="text-black" />
              <span>{dict.emailLabel}</span>
            </div>
            <button
              onClick={() => handleCopy(dict.emailValue, 'email')}
              className="flex items-center gap-2 text-base md:text-lg font-bold text-black hover:text-blue-600 transition-colors cursor-pointer group-hover:translate-x-1 duration-200"
              title="Click to copy email"
            >
              <span>{dict.emailValue}</span>
              {copiedItem === 'email' ? (
                <span className="flex items-center gap-1 text-xs text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded">
                  <Check size={12} /> {dict.copied}
                </span>
              ) : (
                <Copy size={14} className="text-gray-400 group-hover:text-blue-600" />
              )}
            </button>
          </div>

          <div className="space-y-2 border-t md:border-t-0 md:border-l border-gray-200 pt-4 md:pt-0 md:pl-8">
            <div className="text-xs font-extrabold tracking-widest text-gray-400 uppercase">
              {dict.creditsLabel}
            </div>
            <p className="text-xs font-semibold text-gray-800 leading-relaxed">
              {dict.creditsValue}
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
