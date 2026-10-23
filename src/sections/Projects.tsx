import { motion } from "motion/react";
import { ArrowUpRight, Github, Ambulance, Activity, Container, Cloud, Compass, Utensils, GitBranch, Globe } from "lucide-react";
import { ScribbleUnderline, TapeStrip, DoodleStar, SparkleBurst, HalftoneDots, ComicBurst } from "../components/Doodles";

const GH = "https://github.com/roshaniraj24/";
const PROJECTS = [
  { title: "Smart Ambulance System", repo: "Smart_Ambulance_System", tag: "Full Stack · IoT", icon: Ambulance, accent: "--color-coral", date: "Present", featured: true,
    description: "Real-time ambulance tracking and patient monitoring with GPS and sensors. Secure web portals for drivers, hospitals and admins, plus dynamic allocation of the nearest hospital based on patient condition and availability." },
  { title: "AutoGuard", repo: "AUTOGUARD-", tag: "DevOps", icon: Activity, accent: "--color-accent", date: "Sep – Nov 2025", featured: true,
    description: "Auto-healing and monitoring platform that cuts downtime and manual server intervention. Dashboard with real-time visibility and alerts, built with Prometheus, Grafana, Nagios and CI/CD pipelines (GitHub Actions, GitLab CI) with security scanning." },
  { title: "Docker Swarm Visualizer", repo: "Docker-Swarm-Visualizer", tag: "Docker · JavaScript", icon: Container, accent: "--color-cyan", date: "",
    description: "Visualizes a multi-node Docker Swarm cluster running Apache, Nginx and RabbitMQ services, exposed publicly through ngrok." },
  { title: "Hub of Cloud", repo: "Hub_of_Cloud", tag: "Web App · JavaScript", icon: Cloud, accent: "--color-violet", date: "",
    description: "Learning platform with AI-powered resource recommendations based on learning patterns, group discussions with whiteboards, and advanced file organization with folders and tags." },
  { title: "InspireWay", repo: "InspireWay", tag: "PHP", icon: Compass, accent: "--color-gold", date: "",
    description: "An intelligent career guidance system in PHP that helps students make well-informed career decisions." },
  { title: "Food Ordering Website", repo: "food_ordering", tag: "Flutter · Dart", icon: Utensils, accent: "--color-coral", date: "",
    description: "Flutter-based web application offering a smooth and interactive online food ordering experience." },
  { title: "CI/CD on the Cloud", repo: "hello-world-eb-docker", tag: "DevOps · AWS", icon: GitBranch, accent: "--color-cyan", date: "",
    description: "CI/CD pipeline for deploying a containerized Node.js application on the cloud." },
  { title: "Ecommerce Website", repo: "Ecommerce_Website", tag: "JavaScript", icon: Globe, accent: "--color-accent", date: "",
    description: "An e-commerce website built with JavaScript, with product browsing and a shopping flow." },
];

const container = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };
const item = { hidden: { y: 40 }, show: { y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } } };

export function Projects() {
  return (
    <section id="projects" className="relative overflow-hidden px-6 py-20 md:px-12">
      <HalftoneDots className="pointer-events-none absolute right-4 top-2 h-24 w-40 text-(--color-coral) opacity-25 md:right-14" />
      <SparkleBurst className="pointer-events-none absolute left-[3%] top-24 h-7 w-7 text-(--color-cyan) opacity-70" />
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-display text-sm font-extrabold uppercase tracking-widest text-(--color-accent)">&#9673; Projects</p>
            <h2 className="relative mt-2 inline-block font-display text-3xl font-extrabold tracking-tight md:text-4xl">
              Things I&rsquo;ve built &amp; shipped
              <ScribbleUnderline className="absolute -bottom-2 left-0 h-3 w-full text-(--color-coral)" />
            </h2>
          </div>
          <a href="https://github.com/roshaniraj24?tab=repositories" target="_blank" rel="noopener noreferrer" data-cursor="grow"
            className="flex items-center gap-1 font-display text-sm font-extrabold text-(--color-ink)/80 transition-colors hover:text-(--color-accent)">
            All repositories on GitHub <ArrowUpRight size={16} />
          </a>
        </div>
        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.1 }}
          className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.a key={p.repo} href={GH + p.repo} target="_blank" rel="noopener noreferrer" data-cursor="grow" variants={item}
                whileHover={{ rotate: 0, y: -8 }} transition={{ type: "spring", stiffness: 260, damping: 18 }}
                className={`group relative flex flex-col rounded-3xl border-2 border-dashed border-(--color-ink)/15 bg-(--color-canvas-raised) p-6 shadow-[6px_8px_0_0_oklch(0.10_0.03_290)] ${i % 2 ? "rotate-1" : "-rotate-1"}`}>
                <TapeStrip color={`var(${p.accent})`} className={`absolute -top-3 z-10 ${i % 2 === 0 ? "left-6 -rotate-[8deg]" : "right-6 rotate-[6deg]"}`} />
                {p.featured && (
                  <ComicBurst color="var(--color-accent)" className="absolute -right-4 -top-4 z-10 h-12 w-12 rotate-6 text-[9px] font-display font-extrabold text-(--color-canvas)">TOP</ComicBurst>
                )}
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl" style={{ backgroundColor: `var(${p.accent})` }}>
                  <Icon size={26} className="text-(--color-canvas)" />
                </span>
                <div className="mt-4 flex flex-wrap items-center gap-2">
                  <span className="rounded-full px-3 py-1 text-xs font-bold text-(--color-canvas)" style={{ backgroundColor: `var(${p.accent})` }}>{p.tag}</span>
                  {p.date && <span className="text-xs text-(--color-ink)/60">{p.date}</span>}
                </div>
                <h3 className="mt-3 font-display text-xl font-extrabold tracking-tight">{p.title}</h3>
                <p className="mt-2 flex-1 text-sm text-(--color-ink)/75">{p.description}</p>
                <span className="mt-5 flex items-center gap-2 font-display text-sm font-extrabold text-(--color-accent)">
                  <Github size={16} /> View on GitHub <ArrowUpRight size={14} />
                </span>
                <DoodleStar className="pointer-events-none absolute -right-2 -top-2 h-5 w-5 text-(--color-gold) opacity-0 transition-opacity group-hover:opacity-100" />
              </motion.a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
