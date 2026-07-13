"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef, MouseEvent } from "react";
import { ArrowRight } from "lucide-react";

export function HeroSection({ dict }: { dict: any }) {
  const headline = dict.headline || "A developer who thinks, teaches, and wows.";
  const words = headline.split(" ");

  // Magnetic Button Logic
  const buttonRef = useRef<HTMLButtonElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 24, stiffness: 300, mass: 0.5 };
  const smoothX = useSpring(x, springConfig);
  const smoothY = useSpring(y, springConfig);

  const handleMouseMove = (e: MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current) return;
    const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    x.set(e.clientX - centerX);
    y.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 300, damping: 24 } }
  };

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center items-center text-center px-6 max-w-5xl mx-auto pt-20">
      
      {/* Background Glowing Orb (The "Wow" Accent) */}
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[600px] md:h-[600px] rounded-full bg-accent-cyan/10 blur-[120px] pointer-events-none -z-10"
      />

      {/* Word-by-Word Headline */}
      <motion.h1 
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter mb-8 leading-[1.1] z-10"
      >
        {words.map((word: string, i: number) => (
          <motion.span key={i} variants={wordVariants} className="inline-block mr-3 md:mr-4">
            {word.includes("tech") || word.includes("thinks") || word.includes("teaches") || word.includes("wows") || word.includes("developer") ? (
              <span className="text-neon">{word}</span>
            ) : (
              word
            )}
          </motion.span>
        ))}
      </motion.h1>

      {/* Glassmorphism Sub-headline */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, type: "spring", stiffness: 300, damping: 24 }}
        className="glass-card p-6 md:p-8 max-w-3xl mx-auto mb-16 z-10 border border-white/5 bg-background/50"
      >
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-medium">
          {dict.subheadline || "I build high-performance, animation-heavy digital experiences that bridge the gap between human learning and digital systems."}
        </p>
      </motion.div>

      {/* Magnetic CTA Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2, type: "spring", stiffness: 300, damping: 24 }}
        className="z-10"
      >
        <motion.button
          ref={buttonRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{ x: smoothX, y: smoothY }}
          className="relative px-8 py-4 rounded-full font-bold text-lg text-background bg-foreground hover:shadow-[0_0_40px_10px_rgba(34,211,238,0.3)] transition-shadow duration-300 overflow-hidden group cursor-none flex items-center gap-2"
        >
          {/* Neon Glow Hover Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-accent-cyan to-accent-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          <span className="relative z-10 flex items-center gap-2 group-hover:text-white transition-colors duration-300">
            {dict.cta || "View My Work"} <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </span>
        </motion.button>
      </motion.div>
    </section>
  );
}
