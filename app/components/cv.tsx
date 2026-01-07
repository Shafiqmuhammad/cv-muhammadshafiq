
// "use client";

// import { motion } from "framer-motion";
// import {
//   Mail,
//   Globe,
//   Phone,
//   MapPin,
//   Linkedin,
//   ExternalLink,
//   Github,
//   Download,
//   Music,
// } from "lucide-react";
// import { useRef } from "react";
// import html2canvas from "html2canvas";
// import jsPDF from "jspdf";
// import { QRCodeCanvas } from "qrcode.react";
// import Image from "next/image";

// function Cv() {
//   const cvRef = useRef<HTMLDivElement>(null);

//   const downloadPDF = async () => {
//     if (!cvRef.current) return;

//     const button = document.querySelector(".download-button");
//     if (button) (button as HTMLElement).style.display = "none";

//     try {
//       const element = cvRef.current;
//       const canvas = await html2canvas(element, {
//         scale: 2,
//         useCORS: true,
//         allowTaint: false,
//         backgroundColor: "#0a0a0f",
//       });

//       const imgData = canvas.toDataURL("image/png", 1.0);
//       const imgWidth = 210;
//       const imgHeight = (canvas.height * imgWidth) / canvas.width;

//       const pdf = new jsPDF({
//         orientation: imgHeight > imgWidth ? "portrait" : "landscape",
//         unit: "mm",
//         format: "a4",
//       });

//       pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight, undefined, "FAST");
//       pdf.save("Muhammad_Shafiq_CV.pdf");
//     } catch (error) {
//       console.error("Error generating PDF:", error);
//     } finally {
//       if (button) (button as HTMLElement).style.display = "flex";
//     }
//   };

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: { staggerChildren: 0.1 },
//     },
//   };

//   const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: { duration: 0.5 },
//     },
//   };

//   return (
//     <div className="min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-slate-950 py-12 px-4 overflow-x-hidden">
//       <motion.button
//         onClick={downloadPDF}
//         className="download-button fixed top-6 right-6 z-50 glass-card px-6 py-3 rounded-xl flex items-center gap-2 text-cyan-400 font-semibold hover:bg-cyan-500/20 transition-all duration-300 hover:scale-105 border-cyan-500/30"
//         whileHover={{ scale: 1.05 }}
//         whileTap={{ scale: 0.95 }}
//       >
//         <Download className="w-5 h-5" />
//         Download PDF
//       </motion.button>

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
//           <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/5 pointer-events-none" />
//           <div className="relative z-10">
//             <motion.div
//               initial={{ scale: 0.5, opacity: 0 }}
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
//                   initial={{ x: -50, opacity: 0 }}
//                   animate={{ x: 0, opacity: 1 }}
//                   transition={{ delay: 0.2 }}
//                 >
//                   MUHAMMAD SHAFIQ
//                 </motion.h1>
//                 <motion.p
//                   className="text-xl md:text-2xl text-cyan-400 font-semibold mb-2"
//                 >
//                   AI-Native Software Developer | Agentic AI Engineer
//                 </motion.p>
//                 <motion.p
//                   className="text-slate-400 text-sm md:text-base italic"
//                 >
//                   Building AI-driven, automation-ready digital ecosystems with Python and Next.js.
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
//                 href="https://muhammad-shafiq00786.vercel.app/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="contact-link"
//               >
//                 <Globe className="w-4 h-4" />
//                 Portfolio
//               </a>
//               {/* ✅ Replaced phone number with TikTok */}
//               <a
//                 href="https://www.tiktok.com/@user2616529099568?_r=1&_t=ZS-91LQpDS8L8k"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="contact-link"
//               >
//                 <Music className="w-4 h-4" />
//                 TikTok
//               </a>
//               {/* <a href="tel:+923316004786" className="contact-link">
//                 <Phone className="w-4 h-4" />
//                 +92 331 6004786
//               </a> */}

//               <span className="contact-link">
//                 <MapPin className="w-4 h-4" />
//                 Rawalpindi, Pakistan
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

//         {/* SUMMARY */}
//         <div className="grid md:grid-cols-2 gap-6">
//           <motion.div variants={itemVariants} className="glass-card rounded-2xl p-6 hover-lift">
//             <h2 className="section-title">Professional Summary</h2>
//             <p className="text-slate-300 leading-relaxed">
//               AI-Native Software Developer with a strong foundation in Python, Agentic AI, and automation.
//               Currently pursuing a BS in Computer Science at the University of the People.
//               Experienced in building intelligent systems that integrate language models, APIs, and full-stack technologies for modern businesses.
//             </p>
//           </motion.div>

