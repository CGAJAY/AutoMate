// components/AIAssistantPreview.jsx
"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Bot } from "lucide-react";

const preview = {
  title: "Meet FixAI: Your Smart Car Health Assistant",
  description: "Ask questions, get maintenance tips, and diagnose issues — even before coming in.",
};

const features = [
  {
    title: "Instant Answers",
    description: "Get quick responses to your car-related questions anytime.",
  },
  {
    title: "Proactive Tips",
    description: "Receive tailored maintenance advice to keep your car in top shape.",
  },
  {
    title: "Early Diagnostics",
    description: "Identify potential issues early with AI-powered insights.",
  },
];

// Animation variants
const headerVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } },
};

const featureContainerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
};

const featureVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const footerVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function AIAssistantPreview() {
  const headerRef = useRef(null);
  const cardRef = useRef(null);
  const featuresRef = useRef(null);
  const footerRef = useRef(null);

  const headerInView = useInView(headerRef, { amount: 0.5 });
  const cardInView = useInView(cardRef, { amount: 0.3 });
  const featuresInView = useInView(featuresRef, { amount: 0.2 });
  const footerInView = useInView(footerRef, { amount: 0.5 });

  return (
    <section className="py-12 px-4 sm:py-16 sm:px-6 lg:py-20 lg:px-8 bg-[var(--section-bg-primary)]">
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
            AI Assistant Preview
          </h2>
          <p className="text-base sm:text-lg text-[var(--secondary)] max-w-xl sm:max-w-2xl mx-auto">
            Discover how FixAI transforms your car care experience.
          </p>
        </motion.div>

        {/* Preview Card */}
        <motion.div
          ref={cardRef}
          variants={cardVariants}
          initial="hidden"
          animate={cardInView ? "visible" : "hidden"}
          className="relative group bg-[var(--background)] p-6 sm:p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border border-[var(--accent)]/20 overflow-hidden max-w-2xl mx-auto"
        >
          <div className="flex items-center mb-4">
            <Bot className="w-8 h-8 sm:w-10 sm:h-10 text-[var(--primary)] mr-3 sm:mr-4" strokeWidth={2} />
            <h3 className="text-xl sm:text-2xl font-semibold text-[var(--foreground)]">{preview.title}</h3>
          </div>
          <p className="text-sm sm:text-base text-[var(--secondary)] mb-4">{preview.description}</p>
          <button className="btn-primary">Try FixAI Now</button>
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
        </motion.div>

        {/* Additional Features */}
        <motion.div
          ref={featuresRef}
          variants={featureContainerVariants}
          initial="hidden"
          animate={featuresInView ? "visible" : "hidden"}
          className="mt-10 sm:mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={featureVariants}
              className="p-4 sm:p-6 bg-[var(--background)] rounded-lg border border-[var(--accent)]/20"
            >
              <h4 className="text-lg sm:text-xl font-semibold text-[var(--foreground)] mb-2">{feature.title}</h4>
              <p className="text-sm sm:text-base text-[var(--secondary)]">{feature.description}</p>
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
          <h3 className="text-xl sm:text-2xl font-semibold text-[var(--foreground)] mb-2">Why It Matters</h3>
          <p className="text-sm sm:text-base text-[var(--secondary)] max-w-xl sm:max-w-2xl lg:max-w-3xl mx-auto">
            FixAI teases a powerful feature that sets us apart, encouraging you to create an account and explore its full potential.
          </p>
        </motion.div>
      </div>
    </section>
  );
}