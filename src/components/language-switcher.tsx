"use client";

import * as React from "react";
import { usePathname, useRouter } from "next/navigation";
import { motion } from "framer-motion";

import { Languages } from "lucide-react";

export function LanguageSwitcher({ currentLang }: { currentLang: string }) {
  const router = useRouter();
  const pathname = usePathname();

  const toggleLanguage = () => {
    const newLang = currentLang === "en" ? "es" : "en";
    
    // Replace the current language in the pathname
    // e.g., /en/about -> /es/about
    const newPathname = pathname.replace(`/${currentLang}`, `/${newLang}`);
    
    // If we're at the root of a language (e.g. /en), redirecting to /es
    router.push(newPathname || `/${newLang}`);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center justify-center gap-1.5 px-3 h-8 rounded-full border border-border bg-background hover:bg-muted focus:outline-none focus-visible:ring-2 focus-visible:ring-accent transition-colors"
      aria-label="Toggle language"
    >
      <Languages size={14} className="text-muted-foreground" />
      <span className="text-xs font-bold uppercase">
        {currentLang}
      </span>
    </button>
  );
}
