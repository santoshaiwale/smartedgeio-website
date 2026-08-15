import { ShieldCheck, Rocket, Layers3, Headphones } from "lucide-react";

const items = [
  [Layers3, "End-to-End Capability", "Hardware, firmware, IoT, AI and product engineering under one team."],
  [Rocket, "Rapid Prototyping", "Move from idea to working proof-of-concept quickly and pragmatically."],
  [ShieldCheck, "Engineering First", "Security, reliability, testability and maintainability built into the product."],
  [Headphones, "Long-Term Support", "Engineering support beyond prototype through production and product lifecycle."]
];

export default function WhyUs() {
  return (
    <section id="about-us" className="bg-slate-50 px-6 py-16 text-slate-900 md:py-18">
      <div className="mx-auto max-w-[1200px]">
        <div className="text-center">
          <p className="text-xs font-bold tracking-[0.22em] text-[#087ff5] md:text-sm">WHY SMARTEDGEIO</p>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">Built for Product Builders</h2>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {items.map(([Icon, title, text]) => (
            <div key={title} className="rounded-xl border border-slate-200 bg-white p-5">
              <Icon size={28} className="text-[#087ff5]" />
              <h3 className="mt-4 font-bold">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}