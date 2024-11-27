'use client';

import { useMemo, useState, Fragment } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'motion/react';

import type { Post } from '@/utils/ssg';
import { staggerProps, transition } from '@/utils';
import { Text } from '@/components/ui/Typography';

import Dispersion from '@public/dispersion-03.jpg';

import { LandingBackground } from './LandingBackground';
import Card from '@/components/ui/Card';
import { debounce } from 'es-toolkit';

export type LandingProps = {
  posts: Omit<Post, 'source'>[];
};

const buttons = {
  works: {
    from: '#eab308',
    to: '#c09207',

    label: 'Works',
    href: '/works',
  },
  about: {
    from: '#ffffff',
    to: '#c4c4c4',

    label: 'About me',
    href: '/about',
  },
  contact: {
    from: '#ef4444',
    to: '#bf3636',

    label: 'Contact me',
    href: 'mailto:lshegay@icloud.com',
  },
  default: {
    from: '#e2fd49',
    to: '#87ff7e',

    label: 'Creative',
    href: undefined,
  },
};

export default function Landing(props: LandingProps) {
  const post = props.posts.at(0);

  const [label, setLabel] = useState<'default' | 'works' | 'about' | 'contact'>('default');
  const [labelKey, setLabelKey] = useState(0);

  const labelElement = useMemo(() => {
    const btn = buttons[label];

    return (
      <motion.div
        className="inline-block
          bg-clip-text text-transparent"
        style={{
          backgroundImage: `linear-gradient(to bottom, ${btn.from}, ${btn.to})`,
        }}
        initial={{ y: -100, scale: 0.9 }}
        animate={{ y: 0, scale: 1 }}
        whileHover={{ y: -10 }}
        exit={{ y: 100, scale: 0.9 }}
        transition={{ type: 'spring', mass: 0.5, stiffness: 100, damping: 10 }}
      >
        {btn.label}
      </motion.div>
    );
  }, [label]);

  const buttonElements = useMemo(() => {
    const setDefault = debounce(() => {
      setLabel('default');
      setLabelKey((v) => v + 1);
    }, 200);

    return Object.keys(buttons)
      .filter((id) => buttons[id as keyof typeof buttons].href)
      .map((id) => {
        const btn = buttons[id as keyof typeof buttons];
        let hovered = false;

        return (
          <motion.div
            key={id}
            variants={{
              hidden: { opacity: 0, y: -50 },
              show: {
                opacity: 1,
                y: 0,
                transition: { type: 'spring', damping: 50 },
              },
            }}
            className="relative flex-grow mb-2 mr-2"
          >
            <Card
              href={btn.href}
              className="!px-5 justify-center"
              onMouseEnter={() => {
                setDefault.cancel();

                setLabel(id as keyof typeof buttons);
                setLabelKey((v) => v + 1);

                hovered = true;
              }}
              onMouseLeave={() => {
                setDefault();

                hovered = false;
              }}
              onTouchStart={() => {
                if (hovered) return;

                setDefault.cancel();

                setLabel(id as keyof typeof buttons);
                setLabelKey((v) => v + 1);
              }}
              onTouchEnd={() => {
                setDefault();

                hovered = false;
              }}
              onFocus={() => {
                if (hovered) return;

                setDefault.cancel();

                setLabel(id as keyof typeof buttons);
                setLabelKey((v) => v + 1);
              }}
              onBlur={() => {
                if (hovered) return;

                setDefault();
              }}
            >
              <div
                className="rounded-full p-2 w-10 h-10"
                style={{ border: `2px solid ${btn.from}` }}
              >
                <motion.div
                  className="p-2 w-full h-full rounded-full"
                  style={{ background: btn.from }}
                  variants={{
                    initial: { opacity: 0.6 },
                    hovered: { opacity: 1 },
                  }}
                />
              </div>
            </Card>
          </motion.div>
        );
      });
  }, []);

  return (
    <section className="relative h-full">
      <motion.div {...staggerProps.parent} className="relative z-[1] flex h-full flex-col">
        <div className="relative flex h-full flex-col justify-end mb-10 mx-5 md:mx-20">
          <motion.p {...staggerProps.children} className="text-xl md:text-3xl xl:text-6xl">
            <span className="bg-white bg-clip-text text-transparent mr-2">Hey! I am</span>
            <span
              className="font-bold bg-gradient-to-b from-[#ffffff] to-[#ffffff] 
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
            <motion.div {...staggerProps.children} className="overflow-hidden">
              <AnimatePresence mode="popLayout">
                <div key={labelKey} className="overflow-hidden">
                  {labelElement}
                </div>
              </AnimatePresence>
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
        <div className="flex flex-col md:flex-row mx-5 md:mx-20 mb-20">
          <motion.div
            variants={{
              hidden: { opacity: 0, y: -50 },
              show: {
                opacity: 1,
                y: 0,
                transition: { type: 'spring', damping: 50 },
              },
            }}
            className="relative flex-grow mb-2 md:mr-2 h-full"
          >
            <Card href={post?.redirect || `/works/${post?.slug}`} className="justify-between">
              <Text className="font-bold uppercase md:text-3xl">Latest work</Text>
              <div className="flex items-end">
                <div className="border-2 border-yellow-500 rounded-full p-2 w-10 h-10">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#eab308">
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
            </Card>
          </motion.div>
          <div className="flex md:flex-row">{buttonElements}</div>
        </div>
      </motion.div>

      {/* Background */}
      <LandingBackground state={label} />
    </section>
  );
}
