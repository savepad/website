import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface CardProps {
  imageUrl?: string;
  imageAlt?: string;
  title: string;
  description: string;
  link?: string;
  singleColumn?: boolean;
  imageLeft?: boolean;
}

const Card: React.FC<CardProps> = ({ imageUrl, imageAlt, title, description, link, singleColumn, imageLeft }) => {
  return (
    <div className={`rounded-lg bg-gradient-to-br from-zinc-900 to-zinc-950 p-12 flex ${singleColumn ? 'flex-col md:flex-row' : 'flex-col'} ${singleColumn && imageLeft ? 'md:flex-row-reverse' : ''} min-h-[500px]`}>
      {imageUrl && imageAlt && (
        <div className={`w-full ${singleColumn ? 'md:w-1/2' : ''} flex justify-center`}>
          <div className="relative w-full h-full pb-[56.25%]">
            <Image
              src={imageUrl}
              alt={imageAlt}
              layout="fill"
              objectFit="contain"
              className="rounded-lg"
            />
          </div>
        </div>
      )}
      <div className={`flex flex-col justify-center mx-8 ${singleColumn && imageUrl ? 'md:w-1/2 md:pl-6' : 'mt-4'} ${!imageUrl ? 'h-full' : ''}`}>
        <div className="flex flex-col justify-center h-full">
          <h3 className="font-normal mb-4 mt-4">{title}</h3>
          <p className="mb-4">{description}</p>
          {link && (
            <Link href={link} className="text-violet-400 hover:text-white transition duration-300">
              Learn more →
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
