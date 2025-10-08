'use client';

import { useRef, useState, useLayoutEffect, useCallback } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import classNames from 'classnames';

export type Props = {
  children: React.ReactNode;
  scrollY: number;
  className?: string;
};

export default function ScrollContainer(props: Props) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const ghostRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll();
  const transform = useTransform(scrollYProgress, [0, 1], [0, -props.scrollY]);
  const physics = { damping: 15, mass: 0.47, stiffness: 55 };
  const spring = useSpring(transform, physics);

  return (
    <div className="relative">
      <motion.div
        ref={scrollRef}
        className={classNames('absolute will-change-transform', props.className)}
        style={{ x: spring }}
      >
        {props.children}
      </motion.div>
      <div ref={ghostRef} style={{ height: `${props.scrollY}px` }} />
    </div>
  );
}
