"use client";

import React, { useRef } from "react";
import { HandDrawnCard } from "./HandDrawnCard";
import { useScrollProgress } from "@/hooks/use-scroll-progress";
import { Code2, Globe2, Wrench, Heart } from "lucide-react";

const SKILLS = [
  {
    category: "Programming",
    icon: <Code2 className="w-5 h-5" />,
    items: ["Python", "Java", "SQL"]
  },
  {
    category: "Web Tech",
    icon: <Globe2 className="w-5 h-5" />,
    items: ["HTML5", "CSS3", "JavaScript"]
  },
  {
    category: "Tools",
    icon: <Wrench className="w-5 h-5" />,
    items: ["Git", "GitHub", "VSCode"]
  },
  {
    category: "Soft Skills",
    icon: <Heart className="w-5 h-5" />,
    items: ["Teamwork", "Leadership", "Communication"]
  }
];

export function SectionSkills() {
  const containerRef = useRef<HTMLDivElement>(null);
  const progress = useScrollProgress(containerRef);

  const opacity = Math.min(1, Math.max(0, (progress - 0.05) * 5));
  const scale = 0.98 + (Math.min(1, Math.max(0, (progress - 0.05) * 5)) * 0.02);

  return (
    <section id="skills" ref={containerRef} className="relative py-12 md:py-20 flex flex-col items-center justify-center overflow-hidden">
      <div 
        style={{ 
          opacity, 
          transform: `scale(${scale})` 
        }}
        className="w-full max-w-5xl px-4 transition-all duration-300 ease-out z-10"
      >
        <div className="mb-8 text-center">
          <h2 className="font-headline text-4xl md:text-6xl font-black mb-1 uppercase tracking-tighter">SKILLS</h2>
          <p className="font-code text-[10px] md:text-xs text-muted-foreground uppercase tracking-widest">/usr/bin/expertise</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          {SKILLS.map((skillGroup, idx) => (
            <HandDrawnCard 
              key={skillGroup.category} 
              className={`p-5 md:p-6 transition-all duration-500 border-4 border-black ${
                progress > 0.1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: `${idx * 80}ms` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 border-4 border-black bg-primary flex items-center justify-center shrink-0">
                  {skillGroup.icon}
                </div>
                <h3 className="font-headline text-xl md:text-2xl font-black uppercase">{skillGroup.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map(skill => (
                  <span key={skill} className="pill-skill text-xs md:text-base px-3 py-1.5 bg-background border-2 border-black font-bold">
                    {skill}
                  </span>
                ))}
              </div>
            </HandDrawnCard>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <HandDrawnCard bg="bg-secondary" className="p-3 md:p-4 border-4 border-black transform -rotate-1 hover:rotate-0 transition-transform">
            <p className="font-headline text-base md:text-lg font-black uppercase text-center">Building with purpose ↓</p>
          </HandDrawnCard>
        </div>
      </div>
      
      <div 
        className="absolute inset-0 bg-primary -z-10 transition-transform duration-500 origin-bottom ease-out"
        style={{ transform: `scaleY(${progress})` }}
      />
    </section>
  );
}
