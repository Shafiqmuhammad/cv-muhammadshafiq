"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Github, Linkedin, Menu, X, FileText } from "lucide-react";
import { navLinks, profile } from "../../data/portfolio";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open ? "border-b border-slate-800/80 bg-slate-950/85 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="relative h-10 w-10 overflow-hidden rounded-xl bg-white">
            <Image src={profile.logo} alt="MS logo" fill className="object-contain p-1" />
          </span>
          <span className="leading-tight">
            <span className="block font-semibold text-white">{profile.name}</span>
            <span className="block text-xs text-slate-400">{profile.shortTitle}</span>
          </span>
        </Link>

        <div className="hidden items-center gap-7 lg:flex">
          {navLinks.map((l) => (
            <Link key={l.href} href={l.href} className="text-sm text-slate-300 transition-colors hover:text-cyan-400">
              {l.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-slate-400 hover:text-cyan-400">
            <Linkedin className="h-5 w-5" />
          </a>
          <a href={profile.socials.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="text-slate-400 hover:text-cyan-400">
            <Github className="h-5 w-5" />
          </a>
          <Link
            href="/resume"
            className="ml-2 flex items-center gap-2 rounded-xl border border-cyan-500/40 px-4 py-2 text-sm font-semibold text-cyan-400 transition hover:bg-cyan-500/10"
          >
            <FileText className="h-4 w-4" /> Resume
          </Link>
        </div>

        <button className="text-slate-200 lg:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-slate-800 px-4 pb-6 lg:hidden">
          <div className="flex flex-col gap-1 pt-3">
            {navLinks.map((l) => (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="rounded-lg px-3 py-2 text-slate-200 hover:bg-slate-800">
                {l.label}
              </Link>
            ))}
            <Link href="/resume" onClick={() => setOpen(false)} className="rounded-lg px-3 py-2 font-semibold text-cyan-400 hover:bg-slate-800">
              Resume
            </Link>
          </div>
          <div className="mt-4 flex gap-4 px-3">
            <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-slate-400">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href={profile.socials.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="text-slate-400">
              <Github className="h-5 w-5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
