"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MessageSquare,
  Instagram,
  Youtube,
  Linkedin,
} from "lucide-react";

// Vehicle logos slider component inside the same file
const VehicleLogosSlider = () => {
  const logos = [
    "images/logos/toyota.jpg",
    "images/logos/bmw.jpg",
    "images/logos/ford.jpg",
    "images/logos/mercedes.jpg",
    "images/logos/audi.jpg",
    "images/logos/honda.jpg",
    "images/logos/vw.jpg",
    "images/logos/volvo.jpg",
    "images/logos/nissan.jpg",
  ];

  return (
    <div className="relative w-full overflow-hidden bg-black py-6">
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: "-50%" }}
        transition={{
          repeat: Infinity,
          duration: 30,
          ease: "linear",
        }}
        className="flex space-x-12 w-max"
      >
        {[...Array(2)].flatMap((_, i) =>
          logos.map((logo, index) => (
            <img
              key={`${i}-${index}`}
              src={logo}
              alt={`Logo ${index}`}
              className="h-12 sm:h-14 object-contain grayscale hover:grayscale-0 transition duration-300"
            />
          ))
        )}
      </motion.div>
    </div>
  );
};

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Resources", href: "/resources" },
  { name: "Contact", href: "/contact" },
  { name: "Sign In", href: "/signin" },
];

export default function Footer() {
  console.log("My footer is working");

  return (
    <footer className="bg-[var(--section-bg-primary)] text-[var(--secondary)] border-t border-[var(--accent)]/20 pt-0">
      {/* Logo Slider at the Top */}
      <VehicleLogosSlider />

      {/* Footer Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 pb-10">
          {/* Contact Info */}
          <div>
            <h4 className="text-[var(--foreground)] font-semibold text-lg mb-4">
              Contact Us
            </h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[var(--primary)]" />
                support@yourgarage.com
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[var(--primary)]" />
                +254 712 345 678
              </li>
              <li className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-[var(--primary)]" />
                Mon - Sat: 8AM - 6PM
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[var(--foreground)] font-semibold text-lg mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-[var(--primary)] transition"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-[var(--foreground)] font-semibold text-lg mb-4">
              Legal
            </h4>
            <ul className="space-y-2 text-sm">
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-[var(--foreground)] font-semibold text-lg mb-4">
              Follow Us
            </h4>
            <div className="flex gap-4">
              <Instagram className="w-5 h-5 hover:text-[var(--primary)] transition" />
              <Youtube className="w-5 h-5 hover:text-[var(--primary)] transition" />
              <Linkedin className="w-5 h-5 hover:text-[var(--primary)] transition" />
            </div>
          </div>
        </div>

        <div className="text-center text-xs border-t border-[var(--accent)]/20 pt-4 pb-6 text-[var(--secondary)]">
          © 2025 YourGarage. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
