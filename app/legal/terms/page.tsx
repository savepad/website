"use client";

import React, { useEffect, useState } from 'react';
import Nav from '../../../components/Nav';
import CenterHero from '../../../components/CenterHero';
import WallOfText from '../../../components/WallOfText';
import Footer from '@/components/Footer';
import Banner from '@/components/Banner';

const termsContent = `
By using the Savepad website and/or the Savepad apps ("Service”), you are agreeing to the following terms and conditions ("Terms of Service”). These terms apply to any user or customer on Savepad.

For easy interpretation, we've summarized every section into plain english too.

If you are entering into this agreement on behalf of a company or other legal entity, you represent that you have the authority to bind such entity, its affiliates and all users who access our services through your account to these terms and conditions, in which case the terms "you” or "your” shall refer to such entity, its affiliates and users associated with it. If you do not have such authority, or if you do not agree with these terms and conditions, you must not accept this agreement and may not use the services.

We reserve the right to update and change the Terms of Service from time to time without notice. Any new features that augment or enhance the current Service, including the release of new tools and resources, shall be subject to the Terms of Service. Continued use of the Service after any such changes shall constitute your consent to such changes. You can review the most current version of the Terms of Service at any time on this page.

Violation of any of the terms below can result in the termination of your Account. While Savepad prohibits using the service for any legally questionable and/or morally questionable conduct and content, you understand and agree that Savepad cannot be held responsible for the content posted on the Service and you nonetheless may be exposed to such materials. You agree to use the Service at your own risk.

### General Terms

- You must be 16 years or older.
- You must be a human. Accounts registered by "bots” or other automated methods are not permitted.
- You must provide your username and a valid email address in order to complete the signup process, or sign up via our SSO (Single Sign-on) integrations to other services.
- Your login may only be used by one person. You may create separate logins.
- You are responsible for maintaining the security of your account and password. We cannot and will not be liable for any loss or damage from your failure to comply with this security obligation.
- You are responsible for all content posted and activity that occurs under your account.
- You may not use the Service for any illegal or unauthorized purpose.
- You must not, in the use of the Service, violate any laws in your jurisdiction (including but not limited to copyright or trademark laws).
- You must not use Savepad for content that is unlawful, offensive, spamful, hateful, racist, violent, threatening, libelous, defamatory, pornographic, obscene or otherwise objectionable or violates any party’s intellectual property or these Terms of Service.


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

const TermsPage: React.FC = () => {
  const [headings, setHeadings] = useState<{ id: string; title: string; level: number }[]>([]);

  useEffect(() => {
    setHeadings(extractHeadings(termsContent));
  }, []);

  return (
    <main>
      <Nav />
      <CenterHero
        tagline="In Legal & Human Text"
        heading="Terms of Use"
        description="By signing up to an account on Savepad, you're agreeing to abide by our Terms of Use. These are subject to change at any time, and you'll be notified of any and all changes on the email you sign up with."
      />
      <div>
      <section className="mx-auto px-4 pb-4 max-w-[750px]">
      <div>
      <Banner
        variant="warning"
        title=""
        message="This page is a work-in-progress and is being constantly updated as we're transitioning into a public Beta based on early feedback from our Waitlist users."
      />
      </div>
      </section>
          <div>
            <WallOfText content={termsContent} />
          </div>
        </div>
      <Footer />
    </main>
  );
};

export default TermsPage;