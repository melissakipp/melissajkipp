'use client';

import { useState } from "react";
import { useRouter } from 'next/navigation';
import Input from "../ui/Input";
import CustomButton from "../ui/CustomButton";

export default function ContactForm() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });
      
      if (response.ok) {
        console.log('Email sent successfully');
        router.push('/thank-you');
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }
  };

  return (
    <section className="my-[10vw] mx-auto px-8 pt-6 pb-8 w-full bg-slate-50 shadow-md rounded max-w-md">
      <h2 className="mb-6 text-2xl font-bold text-center">Contact Form</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <fieldset aria-label="personal information">
          <Input 
            type="text"
            name="name"
            label="Name"
            placeholder="Enter your first name"
            value={formData.name}
            onChange={handleChange}
            className="my-2 p-3 w-full shadow appearance-none border rounded text-gray-700 leading-tight focus:border-zinc-400 focus:ring-zinc-600 focus:ring-offset-2 focus:outline-purple-700 focus:shadow-outline"
          />
          <Input 
            type="email"
            name="email"
            label="Email"
            placeholder="Enter your email address"
            value={formData.email}
            onChange={handleChange}
            className="my-2 p-3 w-full shadow appearance-none border rounded text-gray-700 leading-tight focus:border-zinc-400 focus:ring-zinc-600 focus:ring-offset-2 focus:outline-purple-700 focus:shadow-outline"
          /> 
        </fieldset>
        <fieldset aria-label="Message details">
          <Input 
            type="text"
            name="subject"
            label="Subject"
            placeholder="Enter the subject of your message"
            value={formData.subject}
            onChange={handleChange}
            className="my-2 p-3 w-full shadow appearance-none border rounded text-gray-700 leading-tight focus:border-zinc-400 focus:ring-zinc-600 focus:ring-offset-2 focus:outline-purple-700 focus:shadow-outline"
          />
          <label htmlFor="message" className="block m-2">Message
            <textarea
              name="message"
              placeholder="Enter your message here"
              value={formData.message}
              onChange={handleChange}
              className="my-2 p-3 w-full shadow appearance-none border rounded text-gray-700 leading-tight focus:border-zinc-400 focus:ring-zinc-600 focus:ring-offset-2 focus:outline-purple-700 focus:shadow-outline"
            />
          </label>
        </fieldset>
        <fieldset aria-label="Submit">
          <CustomButton 
            text={isSubmitting ? "Sending..." : "Submit"}
            type="submit"
            value="Submit"
            disabled={isSubmitting}
          />
        </fieldset>
      </form>
    </section>
  );
}