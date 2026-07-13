"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Maximize2 } from "lucide-react";

export function ZoomableImage(props: any) {
  const [isZoomed, setIsZoomed] = useState(false);
  const layoutId = props.src;

  useEffect(() => {
    if (isZoomed) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isZoomed]);

  // Clean the props className to remove hover and pan effects for the full screen view
  const cleanedClassName = (props.className || "").replace(/hover:scale-\[1\.02\]/g, "").replace(/hover:shadow-accent-blue\/20/g, "").replace(/transition-all/g, "").replace(/duration-300/g, "").replace(/animate-pan-[a-z-]+/g, "").trim();

  return (
    <>
      <div 
        className="relative w-full h-full cursor-zoom-in group overflow-hidden rounded-inherit" 
        onClick={() => setIsZoomed(true)}
      >
        <motion.img
          {...props}
          layoutId={layoutId}
          className={`${cleanedClassName} hover-pan relative z-10 w-full h-full`}
        />
        {/* Visual Indicator */}
        <div className="absolute inset-0 bg-background/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none z-20">
          <div className="bg-background/80 text-foreground text-xs font-medium px-4 py-2 rounded-full shadow-xl backdrop-blur-md border border-border flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
            <Maximize2 size={14} /> Click to expand
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isZoomed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-background/90 backdrop-blur-md p-4 md:p-12 cursor-zoom-out"
            onClick={() => setIsZoomed(false)}
          >
            <div
              className="relative max-w-[95vw] max-h-[95vh] w-auto h-auto flex items-center justify-center cursor-default"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.img
                layoutId={layoutId}
                src={props.src}
                alt={props.alt}
                className="max-w-full max-h-[95vh] object-contain rounded-xl shadow-2xl border border-border"
              />
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="absolute -top-4 -right-4 bg-background/80 backdrop-blur-md p-2 rounded-full border border-border text-foreground hover:bg-background transition-colors z-[101]"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsZoomed(false);
                }}
              >
                <X size={20} />
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
