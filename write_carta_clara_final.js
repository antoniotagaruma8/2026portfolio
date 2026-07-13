const fs = require('fs');
const path = require('path');

const enContent = `---
title: "Carta Clara BOS"
subtitle: "Hardware-Enabled SaaS Operating System for Restaurants"
tech: ["Next.js 14", "Supabase", "Stripe", "Groq AI", "jsPDF"]
link: "/en/coming-soon"
github: "/en/coming-soon"
---

<div className="text-base text-muted-foreground leading-relaxed max-w-3xl mb-12">
<strong>Carta Clara</strong> is a comprehensive Business Growth Operating System (BOS) engineered exclusively for the restaurant industry. Operating on a unique <strong>Hardware-Enabled SaaS</strong> model, it provides venues with a complete ecosystem encompassing both custom software and configured hardware. This dual approach ensures high operational dependence and stickiness, directly linking the platform to the restaurant's daily revenue generation and management.

Designed to eliminate upfront risk for the provider, the business model secures positive cash flow from Day 1 through an upfront hardware purchase by the client, followed by a dynamic, escalating subscription tier designed to maximize Customer Lifetime Value (CLV).
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
  <div className="group glass-card p-6 md:p-8 rounded-3xl border hover:border-accent-blue/30 transition-all cursor-default flex flex-col h-full">
    <div className="w-12 h-12 rounded-2xl bg-accent-blue/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shrink-0">
      <Layers className="text-accent-blue" size={24} />
    </div>
    <h3 className="font-bold text-xl text-foreground mb-4 group-hover:text-accent-blue transition-colors">The Ordering Engine</h3>
    <div className="text-sm text-muted-foreground leading-relaxed flex-grow space-y-4">
      <p>Features a digital KDS loop, visual pairing algorithms for automated upselling, dynamic pricing displays (Happy Hour triggers), and comprehensive allergen filtering.</p>
    </div>
  </div>
  <div className="group glass-card p-6 md:p-8 rounded-3xl border hover:border-accent-teal/30 transition-all cursor-default flex flex-col h-full">
    <div className="w-12 h-12 rounded-2xl bg-accent-teal/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shrink-0">
      <Activity className="text-accent-teal" size={24} />
    </div>
    <h3 className="font-bold text-xl text-foreground mb-4 group-hover:text-accent-teal transition-colors">Staff Motivation & Operations</h3>
    <div className="text-sm text-muted-foreground leading-relaxed flex-grow space-y-4">
      <p>Introduces waiter gamification, live tip transparency, and a strict chain-of-custody service timeline to optimize floor operations.</p>
    </div>
  </div>
  <div className="group glass-card p-6 md:p-8 rounded-3xl border hover:border-red-500/30 transition-all cursor-default flex flex-col h-full">
    <div className="w-12 h-12 rounded-2xl bg-red-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shrink-0">
      <CheckCircle className="text-red-500" size={24} />
    </div>
    <h3 className="font-bold text-xl text-foreground mb-4 group-hover:text-red-400 transition-colors">Marketing & Retention Hub</h3>
    <div className="text-sm text-muted-foreground leading-relaxed flex-grow space-y-4">
      <p>Integrates one-tap VIP Club opt-ins, smart "Review Traps" redirecting positive feedback to Google Maps, and WhatsApp broadcast list generation (VCF exports).</p>
    </div>
  </div>
  <div className="group glass-card p-6 md:p-8 rounded-3xl border hover:border-amber-500/30 transition-all cursor-default flex flex-col h-full">
    <div className="w-12 h-12 rounded-2xl bg-amber-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shrink-0">
      <ShieldCheck className="text-amber-500" size={24} />
    </div>
    <h3 className="font-bold text-xl text-foreground mb-4 group-hover:text-amber-500 transition-colors">God-Mode Super Admin</h3>
    <div className="text-sm text-muted-foreground leading-relaxed flex-grow space-y-4">
      <p>A centralized provisioning hub featuring asset tracking (Hardware Allocator), a digital filing cabinet for executed contracts, and a global kill switch for subscription management.</p>
    </div>
  </div>
</div>

<h2 className="text-2xl font-bold tracking-tight mb-6 mt-12 border-b border-border pb-2">Technical Architecture</h2>

The platform is built on a high-performance, modern tech stack designed for operational resilience, scalability, and seamless user experiences across various touchpoints.

<h3 className="text-lg font-bold text-foreground mt-10 mb-6">1. Front-End (Next.js & React)</h3>

<div className="space-y-8 my-8">
<div className="flex flex-col md:flex-row gap-2 md:gap-8 border-l-2 border-accent-blue/30 pl-4 md:pl-6 ml-2 md:ml-0 group">
  <div className="min-w-[220px] shrink-0 pt-1">
    <div className="text-sm font-bold text-foreground group-hover:text-accent-blue transition-colors">Framework</div>
  </div>
  <div className="text-sm text-muted-foreground leading-relaxed">
    Next.js 14 (App Router) for robust server-side rendering and static site generation, ensuring lightning-fast load times for guest-facing digital menus.
  </div>
</div>
<div className="flex flex-col md:flex-row gap-2 md:gap-8 border-l-2 border-accent-blue/30 pl-4 md:pl-6 ml-2 md:ml-0 group">
  <div className="min-w-[220px] shrink-0 pt-1">
    <div className="text-sm font-bold text-foreground group-hover:text-accent-blue transition-colors">Styling & UI</div>
  </div>
  <div className="text-sm text-muted-foreground leading-relaxed">
    Tailwind CSS coupled with a dynamic Theme Registry system for hot-swapping brand identities per restaurant.
  </div>
</div>
<div className="flex flex-col md:flex-row gap-2 md:gap-8 border-l-2 border-accent-blue/30 pl-4 md:pl-6 ml-2 md:ml-0 group">
  <div className="min-w-[220px] shrink-0 pt-1">
    <div className="text-sm font-bold text-foreground group-hover:text-accent-blue transition-colors">Operational UI</div>
  </div>
  <div className="text-sm text-muted-foreground leading-relaxed">
    Specialized interfaces including a clean Grid View for Kitchen Display Systems (KDS), Waiter Gamification Leaderboards, and an intelligent Manager Dashboard.
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
    Powered by Supabase for secure, role-based access control (Super Admin, Manager, Staff, Guest).
  </div>
</div>
<div className="flex flex-col md:flex-row gap-2 md:gap-8 border-l-2 border-accent-blue/30 pl-4 md:pl-6 ml-2 md:ml-0 group">
  <div className="min-w-[220px] shrink-0 pt-1">
    <div className="text-sm font-bold text-foreground group-hover:text-accent-blue transition-colors">Data & Storage</div>
  </div>
  <div className="text-sm text-muted-foreground leading-relaxed">
    Real-time PostgreSQL database management for live KDS loops (Pending -> Cooking -> Ready -> Served) and robust cloud storage for digital document filing and auto-archiving.
  </div>
</div>
<div className="flex flex-col md:flex-row gap-2 md:gap-8 border-l-2 border-accent-blue/30 pl-4 md:pl-6 ml-2 md:ml-0 group">
  <div className="min-w-[220px] shrink-0 pt-1">
    <div className="text-sm font-bold text-foreground group-hover:text-accent-blue transition-colors">Compliance & Security</div>
  </div>
  <div className="text-sm text-muted-foreground leading-relaxed">
    Built-in anti-theft audit logs, "Hacienda Safe" proforma logic, and strict GDPR-compliant data handling.
  </div>
</div>
</div>

<h3 className="text-lg font-bold text-foreground mt-10 mb-6">3. Integrations & AI Engine</h3>

<div className="space-y-8 my-8">
<div className="flex flex-col md:flex-row gap-2 md:gap-8 border-l-2 border-accent-blue/30 pl-4 md:pl-6 ml-2 md:ml-0 group">
  <div className="min-w-[220px] shrink-0 pt-1">
    <div className="text-sm font-bold text-foreground group-hover:text-accent-blue transition-colors">Payments & Billing</div>
  </div>
  <div className="text-sm text-muted-foreground leading-relaxed">
    Stripe integration driving the subscription engine, handling the initial "Partner Contract" billing and the automated escalation to premium tiers in Year 2.
  </div>
</div>
<div className="flex flex-col md:flex-row gap-2 md:gap-8 border-l-2 border-accent-blue/30 pl-4 md:pl-6 ml-2 md:ml-0 group">
  <div className="min-w-[220px] shrink-0 pt-1">
    <div className="text-sm font-bold text-foreground group-hover:text-accent-blue transition-colors">Communications</div>
  </div>
  <div className="text-sm text-muted-foreground leading-relaxed">
    Resend integration for automated transactional emails and marketing broadcasts.
  </div>
</div>
<div className="flex flex-col md:flex-row gap-2 md:gap-8 border-l-2 border-accent-blue/30 pl-4 md:pl-6 ml-2 md:ml-0 group">
  <div className="min-w-[220px] shrink-0 pt-1">
    <div className="text-sm font-bold text-foreground group-hover:text-accent-blue transition-colors">Artificial Intelligence (Groq)</div>
  </div>
  <div className="text-sm text-muted-foreground leading-relaxed space-y-2">
    <p><strong>Smart Waiter:</strong> An AI-driven chat assistant for guests utilizing RAG (Retrieval-Augmented Generation) on the restaurant's specific menu.</p>
    <p><strong>AI CFO:</strong> A business intelligence tool for managers that generates strategic reports based on P&L data and venue heatmaps.</p>
  </div>
</div>
<div className="flex flex-col md:flex-row gap-2 md:gap-8 border-l-2 border-accent-blue/30 pl-4 md:pl-6 ml-2 md:ml-0 group">
  <div className="min-w-[220px] shrink-0 pt-1">
    <div className="text-sm font-bold text-foreground group-hover:text-accent-blue transition-colors">Legal Tech</div>
  </div>
  <div className="text-sm text-muted-foreground leading-relaxed">
    Client-side PDF generation using \`jspdf\` for dynamic, timestamped contract creation with IP logging.
  </div>
</div>
</div>

<h2 className="text-2xl font-bold tracking-tight mb-6 mt-12 border-b border-border pb-2">Value Proposition</h2>

<strong>Carta Clara</strong> is not just a digital menu; it is an aggressive revenue-expansion tool for restaurants. By combining operational necessity (KDS, Ordering) with advanced growth mechanics (AI Upselling, CRM, Staff Gamification), the platform embeds itself deeply into the client's business. 

For the platform owner, the "Partner Contract" model ensures zero hardware risk, immediate profitability, and an automated path to high MRR (Monthly Recurring Revenue) as clients transition into the long-term growth phase. It is a premium, enterprise-grade solution built for maximum retention and scalable deployment.

<AutoScreenshotGallery fallback1="/images/carta-clara/1.png" fallback2="/images/carta-clara/2.png" />
`;

