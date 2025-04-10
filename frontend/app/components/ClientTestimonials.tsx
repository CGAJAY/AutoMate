"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Testimonial = {
  id: number;
  image: string;
  name: string;
  title: string;
  message: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    image: "/images/testimonial.jpg",
    name: "Alice M.",
    title: "Toyota Axio Owner",
    message:
      "The engine diagnostics service was top-notch. They found a fault I wasn’t even aware of and fixed it, so now my car runs smoother than ever. Truly a savior for my ride!",
  },
  {
    id: 2,
    image: "/images/testimonial.jpg",
    name: "Brian O.",
    title: "Subaru Legacy Owner",
    message:
      "Booking through the website was a breeze. The brake repair service was fast and professional. I felt right at home with the team and their warm, caring approach.",
  },
  {
    id: 3,
    image: "/images/testimonial.jpg",
    name: "Caroline K.",
    title: "Mazda Demio Owner",
    message:
      "My car looked brand new after the detailing service. The attention to detail and the friendly service reminded me of the vibrant savannah landscapes – natural and rejuvenating!",
  },
  {
    id: 4,
    image: "/images/testimonial.jpg",
    name: "Daniel M.",
    title: "Nissan Note Owner",
    message:
      "I faced a flat and a dead battery on the same day, and the tire & battery service saved me. Fast, efficient, and genuinely caring – I couldn’t ask for more.",
  },
  {
    id: 5,
    image: "/images/testimonial.jpg",
    name: "Esther W.",
    title: "Honda Fit Owner",
    message:
      "I was impressed by the quick oil change and the invaluable tips for engine maintenance. This service has truly become my go-to for car care.",
  },
  {
    id: 6,
    image: "/images/testimonial.jpg",
    name: "Felix N.",
    title: "Volkswagen Golf Owner",
    message:
      "The custom upgrades breathed new life into my car. From consultation to installation, everything was handled with the precision and warmth of a sunlit savannah afternoon.",
  },
];

export default function ClientTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [expandedTestimonialId, setExpandedTestimonialId] = useState<
    number | null
  >(null); // Track which testimonial is expanded
  const sliderRef = useRef<HTMLDivElement>(null);

  // Auto-scroll: advance testimonial every 5 seconds (if not paused)
  useEffect(() => {
    const interval = setInterval(() => {
      if (!paused) {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [paused]);

  // On currentIndex change, scroll the slider to the correct position
  useEffect(() => {
    if (sliderRef.current) {
      const containerWidth = sliderRef.current.offsetWidth;
      const cardWidth =
        window.innerWidth >= 1024 ? containerWidth / 3 : containerWidth;
      sliderRef.current.scrollTo({
        left: currentIndex * cardWidth,
        behavior: "smooth",
      });
    }
  }, [currentIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const toggleFullMessage = (id: number) => {
    setExpandedTestimonialId((prevId) => (prevId === id ? null : id)); // Toggle the expanded testimonial
  };

  return (
    <section className="py-12 px-4 sm:py-16 sm:px-6 lg:py-20 lg:px-8 bg-[var(--section-bg-primary)]">
      <div className="max-w-7xl mx-auto">
        <motion.div className="text-center mb-10 sm:mb-12 lg:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-3 sm:mb-4">
            What Our Clients Say
          </h2>
          <p className="text-base sm:text-lg text-[var(--secondary)] max-w-xl mx-auto">
            Hear the genuine stories of car owners who experienced our warm and
            reliable services.
          </p>
        </motion.div>

        <div
          ref={sliderRef}
          className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="min-w-full sm:min-w-full lg:min-w-[33.33%] bg-[var(--section-bg-secondary)] rounded-xl shadow-lg snap-start"
            >
              <div className="relative h-64 w-full rounded-t-xl overflow-hidden">
                <Image
                  src={t.image}
                  alt={t.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-black/40 p-4 flex flex-col justify-between">
                  <div className="font-bold text-lg text-white">{t.title}</div>
                  {t.message.length > 80 && (
                    <button
                      onClick={() => toggleFullMessage(t.id)} // Pass specific testimonial ID to toggle full message
                      className="absolute bottom-4 right-4 text-[var(--primary)] bg-black/50 text-white p-2 rounded-lg"
                    >
                      {expandedTestimonialId === t.id
                        ? "Read Less"
                        : "Read More"}
                    </button>
                  )}
                </div>
              </div>
              <div className="p-4 text-center">
                <h4 className="text-xl font-semibold mb-1 text-[var(--foreground)]">
                  {t.name}
                </h4>
                <p className="text-sm text-[var(--secondary)]">
                  {expandedTestimonialId === t.id
                    ? t.message
                    : t.message.length > 80
                    ? `${t.message.substring(0, 80)}...`
                    : t.message}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Buttons for navigation (only visible on large screens) */}
        <div className="mt-4 hidden lg:flex items-center justify-center">
          <button
            onClick={handlePrev}
            className="mr-2 bg-[var(--primary)] text-white p-2 rounded-full shadow-lg"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={handleNext}
            className="bg-[var(--primary)] text-white p-2 rounded-full shadow-lg"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
