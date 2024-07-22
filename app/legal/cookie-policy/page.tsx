"use client";

import React, { useEffect, useState } from 'react';
import Nav from '../../../components/Nav';
import CenterHero from '../../../components/CenterHero';
import WallOfText from '../../../components/WallOfText';
import Footer from '@/components/Footer';

const cookiesContent = `
By signing up to an account on Savepad, you're agreeing to abide by our Terms of Use. These are subject to change at any time, and you'll be notified of any and all changes on the email you sign up with. By signing up to an account on Savepad, you're agreeing to abide by our Terms of Use. These are subject to change at any time, and you'll be notified of any and all changes on the email you sign up with. By signing up to an account on Savepad, you're agreeing to abide by our Terms of Use. These are subject to change at any time, and you'll be notified of any and all changes on the email you sign up with. By signing up to an account on Savepad, you're agreeing to abide by our Terms of Use. These are subject to change at any time, and you'll be notified of any and all changes on the email you sign up with. By signing up to an account on Savepad, you're agreeing to abide by our Terms of Use. These are subject to change at any time, and you'll be notified of any and all changes on the email you sign up with. By signing up to an account on Savepad, you're agreeing to abide by our Terms of Use. These are subject to change at any time, and you'll be notified of any and all changes on the email you sign up with. 
`;

const extractHeadings = (content: string) => {
  const regex = /^(#{2,3})\s+(.*)$/gm;
  const headings = [];
  let match;
  while ((match = regex.exec(content)) !== null) {
    const [, hashes, title] = match;
    const level = hashes.length;
    const id = title.toLowerCase().replace(/\s+/g, '-');
    headings.push({ id, title, level });
  }
  return headings;
};

const CookiesPage: React.FC = () => {
  const [headings, setHeadings] = useState<{ id: string; title: string; level: number }[]>([]);

  useEffect(() => {
    setHeadings(extractHeadings(cookiesContent));
  }, []);

  return (
    <main>
      <Nav />
      <CenterHero
        tagline="In Legal & Human Text"
        heading="Terms of Use"
        description="By signing up to an account on Savepad, you're agreeing to abide by our Terms of Use. These are subject to change at any time, and you'll be notified of any and all changes on the email you sign up with."
      />
      <div>
          <div>
            <WallOfText content={cookiesContent} />
          </div>
        </div>
        <Footer />
    </main>
  );
};

export default CookiesPage;