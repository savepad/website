import React from 'react';
import CenterHero from '@/components/CenterHero';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import RoadmapCard from '@/components/RoadmapCard';

const roadmapData = {
  ideas: [
    {
      title: 'Feature Name',
      description: 'Feature description in a few words.',
      pills: ['Pill 1', 'Pill 2'],
    },
  ],
  planning: [
    {
        title: 'Feature Name',
        description: 'Feature description in a few words.',
        pills: ['Pill 1', 'Pill 2'],
      },
  ],
  inProgress: [
    {
        title: 'Feature Name',
        description: 'Feature description in a few words.',
        pills: ['Pill 1', 'Pill 2'],
      },
  ],
  done: [
    {
        title: 'Feature Name',
        description: 'Feature description in a few words.',
        pills: ['Pill 1', 'Pill 2'],
        url: 'https://example.com/performance-improvements',
      },
      {
        title: 'Feature Name',
        description: 'Feature description in a few words.',
        pills: ['Pill 1', 'Pill 2'],
        url: 'https://example.com/performance-improvements',
      },
      {
        title: 'Feature Name',
        description: 'Feature description in a few words.',
        pills: ['Pill 1', 'Pill 2'],
        url: 'https://example.com/performance-improvements',
      },
  ],
};

export default function RoadmapPage() {
    const formatStageTitle = (stage: string) =>
      stage.replace(/([A-Z])/g, ' $1').replace(/^\w/, (c) => c.toUpperCase());
  
    const stageColors = {
      ideas: 'bg-sky-500',
      planning: 'bg-rose-500',
      inProgress: 'bg-amber-500',
      done: 'bg-emerald-500',
    };
  
    return (
      <main>
        <Nav />
        <CenterHero
          tagline="🚧 Roadmap"
          heading="What's Coming Up"
          description="Here's what we're looking at implementing into Savepad. Got a feature request? Send us one from inside the app and let us know how that would help you!"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mx-auto px-4 md:px-12 lg:px-24 pb-4 max-w-container">
          {Object.entries(roadmapData).map(([stage, cards]) => (
            <div key={stage} className="p-4 rounded-lg">
              <h2 className="text-xl font-semibold text-gray-100 mb-2">
                {formatStageTitle(stage)}
              </h2>
              <div className={`h-1 rounded-full my-6 ${stageColors[stage as keyof typeof stageColors]}`}></div>
              <div className="space-y-4">
                {cards.map((card, index) => (
                  <RoadmapCard
                    key={index}
                    title={card.title}
                    description={card.description}
                    url={'url' in card ? card.url : undefined}
                    pills={card.pills}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
        <Footer />
      </main>
    );
  }
