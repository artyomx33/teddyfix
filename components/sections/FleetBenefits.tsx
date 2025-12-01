"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { GlowCard } from "@/components/ui/glow-card";
import { fleetPage } from "@/lib/content/fleet";

export function FleetBenefits() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-wrapper bg-white" id="why" ref={ref}>
      <div className="section-inner">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <h2 className="heading-lg text-black">{fleetPage.benefits.title}</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {fleetPage.benefits.list.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              className="h-full"
            >
              <GlowCard
                variant="teddy"
                glow={true}
                borderWidth={1}
                spread={20}
                proximity={150}
                inactiveZone={0.3}
                className="relative h-full bg-white"
              >
                <div className="flex items-start gap-4 p-6">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-teddy/10 flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-teddy"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </span>
                  <span className="text-gray-700 font-medium">{benefit}</span>
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
