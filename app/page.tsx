
import { Navbar } from '@/components/navbar';
import { ConvergingAnimation } from '@/components/converging-animation';
import { HeroOrbitsBg } from '@/components/hero-orbits-bg';

export default function Page() {
  return (
    <main className="min-h-screen bg-[#080810] text-white">
      <Navbar />

      {/* Hero section */}
      <div className="relative min-h-screen overflow-hidden">
        {/* Animated orbit background */}
        <HeroOrbitsBg />

        {/* Hero content — on top of orbits */}
        <div className="relative z-10 flex flex-col items-center justify-start min-h-screen text-center px-6 pt-[18vh]">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] max-w-4xl uppercase tracking-tight">
            The AI<br />Chargeback<br />Platform.
          </h1>
          <p className="mt-8 text-base md:text-lg text-white/50 max-w-xl leading-relaxed">
            Reduce your dispute rate by 90% and maximize chargeback recovery, on autopilot.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-10">
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#4460F1] text-white text-sm font-semibold uppercase tracking-wider hover:bg-[#3a53d6] transition-colors"
            >
              Get Started Now
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7"/><path d="M7 7h10v10"/></svg>
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 text-white text-sm font-semibold uppercase tracking-wider hover:border-white/40 transition-colors"
            >
              Schedule a Demo
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7"/><path d="M7 7h10v10"/></svg>
            </a>
          </div>
        </div>
      </div>

      {/* Converging integrations section */}
      <ConvergingAnimation />
    </main>
  );
}