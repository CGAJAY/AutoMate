"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Phone, MessageSquare } from "lucide-react";

const headerVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const formVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
  },
};

export default function ContactUs() {
  const headerRef = useRef(null);
  const formRef = useRef(null);

  const headerInView = useInView(headerRef, { amount: 0.5 });
  const formInView = useInView(formRef, { amount: 0.3 });

  return (
    <section className="mt-16 py-12 px-4 sm:py-16 sm:px-6 lg:py-20 lg:px-8 bg-[var(--section-bg-primary)]">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          ref={headerRef}
          variants={headerVariants}
          initial="hidden"
          animate={headerInView ? "visible" : "hidden"}
          className="text-center mb-10"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--foreground)] mb-4">
            Contact Us
          </h2>
          <p className="text-[var(--secondary)] text-base sm:text-lg">
            Need help or have a question? Fill out the form and our team will
            get back to you.
          </p>
        </motion.div>

        {/* Form */}
        <motion.form
          ref={formRef}
          variants={formVariants}
          initial="hidden"
          animate={formInView ? "visible" : "hidden"}
          className="grid grid-cols-1 gap-6 bg-[var(--background)] border border-[var(--accent)]/20 rounded-lg shadow-md p-6 sm:p-8"
        >
          <div className="flex flex-col">
            <label
              htmlFor="name"
              className="text-sm font-medium text-[var(--foreground)] mb-1"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="px-4 py-2 rounded-md border border-[var(--accent)] bg-transparent text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="email"
              className="text-sm font-medium text-[var(--foreground)] mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="px-4 py-2 rounded-md border border-[var(--accent)] bg-transparent text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="message"
              className="text-sm font-medium text-[var(--foreground)] mb-1"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              required
              className="px-4 py-2 rounded-md border border-[var(--accent)] bg-transparent text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
            />
          </div>

          <button
            type="submit"
            className="mt-2 w-full sm:w-auto bg-[var(--primary)] text-white font-semibold py-2 px-6 rounded-md shadow hover:bg-[var(--primary-dark)] transition duration-300"
          >
            Send Message
          </button>
        </motion.form>

        {/* Contact Info */}
        <div className="mt-10 text-center">
          <div className="flex flex-col sm:flex-row justify-center gap-6 text-[var(--secondary)]">
            <div className="flex items-center justify-center gap-2">
              <Mail className="w-5 h-5 text-[var(--primary)]" />
              <span>support@yourgarage.com</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Phone className="w-5 h-5 text-[var(--primary)]" />
              <span>+254 712 345 678</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <MessageSquare className="w-5 h-5 text-[var(--primary)]" />
              <span>Live Chat Available 8AM - 6PM</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
