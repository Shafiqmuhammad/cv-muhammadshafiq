"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight, Bot, Server, LayoutDashboard, Cloud, ExternalLink, Check,
  Award, ChevronDown, GraduationCap, Mail, Linkedin, Github, MapPin, AlertTriangle,
} from "lucide-react";
import {
  profile, problems, capabilities, projects, skillGroups, services,
  experience, credentials, education, faqs,
} from "../../data/portfolio";
import { Reveal, Section, SectionHeader, Tag } from "./ui";

const icons = { bot: Bot, server: Server, layout: LayoutDashboard, cloud: Cloud } as const;

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden px-4 pb-20 pt-36 md:pt-44">
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.4fr_1fr]">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-sm text-cyan-300">
            <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
            {profile.title}
          </p>
          <h1 className="text-4xl font-bold leading-[1.1] text-white md:text-6xl">{profile.headline}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-400">{profile.intro}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/#contact" className="flex items-center gap-2 rounded-xl bg-linear-to-r from-cyan-400 to-blue-500 px-6 py-3 font-semibold text-slate-950 transition hover:opacity-90">
              Work With Me <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/#projects" className="rounded-xl border border-slate-700 px-6 py-3 font-semibold text-slate-200 transition hover:border-cyan-500/50 hover:text-cyan-300">
              View Projects
            </Link>
          </div>
          <p className="mt-6 flex items-center gap-2 text-sm text-slate-500">
            <MapPin className="h-4 w-4" /> {profile.location} · {profile.availability}
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.15 }} className="glass-card rounded-3xl p-6">
          <div className="relative mx-auto mb-6 h-40 w-40 overflow-hidden rounded-2xl border border-slate-700">
            <Image src={profile.photo} alt={profile.name} fill className="object-cover object-top" priority />
          </div>
          <dl className="grid grid-cols-2 gap-3">
            {profile.highlights.map((h) => (
              <div key={h.label} className="rounded-xl border border-slate-700/50 bg-slate-900/50 p-3">
                <dt className="text-xs uppercase tracking-wide text-slate-500">{h.label}</dt>
                <dd className="mt-1 text-sm font-medium text-slate-100">{h.value}</dd>
              </div>
            ))}
          </dl>
        </motion.div>
      </div>
    </section>
  );
}

