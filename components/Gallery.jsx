"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const images = [
  "/gallery/1.png",
  "/gallery/2.png",
  "/gallery/3.png",
  "/gallery/4.png",
  "/gallery/5.png",
  "/gallery/6.png",
  "/gallery/7.png",
  "/gallery/8.png",
  "/gallery/9.png",
  "/gallery/10.png",
];

function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    setIsAutoPlaying(false);
  };

  return (
    <div
      className="relative w-full py-16 sm:py-20 lg:py-24"
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
              Our Gallery
            </span>
          </div>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-serif"
            style={{ color: "var(--color-text-primary)" }}
          >
            Precious
            <br />
            <span style={{ color: "var(--color-text-primary)" }}>Moments</span>
          </h2>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-5xl mx-auto">
          {/* Main Image */}
          <div className="relative aspect-[16/9] rounded-3xl overflow-hidden shadow-xl border-8 border-white">
            <Image
              src={images[currentIndex]}
              alt={`Gallery image ${currentIndex + 1}`}
              fill
              className="object-cover"
              priority
            />
            {/* Cute decorative elements */}
            <div className="absolute -top-4 -left-4 w-12 h-12 bg-pink-300 rounded-full transform rotate-12"></div>
            <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-yellow-300 rounded-full"></div>
            <div className="absolute top-1/2 -right-6 w-10 h-10 bg-blue-300 rounded-full"></div>
            <div className="absolute top-1/3 -left-6 w-6 h-6 bg-purple-300 rounded-full"></div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-white/80 shadow-lg flex items-center justify-center hover:bg-white transition-all z-10"
            style={{ color: "var(--color-text-primary)" }}
          >
            ←
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-white/80 shadow-lg flex items-center justify-center hover:bg-white transition-all z-10"
            style={{ color: "var(--color-text-primary)" }}
          >
            →
          </button>

          {/* Thumbnail Navigation - Mobile */}
          <div className="flex justify-center mt-8 gap-2 md:hidden overflow-x-auto pb-4">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToSlide(idx)}
                className={`w-2 h-2 rounded-full transition-all flex-shrink-0 ${
                  currentIndex === idx
                    ? "bg-blue-500 w-4"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>

          {/* Preview Strip - Desktop */}
          <div className="hidden md:grid grid-cols-5 gap-4 mt-8">
            {images.map((image, idx) => (
              <div
                key={idx}
                onClick={() => goToSlide(idx)}
                className={`relative aspect-video rounded-xl overflow-hidden cursor-pointer transition-all ${
                  currentIndex === idx
                    ? "ring-4 ring-blue-500 scale-110"
                    : "opacity-70 hover:opacity-100"
                }`}
              >
                <Image
                  src={image}
                  alt={`Thumbnail ${idx + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Background Elements */}
      <div className="absolute top-40 left-10 w-20 h-20 bg-yellow-200 rounded-full opacity-20"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-pink-200 rounded-full opacity-20"></div>
      <div className="absolute top-60 right-20 w-16 h-16 bg-blue-200 rounded-full opacity-20"></div>
    </div>
  );
}

export default Gallery;
