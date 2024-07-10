import React from 'react';
import Link from 'next/link';

interface CtaProps {
  title: string;
  paragraphs: string[];
  buttonText: string;
  buttonHref: string;
}

const Cta: React.FC<CtaProps> = ({ title, paragraphs, buttonText, buttonHref }) => {
  return (
    <section className="flex justify-center items-center min-h-[50vh] py-16">
      <div className="rounded-lg bg-gradient-to-br from-zinc-900 to-zinc-950 p-24 max-w-[1140px] w-full">
        <div className="flex flex-col justify-center max-w-[700px] mx-auto text-center">
          <h3 className="text-5xl font-normal mb-8 text-gray-100">{title}</h3>
          {paragraphs.map((paragraph, index) => (
            <p key={index} className="text-base leading-loose text-gray-100 mb-4">
              {paragraph}
            </p>
          ))}
          <Link href={buttonHref} passHref>
            <div className="px-6 my-2 inline-flex items-center justify-center rounded px-8 py-3 text-base font-semibold bg-violet-700 text-gray-100 hover:bg-violet-900 transition duration-300 cursor-pointer">
              {buttonText}
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Cta;
