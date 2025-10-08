'use client';

import { useRef, useState, useLayoutEffect, useCallback, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import classNames from 'classnames';
import { debounce } from 'es-toolkit';

export type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function ScrollContainer(props: Props) {
  const ghostRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState(0);
  const [screenHeight, setScreenHeight] = useState(0);

  useLayoutEffect(() => {
    const resizeFunction = () => {
      setScreenHeight(window.innerHeight);
    };

    resizeFunction();
    window.addEventListener('resize', resizeFunction);

    return () => window.removeEventListener('resize', resizeFunction);
  });

  useLayoutEffect(() => {
    if (!contentRef.current) return;

    setContentHeight(contentRef.current.scrollHeight);

    const resizeObserver = new ResizeObserver(
      (entries) => {
        for (const entry of entries) {
          setContentHeight(entry.target.scrollHeight);
        }
      },
    );

    resizeObserver.observe(contentRef.current);

    return () => resizeObserver.disconnect();
  }, []);

  const { scrollYProgress } = useScroll();
  const transform = useTransform(scrollYProgress, [0, 1], [0, -contentHeight + screenHeight]);
  const spring = useSpring(transform, { mass: 0.1 });

  return (
    <div className="relative">
      <motion.div
        ref={contentRef}
        className={classNames('fixed top-0 left-0 will-change-transform', props.className)}
        style={{ y: spring }}
      >
        {props.children}
      </motion.div>
      <div ref={ghostRef} style={{ height: contentHeight }} />
    </div>
  );
}