function Problems() {
  return (
    <Section className="bg-slate-950/40">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr]">
        <div>
          <SectionHeader
            eyebrow="Problems I Solve"
            title="I turn AI ideas into systems teams can actually rely on."
            text="Model calls are the easy part. The real work is backend architecture, workflow design, security, and a deployment path that holds up in production."
          />
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {problems.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <div className="experience-item h-full">
                <AlertTriangle className="mb-3 h-5 w-5 text-cyan-400" />
                <h3 className="font-semibold text-white">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}

function Build() {
  return (
    <Section id="build">
      <SectionHeader eyebrow="What I Build" title="Engineering capabilities organized around outcomes." />
      <div className="grid gap-6 md:grid-cols-2">
        {capabilities.map((c, i) => {
          const Icon = icons[c.icon as keyof typeof icons];
          return (
            <Reveal key={c.title} delay={i * 0.08}>
              <div className="glass-card hover-lift h-full rounded-2xl p-7">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-white">{c.title}</h3>
                <dl className="mt-4 space-y-3 text-sm leading-relaxed">
                  <div><dt className="inline font-semibold text-slate-200">Problem: </dt><dd className="inline text-slate-400">{c.problem}</dd></div>
                  <div><dt className="inline font-semibold text-slate-200">Solution: </dt><dd className="inline text-slate-400">{c.solution}</dd></div>
                  <div><dt className="inline font-semibold text-cyan-300">Impact: </dt><dd className="inline text-slate-400">{c.impact}</dd></div>
                </dl>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}

function Projects() {
  return (
    <Section id="projects" className="bg-slate-950/40">
      <SectionHeader
        eyebrow="Featured Case Studies"
        title="Production-style platforms with real roles, data, and workflows."
        text="Each project shows how I translate an operational problem into architecture, interfaces, and a deployed product."
      />
      <div className="space-y-6">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.05}>
            <article className="glass-card grid gap-6 rounded-2xl p-7 md:grid-cols-[1fr_1.4fr]">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-cyan-400">{p.role}</p>
                <h3 className="mt-2 text-2xl font-bold text-white">{p.title}</h3>
                <p className="mt-3 leading-relaxed text-slate-400">{p.summary}</p>
                <div className="mt-4 flex flex-wrap gap-2">{p.tech.map((t) => <Tag key={t}>{t}</Tag>)}</div>
                <a href={p.url} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 font-semibold text-cyan-400 hover:text-cyan-300">
                  View Project <ExternalLink className="h-4 w-4" />
                </a>
              </div>
              <div className="grid gap-3">
                {[["Challenge", p.challenge], ["Solution", p.solution], ["Outcome", p.outcome]].map(([k, v]) => (
                  <div key={k} className="rounded-xl border border-slate-700/50 bg-slate-900/50 p-4">
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">{k}</p>
                    <p className="mt-1 text-sm leading-relaxed text-slate-300">{v}</p>
                  </div>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function Skills() {
  return (
    <Section id="skills">
      <SectionHeader eyebrow="Technical Capabilities" title="A capability map for AI automation and full-stack delivery." />
      <div className="grid gap-6 md:grid-cols-2">
        {skillGroups.map((g, i) => (
          <Reveal key={g.title} delay={i * 0.08}>
            <div className="experience-item h-full p-6">
              <h3 className="text-lg font-semibold text-white">{g.title}</h3>
              <p className="mt-2 text-sm text-slate-400">{g.text}</p>
              <div className="mt-4 flex flex-wrap gap-2">{g.items.map((s) => <span key={s} className="skill-tag">{s}</span>)}</div>
              <ul className="mt-4 space-y-1.5">
                {g.points.map((pt) => (
                  <li key={pt} className="flex items-center gap-2 text-sm text-slate-300">
                    <Check className="h-4 w-4 text-cyan-400" /> {pt}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function Services() {
  return (
    <Section className="bg-slate-950/40">
      <SectionHeader eyebrow="Services" title="Focused engagements for teams that need production outcomes." center />
      <div className="grid gap-6 md:grid-cols-3">
        {services.map((s, i) => (
          <Reveal key={s.title} delay={i * 0.08}>
            <div className="glass-card hover-lift flex h-full flex-col rounded-2xl p-7">
              <h3 className="text-xl font-semibold text-white">{s.title}</h3>
              <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-slate-500">Best for</p>
              <p className="mt-1 text-sm text-slate-300">{s.bestFor}</p>
              <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-slate-500">Deliverables</p>
              <ul className="mt-2 space-y-1.5">
                {s.deliverables.map((d) => (
                  <li key={d} className="flex items-start gap-2 text-sm text-slate-300">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400" /> {d}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function Experience() {
  return (
    <Section id="experience">
      <SectionHeader eyebrow="Experience" title="Technical ownership from architecture to deployment." />
      <div className="relative space-y-10 border-l border-slate-800 pl-8">
        {experience.map((e) => (
          <Reveal key={e.role}>
            <div className="relative">
              <span className="absolute -left-[41px] top-1.5 h-4 w-4 rounded-full border-4 border-slate-950 bg-cyan-400" />
              <p className="text-sm font-medium text-cyan-400">{e.period}</p>
              <h3 className="mt-1 text-xl font-semibold text-white">{e.role}</h3>
              {e.org && <p className="text-slate-400">{e.org}</p>}
              <ul className="mt-4 space-y-2">
                {e.points.map((pt) => (
                  <li key={pt} className="flex gap-3 text-sm leading-relaxed text-slate-300">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-500" /> {pt}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function Credentials() {
  return (
    <Section id="credentials" className="bg-slate-950/40">
      <SectionHeader
        eyebrow="Credentials"
        title="Certifications and education behind the work."
        text="Certificates support the work — the projects above show how I apply it."
      />
      <div className="grid gap-6 md:grid-cols-3">
        {credentials.map((c, i) => (
          <Reveal key={c.title} delay={i * 0.08}>
            <article className="glass-card hover-lift flex h-full flex-col overflow-hidden rounded-2xl">
              <a href={c.file} target="_blank" rel="noreferrer" className="relative block aspect-[1.41/1] bg-white" aria-label={`Open ${c.title} certificate`}>
                <Image src={c.image} alt={`${c.title} certificate`} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-contain" />
              </a>
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-start gap-3">
                  <Award className="mt-0.5 h-5 w-5 shrink-0 text-cyan-400" />
                  <h3 className="font-semibold leading-snug text-white">{c.title}</h3>
                </div>
                <p className="mt-2 text-sm text-cyan-300">{c.issuer}</p>
                {(c.date || c.certNo) && (
                  <p className="mt-1 text-xs text-slate-500">
                    {c.date}{c.date && c.certNo && " · "}{c.certNo && `Cert No. ${c.certNo}`}
                  </p>
                )}
                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-400">{c.text}</p>
                <a href={c.file} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300">
                  View Certificate <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
      <Reveal>
        <div className="experience-item mt-6 flex gap-4">
          <GraduationCap className="h-8 w-8 shrink-0 text-cyan-400" />
          <div>
            <h3 className="font-semibold text-white">{education.title}</h3>
            <p className="text-sm text-cyan-300">{education.school}</p>
            <p className="mt-2 text-sm text-slate-400">{education.text}</p>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}

function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <Section>
      <SectionHeader eyebrow="FAQ" title="Questions people usually ask first." center />
      <div className="mx-auto max-w-3xl space-y-3">
        {faqs.map((f, i) => (
          <div key={f.q} className="experience-item p-0">
            <button onClick={() => setOpen(open === i ? null : i)} className="flex w-full items-center justify-between gap-4 p-5 text-left">
              <span className="font-semibold text-white">{f.q}</span>
              <ChevronDown className={`h-5 w-5 shrink-0 text-cyan-400 transition-transform ${open === i ? "rotate-180" : ""}`} />
            </button>
            {open === i && <p className="px-5 pb-5 text-sm leading-relaxed text-slate-400">{f.a}</p>}
          </div>
        ))}
      </div>
    </Section>
  );
}

function Contact() {
  return (
    <Section id="contact">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-cyan-500/20 bg-linear-to-br from-cyan-500/10 via-slate-900 to-blue-500/10 p-10 text-center md:p-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">Work With Me</p>
          <h2 className="mx-auto max-w-2xl text-3xl font-bold text-white md:text-4xl">Have an automation, AI agent, or product to build?</h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-400">
            Share the problem, the users, and the systems involved — I&apos;ll help shape the architecture and build it to production.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a href={`mailto:${profile.email}`} className="flex items-center gap-2 rounded-xl bg-linear-to-r from-cyan-400 to-blue-500 px-6 py-3 font-semibold text-slate-950 hover:opacity-90">
              <Mail className="h-4 w-4" /> Email Me
            </a>
            <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded-xl border border-slate-700 px-6 py-3 font-semibold text-slate-200 hover:border-cyan-500/50">
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
            <a href={profile.socials.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded-xl border border-slate-700 px-6 py-3 font-semibold text-slate-200 hover:border-cyan-500/50">
              <Github className="h-4 w-4" /> GitHub
            </a>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <Problems />
      <Build />
      <Projects />
      <Skills />
      <Services />
      <Experience />
      <Credentials />
      <Faq />
      <Contact />
    </>
  );
}
