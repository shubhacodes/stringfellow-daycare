"use client";
import React, { useState } from "react";

// SVG Component
const Union = ({ className, style }) => (
  <svg
    height="520"
    width="576"
    fill="none"
    viewBox="0 0 576 520"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={style}
  >
    <path
      d="M451 0C520.036 0 576 55.9644 576 125C576 149.864 568.74 173.031 556.226 192.5C568.74 211.969 576 235.136 576 260C576 284.864 568.74 308.031 556.226 327.5C568.74 346.969 576 370.136 576 395C576 464.036 520.036 520 451 520C419.385 520 390.513 508.261 368.5 488.907C346.487 508.261 317.615 520 286 520C255.334 520 227.248 508.956 205.5 490.63C183.752 508.956 155.666 520 125 520C55.9644 520 0 464.036 0 395C0 370.137 7.25894 346.969 19.7734 327.5C7.25894 308.031 0 284.863 0 260C0 235.137 7.25894 211.969 19.7734 192.5C7.25894 173.031 0 149.863 0 125C0 55.9644 55.9644 0 125 0C155.666 0 183.752 11.0433 205.5 29.3691C227.248 11.0433 255.334 0 286 0C317.615 0 346.487 11.7379 368.5 31.0918C390.513 11.7379 419.385 0 451 0Z"
      fill="currentColor"
    />
  </svg>
);

const testimonials = [
  {
    text: "We couldn't be happier with our experience at Stringfellow Home Child Daycare! Our two-year-old warmed up to Meenakshi within minutes despite being wary of strangers. Meenakshi has a magical touch with children, much like Mary Poppins.",
    author: "Evelyn Lin Thai",
    rating: 5,
  },
  {
    text: "Our son has been going to this daycare since he was 1.5 years old. He loves going in everyday and the care and personal attention he gets from Meenakshiji. She takes excellent care of all the kids which we can notice when we pick up and drop off.",
    author: "Boney Pandya",
    rating: 5,
  },
  {
    text: "Meenakshi is one of the most humble and grounded person you will come across. The place is colorful, vibrant and clean. My daughter enjoys the food cooked by Meenakshi and enjoys playing with other kids there. I highly recommend for kids between 1-3.5 years.",
    author: "Anubhuti Dhand",
    rating: 5,
  },
  {
    text: "We started sending our son to this daycare when he was 2 and we had such a wonderful experience with Meenakshi. She keeps the kids so well, just like her own. The daycare is clean and organized and she does a great job of teaching children.",
    author: "Sukhmanee Sohi",
    rating: 5,
  },
  {
    text: "My son went to this daycare for 3 years and till date, we cherish those days. Meenakshiji takes care of each kid with warmth and care. The daycare is always clean. We never had to worry about our son while he was there.",
    author: "Bintu Patadia-Rawal",
    rating: 5,
  },
];

