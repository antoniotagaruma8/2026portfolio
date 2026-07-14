"use client";

import { motion } from "framer-motion";
import { FileText, ArrowRight, Download, Laptop, GraduationCap } from "lucide-react";
import { useParams } from "next/navigation";

export function ResumeSection({ dict }: { dict: any }) {
  const params = useParams();
  const lang = params?.lang || "en";

  const downloads = [
    {
      label: dict.cvTechLabel || "IT / Tech CV",
      sub: dict.cvTechSub || "Full-Stack Developer · AI · EdTech",
      file: "/cv-tech.pdf",
      filename: "CV-IT-Tech-Antonio-Tagaruma.pdf",
      icon: Laptop,
      color: "accent-teal",
      bg: "bg-[#132d21]/50",
      border: "border-[#1e4a32]",
      hoverBorder: "hover:border-accent-teal",
    },
    {
      label: dict.cvEduLabel || "Education CV",
      sub: dict.cvEduSub || "Licensed Teacher · ESL/EFL · EdTech",
      file: "/cv-education.pdf",
      filename: "CV-Education-Antonio-Tagaruma.pdf",
      icon: GraduationCap,
      color: "accent-teal",
      bg: "bg-[#132d21]/50",
      border: "border-[#1e4a32]",
      hoverBorder: "hover:border-accent-teal",
    },
  ];

  return (
    <section id="resume" className="scroll-mt-24 lg:scroll-mt-24">
      <div className="section-label">{dict.resume || "Full Résumé"}</div>

      {/* View Online link */}
      <motion.a
        href={`/${lang}/cv`}
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ type: "spring", stiffness: 300, damping: 24 }}
        className="group flex items-center justify-between p-5 rounded-lg border border-border bg-card hover:border-accent-teal transition-all duration-200 hover:-translate-y-1 mb-4"
      >
        <div className="flex items-center gap-5">
          <div className="w-12 h-12 shrink-0 rounded-md bg-[#132d21]/50 border border-[#1e4a32] flex items-center justify-center text-accent-teal group-hover:bg-accent-teal group-hover:text-[#0d1117] transition-colors">
            <FileText size={24} />
          </div>
          <div>
            <div className="text-base font-semibold text-foreground mb-1.5 group-hover:text-accent-teal transition-colors">
              {dict.resumeTitle}
            </div>
            <div className="text-sm text-muted-foreground leading-relaxed max-w-2xl">
              {dict.resumeDesc}
            </div>
          </div>
        </div>
        <motion.div
          className="text-muted-foreground group-hover:text-accent-teal transition-colors ml-4"
          animate={{ x: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowRight size={20} />
        </motion.div>
      </motion.a>

      {/* Download buttons */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {downloads.map((cv, i) => (
          <motion.a
            key={cv.file}
            href={cv.file}
            download={cv.filename}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ type: "spring", stiffness: 300, damping: 24, delay: i * 0.1 }}
            className={`group flex items-center gap-4 p-4 rounded-lg border border-border bg-card ${cv.hoverBorder} transition-all duration-200 hover:-translate-y-1`}
          >
            <div className={`w-10 h-10 shrink-0 rounded-md ${cv.bg} border ${cv.border} flex items-center justify-center text-${cv.color} group-hover:bg-${cv.color} group-hover:text-[#0d1117] transition-colors`}>
              <cv.icon size={20} />
            </div>
            <div className="flex-1 min-w-0">
              <div className={`text-sm font-semibold text-foreground group-hover:text-${cv.color} transition-colors`}>
                {cv.label}
              </div>
              <div className="text-xs text-muted-foreground truncate">{cv.sub}</div>
            </div>
            <Download size={16} className={`text-muted-foreground group-hover:text-${cv.color} transition-colors shrink-0`} />
          </motion.a>
        ))}
      </div>
    </section>
  );
}
