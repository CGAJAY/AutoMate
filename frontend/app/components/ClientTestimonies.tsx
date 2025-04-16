// components/ClientTestimonies.tsx
"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const testimonials = [
  {
    name: "Sarah Johnson",
    photo: "/images/testimonials/sarah.jpg",
    testimony:
      "The real-time updates and AI assistant made my repair experience seamless. I’ve never felt so in control of my car’s care!",
  },
  {
    name: "Mike Torres",
    photo: "/images/testimonials/mike.jpg",
    testimony:
      "Transparent pricing and trusted mechanics — this team restored my faith in auto shops. Highly recommend!",
  },
  {
    name: "Emily Chen",
    photo: "/images/testimonials/emily.jpg",
    testimony:
      "Booking from my phone was a breeze, and the service quality was top-notch. FixAI is a game-changer!",
  },
];

// Animation variants
const headerVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const cardContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, rotate: -2 },
  visible: {
    opacity: 1,
    y: 0,
    rotate: 0,
    transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] },
  },
};

export default function ClientTestimonies() {
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  const headerInView = useInView(headerRef, { amount: 0.5 });
  const cardsInView = useInView(cardsRef, { amount: 0.2 });

  return (
    <section className="py-12 px-4 sm:py-16 sm:px-6 lg:py-20 lg:px-8 bg-[var(--section-bg-secondary)] relative overflow-hidden">
      {/* Subtle Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--savannah-sun)]/5 to-[var(--savannah-sky)]/5 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          ref={headerRef}
          variants={headerVariants}
          initial="hidden"
          animate={headerInView ? "visible" : "hidden"}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--foreground)] mb-4 sm:mb-6">
            What Our Clients Say
          </h2>
          <p className="text-base sm:text-lg text-[var(--secondary)] max-w-xl sm:max-w-2xl mx-auto">
            Hear from those who’ve experienced our exceptional service
            firsthand.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          ref={cardsRef}
          variants={cardContainerVariants}
          initial="hidden"
          animate={cardsInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 relative"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="relative h-[400px] sm:h-[450px] rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform md:hover:-translate-y-2 group overflow-hidden"
              style={{ zIndex: testimonials.length - index }}
            >
              {/* Background Image */}
              <Image
                src={testimonial.photo}
                alt={testimonial.name}
                fill
                className="object-cover object-center"
                priority={index === 0} // Preload the first image
              />

              {/* Gradient Overlay for Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--savannah-dusk)]/90 via-[var(--savannah-dusk)]/40 to-transparent group-hover:from-[var(--savannah-dusk)]/90 transition-all duration-500"></div>

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col justify-end p-6 sm:p-8">
                {/* Testimony */}
                <p className="text-sm sm:text-base text-[var(--savannah-sand)] italic mb-4 sm:mb-6">
                  “{testimonial.testimony}”
                </p>

                {/* Customer Info */}
                <div>
                  <h4 className="text-lg sm:text-xl font-semibold text-[var(--savannah-sand)]">
                    {testimonial.name}
                  </h4>
                  <span className="text-xs sm:text-sm text-[var(--savannah-sand)]/80">
                    Happy Customer
                  </span>
                </div>
              </div>

              {/* Quote Icon */}
              <div className="absolute top-4 right-4 text-[var(--primary)]/30 text-5xl sm:text-6xl">
                “
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Decorative Element */}
      <div className="absolute bottom-0 left-0 w-32 h-32 sm:w-40 sm:h-40 bg-[var(--savannah-sun)]/10 rounded-full -translate-x-1/2 translate-y-1/2 pointer-events-none"></div>
    </section>
  );
}
