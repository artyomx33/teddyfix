"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { hero } from "@/lib/content/home";

export function HeroSection() {
  return (
    <section className="section-wrapper bg-gradient-to-br from-gray-50 to-white pt-24 lg:pt-32" id="hero">
      <div className="section-inner min-h-[70vh] flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <h1 className="heading-xl text-black mb-6">
            {hero.title}
          </h1>
          <p className="subtext-md mb-8 max-w-2xl">
            {hero.subtitle}
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button href={hero.ctaPrimary.href} variant="primary">
              {hero.ctaPrimary.label}
            </Button>
            <Button href={hero.ctaSecondary.href} variant="secondary">
              {hero.ctaSecondary.label}
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
