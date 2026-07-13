"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { archiveData, ArchiveProject } from "@/lib/archive-data";
import { SplitScreenLayout } from "@/components/shell/SplitScreenLayout";
import { NavItem } from "@/components/shell/ScrollSpyNav";
import { useParams } from "next/navigation";
import { 
  ExternalLink, GitBranch, BookOpen,
  Gamepad2, Zap, Palette, MessageCircle, GraduationCap, Mic, Swords, 
  Search, Leaf, FileText, Shield, Laptop, Landmark, Award, Library, PenTool, FileEdit
} from "lucide-react";

const categoryConfig: Record<string, { color: string; bgColor: string; borderColor: string }> = {
  "SaaS Products": { color: "text-amber-500", bgColor: "bg-amber-500/10", borderColor: "border-amber-500/20" },
  "EdTech Games": { color: "text-amber-500", bgColor: "bg-amber-500/10", borderColor: "border-amber-500/20" },
  "UI & Apps": { color: "text-amber-500", bgColor: "bg-amber-500/10", borderColor: "border-amber-500/20" },
  "Academic": { color: "text-amber-500", bgColor: "bg-amber-500/10", borderColor: "border-amber-500/20" },
};

const getProjectIcon = (id: string, size: number) => {
  const icons: Record<string, any> = {
    "debate-spark": Zap, "thisisnot-a": Palette, "spanishwithandwisdom": MessageCircle,
    "esoslpv2": GraduationCap, "conditionals-game": Gamepad2, "reported-speech": Mic,
    "passive-voice": Swords, "word-snake": FileText, "follow-frog": Leaf,
    "loan-word": Search, "lesson-hub": Library, "tech-education": Laptop,
    "philippine-education": Landmark, "mooc-final": Award, "ph-cold-war": Shield,
    "vocabulary-race": Zap, "photo-description": MessageCircle,
    "pdf-editor": FileEdit, "interactive-drawing": PenTool, "trivia-bingo": Gamepad2,
    "cpe": GraduationCap, "cv-builder": FileText, "carta-clara": Zap,
  };
  const Icon = icons[id];
  return Icon ? <Icon size={size} /> : null;
};

