'use client';

import React, { useState } from 'react';
import Link from 'next/link';

// A simple hamburger icon component (or use an SVG library if available)
const HamburgerIcon = ({ open }: { open: boolean }) => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    {open ? (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> // X icon
    ) : (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 12h16M4 18h16" /> // Hamburger icon (fixed the original example's last line)
    )}
  </svg>
);

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { href: '/', label: 'Home' },
    { href: '/shop', label: 'Shop' }, // Placeholder
    { href: '/about', label: 'About' }, // Placeholder
  ];

  return (
    <>
      <header className="bg-brand-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-primary-blue">
            Logo
          </Link>
          {/* Hamburger Menu Button - hidden on md and larger screens */}
          <button
            onClick={toggleMenu}
            className="text-text-dark focus:outline-none md:hidden"
            aria-label="Toggle menu"
          >
            <HamburgerIcon open={isMenuOpen} />
          </button>
          {/* Desktop Navigation Links - visible on md and larger screens */}
          <nav className="hidden md:flex space-x-6 items-center">
            {menuItems.map((item) => (
              <Link key={item.label} href={item.href} className="text-text-dark hover:text-primary-blue transition-colors duration-200">
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      {/* Mobile Menu Overlay - hidden on md and larger screens */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-primary-blue text-brand-white z-40 flex flex-col items-center justify-center md:hidden">
          <button
            onClick={toggleMenu}
            className="absolute top-4 right-4 text-brand-white p-2"
            aria-label="Close menu"
          >
            <HamburgerIcon open={true} /> {/* Shows X icon */}
          </button>
          <nav className="flex flex-col items-center space-y-8">
            {menuItems.map((item) => (
              <Link key={item.label} href={item.href} className="text-3xl hover:text-accent-pink transition-colors duration-300" onClick={toggleMenu}> {/* Larger text, added transition */}
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  );
};

export default Header;
