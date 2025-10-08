'use client';

import { useMemo } from 'react';
import { motion } from 'motion/react';
import { FaChevronDown } from 'react-icons/fa';

import { staggerProps } from '@/utils';

import { LandingBackground } from './landing/LandingBackground';

export default function Landing() {
  const scrollDownElement = useMemo(() => {
    const text = 'Scroll Down';

    return (
      <motion.div className="flex">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ repeat: Number.POSITIVE_INFINITY, repeatType: 'reverse', type: 'spring' }}
        >
          <FaChevronDown className="mr-2" />
        </motion.div>
        {text.split('').map((char, index) => {
          return (
            <motion.span
              className="inline-block whitespace-pre"
              // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
              key={index}
              initial={{ y: 0 }}
              animate={{ y: -4 }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                repeatType: 'reverse',
                delay: 0.1 * index,
                repeatDelay: (0.1 * text.length) / 2,
                type: 'spring',
              }}
            >
              {char}
            </motion.span>
          );
        })}
      </motion.div>
    );
  }, []);

  return (
    <section className="relative h-full">
      <motion.div {...staggerProps.parent} className="relative z-[1] flex h-full flex-col">
        <div className="relative flex h-full flex-col justify-center md:justify-end text-center md:text-left mb-[-180px] md:mb-10 mx-5 md:mx-20">
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
                  bg-clip-text text-transparent"
              >
                Engineer
              </span>
            </motion.h2>
            <motion.div {...staggerProps.children} className="overflow-hidden">
              <span
                className="inline-block bg-clip-text text-transparent
                  bg-gradient-to-b from-[#e2fd49] to-[#87ff7e]"
              >
                Creative
              </span>
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
          <div className="text-lg font-radwave flex w-full justify-center mt-8">
            {scrollDownElement}
          </div>
        </div>
      </motion.div>

      {/* Background */}
      <LandingBackground />
    </section>
  );
}
