"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes, FaArrowRight } from 'react-icons/fa';
import Image from 'next/image';
import Button from './Button';

const Nav: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="fixed w-full top-0 z-50 bg-opacity-70 bg-zinc-950 backdrop-blur-md">
      <div className="container mx-auto max-w-[1440px] px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center w-1/4">
          <Link href="/">
            <Image src="/logo.svg" alt="Logo" width={150} height={40} />
          </Link>
        </div>

        {/* WEB STUFF ONLY */}
        <div className="hidden md:flex justify-center space-x-8 w-1/2">
          <Link href="/features" className="text-gray-100 hover:text-violet-400">
            Features
          </Link>
          <Link href="/user-guides" className="text-gray-100 hover:text-violet-400">
            User Guides
          </Link>
          <Link href="/use-cases" className="text-gray-100 hover:text-violet-400">
            What it&apos;s for
          </Link>
          <Link href="/personas" className="text-gray-100 hover:text-violet-400">
            Who it&apos;s for
          </Link>
        </div>

        
        <div className="hidden md:flex w-1/4 justify-end">
          <Button label="Launch app" variant="primary" href="https://app.savepad.dev/" icon={FaArrowRight} />
        </div>

        
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-gray-100 bg-zinc-950 focus:outline-none">
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* MOBILE STUFF ONLY */}
      {menuOpen && (
        <div className="md:hidden h-screen items-center text-center bg-zinc-950 fixed inset-0 z-40 flex flex-col justify-between pt-4">
          <div className="flex justify-between items-center bg-zinc-950 w-full pb-8 px-4">
            <Link href="/">
              <Image src="/logo.svg" alt="Logo" width={100} height={40} />
            </Link>
            <button onClick={toggleMenu} className="text-gray-100 bg-zinc-950 focus:outline-none">
              <FaTimes size={24} className="bg-zinc-950" />
            </button>
          </div>

        
          <div className="flex bg-zinc-950 flex-col">
            <Link href="/features" className="text-gray-100 text-xl my-4" onClick={toggleMenu}>
              Features
            </Link>
            <Link href="/user-guides" className="text-gray-100 text-xl my-4" onClick={toggleMenu}>
              User Guides
            </Link>
            <Link href="/use-cases" className="text-gray-100 text-xl my-4" onClick={toggleMenu}>
            What it&apos;s for
            </Link>
            <Link href="/personas" className="text-gray-100 text-xl my-4" onClick={toggleMenu}>
            Who it&apos;s for
            </Link>
          </div>

          
          <div className="mt-0 pt-2 p-2 h-[30vh] w-full items-center justify-center flex bg-zinc-950">
            <Button label="Create your free account" variant="primary" href="https://app.savepad.dev/" icon={FaArrowRight} />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;
