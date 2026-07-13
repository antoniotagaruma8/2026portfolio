"use client";

import { motion } from "framer-motion";
import { ScrollSpyNav, NavItem } from "./ScrollSpyNav";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useParams } from "next/navigation";
import { LanguageSwitcher } from "../language-switcher";
import { SurpriseMeButton } from "../SurpriseMeButton";
import { ReactionButtons } from "../ReactionButtons";

export function Sidebar({ dict, navItems, theme = "teal" }: { dict?: any; navItems?: NavItem[]; theme?: "teal" | "blue" | "amber" }) {
  const params = useParams();
  const lang = params?.lang || "en";

  return (
    <header className="pt-12 pb-6 lg:sticky lg:top-0 lg:flex lg:h-screen lg:w-[260px] lg:shrink-0 lg:flex-col lg:justify-between lg:py-12 lg:px-6 lg:border-r lg:border-[#30363d]/50 bg-background z-20 overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 24 }}
      >
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl hover:opacity-80 transition-opacity">
          <Link href={`/${lang}`}>
            anton.io<span className={cn("animate-blink", 
              theme === "blue" ? "text-accent-blue" : 
              theme === "amber" ? "text-amber-500" : 
              "text-accent-teal"
            )}>/</span>
          </Link>
        </h1>
        <h2 className="mt-4 text-base font-medium tracking-tight text-muted-foreground sm:text-lg leading-snug">
          Full-Stack AI Developer<br />&amp; Licensed Educator
        </h2>

        <ReactionButtons />

        <ScrollSpyNav navItems={navItems} theme={theme} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 24, delay: 0.2 }}
        className="mt-4 pt-4 lg:mt-auto flex flex-col gap-6"
      >


        {/* Utility Toggles */}
        <div className="ml-1 flex items-center">
          <SurpriseMeButton dict={dict?.surprise} />
          <div className="w-px h-5 bg-border mx-3 p-0" />
          <LanguageSwitcher currentLang={lang as string} />
        </div>
      </motion.div>
    </header>
  );
}
