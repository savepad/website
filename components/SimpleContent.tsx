import React from 'react';
import ReactMarkdown from 'react-markdown';

interface SimpleContentProps {
  content: string;
}

const SimpleContent: React.FC<SimpleContentProps> = ({ content }) => {
  return (
    <section className="items-center justify-center px-4 w-full max-w-[1140px] mx-auto">
      <div className="prose dark:prose-dark max-w-[700px]">
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    </section>
  );
};

export default SimpleContent;