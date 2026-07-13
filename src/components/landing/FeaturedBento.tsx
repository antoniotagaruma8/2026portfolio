"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Layout } from "lucide-react";
import { BentoCard } from "@/components/shared/BentoCard";

interface FeaturedBentoProps {
  dict: any;
  lang: string;
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 300, damping: 24 } }
};

export function FeaturedBento({ dict, lang }: FeaturedBentoProps) {
  return (
    <section id="work" className="scroll-mt-32 mb-40">
      <div className="flex items-center gap-6 mb-12">
        <h2 className="text-4xl font-bold tracking-tighter">{dict.featuredWork || "Featured Work"}</h2>
        <div className="h-px bg-gradient-to-r from-border to-transparent flex-grow max-w-[300px]" />
      </div>

      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[340px]"
      >
        
        {/* Card 1: CPE (Hero Span) */}
        <motion.div variants={item} className="md:col-span-2 relative h-full">
          <BentoCard className="h-full p-8 flex flex-col justify-between" glowColor="rgba(34, 211, 238, 0.15)">
            <div className="relative z-10">
              <div className="flex gap-3 mb-6">
                <span className="px-4 py-1 text-xs font-bold tracking-wide uppercase rounded-full bg-accent-blue/10 text-accent-blue border border-accent-blue/20">Next.js</span>
                <span className="px-4 py-1 text-xs font-bold tracking-wide uppercase rounded-full bg-accent-purple/10 text-accent-purple border border-accent-purple/20">AI / LLM</span>
              </div>
              <h3 className="text-4xl font-bold mb-4 tracking-tighter text-foreground group-hover:text-accent-cyan transition-colors duration-300">
                {dict.cpeTitle}
              </h3>
              <p className="text-muted-foreground text-lg max-w-xl leading-relaxed">
                {dict.cpeDesc}
              </p>
            </div>
            
            <div className="relative z-10 flex justify-between items-end mt-8">
              <Link href={`/${lang}/work/cpe`} className="inline-flex items-center gap-2 font-bold text-foreground group-hover:text-accent-cyan transition-colors">
                {dict.readCaseStudy || "Read Case Study"} <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <div className="w-12 h-12 rounded-full bg-background/80 flex items-center justify-center group-hover:bg-accent-cyan group-hover:text-background transition-all duration-300 border border-border">
                <Layout size={20} />
              </div>
            </div>
          </BentoCard>
        </motion.div>

        {/* Card 2: Carta Clara */}
        <motion.div variants={item} className="relative h-full">
          <BentoCard className="h-full p-8 flex flex-col justify-between" glowColor="rgba(245, 158, 11, 0.15)">
            <div className="relative z-10">
              <span className="inline-block px-4 py-1 text-xs font-bold tracking-wide uppercase rounded-full bg-amber-500/10 text-amber-500 border border-amber-500/20 mb-6">SaaS</span>
              <h3 className="text-3xl font-bold mb-4 tracking-tighter text-foreground group-hover:text-amber-500 transition-colors duration-300">
                {dict.cartaTitle}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {dict.cartaDesc}
              </p>
            </div>
            
            <Link href={`/${lang}/work/carta-clara`} className="relative z-10 mt-6 inline-flex items-center gap-2 font-bold text-foreground group-hover:text-amber-500 transition-colors">
              {dict.explore || "Explore"} <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </BentoCard>
        </motion.div>

        {/* Card 3: CV Builder */}
        <motion.div variants={item} className="relative h-full">
          <BentoCard className="h-full p-8 flex flex-col justify-between" glowColor="rgba(132, 204, 22, 0.15)">
            <div className="relative z-10">
              <span className="inline-block px-4 py-1 text-xs font-bold tracking-wide uppercase rounded-full bg-accent-green/10 text-accent-green border border-accent-green/20 mb-6">Tooling</span>
              <h3 className="text-3xl font-bold mb-4 tracking-tighter text-foreground group-hover:text-accent-green transition-colors duration-300">
                {dict.cvBuilderTitle}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {dict.cvBuilderDesc}
              </p>
            </div>
            
            <Link href={`/${lang}/work/cv-builder`} className="relative z-10 mt-6 inline-flex items-center gap-2 font-bold text-foreground group-hover:text-accent-green transition-colors">
              {dict.viewTool || "View Tool"} <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </BentoCard>
        </motion.div>

        {/* Card 4: Education Platforms (Wide) */}
        <motion.div variants={item} className="md:col-span-2 relative h-full">
          <BentoCard className="h-full p-8 flex flex-col md:flex-row justify-between items-start md:items-end" glowColor="rgba(236, 72, 153, 0.15)">
            <div className="relative z-10 max-w-xl mb-8 md:mb-0">
              <div className="flex gap-3 mb-6">
                <span className="px-4 py-1 text-xs font-bold tracking-wide uppercase rounded-full bg-accent-pink/10 text-accent-pink border border-accent-pink/20">Python</span>
                <span className="px-4 py-1 text-xs font-bold tracking-wide uppercase rounded-full bg-accent-pink/10 text-accent-pink border border-accent-pink/20">Flask</span>
              </div>
              <h3 className="text-4xl font-bold mb-4 tracking-tighter text-foreground group-hover:text-accent-pink transition-colors duration-300">
                {dict.knovauTitle}
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {dict.knovauDesc}
              </p>
            </div>
            
            <Link href={`/${lang}/work/knovau`} className="relative z-10 shrink-0 inline-flex items-center justify-center w-12 h-12 rounded-full bg-background/80 text-foreground hover:bg-accent-pink hover:text-background border border-border transition-all duration-300 group-hover:scale-110">
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </BentoCard>
        </motion.div>

      </motion.div>
    </section>
  );
}
