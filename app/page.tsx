import React from 'react';
import HomeHero from '../components/HomeHero';
import HomeSplash from '../components/HomeSplash';
import Breakpoint from '../components/Breakpoint';
import HomeProblem from '../components/HomeProblem';
import ContentBlock from '../components/ContentBlock';

import { FaArrowRight } from 'react-icons/fa';

const HomePage: React.FC = () => {
  return (
    <main>
      <HomeHero />
      <HomeSplash />
      <Breakpoint
        header="Time to bring some structure to your chaos."
        texts={[
          "Struggling with collaborating on references for landing pages, ads, product launches, projects, and heaven knows what else?",
          "Then this one's for you 🥂"
        ]}
      />
      <HomeProblem />

      <ContentBlock
        imageUrl="https://res.cloudinary.com/savepad-web/image/upload/v1715850637/Landing%20Pages/Homepage/Before_Savepad_saogxb.png"
        imageAlt="Before Savepad"
        heading="Everything all over the place?"
        paragraphs={[
          "Can’t find sh*t for your projects, or for when you remembered something and wanted to share it?",
          "There’s a reason why most generic tools fail as a collaborative swipe file."
        ]}
      />
      <ContentBlock
        imageUrl="https://res.cloudinary.com/savepad-web/image/upload/v1715850634/Landing%20Pages/Homepage/After_Savepad_wpkfh8.png"
        imageAlt="After Savepad"
        heading="Do better than just hacking it"
        paragraphs={[
          "We didn’t have a collaborative space to curate all the cool links, docs, screenshots, code, docs, notes, Tweets, videos, memes, and other things we found useful.",
          "So we're building one."
        ]}
        reverse
      />

    </main>
  );
};

export default HomePage;
