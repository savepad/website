import React from 'react';
import Image from 'next/image';

const HomeSplash: React.FC = () => {
  const imageUrl = 'https://res.cloudinary.com/savepad-web/image/upload/v1715850636/Landing%20Pages/Homepage/Savepad_Hero_tnbqfd.png';

  return (
    <div className="relative hidden md:flex justify-center w-full">
      <div className="w-[90vw]">
        <Image
          src={imageUrl}
          alt="Savepad UI"
          layout="responsive"
          width={2160}
          height={1440}
          quality={90}
          className="w-full h-auto"
        />
      </div>
    </div>
  );
};

export default HomeSplash;
