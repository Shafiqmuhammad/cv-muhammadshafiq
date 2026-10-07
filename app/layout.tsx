import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://cv-muhammadshafiq.vercel.app";
const description =
  "Muhammad Shafiq builds LLM automation workflows, AI agents, secure FastAPI backends, and full-stack Next.js products.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Muhammad Shafiq | Senior Full-Stack & AI Automation Engineer",
  description,
  keywords: [
    "Muhammad Shafiq", "AI Automation Engineer", "Full Stack Developer Pakistan",
    "FastAPI Developer", "Next.js Developer", "LangGraph", "OpenAI Agents SDK", "MCP",
  ],
  alternates: { canonical: siteUrl },
  openGraph: {
    title: "Muhammad Shafiq | Senior Full-Stack & AI Automation Engineer",
    description,
    url: siteUrl,
    siteName: "Muhammad Shafiq",
    images: [{ url: "/shafiq.png", alt: "Muhammad Shafiq" }],
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Muhammad Shafiq", description, images: ["/shafiq.png"] },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
