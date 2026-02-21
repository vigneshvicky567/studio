"use client";

import React from "react";
import { HandDrawnCard } from "./HandDrawnCard";
import Image from "next/image";
import { ExternalLink, Github, Code, Cpu, Activity } from "lucide-react";

const PROJECTS = [
  {
    title: "Predictive Diagnostics",
    category: "ML & Web",
    description: "Multi-disease prediction web app (Diabetes, Heart Disease, Parkinson’s, Breast Cancer) using Random Forest, Logistic Regression, and SVC.",
    features: [
      "Medical datasets analysis",
      "Confidence scores & interpretability",
      "Responsive UI/UX design"
    ],
    image: "https://picsum.photos/seed/diagnostics/600/400",
    tags: ["Python", "ML", "React"],
    icon: <Activity className="w-5 h-5" />
  },
  {
    title: "Knight Bite",
    category: "Frontend",
    description: "Mobile-first responsive food ordering website with modern UI and smooth navigation. High emphasis on UI/UX and cross-device compatibility.",
    features: [
      "Responsive design systems",
      "Interactive UI components",
      "Optimized for performance"
    ],
    image: "https://picsum.photos/seed/knightbite/600/400",
    tags: ["HTML5", "CSS3", "JavaScript"],
    icon: <Code className="w-5 h-5" />
  },
  {
    title: "RecoverEase",
    category: "AI & Full-Stack",
    description: "AI-powered drug recovery platform with peer counseling, craving-control, and streak-based rewards for long-term support.",
    features: [
      "AI chatbot for 24/7 guidance",
      "Role-based secure authentication",
      "Progress tracking & dashboards"
    ],
    image: "https://picsum.photos/seed/recover/600/400",
    tags: ["Genkit", "Node.js", "AI"],
    icon: <Cpu className="w-5 h-5" />
  },
];

export function SectionProjects() {
  return (
    <section id="projects" className="py-12 md:py-20 px-4 md:px-8 bg-transparent border-t-4 border-black">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8 md:mb-12 text-center">
          <h2 className="text-3xl md:text-5xl font-headline font-black mb-2 inline-block border-b-4 border-black uppercase">
            PROJECTS
          </h2>
          <p className="font-code font-bold text-xs md:text-sm text-muted-foreground">/var/www/portfolio/work</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {PROJECTS.map((project, i) => (
            <HandDrawnCard key={i} className="group hover:-translate-y-1 transition-transform flex flex-col bg-white border-4 border-black">
              <div className="relative h-40 md:h-44 border-b-4 border-black overflow-hidden">
                <Image 
                  src={project.image} 
                  alt={`Screenshot of ${project.title} project`} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  data-ai-hint="tech project"
                />
                <div className="absolute top-2 right-2 bg-primary border-2 border-black px-2 py-0.5 font-bold text-[10px] md:text-xs uppercase">
                  {project.category}
                </div>
              </div>
              <div className="p-4 md:p-5 flex-1 flex flex-col">
                <div className="flex items-center gap-2 mb-2">
                  <span className="shrink-0" aria-hidden="true">{project.icon}</span>
                  <h3 className="text-lg md:text-xl font-headline font-black uppercase truncate">{project.title}</h3>
                </div>
                <p className="font-body text-xs md:text-sm mb-3 text-muted-foreground line-clamp-2">{project.description}</p>
                
                <ul className="mb-4 space-y-1 hidden sm:block">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="font-body text-[10px] md:text-xs flex items-center gap-2">
                      <span className="w-1 md:w-1.5 h-1 md:h-1.5 bg-black rounded-full" aria-hidden="true" /> {feature}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto">
                  <div className="flex flex-wrap gap-1 md:gap-1.5 mb-3">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[9px] md:text-[10px] font-bold uppercase bg-secondary/30 border border-black px-1.5 py-0.5">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                     <button className="flex items-center gap-1 font-code font-bold text-[10px] md:text-xs hover:underline" aria-label={`View code for ${project.title}`}>
                        <Github className="w-3.5 h-3.5" /> CODE
                     </button>
                     <button className="flex items-center gap-1 font-code font-bold text-[10px] md:text-xs hover:underline" aria-label={`View live demo of ${project.title}`}>
                        <ExternalLink className="w-3.5 h-3.5" /> LIVE
                     </button>
                  </div>
                </div>
              </div>
            </HandDrawnCard>
          ))}
        </div>
      </div>
    </section>
  );
}
