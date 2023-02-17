import React from 'react';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

import Post from '@/components/Post';
import styles from '@/styles/Blog.module.css';
import { SortByDate } from '@/utils/SortByDate';

const Blog = ({posts}) => {
  return (
    <main className={styles.main}>
      <section>
        <h2 className={styles.pageTitle}>Blog Post</h2>
        <ul className={styles.postList}>
          {posts.map((post, index) => (
            <li key={posts.filename} className={styles.postList__item}>
              <Post post={post} />
            </li>
          ))}
            
        </ul>
      </section>
    </main>
  );
}


export async function getStaticProps() {
  // Get files from the posts dir src\pages\blog\posts\test.md
  const files = fs.readdirSync(path.join('src/posts/'));

  // Get slug and frontmatter from posts
  const posts = files.map(filename => {
  // Create slug
  const slug = filename.replace('.md', '');

    // Get frontmatter
    const markdownWithMeta = fs.readFileSync(
      path.join('src/posts', filename),
      'utf-8'
    );

    const { data: frontmatter } = matter(markdownWithMeta);

    return {
      slug,
      frontmatter,
    }
  });
  
  return {
    props: {
      posts: posts.sort(SortByDate),
    }
  }
}

export default Blog;