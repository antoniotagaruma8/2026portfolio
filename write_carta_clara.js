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
<strong>Carta Clara</strong> is a comprehensive Business Growth Operating System (BOS) designed specifically for restaurants and hospitality venues. Operating on a <strong>Hardware-Enabled SaaS</strong> model, it provides the complete ecosystem—software and configured tablet hardware—in a single transaction, ensuring seamless onboarding and deep operational dependence.

The platform functions as the central nervous system of a restaurant, replacing disjointed point solutions with a unified engine for digital ordering, dynamic menu engineering, Staff KPI tracking, CRM marketing, and AI-driven business strategy.
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
  <div className="group glass-card p-6 md:p-8 rounded-3xl border hover:border-accent-blue/30 transition-all cursor-default flex flex-col h-full">
    <div className="w-12 h-12 rounded-2xl bg-accent-blue/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shrink-0">
      <Layers className="text-accent-blue" size={24} />
    </div>
    <h3 className="font-bold text-xl text-foreground mb-4 group-hover:text-accent-blue transition-colors">Digital KDS & Ordering Engine</h3>
    <div className="text-sm text-muted-foreground leading-relaxed flex-grow space-y-4">
      <p>A high-performance Kitchen Display System (KDS) loop that tracks orders from Pending to Served, featuring dynamic "Happy Hour" pricing and intelligent upsell pairings.</p>
    </div>
  </div>
  <div className="group glass-card p-6 md:p-8 rounded-3xl border hover:border-accent-teal/30 transition-all cursor-default flex flex-col h-full">
    <div className="w-12 h-12 rounded-2xl bg-accent-teal/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shrink-0">
      <Activity className="text-accent-teal" size={24} />
    </div>
    <h3 className="font-bold text-xl text-foreground mb-4 group-hover:text-accent-teal transition-colors">Staff Gamification</h3>
    <div className="text-sm text-muted-foreground leading-relaxed flex-grow space-y-4">
      <p>Live leaderboards tracking waiter performance, sales metrics, and tip transparency to dramatically boost staff motivation and service quality.</p>
    </div>
  </div>
  <div className="group glass-card p-6 md:p-8 rounded-3xl border hover:border-red-500/30 transition-all cursor-default flex flex-col h-full">
    <div className="w-12 h-12 rounded-2xl bg-red-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shrink-0">
      <CheckCircle className="text-red-500" size={24} />
    </div>
    <h3 className="font-bold text-xl text-foreground mb-4 group-hover:text-red-400 transition-colors">Marketing & CRM Hub</h3>
    <div className="text-sm text-muted-foreground leading-relaxed flex-grow space-y-4">
      <p>Built-in tools for gathering 5-star Google Maps reviews and generating targeted WhatsApp broadcast lists from a unified VIP guest database.</p>
    </div>
  </div>
  <div className="group glass-card p-6 md:p-8 rounded-3xl border hover:border-amber-500/30 transition-all cursor-default flex flex-col h-full">
    <div className="w-12 h-12 rounded-2xl bg-amber-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shrink-0">
      <Lightbulb className="text-amber-500" size={24} />
    </div>
    <h3 className="font-bold text-xl text-foreground mb-4 group-hover:text-amber-500 transition-colors">AI Business Consultant</h3>
    <div className="text-sm text-muted-foreground leading-relaxed flex-grow space-y-4">
      <p>Powered by the Groq AI API, the "AI CFO" module analyzes monthly P&L statements to generate actionable strategic advice and optimization reports.</p>
    </div>
  </div>
</div>

<h2 className="text-2xl font-bold tracking-tight mb-6 mt-12 border-b border-border pb-2">Technical Architecture</h2>

The Carta Clara ecosystem leverages a cutting-edge serverless stack to guarantee high availability and real-time syncing across restaurant hardware.

<div className="space-y-8 my-8">
<div className="flex flex-col md:flex-row gap-2 md:gap-8 border-l-2 border-accent-blue/30 pl-4 md:pl-6 ml-2 md:ml-0 group">
  <div className="min-w-[220px] shrink-0 pt-1">
    <div className="text-sm font-bold text-foreground group-hover:text-accent-blue transition-colors">Next.js 14 App Router</div>
  </div>
  <div className="text-sm text-muted-foreground leading-relaxed">
    Drives both the customer-facing digital menus and the highly complex Super Admin dashboard, utilizing server actions for secure database mutations.
  </div>
</div>
<div className="flex flex-col md:flex-row gap-2 md:gap-8 border-l-2 border-accent-blue/30 pl-4 md:pl-6 ml-2 md:ml-0 group">
  <div className="min-w-[220px] shrink-0 pt-1">
    <div className="text-sm font-bold text-foreground group-hover:text-accent-blue transition-colors">Supabase Infrastructure</div>
  </div>
  <div className="text-sm text-muted-foreground leading-relaxed">
    Handles scalable PostgreSQL data storage, secure Row Level Security (RLS) for multi-tenant data isolation, and cloud bucket storage for legal contracts.
  </div>
