import { Menu, ArrowRight, X } from "lucide-react";
import { useState } from "react";
import { assetPath } from "../utils/assetPath";

const links = ["Home", "Services", "Industries", "Technologies", "About Us", "Case Studies", "Blog"];

function getHref(link) {
  return link === "Home" ? "#" : `#${link.toLowerCase().replaceAll(" ", "-")}`;
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#020817]/90 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-[1320px] items-center justify-between px-5 md:px-8">
        <a href="#" className="shrink-0">
          <img src={assetPath("logo/smartedgeio-logo.png")} alt="SmartEdgeIO Systems" className="h-12 w-auto md:h-14" />
        </a>

        <nav className="hidden items-center gap-9 xl:flex">
          {links.map((link) => (
            <a key={link} href={getHref(link)}
              className={`border-b-2 py-7 text-sm font-semibold transition ${link === "Home" ? "border-[#1597ff] text-[#1597ff]" : "border-transparent text-white hover:text-[#1597ff]"}`}>
              {link}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href="#contact"
            className="hidden items-center gap-2 rounded-full border border-[#1597ff] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#1597ff] md:flex">
            Contact Us <ArrowRight size={16} />
          </a>
          <button onClick={() => setOpen(!open)} className="rounded-lg border border-white/15 p-2.5 xl:hidden" aria-label="Menu">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-white/10 bg-[#020817] px-6 py-5 xl:hidden">
          {links.map((link) => (
            <a key={link} onClick={() => setOpen(false)}
              href={getHref(link)}
              className="block border-b border-white/5 py-3 text-slate-200">
              {link}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}