"use client";

import React from "react";
import Image from "next/image";

export function SidebarBadge() {
  return (
    <div className="hidden xl:flex fixed left-6 top-1/2 -translate-y-1/2 flex-col items-center gap-6 glass rounded-full py-6 px-3 z-50">
      <div className="relative w-10 h-10 rounded-full overflow-hidden border border-border">
        <Image 
          src="/antonio.jpg" // Ensure this image exists
          alt="Antonio"
          fill
          className="object-cover"
        />
      </div>
      
      <div className="flex flex-col items-center justify-center writing-vertical-rl rotate-180 gap-4 tracking-[0.3em] text-xs font-bold text-muted-foreground uppercase py-4">
        <span>Software</span>
        <span className="w-1 h-1 rounded-full bg-accent"></span>
        <span>Developer</span>
      </div>
    </div>
  );
}
