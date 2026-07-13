"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef } from "react";

export function HeroSection({ dict }: { dict: any }) {
  const headline = dict.headline;
  const words = headline.split(" ");

  // Magnetic Button Logic
  const buttonRef = useRef<HTMLButtonElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 150, mass: 0.1 };
  const smoothX = useSpring(x, springConfig);
  const smoothY = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
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
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 300, damping: 24 } }
  };

  return (
    <section className="relative min-h-[80vh] flex flex-col justify-center items-center text-center px-6 max-w-5xl mx-auto pt-20">
      {/* Word-by-Word Headline */}
      <motion.h1 
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-8 leading-[1.1] z-10"
      >
        {words.map((word: string, i: number) => (
          <motion.span key={i} variants={wordVariants} className="inline-block mr-3 md:mr-4">
            {word === "tech" || word === "thinks," || word === "teaches," || word === "wows." ? (
              <span className="text-gradient">{word}</span>
            ) : (
              word
            )}
          </motion.span>
        ))}
      </motion.h1>

      {/* Glassmorphism Sub-headline */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="glass-card p-6 md:p-8 rounded-[2rem] max-w-3xl mx-auto mb-12 z-10"
      >
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-medium">
          {dict.subheadline}
        </p>
      </motion.div>

      {/* Magnetic CTA Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2, type: "spring", stiffness: 200, damping: 15 }}
        className="z-10"
      >
        <motion.button
          ref={buttonRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{ x: smoothX, y: smoothY }}
          className="relative px-8 py-4 rounded-full font-bold text-lg text-white bg-gradient-to-r from-cyan-400 to-blue-600 hover:shadow-[0_0_40px_10px_rgba(37,99,235,0.5)] transition-shadow duration-300 overflow-hidden group cursor-none"
        >
          {/* Subtle overlay for contrast */}
          <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300"></div>
          <span className="relative z-10 flex items-center gap-2">
            {dict.cta}
          </span>
        </motion.button>
      </motion.div>
    </section>
  );
}
