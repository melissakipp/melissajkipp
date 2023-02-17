import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import styles from '@/styles/Post.module.css';

const Post = ({post}) => {
  return (
    <article className={styles.card}>
      <Image 
        src={post.frontmatter.cover_image} 
        alt='' 
        width={280}
        height={280} 
      />
      <p className={styles.postDate}>
        Posted on: {post.frontmatter.date}
      </p>
      <h3 className={styles.postTitle}>
        {post.frontmatter.title}
      </h3>
      <p className={styles.postList_excerpt}>
        {post.frontmatter.excerpt}
      </p>
      <Link className={styles.btn} href={`/blog/${post.slug}`}>
        Read More
      </Link>
    </article>
  );
}

export default Post;