"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import ReactMarkdown from 'react-markdown';

interface FaqItemProps {
  question: string;
  texts: (string | { text: string; link: string })[];
}

const FaqItem: React.FC<FaqItemProps> = ({ question, texts }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b border-gray-700 py-4">
      <button
        onClick={toggleOpen}
        className="flex justify-between items-center w-full text-left text-xl font-medium text-gray-100"
      >
        <span>{question}</span>
        {isOpen ? <FaChevronUp /> : <FaChevronDown />}
      </button>
      {isOpen && (
        <div className="mt-4 space-y-4 text-gray-300">
          {texts.map((text, index) => (
            <div key={index}>
              {typeof text === 'string' ? (
                <ReactMarkdown>{text}</ReactMarkdown>
              ) : (
                <ReactMarkdown>{text.text}</ReactMarkdown>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

interface FaqProps {
  faqs: {
    question: string;
    texts: (string | { text: string; link: string })[];
  }[];
}

const Faq: React.FC<FaqProps> = ({ faqs }) => {
  return (
    <div className="flex justify-center pb-24">
      <div className="space-y-4 max-w-[700px] w-full">
        {faqs.map((faq, index) => (
          <FaqItem key={index} question={faq.question} texts={faq.texts} />
        ))}
      </div>
    </div>
  );
};

export default Faq;