export default function EdTechToolsPage() {
  const params = useParams();
  const lang = params?.lang || "en";

  const currentArchiveData = archiveData[lang as keyof typeof archiveData] || archiveData.en;

  // Group projects by category
  const categories = lang === "es" 
    ? ["Productos SaaS", "Juegos EdTech", "UI y Apps", "Académico"]
    : ["SaaS Products", "EdTech Games", "UI & Apps", "Academic"];

  const grouped = categories.map(cat => ({
    name: cat,
    id: cat.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
    projects: currentArchiveData.filter(p => p.category === cat),
  }));

  const navItems: NavItem[] = grouped.map(g => ({
    name: g.name,
    href: `#${g.id}`,
    id: g.id,
  }));

  const uiText = {
    en: {
      archive: "Full Portfolio",
      title: "Project",
      suite: "Suite",
      desc: "The complete collection of SaaS platforms, interactive classroom tools, and academic research I've built as a full-stack developer and licensed educator. From AI-powered business applications to gamified grammar drills — each project was engineered to solve a real-world problem.",
      viewAll: "View All on GitHub",
      demo: "Live Demo",
      source: "Source",
      caseStudy: "Case Study"
    },
    es: {
      archive: "Portafolio Completo",
      title: "Proyecto",
      suite: "Suite",
      desc: "La colección completa de plataformas SaaS, herramientas interactivas para el aula e investigación académica que he construido como desarrollador full-stack y educador licenciado. Desde aplicaciones empresariales impulsadas por IA hasta ejercicios de gramática gamificados — cada proyecto fue diseñado para resolver un problema del mundo real.",
      viewAll: "Ver todo en GitHub",
      demo: "Demo en Vivo",
      source: "Código",
      caseStudy: "Caso de Estudio"
    }
  };
  const text = uiText[lang as keyof typeof uiText] || uiText.en;

  return (
    <SplitScreenLayout navItems={navItems} theme="amber">
      <div className="w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="text-xs font-semibold text-amber-500 tracking-[1.5px] uppercase mb-3 flex items-center gap-2">
            <span className="w-8 h-[1px] bg-amber-500"></span> {text.archive}
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground tracking-[-0.5px] leading-[1.2] mb-4">
            {text.title} <span className="text-amber-500">{text.suite}</span>
          </h1>
          <p className="text-base text-muted-foreground leading-relaxed max-w-2xl mb-6">
            {text.desc}
          </p>
          <div className="flex gap-4">
            <a 
              href="https://github.com/antoniotagaruma8" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-md border border-[#30363d] text-muted-foreground hover:text-foreground hover:bg-[#30363d] transition-colors text-sm font-medium"
            >
              {text.viewAll} <GitBranch size={16} />
            </a>
          </div>
        </motion.div>

        {/* Category Sections */}
        <div className="space-y-20">
          {grouped.map((group, gi) => {
            const config = categoryConfig[group.name] || categoryConfig["EdTech Games"] || categoryConfig["Juegos EdTech"];
            
            return (
              <section key={group.id} id={group.id} className="scroll-mt-24">
                <div className="section-label !text-amber-500">{group.name}</div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <AnimatePresence>
                    {group.projects.map((project, pi) => (
                      <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ type: "spring", stiffness: 300, damping: 24, delay: pi * 0.05 }}
                        className="group glass-card p-5 rounded-xl border hover:border-amber-500/40 transition-all"
                      >
                        <div className="flex items-start justify-between gap-3 mb-3">
                          <div className="flex items-center gap-3">
                            <div className={`w-9 h-9 shrink-0 rounded-lg ${config?.bgColor || 'bg-amber-500/10'} ${config?.borderColor || 'border-amber-500/20'} border flex items-center justify-center ${config?.color || 'text-amber-500'} group-hover:scale-110 transition-transform`}>
                              {getProjectIcon(project.id, 18) || <Gamepad2 size={18} />}
                            </div>
                            <h3 className="font-semibold text-foreground group-hover:text-amber-500 transition-colors text-sm leading-tight">
                              {project.title}
                            </h3>
                          </div>
                          {project.year && (
                            <span className="text-[10px] font-bold tracking-wider uppercase text-muted-foreground shrink-0 mt-1">{project.year}</span>
                          )}
                        </div>

                        {project.description && (
                          <p className="text-xs text-muted-foreground leading-relaxed mb-4 line-clamp-2">
                            {project.description}
                          </p>
                        )}

                        <div className="flex flex-wrap gap-1.5 mb-4">
                          {project.tech.map(t => (
                            <span key={t} className="text-[10px] font-mono text-muted-foreground bg-muted px-2 py-0.5 rounded border border-border">
                              {t}
                            </span>
                          ))}
                        </div>

                        <div className="flex items-center gap-3 pt-3 border-t border-border/50">
                          {project.link && (
                            <a 
                              href={project.link} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-xs font-medium text-sky-400 hover:text-sky-400/80 flex items-center gap-1.5 transition-colors"
                            >
                              <ExternalLink size={13} /> {text.demo}
                            </a>
                          )}
                          <a 
                            href={project.github} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-xs font-medium text-emerald-400 hover:text-emerald-400/80 flex items-center gap-1.5 transition-colors pr-2"
                          >
                            <GitBranch size={13} /> {text.source}
                          </a>
                          <a 
                            href={`/${lang}/work/${project.id}`} 
                            className="text-xs font-medium text-accent-teal hover:text-accent-teal/80 flex items-center gap-1.5 transition-colors"
                          >
                            <BookOpen size={13} /> {text.caseStudy}
                          </a>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </SplitScreenLayout>
  );
}
