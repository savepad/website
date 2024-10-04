import { NextResponse } from 'next/server';
import { getRequestContext } from '@cloudflare/next-on-pages'
import * as z from 'zod';

export const runtime = 'edge';

async function verifyTurnstile(captchaToken: string): Promise<boolean> {
  const TURNSTILE_SECRET_KEY = getRequestContext().env.TURNSTILE_SECRET_KEY;

  if (!TURNSTILE_SECRET_KEY) {
    throw new Error('Turnstile secret key is missing');
  }

  const verifyUrl = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';

  const response = await fetch(verifyUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({secret: TURNSTILE_SECRET_KEY, response: captchaToken}),
  });
  const data = await response.json() as any;

  return data.success;
}

async function notifySlack(email: string): Promise<void> {
  const slackWebhookUrl = getRequestContext().env.SLACK_WEBHOOK_URL;

  if (!slackWebhookUrl) {
    console.warn('Slack webhook URL is not configured');
    return;
  }

  const slackPayload = {
    text: `New email submitted: ${email}`,
  };

  await fetch(slackWebhookUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(slackPayload),
  });
}

const requestSchema = z.object({
  email: z.string().email(),
  captchaToken: z.string(),
});

export async function POST(req: Request) {
  try {
    const result  = requestSchema.safeParse(await req.json());
    if (!result.success) {
      return NextResponse.json({ error: 'Email and Turnstile token are required' }, { status: 400 });
    }
    const { email, captchaToken } = result.data;

    const isValidTurnstile = await verifyTurnstile(captchaToken);
    if (!isValidTurnstile) {
      return NextResponse.json({ error: 'Invalid Turnstile token' }, { status: 400 });
    }

    const API_KEY = getRequestContext().env.MAILERLITE_API_KEY;
    const GROUP_ID = getRequestContext().env.MAILERLITE_GROUP_ID;

    if (!API_KEY || !GROUP_ID) {
      return NextResponse.json({ error: 'MailerLite API key or Group ID is missing' }, { status: 500 });
    }

    const mailerLiteEndpoint = `https://api.mailerlite.com/api/v2/groups/${GROUP_ID}/subscribers`;
    const mailerLiteResponse = await fetch(mailerLiteEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-MailerLite-ApiKey': API_KEY,
      },
      body: JSON.stringify({ email }),
    });

    if (!mailerLiteResponse.ok) {
      const mailerLiteError = await mailerLiteResponse.json() as any;
      return NextResponse.json({ error: mailerLiteError.message }, { status: mailerLiteResponse.status });
    }

    await notifySlack(email);

    return NextResponse.json({ message: 'Subscribed successfully!' });

  } catch (error) {
    console.error('Error handling request:', error);
    return NextResponse.json({ error: 'Failed to process the request. Please try again later.' }, { status: 500 });
  }
}
