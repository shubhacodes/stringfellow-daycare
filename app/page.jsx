import Hero from "@/components/Hero";
import CoreHighlights from "@/components/CoreHighlights";
import Services from "@/components/Services";
import DayInTheLife from "@/components/DayInTheLife";
import Testimonials from "@/components/Testimonials";
import CTAStrip from "@/components/CTAStrip";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Hero />
      <CoreHighlights />
      <Services />
      <DayInTheLife />
      <Testimonials />
      <CTAStrip />
      <Footer />
    </div>
  );
}
