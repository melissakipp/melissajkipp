'use client';
import { useState } from "react";

import Input from "../ui/Input";
import CustomButton from "../ui/CustomButton";

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await fetch('/api/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: name,
          email: email,
          subject: subject,
          message: message,
        }),
      });
      
      if (response.ok) {
        console.log('Email sent successfully');    
      } else {
        alert('Something went wrong.'); 
        console.error('Error sending email:', response.statusText);
      }
    } catch (error) {
      console.error('Error sending email:', error);
    } finally {
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
    }
  }

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
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="my-2 p-3 w-full shadow appearance-none border rounded text-gray-700 leading-tight focus:border-zinc-400 focus:ring-zinc-600 focus:ring-offset-2 focus:outline-purple-700 focus:shadow-outline"
          />
          <Input 
            type="text"
            name="email"
            label="Email"
            placeholder="Enter your email address"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="my-2 p-3 w-full shadow appearance-none border rounded text-gray-700 leading-tight focus:border-zinc-400 focus:ring-zinc-600 focus:ring-offset-2 focus:outline-purple-700 focus:shadow-outline"
          /> 
        </fieldset>
        <fieldset aria-label="Message details">
          <Input 
            type="text"
            name="subject"
            label="Subject"
            placeholder="Enter the subject of your message"
            value={subject}
            onChange={(event) => setSubject(event.target.value)}
            className="my-2 p-3 w-full shadow appearance-none border rounded text-gray-700 leading-tight focus:border-zinc-400 focus:ring-zinc-600 focus:ring-offset-2 focus:outline-purple-700 focus:shadow-outline"
          />
          <label htmlFor="message" className="block m-2">Message
            <textarea
              name="message"
              placeholder="Enter your message here"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              className="my-2 p-3 w-full shadow appearance-none border rounded text-gray-700 leading-tight focus:border-zinc-400 focus:ring-zinc-600 focus:ring-offset-2 focus:outline-purple-700 focus:shadow-outline"
            />
          </label>
        </fieldset>
        <fieldset aria-label="Submit">
          <CustomButton 
            text="Submit"
            type="submit"
            value="Submit"
          />
        </fieldset>
      </form>
    </section>
  );
}