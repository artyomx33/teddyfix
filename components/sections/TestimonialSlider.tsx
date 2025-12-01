"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { testimonials } from "@/lib/content/home";
import { StarIcon } from "@/components/ui/Icons";
import { GlowCard } from "@/components/ui/glow-card";

export function TestimonialSlider() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-wrapper bg-white" id="testimonials" ref={ref}>
      <div className="section-inner">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <h2 className="heading-lg text-black">{testimonials.title}</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.quotes.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: "easeOut",
              }}
            >
              <GlowCard
                variant="teddy"
                glow={true}
                borderWidth={1}
                spread={20}
                proximity={100}
                inactiveZone={0.5}
                className="h-full"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} size={18} className="text-teddy" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-gray-700 text-lg leading-relaxed flex-grow mb-4">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>

                {/* Author */}
                <div className="pt-4 border-t border-gray-100">
                  <p className="font-semibold text-black">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
