"use client";

import { ColorHoverEffect } from "@/components/ui/color-hover-effect";
import { cn } from "@/lib/utils";

interface GlowCardProps {
  children: React.ReactNode;
  className?: string;
  innerClassName?: string;
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
  innerClassName,
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
        "relative h-full w-full rounded-xl border border-white overflow-hidden p-1",
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
      <div className={cn("relative z-10 h-full rounded-lg border border-white bg-white overflow-hidden", innerClassName)}>
        <div className="h-full p-6">
          {children}
        </div>
      </div>
    </div>
  );
};
