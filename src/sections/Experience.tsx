import { motion } from "motion/react";
import { Briefcase } from "lucide-react";
import { ScribbleUnderline, HalftoneDots, DoodleStar, TapeStrip } from "../components/Doodles";

const JOBS = [
  {
    company: "Aagaaz Training Center",
    role: "Full Stack Developer Trainee",
    period: "April 2026 – Oct 2026",
    accent: "--color-violet",
    stack: ["React.js", "HTML", "CSS", "JavaScript", "Node.js", "Express.js", "MongoDB"],
    points: [
      "Completed 6 months of Full Stack Development training at Aagaaz Training Centre (AICTE-affiliated, ISO-certified, MSME-listed), gaining practical knowledge of frontend and backend development.",
      "Developed and integrated APIs and used Git for version control.",
      "Applied full stack development practices to improve application functionality and code quality.",
    ],
  },
  {
    company: "TechifyIndia Company",
    role: "Software Development AI Intern",
    period: "Jan 2023 – Jun 2023",
    accent: "--color-cyan",
    stack: ["Python", "OOP", "OpenCV", "Haar Cascades", "Machine Learning"],
    points: [
      "Contributed to a Library Management Application using core Python concepts including OOPs, map(), reduce() and lambda functions.",
      "Gained hands-on experience with AI concepts, including types of AI, Machine Learning and Computer Vision with OpenCV.",
      "Worked on real-time applications such as Eye Detection, Full Body Detection and Car Number Plate Detection using Haar Cascade Classifiers.",
      "Assisted in building an Employee Management System, focusing on back-end logic and UI flow.",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="relative overflow-hidden px-6 py-20 pt-12 md:px-12">
      <HalftoneDots className="pointer-events-none absolute right-4 top-6 h-24 w-40 text-(--color-violet) opacity-30 md:right-10" />
      <DoodleStar className="pointer-events-none absolute left-[4%] top-10 h-5 w-5 text-(--color-gold) opacity-70" />
      <div className="mx-auto max-w-6xl">
        <p className="font-display text-sm font-extrabold uppercase tracking-widest text-(--color-accent)">&#9673; Internships</p>
        <h2 className="relative mt-2 inline-block font-display text-3xl font-extrabold tracking-tight md:text-4xl">
          Where I&rsquo;ve learned by building
          <ScribbleUnderline className="absolute -bottom-2 left-0 h-3 w-full text-(--color-violet)" />
        </h2>
        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          {JOBS.map((j, i) => (
            <motion.article
              key={j.company}
              initial={{ y: 30 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className={`relative rounded-3xl border-2 border-dashed border-(--color-ink)/15 bg-(--color-canvas-raised) p-7 shadow-[6px_8px_0_0_oklch(0.10_0.03_290)] ${i % 2 ? "rotate-1" : "-rotate-1"}`}
            >
              <TapeStrip color={`var(${j.accent})`} className="absolute -top-3 left-8 z-10" />
              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full" style={{ backgroundColor: `var(${j.accent})` }}>
                  <Briefcase size={20} className="text-(--color-canvas)" />
                </span>
                <div>
                  <h3 className="font-display text-xl font-extrabold">{j.company}</h3>
                  <p className="font-medium text-(--color-ink)/85">{j.role}</p>
                  <p className="text-sm text-(--color-ink)/60">{j.period}</p>
                </div>
              </div>
              <ul className="mt-5 list-disc space-y-2 pl-5 text-sm text-(--color-ink)/80">
                {j.points.map((p) => <li key={p}>{p}</li>)}
              </ul>
              <div className="mt-5 flex flex-wrap gap-2">
                {j.stack.map((s) => (
                  <span key={s} className="rounded-full px-3 py-1 text-xs font-bold text-(--color-canvas)" style={{ backgroundColor: `var(${j.accent})` }}>{s}</span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
