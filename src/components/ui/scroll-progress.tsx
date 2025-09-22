"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface ScrollProgressProps {
  className?: string;
  showPercentage?: boolean;
}

export function ScrollProgress({ className, showPercentage = false }: ScrollProgressProps) {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let ticking = false;
    
    const updateScrollProgress = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
          const scrolled = window.scrollY;
          const progress = (scrolled / scrollHeight) * 100;
          setScrollProgress(Math.min(100, Math.max(0, progress)));
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", updateScrollProgress, { passive: true });
    updateScrollProgress(); // Initial calculation

    return () => window.removeEventListener("scroll", updateScrollProgress);
  }, []);

  return (
    <div className={cn("fixed top-0 left-0 z-50 w-full", className)}>
      <div className="h-1 bg-zinc-900/20 backdrop-blur-sm">
        <div 
          className="h-full bg-gradient-to-r from-amber-400 to-orange-500 transition-all duration-150 ease-out will-change-transform"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
      {showPercentage && scrollProgress > 5 && (
        <div className="absolute top-2 right-4 text-xs text-white/80 bg-black/50 px-2 py-1 rounded">
          {Math.round(scrollProgress)}%
        </div>
      )}
    </div>
  );
}