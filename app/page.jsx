"use client";

import Hero from "@/components/Hero";
import CoreHighlights from "@/components/CoreHighlights";
import Services from "@/components/Services";
import DayInTheLife from "@/components/DayInTheLife";
import Gallery from "@/components/Gallery";
import Community from "@/components/Community";
import Testimonials from "@/components/Testimonials";
import CTAStrip from "@/components/CTAStrip";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <CoreHighlights />
      <Services />
      <DayInTheLife />
      <Gallery />
      <Community />
      <Testimonials />
      <CTAStrip />
      <Footer />
    </main>
  );
}
