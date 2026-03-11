'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Users, Briefcase, TrendingUp, Medal, BookOpen, PlayCircle } from 'lucide-react';

const NODES = [
  {
    id: 'center',
    label: 'Raj Shamani',
    x: 50,
    y: 50,
    isCenter: true,
    icon: <PlayCircle className="w-12 h-12 text-[#ff4e00]" />,
  },
  {
    id: 'founders',
    label: 'Founders',
    x: 85,
    y: 50,
    icon: <Briefcase className="w-8 h-8" />,
    description: 'Decoding the playbooks of unicorn builders and serial entrepreneurs.',
    quote: 'The best founders are obsessed with the problem, not the solution.',
  },
  {
    id: 'billionaires',
    label: 'Billionaires',
    x: 67.5,
    y: 80,
    icon: <TrendingUp className="w-8 h-8" />,
    description: 'Understanding the mindset and wealth principles of the ultra-successful.',
    quote: 'Wealth is not about money; it is about leverage and optionality.',
  },
  {
    id: 'creators',
    label: 'Creators',
    x: 32.5,
    y: 80,
    icon: <Users className="w-8 h-8" />,
    description: 'Exploring the new economy of attention and digital empires.',
    quote: 'Attention is the new oil, and authenticity is the drill.',
  },
  {
    id: 'investors',
    label: 'Investors',
    x: 15,
    y: 50,
    icon: <TrendingUp className="w-8 h-8" />,
    description: 'How capital allocators spot the next big thing before anyone else.',
    quote: 'Invest in lines, not dots. Track the trajectory of the founder.',
  },
  {
    id: 'athletes',
    label: 'Athletes',
    x: 32.5,
    y: 20,
    icon: <Medal className="w-8 h-8" />,
    description: 'The extreme discipline and mental toughness required to be the top 1%.',
    quote: 'Discipline equals freedom. Motivation is fleeting.',
  },
  {
    id: 'authors',
    label: 'Authors',
    x: 67.5,
    y: 20,
    icon: <BookOpen className="w-8 h-8" />,
    description: 'Distilled wisdom from the greatest thinkers and storytellers.',
    quote: 'A great book is a mentor you can carry in your pocket.',
  },
];

export function PodcastUniverse() {
  const [activeNode, setActiveNode] = useState<typeof NODES[0] | null>(null);

  return (
    <section className="py-24 bg-[#050505] relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold mb-4 text-white"
          >
            The Podcast <span className="text-[#ff4e00]">Universe</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            Explore the interconnected network of minds decoded on the show.
          </motion.p>
        </div>

        <div className="relative w-full max-w-5xl mx-auto aspect-square md:aspect-video bg-[#0a0a0a]/50 backdrop-blur-xl rounded-3xl border border-white/5 overflow-hidden shadow-2xl">
          {/* Subtle Grid Background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

          {/* SVG Connections Layer */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
            {NODES.filter((n) => !n.isCenter).map((node, i) => (
              <motion.line
                key={`line-${node.id}`}
                x1="50%"
                y1="50%"
                x2={`${node.x}%`}
                y2={`${node.y}%`}
                stroke="rgba(255, 255, 255, 0.1)"
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: i * 0.1, ease: 'easeInOut' }}
              />
            ))}
          </svg>

          {/* Nodes */}
          {NODES.map((node, i) => (
            <motion.div
              key={node.id}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 100, damping: 15, delay: i * 0.1 }}
              className={`absolute -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center justify-center cursor-pointer group`}
              style={{ left: `${node.x}%`, top: `${node.y}%` }}
              onClick={() => !node.isCenter && setActiveNode(node)}
            >
              <div
                className={`flex items-center justify-center rounded-full bg-[#111] transition-all duration-300 ${
                  node.isCenter
                    ? 'w-24 h-24 md:w-32 md:h-32 border-2 border-[#ff4e00] shadow-[0_0_30px_rgba(255,78,0,0.3)]'
                    : 'w-16 h-16 md:w-20 md:h-20 border border-white/20 group-hover:border-[#ff4e00] group-hover:shadow-[0_0_20px_rgba(255,78,0,0.2)] text-gray-400 group-hover:text-[#ff4e00]'
                }`}
              >
                {node.icon}
              </div>
              <span
                className={`mt-3 text-xs md:text-sm font-medium tracking-wider uppercase transition-colors ${
                  node.isCenter ? 'text-white' : 'text-gray-500 group-hover:text-white'
                }`}
              >
                {node.label}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Interactive Modal */}
        <AnimatePresence>
          {activeNode && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
              onClick={() => setActiveNode(null)}
            >
              <motion.div
                initial={{ scale: 0.9, y: 20, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.9, y: 20, opacity: 0 }}
                transition={{ type: 'spring', damping: 20, stiffness: 300 }}
                className="bg-[#111] border border-white/10 rounded-2xl p-8 max-w-md w-full relative shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  suppressHydrationWarning
                  onClick={() => setActiveNode(null)}
                  className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>

                <div className="w-16 h-16 rounded-full bg-[#ff4e00]/10 border border-[#ff4e00]/30 flex items-center justify-center text-[#ff4e00] mb-6">
                  {activeNode.icon}
                </div>

                <h3 className="text-3xl font-display font-bold text-white mb-2">
                  {activeNode.label}
                </h3>
                <p className="text-gray-400 mb-8 leading-relaxed">
                  {activeNode.description}
                </p>

                <div className="bg-[#0a0a0a] rounded-xl p-6 border border-white/5 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-1 h-full bg-[#ff4e00]"></div>
                  <p className="text-lg font-display italic text-gray-300">
                    &quot;{activeNode.quote}&quot;
                  </p>
                  <span className="block mt-4 text-xs font-mono text-[#ff4e00] uppercase tracking-widest">
                    Key Insight
                  </span>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
