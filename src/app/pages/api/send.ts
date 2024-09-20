import { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';
import ContactFormEmail from '../../../emails/ContactFormEmail';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { firstName, email } = req.body;

    const { data, error } = await resend.emails.send({
      from: 'melissa@thelaunchmarket.com',
      to: ['melissakipp.az@gmail.com'], 
      subject: 'New Contact Lead',
      react: ContactFormEmail({ firstName, email }),  
    });

    if (error) {
      console.error('Resend email error:', error); // Log error details
      return res.json({ error: 'Email sending failed', status: 500 });
    }

    return res.json(data);
  } catch (error) {
    console.error('Server error:', error); // Log server-side errors
    return res.json({ error: 'An internal server error occurred', status: 500 });
  }
}