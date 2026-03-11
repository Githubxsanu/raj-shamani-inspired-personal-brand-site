'use client';

import { motion } from 'motion/react';
import { Lightbulb, Brain, Rocket, Coins, ArrowRight } from 'lucide-react';

const insights = [
  {
    id: 1,
    title: "Business Lessons",
    description: "Frameworks for scaling from zero to one, and one to a hundred.",
    icon: <Lightbulb className="w-8 h-8 text-orange-500" />,
    color: "from-orange-500/20 to-transparent",
    link: "#"
  },
  {
    id: 2,
    title: "Mindset Shifts",
    description: "How top performers think, make decisions, and handle failure.",
    icon: <Brain className="w-8 h-8 text-rose-500" />,
    color: "from-rose-500/20 to-transparent",
    link: "#"
  },
  {
    id: 3,
    title: "Startup Playbooks",
    description: "Actionable strategies for product, growth, and fundraising.",
    icon: <Rocket className="w-8 h-8 text-blue-500" />,
    color: "from-blue-500/20 to-transparent",
    link: "#"
  },
  {
    id: 4,
    title: "Wealth Principles",
    description: "The unwritten rules of money, investing, and building leverage.",
    icon: <Coins className="w-8 h-8 text-emerald-500" />,
    color: "from-emerald-500/20 to-transparent",
    link: "#"
  }
];

export function InsightsSection() {
  return (
    <section id="insights" className="py-24 bg-black relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Founder <span className="text-orange-500">Notes</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Distilled wisdom from hundreds of hours of conversations with the world&apos;s best builders.
            </p>
          </motion.div>
          
          <motion.a 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            href="#" 
            className="group flex items-center gap-2 text-white font-semibold hover:text-orange-500 transition-colors"
          >
            Read all insights <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {insights.map((insight, index) => (
            <motion.div
              key={insight.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-charcoal-light/30 border border-white/5 rounded-2xl p-8 hover:bg-charcoal-light/50 transition-all duration-300 overflow-hidden cursor-pointer"
            >
              {/* Glow Effect */}
              <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl ${insight.color} rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-xl bg-black/50 border border-white/10 flex items-center justify-center mb-6 shadow-lg">
                  {insight.icon}
                </div>
                
                <h3 className="text-2xl font-display font-bold text-white mb-3 group-hover:text-orange-400 transition-colors">
                  {insight.title}
                </h3>
                
                <p className="text-gray-400 text-lg mb-8 max-w-sm leading-relaxed">
                  {insight.description}
                </p>
                
                <div className="flex items-center gap-2 text-sm font-semibold text-gray-300 group-hover:text-white transition-colors">
                  Explore <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
