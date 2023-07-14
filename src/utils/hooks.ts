import { useRef } from 'react';
import { MotionValue, useScroll, useSpring, useTransform } from 'framer-motion';

export function useScrollFloat<T extends HTMLElement>(fromX = -50, fromY = 50) {
  const anchor = useRef<T>(null);
  const { scrollYProgress } = useScroll({
    target: anchor,
    offset: ['start end', 'start center'],
  });
  const y = useSpring(useTransform(scrollYProgress, [0, 1], [fromY, 0]), {
    stiffness: 50,
  });
  const x = useSpring(useTransform(scrollYProgress, [0, 1], [fromX, 0]), {
    stiffness: 50,
  });

  return {
    anchor,
    opacity: scrollYProgress,
    y,
    x,
  };
}

export function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [distance, -distance]);
}