//           <motion.div variants={itemVariants} className="glass-card rounded-2xl p-6 hover-lift">
//             <h2 className="section-title">Objective</h2>
//             <p className="text-slate-300 leading-relaxed">
//               To pioneer intelligent applications combining LLM-powered automation and scalable cloud systems — empowering human productivity and creativity through AI-native software.
//             </p>
//           </motion.div>
//         </div>

//         {/* EXPERIENCE */}
//         <motion.div variants={itemVariants} className="glass-card rounded-2xl p-6 mt-6 hover-lift">
//           <h2 className="section-title">Professional Experience</h2>

//           <div className="space-y-6">
//             <div className="experience-item">
//               <h3 className="text-xl font-bold text-white mb-1">AI-Native Software Developer</h3>
//               <p className="text-cyan-400 text-sm mb-3">2023 – Present</p>
//               <ul className="text-slate-300 space-y-2 list-disc list-inside">
//                 <li>Developing AI-native systems following Panaversity’s AI-first methodology.</li>
//                 <li>Built Agentic automation apps integrating OpenAI, LangChain, and Supabase.</li>
//                 <li>Deployed scalable AI backends using FastAPI and modern DevOps practices.</li>
//               </ul>
//             </div>

//             <div className="experience-item">
//               <h3 className="text-xl font-bold text-white mb-1">Full-Stack Developer (Python + Next.js)</h3>
//               <p className="text-cyan-400 text-sm mb-3">2021 – 2023</p>
//               <ul className="text-slate-300 space-y-2 list-disc list-inside">
//                 <li>Built modern applications using Python (FastAPI), TypeScript, and Supabase.</li>
//                 <li>Developed REST/GraphQL APIs, authentication systems, and cloud integrations.</li>
//                 <li>Worked across the stack to deliver responsive, data-driven dashboards.</li>
//               </ul>
//             </div>
//           </div>
//         </motion.div>

//         {/* SKILLS */}
//         <motion.div variants={itemVariants} className="glass-card rounded-2xl p-6 mt-6 hover-lift">
//           <h2 className="section-title">Technical Skills</h2>

//           <div className="grid md:grid-cols-2 gap-6">
//             <div className="skill-category">
//               <h3 className="text-lg font-bold text-cyan-400 mb-3">AI & Automation</h3>
//               <div className="flex flex-wrap gap-2">
//                 {[
//                   "OpenAI Agent SDK",
//                   "LangChain",
//                   "Crew AI",
//                   "LangGraph",
//                   "Anthropic MCP",
//                   "LLM Prompt Engineering",
//                   "Gemini API",
//                   "FastAPI",
//                 ].map((skill) => (
//                   <span key={skill} className="skill-tag">
//                     {skill}
//                   </span>
//                 ))}
//               </div>
//             </div>

//             <div className="skill-category">
//               <h3 className="text-lg font-bold text-cyan-400 mb-3">Programming & Backend</h3>
//               <div className="flex flex-wrap gap-2">
//                 {[
//                   "Python",
//                   "FastAPI",
//                   "TypeScript",
//                   "Next.js",
//                   "Node.js",
//                   "PostgreSQL",
//                   "Supabase",
//                   "Redis",
//                   "Docker",
//                   "GitHub Actions"
//                 ].map((skill) => (
//                   <span key={skill} className="skill-tag">
//                     {skill}
//                   </span>
//                 ))}
//               </div>
//             </div>

//             <div className="skill-category">
//               <h3 className="text-lg font-bold text-cyan-400 mb-3">Frontend & Design</h3>
//               <div className="flex flex-wrap gap-2">
//                 {[
//                   "React",
//                   "Tailwind CSS",
//                   "Framer Motion",
//                   "Shadcn UI",
//                   "UX Strategy",
//                   "Responsive Design"
//                 ].map((skill) => (
//                   <span key={skill} className="skill-tag">
//                     {skill}
//                   </span>
//                 ))}
//               </div>
//             </div>

//             <div className="skill-category">
//               <h3 className="text-lg font-bold text-cyan-400 mb-3">Tools & Cloud</h3>
//               <div className="flex flex-wrap gap-2">
//                 {["Vercel", "Railway", "Supabase", "AWS S3", "Git", "Linux", "CI/CD"].map(
//                   (skill) => (
//                     <span key={skill} className="skill-tag">
//                       {skill}
//                     </span>
//                   )
//                 )}
//               </div>
//             </div>
//           </div>
//         </motion.div>

//         {/* PROJECTS */}
//         {/* <motion.div variants={itemVariants} className="glass-card rounded-2xl p-6 mt-6 hover-lift">
//           <h2 className="section-title">Key Projects</h2>

//           <div className="grid md:grid-cols-2 gap-4">
//             <div className="project-card">
//               <h3 className="text-lg font-bold text-white mb-2">AI Agent Hub</h3>
//               <p className="text-slate-300 text-sm">
//                 Multi-agent orchestration using OpenAI + LangGraph + FastAPI.
//               </p>
//             </div>

