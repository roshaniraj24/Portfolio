import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Mail, Github, Linkedin, ChevronDown } from "lucide-react";
import { MagneticButton } from "../components/MagneticButton";
import {
  ScribbleUnderline,
  DoodleStar,
  SparkleBurst,
  HalftoneDots,
  TapeStrip,
  Squiggle,
  DashedArrow,
} from "../components/Doodles";

const STATS = [
  { value: "2", label: "Internships" },
  { value: "2026", label: "B.Tech graduate" },
  { value: "25+", label: "GitHub repos" },
];

const MORE_INFO = [
  "I completed a Diploma in Computer Science with 89%, then moved on to a B.Tech in CSE at Lovely Professional University.",
  "My internships took me from Python and computer vision with OpenCV at TechifyIndia to six months of MERN-style full stack training at Aagaaz Training Centre.",
  "Lately I'm drawn to DevOps — Docker, Kubernetes, CI/CD, Prometheus and Grafana — and to building systems that fix themselves, like AutoGuard.",
];

export function About() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="about" className="relative overflow-x-hidden px-6 py-20 md:px-12">
      <HalftoneDots className="pointer-events-none absolute left-2 top-6 h-24 w-40 text-(--color-violet) opacity-25 md:left-10" />
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 md:grid-cols-2">
        <motion.div
          initial={{ x: -30 }}
          whileInView={{ x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative flex justify-center"
        >
          <div className="relative rounded-[2rem] bg-(--color-canvas-raised) p-6 shadow-[8px_10px_0_0_oklch(0.10_0.03_290)] -rotate-2">
            <TapeStrip color="var(--color-coral)" className="absolute -top-3 left-10 z-10" />
            <img
              src="/img/roshani.jpg"
              alt="Roshani Kumari"
              className="w-64 rounded-2xl object-cover md:w-72"
            />
            <SparkleBurst className="pointer-events-none absolute -right-4 -top-4 h-9 w-9 text-(--color-accent)" />
            <DoodleStar className="pointer-events-none absolute -bottom-3 -left-3 h-6 w-6 text-(--color-gold)" />
            <div className="pointer-events-none absolute -right-10 top-1/3 hidden rotate-3 rounded-xl bg-(--color-coral) px-3 py-1.5 font-display text-xs font-extrabold text-(--color-canvas) shadow-[3px_4px_0_0_oklch(0.16_0.04_290)] sm:block">
              That&rsquo;s me!
            </div>
            <Squiggle className="pointer-events-none absolute left-1/2 -bottom-8 h-4 w-24 -translate-x-1/2 text-(--color-ink)/20" />
          </div>
        </motion.div>

        <motion.div
          initial={{ x: 30 }}
          whileInView={{ x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="font-display text-sm font-extrabold uppercase tracking-widest text-(--color-accent)">
            &#9673; About Me
          </p>
          <h2 className="relative inline-block mt-2 font-display text-3xl font-extrabold tracking-tight md:text-4xl">
            Hi, I&rsquo;m Roshani &mdash; I build things that work.
            <ScribbleUnderline className="absolute -bottom-2 left-0 h-3 w-full text-(--color-violet)" />
          </h2>
          <p className="mt-5 max-w-lg text-(--color-ink)/80">
            I&rsquo;m a Computer Science and Engineering student at Lovely Professional
            University and a full stack developer with a growing love for DevOps and
            cloud. I enjoy turning ideas into reliable web apps, from React front ends
            and Node.js APIs to automated deployment pipelines.
          </p>

          <AnimatePresence initial={false}>
            {expanded && (
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: "auto" }}
                exit={{ height: 0 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="overflow-hidden"
              >
                <div className="mt-4 max-w-lg space-y-3 border-l-2 border-dashed border-(--color-accent)/40 pl-4 text-(--color-ink)/75">
                  {MORE_INFO.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="mt-8 flex flex-wrap gap-6">
            {STATS.map((s) => (
              <div key={s.label}>
                <p className="font-display text-3xl font-extrabold text-(--color-accent)">{s.value}</p>
                <p className="text-sm text-(--color-ink)/70">{s.label}</p>
              </div>
            ))}
          </div>

          <div className="relative mt-9 flex flex-wrap items-center gap-4">
            <DashedArrow className="pointer-events-none absolute -top-9 left-6 hidden h-8 w-16 -rotate-[100deg] text-(--color-ink)/30 sm:block" />
            <MagneticButton
              onClick={() => setExpanded((v) => !v)}
              aria-expanded={expanded}
              className="flex items-center gap-2 rounded-full bg-(--color-accent) px-7 py-4 font-display text-sm font-extrabold text-(--color-canvas) shadow-[4px_6px_0_0_oklch(0.16_0.04_290)] transition-transform hover:-translate-y-0.5"
            >
              <Mail size={16} />
              {expanded ? "Show Less" : "More About Me"}
              <ChevronDown
                size={16}
                className={`transition-transform ${expanded ? "rotate-180" : ""}`}
              />
            </MagneticButton>
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/roshaniraj24"
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="grow"
                aria-label="GitHub"
                className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-(--color-ink)/15 transition-colors hover:border-(--color-accent) hover:text-(--color-accent)"
              >
                <Github size={18} />
              </a>
              <a
                href="https://linkedin.com/in/roshanikumari"
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="grow"
                aria-label="LinkedIn"
                className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-(--color-ink)/15 transition-colors hover:border-(--color-accent) hover:text-(--color-accent)"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
