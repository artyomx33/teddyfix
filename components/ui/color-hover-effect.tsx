"use client";

import React, { memo, useCallback, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { animate } from "motion/react";

// 🎨 PRESETS: Define your color DNA here
const GRADIENT_PRESETS = {
  rainbow: `
    radial-gradient(circle, #dd7bbb 10%, #dd7bbb00 20%),
    radial-gradient(circle at 40% 40%, #d79f1e 5%, #d79f1e00 15%),
    radial-gradient(circle at 60% 60%, #5a922c 10%, #5a922c00 20%),
    radial-gradient(circle at 40% 60%, #4c7894 10%, #4c789400 20%),
    repeating-conic-gradient(
      from 236.84deg at 50% 50%,
      #dd7bbb 0%,
      #d79f1e calc(25% / var(--repeating-conic-gradient-times)),
      #5a922c calc(50% / var(--repeating-conic-gradient-times)),
      #4c7894 calc(75% / var(--repeating-conic-gradient-times)),
      #dd7bbb calc(100% / var(--repeating-conic-gradient-times))
    )
  `,
  ocean: `
    radial-gradient(circle, #0ea5e9 10%, transparent 20%),
    radial-gradient(circle at 40% 40%, #06b6d4 5%, transparent 15%),
    repeating-conic-gradient(
      from 0deg at 50% 50%,
      #0ea5e9 0%,
      #3b82f6 50%,
      #06b6d4 100%
    )
  `,
  sunset: `
    radial-gradient(circle, #f97316 10%, transparent 20%),
    radial-gradient(circle at 40% 40%, #e11d48 5%, transparent 15%),
    repeating-conic-gradient(
      from 0deg at 50% 50%,
      #f97316 0%,
      #e11d48 50%,
      #f59e0b 100%
    )
  `,
  white: `
    repeating-conic-gradient(
      from 0deg at 50% 50%,
      #a1a1aa 0%,
      #ffffff 50%,
      #a1a1aa 100%
    )
  `,
  teddy: `
    radial-gradient(circle, #d4a019 10%, #d4a01900 20%),
    radial-gradient(circle at 40% 40%, #fbbf24 5%, #fbbf2400 15%),
    radial-gradient(circle at 60% 60%, #b8860b 10%, #b8860b00 20%),
    radial-gradient(circle at 40% 60%, #1a1a1a 10%, #1a1a1a00 20%),
    repeating-conic-gradient(
      from 236.84deg at 50% 50%,
      #d4a019 0%,
      #fbbf24 calc(25% / var(--repeating-conic-gradient-times)),
      #b8860b calc(50% / var(--repeating-conic-gradient-times)),
      #1a1a1a calc(75% / var(--repeating-conic-gradient-times)),
      #d4a019 calc(100% / var(--repeating-conic-gradient-times))
    )
  `,
};

interface ColorHoverEffectProps {
  /** Blur amount in pixels. Applied to the glow effect. Default: 0 */
  blur?: number;

  /** Size of inactive center zone as fraction of element size. Default: 0.7 */
  inactiveZone?: number;

  /** Distance in pixels from element edge where effect activates. Default: 0 */
  proximity?: number;

  /** Spread angle of the glow effect in degrees. Default: 20 */
  spread?: number;

  /** Gradient preset to use. Default: "rainbow" */
  variant?: keyof typeof GRADIENT_PRESETS;

  /** Custom gradient string to override preset */
  customGradient?: string;

  /** Whether to show the full glow effect. When false, shows border only. Default: false */
  glow?: boolean;

  /** Additional CSS classes */
  className?: string;

  /** Disable the effect completely. Default: false */
  disabled?: boolean;

  /** Animation duration in seconds for angle transitions. Default: 2 */
  movementDuration?: number;

  /** Border width in pixels. Default: 1 */
  borderWidth?: number;
}

const ColorHoverEffect = memo(
  ({
    blur = 0,
    inactiveZone = 0.7,
    proximity = 0,
    spread = 20,
    variant = "rainbow",
    customGradient,
    glow = false,
    className,
    movementDuration = 2,
    borderWidth = 1,
    disabled = false,
  }: ColorHoverEffectProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const lastPosition = useRef({ x: 0, y: 0 });
    const animationFrameRef = useRef<number>(0);

    const handleMove = useCallback(
      (e?: MouseEvent | { x: number; y: number }) => {
        if (!containerRef.current) return;

        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current);
        }

        animationFrameRef.current = requestAnimationFrame(() => {
          const element = containerRef.current;
          if (!element) return;

          const { left, top, width, height } = element.getBoundingClientRect();
          const mouseX = e && 'x' in e ? e.x : lastPosition.current.x;
          const mouseY = e && 'y' in e ? e.y : lastPosition.current.y;

          if (e) {
            lastPosition.current = { x: mouseX, y: mouseY };
          }

          const center = [left + width * 0.5, top + height * 0.5];
          const distanceFromCenter = Math.hypot(
            mouseX - center[0],
            mouseY - center[1]
          );
          const inactiveRadius = 0.5 * Math.min(width, height) * inactiveZone;

          if (distanceFromCenter < inactiveRadius) {
            element.style.setProperty("--active", "0");
            return;
          }

          const isActive =
            mouseX > left - proximity &&
            mouseX < left + width + proximity &&
            mouseY > top - proximity &&
            mouseY < top + height + proximity;

          element.style.setProperty("--active", isActive ? "1" : "0");

          if (!isActive) return;

          const currentAngle =
            parseFloat(element.style.getPropertyValue("--start")) || 0;
          let targetAngle =
            (180 * Math.atan2(mouseY - center[1], mouseX - center[0])) /
              Math.PI +
            90;

          const angleDiff = ((targetAngle - currentAngle + 180) % 360) - 180;
          const newAngle = currentAngle + angleDiff;

          animate(currentAngle, newAngle, {
            duration: movementDuration,
            ease: [0.16, 1, 0.3, 1],
            onUpdate: (value) => {
              element.style.setProperty("--start", String(value));
            },
          });
        });
      },
      [inactiveZone, proximity, movementDuration]
    );

    useEffect(() => {
      if (disabled) return;

      const handleScroll = () => handleMove();
      const handlePointerMove = (e: PointerEvent) => handleMove(e);

      window.addEventListener("scroll", handleScroll, { passive: true });
      document.body.addEventListener("pointermove", handlePointerMove, {
        passive: true,
      });

      return () => {
        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current);
        }
        window.removeEventListener("scroll", handleScroll);
        document.body.removeEventListener("pointermove", handlePointerMove);
      };
    }, [handleMove, disabled]);

    return (
      <>
        {/* Border fallback for browsers without mask support or when glow is disabled */}
        <div
          className={cn(
            "pointer-events-none absolute inset-0 rounded-[inherit]",
            "border-[var(--glowingeffect-border-width)] border-transparent",
            "opacity-[var(--active)] transition-opacity duration-300",
            disabled && "!opacity-0"
          )}
          style={
            {
              "--glowingeffect-border-width": `${borderWidth}px`,
              "--active": "0", // Default to 0, controlled by JS
              // If glow is ON, we make the fallback border transparent so the glow mask takes precedence.
              // If glow is OFF, we show a subtle fallback border (white/20 or similar).
              borderColor: glow ? "transparent" : "rgba(255, 255, 255, 0.2)",
            } as React.CSSProperties
          }
        />

        {/* Main glow effect */}
        <div
          ref={containerRef}
          style={
            {
              "--blur": `${blur}px`,
              "--spread": spread,
              "--start": "0",
              "--active": "0",
              "--glowingeffect-border-width": `${borderWidth}px`,
              "--repeating-conic-gradient-times": "5",
              "--gradient": customGradient || GRADIENT_PRESETS[variant],
            } as React.CSSProperties
          }
          className={cn(
            "pointer-events-none absolute inset-0 rounded-[inherit] z-0",
            blur > 0 && "blur-[var(--blur)]",
            className,
            disabled && "!opacity-0",
            !glow && "hidden" // Completely hide the complex glow effect if glow is disabled
          )}
        >
          <div
            className={cn(
              "glow absolute inset-0 rounded-[inherit]",
              'after:content-[""] after:rounded-[inherit] after:absolute after:inset-[calc(-1*var(--glowingeffect-border-width))]',
              "after:[border:var(--glowingeffect-border-width)_solid_transparent]",
              "after:[background:var(--gradient)] after:[background-attachment:fixed]",
              "after:opacity-[var(--active)] after:transition-opacity after:duration-300",
              "after:[mask-clip:padding-box,border-box]",
              "after:[-webkit-mask-clip:padding-box,border-box]",
              "after:[mask-composite:intersect]",
              "after:[-webkit-mask-composite:xor]",
              "after:[mask-image:linear-gradient(#0000,#0000),conic-gradient(from_calc((var(--start)-var(--spread))*1deg),#00000000_0deg,#fff,#00000000_calc(var(--spread)*2deg))]",
              "after:[-webkit-mask-image:linear-gradient(#0000,#0000),conic-gradient(from_calc((var(--start)-var(--spread))*1deg),#00000000_0deg,#fff,#00000000_calc(var(--spread)*2deg))]"
            )}
          />
        </div>
      </>
    );
  }
);

ColorHoverEffect.displayName = "ColorHoverEffect";

export { ColorHoverEffect };
