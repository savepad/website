import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaTwitter, FaLinkedin, FaGithub, FaYoutube, FaDiscord } from 'react-icons/fa';

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
              <li><Link href="https://my.savepad.app/" className="text-gray-400 hover:text-violet-400">Create your free account</Link></li>
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
              <li><Link href="/roadmap" className="text-gray-400 hover:text-violet-400">Roadmap</Link></li>
              <li><Link href="/changelog" className="text-gray-400 hover:text-violet-400">Product Updates</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-2">Savepad</h4>
            <ul>
              <li><Link href="/about" className="text-gray-400 hover:text-violet-400">About</Link></li>
              <li><Link href="/blog" className="text-gray-400 hover:text-violet-400">Blog</Link></li>
              <li><Link href="/legal/imprint" className="text-gray-400 hover:text-violet-400">Imprint</Link></li>
              <li><Link href="/legal/privacy-policy" className="text-gray-400 hover:text-violet-400">Privacy & Cookies</Link></li>
              <li><Link href="https://discord.gg/PAV5PDVj98" className="text-gray-400 hover:text-violet-400">Support & Community</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-700 pt-4 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; 2024 - Present, Savepad, All Rights Reserved</p>

          <div className="flex space-x-4 mt-6">
              <Link href="https://twitter.com/savepadapp" target="_blank">
                <FaTwitter className="text-gray-300 hover:text-gray-100" size={24} />
              </Link>
              <Link href="https://linkedin.com/company/savepad" target="_blank">
                <FaLinkedin className="text-gray-300 hover:text-gray-100" size={24} />
              </Link>
              <Link href="https://www.youtube.com/@savepad" target="_blank">
                <FaYoutube className="text-gray-300 hover:text-gray-100" size={24} />
              </Link>
              <Link href="https://github.com/savepad/website" target="_blank">
                <FaGithub className="text-gray-300 hover:text-gray-100" size={24} />
              </Link>
              <Link href="https://discord.gg/PAV5PDVj98" target="_blank">
                <FaDiscord className="text-gray-300 hover:text-gray-100" size={24} />
              </Link>
            </div>

          {/* <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <span className="text-gray-400">By</span>
            <Link href="https://github.com/feychenie" target="_blank">
              <Image src="/avatars/fred.jpeg" alt="Fred" width={45} height={45} className="rounded-full" />
            </Link>
            <Link href="https://github.com/mahaveer0496" target="_blank">
              <Image src="/avatars/mahaveer.jpeg" alt="Mahaveer" width={45} height={45} className="rounded-full" />
            </Link>
            <span className="text-gray-400">&</span>
            <Link href="https://ronakganatra.com" target="_blank">
              <Image src="/avatars/ronak.jpeg" alt="Ronak" width={45} height={45} className="rounded-full" />
            </Link>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
