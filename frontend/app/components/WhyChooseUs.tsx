// components/WhyChooseUs.jsx
"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Clock,
  DollarSign,
  Calendar,
  Bot,
  UserCheck,
} from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "Real-Time Repair Updates",
    description: "Stay informed with live updates on your vehicle's repair status.",
  },
  {
    icon: DollarSign,
    title: "Transparent Pricing",
    description: "No hidden fees - clear, upfront costs you can trust.",
  },
  {
    icon: Calendar,
    title: "Book from Anywhere",
    description: "Schedule repairs anytime, anywhere with ease.",
  },
  {
    icon: Bot,
    title: "AI Assistant",
    description: "Get personalized maintenance tips from our smart assistant.",
  },
  {
    icon: UserCheck,
    title: "Trusted Mechanics",
    description: "Certified professionals you can rely on.",
  },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0, transition: { staggerChildren: 0.1 } },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1], // Smooth bounce
    },
  },
};

const headerVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const footerVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

export default function WhyChooseUs() {
  const headerRef = useRef(null);
  const gridRef = useRef(null);
  const footerRef = useRef(null);

  const headerInView = useInView(headerRef, { amount: 0.5 });
  const gridInView = useInView(gridRef, { amount: 0.2 });
  const footerInView = useInView(footerRef, { amount: 0.5 });

  return (
    <section className="py-12 px-4 sm:py-16 sm:px-6 lg:py-20 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          ref={headerRef}
          variants={headerVariants}
          initial="hidden"
          animate={headerInView ? "visible" : "hidden"}
          className="text-center mb-10 sm:mb-12 lg:mb-14"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-3 sm:mb-4">
            Why Choose Us
          </h2>
          <p className="text-base sm:text-lg text-[var(--secondary)] max-w-xl sm:max-w-2xl mx-auto">
            Discover what sets us apart - your trusted partner in vehicle care.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          ref={gridRef}
          variants={containerVariants}
          initial="hidden"
          animate={gridInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="relative group bg-[var(--background)] p-5 sm:p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border border-[var(--accent)]/20 overflow-hidden"
            >
              {/* Icon Container */}
              <div className="mb-4 flex items-center">
                <feature.icon
                  className="w-7 h-7 sm:w-8 sm:h-8 text-[var(--primary)] mr-2 sm:mr-3"
                  strokeWidth={2}
                />
                <h3 className="text-lg sm:text-xl font-semibold text-[var(--foreground)]">
                  {feature.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-sm sm:text-base text-[var(--secondary)]">
                {feature.description}
              </p>

              {/* Hover Effect - Animated Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Why It Matters */}
        <motion.div
          ref={footerRef}
          variants={footerVariants}
          initial="hidden"
          animate={footerInView ? "visible" : "hidden"}
          className="mt-10 sm:mt-12 lg:mt-14 text-center bg-[var(--accent)]/20 py-6 sm:py-8 px-4 sm:px-6 rounded-lg"
        >
          <h3 className="text-xl sm:text-2xl font-semibold text-[var(--foreground)] mb-2">
            Why It Matters
          </h3>
          <p className="text-sm sm:text-base text-[var(--secondary)] max-w-xl sm:max-w-2xl lg:max-w-3xl mx-auto">
            Our unique features showcase our commitment to excellence, building
            trust and credibility with every service we provide.
          </p>
        </motion.div>
      </div>
    </section>
  );
}