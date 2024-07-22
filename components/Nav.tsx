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

  const menuItems = [
    {
      title: 'Use Cases',
      links: [
        { href: '/use-cases/swipe-file', text: 'Collaborative Swipe File' },
        { href: '/use-cases/knowledge-base', text: 'Knowledge Base' },
        { href: '/use-cases/bookmark-manager', text: 'Shared Bookmark Manager' },
      ],
    },
    {
      title: 'Savepad For',
      links: [
        { href: '/personas/growth-teams', text: 'Growth Teams' },
        { href: '/personas/designers', text: 'Creatives & Designers' },
        { href: '/personas/developers', text: 'Developers' },
        { href: '/personas/online-communities', text: 'Online Community Owners' },
        { href: '/personas/you', text: 'Individuals' },
      ],
    },
    {
      title: 'Product',
      links: [
        { href: '/blog/what-is-a-swipe-file', text: 'What is a Swipe File?' },
        { href: '/features', text: 'Features' },
        { href: '/guides', text: 'User Guides' },
        { href: '/changelog', text: 'Product Updates' },
        { href: '/roadmap', text: 'Roadmap' },
      ],
    },
    {
      title: 'Savepad',
      links: [
        { href: '/about', text: 'About' },
        { href: '/blog', text: 'Blog' },
        { href: 'https://savepad.struct.ai/', text: 'Support & Community' },
      ],
    },
  ];

  return (
    <nav className="fixed w-full top-0 z-50 bg-opacity-70 bg-zinc-950 backdrop-blur-lg">
      <div className="container mx-auto max-w-[1440px] px-4 py-4 flex justify-between items-center">
        <div className="flex items-center w-1/4">
          <Link href="/">
            <Image src="/logo.svg" alt="Logo" width={150} height={40} />
          </Link>
        </div>

        <div className="hidden md:flex justify-center space-x-8 w-1/2">
          {menuItems.map((item, index) => (
            <div key={index} className="relative group">
              <Link href="#" className="text-gray-100 hover:text-violet-700">
                {item.title}
              </Link>
              <div className="absolute left-0 hidden mt-2 w-48 bg-zinc-950 bg-opacity-90 backdrop-blur-lg rounded-lg shadow-lg group-hover:block">
                {item.links.map((link, linkIndex) => (
                  <Link
                    key={linkIndex}
                    href={link.href}
                    className="block px-4 py-2 text-gray-100 hover:text-violet-700"
                  >
                    {link.text}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="hidden md:flex w-1/4 justify-end">
          <Button label="Launch app" variant="primary" href="/signup" icon={FaArrowRight} />
        </div>

        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-gray-100 bg-zinc-950 focus:outline-none">
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-zinc-950 fixed inset-0 z-40 flex flex-col justify-between pt-4 px-4">
          <div className="flex justify-between items-center bg-zinc-950 w-full pb-8">
            <Link href="/">
              <Image src="/logo.svg" alt="Logo" width={100} height={40} />
            </Link>
            <button onClick={toggleMenu} className="text-gray-100 bg-zinc-950 focus:outline-none">
              <FaTimes size={24} className="bg-zinc-950" />
            </button>
          </div>
          <div className="flex bg-zinc-950 flex-col space-y-4">
            {menuItems.map((item, index) => (
              <div key={index} className="w-full">
                <Link href="#" className="text-gray-100 text-lg my-2">
                  {item.title}
                </Link>
                <ul className="pt-2">
                  {item.links.map((link, linkIndex) => (
                    <li key={linkIndex} className="mb-2">
                      <Link
                        href={link.href}
                        className="text-gray-400 hover:text-violet-400"
                        onClick={toggleMenu}
                      >
                        {link.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-10 w-full items-center justify-center flex bg-violet-700">
            <Button label="Join the waitlist" variant="primary" href="/signup" icon={FaArrowRight} />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;
