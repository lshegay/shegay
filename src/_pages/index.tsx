import type { InferGetStaticPropsType } from 'next';
import Image from 'next/image';
import { NextSeo } from 'next-seo';
import { motion } from 'motion/react';

import { inViewProps, staggerProps, transition } from '@/utils';
import { Header, Footer, Container, CardGrid } from '@/_components/layout';
import { Text, Title, Grid, Light } from '@/_components/decorations';
import { Button } from '@/_components/controls';
import { getAllPosts } from '@/utils/ssg';

import Dispersion from '@public/dispersion-03.jpg';
import MyPhoto from '@public/me2.jpg';
import { useRouter } from 'next/router';
import settings from '@/settings';

type PageProps = InferGetStaticPropsType<typeof getStaticProps>;

export default function Home({ posts }: PageProps) {
  const router = useRouter();

  return (
    <>
      <NextSeo />
      <div className="h-screen w-full bg-black text-white">
        {/* Landscape */}
        <Header className="fixed z-50 shrink-0" />
        <div className="relative z-[1] h-full  border-neutral-900">
          <motion.div {...staggerProps.parent} className="relative z-[1] flex h-full flex-col">
            <div className="relative flex h-full flex-col justify-end mb-10 mx-10">
              <motion.p {...staggerProps.children} className="text-xl md:text-3xl xl:text-6xl">
                <span className="bg-white bg-clip-text text-transparent mr-2">Hey! I am</span>
                <span
                  className="font-bold bg-gradient-to-b from-[#e2fd49] to-[#87ff7e]
                      bg-clip-text text-transparent mr-2"
                >
                  Leonid Shegay.
                </span>
              </motion.p>
              <motion.p {...staggerProps.children} className="text-xl md:text-3xl xl:text-6xl mb-7">
                <span className="bg-white bg-clip-text text-transparent">
                  I create really cool products!
                </span>
              </motion.p>
              <div className="font-radwave text-4xl md:text-7xl xl:text-8xl">
                <motion.h2 {...staggerProps.children}>
                  <span
                    className="bg-gradient-to-b from-[#ffc3b5] to-[#ffffff]
                      bg-clip-text text-transparent mr-24"
                  >
                    Engineer
                  </span>
                </motion.h2>
                <motion.div {...staggerProps.children}>
                  <motion.div
                    className="inline-block rounded-xl mr-2"
                    variants={{
                      hovered: { y: -10 },
                      pressed: { y: 0, scale: 0.95 },
                    }}
                    whileHover="hovered"
                    whileTap="pressed"
                    transition={transition}
                  >
                    <motion.a
                      href="/work"
                      className="inline-block bg-gradient-to-b from-[#e2fd49] to-[#87ff7e]
                      bg-clip-text text-transparent"
                      onClick={(e) => {
                        e.preventDefault();
                        router.push('/work', undefined, { scroll: false });
                      }}
                    >
                      Creative
                    </motion.a>
                  </motion.div>
                </motion.div>
                <motion.h2 {...staggerProps.children}>
                  <span
                    className="bg-gradient-to-b from-[#ffffff] to-[#ffc3b5]
                      bg-clip-text text-transparent"
                  >
                    Developer
                  </span>
                </motion.h2>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row p-1 md:p-4 h-[500px]">
              <motion.div
                {...staggerProps.children}
                className="relative flex-grow mb-2 sm:mr-4 h-full"
              >
                <motion.a
                  href="/work"
                  variants={{
                    hovered: { y: -10 },
                    pressed: { y: 0, scale: 0.95 },
                  }}
                  whileHover="hovered"
                  whileTap="pressed"
                  transition={transition}
                  className="
                    flex justify-between
                    relative w-full h-full
                    flex-grow
                    rounded-[20px] p-5
                    overflow-hidden border-[1px] border-[#252525]"
                  onClick={(e) => {
                    e.preventDefault();
                    router.push('/work', undefined, { scroll: false });
                  }}
                >
                  <Text className="text-sm uppercase md:text-3xl">See works</Text>
                  <div className="flex items-end">
                    <div className="border-2 border-white rounded-full opacity-60 p-2 w-10 h-10">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white">
                        <title>Arrow Up</title>
                        <path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z" />
                      </svg>
                    </div>
                  </div>
                  <motion.div
                    className="absolute z-[-1] top-0 left-0"
                    variants={{
                      hovered: { filter: 'grayscale(0%)', opacity: '40%' },
                      pressed: { filter: 'grayscale(0%)', opacity: '10%' },
                    }}
                    style={{ filter: 'grayscale(100%)', opacity: '10%' }}
                    transition={transition}
                  >
                    <Image src={Dispersion} alt="Dispersion" />
                  </motion.div>
                  <div
                    className="absolute top-0 left-0 z-[-2] flex h-full
                      w-full justify-center overflow-hidden dark:bg-[rgba(30,30,30,0.3)]"
                  />
                </motion.a>
              </motion.div>
              <div className="flex flex-col w-full sm:w-1/2">
                <motion.div {...staggerProps.children} className="relative mb-2">
                  <motion.a
                    href={`mailto:${settings.email}`}
                    variants={{
                      hovered: { y: -10 },
                      pressed: { y: 0, scale: 0.95 },
                    }}
                    whileHover="hovered"
                    whileTap="pressed"
                    transition={transition}
                    className="
                      flex justify-between
                      relative w-full
                      flex-grow
                      rounded-[20px] p-5
                      overflow-hidden border-[1px] border-[#252525]"
                  >
                    <Text className="font-bold text-sm uppercase md:text-3xl">
                      Contact me:
                      <span className="ml-2 font-normal normal-case md:text-2xl">lshegay@icloud.com</span>
                    </Text>
                    <div
                      className="absolute top-0 left-0 z-[-2] flex h-full
                        w-full justify-center overflow-hidden dark:bg-[rgba(30,30,30,0.3)]"
                    />
                  </motion.a>
                </motion.div>
                <motion.div {...staggerProps.children} className="relative mb-2">
                  <motion.button
                    variants={{
                      hovered: { y: -10 },
                      pressed: { y: 0, scale: 0.95 },
                    }}
                    whileHover="hovered"
                    whileTap="pressed"
                    transition={transition}
                    className="
                      flex justify-between
                      relative w-full
                      flex-grow
                      rounded-[20px] p-5
                      overflow-hidden border-[1px] border-[#252525]"
                    onClick={(e) => {
                      document.querySelector('#section-about')?.scrollIntoView({
                        behavior: 'smooth',
                      });
                    }}
                  >
                    <Text className="font-bold text-sm uppercase md:text-3xl">About me</Text>
                    <div
                      className="absolute top-0 left-0 z-[-2] flex h-full
                        w-full justify-center overflow-hidden dark:bg-[rgba(30,30,30,0.3)]"
                    />
                  </motion.button>
                </motion.div>
              </div>
            </div>
          </motion.div>
          <div className="absolute top-0 left-0 h-full z-[-1] w-full overflow-hidden">
            <Grid className="absolute top-0 left-0 z-0 h-full w-full" />
          </div>
        </div>
        {/* Works */}
        <section
          id="section-essentials"
          className="relative w-full border-b-[1px] py-32
          dark:border-y-neutral-900 dark:bg-black dark:text-white"
        >
          <Container className="relative z-10 flex w-full flex-col">
            <div className="mb-[70px] w-full md:w-[500px]">
              <Title {...inViewProps()} className="mb-10">
                My essential works and projects
              </Title>
              <Text {...inViewProps()} className="leading-8">
                I am full-stack web developer and computer security specialist. I love programming,
                but also I love creating beautiful and many functional apps. Here you can see all my
                recent projects I’m really proud of!
              </Text>
            </div>
            <CardGrid className="mb-9" posts={posts} />
            <div className="text-center">
              <Button href="/work" className="px-[75px] py-[18px]" scroll={false}>
                More work
              </Button>
            </div>
          </Container>
          <div className="absolute top-0 left-0 h-full w-full overflow-hidden">
            <Container className="relative h-full">
              {/* <Light
                radius={100}
                color="#FF61AB"
                opacity={0.4}
                blur={100}
                className="-ml-12 mr-64"
              /> */}
              <Light
                radius={100}
                color="#a42b9a"
                opacity={0.4}
                blur={100}
                className="absolute left-1/2 top-1/2"
              />
              <Light
                color="#FF61AB"
                className="absolute left-0 bottom-[200px]"
                radius={100}
                opacity={0.4}
              />
              {/* <Light
                color="#FF61AB"
                className="absolute right-0 top-[200px]"
                radius={100}
                opacity={0.4}
              /> */}
            </Container>
          </div>
        </section>
        {/* About me */}
        <section
          id="section-about"
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
                  As a child, I loved to play games and watch cartoons online. I realized that web
                  technology really made my childhood a little more fun! Now I understand the impact
                  this has had on my life.
                </Text>
                <br />
                <Text {...staggerProps.children} className="leading-8">
                  I am now a full-stack web engineer, game and software developer. I love everything
                  related to IT-technologies!
                </Text>
                <br />
                <Text {...staggerProps.children} className="leading-8">
                  I have a passion, but also a perfectionist vision. I want to create beautiful and
                  functional applications and websites that will make the world a little better.
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
                  I previously worked at Rhonda Software as a fullstack developer (Django + Vue) on
                  a business analytics platform. I migrated the whole frontend from Vue 2 to Vue 3
                  using the new Composition API.
                </Text>
                <br />
                <Text {...staggerProps.children} className="leading-8">
                  Now I work in Messaggio as frontend web developer. I also do my own projects and
                  take a part in different programming championships. I write about coding and web.
                </Text>
                <br />
                <Text {...staggerProps.children} className="leading-8">
                  I made my own Capture The Flag platform for our FarEastCTF championship that we
                  run with students. We have made the most successful CTF in the Russian Far East.
                </Text>
                <br />
                <Text {...staggerProps.children} className="leading-8">
                  I am a cybersecurity specialist who graduated from Pacific National University in
                  2024.
                </Text>
              </motion.div>
            </Container>

            <Container className="relative flex w-full flex-col">
              <Title {...inViewProps()} className="mb-10">
                Achievements
              </Title>

              <motion.div
                {...staggerProps.parent}
                className="grid gap-x-8 gap-y-12 sm:grid-cols-2 md:grid-cols-3"
              >
                <motion.div {...staggerProps.children}>
                  <p>Frontend developer</p>
                  <p className="mb-2 text-sm">2023-current</p>
                  <p className="font-bold">Messaggio</p>
                  <p>Highload Multichannel Messaging Platform</p>
                </motion.div>
                <motion.div {...staggerProps.children}>
                  <p>Full-stack developer</p>
                  <p className="mb-2 text-sm">2022-2023</p>
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
                  <p className="mb-2 text-sm">2018-2024</p>
                  <p className="font-bold">Pacific Nation University</p>
                  <p>Khabarovsk, student</p>
                </motion.div>
              </motion.div>
            </Container>
          </div>
          <div className="absolute top-0 left-0 h-full w-full overflow-hidden">
            <Container className="relative h-full">
              <Light
                radius={100}
                color="#FF61AB"
                opacity={0.4}
                blur={100}
                className="absolute top-[750px] left-1/2 ml-[100px] mb-[25%]"
              />

              <Light
                radius={100}
                color="#ff9662"
                opacity={0.4}
                blur={100}
                className="absolute top-[750px] right-1/2  mr-[100px] mb-[25%]"
              />
              <Light
                radius={100}
                color="#F15D5D"
                opacity={0.4}
                blur={100}
                className="absolute bottom-[25%] left-1/2 ml-[100px]"
              />
              <Light
                radius={100}
                color="#F329F8"
                opacity={0.4}
                blur={100}
                className="absolute bottom-[25%] right-1/2  mr-[100px]"
              />
              <Light className="absolute left-0 top-[150px]" opacity={0.1} />
              <Light color="#dd9662" className="absolute right-0 bottom-[300px]" opacity={0.15} />
            </Container>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}

export async function getStaticProps() {
  const posts = await getAllPosts(4, ['cyberpunk', 'developer_feedback', 'fareastctf', 'cube2022']);

  return {
    props: {
      posts,
    },
  };
}
