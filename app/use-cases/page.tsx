import React from 'react';
import Nav from '../../components/Nav';
import CardGrid from '../../components/CardGrid';
import Hero from '@/components/Hero';
import Cta from '@/components/Cta';
import Footer from '@/components/Footer';
import Breakpoint from '@/components/Breakpoint';
import ContentBlock from '@/components/ContentBlock';


const UseCasesPage: React.FC = () => {

  const SwipeCards = [
    {
      title: 'Save Everything',
      description: "Save and reference URLs, documents, images, screenshots, emails, code, or anything else you find worth swiping.",
    },
    {
      title: 'Find Anything',
      description: "Looking for “Raycast homepage” but remember only “LP with gradient CTA”? No sweat.",
    },
    {
      title: 'Share and collaborate',
      description: "Invite your team and they will be able to view or edit your workspaces and collections as you choose.",
    },
    {
      title: 'Swipe on the go',
      description: "With apps for browser, mobile, desktop, and email, Savepad is good to go whenever you are.",
    },
    {
      title: 'Well Structured',
      description: "Organize spaces, collections, and tags as you’d like to keep your references within reach.",
    },
    {
      title: 'Familiar Workflows',
      description: "Collect and update your Savepad using your daily workflows like Slack, email, screenshot, and more.",
    },
  ];

  const KnowledgeCards = [
    {
      title: 'Save Everything',
      description: "Save and reference URLs, documents, images, screenshots, emails, code, or anything else you find worth swiping.",
    },
    {
      title: 'Find Anything',
      description: "Looking for “Raycast homepage” but remember only “LP with gradient CTA”? No sweat.",
    },
    {
      title: 'Share and collaborate',
      description: "Invite your team and they will be able to view or edit your workspaces and collections as you choose.",
    },
    {
      title: 'Swipe on the go',
      description: "With apps for browser, mobile, desktop, and email, Savepad is good to go whenever you are.",
    },
    {
      title: 'Well Structured',
      description: "Organize spaces, collections, and tags as you’d like to keep your references within reach.",
    },
    {
      title: 'Familiar Workflows',
      description: "Collect and update your Savepad using your daily workflows like Slack, email, screenshot, and more.",
    },
  ];

  const BookmarkCards = [
    {
      title: 'Save Everything',
      description: "Save and reference URLs, documents, images, screenshots, emails, code, or anything else you find worth swiping.",
    },
    {
      title: 'Find Anything',
      description: "Looking for “Raycast homepage” but remember only “LP with gradient CTA”? No sweat.",
    },
    {
      title: 'Share and collaborate',
      description: "Invite your team and they will be able to view or edit your workspaces and collections as you choose.",
    },
    {
      title: 'Swipe on the go',
      description: "With apps for browser, mobile, desktop, and email, Savepad is good to go whenever you are.",
    },
    {
      title: 'Well Structured',
      description: "Organize spaces, collections, and tags as you’d like to keep your references within reach.",
    },
    {
      title: 'Familiar Workflows',
      description: "Collect and update your Savepad using your daily workflows like Slack, email, screenshot, and more.",
    },
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
        imageUrl="https://res.cloudinary.com/savepad-web/image/upload/v1715850637/Landing%20Pages/Homepage/Before_Savepad_saogxb.png"
        imageAlt="Before Savepad"
        heading="Take your team from good to great."
        paragraphs={[
          "Savepad lets growth teams maintain structured references in a single platform rather than retaining a mess of inspiration sprawled between multiple sheets, Notions, Slacks, emails, and other tools."
        ]}
      />

      <ContentBlock
        imageUrl="https://res.cloudinary.com/savepad-web/image/upload/v1715850637/Landing%20Pages/Homepage/Before_Savepad_saogxb.png"
        imageAlt="Before Savepad"
        heading="Work Better. Together."
        paragraphs={[
          "Ever wanted to kick-off a new landing page and can’t find that one amazing example from 3 years ago that had the words “pay as you grow”?",
          "With powerful indexing and full-text search, all your team's inspiration is within reach."
        ]}
        reverse
      />

<CardGrid cards={SwipeCards} columns={3} useShadowCard />

<Breakpoint
        header="Shared Knowledge Base"
        texts={[
          "Between threads, chat history limitations, and excessive noise, many resources shared in online communities get lost over the years. Not anymore."
        ]}
      />

      <ContentBlock
        imageUrl="https://res.cloudinary.com/savepad-web/image/upload/v1715850637/Landing%20Pages/Homepage/Before_Savepad_saogxb.png"
        imageAlt="Before Savepad"
        heading="Incredible people share incredible things."
        paragraphs={[
          "Most online communities have a wealth of experiences, insights, and references shared over years. Don’t lose them just because you can’t access chat history beyond a point."
        ]}
      />

      <ContentBlock
        imageUrl="https://res.cloudinary.com/savepad-web/image/upload/v1715850637/Landing%20Pages/Homepage/Before_Savepad_saogxb.png"
        imageAlt="Before Savepad"
        heading="Give your community a lasting knowledge base"
        paragraphs={[
          "Instantly curate shared resources into a personal or shared space for maintaining references."
        ]}
        reverse
      />

<CardGrid cards={KnowledgeCards} columns={3} useShadowCard />

<Breakpoint
        header="Shared Bookmark Manager"
        texts={[
          "Ramen recipes, weeknight dinner ideas, home decor inspiration, new looks, whatever tickles your fancy has a home in Savepad."
        ]}
      />

      <ContentBlock
        imageUrl="https://res.cloudinary.com/savepad-web/image/upload/v1715850637/Landing%20Pages/Homepage/Before_Savepad_saogxb.png"
        imageAlt="Before Savepad"
        heading="Save everything you care about."
        paragraphs={[
          "Standard browser bookmark managers usually end up a cluttered mess, and don’t come with sharing or collaboration out of the box without 3rd party extensions."
        ]}
      />

      <ContentBlock
        imageUrl="https://res.cloudinary.com/savepad-web/image/upload/v1715850637/Landing%20Pages/Homepage/Before_Savepad_saogxb.png"
        imageAlt="Before Savepad"
        heading="And share it with those who matter."
        paragraphs={[
          "Bring together great content from across the web, share it with those that need access to it, whether for work or personal use, and keep it in sync with your browser as required."
        ]}
        reverse
      />

<CardGrid cards={BookmarkCards} columns={3} useShadowCard />

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
