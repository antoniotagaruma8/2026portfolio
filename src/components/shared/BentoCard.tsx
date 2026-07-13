"use client";

import { motion, useMotionValue, useSpring, useMotionTemplate } from "framer-motion";
import { MouseEvent, useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface BentoCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string; // e.g., "rgba(34, 211, 238, 0.15)" for cyan
}

export function BentoCard({ 
  children, 
  className,
  glowColor = "rgba(255, 255, 255, 0.05)" 
}: BentoCardProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth out the mouse tracking
  const smoothX = useSpring(mouseX, { stiffness: 300, damping: 24, mass: 0.5 });
  const smoothY = useSpring(mouseY, { stiffness: 300, damping: 24, mass: 0.5 });

  function onMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  // Create the background gradient template
  const background = useMotionTemplate`radial-gradient(400px circle at ${smoothX}px ${smoothY}px, ${glowColor}, transparent 80%)`;

  return (
    <motion.div
      ref={containerRef}
      onMouseMove={onMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 0.98, y: -2 }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
      className={cn(
        "glass-card glass-border-glow group", // base styles from our globals.css
        className
      )}
    >
      {/* Mouse-tracked glow effect overlay */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-500 group-hover:opacity-100 z-0"
        style={{ background }}
      />
      
      {/* Content wrapper */}
      <div className="relative z-10 h-full w-full">
        {children}
      </div>
    </motion.div>
  );
}
