import React from 'react';
import Card from './Card';

interface CardGridProps {
  cards: {
    imageUrl?: string;
    imageAlt?: string;
    title: string;
    description: string;
    link?: string;
  }[];
  columns: 1 | 2 | 3;
}

const CardGrid: React.FC<CardGridProps> = ({ cards, columns }) => {
  const gridClass =
    columns === 1
      ? 'sm:grid-cols-1'
      : columns === 2
      ? 'sm:grid-cols-1 md:grid-cols-2'
      : 'sm:grid-cols-1 md:grid-cols-3';

  return (
    <section className="relative w-full flex justify-center my-8 lg:my-8">
      <div className={`grid ${gridClass} gap-6 max-w-[1140px]`}>
        {cards.map((card, index) => (
          <Card
            key={index}
            imageUrl={card.imageUrl}
            imageAlt={card.imageAlt}
            title={card.title}
            description={card.description}
            link={card.link}
            singleColumn={columns === 1}
            imageLeft={index % 2 === 0}
          />
        ))}
      </div>
    </section>
  );
};

export default CardGrid;