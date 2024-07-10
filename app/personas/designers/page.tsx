import React from 'react';
import Nav from '../../../components/Nav';
import Hero from '../../../components/Hero';


const SomePage: React.FC = () => {
  return (
    <main>
      <Nav />
      <Hero
        tagline="Who's it for?"
        heading="Built from the ground up. With you in mind."
        description="Savepad is primarily opinionated towards serving the needs of cross-functional growth teams in SaaS. Additionally, we’ve also seen designers, developers, agencies, and online communities get the most value."
        imageUrl="https://res.cloudinary.com/savepad-web/image/upload/v1715850633/Landing%20Pages/Personas/Growth_Teams_cyw32z.png"
        imageAlt="Personas"
        buttonLabel="Get started for free"
        buttonHref="/signup"
        buttonVariant="primary"
      />

    </main>
  );
};

export default SomePage;
