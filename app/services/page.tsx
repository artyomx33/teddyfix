"use client";

import { motion } from "motion/react";
import Image from "next/image";
import {
  ServiceSection,
  PrePurchaseInspection,
  CallToAction,
} from "@/components/sections";
import { servicesPage } from "@/lib/content/services";

export default function ServicesPage() {
  return (
    <main>
      {/* Full-width Hero with Background Image */}
      <section className="section-wrapper relative min-h-[60vh] pt-16 lg:pt-20">
        {/* Full-width background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/service-hero.webp"
            alt="TeddyFix professional auto services"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
        </div>

        {/* Content */}
        <div className="section-inner relative z-10 min-h-[60vh] flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl text-white"
          >
            <h1 className="heading-xl mb-4">{servicesPage.pageTitle}</h1>
            <p className="text-lg lg:text-xl text-gray-200 leading-relaxed">
              {servicesPage.pageSubtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service Sections */}
      {servicesPage.sections.map((section, index) => (
        <ServiceSection
          key={section.id}
          id={section.id}
          icon={section.icon}
          title={section.title}
          intro={section.intro}
          list={section.list}
          cta={section.cta}
          index={index}
        />
      ))}

      {/* Premium Service: Pre-Purchase Inspection */}
      <PrePurchaseInspection />

      {/* Final CTA */}
      <CallToAction />
    </main>
  );
}
