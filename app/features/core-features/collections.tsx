import React from 'react';
import Image from 'next/image';

const CollectionsFeature = () => (
  <section id="collections" className="mb-12 max-w-full">
    <h3>Collections</h3><br></br>

    <Image src="https://savepad.app/wp-content/uploads/Collections.png" alt="Save feature" width={1024} height={578} layout="responsive" /><br></br>

    <p>Collections are for you to structure your spaces with multiple saves that share similar context.</p><br></br>

    <p>If you’ve got a space for Ads, it’s likely you’d want to further categorize that dump into something more understandable to you and your team, for instance, Competitor Search Ads, Display Ad Ideas, and YouTube Ad Examples. All of these can be a blend of text, screenshots, videos, audio recordings, whatever — there’s no restrictions on what you can save into your collections. Make them as vague or granular as you’d like, depending on how organized a person you are!</p><br></br>
  </section>
);

export default CollectionsFeature;
