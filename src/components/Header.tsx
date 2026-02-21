
"use client";

import React from "react";
import { HandDrawnCard } from "./HandDrawnCard";
import { Button } from "./ui/button";

export function Header() {
  return (
    <header className="fixed top-2 md:top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50">
      <HandDrawnCard className="bg-[#1A2B3C] px-3 md:px-6 py-2 flex items-center justify-between border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-white">
        {/* PM Logo Blocks */}
        <div className="flex items-center gap-2">
          <div className="flex gap-1">
             <div className="w-8 h-8 border-2 border-black bg-blue-400 flex items-center justify-center font-black text-black">P</div>
             <div className="w-8 h-8 border-2 border-black bg-pink-400 flex items-center justify-center font-black text-black">M</div>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-10 font-headline font-bold text-xs lg:text-sm uppercase text-white/90">
          <a href="#hero" className="hover:text-primary transition-all">Home</a>
          <a href="#about" className="hover:text-primary transition-all">About</a>
          <a href="#projects" className="hover:text-primary transition-all">Projects</a>
          <a href="#skills" className="hover:text-primary transition-all">Skills</a>
        </nav>

        {/* LinkedIn and CTA */}
        <div className="flex items-center gap-2 md:gap-4">
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hidden sm:flex items-center gap-2 bg-white text-black border-2 border-black px-2 py-1 font-black text-xs shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5"
          >
            <div className="w-5 h-5 bg-[#0077B5] flex items-center justify-center border border-black">
              <span className="text-white text-[10px] font-black">in</span>
            </div>
            LinkedIn
          </a>
          <Button className="bg-blue-300 hover:bg-blue-400 text-black border-2 border-black font-black text-xs shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] rounded-none h-auto py-1.5">
            Get in touch
          </Button>
        </div>
      </HandDrawnCard>
    </header>
  );
}
