
"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { useScrollProgress } from "@/hooks/use-scroll-progress";
import { HandDrawnCard } from "./HandDrawnCard";
import { Ship, Plus, Minus, Home } from "lucide-react";

const TIMELINE = [
  { 
    year: "JUL 2020 - NOV 2021", 
    location: "Bologna, Italy", 
    role: "Senior Software Engineer @ Brinzona", 
    description: "Part of core team working on AI-powered Media & Data Intelligence Solutions. Designed and built microservices for distributed systems, engineered data pipelines on Google Cloud.",
    x: "42%", 
    y: "68%",
    city: "BOLOGNA"
  },
  { 
    year: "JUL 2018 - JUN 2020", 
    location: "Tirana, Albania", 
    role: "Senior Software Engineer @ Shauk Solutions", 
    description: "Part of core team leading tech decisions. Led Apple-Mobile-CRM for Toyota and Microsoft. ICT market project deployed across USA, Canada, and Australia.",
    x: "58%", 
    y: "75%",
    city: "TIRANA"
  },
  { 
    year: "2015 - 2018", 
    location: "Munich, Germany", 
    role: "Software Engineer @ Gutenberg", 
    description: "Developed cloud-native applications using React and Node.js. Focused on performance optimization and scalable architecture.",
    x: "48%", 
    y: "50%",
    city: "MUNICH"
  }
];

export function SectionJourney() {
  const containerRef = useRef<HTMLDivElement>(null);
  const progress = useScrollProgress(containerRef);

  // Calculate pirate position based on scroll progress
  const getAvatarPosition = () => {
    const stepCount = TIMELINE.length - 1;
    const currentStepFloat = progress * stepCount;
    const currentIndex = Math.min(Math.floor(currentStepFloat), stepCount);
    const nextIndex = Math.min(currentIndex + 1, stepCount);
    const stepProgress = currentStepFloat - currentIndex;

    const start = TIMELINE[currentIndex];
    const end = TIMELINE[nextIndex];

    const x = parseFloat(start.x) + (parseFloat(end.x) - parseFloat(start.x)) * stepProgress;
    const y = parseFloat(start.y) + (parseFloat(end.y) - parseFloat(start.y)) * stepProgress;

    return { x: `${x}%`, y: `${y}%` };
  };

  const avatarPos = getAvatarPosition();

  return (
    <section id="journey" ref={containerRef} className="min-h-[150vh] bg-white py-24 px-4 flex flex-col items-center">
      <div className="max-w-6xl w-full">
        {/* Section Title Box */}
        <HandDrawnCard className="w-full py-6 mb-8 text-center bg-white">
          <h2 className="text-4xl font-headline font-black uppercase tracking-tight flex items-center justify-center gap-4">
            My Journey
          </h2>
        </HandDrawnCard>

        {/* Main Journey Card */}
        <div className="sticky top-32">
          <HandDrawnCard className="flex flex-col md:flex-row overflow-hidden min-h-[600px] bg-white">
            
            {/* Left Pane: Timeline */}
            <div className="w-full md:w-[40%] border-b-4 md:border-b-0 md:border-r-4 border-black flex flex-col">
              <div className="p-4 border-b-4 border-black bg-white">
                <h3 className="font-headline font-black uppercase text-sm">Journey Timeline</h3>
              </div>
              
              <div className="flex-1 p-6 space-y-8 overflow-y-auto">
                {TIMELINE.map((item, i) => {
                  const itemProgress = i / (TIMELINE.length - 1);
                  const isActive = progress >= itemProgress - 0.1 && progress <= itemProgress + 0.1;
                  
                  return (
                    <div key={i} className={`relative pl-8 transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-40'}`}>
                      {/* Timeline Dot & Line */}
                      <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-black z-10" />
                      {i !== TIMELINE.length - 1 && (
                        <div className="absolute left-[7px] top-4 w-0.5 h-[calc(100%+2rem)] bg-black/20" />
                      )}
                      
                      <div className="space-y-1">
                        <h4 className="font-headline font-black text-lg leading-tight uppercase">
                          {item.role}
                        </h4>
                        <p className="font-code text-[10px] font-bold text-muted-foreground uppercase">
                          {item.year}
                        </p>
                        <p className="font-body text-sm leading-relaxed pt-2">
                          {item.description}
                        </p>
                        <p className="font-code text-[10px] font-bold text-blue-500 pt-2 flex items-center gap-1">
                          <span className="w-2 h-2 rounded-full bg-blue-500" /> {item.location}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Pane: Map Area */}
            <div className="w-full md:w-[60%] relative bg-[#E6F3F7] overflow-hidden">
              {/* Map Placeholder */}
              <div className="absolute inset-0 z-0">
                <Image 
                  src="https://picsum.photos/seed/map-sketch/1200/900"
                  alt="Map Background"
                  fill
                  className="object-cover opacity-50 mix-blend-multiply"
                  data-ai-hint="illustrated map"
                />
              </div>

              {/* Map Overlay Grid */}
              <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

              {/* Map UI Elements */}
              <div className="absolute top-4 left-4 flex flex-col gap-2 z-20">
                <button className="w-8 h-8 border-2 border-black bg-white flex items-center justify-center hover:bg-gray-100">
                  <Plus className="w-4 h-4" />
                </button>
                <button className="w-8 h-8 border-2 border-black bg-white flex items-center justify-center hover:bg-gray-100">
                  <Minus className="w-4 h-4" />
                </button>
              </div>
              <div className="absolute top-4 right-4 z-20">
                <button className="w-10 h-10 border-2 border-black bg-white flex items-center justify-center hover:bg-gray-100 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <Home className="w-5 h-5" />
                </button>
              </div>

              {/* Map Locations & Pins */}
              {TIMELINE.map((item, i) => (
                <div 
                  key={i} 
                  className="absolute z-10 flex flex-col items-center" 
                  style={{ top: item.y, left: item.x }}
                >
                  <div className="bg-primary border-2 border-black px-2 py-0.5 text-[10px] font-black uppercase mb-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    {item.city}
                  </div>
                  <div className="w-6 h-6 border-2 border-black rounded-full bg-white flex items-center justify-center">
                    <div className="w-2 h-2 bg-black rounded-full animate-ping" />
                  </div>
                </div>
              ))}

              {/* Pirate Character Moving on Map */}
              <div 
                className="absolute z-30 transition-all duration-300 ease-linear flex flex-col items-center pointer-events-none"
                style={{ top: avatarPos.y, left: avatarPos.x, transform: 'translate(-50%, -85%)' }}
              >
                <div className="relative w-24 h-24">
                  <Image 
                    src="https://picsum.photos/seed/pirate-char/300/300"
                    alt="Pirate Avatar"
                    fill
                    className="object-contain drop-shadow-[4px_4px_0px_rgba(0,0,0,0.2)]"
                    data-ai-hint="pirate character"
                  />
                </div>
              </div>
            </div>
          </HandDrawnCard>
        </div>

        <div className="mt-20 text-center font-code text-sm opacity-50 uppercase tracking-widest animate-pulse">
          Scroll to navigate the map
        </div>
      </div>
    </section>
  );
}
