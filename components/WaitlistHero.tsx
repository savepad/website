"use client";

import React, { useState } from 'react';
import Button from './Button';
import { FaArrowRight, FaPlay } from 'react-icons/fa';
import { Turnstile } from '@marsidev/react-turnstile';

const WaitlistHero: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [captchaToken, setCaptchaToken] = useState('');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    if (!captchaToken) {
      setError('Please complete the CAPTCHA.');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, captchaToken }),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        const data = await response.json();
        setError(data.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="flex flex-col items-center justify-center min-h-[900px] text-center px-4 max-w-[1140px] mx-auto">
      <div className="max-w-[625px] w-full">
        <p className="text-sm text-gray-400">Currently in closed beta 🪄</p>
        <h1 className="text-5xl md:text-6xl font-semibold font-outfit mt-2">
          Helping growth teams get their sh*t together
        </h1>
        <p className="mt-4 text-base md:text-medium leading-loose">
          Savepad is the collaborative knowledge base to store, organize, reference, share, and actually use all the resources and examples you find online.
        </p>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4 w-full">
            <div className="flex flex-col w-full md:w-auto">
              <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="Enter your email address"
                className="px-8 py-3 rounded bg-zinc-900 text-gray-100 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-violet-700 w-full md:w-[350px]"
                required
              />
              {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
            </div>
            <button
              type="submit"
              disabled={loading}
              className={`inline-flex items-center justify-center rounded bg-violet-700 text-gray-100 px-8 py-3 hover:bg-violet-800 transition duration-300 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {loading ? 'Submitting...' : 'Get access'}
              {!loading && <FaArrowRight className="ml-2" />}
            </button>
          </form>
        ) : (
          <p className="mt-4 text-sm text-green-600">Thanks for signing up! We&apos;ll be in touch with more details soon.</p>
        )}

        <div className="mt-4">
          <Turnstile
            siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY as string}
            onSuccess={(token: string) => setCaptchaToken(token)}
          />
        </div>

        <p className="mt-8 text-xs leading-relaxed text-gray-400">
          ⚙️ We&apos;re currently in closed beta with our waitlist users to get Savepad ready for our public launch!
        </p>

        <div className="mt-8 flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4">
          <Button label="Watch demo videos" variant="secondary" icon={FaPlay} href="/user-guides" />
        </div>
      </div>
    </section>
  );
};

export default WaitlistHero;
