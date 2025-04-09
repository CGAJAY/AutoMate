"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Resources", href: "/resources" },
  { name: "Contact", href: "/contact" },
  { name: "Sign In", href: "/signin" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="w-full p-4 flex items-center justify-between bg-white dark:bg-gray-900 shadow-md">
      <Link href="/">
        <h1 className="text-2xl font-bold text-primary-600">AutoFixPro</h1>
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-6">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.name}
              href={link.href}
              className={`relative group transition-colors duration-300 ${
                isActive
                  ? "text-primary-600 dark:text-primary-400 font-semibold underline underline-offset-4"
                  : "text-gray-700 dark:text-white hover:text-primary-500"
              }`}
            >
              <span className="group-hover:underline group-hover:underline-offset-4 transition-all">
                {link.name}
              </span>
            </Link>
          );
        })}
      </nav>

      {/* Mobile Menu Toggle */}
      <button
        onClick={toggleMenu}
        className="md:hidden text-gray-700 dark:text-white"
      >
        <Menu size={28} />
      </button>

      {/* Mobile Navigation Panel */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ y: -300, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -300, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed top-0 left-0 w-full h-screen z-50 bg-[rgba(60,158,192,0.36)] backdrop-blur-[7.2px]  flex flex-col items-center justify-center gap-6 px-6"
          >
            <button
              onClick={closeMenu}
              className="absolute top-6 right-6 text-white"
            >
              <X size={28} />
            </button>
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={closeMenu}
                  className={`text-white text-2xl transition-all duration-300 hover:scale-110 ${
                    isActive
                      ? "underline underline-offset-4 font-semibold"
                      : "hover:text-primary-100"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
