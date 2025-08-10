"use client";
import React from "react";
import Image from "next/image";

const serviceCircles = [
  {
    title: "Ages\n2 Months - 5 Years",
    color: "bg-indigo-400",
  },
  {
    title: "Homemade Meals",
    color: "bg-blue-600",
  },
  {
    title: "Safe Environment",
    color: "bg-cyan-400",
  },
  {
    title: "Health and Wellness",
    color: "bg-sky-300",
  },
  {
    title: "Early Learning",
    color: "bg-purple-300",
  },
  {
    title: "Creative Play",
    color: "bg-pink-300",
  },
  {
    title: "Outdoor Activities",
    color: "bg-pink-500",
  },
  {
    title: "Loving Care",
    color: "bg-yellow-400",
  },
  {
    title: "Kindergarten\nReadiness",
    color: "bg-emerald-400",
  },
];

const serviceStats = [
  {
    percentage: "98%",
    description:
      "of parents say their children are happier and more confident after joining our daycare",
    color: "bg-cyan-300",
    icon: "📊",
  },
  {
    percentage: "95%",
    description:
      "of families report improved social skills and better eating habits in their children",
    color: "bg-blue-400",
    icon: "👥",
  },
  {
    percentage: "99%",
    description:
      "of parents feel more confident about their child's safety and development with our care",
    color: "bg-pink-300",
    icon: "📈",
  },
];

function Services() {
  return (
    <div
      className="relative w-full py-8 sm:py-12 lg:py-16"
      style={{ backgroundColor: "var(--color-bg-page)" }}
    >
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="mb-4">
            <span
              className="text-lg font-semibold px-4 py-2 rounded-full shadow-sm"
              style={{
                color: "var(--color-text-primary)",
                backgroundColor: "var(--color-bg-nav)",
              }}
            >
              Our Services
            </span>
          </div>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-serif"
            style={{ color: "var(--color-text-primary)" }}
          >
            What We
            <br />
            <span style={{ color: "var(--color-text-primary)" }}>Offer</span>
          </h2>
        </div>

        {/* Service Circles Row - Desktop */}
        <div className="hidden md:flex flex-wrap justify-center gap-4 mb-16">
          {serviceCircles.map((service, index) => (
            <div
              key={index}
              className={`w-32 h-32 lg:w-36 lg:h-36 ${service.color} rounded-full flex items-center justify-center shadow-lg transform hover:scale-105 transition-all duration-200`}
            >
              <span className="text-white text-sm lg:text-base font-medium text-center px-2 leading-tight">
                {service.title}
              </span>
            </div>
          ))}
        </div>

        {/* Service Circles Carousel - Mobile */}
        <div className="md:hidden mb-16">
          <div className="overflow-x-auto pb-4">
            <div className="flex gap-4 px-4" style={{ width: "max-content" }}>
              {serviceCircles.map((service, index) => (
                <div
                  key={index}
                  className={`w-24 h-24 ${service.color} rounded-full flex items-center justify-center shadow-lg flex-shrink-0 transition-all duration-200`}
                >
                  <span className="text-white text-xs font-medium text-center px-2 leading-tight">
                    {service.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center space-x-2 mt-4">
            {[...Array(Math.ceil(serviceCircles.length / 3))].map((_, i) => (
              <div key={i} className="w-2 h-2 rounded-full bg-gray-300"></div>
            ))}
          </div>
        </div>

        {/* Main Content Layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left Side - Illustration */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-md">
              <Image
                src="/illustration-1.png"
                alt="Daycare Illustration"
                width={400}
                height={400}
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Right Side - Statistics */}
          <div className="space-y-8">
            {serviceStats.map((stat, index) => (
              <div key={index} className="flex items-center gap-6">
                {/* Stat Icon */}
                <div className="flex-shrink-0">
                  <div
                    className={`w-16 h-16 ${stat.color} rounded-full flex items-center justify-center`}
                  >
                    <span className="text-2xl">{stat.icon}</span>
                  </div>
                </div>

                {/* Percentage and Description */}
                <div className="flex-1">
                  <div className="flex items-baseline gap-3">
                    <span
                      className="text-4xl font-bold font-serif"
                      style={{ color: "var(--color-text-primary)" }}
                    >
                      {stat.percentage}
                    </span>
                    <span
                      className="text-lg font-semibold"
                      style={{ color: "var(--color-text-primary)" }}
                    >
                      of families
                    </span>
                  </div>
                  <p
                    className="text-base font-normal leading-relaxed mt-1"
                    style={{ color: "var(--color-text-primary)" }}
                  >
                    {stat.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
