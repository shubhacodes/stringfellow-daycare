"use client";
import React from "react";
import Image from "next/image";

function Community() {
  return (
    <div
      className="relative w-full py-16 sm:py-20 lg:py-24"
      style={{ backgroundColor: "var(--color-bg-page)" }}
    >
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="mb-4">
            <span
              className="text-lg font-semibold px-4 py-2 rounded-full shadow-sm inline-flex items-center gap-2"
              style={{
                color: "var(--color-text-primary)",
                backgroundColor: "var(--color-bg-nav)",
              }}
            >
              <span className="text-2xl">🏠</span>
              More About Our Family
            </span>
          </div>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-serif"
            style={{ color: "var(--color-text-primary)" }}
          >
            Growing Together
            <br />
            <span style={{ color: "var(--color-text-primary)" }}>
              With Love 💝
            </span>
          </h2>
        </div>

        {/* Cards Container */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Financial Support Card */}
          <div className="relative bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="relative">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">💰</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-blue-600">
                  Financial Support
                </h3>
              </div>
              <p className="text-gray-700 mb-6 text-sm sm:text-base">
                Financial Support at Stringfellow Home Child Daycare:
                Assistance, Subsidies, Tax Credits, Military Fee Assistance,
                Employer Benefits, and More
              </p>

              <div className="space-y-4">
                <p className="text-gray-600 italic mb-4 text-sm sm:text-base flex items-center gap-2">
                  <span className="text-xl">✨</span>
                  You may qualify to get help paying for child care through one
                  of these options:
                </p>
                <ul className="space-y-2 sm:space-y-3">
                  {[
                    ["💫", "State and local subsidies and tax credits"],
                    ["🌟", "Tuition savings through your employer"],
                    ["⭐", "Part-time scheduling options"],
                    ["✨", "Sibling savings"],
                    ["🌠", "Referral bonuses"],
                  ].map(([emoji, item], index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <span className="text-xl">{emoji}</span>
                      <span className="text-gray-700 text-sm sm:text-base">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Awards Card */}
          <div className="relative bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="relative">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">🏆</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-pink-600">
                  We're Accredited
                </h3>
              </div>

              <div className="mb-6">
                <div className="relative w-full aspect-[4/2] sm:aspect-[4/2] rounded-lg overflow-hidden mb-6">
                  <Image
                    src="/8.png"
                    alt="Stringfellow Daycare Awards"
                    fill
                    className="object-contain bg-pink-50"
                  />
                </div>

                <p className="text-gray-700 mb-4 text-sm sm:text-base flex items-center gap-2">
                  <span className="text-xl">🌈</span>
                  Nationally recognized outside agencies validate our
                  curriculum, operations, and health and safety practices.
                </p>

                <div className="bg-pink-50 rounded-xl p-4 sm:p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4 mb-4">
                    <span className="text-pink-600 font-bold text-sm sm:text-base flex items-center gap-2">
                      <span className="text-xl">🎯</span>
                      VQB5 Certified
                    </span>
                    <span className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-xs sm:text-sm inline-block sm:flex-shrink-0">
                      Verified ✨
                    </span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4">
                    <span className="text-pink-600 font-bold text-sm sm:text-base flex items-center gap-2">
                      <span className="text-xl">🎨</span>
                      Subsidy Vendor Rating
                    </span>
                    <span className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-xs sm:text-sm inline-block sm:flex-shrink-0">
                      596 ⭐
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Community;
