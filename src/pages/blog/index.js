import React from 'react';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const Blog = ({posts}) => {
  return (
    <main>
      <h2>Blog Post</h2>
      <section>
        <ul>
          <li>
            {posts.map((post, index) => (
              <h3>{post.frontmatter.title}</h3>
            ))}
            
          </li>
        </ul>
      </section>
      {/* <div className='posts'>
        {posts.map((post, index) => (
          <Post key={index} post={post} />
        ))}
      </div> */}
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
      posts,
    }
  }
}


// export async function getStaticProps() {
//   // Get files from the posts dir src\pages\blog\posts\test.md
//   const files = fs.readdirSync(path.join('posts'))

//   // Get slug and frontmatter from posts
//   const posts = files.map((filename) => {
//     // Create slug
//     const slug = filename.replace('.md', '')

//     // Get frontmatter
//     const markdownWithMeta = fs.readFileSync(
//       path.join('posts', filename),
//       'utf-8'
//     )

//     const { data: frontmatter } = matter(markdownWithMeta)

//     return {
//       slug,
//       frontmatter,
//     }
//   })

//   return {
//     props: {
//       posts: posts,
//     },
//   }
// }

export default Blog;