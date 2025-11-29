import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "TeddyFix | Premium Auto Repair & Fleet Services in Leiden",
  description:
    "Professional auto repair garage in Leiden specializing in taxi fleet maintenance, ceramic coating, and premium vehicle services. Trusted by 500+ families.",
  keywords: [
    "auto repair Leiden",
    "taxi fleet maintenance",
    "ceramic coating",
    "car detailing",
    "performance tuning",
    "TeddyFix",
  ],
  openGraph: {
    title: "TeddyFix | Premium Auto Repair & Fleet Services",
    description:
      "From family cars to taxi fleets — TeddyFix delivers clean, precise, high-trust service that gets you back on the road, fast.",
    type: "website",
    locale: "en_NL",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased font-sans">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
