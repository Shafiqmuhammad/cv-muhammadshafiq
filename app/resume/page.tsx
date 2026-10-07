import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Cv from "../components/cv";

export const metadata: Metadata = {
  title: "Resume | Muhammad Shafiq",
  description: "Resume of Muhammad Shafiq — Senior Full-Stack & AI Automation Engineer.",
};

export default function ResumePage() {
  return (
    <div className="relative">
      <Link
        href="/"
        className="glass-card fixed left-6 top-6 z-50 flex items-center gap-2 rounded-xl px-5 py-3 font-semibold text-slate-200 transition hover:text-cyan-400"
      >
        <ArrowLeft className="h-5 w-5" /> Portfolio
      </Link>
      <Cv />
    </div>
  );
}
