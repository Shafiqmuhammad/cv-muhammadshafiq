

"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Globe,
  MapPin,
  Linkedin,
  ExternalLink,
  Github,
  Download,
} from "lucide-react";
import { useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { QRCodeCanvas } from "qrcode.react";
import Image from "next/image";

function Cv() {
  const cvRef = useRef<HTMLDivElement>(null);

  const downloadPDF = async () => {
    if (!cvRef.current) return;

    const button = document.querySelector(".download-button");
    if (button) (button as HTMLElement).style.display = "none";

    try {
      const element = cvRef.current;
      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        allowTaint: false,
        backgroundColor: "#0a0a0f",
      });

      const imgData = canvas.toDataURL("image/png", 1.0);
      const imgWidth = 210;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      const pdf = new jsPDF({
        orientation: imgHeight > imgWidth ? "portrait" : "landscape",
        unit: "mm",
        format: "a4",
      });

      pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight, undefined, "FAST");
      pdf.save("Muhammad_Shafiq_Resume_US_Level4.pdf");
    } catch (error) {
      console.error("Error generating PDF:", error);
    } finally {
      if (button) (button as HTMLElement).style.display = "flex";
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
  };

  const itemVariants = {
    hidden: { y: 14, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.45 } },
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-slate-950 py-12 px-4 overflow-x-hidden">
      {/* Download */}
      <motion.button
        onClick={downloadPDF}
        className="download-button fixed top-6 right-6 z-50 glass-card px-6 py-3 rounded-xl flex items-center gap-2 text-cyan-400 font-semibold hover:bg-cyan-500/20 transition-all duration-300 hover:scale-105 border-cyan-500/30"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Download className="w-5 h-5" />
        Download PDF
      </motion.button>

      <motion.div
        ref={cvRef}
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="max-w-5xl mx-auto"
      >
        {/* HEADER */}
        <motion.div
          variants={itemVariants}
          className="glass-card rounded-3xl p-8 md:p-12 mb-8 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-linear-to-br from-cyan-500/5 via-transparent to-blue-500/5 pointer-events-none" />

          <div className="relative z-10">
            <motion.div
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, type: "spring" }}
              className="flex flex-col md:flex-row items-center gap-8 mb-8"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-linear-to-r from-cyan-500 to-blue-500 rounded-full blur-2xl opacity-40 animate-pulse" />
                <Image
                  width={222}
                  height={222}
                  src="/shafiq.png"
                  alt="Muhammad Shafiq"
                  className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-cyan-500/30 relative z-10 shadow-2xl shadow-cyan-500/20"
                />
              </div>

              <div className="text-center md:text-left flex-1">
                <motion.h1
                  className="text-4xl md:text-6xl font-bold text-white mb-2"
                  initial={{ x: -40, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.15 }}
                >
                  MUHAMMAD SHAFIQ
                </motion.h1>

                {/* ✅ Level-4 aligned title */}
                <motion.p className="text-xl md:text-2xl text-cyan-400 font-semibold mb-2">
                  Senior Full-Stack Engineer | AI Automation Engineer (Python • Next.js • APIs)
                </motion.p>

                {/* ✅ Level-4 aligned positioning statement */}
                <motion.p className="text-slate-400 text-sm md:text-base italic">
                  Architecting production-grade systems: LLM automation, secure APIs, scalable cloud deployments, and performance optimization.
                </motion.p>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap justify-center md:justify-start gap-4 text-sm text-slate-300"
            >
              <a href="mailto:shafiq00786@hotmail.com" className="contact-link">
                <Mail className="w-4 h-4" />
                shafiq00786@hotmail.com
              </a>

              <a
                href="https://cv-muhammadshafiq.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                <Globe className="w-4 h-4" />
                Portfolio
              </a>

              <span className="contact-link">
                <MapPin className="w-4 h-4" />
                Rawalpindi, Pakistan (Open to U.S. relocation/remote)
              </span>

              <a
                href="https://linkedin.com/in/muhammad-shafiq-jamstack-architect-web3-metaverse-developer-generative-ai"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
            </motion.div>
          </div>
        </motion.div>

        {/* SUMMARY + TARGET ROLE */}
        <div className="grid md:grid-cols-2 gap-6">
          <motion.div variants={itemVariants} className="glass-card rounded-2xl p-6 hover-lift">
            <h2 className="section-title">Professional Summary</h2>
            <p className="text-slate-300 leading-relaxed">
              Senior Full-Stack Engineer specializing in architecture-level delivery of AI-driven web
              systems. Experienced in designing secure APIs, scaling backend services, and deploying
              cloud-ready applications. Operates with minimal supervision, exercises independent
              judgment on technical approaches, and partners with stakeholders to deliver production-grade solutions.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="glass-card rounded-2xl p-6 hover-lift">
            <h2 className="section-title">Target Role & Value Proposition</h2>
            <p className="text-slate-300 leading-relaxed">
              Targeting Senior/Lead roles where I can own system design, performance, and reliability.
              Strengths include LLM automation workflows, backend architecture, and end-to-end delivery
              (requirements → implementation → deployment → post-release improvement).
            </p>
          </motion.div>
        </div>

        {/* EXPERIENCE */}
        <motion.div variants={itemVariants} className="glass-card rounded-2xl p-6 mt-6 hover-lift">
          <h2 className="section-title">Professional Experience</h2>

          <div className="space-y-6">
            <div className="experience-item">
              <h3 className="text-xl font-bold text-white mb-1">Senior Full-Stack Engineer (AI Automation)</h3>
              <p className="text-cyan-400 text-sm mb-3">2023 – Present</p>
              <ul className="text-slate-300 space-y-2 list-disc list-inside">
                <li>
                  Architected and delivered AI-native systems integrating LLMs, APIs, and data stores for automation workflows
                  (prompting, orchestration, tool-use, and guardrails).
                </li>
                <li>
                  Designed secure backend services using FastAPI, implementing authentication/authorization, rate-limits, and structured logging.
                </li>
                <li>
                  Led architecture decisions for system components (API contracts, data modeling, integration patterns), documenting standards and deployment runbooks.
                </li>
                <li>
                  Improved reliability and performance via caching strategies, async processing, and API optimization (reduced latency and improved responsiveness).
                </li>
                <li>
                  Provided technical guidance via code reviews and implementation patterns to maintain quality and consistency across features.
                </li>
              </ul>
            </div>

            <div className="experience-item">
              <h3 className="text-xl font-bold text-white mb-1">Full-Stack Engineer (Python + Next.js)</h3>
              <p className="text-cyan-400 text-sm mb-3">2021 – 2023</p>
              <ul className="text-slate-300 space-y-2 list-disc list-inside">
                <li>
                  Designed and built full-stack applications using Next.js/TypeScript and Python services, including dashboards and admin portals.
                </li>
                <li>
                  Developed REST/GraphQL APIs, authentication systems, and integrations with cloud services and third-party platforms.
                </li>
                <li>
                  Owned feature lifecycles from requirements to deployment, balancing delivery timelines with maintainability and performance.
                </li>
                <li>
                  Optimized database queries and backend endpoints to support scalable workflows and data-driven user experiences.
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* SCOPE OF AUTHORITY (Level-4 proof) */}
        <motion.div variants={itemVariants} className="glass-card rounded-2xl p-6 mt-6 hover-lift">
          <h2 className="section-title">Scope of Authority & Responsibility</h2>
          <ul className="text-slate-300 space-y-2 list-disc list-inside">
            <li>Independently owned system design and implementation decisions for key application components.</li>
            <li>Exercised discretion in selecting tools, frameworks, and technical approaches with minimal supervision.</li>
            <li>Accountable for production readiness, deployment standards, performance, and long-term maintainability.</li>
            <li>Influenced engineering standards through documentation, code review practices, and reusable patterns.</li>
          </ul>
        </motion.div>

        {/* SKILLS */}
        <motion.div variants={itemVariants} className="glass-card rounded-2xl p-6 mt-6 hover-lift">
          <h2 className="section-title">Technical Skills</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="skill-category">
              <h3 className="text-lg font-bold text-cyan-400 mb-3">AI Systems & Automation</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "OpenAI Agent SDK",
                  "LangChain",
                  "CrewAI",
                  "LangGraph",
                  "Anthropic MCP",
                  "Prompt Engineering",
                  "Tool-Use / Function Calling",
                  "RAG (Foundations)",
                  "FastAPI",
                ].map((skill) => (
                  <span key={skill} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="skill-category">
              <h3 className="text-lg font-bold text-cyan-400 mb-3">Backend & Data</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Python",
                  "FastAPI",
                  "TypeScript",
                  "Next.js",
                  "Node.js",
                  "PostgreSQL",
                  "Supabase",
                  "Redis",
                  "Docker",
                  "GitHub Actions",
                  "CI/CD",
                ].map((skill) => (
                  <span key={skill} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="skill-category">
              <h3 className="text-lg font-bold text-cyan-400 mb-3">Frontend Engineering</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "React",
                  "Tailwind CSS",
                  "Framer Motion",
                  "shadcn/ui",
                  "Component Architecture",
                  "Performance Tuning",
                  "Responsive Design",
                ].map((skill) => (
                  <span key={skill} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="skill-category">
              <h3 className="text-lg font-bold text-cyan-400 mb-3">Cloud, Delivery & Ops</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "AWS (EC2, S3)",
                  "Vercel",
                  "Railway",
                  "Supabase",
                  "Linux",
                  "Observability (Logs/Metrics)",
                  "Deployment Runbooks",
                  "Git",
                ].map((skill) => (
                  <span key={skill} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* PROJECTS */}
        <motion.div variants={itemVariants} className="glass-card rounded-2xl p-6 mt-6 hover-lift">
          <h2 className="section-title">Selected Projects (Architecture & Impact)</h2>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="project-card">
              <h3 className="text-lg font-bold text-white mb-2">Smart Society Portal</h3>
              <p className="text-slate-300 text-sm mb-3">
                Architected a community management platform with role-based modules (resident, management, admin),
                secure authentication, and operational workflows.
              </p>
              <a
                href="https://smart-society-teal.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-all duration-300"
              >
                <ExternalLink className="w-4 h-4" />
                Visit Live Project
              </a>
            </div>

            <div className="project-card">
              <h3 className="text-lg font-bold text-white mb-2">Hospital Management System</h3>
              <p className="text-slate-300 text-sm mb-3">
                Designed a platform for patient records, appointment scheduling, and staff coordination with scalable data
                operations and secure role-based access.
              </p>
              <a
                href="https://hospital-mgmt-system-orcin.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-all duration-300"
              >
                <ExternalLink className="w-4 h-4" />
                Visit Live Project
              </a>
            </div>

            <div className="project-card">
              <h3 className="text-lg font-bold text-white mb-2">University LMS Portal</h3>
              <p className="text-slate-300 text-sm mb-3">
                Built an LMS with Next.js + Supabase enabling course delivery, student tracking, and automation-ready workflows
                for grading and analytics.
              </p>
              <a
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-all duration-300"
              >
                <ExternalLink className="w-4 h-4" />
                Visit Live Project
              </a>
            </div>
          </div>
        </motion.div>

        {/* EDUCATION */}
        <motion.div variants={itemVariants} className="glass-card rounded-2xl p-6 mt-6 hover-lift">
          <h2 className="section-title">Education</h2>
          <div className="mb-2">
            <h3 className="text-xl font-bold text-white mb-1">BS in Computer Science (In Progress)</h3>
            <p className="text-cyan-400 mb-3">University of the People</p>
            <p className="text-slate-300 text-sm font-semibold mb-2">Relevant Coursework:</p>
            <div className="flex flex-wrap gap-2">
              {[
                "AI-Native Software Development",
                "Agentic AI Systems",
                "Generative AI",
                "Machine Learning (Foundations)",
                "Data Analytics",
                "Python Programming",
              ].map((course) => (
                <span key={course} className="skill-tag">
                  {course}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* FOOTER */}
        <motion.div variants={itemVariants} className="glass-card rounded-2xl p-6 mt-6 text-center hover-lift">
          <div className="flex flex-col items-center gap-4">
            <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-300">
              <a
                href="https://cv-muhammadshafiq.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                <ExternalLink className="w-4 h-4" />
                Visit Portfolio
              </a>
              <a
                href="https://github.com/Shafiqmuhammad"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                <Github className="w-4 h-4" />
                GitHub Profile
              </a>
            </div>

            <div className="glass-card p-4 rounded-xl bg-white/5">
              <QRCodeCanvas
                value="https://cv-muhammadshafiq.vercel.app/"
                size={120}
                bgColor="transparent"
                fgColor="#22d3ee"
                className="rounded-lg"
              />
              <p className="text-xs text-slate-400 mt-2">Scan to view portfolio</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="text-center mt-8 text-slate-500 text-sm"
        >
          <p>© 2026 Muhammad Shafiq. All rights reserved.</p>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Cv;


// "use client";

// import { motion } from "framer-motion";
// import {
//   Mail,
//   Globe,
//   MapPin,
//   Linkedin,
//   ExternalLink,
//   Github,
// } from "lucide-react";
// import { useRef } from "react";
// import { QRCodeCanvas } from "qrcode.react";
// import Image from "next/image";

// function Cv() {
//   const cvRef = useRef<HTMLDivElement>(null);

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
//   };

//   const itemVariants = {
//     hidden: { y: 14, opacity: 0 },
//     visible: { y: 0, opacity: 1, transition: { duration: 0.45 } },
//   };

//   return (
//     <div className="min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-slate-950 py-12 px-4 overflow-x-hidden">
//       <motion.div
//         ref={cvRef}
//         initial="hidden"
//         animate="visible"
//         variants={containerVariants}
//         className="max-w-5xl mx-auto"
//       >
//         {/* HEADER */}
//         <motion.div
//           variants={itemVariants}
//           className="glass-card rounded-3xl p-8 md:p-12 mb-8 relative overflow-hidden"
//         >
//           <div className="absolute inset-0 bg-linear-to-br from-cyan-500/5 via-transparent to-blue-500/5 pointer-events-none" />

//           <div className="relative z-10">
//             <motion.div
//               initial={{ scale: 0.6, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               transition={{ duration: 0.6, type: "spring" }}
//               className="flex flex-col md:flex-row items-center gap-8 mb-8"
//             >
//               <div className="relative">
//                 <div className="absolute inset-0 bg-linear-to-r from-cyan-500 to-blue-500 rounded-full blur-2xl opacity-40 animate-pulse" />
//                 <Image
//                   width={222}
//                   height={222}
//                   src="/shafiq.png"
//                   alt="Muhammad Shafiq"
//                   className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-cyan-500/30 relative z-10 shadow-2xl shadow-cyan-500/20"
//                 />
//               </div>

//               <div className="text-center md:text-left flex-1">
//                 <motion.h1
//                   className="text-4xl md:text-6xl font-bold text-white mb-2"
//                   initial={{ x: -40, opacity: 0 }}
//                   animate={{ x: 0, opacity: 1 }}
//                   transition={{ delay: 0.15 }}
//                 >
//                   MUHAMMAD SHAFIQ
//                 </motion.h1>

//                 {/* ✅ Data Science focused title */}
//                 <motion.p className="text-xl md:text-2xl text-cyan-400 font-semibold mb-2">
//                   Python Developer | Data Science & AI | ML Pipelines • Analytics • Backend Systems
//                 </motion.p>

//                 {/* ✅ Data Science positioning statement */}
//                 <motion.p className="text-slate-400 text-sm md:text-base italic">
//                   Building data-driven systems: ML automation, analytics pipelines, AI workflows, and scalable cloud deployments.
//                 </motion.p>
//               </div>
//             </motion.div>

//             <motion.div
//               variants={itemVariants}
//               className="flex flex-wrap justify-center md:justify-start gap-4 text-sm text-slate-300"
//             >
//               <a href="mailto:shafiq00786@hotmail.com" className="contact-link">
//                 <Mail className="w-4 h-4" />
//                 shafiq00786@hotmail.com
//               </a>

//               <a
//                 href="https://cv-muhammadshafiq.vercel.app/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="contact-link"
//               >
//                 <Globe className="w-4 h-4" />
//                 Portfolio
//               </a>

//               <span className="contact-link">
//                 <MapPin className="w-4 h-4" />
//                 Rawalpindi, Pakistan (Open to U.S. relocation / Remote)
//               </span>

//               <a
//                 href="https://linkedin.com/in/muhammad-shafiq-jamstack-architect-web3-metaverse-developer-generative-ai"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="contact-link"
//               >
//                 <Linkedin className="w-4 h-4" />
//                 LinkedIn
//               </a>
//             </motion.div>
//           </div>
//         </motion.div>

//         {/* SUMMARY + TARGET ROLE */}
//         <div className="grid md:grid-cols-2 gap-6">
//           <motion.div variants={itemVariants} className="glass-card rounded-2xl p-6 hover-lift">
//             <h2 className="section-title">Professional Summary</h2>
//             <p className="text-slate-300 leading-relaxed">
//               Python developer and data science practitioner with hands-on experience building
//               AI-driven systems, analytics pipelines, and data-intensive backend services.
//               Skilled in transforming raw data into actionable insights through ML workflows,
//               structured APIs, and cloud-ready deployments. Operates independently with strong
//               judgment on technical approaches and a track record of production-grade delivery.
//             </p>
//           </motion.div>

//           <motion.div variants={itemVariants} className="glass-card rounded-2xl p-6 hover-lift">
//             <h2 className="section-title">Value Proposition for Data Science Roles</h2>
//             <p className="text-slate-300 leading-relaxed">
//               Combining strong Python engineering with ML foundations, LLM automation, and
//               real-world data system design. Experienced in end-to-end delivery: data modeling →
//               pipeline development → API integration → deployment → monitoring. Available for
//               remote collaboration or U.S.-based opportunities.
//             </p>
//           </motion.div>
//         </div>

//         {/* SKILLS — Data Science first */}
//         <motion.div variants={itemVariants} className="glass-card rounded-2xl p-6 mt-6 hover-lift">
//           <h2 className="section-title">Technical Skills</h2>

//           <div className="grid md:grid-cols-2 gap-6">

//             {/* 1. Data Science & ML — MOVED TO TOP */}
//             <div className="skill-category">
//               <h3 className="text-lg font-bold text-cyan-400 mb-3">Data Science & Machine Learning</h3>
//               <div className="flex flex-wrap gap-2">
//                 {[
//                   "Python (Data)",
//                   "Data Analytics",
//                   "ML Foundations",
//                   "RAG Pipelines",
//                   "LangChain",
//                   "LangGraph",
//                   "Prompt Engineering",
//                   "Tool-Use / Function Calling",
//                   "OpenAI Agent SDK",
//                   "CrewAI",
//                   "Anthropic MCP",
//                 ].map((skill) => (
//                   <span key={skill} className="skill-tag">
//                     {skill}
//                   </span>
//                 ))}
//               </div>
//             </div>

//             {/* 2. Backend & Data Infrastructure */}
//             <div className="skill-category">
//               <h3 className="text-lg font-bold text-cyan-400 mb-3">Backend & Data Infrastructure</h3>
//               <div className="flex flex-wrap gap-2">
//                 {[
//                   "Python",
//                   "FastAPI",
//                   "PostgreSQL",
//                   "Supabase",
//                   "Redis",
//                   "TypeScript",
//                   "Next.js",
//                   "Node.js",
//                   "Docker",
//                   "GitHub Actions",
//                   "CI/CD",
//                 ].map((skill) => (
//                   <span key={skill} className="skill-tag">
//                     {skill}
//                   </span>
//                 ))}
//               </div>
//             </div>

//             {/* 3. Cloud & Deployment */}
//             <div className="skill-category">
//               <h3 className="text-lg font-bold text-cyan-400 mb-3">Cloud, Delivery & Ops</h3>
//               <div className="flex flex-wrap gap-2">
//                 {[
//                   "AWS (EC2, S3)",
//                   "Vercel",
//                   "Railway",
//                   "Supabase",
//                   "Linux",
//                   "Observability (Logs/Metrics)",
//                   "Deployment Runbooks",
//                   "Git",
//                 ].map((skill) => (
//                   <span key={skill} className="skill-tag">
//                     {skill}
//                   </span>
//                 ))}
//               </div>
//             </div>

//             {/* 4. Frontend Engineering */}
//             <div className="skill-category">
//               <h3 className="text-lg font-bold text-cyan-400 mb-3">Frontend Engineering</h3>
//               <div className="flex flex-wrap gap-2">
//                 {[
//                   "React",
//                   "Tailwind CSS",
//                   "Framer Motion",
//                   "shadcn/ui",
//                   "Component Architecture",
//                   "Performance Tuning",
//                   "Responsive Design",
//                 ].map((skill) => (
//                   <span key={skill} className="skill-tag">
//                     {skill}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </motion.div>

//         {/* EXPERIENCE */}
//         <motion.div variants={itemVariants} className="glass-card rounded-2xl p-6 mt-6 hover-lift">
//           <h2 className="section-title">Professional Experience</h2>

//           <div className="space-y-6">
//             <div className="experience-item">
//               <h3 className="text-xl font-bold text-white mb-1">
//                 Python Engineer – AI & Data Systems
//               </h3>
//               <p className="text-cyan-400 text-sm mb-3">2023 – Present</p>
//               <ul className="text-slate-300 space-y-2 list-disc list-inside">
//                 <li>
//                   Built AI-native data pipelines integrating LLMs, APIs, and structured data stores
//                   for intelligent automation (prompting, orchestration, tool-use, and guardrails).
//                 </li>
//                 <li>
//                   Designed analytics-ready backend services using FastAPI with secure authentication,
//                   rate-limiting, and structured logging for reliable data ingestion and retrieval.
//                 </li>
//                 <li>
//                   Owned data modeling and API contract decisions for system components, documenting
//                   standards and deployment runbooks for reproducibility.
//                 </li>
//                 <li>
//                   Improved data pipeline reliability and performance via async processing, caching
//                   strategies, and query optimization — reducing latency and improving throughput.
//                 </li>
//                 <li>
//                   Applied RAG foundations and ML workflow patterns to deliver context-aware,
//                   data-driven features across production systems.
//                 </li>
//               </ul>
//             </div>

//             <div className="experience-item">
//               <h3 className="text-xl font-bold text-white mb-1">
//                 Full-Stack Engineer – Data-Driven Applications (Python + Next.js)
//               </h3>
//               <p className="text-cyan-400 text-sm mb-3">2021 – 2023</p>
//               <ul className="text-slate-300 space-y-2 list-disc list-inside">
//                 <li>
//                   Built data-driven dashboards and admin portals using Next.js/TypeScript and Python
//                   services, enabling real-time insights and operational workflows.
//                 </li>
//                 <li>
//                   Developed REST/GraphQL APIs for structured data access, integrating with cloud
//                   services, third-party platforms, and relational databases.
//                 </li>
//                 <li>
//                   Optimized PostgreSQL queries and backend endpoints to support scalable,
//                   data-intensive workflows and analytics-driven user experiences.
//                 </li>
//                 <li>
//                   Owned feature delivery from requirements to deployment, balancing data quality,
//                   maintainability, and performance at each stage.
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </motion.div>

//         {/* PROJECTS — reframed for data science */}
//         <motion.div variants={itemVariants} className="glass-card rounded-2xl p-6 mt-6 hover-lift">
//           <h2 className="section-title">Selected Projects (Data & Analytics Focus)</h2>

//           <div className="grid md:grid-cols-2 gap-4">
//             <div className="project-card">
//               <h3 className="text-lg font-bold text-white mb-2">Hospital Management System</h3>
//               <p className="text-slate-300 text-sm mb-3">
//                 Designed a data platform for patient records, appointment scheduling, and staff
//                 coordination — featuring structured data modeling, analytics-ready schema, scalable
//                 operations, and secure role-based data access.
//               </p>
//               <a
//                 href="https://hospital-mgmt-system-orcin.vercel.app/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-all duration-300"
//               >
//                 <ExternalLink className="w-4 h-4" />
//                 Visit Live Project
//               </a>
//             </div>

//             <div className="project-card">
//               <h3 className="text-lg font-bold text-white mb-2">University LMS Portal</h3>
//               <p className="text-slate-300 text-sm mb-3">
//                 Built a learning management system with Next.js + Supabase featuring student
//                 performance tracking, grading automation, and analytics-ready workflows for
//                 course delivery insights and reporting.
//               </p>
//               <a
//                 href="/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-all duration-300"
//               >
//                 <ExternalLink className="w-4 h-4" />
//                 Visit Live Project
//               </a>
//             </div>

//             <div className="project-card">
//               <h3 className="text-lg font-bold text-white mb-2">Smart Society Portal</h3>
//               <p className="text-slate-300 text-sm mb-3">
//                 Architected a community management platform with role-based data modules (resident,
//                 management, admin), secure authentication, and operational data workflows supporting
//                 multi-stakeholder reporting.
//               </p>
//               <a
//                 href="https://smart-society-teal.vercel.app/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-all duration-300"
//               >
//                 <ExternalLink className="w-4 h-4" />
//                 Visit Live Project
//               </a>
//             </div>
//           </div>
//         </motion.div>

//         {/* EDUCATION — coursework prominent */}
//         <motion.div variants={itemVariants} className="glass-card rounded-2xl p-6 mt-6 hover-lift">
//           <h2 className="section-title">Education</h2>
//           <div className="space-y-6">
//             {/* UWF Cybersecurity Certificate */}
//             <div>
//               <h3 className="text-xl font-bold text-white mb-1">
//                 Cybersecurity Certificate Program (In Progress)
//               </h3>
//               <p className="text-cyan-400 mb-1">University of West Florida (UWF)</p>
//               <p className="text-slate-400 text-sm italic">
//                 Focused on cybersecurity principles, threat analysis, and secure system design
//               </p>
//             </div>

//             {/* Divider */}
//             <div className="border-t border-slate-700/50" />

//             {/* BS Computer Science */}
//             <div>
//               <h3 className="text-xl font-bold text-white mb-1">BS in Computer Science (In Progress)</h3>
//               <p className="text-cyan-400 mb-1">University of the People</p>
//               <p className="text-slate-400 text-sm mb-3 italic">
//                 Relevant to Data Science & AI roles
//               </p>
//               <p className="text-slate-300 text-sm font-semibold mb-2">Relevant Coursework:</p>
//               <div className="flex flex-wrap gap-2">
//                 {[
//                   "Data Analytics",
//                   "Machine Learning (Foundations)",
//                   "Python Programming",
//                   "AI-Native Software Development",
//                   "Agentic AI Systems",
//                   "Generative AI",
//                 ].map((course) => (
//                   <span key={course} className="skill-tag">
//                     {course}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </motion.div>

//         {/* SCOPE OF AUTHORITY */}
//         <motion.div variants={itemVariants} className="glass-card rounded-2xl p-6 mt-6 hover-lift">
//           <h2 className="section-title">Scope of Authority & Responsibility</h2>
//           <ul className="text-slate-300 space-y-2 list-disc list-inside">
//             <li>Independently owned data system design and implementation decisions for key application components.</li>
//             <li>Exercised discretion in selecting tools, frameworks, and data approaches with minimal supervision.</li>
//             <li>Accountable for production readiness, deployment standards, data quality, and long-term maintainability.</li>
//             <li>Influenced engineering standards through documentation, code review practices, and reusable data patterns.</li>
//           </ul>
//         </motion.div>

//         {/* FOOTER */}
//         {/* <motion.div variants={itemVariants} className="glass-card rounded-2xl p-6 mt-6 text-center hover-lift ">
//           <div className="flex flex-col items-center gap-4 ">
//             <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-300">
//               <a
//                 href="https://cv-muhammadshafiq.vercel.app/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="contact-link"
//               >
//                 <ExternalLink className="w-4 h-4" />
//                 Visit Portfolio
//               </a>
//               <a
//                 href="https://github.com/Shafiqmuhammad"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="contact-link"
//               >
//                 <Github className="w-4 h-4" />
//                 GitHub Profile
//               </a>
//             </div>
//             <div className="glass-card p-4 rounded-xl bg-white/5 ">
//               <QRCodeCanvas
//                 value="https://cv-muhammadshafiq.vercel.app/"
//                 size={120}
//                 bgColor="transparent"
//                 fgColor="#22d3ee"
//                 className="rounded-lg"
//               />
//               <p className="text-xs text-slate-400 mt-2">Scan to view portfolio</p>
//             </div>

//           </div>


//         </motion.div> */}

//         {/* PROFILE LINKS AND PICTURES */}
//         <motion.div variants={itemVariants} className="glass-card rounded-2xl p-6 mt-6 hover-lift">
//           <h2 className="section-title text-center">PROFILE (LINKS & PICTURE)</h2>

//           <div className="grid md:grid-cols-2 gap-4">
//             <div className="project-card">
//               <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-300">
//                 <a
//                   href="https://cv-muhammadshafiq.vercel.app/"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="contact-link"
//                 >
//                   <ExternalLink className="w-4 h-4" />
//                   Visit Portfolio
//                 </a>
//                 <a
//                   href="https://github.com/Shafiqmuhammad"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="contact-link"
//                 >
//                   <Github className="w-4 h-4" />
//                   GitHub Profile
//                 </a>
//               </div>
//               <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-300">
//                 <div className="glass-card p-4 rounded-xl bg-white/5 ">
//               <QRCodeCanvas
//                 value="https://cv-muhammadshafiq.vercel.app/"
//                 size={120}
//                 bgColor="transparent"
//                 fgColor="#22d3ee"
//                 className="rounded-lg"
//               />
//                   <p className="text-xs text-slate-400 mt-2">Scan to view portfolio</p>
//                 </div>
//               </div>



//             </div>

//             <div className="project-card flex">
//               <div className="absolute inset-0  bg-linear-to-r from-cyan-500 to-blue-500 rounded-full blur-2xl opacity-40 animate-pulse" />
//               <Image
//                 width={222}
//                 height={222}
//                 src="/shafiq1.png"
//                 alt="Muhammad Shafiq"
//                 className="w-40 h-40 md:w-50 md:h-50 rounded-full object-cover border-4 border-cyan-500/30 relative z-10 shadow-2xl shadow-cyan-500/20"
//               />
//             </div>


//           </div>
//         </motion.div>



//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.9 }}
//           className="text-center mt-8 text-slate-500 text-sm"
//         >
//           <p>© 2026 Muhammad Shafiq. All rights reserved.</p>
//         </motion.div>
//       </motion.div>
//     </div>
//   );
// }

// export default Cv;