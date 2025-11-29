import type { Metadata } from "next";
import {
  AboutHero,
  SpasProfile,
  TeddyEcosystem,
  AboutIntro,
  AboutCTA,
} from "@/components/sections";
import { aboutSeo } from "@/lib/content/about";

export const metadata: Metadata = {
  title: aboutSeo.title,
  description: aboutSeo.description,
  keywords: aboutSeo.keywords,
  openGraph: {
    title: aboutSeo.title,
    description: aboutSeo.description,
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <SpasProfile />
      <TeddyEcosystem />
      <AboutIntro />
      <AboutCTA />
    </main>
  );
}
