import React from 'react';
import Head from 'next/head';
import Nav from '../../components/Nav';
import Hero from '../../components/Hero';


const SomePage: React.FC = () => {
  return (
    <main>

      <Head>
      <title>Use Cases</title>
      <meta name="description" content="Collaborative Swipe File and Knowledge Base for Growth Teams" />
      <meta property="og:title" content="Use Cases" />
      <meta property="og:description" content="Collaborative Swipe File and Knowledge Base for Growth Teams" />
      <meta property="og:image" content="https://res.cloudinary.com/savepad-web/image/upload/v1715850562/Branding/Savedapp_Fallback_OG_tnc2w0.png" />
      <meta property="og:url" content="https://savepad.app" />
      <meta name="twitter:card" content="summary_large_image" />
      </Head>

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
