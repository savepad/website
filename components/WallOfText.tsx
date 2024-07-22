import React from 'react';
import ReactMarkdown from 'react-markdown';

interface WallOfTextProps {
  content: string;
}

const WallOfText: React.FC<WallOfTextProps> = ({ content }) => {
  return (
    <section className="items-center justify-center px-4 w-full max-w-[750px] mx-auto">
      <div className="prose dark:prose-dark">
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    </section>
  );
};

export default WallOfText;