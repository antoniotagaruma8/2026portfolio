"use client";

import { motion, Variants } from "framer-motion";
import { ArrowRight, Briefcase, GraduationCap, Layout, MapPin, Server, Terminal } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import en from "@/i18n/dictionaries/en.json";
import es from "@/i18n/dictionaries/es.json";
import { cvData } from "@/lib/cv-data";

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 300, damping: 24 } }
};

export default function AboutPage() {
  const params = useParams();
  const lang = params?.lang === "es" ? "es" : "en";
  const dict = lang === "es" ? es.about : en.about;
  const data = cvData[lang];
  const timeline = data.experience;
  const education = data.education;
  return (
    <div className="container mx-auto px-6 py-12 lg:py-24 max-w-5xl">
      
      {/* Background ambient light */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-64 h-64 md:w-[500px] md:h-[500px] rounded-full bg-blue-500/10 blur-[100px] md:blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-72 h-72 md:w-[600px] md:h-[600px] rounded-full bg-purple-500/10 blur-[100px] md:blur-[150px]" />
      </div>

      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mb-20 md:mb-32"
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
          {dict.header1} <span className="text-muted-foreground">{dict.header2}</span> <br />
          {dict.header3} <span className="text-gradient">{dict.header4}</span>
        </h1>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-start">
        
        {/* Story Section */}
        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="space-y-8 text-lg text-muted-foreground leading-loose"
        >
          <motion.p variants={item}>
            {dict.story1}<strong className="text-foreground font-semibold">{dict.story1Bold}</strong>{dict.story1End}
          </motion.p>
          <motion.p variants={item} className="text-lg font-medium text-foreground pl-4 border-l-2 border-accent">
            {dict.story2}
          </motion.p>
          <motion.p variants={item}>
            {dict.story3}
          </motion.p>
          <motion.p variants={item}>
            {dict.story4}<strong className="text-foreground font-semibold">{dict.story4Bold}</strong>{dict.story4End}<strong className="text-foreground font-semibold">{dict.story4Strong}</strong>
          </motion.p>
          
          <motion.div variants={item} className="pt-8">
            <Link 
              href={`/${lang}/#work`}
              className="group inline-flex items-center gap-3 text-accent font-bold text-lg hover:text-blue-400 transition-colors"
            >
              {dict.cta} 
              <span className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all">
                <ArrowRight size={16} />
              </span>
            </Link>
          </motion.div>
        </motion.div>

        {/* Tech Stack Visuals */}
        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="space-y-10 sticky top-32"
        >
          <div className="glass-card p-8 rounded-[2rem]">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
              <span className="p-2 rounded-lg bg-blue-500/10 text-blue-500"><Layout size={20} /></span> {dict.frontend}
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {['Next.js 16', 'React 19', 'TypeScript 5', 'Tailwind CSS', 'Framer Motion', 'Vanilla JS'].map(tech => (
                <span key={tech} className="px-4 py-2 rounded-xl bg-background/50 border border-border text-sm font-medium hover:border-blue-500/50 transition-colors">{tech}</span>
              ))}
            </div>
          </div>

          <div className="glass-card p-8 rounded-[2rem]">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
              <span className="p-2 rounded-lg bg-emerald-500/10 text-emerald-500"><Server size={20} /></span> {dict.backend}
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {['Python', 'FastAPI', 'Flask', 'Supabase', 'PostgreSQL', 'Node.js'].map(tech => (
                <span key={tech} className="px-4 py-2 rounded-xl bg-background/50 border border-border text-sm font-medium hover:border-emerald-500/50 transition-colors">{tech}</span>
              ))}
            </div>
          </div>

          <div className="glass-card p-8 rounded-[2rem]">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
              <span className="p-2 rounded-lg bg-purple-500/10 text-purple-500"><Terminal size={20} /></span> {dict.ai}
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {['Google Gemini', 'Groq (Llama 3.3)', 'OpenAI', 'RAG / FAISS', 'Stripe', 'Vercel', 'Git'].map(tech => (
                <span key={tech} className="px-4 py-2 rounded-xl bg-background/50 border border-border text-sm font-medium hover:border-purple-500/50 transition-colors">{tech}</span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Career Timeline */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        className="mt-40"
      >
        <div className="flex items-center gap-6 mb-16">
          <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center">
            <Briefcase className="text-accent" size={28} />
          </div>
          <h2 className="text-3xl font-bold tracking-tight">{dict.career}</h2>
          <div className="h-px bg-gradient-to-r from-border to-transparent flex-grow max-w-[300px]" />
        </div>

        <div className="space-y-0 relative ml-6">
          {/* Vertical Glowing Line */}
          <div className="absolute left-[7px] top-4 bottom-4 w-px bg-gradient-to-b from-blue-500 via-purple-500 to-transparent opacity-30" />

          {timeline.map((entry, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.15, type: "spring", stiffness: 200 }}
              className="flex gap-8 pb-16 last:pb-0 group"
            >
              {/* Dot */}
              <div className={`w-4 h-4 rounded-full bg-accent shadow-[0_0_15px_rgba(59,130,246,0.5)] mt-2 shrink-0 ring-4 ring-background z-10 transition-transform group-hover:scale-150`} />

              <div className="glass-card p-6 rounded-[2rem] w-full max-w-2xl group-hover:border-white/20 transition-all">
                <span className="inline-block px-3 py-1 text-xs font-bold tracking-wide uppercase rounded-full bg-accent/10 text-accent mb-3">{entry.period}</span>
                <h3 className="text-2xl font-bold mb-2">{entry.title}</h3>
                <p className="text-lg text-muted-foreground mb-3">{entry.company}</p>
                <p className="text-sm text-muted-foreground flex items-center gap-2 font-medium">
                  <MapPin size={14} className="text-accent" /> {entry.location}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Education */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        className="mt-40"
      >
        <div className="flex items-center gap-6 mb-16">
          <div className="w-14 h-14 rounded-2xl bg-amber-500/10 flex items-center justify-center">
            <GraduationCap className="text-amber-500" size={28} />
          </div>
          <h2 className="text-3xl font-bold tracking-tight">{dict.education}</h2>
          <div className="h-px bg-gradient-to-r from-border to-transparent flex-grow max-w-[300px]" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, type: "spring", stiffness: 200 }}
              className="glass-card p-8 rounded-[2rem] group hover:border-amber-500/30 transition-all"
            >
              <span className="inline-block px-3 py-1 text-xs font-bold tracking-wide uppercase rounded-full bg-amber-500/10 text-amber-500 mb-4">{edu.year}</span>
              <h3 className="text-xl font-bold mb-2 group-hover:text-amber-500 transition-colors">{edu.degree}</h3>
              <p className="text-base text-muted-foreground leading-relaxed">{edu.institution}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

    </div>
  );
}
