import React from 'react';
import Image from 'next/image';

const HomeProblem: React.FC = () => {
  const imageUrl = 'https://res.cloudinary.com/savepad-web/image/upload/v1715850642/Landing%20Pages/Homepage/Managing_References_is_a_pain_bxms5l.png';

  return (
    <section className="relative w-full flex justify-center my-16 lg:my-32 hidden md:flex">
      <div className="relative w-full max-w-[1920px]">
        <Image
          src={imageUrl}
          alt="Managing References is a Pain"
          layout="responsive"
          width={1920}
          height={1095}
          className="w-full"
        />
        
        <div
        className="absolute inset-0"
        style={{
        background:
        "radial-gradient(circle at center, rgba(12, 12, 12, 0.6) 0%, rgba(12, 12, 12, 0) 100%)",
        }}
        ></div>
        
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="max-w-[900px] mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="font-epilogue text-6xl text-white leading-tight">
              Managing references as a team is a f*ing pain!
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeProblem;
