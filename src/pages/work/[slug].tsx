import { useEffect, useState } from 'react';
import {
  GetStaticPaths,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from 'next';
import { NextSeo } from 'next-seo';
import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote';

import { Light } from '@/components/decorations';
import { Container, Footer, Header } from '@/components/layout';
import { getAllPosts, getPostBySlug } from '@/utils/ssg';
import { Section, HoverImage } from '@/components/markdown';

export type PageProps = InferGetStaticPropsType<typeof getStaticProps>;

export const components: MDXRemoteProps['components'] = {
  Image: HoverImage,
  Section,
};

const colors = [
  '#FF2121',
  'rgb(0 62 255)',
  '#F15D5D',
  '#F329F8',
  'rgb(0 62 255)',
  '#D321FF',
];

export default function Project({ post: { source, ...post } }: PageProps) {
  const [N, setN] = useState(4);

  useEffect(() => {
    if (typeof document == 'undefined') return;

    setN(Math.round(document.body.scrollHeight / 600));
  }, []);

  return (
    <>
      <NextSeo
        title={post.title}
        description={`${post.description} — Leonid Shegay`}
        openGraph={{
          images: post.cover ? [{ url: post.cover, alt: post.slug }] : [],
        }}
      />
      <div className="h-full w-full dark:bg-black dark:text-white">
        <div
          className="relative z-[1] flex h-full min-h-screen
          flex-col border-b-[1px] dark:border-y-neutral-900"
        >
          <Header className="shrink-0" />
          <Container
            className="prose prose-pink my-24 max-w-none
              dark:prose-invert prose-h4:mb-0
              prose-p:leading-8 prose-img:my-0"
          >
            <MDXRemote {...source} frontmatter={post} components={components} />
          </Container>
          <div className="absolute top-0 left-0 z-0 h-full w-full overflow-hidden">
            <Container className="relative h-full">
              {new Array(N).fill(0).map((_, index) => (
                <Light
                  key={index}
                  className="absolute"
                  color={colors[index % colors.length]}
                  style={{
                    top: index * 600,
                    ...(index % 2 ? { right: 0 } : {}),
                  }}
                />
              ))}
            </Container>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export async function getStaticProps({
  params,
}: GetStaticPropsContext<{
  slug: string;
}>) {
  if (!params) return null;

  const post = await getPostBySlug(params.slug);

  return {
    props: {
      post,
    },
  };
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getAllPosts();

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
};
