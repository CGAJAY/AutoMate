// app/services/page.tsx
"use client";

import React from "react";
import VehicleLogosSlider from "../components/VehicleLogosSlider";
import ServicesSection from "../components/ServicesSection";
import Header from "../components/Header";

export default function ServicesPage() {
  return (
    <div>
      <Header />
      <ServicesSection />
      <VehicleLogosSlider />
    </div>
  );
}
