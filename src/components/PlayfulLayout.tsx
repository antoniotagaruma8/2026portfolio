"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function PlayfulLayout({ children }: { children: React.ReactNode }) {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);
  
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 8); // center the 16px dot
      cursorY.set(e.clientY - 8);
    };
    
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [cursorX, cursorY]);

  return (
    <div className="relative min-h-screen w-full overflow-hidden cursor-none">
      {/* Animated Mesh Background (Lava-lamp effect) */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <motion.div 
          animate={{ 
            x: [0, 100, -50, 0], 
            y: [0, 50, -100, 0],
            scale: [1, 1.1, 0.9, 1]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-cyan-500/20 blur-[120px] mix-blend-screen"
        />
        <motion.div 
          animate={{ 
            x: [0, -100, 50, 0], 
            y: [0, -50, 100, 0],
            scale: [1, 0.9, 1.2, 1]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-[40%] right-[-10%] w-[35vw] h-[35vw] rounded-full bg-blue-600/20 blur-[120px] mix-blend-screen"
        />
        <motion.div 
          animate={{ 
            x: [0, 50, -100, 0], 
            y: [0, -100, 50, 0],
            scale: [1, 1.1, 0.8, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 4 }}
          className="absolute bottom-[-10%] left-[20%] w-[45vw] h-[45vw] rounded-full bg-lime-500/20 blur-[120px] mix-blend-screen"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full h-full cursor-none">
        {children}
      </div>

      {/* Custom Neon Cursor */}
      {isMounted && (
        <motion.div
          className="fixed top-0 left-0 w-4 h-4 rounded-full bg-cyan-400 pointer-events-none z-50 mix-blend-screen"
          style={{
            x: smoothX,
            y: smoothY,
            boxShadow: "0 0 20px 5px rgba(34, 211, 238, 0.6)"
          }}
        />
      )}
    </div>
  );
}
