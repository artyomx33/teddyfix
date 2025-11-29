import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TeddyFix | Premium Auto Repair & Fleet Services",
  description: "Professional auto repair garage in Leiden specializing in taxi fleet maintenance, ceramic coating, and premium vehicle services.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="preload" as="style" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
