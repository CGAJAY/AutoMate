// app/services/page.tsx
"use client";

import React from "react";
import ServicesSection from "./ServicesSection";
import Header from "../components/Header";

export default function ServicesPage() {
  return (
    <div>
      <Header />
      <ServicesSection />
    </div>
  );
}
