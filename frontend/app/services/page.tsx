// app/services/page.tsx
"use client";

import React from "react";
import ServicesSection from "./ServicesSection";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ServicesPage() {
  return (
    <div>
      <Header />
      <ServicesSection />
      <Footer />
    </div>
  );
}
