import { motion } from "motion/react";
import { ScribbleUnderline, DoodleStar, HalftoneDots, SparkleBurst } from "../components/Doodles";

const GROUPS = [
  { title: "Languages", accent: "--color-violet", items: ["C++", "JavaScript", "Java", "Python"] },
  { title: "Web Technologies", accent: "--color-coral", items: ["HTML", "CSS", "Tailwind CSS", "React.js", "Node.js", "Express.js", "TypeScript", "PHP"] },
  { title: "Databases", accent: "--color-cyan", items: ["SQL", "MongoDB", "PostgreSQL", "Postman"] },
  { title: "Tools & Platforms", accent: "--color-gold", items: ["Git", "GitHub", "VSCode", "XAMPP", "Linux"] },
  { title: "DevOps & Cloud", accent: "--color-accent", items: ["AWS", "Docker", "Kubernetes", "GitHub Actions", "CI/CD Pipelines", "Terraform / Ansible"] },
  { title: "Soft Skills", accent: "--color-violet", items: ["Problem-Solving", "Team Player", "Adaptability", "Work ethic & responsibility"] },
];

const container = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };
const item = { hidden: { y: 24 }, show: { y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } } };

export function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden px-6 py-20 md:px-12">
      <HalftoneDots className="pointer-events-none absolute right-2 bottom-4 h-24 w-40 text-(--color-accent) opacity-25 md:right-12" />
      <DoodleStar className="pointer-events-none absolute left-[5%] top-4 h-5 w-5 text-(--color-cyan) opacity-70" />
      <SparkleBurst className="pointer-events-none absolute right-[6%] top-10 h-6 w-6 text-(--color-coral) opacity-70" />
      <div className="mx-auto max-w-6xl">
        <p className="font-display text-sm font-extrabold uppercase tracking-widest text-(--color-accent)">&#9673; Toolkit</p>
        <h2 className="relative mt-2 inline-block font-display text-3xl font-extrabold tracking-tight md:text-4xl">
          Skills &amp; technologies
          <ScribbleUnderline className="absolute -bottom-2 left-0 h-3 w-full text-(--color-accent)" />
        </h2>
        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.1 }}
          className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {GROUPS.map((g) => (
            <motion.div key={g.title} variants={item}
              className="rounded-2xl border-2 border-dashed border-(--color-ink)/15 bg-(--color-canvas-raised) p-5 shadow-[4px_5px_0_0_oklch(0.10_0.03_290)]">
              <h3 className="flex items-center gap-2 font-display text-lg font-extrabold">
                <span className="h-3 w-3 rounded-full" style={{ backgroundColor: `var(${g.accent})` }} />
                {g.title}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <span key={s} className="rounded-full border border-(--color-ink)/20 px-3 py-1 text-sm font-medium transition-colors hover:border-(--color-accent) hover:text-(--color-accent)">{s}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
