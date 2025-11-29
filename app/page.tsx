import {
  HeroSection,
  IntroSection,
  ServicesGrid,
  FleetTeaser,
  TestimonialSlider,
  CallToAction,
} from "@/components/sections";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <IntroSection />
      <ServicesGrid />
      <FleetTeaser />
      <TestimonialSlider />
      <CallToAction />
    </main>
  );
}
