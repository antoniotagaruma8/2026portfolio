"use client";

import { motion } from "framer-motion";

const languages = [
  { name: "English", level: "C1 — Advanced (TOEIC 820)" },
  { name: "Spanish", level: "Basic (Currently Learning)" },
  { name: "Korean", level: "Basic" },
  { name: "Filipino", level: "Native" }
];

export function LanguagesSection() {
  return (
    <section id="languages" className="scroll-mt-24 lg:scroll-mt-24">
      <div className="section-label">Languages</div>
      
      <div className="flex flex-col gap-3">
        {languages.map((lang, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ type: "spring", stiffness: 300, damping: 24, delay: idx * 0.1 }}
            className="flex items-center justify-between p-3 rounded-lg border border-border bg-card hover:border-accent-teal transition-colors"
          >
            <span className="text-sm font-semibold text-foreground">{lang.name}</span>
            <span className="text-xs text-muted-foreground bg-background px-2.5 py-1 rounded border border-border">
              {lang.level}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
