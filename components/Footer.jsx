"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

function Footer() {
  return (
    <footer
      className="relative w-full py-12 lg:py-16 animate-slideUp"
      style={{
        backgroundColor: "var(--color-cta-primary-bg)",
        color: "var(--color-cta-primary-text)",
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Logo & Description */}
          <div
            className="lg:col-span-2 text-center md:text-left animate-fadeIn"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="mb-6">
              <h2 className="text-3xl md:text-4xl font-bold font-serif text-white mb-4">
                Stringfellow Daycare
              </h2>
              <div className="text-2xl md:text-3xl font-bold text-white/80 mb-4">
                SDC
              </div>
            </div>
            <p className="text-white/80 text-base md:text-lg leading-relaxed max-w-md mx-auto md:mx-0 mb-6">
              Where children grow, learn, and thrive in a loving environment.
              Creating magical moments and lasting memories, one smile at a
              time.
            </p>
          </div>

          {/* Quick Links */}
          <div
            className="text-center md:text-left animate-slideInUp"
            style={{ animationDelay: "0.4s" }}
          >
            <h3 className="text-lg font-bold text-white mb-6 font-serif">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#about"
                  className="text-white/80 hover:text-white transition-colors duration-200 text-sm md:text-base"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#programmes"
                  className="text-white/80 hover:text-white transition-colors duration-200 text-sm md:text-base"
                >
                  Programmes
                </Link>
              </li>
              <li>
                <Link
                  href="#pricing"
                  className="text-white/80 hover:text-white transition-colors duration-200 text-sm md:text-base"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-white/80 hover:text-white transition-colors duration-200 text-sm md:text-base"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div
            className="text-center md:text-left animate-slideInUp"
            style={{ animationDelay: "0.6s" }}
          >
            <h3 className="text-lg font-bold text-white mb-6 font-serif">
              Our Services
            </h3>
            <ul className="space-y-3">
              <li className="text-white/80 text-sm md:text-base">
                Daily Activities
              </li>
              <li className="text-white/80 text-sm md:text-base">
                Fresh Meals
              </li>
              <li className="text-white/80 text-sm md:text-base">
                Safe Environment
              </li>
              <li className="text-white/80 text-sm md:text-base">
                Early Learning
              </li>
              <li className="text-white/80 text-sm md:text-base">
                Creative Play
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links & CTA */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            {/* Social Links */}
            <div
              className="flex items-center gap-4 animate-slideInLeft"
              style={{ animationDelay: "0.8s" }}
            >
              <span className="text-white/80 text-sm font-medium mr-2">
                Follow Us:
              </span>
              <a
                href="mailto:vshubha.work@gmail.com"
                className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all hover:scale-110 border border-white/20 group"
              >
                <svg
                  className="w-4 h-4 text-white group-hover:scale-110 transition-transform"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              </a>

              <a
                href="tel:+1234567890"
                className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all hover:scale-110 border border-white/20 group"
              >
                <svg
                  className="w-4 h-4 text-white group-hover:scale-110 transition-transform"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
              </a>

              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all hover:scale-110 border border-white/20 group"
              >
                <svg
                  className="w-4 h-4 text-white group-hover:scale-110 transition-transform"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all hover:scale-110 border border-white/20 group"
              >
                <svg
                  className="w-4 h-4 text-white group-hover:scale-110 transition-transform"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987c6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001z" />
                </svg>
              </a>
            </div>

            {/* CTA Button */}
            <div
              className="animate-slideInRight"
              style={{ animationDelay: "1s" }}
            >
              <Link href="/contact">
                <div
                  className="text-sm font-bold py-3 px-6 rounded-full transition-all hover:scale-105 hover:shadow-lg border-2 border-white/20 hover:border-white/40"
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    color: "white",
                  }}
                >
                  Schedule a Visit
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div
          className="border-t border-white/10 mt-8 pt-6 text-center animate-fadeIn"
          style={{ animationDelay: "1.2s" }}
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-white/60 text-xs sm:text-sm">
              © 2024 Stringfellow Daycare. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-white/60 text-xs sm:text-sm">
              <span>Privacy Policy</span>
              <span>•</span>
              <span>Terms of Service</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
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

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-slideUp {
          animation: slideUp 0.8s ease-out;
        }

        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out;
        }

        .animate-slideInUp {
          animation: slideInUp 0.8s ease-out;
        }

        .animate-slideInLeft {
          animation: slideInLeft 0.8s ease-out;
        }

        .animate-slideInRight {
          animation: slideInRight 0.8s ease-out;
        }
      `}</style>
    </footer>
  );
}

export default Footer;
