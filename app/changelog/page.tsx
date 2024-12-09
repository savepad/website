"use client";

import React, { useState, useEffect } from 'react';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import CenterHero from '@/components/CenterHero';

import Changelog1 from './entries/2024-01-01';

const changelogEntries = [
  { id: '01', title: 'YEAR, Month, Day', component: <Changelog1 /> },
];

export default function ChangelogPage() {
  const [activeEntry, setActiveEntry] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      let currentEntry = '';
      changelogEntries.forEach(({ id }) => {
        const element = document.getElementById(id);
        if (element && element.offsetTop <= scrollPosition) {
          currentEntry = id;
        }
      });
      setActiveEntry(currentEntry);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main>
      <Nav />
      <CenterHero
        tagline="🐙 Changelog"
        heading="Product Updates"
        description="Check out our latest updates and improvements to Savepad."
      />
      <div className="relative flex max-w-content mx-auto px-4">

        <aside className="hidden lg:block w-1/4 sticky top-24 h-screen pr-8">
          <nav className="space-y-4">
            <p>Releases</p>
            {changelogEntries.map(({ id, title }) => (
              <a
                key={id}
                href={`#${id}`}
                className={`block text-sm ${
                  activeEntry === id ? 'text-violet-500' : 'text-gray-400'
                } hover:text-violet-400`}
              >
                {title}
              </a>
            ))}
          </nav>
        </aside>

        <section className="flex-1 space-y-12">
          {changelogEntries.map(({ id, component }, index) => (
            <div key={id} id={id}>
              {component}
              {index < changelogEntries.length - 1 && (
                <hr className="border-t border-gray-700 my-8" />
              )}
            </div>
          ))}
        </section>
      </div>
      <Footer />
    </main>
  );
}
