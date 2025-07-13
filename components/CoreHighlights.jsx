"use client";
import React from "react";
import Image from "next/image";

const CoreHighlights = () => {
  return (
    <div
      className="relative w-full py-8 sm:py-12 lg:py-16 animate-slideUp"
      style={{ backgroundColor: "var(--color-bg-section)" }}
    >
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        {/* Header Section */}
        <div className="text-center mb-12 animate-fadeIn">
          <div
            className="mb-4 animate-slideIn"
            style={{ animationDelay: "0.2s" }}
          >
            <span
              className="text-sm sm:text-lg font-semibold px-4 py-2 rounded-full shadow-sm transition-all hover:scale-105"
              style={{
                color: "var(--color-text-primary)",
                backgroundColor: "var(--color-bg-nav)",
              }}
            >
              COMMUNITY
            </span>
          </div>
          <h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 font-serif leading-tight animate-slideIn"
            style={{
              color: "var(--color-text-primary)",
              animationDelay: "0.4s",
            }}
          >
            More Than Childcare: A Loving Foundation
          </h2>
          <p
            className="text-base sm:text-lg md:text-xl font-normal leading-relaxed max-w-3xl mx-auto animate-slideIn"
            style={{
              color: "var(--color-text-primary)",
              animationDelay: "0.6s",
            }}
          >
            We create a magical environment where every child feels valued and
            loved. With genuine care and personalized attention, children
            quickly warm up to our nurturing approach and thrive in our caring
            community.
          </p>
        </div>

        {/* Three Pillars Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 text-center max-w-6xl mx-auto">
          {/* Children */}
          <div
            className="space-y-4 animate-slideInLeft"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="flex justify-center mb-6 transform transition-all duration-300 hover:scale-110">
              <Image
                src="/20.png"
                alt="Nourishing Little Bodies & Minds"
                width={96}
                height={96}
                className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24"
              />
            </div>
            <h4
              className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 font-serif"
              style={{ color: "var(--color-text-primary)" }}
            >
              Nourishing Little Bodies & Minds
            </h4>
            <p
              className="text-sm md:text-base font-normal leading-relaxed"
              style={{ color: "var(--color-text-primary)" }}
            >
              <strong>Wholesome, Home-Cooked Meals</strong> – Fresh, nutritious
              food to fuel growing bodies.
              <br />
              <br />
              <strong>Playful Learning & Exploration</strong> – Engaging
              activities that spark curiosity and creativity.
            </p>
          </div>

          {/* Teachers */}
          <div
            className="space-y-4 animate-slideInUp"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="flex justify-center mb-6 transform transition-all duration-300 hover:scale-110">
              <Image
                src="/21.png"
                alt="A Safe & Caring Environment"
                width={96}
                height={96}
                className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24"
              />
            </div>
            <h4
              className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 font-serif"
              style={{ color: "var(--color-text-primary)" }}
            >
              A Safe & Caring Environment
            </h4>
            <p
              className="text-sm md:text-base font-normal leading-relaxed"
              style={{ color: "var(--color-text-primary)" }}
            >
              <strong>A Safe & Happy Place</strong> – A clean, secure space
              where children feel at home.
              <br />
              <br />
              <strong>Personalized Care & Attention</strong> – Every child is
              nurtured based on individual needs.
            </p>
          </div>

          {/* Family */}
          <div
            className="space-y-4 animate-slideInRight"
            style={{ animationDelay: "0.6s" }}
          >
            <div className="flex justify-center mb-6 transform transition-all duration-300 hover:scale-110">
              <Image
                src="/22.png"
                alt="Heartfelt & Dedicated Guidance"
                width={96}
                height={96}
                className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24"
              />
            </div>
            <h4
              className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 font-serif"
              style={{ color: "var(--color-text-primary)" }}
            >
              Heartfelt & Dedicated Guidance
            </h4>
            <p
              className="text-sm md:text-base font-normal leading-relaxed"
              style={{ color: "var(--color-text-primary)" }}
            >
              <strong>Compassionate Leadership</strong> – Warm, experienced care
              ensures a loving, enriching experience.
              <br />
              <br />
              <strong>Family Partnership</strong> – Working together through
              meaningful dialogue and support.
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

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
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

        .animate-slideInUp {
          animation: slideInUp 0.8s ease-out;
        }

        .animate-slideUp {
          animation: slideUp 0.8s ease-out;
        }

        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out;
        }
      `}</style>
    </div>
  );
};

export default CoreHighlights;
