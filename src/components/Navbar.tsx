"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-black bg-opacity-80 backdrop-blur-lg shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3">
          <Image src="/logo.png" alt="Crypto Kombat" width={50} height={50} />
          <span className="text-white text-2xl font-bold">Crypto Kombat</span>
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white text-2xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✖" : "☰"}
        </button>

        {/* Desktop & Mobile Menu */}
        <div className={`lg:flex ${isOpen ? "block" : "hidden"} flex-col lg:flex-row absolute lg:static top-16 left-0 w-full lg:w-auto bg-black lg:bg-transparent lg:space-x-6 p-4 lg:p-0 shadow-lg lg:shadow-none`}>
          <Link href="/" className="block text-white hover:text-yellow-500 text-lg py-2 px-4 lg:p-0">
            Home
          </Link>
          <Link href="/leaderboard" className="block text-white hover:text-yellow-500 text-lg py-2 px-4 lg:p-0">
            Leaderboards
          </Link>
          <Link href="/tokenomics" className="block text-white hover:text-yellow-500 text-lg py-2 px-4 lg:p-0">
            Tokenomics
          </Link>
          <Link href="/about" className="block text-white hover:text-yellow-500 text-lg py-2 px-4 lg:p-0">
            About
          </Link>
        </div>
      </div>
    </nav>
  );
}
