import React from 'react';
import Image from 'next/image';

const Changelog1: React.FC = () => {
  return (
    <article id="01" className="mb-12">
      <h2 className="text-3xl font-medium text-gray-100 mb-2">Release Title</h2>
      <p className="text-sm text-gray-400">January 1, 2024</p>
      <div className="relative max-w-3xl my-4">
        <Image
          src="https://placehold.co/600x400"
          alt="Savepad Launch"
          width={1280}
          height={720}
          className="rounded-lg"
          priority
        />
      </div>
      <h3 className="text-xl font-semibold text-gray-100 mt-6 mb-3">💎 What&apos;s New</h3>
      <p>description of things</p>
      <h3 className="text-xl font-semibold text-gray-100 mt-12 mb-3">🛠️ Improvements and Fixes</h3>
      <p>description of things</p>
    </article>
  );
};

export default Changelog1;
