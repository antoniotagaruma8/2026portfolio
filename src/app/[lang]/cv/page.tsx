"use client";

import { motion } from "framer-motion";
import { 
  MapPin, Mail, Phone, Globe, 
  Briefcase, GraduationCap, Award, Languages, 
  Code2, Server, Terminal, Layout,
  ExternalLink, Cpu, BrainCircuit, Database, ShieldCheck, FileText, PenTool,
  Laptop, Users, BookOpen, TrendingUp, LayoutList, Calendar, Share2
} from "lucide-react";

import { 
  SiNextdotjs, SiReact, SiTypescript, SiTailwindcss, SiFramer, SiHtml5, SiJavascript,
  SiPython, SiFastapi, SiFlask, SiSupabase, SiNodedotjs,
  SiGooglegemini, SiGithub, SiVercel, SiStripe, SiWhatsapp
} from "react-icons/si";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 300, damping: 24 } }
};

const stagger = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

import { useParams } from "next/navigation";
import { cvData } from "@/lib/cv-data";
import { SplitScreenLayout } from "@/components/shell/SplitScreenLayout";
import en from "@/i18n/dictionaries/en.json";
import es from "@/i18n/dictionaries/es.json";

const techSkills = {
  "Frontend": { icon: Layout, color: "text-accent-blue", items: [
    { name: "Next.js 16", icon: SiNextdotjs }, { name: "React 19", icon: SiReact }, { name: "TypeScript 5", icon: SiTypescript }, 
    { name: "Tailwind CSS", icon: SiTailwindcss }, { name: "Framer Motion", icon: SiFramer }, { name: "HTML5 / CSS3", icon: SiHtml5 }, { name: "Vanilla JS (ES6+)", icon: SiJavascript }
  ]},
  "Backend & DB": { icon: Server, color: "text-accent-blue", items: [
    { name: "Python", icon: SiPython }, { name: "FastAPI", icon: SiFastapi }, { name: "Flask", icon: SiFlask }, 
    { name: "Supabase (PostgreSQL)", icon: SiSupabase }, { name: "Node.js", icon: SiNodedotjs }, { name: "REST APIs", icon: Server }
  ]},
  "AI & LLMs": { icon: Terminal, color: "text-accent-blue", items: [
    { name: "Google Gemini", icon: SiGooglegemini }, { name: "Groq (Llama 3.3)", icon: Cpu }, { name: "OpenAI", icon: BrainCircuit }, { name: "RAG with FAISS", icon: Database }
  ]},
  "DevOps & Tools": { icon: Code2, color: "text-accent-blue", items: [
    { name: "Git / GitHub", icon: SiGithub }, { name: "Vercel", icon: SiVercel }, { name: "Stripe", icon: SiStripe }, 
    { name: "NextAuth.js", icon: ShieldCheck }, { name: "jsPDF", icon: FileText }, { name: "Fabric.js", icon: PenTool }
  ]},
  "Education & Pedagogy": { icon: GraduationCap, color: "text-accent-blue", items: [
    { name: "Curriculum Design", icon: FileText }, { name: "Lesson Planning", icon: PenTool }, { name: "ESL / EFL Instruction", icon: Languages }, 
    { name: "EdTech Integration", icon: Laptop }, { name: "Project-Based Learning", icon: Users }, { name: "CLIL Methodology", icon: BookOpen }
  ]},
  "Business & Management": { icon: Briefcase, color: "text-accent-blue", items: [
    { name: "Digital Marketing", icon: TrendingUp }, { name: "Info Systems (MIS)", icon: Database }, { name: "Project Management", icon: LayoutList }, 
    { name: "Event Coordination", icon: Calendar }, { name: "Social Media", icon: Share2 }
  ]},
};

const cvNavItems = [
  { name: "Experience", href: "#cv-experience", id: "cv-experience" },
  { name: "Key Projects", href: "#cv-projects", id: "cv-projects" },
  { name: "Skills", href: "#cv-skills", id: "cv-skills" },
  { name: "Education", href: "#cv-education", id: "cv-education" },
  { name: "Certifications", href: "#cv-certs", id: "cv-certs" },
  { name: "Languages", href: "#cv-languages", id: "cv-languages" },
];

