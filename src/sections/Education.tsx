import { GraduationCap, Award } from "lucide-react";
import { ScribbleUnderline, TapeStrip } from "../components/Doodles";

const EDU = [
  { school: "Lovely Professional University", place: "Jalandhar, Punjab", degree: "Bachelor of Technology – Computer Science and Engineering", score: "CGPA: 6.6", date: "Aug 2026" },
  { school: "BLDEA’s SSM Polytechnic College", place: "Bijapur, Karnataka", degree: "Diploma in Computer Science and Engineering", score: "Percentage: 89", date: "June 2023" },
  { school: "Adarsh Vikas Vidyalaya", place: "Patna, Bihar", degree: "Matriculation", score: "Percentage: 70", date: "March 2020" },
];
const CERTS = [
  { name: "Introduction To Internet Of Things", by: "NPTEL", date: "April 2025" },
  { name: "Building Web Applications in PHP", by: "Coursera", date: "Nov 2024" },
  { name: "Data Structures and Algorithms – Self-Paced", by: "GeeksforGeeks", date: "Aug 2024" },
  { name: "Computer Architecture and Computer Organization Masterclass", by: "Udemy", date: "Nov 2023" },
];

export function Education() {
  return (
    <section id="education" className="relative overflow-hidden px-6 py-20 md:px-12">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
        <div>
          <p className="font-display text-sm font-extrabold uppercase tracking-widest text-(--color-accent)">&#9673; Education</p>
          <h2 className="relative mt-2 inline-block font-display text-3xl font-extrabold tracking-tight md:text-4xl">
            My learning journey
            <ScribbleUnderline className="absolute -bottom-2 left-0 h-3 w-full text-(--color-cyan)" />
          </h2>
          <div className="mt-10 space-y-6 border-l-2 border-dashed border-(--color-ink)/25 pl-6">
            {EDU.map((e) => (
              <div key={e.school} className="relative rounded-2xl bg-(--color-canvas-raised) p-5 shadow-[4px_5px_0_0_oklch(0.10_0.03_290)]">
                <span className="absolute -left-[2.15rem] top-6 flex h-6 w-6 items-center justify-center rounded-full bg-(--color-accent)">
                  <GraduationCap size={14} className="text-(--color-canvas)" />
                </span>
                <h3 className="font-display text-lg font-extrabold">{e.school}</h3>
                <p className="text-sm text-(--color-ink)/80">{e.degree}</p>
                <p className="mt-1 text-sm font-bold text-(--color-accent)">{e.score}</p>
                <p className="text-xs text-(--color-ink)/60">{e.place} · {e.date}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <p className="font-display text-sm font-extrabold uppercase tracking-widest text-(--color-accent)">&#9673; Certificates</p>
          <h2 className="relative mt-2 inline-block font-display text-3xl font-extrabold tracking-tight md:text-4xl">
            Always upskilling
            <ScribbleUnderline className="absolute -bottom-2 left-0 h-3 w-full text-(--color-gold)" />
          </h2>
          <div className="relative mt-10 space-y-4 rounded-3xl border-2 border-dashed border-(--color-ink)/15 bg-(--color-canvas-raised) p-6 shadow-[6px_8px_0_0_oklch(0.10_0.03_290)]">
            <TapeStrip color="var(--color-gold)" className="absolute -top-3 left-8 z-10" />
            {CERTS.map((c) => (
              <div key={c.name} className="flex items-start gap-3">
                <Award size={20} className="mt-0.5 shrink-0 text-(--color-gold)" />
                <div>
                  <p className="font-medium">{c.name}</p>
                  <p className="text-sm text-(--color-ink)/60">{c.by} · {c.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
