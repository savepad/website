import React from 'react';
import Button from './Button';
import { IconType } from 'react-icons';

interface TitleProps {
  header?: string;
  texts?: string[];
  buttons?: { label: string; href: string; icon?: IconType; variant: 'primary' | 'secondary' }[];
}

const Title: React.FC<TitleProps> = ({ header, texts, buttons }) => {
  return (
    <section className="flex flex-col items-center justify-center h-[200px]">
    <div className="max-w-[600px] py-24 text-center">
      {header && <h2 className="text-3xl md:text-5xl font-normal mb-8">{header}</h2>}
      {texts && texts.map((text, index) => (
        <p key={index} className="mt-4">{text}</p>
      ))}
      {buttons && (
        <div className="mt-8 flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4">
          {buttons.map((button, index) => (
            <Button
              key={index}
              label={button.label}
              href={button.href}
              icon={button.icon}
              variant={button.variant}
            />
          ))}
        </div>
      )}
    </div>
    </section>
  );
};

export default Title;
