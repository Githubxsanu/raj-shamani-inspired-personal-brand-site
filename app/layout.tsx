import type {Metadata} from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css'; // Global styles

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
});

export const metadata: Metadata = {
  title: 'Ideas Build Empires | Raj Shamani Inspired',
  description: 'Conversations with founders, creators, and thinkers shaping the future.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`dark ${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="bg-black text-white font-sans antialiased selection:bg-orange-500/30 selection:text-orange-200" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
