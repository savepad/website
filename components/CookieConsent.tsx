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
    <div className="px-6 py-6 fixed bottom-8 left-8 w-[600px] bg-zinc-950 p-4 rounded-lg shadow-lg z-50 flex flex-col md:flex-row md:items-center md:space-x-4 text-gray-300">
      <div>
        <h3 className="text-xl pb-2">If we did things right, then no 🍪s for you!</h3>
        <p className="mt-1 mb-4">
          This website uses no third-party cookies. If we did things correctly then have no tracking, no personalization, nothing. Should things change, we will update this, and you.
        </p>
        <button
        onClick={handleAccept}
        className="w-[250px] mt-4 md:mt-0 bg-violet-700 text-gray-100 px-4 py-2 rounded hover:bg-violet-800 transition duration-300"
      >
        Sounds good!
      </button>
      </div>
    </div>
  );
};

export default CookieConsent;
