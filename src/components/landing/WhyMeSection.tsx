"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { BentoCard } from "@/components/shared/BentoCard";

export function WhyMeSection({ dict }: { dict: any }) {
  return (
    <section className="mb-40 max-w-4xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ type: "spring", stiffness: 300, damping: 24 }}
      >
        <BentoCard className="p-8 md:p-12 relative overflow-hidden" glowColor="rgba(236, 72, 153, 0.15)">
          <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/10 to-accent-purple/10 opacity-50 z-0" />
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tighter mb-6 flex items-center gap-4 text-foreground">
              <Sparkles className="text-accent-pink" size={32} />
              {dict.whyMeTitle || "Why Me? (The Secret Weapon)"}
            </h2>
            <div className="h-px bg-gradient-to-r from-border to-transparent w-full max-w-md mb-8" />
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-medium">
              {dict.whyMeDesc || "My superpower in the tech industry is my deep understanding of user pedagogy. As a licensed teacher with a Master's from Universidad de Alcalá and an IT background, I don't just build apps; I study how users think, learn, and click. I create tech solutions that solve actual, real-world problems because I've spent years analyzing human-system interactions in the classroom and beyond."}
            </p>
          </div>
        </BentoCard>
      </motion.div>
    </section>
  );
}
