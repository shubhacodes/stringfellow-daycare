"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const dayParts = [
  {
    title: "Morning Joy",
    image: "/day-1.png",
    activities: [
      "Warm welcomes & hellos",
      "Storytime & learning",
      "Colors, numbers & creative play",
    ],
  },
  {
    title: "Nourish & Rest",
    image: "/day-2.png",
    activities: [
      "Home-cooked & healthy snacks",
      "Gentle & soothing quiet time",
      "Naps that honor each child's rhythm",
    ],
  },
  {
    title: "Play & Grow",
    image: "/day-3.png",
    activities: [
      "Creative play and crafts",
      "Music, movement & joy",
      "Building friendships & independence",
    ],
  },
];

function DayInTheLife() {
  return (
    <div
      className="relative w-full py-8 sm:py-12 lg:py-16 overflow-hidden"
      style={{ backgroundColor: "var(--color-bg-section)" }}
    >
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        {/* Header Section - Full Width */}
        <div className="text-center mb-16">
          <div className="mb-4">
            <span
              className="text-lg font-semibold px-4 py-2 rounded-full shadow-sm"
              style={{
                color: "var(--color-text-primary)",
                backgroundColor: "var(--color-bg-nav)",
              }}
            >
              Daily Schedule
            </span>
          </div>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-serif"
            style={{ color: "var(--color-text-primary)" }}
          >
            A Day Full of Love,
            <br />
            Care, and{" "}
            <span style={{ color: "var(--color-text-primary)" }}>
              Happy Moments
            </span>
          </h2>
          <p
            className="text-lg md:text-xl font-normal leading-relaxed mb-8 max-w-3xl mx-auto"
            style={{ color: "var(--color-text-primary)" }}
          >
            Where the day of your sweet little one is rhythmically developed
            through joy, care, so you can have peace of mind as your child is
            blossoming.
          </p>

          {/* Decorative dots */}
          <div className="flex justify-center space-x-4 mb-8">
            {[...Array(7)].map((_, i) => (
              <div
                key={i}
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: "var(--color-bg-card-active)" }}
              ></div>
            ))}
          </div>

          {/* CTA Button */}
          <Link href="/contact">
            <div
              className="text-xl font-bold py-4 px-12 rounded-full inline-block transition-all hover:scale-105 hover:shadow-xl transform hover:-translate-y-1"
              style={{
                backgroundColor: "var(--color-cta-primary-bg)",
                color: "var(--color-cta-primary-text)",
              }}
            >
              Get in Touch
            </div>
          </Link>
        </div>

        {/* Content Section - Three main sections in grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {dayParts.map((part, index) => (
            <div
              key={index}
              className="text-center backdrop-blur-sm rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all hover:scale-105"
              style={{ backgroundColor: "var(--color-cta-outline-bg)" }}
            >
              {/* Image */}
              <div className="flex justify-center mb-6">
                <Image
                  src={part.image}
                  alt={part.title}
                  width={120}
                  height={120}
                  className="w-24 h-24 md:w-28 md:h-28 object-contain"
                />
              </div>

              {/* Content */}
              <div>
                <h3
                  className="text-xl md:text-2xl font-bold mb-4 font-serif"
                  style={{ color: "var(--color-text-primary)" }}
                >
                  {part.title}
                </h3>
                <div className="space-y-2">
                  {part.activities.map((activity, actIndex) => (
                    <p
                      key={actIndex}
                      className="text-sm md:text-base font-normal leading-relaxed"
                      style={{ color: "var(--color-text-primary)" }}
                    >
                      • {activity}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DayInTheLife;
