"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Button } from "@/components/ui/Button";
import { prePurchaseInspection } from "@/lib/content/services";
import { WrenchIcon } from "@/components/ui/Icons";

// Custom icons for features
function SearchIcon({ className = "", size = 24 }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

function EyeIcon({ className = "", size = 24 }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function ClockIcon({ className = "", size = 24 }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function LayersIcon({ className = "", size = 24 }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" />
      <path d="m22 12.65-8.58 3.91a2 2 0 0 1-1.66 0L3.17 12.6" />
      <path d="m22 17.65-8.58 3.91a2 2 0 0 1-1.66 0L3.17 17.6" />
    </svg>
  );
}

function CpuIcon({ className = "", size = 24 }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect width="16" height="16" x="4" y="4" rx="2" />
      <rect width="6" height="6" x="9" y="9" rx="1" />
      <path d="M15 2v2" /><path d="M15 20v2" /><path d="M2 15h2" /><path d="M2 9h2" /><path d="M20 15h2" /><path d="M20 9h2" /><path d="M9 2v2" /><path d="M9 20v2" />
    </svg>
  );
}

function ShieldCheckIcon({ className = "", size = 24 }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

const featureIcons: Record<string, React.ReactNode> = {
  search: <SearchIcon size={20} className="text-teddy" />,
  eye: <EyeIcon size={20} className="text-teddy" />,
  clock: <ClockIcon size={20} className="text-teddy" />,
  layers: <LayersIcon size={20} className="text-teddy" />,
  cpu: <CpuIcon size={20} className="text-teddy" />,
  wrench: <WrenchIcon size={20} className="text-teddy" />,
};

export function PrePurchaseInspection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-wrapper bg-black text-white" id="inspection" ref={ref}>
      <div className="section-inner">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <span className="inline-block bg-teddy text-white text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wider">
            {prePurchaseInspection.badge}
          </span>
          <h2 className="heading-lg mb-4">{prePurchaseInspection.title}</h2>
          <p className="text-xl text-teddy font-medium mb-4">
            {prePurchaseInspection.tagline}
          </p>
          <p className="text-gray-300 max-w-2xl mx-auto">
            {prePurchaseInspection.intro}
          </p>
        </motion.div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {prePurchaseInspection.features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              className="bg-white/5 rounded-xl p-6 border border-white/10"
            >
              <div className="w-10 h-10 rounded-lg bg-teddy/20 flex items-center justify-center mb-4">
                {featureIcons[feature.icon]}
              </div>
              <h3 className="font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Benefits + Expert */}
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          >
            <h3 className="text-xl font-semibold mb-4">Why Get an Inspection?</h3>
            <div className="grid grid-cols-2 gap-4">
              {prePurchaseInspection.benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <ShieldCheckIcon size={20} className="text-teddy flex-shrink-0" />
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Expert badge + CTA */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
            className="bg-white/5 rounded-xl p-6 border border-teddy/30"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 rounded-full bg-teddy/20 flex items-center justify-center">
                <svg className="w-7 h-7 text-teddy" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-white">{prePurchaseInspection.expert.name}</p>
                <p className="text-teddy text-sm">{prePurchaseInspection.expert.title}</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-6">{prePurchaseInspection.expert.note}</p>
            <Button
              href={prePurchaseInspection.cta.href}
              variant="primary"
              className="w-full bg-teddy hover:bg-teddy/90"
              glowEffect
            >
              {prePurchaseInspection.cta.label}
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
