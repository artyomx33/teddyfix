"use client";

import { ColorHoverEffect } from "@/components/ui/color-hover-effect";
import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes } from "react";

interface GlowButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "rainbow" | "ocean" | "sunset" | "white" | "teddy";
  blur?: number;
  glow?: boolean;
  borderWidth?: number;
  spread?: number;
  proximity?: number;
  inactiveZone?: number;
}

export const GlowButton = ({
  children,
  className,
  variant = "sunset",
  blur = 10,
  glow = true,
  borderWidth = 1,
  spread = 20,
  proximity = 0,
  inactiveZone = 0.7,
  ...props
}: GlowButtonProps) => {
  return (
    <button
      className={cn(
        "relative overflow-hidden rounded-md bg-black px-6 py-3 text-white font-medium text-sm transition-all duration-300",
        className
      )}
      {...props}
    >
      <ColorHoverEffect
        variant={variant}
        glow={glow}
        blur={blur}
        borderWidth={borderWidth}
        spread={spread}
        proximity={proximity}
        inactiveZone={inactiveZone}
        className="-z-10"
      />
      <span className="relative z-10">
        {children}
      </span>
    </button>
  );
};
