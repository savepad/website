"use client";

import React, { useEffect, useState } from 'react';

const CookieConsent: React.FC = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'true');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:bottom-8 md:left-8 md:right-auto max-w-full md:max-w-[600px] bg-zinc-950 p-4 md:p-6 rounded-lg shadow-lg z-50 flex flex-col md:flex-row md:items-center md:space-x-4 text-gray-300">
      <div>
        <h3 className="text-lg md:text-xl pb-2">One 🍪 for you!</h3>
        <p className="text-sm md:text-base mt-1 mb-4">
          At the moment, we don&apos;t share any data with third parties. The only external cookie is from Cloudflare to verify waitlist submissions. Should this change, we will update this.
        </p>
      </div>
      <button
        onClick={handleAccept}
        className="w-full md:w-auto bg-violet-700 text-gray-100 px-4 py-2 rounded hover:bg-violet-800 transition duration-300"
      >
        Dismiss
      </button>
    </div>
  );
};

export default CookieConsent;
