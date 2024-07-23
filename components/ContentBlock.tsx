import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaChevronRight } from 'react-icons/fa';

interface ContentBlockProps {
  imageUrl: string;
  imageAlt: string;
  heading: string;
  paragraphs: string[];
  buttonText?: string;
  buttonLink?: string;
  reverse?: boolean;
}

const ContentBlock: React.FC<ContentBlockProps> = ({ imageUrl, imageAlt, heading, paragraphs, buttonText, buttonLink, reverse }) => {
  return (
    <section className="relative w-full flex justify-center my-16 lg:my-16">
      <div className={`flex flex-col md:flex-row ${reverse ? 'md:flex-row-reverse' : ''} max-w-[1140px] w-full`}>
        <div className="w-full md:w-3/5 p-4 md:p-6">
          <Image
            src={imageUrl}
            alt={imageAlt}
            layout="responsive"
            width={700}
            height={700}
            className="w-full h-auto object-cover"
          />
        </div>

        <div className="w-full md:w-2/5 flex flex-col justify-center p-4 md:p-10">
          <h3 className="font-normal text-2xl md:text-4xl mb-4">{heading}</h3>
          {paragraphs.map((paragraph, index) => (
            <p key={index} className="mb-4">{paragraph}</p>
          ))}
          {buttonText && buttonLink && (
            <Link href={buttonLink} passHref legacyBehavior>
              <a className="mt-4 inline-flex justify-center items-center bg-violet-700 text-gray-100 px-4 py-2 rounded hover:bg-violet-800">
                {buttonText}
                <FaChevronRight className="h-5 w-5 ml-2" />
              </a>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContentBlock;
