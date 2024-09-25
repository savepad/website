import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaTwitter, FaLinkedin } from 'react-icons/fa';

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
            <ul>
              <li><Link href="https://app.savepad.dev/" className="text-gray-400 hover:text-violet-400">Create your free account</Link></li>
            </ul>
          </div>
          <div></div>
          <div>
            <h4 className="mb-2">Use Cases</h4>
            <ul>
              <li><Link href="/use-cases/swipe-file" className="text-gray-400 hover:text-violet-400">Collaborative Swipe File</Link></li>
              <li><Link href="/use-cases/knowledge-base" className="text-gray-400 hover:text-violet-400">Knowledge Base</Link></li>
              <li><Link href="/use-cases/bookmark-manager" className="text-gray-400 hover:text-violet-400">Shared Bookmark Manager</Link></li>
            </ul>
            <h4 className="mb-2 mt-8">Savepad For</h4>
            <ul>
              <li><Link href="/personas/growth-teams" className="text-gray-400 hover:text-violet-400">Growth Teams</Link></li>
              <li><Link href="/personas/designers" className="text-gray-400 hover:text-violet-400">Creatives & Designers</Link></li>
              <li><Link href="/personas/developers" className="text-gray-400 hover:text-violet-400">Developers</Link></li>
              <li><Link href="/personas/agencies" className="text-gray-400 hover:text-violet-400">Agencies</Link></li>
              <li><Link href="/personas/online-communities" className="text-gray-400 hover:text-violet-400">Online Community Owners</Link></li>
              <li><Link href="/personas/you" className="text-gray-400 hover:text-violet-400">Individuals</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="mb-2">Product</h4>
            <ul>
              <li><Link href="/blog/what-is-a-swipe-file" className="text-gray-400 hover:text-violet-400">What is a Swipe File?</Link></li>
              <li><Link href="/features" className="text-gray-400 hover:text-violet-400">Features</Link></li>
              <li><Link href="/guides" className="text-gray-400 hover:text-violet-400">User Guides</Link></li>
              <li><Link href="/changelog" className="text-gray-400 hover:text-violet-400">Product Updates</Link></li>
              <li><Link href="/roadmap" className="text-gray-400 hover:text-violet-400">Roadmap</Link></li>
              <li><Link href="/no-ai" className="text-gray-400 hover:text-violet-400">No AI</Link></li>
            </ul>
            <h4 className="mb-2 mt-8">Savepad</h4>
            <ul>
              <li><Link href="/about" className="text-gray-400 hover:text-violet-400">About</Link></li>
              <li><Link href="/blog" className="text-gray-400 hover:text-violet-400">Blog</Link></li>
              <li><Link href="/legal/privacy-policy" className="text-gray-400 hover:text-violet-400">Privacy Policy</Link></li>
              <li><Link href="/legal/terms" className="text-gray-400 hover:text-violet-400">Terms of Use</Link></li>
              <li><Link href="/legal/security" className="text-gray-400 hover:text-violet-400">Security & Compliance</Link></li>
              <li><Link href="/legal/cookie-policy" className="text-gray-400 hover:text-violet-400">Cookie Policy</Link></li>
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