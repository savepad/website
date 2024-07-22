import React from 'react';
import Image from 'next/image';
import { FaQuoteLeft } from 'react-icons/fa';

const logos = [
  '/logos/Algolia.svg',
  '/logos/logo2.svg',
  '/logos/logo3.svg',
  '/logos/Sumup.svg',
  '/logos/Amazon.svg',
  '/logos/logo6.svg',
  '/logos/Prisma.svg',
  '/logos/logo8.svg',
];

const testimonials = [
  {
    text: "How has it taken so long to have a swipe file that's actually usable.",
    name: "Mark Rosh",
    title: "Founder of Ngma",
    avatar: '/avatars/avatar1.png'
  },
  {
    text: "Yo this shit is awesome! I don't even mind paying for it.",
    name: "Ameline Joy",
    title: "Founder of Ngma",
    avatar: '/avatars/avatar2.png'
  },
  {
    text: "I know the founder, he paid me to say this.",
    name: "Amanda Main",
    title: "Founder of Ngma",
    avatar: '/avatars/avatar3.png'
  }
];

const Wall: React.FC = () => {
  return (
    <div className="w-full flex flex-col items-center py-8">
      <p className="text-center text-gray-400 mb-8">Being actively tested and improved for you by 250+ incredible teams and people</p>
      <div className="w-full flex justify-center mb-12">
        <div className="grid grid-cols-2 md:grid-cols-8 gap-8 items-center max-w-[1140px]">
          {logos.map((logo, index) => (
            <div key={index} className="flex justify-center">
              <Image src={logo} alt={`Company logo ${index + 1}`} width={100} height={50} className="filter grayscale brightness-200 contrast-0" />
            </div>
          ))}
        </div>
      </div>
      <div className="max-w-[1140px] w-full px-4">
        <div className="hidden md:grid md:grid-cols-3 gap-6 auto-rows-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="rounded-lg bg-gradient-to-br from-zinc-900 to-zinc-950 p-6 flex flex-col mb-6">
              <FaQuoteLeft className="text-violet-600 text-2xl mb-4" />
              <p className="mb-6">{testimonial.text}</p>
              <div className="flex items-center">
                <Image src={testimonial.avatar} alt={testimonial.name} width={48} height={48} className="rounded-full" />
                <div className="ml-4">
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-gray-400">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="md:hidden flex overflow-x-auto space-x-4">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="flex-none rounded-lg bg-gradient-to-br from-zinc-900 to-zinc-950 p-6 min-w-[95vw]">
              <FaQuoteLeft className="text-violet-600 text-2xl mb-4" />
              <p className="mb-6">{testimonial.text}</p>
              <div className="flex items-center">
                <Image src={testimonial.avatar} alt={testimonial.name} width={48} height={48} className="rounded-full" />
                <div className="ml-4">
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-gray-400">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Wall;