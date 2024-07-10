import React from 'react';
import Nav from '../../components/Nav';
import Hero from '../../components/Hero';


const SomePage: React.FC = () => {
  return (
    <main>
      <Nav />
      <Hero
        tagline="What's it for?"
        heading="Powerful Alone. Better Together."
        description="Savepad is a collaborative reference management platform built for marketers, designers, and developers in growth teams. Not a fan of sharing? Savepad works great just for you too."
        imageUrl="https://res.cloudinary.com/savepad-web/image/upload/v1715850726/Landing%20Pages/Use%20Cases/Swipe_File_fklono.png"
        imageAlt="Use Cases"
        buttonLabel="Get started for free"
        buttonHref="/signup"
        buttonVariant="primary"
      />
    </main>
  );
};

export default SomePage;
