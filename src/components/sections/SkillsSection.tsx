"use client";

import { motion } from "framer-motion";

import { 
  FileText, PenTool, Globe, 
  Cpu, BrainCircuit, Database, ShieldCheck,
  Users, Languages, Award, Lightbulb, Laptop, MessageCircle, MessageSquare,
  Server, Terminal, Code2, Layout, GraduationCap, Briefcase, TrendingUp, LayoutList, Calendar, Share2, BookOpen
} from "lucide-react";

import { 
  SiNextdotjs, SiReact, SiTypescript, SiTailwindcss, SiHtml5,
  SiFastapi, SiPython, SiGooglegemini, SiSupabase, SiStripe,
  SiFramer, SiJavascript, SiFlask, SiNodedotjs, SiGithub, SiVercel
} from "react-icons/si";

const skillsData = [
  {
    category: "Frontend",
    icon: Layout,
    skills: [
      { name: "Next.js 16", icon: SiNextdotjs },
      { name: "React 19", icon: SiReact },
      { name: "TypeScript 5", icon: SiTypescript },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Framer Motion", icon: SiFramer },
      { name: "HTML5 / CSS3", icon: SiHtml5 },
      { name: "Vanilla JS (ES6+)", icon: SiJavascript }
    ]
  },
  {
    category: "Backend & DB",
    icon: Server,
    skills: [
      { name: "Python", icon: SiPython },
      { name: "FastAPI", icon: SiFastapi },
      { name: "Flask", icon: SiFlask },
      { name: "Supabase (PostgreSQL)", icon: SiSupabase },
      { name: "Node.js", icon: SiNodedotjs },
      { name: "REST APIs", icon: Server }
    ]
  },
  {
    category: "AI & LLMs",
    icon: Terminal,
    skills: [
      { name: "Google Gemini", icon: SiGooglegemini },
      { name: "Groq (Llama 3.3)", icon: Cpu },
      { name: "OpenAI", icon: BrainCircuit },
      { name: "RAG with FAISS", icon: Database }
    ]
  },
  {
    category: "DevOps & Tools",
    icon: Code2,
    skills: [
      { name: "Git / GitHub", icon: SiGithub },
      { name: "Vercel", icon: SiVercel },
      { name: "Stripe", icon: SiStripe },
      { name: "NextAuth.js", icon: ShieldCheck },
      { name: "jsPDF", icon: FileText },
      { name: "Fabric.js", icon: PenTool }
    ]
  },
  {
    category: "Education & Pedagogy",
    icon: GraduationCap,
    skills: [
      { name: "Curriculum Design", icon: FileText },
      { name: "Lesson Planning", icon: PenTool },
      { name: "ESL / EFL", icon: Languages },
      { name: "EdTech Integration", icon: Laptop },
      { name: "Project-Based Learning", icon: Users },
      { name: "CLIL Methodology", icon: BookOpen }
    ]
  },
  {
    category: "Business & Management",
    icon: Briefcase,
    skills: [
      { name: "Digital Marketing", icon: TrendingUp },
      { name: "Info Systems (MIS)", icon: Database },
      { name: "Project Management", icon: LayoutList },
      { name: "Event Coordination", icon: Calendar },
      { name: "Social Media", icon: Share2 }
    ]
  },
  {
    category: "Languages",
    icon: MessageCircle,
    skills: [
      { name: "English C1 (TOEIC 820)", icon: MessageCircle },
      { name: "Spanish", icon: MessageSquare },
      { name: "Korean", icon: MessageCircle },
      { name: "Filipino", icon: MessageSquare }
    ]
  }
];

export function SkillsSection({ lang, dict }: { lang: string, dict: any }) {
  return (
    <section id="skills" className="scroll-mt-24 lg:scroll-mt-24">
      <div className="section-label">{dict.skills || "Skills"}</div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {skillsData.map((group, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ type: "spring", stiffness: 300, damping: 24, delay: idx * 0.1 }}
            className="flex flex-col"
          >
            <div className="text-xs font-semibold text-accent-blue mb-3 uppercase tracking-wider flex items-center gap-2">
              <group.icon size={14} className="text-accent-blue" /> {group.category}
            </div>
            <div className="flex gap-2 flex-wrap">
              {group.skills.map((skill, i) => (
                <span key={i} className="flex items-center gap-2 px-3 py-2 text-xs font-bold rounded-lg bg-card border border-border text-foreground hover:border-accent-teal/30 transition-colors group">
                  <skill.icon size={14} className="opacity-70 group-hover:opacity-100 transition-opacity" />
                  <span>{skill.name}</span>
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
