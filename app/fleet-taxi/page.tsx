import type { Metadata } from "next";
import {
  FleetHero,
  FleetBenefits,
  FleetPartnership,
  FleetServices,
  FleetPricing,
  FleetCTA,
} from "@/components/sections";
import { fleetSeo } from "@/lib/content/fleet";

export const metadata: Metadata = {
  title: fleetSeo.title,
  description: fleetSeo.description,
  keywords: fleetSeo.keywords,
  openGraph: {
    title: fleetSeo.title,
    description: fleetSeo.description,
    type: "website",
  },
};

export default function FleetTaxiPage() {
  return (
    <main>
      <FleetHero />
      <FleetBenefits />
      <FleetPartnership />
      <FleetServices />
      <FleetPricing />
      <FleetCTA />
    </main>
  );
}
