"use client";

import { ColorHoverEffect } from "@/components/ui/color-hover-effect";
import { cn } from "@/lib/utils";

interface GlowCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: "rainbow" | "ocean" | "sunset" | "white" | "teddy";
  glow?: boolean;
  borderWidth?: number;
  spread?: number;
  proximity?: number;
  inactiveZone?: number;
}

export const GlowCard = ({
  children,
  className,
  variant = "teddy",
  glow = true,
  borderWidth = 1,
  spread = 20,
  proximity = 0,
  inactiveZone = 0.7,
}: GlowCardProps) => {
  return (
    <div
      className={cn(
        "relative h-full w-full rounded-xl border border-gray-700 bg-zinc-900 overflow-hidden",
        className
      )}
    >
      <ColorHoverEffect
        variant={variant}
        glow={glow}
        borderWidth={borderWidth}
        spread={spread}
        proximity={proximity}
        inactiveZone={inactiveZone}
      />
      <div className="relative z-10 h-full p-6">
        {children}
      </div>
    </div>
  );
};
