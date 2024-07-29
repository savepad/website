import React from 'react';
import Image from 'next/image';

const SharingFeature = () => (
  <section id="tagging" className="mb-12 max-w-full">
    <h3>Sharing</h3><br></br>

    <Image src="https://savepad.app/wp-content/uploads/Sharing.png" alt="Save feature" width={1024} height={578} layout="responsive" /><br></br>

    <p>By default, your first account on Savepad is a personal one. Personal accounts on Savepad ensure that all spaces, collections, and saves are private by default, visible only to you. Any other accounts you create can be kept personal too, or shared with collaborators or with the public.</p><br></br>

    <p>If you’d like to change this, you can invite collaborators to teams, and establish which collaborators have which levels of access to different accounts, spaces, and collections.</p><br></br>

    <p>If you’d like to share some spaces or collections with the world, you also have the option to publish your spaces and collections as public. Pretty nifty for having a public portfolio of all your past work or just to flex your curated resources for other marketers!</p><br></br>
  </section>
);

export default SharingFeature;
