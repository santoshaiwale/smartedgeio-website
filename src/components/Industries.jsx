import { ArrowRight, ArrowUpDown, Building2, Factory, HeartPulse, Radio, Zap } from "lucide-react";

const industries = [
  [Factory, "Industrial Automation"],
  [HeartPulse, "Healthcare"],
  [ArrowUpDown, "Elevator Systems"],
  [Building2, "Building Automation"],
  [Zap, "Energy & Utilities"],
  [Radio, "Smart IoT Devices"]
];

export default function Industries() {
  return (
    <section id="industries" className="bg-[#020817] px-6 py-0">
      <div className="mx-auto grid max-w-[1320px] border-t border-white/10 md:grid-cols-[180px_1fr]">
        <div className="border-b border-white/10 py-8 md:border-b-0 md:border-r md:pr-8">
          <h2 className="text-2xl font-bold leading-tight text-white">Industries<br />We Serve</h2>
          <div className="mt-4 h-px w-12 bg-[#1597ff]" />
          <a href="#contact" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#1597ff]">
            View All Industries <ArrowRight size={16} />
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {industries.map(([Icon, name], index) => (
            <div key={name} className={`flex min-h-40 flex-col items-center justify-center px-5 py-7 text-center ${index > 0 ? "border-t border-white/10 sm:border-l sm:border-t-0" : ""}`}>
              <Icon size={42} strokeWidth={1.55} className="text-white" />
              <h3 className="mt-5 text-sm font-semibold text-white">{name}</h3>
              <div className="mt-4 h-px w-8 bg-[#1597ff]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}