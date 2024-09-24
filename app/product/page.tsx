import React from 'react';
import CenterHero from '@/components/CenterHero';
import Nav from '../../components/Nav';
import CardGrid from '../../components/CardGrid';
import Cta from '../../components/Cta';
import Footer from '@/components/Footer';

const ProductPage: React.FC = () => {

  const productCards = [
    {
      imageUrl: 'https://res.cloudinary.com/savepad-web/image/upload/v1715850632/Landing%20Pages/Homepage/Manage_rusfyr.png',
      imageAlt: 'Manage',
      title: 'Features',
      description: "A catalog of all the capabilities and functionalities of Savepad.",
      link: '/features',
    },
    {
      imageUrl: 'https://res.cloudinary.com/savepad-web/image/upload/v1715850632/Landing%20Pages/Homepage/Enrich_btvjy3.png',
      imageAlt: 'Collaborate',
      title: 'User Guides',
      description: "Short videos to get you up to speed with how Savepad works.",
      link: '/user-guides',
    },
    {
      imageUrl: 'https://res.cloudinary.com/savepad-web/image/upload/v1715850632/Landing%20Pages/Homepage/Find_nqrqnq.png',
      imageAlt: 'Find',
      title: 'Product Updates',
      description: "Rolling updates from the Savepad team on what's new.",
      link: '/changelog',
    },
    {
      imageUrl: 'https://res.cloudinary.com/savepad-web/image/upload/v1715850632/Landing%20Pages/Homepage/Collaborate_ymhch8.png',
      imageAlt: 'Collaborate',
      title: 'Community & Support',
      description: "Join other Savepad users on our community on Struct.",
      link: 'https://savepad.struct.ai/',
    },
  ];

  return (
    <main>

      <Nav />
      
      <CenterHero
        tagline="Welcome to Savepad"
        heading="Savepad 101"
        description="Everything you need to know about the product."
      />
      
<CardGrid cards={productCards} columns={2} useShadowCard={false} />

{/* <Cta
        title="Get started for free"
        paragraphs={[
          "Savepad's generous free tier gives you LIMITS.",
          "Our first 250 waitlist users will get lifetime access to Savepad for free."
        ]}
        buttonText="Sign Up for Free"
        buttonHref="/signup"
      /> */}

<Footer />
    </main>
  );
};

export default ProductPage;
