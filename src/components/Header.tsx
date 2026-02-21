
"use client";

import React from "react";
import { HandDrawnCard } from "./HandDrawnCard";
import { Button } from "./ui/button";
import { Zap } from "lucide-react";

export function Header() {
  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50">
      <HandDrawnCard className="bg-primary px-4 py-2 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 border-4 border-black bg-white flex items-center justify-center font-black text-xl">
            MB
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-8 font-headline font-bold text-sm uppercase">
          <a href="#hero" className="hover:underline">Home</a>
          <a href="#about" className="hover:underline">About</a>
          <a href="#journey" className="hover:underline">Journey</a>
          <a href="#skills" className="hover:underline">Skills</a>
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden lg:flex items-center gap-2 bg-white border-2 border-black px-3 py-1 rounded-sm text-xs font-bold">
            <Zap className="w-3 h-3 fill-orange-500" />
            CREATOR of Genkit
          </div>
          <Button className="sketch-button bg-blue-400 hover:bg-blue-500 text-xs py-1 h-auto">
            Get in Touch!
          </Button>
          <div className="w-8 h-8 border-2 border-black flex items-center justify-center bg-white">
            <span className="font-bold">X</span>
          </div>
        </div>
      </HandDrawnCard>
    </header>
  );
}
