import React from 'react';
import Image from 'next/image';

const TaggingFeature = () => (
  <section id="tagging" className="mb-12 max-w-full">
    <h3>Tagging</h3><br></br>

    <Image src="https://savepad.app/wp-content/uploads/Tags.png" alt="Save feature" width={1024} height={578} layout="responsive" /><br></br>

    <p>Savepad lets you tag each save with any further context you see fit. Tags are a space-wide feature for you to quickly find what you’re looking for and to create custom filtered views.</p><br></br>

    <p>It’s possible that you have #Dark-Mode as a tag that’s relevant to landing pages and to ads, in this case rather than being messy with tons of collections, just tag multiple saves in multiple spaces with a common tag, making it easy for you to find later. In tihs example, #Testimonials would likely surface a combination of Tweets, Landing Pages, and Videos from multiple collections and spaces you have in your Team account.</p><br></br>
  </section>
);

export default TaggingFeature;