</div>
<div className="flex flex-col md:flex-row gap-2 md:gap-8 border-l-2 border-accent-blue/30 pl-4 md:pl-6 ml-2 md:ml-0 group">
  <div className="min-w-[220px] shrink-0 pt-1">
    <div className="text-sm font-bold text-foreground group-hover:text-accent-blue transition-colors">Automated Legal Engine</div>
  </div>
  <div className="text-sm text-muted-foreground leading-relaxed">
    A \`jsPDF\` powered dynamic contract generator that creates, timestamps, and archives provider-favored PDF agreements directly into the client's digital filing cabinet.
  </div>
</div>
<div className="flex flex-col md:flex-row gap-2 md:gap-8 border-l-2 border-accent-blue/30 pl-4 md:pl-6 ml-2 md:ml-0 group">
  <div className="min-w-[220px] shrink-0 pt-1">
    <div className="text-sm font-bold text-foreground group-hover:text-accent-blue transition-colors">Hardware Provisioning</div>
  </div>
  <div className="text-sm text-muted-foreground leading-relaxed">
    Custom asset allocators to record tablet serial numbers and lock software themes uniquely to the provisioned hardware.
  </div>
</div>
</div>

<h2 className="text-2xl font-bold tracking-tight mb-6 mt-12 border-b border-border pb-2">Value Proposition</h2>

Carta Clara radically redefines restaurant technology by eliminating the friction of integrating multiple 3rd-party services. With its innovative hardware-upfront pricing model and robust recurring revenue engine, the platform practically guarantees positive cashflow from Day 1 while locking clients into a highly sticky, deeply integrated ecosystem that scales natively as their restaurant grows.

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
<strong>Carta Clara</strong> es un Sistema Operativo de Crecimiento Empresarial (BOS) diseñado específicamente para restaurantes. Operando bajo un modelo <strong>SaaS Habilitado por Hardware</strong>, proporciona el ecosistema completo (software y hardware configurado) en una sola transacción, garantizando una incorporación perfecta y una profunda dependencia operativa.

La plataforma funciona como el sistema nervioso central del restaurante, unificando pedidos digitales, ingeniería de menús, seguimiento de KPI del personal, marketing CRM y estrategia comercial impulsada por IA.
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
  <div className="group glass-card p-6 md:p-8 rounded-3xl border hover:border-accent-blue/30 transition-all cursor-default flex flex-col h-full">
    <div className="w-12 h-12 rounded-2xl bg-accent-blue/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shrink-0">
      <Layers className="text-accent-blue" size={24} />
    </div>
    <h3 className="font-bold text-xl text-foreground mb-4 group-hover:text-accent-blue transition-colors">KDS Digital y Pedidos</h3>
    <div className="text-sm text-muted-foreground leading-relaxed flex-grow space-y-4">
      <p>Un sistema de visualización de cocina (KDS) de alto rendimiento que rastrea pedidos de Pendiente a Servido, con precios dinámicos y sugerencias de ventas adicionales.</p>
    </div>
  </div>
  <div className="group glass-card p-6 md:p-8 rounded-3xl border hover:border-accent-teal/30 transition-all cursor-default flex flex-col h-full">
    <div className="w-12 h-12 rounded-2xl bg-accent-teal/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shrink-0">
      <Activity className="text-accent-teal" size={24} />
    </div>
    <h3 className="font-bold text-xl text-foreground mb-4 group-hover:text-accent-teal transition-colors">Gamificación del Personal</h3>
    <div className="text-sm text-muted-foreground leading-relaxed flex-grow space-y-4">
      <p>Tablas de clasificación en vivo que rastrean el rendimiento, métricas de ventas y transparencia de propinas para aumentar drásticamente la motivación y calidad del servicio.</p>
    </div>
  </div>
  <div className="group glass-card p-6 md:p-8 rounded-3xl border hover:border-red-500/30 transition-all cursor-default flex flex-col h-full">
    <div className="w-12 h-12 rounded-2xl bg-red-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shrink-0">
      <CheckCircle className="text-red-500" size={24} />
    </div>
    <h3 className="font-bold text-xl text-foreground mb-4 group-hover:text-red-400 transition-colors">Hub de Marketing CRM</h3>
    <div className="text-sm text-muted-foreground leading-relaxed flex-grow space-y-4">
      <p>Herramientas integradas para recopilar reseñas de 5 estrellas en Google Maps y generar listas de difusión específicas de WhatsApp desde una base VIP.</p>
    </div>
  </div>
  <div className="group glass-card p-6 md:p-8 rounded-3xl border hover:border-amber-500/30 transition-all cursor-default flex flex-col h-full">
    <div className="w-12 h-12 rounded-2xl bg-amber-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shrink-0">
      <Lightbulb className="text-amber-500" size={24} />
    </div>
    <h3 className="font-bold text-xl text-foreground mb-4 group-hover:text-amber-500 transition-colors">Consultor de IA</h3>
    <div className="text-sm text-muted-foreground leading-relaxed flex-grow space-y-4">
      <p>Impulsado por la API de IA Groq, el módulo "CFO IA" analiza los estados de resultados para generar asesoramiento estratégico e informes de optimización procesables.</p>
    </div>
  </div>
</div>

<h2 className="text-2xl font-bold tracking-tight mb-6 mt-12 border-b border-border pb-2">Arquitectura Técnica</h2>

El ecosistema aprovecha un stack moderno y serverless para garantizar alta disponibilidad y sincronización en tiempo real.

<div className="space-y-8 my-8">
<div className="flex flex-col md:flex-row gap-2 md:gap-8 border-l-2 border-accent-blue/30 pl-4 md:pl-6 ml-2 md:ml-0 group">
  <div className="min-w-[220px] shrink-0 pt-1">
    <div className="text-sm font-bold text-foreground group-hover:text-accent-blue transition-colors">Next.js 14 App Router</div>
  </div>
  <div className="text-sm text-muted-foreground leading-relaxed">
    Impulsa tanto los menús digitales para clientes como el panel del Súper Administrador, utilizando Server Actions para mutaciones seguras en la base de datos.
  </div>
</div>
<div className="flex flex-col md:flex-row gap-2 md:gap-8 border-l-2 border-accent-blue/30 pl-4 md:pl-6 ml-2 md:ml-0 group">
  <div className="min-w-[220px] shrink-0 pt-1">
    <div className="text-sm font-bold text-foreground group-hover:text-accent-blue transition-colors">Infraestructura Supabase</div>
  </div>
  <div className="text-sm text-muted-foreground leading-relaxed">
    Maneja el almacenamiento escalable de datos PostgreSQL, la seguridad a nivel de fila (RLS) y el almacenamiento en la nube de contratos legales.
  </div>
</div>
<div className="flex flex-col md:flex-row gap-2 md:gap-8 border-l-2 border-accent-blue/30 pl-4 md:pl-6 ml-2 md:ml-0 group">
  <div className="min-w-[220px] shrink-0 pt-1">
    <div className="text-sm font-bold text-foreground group-hover:text-accent-blue transition-colors">Motor Legal Automatizado</div>
  </div>
  <div className="text-sm text-muted-foreground leading-relaxed">
    Un generador de contratos dinámicos que utiliza \`jsPDF\` para crear, fechar y archivar acuerdos en el gabinete digital del cliente.
  </div>
</div>
<div className="flex flex-col md:flex-row gap-2 md:gap-8 border-l-2 border-accent-blue/30 pl-4 md:pl-6 ml-2 md:ml-0 group">
  <div className="min-w-[220px] shrink-0 pt-1">
    <div className="text-sm font-bold text-foreground group-hover:text-accent-blue transition-colors">Asignación de Hardware</div>
  </div>
  <div className="text-sm text-muted-foreground leading-relaxed">
    Sistemas para registrar números de serie de tabletas y bloquear temas de software de forma exclusiva al hardware suministrado.
  </div>
</div>
</div>

<h2 className="text-2xl font-bold tracking-tight mb-6 mt-12 border-b border-border pb-2">Propuesta de Valor</h2>

Carta Clara redefine radicalmente la tecnología para restaurantes al eliminar la fricción de integrar múltiples servicios de terceros. Con su modelo de pago inicial de hardware y su robusto motor de ingresos recurrentes, la plataforma garantiza un flujo de caja positivo desde el día 1 mientras atrapa a los clientes en un ecosistema altamente integrado que escala a medida que el restaurante crece.

<AutoScreenshotGallery fallback1="/images/carta-clara/1.png" fallback2="/images/carta-clara/2.png" />
`;

fs.writeFileSync(path.join(__dirname, 'src/content/work/carta-clara.mdx'), enContent);
fs.writeFileSync(path.join(__dirname, 'src/content/work/es/carta-clara.mdx'), esContent);

// And also replace cv-builder to use AutoScreenshotGallery!
const cvbPaths = [
    'src/content/work/cv-builder.mdx',
    'src/content/work/es/cv-builder.mdx'
];

cvbPaths.forEach(p => {
    const fullPath = path.join(__dirname, p);
    if (!fs.existsSync(fullPath)) return;
    let content = fs.readFileSync(fullPath, 'utf8');
    
    // Replace the manual Bento Media Gallery with AutoScreenshotGallery
    const regex = /\{\/\* Bento Media Gallery \*\/\}[\s\S]+?<\/div>\s*<\/div>/;
    content = content.replace(regex, '<AutoScreenshotGallery fallback1="/images/cv-builder/1.png" fallback2="/images/cv-builder/2.png" />');
    
    fs.writeFileSync(fullPath, content);
});

console.log('Successfully created Carta Clara and updated CV Builder to use AutoScreenshotGallery.');
