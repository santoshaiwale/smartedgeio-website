import { motion } from "motion/react";

const services = [
  ["Embedded Systems", "/icons/embedded.svg", "Firmware, BSP, RTOS, Linux and driver development for high-performance devices."],
  ["IoT Solutions", "/icons/iot.svg", "Secure connectivity, cloud integration, dashboards and device management."],
  ["AI at the Edge", "/icons/ai.svg", "Machine learning, computer vision and predictive analytics for intelligent devices."],
  ["Display & HMI", "/icons/display.svg", "Custom UI/UX, display controller development and smart HMI solutions."],
  ["Hardware Design", "/icons/hardware.svg", "Schematic, PCB layout, prototyping and product optimization for manufacturing."],
  ["Product Engineering", "/icons/product.svg", "Concept to certification for robust products that are market ready."]
];

export default function Services() {
  return (
    <section id="services" className="bg-slate-50 px-6 py-12 text-slate-900">
      <div className="mx-auto max-w-[1280px]">
        <div className="mb-8 text-center">
          <p className="text-sm font-bold tracking-[0.18em] text-[#087ff5]">WHAT WE DO</p>
          <h2 className="mt-2 text-3xl font-bold text-[#07142f] md:text-4xl">Complete Engineering Solutions</h2>
          <div className="mx-auto mt-4 h-1 w-12 bg-[#087ff5]" />
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {services.map(([title, icon, description], i) => (
            <motion.article key={title} initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }} transition={{ delay: i * 0.05 }}
              className="flex min-h-[220px] flex-col items-center rounded-lg border border-slate-200 bg-white px-5 py-7 text-center shadow-sm transition hover:-translate-y-1 hover:border-[#087ff5]/40 hover:shadow-lg">
              <img src={icon} alt="" aria-hidden="true" className="h-12 w-12" />
              <h3 className="mt-7 text-base font-bold text-[#07142f]">{title}</h3>
              <p className="mt-3 flex-1 text-sm leading-6 text-slate-700">{description}</p>
              <a href="#contact" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#087ff5]">Learn More <span aria-hidden="true">→</span></a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}