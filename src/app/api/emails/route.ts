// import { NextApiRequest } from 'next'; // Synchronous (blocking) 
import { NextRequest, NextResponse } from 'next/server'; // Asynchronous (non-blocking) Edge Runtime 
import { Resend } from 'resend';
import ContactFormEmail from '../../../emails/ContactFormEmail';
import InternalNotificationEmail from '../../../emails/InternalNotificationEmail';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {

  if (!process.env.RESEND_API_KEY) {
    console.error('Missing RESEND_API_KEY');
    return NextResponse.json({ error: 'RESEND_API_KEY not set' }, { status: 500 });
  }
  
  const { firstName, email, subject, message } = await req.json();
  if (!firstName || !email || !subject || !message) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }

  // Convert line breaks to <br> tags
  const formattedMessage = message.replace(/\n/g, '<br>');

  try {
    await resend.emails.send({
      from: 'no-reply@melissajkipp.com',
      bcc: 'melissakipp.az@gmail.com',
      to: email,
      subject: 'Welcome to melissajkipp.com',
      react: ContactFormEmail({ firstName, email }),
    });

    await resend.emails.send({
      from: 'contact@melissajkipp.com',
      to: 'melissakipp.az@gmail.com',
      subject: `New contact form submission: ${subject}`,
      react: InternalNotificationEmail({ 
        name: firstName, 
        email, 
        subject, 
        message: formattedMessage, 
      }),
    });
    
    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: 'Email sending failed' }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({ hello: "World!" });
}
