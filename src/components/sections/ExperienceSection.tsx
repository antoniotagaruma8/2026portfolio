"use client";

import { motion } from "framer-motion";

import { cvData } from "@/lib/cv-data";

export function ExperienceSection({ lang, dict }: { lang: string, dict: any }) {
  const experiences = cvData[lang as "en" | "es"].experience;

  return (
    <section id="experience" className="scroll-mt-24 lg:scroll-mt-24">
      <div className="section-label">{dict.experience || "Experience"}</div>
      
      <div className="flex flex-col gap-2">
        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ type: "spring", stiffness: 300, damping: 24, delay: idx * 0.1 }}
            className="exp-item"
          >
            <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground min-w-[120px] pt-1">
              {exp.period}
            </div>
            <div>
              <div className="text-base font-semibold text-foreground mb-1">
                {exp.title}
              </div>
              <div className="text-sm text-accent-teal mb-3">
                {exp.company} — {exp.location}
              </div>
              {exp.duties && (
                <ul className="list-none space-y-2 mb-4">
                  {exp.duties.map((bullet: string, bIdx: number) => (
                    <li key={bIdx} className="text-sm text-muted-foreground leading-relaxed flex">
                      <span className="mr-3 text-accent-teal/50 select-none">▹</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}
              {exp.tags && (
                <div className="flex gap-2 flex-wrap mt-2">
                  {exp.tags.map((tag: any, i: number) => (
                    <span 
                      key={i} 
                      className={`etag ${tag.type === 'blue' ? 'etag-b' : ''}`}
                    >
                      {tag.label}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
