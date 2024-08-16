"use client";

import React from 'react';
import Nav from '../../components/Nav';
import Hero from '../../components/Hero';
import Footer from '@/components/Footer';
import VideoGrid from '@/components/VideoGrid';
import Cta from '@/components/Cta';

const videoCards = [
  {
    imageUrl: 'https://res.cloudinary.com/savepad-web/image/upload/v1723796788/Onboarding%20Video%20Cards/Creating_Workspaces_abrz97.png',
    imageAlt: 'Manage',
    title: 'Creating workspaces',
    description: "A walkthrough of creating your first workspaces in Savepad.",
    videoUrl: 'https://res.cloudinary.com/savepad-web/video/upload/v1723795724/Onboarding%20Videos/Workspaces_gg9ypo.mp4',
  },
  {
    imageUrl: 'https://res.cloudinary.com/savepad-web/image/upload/v1723796788/Onboarding%20Video%20Cards/Creating_Collections_and_Tags_ljzfei.png',
    imageAlt: 'Manage',
    title: 'Creating collections & tags',
    description: "Establishing some structure and organization with collections and tags.",
    videoUrl: 'https://res.cloudinary.com/savepad-web/video/upload/v1723795557/Onboarding%20Videos/Tags_tbw1cs.mp4',
  },
  {
    imageUrl: 'https://res.cloudinary.com/savepad-web/image/upload/v1723796788/Onboarding%20Video%20Cards/Creating_Links_wgkqzk.png',
    imageAlt: 'Manage',
    title: 'Creating saves - URLs',
    description: "How to add links and URLs into Savepad, and what options you have available.",
    videoUrl: 'https://res.cloudinary.com/savepad-web/video/upload/v1723794863/Onboarding%20Videos/Links-c_lhniba.mp4',
  },
  {
    imageUrl: 'https://res.cloudinary.com/savepad-web/image/upload/v1723796788/Onboarding%20Video%20Cards/Creating_Media_and_Files_ihoiqq.png',
    imageAlt: 'Manage',
    title: 'Creating saves - Images & files',
    description: "Uploading images, audio, video, files, and other documents into Savepad.",
    videoUrl: 'https://res.cloudinary.com/savepad-web/video/upload/v1723794452/Onboarding%20Videos/Upload-c_nszhjt.mp4',
  },
  {
    imageUrl: 'https://res.cloudinary.com/savepad-web/image/upload/v1723796789/Onboarding%20Video%20Cards/Creating_Notes_oqupq6.png',
    imageAlt: 'Manage',
    title: 'Creating saves - Notes',
    description: "Creating notes in Savepad with formatting for rich text, markdown, and retaining formatting.",
    videoUrl: 'https://res.cloudinary.com/savepad-web/video/upload/v1723794403/Onboarding%20Videos/Notes-c_qotrfs.mp4',
  },
  {
    imageUrl: 'https://res.cloudinary.com/savepad-web/image/upload/v1723796768/Onboarding%20Video%20Cards/Savepad_for_Projects_wiglft.png',
    imageAlt: 'Manage',
    title: 'Working on Projects',
    description: "A hypothetical look into using collections to create projects before collaborating with your team.",
    videoUrl: 'https://res.cloudinary.com/savepad-web/video/upload/v1723795289/Onboarding%20Videos/Projects-c_a9ea0i.mp4',
  },
];

const BlogPage: React.FC = () => {
  return (
    <main>
      <Nav />
      <Hero
        tagline="👾 User Guides"
        heading="How to Savepad."
        description="Bite-sized videos to get you familiar with all the capabilities of Savepad. The UI and flows are being constantly updated while we're in beta!"
        imageUrl="https://res.cloudinary.com/savepad-web/image/upload/v1715850633/Landing%20Pages/Personas/Growth_Teams_cyw32z.png"
        imageAlt="Personas"
        buttonLabel="Create your free account"
        buttonHref="/signup"
        buttonVariant="primary"
      />

      <VideoGrid videos={videoCards} columns={2} useShadowVideoCard />

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

export default BlogPage;
