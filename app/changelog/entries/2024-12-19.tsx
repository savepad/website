import React from 'react';
import Image from 'next/image';

const Changelog1: React.FC = () => {
  return (
    <article id="01" className="mb-12">
      <h2 className="text-3xl font-medium text-gray-100 mb-2">Savepad is in closed beta 🎉</h2>
      <p className="text-sm text-gray-400">December 19, 2024</p>
      <div className="relative max-w-3xl my-12">
        <Image
          src="/images/changelog/001.png"
          alt="Savepad Launch"
          width={1280}
          height={720}
          className="rounded-lg"
          priority
        />
      </div>
      <h3 className="text-xl font-semibold text-gray-100 mt-6 mb-3">💎 What&apos;s New</h3>
      <p>We&apos;ve officially launched Savepad to the first wave of waitlist users to gather feedback as we prepare for the public beta release.</p>

<p>This version includes full support for workspaces, teams, saves, tags, and collections.</p>
    </article>
  );
};

export default Changelog1;
