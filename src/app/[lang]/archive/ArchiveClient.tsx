"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArchiveProject } from "@/lib/archive-data";
import { 
  Code2, ExternalLink, Folder, FolderOpen, GitBranch, X, 
  Gamepad2, BookOpen, Layout, Terminal, ArrowUpRight,
  Zap, Palette, MessageCircle, GraduationCap, Mic, Swords, 
  Search, Leaf, Library, Laptop, Landmark, Award, Shield, FileText, PenTool, FileEdit
} from "lucide-react";



const getProjectSpecificIcon = (id: string, className: string, size: number) => {
  switch (id) {
    case "debate-spark": return <Zap className={className} size={size} />;
    case "thisisnot-a": return <Palette className={className} size={size} />;
    case "spanishwithandwisdom": return <MessageCircle className={className} size={size} />;
    case "esoslpv2": return <GraduationCap className={className} size={size} />;
    case "conditionals-game": return <Gamepad2 className={className} size={size} />;
    case "reported-speech": return <Mic className={className} size={size} />;
    case "passive-voice": return <Swords className={className} size={size} />;
    case "word-snake": return <FileText className={className} size={size} />;
    case "follow-frog": return <Leaf className={className} size={size} />;
    case "loan-word": return <Search className={className} size={size} />;
    case "lesson-hub": return <Library className={className} size={size} />;
    case "tech-education": return <Laptop className={className} size={size} />;
    case "philippine-education": return <Landmark className={className} size={size} />;
    case "mooc-final": return <Award className={className} size={size} />;
    case "ph-cold-war": return <Shield className={className} size={size} />;
    case "vocabulary-race": return <Zap className={className} size={size} />;
    case "photo-description": return <MessageCircle className={className} size={size} />;
    case "pdf-editor": return <FileEdit className={className} size={size} />;
    case "interactive-drawing": return <PenTool className={className} size={size} />;
    case "trivia-bingo": return <Gamepad2 className={className} size={size} />;
    case "cpe": return <GraduationCap className={className} size={size} />;
    case "cv-builder": return <FileText className={className} size={size} />;
    case "carta-clara": return <Zap className={className} size={size} />;
    default: return null;
  }
};

import { useParams } from "next/navigation";

