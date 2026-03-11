'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import Image from 'next/image';
import { Play, Clock, ChevronRight, ChevronLeft } from 'lucide-react';

const episodes = [
  {
    id: 1,
    title: "Building a Billion Dollar Empire from Scratch",
    guest: "Nithin Kamath",
    role: "Founder, Zerodha",
    duration: "1:45:20",
    image: "https://picsum.photos/seed/podcast1/800/450",
  },
  {
    id: 2,
    title: "The Future of AI and How to Prepare for It",
    guest: "Sam Altman",
    role: "CEO, OpenAI",
    duration: "2:10:15",
    image: "https://picsum.photos/seed/podcast2/800/450",
  },
  {
    id: 3,
    title: "Mastering the Creator Economy in 2026",
    guest: "MrBeast",
    role: "Creator & Entrepreneur",
    duration: "1:25:40",
    image: "https://picsum.photos/seed/podcast3/800/450",
  },
  {
    id: 4,
    title: "Investing Secrets of the Top 1%",
    guest: "Naval Ravikant",
    role: "Investor & Philosopher",
    duration: "1:55:00",
    image: "https://picsum.photos/seed/podcast4/800/450",
  },
  {
    id: 5,
    title: "How to Build Unbreakable Focus",
    guest: "Andrew Huberman",
    role: "Neuroscientist",
    duration: "2:30:10",
    image: "https://picsum.photos/seed/podcast5/800/450",
  },
];

export function FeaturedPodcasts() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth / 2 : scrollLeft + clientWidth / 2;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section id="podcast" className="py-24 bg-black relative overflow-hidden">
      <div className="container mx-auto px-6 mb-12 flex items-end justify-between">
        <div>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Featured <span className="text-orange-500">Episodes</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl">
            Deep dives with the world&apos;s most successful founders, billionaires, and creators.
          </p>
        </div>
        
        <div className="hidden md:flex gap-4">
          <button 
            suppressHydrationWarning
            onClick={() => scroll('left')}
            className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button 
            suppressHydrationWarning
            onClick={() => scroll('right')}
            className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>

      <div className="relative w-full">
        <div 
          ref={scrollRef}
          className="flex overflow-x-auto gap-6 px-6 pb-12 snap-x snap-mandatory scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {episodes.map((episode, index) => (
            <motion.div
              key={episode.id}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="min-w-[300px] md:min-w-[400px] lg:min-w-[500px] snap-start group cursor-pointer"
            >
              <div className="relative aspect-video rounded-2xl overflow-hidden mb-4 bg-charcoal">
                <Image
                  src={episode.image}
                  alt={episode.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-16 h-16 rounded-full bg-orange-500/90 flex items-center justify-center backdrop-blur-sm shadow-[0_0_30px_rgba(255,69,0,0.6)]">
                    <Play className="w-8 h-8 text-white ml-1" fill="currentColor" />
                  </div>
                </div>

                {/* Duration Badge */}
                <div className="absolute bottom-4 right-4 bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-md flex items-center gap-2 text-xs font-mono border border-white/10">
                  <Clock className="w-3 h-3 text-orange-500" />
                  {episode.duration}
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-3 text-sm text-gray-400">
                  <span className="font-semibold text-orange-500">{episode.guest}</span>
                  <span className="w-1 h-1 rounded-full bg-gray-600"></span>
                  <span>{episode.role}</span>
                </div>
                <h3 className="text-xl md:text-2xl font-display font-bold group-hover:text-orange-400 transition-colors line-clamp-2">
                  {episode.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
