import React from 'react';
import Nav from '../../components/Nav';
import CardGrid from '../../components/CardGrid';
import Hero from '@/components/Hero';
import Cta from '@/components/Cta';
import Footer from '@/components/Footer';
import Breakpoint from '@/components/Breakpoint';
import ContentBlock from '@/components/ContentBlock';
import Link from 'next/link';


const UseCasesPage: React.FC = () => {

  const UseCaseCards = [
    {
      title: 'Save Everything',
      description: "Links, docs, pics, vids, emails, code, notes... Save anything and everything.",
    },
    {
      title: 'Find Anything',
      description: "Looking for something but only remember vague keywords? No sweat.",
    },
    {
      title: 'Share and collaborate',
      description: "Invite others to your workspaces or publish them to the web.",
    },
    {
      title: 'Swipe on the go',
      description: "With native apps and integrations, Savepad is with you everywhere.",
    },
    {
      title: 'Well Structured',
      description: "Organize workspaces, collections, and tags as you’d like.",
    },
    {
      title: 'Stay in sync',
      description: 'Ensure your private and shared resources are in sync across apps.',
    }
  ];


  return (
    <main>
      <Nav />
      <Hero
        tagline="⚙️ Use Cases"
        heading="Powerful Alone. Better Together."
        description="Savepad is the collaborative reference management platform built for growth teams. But that's not all it's for."
        imageUrl="https://res.cloudinary.com/savepad-web/image/upload/v1715850633/Landing%20Pages/Personas/Growth_Teams_cyw32z.png"
        imageAlt="Personas"
        // buttonLabel="Create your free account"
        // buttonHref="/signup"
        // buttonVariant="primary"
      />


      <Breakpoint
        header="Collaborative Swipe File"
        texts={[
          "Marketers, designers, and developers, finally collaborating on projects together without lost context."
        ]}
      />

      <ContentBlock
        imageUrl="/images/use-cases/Swipe_1.png"
        imageAlt="Before Savepad"
        heading="Take your team from good to great."
        paragraphs={[
          "Savepad lets you maintain references in a single platform rather than retaining a mess of inspiration sprawled between multiple sheets, Notions, Slacks, emails, and other tools."
        ]}
      />

      <ContentBlock
        imageUrl="/images/use-cases/Swipe_2.png"
        imageAlt="Before Savepad"
        heading="Work Better. Together."
        paragraphs={[
          "Ever wanted to kick-off a new landing page and can’t find that one amazing example from 3 years ago that had the words “pay as you grow”?",
          "With powerful indexing and full-text search, all your team's inspiration is within reach."
        ]}
        reverse
      />

<Breakpoint
        header="Shared Knowledge Base"
        texts={[
          "Between threads, chat history limitations, and excessive noise, many resources shared in online communities get lost over the years. Not anymore."
        ]}
      />

      <ContentBlock
        imageUrl="/images/use-cases/Knowledge_1.png"
        imageAlt="Before Savepad"
        heading="Incredible people share incredible things."
        paragraphs={[
          "Online communities have a wealth of experience, insights, and references shared over time.",
          "Don’t lose them just because you can’t access chat history beyond 90 days or something."
        ]}
      />

      <ContentBlock
        imageUrl="/images/use-cases/Knowledge_2.png"
        imageAlt="Before Savepad"
        heading="Give your community a lasting knowledge base"
        paragraphs={[
          "Instantly curate shared resources into a personal or shared space for maintaining references.",
          "Give your community access by inviting them, or keep a public read-only URL of your spaces."
        ]}
        reverse
      />

<Breakpoint
        header="Shared Bookmark Manager"
        texts={[
          "Ramen recipes, weeknight dinner ideas, home decor inspiration, new looks, whatever tickles your fancy has a home in Savepad."
        ]}
      />

      <ContentBlock
        imageUrl="/images/use-cases/Bookmark_1.png"
        imageAlt="Before Savepad"
        heading="Save everything you care about."
        paragraphs={[
          "Standard browser bookmark managers usually end up a cluttered mess, and don’t come with sharing or collaboration out of the box without 3rd party extensions."
        ]}
      />

      <ContentBlock
        imageUrl="/images/use-cases/Bookmark_2.png"
        imageAlt="Before Savepad"
        heading="And share it with those who matter."
        paragraphs={[
          "Bring together what you like from across the web, share it with those who matter, and keep it in sync with your browser."
        ]}
        reverse
      />

<Breakpoint
        header="And then some"
        texts={[
          "All use-cases are enabled by some powerful features under the hood that make Savepad a great collaborative platform for you."
        ]}
      />

<CardGrid cards={UseCaseCards} columns={3} useShadowCard />

<section className="mx-auto text-center items-center justify-center py-8">
<Link href="/features" className="text-violet-400 hover:text-white transition duration-300">Explore all Features →</Link>
</section>

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

export default UseCasesPage;
