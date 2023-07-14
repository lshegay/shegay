import { InferGetStaticPropsType } from 'next';
import Image from 'next/image';
import { NextSeo } from 'next-seo';
import { motion } from 'framer-motion';

import { inViewProps, staggerProps } from '@/utils';
import { Header, Footer, Container, CardGrid } from '@/components/layout';
import { Text, Title, Grid, Autotext, Light } from '@/components/decorations';
import { Button } from '@/components/controls';
import { getAllPosts } from '@/utils/ssg';

import Taste from '@public/taste.png';
import MyPhoto from '@public/me.jpg';

type PageProps = InferGetStaticPropsType<typeof getStaticProps>;

export default function Home({ posts }: PageProps) {
  return (
    <>
      <NextSeo />
      <div className="h-screen w-full dark:bg-black dark:text-white">
        {/* Landscape */}
        <div className="h-full">
          <div className="relative z-10 flex h-full flex-col overflow-hidden">
            <Header className="shrink-0" />
            <Container
              {...staggerProps.parent}
              className="relative flex h-full flex-col items-center
              justify-center text-center"
            >
              <motion.h2
                {...staggerProps.children}
                className="font-radwave text-xl md:text-4xl"
              >
                <span
                  className="bg-gradient-to-b from-[#6AFF79] to-[#00C2FF] 
                  bg-clip-text text-transparent"
                >
                  Hey!
                </span>{' '}
                <span
                  className="bg-gradient-to-b from-[#FF0000] to-[#FF00C7] 
                  bg-clip-text text-transparent"
                >
                  this is a space of
                </span>
              </motion.h2>
              <motion.div
                {...staggerProps.children}
                className="mb-2 bg-gradient-to-b from-[#FF75D8] via-[#FF75D8] to-[#FF00B8]
              bg-clip-text text-6xl text-transparent md:text-7xl"
              >
                <Image src={Taste} alt="Developer with taste" priority></Image>
              </motion.div>
              <Text
                {...staggerProps.children}
                className="md:w-[60%] md:text-xl"
              >
                I’m Leonid Shegay and I’m versatile software engineer and Full
                Stack web developer focused on making beautiful and functional
                apps
              </Text>
              <div className="absolute bottom-11 flex flex-col justify-center">
                <span className="mb-5">Scroll Down</span>
                <div className="flex w-full flex-col items-center">
                  <div className="h-[10px] w-[10px] rounded-full border-[1px] border-white" />
                  <div className="-mt-1 h-[6px] w-[6px] animate-bounce rounded-full bg-white" />
                </div>
              </div>
            </Container>
            <div
              className="relative flex h-[200px] w-full
                overflow-hidden border-y-[1px] border-y-neutral-200 bg-black
                dark:border-y-neutral-900 md:h-[111px]"
            >
              <Container
                className="flex w-full flex-col items-center
                 justify-between py-7 text-center md:flex-row md:py-0 md:text-left"
              >
                <Text className="font-radwave text-3xl">STATUS</Text>
                <Text className="uppercase">
                  Currently based in Russia, Khabarovsk • Working as full-stack
                  engineer • Making web applications
                </Text>
              </Container>
              <Light
                color="#632CFF"
                className="absolute right-[128px] top-1/2"
                opacity={0.1}
              />
            </div>
          </div>
          <div className="absolute top-0 left-0 h-full w-full overflow-hidden">
            <Grid className="absolute top-0 left-0 h-full w-full" />
            <Container className="relative h-full">
              <Light className="absolute left-[256px] top-1/3" radius={200} />
              <Light
                color="#FF2121"
                className="absolute right-[256px] top-1/2"
                radius={200}
              />
            </Container>
          </div>
        </div>
        {/* Works */}
        <div
          className="relative w-full border-b-[1px] py-32
          dark:border-y-neutral-900 dark:bg-black dark:text-white"
        >
          <Container className="relative z-10 flex w-full flex-col">
            <div className="mb-[70px] w-full md:w-[500px]">
              <Title {...inViewProps()} className="mb-10">
                My essential works and projects
              </Title>
              <Text {...inViewProps()} className="leading-8">
                I am full-stack web developer and computer security specialist.
                I love programming, but also I love creating beautiful and many
                functional apps. Here you can see all my recent projects I’m
                really proud of!
              </Text>
              <div className="absolute z-[-1] flex h-full w-full items-center justify-center">
                <Light
                  radius={100}
                  color="#FF61AB"
                  opacity={0.4}
                  blur={100}
                  className="-ml-12 mr-64"
                />
                <Light radius={100} color="#a42b9a" opacity={0.4} blur={100} />
              </div>
            </div>
            <CardGrid className="mb-9" posts={posts} />
            <div className="text-center">
              <Button
                href="/work"
                className="px-[75px] py-[18px]"
                scroll={false}
              >
                More work
              </Button>
            </div>
          </Container>
          <div className="absolute top-0 left-0 h-full w-full overflow-hidden">
            <Container className="relative h-full">
              <Light
                color="#FF61AB"
                className="absolute left-0 bottom-[200px]"
                radius={100}
                opacity={0.4}
              />
              <Light
                color="#FF61AB"
                className="absolute right-0 top-[200px]"
                radius={100}
                opacity={0.4}
              />
            </Container>
          </div>
        </div>
        {/* About me */}
        <div
          className="relative w-full border-b-[1px] py-32 dark:border-y-neutral-900
          dark:bg-black dark:text-white"
        >
          <div className="relative z-10 flex h-full flex-col">
            <Container className="relative mb-24 flex w-full flex-col justify-center md:flex-row">
              <motion.div
                className="mb-10 w-full shrink-0 md:mb-0 md:w-[500px]"
                {...staggerProps.parent}
              >
                <Title {...staggerProps.children} className="mb-10 leading-8">
                  About me
                </Title>
                <Text {...staggerProps.children} className="leading-8">
                  As a child, I loved to play games and watch cartoons online. I
                  realized that web technology really made my childhood a little
                  more fun! Now I understand the impact this has had on my life.
                </Text>
                <br />
                <Text {...staggerProps.children} className="leading-8">
                  I am now a full-stack web engineer, game and software
                  developer. I love everything related to IT-technologies!
                </Text>
                <br />
                <Text {...staggerProps.children} className="leading-8">
                  I have a passion, but also a perfectionist vision. I want to
                  create beautiful and functional applications and websites that
                  will make the world a little better.
                </Text>
                <motion.div
                  className="relative z-[2] my-20 mx-auto rounded-2xl border-[1px]
                    border-[#343434] bg-[#2323239c] p-3
                     shadow-xl md:max-w-[330px]"
                  {...staggerProps.children}
                >
                  <Image
                    src={MyPhoto}
                    alt="My photo"
                    className="w-screen rounded-xl"
                    draggable={false}
                    placeholder="blur"
                    quality={50}
                  />
                </motion.div>
                <Text {...staggerProps.children} className="leading-8">
                  Now I work in Rhonda Software as full-stack web developer. I
                  also do my own projects and take a part in different
                  programming championships. I write about coding and web.
                </Text>
                <br />
                <Text {...staggerProps.children} className="leading-8">
                  I made my own Capture The Flag platform for our FarEastCTF
                  championship that we run with students. We have made the most
                  successful CTF in the Russian Far East.
                </Text>
                <br />
                <Text {...staggerProps.children} className="leading-8">
                  I&apos;m studying in Pacific National University, Khabarovsk
                  to become a cybersecurity specialist, but I already have some
                  achievements in this area. I want to create beautiful and
                  stylish, but still useful projects!
                </Text>
              </motion.div>
              <div className="absolute z-[-1] flex h-full w-full items-center justify-center">
                <Light
                  radius={100}
                  color="#FF61AB"
                  opacity={0.4}
                  blur={100}
                  className="-ml-12 mr-64"
                />
                <Light radius={100} color="#6DC0D5" opacity={0.4} blur={100} />
              </div>
            </Container>
            <div className="mb-24 flex w-full flex-col">
              <Autotext text="next.js react vue framer-motion typescript&nbsp;" />
              <Autotext
                text="mongodb perfectionist express.js nodejs&nbsp;"
                direction="right"
              />
              <Autotext text="vite vercel Tailwind visual vuetify deno&nbsp;" />
            </div>
            <Container className="relative flex w-full flex-col">
              <Title {...inViewProps()} className="mb-10">
                Achievements
              </Title>
              <div className="absolute z-[-1] flex h-full w-full items-center justify-center">
                <Light
                  radius={100}
                  color="#F15D5D"
                  opacity={0.4}
                  blur={100}
                  className="-ml-12 mr-64"
                />
                <Light radius={100} color="#F329F8" opacity={0.4} blur={100} />
              </div>
              <motion.div
                {...staggerProps.parent}
                className="grid gap-x-8 gap-y-12 sm:grid-cols-2 md:grid-cols-3"
              >
                <motion.div {...staggerProps.children}>
                  <p>Full-stack developer</p>
                  <p className="mb-2 text-sm">2022-current</p>
                  <p className="font-bold">Rhonda Software</p>
                  <p>Business SPA development</p>
                </motion.div>
                <motion.div {...staggerProps.children}>
                  <p>Main Developer & Organizer</p>
                  <p className="mb-2 text-sm">2018-2021</p>
                  <p className="font-bold">FarEastCTF</p>
                  <p>Capture The Flag championship</p>
                </motion.div>
                <motion.div {...staggerProps.children}>
                  <p>Front-end developer</p>
                  <p className="mb-2 text-sm">2022</p>
                  <p className="font-bold">FogStream Hackathon</p>
                  <p>Hackathon, took a second place</p>
                </motion.div>
                <motion.div {...staggerProps.children}>
                  <p>Full-stack developer, mobile AR developer</p>
                  <p className="mb-2 text-sm">2021</p>
                  <p className="font-bold">EligoVision Hackathon</p>
                  <p>Hackathon, took a second place</p>
                </motion.div>
                <motion.div {...staggerProps.children}>
                  <p>Cybersecurity specialist</p>
                  <p className="mb-2 text-sm">2018-current</p>
                  <p className="font-bold">Pacific Nation University</p>
                  <p>Khabarovsk, student</p>
                </motion.div>
              </motion.div>
            </Container>
          </div>
          <div className="absolute top-0 left-0 h-full w-full overflow-hidden">
            <Container className="relative h-full">
              <Light className="absolute left-0 top-[150px]" opacity={0.1} />
              <Light
                color="rgb(0 62 255)"
                className="absolute right-0 bottom-[300px]"
                opacity={0.15}
              />
            </Container>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export async function getStaticProps() {
  const posts = await getAllPosts(4, [
    'cyberpunkctf',
    'daisukicms',
    'fareastctf',
    'cube2022',
  ]);

  return {
    props: {
      posts,
    },
  };
}
