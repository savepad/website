import React from 'react';
import Image from 'next/image';
import { FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.",
    name: "Mark Rosh",
    title: "Founder of Ngma",
    avatar: "https://via.placeholder.com/48"
  },
  {
    text: "Vestibulum placerat diam aliquet elit hendrerit lacinia. Ut quam orci, porttitor et nunc non.",
    name: "Ameline Joy",
    title: "Founder of Ngma",
    avatar: "https://via.placeholder.com/48"
  },
  {
    text: "Mauris id tortor non leo aliquet mattis. Nulla facilisi.",
    name: "Amanda Main",
    title: "Founder of Ngma",
    avatar: "https://via.placeholder.com/48"
  },
  {
    text: "Curabitur laoreet, nulla malesuada venenatis condimentum, nisl eros bibendum elit.",
    name: "Steven Rosh",
    title: "Founder of Ngma",
    avatar: "https://via.placeholder.com/48"
  }
];

const Wall: React.FC = () => {
  return (
    <div className="w-full flex justify-center py-8">
      <div className="max-w-[1140px] w-full px-4">
        <div className="hidden md:grid md:grid-cols-1 lg:grid-cols-3 gap-6 auto-rows-auto">
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
            <div key={index} className="flex-none rounded-lg bg-gradient-to-br from-zinc-900 to-zinc-950 p-6 min-w-[300px]">
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