"use client";

import { useState, useEffect } from "react";
import { Heart, ThumbsUp, Lightbulb } from "lucide-react";
import { cn } from "@/lib/utils";

export function ReactionButtons() {
  // Initializing with realistic fake numbers for demonstration
  const [counts, setCounts] = useState({ heart: 342, like: 189, improve: 7 });
  const [reacted, setReacted] = useState({ heart: false, like: false, improve: false });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedCounts = localStorage.getItem("portfolio-reaction-counts-v2");
    const savedReacted = localStorage.getItem("portfolio-reacted-state-v2");

    if (savedCounts) {
      try {
        setCounts(JSON.parse(savedCounts));
      } catch (e) {}
    }
    
    if (savedReacted) {
      try {
        setReacted(JSON.parse(savedReacted));
      } catch (e) {}
    }
  }, []);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem("portfolio-reaction-counts-v2", JSON.stringify(counts));
      localStorage.setItem("portfolio-reacted-state-v2", JSON.stringify(reacted));
    }
  }, [counts, reacted, mounted]);

  const handleReaction = (type: keyof typeof counts) => {
    if (reacted[type]) {
      setCounts((prev) => ({ ...prev, [type]: prev[type] - 1 }));
      setReacted((prev) => ({ ...prev, [type]: false }));
    } else {
      setCounts((prev) => ({ ...prev, [type]: prev[type] + 1 }));
      setReacted((prev) => ({ ...prev, [type]: true }));
    }
  };

  if (!mounted) {
    return <div className="mt-6 mb-2 h-4 w-32 animate-pulse bg-muted/50 rounded"></div>;
  }

  return (
    <div className="mt-6 mb-2 flex items-center gap-5">
      <button
        onClick={() => handleReaction("heart")}
        className={cn(
          "flex items-center gap-1.5 text-xs font-medium transition-all hover:text-rose-500 hover:scale-105 active:scale-95",
          reacted.heart ? "text-rose-500" : "text-muted-foreground"
        )}
        title="Love it!"
      >
        <Heart size={16} className={cn(reacted.heart && "fill-current")} />
        <span>{counts.heart}</span>
      </button>

      <button
        onClick={() => handleReaction("like")}
        className={cn(
          "flex items-center gap-1.5 text-xs font-medium transition-all hover:text-blue-500 hover:scale-105 active:scale-95",
          reacted.like ? "text-blue-500" : "text-muted-foreground"
        )}
        title="Like it"
      >
        <ThumbsUp size={16} className={cn(reacted.like && "fill-current")} />
        <span>{counts.like}</span>
      </button>

      <button
        onClick={() => handleReaction("improve")}
        className={cn(
          "flex items-center gap-1.5 text-xs font-medium transition-all hover:text-amber-500 hover:scale-105 active:scale-95",
          reacted.improve ? "text-amber-500" : "text-muted-foreground"
        )}
        title="Needs Improvement"
      >
        <Lightbulb size={16} className={cn(reacted.improve && "fill-current")} />
        <span>{counts.improve}</span>
      </button>
    </div>
  );
}
