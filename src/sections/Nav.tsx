import { useState } from "react";
import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { DoodleStar, ScribbleUnderline } from "../components/Doodles";

const LINKS = ["Home", "Experience", "Projects", "Skills", "Education", "Contact"];
const href = (l: string) => (l === "Home" ? "#top" : `#${l.toLowerCase()}`);

export function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <motion.header
      initial={{ opacity: 1, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between bg-(--color-canvas)/70 px-6 py-4 backdrop-blur md:px-12"
    >
      <a href="#top" data-cursor="grow" className="relative font-display text-xl font-extrabold tracking-tight">
        ROSHANI<span className="text-(--color-accent)">.</span>
        <DoodleStar className="pointer-events-none absolute -right-4 -top-3 h-3.5 w-3.5 rotate-12 text-(--color-gold)" />
      </a>
      <nav className="hidden items-center gap-7 md:flex">
        {LINKS.map((link) => (
          <a key={link} href={href(link)} data-cursor="grow" className="group relative text-sm font-medium text-(--color-ink)/80 transition-colors hover:text-(--color-accent)">
            {link}
            <ScribbleUnderline className="absolute -bottom-2 left-0 h-2 w-full text-(--color-accent) opacity-0 transition-opacity group-hover:opacity-100" />
          </a>
        ))}
      </nav>
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Toggle menu"
        className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-dashed border-(--color-ink)/25 md:hidden"
      >
        {open ? <X size={18} /> : <Menu size={18} />}
      </button>
      {open && (
        <nav className="absolute left-0 right-0 top-full flex flex-col gap-1 bg-(--color-canvas) px-6 pb-4 md:hidden">
          {LINKS.map((link) => (
            <a key={link} href={href(link)} onClick={() => setOpen(false)} className="py-2 font-display font-extrabold">
              {link}
            </a>
          ))}
        </nav>
      )}
    </motion.header>
  );
}
