import React from "react";
import { motion } from "framer-motion";

const FixAIPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-12 px-4 bg-[var(--section-bg-secondary)]">
      {/* Title Animation */}
      <motion.h1
        className="text-2xl font-bold text-[var(--foreground)] mb-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        We are working to bring the Fix AI Service!
      </motion.h1>

      {/* Paragraph Animation */}
      <motion.p
        className="text-lg text-[var(--secondary)] mb-6 text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Stay tuned as we work to bring you an AI car doctor that can help with
        all your car-related questions.
      </motion.p>
    </div>
  );
};

export default FixAIPage;
