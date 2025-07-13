"use client";
import React, { useState } from "react";
import Link from "next/link";

const NavLink = ({ href, children, onClick = null }) => (
  <Link href={href} onClick={onClick}>
    <div
      className="text-lg font-semibold transition-colors hover:scale-105 transform duration-200"
      style={{ color: "var(--color-text-primary)" }}
    >
      {children}
    </div>
  </Link>
);

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-4 px-6 md:px-12 lg:px-24">
      <div
        className="container mx-auto flex items-center justify-between backdrop-blur-sm p-4 rounded-full mt-4 shadow-lg border-2 relative"
        style={{
          backgroundColor: "var(--color-bg-nav)",
          borderColor: "var(--color-stroke)",
        }}
      >
        <div
          className="text-3xl md:text-4xl font-bold font-serif"
          style={{ color: "var(--color-text-primary)" }}
        >
          <Link href="/">SDC</Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink href="/#about">About</NavLink>
          <NavLink href="/#programmes">Programmes</NavLink>
          <NavLink href="/#pricing">Pricing</NavLink>
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden md:flex">
          <Link href="/contact">
            <div
              className="text-sm font-semibold py-3 px-6 rounded-full transition-all hover:scale-105 hover:shadow-lg"
              style={{
                backgroundColor: "var(--color-cta-primary-bg)",
                color: "var(--color-cta-primary-text)",
              }}
            >
              Get in Touch
            </div>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={toggleMobileMenu}
          style={{ color: "var(--color-text-primary)" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                isMobileMenuOpen
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div
            className="absolute top-full left-0 right-0 mt-2 py-4 px-6 rounded-2xl shadow-xl border-2 md:hidden"
            style={{
              backgroundColor: "var(--color-bg-nav)",
              borderColor: "var(--color-stroke)",
            }}
          >
            <div className="flex flex-col space-y-4">
              <NavLink href="/#about" onClick={closeMobileMenu}>
                About
              </NavLink>
              <NavLink href="/#programmes" onClick={closeMobileMenu}>
                Programmes
              </NavLink>
              <NavLink href="/#pricing" onClick={closeMobileMenu}>
                Pricing
              </NavLink>
              <div
                className="pt-4 border-t"
                style={{ borderColor: "var(--color-stroke)" }}
              >
                <Link href="/contact" onClick={closeMobileMenu}>
                  <div
                    className="text-sm font-semibold py-3 px-6 rounded-full transition-all hover:scale-105 hover:shadow-lg text-center"
                    style={{
                      backgroundColor: "var(--color-cta-primary-bg)",
                      color: "var(--color-cta-primary-text)",
                    }}
                  >
                    Get in Touch
                  </div>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navigation;
