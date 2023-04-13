import Head from 'next/head';
import Image from 'next/image';
import { motion } from 'framer-motion';

import { useFloat, inViewProps, staggerProps } from '@/utils';
import { Header, Footer, Container, CardGrid } from '@/components/layout';
import { Text, Title, Grid, Autotext, Light } from '@/components/decorations';
import { ButtonLink } from '@/components/controls';

import MyPhoto from '@public/me.jpg';
import Sphere from '@public/sphere.png';

type PageProps = InferGetStaticPropsType<typeof getStaticProps>;

export default function Home({ posts }: PageProps) {
  const photo = useFloat<HTMLImageElement>();
  const sphere = useFloat<HTMLImageElement>(50, 50);

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
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
                className="font-radwave text-2xl  md:text-4xl"
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
              <motion.h1
                {...staggerProps.children}
                className="mb-2 bg-gradient-to-b from-[#FF75D8] via-[#FF75D8] to-[#FF00B8]
              bg-clip-text font-roadrage text-6xl text-transparent md:text-7xl"
              >
                Developer with taste
              </motion.h1>
              <Text
                {...staggerProps.children}
                className="md:w-[60%] md:text-xl"
              >
                I’m Leonid Shegay and I’m versatile software engineer and
                full-stack web developer focused on making beautiful and
                functional apps
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
              <Container className="flex w-full flex-col items-center justify-between py-7 text-center md:flex-row md:py-0 md:text-left">
                <Text className="font-radwave text-3xl">CRT NEWS</Text>
                <Text className="uppercase">
                  Currently based in Russia • Working in Rhonda Software •
                  Making web applications
                </Text>
              </Container>
              <Light
                color="#632CFF"
                className="absolute right-0 -top-1/3"
                opacity={0.1}
              />
            </div>
          </div>
          <div className="absolute top-0 left-0 h-full w-full overflow-hidden">
            <Grid className="absolute top-0 left-0 h-full w-full" />
            <Container className="relative h-full">
              <Light className="absolute left-0 top-[10%]" />
              <Light color="#FF2121" className="absolute right-0 top-1/3" />
            </Container>
          </div>
        </div>
        {/* Works */}
        <div
          className="relative w-full border-b-[1px] py-24
          dark:border-y-neutral-900 dark:bg-black dark:text-white"
        >
          <div className="relative z-10 flex h-full flex-col">
            <Container className="w-full">
              <div className="mb-[70px] w-full md:w-[500px]">
                <Title {...inViewProps()} className="mb-4">
                  My essential works and projects
                </Title>
                <Text {...inViewProps()} className="leading-8">
                  I am full-stack web developer and computer security
                  specialist. I love programming, but also I love creating
                  beautiful and many functional apps. Here you can see all my
                  recent projects I’m really proud of!
                </Text>
              </div>
              <CardGrid className="mb-9" posts={posts} />
              <div className="text-center">
                <ButtonLink
                  href="/work"
                  className="px-[75px] py-[18px]"
                  scroll={false}
                >
                  More work
                </ButtonLink>
              </div>
            </Container>
          </div>
          <div className="absolute top-0 left-0 h-full w-full overflow-hidden">
            <Container className="relative h-full">
              <Light className="absolute left-0 bottom-[-50px]" opacity={0.1} />
              <Light
                color="rgb(0 62 255)"
                className="absolute right-0 top-[20px]"
                opacity={0.1}
              />
            </Container>
          </div>
        </div>
        {/* About me */}
        <div
          className="relative w-full border-b-[1px] py-24 dark:border-y-neutral-900
          dark:bg-black dark:text-white"
        >
          <div className="relative z-10 flex h-full flex-col">
            <Container className="mb-24 flex w-full flex-col md:flex-row">
              <div className="mb-10 w-full shrink-0 md:mb-0 md:w-[500px]">
                <Title {...inViewProps()} className="mb-4">
                  About me
                </Title>
                <Text {...inViewProps()} className="leading-8">
                  As a child, I loved to play games and watch cartoons online. I
                  realized that web technology really made my childhood a little
                  more fun! Now I understand the impact this has had on my life,
                  <br />
                  <br />
                  I am now a full-stack web engineer, game and software
                  developer. I love everything related to IT-technologies!
                  <br />
                  <br />I have a passion, but also a perfectionist vision. I
                  want to create beautiful and functional applications and
                  websites that will make the world a little better.
                </Text>
              </div>
              <div className="relative flex w-full items-center justify-center">
                <motion.div
                  className="relative z-[2]"
                  style={{
                    x: photo.x,
                    y: photo.y,
                    opacity: photo.opacity,
                  }}
                >
                  <Image
                    ref={photo.anchor}
                    src={MyPhoto}
                    alt="My photo"
                    className="w-screen rounded-3xl md:h-[352px] md:w-auto"
                    sizes="(max-width: 768px) 100vw, 264px"
                    draggable={false}
                  />
                </motion.div>
                <div className="absolute z-[1] flex h-full w-full items-center justify-center">
                  <Light
                    radius={100}
                    color="#F15D5D"
                    opacity={0.5}
                    blur={100}
                  />
                  <Light
                    radius={100}
                    color="#F329F8"
                    opacity={0.5}
                    blur={100}
                  />
                </div>
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
            <Container className="flex w-full flex-col md:mb-24 md:flex-row">
              <div className="relative z-0 mb-10 flex w-full items-center justify-center md:mb-0">
                <motion.div
                  className="relative z-[2] mix-blend-plus-lighter"
                  style={{
                    x: sphere.x,
                    y: sphere.y,
                    opacity: sphere.opacity,
                  }}
                  drag
                  dragSnapToOrigin
                  dragElastic={0.2}
                  dragConstraints={{
                    left: 100,
                    top: 100,
                    right: 100,
                    bottom: 100,
                  }}
                >
                  <Image
                    ref={sphere.anchor}
                    src={Sphere}
                    alt="Sphere"
                    className="h-[288px]"
                    draggable={false}
                  />
                </motion.div>
                <div className="absolute z-[1] flex h-full w-full items-center justify-center">
                  <Light
                    radius={100}
                    color="#F15D5D"
                    opacity={0.5}
                    blur={100}
                  />
                  <Light
                    radius={100}
                    color="#F329F8"
                    opacity={0.5}
                    blur={100}
                  />
                </div>
              </div>
              <div className="mb-[70px] w-full shrink-0 md:w-[500px]">
                <Text {...inViewProps()} className="leading-8">
                  Now I work in Rhonda Software as full-stack web developer. I
                  also do my own projects and take a part in different
                  programming championships. I write about coding and web.
                  <br />
                  <br />
                  I made my own Capture The Flag platform for our FarEastCTF
                  championship that we run with students. We have made the most
                  successful CTF in the Russian Far East.
                  <br />
                  <br />
                  I&apos;m studying in Pacific National University, Khabarovsk
                  to become a cybersecurity specialist, but I already have some
                  achievements in this area. I want to create beautiful and
                  stylish, but still useful projects!
                </Text>
              </div>
            </Container>
            <Container className="flex w-full flex-col">
              <Title {...inViewProps()} className="mb-6">
                Achievements
              </Title>
              <motion.div
                {...staggerProps.parent}
                className="grid gap-8 sm:grid-cols-2 md:grid-cols-3"
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
              <Light className="absolute left-0 top-[-150px]" />
              <Light
                color="rgb(0 62 255)"
                className="absolute right-0 bottom-[20px]"
              />
            </Container>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

import { getAllPosts } from '@/utils/ssg';
import { InferGetStaticPropsType } from 'next';

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
