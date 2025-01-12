"use client";

import React, { useEffect, useState } from 'react';
import Nav from '../../../components/Nav';
import CenterHero from '../../../components/CenterHero';
import WallOfText from '../../../components/WallOfText';
import Footer from '@/components/Footer';
import Banner from '@/components/Banner';

const privacyContent = `
Last Updated: 12 Jan, 2025

At Savepad.app ("we", "our", "us"), protecting your privacy, ensuring secure services, and being transparent about how we handle your data is our top priority. This policy outlines how we collect, use, and protect your personal data across our app and website, in compliance with the General Data Protection Regulation (GDPR).

Personal data:

Account and Login Information:
When you sign up or log in via SSO (Google or Apple), we collect your name, email address, and login timestamps via Supabase.

Usage Data (for Analytics):
We use Posthog (self-hosted in the EU) to track anonymized usage data such as feature interactions and page views. This data helps us improve our services. IP addresses are anonymized for analytics purposes.

Communication Data:

Transactional Emails: We use Postmark to send emails related to your account, such as verification and login confirmations.
Marketing Emails (optional): If you subscribe, we use Mailerlite (EU-hosted) for sending newsletters. You can unsubscribe at any time.

Device and System Information:
When you access our website or app, Cloudflare collects IP addresses for security and load balancing purposes.

How We Use Your Data

We process personal data for the following purposes, with the corresponding legal bases:

Providing our services: To ensure account access, session management, and secure operation. The legal basis is contractual necessity.

Improving user experience: To analyze feature usage and improve performance. The legal basis is legitimate interest.

Email communications: To send transactional emails, such as password resets, or marketing updates if you have opted in. The legal basis for marketing emails is user consent.

Data Sharing and Processors

We do not sell your data to third parties. However, we may share certain data with trusted third-party services solely for running Savepad.app:

Supabase (Database): Secure storage of user accounts and authentication.

Cloudflare (Hosting, DNS, CDN): Protection against cyber threats and efficient global content delivery.

Posthog (Analytics): Collecting anonymized analytics to improve our services.

Postmark (Emails): Sending transactional emails like login notifications and password resets.

Mailerlite (Marketing): Sending newsletters to subscribed users.

All data processed by these services remains within the EU.

Cookies and Local Storage

We use minimal cookies and local storage to ensure a secure and personalized user experience.

Website Cookies

Cloudflare Turnstile: We use a single cookie for authentication purposes to verify non-bot interactions. This is a necessary security measure.

App Local Storage:

We store data locally for login sessions and app state to improve your experience. This data is not shared with any other third parties outside the services mentioned above.

Your Rights

As an EU resident, you have the right to:

Access, correct, or delete your data.

Restrict or object to the processing of your data.

Withdraw consent for marketing communications at any time.

To exercise your rights, contact us at hey@savepad.app.

Data Retention
We retain your data only as long as necessary:
Account data: Retained until you delete your account or request deletion.
Analytics data: Retained for up to [Insert Timeframe] to improve our services.

Data Security

We use modern security practices such as encryption, secure servers, and access controls to protect your data.

Changes to This Policy

We may update this policy to reflect changes in our services or regulations. We will notify you of any significant changes.
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
        tagline=""
        heading="Security, Cookies, and Privacy Policy"
        description="By signing up to an account on Savepad, you're agreeing to abide by our underlying policies. These are subject to change at any time, and you'll be notified changes."
      />
      <div>

      <section className="mx-auto px-4 pb-4 max-w-[750px]">
      <div>
      <Banner
        variant="warning"
        title=""
        message="This page is a work-in-progress and is being constantly updated as we're progressing with our incorporation."
      />
      </div>
      </section>

          <div>
            <WallOfText content={privacyContent} />
          </div>
        </div>
        <Footer />
    </main>
  );
};

export default PrivacyPage;