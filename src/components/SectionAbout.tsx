"use client";

import React, { useRef, useState, useEffect } from "react";
import { useScrollProgress } from "@/hooks/use-scroll-progress";
import { suggestHighlightKeywords } from "@/ai/flows/about-section-keyword-highlighter";

const ABOUT_TEXT = "I am a highly motivated Computer Science undergraduate specializing in AI and Data Science. My academic journey has equipped me with a strong foundation in programming and problem-solving. I am proficient in Java, Python, and SQL, and I have hands-on experience in full-stack development using HTML, CSS, and JavaScript to build responsive web applications. I am seeking to leverage my technical expertise and strong leadership skills in a dynamic organization focused on creating innovative software solutions.";

const HIGHLIGHT_MAP: Record<string, string> = {
  "AI and Data Science": "bg-yellow-300",
  "8 years": "bg-yellow-300",
  "technical expertise": "bg-blue-300",
  "full-stack development": "bg-pink-300",
  "Java": "bg-yellow-200",
  "Python": "bg-yellow-200",
  "SQL": "bg-yellow-200",
  "leadership skills": "bg-yellow-300",
  "innovative software solutions": "bg-blue-300"
};

export function SectionAbout() {
  const containerRef = useRef<HTMLDivElement>(null);
  const progress = useScrollProgress(containerRef);
  const [keywords, setKeywords] = useState<string[]>(Object.keys(HIGHLIGHT_MAP));

  useEffect(() => {
    async function getKeywords() {
      try {
        const result = await suggestHighlightKeywords({ aboutSectionText: ABOUT_TEXT });
        const merged = Array.from(new Set([...Object.keys(HIGHLIGHT_MAP), ...result.keywords]));
        setKeywords(merged);
      } catch (e) {
        // Fallback to defaults
      }
    }
    getKeywords();
  }, []);

  const renderTextWithHighlights = () => {
    const sortedKeywords = [...keywords].sort((a, b) => b.length - a.length);
    const words = ABOUT_TEXT.split(' ');
    
    return (
      <div className="text-lg md:text-3xl leading-relaxed font-headline font-bold text-center max-w-4xl mx-auto">
        {words.map((word, i) => {
          const cleanedWord = word.replace(/[.,]/g, '');
          const keywordMatch = sortedKeywords.find(k => k.toLowerCase().includes(cleanedWord.toLowerCase()));
          const activationThreshold = 0.15 + (i / words.length) * 0.4;
          const isActive = keywordMatch && progress > activationThreshold;
          
          const highlightColor = HIGHLIGHT_MAP[keywordMatch || ""] || "bg-blue-200";

          return (
            <span key={i} className="relative inline-block mx-1">
              <span className={`relative z-10 transition-colors duration-300 ${isActive ? 'text-black' : 'text-black/80'}`}>
                {word}
              </span>
              {keywordMatch && (
                <span 
                  className={`absolute bottom-1 left-0 h-3/5 -z-0 rounded-lg transition-all duration-700 ease-out ${highlightColor}`}
                  style={{ width: isActive ? '100%' : '0%' }}
                />
              )}
            </span>
          );
        })}
      </div>
    );
  };

  return (
    <section id="about" ref={containerRef} className="bg-white py-16 md:py-24 flex flex-col items-center justify-center px-4 md:px-8">
      <div className="max-w-5xl w-full">
        <div className="mb-10 md:mb-14 text-center">
          <h2 className="text-4xl md:text-7xl font-headline font-black mb-2 inline-block relative">
            ABOUT
            <span className="absolute -bottom-2 left-0 w-full h-2 md:h-3 bg-black rounded-full" />
          </h2>
        </div>
        <div className="px-2">
          {renderTextWithHighlights()}
        </div>
      </div>
    </section>
  );
}
