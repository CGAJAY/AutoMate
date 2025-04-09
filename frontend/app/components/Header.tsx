"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
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
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathname = usePathname();

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <motion.header
      className="w-full p-4 flex items-center justify-between bg-[var(--background)] shadow-md fixed top-0 left-0 z-50"
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.3 }}
    >
      <Link href="/">
        <h1 className="text-2xl font-bold text-[var(--primary)]">AutoFixPro</h1>
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
                  ? "text-[var(--primary)] font-semibold underline underline-offset-4"
                  : "text-[var(--foreground)] hover:text-[var(--primary)]"
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
      <button onClick={toggleMenu} className="md:hidden text-[var(--foreground)]">
        <Menu size={28} />
      </button>

      {/* Mobile Navigation Panel with Glassmorphism */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ y: -300, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -300, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed top-0 left-0 w-full h-screen z-50 flex flex-col items-center justify-center gap-6 px-6"
            style={{
              background: "rgba(245, 232, 199, 0.2)", // Sandy savannah tone with transparency
              backdropFilter: "blur(10px)", // Frosted glass effect
              border: "1px solid rgba(255, 165, 0, 0.3)", // Subtle orange border
              boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)", // Soft shadow for depth
            }}
          >
            <button
              onClick={closeMenu}
              className="absolute top-6 right-6 text-[var(--savannah-sand)] hover:text-[var(--primary)] transition-colors"
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
                  className={`text-[var(--savannah-sand)] text-2xl transition-all duration-300 hover:scale-110 hover:text-[var(--primary)] ${
                    isActive ? "font-semibold underline underline-offset-4" : ""
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}