import Link from 'next/link';
import React from 'react';

import styles from '@/styles/ContactBadges.module.css';

const ContactBadges = () => {
  return (
    <section className={styles.container}>
      <h2 className='sr-only'>Social Media</h2>
      <ul className={styles.media__list}>
        <li className={styles.media__item} >
          <Link className={styles.media__link} href='https://github.com/melissakipp'>
            GitHub
          </Link>
        </li>
        <li className={styles.media__item} >
          <Link className={styles.media__link} href='https://github.com/melissakipp'>
            CodePen
          </Link>
        </li>
        <li className={styles.media__item} >
          <Link className={styles.media__link} href='https://www.linkedin.com/in/melissajkipp/'>
            LinkedIn
          </Link>
        </li>
      </ul>
    </section>
  );
}

export default ContactBadges;