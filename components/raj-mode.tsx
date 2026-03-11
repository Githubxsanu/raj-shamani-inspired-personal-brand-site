'use client';

import { motion, AnimatePresence } from 'motion/react';
import { Zap, Mic2 } from 'lucide-react';
import { useRajMode } from '@/store/use-raj-mode';

export function RajMode() {
  const { isRajMode, toggleRajMode } = useRajMode();

  return (
    <>
      {/* Floating Toggle Button */}
      <button
        suppressHydrationWarning
        onClick={toggleRajMode}
        className={`fixed bottom-8 right-8 z-50 px-5 py-3 rounded-full transition-all duration-500 flex items-center justify-center gap-2 ${
          isRajMode
            ? 'bg-[#ff4e00] text-white shadow-[0_0_30px_rgba(255,78,0,0.5)] scale-105'
            : 'bg-[#111]/80 backdrop-blur-md text-gray-400 hover:text-white border border-white/10 hover:border-white/20'
        }`}
        aria-label="Toggle Raj Mode"
      >
        <Zap
          className={`w-5 h-5 ${isRajMode ? 'animate-pulse text-white' : ''}`}
          fill={isRajMode ? 'currentColor' : 'none'}
        />
        <span className="text-sm font-bold tracking-wide uppercase">
          {isRajMode ? 'Raj Mode Active' : 'Activate Raj Mode'}
        </span>
      </button>

      {/* Global Overlay Effects */}
      <AnimatePresence>
        {isRajMode && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="fixed inset-0 z-40 pointer-events-none flex flex-col items-center justify-center overflow-hidden"
          >
            {/* Dark Vignette */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#000_100%)] opacity-80 mix-blend-multiply"></div>
            
            {/* Floating Microphone */}
            <motion.div
              animate={{
                y: [0, -20, 0],
                rotate: [-10, 10, -10],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="relative z-10 text-[#ff4e00]/20"
            >
              <Mic2 className="w-64 h-64 md:w-96 md:h-96 drop-shadow-[0_0_50px_rgba(255,78,0,0.3)]" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
