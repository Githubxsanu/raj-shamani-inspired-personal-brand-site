'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { ArrowUpRight, Quote } from 'lucide-react';

const guests = [
  {
    id: 1,
    name: "Naval Ravikant",
    role: "Angel Investor",
    insight: "Play long-term games with long-term people.",
    image: "https://picsum.photos/seed/naval/400/500",
    link: "#"
  },
  {
    id: 2,
    name: "Kunal Shah",
    role: "Founder, CRED",
    insight: "Wealth is created by solving inefficiencies.",
    image: "https://picsum.photos/seed/kunal/400/500",
    link: "#"
  },
  {
    id: 3,
    name: "Nikhil Kamath",
    role: "Co-founder, Zerodha",
    insight: "Consistency beats intensity over a decade.",
    image: "https://picsum.photos/seed/nikhil/400/500",
    link: "#"
  },
  {
    id: 4,
    name: "Garry Tan",
    role: "CEO, Y Combinator",
    insight: "Make something people want.",
    image: "https://picsum.photos/seed/garry/400/500",
    link: "#"
  },
  {
    id: 5,
    name: "Ankur Warikoo",
    role: "Entrepreneur & Creator",
    insight: "Do epic shit.",
    image: "https://picsum.photos/seed/ankur/400/500",
    link: "#"
  },
  {
    id: 6,
    name: "Bhavish Aggarwal",
    role: "Founder, Ola",
    insight: "Build for India, build for the world.",
    image: "https://picsum.photos/seed/bhavish/400/500",
    link: "#"
  }
];

export function GuestWall() {
  return (
    <section id="guests" className="py-24 bg-charcoal relative">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold mb-4"
          >
            Voices That Shape the <span className="text-orange-500">Future</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            Learn from the top 1% of founders, investors, and creators who have built empires.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {guests.map((guest, index) => (
            <motion.div
              key={guest.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group relative aspect-[4/5] rounded-2xl overflow-hidden cursor-pointer"
            >
              <Image
                src={guest.image}
                alt={guest.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110 group-hover:blur-sm"
                referrerPolicy="no-referrer"
              />
              
              {/* Default State Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-6 transition-opacity duration-300 group-hover:opacity-0">
                <h3 className="text-2xl font-display font-bold text-white">{guest.name}</h3>
                <p className="text-orange-500 font-medium">{guest.role}</p>
              </div>

              {/* Hover State Overlay */}
              <div className="absolute inset-0 bg-black/80 backdrop-blur-md p-8 flex flex-col justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                <Quote className="w-10 h-10 text-orange-500/50 mb-4" />
                <p className="text-xl md:text-2xl font-display font-medium text-white mb-6 leading-relaxed">
                  &quot;{guest.insight}&quot;
                </p>
                
                <div className="mt-auto">
                  <h3 className="text-lg font-bold text-white">{guest.name}</h3>
                  <p className="text-gray-400 text-sm mb-4">{guest.role}</p>
                  
                  <a 
                    href={guest.link}
                    className="inline-flex items-center gap-2 text-orange-500 font-semibold hover:text-orange-400 transition-colors"
                  >
                    Watch Episode <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
