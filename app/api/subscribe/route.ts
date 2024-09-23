import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { email } = await req.json();

  if (!email) {
    return NextResponse.json({ error: 'Email is required' }, { status: 400 });
  }

  const API_KEY = process.env.MAILERLITE_API_KEY;
  const GROUP_ID = process.env.MAILERLITE_GROUP_ID;

  if (!API_KEY || !GROUP_ID) {
    return NextResponse.json({ error: 'Mailerlite API key or Group ID is missing' }, { status: 500 });
  }

  const endpoint = `https://api.mailerlite.com/api/v2/groups/${GROUP_ID}/subscribers`;

  const requestOptions: RequestInit = {
    method: 'POST', // Ensure the method is a string
    headers: {
      'Content-Type': 'application/json',
      'X-MailerLite-ApiKey': API_KEY,
    },
    body: JSON.stringify({ email }),
  };

  try {
    const response = await fetch(endpoint, requestOptions);

    if (response.ok) {
      return NextResponse.json({ message: 'Subscribed successfully!' });
    } else {
      const error = await response.json();
      return NextResponse.json({ error: error.message }, { status: response.status });
    }
  } catch (error) {
    return NextResponse.json({ error: 'Failed to subscribe. Please try again later.' }, { status: 500 });
  }
}
