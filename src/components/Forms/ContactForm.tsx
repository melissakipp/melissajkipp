'use client';
import { useState } from "react";

import Input from "../ui/Input";
import CustomButton from "../ui/CustomButton";

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await fetch('/pages/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: name,
          email: email,
        }),
      });
      console.log('response:', response);
      if (response.ok) {
        console.log('Email sent successfully');
         // Redirect to the thank-you page
      } else {
        alert('Something went wrong.'); //error
        console.error('Error sending email:', response.statusText);
      }
    } catch (error) {
      console.error('Error sending email:', error);
    } finally {
      setName('');
      setEmail('');
    }
    console.log('Form submitted');
  }

  return (
    <section>
      <h2>ContactForm</h2>
      <p>Fill out the form below and we'll get back to you as soon as possible.</p>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <Input 
            type="text"
            name="name"
            label="Name"
            placeholder="Enter your first name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="mt-2 p-2 block w-full rounded-md border-gray-950 shadow-sm focus:border-zinc-400 focus:ring-zinc-600 focus:ring-offset-2 focus:outline-purple-700"
          />
          <Input 
            type="text"
            name="email"
            label="Email"
            placeholder="Enter your email address"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="mt-2 p-2 block w-full rounded-md border-gray-950 shadow-sm focus:border-zinc-400 focus:ring-zinc-600 focus:ring-offset-2 focus:outline-purple-700"
          /> 
        </fieldset>
        <div className="w-[25vw]">
          <CustomButton 
            text="Submit"
            type="submit"
            value="Submit"
          />
        </div>
      </form>
    </section>
  );
}