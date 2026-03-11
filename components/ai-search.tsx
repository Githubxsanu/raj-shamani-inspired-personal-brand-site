'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Play, Loader2, Sparkles, X } from 'lucide-react';
import { GoogleGenAI, Type } from '@google/genai';
import Image from 'next/image';

const PODCAST_CLIPS = [
  {
    id: '1',
    title: 'How to raise your first million',
    guest: 'Kunal Shah',
    tags: ['fundraising advice', 'startups', 'investors'],
    duration: '4:20',
    image: 'https://picsum.photos/seed/clip1/400/225'
  },
  {
    id: '2',
    title: 'The power of compounding habits',
    guest: 'Naval Ravikant',
    tags: ['discipline', 'mindset', 'habits'],
    duration: '5:15',
    image: 'https://picsum.photos/seed/clip2/400/225'
  },
  {
    id: '3',
    title: 'Building wealth vs getting rich',
    guest: 'Nithin Kamath',
    tags: ['wealth building', 'finance', 'investing'],
    duration: '6:30',
    image: 'https://picsum.photos/seed/clip3/400/225'
  },
  {
    id: '4',
    title: 'Pitching to Y Combinator',
    guest: 'Garry Tan',
    tags: ['fundraising advice', 'pitching', 'startups'],
    duration: '8:45',
    image: 'https://picsum.photos/seed/clip4/400/225'
  },
  {
    id: '5',
    title: 'Focus and deep work protocols',
    guest: 'Andrew Huberman',
    tags: ['discipline', 'focus', 'productivity'],
    duration: '12:10',
    image: 'https://picsum.photos/seed/clip5/400/225'
  },
  {
    id: '6',
    title: 'Creating a monopoly in your niche',
    guest: 'Peter Thiel',
    tags: ['wealth building', 'business strategy', 'startups'],
    duration: '7:50',
    image: 'https://picsum.photos/seed/clip6/400/225'
  },
  {
    id: '7',
    title: 'Why you need to fail fast',
    guest: 'Ankur Warikoo',
    tags: ['mindset', 'startups', 'failure'],
    duration: '3:40',
    image: 'https://picsum.photos/seed/clip7/400/225'
  },
  {
    id: '8',
    title: 'Bootstrapping vs Venture Capital',
    guest: 'Bhavish Aggarwal',
    tags: ['fundraising advice', 'bootstrapping', 'vc'],
    duration: '9:20',
    image: 'https://picsum.photos/seed/clip8/400/225'
  }
];

export function AiSearch() {
  const [query, setQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [results, setResults] = useState<typeof PODCAST_CLIPS | null>(null);
  const [error, setError] = useState('');

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setIsSearching(true);
    setError('');
    
    try {
      const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
      if (!apiKey) {
        throw new Error('Gemini API key is missing');
      }

      const ai = new GoogleGenAI({ apiKey });
      
      const prompt = `
        You are an AI search assistant for the Raj Shamani podcast.
        Given the user's search query, find the most relevant podcast clips from the provided list.
        Return a JSON array of the matching clip IDs. If no clips match, return an empty array.
        
        Clips:
        ${JSON.stringify(PODCAST_CLIPS.map(c => ({ id: c.id, title: c.title, guest: c.guest, tags: c.tags })))}
        
        User Query: "${query}"
      `;

      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: prompt,
        config: {
          responseMimeType: 'application/json',
          responseSchema: {
            type: Type.ARRAY,
            items: {
              type: Type.STRING
            }
          }
        }
      });

      const text = response.text;
      if (text) {
        const matchingIds = JSON.parse(text) as string[];
        const matchedClips = PODCAST_CLIPS.filter(clip => matchingIds.includes(clip.id));
        setResults(matchedClips);
      } else {
        setResults([]);
      }
    } catch (err) {
      console.error('Search error:', err);
      setError('Failed to search. Please try again.');
    } finally {
      setIsSearching(false);
    }
  };

  const clearSearch = () => {
    setQuery('');
    setResults(null);
    setError('');
  };

  return (
    <section id="ai-search" className="py-24 bg-charcoal-light relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-medium mb-6"
          >
            <Sparkles className="w-4 h-4" />
            AI-Powered Search
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-bold mb-6"
          >
            Startup Lessons from <br className="hidden md:block" />
            <span className="text-orange-500">Raj Shamani Podcast</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg mb-8"
          >
            Ask anything. E.g., &quot;fundraising advice&quot;, &quot;discipline&quot;, &quot;wealth building&quot;
          </motion.p>

          <motion.form 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            onSubmit={handleSearch} 
            className="relative max-w-2xl mx-auto"
          >
            <div className="relative flex items-center">
              <Search className="absolute left-6 w-6 h-6 text-gray-400" />
              <input
                suppressHydrationWarning
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="What do you want to learn today?"
                className="w-full bg-charcoal border border-white/10 rounded-full py-5 pl-16 pr-36 text-white text-lg placeholder-gray-500 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all shadow-xl"
              />
              <div className="absolute right-3 top-3 bottom-3 flex items-center gap-2">
                {query && (
                  <button
                    suppressHydrationWarning
                    type="button"
                    onClick={clearSearch}
                    className="p-2 text-gray-400 hover:text-white transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                )}
                <button
                  suppressHydrationWarning
                  type="submit"
                  disabled={isSearching || !query.trim()}
                  className="bg-orange-600 hover:bg-orange-500 disabled:bg-orange-600/50 disabled:cursor-not-allowed text-white px-6 rounded-full font-semibold transition-colors flex items-center justify-center min-w-[100px]"
                >
                  {isSearching ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Search'}
                </button>
              </div>
            </div>
          </motion.form>
        </div>

        <AnimatePresence mode="wait">
          {error && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="text-center text-red-400 mb-8"
            >
              {error}
            </motion.div>
          )}

          {results !== null && !isSearching && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="max-w-5xl mx-auto"
            >
              <h3 className="text-xl font-medium text-gray-300 mb-6">
                {results.length > 0 
                  ? `Found ${results.length} relevant clip${results.length === 1 ? '' : 's'}` 
                  : "No clips found for your query. Try something else."}
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {results.map((clip, index) => (
                  <motion.div
                    key={clip.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="group bg-charcoal rounded-2xl overflow-hidden border border-white/5 hover:border-orange-500/30 transition-all cursor-pointer"
                  >
                    <div className="relative aspect-video">
                      <Image
                        src={clip.image}
                        alt={clip.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        referrerPolicy="no-referrer"
                        unoptimized
                      />
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center shadow-lg">
                          <Play className="w-5 h-5 text-white ml-1" fill="currentColor" />
                        </div>
                      </div>
                      <div className="absolute bottom-3 right-3 bg-black/80 backdrop-blur-sm px-2 py-1 rounded text-xs font-mono text-white">
                        {clip.duration}
                      </div>
                    </div>
                    <div className="p-5">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs font-medium text-orange-500 uppercase tracking-wider">
                          {clip.guest}
                        </span>
                      </div>
                      <h4 className="text-lg font-display font-bold text-white mb-3 line-clamp-2 group-hover:text-orange-400 transition-colors">
                        {clip.title}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {clip.tags.slice(0, 2).map(tag => (
                          <span key={tag} className="text-[10px] px-2 py-1 rounded-full bg-white/5 text-gray-400 border border-white/10">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
