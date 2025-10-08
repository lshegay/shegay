'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

import Container from '@/components/ui/Container';
import { Text, Title } from '@/components/ui/Typography';
import { inViewProps } from '@/utils';

import MyPhoto from '@public/me2.jpg';
import RussiaIcon from '@public/icons/russia.png';
import MessaggioIcon from '@public/icons/messaggio.png';
import RhondaIcon from '@public/icons/rhonda.png';
import CTFIcon from '@public/icons/ctf.png';
import JSIcon from '@public/icons/js.png';
import TSIcon from '@public/icons/typescript.png';
import VueIcon from '@public/icons/vue.png';
import NuxtIcon from '@public/icons/nuxt.svg';
import ReactIcon from '@public/icons/react.svg';
import NextJSIcon from '@public/icons/nextjs.png';
import NodeIcon from '@public/icons/node.png';
import BunIcon from '@public/icons/bun.png';
import GolangIcon from '@public/icons/golang.png';
import PythonIcon from '@public/icons/python.png';

export default function About() {
  return (
    <>
      <div className="bg-black text-white py-24">
        <Container>
          <motion.div
            className="text-lg md:text-xl mx-auto mb-10 w-full shrink-0 leading-8
              md:mb-0 md:max-w-[600px]"
          >
            <Title {...inViewProps} className="text-4xl md:text-6xl mb-10">
              About me
            </Title>

            <Text {...inViewProps}>
              I am <b>Leonid Shegay</b>, a web engineer based in{' '}
              <span className="text-nowrap">
                <Image
                  src={RussiaIcon}
                  alt="Russia"
                  width="24"
                  height="24"
                  className="inline-block align-sub mr-[2px]"
                />
                <b>Russia</b>
              </span>
              .
            </Text>
            <br />
            <Text {...inViewProps}>
              At the moment I work at{' '}
              <span className="text-nowrap">
                <Image
                  src={MessaggioIcon}
                  alt="messaggio"
                  width="20"
                  height="20"
                  className="inline-block align-sub mr-1"
                />
                <b>Messaggio</b>
              </span>{' '}
              as a front-end developer. However, I am now gradually delving into{' '}
              <b>microservice design</b> on golang.
            </Text>
            <br />
            <Text {...inViewProps}>
              Before that, I was part of{' '}
              <span className="text-nowrap">
                <Image
                  src={RhondaIcon}
                  alt="rhonda"
                  height="18"
                  className="inline-block mr-[1px]"
                />
                <b>Rhonda Software</b>
              </span>{' '}
              as a full-stack developer. I also take part in various small projects and startups.
            </Text>
            <br />
            <Text {...inViewProps}>
              My first serious work was the{' '}
              <span className="text-nowrap">
                <Image
                  src={CTFIcon}
                  alt="ctf"
                  width="24"
                  height="24"
                  className="inline-block align-sub mr-[2px]"
                />
                <b>Capture The Flag</b>
              </span>{' '}
              platform, which I developed alone specifically for our student cybersecurity
              championships. Our team has implemented <b>several successful</b> CTFs in the Russian
              Far East.
            </Text>
            <br />
            <Text {...inViewProps}>
              I also graduated from Pacific National University as a <b>cybersecurity specialist</b>
              . My thesis was about implementing a messenger based on <b>decentralization</b> and
              self-written <b>blockchain</b>.
            </Text>

            <motion.div
              className="relative z-[2] my-20 mx-auto rounded-2xl border-[1px]
                    border-[#343434] bg-[#2323239c] p-3
                     shadow-xl md:max-w-[330px]"
              {...inViewProps}
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

            <Text {...inViewProps}>
              First of all, I like to make <b>beautiful</b> and convenient web-sites that would feel
              as nice as, for example, native iOS applications. I feel the same way about writing
              clean code.
            </Text>
            <br />
            <Text {...inViewProps}>
              Yes, I am very good at{' '}
              <span className="text-nowrap">
                <Image
                  src={JSIcon}
                  alt="js"
                  width="24"
                  height="24"
                  className="inline-block align-sub mr-[2px]"
                />
                <b>JavaScript</b>
              </span>
              ,{' '}
              <span className="text-nowrap">
                <Image
                  src={TSIcon}
                  alt="ts"
                  width="24"
                  height="24"
                  className="inline-block align-sub mr-[2px]"
                />
                <b>TypeScript</b>
              </span>
              ,{' '}
              <span className="text-nowrap">
                <Image
                  src={VueIcon}
                  alt="vue"
                  width="22"
                  height="22"
                  className="inline-block align-sub mr-[2px]"
                />
                <b>Vue</b>
              </span>
              ,{' '}
              <span className="text-nowrap">
                <Image
                  src={NuxtIcon}
                  alt="nuxt"
                  width="24"
                  height="24"
                  className="inline-block align-sub mr-1"
                />
                <b>Nuxt</b>
              </span>
              ,{' '}
              <span className="text-nowrap">
                <Image
                  src={ReactIcon}
                  alt="react"
                  width="20"
                  height="20"
                  className="inline-block align-[inherit] mr-1"
                />
                <b>React</b>
              </span>
              ,{' '}
              <span className="text-nowrap">
                <Image
                  src={NextJSIcon}
                  alt="nextjs"
                  width="20"
                  height="20"
                  className="inline-block align-[inherit] mr-1"
                />
                <b>Next.js</b>
              </span>
              ,{' '}
              <span className="text-nowrap">
                <Image
                  src={NodeIcon}
                  alt="node"
                  width="24"
                  height="24"
                  className="inline-block align-top mr-[3px]"
                />
                <b>Node</b>
              </span>
              ,{' '}
              <span className="text-nowrap">
                <Image
                  src={BunIcon}
                  alt="bun"
                  width="24"
                  height="24"
                  className="inline-block align-sub mr-[2px]"
                />
                <b>Bun</b>
              </span>
              , and I also understand{' '}
              <span className="text-nowrap">
                <Image
                  src={GolangIcon}
                  alt="go"
                  height="12"
                  className="inline-block align-[inherit] mr-[2px]"
                />
                <b>Go</b>
              </span>{' '}
              and{' '}
              <span className="text-nowrap">
                <Image
                  src={PythonIcon}
                  alt="python"
                  width="24"
                  height="24"
                  className="inline-block align-top mr-[2px]"
                />
                <b>Python</b>
              </span>{' '}
              quite well. I think I am quite versatile because I can easily adapt to new
              technologies, and this is my <b>important feature</b>.
            </Text>
            <br />
            <Text {...inViewProps}>
              I also like listening to electronic music, playing Smash and collecting art books.
            </Text>
          </motion.div>
        </Container>
      </div>
    </>
  );
}
