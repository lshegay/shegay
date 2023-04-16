import { InferGetStaticPropsType } from 'next';
import { NextSeo } from 'next-seo';
import { motion } from 'framer-motion';

import { CardGrid, Container, Footer, Header } from '@/components/layout';
import { Light } from '@/components/decorations';
import { getAllPosts } from '@/utils/ssg';

type PageProps = InferGetStaticPropsType<typeof getStaticProps>;

export default function Work({ posts }: PageProps) {
  return (
    <>
      <NextSeo title="Work" />
      <div className="h-full w-full dark:bg-black dark:text-white">
        <div
          className="relative z-[1] flex h-full min-h-screen flex-col
          border-b-[1px] dark:border-y-neutral-900"
        >
          <Header className="shrink-0" />
          <Container>
            <div className="my-24 w-full text-center">
              <motion.h1
                className="mb-24 bg-gradient-to-b from-[#CD62FF] to-[#FF50B9] bg-clip-text
              font-radwave text-2xl text-transparent md:text-4xl"
              >
                Work
              </motion.h1>
              <CardGrid className="mb-9" posts={posts} />
            </div>
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

export async function getStaticProps() {
  const posts = await getAllPosts();

  return {
    props: {
      posts,
    },
  };
}
