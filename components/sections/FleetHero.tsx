"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { fleetPage } from "@/lib/content/fleet";
import { CarIcon } from "@/components/ui/Icons";

export function FleetHero() {
  return (
    <section className="section-wrapper bg-black text-white pt-24 lg:pt-32" id="fleet-hero">
      <div className="section-inner min-h-[60vh] flex flex-col justify-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="heading-xl mb-6">{fleetPage.hero.title}</h1>
            <p className="text-gray-300 text-lg lg:text-xl leading-relaxed mb-8">
              {fleetPage.hero.subtitle}
            </p>
            <Button
              href={fleetPage.hero.cta.href}
              variant="primary"
              className="bg-teddy hover:bg-teddy/90"
            >
              {fleetPage.hero.cta.label}
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-full bg-teddy/20 flex items-center justify-center">
                <CarIcon size={120} className="text-teddy" />
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white text-black px-6 py-3 rounded-full font-semibold text-sm shadow-lg"
              >
                10+ Years Trusted
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
