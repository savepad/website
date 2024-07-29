import React from 'react';
import Image from 'next/image';

const CodeFeature = () => (
  <section id="code" className="mb-12 max-w-full">
    <h3>Code Snippets</h3><br></br>

    <Image src="https://savepad.app/wp-content/uploads/Search.png" alt="Save feature" width={1024} height={578} layout="responsive" /><br></br>

    <p>Regardless of what you add to Savepad — links, images, PDFs, code, components, or videos — Savepad automatically generates enough metadata to index all possible text related to that save.</p><br></br>

    <p>Need to surface those obscure landing pages you remember saving that were related to Product Marketing, were Developer Tools, and had a design that caught your attention? Stack all those criteria to make sure it was Auth0 you were looking for as a reference!</p><br></br>
  </section>
);

export default CodeFeature;
