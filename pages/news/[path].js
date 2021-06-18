import Link from 'next/link';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import {AppBar, Container, IconButton, Toolbar} from "@material-ui/core";
import React from "react";

export default function BlogPost({ siteTitle, frontmatter, markdownBody }) {
  if (!frontmatter) return <></>;

  return (
      <>
      <AppBar position={"sticky"}>
        <Container maxWidth={'lg'} className="home">
          <Toolbar>
            <Link href={'/'} color={"error"}>Home</Link>
            <Link href={'/novinky'}  color={"error"}>Novinky</Link>
          </Toolbar>
        </Container>
      </AppBar>
        <Container maxWidth={'lg'} className="home">
          <article>
            <h1>{frontmatter.title}</h1>
            <p>By {frontmatter.author}</p>
            <div>
              <ReactMarkdown source={markdownBody} />
            </div>
          </article>
        </Container>

</>
  );
}

export async function getStaticProps({ ...ctx }) {
  const { path } = ctx.params;

  const content = await import(`./${path}.md`);
  const data = matter(content.default);

  return {
    props: {
      frontmatter: data.data,
      markdownBody: data.content,
    },
  };
}

export async function getStaticPaths() {
  const blogSlugs = ((context) => {
    const keys = context.keys();
    const data = keys.map((key, index) => {
      let slug = key.replace(/^.*[\\\/]/, '').slice(0, -3);

      return slug;
    });
    return data;
  })(require.context('./', true, /\.md$/));

  const paths = blogSlugs.map((slug) => `/news/${slug}`);

  return {
    paths,
    fallback: false,
  };
}
