'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Briefcase, PlayCircle, Mic, Globe, Users } from 'lucide-react';

const MILESTONES = [
  {
    id: 1,
    year: "2018",
    title: "Early Entrepreneurship",
    icon: <Briefcase className="w-6 h-6" />,
    story: "Started building businesses at a young age, learning the hard lessons of sales, marketing, and resilience before the creator economy exploded. It was a time of hustle, failing fast, and figuring out what actually works in the real world."
  },
  {
    id: 2,
    year: "2020",
    title: "Becoming a Creator",
    icon: <PlayCircle className="w-6 h-6" />,
    story: "Began sharing insights online. What started as short-form content quickly grew into a massive community of aspiring builders. The focus shifted from just building businesses to building an audience and sharing the journey transparently."
  },
  {
    id: 3,
    year: "2022",
    title: "Launching the Podcast",
    icon: <Mic className="w-6 h-6" />,
    story: "Created a platform for long-form conversations, aiming to decode the minds of the top 1% and share their playbooks with the world. The podcast quickly became a go-to resource for entrepreneurs seeking unfiltered truth."
  },
  {
    id: 4,
    year: "2024",
    title: "Global Founders",
    icon: <Globe className="w-6 h-6" />,
    story: "Interviewed billionaires, unicorn founders, and global thought leaders, turning the podcast into a masterclass for entrepreneurs. The scale of conversations shifted from local success stories to global empire builders."
  },
  {
    id: 5,
    year: "2026",
    title: "Building an Empire",
    icon: <Users className="w-6 h-6" />,
    story: "Transitioning from a creator to a platform, building a community and ecosystem that empowers the next generation of builders. The vision expanded beyond content into tangible resources, networks, and capital."
  }
];

export function CreatorJourney() {
  const [activeMilestone, setActiveMilestone] = useState<number | null>(null);

  return (
    <section id="journey" className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold mb-4 text-white"
          >
            The <span className="text-[#ff4e00]">Journey</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            From selling dishwashing gel to interviewing the world&apos;s most successful founders.
          </motion.p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Central Gradient Line */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>

          <div className="space-y-12 md:space-y-24">
            {MILESTONES.map((milestone, index) => {
              const isEven = index % 2 === 0;
              const isActive = activeMilestone === milestone.id;

              return (
                <motion.div
                  key={milestone.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-0 ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                  onMouseEnter={() => setActiveMilestone(milestone.id)}
                  onMouseLeave={() => setActiveMilestone(null)}
                >
                  {/* Glowing Center Dot */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#ff4e00] shadow-[0_0_10px_rgba(255,78,0,0.8)] z-20 mt-6 md:mt-0"></div>

                  {/* Empty space for the other side on desktop */}
                  <div className="hidden md:block md:w-1/2"></div>

                  {/* Content Card */}
                  <div className={`w-full pl-12 md:pl-0 md:w-1/2 ${isEven ? 'md:pr-16' : 'md:pl-16'}`}>
                    <motion.div
                      animate={{
                        scale: isActive ? 1.05 : 1,
                        borderColor: isActive ? 'rgba(255, 78, 0, 0.5)' : 'rgba(255, 255, 255, 0.1)',
                        boxShadow: isActive ? '0 10px 30px -10px rgba(255, 78, 0, 0.2)' : '0 0 0 rgba(0,0,0,0)',
                      }}
                      className="bg-[#111] border border-white/10 rounded-2xl p-6 md:p-8 transition-colors duration-300"
                    >
                      <div className="flex items-center gap-4 mb-4">
                        <div
                          className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-300 ${
                            isActive ? 'bg-[#ff4e00] text-white' : 'bg-white/5 text-gray-400'
                          }`}
                        >
                          {milestone.icon}
                        </div>
                        <div>
                          <span className="text-[#ff4e00] font-mono text-sm font-bold tracking-widest">
                            {milestone.year}
                          </span>
                          <h3 className="text-xl md:text-2xl font-display font-bold text-white">
                            {milestone.title}
                          </h3>
                        </div>
                      </div>

                      <AnimatePresence>
                        {isActive && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                            className="overflow-hidden"
                          >
                            <p className="pt-4 text-gray-400 leading-relaxed border-t border-white/5 mt-4">
                              {milestone.story}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
