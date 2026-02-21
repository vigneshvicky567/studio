"use client";

import React from "react";
import { HandDrawnCard } from "./HandDrawnCard";
import { Award, Trophy, Star, Medal } from "lucide-react";

const CERTIFICATIONS = [
  { name: "NPTEL Certified", detail: "Python Programming" },
  { name: "EDX Certified", detail: "Game Development" },
  { name: "IBM Skillsbuild", detail: "AI Fundamentals" }
];

const ACHIEVEMENTS = [
  { 
    title: "Academic Topper", 
    detail: "1st rank (AIDS, 2026) - 92.22%", 
    icon: <Trophy className="w-5 h-5 md:w-7 md:h-7 text-yellow-500" /> 
  },
  { 
    title: "Poster Award", 
    detail: "Visual communication (2025)", 
    icon: <Award className="w-5 h-5 md:w-7 md:h-7 text-blue-500" /> 
  }
];

export function SectionAchievements() {
  return (
    <section id="achievements" className="py-12 md:py-20 px-4 md:px-8 bg-primary/10">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          
          {/* Certifications Card */}
          <HandDrawnCard className="p-5 md:p-6 bg-white border-4 border-black">
            <div className="flex items-center gap-3 mb-6">
              <Medal className="w-6 h-6 md:w-8 md:h-8 shrink-0" />
              <h2 className="text-2xl md:text-3xl font-headline font-black uppercase">Certifications</h2>
            </div>
            <div className="space-y-3">
              {CERTIFICATIONS.map((cert, i) => (
                <div key={i} className="flex items-start gap-3 p-3 border-2 border-black border-dashed rounded-lg bg-gray-50">
                  <Star className="w-4 h-4 mt-1 shrink-0 fill-yellow-400" />
                  <div>
                    <h4 className="font-headline font-black text-base md:text-lg uppercase leading-tight">{cert.name}</h4>
                    <p className="font-body text-[10px] md:text-xs text-muted-foreground">{cert.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </HandDrawnCard>

          {/* Achievements Card */}
          <HandDrawnCard className="p-5 md:p-6 bg-white border-4 border-black">
            <div className="flex items-center gap-3 mb-6">
              <Trophy className="w-6 h-6 md:w-8 md:h-8 shrink-0" />
              <h2 className="text-2xl md:text-3xl font-headline font-black uppercase">Achievements</h2>
            </div>
            <div className="space-y-3">
              {ACHIEVEMENTS.map((ach, i) => (
                <div key={i} className="flex items-center gap-3 p-4 border-2 md:border-4 border-black bg-yellow-50">
                  <div className="shrink-0 p-1.5 md:p-2 border-2 border-black bg-white rounded-full">
                    {ach.icon}
                  </div>
                  <div>
                    <h4 className="font-headline font-black text-base md:text-lg uppercase leading-tight">{ach.title}</h4>
                    <p className="font-body text-[10px] md:text-xs">{ach.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </HandDrawnCard>

        </div>
      </div>
    </section>
  );
}
