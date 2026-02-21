
"use client";

import React from "react";
import { HandDrawnCard } from "./HandDrawnCard";
import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";

const PROJECTS = [
  {
    title: "EcoTracker.io",
    description: "A real-time carbon footprint monitoring dashboard for enterprises.",
    image: "https://picsum.photos/seed/project1/600/400",
    tags: ["Next.js", "Genkit", "Firestore"],
  },
  {
    title: "SketchBoard AI",
    description: "Collaborative whiteboarding tool that converts doodles to UI code.",
    image: "https://picsum.photos/seed/project2/600/400",
    tags: ["React", "Canvas API", "WebSockets"],
  },
  {
    title: "Munich Explore",
    description: "Hyper-local guide for hidden gems in Bavaria using Geo-spatial data.",
    image: "https://picsum.photos/seed/project3/600/400",
    tags: ["TypeScript", "Google Maps", "Node.js"],
  },
];

export function SectionProjects() {
  return (
    <section id="projects" className="py-24 px-4 bg-white border-t-8 border-black">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-6xl font-headline font-black mb-4 inline-block border-b-8 border-black">
            LATEST PROJECTS
          </h2>
          <p className="font-code font-bold text-lg">/var/www/portfolio/work</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {PROJECTS.map((project, i) => (
            <HandDrawnCard key={i} className="group hover:-translate-y-2 transition-transform">
              <div className="relative h-48 border-b-4 border-black overflow-hidden">
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform"
                  data-ai-hint="tech project"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-headline font-black mb-2">{project.title}</h3>
                <p className="font-body text-sm mb-4 line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-bold uppercase bg-secondary/30 border border-black px-2 py-0.5">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                   <button className="flex items-center gap-1 font-code font-bold text-xs hover:underline"><Github className="w-4 h-4" /> CODE</button>
                   <button className="flex items-center gap-1 font-code font-bold text-xs hover:underline"><ExternalLink className="w-4 h-4" /> LIVE</button>
                </div>
              </div>
            </HandDrawnCard>
          ))}
        </div>
      </div>
    </section>
  );
}
