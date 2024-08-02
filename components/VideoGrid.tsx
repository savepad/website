import React from 'react';
import VideoCard from './VideoCard';
import ShadowVideoCard from './ShadowVideoCard';

interface VideoGridProps {
  videos: {
    imageUrl?: string;
    imageAlt?: string;
    title: string;
    description: string;
    videoUrl: string;
  }[];
  columns: 1 | 2 | 3;
  useShadowVideoCard?: boolean;
}

const VideoGrid: React.FC<VideoGridProps> = ({ videos, columns, useShadowVideoCard = false }) => {
  const gridClass =
    columns === 1
      ? 'sm:grid-cols-1'
      : columns === 2
      ? 'sm:grid-cols-1 md:grid-cols-2'
      : 'sm:grid-cols-1 md:grid-cols-3';

  return (
    <section className="relative w-full flex justify-center my-8 lg:my-8">
      <div className={`grid ${gridClass} gap-6 max-w-[1140px]`}>
        {videos.map((video, index) => (
          useShadowVideoCard ? (
            <ShadowVideoCard
              key={index}
              imageUrl={video.imageUrl}
              imageAlt={video.imageAlt}
              title={video.title}
              description={video.description}
              videoUrl={video.videoUrl}
              singleColumn={columns === 1}
              imageLeft={index % 2 === 0}
            />
          ) : (
            <VideoCard
              key={index}
              imageUrl={video.imageUrl}
              imageAlt={video.imageAlt}
              title={video.title}
              description={video.description}
              videoUrl={video.videoUrl}
              singleColumn={columns === 1}
              imageLeft={index % 2 === 0}
            />
          )
        ))}
      </div>
    </section>
  );
};

export default VideoGrid;
