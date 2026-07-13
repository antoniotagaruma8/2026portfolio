"use client";

import { motion } from "framer-motion";
import { Code2, GraduationCap, Lightbulb } from "lucide-react";

export function AboutSection({ dict }: { dict: any }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
  };

  return (
    <section id="about" className="scroll-mt-24 lg:scroll-mt-24">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="flex flex-col gap-6"
      >
        <motion.div variants={itemVariants}>
          <div className="text-xs font-semibold text-accent-teal tracking-[1.5px] uppercase mb-3 flex items-center gap-2">
            <span className="w-8 h-[1px] bg-accent-teal"></span> {dict.aboutSummary}
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground tracking-[-0.5px] leading-[1.2]">
            {dict.aboutHeadline1} <br className="hidden sm:block" />
            <span className="text-accent-teal">{dict.aboutHeadlineHighlight1}</span>{dict.aboutHeadline2}<span className="text-accent-blue">{dict.aboutHeadlineHighlight2}</span>
          </h2>
        </motion.div>

        <motion.p variants={itemVariants} className="text-base text-muted-foreground leading-relaxed max-w-2xl">
          {dict.aboutDesc}
        </motion.p>

        <motion.div variants={itemVariants} className="flex gap-2 flex-wrap mb-4">
          <span className="badge badge-teal">Open to work</span>
          <span className="badge badge-blue">Madrid · NIE</span>
          <span className="badge badge-gray">Next.js · TypeScript · Python · AI/LLMs</span>
        </motion.div>

        {/* Interactive Value Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <motion.div 
            variants={itemVariants}
            whileHover={{ y: -5 }} 
            className="group glass-card p-6 rounded-2xl border hover:border-accent-teal/30 transition-all cursor-default"
          >
            <div className="w-10 h-10 rounded-xl bg-accent-teal/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <Code2 className="text-accent-teal" size={20} />
            </div>
            <h3 className="font-bold text-foreground mb-2 group-hover:text-accent-teal transition-colors">{dict.aboutEngineerTitle}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{dict.aboutEngineerDesc}</p>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            whileHover={{ y: -5 }} 
            className="group glass-card p-6 rounded-2xl border hover:border-accent-blue/30 transition-all cursor-default"
          >
            <div className="w-10 h-10 rounded-xl bg-accent-blue/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <GraduationCap className="text-accent-blue" size={20} />
            </div>
            <h3 className="font-bold text-foreground mb-2 group-hover:text-accent-blue transition-colors">{dict.aboutEducatorTitle}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{dict.aboutEducatorDesc}</p>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            whileHover={{ y: -5 }} 
            className="group glass-card p-6 rounded-2xl border hover:border-purple-400/30 transition-all cursor-default"
          >
            <div className="w-10 h-10 rounded-xl bg-purple-400/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <Lightbulb className="text-purple-400" size={20} />
            </div>
            <h3 className="font-bold text-foreground mb-2 group-hover:text-purple-400 transition-colors">{dict.aboutInnovatorTitle}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{dict.aboutInnovatorDesc}</p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
