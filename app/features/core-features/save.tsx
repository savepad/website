import React from 'react';
import Image from 'next/image';

const SaveFeature = () => (
  <section id="save" className="mb-12 max-w-full">
    <h3>Save</h3><br></br>

    <Image src="https://savepad.app/wp-content/uploads/Saves.png" alt="Save feature" width={700} height={400} layout="responsive" /><br></br>

    <p>Saves are the core of working with Savepad.</p><br></br>

    <p>Growth teams often struggle with collaborating on references for all the millions of projects they’re shuffling in between themselves, especially when collaborating with design and development. Most references aren’t just simple URLs, but a mix of links, files, emails, messages, images, videos, animations, code, notes, and follow ups. Losing context between Slack, Notion, Figma, GitHub, and a myriad of other tools leads to growth teams having their swipe files all over the place, without all collaborators having up to date context on everything without recurring catchups.</p><br></br>

    <p>Savepad lets you save any possible format within structured spaces, collections, nested collections, and tags, all of which are explained in further detail below. With apps and extensions for web, mobile, desktop, and other platforms, Savepad ensures that you’re never feeling stumped when looking at improving or referencing your marketing examples.</p><br></br>

    <p>Furthermore, you can collaborate with others on these saves, or publish them as a public resource.</p><br></br>

    <video src="https://res.cloudinary.com/video/upload/v123456/save_feature.mp4" controls className="w-full mt-4"></video>
  </section>
);

export default SaveFeature;
