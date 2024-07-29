import React from 'react';
import Image from 'next/image';

const WorkspacesFeature = () => (
  <section id="workspaces" className="mb-12 max-w-full">
    <h3>Workspaces</h3><br></br>

    <Image src="https://savepad.app/wp-content/uploads/Spaces.png" alt="feature" width={1024} height={578} layout="responsive" /><br></br>

    <p>Your Savepad account is primarily broken down into spaces. Whether you need one for personal use, work, side projects, or anything else. By default, you have unlimited spaces in your personal account. If you’re collaborating with others and have multiple team accounts, each account has their own spaces. It’s worth noting that individual saves can exist in multiple spaces.</p><br></br>

    <p>As a suggestion, let’s assume you’re a marketer working in SaaS, and you have a shared account with your team. It’s likely that you’ll have multiple spaces for different aspects of your work, such as Banner Ideas, Product Marketing, and Ads. These are “high level” categories for what you’d use Savepad for, with further granularity within each space.</p><br></br>
  </section>
);

export default WorkspacesFeature;
