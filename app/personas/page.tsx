import React from 'react';
import Nav from '../../components/Nav';
import CardGrid from '../../components/CardGrid';
import Cta from '@/components/Cta';
import Footer from '@/components/Footer';
import ContentBlock from '@/components/ContentBlock';
import Hero from '@/components/Hero';
import Breakpoint from '@/components/Breakpoint';


const PersonasPage: React.FC = () => {


  const GrowthCards = [
    {
     title: 'Find things in a pinch.',
      description: "With powerful search, metadata indexing, custom collections and tags, and an intuitive UI, Savepad lets you find anything you’ve saved instantly.",
    },
    {
      title: 'Experience a perfect handoff.',
      description: "New kickoff call for a homepage with design and engineering in 30 minutes? Fire up Savepad and get everyone on the same page.",
    },
  ];

  const DevCards = [
    {
     title: 'You & your clients. In Sync.',
      description: "Shuffling projects or managing multiple clients? Dedicate spaces for each, ensuring organizeation for everything from logo designs to website revamps.",
    },
    {
      title: 'Put yourself into the spotlight.',
      description: "Curate past work, projects, and examples, into your workspaces and proudly flex your work with companies, clients, or publish to the web.",
    },
  ];

  const CommunityCards = [
    {
     title: 'Save Community Knowledge.',
      description: "Save shared resources for easy access so you never have to scratch your heads looking for knowledge that’s entered the void.",
    },
    {
      title: 'Attract New Members.',
      description: "Make your spaces public to attract members. Let people see the value your community creates before they become part of the conversations.",
    },
  ];

  const YouCards = [
    {
     title: 'Curate ideas into inspiration.',
      description: "With collections, tags, and search, Savepad makes curating ideas a breeze – summer party, meal inspiration, poster ideas, whatever. You do you!",
    },
    {
      title: 'Bring your loved ones together.',
      description: "Planning a trip to Sicily? New house deco? Organizing Biryani night? Share and invite those who matter into your spaces to make shared experiences fun.",
    },
  ];


  return (
    <main>
      <Nav />
      <Hero
        tagline="👩‍💻 Personas"
        heading="Built from the ground up with you in mind."
        description="We're focused on the needs of growth teams in tech. We've also seen designers, developers, agencies, and communities find some great value."
        imageUrl="https://res.cloudinary.com/savepad-web/image/upload/v1715850633/Landing%20Pages/Personas/Growth_Teams_cyw32z.png"
        imageAlt="Personas"
        // buttonLabel="Create your free account"
        // buttonHref="/signup"
        // buttonVariant="primary"
      />

<Breakpoint
        header="For Growth Teams"
        texts={[
          "Savepad lets growth teams maintain structured references in a single platform rather than retaining a mess of inspiration sprawled between multiple sheets, Notions, Slacks, emails, and other tools."
        ]}
      />

<ContentBlock
        imageUrl="/images/personas/Growth Teams.png"
        imageAlt="For Growth Teams"
        heading="Bring your team's ideas together."
        paragraphs={[
          "Landing pages, ads, videos, case studies, resources, pricing pages, demo flows, features, pop-ups, newsletters, memes, email flows, 🤯.",
          "With so many references saved everywhere, Savepad is only platform dedicated to building the swipe file your team deserves."
        ]}
      />

<CardGrid cards={GrowthCards} columns={2} useShadowCard />

<Breakpoint
        header="For Devs, Designers, & Creative Agencies"
        texts={[
          "Curate and share a comprehensive repository of links, designs, code, courses, components, videos, and whatever else – whether for yourself, clients, or to publish publicly to the web."
        ]}
      />

<ContentBlock
        imageUrl="/images/personas/Devs and Designers.png"
        imageAlt="For Devs and Designers"
        heading="Delight yourself & your clients every time."
        paragraphs={[
          "Devs and designers, whether as freelancers or as part of agencies, often have multiple tools and workflows for each project and client.",
          "Centralize all your references, handoffs, and inspiration in one tool. Share specific spaces with each client, and keep personal ones for yourself."
        ]}
        reverse
      />

<CardGrid cards={DevCards} columns={2} useShadowCard />

<Breakpoint
        header="For Online Communities"
        texts={[
          "Empower your online community with a curated knowledge base. Preserve, organize, and access vital resources efficiently for everyone."
        ]}
      />

<ContentBlock
        imageUrl="/images/personas/Communities.png"
        imageAlt="For Communities"
        heading="Create something powerful when coming together."
        paragraphs={[
          "Online communities have seen countless resources shared over years, many lost because of chat history limits, closed communities, or 404s.",
          "It's time for community admins to instantly curate shared resources into a personal or shared space for maintaining references shared over time."
        ]}
      />

<CardGrid cards={CommunityCards} columns={2} useShadowCard />

<Breakpoint
        header="For You 🫵"
        texts={[
          "Savepad is your all-in-one reference manager. From notes to bookmarks. organize and curate effortlessly, by yourself, or with friends and family."
        ]}
      />

<ContentBlock
        imageUrl="/images/personas/Personal.png"
        imageAlt="For You"
        heading="Save all the things that make you go hmmm"
        paragraphs={[
          "Most browsers have a very old-school way of handling bookmarks, just folders to dump links. No collaboration, no sharing, nothing new.",
          "We realised that Savepad ended up improving our own bookmark management, especially when sharing things with each other mid-build."
        ]}
        reverse
      />

<CardGrid cards={YouCards} columns={2} useShadowCard />

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

export default PersonasPage;
