"use client";

import Link from "next/link";
import { ColorHoverEffect } from "@/components/ui/color-hover-effect";

interface ButtonProps {
  variant?: "primary" | "secondary";
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
  glowEffect?: boolean;
}

export function Button({
  variant = "primary",
  href,
  onClick,
  children,
  className = "",
  external = false,
  glowEffect = false,
}: ButtonProps) {
  const baseClass = variant === "primary" ? "button-primary" : "button-secondary";
  const combinedClass = `${baseClass} ${className} ${glowEffect ? "relative overflow-hidden" : ""}`.trim();

  const content = (
    <>
      {glowEffect && (
        <ColorHoverEffect
          variant="teddy"
          glow={true}
          borderWidth={2}
          spread={15}
          proximity={50}
        />
      )}
      <span className={glowEffect ? "relative z-10" : ""}>{children}</span>
    </>
  );

  if (href) {
    if (external || href.startsWith("http") || href.startsWith("tel:") || href.startsWith("https://wa.me")) {
      return (
        <a
          href={href}
          className={combinedClass}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClass}>
        {content}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={combinedClass}>
      {content}
    </button>
  );
}
