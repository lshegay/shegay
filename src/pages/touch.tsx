import { motion } from 'framer-motion';
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

import { Light, Text, Title } from '@/components/decorations';
import { Container, Footer, Header } from '@/components/layout';
import { SOCIALS } from '@/components/layout/Footer';
import { staggerProps, transition } from '@/utils';

import mac from '@public/mac.png';

export default function Touch() {
  return (
    <>
      <Head>
        <title>Get in Touch</title>
      </Head>
      <div className="h-full w-full dark:bg-black dark:text-white">
        <div
          className="relative z-[1] flex flex-col
          border-b-[1px] dark:border-y-neutral-900"
        >
          <Header className="relative shrink-0" />
          <Container className="relative mt-56 flex flex-col border-b-[1px] pb-20 dark:border-y-neutral-900 md:flex-row">
            <motion.div
              className="mb-[70px] w-full shrink-0 md:w-[500px]"
              {...staggerProps.parent}
            >
              <Title className="mb-10 text-5xl" {...staggerProps.children}>
                You have a job?
              </Title>
              <motion.p className="text-lg" {...staggerProps.children}>
                send me a message at
                <Link
                  href="mailto:lshegay@icloud.com"
                  className="ml-2 rounded-lg py-2 px-3 text-xl font-bold
                    transition-colors ease-out
                  dark:hover:bg-neutral-800/50 dark:hover:text-white
                  dark:active:bg-transparent dark:active:text-neutral-600"
                >
                  lshegay@icloud.com
                </Link>
              </motion.p>
            </motion.div>
            <div className="md:mx-auto md:w-1/3">
              <Text className="mb-4">
                I&apos;m always doing different work, and here you can see all
                my fresh new developments.
              </Text>
              <div className="flex text-3xl">
                {SOCIALS.map(({ icon, link }) => (
                  <Link
                    key={link}
                    href={link}
                    className="mr-4 -ml-2 rounded-lg p-2 font-bold
                transition-colors ease-out
                dark:hover:bg-neutral-800/50 dark:hover:text-white
                dark:active:bg-transparent dark:active:text-neutral-600"
                  >
                    {icon}
                  </Link>
                ))}
              </div>
            </div>
          </Container>
          <Link
            href="/"
            className="relative w-full overflow-hidden dark:bg-black"
            scroll={false}
          >
            <motion.div
              variants={{ hovered: {}, pressed: {} }}
              whileHover="hovered"
              whileTap="pressed"
            >
              <motion.div
                variants={{ hovered: { opacity: 1 } }}
                initial={{ opacity: 0 }}
                className="absolute z-[1] flex h-full w-full items-center justify-center"
              >
                <h1 className="mr-10 text-5xl font-bold">
                  Let&apos;s get back
                </h1>
                <FaArrowRight className="text-2xl" />
              </motion.div>
              <motion.div
                className="relative z-0"
                variants={{
                  hovered: { scale: 1.1, opacity: 0.5 },
                  pressed: { scale: 1, opacity: 0.2 },
                }}
                transition={transition}
              >
                <Image src={mac} alt="picture of mac" />
              </motion.div>
            </motion.div>
          </Link>
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
