"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

function CTAStrip() {
  return (
    <div
      className="relative w-full py-8 sm:py-12 lg:py-16 animate-slideUp"
      style={{ backgroundColor: "var(--color-bg-section)" }}
    >
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        {/* Bento Grid Layout - Lego Blocks Style */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3 h-auto lg:h-[350px] max-w-4xl mx-auto">
          {/* Main CTA Card - Large Block */}
          <div
            className="col-span-2 md:col-span-2 lg:col-span-2 lg:row-span-2 rounded-2xl p-4 sm:p-6 flex flex-col justify-center text-center lg:text-left shadow-lg border-b-4 border-r-4 transform hover:scale-105 transition-all duration-200 animate-slideIn"
            style={{
              backgroundColor: "var(--color-pillar-bg)",
              borderBottomColor: "#e6c875",
              borderRightColor: "#e6c875",
              animationDelay: "0.2s",
            }}
          >
            <h2
              className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 font-serif"
              style={{ color: "var(--color-text-primary)" }}
            >
              Ready to Give Your Child the Best Care?
            </h2>
            <p
              className="text-sm sm:text-base md:text-lg font-normal leading-relaxed"
              style={{ color: "var(--color-text-primary)" }}
            >
              Join our loving community and see why parents trust us with their
              most precious gifts.
            </p>
          </div>

          {/* Schedule Visit Button Block */}
          <div
            className="rounded-2xl p-4 flex items-center justify-center shadow-lg border-b-4 border-r-4 transform hover:scale-105 transition-all duration-200 animate-slideInRight"
            style={{
              backgroundColor: "var(--color-cta-primary-bg)",
              borderBottomColor: "#0f1419",
              borderRightColor: "#0f1419",
              animationDelay: "0.3s",
            }}
          >
            <Link href="/contact" className="w-full">
              <div
                className="text-center text-xs sm:text-sm font-bold py-3 px-4 rounded-xl transition-all hover:scale-105 w-full shadow-sm"
                style={{
                  backgroundColor: "var(--color-cta-outline-bg)",
                  color: "var(--color-text-primary)",
                }}
              >
                Schedule a Visit
              </div>
            </Link>
          </div>

          {/* Contact Info Block */}
          <div
            className="rounded-2xl p-4 flex flex-col justify-center text-center shadow-lg border-b-4 border-r-4 transform hover:scale-105 transition-all duration-200 animate-slideInRight"
            style={{
              backgroundColor: "var(--color-bg-card-active)",
              borderBottomColor: "#e6c875",
              borderRightColor: "#e6c875",
              animationDelay: "0.4s",
            }}
          >
            <div className="mb-2 flex justify-center">
              <Image
                src="/19.png"
                alt="Call Us"
                width={32}
                height={32}
                className="w-6 h-6 sm:w-8 sm:h-8"
              />
            </div>
            <p
              className="text-xs font-semibold"
              style={{ color: "var(--color-text-primary)" }}
            >
              Call Us Today
            </p>
            <p
              className="text-xs mt-1 opacity-75"
              style={{ color: "var(--color-text-primary)" }}
            >
              Quick Response
            </p>
          </div>

          {/* Get in Touch Button Block */}
          <div
            className="rounded-2xl p-4 flex items-center justify-center shadow-lg border-b-4 border-r-4 transform hover:scale-105 transition-all duration-200 animate-slideInLeft"
            style={{
              backgroundColor: "var(--color-bg-testimonial-2)",
              borderBottomColor: "#7bb8d1",
              borderRightColor: "#7bb8d1",
              animationDelay: "0.5s",
            }}
          >
            <a
              href="mailto:vshubha.work@gmail.com"
              className="w-full flex justify-center"
            >
              <Image
                src="/illustration-2.png"
                alt="Contact Us"
                width={80}
                height={80}
                className="w-12 h-12 sm:w-16 sm:h-16 hover:scale-110 transition-all duration-200"
              />
            </a>
          </div>

          {/* Trust Badge Block */}
          <div
            className="rounded-2xl p-4 flex flex-col justify-center text-center shadow-lg border-b-4 border-r-4 transform hover:scale-105 transition-all duration-200 animate-slideInLeft"
            style={{
              backgroundColor: "var(--color-bg-nav)",
              borderBottomColor: "#f2ee8a",
              borderRightColor: "#f2ee8a",
              animationDelay: "0.6s",
            }}
          >
            <div className="mb-2 flex justify-center">
              <Image
                src="/18.png"
                alt="Trusted by Families"
                width={32}
                height={32}
                className="w-6 h-6 sm:w-8 sm:h-8"
              />
            </div>
            <p
              className="text-xs font-semibold"
              style={{ color: "var(--color-text-primary)" }}
            >
              Trusted by 50+ Families
            </p>
            <p
              className="text-xs mt-1 opacity-75"
              style={{ color: "var(--color-text-primary)" }}
            >
              Since 2020
            </p>
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

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
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

        .animate-slideUp {
          animation: slideUp 0.8s ease-out;
        }
      `}</style>
    </div>
  );
}

export default CTAStrip;
