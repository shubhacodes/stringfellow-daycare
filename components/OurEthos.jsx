"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const OurEthosSection = () => {
  const [activeCard, setActiveCard] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const ethoCards = [
    {
      id: 1,
      number: "01",
      title: "Play, Explore, Learn",
      description:
        "Children learn best through play and exploration. Our approach encourages curiosity and discovery in a safe, stimulating environment.",
      image: "/images/bookshelf.jpg",
      alt: "Educational bookshelf with learning materials",
      bgColor: "bg-[#E49277]",
      hoverBgColor: "hover:bg-[#d87f64]",
      textColor: "text-white",
      strokeColor: "white",
    },
    {
      id: 2,
      number: "02",
      title: "Creative Little Hands",
      description:
        "We nurture creativity through hands-on activities that develop fine motor skills and encourage self-expression and innovation.",
      image: "/images/crafts.jpg",
      alt: "Creative paper plate crafts",
      bgColor: "bg-[#A4D4E4]",
      hoverBgColor: "hover:bg-[#8bc0d0]",
      textColor: "text-[#08212C]",
      strokeColor: "#08212C",
    },
    {
      id: 3,
      number: "03",
      title: "Together Time",
      description:
        "Building strong relationships through collaborative activities fosters social skills and emotional intelligence in our little learners.",
      image: "/images/learning-materials.jpg",
      alt: "Educational chart and learning materials",
      bgColor: "bg-[#8CC9B8]",
      hoverBgColor: "hover:bg-[#79b6a5]",
      textColor: "text-[#08212C]",
      strokeColor: "#08212C",
    },
  ];

  // Parallax effect for background bubbles
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative w-full bg-[#f9f5f2] py-20 md:py-24 overflow-hidden">
      {/* Animated Background Decorative Elements */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 0.4, x: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        style={{ y: scrollY * 0.1 }}
        className="absolute top-0 left-0 z-0"
      >
        <div className="w-[200px] h-[200px] rounded-full bg-[#F7C2C9] opacity-40 blur-sm"></div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 0.25, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        style={{ y: scrollY * -0.05 }}
        className="absolute bottom-0 right-0 z-0"
      >
        <div className="w-[240px] h-[240px] rounded-full bg-[#3A94DE] opacity-25 blur-sm"></div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ duration: 1.2 }}
        className="absolute top-1/2 left-1/4 z-0"
      >
        <div className="w-[120px] h-[120px] rounded-full bg-[#FFD166] opacity-15 blur-sm"></div>
      </motion.div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-20"
        >
          <motion.h3
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="inline-block font-serif text-2xl sm:text-[28px] font-semibold text-[#E45127] mb-3 relative"
          >
            Our Ethos
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="absolute -bottom-1 left-0 h-[3px] bg-[#E45127] opacity-40 rounded-full"
            ></motion.div>
          </motion.h3>
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="font-serif text-3xl sm:text-4xl md:text-[43px] leading-tight md:leading-[64px] font-bold text-[#08212C] mb-4"
          >
            Nurturing Little Hearts, Growing Big Minds
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex justify-center mt-2"
          >
            <svg
              height="12"
              width="320"
              className="w-[280px] sm:w-[320px] md:w-[420px]"
              fill="none"
              viewBox="0 0 420 12"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <motion.path
                d="M1 6C1 6 70 9 120 8.5C170 8 210 4 260 4.5C296 4.8 318 8 354 6.5C390 5 419 7.5 419 7.5"
                stroke="#FF8877"
                strokeWidth="7"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: 0.8, duration: 1.2, ease: "easeInOut" }}
              />
            </svg>
          </motion.div>
        </motion.div>

        {/* Three Card Layout with Animation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
          {ethoCards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 bg-white"
              onMouseEnter={() => setActiveCard(card.id)}
              onMouseLeave={() => setActiveCard(null)}
            >
              {/* Image */}
              <div className="relative h-64 bg-gray-200 overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 hover:scale-110"
                  priority={card.id === 1}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Expandable Content */}
              <div className="bg-white p-4">
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: activeCard === card.id ? "auto" : 0,
                    opacity: activeCard === card.id ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="text-[#08212C] mb-4">{card.description}</p>
                </motion.div>
              </div>

              {/* Footer */}
              <div
                className={`${card.bgColor} ${card.hoverBgColor} ${card.textColor} p-4 flex justify-between items-center transition-colors duration-300 cursor-pointer`}
                onClick={() =>
                  setActiveCard(activeCard === card.id ? null : card.id)
                }
              >
                <div>
                  <span className="font-bold mr-2">{card.number}</span>
                  <span className="font-['Crimson_Pro'] text-2xl sm:text-[28px] font-semibold">
                    {card.title}
                  </span>
                </div>
                <motion.div
                  animate={{ rotate: activeCard === card.id ? 90 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white bg-opacity-30 rounded-full p-2 transform transition-transform"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      d="M5 12H19M19 12L12 5M19 12L12 19"
                      stroke={card.strokeColor}
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Interactive CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-12 md:mt-16 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="bg-[#E45127] hover:bg-[#d23f15] text-white font-semibold py-3 px-8 rounded-full shadow-md transition-all duration-300 relative overflow-hidden group"
          >
            <span className="relative z-10">Discover Our Programs</span>
            <span className="absolute top-0 left-0 w-full h-full bg-white opacity-20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default OurEthosSection;
