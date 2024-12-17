import React from 'react';
import CenterHero from '@/components/CenterHero';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import RoadmapCard from '@/components/RoadmapCard';

const roadmapData = {
  ideas: [
    
  ],
  planning: [
    {
      title: 'Public Workspaces',
      description: 'Create read-only workspaces available on the web.',
      pills: ['Enhancement'],
    },
    {
      title: 'Embedded Workspaces',
      description: 'Embed your workspaces on other platforms and websites.',
      pills: ['Enhancement'],
    },
    {
      title: 'Integrations',
      description: 'Common integrations for apps like Slack, Discord, and Raycast.',
      pills: ['Core Feature'],
    },
  ],
  inProgress: [
    {
        title: 'Bulk Operations',
        description: 'Create and edit saves in bulk.',
        pills: ['Enhancement'],
      },
      {
        title: 'iOS and MacOS Apps',
        description: 'Native apps for mobile and desktop.',
        pills: ['Core Feature'],
      },
      {
        title: 'Chrome extension',
        description: 'Native apps for mobile and desktop.',
        pills: ['Core Feature'],
      },
      {
        title: 'Email saves',
        description: 'Forward emails to your collections.',
        pills: ['Core Feature'],
      },
      {
        title: 'Code Syntax Highlighting',
        description: 'Cleaner visuals for saved code snippets.',
        pills: ['Enhancement'],
      },
  ],
  done: [
    {
        title: 'Workspaces and Teams',
        description: 'Create workspaces for your account and invite users.',
        pills: ['Core Feature'],
        url: '/changelog#01',
      },
      {
        title: 'Saves',
        description: 'Create new saves for URLs, images, files, videos, and notes.',
        pills: ['Core Feature'],
        url: '/changelog#01',
      },
      {
        title: 'Collections and Tags',
        description: 'Organize your saves as much or as little as you like.',
        pills: ['Core Feature'],
        url: '/changelog#01',
      },
      {
        title: 'Backlog',
        description: 'A dumping ground for saves in need of cleaning up.',
        pills: ['Core Feature'],
        url: '/changelog#01',
      },
      {
        title: 'Backlog',
        description: 'A dumping ground for saves in need of cleaning up.',
        pills: ['Core Feature'],
        url: '/changelog#01',
      },
      {
        title: 'Auto Enrichments (Links)',
        description: 'Automatically generate metadata for saved URLs',
        pills: ['Enhancement'],
        url: '/changelog#01',
      },
      {
        title: 'Search',
        description: 'Find saves by title, description, content, or tags',
        pills: ['Enhancement'],
        url: '/changelog#01',
      },
      {
        title: 'Custom Views',
        description: 'Sort saves alphabetically or chronologically, and view by list or grid',
        pills: ['Enhancement'],
        url: '/changelog#01',
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
