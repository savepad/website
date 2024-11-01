import React from 'react';
import CenterHero from '@/components/CenterHero';
import Nav from '../../components/Nav';
import CardGrid from '../../components/CardGrid';
import Cta from '../../components/Cta';
import Footer from '@/components/Footer';

const ProductPage: React.FC = () => {

  const productCards = [
    {
      title: 'Features',
      description: "A catalog of all the capabilities and functionalities of Savepad.",
      link: '/features',
    },
    {
      title: 'User Guides',
      description: "Short videos to get you up to speed with how Savepad works.",
      link: '/user-guides',
    },
    {
      title: 'Product Updates',
      description: "Rolling updates from the Savepad team on what's new.",
      link: '/changelog',
    },
    {
      title: 'Community & Support',
      description: "Join other Savepad users on our community on Discord.",
      link: 'https://discord.gg/PAV5PDVj98',
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
      
<CardGrid cards={productCards} columns={2}/>

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
