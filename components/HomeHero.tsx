import React from 'react';
import Button from './Button';
import { FaArrowRight } from 'react-icons/fa';
import { FaPlay } from 'react-icons/fa';

const HomeHero: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center h-[90vh] text-center px-4">
      <div className="max-w-[625px] w-full">
        <p className="text-sm text-gray-300">Early Access 🪄</p>
        <h1 className="text-5xl md:text-6xl font-semibold font-outfit mt-2">
          Helping growth teams get their sh*t together.
        </h1>
        <p className="mt-4 text-base md:text-medium leading-loose">
          Savepad is the collaborative swipe file to store, organize, reference, share, and actually use all the resources and examples you have.
        </p>
        <div className="mt-8 flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4">
          <Button label="Create your free account" variant="primary" icon={FaArrowRight} href="/signup" />
          <Button label="Watch demos" variant="secondary" icon={FaPlay} href="/signup" />
        </div>
        <p className="mt-8 text-xs leading-relaxed text-gray-400">
          Join 250+ marketers and makers on our closed beta!
        </p>
      </div>
    </section>
  );
};

export default HomeHero;
