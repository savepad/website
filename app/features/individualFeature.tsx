import React from 'react';
import Image from 'next/image';

const SaveFeature = () => (

//  id is for TOC 
  <section id="save" className="mb-12 max-w-full">
    <h3>Save</h3><br></br>

{/* Image from Cloudinary */}
    <Image src="https://savepad.app/wp-content/uploads/Saves.png" alt="Save feature" width={700} height={400} layout="responsive" /><br></br>

    <p>Normal Content.</p><br></br>

{/* Video via URL (Whitelist new domains) */}
    <video src="https://res.cloudinary.com/video/upload/v123456/save_feature.mp4" controls className="w-full mt-4"></video>
  </section>
);

export default SaveFeature;
