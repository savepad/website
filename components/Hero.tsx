import React from 'react';
import Image from 'next/image';
import Button from './Button';

interface HeroProps {
  tagline: string;
  heading: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  buttonLabel?: string;
  buttonHref?: string;
  buttonVariant?: 'primary' | 'secondary';
}

const Hero: React.FC<HeroProps> = ({ tagline, heading, description, imageUrl, imageAlt, buttonLabel, buttonHref, buttonVariant }) => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center h-[90vh] text-left px-4 max-w-[1140px] mx-auto">
      <div className="md:w-1/2 w-full mb-8 md:mb-0">
        <p className="text-sm text-gray-300">{tagline}</p>
        <h1 className="text-4xl md:text-5xl font-normal font-outfit my-6">
          {heading}
        </h1>
        <p className="mt-4 text-normal md:text-normal leading-loose">
          {description}
        </p>
        {buttonLabel && buttonHref && (
          <div className="mt-8">
            <Button label={buttonLabel} variant={buttonVariant || 'primary'} href={buttonHref} />
          </div>
        )}
      </div>
      <div className="md:w-1/2 w-full flex justify-center">
        <Image
          src={imageUrl}
          alt={imageAlt}
          width={700}
          height={700}
          quality={90}
          className="rounded-lg"
        />
      </div>
    </section>
  );
};

export default Hero;
