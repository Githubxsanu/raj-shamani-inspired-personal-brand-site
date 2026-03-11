'use client';

import { motion } from 'motion/react';
import { Play, ArrowRight } from 'lucide-react';
import Image from 'next/image';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 bg-black">
        {/* Subtle grid pattern - Optimized */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none"></div>
        {/* Glowing Orbs - Optimized */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/20 rounded-full blur-[100px] opacity-60"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-rose-600/10 rounded-full blur-[100px] opacity-60"></div>
        
        {/* Faded Studio Image Background */}
        <div className="absolute inset-0 opacity-30">
          <Image
            src="https://picsum.photos/seed/studio/1920/1080?blur=4"
            alt="Studio Background"
            fill
            className="object-cover"
            referrerPolicy="no-referrer"
            priority
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black"></div>
        </div>
      </div>

      <div className="container relative z-10 mx-auto px-6 flex flex-col items-center text-center">
        {/* Play Button Thumbnail Style */}
        <motion.button
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', damping: 15, delay: 0.2 }}
          className="group relative mb-8 flex items-center justify-center w-24 h-24 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-white/20 transition-all duration-300 shadow-[0_0_40px_rgba(255,69,0,0.3)] hover:shadow-[0_0_60px_rgba(255,69,0,0.5)]"
        >
          <div className="absolute inset-0 rounded-full border border-orange-500/50 animate-ping opacity-20"></div>
          <Play className="w-10 h-10 text-white ml-2 group-hover:text-orange-400 transition-colors" fill="currentColor" />
        </motion.button>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-6xl md:text-8xl font-display font-bold tracking-tighter mb-6 leading-[1.1]">
            Ideas Build <br className="hidden md:block" />
            <span className="text-gradient">Empires</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 font-light mb-10 max-w-2xl mx-auto leading-relaxed">
            Conversations with founders, creators, and thinkers shaping the future.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button suppressHydrationWarning className="w-full sm:w-auto px-8 py-4 bg-orange-600 hover:bg-orange-500 text-white font-semibold rounded-full transition-all duration-300 flex items-center justify-center gap-2 group shadow-[0_0_20px_rgba(255,69,0,0.4)]">
              Watch Podcast
              <Play className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button suppressHydrationWarning className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/10 text-white font-semibold rounded-full transition-all duration-300 flex items-center justify-center gap-2 group">
              Explore Episodes
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
