"use client";

import React, { useState, useEffect, useMemo } from "react";
import { Monitor, Code, Terminal, Database } from "lucide-react";

interface SectionLoadingProps {
  onComplete: () => void;
}

export function SectionLoading({ onComplete }: SectionLoadingProps) {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [mounted, setMounted] = useState(false);

  // Generate random styles only after mount to avoid hydration mismatch
  const randomStyles = useMemo(() => {
    if (!mounted) return [];
    return [
      { top: '-4rem', left: '-2rem', rotate: '-12deg', delay: '0s' },
      { top: '-2rem', right: '-2.5rem', rotate: '15deg', delay: '0.3s' },
      { bottom: '1rem', left: '-3rem', rotate: '8deg', delay: '0.5s' },
      { bottom: '-4rem', right: '-1.5rem', rotate: '-15deg', delay: '0.7s' },
    ];
  }, [mounted]);

  useEffect(() => {
    setMounted(true);
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setIsVisible(false), 500);
          setTimeout(onComplete, 1200);
          return 100;
        }
        return prev + 4; // Faster progress for better UX
      });
    }, 40);

    return () => clearInterval(timer);
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div 
      className={`fixed inset-0 z-[100] bg-[#FFDA63] flex flex-col items-center justify-center transition-all duration-700 ease-in-out px-4 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none -translate-y-full"
      }`}
      aria-busy="true"
      aria-label="Loading portfolio"
    >
      <div className="relative w-full max-w-sm flex flex-col items-center">
        
        {mounted && randomStyles.length > 0 && (
          <>
            <div className="absolute animate-bounce-custom" style={{ top: randomStyles[0].top, left: randomStyles[0].left, transform: `rotate(${randomStyles[0].rotate})` }}>
               <Code className="w-10 h-10 md:w-14 md:h-14 text-black/40" />
            </div>
            
            <div className="absolute animate-bounce-custom" style={{ top: randomStyles[1].top, right: randomStyles[1].right, transform: `rotate(${randomStyles[1].rotate})`, animationDelay: randomStyles[1].delay }}>
               <Terminal className="w-8 h-8 md:w-12 md:h-12 text-black/40" />
            </div>
            
            <div className="absolute animate-bounce-custom" style={{ bottom: randomStyles[2].bottom, left: randomStyles[2].left, transform: `rotate(${randomStyles[2].rotate})`, animationDelay: randomStyles[2].delay }}>
               <Monitor className="w-12 h-12 md:w-16 md:h-16 text-black/40" />
            </div>
            
            <div className="absolute animate-bounce-custom" style={{ bottom: randomStyles[3].bottom, right: randomStyles[3].right, transform: `rotate(${randomStyles[3].rotate})`, animationDelay: randomStyles[3].delay }}>
               <Database className="w-10 h-10 md:w-14 md:h-14 text-black/40" />
            </div>
          </>
        )}

        <div className="mb-10 animate-pulse">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" className="md:w-14 md:h-14" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0" />
            <path d="M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0" />
            <path d="M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0" />
            <path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15" />
          </svg>
        </div>

        <div className="flex justify-center gap-4 mb-10">
          <div className="w-16 h-16 md:w-20 md:h-20 border-4 border-black bg-[#3ABEF9] flex items-center justify-center text-3xl md:text-4xl font-headline font-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] -rotate-3">
            P
          </div>
          <div className="w-16 h-16 md:w-20 md:h-20 border-4 border-black bg-[#FF5BAE] flex items-center justify-center text-3xl md:text-4xl font-headline font-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] rotate-6">
            M
          </div>
        </div>

        <div className="w-40 md:w-56 h-3 bg-black/10 rounded-full relative mb-8 overflow-hidden">
          <div 
            className="absolute inset-y-0 left-0 bg-black transition-all duration-100 ease-linear"
            style={{ width: `${progress}%` }}
          />
        </div>
        
        <p className="text-center font-code font-black text-sm md:text-lg uppercase tracking-widest text-black/70">
          {Math.round(progress)}% INITIALIZING...
        </p>
      </div>
    </div>
  );
}
