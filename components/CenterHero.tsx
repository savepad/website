import React from 'react';
import Button from './Button';

interface CenterHeroProps {
  tagline: string;
  heading: string;
  description: string;
  buttonLabel?: string;
  buttonHref?: string;
  buttonVariant?: 'primary' | 'secondary';
}

const CenterHero: React.FC<CenterHeroProps> = ({ tagline, heading, description, buttonLabel, buttonHref, buttonVariant }) => {
  return (
    <section className="flex flex-col items-center justify-center h-[60vh] text-center px-4 max-w-[1140px] mx-auto">
      <div className="max-w-[700px] w-full">
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
    </section>
  );
};

export default CenterHero;