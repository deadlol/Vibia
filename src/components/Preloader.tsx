import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PreloaderProps {
  isLoading: boolean;
}

export const Preloader: React.FC<PreloaderProps> = ({ isLoading }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (!isLoading) {
      setTimeout(() => setShow(false), 800);
    }
  }, [isLoading]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            scale: 1.05,
            filter: "blur(10px)"
          }}
          transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[9999] bg-[#050505] flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Subtle Grid Background for Professional Depth */}
          <div className="absolute inset-0 z-0 opacity-10 pointer-events-none bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_20%,transparent_100%)]"></div>

          {/* Flashy & Professional Morphing Animation */}
          <div className="relative flex items-center justify-center w-40 h-40 z-10">
            {/* Primary Shape */}
            <motion.div
              className="absolute w-16 h-16 border border-white"
              animate={{ 
                rotate: [0, 90, 180],
                scale: [1, 1.4, 1],
                borderRadius: ["0%", "50%", "0%"]
              }}
              transition={{ 
                duration: 2.5, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            />
            
            {/* Secondary Accent Shape */}
            <motion.div
              className="absolute w-16 h-16 border border-white/30"
              animate={{ 
                rotate: [45, 135, 225],
                scale: [1.4, 1, 1.4],
                borderRadius: ["50%", "0%", "50%"]
              }}
              transition={{ 
                duration: 2.5, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            />
            
            {/* Inner Core */}
            <motion.div
              className="absolute w-2 h-2 bg-white rounded-full shadow-[0_0_15px_rgba(255,255,255,1)]"
              animate={{
                scale: [1, 0.5, 1],
                opacity: [1, 0.5, 1]
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>

          <motion.div 
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-16 text-[10px] uppercase tracking-[0.5em] text-white/50 font-light z-10"
          >
            Loading
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
