"use client";
import React from "react";
import Link from "next/link";
import Navigation from "./Navigation";

function Hero() {
  return (
    <div
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: "var(--color-bg-page)" }}
    >
      <Navigation />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 lg:gap-x-2 grid lg:grid-cols-2 gap-4 lg:gap-8 items-center relative z-5 max-w-7xl animate-slideIn pt-24">
        <div className="text-center lg:text-left animate-slideInLeft">
          <div
            className="mb-4 animate-fadeIn"
            style={{ animationDelay: "0.2s" }}
          >
            <span
              className="text-sm sm:text-lg font-semibold px-4 py-2 rounded-full shadow-sm transition-all hover:scale-105"
              style={{
                color: "var(--color-text-primary)",
                backgroundColor: "var(--color-bg-nav)",
              }}
            >
              Welcome to Stringfellow Daycare!
            </span>
          </div>
          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 font-serif animate-slideInLeft"
            style={{
              color: "var(--color-text-primary)",
              animationDelay: "0.4s",
            }}
          >
            Home Away from
            <br />
            <span style={{ color: "var(--color-text-primary)" }}>Home</span> for
            Your
            <br />
            <span className="relative">
              Little One
              <svg
                className="absolute -bottom-2 left-0 w-full h-3"
                viewBox="0 0 100 10"
                fill="none"
              >
                <path
                  d="M0 8C20 4 40 6 60 4C80 2 90 6 100 4"
                  stroke="var(--color-stroke)"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>
          <p
            className="text-base sm:text-lg md:text-xl font-normal leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0 animate-slideInLeft"
            style={{
              color: "var(--color-text-primary)",
              animationDelay: "0.6s",
            }}
          >
            Discover a safe, joyful, and personalized daycare experience with
            daily home-cooked meals, engaging activities, and genuine, caring
            staff.
          </p>
          <div
            className="flex flex-col sm:flex-row gap-4 items-center lg:items-start animate-slideInLeft"
            style={{ animationDelay: "0.8s" }}
          >
            <Link href="/contact">
              <div
                className="text-lg sm:text-xl font-bold py-3 px-8 sm:py-4 sm:px-12 rounded-full transition-all hover:scale-105 hover:shadow-xl transform hover:-translate-y-1 w-full sm:w-auto text-center"
                style={{
                  backgroundColor: "var(--color-cta-primary-bg)",
                  color: "var(--color-cta-primary-text)",
                }}
              >
                Let's chat
              </div>
            </Link>
            <Link href="/contact">
              <div
                className="border-2 text-lg sm:text-xl font-bold py-3 px-8 sm:py-4 sm:px-12 rounded-full transition-all hover:scale-105 hover:shadow-lg w-full sm:w-auto text-center"
                style={{
                  backgroundColor: "var(--color-cta-outline-bg)",
                  borderColor: "var(--color-cta-outline-stroke)",
                  color: "var(--color-text-primary)",
                }}
              >
                Schedule a Visit
              </div>
            </Link>
          </div>
        </div>

        {/* Bento Grid Layout */}
        <div className="relative h-[400px] sm:h-[500px] lg:h-[500px] w-full hidden sm:block animate-slideInRight">
          <div className="grid grid-cols-3 grid-rows-3 gap-2 sm:gap-3 h-full">
            {/* Large image - top left, spans 2x2 */}
            <div
              className="col-span-2 row-span-2 relative group rounded-2xl shadow-lg border-b-4 border-r-4 transform hover:scale-105 transition-all duration-200 overflow-hidden"
              style={{
                borderBottomColor: "#e6c875",
                borderRightColor: "#e6c875",
              }}
            >
              <img
                className="w-full h-full object-cover"
                src="/photo-1.png"
                alt="Children at daycare"
              />
            </div>

            {/* Daily Activities card - top right */}
            <div
              className="col-span-1 row-span-1 rounded-2xl shadow-lg p-4 flex flex-col justify-center items-center text-center border-b-4 border-r-4 transform hover:scale-105 transition-all duration-200"
              style={{
                backgroundColor: "var(--color-bg-testimonial-1)",
                borderBottomColor: "#a3c3d9",
                borderRightColor: "#a3c3d9",
              }}
            >
              <h3
                className="font-serif font-bold text-sm mb-1"
                style={{ color: "var(--color-text-primary)" }}
              >
                Daily Activities
              </h3>
              <p
                className="font-serif text-xs"
                style={{ color: "var(--color-text-primary)" }}
              >
                Art, music & outdoor play
              </p>
            </div>

            {/* Healthy Meals card - middle right */}
            <div
              className="col-span-1 row-span-1 rounded-2xl shadow-lg p-4 flex flex-col justify-center items-center text-center border-b-4 border-r-4 transform hover:scale-105 transition-all duration-200"
              style={{
                backgroundColor: "var(--color-pillar-bg)",
                borderBottomColor: "#e6c875",
                borderRightColor: "#e6c875",
              }}
            >
              <h3
                className="font-serif font-bold text-sm mb-1"
                style={{ color: "var(--color-text-primary)" }}
              >
                Fresh Meals
              </h3>
              <p
                className="font-serif text-xs"
                style={{ color: "var(--color-text-primary)" }}
              >
                Home-cooked daily
              </p>
            </div>

            {/* Small image - bottom left */}
            <div
              className="col-span-1 row-span-1 relative group rounded-2xl shadow-lg border-b-4 border-r-4 transform hover:scale-105 transition-all duration-200 overflow-hidden"
              style={{
                borderBottomColor: "#f2ee8a",
                borderRightColor: "#f2ee8a",
              }}
            >
              <img
                className="w-full h-full object-cover"
                src="/photo-2.png"
                alt="Happy children playing"
              />
            </div>

            {/* Safe Environment card - bottom middle */}
            <div
              className="col-span-1 row-span-1 rounded-2xl shadow-lg p-4 flex flex-col justify-center items-center text-center border-b-4 border-r-4 transform hover:scale-105 transition-all duration-200"
              style={{
                backgroundColor: "var(--color-bg-testimonial-2)",
                borderBottomColor: "#7bb8d1",
                borderRightColor: "#7bb8d1",
              }}
            >
              <h3
                className="font-serif font-bold text-sm mb-1"
                style={{ color: "var(--color-text-primary)" }}
              >
                Safe & Secure
              </h3>
              <p
                className="font-serif text-xs"
                style={{ color: "var(--color-text-primary)" }}
              >
                Licensed & insured
              </p>
            </div>

            {/* Small image - bottom right */}
            <div
              className="col-span-1 row-span-1 relative group rounded-2xl shadow-lg border-b-4 border-r-4 transform hover:scale-105 transition-all duration-200 overflow-hidden"
              style={{
                borderBottomColor: "#0f1419",
                borderRightColor: "#0f1419",
              }}
            >
              <img
                className="w-full h-full object-cover"
                src="/photo-3.png"
                alt="Caring daycare environment"
              />
            </div>
          </div>

          {/* Floating stats card */}
          <div
            className="absolute -bottom-4 -left-4 rounded-2xl shadow-xl p-4 border-2 border-white border-b-4 border-r-4 transform hover:scale-105 transition-all duration-200"
            style={{
              backgroundColor: "var(--color-bg-card-active)",
              borderBottomColor: "#e6c875",
              borderRightColor: "#e6c875",
            }}
          >
            <div className="text-center">
              <div
                className="font-serif text-2xl font-bold"
                style={{ color: "var(--color-text-primary)" }}
              >
                5+
              </div>
              <div
                className="font-serif text-xs font-semibold"
                style={{ color: "var(--color-text-primary)" }}
              >
                Years Experience
              </div>
            </div>
          </div>

          {/* Quick response badge */}
          <div
            className="absolute -top-4 -right-4 rounded-full shadow-xl p-3 border-2 border-white border-b-4 border-r-4 transform hover:scale-105 transition-all duration-200"
            style={{
              backgroundColor: "var(--color-bg-section)",
              borderBottomColor: "#f2ee8a",
              borderRightColor: "#f2ee8a",
            }}
          >
            <div className="text-center">
              <div
                className="font-serif text-xs font-semibold"
                style={{ color: "var(--color-text-primary)" }}
              >
                Quick Response
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-slideIn {
          animation: slideIn 0.8s ease-out;
        }

        .animate-slideInLeft {
          animation: slideInLeft 0.8s ease-out;
        }

        .animate-slideInRight {
          animation: slideInRight 0.8s ease-out;
        }

        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out;
        }
      `}</style>
    </div>
  );
}

export default Hero;
