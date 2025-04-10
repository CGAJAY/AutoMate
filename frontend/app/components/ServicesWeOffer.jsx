// components/ServicesWeOffer.jsx
"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const services = [
  { title: "Engine Diagnostics", image: "/images/engine-diagnostics.jpg" },
  { title: "Brake Repair", image: "/images/brake-repair.jpg" },
  { title: "Oil Change", image: "/images/oil-change.jpg" },
  { title: "Car Wash & Detailing", image: "/images/car-wash.jpg" },
  { title: "Tire & Battery Service", image: "/images/tire-battery.jpg" },
  { title: "Custom Upgrades", image: "/images/custom-upgrades.jpg" },
];

// Animation variants
const headerVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

const buttonContainerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};

const buttonVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

export default function ServicesWeOffer() {
  const [hoveredIndex, setHoveredIndex] = useState(0);

  const headerRef = useRef(null);
  const imageRef = useRef(null);
  const buttonsRef = useRef(null);

  const headerInView = useInView(headerRef, { amount: 0.5 });
  const imageInView = useInView(imageRef, { amount: 0.3 });
  const buttonsInView = useInView(buttonsRef, { amount: 0.2 });

  return (
    <section className="py-12 px-4 sm:py-16 sm:px-6 lg:py-20 lg:px-8 bg-[var(--section-bg-secondary)]">
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
            Services We Offer
          </h2>
          <p className="text-base sm:text-lg text-[var(--secondary)] max-w-xl mx-auto">
            Explore our wide range of automotive services tailored to your needs.
          </p>
        </motion.div>

        {/* Services Layout */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">
          {/* Image Section */}
          <motion.div
            ref={imageRef}
            variants={imageVariants}
            initial="hidden"
            animate={imageInView ? "visible" : "hidden"}
            className="w-full lg:w-1/2 min-h-[300px] flex items-center justify-center relative"
          >
            <Image
              key={services[hoveredIndex].image}
              src={services[hoveredIndex].image}
              alt={services[hoveredIndex].title}
              width={600}
              height={400}
              className="rounded-xl shadow-lg w-full max-h-[400px] object-cover"
              priority={hoveredIndex === 0}
              placeholder="blur"
              blurDataURL="/images/placeholder.jpg"
            />
          </motion.div>

          {/* Buttons Section */}
          <motion.div
            ref={buttonsRef}
            variants={buttonContainerVariants}
            initial="hidden"
            animate={buttonsInView ? "visible" : "hidden"}
            className="w-full lg:w-1/2 flex lg:grid lg:grid-cols-1 gap-4 overflow-x-auto lg:overflow-x-hidden snap-x snap-mandatory scroll-smooth pb-4 lg:pb-0 scrollbar-thin scrollbar-thumb-[var(--primary)] scrollbar-track-[var(--background)]"
          >
            {services.map((service, index) => (
              <motion.button
                key={service.title}
                variants={buttonVariants}
                onMouseEnter={() => setHoveredIndex(index)}
                onClick={() => setHoveredIndex(index)}
                className={`flex-shrink-0 w-[70%] sm:w-auto lg:w-full rounded-lg p-4 font-semibold transition-colors border border-[var(--accent)] text-left snap-start
                  ${
                    hoveredIndex === index
                      ? "bg-[var(--primary)] text-white shadow-md"
                      : "bg-[var(--background)] text-[var(--foreground)] hover:bg-[var(--primary)] hover:text-white"
                  }
                `}
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.02 }}
              >
                {service.title}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}