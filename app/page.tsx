
import { Navbar } from '@/components/navbar';
import { ConvergingAnimation } from '@/components/converging-animation';

export default function Page() {
  return (
    <main className="min-h-screen bg-[#080810] text-white">
      <Navbar />

      {/* Hero section */}
      <div className="flex flex-col items-center justify-center pt-32 pb-16 text-center px-6">
        <p className="text-xs font-bold tracking-[0.3em] text-white/40 uppercase mb-6">
          Recover more revenue
        </p>
        <h1 className="text-5xl md:text-7xl font-bold leading-tight max-w-3xl">
          Recover more revenue, automatically.
        </h1>
        <p className="mt-6 text-lg text-white/50 max-w-xl">
          Scroll down to see the scroll-driven navbar animation and converging integrations section — replicated from Chargeflow&nbsp;&amp;&nbsp;Domu.
        </p>

        {/* spacer — enough scroll distance for the navbar shrink to complete */}
        <div className="mt-16 h-[30vh]" />
      </div>

      {/* Converging integrations section */}
      <ConvergingAnimation />
    </main>
  );
}