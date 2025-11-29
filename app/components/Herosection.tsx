import { ArrowRight } from "lucide-react";

export default function Herosection() {
  return (
    <section id="home" className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Soft gradient spotlight */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,140,0,0.18),transparent_70%)]" />

      <div className="relative z-10 container mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-5 py-2 mb-8 rounded-full border border-white/10 bg-white/5 text-gray-300 text-sm animate-fadeUp">
          <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
          Now in Public Beta
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white leading-tight max-w-5xl mx-auto animate-fadeUp">
          Build faster with the power of{" "}
          <span className="animate-textGlow bg-gradient-to-r from-orange-400 via-orange-500 to-yellow-400 text-transparent bg-clip-text">
            AI
          </span>
        </h1>

        {/* Subtext */}
        <p className="mt-6 text-lg text-gray-400 max-w-2xl mx-auto animate-fadeUp [animation-delay:0.25s]">
          Work smarter, automate workflows, and launch products in a fraction of the time — powered by next-gen AI tools.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4 animate-fadeUp [animation-delay:0.5s]">
          <button className="px-8 py-4 rounded-lg font-semibold bg-orange-500 text-black hover:bg-orange-600 transition-all flex items-center gap-2 shadow-md hover:shadow-orange-500/30">
            Get Started Free <ArrowRight className="h-4 w-4" />
          </button>

          <button className="px-8 py-4 rounded-lg font-semibold border border-white/20 text-gray-300 hover:bg-white/10 transition-all">
            Watch Demo
          </button>
        </div>

        {/* Social proof */}
        <div className="mt-16 pt-8 border-t border-white/10 animate-fadeUp [animation-delay:0.75s]">
          <p className="text-sm text-gray-500 mb-5">Trusted by world-class teams</p>
          <div className="flex flex-wrap justify-center gap-8 opacity-70">
            <span className="text-xl font-semibold text-white">Apex</span>
            <span className="text-xl font-semibold text-white">Echo</span>
            <span className="text-xl font-semibold text-white">Neon</span>
            <span className="text-xl font-semibold text-white">Pulse</span>
            <span className="text-xl font-semibold text-white">Quantum</span>
          </div>
        </div>
      </div>
    </section>
  );
}
