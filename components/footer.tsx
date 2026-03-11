import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-charcoal border-t border-white/5 py-16 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <Link href="/" className="text-3xl font-display font-bold tracking-tighter mb-6 block">
              RAJ <span className="text-orange-500">SHAMANI</span>
            </Link>
            <p className="text-gray-400 max-w-sm mb-8">
              Decoding the minds of the top 1% and sharing playbooks for the next generation of builders.
            </p>
            <a 
              href="mailto:collab@rajshamani.com" 
              className="inline-flex items-center gap-2 text-white font-semibold hover:text-orange-500 transition-colors group"
            >
              Collaboration Inquiries <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Explore</h4>
            <ul className="space-y-4">
              <li><Link href="#podcast" className="text-gray-400 hover:text-white transition-colors">Podcast</Link></li>
              <li><Link href="#guests" className="text-gray-400 hover:text-white transition-colors">Guests</Link></li>
              <li><Link href="#insights" className="text-gray-400 hover:text-white transition-colors">Insights</Link></li>
              <li><Link href="#journey" className="text-gray-400 hover:text-white transition-colors">Journey</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Socials</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">YouTube <ArrowUpRight className="w-3 h-3" /></a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">Instagram <ArrowUpRight className="w-3 h-3" /></a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">LinkedIn <ArrowUpRight className="w-3 h-3" /></a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">Twitter <ArrowUpRight className="w-3 h-3" /></a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10 text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Raj Shamani. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
