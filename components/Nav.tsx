"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes, FaArrowRight } from 'react-icons/fa';
import Image from 'next/image';
import Button from './Button';
import ButtonRound from './ButtonRound';

const Nav: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="fixed w-full top-5 z-50">
      <div className="hidden max-w-content md:flex items-center justify-between mx-auto px-8 py-4 backdrop-blur-lg bg-[rgba(18,18,18,0.5)] text-gray-200 rounded-full shadow-lg">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/">
            <Image src="/logo.svg" alt="Logo" width={150} height={40} />
          </Link>
        </div>

        {/* WEB Navigation Links */}
        <div className="flex justify-center space-x-8">
          <Link href="/features" className="text-gray-100 hover:text-violet-400">
            Features
          </Link>
          <Link href="/user-guides" className="text-gray-100 hover:text-violet-400">
            User Guides
          </Link>
          <Link href="/use-cases" className="text-gray-100 hover:text-violet-400">
            Use Cases
          </Link>
          <Link href="/personas" className="text-gray-100 hover:text-violet-400">
            Personas
          </Link>
        </div>

        {/* WEB Button */}
        <div className="flex justify-end">
          <ButtonRound
            label="Launch app"
            variant="primary"
            href="https://my.savepad.app/"
            icon={FaArrowRight}
          />
        </div>
      </div>

      {/* MOBILE Navigation */}
      <div className="md:hidden w-full bg-opacity-70 bg-zinc-950 backdrop-blur-md">
        <div className="container mx-auto max-w-[1440px] px-4 py-4 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/">
              <Image src="/logo.svg" alt="Logo" width={120} height={40} />
            </Link>
          </div>

          {/* Hamburger Menu */}
          <button
            onClick={toggleMenu}
            className="text-gray-100 bg-zinc-950 focus:outline-none"
          >
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {menuOpen && (
          <div className="h-screen items-center text-center bg-zinc-950 fixed inset-0 z-40 flex flex-col justify-between pt-4">
            <div className="flex justify-between items-center bg-zinc-950 w-full pb-8 px-4">
              <Link href="/">
                <Image src="/logo.svg" alt="Logo" width={120} height={40} />
              </Link>
              <button
                onClick={toggleMenu}
                className="text-gray-100 bg-zinc-950 focus:outline-none"
              >
                <FaTimes size={24} className="bg-zinc-950" />
              </button>
            </div>

            {/* Mobile Links */}
            <div className="flex flex-col">
              <Link
                href="/features"
                className="text-gray-100 text-xl my-4"
                onClick={toggleMenu}
              >
                Features
              </Link>
              <Link
                href="/user-guides"
                className="text-gray-100 text-xl my-4"
                onClick={toggleMenu}
              >
                User Guides
              </Link>
              <Link
                href="/use-cases"
                className="text-gray-100 text-xl my-4"
                onClick={toggleMenu}
              >
                What it&apos;s for
              </Link>
              <Link
                href="/personas"
                className="text-gray-100 text-xl my-4"
                onClick={toggleMenu}
              >
                Who it&apos;s for
              </Link>
            </div>

            {/* Mobile Call-to-Action Button */}
            <div className="mt-0 pt-2 p-2 h-[30vh] w-full items-center justify-center flex bg-zinc-950">
              <Button
                label="Create your free account"
                variant="primary"
                href="https://my.savepad.app/"
                icon={FaArrowRight}
              />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;
