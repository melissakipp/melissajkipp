'use client';

import { useState } from "react";
import { useRouter } from 'next/navigation';
import Input from "../ui/Input";
import CustomButton from "../ui/CustomButton";
import FormField from "../ui/FormField";

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
    <section className="w-full my-[10vw] mx-auto px-6 py-6 bg-slate-50 shadow-md rounded max-w-md">
      <h2 className="text-2xl font-bold text-center">Contact Form</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <fieldset aria-label="personal information">
          <FormField
            label="Name"
            id="name"
            type="text"
            name="name"
            placeholder="Enter your name"
            onChange={handleChange}
            required
          />
          <FormField
            label="Email"
            id="email"
            type="email"
            name="email"
            placeholder="Enter your email"
            onChange={handleChange}
            required
          />
        </fieldset>
        <fieldset aria-label="Message details">
          <FormField
              label="Subject"
              id="subject"
              type="text"
              name="subject"
              placeholder="Subject of your message"
              onChange={handleChange}
              required
            />
          <FormField
            label="Message"
            id="message"
            name="message"
            placeholder="Your message here"
            onChange={handleChange}
            isTextarea
            rows={6}
          />
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