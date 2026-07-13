# 🎨 UI/UX Creative Brief: 2026 Developer Portfolio

**Role:** Claude, act as an expert UI/UX Designer and Frontend Architect specializing in high-performance, animation-heavy, modern web experiences.
**Goal:** Design the complete UI/UX architecture and provide component-level design recommendations (Tailwind classes, Framer Motion parameters, and layout structures) for my "2026 Developer Portfolio".

Please review the following comprehensive project description and use it as the foundation for generating the UI/UX designs, wireframes, or code snippets for the project.

---

## 1. 🌟 The Vibe & Core Aesthetic
*   **Theme:** "Neon-Tinted Interactive Playground". Forget boring, stiff resumes. This is a dynamic, highly interactive digital experience.
*   **Design Language:** Playful glassmorphism. Heavy use of translucent cards with blurs (`backdrop-blur`), subtle glowing borders, and floating elements.
*   **Color Palette (Dark Mode First):** 
    *   **Background:** Deep, rich dark colors (almost black, but with subtle noise or grainy gradients).
    *   **Accents:** Electric blues (`cyan-400`, `blue-500`), hot pinks, lime greens, and vibrant purples. These should be used for gradients, glowing hover states, and text highlights.
*   **Typography:** Bold, tracking-tight headings (e.g., `tracking-tighter`, `leading-[1.1]`). Clean, highly legible sans-serif for body text (`text-muted-foreground`).

---

## 2. 🛠️ The Tech Stack (Design Constraints)
*   **Framework:** Next.js 16 (App Router) + React 19 + TypeScript 5
*   **Styling:** Tailwind CSS v4 (using CSS variables for theming)
*   **Motion/Animation:** Framer Motion (heavy reliance on spring physics: `type: "spring", stiffness: 300, damping: 24`)
*   **Icons:** Lucide React
*   **Content:** MDX (for case studies and notes)
*   **i18n:** Full English and Spanish support via `[lang]` dynamic routing.

---

## 3. 🗺️ Site Architecture & Pages to Design

### A. Landing Page (`/`)
1.  **Hero Section:** 
    *   Word-by-word reveal headline with gradient text highlights.
    *   Glassmorphism sub-headline card.
    *   **Magnetic CTA Button:** A button that slightly follows the user's cursor (`cursor-none` on hover) with a glowing shadow.
2.  **Featured Work (Bento Grid):**
    *   A responsive bento-box grid layout showcasing 4 main projects:
        *   *CPEv2* (AI Exam Platform) - Wide card spanning 2 columns.
        *   *Carta Clara* (Restaurant SaaS) - Standard card.
        *   *CV Builder* (AI Tooling) - Standard card.
        *   *Knovau / ESOSLPv2* (Python/Flask Edu Platforms) - Wide card.
    *   **Interactions:** Hover reveals, glowing radial gradients following the mouse, subtle scaling.
3.  **Tech Stack Mini-Bento:** A smaller 4-column grid displaying the tools used (Interactive Engine, AI Brains, Content Engine, Deployment) with tilted icon hover effects.
4.  **"Why Me" Section:** A narrative section explaining my background as an Educator bridging the gap to Tech.
5.  **Footer / CTA:** Massive glowing background blurs, animated pinging status indicators ("Available to work"), social links, and navigation.

### B. Inner Pages
1.  **Work / Case Studies (`/work/[project]`):** Dynamic MDX pages detailing specific projects. Needs a clean reading layout with rich media support.
2.  **Digital Garden / Notes (`/notes`):** A collection of code snippets, tech experiments, and thoughts. Needs a card-based list layout with categories, dates, and icons.
3.  **About (`/about`):** Deep dive into my background, teaching experience, and transition to tech.
4.  **CV (`/cv`):** A clean, printable yet web-optimized version of my resume.
5.  **Archive (`/archive`):** A list view of all past projects and experiments.

---

## 4. 🧩 Core Global Components
1.  **Navbar:** Floating, glassmorphic top navigation.
2.  **Language Switcher:** Seamless EN/ES toggle.
3.  **Theme Toggle:** Light/Dark mode switcher (though Dark mode is default/preferred).
4.  **Command Menu (`Cmd+K`):** A spotlight search overlay for quick navigation across the site.
5.  **AI Chat Bot (`/api/chat`):** A floating chat interface widget fixed to the bottom right. It uses Vercel AI SDK + Gemini/Groq to simulate my persona and answer recruiter questions in real-time. Needs a sleek chat UI with typing indicators and smooth message entry animations.
6.  **Sidebar Badge:** A subtle floating badge or indicator for quick context.

---

## 5. 🎬 Motion & Interaction Requirements (Framer Motion)
*   **Page Transitions:** Smooth fade and slide-up effects when navigating between routes.
*   **Staggered Children:** Lists and grid items should populate sequentially using Framer Motion's `staggerChildren`.
*   **Spring Animations:** Avoid linear or basic ease easing. Use bouncy spring physics for that "playful" feel.
*   **Scroll-Triggered Reveals:** Elements should fade and slide up (`y: 20` to `y: 0`) as they enter the viewport (`whileInView`).

---

## Your Task, Claude:
Based on this comprehensive brief, please begin by suggesting the **UI Component Architecture** and **Tailwind Design System Tokens** (colors, typography, blur values, and animation classes). 

Once defined, I will ask you to generate the specific React components (like the Bento Grid or the AI Chatbot interface) step-by-step.
