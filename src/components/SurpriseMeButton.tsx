"use client";

import React, { useState, useRef } from "react";
import { Sparkles } from "lucide-react";
import confetti from "canvas-confetti";
import { motion, AnimatePresence } from "framer-motion";
import { useParams } from "next/navigation";

// Global shuffle bag to sync between Desktop Sidebar and Mobile Navbar
let globalSurpriseBag: number[] = [];

export function SurpriseMeButton({ dict }: { dict?: any }) {
  const [isAnimating, setIsAnimating] = useState(false);

  const triggerConfetti = () => {
    const end = Date.now() + 2 * 1000;
    const colors = ["#64f4ac", "#58a6ff"];

    (function frame() {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: colors,
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: colors,
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
  };

  const triggerHackerMode = () => {
    document.body.classList.add("hacker-mode");
    setTimeout(() => {
      document.body.classList.remove("hacker-mode");
    }, 4000);
  };

  const triggerBarrelRoll = () => {
    document.body.style.transition = "transform 1s ease-in-out";
    document.body.style.transform = "rotate(360deg)";
    setTimeout(() => {
      document.body.style.transition = "";
      document.body.style.transform = "";
    }, 1000);
  };

  const triggerRoulette = () => {
    const cards = document.querySelectorAll(".proj-card");
    if (cards.length === 0) {
      // If we are not on a page with project cards, fallback to confetti
      triggerConfetti();
      return;
    }
    
    // Pick a random card
    const randomIndex = Math.floor(Math.random() * cards.length);
    const selectedCard = cards[randomIndex] as HTMLElement;

    // Scroll to it
    selectedCard.scrollIntoView({ behavior: "smooth", block: "center" });

    // Add glow effect class
    selectedCard.classList.add("roulette-highlight");
    setTimeout(() => {
      selectedCard.classList.remove("roulette-highlight");
    }, 3000);
  };

  const triggerMinigame = (type: string) => {
    window.dispatchEvent(new CustomEvent("trigger-minigame", { detail: { type } }));
  };

  const actions = [
    triggerConfetti,
    triggerHackerMode,
    triggerBarrelRoll,
    triggerRoulette,
    () => triggerMinigame("bug"),
    () => triggerMinigame("type"),
    () => triggerMinigame("memory"),
    () => triggerMinigame("reflex"),
    () => triggerMinigame("clicker"),
    () => triggerMinigame("dino"),
  ];

  const getNextActionIndex = () => {
    if (globalSurpriseBag.length === 0) {
      // Refill the bag
      const newBag = Array.from({ length: actions.length }, (_, i) => i);
      // Fisher-Yates Shuffle
      for (let i = newBag.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newBag[i], newBag[j]] = [newBag[j], newBag[i]];
      }
      globalSurpriseBag = newBag;
      console.log("Refilled surprise bag:", [...globalSurpriseBag]);
    }
    const picked = globalSurpriseBag.pop() as number;
    console.log("Triggering surprise #", picked, "Remaining:", globalSurpriseBag.length);
    return picked;
  };

  const handleSurprise = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    
    // Pick from the shuffle bag to ensure no repeats until all are played
    const actionIndex = getNextActionIndex();
    const selectedAction = actions[actionIndex];
    selectedAction();

    setTimeout(() => setIsAnimating(false), 1000);
  };

  const params = useParams();
  const lang = params?.lang === "es" ? "es" : "en";
  const fallbackText = lang === "es" ? "Jugar" : "Play";

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={handleSurprise}
      disabled={isAnimating}
      className="flex items-center gap-2 px-3 py-1.5 text-xs font-bold uppercase tracking-wider rounded-full bg-accent-teal/10 text-accent-teal border border-accent-teal/20 hover:bg-accent-teal hover:text-[#0d1117] transition-all"
    >
      <Sparkles size={14} />
      <span className="hidden sm:inline">{dict?.button || fallbackText}</span>
    </motion.button>
  );
}
