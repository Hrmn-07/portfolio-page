"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-gray-700/75 backdrop-blur-sm" : ""
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <ul className="flex justify-center space-x-8">
          <li>
            <Link
              href="#home"
              className="hover:text-blue-400 transition-colors font-bold text-white text-xl"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="#projects"
              className="hover:text-blue-400 transition-colors font-bold text-white text-xl"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="#skills"
              className="hover:text-blue-400 transition-colors font-bold text-white text-xl"
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              href="#contact"
              className="hover:text-blue-400 transition-colors font-bold text-white text-xl"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
