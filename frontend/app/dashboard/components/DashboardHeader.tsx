"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Bell } from "lucide-react";

interface NavLink {
  name: string;
  href: string;
}

const navLinks: NavLink[] = [
  { name: "Dashboard", href: "/dashboard" },
  { name: "Book A Service", href: "/booking" },
  { name: "History", href: "/history" },
  { name: "Profile", href: "/profile" },
];

export default function DashboardHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activePath, setActivePath] = useState(""); // Local state to hold active path
  const pathname = usePathname();

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    setActivePath(pathname); // Set active path when pathname changes
  }, [pathname]);

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
      <nav className="hidden md:flex items-center space-x-6">
        {navLinks.map((link) => {
          const isActive = activePath === link.href; // Using local state for active path
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

        {/* Notifications - desktop only */}
        <Link
          href="/notification"
          className={`relative group transition-colors duration-300 ${
            activePath === "/notification"
              ? "text-[var(--primary)] font-semibold underline underline-offset-4"
              : "text-[var(--foreground)] hover:text-[var(--primary)]"
          }`}
        >
          <span className="group-hover:underline group-hover:underline-offset-4 transition-all">
            Notifications
          </span>
        </Link>
      </nav>

      {/* Mobile: Notification Bell + Hamburger */}
      <div className="md:hidden flex items-center space-x-4">
        <Link
          href="/notifications"
          className="text-[var(--foreground)] hover:text-[var(--primary)] transition-colors"
          aria-label="Notifications"
        >
          <Bell size={24} />
        </Link>
        <button
          onClick={toggleMenu}
          className="text-[var(--foreground)]"
          aria-label="Toggle menu"
        >
          <Menu size={28} />
        </button>
      </div>

      {/* Mobile Navigation Panel */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ y: -300, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -300, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed top-0 left-0 w-full h-screen z-50 flex flex-col items-center justify-center gap-6 px-6"
            style={{
              background: "rgba(74, 44, 42, 0.5)",
              backdropFilter: "blur(5px)",
              border: "1px solid rgba(255, 165, 0, 0.3)",
              boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
            }}
          >
            <button
              onClick={closeMenu}
              className="absolute top-6 right-6 text-[var(--savannah-sand)] hover:text-[var(--primary)] transition-colors"
              aria-label="Close menu"
            >
              <X size={28} />
            </button>
            {navLinks.map((link) => {
              const isActive = activePath === link.href; // Using local state for active path
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
