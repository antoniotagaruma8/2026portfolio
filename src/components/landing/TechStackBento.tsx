"use client";

import { motion } from "framer-motion";
import { Layout, Code2, FileText, Terminal } from "lucide-react";
import { BentoCard } from "@/components/shared/BentoCard";

interface TechStackBentoProps {
  dict: any;
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
};

export function TechStackBento({ dict }: TechStackBentoProps) {
  return (
    <section className="mb-32 scroll-mt-32">
      <div className="flex items-center gap-6 mb-12">
        <h2 className="text-4xl font-bold tracking-tighter">{dict.techStackTitle || "Tech Stack"}</h2>
        <div className="h-px bg-gradient-to-r from-border to-transparent flex-grow max-w-[300px]" />
      </div>
      
      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        <motion.div variants={item}>
          <BentoCard className="h-full p-6 flex flex-col gap-4" glowColor="rgba(34, 211, 238, 0.15)">
            <div className="w-12 h-12 rounded-2xl bg-accent-cyan/10 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
              <Layout className="text-accent-cyan" size={24} />
            </div>
            <div>
              <h4 className="text-lg font-bold mb-1 text-foreground">{dict.interactiveEngine || "Interactive Engine"}</h4>
              <p className="text-xs text-muted-foreground font-mono leading-relaxed">Next.js 16, React 19, TS 5, Tailwind v4, Framer Motion</p>
            </div>
          </BentoCard>
        </motion.div>

        <motion.div variants={item}>
          <BentoCard className="h-full p-6 flex flex-col gap-4" glowColor="rgba(168, 85, 247, 0.15)">
            <div className="w-12 h-12 rounded-2xl bg-accent-purple/10 flex items-center justify-center group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-300">
              <Code2 className="text-accent-purple" size={24} />
            </div>
            <div>
              <h4 className="text-lg font-bold mb-1 text-foreground">{dict.aiBrains || "AI Brains"}</h4>
              <p className="text-xs text-muted-foreground font-mono leading-relaxed">Vercel AI SDK, Gemini (1.5 Flash), Groq</p>
            </div>
          </BentoCard>
        </motion.div>
        
        <motion.div variants={item}>
          <BentoCard className="h-full p-6 flex flex-col gap-4" glowColor="rgba(132, 204, 22, 0.15)">
            <div className="w-12 h-12 rounded-2xl bg-accent-green/10 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
              <FileText className="text-accent-green" size={24} />
            </div>
            <div>
              <h4 className="text-lg font-bold mb-1 text-foreground">{dict.contentEngine || "Content Engine"}</h4>
              <p className="text-xs text-muted-foreground font-mono leading-relaxed">MDX (next-mdx-remote), gray-matter, next-themes</p>
            </div>
          </BentoCard>
        </motion.div>
        
        <motion.div variants={item}>
          <BentoCard className="h-full p-6 flex flex-col gap-4" glowColor="rgba(59, 130, 246, 0.15)">
            <div className="w-12 h-12 rounded-2xl bg-accent-blue/10 flex items-center justify-center group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-300">
              <Terminal className="text-accent-blue" size={24} />
            </div>
            <div>
              <h4 className="text-lg font-bold mb-1 text-foreground">{dict.deployment || "Deployment"}</h4>
              <p className="text-xs text-muted-foreground font-mono leading-relaxed">Vercel, Supabase, Python (Flask), GitHub</p>
            </div>
          </BentoCard>
        </motion.div>
      </motion.div>
    </section>
  );
}