//             <div className="project-card">
//               <h3 className="text-lg font-bold text-white mb-2">AI Document Analyzer</h3>
//               <p className="text-slate-300 text-sm">
//                 FastAPI + Gemini pipeline for OCR, anonymization, and report generation.
//               </p>
//             </div>

//             <div className="project-card">
//               <h3 className="text-lg font-bold text-white mb-2">RAG Medical Assistant</h3>
//               <p className="text-slate-300 text-sm">
//                 Streamlit & Groq-powered AI assistant using Supabase vector DB.
//               </p>
//             </div>

//             <div className="project-card">
//               <h3 className="text-lg font-bold text-white mb-2">DevSTRIM ERP Dashboard</h3>
//               <p className="text-slate-300 text-sm">
//                 Next.js + NeonDB ERP platform for SME automation workflows.
//               </p>
//             </div>
//           </div>
//         </motion.div> */}


//         {/* SPEC-DRIVEN PROJECTS */}
//         <motion.div
//           variants={itemVariants}
//           className="glass-card rounded-2xl p-6 mt-6 hover-lift"
//         >
//           <h2 className="section-title">Spec-Driven Projects</h2>

//           <div className="grid md:grid-cols-2 gap-4">
//             <div className="project-card">
//               <h3 className="text-lg font-bold text-white mb-2">Smart Society Portal</h3>
//               <p className="text-slate-300 text-sm mb-3">
//                 An intelligent community management platform integrating resident,
//                 management, and admin modules for seamless operations and communication.
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

//             <div className="project-card">
//               <h3 className="text-lg font-bold text-white mb-2">University LMS Portal</h3>
//               <p className="text-slate-300 text-sm mb-3">
//                 A Next.js + Supabase based Learning Management System for digital
//                 course delivery, student tracking, and AI-assisted grading automation.
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

//               <h3 className="text-lg font-bold text-white mb-2">Hospital Management System</h3>
//               <p className="text-slate-300 text-sm mb-3">
//                 A Next.js + Supabase powered platform for patient record management, appointment
//                 scheduling, staff coordination, and efficient hospital operations.
//               </p>

//               {/*
//               <h3 className="text-lg font-bold text-white mb-2">H1B Visa for companies Portal</h3>
//               <p className="text-slate-300 text-sm mb-3">
//                 A Next.js + Supabase based Learning Management System for digital
//                 course delivery, student tracking, and AI-assisted grading automation.
//               </p> */}
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

//           </div>
//         </motion.div>


//         {/* EDUCATION */}
//         <motion.div variants={itemVariants} className="glass-card rounded-2xl p-6 mt-6 hover-lift">
//           <h2 className="section-title">Education</h2>
//           <div className="mb-4">
//             <h3 className="text-xl font-bold text-white mb-1">BS of Computer Science (in progress)</h3>
//             <p className="text-cyan-400 mb-3">University of the People</p>
//             <p className="text-slate-300 text-sm font-semibold mb-2">
//               Relevant Coursework:
//             </p>
//             <div className="flex flex-wrap gap-2">
//               {[
//                 "AI-Native Software Development (Panaversity)",
//                 "Agentic AI Systems",
//                 "Generative AI",
//                 "Machine Learning",
//                 "Data Analytics",
//                 "Python Programming",
//               ].map((course) => (
//                 <span key={course} className="skill-tag">
//                   {course}
//                 </span>
//               ))}
//             </div>
//           </div>
//         </motion.div>

//         {/* FOOTER */}
//         <motion.div
//           variants={itemVariants}
//           className="glass-card rounded-2xl p-6 mt-6 text-center hover-lift"
//         >
//           <div className="flex flex-col items-center gap-4">
//             <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-300">
//               <a
//                 href="https://muhammad-shafiq00786.vercel.app/"
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
//             <div className="glass-card p-4 rounded-xl bg-white/5">
//               <QRCodeCanvas
//                 value="https://muhammad-shafiq00786.vercel.app/"
//                 size={120}
//                 bgColor="transparent"
//                 fgColor="#22d3ee"
//                 className="rounded-lg"
//               />
//               <p className="text-xs text-slate-400 mt-2">Scan to view portfolio</p>
//             </div>
//           </div>
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 1 }}
//           className="text-center mt-8 text-slate-500 text-sm"
//         >
//           <p>© 2025 Muhammad Shafiq. All rights reserved.</p>
//         </motion.div>
//       </motion.div>
//     </div>
//   );
// }

// export default Cv;


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
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/5 pointer-events-none" />

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
                href="https://muhammad-shafiq00786.vercel.app/"
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
            <h2 className="section-title">Professional Summary (Level-4)</h2>
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
                href="https://muhammad-shafiq00786.vercel.app/"
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
                value="https://muhammad-shafiq00786.vercel.app/"
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
