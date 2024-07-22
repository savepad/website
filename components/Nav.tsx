"use client";

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes, FaArrowRight } from 'react-icons/fa';
import Image from 'next/image';
import Button from './Button';
import ContextMenu from './ContextMenu';

const Nav: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [contextMenuVisible, setContextMenuVisible] = useState(false);
  const [contextMenuPosition, setContextMenuPosition] = useState({ x: 0, y: 0 });

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleContextMenu = (event: React.MouseEvent) => {
    event.preventDefault();
    setContextMenuPosition({ x: event.clientX, y: event.clientY });
    setContextMenuVisible(true);
  };

  const handleCloseContextMenu = () => {
    setContextMenuVisible(false);
  };

  const handleOpenImage = () => {
    window.open('/logo.svg', '_blank');
    handleCloseContextMenu();
  };

  const handleDownloadImage = () => {
    const link = document.createElement('a');
    link.href = '/logo.svg';
    link.download = 'logo.svg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    handleCloseContextMenu();
  };

  return (
    <nav className="fixed w-full top-0 z-50 bg-opacity-70 bg-zinc-950 backdrop-blur-lg">
      <div className="container mx-auto max-w-[1440px] px-4 py-4 flex justify-between items-center">
        <div className="flex items-center w-1/4" onContextMenu={handleContextMenu}>
          <Link href="/">
            <Image src="/logo.svg" alt="Logo" width={150} height={40} />
          </Link>
        </div>

        <div className="hidden md:flex justify-center space-x-8 w-1/2">
          <Link href="/use-cases" className="text-gray-100 hover:text-violet-700">
            Use Cases
          </Link>
          <Link href="/personas" className="text-gray-100 hover:text-violet-700">
            Personas
          </Link>
        </div>

        <div className="hidden md:flex w-1/4">
          <Button label="Launch app" variant="primary" href="/signup" icon={FaArrowRight} />
        </div>

        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-gray-100 focus:outline-none">
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-zinc-950 bg-opacity-90 backdrop-blur-lg fixed inset-0 z-40 flex flex-col items-center justify-center pt-20">
          <Link href="/" className="text-gray-100 text-2xl my-2" onClick={toggleMenu}>
            Home
          </Link>
          <Link href="/use-cases" className="text-gray-100 text-2xl my-2" onClick={toggleMenu}>
            Use Cases
          </Link>
          <Link href="/personas" className="text-gray-100 text-2xl my-2" onClick={toggleMenu}>
            Personas
          </Link>
          <div className="fixed bottom-0 w-full px-4 py-4">
            <Button label="Join the waitlist" variant="primary" href="/signup" icon={FaArrowRight} />
          </div>
        </div>
      )}

      <ContextMenu
        visible={contextMenuVisible}
        x={contextMenuPosition.x}
        y={contextMenuPosition.y}
        onClose={handleCloseContextMenu}
        onOpenImage={handleOpenImage}
        onDownloadImage={handleDownloadImage}
      />
    </nav>
  );
};

export default Nav;