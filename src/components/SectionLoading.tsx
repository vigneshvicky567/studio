"use client";

import React, { useState, useEffect } from "react";
import { Monitor, Code, Terminal, Database } from "lucide-react";

interface SectionLoadingProps {
  onComplete: () => void;
}

export function SectionLoading({ onComplete }: SectionLoadingProps) {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setIsVisible(false), 500);
          setTimeout(onComplete, 1200); 
          return 100;
        }
        return prev + 2.5; // Slightly faster for snappier feel
      });
    }, 30);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div 
      className={`fixed inset-0 z-[100] bg-[#FFDA63] flex flex-col items-center justify-center transition-all duration-700 ease-in-out px-4 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none -translate-y-full"
      }`}
    >
      <div className="relative w-full max-w-sm flex flex-col items-center">
        
        {/* Skewed & Randomized Floating Icons */}
        <div className="absolute -top-16 -left-8 md:-top-24 md:-left-20 animate-bounce-custom rotate-[-12deg]">
           <Code className="w-10 h-10 md:w-14 md:h-14 text-black/40" />
        </div>
        
        <div className="absolute -top-8 -right-10 md:-top-16 md:-right-24 animate-bounce-custom delay-300 rotate-[15deg]">
           <Terminal className="w-8 h-8 md:w-12 md:h-12 text-black/40" />
        </div>
        
        <div className="absolute bottom-4 -left-12 md:bottom-8 md:-left-28 animate-bounce-custom delay-500 rotate-[8deg]">
           <Monitor className="w-12 h-12 md:w-16 md:h-16 text-black/40" />
        </div>
        
        <div className="absolute -bottom-16 -right-6 md:-bottom-24 md:-right-16 animate-bounce-custom delay-700 rotate-[-15deg]">
           <Database className="w-10 h-10 md:w-14 md:h-14 text-black/40" />
        </div>

        {/* Hand Pointer Icon */}
        <div className="mb-10 animate-pulse">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" className="md:w-14 md:h-14" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0" />
            <path d="M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0" />
            <path d="M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0" />
            <path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15" />
          </svg>
        </div>

        {/* Initials Blocks (Vibrant Pink & Blue) */}
        <div className="flex justify-center gap-4 mb-10">
          <div className="w-16 h-16 md:w-20 md:h-20 border-4 border-black bg-[#3ABEF9] flex items-center justify-center text-3xl md:text-4xl font-headline font-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] rotate-[-3deg]">
            P
          </div>
          <div className="w-16 h-16 md:w-20 md:h-20 border-4 border-black bg-[#FF5BAE] flex items-center justify-center text-3xl md:text-4xl font-headline font-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] rotate-[5deg]">
            M
          </div>
        </div>

        {/* Progress Underline */}
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
