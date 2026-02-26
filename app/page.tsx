
import { Navbar } from '@/components/navbar';
import { ConvergingAnimation } from '@/components/converging-animation';

export default function Page() {
  return (
    <main className="min-h-screen bg-[#080810] text-white">
      <Navbar />

      {/* hero spacer — enough height to demonstrate the scroll shrink */}
      <div className="flex flex-col items-center justify-center pt-32 pb-64 text-center">
        <p className="text-xs font-bold tracking-[0.3em] text-white/40 uppercase mb-6">
          Scroll down to see the navbar animate
        </p>
        <h1 className="text-5xl md:text-7xl font-bold leading-tight max-w-3xl">
          Recover more revenue, automatically.
        </h1>

        {/* tall filler so the page is scrollable */}
        <div className="mt-64 h-[200vh]" />
      </div>

      {/* Converging integrations section */}
      <ConvergingAnimation />
    </main>
  );
}