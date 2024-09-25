import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

interface WallOfTextProps {
  content: string;
}

const WallOfText: React.FC<WallOfTextProps> = ({ content }) => {
  return (
    <section className="prose dark:prose-dark mx-auto mb-36 px-4 max-w-[750px]">
      <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
        {content}
      </ReactMarkdown>
    </section>
  );
};

export default WallOfText;