const esContent = `---
title: "Carta Clara BOS"
subtitle: "Sistema Operativo SaaS Habilitado por Hardware para Restaurantes"
tech: ["Next.js 14", "Supabase", "Stripe", "Groq AI", "jsPDF"]
link: "/es/coming-soon"
github: "/es/coming-soon"
---

<div className="text-base text-muted-foreground leading-relaxed max-w-3xl mb-12">
<strong>Carta Clara</strong> es un Sistema Operativo de Crecimiento Empresarial (BOS) diseñado exclusivamente para la industria de la restauración. Operando bajo un modelo único <strong>SaaS Habilitado por Hardware</strong>, proporciona a los locales un ecosistema completo que abarca software personalizado y hardware configurado. Este enfoque dual garantiza una alta dependencia operativa, vinculando directamente la plataforma a la generación y gestión de ingresos diarios del restaurante.

Diseñado para eliminar el riesgo inicial para el proveedor, el modelo de negocio asegura un flujo de caja positivo desde el Día 1 a través de la compra inicial de hardware por parte del cliente, seguido de un nivel de suscripción escalonado y dinámico diseñado para maximizar el Valor de Vida del Cliente (CLV).
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
  <div className="group glass-card p-6 md:p-8 rounded-3xl border hover:border-accent-blue/30 transition-all cursor-default flex flex-col h-full">
    <div className="w-12 h-12 rounded-2xl bg-accent-blue/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shrink-0">
      <Layers className="text-accent-blue" size={24} />
    </div>
    <h3 className="font-bold text-xl text-foreground mb-4 group-hover:text-accent-blue transition-colors">Motor de Pedidos</h3>
    <div className="text-sm text-muted-foreground leading-relaxed flex-grow space-y-4">
      <p>Cuenta con un bucle digital KDS, algoritmos visuales de emparejamiento para ventas adicionales automáticas, pantallas de precios dinámicas (activadores de Happy Hour) y un filtro integral de alérgenos.</p>
    </div>
  </div>
  <div className="group glass-card p-6 md:p-8 rounded-3xl border hover:border-accent-teal/30 transition-all cursor-default flex flex-col h-full">
    <div className="w-12 h-12 rounded-2xl bg-accent-teal/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shrink-0">
      <Activity className="text-accent-teal" size={24} />
    </div>
    <h3 className="font-bold text-xl text-foreground mb-4 group-hover:text-accent-teal transition-colors">Motivación y Operaciones</h3>
    <div className="text-sm text-muted-foreground leading-relaxed flex-grow space-y-4">
      <p>Introduce la gamificación de camareros, la transparencia de propinas en vivo y una línea de tiempo estricta de cadena de custodia para optimizar las operaciones de sala.</p>
    </div>
  </div>
  <div className="group glass-card p-6 md:p-8 rounded-3xl border hover:border-red-500/30 transition-all cursor-default flex flex-col h-full">
    <div className="w-12 h-12 rounded-2xl bg-red-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shrink-0">
      <CheckCircle className="text-red-500" size={24} />
    </div>
    <h3 className="font-bold text-xl text-foreground mb-4 group-hover:text-red-400 transition-colors">Hub CRM y Marketing</h3>
    <div className="text-sm text-muted-foreground leading-relaxed flex-grow space-y-4">
      <p>Integra suscripciones al Club VIP con un toque, "Trampas de Reseñas" inteligentes redirigiendo retroalimentación positiva a Google Maps, y generación de listas de difusión por WhatsApp (exportaciones VCF).</p>
    </div>
  </div>
  <div className="group glass-card p-6 md:p-8 rounded-3xl border hover:border-amber-500/30 transition-all cursor-default flex flex-col h-full">
    <div className="w-12 h-12 rounded-2xl bg-amber-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shrink-0">
      <ShieldCheck className="text-amber-500" size={24} />
    </div>
    <h3 className="font-bold text-xl text-foreground mb-4 group-hover:text-amber-500 transition-colors">Súper Administrador</h3>
    <div className="text-sm text-muted-foreground leading-relaxed flex-grow space-y-4">
      <p>Un centro de aprovisionamiento que presenta seguimiento de activos (Asignador de Hardware), un archivador digital de contratos y un interruptor maestro para la gestión de suscripciones.</p>
    </div>
  </div>
</div>

<h2 className="text-2xl font-bold tracking-tight mb-6 mt-12 border-b border-border pb-2">Arquitectura Técnica</h2>

La plataforma está construida sobre un stack moderno y de alto rendimiento diseñado para la resiliencia operativa y la escalabilidad en varios puntos de contacto.

<h3 className="text-lg font-bold text-foreground mt-10 mb-6">1. Front-End (Next.js y React)</h3>

<div className="space-y-8 my-8">
<div className="flex flex-col md:flex-row gap-2 md:gap-8 border-l-2 border-accent-blue/30 pl-4 md:pl-6 ml-2 md:ml-0 group">
  <div className="min-w-[220px] shrink-0 pt-1">
    <div className="text-sm font-bold text-foreground group-hover:text-accent-blue transition-colors">Framework</div>
  </div>
  <div className="text-sm text-muted-foreground leading-relaxed">
    Next.js 14 (App Router) para renderizado del lado del servidor robusto y generación de sitios estáticos, garantizando tiempos de carga ultrarrápidos para los menús.
  </div>
</div>
<div className="flex flex-col md:flex-row gap-2 md:gap-8 border-l-2 border-accent-blue/30 pl-4 md:pl-6 ml-2 md:ml-0 group">
  <div className="min-w-[220px] shrink-0 pt-1">
    <div className="text-sm font-bold text-foreground group-hover:text-accent-blue transition-colors">Estilos e Interfaz</div>
  </div>
  <div className="text-sm text-muted-foreground leading-relaxed">
    Tailwind CSS combinado con un sistema dinámico de Registro de Temas para el intercambio en caliente de identidades de marca por restaurante.
  </div>
</div>
<div className="flex flex-col md:flex-row gap-2 md:gap-8 border-l-2 border-accent-blue/30 pl-4 md:pl-6 ml-2 md:ml-0 group">
  <div className="min-w-[220px] shrink-0 pt-1">
    <div className="text-sm font-bold text-foreground group-hover:text-accent-blue transition-colors">UI Operativa</div>
  </div>
  <div className="text-sm text-muted-foreground leading-relaxed">
    Interfaces especializadas que incluyen una vista de cuadrícula limpia para Sistemas de Visualización de Cocina (KDS), Tablas de Clasificación y un Panel Inteligente para Gerentes.
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
    Impulsado por Supabase para un control de acceso seguro y basado en roles (Súper Administrador, Gerente, Personal, Invitado).
  </div>
</div>
<div className="flex flex-col md:flex-row gap-2 md:gap-8 border-l-2 border-accent-blue/30 pl-4 md:pl-6 ml-2 md:ml-0 group">
  <div className="min-w-[220px] shrink-0 pt-1">
    <div className="text-sm font-bold text-foreground group-hover:text-accent-blue transition-colors">Datos y Almacenamiento</div>
  </div>
  <div className="text-sm text-muted-foreground leading-relaxed">
    Gestión de base de datos PostgreSQL en tiempo real para bucles KDS en vivo y almacenamiento en la nube robusto para el archivo digital de documentos.
  </div>
</div>
<div className="flex flex-col md:flex-row gap-2 md:gap-8 border-l-2 border-accent-blue/30 pl-4 md:pl-6 ml-2 md:ml-0 group">
  <div className="min-w-[220px] shrink-0 pt-1">
    <div className="text-sm font-bold text-foreground group-hover:text-accent-blue transition-colors">Cumplimiento y Seguridad</div>
  </div>
  <div className="text-sm text-muted-foreground leading-relaxed">
    Registros de auditoría antirrobo incorporados, lógica proforma "Hacienda Safe" y manejo de datos estricto que cumple con el RGPD.
  </div>
</div>
</div>

<h3 className="text-lg font-bold text-foreground mt-10 mb-6">3. Integraciones y Motor de IA</h3>

<div className="space-y-8 my-8">
<div className="flex flex-col md:flex-row gap-2 md:gap-8 border-l-2 border-accent-blue/30 pl-4 md:pl-6 ml-2 md:ml-0 group">
  <div className="min-w-[220px] shrink-0 pt-1">
    <div className="text-sm font-bold text-foreground group-hover:text-accent-blue transition-colors">Pagos y Facturación</div>
  </div>
  <div className="text-sm text-muted-foreground leading-relaxed">
    Integración de Stripe impulsando el motor de suscripciones, manejando la facturación inicial del "Contrato de Socios" y la escalada automatizada a niveles premium.
  </div>
</div>
<div className="flex flex-col md:flex-row gap-2 md:gap-8 border-l-2 border-accent-blue/30 pl-4 md:pl-6 ml-2 md:ml-0 group">
  <div className="min-w-[220px] shrink-0 pt-1">
    <div className="text-sm font-bold text-foreground group-hover:text-accent-blue transition-colors">Comunicaciones</div>
  </div>
  <div className="text-sm text-muted-foreground leading-relaxed">
    Integración de Resend para correos electrónicos transaccionales automatizados y difusiones de marketing.
  </div>
</div>
<div className="flex flex-col md:flex-row gap-2 md:gap-8 border-l-2 border-accent-blue/30 pl-4 md:pl-6 ml-2 md:ml-0 group">
  <div className="min-w-[220px] shrink-0 pt-1">
    <div className="text-sm font-bold text-foreground group-hover:text-accent-blue transition-colors">Inteligencia Artificial (Groq)</div>
  </div>
  <div className="text-sm text-muted-foreground leading-relaxed space-y-2">
    <p><strong>Camarero Inteligente:</strong> Un asistente de chat para huéspedes que utiliza RAG (Generación Aumentada de Recuperación) en el menú del restaurante.</p>
    <p><strong>CFO IA:</strong> Una herramienta de inteligencia comercial para gerentes que genera informes estratégicos basados en datos P&L y mapas de calor.</p>
  </div>
</div>
<div className="flex flex-col md:flex-row gap-2 md:gap-8 border-l-2 border-accent-blue/30 pl-4 md:pl-6 ml-2 md:ml-0 group">
  <div className="min-w-[220px] shrink-0 pt-1">
    <div className="text-sm font-bold text-foreground group-hover:text-accent-blue transition-colors">Tecnología Legal</div>
  </div>
  <div className="text-sm text-muted-foreground leading-relaxed">
    Generación de PDF en el cliente utilizando \`jspdf\` para la creación de contratos dinámicos con registro de IP.
  </div>
</div>
</div>

<h2 className="text-2xl font-bold tracking-tight mb-6 mt-12 border-b border-border pb-2">Propuesta de Valor</h2>

<strong>Carta Clara</strong> no es solo un menú digital; es una herramienta agresiva de expansión de ingresos para restaurantes. Al combinar la necesidad operativa (KDS, Pedidos) con mecánicas avanzadas de crecimiento (Upselling de IA, CRM, Gamificación de Personal), la plataforma se integra profundamente en el negocio del cliente.

Para el propietario de la plataforma, el modelo asegura cero riesgo de hardware, rentabilidad inmediata y un camino automatizado hacia un alto MRR (Ingreso Mensual Recurrente). Es una solución de grado empresarial construida para una máxima retención y despliegue escalable.

<AutoScreenshotGallery fallback1="/images/carta-clara/1.png" fallback2="/images/carta-clara/2.png" />
`;

fs.writeFileSync(path.join(__dirname, 'src/content/work/carta-clara.mdx'), enContent);
fs.writeFileSync(path.join(__dirname, 'src/content/work/es/carta-clara.mdx'), esContent);
console.log('Successfully updated Carta Clara with the exact text from EXECUTIVE_SUMMARY.md!');
