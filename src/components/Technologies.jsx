import {
  Blocks,
  BrainCircuit,
  Cloud,
  Code2,
  Cpu,
  Headphones,
  LockKeyhole,
  Monitor,
  Network,
  Rocket,
  ShieldCheck,
  Sparkles,
  Wifi,
  Zap
} from "lucide-react";
import { assetPath } from "../utils/assetPath";

const technologyGroups = [
  {
    icon: Cpu,
    title: "Microcontrollers",
    items: ["STM32", "NXP", "Cypress / Infineon", "Texas Instruments", "Renesas", "Microchip PIC", "Nordic nRF", "ESP32", "Silicon Labs"]
  },
  {
    icon: Blocks,
    title: "Hardware Design",
    items: ["Schematic Capture", "PCB Layout Design", "High-Speed Design", "Power Electronics", "EMC / EMI Design", "Thermal Analysis", "DFM / DFA Support", "Prototyping & Bring-up"]
  },
  {
    icon: Wifi,
    title: "Connectivity",
    items: ["WiFi", "Bluetooth", "Zigbee", "LoRa", "5G", "LTE", "NB-IoT", "Ethernet"]
  },
  {
    icon: Cloud,
    title: "Cloud Platforms",
    items: ["Microsoft Azure", "AWS", "Google Cloud", "ThingsBoard", "Amazon IoT Core", "Firebase", "Device APIs"]
  },
  {
    icon: BrainCircuit,
    title: "AI / ML",
    items: ["TensorFlow", "PyTorch", "ONNX", "Edge Impulse", "OpenVINO", "Computer Vision", "Predictive Analytics"]
  },
  {
    icon: Monitor,
    title: "Operating Systems",
    items: ["Embedded Linux", "FreeRTOS", "Zephyr", "Ubuntu Core", "Buildroot", "Yocto Project", "RTOS Middleware"]
  },
  {
    icon: Network,
    title: "Protocols",
    items: ["MQTT", "CoAP", "Modbus", "CAN", "OPC UA", "HTTP/HTTPS", "UART / SPI / I2C"]
  },
  {
    icon: LockKeyhole,
    title: "Security",
    items: ["Secure Boot", "TPM", "AES", "TLS/SSL", "OTA Security", "Secure Firmware Update", "Key Management"]
  },
  {
    icon: Code2,
    title: "Development Tools",
    items: ["STM32Cube", "KEIL", "IAR Systems", "VS Code", "Altium Designer", "Git", "CI/CD"]
  }
];

const strengths = [
  [ShieldCheck, "Secure by Design", "Security integrated at every layer."],
  [Blocks, "Scalable Architecture", "Built for performance, scalability and reliability."],
  [Rocket, "Future Ready", "Future-proof solutions with modern technologies."],
  [Sparkles, "Industry Best Practices", "Following global standards and compliance."],
  [Headphones, "End-to-End Support", "From concept to deployment and lifecycle support."]
];

export default function Technologies() {
  return (
    <section id="technologies" className="relative overflow-hidden bg-[#020817] px-5 pb-16 pt-28 text-white md:px-8">
      <div className="absolute inset-0 bg-cover bg-center opacity-55" style={{ backgroundImage: `url('${assetPath("images/technology-hero.jpg")}')` }} />
      <div className="absolute inset-0 bg-gradient-to-r from-[#020817] via-[#020817]/90 to-[#020817]/25" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#020817]/15 via-[#020817]/65 to-[#020817]" />

      <div className="relative mx-auto max-w-[1480px]">
        <div className="max-w-4xl pt-8 md:pt-12">
          <div className="flex items-center gap-5 text-sm font-bold tracking-[0.12em] text-[#1597ff]">
            TECHNOLOGIES WE WORK WITH
            <span className="h-px w-14 bg-[#1597ff]" />
          </div>
          <h2 className="mt-6 text-4xl font-extrabold leading-tight md:text-6xl">
            Powering Innovation with
            <span className="block text-[#087ff5]">Cutting-Edge Technologies</span>
          </h2>
          <p className="mt-7 max-w-2xl text-base leading-8 text-slate-200 md:text-lg">
            We leverage the latest technologies, tools and platforms to design, develop and deliver intelligent, secure and future-ready products.
          </p>
          <div className="mt-7 h-px w-20 bg-[#1597ff]" />
        </div>

        <div className="mt-9 overflow-hidden rounded-2xl border border-white/15 bg-[#03111f]/80 shadow-2xl backdrop-blur-md">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-9">
            {technologyGroups.map(({ icon: Icon, title, items }, index) => (
              <article key={title} className={`min-h-[360px] px-5 py-6 ${index > 0 ? "border-t border-white/10 sm:border-l sm:border-t-0" : ""}`}>
                <div className="flex min-h-[48px] items-center gap-3">
                  <Icon size={30} strokeWidth={1.6} className="text-[#1597ff]" />
                  <h3 className="text-sm font-semibold leading-5 text-white">{title}</h3>
                </div>
                <ul className="mt-6 space-y-4 text-sm leading-5 text-slate-100">
                  {items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Zap size={15} className="mt-0.5 shrink-0 text-[#22e68a]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-7 overflow-hidden rounded-2xl border border-white/15 bg-[#03111f]/80 shadow-2xl backdrop-blur-md">
          <div className="grid md:grid-cols-5">
            {strengths.map(([Icon, title, text], index) => (
              <div key={title} className={`flex min-h-[150px] items-center gap-5 px-7 py-6 ${index > 0 ? "border-t border-white/10 md:border-l md:border-t-0" : ""}`}>
                <Icon size={44} strokeWidth={1.5} className="shrink-0 text-[#22e68a]" />
                <div>
                  <h3 className="text-xl font-semibold leading-7">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
