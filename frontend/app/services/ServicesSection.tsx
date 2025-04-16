"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useMemo } from "react";
import Image from "next/image"; // Added import for Image

// Sample service data – adjust the images or texts as needed
const services = [
  {
    title: "Oil Change",
    description:
      "Quick and efficient oil change to keep your engine running smoothly.",
    price: "Ksh.4000",
    duration: "30 mins",
    image: "/images/services/oil-change.jpg",
  },
  {
    title: "Tire Repair",
    description:
      "Fix punctures and balance your tires with our expert repair service.",
    price: "Ksh.2005",
    duration: "45 mins",
    image: "/images/services/tire-repair.jpg",
  },
  {
    title: "Engine Diagnostics",
    description:
      "Detect issues early with our comprehensive engine diagnostics.",
    price: "Ksh.5000",
    duration: "1 hour",
    image: "/images/services/engine-diagnostics.jpg",
  },
  {
    title: "Brake Inspection",
    description:
      "Ensure your braking system is safe and efficient with our inspection.",
    price: "Ksh.3005",
    duration: "40 mins",
    image: "/images/services/brake-inspection.jpg",
  },
  {
    title: "Battery Replacement",
    description:
      "Quick battery testing and replacement to get you back on the road.",
    price: "Ksh.6000",
    duration: "20 mins",
    image: "/images/services/battery-replacement.jpg",
  },
  {
    title: "Suspension Check",
    description:
      "Optimize ride comfort with our thorough suspension system check.",
    price: "Ksh.4500",
    duration: "50 mins",
    image: "/images/services/suspension-check.jpg",
  },
];

// Animation Variants
const headerVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
  },
};

export default function ServicesSection() {
  // Header animation ref and in-view hook
  const headerRef = useRef<HTMLDivElement | null>(null);
  const headerInView = useInView(headerRef, { amount: 0.5 });

  // Create refs and inView states for each card
  const cardRefs = useMemo(
    () =>
      Array(services.length)
        .fill(null)
        .map(() => useRef<HTMLDivElement | null>(null)),
    []
  );
  const cardInViews = useMemo(
    () => cardRefs.map((ref) => useInView(ref, { amount: 0.3 })),
    [cardRefs]
  );

  return (
    <section className="pt-24 pb-12 px-4 sm:pt-28 sm:px-6 lg:pt-32 lg:px-8 bg-[var(--section-bg-primary)]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          ref={headerRef}
          variants={headerVariants}
          initial="hidden"
          animate={headerInView ? "visible" : "hidden"}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-[var(--foreground)] mb-4">
            Our Services
          </h2>
          <p className="text-lg text-[var(--secondary)]">
            Explore our range of garage services designed to keep your vehicle
            in peak condition.
          </p>
        </motion.div>

        {/* Services Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              ref={cardRefs[index]}
              variants={cardVariants}
              initial="hidden"
              animate={cardInViews[index] ? "visible" : "hidden"}
              className="relative group bg-[var(--background)] rounded-lg shadow-md overflow-hidden border border-[var(--accent)]/20 hover:shadow-xl transition-all duration-300"
            >
              <Image
                src={service.image}
                alt={service.title}
                width={400} // Assuming 16:9 aspect ratio for h-40 (160px height, so width = 400px)
                height={160}
                className="w-full h-40 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[var(--foreground)] mb-2">
                  {service.title}
                </h3>
                <p className="text-[var(--secondary)] text-sm mb-4">
                  {service.description}
                </p>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-[var(--foreground)] font-medium">
                    {service.price}
                  </span>
                  <span className="text-sm text-[var(--secondary)]">
                    {service.duration}
                  </span>
                </div>
                <button className="w-full px-4 py-2 bg-[var(--primary)] text-white rounded-md hover:bg-[var(--primary-dark)] transition-colors duration-300">
                  Book Now
                </button>
              </div>
              {/* Hover background effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
