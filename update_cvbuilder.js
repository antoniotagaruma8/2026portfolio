const fs = require('fs');
const path = require('path');

const enContent = `---
title: "AI CV Builder"
subtitle: "Intelligent Resume Tailoring Platform"
tech: ["Next.js 16", "Supabase", "Stripe", "Gemini API", "Tailwind CSS v4"]
link: "/en/coming-soon"
github: "/en/coming-soon"
---

<div className="text-base text-muted-foreground leading-relaxed max-w-3xl mb-12">
<strong>CV Builder</strong> is a premium, full-stack Software-as-a-Service (SaaS) platform designed to automate and optimize the creation of professional resumes using Artificial Intelligence. Built as a credit-based micro-SaaS, the platform allows users to dynamically tailor their CVs to specific job descriptions, bypassing applicant tracking systems (ATS) and maximizing their hiring potential.

The application boasts a high-fidelity, ultra-modern dark-themed interface inspired by the "Google Antigravity" design system. It emphasizes a professional, high-end user experience (UX) characterized by glassmorphism, liquid layouts, and fluid motion tokens.
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
  {/* Card 1 */}
  <div className="group glass-card p-6 md:p-8 rounded-3xl border hover:border-red-500/30 transition-all cursor-default flex flex-col h-full">
    <div className="w-12 h-12 rounded-2xl bg-red-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shrink-0">
      <Activity className="text-red-500" size={24} />
    </div>
    <h3 className="font-bold text-xl text-foreground mb-4 group-hover:text-red-400 transition-colors">Intelligent Optimization</h3>
    <div className="text-sm text-muted-foreground leading-relaxed flex-grow space-y-4">
      <p>Uses the Gemini API to analyze target job descriptions and automatically rewrite bullet points, highlight relevant skills, and optimize the CV for Applicant Tracking Systems (ATS).</p>
    </div>
  </div>
  {/* Card 2 */}
  <div className="group glass-card p-6 md:p-8 rounded-3xl border hover:border-accent-blue/30 transition-all cursor-default flex flex-col h-full">
    <div className="w-12 h-12 rounded-2xl bg-accent-blue/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shrink-0">
      <Layers className="text-accent-blue" size={24} />
    </div>
    <h3 className="font-bold text-xl text-foreground mb-4 group-hover:text-accent-blue transition-colors">Premium Architecture</h3>
    <div className="text-sm text-muted-foreground leading-relaxed flex-grow space-y-4">
      <p>Features a highly modular, component-driven Next.js architecture styled with the Google Antigravity design system, utilizing advanced motion tokens and dark-mode glassmorphism.</p>
    </div>
  </div>
  {/* Card 3 */}
  <div className="group glass-card p-6 md:p-8 rounded-3xl border hover:border-accent-teal/30 transition-all cursor-default flex flex-col h-full">
    <div className="w-12 h-12 rounded-2xl bg-accent-teal/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shrink-0">
      <CheckCircle className="text-accent-teal" size={24} />
    </div>
    <h3 className="font-bold text-xl text-foreground mb-4 group-hover:text-accent-teal transition-colors">Client-Side Export</h3>
    <div className="text-sm text-muted-foreground leading-relaxed flex-grow space-y-4">
      <p>Leverages jsPDF for zero-latency, client-side PDF generation, ensuring user data remains secure and documents are instantly available for download.</p>
    </div>
  </div>
</div>

<h2 className="text-2xl font-bold tracking-tight mb-6 mt-12 border-b border-border pb-2">Technical Architecture</h2>

The platform is built on a modern, robust tech stack prioritizing performance, security, and developer experience.

<h3 className="text-lg font-bold text-foreground mt-10 mb-6">1. Front-End (Next.js & React)</h3>

<div className="space-y-8 my-8">
<div className="flex flex-col md:flex-row gap-2 md:gap-8 border-l-2 border-accent-blue/30 pl-4 md:pl-6 ml-2 md:ml-0 group">
  <div className="min-w-[220px] shrink-0 pt-1">
    <div className="text-sm font-bold text-foreground group-hover:text-accent-blue transition-colors">Framework</div>
  </div>
  <div className="text-sm text-muted-foreground leading-relaxed">
    Next.js 16 (App Router) with React 19.
  </div>
</div>
<div className="flex flex-col md:flex-row gap-2 md:gap-8 border-l-2 border-accent-blue/30 pl-4 md:pl-6 ml-2 md:ml-0 group">
  <div className="min-w-[220px] shrink-0 pt-1">
    <div className="text-sm font-bold text-foreground group-hover:text-accent-blue transition-colors">Styling</div>
  </div>
  <div className="text-sm text-muted-foreground leading-relaxed">
    Tailwind CSS v4 blended with custom CSS Modules (\`.module.css\`) to enforce strict, component-driven design tokens.
  </div>
</div>
<div className="flex flex-col md:flex-row gap-2 md:gap-8 border-l-2 border-accent-blue/30 pl-4 md:pl-6 ml-2 md:ml-0 group">
  <div className="min-w-[220px] shrink-0 pt-1">
    <div className="text-sm font-bold text-foreground group-hover:text-accent-blue transition-colors">Iconography</div>
  </div>
  <div className="text-sm text-muted-foreground leading-relaxed">
    \`@tabler/icons-react\` for premium, consistent SVG iconography.
  </div>
</div>
<div className="flex flex-col md:flex-row gap-2 md:gap-8 border-l-2 border-accent-blue/30 pl-4 md:pl-6 ml-2 md:ml-0 group">
  <div className="min-w-[220px] shrink-0 pt-1">
    <div className="text-sm font-bold text-foreground group-hover:text-accent-blue transition-colors">Key Features</div>
  </div>
  <div className="text-sm text-muted-foreground leading-relaxed">
    Server Components for rapid initial loads, dynamic client-side interactivity, and advanced routing (e.g., protected dashboard layouts, dynamic onboarding steps).
  </div>
</div>
</div>

<h3 className="text-lg font-bold text-foreground mt-10 mb-6">2. Back-End & Infrastructure (Supabase)</h3>

<div className="space-y-8 my-8">
<div className="flex flex-col md:flex-row gap-2 md:gap-8 border-l-2 border-accent-blue/30 pl-4 md:pl-6 ml-2 md:ml-0 group">
  <div className="min-w-[220px] shrink-0 pt-1">
    <div className="text-sm font-bold text-foreground group-hover:text-accent-blue transition-colors">Database & Auth</div>
  </div>
  <div className="text-sm text-muted-foreground leading-relaxed">
    Integrated with \`@supabase/supabase-js\` for seamless, secure user authentication (Magic Links/OAuth) and PostgreSQL database management.
  </div>
</div>
<div className="flex flex-col md:flex-row gap-2 md:gap-8 border-l-2 border-accent-blue/30 pl-4 md:pl-6 ml-2 md:ml-0 group">
  <div className="min-w-[220px] shrink-0 pt-1">
    <div className="text-sm font-bold text-foreground group-hover:text-accent-blue transition-colors">Data Architecture</div>
  </div>
  <div className="text-sm text-muted-foreground leading-relaxed">
    Securely stores user profiles, parsing history, generated CV assets, and real-time credit balances.
  </div>
</div>
<div className="flex flex-col md:flex-row gap-2 md:gap-8 border-l-2 border-accent-blue/30 pl-4 md:pl-6 ml-2 md:ml-0 group">
  <div className="min-w-[220px] shrink-0 pt-1">
    <div className="text-sm font-bold text-foreground group-hover:text-accent-blue transition-colors">Edge Computing</div>
  </div>
  <div className="text-sm text-muted-foreground leading-relaxed">
    Utilizes Next.js Server Actions and Route Handlers to securely communicate with Supabase and AI APIs without exposing secrets to the client.
  </div>
</div>
</div>

<h3 className="text-lg font-bold text-foreground mt-10 mb-6">3. Monetization Engine (Stripe)</h3>

<div className="space-y-8 my-8">
<div className="flex flex-col md:flex-row gap-2 md:gap-8 border-l-2 border-accent-blue/30 pl-4 md:pl-6 ml-2 md:ml-0 group">
  <div className="min-w-[220px] shrink-0 pt-1">
    <div className="text-sm font-bold text-foreground group-hover:text-accent-blue transition-colors">Payment Processing</div>
  </div>
  <div className="text-sm text-muted-foreground leading-relaxed">
    Integrated with \`stripe\` (v22+) to handle subscriptions and one-off credit top-ups securely.
  </div>
</div>
<div className="flex flex-col md:flex-row gap-2 md:gap-8 border-l-2 border-accent-blue/30 pl-4 md:pl-6 ml-2 md:ml-0 group">
  <div className="min-w-[220px] shrink-0 pt-1">
    <div className="text-sm font-bold text-foreground group-hover:text-accent-blue transition-colors">Business Model</div>
  </div>
  <div className="text-sm text-muted-foreground leading-relaxed">
    Operates on a credit-based workflow—users consume credits to perform high-compute AI tailoring tasks (e.g., rewriting bullet points, extracting keywords, formatting to target roles).
  </div>
</div>
</div>

<h2 className="text-2xl font-bold tracking-tight mb-6 mt-12 border-b border-border pb-2">UI/UX & Design System ("Google Antigravity")</h2>

The interface is a major differentiator, abandoning generic SaaS templates in favor of a bespoke, immersive experience:

<div className="space-y-8 my-8">
<div className="flex flex-col md:flex-row gap-2 md:gap-8 border-l-2 border-accent-blue/30 pl-4 md:pl-6 ml-2 md:ml-0 group">
  <div className="min-w-[220px] shrink-0 pt-1">
    <div className="text-sm font-bold text-foreground group-hover:text-accent-blue transition-colors">Dark Mode Native</div>
  </div>
  <div className="text-sm text-muted-foreground leading-relaxed">
    Deep, saturated dark themes that reduce eye strain while communicating a premium, "pro-tier" tool aesthetic.
  </div>
</div>
<div className="flex flex-col md:flex-row gap-2 md:gap-8 border-l-2 border-accent-blue/30 pl-4 md:pl-6 ml-2 md:ml-0 group">
  <div className="min-w-[220px] shrink-0 pt-1">
    <div className="text-sm font-bold text-foreground group-hover:text-accent-blue transition-colors">Glassmorphism</div>
  </div>
  <div className="text-sm text-muted-foreground leading-relaxed">
    Extensive use of \`backdrop-filter\` to create floating panels, layered contextual menus, and sleek modal overlays.
  </div>
</div>
<div className="flex flex-col md:flex-row gap-2 md:gap-8 border-l-2 border-accent-blue/30 pl-4 md:pl-6 ml-2 md:ml-0 group">
  <div className="min-w-[220px] shrink-0 pt-1">
    <div className="text-sm font-bold text-foreground group-hover:text-accent-blue transition-colors">Advanced Motion Tokens</div>
  </div>
  <div className="text-sm text-muted-foreground leading-relaxed">
    Staggered entry animations, micro-interactions on hover/click, and seamless page transitions create a software experience that feels alive and highly responsive.
  </div>
</div>
<div className="flex flex-col md:flex-row gap-2 md:gap-8 border-l-2 border-accent-blue/30 pl-4 md:pl-6 ml-2 md:ml-0 group">
  <div className="min-w-[220px] shrink-0 pt-1">
    <div className="text-sm font-bold text-foreground group-hover:text-accent-blue transition-colors">Key Views Developed</div>
  </div>
  <div className="text-sm text-muted-foreground leading-relaxed space-y-2">
    <p><strong>Landing Page:</strong> High-converting hero section with dynamic product showcases.</p>
    <p><strong>Onboarding Wizard:</strong> Frictionless profile setup.</p>
    <p><strong>Dashboard:</strong> The core workspace for managing CVs, viewing generation history, and tracking credits.</p>
    <p><strong>Settings & Profile:</strong> Centralized account management and billing.</p>
  </div>
</div>
</div>

<h2 className="text-2xl font-bold tracking-tight mb-6 mt-12 border-b border-border pb-2">Value Proposition</h2>

The <strong>CV Builder</strong> platform sits at the intersection of aesthetic brilliance and utilitarian AI automation. It provides job seekers with an unparalleled, "done-for-you" document preparation experience that historically required expensive human consultants.

By combining the lightning-fast performance of Next.js 16, the robust scalability of Supabase, the reliability of Stripe, and a jaw-dropping UI, the platform represents a masterclass in modern SaaS architecture—ready to scale and built to convert.

{/* Bento Media Gallery */}
<div className="mt-12">
  <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-4 px-2 block">Platform Preview</span>
  <div className="grid grid-cols-2 gap-3 max-w-4xl mx-auto h-[350px]">
    <div className="col-span-1 overflow-hidden rounded-xl border border-border bg-card flex items-center justify-center text-muted-foreground/50 relative">
      <ZoomableImage src="/images/cv-builder/1.png" alt="CV Builder Dashboard" className="object-cover w-full h-full" />
    </div>
    <div className="col-span-1 overflow-hidden rounded-xl border border-border bg-card flex items-center justify-center text-muted-foreground/50 relative">
      <ZoomableImage src="/images/cv-builder/2.png" alt="CV Builder Settings" className="object-cover w-full h-full" />
    </div>
  </div>
</div>
`;