function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div
      className="relative w-full overflow-hidden py-8 sm:py-12 lg:py-20 animate-slideUp"
      style={{ backgroundColor: "var(--color-bg-testimonial-1)" }}
    >
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="mb-6">
            <span
              className="text-lg font-semibold px-6 py-3 rounded-full shadow-sm border-2"
              style={{
                color: "var(--color-text-primary)",
                backgroundColor: "var(--color-bg-nav)",
                borderColor: "var(--color-stroke)",
              }}
            >
              Google Reviews
            </span>
          </div>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-serif leading-tight"
            style={{ color: "var(--color-text-primary)" }}
          >
            What Parents Are
            <br />
            <span style={{ color: "var(--color-text-primary)" }}>Saying</span>
          </h2>
          <div className="flex items-center justify-center gap-2 mb-4">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className="w-8 h-8 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <p
            className="text-lg font-semibold"
            style={{ color: "var(--color-text-primary)" }}
          >
            5.0 stars • 25+ Google Reviews
          </p>
        </div>

        {/* Testimonial content */}
        <div className="max-w-6xl mx-auto relative">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-0">
            {/* Previous button */}
            <button
              onClick={prevTestimonial}
              className="flex-shrink-0 w-12 h-12 lg:w-16 lg:h-16 rounded-full flex items-center justify-center transition-all hover:scale-110 hover:shadow-xl lg:mr-8 border-4 border-r-8 border-b-8 transform hover:translate-y-1 order-2 lg:order-1"
              style={{
                backgroundColor: "var(--color-cta-primary-bg)",
                borderBottomColor: "#0f1419",
                borderRightColor: "#0f1419",
                borderTopColor: "transparent",
                borderLeftColor: "transparent",
              }}
            >
              <svg className="w-8 h-8" fill="white" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            {/* Testimonial card with SVG background */}
            <div className="flex-1 relative max-w-4xl w-full order-1 lg:order-2">
              {/* SVG Background */}
              <div className="absolute inset-0 flex items-center justify-center">
                <Union
                  className="w-full h-full max-w-3xl sm:max-w-4xl lg:max-w-5xl transform scale-x-110 sm:scale-x-125"
                  style={{ color: "var(--color-pillar-bg)" }}
                />
              </div>

              {/* Content overlay */}
              <div className="relative z-10 p-4 sm:p-6 md:p-8 lg:p-12 animate-fadeIn">
                <div className="text-center max-w-xs sm:max-w-sm lg:max-w-md mx-auto">
                  {/* Quote icon */}
                  <div className="mb-4 transform transition-all duration-500 hover:scale-110">
                    <svg
                      className="w-10 h-10 mx-auto opacity-30"
                      style={{ color: "var(--color-text-primary)" }}
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                    </svg>
                  </div>

                  {/* Rating stars */}
                  <div className="flex items-center justify-center gap-1 mb-6 animate-pulse">
                    {[...Array(testimonials[currentTestimonial].rating)].map(
                      (_, i) => (
                        <svg
                          key={i}
                          className="w-5 h-5 text-yellow-400 transform transition-all duration-300 hover:scale-125"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          style={{ animationDelay: `${i * 0.1}s` }}
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      )
                    )}
                  </div>

                  <p
                    className="text-sm md:text-base font-normal leading-relaxed mb-6 font-serif transition-all duration-500"
                    style={{ color: "var(--color-text-primary)" }}
                  >
                    "{testimonials[currentTestimonial].text}"
                  </p>

                  <div
                    className="border-t pt-4 max-w-xs mx-auto transition-all duration-300"
                    style={{ borderColor: "var(--color-stroke)" }}
                  >
                    <p
                      className="text-xs font-bold tracking-wider font-serif"
                      style={{ color: "var(--color-text-primary)" }}
                    >
                      — {testimonials[currentTestimonial].author}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Next button */}
            <button
              onClick={nextTestimonial}
              className="flex-shrink-0 w-12 h-12 lg:w-16 lg:h-16 rounded-full flex items-center justify-center transition-all hover:scale-110 hover:shadow-xl lg:ml-8 border-4 border-r-8 border-b-8 transform hover:translate-y-1 order-3"
              style={{
                backgroundColor: "var(--color-cta-primary-bg)",
                borderBottomColor: "#0f1419",
                borderRightColor: "#0f1419",
                borderTopColor: "transparent",
                borderLeftColor: "transparent",
              }}
            >
              <svg className="w-8 h-8" fill="white" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center mt-12 space-x-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-4 h-4 rounded-full transition-all border-2 transform hover:scale-125 ${
                  index === currentTestimonial
                    ? "scale-125 border-4"
                    : "hover:scale-110"
                }`}
                style={{
                  backgroundColor:
                    index === currentTestimonial
                      ? "var(--color-cta-primary-bg)"
                      : "var(--color-bg-nav)",
                  borderColor: "var(--color-stroke)",
                }}
              />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
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

        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out;
        }

        .animate-slideUp {
          animation: slideUp 0.8s ease-out;
        }
      `}</style>
    </div>
  );
}

export default Testimonials;
