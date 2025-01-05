import React from 'react';
import Image from 'next/image';

const Changelog1: React.FC = () => {
  return (
    <article id="01" className="mb-12">
      <h2 className="text-3xl font-medium text-gray-100 mb-2">Savepad is live in Beta 🎉</h2>
      <p className="text-sm text-gray-400">January 07, 2025</p>
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
      <h3 className="text-gray-100 mt-6 mb-6">💎 What&apos;s New</h3>
      <p>We&apos;ve officially launched Savepad to the waitlist users to gather feedback as we prepare for the public release.</p><br></br>
<p>This version includes a fully-functional MVP that covers all the core features of Savepad:</p><br></br>
<ul className='leading-loose'>
<li>📧 Creating personal and team accounts and workspaces, along with inviting other users into your team.</li>
<li>🔖 Creating collections in your workspaces for easy organization, along with tags for your saves.</li>
<li>💾 Creating saves for URLs, images, videos, audio files, documents, PDFs, notes, code, and more.</li>
<li>🪄 Auto enhancements to add  metadata to URLs.</li>
<li>📦 A backlog to serve as a dumping ground for unorganized saves.</li>
<li>🖱️ A web-app with more apps on the way.</li>
<li>👀 Custom views for grid and lists.</li>
<li>🔤 Custom sorting alphabetically or chronologically, as well as filters by save type, collections, and tags.</li>
<li>🔍 Workspace-wide search to find saves in a pinch.</li>
</ul><br></br>
<p>We&apos;ve also published our&nbsp;<a href="/roadmap">roadmap</a> to keep an eye on what we&apos;ll be working on. If you have feature requests you can submit them via the feedback form in the app.</p><br></br>
<p>We&apos;ve also published some <a href="/user-guides">user guides</a> to DIY your onboarding onto the app in a simple and digestable format.</p><br></br>
    </article>
  );
};

export default Changelog1;
