import { assetPath } from "../utils/assetPath";

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-white/10 bg-[#020817] px-6 py-14">
      <div className="mx-auto max-w-[1350px]">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <img src={assetPath("logo/SmartEdgeIO-Logo.svg")} alt="SmartEdgeIO Systems" className="h-14 w-auto" />
            <p className="mt-5 max-w-lg leading-7 text-slate-400">
              Embedded product engineering across hardware, firmware, AI, IoT and display systems.
            </p>
          </div>
          <div>
            <h3 className="font-bold">Services</h3>
            <p className="mt-4 text-sm leading-8 text-slate-400">Embedded Systems<br/>Hardware Design<br/>AI at the Edge<br/>IoT Solutions<br/>Display & HMI</p>
          </div>
          <div>
            <h3 className="font-bold">Contact</h3>
            <p className="mt-4 text-sm leading-8 text-slate-400">contact@smartedgeio.com<br/>smartedgeio.com<br/>India</p>
          </div>
        </div>
        <div className="mt-12 border-t border-white/10 pt-6 text-sm text-slate-500">
          © {new Date().getFullYear()} SmartEdgeIO Systems. All rights reserved.
        </div>
      </div>
    </footer>
  );
}