
import { cn } from "@/lib/utils";
import React from "react";

interface HandDrawnCardProps {
  children: React.ReactNode;
  className?: string;
  bg?: string;
  rounded?: string;
}

export function HandDrawnCard({ children, className, bg = "bg-white", rounded = "rounded-sm" }: HandDrawnCardProps) {
  return (
    <div className={cn(
      "hand-drawn-border transition-all",
      rounded,
      bg,
      className
    )}>
      {children}
    </div>
  );
}
