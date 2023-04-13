import { useEffect, useMemo, useRef, useState } from 'react';
import type { DivProps } from 'react-html-props';
import Image from 'next/image';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useDebounce } from 'use-debounce';
import cl from 'classnames';

import Light from '../decorations/Light';
import { useRouter } from 'next/router';
import type { Thumbnail } from '@/utils/ssg';
import Skeleton from '../decorations/Skeleton';

type Props = DivProps & {
  title: string;
  description: string;
  link: string;
  images?: Thumbnail[];
  color?: string;
};

export default function Card({
  className,
  title,
  link,
  description,
  images = [],
  color = '#EA5400',
}: Props) {
  const router = useRouter();
  const card = useRef<HTMLAnchorElement>(null);
  const [width, setWidth] = useState(350);
  const [lagWidth] = useDebounce(width, 500);

  const { scrollYProgress } = useScroll({
    target: card,
    offset: ['start end', 'start center'],
  });
  const y = useSpring(useTransform(scrollYProgress, [0, 1], [100, 0]), {
    stiffness: 50,
  });

  useEffect(() => {
    const listener = () => {
      if (card.current) setWidth(card.current.offsetWidth);
    };
    listener();

    if (typeof window != 'undefined')
      window.addEventListener('resize', listener);

    return () => {
      if (typeof window != 'undefined') {
        window.removeEventListener('resize', listener);
      }
    };
  }, [card]);

  const imgElements = useMemo(() => {
    const contentWidth = lagWidth - 44 * 2 - 2;
    const sum = images.reduce(
      (accumulator, { width }) => accumulator + width,
      0
    );
    const dif =
      images.length > 1 && contentWidth < sum
        ? (sum - contentWidth) / (images.length - 1)
        : 0;

    const margin = contentWidth > sum ? (contentWidth - sum) / 2 : 0;

    let accumulateWidth = 0;

    return images.map((img, index, { length }) => {
      const element = (
        <motion.div
          key={img.src}
          className="absolute bg-white dark:bg-black"
          style={{
            y,
            zIndex: length - index,
            left: margin + accumulateWidth - index * dif,
            bottom: length == 1 ? undefined : 0,
            display:
              index > 0 && images[0].width > contentWidth ? 'none' : 'block',
          }}
        >
          <motion.div
            style={{
              opacity: scrollYProgress,
            }}
          >
            <Image
              {...img}
              alt={img.alt}
              className="relative z-[1] rounded-t-lg shadow-xl shadow-black"
              style={{
                borderBottomLeftRadius: length == 1 ? '0.5rem' : undefined,
                borderBottomRightRadius: length == 1 ? '0.5rem' : undefined,
              }}
              draggable={false}
            />
          </motion.div>
        </motion.div>
      );

      accumulateWidth += img.width;
      return element;
    });
  }, [images, lagWidth, scrollYProgress, y]);

  const move = () => {
    router.push(link);
  };

  return (
    <motion.a
      href={link}
      ref={card}
      className={cl(
        `relative h-[345px] rounded-[20px]
        overflow-hidden border-[1px] border-[#303030] text-left`,
        className
      )}
      whileHover={{ y: -10 }}
      whileTap={{ y: 0, scale: 0.95 }}
      transition={{
        type: 'spring',
        damping: 20,
        stiffness: 100,
      }}
      onClick={move}
      onKeyPress={(e) => {
        if (e.key == 'Enter') move();
      }}
    >
      <div
        className="absolute top-0 left-0 z-[1] h-full
          w-full bg-gradient-to-b from-transparent via-transparent to-black opacity-80"
      />
      <div className="relative flex h-full flex-col px-11 pt-7">
        <div className="z-[2] mb-7">
          <h3 className="mb-1 text-xl font-bold text-black dark:text-white">
            {title}
          </h3>
          <p className="dark:text-neutral-400">{description}</p>
        </div>
        <div className="relative z-0 flex h-full w-full">{imgElements}</div>
      </div>
      <div
        className="absolute top-0 left-0 z-[-1] flex h-full
        w-full justify-center overflow-hidden dark:bg-black"
      >
        <Light
          color={color}
          className="mt-[-50px]"
          blur={70}
          opacity={0.4}
          radius={80}
        />
      </div>
    </motion.a>
  );
}
