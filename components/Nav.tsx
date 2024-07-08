// components/Nav.tsx
"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes, FaArrowRight } from 'react-icons/fa';
import Image from 'next/image';

const Nav: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="fixed w-full top-0 z-50 bg-opacity-30 bg-zinc-950 backdrop-blur-lg">
      <div className="container mx-auto px-4 py-4 flex items-center">
        <div className="w-1/4">
          <Link href="/">
            <Image src="/logo.svg" alt="Logo" width={150} height={40} />
          </Link>
        </div>

        <div className="hidden md:flex w-1/2 justify-center space-x-8">
          <Link href="/use-cases" className="text-gray-100 hover:text-violet-700">
            Use Cases
          </Link>
          <Link href="/whos-it-for" className="text-gray-100 hover:text-violet-700">
            Personas
          </Link>
        </div>

        <div className="w-1/4 flex">
          <Link href="/signup" className="bg-violet-700 text-gray-100 px-4 py-2 rounded hover:bg-violet-900 flex items-center">
            <FaArrowRight className="mr-2" /> Join the waitlist
          </Link>
        </div>

        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-gray-100 focus:outline-none">
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-neutral-900 bg-opacity-90 backdrop-blur-lg fixed inset-0 z-40 flex flex-col items-center justify-center">
          <Link href="/" className="text-gray-100 text-2xl my-2" onClick={toggleMenu}>
            Home
          </Link>
          <Link href="/use-cases" className="text-gray-100 text-2xl my-2" onClick={toggleMenu}>
            Use Cases
          </Link>
          <Link href="/whos-it-for" className="text-gray-100 text-2xl my-2" onClick={toggleMenu}>
            Personas
          </Link>
          <Link href="/signup" className="bg-violet-700 text-gray-100 px-4 py-2 rounded mt-4 hover:bg-violet-900 flex items-center">
            <FaArrowRight className="mr-2" /> Join the waitlist
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Nav;