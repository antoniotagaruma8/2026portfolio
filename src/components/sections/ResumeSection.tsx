"use client";

import { motion } from "framer-motion";
import { FileText, ArrowRight } from "lucide-react";
import { useParams } from "next/navigation";

export function ResumeSection({ dict }: { dict: any }) {
  const params = useParams();
  const lang = params?.lang || "en";

  return (
    <section id="resume" className="scroll-mt-24 lg:scroll-mt-24">
      <div className="section-label">{dict.resume || "Full Résumé"}</div>
      
      <motion.a
        href={`/${lang}/cv`}
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ type: "spring", stiffness: 300, damping: 24 }}
        className="group flex items-center justify-between p-5 rounded-lg border border-border bg-card hover:border-accent-teal transition-all duration-200 hover:-translate-y-1"
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
    </section>
  );
}
