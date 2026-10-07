import Link from "next/link";
import { navLinks, profile, services } from "../../data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 px-4 pb-10 pt-16">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="text-lg font-semibold text-white">{profile.name}</p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-slate-400">
            {profile.title} building LLM automation, secure APIs, and full-stack products.
          </p>
          <a href={`mailto:${profile.email}`} className="mt-4 inline-block text-sm text-cyan-400 hover:underline">
            {profile.email}
          </a>
        </div>
        <div>
          <p className="mb-3 text-sm font-semibold text-white">Site</p>
          <ul className="space-y-2 text-sm text-slate-400">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-cyan-400">{l.label}</Link>
              </li>
            ))}
            <li><Link href="/resume" className="hover:text-cyan-400">Resume</Link></li>
          </ul>
        </div>
        <div>
          <p className="mb-3 text-sm font-semibold text-white">Services</p>
          <ul className="space-y-2 text-sm text-slate-400">
            {services.map((s) => (
              <li key={s.title}>{s.title}</li>
            ))}
            <li><a href={profile.socials.linkedin} target="_blank" rel="noreferrer" className="hover:text-cyan-400">LinkedIn</a></li>
            <li><a href={profile.socials.github} target="_blank" rel="noreferrer" className="hover:text-cyan-400">GitHub</a></li>
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-12 flex max-w-6xl flex-col justify-between gap-2 border-t border-slate-800 pt-6 text-xs text-slate-500 md:flex-row">
        <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        <p>{profile.location} · {profile.availability}</p>
      </div>
    </footer>
  );
}
