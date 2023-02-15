import React from 'react';
import Head from 'next/head';

import Footer from './Footer';
import Header from './Header';

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Melissa J Kipp | Home</title>
        <meta name="description" content="Melissa Kipp, a multi-talented Full Stack Developer, Frontend Developer, Graphic Designer, and Photographer. Melissa believes in creating a unique perspective that inspires others, and in developing a web experience that is accessible to all. Explore her work and discover the art of web development." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        {/* Fonts */}
        <link rel="stylesheet" href="https://use.typekit.net/vfw3tos.css"></link>
      </Head>

      <Header />

      { children }
      
      <Footer />
    </>
  );
}

export default Layout;