import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-950 text-gray-300">
      <div className="container mx-auto max-w-[1440px] px-4 py-12">
      <div className="mb-12 border-t border-gray-700 pt-4 flex justify-between items-center"></div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link href="/">
              <Image src="/logo.svg" alt="Savepad Logo" width={150} height={40} />
            </Link>
            <p className="mt-4">The collaborative Swipe File and Knowledge Base.</p>
            <ul className="mt-4">
              <li><Link href="https://app.savepad.dev/" className="text-gray-400 hover:text-violet-400">Create your free account</Link></li>
            </ul>
          </div>
          <div></div>
          <div>
          <h4 className="mb-2">Product</h4>
            <ul>
              <li><Link href="/features" className="text-gray-400 hover:text-violet-400">Features</Link></li>
              <li><Link href="/user-guides" className="text-gray-400 hover:text-violet-400">How to Savepad</Link></li>
              <li><Link href="/use-cases" className="text-gray-400 hover:text-violet-400">Use Cases</Link></li>
              <li><Link href="/personas" className="text-gray-400 hover:text-violet-400">Personas</Link></li>
              <li><Link href="/changelog" className="text-gray-400 hover:text-violet-400">Product Updates</Link></li>
            </ul>
            </div>
          
          <div>
            <h4 className="mb-2">Savepad</h4>
            <ul>
              <li><Link href="/about" className="text-gray-400 hover:text-violet-400">About</Link></li>
              <li><Link href="/blog" className="text-gray-400 hover:text-violet-400">Blog</Link></li>
              <li><Link href="/legal/privacy-policy" className="text-gray-400 hover:text-violet-400">Privacy Policy</Link></li>
              <li><Link href="/legal/terms" className="text-gray-400 hover:text-violet-400">Terms of Use</Link></li>
              <li><Link href="https://savepad.struct.ai/" className="text-gray-400 hover:text-violet-400">Support & Community</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-4 flex justify-between items-center">
          <p>&copy; 2024 - Present, Savepad, All Rights Reserved</p>
          <div className="flex space-x-4">
            <Link href="https://twitter.com/savepadapp" target="_blank">
              <FaTwitter className="text-gray-300 hover:text-gray-100" size={24} />
            </Link>
            <Link href="https://github.com/savepad/website" target="_blank">
              <FaGithub className="text-gray-300 hover:text-gray-100" size={24} />
            </Link>
            <Link href="https://linkedin.com/company/savepad" target="_blank">
              <FaLinkedin className="text-gray-300 hover:text-gray-100" size={24} />
            </Link>
            <Link href="https://savepad.struct.ai/" target="_blank">
              <Image src="/logos/Struct.svg" alt="Struct" width={24} height={24} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;