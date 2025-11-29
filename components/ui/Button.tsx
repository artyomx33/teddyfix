"use client";

import Link from "next/link";

interface ButtonProps {
  variant?: "primary" | "secondary";
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
}

export function Button({
  variant = "primary",
  href,
  onClick,
  children,
  className = "",
  external = false,
}: ButtonProps) {
  const baseClass = variant === "primary" ? "button-primary" : "button-secondary";
  const combinedClass = `${baseClass} ${className}`.trim();

  if (href) {
    if (external || href.startsWith("http") || href.startsWith("tel:") || href.startsWith("https://wa.me")) {
      return (
        <a
          href={href}
          className={combinedClass}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClass}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={combinedClass}>
      {children}
    </button>
  );
}
