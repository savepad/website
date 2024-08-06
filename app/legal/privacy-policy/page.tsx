"use client";

import React, { useEffect, useState } from 'react';
import Nav from '../../../components/Nav';
import CenterHero from '../../../components/CenterHero';
import WallOfText from '../../../components/WallOfText';
import Footer from '@/components/Footer';

const privacyContent = `
VERY heavily inspired by [Posthog's Privacy Policy sans the memes](https://posthog.com/privacy).

## Introduction

#### TLDR
We care about your privacy. This policy explains how we collect, use, and protect your data.

#### Official Text
This Privacy Policy describes the policies and procedures of Savepad Ou ("we," "our," or "us") on the collection, use, and disclosure of your information when you use our services. We are committed to protecting and respecting your privacy in accordance with applicable laws, including the GDPR, CCPA, CPRA, and CalOPPA.

## Data Collection

#### TLDR
We collect your name, email, IP address, and how you use our services to improve your experience..

#### Official Text
We collect personal data to provide and improve our services. The types of data we collect include:
- Identity Data: Name, username, or similar identifier.
- Contact Data: Email address.
- Technical Data: IP address, browser type and version, time zone setting, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.

## How We Use Your Data

#### TLDR
We use your data to provide our services, communicate with you, and improve our platform.

#### Official Text
We use the information we collect in various ways, including to:
- Provide, operate, and maintain our website and services.
- Improve, personalize, and expand our website and services.
- Understand and analyze how you use our website and services.
- Develop new products, services, features, and functionality.


`;

const extractHeadings = (content: string) => {
  const regex = /^(#{2,3})\s+(.*)$/gm;
  const headings = [];
  let match;
  while ((match = regex.exec(content)) !== null) {
    const [, hashes, title] = match;
    const level = hashes.length;
    const id = title.toLowerCase().replace(/\s+/g, '-');
    headings.push({ id, title, level });
  }
  return headings;
};

const PrivacyPage: React.FC = () => {
  const [headings, setHeadings] = useState<{ id: string; title: string; level: number }[]>([]);

  useEffect(() => {
    setHeadings(extractHeadings(privacyContent));
  }, []);

  return (
    <main>
      <Nav />
      <CenterHero
        tagline="In Legal & Human Text"
        heading="Privacy Policy"
        description="By signing up to an account on Savepad, you're agreeing to abide by our Privacy Policy. These are subject to change at any time, and you'll be notified of any and all changes on the email you sign up with."
      />
      <div>
          <div>
            <WallOfText content={privacyContent} />
          </div>
        </div>
        <Footer />
    </main>
  );
};

export default PrivacyPage;