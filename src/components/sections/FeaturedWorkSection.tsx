"use client";

import { motion } from "framer-motion";
import { BookOpen, FileCheck, Layers } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { cvData } from "@/lib/cv-data";

export function FeaturedWorkSection({ lang, dict }: { lang: string, dict: any }) {
  const allProjects = cvData[lang as "en" | "es"].projects;

  const projects = [
    {
      icon: <BookOpen size={16} strokeWidth={1.5} className="text-accent-teal" />,
      title: allProjects[0].name,
      description: allProjects[0].desc,
      url: "https://esosl-pv2.vercel.app/",
      tech: ["Next.js 16", "FastAPI", "FAISS (RAG)", "Python", "fpdf2", "jsPDF"]
    },
    {
      icon: <FileCheck size={16} strokeWidth={1.5} className="text-accent-teal" />,
      title: allProjects[1].name,
      description: allProjects[1].desc,
      url: "https://cpev2.vercel.app/",
      tech: ["React 19", "Supabase", "Groq Llama", "Google Gemini", "Stripe", "NextAuth.js"]
    },
    {
      icon: <Layers size={16} strokeWidth={1.5} className="text-accent-teal" />,
      title: allProjects[4].name,
      description: allProjects[4].desc,
      url: `/${lang}/work/edtech-tools`,
      tech: ["Next.js", "TypeScript", "Supabase", "Stripe", "Gemini API", "Node.js"]
    }
  ];

  return (
    <section id="projects" className="scroll-mt-24 lg:scroll-mt-24">
      <div className="section-label">{dict.featuredWork || "Featured projects"}</div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project, idx) => {
          const isExternal = project.url.startsWith("http");
          return (
            <motion.a
              href={project.url}
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noopener noreferrer" : undefined}
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ type: "spring", stiffness: 300, damping: 24, delay: idx * 0.1 }}
              className="proj-card group flex flex-col h-full"
            >
              <div className="w-8 h-8 bg-[#132d21]/30 border border-accent-teal/20 shadow-[0_0_10px_-2px_rgba(100,244,172,0.1)] rounded-md flex items-center justify-center mb-3">
                {project.icon}
              </div>
              <div className="text-sm font-semibold text-foreground mb-1.5 group-hover:text-accent-teal transition-colors">
                {project.title}
              </div>
              <div className="text-xs text-muted-foreground leading-relaxed mb-4 flex-grow">
                {project.description}
              </div>
            <div className="flex gap-1.5 flex-wrap mt-auto">
              {project.tech.map((tech, i) => (
                <span key={i} className="stag">
                  {tech}
                </span>
              ))}
            </div>
          </motion.a>
          );
        })}

        {/* More on GitHub Ghost Card */}
        <motion.a
          href="https://github.com/antoniotagaruma8"
          target="_blank"
          rel="noreferrer"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ type: "spring", stiffness: 300, damping: 24, delay: 0.3 }}
          className="proj-card flex flex-col items-center justify-center min-h-[160px] border-[#30363d] hover:border-accent-teal hover:bg-[#1c2128]/50 group"
        >
          <div className="flex flex-col items-center gap-3 text-muted-foreground group-hover:text-accent-teal transition-colors">
            <SiGithub size={24} className="opacity-70 group-hover:opacity-100 transition-opacity" />
            <div className="text-xs font-medium">
              + More on GitHub →
            </div>
          </div>
        </motion.a>
      </div>
    </section>
  );
}