const esContent = `---
title: "AI CV Builder"
subtitle: "Plataforma Inteligente de Optimización de Currículums"
tech: ["Next.js 16", "Supabase", "Stripe", "Gemini API", "Tailwind CSS v4"]
link: "/es/coming-soon"
github: "/es/coming-soon"
---

<div className="text-base text-muted-foreground leading-relaxed max-w-3xl mb-12">
<strong>CV Builder</strong> es una plataforma de software como servicio (SaaS) full-stack y premium, diseñada para automatizar y optimizar la creación de currículums profesionales utilizando Inteligencia Artificial. Construida como un micro-SaaS basado en créditos, la plataforma permite a los usuarios adaptar dinámicamente sus CVs a descripciones de puestos específicos, superando los sistemas de seguimiento de candidatos (ATS) y maximizando su potencial de contratación.

La aplicación cuenta con una interfaz de alta fidelidad, con un tema oscuro ultramoderno inspirado en el sistema de diseño "Google Antigravity". Destaca por una experiencia de usuario (UX) profesional y de alta gama, caracterizada por el glassmorfismo, diseños fluidos y tokens de movimiento suaves.
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
  {/* Card 1 */}
  <div className="group glass-card p-6 md:p-8 rounded-3xl border hover:border-red-500/30 transition-all cursor-default flex flex-col h-full">
    <div className="w-12 h-12 rounded-2xl bg-red-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shrink-0">
      <Activity className="text-red-500" size={24} />
    </div>
    <h3 className="font-bold text-xl text-foreground mb-4 group-hover:text-red-400 transition-colors">Optimización Inteligente</h3>
    <div className="text-sm text-muted-foreground leading-relaxed flex-grow space-y-4">
      <p>Utiliza la API de Gemini para analizar descripciones de trabajos objetivo y reescribir viñetas, resaltar habilidades relevantes y optimizar el CV para los ATS (Applicant Tracking Systems).</p>
    </div>
  </div>
  {/* Card 2 */}
  <div className="group glass-card p-6 md:p-8 rounded-3xl border hover:border-accent-blue/30 transition-all cursor-default flex flex-col h-full">
    <div className="w-12 h-12 rounded-2xl bg-accent-blue/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shrink-0">
      <Layers className="text-accent-blue" size={24} />
    </div>
    <h3 className="font-bold text-xl text-foreground mb-4 group-hover:text-accent-blue transition-colors">Arquitectura Premium</h3>
    <div className="text-sm text-muted-foreground leading-relaxed flex-grow space-y-4">
      <p>Presenta una arquitectura Next.js altamente modular y basada en componentes, estilizada con el sistema de diseño Google Antigravity, utilizando tokens de movimiento avanzados y glassmorfismo en modo oscuro.</p>
    </div>
  </div>
  {/* Card 3 */}
  <div className="group glass-card p-6 md:p-8 rounded-3xl border hover:border-accent-teal/30 transition-all cursor-default flex flex-col h-full">
    <div className="w-12 h-12 rounded-2xl bg-accent-teal/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shrink-0">
      <CheckCircle className="text-accent-teal" size={24} />
    </div>
    <h3 className="font-bold text-xl text-foreground mb-4 group-hover:text-accent-teal transition-colors">Exportación Local</h3>
    <div className="text-sm text-muted-foreground leading-relaxed flex-grow space-y-4">
      <p>Aprovecha jsPDF para la generación de PDF del lado del cliente sin latencia, lo que garantiza que los datos del usuario permanezcan seguros y los documentos estén disponibles al instante para su descarga.</p>
    </div>
  </div>
</div>

<h2 className="text-2xl font-bold tracking-tight mb-6 mt-12 border-b border-border pb-2">Arquitectura Técnica</h2>

La plataforma está construida sobre un stack tecnológico moderno y robusto que prioriza el rendimiento, la seguridad y la experiencia del desarrollador.

<h3 className="text-lg font-bold text-foreground mt-10 mb-6">1. Front-End (Next.js y React)</h3>

<div className="space-y-8 my-8">
<div className="flex flex-col md:flex-row gap-2 md:gap-8 border-l-2 border-accent-blue/30 pl-4 md:pl-6 ml-2 md:ml-0 group">
  <div className="min-w-[220px] shrink-0 pt-1">
    <div className="text-sm font-bold text-foreground group-hover:text-accent-blue transition-colors">Framework</div>
  </div>
  <div className="text-sm text-muted-foreground leading-relaxed">
    Next.js 16 (App Router) con React 19.
  </div>
</div>
<div className="flex flex-col md:flex-row gap-2 md:gap-8 border-l-2 border-accent-blue/30 pl-4 md:pl-6 ml-2 md:ml-0 group">
  <div className="min-w-[220px] shrink-0 pt-1">
    <div className="text-sm font-bold text-foreground group-hover:text-accent-blue transition-colors">Estilos</div>
  </div>
  <div className="text-sm text-muted-foreground leading-relaxed">
    Tailwind CSS v4 combinado con módulos CSS personalizados (\`.module.css\`) para imponer tokens de diseño estrictos impulsados por componentes.
  </div>
</div>
<div className="flex flex-col md:flex-row gap-2 md:gap-8 border-l-2 border-accent-blue/30 pl-4 md:pl-6 ml-2 md:ml-0 group">
  <div className="min-w-[220px] shrink-0 pt-1">
    <div className="text-sm font-bold text-foreground group-hover:text-accent-blue transition-colors">Iconografía</div>
  </div>
  <div className="text-sm text-muted-foreground leading-relaxed">
    \`@tabler/icons-react\` para iconografía SVG coherente y de alta calidad.
  </div>
</div>
<div className="flex flex-col md:flex-row gap-2 md:gap-8 border-l-2 border-accent-blue/30 pl-4 md:pl-6 ml-2 md:ml-0 group">
  <div className="min-w-[220px] shrink-0 pt-1">
    <div className="text-sm font-bold text-foreground group-hover:text-accent-blue transition-colors">Características Clave</div>
  </div>
  <div className="text-sm text-muted-foreground leading-relaxed">
    Server Components para cargas iniciales rápidas, interactividad dinámica en el cliente y enrutamiento avanzado (ej. diseños de panel protegidos, pasos de incorporación dinámicos).
  </div>
</div>
</div>

<h3 className="text-lg font-bold text-foreground mt-10 mb-6">2. Back-End e Infraestructura (Supabase)</h3>

<div className="space-y-8 my-8">
<div className="flex flex-col md:flex-row gap-2 md:gap-8 border-l-2 border-accent-blue/30 pl-4 md:pl-6 ml-2 md:ml-0 group">
  <div className="min-w-[220px] shrink-0 pt-1">
    <div className="text-sm font-bold text-foreground group-hover:text-accent-blue transition-colors">Base de Datos y Auth</div>
  </div>
  <div className="text-sm text-muted-foreground leading-relaxed">
    Integrado con \`@supabase/supabase-js\` para una autenticación de usuario segura y fluida (Magic Links/OAuth) y gestión de bases de datos PostgreSQL.
  </div>
</div>
<div className="flex flex-col md:flex-row gap-2 md:gap-8 border-l-2 border-accent-blue/30 pl-4 md:pl-6 ml-2 md:ml-0 group">
  <div className="min-w-[220px] shrink-0 pt-1">
    <div className="text-sm font-bold text-foreground group-hover:text-accent-blue transition-colors">Arquitectura de Datos</div>
  </div>
  <div className="text-sm text-muted-foreground leading-relaxed">
    Almacena de forma segura perfiles de usuario, historial de análisis, activos de CV generados y saldos de créditos en tiempo real.
  </div>
</div>
<div className="flex flex-col md:flex-row gap-2 md:gap-8 border-l-2 border-accent-blue/30 pl-4 md:pl-6 ml-2 md:ml-0 group">
  <div className="min-w-[220px] shrink-0 pt-1">
    <div className="text-sm font-bold text-foreground group-hover:text-accent-blue transition-colors">Edge Computing</div>
  </div>
  <div className="text-sm text-muted-foreground leading-relaxed">
    Utiliza Next.js Server Actions y Route Handlers para comunicarse de forma segura con Supabase y las API de IA sin exponer los secretos al cliente.
  </div>
</div>
</div>

<h3 className="text-lg font-bold text-foreground mt-10 mb-6">3. Motor de Monetización (Stripe)</h3>

<div className="space-y-8 my-8">
<div className="flex flex-col md:flex-row gap-2 md:gap-8 border-l-2 border-accent-blue/30 pl-4 md:pl-6 ml-2 md:ml-0 group">
  <div className="min-w-[220px] shrink-0 pt-1">
    <div className="text-sm font-bold text-foreground group-hover:text-accent-blue transition-colors">Procesamiento de Pagos</div>
  </div>
  <div className="text-sm text-muted-foreground leading-relaxed">
    Integrado con \`stripe\` (v22+) para manejar suscripciones y recargas de crédito únicas de forma segura.
  </div>
</div>
<div className="flex flex-col md:flex-row gap-2 md:gap-8 border-l-2 border-accent-blue/30 pl-4 md:pl-6 ml-2 md:ml-0 group">
  <div className="min-w-[220px] shrink-0 pt-1">
    <div className="text-sm font-bold text-foreground group-hover:text-accent-blue transition-colors">Modelo de Negocio</div>
  </div>
  <div className="text-sm text-muted-foreground leading-relaxed">
    Opera con un flujo de trabajo basado en créditos: los usuarios consumen créditos para realizar tareas de adaptación de IA de alta computación (ej. reescribir viñetas, extraer palabras clave, dar formato a roles objetivo).
  </div>
</div>
</div>

<h2 className="text-2xl font-bold tracking-tight mb-6 mt-12 border-b border-border pb-2">UI/UX y Sistema de Diseño ("Google Antigravity")</h2>

La interfaz es un diferenciador importante, abandonando las plantillas SaaS genéricas en favor de una experiencia inmersiva y a medida:

<div className="space-y-8 my-8">
<div className="flex flex-col md:flex-row gap-2 md:gap-8 border-l-2 border-accent-blue/30 pl-4 md:pl-6 ml-2 md:ml-0 group">
  <div className="min-w-[220px] shrink-0 pt-1">
    <div className="text-sm font-bold text-foreground group-hover:text-accent-blue transition-colors">Modo Oscuro Nativo</div>
  </div>
  <div className="text-sm text-muted-foreground leading-relaxed">
    Temas oscuros profundos y saturados que reducen la fatiga visual mientras comunican una estética de herramienta de nivel "pro" premium.
  </div>
</div>
<div className="flex flex-col md:flex-row gap-2 md:gap-8 border-l-2 border-accent-blue/30 pl-4 md:pl-6 ml-2 md:ml-0 group">
  <div className="min-w-[220px] shrink-0 pt-1">
    <div className="text-sm font-bold text-foreground group-hover:text-accent-blue transition-colors">Glassmorfismo</div>
  </div>
  <div className="text-sm text-muted-foreground leading-relaxed">
    Uso extensivo de \`backdrop-filter\` para crear paneles flotantes, menús contextuales en capas y superposiciones modales elegantes.
  </div>
</div>
<div className="flex flex-col md:flex-row gap-2 md:gap-8 border-l-2 border-accent-blue/30 pl-4 md:pl-6 ml-2 md:ml-0 group">
  <div className="min-w-[220px] shrink-0 pt-1">
    <div className="text-sm font-bold text-foreground group-hover:text-accent-blue transition-colors">Tokens de Movimiento Avanzados</div>
  </div>
  <div className="text-sm text-muted-foreground leading-relaxed">
    Las animaciones de entrada escalonadas, las microinteracciones al pasar el cursor o hacer clic y las transiciones de página fluidas crean una experiencia de software que se siente viva y altamente receptiva.
  </div>
</div>
<div className="flex flex-col md:flex-row gap-2 md:gap-8 border-l-2 border-accent-blue/30 pl-4 md:pl-6 ml-2 md:ml-0 group">
  <div className="min-w-[220px] shrink-0 pt-1">
    <div className="text-sm font-bold text-foreground group-hover:text-accent-blue transition-colors">Vistas Clave Desarrolladas</div>
  </div>
  <div className="text-sm text-muted-foreground leading-relaxed space-y-2">
    <p><strong>Página de Inicio:</strong> Sección de héroe de alta conversión con exhibiciones dinámicas de productos.</p>
    <p><strong>Asistente de Incorporación:</strong> Configuración de perfil sin fricciones.</p>
    <p><strong>Panel (Dashboard):</strong> El espacio de trabajo central para gestionar CVs, ver el historial de generación y realizar un seguimiento de los créditos.</p>
    <p><strong>Ajustes y Perfil:</strong> Gestión centralizada de cuentas y facturación.</p>
  </div>
</div>
</div>

<h2 className="text-2xl font-bold tracking-tight mb-6 mt-12 border-b border-border pb-2">Propuesta de Valor</h2>

La plataforma <strong>CV Builder</strong> se encuentra en la intersección del brillo estético y la automatización utilitaria de la IA. Proporciona a los buscadores de empleo una experiencia de preparación de documentos inigualable que históricamente requería costosos consultores humanos.

Al combinar el rendimiento ultrarrápido de Next.js 16, la sólida escalabilidad de Supabase, la fiabilidad de Stripe y una interfaz de usuario asombrosa, la plataforma representa una clase magistral en la arquitectura SaaS moderna: lista para escalar y construida para convertir.

{/* Bento Media Gallery */}
<div className="mt-12">
  <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-4 px-2 block">Demo de la Plataforma en Vivo</span>
  <div className="grid grid-cols-2 gap-3 max-w-4xl mx-auto h-[350px]">
    <div className="col-span-1 overflow-hidden rounded-xl border border-border bg-card flex items-center justify-center text-muted-foreground/50 relative">
      <ZoomableImage src="/images/cv-builder/1.png" alt="CV Builder Dashboard" className="object-cover w-full h-full" />
    </div>
    <div className="col-span-1 overflow-hidden rounded-xl border border-border bg-card flex items-center justify-center text-muted-foreground/50 relative">
      <ZoomableImage src="/images/cv-builder/2.png" alt="CV Builder Settings" className="object-cover w-full h-full" />
    </div>
  </div>
</div>
`;

fs.writeFileSync(path.join(__dirname, 'src/content/work/cv-builder.mdx'), enContent);
fs.writeFileSync(path.join(__dirname, 'src/content/work/es/cv-builder.mdx'), esContent);
console.log('Successfully updated cv-builder case studies.');
