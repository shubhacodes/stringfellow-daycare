"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function ContactPageHeader() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger entrance animation
    setIsVisible(true);
  }, []);

  return (
    <div
      className="relative w-full pt-24 sm:pt-32 pb-12 sm:pb-16 lg:pb-20 overflow-hidden"
      style={{ backgroundColor: "var(--color-bg-page)" }}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute top-20 left-10 w-32 h-32 rounded-full opacity-10"
          style={{ backgroundColor: "var(--color-bg-testimonial-1)" }}
        ></div>
        <div
          className="absolute top-40 right-20 w-24 h-24 rounded-full opacity-10"
          style={{ backgroundColor: "var(--color-bg-testimonial-2)" }}
        ></div>
        <div
          className="absolute bottom-20 left-1/4 w-20 h-20 rounded-full opacity-10"
          style={{ backgroundColor: "var(--color-bg-card-active)" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
        {/* Breadcrumb */}
        <div
          className={`mb-6 transition-all duration-800 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: "0.1s" }}
        >
          <nav className="flex items-center space-x-2 text-sm">
            <Link
              href="/"
              className="hover:underline transition-colors"
              style={{ color: "var(--color-text-primary)" }}
            >
              Home
            </Link>
            <span style={{ color: "var(--color-text-primary)" }}>•</span>
            <span
              className="font-semibold"
              style={{ color: "var(--color-text-primary)" }}
            >
              Contact
            </span>
          </nav>
        </div>

        {/* Main Header Content */}
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div
            className={`mb-6 transition-all duration-1000 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "0.2s" }}
          >
            <span
              className="inline-block text-base sm:text-lg font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-sm transition-all duration-300 ease-out hover:shadow-md hover:scale-105"
              style={{
                color: "var(--color-text-primary)",
                backgroundColor: "var(--color-bg-nav)",
              }}
            >
              Let's Connect
            </span>
          </div>

          {/* Main Title */}
          <h1
            className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-serif mb-6 sm:mb-8 leading-tight transition-all duration-1000 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{
              color: "var(--color-text-primary)",
              transitionDelay: "0.4s",
            }}
          >
            Get in{" "}
            <span className="relative">
              Touch
              <svg
                className="absolute -bottom-2 sm:-bottom-4 left-0 w-full h-3 sm:h-4"
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

          {/* Subtitle */}
          <p
            className={`text-lg sm:text-xl md:text-2xl font-normal leading-relaxed mb-8 sm:mb-12 max-w-3xl mx-auto px-4 sm:px-0 transition-all duration-1000 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{
              color: "var(--color-text-primary)",
              transitionDelay: "0.6s",
            }}
          >
            Ready to give your child the best care? We'd love to hear from you
            and discuss how we can support your family's childcare needs.
          </p>

          {/* Contact Methods */}
          <div
            className={`flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mb-12 transition-all duration-1000 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "0.8s" }}
          >
            {/* Phone */}
            <a
              href="tel:+44201234567"
              className="flex items-center space-x-3 px-4 sm:px-6 py-3 sm:py-4 rounded-full transition-all hover:scale-105 hover:shadow-lg"
              style={{
                backgroundColor: "var(--color-cta-outline-bg)",
                color: "var(--color-text-primary)",
              }}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
              <span className="font-semibold">Call Us</span>
            </a>

            {/* Email */}
            <a
              href="mailto:vshubha.work@gmail.com"
              className="flex items-center space-x-3 px-4 sm:px-6 py-3 sm:py-4 rounded-full transition-all hover:scale-105 hover:shadow-lg"
              style={{
                backgroundColor: "var(--color-cta-outline-bg)",
                color: "var(--color-text-primary)",
              }}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
              <span className="font-semibold">Email Us</span>
            </a>
          </div>

          {/* Decorative dots */}
          <div
            className={`flex justify-center space-x-3 transition-all duration-1000 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "1s" }}
          >
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="w-2 h-2 rounded-full animate-pulse"
                style={{
                  backgroundColor: "var(--color-bg-card-active)",
                  animationDelay: `${i * 0.2}s`,
                }}
              ></div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }

        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </div>
  );
}
