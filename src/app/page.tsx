
"use client";

import React from "react";
import { SectionSkills } from "@/components/SectionSkills";
import { SectionLoading } from "@/components/SectionLoading";
import { SectionHero } from "@/components/SectionHero";
import { SectionAbout } from "@/components/SectionAbout";
import { SectionJourney } from "@/components/SectionJourney";
import { SectionProjects } from "@/components/SectionProjects";
import { PirateCustomizer } from "@/components/PirateCustomizer";
import { HandDrawnCard } from "@/components/HandDrawnCard";
import { Header } from "@/components/Header";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary">
      {/* Floating Navigation Header */}
      <Header />

      {/* 1. Loading Animation Section */}
      <SectionLoading />

      {/* 2. Main Hero Section (Updated design) */}
      <SectionHero />

      {/* 3. About Section */}
      <SectionAbout />

      {/* 4. Projects Section (New) */}
      <SectionProjects />
      
      {/* 5. Journey Section */}
      <SectionJourney />

      {/* 6. Skills Section */}
      <SectionSkills />
      
      {/* 7. Interactive Tool */}
      <PirateCustomizer />

      {/* Footer */}
      <footer className="py-20 border-t-4 border-black bg-white flex flex-col items-center justify-center">
        <HandDrawnCard className="p-12 text-center max-w-lg">
          <h2 className="text-3xl font-headline font-black mb-4">THANKS FOR SCROLLING!</h2>
          <p className="font-body mb-8">
            This site was built with a lot of ink, pixels, and scroll-events.
          </p>
          <div className="font-code text-sm">
            © 2024 MARJO BALLABANI / SCROLLFOLIO.TS
          </div>
        </HandDrawnCard>
      </footer>
    </main>
  );
}
