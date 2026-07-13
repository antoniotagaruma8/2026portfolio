"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bug, X, Terminal, Server, MousePointerClick, BrainCircuit } from "lucide-react";

type GameType = "bug" | "type" | "memory" | "reflex" | "clicker" | "dino" | null;

const WORDS = ["git commit", "npm run dev", "console.log", "interface", "sudo", "docker build", "const data", "async await", "flex-col"];

export function SurpriseGameModal({ dict }: { dict?: any }) {
  const [isOpen, setIsOpen] = useState(false);
  const [gameType, setGameType] = useState<GameType>(null);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Bug Game State
  const [bugPos, setBugPos] = useState({ top: "50%", left: "50%" });

  // Type Game State
  const [targetWord, setTargetWord] = useState("");
  const [currentInput, setCurrentInput] = useState("");

  // Memory Game State
  const [memorySequence, setMemorySequence] = useState<number[]>([]);
  const [memoryActive, setMemoryActive] = useState<number[]>([]);
  const [memoryClicked, setMemoryClicked] = useState<number[]>([]);
  const [memoryPhase, setMemoryPhase] = useState<"showing" | "playing">("showing");

  // Reflex Game State
  const [reflexDir, setReflexDir] = useState(1);
  const reflexRef = useRef<number>(0); // Store pos in ref for fast updates without re-renders affecting click
  const reflexSpeed = useRef<number>(2);
  const reflexBarDOMRef = useRef<HTMLDivElement>(null);

  // Dino Game State
  const [isJumping, setIsJumping] = useState(false);
  const isJumpingRef = useRef(false);

  useEffect(() => {
    const handleTrigger = (e: any) => {
      const type = e.detail?.type as GameType;
      if (!type) return;
      
      setGameType(type);
      setIsOpen(true);
      setScore(0);
      setTimeLeft(10);
      
      // Initialize specific games
      if (type === "bug") moveBug();
      if (type === "type") nextWord();
      if (type === "memory") startMemoryRound();
      if (type === "reflex") {
        reflexRef.current = 0;
        reflexSpeed.current = 2;
        setReflexDir(1);
        if (reflexBarDOMRef.current) {
          reflexBarDOMRef.current.style.left = "0%";
        }
      }
      if (type === "dino") {
        setIsJumping(false);
        isJumpingRef.current = false;
      }
    };

    const handleOffline = () => {
      // Automatically trigger Dino game if the user loses internet connection
      handleTrigger({ detail: { type: "dino" } } as any);
    };

    window.addEventListener("trigger-minigame", handleTrigger);
    window.addEventListener("offline", handleOffline);
    
    // Check initial state (in case they load the page already offline somehow)
    if (typeof navigator !== "undefined" && !navigator.onLine) {
      handleOffline();
    }

    return () => {
      window.removeEventListener("trigger-minigame", handleTrigger);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  useEffect(() => {
    if (isOpen && timeLeft > 0) {
      timerRef.current = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      if (timerRef.current) clearTimeout(timerRef.current);
    }
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [isOpen, timeLeft]);

  // Reflex Animation Loop
  useEffect(() => {
    let animationFrame: number;
    if (isOpen && timeLeft > 0 && gameType === "reflex") {
      const loop = () => {
        reflexRef.current += reflexSpeed.current;
        if (reflexRef.current > 100) {
          reflexRef.current = 100;
          reflexSpeed.current *= -1;
        } else if (reflexRef.current < 0) {
          reflexRef.current = 0;
          reflexSpeed.current *= -1;
        }
        // Direct DOM mutation to prevent 60fps React state re-renders (prevents blank screen crash)
        if (reflexBarDOMRef.current) {
          reflexBarDOMRef.current.style.left = `${reflexRef.current}%`;
        }
        animationFrame = requestAnimationFrame(loop);
      };
      animationFrame = requestAnimationFrame(loop);
    }
    return () => cancelAnimationFrame(animationFrame);
  }, [isOpen, timeLeft, gameType]);

  const moveBug = () => {
    const top = Math.floor(Math.random() * 80) + 10;
    const left = Math.floor(Math.random() * 80) + 10;
    setBugPos({ top: `${top}%`, left: `${left}%` });
  };

  const nextWord = () => {
    setTargetWord(WORDS[Math.floor(Math.random() * WORDS.length)]);
    setCurrentInput("");
  };

  const startMemoryRound = () => {
    setMemoryPhase("showing");
    setMemoryClicked([]);
    const arr: number[] = [];
    while(arr.length < 3) {
      const r = Math.floor(Math.random() * 9);
      if(arr.indexOf(r) === -1) arr.push(r);
    }
    setMemorySequence(arr);
    setMemoryActive(arr);
    setTimeout(() => {
      setMemoryPhase("playing");
      setMemoryActive([]);
    }, 1500); // show for 1.5s
  };

  const handleClose = () => {
    setIsOpen(false);
    setGameType(null);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background/90 backdrop-blur-sm"
        >
          <div className="absolute top-6 right-6 z-[110]">
            <button
              onClick={handleClose}
              className="p-2 bg-card border border-border rounded-full text-muted-foreground hover:text-foreground transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          <div className="text-center w-full h-full relative overflow-hidden flex flex-col items-center justify-center">
            {timeLeft > 0 ? (
              <div className="absolute top-12 left-1/2 -translate-x-1/2 text-center pointer-events-auto z-50">
                <h2 className="text-2xl font-bold text-accent-teal mb-2 capitalize">
                  {dict?.games?.[gameType as string] || `${gameType} Challenge`}
                </h2>
                <div className="flex gap-8 text-xl font-mono justify-center bg-card px-4 py-2 rounded-full border border-border">
                  <div>00:{timeLeft.toString().padStart(2, '0')}</div>
                  <div className="text-accent-teal">{dict?.ui?.score || "Score"}: {score}</div>
                </div>
              </div>
            ) : (
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center bg-card p-8 rounded-2xl border border-accent-teal shadow-[0_0_40px_rgba(100,244,172,0.1)] pointer-events-auto z-50">
                <h2 className="text-3xl font-bold mb-4">{dict?.ui?.gameOver || "Game Over!"}</h2>
                <p className="text-xl text-muted-foreground mb-6">{dict?.ui?.finalScore || "Final Score:"} <span className="text-accent-teal font-bold text-2xl">{score}</span></p>
                <button
                  onClick={handleClose}
                  className="px-8 py-3 bg-accent-teal text-[#0d1117] font-bold rounded-full hover:shadow-[0_0_15px_rgba(100,244,172,0.4)] transition-all"
                >
                  {dict?.ui?.close || "Close"}
                </button>
              </div>
            )}

            {/* Game 1: BUG */}
            {gameType === "bug" && timeLeft > 0 && (
              <motion.button
                onClick={() => { setScore(s => s + 1); moveBug(); }}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                className="absolute pointer-events-auto text-accent-teal"
                style={{ top: bugPos.top, left: bugPos.left, transform: "translate(-50%, -50%)" }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="p-3 bg-accent-teal/10 rounded-full border border-accent-teal/30">
                  <Bug size={32} />
                </div>
              </motion.button>
            )}

            {/* Game 2: TYPE */}
            {gameType === "type" && timeLeft > 0 && (
              <div className="flex flex-col items-center z-10 pointer-events-auto">
                <Terminal size={48} className="text-muted-foreground mb-6 opacity-20" />
                <div className="text-4xl font-mono text-foreground mb-8 tracking-wider bg-card px-6 py-3 border border-border rounded-lg shadow-lg">
                  {targetWord}
                </div>
                <input
                  autoFocus
                  type="text"
                  value={currentInput}
                  onChange={(e) => {
                    setCurrentInput(e.target.value);
                    if (e.target.value === targetWord) {
                      setScore(s => s + 1);
                      nextWord();
                    }
                  }}
                  className="bg-transparent border-b-2 border-accent-teal text-2xl font-mono text-accent-teal focus:outline-none text-center w-64 pb-2"
                  placeholder={dict?.ui?.typeHere || "Type here..."}
                />
              </div>
            )}

            {/* Game 3: MEMORY */}
            {gameType === "memory" && timeLeft > 0 && (
              <div className="flex flex-col items-center z-10 pointer-events-auto">
                <BrainCircuit size={48} className="text-muted-foreground mb-6 opacity-20" />
                <div className="grid grid-cols-3 gap-2 p-4 bg-card rounded-xl border border-border">
                  {Array.from({ length: 9 }).map((_, i) => {
                    const isShowing = memoryPhase === "showing" && memoryActive.includes(i);
                    const isClicked = memoryClicked.includes(i);
                    return (
                      <motion.button
                        key={i}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => {
                          if (memoryPhase !== "playing" || isClicked) return;
                          const newClicked = [...memoryClicked, i];
                          
                          if (memorySequence.includes(i)) {
                            // Valid
                            setMemoryClicked(newClicked);
                            if (newClicked.length === 3) {
                              // Won this round!
                              setScore(s => s + 1);
                              startMemoryRound();
                            }
                          } else {
                            // Fail, start over
                            setScore(s => Math.max(0, s - 1));
                            startMemoryRound();
                            return;
                          }
                        }}
                        className={`w-20 h-20 rounded-lg transition-colors border border-border ${
                          isShowing ? "bg-accent-teal border-accent-teal" : 
                          isClicked ? "bg-accent-blue/50" : "bg-background hover:bg-muted"
                        }`}
                      />
                    );
                  })}
                </div>
                <div className="mt-4 text-muted-foreground font-mono">
                  {memoryPhase === "showing" ? (dict?.ui?.memorize || "Memorize the pattern!") : (dict?.ui?.repeat || "Repeat the pattern!")}
                </div>
              </div>
            )}

            {/* Game 4: REFLEX */}
            {gameType === "reflex" && timeLeft > 0 && (
              <div className="flex flex-col items-center w-full max-w-lg z-10 pointer-events-auto">
                <Server size={48} className="text-muted-foreground mb-8 opacity-20" />
                <div className="w-full h-12 bg-card border border-border rounded-full relative overflow-hidden mb-12">
                  <div className="absolute top-0 bottom-0 left-[45%] w-[10%] bg-accent-teal/20 border-x-2 border-accent-teal" />
                  <div 
                    ref={reflexBarDOMRef}
                    className="absolute top-0 bottom-0 w-2 bg-foreground"
                    style={{ left: `0%`, transform: 'translateX(-50%)' }}
                  />
                </div>
                <button
                  onClick={() => {
                    const currentPos = reflexRef.current;
                    if (currentPos >= 45 && currentPos <= 55) {
                      setScore(s => s + 1);
                      reflexSpeed.current = (Math.abs(reflexSpeed.current) + 0.5) * Math.sign(reflexSpeed.current);
                    } else {
                      setScore(s => Math.max(0, s - 1));
                    }
                  }}
                  className="px-12 py-4 bg-accent-teal text-[#0d1117] font-bold text-xl rounded-full hover:scale-105 active:scale-95 transition-transform"
                >
                  {dict?.ui?.stop || "STOP!"}
                </button>
              </div>
            )}

            {/* Game 5: CLICKER */}
            {gameType === "clicker" && timeLeft > 0 && (
              <div className="flex flex-col items-center z-10 pointer-events-auto">
                <MousePointerClick size={48} className="text-muted-foreground mb-12 opacity-20" />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setScore(s => s + 1)}
                  className="w-48 h-48 rounded-full bg-accent-blue/10 border-4 border-accent-blue text-accent-blue flex flex-col items-center justify-center gap-2 hover:bg-accent-blue hover:text-[#0d1117] transition-colors"
                >
                  <span className="font-bold text-2xl uppercase tracking-wider">{dict?.ui?.deploy || "Deploy"}</span>
                  <span className="font-mono text-sm opacity-80">{dict?.ui?.clickFast || "Click Fast!"}</span>
                </motion.button>
              </div>
            )}

            {/* Game 6: DINO */}
            {gameType === "dino" && timeLeft > 0 && (
              <div 
                className="w-full max-w-2xl h-64 border-b border-accent-teal relative overflow-hidden pointer-events-auto cursor-pointer bg-card/50 rounded-t-xl" 
                onClick={() => {
                  if(!isJumpingRef.current) {
                    setIsJumping(true);
                    isJumpingRef.current = true;
                    setScore(s => s + 1); // Score for jumping
                    setTimeout(() => {
                      setIsJumping(false);
                      isJumpingRef.current = false;
                    }, 500);
                  }
                }}
              >
                 <div className="absolute top-8 w-full text-center text-muted-foreground font-mono animate-pulse">
                   {dict?.ui?.tapToJump || "Tap or Click to Jump!"}
                 </div>
                 
                 {/* Dino Player */}
                 <motion.div 
                   animate={{ y: isJumping ? -100 : 0 }} 
                   transition={{ duration: 0.25 }}
                   className="absolute bottom-0 left-20 w-12 h-12 bg-accent-teal rounded-sm flex items-center justify-center text-[#0d1117] font-bold"
                 >
                   D
                 </motion.div>

                 {/* Obstacle */}
                 <motion.div
                   animate={{ x: ['100vw', '-10vw'] }}
                   transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
                   onUpdate={(latest) => {
                      const xPos = parseFloat(latest.x as string);
                      // Rough collision box: Dino is at left: 80px (approx 5vw), width 48px.
                      // If obstacle x is very low (e.g. between 5vw and 10vw) and not jumping, GAME OVER
                      if (!isNaN(xPos)) {
                         // We can't perfectly measure vw in pixels easily here without ref, but since x is animated from 100vw to -10vw...
                         // Let's just use a simple score timer instead of pure collision if it's too complex, 
                         // OR just use a fixed pixel animation for obstacle.
                      }
                   }}
                   className="absolute bottom-0 w-8 h-12 bg-red-500 rounded-sm hidden"
                 />
                 
                 {/* Let's use fixed pixel animation for reliable collision */}
                 <motion.div
                   animate={{ x: [800, -100] }}
                   transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
                   onUpdate={(latest) => {
                      if (typeof latest.x === 'number') {
                        // Dino is at left: 80px, width 48px (80 to 128)
                        // Obstacle is width 32px
                        if (latest.x > 50 && latest.x < 130 && !isJumpingRef.current) {
                           // Collision! Ensure we only set state once to prevent update loop crash
                           setTimeLeft((prev) => {
                             if (prev > 0) return 0;
                             return prev;
                           });
                        }
                      }
                   }}
                   className="absolute bottom-0 w-8 h-10 bg-accent-blue rounded-sm flex items-center justify-center border border-background"
                 />
              </div>
            )}

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
