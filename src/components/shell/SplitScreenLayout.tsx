"use client";

import { ReactNode } from "react";
import { Sidebar } from "./Sidebar";
import { ChatWidget } from "../ai/ChatWidget";
import { NavItem } from "./ScrollSpyNav";

export function SplitScreenLayout({ children, dict, navItems, theme = "teal" }: { children: ReactNode, dict?: any, navItems?: NavItem[], theme?: "teal" | "blue" | "amber" }) {
  return (
    <div className="mx-auto min-h-screen max-w-5xl px-6 md:px-12 lg:px-0">
      <div className="lg:flex lg:w-full">
        <Sidebar dict={dict} navItems={navItems} theme={theme} />
        
        <main id="main" className="pt-12 lg:flex-1 lg:pl-16 lg:pr-8 lg:py-12 flex flex-col gap-16 lg:gap-20">
          {children}
        </main>
      </div>

      <ChatWidget />
    </div>
  );
}
