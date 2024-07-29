import React from 'react';
import Image from 'next/image';

const ImageFeature = () => (
  <section id="save" className="mb-12 max-w-full">
    <h3>Image</h3><br></br>

    <Image src="https://savepad.app/wp-content/uploads/Saves.png" alt="Save feature" width={700} height={400} layout="responsive" /><br></br>

    <p>Imagesssss</p><br></br>
  </section>
);

export default ImageFeature;
