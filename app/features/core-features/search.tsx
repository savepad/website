import React from 'react';
import Image from 'next/image';
import Banner from '@/components/Banner';

const SearchFeature = () => (
  <section id="search" className="mb-12 max-w-full">
    <h3>Full-text Search</h3><br></br>

    <div>
      <Banner
        variant="btw"
        title=""
        message="Currently works for scraped info and manually added context. More automations under development."
      />
    </div>


    <p>Regardless of what you add to Savepad — links, images, PDFs, code, components, or videos — Savepad automatically generates enough metadata to index all possible text related to that save.</p><br></br>

    <p>Need to surface those obscure landing pages you remember saving that were related to Product Marketing, were Developer Tools, and had a design that caught your attention? A simple text search should help you find it!</p><br></br>
  </section>
);

export default SearchFeature;
