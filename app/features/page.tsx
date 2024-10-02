import React from 'react';
import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import Cta from '@/components/Cta';
import FeatureTOC from '@/components/FeatureTOC';
import Banner from '@/components/Banner';

// Core Features imports
import SaveFeature from './core-features/save';
import WorkspacesFeature from './core-features/workspaces';
import CollectionsFeature from './core-features/collections';
import TaggingFeature from './core-features/tagging';
import EnrichmentFeature from './core-features/enrichment';
import SearchFeature from './core-features/search';
import SharingFeature from './core-features/sharing';
import AccountsFeature from './core-features/accounts';
import CollaborationFeature from './core-features/collaboration';
import TeamsFeature from './core-features/teams';

// Formats Features imports
import AudioFeature from './files-and-formats/audio';
import CodeFeature from './files-and-formats/code';
import DocumentsFeature from './files-and-formats/documents';
import EmailsFeature from './files-and-formats/emails';
import ImagesFeature from './files-and-formats/images';
import LinksFeature from './files-and-formats/links';
import NotesFeature from './files-and-formats/notes';
import VideosFeature from './files-and-formats/videos';
import OthersFeature from './files-and-formats/others';

// Enrichment Features imports
import BacklogFeature from './enrichments/backlog';
import BulkFeature from './enrichments/bulk-ops';
import CustomViewsFeature from './enrichments/custom-views';
import ImportsExportsFeature from './enrichments/importsexports';
import OcrFeature from './enrichments/ocr';
import TranscriptionsFeature from './enrichments/transcriptions';
import TrashFeature from './enrichments/trash';

// Exstensibility Features imports
import AndroidFeature from './apps-and-integrations/android';
import APIFeature from './apps-and-integrations/api';
import ChromeFeature from './apps-and-integrations/chrome';
import IntegrationsFeature from './apps-and-integrations/integrations';
import IOSFeature from './apps-and-integrations/ios';
import MacOSFeature from './apps-and-integrations/macos';
import WebAppFeature from './apps-and-integrations/webapp';
import WindowsFeature from './apps-and-integrations/windows';

const FeaturesPage = () => {
  const features = [
    {
      category: 'Core Features',
      features: [
        { id: 'save', title: 'Save' },
        { id: 'workspaces', title: 'Workspaces' },
        { id: 'collections', title: 'Collections' },
        { id: 'tagging', title: 'Tagging' },
        { id: 'accounts', title: 'Accounts' },
        { id: 'collaboration', title: 'Collaboration' },
        { id: 'teams', title: 'Teams' },
        { id: 'enrichment', title: 'Enrichment' },
        { id: 'search', title: 'Search' },
        { id: 'sharing', title: 'Sharing' },
      ],
    },
    {
      category: 'Files & Formats',
      features: [
        { id: 'links', title: 'URLs & Links' },
        { id: 'images', title: 'Images' },
        { id: 'videos', title: 'Videos' },
        { id: 'documents', title: 'Files & Documents' },
        { id: 'notes', title: 'Notes' },
        { id: 'code', title: 'Code' },
        // { id: 'emails', title: 'Emails' },
        { id: 'audio', title: 'Audio' },
        { id: 'others', title: 'Other Formats' },
      ],
    },
    {
      category: 'Enrichments & Management',
      features: [
        { id: 'backlog', title: 'Backlog' },
        { id: 'trash', title: 'Trash & Deletes' },
        { id: 'bulk', title: 'Bulk Operations' },
        { id: 'customviews', title: 'Custom Views & Filters' },
        // { id: 'importsexports', title: 'Imports & Exports' },
        // { id: 'ocr', title: 'OCR' },
        // { id: 'transcription', title: 'Transcriptions' },
      ],
    },
    // {
    //   category: 'Apps & Integrations',
    //   features: [
    //     { id: 'webapp', title: 'Savepad for Web' },
    //     { id: 'chrome', title: 'Chrome Extension' },
    //     { id: 'ios', title: 'Savepad for iOS' },
    //     { id: 'macos', title: 'Savepad for MacOS' },
    //     { id: 'android', title: 'Savepad for Android' },
    //     { id: 'windows', title: 'Savepad for Windows' },
    //     { id: 'api', title: 'Savepad API' },
    //     { id: 'integrations', title: 'Apps & Integrations' },
    //   ],
    // },
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
        // buttonLabel="Get started for free"
        // buttonHref="/signup"
        // buttonVariant="primary"
      />

<section className="relative max-w-[1140px] mx-auto">
        <div className="container mx-auto max-w-[1140px] flex relative">
          <FeatureTOC features={features} />
          <div className="md:w-3/4 w-full px-4">

<div>
      <Banner
        variant="warning"
        title=""
        message="Features are subject to change rapidly as we gather initial feedback during our beta phase."
      />
    </div>

            {/* Core Features */}
            <h2 className="">Core Features</h2>
            <p className="mb-8">The fundamentals of Savepad that make it the ideal swipe file and knowledge base for you.</p>

            <SaveFeature />
            <WorkspacesFeature />
            <CollectionsFeature />
            <TaggingFeature />
            <AccountsFeature />
            <CollaborationFeature />
            <TeamsFeature />
            <EnrichmentFeature />
            <SearchFeature />
            <SharingFeature />


            {/* Files */}
            <h2 className="">Files & Formats</h2>
            <p className="mb-8">The fundamentals of Savepad that make it the ideal swipe file and knowledge base for you.</p>

            <LinksFeature />
            <ImagesFeature />
            <VideosFeature />
            <DocumentsFeature />
            <NotesFeature />
            <CodeFeature />
            {/* <EmailsFeature /> */}
            <AudioFeature />
            <OthersFeature />


            {/* Collaboration */}
            <h2 className="">Enrichments & Management</h2>
            <p className="mb-8">The fundamentals of Savepad that make it the ideal swipe file and knowledge base for you.</p>

            <BacklogFeature />
            <TrashFeature />
            <BulkFeature />
            <CustomViewsFeature />
            {/* <ImportsExportsFeature />
            <OcrFeature />
            <TranscriptionsFeature /> */}


            {/* Extensibility */}
            {/* <h2 className="">Extensibility, Apps, & Integrations</h2>
            <p className="mb-8">The fundamentals of Savepad that make it the ideal swipe file and knowledge base for you.</p>

            <WebAppFeature />
            <ChromeFeature />
            <IOSFeature />
            <MacOSFeature />
            <AndroidFeature />
            <WindowsFeature />
            <APIFeature />
            <IntegrationsFeature /> */}


          </div>
        </div>
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

export default FeaturesPage;