export default function CVPage() {
  const params = useParams();
  const lang = params?.lang === "es" ? "es" : "en";
  const data = cvData[lang];
  const dict = lang === "es" ? es : en;
  const { personal, experience, education, certifications, languages, projects, sections } = data;
  return (
    <SplitScreenLayout dict={dict} navItems={cvNavItems} theme="blue">
      <div className="w-full">
        
        {/* Background ambient light */}
        <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
          <div className="absolute top-[10%] right-[-10%] w-64 h-64 md:w-[500px] md:h-[500px] rounded-full bg-accent-blue/10 blur-[100px] md:blur-[120px]" />
          <div className="absolute bottom-[20%] left-[-10%] w-72 h-72 md:w-[600px] md:h-[600px] rounded-full bg-accent-blue/5 blur-[100px] md:blur-[150px]" />
        </div>

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="text-xs font-semibold text-accent-blue tracking-[1.5px] uppercase mb-3 flex items-center gap-2">
            <span className="w-8 h-[1px] bg-accent-blue"></span> Curriculum Vitae
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground tracking-[-0.5px] leading-[1.2] mb-4">
            Antonio <span className="text-accent-blue">Tagaruma García</span>
          </h1>
          <p className="text-base text-muted-foreground leading-relaxed max-w-2xl mb-6 font-medium">
            {personal.title}
          </p>
          
          <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-muted-foreground">
            <span className="flex items-center gap-1.5"><MapPin size={16} className="text-accent-blue" /> {personal.location}</span>
            <a href={`mailto:${personal.email}`} className="flex items-center gap-1.5 hover:text-accent-blue transition-colors"><Mail size={16} className="text-accent-blue" /> {personal.email}</a>
            <span className="flex items-center gap-1.5"><Phone size={16} className="text-accent-blue" /> {personal.phone}</span>
            {personal.whatsapp && (
              <a href={`https://wa.me/${personal.phone.replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-accent-blue transition-colors cursor-pointer"><SiWhatsapp size={16} className="text-accent-blue" /> {personal.whatsapp}</a>
            )}
            <a href={`https://${personal.github}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-accent-blue transition-colors"><SiGithub size={16} className="text-accent-blue" /> {personal.github}</a>
            {personal.portfolio && (
              <a href={`https://${personal.portfolio}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-accent-blue transition-colors"><Globe size={16} className="text-accent-blue" /> {personal.portfolio}</a>
            )}
          </div>
        </motion.div>

        <div className="space-y-20">

            {/* Experience */}
            <motion.section id="cv-experience" className="scroll-mt-24" variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-accent-blue/10 flex items-center justify-center">
                  <Briefcase className="text-accent-blue" size={24} />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight">{sections.experience}</h2>
              </div>

              <div className="space-y-6">
                {experience.map((job, i) => (
                  <motion.div key={i} variants={fadeIn} className="glass-card p-6 md:p-8 rounded-[2rem] hover:border-accent-blue/30 transition-colors group">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                      <div>
                        <h3 className="font-bold text-xl group-hover:text-accent-blue transition-colors">{job.title}</h3>
                        <p className="text-foreground font-medium flex items-center gap-2 mt-1">
                          {job.company} <span className="text-muted-foreground">·</span> <span className="text-muted-foreground flex items-center gap-1"><MapPin size={14}/> {job.location}</span>
                        </p>
                      </div>
                      <span className="px-4 py-1.5 text-xs font-bold tracking-wide uppercase rounded-full bg-accent-blue/10 text-accent-blue shrink-0 self-start">{job.period}</span>
                    </div>
                    
                    <ul className="space-y-3 mt-6 pt-6 border-t border-border">
                      {job.duties.map((duty, j) => (
                        <li key={j} className="text-base text-muted-foreground flex gap-3 leading-relaxed">
                          <span className="text-accent-blue mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-accent-blue" />
                          {duty}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Key Projects */}
            <motion.section id="cv-projects" className="scroll-mt-24" variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-accent-blue/10 flex items-center justify-center">
                  <Code2 className="text-accent-blue" size={24} />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight">{sections.projects}</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {projects.map((proj, i) => (
                  <motion.a
                    key={i}
                    variants={fadeIn}
                    href={`/${lang}${proj.link}`}
                    className="block glass-card p-5 rounded-3xl hover:border-accent-blue/30 transition-all group"
                  >
                    <div className="flex justify-between items-start gap-4">
                      <div className="flex-1">
                        <h3 className="font-bold text-lg leading-tight mb-2 group-hover:text-accent-blue transition-colors">{proj.name}</h3>
                        {/* @ts-ignore */}
                        {proj.desc && <p className="text-sm text-foreground/80 leading-relaxed mb-3">{proj.desc}</p>}
                        <p className="text-xs font-mono text-muted-foreground">{proj.tech}</p>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-background/50 flex items-center justify-center group-hover:bg-accent-blue group-hover:text-white transition-colors shrink-0">
                        <ExternalLink size={16} />
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.section>

            {/* Technical Skills */}
            <motion.section id="cv-skills" className="scroll-mt-24 glass-card p-6 md:p-8 rounded-[2rem]" variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-accent-blue/10 flex items-center justify-center">
                  <Terminal className="text-accent-blue" size={24} />
                </div>
                <h2 className="text-2xl font-bold tracking-tight">{sections.skills}</h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {Object.entries(techSkills).map(([category, { icon: Icon, color, items }]) => (
                  <motion.div key={category} variants={fadeIn} className="flex flex-col">
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3 flex items-center gap-2">
                      <Icon size={14} className={color} /> {category}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {items.map((skill, j) => (
                        <span key={j} className="flex items-center gap-2 px-3 py-2 text-xs font-bold rounded-lg bg-background/50 border border-border text-foreground hover:border-white/20 transition-colors group">
                          {skill.icon && <skill.icon size={14} className="opacity-70 group-hover:opacity-100 transition-opacity" />}
                          <span>{skill.name}</span>
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Education */}
            <motion.section id="cv-education" className="scroll-mt-24 glass-card p-6 md:p-8 rounded-[2rem]" variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-accent-blue/10 flex items-center justify-center">
                  <GraduationCap className="text-accent-blue" size={24} />
                </div>
                <h2 className="text-2xl font-bold tracking-tight">{sections.education}</h2>
              </div>

              <div className="space-y-6">
                {education.map((edu, i) => (
                  <motion.div key={i} variants={fadeIn} className="group">
                    <span className="inline-block px-3 py-1 text-[10px] font-bold tracking-wider uppercase rounded-full bg-accent-blue/10 text-accent-blue mb-2">{edu.year}</span>
                    <h3 className="font-bold text-base leading-tight mb-1 group-hover:text-accent-blue transition-colors">{edu.degree}</h3>
                    <p className="text-sm text-muted-foreground">{edu.institution}, {edu.location}</p>
                    {/* @ts-ignore */}
                    {edu.note && <p className="text-xs text-foreground/80 mt-2 leading-relaxed border-l-2 border-accent-blue/30 pl-3">{edu.note}</p>}
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Certifications */}
            <motion.section id="cv-certs" className="scroll-mt-24 glass-card p-6 md:p-8 rounded-[2rem]" variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-accent-blue/10 flex items-center justify-center">
                  <Award className="text-accent-blue" size={24} />
                </div>
                <h2 className="text-2xl font-bold tracking-tight">{sections.certifications}</h2>
              </div>

              <div className="space-y-6">
                {certifications.map((cert, i) => {
                  const isString = typeof cert === "string";
                  const name = isString ? cert : cert.name;
                  const desc = isString ? null : cert.desc;

                  return (
                    <motion.div key={i} variants={fadeIn} className="flex items-start gap-3">
                      <span className="text-accent-blue mt-2 shrink-0 w-1.5 h-1.5 rounded-full bg-accent-blue" />
                      <div>
                        <h3 className="font-bold text-base text-foreground group-hover:text-accent-blue transition-colors leading-tight mb-1">{name}</h3>
                        {desc && <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.section>

            {/* Languages */}
            <motion.section id="cv-languages" className="scroll-mt-24 glass-card p-6 md:p-8 rounded-[2rem]" variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-accent-blue/10 flex items-center justify-center">
                  <Languages className="text-accent-blue" size={24} />
                </div>
                <h2 className="text-2xl font-bold tracking-tight">{sections.languages}</h2>
              </div>

              <div className="flex flex-wrap gap-3">
                {languages.map((lang, i) => (
                  <motion.div 
                    key={i} 
                    variants={fadeIn} 
                    className="px-5 py-3 rounded-full border border-border/50 bg-card hover:border-accent-blue/30 hover:bg-accent-blue/5 transition-all flex items-center gap-3 group cursor-default"
                  >
                    <span className="font-bold text-sm text-foreground group-hover:text-accent-blue transition-colors tracking-wide">{lang.name}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-border group-hover:bg-accent-blue/50 transition-colors" />
                    <span className="text-xs font-medium text-muted-foreground tracking-wide">{lang.level}</span>
                  </motion.div>
                ))}
              </div>
            </motion.section>

        </div>
      </div>
    </SplitScreenLayout>
  );
}