export default function ArchiveClient({ initialProjects, dict }: { initialProjects: ArchiveProject[], dict: any }) {
  const [activeTab, setActiveTab] = useState("All");
  const [selectedProject, setSelectedProject] = useState<ArchiveProject | null>(null);
  const params = useParams();
  const lang = params?.lang || "en";

  // Extract unique categories dynamically based on the merged projects
  const categories = ["All", ...Array.from(new Set(initialProjects.map(p => p.category)))];

  const filteredProjects = activeTab === "All" 
    ? initialProjects 
    : initialProjects.filter(p => p.category === activeTab);

  return (
    <div className="w-full">
      
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          {dict.title}
        </h1>
        <p className="text-lg text-muted-foreground">
          {dict.subtitle}
        </p>
      </motion.div>

      {/* Interactive Folder Tabs */}
      <div className="flex flex-wrap gap-3 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveTab(category)}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium transition-all ${
              activeTab === category 
                ? "bg-accent text-white shadow-lg shadow-accent/20" 
                : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
            }`}
          >
            {category === "GitHub Auto-Sync" ? (
              <GitBranch size={18} />
            ) : activeTab === category ? (
              <FolderOpen size={18} />
            ) : (
              <Folder size={18} />
            )}
            {category === "All" ? dict.all : category}
          </button>
        ))}
      </div>

      {/* Project Grid */}
      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group glass p-6 rounded-2xl border hover:border-accent transition-colors flex flex-col h-full cursor-pointer"
            >

              
              <h3 className="font-bold text-lg mb-2 group-hover:text-accent transition-colors flex items-center gap-2">
                {project.title}
                {getProjectSpecificIcon(project.id, "text-accent opacity-80", 20)}
              </h3>
              
              <div className="mt-auto pt-6 flex flex-wrap gap-2">
                {project.tech.map(t => (
                  <span key={t} className="text-xs font-mono text-muted-foreground bg-muted px-2 py-1 rounded border">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Live Preview Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-12">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-background/80 backdrop-blur-sm"
            />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-5xl h-full max-h-[85vh] bg-card border shadow-2xl rounded-3xl overflow-hidden flex flex-col"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-6 border-b bg-muted/30">
                <div>
                  <h2 className="text-2xl font-bold flex items-center gap-3">
                    {selectedProject.title}
                    {getProjectSpecificIcon(selectedProject.id, "text-accent", 28)}
                  </h2>
                  <div className="flex items-center gap-3 mt-2 text-sm text-muted-foreground">
                    <span className="px-2.5 py-0.5 rounded-full bg-accent/10 text-accent font-medium">
                      {selectedProject.category}
                    </span>
                    <span>{selectedProject.year}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <a 
                    href={selectedProject.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 rounded-full hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
                    title="View Source on GitHub"
                  >
                    <GitBranch size={20} />
                  </a>
                  {selectedProject.link && (
                    <a 
                      href={selectedProject.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 rounded-full hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
                      title="Open Live Site"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                  <button 
                    onClick={() => setSelectedProject(null)}
                    className="p-2 rounded-full hover:bg-red-500/10 text-muted-foreground hover:text-red-500 transition-colors ml-2"
                  >
                    <X size={24} />
                  </button>
                </div>
              </div>

              {/* Modal Body / Details */}
              <div className="flex-1 overflow-y-auto p-6 md:p-8 custom-scrollbar">
                <div className="max-w-3xl space-y-8">
                  {selectedProject.description && (
                    <section>
                      <h3 className="text-xl font-bold mb-3 text-foreground">Overview</h3>
                      <p className="text-muted-foreground leading-relaxed text-lg">
                        {selectedProject.description}
                      </p>
                    </section>
                  )}
                  
                  {selectedProject.problem && (
                    <section>
                      <h3 className="text-xl font-bold mb-3 text-red-400">The Problem</h3>
                      <p className="text-muted-foreground leading-relaxed text-lg">
                        {selectedProject.problem}
                      </p>
                    </section>
                  )}

                  {selectedProject.solution && (
                    <section>
                      <h3 className="text-xl font-bold mb-3 text-lime-400">The Solution</h3>
                      <p className="text-muted-foreground leading-relaxed text-lg">
                        {selectedProject.solution}
                      </p>
                    </section>
                  )}

                  {!selectedProject.description && !selectedProject.problem && !selectedProject.solution && (
                    <div className="text-center py-12">
                      <Code2 size={48} className="mx-auto text-muted-foreground/30 mb-4" />
                      <h3 className="text-xl font-bold mb-2">Details Coming Soon</h3>
                      <p className="text-muted-foreground">More context about this project will be added shortly.</p>
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-4 pt-6 mt-8 border-t border-border/50">
                    {selectedProject.link && (
                      <a 
                        href={selectedProject.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-accent text-white font-bold hover:bg-accent/90 transition-transform hover:scale-105"
                      >
                        Open Live Project <ExternalLink size={20} />
                      </a>
                    )}
                    <a 
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-border bg-muted/50 font-bold hover:bg-muted transition-colors"
                    >
                      View Source Code <GitBranch size={20} />
                    </a>
                    {selectedProject.problem && (
                      <a 
                        href={`/${lang}/work/${selectedProject.id}`}
                        className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-accent/10 border border-accent/20 text-accent font-bold hover:bg-accent/20 transition-colors"
                      >
                        {lang === "es" ? "Leer Caso de Estudio" : "Read Case Study"} <BookOpen size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
              
              {/* Tech Stack Footer */}
              <div className="p-4 border-t bg-muted/30 flex flex-wrap gap-2">
                <span className="text-sm font-medium text-muted-foreground mr-2 flex items-center">{dict.tableHead?.builtWith || "Built with"}:</span>
                {selectedProject.tech.map(t => (
                  <span key={t} className="px-3 py-1 text-xs font-mono font-medium rounded-full bg-background border shadow-sm">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
