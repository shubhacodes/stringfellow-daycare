"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
  Navbar,
  NavBody,
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  NavbarLogo,
  NavbarButton,
} from "./ui/resizable-navbar";

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Desktop Navigation */}
      <Navbar>
        <NavBody>
          <NavbarLogo />
          <div className="flex items-center space-x-4">
            <NavbarButton href="/contact" variant="primary">
              Get in Touch
            </NavbarButton>
          </div>
        </NavBody>
      </Navbar>

      {/* Mobile Navigation */}
      <MobileNav>
        <MobileNavHeader>
          <NavbarLogo />
          <MobileNavToggle
            isOpen={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        </MobileNavHeader>

        <MobileNavMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        >
          <NavbarButton href="/contact" variant="primary" className="w-full">
            Get in Touch
          </NavbarButton>
        </MobileNavMenu>
      </MobileNav>
    </>
  );
};

export default Navigation;
