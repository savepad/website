import { NextResponse } from 'next/server';

export const runtime = 'edge';

export async function POST(req: Request) {
  const { email, captchaToken } = await req.json();

  if (!email || !captchaToken) {
    return NextResponse.json({ error: 'Email and Turnstile token are required' }, { status: 400 });
  }

  const TURNSTILE_SECRET_KEY = process.env.TURNSTILE_SECRET_KEY;
  if (!TURNSTILE_SECRET_KEY) {
    return NextResponse.json({ error: 'Turnstile secret key is missing' }, { status: 500 });
  }

  const verifyUrl = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';
  const verifyBody = new URLSearchParams({
    secret: TURNSTILE_SECRET_KEY,
    response: captchaToken,
  });

  try {
    const verifyResponse = await fetch(verifyUrl, {
      method: 'POST',
      body: verifyBody,
    });
    const verifyData = await verifyResponse.json();

    if (!verifyData.success) {
      return NextResponse.json({ error: 'Invalid Turnstile token' }, { status: 400 });
    }
  } catch (error) {
    return NextResponse.json({ error: 'Failed to verify Turnstile token' }, { status: 500 });
  }

  const API_KEY = process.env.MAILERLITE_API_KEY;
  const GROUP_ID = process.env.MAILERLITE_GROUP_ID;

  if (!API_KEY || !GROUP_ID) {
    return NextResponse.json({ error: 'Mailerlite API key or Group ID is missing' }, { status: 500 });
  }

  const endpoint = `https://api.mailerlite.com/api/v2/groups/${GROUP_ID}/subscribers`;

  const requestOptions: RequestInit = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-MailerLite-ApiKey': API_KEY,
    },
    body: JSON.stringify({ email }),
  };

  try {
    const response = await fetch(endpoint, requestOptions);

    if (response.ok) {
      const slackWebhookUrl = process.env.SLACK_WEBHOOK_URL;

      if (slackWebhookUrl) {
        const slackPayload = {
          text: `New email submitted: ${email}`,
        };

        await fetch(slackWebhookUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(slackPayload),
        });
      }

      return NextResponse.json({ message: 'Subscribed successfully!' });
    } else {
      const error = await response.json();
      return NextResponse.json({ error: error.message }, { status: response.status });
    }
  } catch (error) {
    return NextResponse.json({ error: 'Failed to subscribe. Please try again later.' }, { status: 500 });
  }
}
