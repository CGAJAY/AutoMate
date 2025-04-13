"use client";
import { useSplashStore } from "../store/SplashStore";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

const carBrands = [
  "Toyota",
  "Honda",
  "BMW",
  "Mercedes",
  "Ford",
  "Mazda",
  "Nissan",
  "Subaru",
  "Volkswagen",
  "Other",
];

const SplashModal = () => {
  const router = useRouter();
  const { isOpen, open, close } = useSplashStore();
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);
  const [hasMounted, setHasMounted] = useState(false);

  // Ensure hydration-safe rendering
  useEffect(() => {
    setHasMounted(true);
  }, []);

  useEffect(() => {
    const hasSeenModal = sessionStorage.getItem("hasSeenSplashModal");

    if (!hasSeenModal) {
      const timer = setTimeout(() => {
        console.log("Calling open()");
        open();
        sessionStorage.setItem("hasSeenSplashModal", "true");
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [open]);

  if (!hasMounted) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-white/30 dark:bg-black/30 backdrop-blur-sm flex justify-center items-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-6 w-[90%] max-w-3xl md:flex overflow-hidden relative"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.4 }}
          >
            {/* Left side image */}
            <div className="hidden md:block md:w-1/2">
              <img
                src="/images/splash.jpeg"
                alt="Garage"
                className="rounded-xl w-full h-full object-cover"
              />
            </div>

            {/* Right side content */}
            <div className="md:w-1/2 p-4 flex flex-col justify-between relative">
              <button
                onClick={close}
                className="absolute top-2 right-2 text-2xl text-gray-400 hover:text-gray-700 dark:text-gray-300 dark:hover:text-white"
              >
                &times;
              </button>

              <div>
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                  Welcome to AutoFixPro
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                  Sign up to get exclusive offers, tips, and car brand updates.
                </p>

                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white px-3 py-2 rounded mb-4"
                />

                <label className="text-sm font-medium text-gray-700 dark:text-gray-200 block mb-2">
                  Select Your Car Brand
                </label>
                <div className="space-y-2 mb-4 text-sm">
                  {carBrands.map((brand) => (
                    <label
                      key={brand}
                      className="flex items-center text-gray-800 dark:text-gray-100"
                    >
                      <input
                        type="radio"
                        name="brand"
                        className="mr-2"
                        value={brand}
                        checked={selectedBrand === brand}
                        onChange={() => setSelectedBrand(brand)}
                      />
                      {brand}
                    </label>
                  ))}
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-2 mt-4">
                <button
                  onClick={() => router.push("/signin")}
                  className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition-colors duration-200"
                >
                  SIGN ME UP
                </button>

                <button
                  onClick={close}
                  className="border border-gray-300 dark:border-gray-600 px-4 py-2 rounded text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  Maybe later
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashModal;
