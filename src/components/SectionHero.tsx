
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
    <section id="hero" ref={containerRef} className="relative min-h-screen bg-[#FFDA63] flex flex-col items-center justify-center pt-24 md:pt-32 pb-24 md:pb-32 px-4 md:px-8 overflow-hidden">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center z-10">
        
        {/* Left Column: Text Content */}
        <div className="space-y-4 md:space-y-8 text-center lg:text-left">
          <div className="relative inline-block">
            <div className="bg-white border-4 border-black px-4 py-2 rounded-2xl rotate-[-5deg] font-headline font-black text-xl md:text-2xl animate-bounce shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              Hi there! 🚀
            </div>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-8xl font-headline font-black leading-tight">
            I'm Prasannalakshmi MD.
          </h1>
          
          <p className="text-lg md:text-2xl font-body font-medium max-w-2xl mx-auto lg:mx-0 text-black/80 leading-relaxed">
            Highly motivated <span className="underline decoration-pink-500 decoration-4">Computer Science undergraduate</span> specializing in AI and Data Science. Proficient in Java, Python, SQL, and full-stack development.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
            <Button className="bg-[#FF4D4D] hover:bg-[#FF4D4D]/90 text-white rounded-full h-14 md:h-16 px-10 md:px-12 text-lg md:text-xl font-black border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              Get in Touch!
            </Button>
            <div className="flex items-center gap-2 font-headline font-bold text-lg hover:underline cursor-pointer group">
              <div className="p-2 bg-white border-2 border-black rounded-full group-hover:bg-yellow-100">
                <Coffee className="w-5 h-5" />
              </div>
              Buy me a coffee
            </div>
          </div>
        </div>

        {/* Right Column: Visual Content */}
        <div className="relative flex justify-center order-first lg:order-last">
          <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px]">
            {/* Avatar Frame - Now perfectly circular */}
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
            <div className="absolute -top-4 -left-4 md:-top-8 md:-left-8 z-20 animate-bounce-custom">
               <HandDrawnCard className="p-3 bg-white border-4 border-black rounded-xl rotate-[-15deg] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                 <Code className="w-8 h-8 text-blue-500" />
               </HandDrawnCard>
            </div>
            
            <div className="absolute top-1/4 -right-4 md:-right-8 z-20 animate-bounce-custom" style={{ animationDelay: '0.5s' }}>
               <HandDrawnCard className="p-3 bg-white border-4 border-black rounded-xl rotate-[10deg] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                 <Terminal className="w-8 h-8 text-yellow-500" />
               </HandDrawnCard>
            </div>

            <div className="absolute bottom-1/4 -left-4 md:-left-12 z-20 animate-bounce-custom" style={{ animationDelay: '1s' }}>
               <HandDrawnCard className="p-3 bg-white border-4 border-black rounded-xl rotate-[-5deg] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                 <Database className="w-8 h-8 text-blue-500" />
               </HandDrawnCard>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Tech Tags Row */}
      <div className="w-full max-w-7xl mt-12 md:mt-24 flex flex-col items-center gap-6">
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 px-2">
          {TECH_TAGS.map((tag, i) => (
            <div key={i} className="bg-white/50 border-2 border-black rounded-full px-6 py-2 font-headline font-bold text-sm md:text-lg">
              {tag.name}
            </div>
          ))}
        </div>
        <Button className="bg-[#3ABEF9] hover:bg-[#3ABEF9]/90 text-black border-4 border-black font-black px-10 py-4 h-auto rounded-xl text-lg md:text-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          Full-stack Ninja
        </Button>
      </div>

      {/* Torn Edge Transition */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-transparent torn-edge-svg z-30" />
    </section>
  );
}
