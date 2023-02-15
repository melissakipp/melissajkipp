import React from 'react';

import styles from '@/styles/Hero.module.css';
import ContactBadges from './ContactBadges';

const Hero = () => {
  return (
    <article className={styles.container}>
      <p className={styles.hello} >
        Hello,
      </p>
      <p>I'm <strong className={styles.name}>Melissa Kipp</strong>, a full stack developer based in Arizona and I'm driven by curiosity of all things on the web. I am passionate about accessibility and my career goal is to create beautiful websites that are open for everyone.</p>
      <ContactBadges />
    </article>
  );
}

export default Hero;