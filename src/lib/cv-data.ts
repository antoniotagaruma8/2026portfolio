import { MapPin, Mail, Phone, Globe, Briefcase, GraduationCap, Award, Languages, Code2, Server, Terminal, Layout, ExternalLink } from "lucide-react";

export const cvData = {
  en: {
    personal: {
      name: "Antonio Tagaruma García",
      title: "Full-Stack AI Developer & Licensed Educator",
      location: "Madrid, Spain",
      email: "antoniotagaruma8@gmail.com",
      phone: "+34 617 724 828",
      whatsapp: "@antoniotagaruma",
      github: "github.com/antoniotagaruma8",
      portfolio: "anton.io",
    },
    sections: {
      experience: "Experience",
      projects: "Key Projects",
      skills: "Skills",
      education: "Education",
      certifications: "Certifications",
      languages: "Languages"
    },
    experience: [
      {
        period: "2025 – 2026",
        title: "Language Assistant & GCLA Coordinator",
        company: "IES Simone Veil",
        location: "Madrid, Spain",
        duties: [
          "Assisted English teachers in secondary education classes",
          "Coordinated and prepared students for the Global Classrooms program (Model United Nations)",
          "Designed educational web games and applications to enhance student engagement",
          "Developed interactive teaching materials and digital educational resources",
        ],
        tags: [
          { label: "CLIL", type: "teal" },
          { label: "Global Classrooms", type: "teal" },
          { label: "EdTech tools", type: "blue" }
        ]
      },
      {
        period: "2024 – 2025",
        title: "Online English Tutor",
        company: "TUTLO-Poland",
        location: "Remote (Polish Students)",
        duties: [
          "Delivered one-on-one English lessons to Polish students",
          "Adapted lessons to individual student levels and goals",
          "Utilized digital platforms for online teaching",
        ],
        tags: [
          { label: "Remote", type: "teal" },
          { label: "Online Teaching", type: "teal" }
        ]
      },
      {
        period: "2023 – 2024",
        title: "Educator & Web Administrator",
        company: "Aspenshire International School & Tree House Montessori Learning Center (under Sathitpathum Demonstration School)",
        location: "Thailand",
        duties: [
          "Taught English to primary students utilizing active and project-based learning.",
          "Managed digital marketing, social media presence, and school web development.",
          "Designed lesson plans aligned with international curriculum standards."
        ],
        tags: [
          { label: "PBL", type: "teal" },
          { label: "Web Dev", type: "blue" }
        ]
      },
      {
        period: "2017 – 2022",
        title: "ESL Teacher",
        company: "Various Language Academies",
        location: "South Korea",
        duties: [
          "Taught English to Korean students of all ages and proficiency levels",
          "Prepared students for official English exams (TOEIC, TOEFL)",
          "Cultural adaptation and intercultural communication in an Asian environment",
        ],
      },
    ],
    education: [
      { year: "2026", degree: "Máster de Formación Permanente en Teaching", institution: "Universidad de Alcalá", location: "Spain", note: "University-level pedagogical training recognized in Spain" },
      { year: "2024", degree: "Master of Arts in Education, Major in English", institution: "National Teachers College", location: "Philippines", note: "Advanced studies in educational leadership, curriculum development, and language pedagogy" },
      { year: "2022", degree: "Licensed Professional Teacher (LPT)", institution: "Professional Regulation Commission (PRC)", location: "Philippines", note: "Official government licensure confirming professional competence to teach at all educational levels" },
      { year: "2020", degree: "B.Sc. in Business Administration, Major in Management Information Systems (MIS)", institution: "AMA University", location: "Philippines", note: "Qualifies to teach Economics, Business & ICT" },
    ],
    certifications: [
      { name: "TOEIC — 820/990", desc: "Official Test of English for International Communication certification demonstrating advanced professional working proficiency." },
      { name: "TEFL Certificate (120 hours) — Teacher Records", desc: "Comprehensive training in Teaching English as a Foreign Language, focusing on lesson planning, classroom management, and grammar instruction." },
      { name: "TESOL Certificate (120 hours) — International Open Academy", desc: "Advanced certification in Teaching English to Speakers of Other Languages, specializing in engaging, student-centered methodologies." },
      { name: "Certificate in Professional Teaching — AMA University", desc: "Post-graduate educational program covering pedagogical theories, assessment strategies, and teaching principles." },
    ],
    languages: [
      { name: "Filipino", level: "Native", percent: 100 },
      { name: "English", level: "C1 — Advanced", percent: 90 },
      { name: "Spanish", level: "Basic", percent: 30 },
      { name: "Korean", level: "Basic", percent: 30 },
    ],
    projects: [
      { name: "ESO Smart Lesson Planner — AI-Powered Curriculum Design Tool | LOMLOE Compliant | RAG Optimized", tech: "Streamlit · FastAPI · Python · Gemini 2.0 · RAG · FAISS · PostgreSQL · Google OAuth", desc: "Full-stack AI-powered lesson planning platform. Features a RAG engine, Google OAuth, dynamic PDF generation, data visualization, and Google Gemini AI integration.", link: "/work/esoslpv2" },
      { name: "CEFR Mock Exams — Cambridge Practice Tests", tech: "Next.js · TypeScript · Supabase · Groq · Gemini · Stripe", desc: "Full-stack AI English exam platform with automated generation across 5 CEFR levels. Integrates multiple LLMs, Stripe payments, Supabase PostgreSQL, and automated cron pipelines.", link: "/work/cpe" },
      { name: "AI CV Builder — Intelligent Tailoring", tech: "Vanilla JS · HTML/CSS · jsPDF · Gemini API", desc: "Client-side CV tailoring application built with Vanilla JS. Integrates Gemini/Groq APIs directly in the browser with jsPDF export.", link: "/work/cv-builder" },
      { name: "Carta Clara — Restaurant BOS", tech: "Next.js · Supabase · Stripe · Tailwind CSS", desc: "Hardware-enabled SaaS for tourist-heavy restaurants. Features a Kiosk mode, custom receipt printer routing, and automated translation.", link: "/work/carta-clara" },
      { name: "Full Project Suite — SaaS, EdTech & Academic", tech: "Next.js · TypeScript · Supabase · Stripe · Gemini API · Node.js", desc: "The complete collection of SaaS platforms, interactive classroom tools, and academic research. From AI-powered business applications to gamified grammar drills.", link: "/work/edtech-tools" },
    ]
  },
  es: {
    personal: {
      name: "Antonio Tagaruma García",
      title: "Desarrollador Full-Stack de IA y Educador Licenciado",
      location: "Madrid, España",
      email: "antoniotagaruma8@gmail.com",
      phone: "+34 617 724 828",
      whatsapp: "@antoniotagaruma",
      github: "github.com/antoniotagaruma8",
      portfolio: "anton.io",
    },
    sections: {
      experience: "Experiencia",
      projects: "Proyectos Clave",
      skills: "Habilidades",
      education: "Educación",
      certifications: "Certificaciones",
      languages: "Idiomas"
    },
    experience: [
      {
        period: "2025 – 2026",
        title: "Auxiliar de Conversación y Coordinador GCLA",
        company: "IES Simone Veil",
        location: "Madrid, España",
        duties: [
          "Asistencia a profesores de inglés en clases de educación secundaria",
          "Coordinación y preparación de estudiantes para el programa Global Classrooms (Modelo de Naciones Unidas)",
          "Diseño de juegos web educativos y aplicaciones para mejorar la participación de los estudiantes",
          "Desarrollo de materiales didácticos interactivos y recursos educativos digitales",
        ],
        tags: [
          { label: "AICLE", type: "teal" },
          { label: "Global Classrooms", type: "teal" },
          { label: "EdTech", type: "blue" }
        ]
      },
      {
        period: "2024 – 2025",
        title: "Profesor de Inglés Online",
        company: "TUTLO-Poland",
        location: "Remoto (Estudiantes Polacos)",
        duties: [
          "Impartición de clases de inglés individuales a estudiantes polacos",
          "Adaptación de lecciones a los niveles y objetivos individuales de los estudiantes",
          "Uso de plataformas digitales para la enseñanza en línea",
        ],
        tags: [
          { label: "Remoto", type: "teal" },
          { label: "Enseñanza Online", type: "teal" }
        ]
      },
      {
        period: "2023 – 2024",
        title: "Educador y Administrador Web",
        company: "Aspenshire International School & Tree House Montessori Learning Center (bajo Sathitpathum Demonstration School)",
        location: "Tailandia",
        duties: [
          "Enseñé inglés a estudiantes de primaria utilizando metodologías activas y aprendizaje basado en proyectos.",
          "Gestioné marketing digital, redes sociales y desarrollo web para las escuelas.",
          "Diseñé planes de lecciones alineados con los estándares del plan de estudios internacional."
        ],
        tags: [
          { label: "ABP", type: "teal" },
          { label: "Desarrollo Web", type: "blue" }
        ]
      },
      {
        period: "2017 – 2022",
        title: "Profesor de ESL",
        company: "Varias Academias de Idiomas",
        location: "Corea del Sur",
        duties: [
          "Enseñanza del inglés a estudiantes coreanos de todas las edades y niveles",
          "Preparación de estudiantes para exámenes oficiales de inglés (TOEIC, TOEFL)",
          "Adaptación cultural y comunicación intercultural en un entorno asiático",
        ],
        tags: [
          { label: "Prep. TOEIC / TOEFL", type: "teal" },
          { label: "5 años", type: "teal" }
        ]
      },
    ],
    education: [
      { year: "2026", degree: "Máster de Formación Permanente en Teaching", institution: "Universidad de Alcalá", location: "España", note: "Formación pedagógica de nivel universitario reconocida en España" },
      { year: "2024", degree: "Máster en Artes en Educación, Especialidad en Inglés", institution: "National Teachers College", location: "Filipinas", note: "Estudios avanzados en liderazgo educativo, desarrollo curricular y pedagogía del lenguaje" },
      { year: "2022", degree: "Profesor Profesional Licenciado (LPT)", institution: "Professional Regulation Commission (PRC)", location: "Filipinas", note: "Licencia oficial del gobierno que confirma la competencia profesional para enseñar en todos los niveles educativos" },
      { year: "2020", degree: "Grado en Administración de Empresas, Especialidad en Sistemas de Información (MIS)", institution: "AMA University", location: "Filipinas", note: "Capacita para enseñar Economía, Negocios y TIC" },
    ],
    certifications: [
      { name: "TOEIC — 820/990", desc: "Certificación oficial del Test of English for International Communication que demuestra una competencia profesional avanzada." },
      { name: "Certificado TEFL (120 horas) — Teacher Records", desc: "Formación integral en la Enseñanza del Inglés como Lengua Extranjera, centrada en la planificación de lecciones, gestión del aula y gramática." },
      { name: "Certificado TESOL (120 horas) — International Open Academy", desc: "Certificación avanzada en la Enseñanza de Inglés para Hablantes de Otros Idiomas, especializada en metodologías dinámicas centradas en el estudiante." },
      { name: "Certificado en Enseñanza Profesional — AMA University", desc: "Programa educativo de posgrado que abarca teorías pedagógicas, estrategias de evaluación y principios de enseñanza." },
    ],
    languages: [
      { name: "Filipino", level: "Nativo", percent: 100 },
      { name: "Inglés", level: "C1 — Avanzado", percent: 90 },
      { name: "Español", level: "Básico", percent: 30 },
      { name: "Coreano", level: "Básico", percent: 30 },
    ],
    projects: [
      { name: "ESO Smart Lesson Planner — Diseño Curricular con IA | Cumple con LOMLOE | RAG Optimizado", tech: "Streamlit · FastAPI · Python · Gemini 2.0 · RAG · FAISS · PostgreSQL · Google OAuth", desc: "Plataforma full-stack de planificación de lecciones impulsada por IA. Incluye motor RAG, Google OAuth, generación dinámica de PDF, visualización de datos e integración con IA de Google Gemini.", link: "/work/esoslpv2" },
      { name: "CEFR Mock Exams — Exámenes de Práctica Cambridge", tech: "Next.js · TypeScript · Supabase · Groq · Gemini · Stripe", desc: "Plataforma de exámenes de inglés con IA full-stack con generación automatizada en 5 niveles del MCER. Integra múltiples LLMs, pagos con Stripe, Supabase PostgreSQL y pipelines cron.", link: "/work/cpe" },
      { name: "AI CV Builder — Generador de CV Inteligente", tech: "Vanilla JS · HTML/CSS · jsPDF · Gemini API", desc: "Aplicación de adaptación de CV del lado del cliente construida con Vanilla JS. Integra las APIs de Gemini/Groq directamente en el navegador con exportación a jsPDF.", link: "/work/cv-builder" },
      { name: "Carta Clara — Sistema Operativo para Restaurantes", tech: "Next.js · Supabase · Stripe · Tailwind CSS", desc: "SaaS habilitado por hardware para restaurantes turísticos. Incluye modo kiosco, enrutamiento de impresoras y traducción automática.", link: "/work/carta-clara" },
      { name: "Suite de Proyectos — SaaS, EdTech y Académico", tech: "Next.js · TypeScript · Supabase · Stripe · Gemini API · Node.js", desc: "La colección completa de plataformas SaaS, herramientas interactivas para el aula e investigación académica. Desde aplicaciones empresariales con IA hasta ejercicios de gramática gamificados.", link: "/work/edtech-tools" },
    ]
  }
};
