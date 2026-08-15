import { ArrowRight, BrainCircuit, Cpu, Rocket, ShieldCheck } from "lucide-react";
import { motion } from "motion/react";
import { assetPath } from "../utils/assetPath";

const heroHighlights = [
  [Rocket, "End-to-End", "Product Development"],
  [Cpu, "Embedded & IoT", "Expertise"],
  [BrainCircuit, "AI Enabled", "Solutions"],
  [ShieldCheck, "Reliable. Scalable.", "Future Ready."]
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#020817] pb-12 pt-20">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${assetPath("images/hero-embedded.jpg")}')` }} />
      <div className="absolute inset-0 bg-gradient-to-r from-[#020817] via-[#020817]/88 to-[#020817]/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#020817]/95 via-transparent to-[#020817]/20" />

      <div className="relative mx-auto flex min-h-[480px] max-w-[1320px] items-center px-6 py-14 md:px-8 lg:min-h-[540px]">
        <motion.div initial={{ opacity: 0, y: 35 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75 }} className="max-w-2xl">
          <h1 className="text-4xl font-extrabold leading-[1.12] text-white md:text-5xl lg:text-6xl">
            Engineering Intelligent Solutions.
            <span className="mt-2 block text-[#1597ff]">Connecting Tomorrow.</span>
          </h1>

          <div className="mt-5 h-1 w-14 bg-[#1597ff]" />

          <p className="mt-6 max-w-xl text-base leading-8 text-slate-100">
            SmartEdgeIO Systems delivers end-to-end embedded product engineering,
            IoT, AI and display solutions that power a smarter, safer and more connected world.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <a href="#services" className="flex items-center gap-3 rounded-md bg-[#087ff5] px-6 py-3.5 font-semibold text-white transition hover:bg-[#1597ff]">
              Explore Our Services <ArrowRight size={18} />
            </a>
            <a href="#contact" className="flex items-center gap-3 rounded-md border border-[#1597ff] bg-black/10 px-6 py-3.5 font-semibold text-white transition hover:bg-[#1597ff]">
              Contact Us <ArrowRight size={18} />
            </a>
          </div>
        </motion.div>
      </div>

      <div className="relative mx-auto -mt-10 max-w-[1180px] px-5">
        <div className="grid overflow-hidden rounded-lg border border-white/15 bg-[#06172d]/95 shadow-2xl backdrop-blur-md md:grid-cols-4">
          {heroHighlights.map(([Icon, title, text], index) => (
            <div key={title} className={`grid min-h-[96px] grid-cols-[52px_1fr] items-center gap-5 px-7 py-5 ${index > 0 ? "border-t border-white/10 md:border-l md:border-t-0" : ""}`}>
              <div className="flex h-12 w-12 items-center justify-center">
                <Icon className="text-[#1597ff]" size={40} strokeWidth={1.7} />
              </div>
              <div className="min-w-0 text-left">
                <div className="text-base font-semibold leading-6 text-white">{title}</div>
                <div className="text-base leading-6 text-white">{text}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}