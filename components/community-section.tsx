'use client';

import { motion } from 'motion/react';
import { Youtube, Instagram, Linkedin, Twitter, ArrowRight, Mail } from 'lucide-react';

export function CommunitySection() {
  return (
    <section id="community" className="py-24 bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-600/10 rounded-full blur-[150px] mix-blend-screen pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <h2 className="text-5xl md:text-7xl font-display font-bold tracking-tighter mb-6">
              Join the Next Generation of <span className="text-gradient">Builders</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Get weekly insights, startup playbooks, and exclusive content straight to your inbox. No spam, just pure value.
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-md mx-auto mb-16 relative"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="relative flex items-center">
              <Mail className="absolute left-4 w-5 h-5 text-gray-500" />
              <input 
                suppressHydrationWarning
                type="email" 
                placeholder="Enter your email address" 
                className="w-full bg-white/5 border border-white/10 rounded-full py-4 pl-12 pr-32 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all"
                required
              />
              <button 
                suppressHydrationWarning
                type="submit"
                className="absolute right-2 top-2 bottom-2 bg-orange-600 hover:bg-orange-500 text-white px-6 rounded-full font-semibold transition-colors flex items-center gap-2"
              >
                Join <ArrowRight className="w-4 h-4" />
              </button>
            </div>
            <p className="text-sm text-gray-500 mt-4">Join 500,000+ ambitious individuals.</p>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-6"
          >
            {[
              { icon: <Youtube className="w-6 h-6" />, name: "YouTube", link: "#", color: "hover:text-red-500 hover:border-red-500/50 hover:bg-red-500/10" },
              { icon: <Instagram className="w-6 h-6" />, name: "Instagram", link: "#", color: "hover:text-pink-500 hover:border-pink-500/50 hover:bg-pink-500/10" },
              { icon: <Linkedin className="w-6 h-6" />, name: "LinkedIn", link: "#", color: "hover:text-blue-500 hover:border-blue-500/50 hover:bg-blue-500/10" },
              { icon: <Twitter className="w-6 h-6" />, name: "Twitter", link: "#", color: "hover:text-sky-500 hover:border-sky-500/50 hover:bg-sky-500/10" }
            ].map((social, index) => (
              <a 
                key={index}
                href={social.link}
                className={`flex items-center gap-3 px-6 py-3 rounded-full border border-white/10 bg-white/5 text-gray-300 transition-all duration-300 ${social.color}`}
              >
                {social.icon}
                <span className="font-medium">{social.name}</span>
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
