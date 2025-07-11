"use client";

import React, { useState } from "react";
import { Logo } from "../logo/Logo";

type HeaderProps = {
  cartCount: number;
};

const menuItems = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "About", href: "/about" },
];

export const Header: React.FC<HeaderProps> = ({ cartCount }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => setMenuOpen((open) => !open);

  return (
    <header className="container mx-auto px-4 flex">
      {/* Logo */}
      <a
        href="/"
        className="font-bold text-lg text-blue-600"
        aria-label="ecommerce logo"
        tabIndex={0}
      >
        <Logo />
      </a>

      {/* Mobile Hamburger */}
      <button
        className="lg:hidden p-2"
        aria-label="Open menu"
        aria-expanded={menuOpen}
        onClick={handleMenuToggle}
        tabIndex={0}
      >
        <span className="block w-6 h-0.5 bg-gray-800 mb-1" />
        <span className="block w-6 h-0.5 bg-gray-800 mb-1" />
        <span className="block w-6 h-0.5 bg-gray-800" />
      </button>

      {/* Menu (mobile: absolute, desktop: static) */}
      <nav
        role="navigation"
        className={`${
          menuOpen ? "block" : "hidden"
        } absolute top-14 left-0 w-full bg-white shadow-lg p-4 lg:static lg:block lg:w-auto lg:bg-transparent lg:shadow-none lg:p-0`}
        aria-label="Main menu"
        style={{ display: menuOpen ? "block" : undefined }}
      >
        <ul className="flex flex-col gap-4 lg:flex-row lg:gap-6">
          {menuItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-gray-700 hover:text-blue-600 font-medium"
                tabIndex={0}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Search + Cart (desktop: flex, mobile: absolute bottom) */}
      <div className="flex items-center gap-4">
        <input
          type="text"
          placeholder="Search"
          aria-label="Search"
          className="border rounded px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button aria-label="Cart" tabIndex={0} className="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.836l.383 1.437m0 0L7.5 15.75A2.25 2.25 0 009.664 18h4.672a2.25 2.25 0 002.164-2.25l1.394-10.477m-12.25 0h12.25"
            />
          </svg>
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1.5">
              {cartCount}
            </span>
          )}
        </button>
      </div>
    </header>
  );
};
