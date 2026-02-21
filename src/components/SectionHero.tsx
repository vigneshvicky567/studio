"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { HandDrawnCard } from "./HandDrawnCard";
import { Button } from "./ui/button";
import { Code, Terminal, Database, Github, Coffee, Sparkles } from "lucide-react";

const TECH_TAGS = [
  { name: "Python" },
  { name: "Java" },
  { name: "SQL" },
  { name: "HTML5" },
  { name: "CSS3" },
  { name: "JavaScript" },
  { name: "Git" },
  { name: "GitHub" },
  { name: "VSCode" },
];

export function SectionHero() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section id="hero" ref={containerRef} className="relative min-h-[90vh] bg-[#FFDA63] flex flex-col items-center justify-center pt-20 md:pt-24 pb-16 md:pb-20 px-4 md:px-8 overflow-hidden">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center z-10">
        
        {/* Left Column: Text Content */}
        <div className="space-y-4 md:space-y-6 text-center lg:text-left">
          <div className="relative inline-block">
            <div className="bg-white border-4 border-black px-3 py-1 rounded-2xl rotate-[-5deg] font-headline font-black text-lg md:text-xl animate-bounce shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              Hi there! 🚀
            </div>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-7xl font-headline font-black leading-tight">
            I'm Prasannalakshmi MD.
          </h1>
          
          <p className="text-base md:text-xl font-body font-medium max-w-xl mx-auto lg:mx-0 text-black/80 leading-relaxed">
            Highly motivated <span className="underline decoration-pink-500 decoration-4">Computer Science undergraduate</span> specializing in AI and Data Science. Proficient in Java, Python, SQL, and full-stack development.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
            <Button className="bg-[#FF4D4D] hover:bg-[#FF4D4D]/90 text-white rounded-full h-12 md:h-14 px-8 md:px-10 text-base md:text-lg font-black border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              Get in Touch!
            </Button>
            <div className="flex items-center gap-2 font-headline font-bold text-base hover:underline cursor-pointer group">
              <div className="p-1.5 bg-white border-2 border-black rounded-full group-hover:bg-yellow-100">
                <Coffee className="w-4 h-4" />
              </div>
              Buy me a coffee
            </div>
          </div>
        </div>

        {/* Right Column: Visual Content */}
        <div className="relative flex justify-center order-first lg:order-last">
          <div className="relative w-[240px] h-[240px] sm:w-[320px] sm:h-[320px] md:w-[420px] md:h-[420px]">
            {/* Avatar Frame */}
            <HandDrawnCard rounded="rounded-full" className="w-full h-full p-0 overflow-hidden relative z-10 bg-white border-4 border-black">
               <Image 
                src="https://picsum.photos/seed/prasanna-hero/600/600" 
                alt="Prasannalakshmi MD" 
                fill 
                className="object-cover rounded-full"
                data-ai-hint="friendly avatar"
               />
            </HandDrawnCard>

            {/* Floating Icons */}
            <div className="absolute -top-2 -left-2 md:-top-4 md:-left-4 z-20 animate-bounce-custom">
               <HandDrawnCard className="p-2 bg-white border-2 md:border-4 border-black rounded-xl rotate-[-15deg] shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                 <Code className="w-5 h-5 md:w-7 md:h-7 text-blue-500" />
               </HandDrawnCard>
            </div>
            
            <div className="absolute top-1/4 -right-2 md:-right-4 z-20 animate-bounce-custom" style={{ animationDelay: '0.5s' }}>
               <HandDrawnCard className="p-2 bg-white border-2 md:border-4 border-black rounded-xl rotate-[10deg] shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                 <Terminal className="w-5 h-5 md:w-7 md:h-7 text-yellow-500" />
               </HandDrawnCard>
            </div>

            <div className="absolute bottom-1/4 -left-2 md:-left-8 z-20 animate-bounce-custom" style={{ animationDelay: '1s' }}>
               <HandDrawnCard className="p-2 bg-white border-2 md:border-4 border-black rounded-xl rotate-[-5deg] shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                 <Database className="w-5 h-5 md:w-7 md:h-7 text-blue-500" />
               </HandDrawnCard>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Tech Tags Row */}
      <div className="w-full max-w-7xl mt-8 md:mt-12 flex flex-col items-center gap-4">
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 px-2">
          {TECH_TAGS.map((tag, i) => (
            <div key={i} className="bg-white/50 border-2 border-black rounded-full px-4 py-1.5 font-headline font-bold text-xs md:text-base">
              {tag.name}
            </div>
          ))}
        </div>
        <Button className="bg-[#3ABEF9] hover:bg-[#3ABEF9]/90 text-black border-4 border-black font-black px-8 py-3 h-auto rounded-xl text-base md:text-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          Full-stack Ninja
        </Button>
      </div>

      {/* Torn Edge Transition */}
      <div className="absolute bottom-0 left-0 w-full h-20 bg-transparent torn-edge-svg z-30" />
    </section>
  );
}
