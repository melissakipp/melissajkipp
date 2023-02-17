import React from "react";
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import mark, { marked } from 'marked';
import Link from 'next/link';
import Image from "next/image";

import styles from '@/styles/PostPage.module.css';

export default function PostPage({
  frontmatter: {title, date, cover_image}, 
  slug, 
  content
  }) {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <header className={styles.header}>
          <Link className={styles.btn} href='/blog'>
            Go Back
          </Link>
        </header>
        <article>
          <h1 className={styles.title}>
            {title}
          </h1>
          <figure className={styles.imgContainer}>
            <Image 
              className={styles.image} 
              src={cover_image} 
              alt='' 
              width={500}
              height={500} 
            />
            <figcaption className="sr-only">Test</figcaption>
          </figure>
          <p className={styles.postDate}>Post on: {date}</p>
          <section className={styles.postBody}>
            <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
          </section>
        </article>
      </div>
    </main>
  )
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('src/posts'));

  const paths = files.map(filename => ({
    params: {
      slug: filename.replace('.md', '')
    },
  }));

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({params: { slug } }) {
  
  const markdownWithMeta = fs.readFileSync(path.join('src/posts', slug + '.md'), 'utf-8');

  const {data:frontmatter, content} = matter(markdownWithMeta);

  return {
    props: {
      frontmatter,
      slug,
      content,
    }
  }
}