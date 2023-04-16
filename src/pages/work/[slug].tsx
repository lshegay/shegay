import {
  GetStaticPaths,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from 'next';
import Head from 'next/head';
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

export default function Project({ post: { source, ...post } }: PageProps) {
  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>
      <div className="h-full w-full dark:bg-black dark:text-white">
        <div className="relative z-[1] flex h-full min-h-screen flex-col">
          <Header className="shrink-0" />
          <Container
            className="prose prose-pink my-24 max-w-none
              dark:prose-invert prose-h4:mb-0
              prose-p:leading-8 prose-img:my-0"
          >
            <MDXRemote {...source} frontmatter={post} components={components} />
          </Container>
        </div>
        <div className="absolute top-0 left-0 z-0 h-full w-full overflow-hidden">
          <Container className="relative h-full">
            <Light className="absolute left-0 top-[10%]" />
            <Light color="#FF2121" className="absolute right-0 top-1/3" />
          </Container>
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
