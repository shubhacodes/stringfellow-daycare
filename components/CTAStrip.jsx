"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

function CTAStrip() {
  return (
    <div
      className="relative w-full py-12 sm:py-16 lg:py-24"
      style={{ backgroundColor: "var(--color-bg-page)" }}
    >
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 font-serif"
            style={{ color: "var(--color-text-primary)" }}
          >
            Ready to Give Your Child
            <br />
            <span style={{ color: "var(--color-text-primary)" }}>
              the Best Care?
            </span>
          </h2>
          <p
            className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-8 sm:mb-12 px-4"
            style={{ color: "var(--color-text-primary)" }}
          >
            Join our loving community and see why parents trust us with their
            most precious gifts.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-5xl mx-auto">
          {/* Email CTA */}
          <div
            className="relative group rounded-2xl sm:rounded-3xl p-6 sm:p-8 transition-all duration-300 overflow-hidden"
            style={{
              backgroundColor: "var(--color-bg-card)",
              borderColor: "var(--color-stroke)",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 transition-transform duration-300 group-hover:scale-110"></div>
            <div className="relative z-10">
              <div className="relative w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-4 sm:mb-6">
                <Image
                  src="/6.png"
                  alt="Contact Illustration"
                  fill
                  className="object-contain transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3
                className="text-lg sm:text-xl font-bold mb-2 sm:mb-4 text-center"
                style={{ color: "var(--color-text-primary)" }}
              >
                Get in Touch
              </h3>
              <p
                className="text-sm sm:text-base mb-4 sm:mb-6 text-center"
                style={{ color: "var(--color-text-primary)" }}
              >
                Send us a message and we'll respond within 24 hours
              </p>
              <Link href="/contact" className="block">
                <button
                  className="w-full py-2 sm:py-3 px-4 sm:px-6 rounded-full text-white font-medium transition-all hover:scale-105 text-sm sm:text-base"
                  style={{ backgroundColor: "var(--color-cta-primary-bg)" }}
                >
                  Email Us
                </button>
              </Link>
            </div>
          </div>

          {/* Schedule Visit */}
          <div
            className="relative group rounded-2xl sm:rounded-3xl p-6 sm:p-8 transition-all duration-300 overflow-hidden"
            style={{
              backgroundColor: "var(--color-bg-card)",
              borderColor: "var(--color-stroke)",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-orange-500/20 transition-transform duration-300 group-hover:scale-110"></div>
            <div className="relative z-10">
              <div className="relative w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-4 sm:mb-6">
                <Image
                  src="/19.png"
                  alt="Schedule Visit Illustration"
                  fill
                  className="object-contain transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3
                className="text-lg sm:text-xl font-bold mb-2 sm:mb-4 text-center"
                style={{ color: "var(--color-text-primary)" }}
              >
                Schedule a Visit
              </h3>
              <p
                className="text-sm sm:text-base mb-4 sm:mb-6 text-center"
                style={{ color: "var(--color-text-primary)" }}
              >
                Come see our facilities and meet our caring staff
              </p>
              <Link href="/contact" className="block">
                <button
                  className="w-full py-2 sm:py-3 px-4 sm:px-6 rounded-full text-white font-medium transition-all hover:scale-105 text-sm sm:text-base"
                  style={{ backgroundColor: "var(--color-cta-primary-bg)" }}
                >
                  Book Now
                </button>
              </Link>
            </div>
          </div>

          {/* Trust Badge */}
          <div
            className="relative group rounded-2xl sm:rounded-3xl p-6 sm:p-8 transition-all duration-300 overflow-hidden sm:col-span-2 lg:col-span-1"
            style={{
              backgroundColor: "var(--color-bg-card)",
              borderColor: "var(--color-stroke)",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-green-500/20 transition-transform duration-300 group-hover:scale-110"></div>
            <div className="relative z-10">
              <div className="relative w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-4 sm:mb-6">
                <Image
                  src="/illustration-2.png"
                  alt="Trust Badge Illustration"
                  fill
                  className="object-contain transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3
                className="text-lg sm:text-xl font-bold mb-2 sm:mb-4 text-center"
                style={{ color: "var(--color-text-primary)" }}
              >
                Trusted by Families
              </h3>
              <p
                className="text-sm sm:text-base mb-4 sm:mb-6 text-center"
                style={{ color: "var(--color-text-primary)" }}
              >
                Join over 100+ happy families in our community
              </p>
              <div
                className="w-full py-2 sm:py-3 px-4 sm:px-6 rounded-full font-medium text-center transition-all text-sm sm:text-base"
                style={{
                  backgroundColor: "var(--color-bg-nav)",
                  color: "var(--color-text-primary)",
                }}
              >
                5+ Years of Excellence
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CTAStrip;
