import React from 'react';
import Nav from '../../components/Nav';
import Hero from '../../components/Hero';
import ContentBlock from '@/components/ContentBlock';


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


      <ContentBlock
        imageUrl="https://res.cloudinary.com/savepad-web/image/upload/v1715850633/Landing%20Pages/Personas/Growth_Teams_cyw32z.png"
        imageAlt="For Growth Teams"
        heading="For Growth Teams"
        paragraphs={[
          "Savepad is primarily opinionated to the needs of growth teams — particularly cross-functional teams of marketers, designers, and developers working in SaaS.",
          "Intended as a collaborative swipe file for growth teams to work on projects better together, Savepad addresses their common problems and needs first."
        ]}
        buttonLink='/this'
        buttonText='Learn More'
      />
      <ContentBlock
        imageUrl="https://res.cloudinary.com/savepad-web/image/upload/v1715850632/Landing%20Pages/Personas/Creatives_and_Agencies_axpunw.png"
        imageAlt="Creatives and Devs"
        heading="For Creatives and Devs"
        paragraphs={[
          "Similar to growth teams, designers and developers (individuals and agencies) work on several projects that require reference and inspiration management across projects, teams, and clients.",
          "Savepad’s spaces and teams extends to serve their needs when collaborating, making it easier to share collections within themselves and with clients."
        ]}
        buttonLink='/this'
        buttonText='Learn More'
        reverse
      />
      <ContentBlock
        imageUrl="https://res.cloudinary.com/savepad-web/image/upload/v1715850633/Landing%20Pages/Personas/Online_Communities_mrmftr.png"
        imageAlt="Online Communities"
        heading="For Online Communities"
        paragraphs={[
          "Many online communities (particularly the free ones like Developer Marketing) run on platforms like Slack, Podia, and Circle. Often, resources are shared by hundreds of people over years, and either get buried in the noise, making it hard to find, or vanish entirely due to the restrictions on chat history some tools implement.",
          "Savepad allows community owners to maintain these resources as a searchable knowledge base for their community indefinitely."
        ]}
        buttonLink='/this'
        buttonText='Learn More'
      />
      <ContentBlock
        imageUrl="https://res.cloudinary.com/savepad-web/image/upload/v1715850633/Landing%20Pages/Personas/Individuals_enhhvh.png"
        imageAlt="For Individuals"
        heading="For Individuals"
        paragraphs={[
          "Just looking for something like a modern bookmark manager or a place to save all the references and inspiration that you find online? Savepad works great just for you too.",
          "Make it yours with the collections and tags you care about, and save URLs, files, code, and notes. If and when you’re ready to share, invite collaborators, or publish your space to the web."
        ]}
        buttonLink='/this'
        buttonText='Learn More'
        reverse
      />

    </main>
  );
};

export default SomePage;
