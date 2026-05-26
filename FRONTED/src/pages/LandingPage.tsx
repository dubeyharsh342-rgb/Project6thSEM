import LandingNav from '../components/landing/LandingNav';
import LandingHero from '../components/landing/LandingHero';
import LandingPreview from '../components/landing/LandingPreview';
import LandingAgentShowcase from '../components/landing/LandingAgentShowcase';
import LandingFeatures from '../components/landing/LandingFeatures';
import LandingPricing from '../components/landing/LandingPricing';
import LandingFooter from '../components/landing/LandingFooter';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 font-sans antialiased selection:bg-indigo-500 selection:text-white">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] bg-gradient-to-b from-indigo-500/10 via-purple-500/5 to-transparent blur-3xl pointer-events-none" />
      <LandingNav />
      <LandingHero />
      <LandingPreview />
      <LandingAgentShowcase />
      <LandingFeatures />
      <LandingPricing />
      <LandingFooter />
    </div>
  );
}
