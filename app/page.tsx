import { HeroSection } from '@/components/hero-section';
import { FeaturedPodcasts } from '@/components/featured-podcasts';
import { AiSearch } from '@/components/ai-search';
import { PodcastUniverse } from '@/components/podcast-universe';
import { GuestWall } from '@/components/guest-wall';
import { InsightsSection } from '@/components/insights-section';
import { CreatorJourney } from '@/components/creator-journey';
import { CommunitySection } from '@/components/community-section';
import { Footer } from '@/components/footer';
import { Navbar } from '@/components/navbar';
import { RajMode } from '@/components/raj-mode';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-orange-500/30">
      <RajMode />
      <Navbar />
      <HeroSection />
      <AiSearch />
      <PodcastUniverse />
      <FeaturedPodcasts />
      <GuestWall />
      <InsightsSection />
      <CreatorJourney />
      <CommunitySection />
      <Footer />
    </main>
  );
}
