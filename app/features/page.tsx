import React from 'react';
import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import Breakpoint from '@/components/Breakpoint';
import Cta from '@/components/Cta';
import FeatureTOC from '@/components/FeatureTOC';

// Import each feature individually
import SaveFeature from './core-features/save';
import ImageFeature from './files-and-formats/image';

const FeaturesPage = () => {
  const features = [
    {
      category: 'Core Features',
      features: [
        { id: 'save', title: 'Save' },
      ],
    },
    {
      category: 'Files & Formats',
      features: [
        { id: 'image', title: 'Image' },
      ],
    },
  ];


  return (
    <main>
      <Nav />

      <Hero
        tagline="🧙 Features"
        heading="Designed for creativity. Built for collaboration."
        description="Explore all the capabilities and features that make Savepad your ideal collaborative swipe file."
        imageUrl="https://res.cloudinary.com/savepad-web/image/upload/v1715850633/Landing%20Pages/Personas/Growth_Teams_cyw32z.png"
        imageAlt="Personas"
        buttonLabel="Get started for free"
        buttonHref="/signup"
        buttonVariant="primary"
      />

      <Breakpoint
        header="Explore Features"
        texts={[
          "We’ve clustered Savepad’s features into the platform’s core capabilities to give you a better overview of how each of them fit in to your workflow.",
        ]}
      />

<section className="relative max-w-[1140px] mx-auto">
        <div className="container mx-auto max-w-[1140px] flex">
          <FeatureTOC features={features} />
          <div className="md:w-3/4 w-full px-4">

            {/* Core Features */}
            <h2 className="">Core Features</h2>
            <p className="mb-8">The fundamentals of Savepad that make it the ideal swipe file and knowledge base for you.</p>
            <SaveFeature />

            {/* Files */}
            <h2 className="">Files & Formats</h2>
            <p className="mb-8">All the flexibility you get when saving links, images, videos, notes, code, and so much more!</p>
            <ImageFeature />


          </div>
        </div>
      </section>

      <Cta
        title="Get started for free"
        paragraphs={[
          "Savepad's generous free tier gives you LIMITS.",
          "Our first 250 waitlist users will get lifetime access to Savepad for free."
        ]}
        buttonText="Sign Up for Free"
        buttonHref="/signup"
      />

      <Footer />
    </main>
  );
};

export default FeaturesPage;
